from django.urls import path, include
from rest_framework import routers
from movies import views

router = routers.DefaultRouter()
router.register(r"movies", views.MovieView, "movie")
router.register(r"genres", views.GenreView, "genre")
router.register(r"persons", views.PersonView, "person")

urlpatterns = [
    path("api/v1/", include(router.urls))
]
