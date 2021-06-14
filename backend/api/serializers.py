from rest_framework import serializers
from .models import Car,Brand, Engine, VTypeEngine


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('id', 'carName', 'brand', 'segment',
                  'origin','yearEdition', 'engines', 'hoursePower', 'torque', 'fuelType', 'driveType', 'highLight', 'detail')


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
        fields = ('id', 'name', 'VType','detail')

# class CreateRoomSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Room
#         fields = ('guest_can_pause', 'votes_to_skip')


# class UpdateRoomSerializer(serializers.ModelSerializer):
#     code = serializers.CharField(validators=[])

#     class Meta:
#         model = Room
#         fields = ('guest_can_pause', 'votes_to_skip', 'code')
