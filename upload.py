import os
import psycopg2
import urlparse
from id3reader import Reader

##DATABASE CONNECTION
mode = "local"

if mode == "prod":
	urlparse.uses_netloc.append("postgres")
	url = urlparse.urlparse(os.environ["DATABASE_URL"])

	conn = psycopg2.connect(
	        database=url.path[1:],
	        user=url.username,
	        password=url.password,
	        host=url.hostname,
	        port=url.port
	)

	cur = conn.cursor()
	temp = cur.execute("SELECT * FROM tracks;")
	print temp
if mode == "local":
	conn = psycopg2.connect("dbname=ost")
	cur = conn.cursor()

def upsert_album(path):
	album_image = 0
	for root, dirs, files in os.walk(path):
		for f in files:
			if ".mp3" in f:
				id3 = Reader(os.path.join(root, f))
				album_title = Reader.getValue(id3, "album")
			if ".jpg" in f:
				album_image = os.path.join(root, f)
	if album_image:
		cur.execute("INSERT INTO api.albums (title, image_path) VALUES (%s, %s) ON CONFLICT (title) DO UPDATE SET (title, image_path, updated_at) = (%s, %s, now()) RETURNING id;", [album_title, album_image, album_title, album_image])
		album_id = cur.fetchone()[0]
		conn.commit()
	else:
		cur.execute("INSERT INTO api.albums (title) VALUES (%s) ON CONFLICT (title) DO UPDATE SET (title, updated_at) = (%s, now()) RETURNING id;", [album_title, album_title])
		album_id = cur.fetchone()[0]
		conn.commit()
	for root, dirs, files in os.walk(path):
		for f in files:
			if ".mp3" in f:
				upsert_track((os.path.join(root, f)), album_id)

def upsert_track(path, album_id):
	id3 = Reader(path)
	title = Reader.getValue(id3, "title")
	artist = Reader.getValue(id3, "performer")
	album = Reader.getValue(id3, "album")
	cur.execute("INSERT INTO api.tracks (title, artist, album_id, path) VALUES (%s, %s, %s, %s) ON CONFLICT (title, artist, album_id) DO UPDATE SET (title, artist, album_id, path) = (%s, %s, %s, %s);", [title, artist, album_id, path, title, artist, album_id, path])
	conn.commit()

if __name__ == '__main__':
	for root, dirs, files in os.walk("/Users/wbutler/Dropbox/Public/OST/", topdown=False):
	    if root == "/Users/wbutler/Dropbox/Public/OST/":
	    	assert len(files) == 1
	    	for f in dirs:
	    		upsert_album(os.path.join(root, f))
	    		