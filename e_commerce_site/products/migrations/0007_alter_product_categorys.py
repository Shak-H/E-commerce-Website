# Generated by Django 3.2.9 on 2021-12-06 16:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0001_initial'),
        ('products', '0006_alter_product_categorys'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='categorys',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='category.category'),
        ),
    ]
