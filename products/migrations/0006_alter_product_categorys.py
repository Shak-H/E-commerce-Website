# Generated by Django 3.2.9 on 2021-12-06 15:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0001_initial'),
        ('products', '0005_product_categorys'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='categorys',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='category.category'),
        ),
    ]
