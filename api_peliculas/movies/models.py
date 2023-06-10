from django.db import models

# Create your models here.
class Genero(models.Model):
    nombre = models.CharField(max_length=100,null=False)
    class Meta:
        db_table            = 'Generos'
        verbose_name        = 'Genero'
        verbose_name_plural = 'Generos'

    def __str__(self):
        return self.nombre


class Pelicula(models.Model):
    nombre      = models.CharField(max_length=500)
    imdb_score  = models.FloatField()
    popularidad = models.FloatField()
    director    = models.CharField(max_length=500)
    genero      = models.ManyToManyField(Genero)

    class Meta: 
        db_table            = "Peliculas"
        verbose_name        = "Pelicula"
        verbose_name_plural = "Peliculas"

    def __str__(self):
        return self.nombre