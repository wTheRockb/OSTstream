# Generated by Django 3.1.3 on 2020-11-10 06:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_auto_20201109_2149'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='track',
            name='order',
        ),
    ]