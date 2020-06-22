from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=40)
    desc = models.CharField(max_length=100)
    year = models.IntegerField()