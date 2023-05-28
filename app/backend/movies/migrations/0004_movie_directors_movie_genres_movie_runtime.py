# Generated by Django 4.2 on 2023-05-20 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("movies", "0003_person"),
    ]

    operations = [
        migrations.AddField(
            model_name="movie",
            name="directors",
            field=models.ManyToManyField(related_name="directors", to="movies.person"),
        ),
        migrations.AddField(
            model_name="movie",
            name="genres",
            field=models.ManyToManyField(to="movies.genre"),
        ),
        migrations.AddField(
            model_name="movie",
            name="runtime",
            field=models.IntegerField(default=0),
        ),
    ]