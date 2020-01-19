from django.urls import include, path
from django.conf.urls import url
from . import views
from rest_framework import routers, serializers, viewsets
from api.models import GameSeries, Album, Track


# REST FRAMEWORK
class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ['id', 'order', 'title', 'artist', 'album_id']


class TrackViewSet(viewsets.ModelViewSet):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer


class GameSeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameSeries
        fields = ['title']


class GameSeriesViewSet(viewsets.ModelViewSet):
    queryset = GameSeries.objects.all()
    serializer_class = GameSeriesSerializer


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ['id', 'title', 'game_id', 'publish_date', 'image_path', 'series']


class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class AlbumCloseUpSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True, read_only=True)

    class Meta:
        model = Album
        fields = ['id', 'title', 'game_id', 'publish_date', 'image_path', 'series', 'tracks']

class AlbumCloseUpViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumCloseUpSerializer


router = routers.DefaultRouter()
router.register(r'game_series', GameSeriesViewSet)
router.register(r'albums', AlbumViewSet)
router.register(r'album-close-up', AlbumCloseUpViewSet)
router.register(r'tracks', TrackViewSet)


urlpatterns = [
    path('', views.index, name='index'),
    path('series/<int:series_id>/', views.series_detail, name='series_detail'),
    url(r'^', include(router.urls)),
]
