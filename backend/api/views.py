from django.shortcuts import render
from rest_framework import generics, status
from .serializers import CarSerializer, BrandSerializer, EngineSerializer, VTypeEngineSerializer
from .models import Car, Brand, Engine, VTypeEngine
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

# Create your views here.


class CarView(generics.ListAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer


class BrandView(generics.ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer


class EngineView(generics.ListAPIView):
    queryset = Engine.objects.all()
    serializer_class = EngineSerializer


class VTypeEngineView(generics.ListAPIView):
    queryset = VTypeEngine.objects.all()
    serializer_class = VTypeEngineSerializer


# class SearchView(generics.ListAPIView):
#     queryset = VTypeEngine.objects.all()
#     serializer_class = VTypeEngineSerializer
