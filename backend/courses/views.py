from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.response import Response
from .serializers import ContentSerializer
from .firebase import db
# Create your views here.

class ContentViewSet(viewsets.ViewSet):
    def list(self, request):
        contents_ref = db.collection('contents')
        docs = contents_ref.stream()
        contents = [doc.to_dict() for doc in docs]
        return Response(contents)

    def create(self, request):
        serializer = ContentSerializer(data=request.data)
        if serializer.is_valid():
            content = serializer.validated_data
            db.collection('contents').add(content)
            return Response(content, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        doc_ref = db.collection('contents').document(pk)
        doc = doc_ref.get()
        if doc.exists:
            return Response(doc.to_dict())
        return Response(status=status.HTTP_404_NOT_FOUND)

    def update(self, request, pk=None):
        serializer = ContentSerializer(data=request.data)
        if serializer.is_valid():
            content = serializer.validated_data
            db.collection('contents').document(pk).set(content)
            return Response(content)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        db.collection('contents').document(pk).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)