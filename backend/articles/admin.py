from typing import Any
from django.contrib import admin
from .models import Article
from django import forms
from backend.firebase import db
from firebase_admin import storage
class ArticleForm(forms.ModelForm):
    abstract = forms.TextInput()
    link = forms.URLInput()
    image = forms.ImageField()

    class Meta:
        model = Article
        fields = ['title', 'abstract', 'link']

    def save(self, commit: bool = True) -> Any:
        instance = super(ArticleForm, self).save(commit=False)
        data = self.cleaned_data

        # process the image
        image = data.get('image')
        if image:
            # Create a reference to the image file in Firebase Storage
            bucket = storage.bucket()
            blob = bucket.blob(f'images/{image.name}')
            
            # Upload the image to Firebase Storage
            blob.upload_from_file(image.file, content_type=image.content_type)
            
            # Make the image publicly accessible
            blob.make_public()
            
            # Save the URL of the uploaded image
            instance.image_url = blob.public_url

        if commit:
            instance.save()
        return instance


class ArticleAdmin(admin.ModelAdmin):
    form = ArticleForm
    list_display = ['title']

    def save_model(self, request, obj, form, change):
        if not change or not obj.author:  # Only set the author if it's a new object or the author is not set
            obj.author = request.user
        super().save_model(request, obj, form, change)
# Register your models here.
admin.site.register(Article, ArticleAdmin)