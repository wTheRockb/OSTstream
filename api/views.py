from django.http import HttpResponse
from api.models import Album
from api.models import Track
import json
from django.core import serializers


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def series_detail(request, series_id):
    return HttpResponse("you're looking at series %s" % series_id)


def album_close_up(request, album_id):
    album_data = serializers.serialize("json",  [Album.objects.get(id=album_id)])
    track_data = serializers.serialize("json",  Track.objects.filter(album=album_id).values())
    payload = {
        "album": album_data,
        "tracks": track_data
    }


    return HttpResponse(json.dumps(payload))