from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=100, default='Hello friends')
    image = models.ImageField(default='image/default.jpg', upload_to='image/')

    def __str__(self):
        return self.user.username

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    image = models.ImageField(default='post/default.jpg', upload_to='post/')
    def __str__(self):
        return self.title
    