from django.urls import path
from .views import CarView, BrandView, EngineView, SegmentView, VTypeEngineView, DriveTypeView, FuelTypeView, Fetcher, ImageAlbumView,detail_view,CarSearchView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # path('car', CarView.as_view()),
    # path('brand', BrandView.as_view()),
    # path('engine', EngineView.as_view()),
    # path('vtypeengine', VTypeEngineView.as_view()),
    # path('segment', SegmentView.as_view()),
    # path('fueltype', FuelTypeView.as_view()),
    # path('drivetype', DriveTypeView.as_view()),
    path('fetcher', Fetcher.as_view()),
    path('imagealbum', ImageAlbumView.as_view()),
    path('detail_view', detail_view.as_view()),
    path('carsearch', CarSearchView.as_view()),
]
