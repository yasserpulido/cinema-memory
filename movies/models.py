import os
from django.db import models
from django.dispatch import receiver
from django.db.models.signals import pre_save


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
    image = models.ImageField(
        upload_to=upload_to, blank=True, null=True, default='images/default.png')

    def __str__(self):
        return self.title


@receiver(pre_save, sender=Movie)
def delete_old_image(sender, instance, **kwargs):
    if instance.pk:
        # Get the existing movie object from the database
        old_movie = Movie.objects.get(pk=instance.pk)

        # Check if the image field has changed
        if old_movie.image != instance.image:
            # Delete the old image file
            if os.path.isfile(old_movie.image.path):
                os.remove(old_movie.image.path)

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
