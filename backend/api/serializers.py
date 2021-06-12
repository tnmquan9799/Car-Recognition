from rest_framework import serializers
from .models import Car


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('id', 'carName', 'brand', 'segment',
                  'origin', 'engines', 'hoursePower', 'torque', 'fuelType', 'driveType', 'tireSize', 'highLight', 'detail')


# class CreateRoomSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Room
#         fields = ('guest_can_pause', 'votes_to_skip')


# class UpdateRoomSerializer(serializers.ModelSerializer):
#     code = serializers.CharField(validators=[])

#     class Meta:
#         model = Room
#         fields = ('guest_can_pause', 'votes_to_skip', 'code')
