# Generated by Django 3.1.3 on 2020-11-10 05:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_auto_20201109_2118'),
    ]

    operations = [
        migrations.RenameField(
            model_name='album',
            old_name='game_id',
            new_name='game',
        ),
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='first name'),
        ),
    ]