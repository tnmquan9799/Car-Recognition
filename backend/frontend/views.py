from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.conf import settings
import subprocess
import importlib
from django.views.decorators.csrf import ensure_csrf_cookie
import cgi
import os
import cgitb
import json


@ensure_csrf_cookie
def index(request):
    return render(request, 'frontend/index.html')


def save_file(request):
    SAVED_PATH = "../test-folder/"
    fileitem = request.FILES['file']
    filename = request.FILES['file'].name
    file_extension = filename.split('.')[1]
    filename = "001." + file_extension
    folderpath = "../test-folder/001." + file_extension
    fn = os.path.basename(filename)
    open(SAVED_PATH + fn, 'wb').write(fileitem.file.read())
    subprocess.call(["python", "../demo.py", folderpath])
    return HttpResponse('The file "' + fn + '" was uploaded successfully')


def cleanJson(data):
    data = [
        {
            "label": "N/A",
            "prob": ""
        }
    ]
    with open('../results.json', 'w') as file:
        json.dump(data, file, indent=4)
    return HttpResponse ("endline")