from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import MovieSerializer, RatingSerializer, UserSerializer
from .models import Movie, Rating
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication




class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny, ]



class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]

    @action(detail=True, methods=['POST'])
    def rate_movie(self, request, pk=None):

        if 'stars' in request.data:

            movie = Movie.objects.get(id=pk)
            # user = User.objects.get(id=1)
            user = request.user
            stars = request.data['stars']
            print(f"movie={movie}-user={user}-stars={stars}")

            try:
                rating = Rating.objects.get(user=user.id, movie=movie.id)
                rating.stars = stars
                rating.save()
                response = { 'message': 'Rating Update' }
                return Response(response, status=status.HTTP_200_OK)
                
            except:
                Rating.objects.create(user=user, movie=movie, stars=stars)
                response = { 'message': 'Rating Created' }
                return Response(response, status=status.HTTP_200_OK)
        else:
            response = { 'message': 'You nead to provide stars' }
            return Response(response, status=status.HTTP_400_BAD_REQUEST)



class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]

    def update(self, request, *args, **kwargs):
        response = { 'message': 'You cant update rating like that' }
        return Response(response, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        response = { 'message': 'You cant create rating like that' }
        return Response(response, status=status.HTTP_400_BAD_REQUEST)






