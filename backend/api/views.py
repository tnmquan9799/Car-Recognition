from django.shortcuts import render
from rest_framework import generics, status
from .serializers import CarSerializer, BrandSerializer, EngineSerializer, VTypeEngineSerializer,SegmentSerializer
from .models import Car, Brand, Engine, VTypeEngine, Segment
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.filters import OrderingFilter, SearchFilter
from django.http import JsonResponse

# Create your views here.
from django.template import RequestContext


class CarView(generics.ListAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('$carName','brand__name','origin__name')

class BrandView(generics.ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer


class EngineView(generics.ListAPIView):
    queryset = Engine.objects.all()
    serializer_class = EngineSerializer


class VTypeEngineView(generics.ListAPIView):
    queryset = VTypeEngine.objects.all()
    serializer_class = VTypeEngineSerializer

class SegmentView(generics.ListAPIView):
    queryset = Segment.objects.all()
    serializer_class = SegmentSerializer

# class SearchView(generics.ListAPIView):
#     queryset = VTypeEngine.objects.all()
#     serializer_class = VTypeEngineSerializer
