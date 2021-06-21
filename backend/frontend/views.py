from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.conf import settings
from subprocess import call
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
    file_extension = filename.split('.')[1]
    filename = "001." + file_extension
    folderpath = "test-folder/001." + file_extension
    fn = os.path.basename(filename)
    open(SAVED_PATH + fn, 'wb').write(fileitem.file.read())
    call(["python", "../demo.py", folderpath])
    print("Running demo")
    return HttpResponse('The file "' + fn + '" was uploaded successfully')


