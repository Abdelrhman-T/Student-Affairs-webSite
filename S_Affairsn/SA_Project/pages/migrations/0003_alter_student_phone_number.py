# Generated by Django 4.1.7 on 2023-05-24 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_alter_student_department'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='phone_number',
            field=models.CharField(max_length=20, null=True),
        ),
    ]