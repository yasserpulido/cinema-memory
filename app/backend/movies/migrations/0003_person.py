# Generated by Django 4.2 on 2023-05-20 02:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("movies", "0002_genre"),
    ]

    operations = [
        migrations.CreateModel(
            name="Person",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=20)),
            ],
        ),
    ]
