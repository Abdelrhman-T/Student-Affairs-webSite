from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('home/', views.main, name='main'),
    path('add_student/', views.add_student, name='add_student'),
    path('search/', views.search, name='search_student'),
    path('update/<int:pk>/', views.update, name='update_student')
]
