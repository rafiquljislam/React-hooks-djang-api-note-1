from django.urls import path,include
from rest_framework.authtoken import views
from .views import Profile_apiview, ShowProfile, Post_view, Post_detail_view, UserViewSet




urlpatterns = [
    path('login/', views.obtain_auth_token),
    path('profile/', Profile_apiview.as_view()),
    path('user/', ShowProfile.as_view()),
    path('post/', Post_view.as_view()),
    path('post/<int:id>/', Post_detail_view.as_view()),
    path('register/', UserViewSet.as_view()),
]
