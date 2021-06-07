from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.conf import settings
import importlib

def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def search(response):
    moduleName = input('../../../pre_process.py')
    importlib.import_module(moduleName)
    response = exec(open('pre_process.py').read())
    return response
     