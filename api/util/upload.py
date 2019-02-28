# todo convert to python 3 : https://github.com/teragonaudio/id3reader
import datetime
import os

from id3reader.id3reader import Reader
import django
django.setup()
from api.models import GameSeries, Album, Track


def upsert_album(path):
    print("album")
    print(path)
    user_series = input("What game series is this attributed to? Leave blank if none.\n")
    game_series = GameSeries(title=user_series).save()
    album_image = None
    year_recorded = None
    for root, dirs, files in os.walk(path):
        for f in files:
            if ".mp3" in f:
                id3 = Reader(os.path.join(root, f))
                album_title = Reader.getValue(id3, "album")
                year_recorded = Reader.getValue(id3, "Year recorded")
            if ".jpg" in f:
                album_image = os.path.join(root, f)

    publish_date = datetime.datetime.strptime(year_recorded, '%Y') if year_recorded else None

    a = Album(title=album_title, game_id=None, publish_date=publish_date,image_path=album_image, series=game_series)
    a.save()

    for root, dirs, files in os.walk(path):
        for f in files:
            if ".mp3" in f:
                upsert_track((os.path.join(root, f)), a)


def upsert_track(path, album):
    id3 = Reader(path)
    title = Reader.getValue(id3, "title")
    artist = Reader.getValue(id3, "performer")
    Track(title=title, artist=artist, album_id=album).save()


if __name__ == '__main__':
    for root, dirs, files in os.walk("/Users/rock/Dropbox/Public/OST/", topdown=False):
        if root == "/Users/rock/Dropbox/Public/OST/":
            for f in dirs:
                upsert_album(os.path.join(root, f))
