# Generated by Django 2.1.7 on 2019-02-25 03:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('publish_date', models.DateTimeField(verbose_name='date published')),
                ('image_path', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('publisher', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='GameSeries',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Playlist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='PlaylistMembership',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_added', models.DateField()),
                ('playlist_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Playlist')),
            ],
        ),
        migrations.CreateModel(
            name='Track',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('artist', models.CharField(max_length=200)),
                ('album_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Album')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.AddField(
            model_name='playlistmembership',
            name='track_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Track'),
        ),
        migrations.AddField(
            model_name='playlist',
            name='owner_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.User'),
        ),
        migrations.AddField(
            model_name='playlist',
            name='songs',
            field=models.ManyToManyField(through='api.PlaylistMembership', to='api.Track'),
        ),
        migrations.AddField(
            model_name='game',
            name='series',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.GameSeries'),
        ),
        migrations.AddField(
            model_name='album',
            name='game_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Game'),
        ),
    ]
