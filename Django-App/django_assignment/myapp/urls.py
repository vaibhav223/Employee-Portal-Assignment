
import os
import sys
from django.urls import path, include
from rest_framework import routers
from .views import Employeelist,ManagerSignup,ManagerSignin
from django.conf.urls import url
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_swagger.views import get_swagger_view


urlpatterns = [
    path('manage-emp/',Employeelist.as_view()),
    # path('api/gettoken/', TokenObtainPairView.as_view(), name="gettoken"),
    # path('api/resfresh_token/', TokenRefreshView.as_view(), name="refresh_token"),
    path('manage-emp/<int:pk>/',Employeelist.as_view()),
    path('manager-signup/',ManagerSignup.as_view()),
    path('manager-signin/',ManagerSignin.as_view() ),
]