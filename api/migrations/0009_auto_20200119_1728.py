# Generated by Django 3.0.1 on 2020-01-19 17:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20190228_0522'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='gameseries',
            name='id',
        ),
        migrations.AlterField(
            model_name='album',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='game',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='gameseries',
            name='title',
            field=models.CharField(max_length=200, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='playlist',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='playlistmembership',
            name='playlist_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Playlist', unique=True),
        ),
        migrations.AlterField(
            model_name='playlistmembership',
            name='track_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Track', unique=True),
        ),
        migrations.AlterField(
            model_name='track',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False, unique=True),
        ),
    ]