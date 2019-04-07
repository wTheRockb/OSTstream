"""oststream URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers, serializers, viewsets

from api.models import GameSeries, Album


# REST FRAMEWORK
class GameSeriesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GameSeries
        fields = ['title']


class GameSeriesViewSet(viewsets.ModelViewSet):
    queryset = GameSeries.objects.all()
    serializer_class = GameSeriesSerializer


class AlbumSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Album
        fields = ['title']


class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer


router = routers.DefaultRouter()
router.register(r'game_series', GameSeriesViewSet)
router.register(r'albums', AlbumViewSet)

# URLS
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
