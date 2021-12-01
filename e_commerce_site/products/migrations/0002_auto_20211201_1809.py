# Generated by Django 3.2.9 on 2021-12-01 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='name',
            new_name='brand',
        ),
        migrations.AddField(
            model_name='product',
            name='type',
            field=models.CharField(default='Nike', max_length=100),
            preserve_default=False,
        ),
    ]
