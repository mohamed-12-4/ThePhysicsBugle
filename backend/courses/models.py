from django.db import models

# Create your models here.
class Course(models.Model):
    DEPARTMENTS = [
        ("MATH", "Mathematics"),
        ("PHYS", "Physics"),
        ### TODO Add the rest of the departments
    ]
    name = models.CharField(max_length=50)
    department = models.CharField(max_length=4)