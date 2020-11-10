# todo convert to python 3 : https://github.com/teragonaudio/id3reader
import datetime
import os


import django
import psycopg2
from mutagen.easyid3 import EasyID3
from mutagen.mp3 import MP3

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "oststream.settings")
django.setup()

from api.models import GameSeries, Album, Track


def upsert_album(path):
    print("album")
    print(path)
    user_series = input("What game series is this attributed to? Leave blank if none.\n")

    game_series = GameSeries(title=user_series)
    try:
        game_series.save()
    except django.db.utils.IntegrityError:
        pass
    album_image = None
    album_title = None
    year_recorded = None
    for root, dirs, files in os.walk(path):
        for f in files:
            if ".mp3" in f:
                audio = MP3(os.path.join(root, f), ID3=EasyID3)
                album_title = audio['album'][0]
                year_recorded = audio['date'][0]
            if ".jpg" in f:
                album_image = os.path.join(root, f)

    publish_date = datetime.datetime.strptime(year_recorded, '%Y') if year_recorded else None

    print(album_title)
    print(publish_date)
    print(album_image)
    print(game_series)
    a = Album(
        title=album_title,
        publish_date=publish_date,
        image_path=album_image,
        series=None,
    )
    try:
        a.save()
    except django.db.utils.IntegrityError:
        pass


    for root, dirs, files in os.walk(path):
        for f in files:
            if ".mp3" in f:
                upsert_track((os.path.join(root, f)), a)


def upsert_track(path, album):
    audio = MP3(os.path.join(root, path), ID3=EasyID3)
    title = audio['title']
    artist = audio['artist']
    track_num = audio['tracknumber'][0]
    duration = audio.info.length

    t = Track(
        title=title,
        artist=artist,
        album=album,
        track_number=track_num,
        duration=duration,
    )
    try:
        t.save()
    except (django.db.utils.IntegrityError, ValueError):
        pass

if __name__ == '__main__':
    root_path = "D:\Dropbox\Public\OST"  ## todo parametrize this
    for root, dirs, files in os.walk(root_path, topdown=False):
        if root == root_path:
            for f in dirs:
                upsert_album(os.path.join(root, f))
