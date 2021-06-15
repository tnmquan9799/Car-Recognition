from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.conf import settings
import importlib
from django.views.decorators.csrf import ensure_csrf_cookie


@ensure_csrf_cookie
def index(request):
    return render(request, 'frontend/index.html')