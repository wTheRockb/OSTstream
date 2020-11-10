from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = models.CharField(max_length=200, default='username', unique=True)
    password = models.CharField(max_length=200, default='password')


class GameSeries(models.Model):
    title = models.CharField(max_length=200, primary_key=True)


class Game(models.Model):
    id = models.IntegerField(unique=True, primary_key=True)
    title = models.CharField(max_length=200, unique=True)
    publisher = models.CharField(max_length=200, null=True)
    series = models.ForeignKey(GameSeries, related_name='games', on_delete=models.SET_NULL, null=True)
    publish_date = models.DateTimeField('date published', null=True)


class Album(models.Model):
    id = models.IntegerField(unique=True, primary_key=True)
    title = models.CharField(max_length=200, unique=True)
    game = models.ForeignKey(Game, related_name='albums', on_delete=models.CASCADE, null=True)
    publish_date = models.DateTimeField('date published', null=True)
    # Consider making this slugfield https://docs.djangoproject.com/en/2.1/ref/models/fields/#slugfield
    image_path = models.CharField(max_length=200, null=True)
    series = models.ForeignKey(GameSeries, related_name='albums', on_delete=models.SET_NULL, null=True)


class Track(models.Model):
    id = models.IntegerField(unique=True, primary_key=True)
    order = models.IntegerField()
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    album = models.ForeignKey(Album, related_name='tracks', on_delete=models.CASCADE)
    album_art_path = models.CharField(max_length=600, null=True)
    file_path = models.CharField(max_length=600, blank=True, null=True)
    duration = models.IntegerField(blank=True, null=True)
    track_number = models.IntegerField(blank=True, null=True)


class Playlist(models.Model):
    id = models.IntegerField(unique=True, primary_key=True)
    title = models.CharField(max_length=200)
    songs = models.ManyToManyField(Track, through='PlaylistMembership')
    owner_id = models.ForeignKey(User, related_name='playlists', on_delete=models.CASCADE)


class PlaylistMembership(models.Model):
    track_id = models.ForeignKey(Track, on_delete=models.CASCADE)
    playlist_id = models.ForeignKey(Playlist, on_delete=models.CASCADE)
    date_added = models.DateField()
    class meta:
        unique_together = ['track_id', 'playlist_id']
    # todo unique on those 2 fields

# TODO: RecentlyPlayed / Play history
