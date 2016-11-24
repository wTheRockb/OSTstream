CREATE SCHEMA api;

CREATE TABLE api.tracks (
    id SERIAL PRIMARY KEY,
    title TEXT,
    artist TEXT,
    path TEXT UNIQUE,
    album_id INTEGER,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    unique(title, artist,  album_id)
);

CREATE TABLE api.albums (
    id SERIAL PRIMARY KEY,
    title TEXT UNIQUE NOT NULL,
    game_source TEXT,
    game_series TEXT,
    image_path TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE api.users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    pass TEXT
);

CREATE TABLE api.playlists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    owner_id INTEGER NOT NULL
);

CREATE TABLE api.tracks_playlist (
    id SERIAL PRIMARY KEY,
    track_id INTEGER NOT NULL,
    playlist_id INTEGER NOT NULL
);

CREATE TABLE api.recently_played (
    id SERIAL PRIMARY KEY,
    track_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    played_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


ALTER TABLE api.tracks ADD CONSTRAINT track_album_constraint FOREIGN KEY (album_id) REFERENCES api.albums(id);
ALTER TABLE api.tracks_playlist ADD CONSTRAINT track_playlist_pid FOREIGN KEY (playlist_id) REFERENCES api.playlists(id);
ALTER TABLE api.tracks_playlist ADD CONSTRAINT track_playlist_tid FOREIGN KEY (track_id) REFERENCES api.tracks(id);



