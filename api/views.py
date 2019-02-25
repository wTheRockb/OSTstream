from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def series_detail(request, series_id):
    return HttpResponse("you're looking at series %s" % series_id)