# Generated by Django 3.2.9 on 2021-12-04 20:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_alter_product_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='categorys',
        ),
    ]
