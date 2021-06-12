from django.urls import path
from .views import CarView,BrandView,EngineView, VTypeEngineView

urlpatterns = [
    path('car', CarView.as_view()),
    path('brand', BrandView.as_view()),
    path('engine', EngineView.as_view()),
    path('vtypeengine', VTypeEngineView.as_view()),

    # path('create-room', CreateRoomView.as_view()),
]
