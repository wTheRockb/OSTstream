# Generated by Django 2.1.7 on 2019-02-28 04:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_game_publish_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='image_path',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
