
from django.urls import path
from rest_framework import serializers, viewsets, routers

from . import models
from . import views

urlpatterns = [
    path('', views.index, name='index'),
]



class TrackSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Track
        fields = ('url', 'username', 'email', 'is_staff')


# ViewSets define the view behavior.
class TrackViewSet(viewsets.ModelViewSet):
    queryset = models.Track.objects.all()
    serializer_class = TrackSerializer

webRouter = routers.DefaultRouter()
webRouter.register(r'tracks', TrackViewSet)
