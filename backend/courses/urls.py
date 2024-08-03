from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContentViewSet, CourseViewSet

router = DefaultRouter()
router.register(r'contents', ContentViewSet, basename='content')
router.register(r'courses', CourseViewSet, basename='courses')

urlpatterns = [
    path('', include(router.urls)),

]