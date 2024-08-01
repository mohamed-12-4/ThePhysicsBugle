from rest_framework import serializers

class ContentSerializer(serializers.Serializer):
    course_id = serializers.CharField(max_length=200)
    section_id = serializers.CharField(max_length=200)
    video = serializers.URLField(required=False, allow_blank=False)
    content = serializers.CharField(required=False, allow_blank=True)
    questions = serializers.JSONField(required=False, allow_null=True)