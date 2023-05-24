from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    student_id = models.CharField(max_length=20, primary_key=True)
    gpa = models.FloatField()
    LEVEL_CHOICES = (
        ('level 1', 'First year'),
        ('level 2', 'Second year'),
        ('level 3', 'Third year'),
        ('level 4', 'Fourth year'),
    )
    level = models.CharField(max_length=10, choices=LEVEL_CHOICES)

    STATUS_CHOICES = (
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    )
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)

    DEPARTMENT_CHOICES = (
        ('CS', 'CS'),
        ('IS', 'IS'),
        ('IT', 'IT'),
        ('AI', 'AI'),
        ('DS', 'DS'),
    )
    department = models.CharField(max_length=10, choices=DEPARTMENT_CHOICES, null= True)
    birthday = models.DateField()
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
