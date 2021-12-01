from django.db import models

# Create your models here.


class Product(models.Model):
    brand = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    colour = models.CharField(max_length=100)
    size = models.CharField(max_length=20)
    price = models.DecimalField(decimal_places=2, max_digits=5)

    def __str__(self):
        return "Product" + self.name
