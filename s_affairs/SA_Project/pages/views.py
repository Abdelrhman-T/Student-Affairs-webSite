from pyexpat.errors import messages
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required

from pages.models import Student


# Create your views here.
def home(request):
    return render(request, 'pages/homePage.html')


@login_required(login_url='SignIn')
def main(request):
    return render(request, 'pages/home.html')


@login_required(login_url='SignIn')
def add_student(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone_number = request.POST.get('phone_number')
        student_id = request.POST.get('student_id')
        gpa = request.POST.get('gpa')
        level = request.POST.get('level')
        status = request.POST.get('status') == 'active'
        department = request.POST.get('department')
        department = department if department != '' else None
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

        # Redirect to the desired page after saving the student
        return redirect('main')

    return render(request, 'pages/Add_student.html')


###### search Student #####
@login_required(login_url='SignIn')
def search(request):
    return render(request, "pages/search_student.html")


@login_required(login_url='SignIn')
def update(request, pk):
    student = Student.objects.get(pk=pk)
    if request.method == 'POST':
        if request.POST.get('name'):
            student.name = request.POST.get('name')
        if request.POST.get('email'):
            student.email = request.POST.get('email')
        if request.POST.get('phonenumber'):
            student.phonenumber = request.POST.get('phonenumber')
        if request.POST.get('gpa'):
            student.gpa = request.POST.get('gpa')
        if request.POST.get('level'):
            student.level = request.POST.get('level')
        if request.POST.get('status'):
            student.status = request.POST.get('status') == 'active'
        if request.POST.get('department'):
            student.department = request.POST.get('department')
        else:
            student.department = None
        
        student.save()
        return redirect('main')  
    return render(request, "pages/update_student.html", {"student": student, "levels": list(range(1, 5)), "departments": ["CS", "IS", "IT", "SW"]})


def SignIn(request):
    if request.method == 'POST':
        email = request.POST.get("email")
        password = request.POST.get("password")

        # username=email 2 fixes
        user = authenticate(request, username=email, password=password)
        # 1. Make the admin login with his username
        # 2. Customize the user model in django to let the user login with his email
        # note: javascript was modified in 'signIn.js'

        if user is not None:
            login(request, user)
            return redirect('main')
        else:
            messages.info(request, 'Check Email or Password again.')

    return render(request, 'pages/SignIn.html')


def sign_out(request):
    logout(request)
    return redirect('SignIn')

#show all students
@login_required(login_url='SignIn')
def show_students(request):
    return render(request, 'pages/show_students.html', {"student": Student.objects.all()})
