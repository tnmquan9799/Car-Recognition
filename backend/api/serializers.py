from rest_framework import serializers
from .models import Car, Brand, Engine, VTypeEngine, Segment, FuelType, DriveType, Origin, ImageAlbum


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ('id', 'name', 'detail')


class EngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Engine
        fields = ('id', 'name', 'detail')


class VTypeEngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = VTypeEngine
        fields = ('id', 'name', 'VType', 'detail')


class SegmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Segment
        fields = ('id', 'name', 'detail')


class FuelTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FuelType
        fields = ('id', 'name', 'detail')


class DriveTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DriveType
        fields = ('id', 'name', 'detail')


class OriginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Origin
        fields = ('id', 'name', 'detail')


class ImageAlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageAlbum
        fields = ('id', 'post', 'image')


class CarSerializer(serializers.ModelSerializer):
    brand = BrandSerializer()
    segment = SegmentSerializer()
    origin = OriginSerializer()
    fuelType = FuelTypeSerializer()
    driveType = DriveTypeSerializer()
    # image = ImageAlbumSerializer()
    # engine = serializers.ReadOnlyField(source='engine.name')

    class Meta:
        model = Car
        fields = ('id', 'image', 'carName', 'brand', 'segment',
                  'origin', 'yearEdition', 'engine', 'hoursePower', 'torque', 'fuelType', 'driveType', 'highLight', 'detail')
