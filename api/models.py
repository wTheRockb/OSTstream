from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = models.CharField(max_length=200, default='username', unique=True)
    password = models.CharField(max_length=200, default='password')


class GameSeries(models.Model):
    title = models.CharField(max_length=200, unique=True)


class Game(models.Model):
    title = models.CharField(max_length=200, unique=True)
    publisher = models.CharField(max_length=200, null=True)
    series = models.ForeignKey(GameSeries, on_delete=models.SET_NULL, null=True)
    publish_date = models.DateTimeField('date published', null=True)


class Album(models.Model):
    title = models.CharField(max_length=200, unique=True)
    game_id = models.ForeignKey(Game, on_delete=models.CASCADE, null=True)
    publish_date = models.DateTimeField('date published', null=True)
    # Consider making this slugfield https://docs.djangoproject.com/en/2.1/ref/models/fields/#slugfield
    image_path = models.CharField(max_length=200, null=True)
    series = models.ForeignKey(GameSeries, on_delete=models.SET_NULL, null=True)


class Track(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    album_id = models.ForeignKey(Album, on_delete=models.CASCADE)


class Playlist(models.Model):
    title = models.CharField(max_length=200)
    songs = models.ManyToManyField(Track, through='PlaylistMembership')
    owner_id = models.ForeignKey(User, on_delete=models.CASCADE)


class PlaylistMembership(models.Model):
    track_id = models.ForeignKey(Track, on_delete=models.CASCADE)
    playlist_id = models.ForeignKey(Playlist, on_delete=models.CASCADE)
    date_added = models.DateField()
    # todo unique on those 2 fields

# TODO: RecentlyPlayed / Play history
