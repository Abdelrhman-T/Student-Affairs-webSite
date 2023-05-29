from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    student_id = models.PositiveIntegerField(primary_key=True)
    gpa = models.DecimalField(max_digits=3, decimal_places=2)
    level = models.PositiveSmallIntegerField()
    status = models.BooleanField()

    DEPARTMENT_CHOICES = (
        ('CS', 'Computer Science'),
        ('IS', 'Information System'),
        ('IT', 'Information Technology'),
        ('AI', 'Aritificial Inteligence'),
        ('DS', 'Descision Support'),
    )
    department = models.CharField(
        max_length=10, choices=DEPARTMENT_CHOICES, null=True)
    birthday = models.DateField()
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
