from django.views.generic.edit import CreateView
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.utils import timezone
from .models import Brand, Segment, Origin, Engine, FuelType, DriveType
from .models import TireSize, Car
from django.views.generic.detail import DetailView
# Create your views here.


def index(request, id):
    lmao = Car.objects.get(id=id)

    return render(request, "main/index.html", {"lmao": lmao})


def view(request):
    lmao = Car.objects.all()
    return render(request, "main/view.html", {"lists": lmao})


def home(request):
    if request.method == 'POST' and 'run_script' in request.POST:
        from path_to_script import function_to_run
        function_to_run()
    return render(request, "main/home.html", {})


def detail(request):
    lmao=Car.objects.get(id=id)
    return render(request, "main/detail.html", {"lmao": lmao})


# def view(request):
#     lmao = Car.objects.all()
#     return render(request, "main/view.html", {"lists": lmao})
