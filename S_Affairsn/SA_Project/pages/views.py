from pyexpat.errors import messages
from django.contrib import messages
from django.shortcuts import redirect, render

from pages.models import Student


# Create your views here.
def home(request):
    return render(request,'pages/homePage.html')

def main(request):
    return render(request,'pages/home.html')

def add_student(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone_number = request.POST.get('phone_number')
        student_id = request.POST.get('student_id')
        gpa = request.POST.get('gpa')
        level = request.POST.get('level')
        status = request.POST.get('status')
        department = request.POST.get('department')
        birthday = request.POST.get('birthday')
        gender = request.POST.get('gender')

        if Student.objects.filter(student_id=student_id).exists():
            messages.error(request, "ID already exists.")
            return render(request, 'pages/Add_student.html')


        # Create a new Student instance with the form data
        student = Student(
            name=name,
            email=email,
            phone_number=phone_number,
            student_id=student_id,
            gpa=gpa,
            level=level,
            status=status,
            department=department,
            birthday=birthday,
            gender=gender
        )

        # Save the student object to the database
        student.save()

        return redirect('main')  # Redirect to the desired page after saving the student
    
    return render(request, 'pages/Add_student.html')
