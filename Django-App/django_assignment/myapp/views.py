from rest_framework.views import APIView
from .models import Employee, Manager
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
from rest_framework import generics
from .serializers import EmployeeSerializer, ManagerSerializer
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated


# API for employee crud operations
class Employeelist(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        employee = Employee.objects.all()
        serializer = EmployeeSerializer(employee, many=True, context={"request": request})
        response_dict = {"error": False, "message": "All Company List Data", "data": serializer.data}
        return Response(response_dict)

    def post(self, request):
        try:
            print(type(request.data))
            serializer = EmployeeSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False, "message": "Company Data Save Successfully"}
        except Exception as I1:
            print(I1)
            dict_response = {"error": True, "message": "Error During Saving Company Data"}
        return Response(dict_response)

    def put(self, request, pk=None):
        try:
            queryset = Employee.objects.all()
            employee = get_object_or_404(queryset, pk=pk)
            serializer = EmployeeSerializer(employee, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False, "message": "Successfully Updated Company Data"}
        except:
            dict_response = {"error": True, "message": "Error During Updating Company Data"}
        return Response(dict_response)

    def delete(self, request, pk=None):
        try:
            queryset = Employee.objects.all()
            employee = get_object_or_404(queryset, pk=pk).delete()
            # serializer=EmployeeSerializer(employee,data=request.data,context={"request": request})
            # serializer.is_valid(raise_exception=True)
            # serializer.delete()
            dict_response = {"error": False, "message": "Successfully Deleted Company Data"}
        except Exception as I2:
            print(I2)
            dict_response = {"error": True, "message": "Error During Deleting Company Data"}
        return Response(dict_response)


# API for Manager SignUP
class ManagerSignup(APIView):
    def post(self, request):
        try:
            serializer = ManagerSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response = {"error": False, "message": "Company Data Save Successfully"}
        except Exception as I1:
            print(I1)
            dict_response = {"error": True, "message": "Error During Saving Company Data"}
        return Response(dict_response)


# API for Manager Signin
class ManagerSignin(APIView):
    def get(self, request):
        try:
            email = request.data['email']
            password = request.data['password']
            queryset = Employee.objects.get(email=email)
            print(queryset.password)
            if queryset:
                passcheck = check_password(password, queryset.password)
                if passcheck:
                    dict_response = {"error": False, "message": "Sign in Successfully"}
                else:
                    dict_response = {"error": False, "message": "Username or password do not match"}
            else:
                dict_response = {"error": False, "message": "User Doesn't Exist"}
            # dict_response = {"error": False, "message": "Company Data Save Successfully"}
            return Response(dict_response)
        except Exception as I1:
            print(I1)
            dict_response = {"error": True, "message": "Error During Saving Company Data"}
        return Response(dict_response)
