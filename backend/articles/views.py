from django.shortcuts import render

# Create your views here.
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import ArticleSerializer
from .models import Article


class ArticleViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    def list(self, response):
        articles = Article.objects.all()
        data = ArticleSerializer(articles, many=True)
        return Response(data.data)
    
    def retrieve(self, request, pk=None):
        article = Article.objects.get(pk=pk)
        data = ArticleSerializer(article)
        return Response(data.data)
    

