from django.db import models

class MiModelo(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)
    
    def _str_(self):
        return self.nombre