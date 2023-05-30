from django.shortcuts import get_object_or_404, redirect
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from pages.models import Student
from pages.serializers import StudentSerializer
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


@api_view()
def student_list(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)


@csrf_exempt
@api_view(['GET', 'DELETE'])
def get_student(request, pk):
    student = Student.objects.get(pk=pk)
    if request.method == 'GET':
        serializer = StudentSerializer(student)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
