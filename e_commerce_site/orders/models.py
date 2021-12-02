from django.db import models
from django.conf import settings
import datetime

# Create your models here.


class Order(models.Model):
    products = models.ForeignKey('products.Product', on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(decimal_places=2, max_digits=6)
    date = models.DateField(default=datetime.datetime.today)
    status = models.BooleanField(default=False)

    def __str__(self):
        return "Order:" + self.products
