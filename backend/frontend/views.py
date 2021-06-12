from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.conf import settings
import importlib

def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')