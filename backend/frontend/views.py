from django.shortcuts import render
from django.http import HttpResponse, HttpRequest, response
from django.conf import settings
import importlib
from django.views.decorators.csrf import ensure_csrf_cookie



@ensure_csrf_cookie
def index(request):
    return render(request, 'frontend/index.html')


def save_file(request):
    # fileitem = form['file']
    # if fileitem.filename:
    #     fn = os.path.basename(fileitem.filename)
    #     open('./images' + fn, 'wb').write(fileitem.file.read())
    #     message = 'The file "' + fn + '" was uploaded successfully'
    #     return render(message, 'frontend/index.html',{'message':message})
    
    # else:
    #     message = 'No file was uploaded'
    #     return render(message, 'frontend/index.html',{'message':message})
    data=request.data
    return HttpRequest(data)
