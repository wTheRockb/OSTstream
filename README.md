# OSTStream
A webapp for streaming video game soundtracks, with features to support game-music and background listening.


## Developer Setup

### Overview

The backend is a django rest framework supplying application data for React and Typescript frontend.
Postgresql for storing application data, while media (album thumbnails, songs) are stored in AWS S3.


### Instructions

database:

`create database oststream`
connect to it (`\c oststream`)
```
create user api;
alter role api with login;
alter role api with password 'api';
python manage.py makemigrations;
python manage.py migrate;
```


todo:
database role management

user auth tokens

user auth tokens restricting data

