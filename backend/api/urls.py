from django.urls import path
from .views import CarView

urlpatterns = [
    path('car', CarView.as_view()),
    # path('create-room', CreateRoomView.as_view()),
]
