from flask import Flask
import db
app = Flask(__name__)

conn = db.connection()

@app.route("/")
def hello():
    
    return "Hello World!"

if __name__ == "__main__":
    app.run()


@app.route("/tracks")
def serve_tracks():
	cur = conn.cursor()
	songs = cur.execute("SELECT * FROM tracks;")
	