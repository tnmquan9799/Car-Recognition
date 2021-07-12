from django.contrib import admin
from .models import Car, Brand, Segment, Origin, Engine, VTypeEngine, FuelType, DriveType, ImageAlbum


admin.site.register(Brand)
admin.site.register(Segment)
admin.site.register(Origin)
admin.site.register(Engine)
admin.site.register(VTypeEngine)
admin.site.register(FuelType)
admin.site.register(DriveType)


class ImageAlbumAdmin(admin.StackedInline):
    model = ImageAlbum


@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    inlines = [ImageAlbumAdmin]

    class Meta:
        model = Car


@admin.register(ImageAlbum)
class ImageAlbumAdmin(admin.ModelAdmin):
    pass
