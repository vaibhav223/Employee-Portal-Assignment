from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import UserManager


# Create your models here.

class Manager(models.Model):
    email = models.CharField(max_length=255,primary_key=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    address = models.TextField()
    date_of_birth = models.DateField()
    company = models.CharField(max_length=255)
    objects = models.Manager()
    # username = None
    # date_joined=None
    # is_active=None
    # is_staff=None
    # is_superuser=None
    # last_login=None
    # USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = []

    class Meta:
        db_table = 'manager'

    def save(self, *args, **kwargs):
        self.password = make_password(self.password, None, 'pbkdf2_sha256')
        super(Manager, self).save(*args, **kwargs)


class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    address = models.TextField()
    date_of_birth = models.DateField()
    company = models.CharField(max_length=255)
    mobile = models.CharField(max_length=12)
    city = models.CharField(max_length=255)
    objects = models.Manager()

    class Meta:
        db_table = 'employee'

    def save(self, *args, **kwargs):
        self.password = make_password(self.password, None, 'pbkdf2_sha256')
        super(Employee, self).save(*args, **kwargs)
