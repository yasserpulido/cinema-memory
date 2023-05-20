from django.db import models

# Create your models here.
# 1. Create a Movie model with fields title, description, year and rating


class Movie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    year = models.IntegerField()
    rating = models.DecimalField(max_digits=3, decimal_places=0)

    def __str__(self):
        return self.title

# 2. Create a Genre model with fields name


class Genre(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name
