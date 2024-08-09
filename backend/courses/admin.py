# Register your models here.
from django.contrib import admin
from django import forms
from backend.firebase  import db
from .serializers import ContentSerializer
from .models import Section, Course, ContentProxy
from django.contrib import messages
from django.shortcuts import redirect
from django.db.models import QuerySet
from django.shortcuts import render
from django.urls import reverse

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
    change_list_template = "admin/content.html"


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

    def changelist_view(self, request, extra_context=None):
        contents = db.collection('contents').stream()
        content_list = []
        add_url = reverse('admin:courses_contentproxy_add')
        for content in contents:
            data = content.to_dict()
            
            course = Course.objects.get(pk=data.get('course_id'))
            section = Section.objects.get(pk=data.get('section_id'))
            content_list.append({"course": course,
                                 "section": section,
                                 "content": ContentProxy(
                section_id=data.get('section_id'),
                course_id=data.get('course_id'),
                video=data.get('video', ''),
                content=data.get('content', ''),
                questions=data.get('questions', [])
            )})


        context = {
            'add_url': add_url,
            'content_list': content_list,
            'course': course,
            'section': section

        }
        return render(request, self.change_list_template, context)
    
    def change_view(self, request, object_id, form_url='', extra_context=None):
        # Redirect to the add view since we don't support changing existing content
        return redirect('admin:content_app_contentproxy_add')

admin.site.register(ContentProxy, ContentAdmin)
admin.site.register(Course)
admin.site.register(Section)