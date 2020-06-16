# OSTStream
A webapp for streaming video game soundtracks, with features to support game-music and background listening.


## Developer Setup

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

