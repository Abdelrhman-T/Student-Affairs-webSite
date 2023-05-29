from rest_framework import serializers


class StudentSerializer(serializers.Serializer):
    id = serializers.IntegerField(source='student_id')
    name = serializers.CharField(max_length=255)
    gender = serializers.CharField(max_length=10)
    email = serializers.EmailField()
    phone_number = serializers.CharField(max_length=20)
    gpa = serializers.DecimalField(max_digits=3, decimal_places=2)
    level = serializers.IntegerField()
    department = serializers.CharField(max_length=10)
    status = serializers.BooleanField()
    birthday = serializers.DateField()
