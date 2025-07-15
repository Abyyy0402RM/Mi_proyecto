from django.urls import path
from .views import MiModeloList

urlpatterns = [
    path('api/mimodelo/', MiModeloList.as_view()),
]