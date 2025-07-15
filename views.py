from rest_framework import generics
from .models import MiModelo
from .serializers import MiModeloSerializer

class MiModeloList(generics.ListCreateAPIView):
    queryset = MiModelo.objects.all()
    serializer_class = MiModeloSerializer
