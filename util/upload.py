import os
from oststream.oststream import db
from util.id3reader import Reader

conn = db.connection()

def upsert_album(path): 
    print "album"
    print path
    cur = conn.cursor()
    album_image = 0
    for root, dirs, files in os.walk(path):
        for f in files:
            if ".mp3" in f:
                id3 = Reader(os.path.join(root, f))
                album_title = Reader.getValue(id3, "album")
            if ".jpg" in f:
                album_image = os.path.join(root, f)
    if album_image:
        cur.execute("INSERT INTO albums (title, image_path) VALUES (%s, %s) ON CONFLICT (title) DO UPDATE SET (title, image_path, updated_at) = (%s, %s, now()) RETURNING id;", [album_title, album_image, album_title, album_image])
        album_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
    else:
        cur.execute("INSERT INTO albums (title) VALUES (%s) ON CONFLICT (title) DO UPDATE SET (title, updated_at) = (%s, now()) RETURNING id;", [album_title, album_title])
        album_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
    for root, dirs, files in os.walk(path):
        for f in files:
            if ".mp3" in f:
                upsert_track((os.path.join(root, f)), album_id)

def upsert_track(path, album_id):
    print "track"
    print path
    cur = conn.cursor()
    id3 = Reader(path)
    title = Reader.getValue(id3, "title")
    artist = Reader.getValue(id3, "performer")
    album = Reader.getValue(id3, "album")
    cur.execute("INSERT INTO tracks (title, artist, album_id, path) VALUES (%s, %s, %s, %s) ON CONFLICT (title, artist, album_id) DO UPDATE SET (title, artist, album_id, path) = (%s, %s, %s, %s);", [title, artist, album_id, path, title, artist, album_id, path])
    conn.commit()
    cur.close()

if __name__ == '__main__':
    for root, dirs, files in os.walk("/Users/rock/Dropbox/Public/OST/", topdown=False):
        if root == "/Users/rock/Dropbox/Public/OST/":
            for f in dirs:
                upsert_album(os.path.join(root, f))
                