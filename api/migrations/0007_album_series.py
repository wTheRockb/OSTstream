# Generated by Django 2.1.7 on 2019-02-28 04:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20190228_0427'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='series',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.GameSeries'),
        ),
    ]