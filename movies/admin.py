from django.contrib import admin
from .models import Genre, Movie, Person

# Register your models here.
admin.site.register(Movie)
admin.site.register(Genre)
admin.site.register(Person)
