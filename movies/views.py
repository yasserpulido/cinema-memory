from rest_framework import viewsets
from .serializer import MovieSerializer
from .models import Movie

# Create your views here.


class MovieView(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
