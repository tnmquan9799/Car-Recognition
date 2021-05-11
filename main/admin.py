from django.contrib import admin
from .models import Brand, Segment, Origin, Engine, FuelType, DriveType
from .models import TireSize, Car
# Register your models here.
admin.site.register(Brand)
admin.site.register(Segment)
admin.site.register(Origin)
admin.site.register(Engine)
admin.site.register(FuelType)
admin.site.register(DriveType)
admin.site.register(TireSize)
admin.site.register(Car)
