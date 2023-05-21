from django.db import models


def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

# 1. Create a Movie model with fields title, description, year and rating


class Movie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    year = models.IntegerField()
    rating = models.DecimalField(max_digits=3, decimal_places=0)
    runtime = models.IntegerField(default=0)
    genres = models.ManyToManyField('Genre')
    directors = models.ManyToManyField('Person', related_name='directors')
    image = models.ImageField(upload_to=upload_to, blank=True, null=True)

    def __str__(self):
        return self.title

# 2. Create a Genre model with fields name


class Genre(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

# 3. Person model with fields name


class Person(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name
