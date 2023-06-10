from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Genero, Pelicula
from .serializers import GeneroSerializer
# Create your views here.

class GeneroViewList(APIView):
    def post(self, request, format=None):
        sereliziador = GeneroSerializer(data = request.data ) 
        if sereliziador.is_valid():
            sereliziador.save()
            return Response(sereliziador.data, status = status.HTTP_201_CREATED)

        return Response(sereliziador.errors, status = status.HTTP_400_BAD_REQUEST)
    

    def get(self, request, format=None):
        generos      = Genero.objects.all()
        serializador = GeneroSerializer(generos,many=True)
        return Response(serializador.data)
        

class GeneroDetailView(APIView):
    def get(self, request, pk, format=None):
        try:
            genero = Genero.objects.get(pk=pk)
            serializador = GeneroSerializer(genero)
            return Response(serializador.data)
        except:
            raise Http404
