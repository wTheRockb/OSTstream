from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, GameSeries

admin.site.register(User, UserAdmin)
admin.site.register(GameSeries)
