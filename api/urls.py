from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('series/<int:series_id>/', views.series_detail, name='series_detail'),
]
