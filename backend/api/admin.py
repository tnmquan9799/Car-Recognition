from django.contrib import admin
from .models import Car, Brand, Segment, Origin, Engine,VTypeEngine, FuelType, DriveType, TireSize

admin.site.register(Car)
admin.site.register(Brand)
admin.site.register(Segment)
admin.site.register(Origin)
admin.site.register(Engine)
admin.site.register(VTypeEngine)
admin.site.register(FuelType)
admin.site.register(DriveType)
admin.site.register(TireSize)