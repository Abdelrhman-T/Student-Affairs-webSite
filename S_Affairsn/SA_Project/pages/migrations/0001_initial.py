# Generated by Django 4.1.7 on 2023-05-24 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('phone_number', models.CharField(max_length=20)),
                ('student_id', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('gpa', models.FloatField()),
                ('level', models.CharField(choices=[('level 1', 'First year'), ('level 2', 'Second year'), ('level 3', 'Third year'), ('level 4', 'Fourth year')], max_length=10)),
                ('status', models.CharField(choices=[('active', 'Active'), ('inactive', 'Inactive')], max_length=10)),
                ('department', models.CharField(choices=[('CS', 'CS'), ('IS', 'IS'), ('IT', 'IT'), ('AI', 'AI'), ('DS', 'DS')], max_length=10)),
                ('birthday', models.DateField()),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female')], max_length=10)),
            ],
        ),
    ]