from django.urls import path
from .views import CarView, BrandView, EngineView, SegmentView, VTypeEngineView, ResultView, DriveTypeView, FuelTypeView

urlpatterns = [
    path('car', CarView.as_view()),
    path('brand', BrandView.as_view()),
    path('engine', EngineView.as_view()),
    path('vtypeengine', VTypeEngineView.as_view()),
    path('segment', SegmentView.as_view()),
    path('fueltype', FuelTypeView.as_view()),
    path('drivetype',DriveTypeView.as_view()),
    path('result', ResultView.as_view()),
]
