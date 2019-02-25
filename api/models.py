from django.db import models
import json

from django.contrib.auth.models import AbstractUser
from django.forms.models import model_to_dict


class User(AbstractUser):
    username = models.CharField(max_length=200, default='username', unique=True)
    password = models.CharField(max_length=200, default='password')

    def __str__(self):
        return json.dumps(model_to_dict(self))


class GameSeries(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return json.dumps(model_to_dict(self))


class Game(models.Model):
    title = models.CharField(max_length=200)
    publisher = models.CharField(max_length=200)
    series = models.ForeignKey(GameSeries, on_delete=models.SET_NULL, null=True)
    publish_date = models.DateTimeField('date published', null=True)

    def __str__(self):
        return json.dumps(model_to_dict(self))


class Album(models.Model):
    title = models.CharField(max_length=200)
    game_id = models.ForeignKey(Game, on_delete=models.CASCADE)
    publish_date = models.DateTimeField('date published')
    # Consider making this slugfield https://docs.djangoproject.com/en/2.1/ref/models/fields/#slugfield
    image_path = models.CharField(max_length=200)

    def __str__(self):
        return json.dumps(model_to_dict(self))


class Track(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    album_id = models.ForeignKey(Album, on_delete=models.CASCADE)

    def __str__(self):
        return json.dumps(model_to_dict(self))


class Playlist(models.Model):
    title = models.CharField(max_length=200)
    songs = models.ManyToManyField(Track, through='PlaylistMembership')
    owner_id = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return json.dumps(model_to_dict(self))


class PlaylistMembership(models.Model):
    track_id = models.ForeignKey(Track, on_delete=models.CASCADE)
    playlist_id = models.ForeignKey(Playlist, on_delete=models.CASCADE)
    date_added = models.DateField()

    def __str__(self):
        return json.dumps(model_to_dict(self))

# TODO: RecentlyPlayed / Play history
