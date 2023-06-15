from django.urls import path
from .views import GeneroViewList, GeneroDetailView

urlpatterns = [
    path('movies/', GeneroViewList.as_view(), name="generos-list"),
    path('movies/<int:pk>', GeneroDetailView.as_view(), name="generos-detail"),
]