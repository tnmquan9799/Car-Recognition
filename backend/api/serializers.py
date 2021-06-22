from rest_framework import serializers
from .models import Car, Brand, Engine, VTypeEngine, Segment


class CarSerializer(serializers.ModelSerializer):
    brand = serializers.ReadOnlyField(source='brand.name')
    segment = serializers.ReadOnlyField(source='segment.name')
    origin = serializers.ReadOnlyField(source='origin.name')
    engine = serializers.ReadOnlyField(source='VTypeEngine.name')

    class Meta:
        modelV = VTypeEngine
        fields = ('id', 'name')

    if engine == "V Engine":
        engine.replace(engine, serializers.ReadOnlyField(source='VTypeEngine.name'))

    class Meta:
        model = Car
        fields = ('id', 'carName', 'brand', 'segment',
                  'origin', 'yearEdition', 'engine', 'hoursePower', 'torque', 'fuelType', 'driveType', 'highLight', 'detail')


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

# class CreateRoomSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Room
#         fields = ('guest_can_pause', 'votes_to_skip')


# class UpdateRoomSerializer(serializers.ModelSerializer):
#     code = serializers.CharField(validators=[])

#     class Meta:
#         model = Room
#         fields = ('guest_can_pause', 'votes_to_skip', 'code')
