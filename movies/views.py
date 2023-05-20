from rest_framework import viewsets
from .serializer import GenreSerializer, MovieSerializer
from .models import Movie, Genre

# Create your views here.


class MovieView(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class GenreView(viewsets.ModelViewSet):
    serializer_class = GenreSerializer
    queryset = Genre.objects.all()
