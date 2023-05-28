# Generated by Django 4.2 on 2023-05-24 01:02

from django.db import migrations, models
import movies.models


class Migration(migrations.Migration):

    dependencies = [
        ("movies", "0006_alter_movie_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="movie",
            name="image",
            field=models.ImageField(
                blank=True,
                default="images/default.png",
                null=True,
                upload_to=movies.models.upload_to,
            ),
        ),
    ]
