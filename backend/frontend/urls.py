from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Category/', views.index),
    path('save_file',views.save_file),
    path('cleanJson',views.cleanJson)
]
