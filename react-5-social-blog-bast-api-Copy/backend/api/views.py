from django.shortcuts import render
from rest_framework.views import  APIView
from .serializers import Profile_serializers, showProfileSerializer, Post_serializers, UserSerializer
from .models import Profile, Post
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework import status
from rest_framework import viewsets
from django.contrib.auth.models import User





class Profile_apiview(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]
    def get(self, request):
        user = request.user.id
        profile = Profile.objects.get(user=user)
        serializer = Profile_serializers(profile)
        return Response(serializer.data)

    def put(self, request):
        user = request.user.id
        profile = Profile.objects.get(user=user)
        serializer = Profile_serializers(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return  Response(serializer.data,  status=status.HTTP_201_CREATED)
        return  Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ShowProfile(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def get(self, request):
        serializer = showProfileSerializer(request.user)
        return Response(serializer.data)

    def put(self, request):
        serializer = showProfileSerializer(request.user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return  Response(serializer.data,  status=status.HTTP_201_CREATED)
        return  Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class Post_view(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]
    def get(self, request):
        post = Post.objects.all()
        serializer = Post_serializers(post, many=True)
        return Response(serializer.data)

    def post(self, request):
        user = request.user.id
        serializer = Post_serializers(data=request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return  Response(serializer.data,  status=status.HTTP_201_CREATED)
        return  Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class Post_detail_view(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]
    
    def get_object(self, id):
        try:
            return Post.objects.get(id=id)
        except Article.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)
    
    def get(self, request, id):        
        post = Post.objects.get(id=id)
        serializer = Post_serializers(post)
        return Response(serializer.data)

    def put(self, request, id):
        article = self.get_object(id)
        if article.user.id == self.request.user.id:
            serializer = Post_serializers(article, data=request.data)
            if serializer.is_valid():
                serializer.save(user=self.request.user)
                return  Response(serializer.data)
            return  Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return  Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        article = self.get_object(id)
        if article.user.id == self.request.user.id:
            article.delete()
            return  Response(status=status.HTTP_204_NO_CONTENT)        
        return  Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(APIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    # serializer_class = UserSerializer


    def post(self,request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return  Response(serializer.data,  status=status.HTTP_201_CREATED)
        return  Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
