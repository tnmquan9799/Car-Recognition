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

    # if request.method == "POST":
    #     if request.POST.get("save"):
    #         for item in ls.item_set.all():
    #             p = request.POST

    #             if "clicked" == p.get("c"+str(item.id)):
    #                 item.complete = True
    #             else:
    #                 item.complete = False

    #             if "text" + str(item.id) in p:
    #                 item.text = p.get("text" + str(item.id))

    #             item.save()

    #     elif request.POST.get("add"):
    #         newItem = request.POST.get("new")
    #         if newItem != "":
    #             ls.item_set.create(text=newItem, complete=False)
    #         else:
    #             print("invalid")

    return render(request, "main/index.html", {"lmao": lmao})


def view(request):
    lmao = Car.objects.all()
    return render(request, "main/view.html", {"lists": lmao})


def home(request):
    return render(request, "main/home.html", {})


def detail(request):
    lmao = Car.objects.get(id=id)
    return render(request, "main/detail.html", {"lmao": lmao})


# def view(request):
#     lmao = Car.objects.all()
#     return render(request, "main/view.html", {"lists": lmao})
