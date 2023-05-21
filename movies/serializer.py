from rest_framework import serializers
from .models import Genre, Movie, Person


class MovieSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = Movie
        fields = "__all__"  # all fields


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = "__all__"  # all fields


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = "__all__"  # all fields
