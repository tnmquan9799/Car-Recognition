# Generated by Django 3.2.3 on 2021-06-12 19:37

import api.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vtypeengine',
            name='Vtype',
            field=models.ForeignKey(blank=True, limit_choices_to=api.models.VTypeEngine.choice, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.engine'),
        ),
    ]