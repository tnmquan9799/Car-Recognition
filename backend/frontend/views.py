from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.conf import settings


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
