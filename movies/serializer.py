from rest_framework import serializers
from .models import Genre, Movie, Person


class MovieSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    imageUrl = serializers.SerializerMethodField()
    directors = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Person.objects.all())
    directorsNames = serializers.SerializerMethodField()
    genres = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Genre.objects.all())
    genresNames = serializers.SerializerMethodField()

    class Meta:
        model = Movie
        fields = ('id', 'title', 'description', 'year', 'rating',
                  'runtime', 'genres', "genresNames", 'directors', "directorsNames", 'image', 'imageUrl')

    def get_imageUrl(self, obj):
        if obj.image:
            return obj.image.url
        return None

    def to_representation(self, instance):
        data = super().to_representation(instance)
        # Remove the 'image' field from the serialized representation
        data.pop('image', None)
        return data

    def get_directorsNames(self, obj):
        return [director.name for director in obj.directors.all()]

    def get_genresNames(self, obj):
        return [genre.name for genre in obj.genres.all()]


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = "__all__"  # all fields


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = "__all__"  # all fields
