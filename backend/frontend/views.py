from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.conf import settings
import importlib
from django.views.decorators.csrf import ensure_csrf_cookie
import cgi
import os
import cgitb



@ensure_csrf_cookie
def index(request):
    return render(request, 'frontend/index.html')


def save_file(request):
    SAVED_PATH = "../test-folder/"
    fileitem = request.FILES['file']
    filename = request.FILES['file'].name
    fn = os.path.basename(filename)
    open(SAVED_PATH + fn, 'wb').write(fileitem.file.read())
    return HttpResponse('The file "' + fn + '" was uploaded successfully')
