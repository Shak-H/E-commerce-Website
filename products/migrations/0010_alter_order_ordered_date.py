# Generated by Django 3.2.9 on 2021-12-15 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0009_auto_20211208_2209'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='ordered_date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
