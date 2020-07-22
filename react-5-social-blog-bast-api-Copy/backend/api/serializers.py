from rest_framework import serializers
from .models import Profile, Post
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User



User = get_user_model()
class showProfileSerializer(serializers.ModelSerializer):
   class Meta:
      model = User
      fields = ['id','username','first_name','last_name','email',]


class Profile_serializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id','user','bio','image']
        read_only_fields = ['user']

class Post_serializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id','user','title','image']
        read_only_fields = ['user']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user