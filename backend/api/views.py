from django.shortcuts import render
from rest_framework import generics, status
from .serializers import CarSerializer
from .models import Car
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

# Create your views here.


class CarView(generics.ListAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer