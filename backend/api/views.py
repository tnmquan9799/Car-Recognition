from django.shortcuts import render
from rest_framework import generics, status
from .serializers import CarSerializer, BrandSerializer, EngineSerializer, VTypeEngineSerializer, SegmentSerializer, FuelTypeSerializer, DriveTypeSerializer
from .models import Car, Brand, Engine, VTypeEngine, Segment, FuelType, DriveType
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.filters import OrderingFilter, SearchFilter
from django.http import JsonResponse, HttpResponse
import json

# Create your views here.
from django.template import RequestContext


class CarView(generics.ListAPIView):
    queryset = Car.objects.all().select_related()
    serializer_class = CarSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('$carName', 'brand__name', 'origin__name')

    def get_queryset(self):
        cars = Car.objects.all()
        return cars

    def get(self, request, *args, **kwargs):
        try:
            id = request.query_params["id"]
            if id != None:
                car = Car.objects.get(id=id)
                serializer = CarSerializer(car)
        except:
            cars = self.get_queryset()
            serializer = CarSerializer(cars, many=True)

        return Response(serializer.data)


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


class FuelTypeView(generics.ListAPIView):
    queryset = FuelType.objects.all()
    serializer_class = FuelTypeSerializer


class DriveTypeView(generics.ListAPIView):
    queryset = DriveType.objects.all()
    serializer_class = DriveTypeSerializer


class ResultView(generics.ListAPIView):
    with open('../results.json') as json_file:
        data = json.load(json_file)
        carName = data[0]['label']
        print("CHAY ROI")
    queryset = Car.objects.filter(carName=carName)
    serializer_class = CarSerializer

    
