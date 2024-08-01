# Register your models here.
from django.contrib import admin
from django import forms
from .views import db
from .serializers import ContentSerializer
from .models import Section, Course, ContentProxy
from django.contrib import messages
from django.shortcuts import redirect

class ContentAdminForm(forms.ModelForm):
    course_id = forms.ModelChoiceField(queryset=Course.objects.all(), label="Course")
    section_id = forms.ModelChoiceField(queryset=Section.objects.all(), label="Section") 
    content = forms.CharField(required=False)

    class Meta:
        model = ContentProxy
        fields = ['section_id', 'course_id', 'video', 'content', 'questions']

class ContentAdmin(admin.ModelAdmin):
    form = ContentAdminForm
    list_display = ['section_id', 'course_id']

    def save_model(self, request, obj, form, change):
        data = form.cleaned_data
        content_data = {
            'section_id': data['section_id'].id,
            'course_id': data['course_id'].id,
            'video': data.get('video', ''),
            'content': data.get('content', ''),
            'questions': data.get('questions', [])
        }
        db.collection('contents').add(content_data)
        messages.success(request, "Content added successfully.")

    def delete_model(self, request, obj):
        db.collection('contents').document(obj.id).delete()
        messages.success(request, "Content deleted successfully.")

    def get_queryset(self, request):
        # This method is required to return an empty queryset as we are using a proxy model
        return ContentProxy.objects.none()

    def change_view(self, request, object_id, form_url='', extra_context=None):
        # Redirect to the add view since we don't support changing existing content
        return redirect('admin:content_app_contentproxy_add')

admin.site.register(ContentProxy, ContentAdmin)
admin.site.register(Course)
admin.site.register(Section)