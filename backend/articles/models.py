from django.db import models
from users.models import User
# Create your models here.
class Article(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, default="Physics Bugle Article")
    abstract = models.TextField()
    link = models.URLField()
    image_url = models.URLField(default='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fphysics%2F&psig=AOvVaw0tl4v0FWrMmwTng9jM68pa&ust=1722961817608000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiG3Jij3ocDFQAAAAAdAAAAABAJ')



