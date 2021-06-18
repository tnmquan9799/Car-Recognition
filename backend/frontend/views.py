from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.conf import settings
import importlib
from django.views.decorators.csrf import ensure_csrf_cookie
import cgi
import os
import cgitb; cgitb.enable()
form = cgi.FieldStorage()


@ensure_csrf_cookie
def index(request):
    return render(request, 'frontend/index.html')


def save_file(request):
    # fileitem = form['file']
    message = 'The file was uploaded successfully'
    return render(request, 'frontend/index.html',{'message':message})
    # if fileitem.filename:
    #     fn = os.path.basename(fileitem.filename)
    #     open('./images' + fn, 'wb').write(fileitem.file.read())
    #     message = 'The file "' + fn + '" was uploaded successfully'
    #     return render(message, 'frontend/index.html',{'message':message})
    
    # else:
    #     message = 'No file was uploaded'
    #     return render(message, 'frontend/index.html',{'message':message})
