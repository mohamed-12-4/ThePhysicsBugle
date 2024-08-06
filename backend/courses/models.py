from django.db import models

# Create your models here.
class Course(models.Model):
    DEPARTMENTS = [
        ("MATH", "Mathematics"),
        ("PHYS", "Physics"),
        ### TODO Add the rest of the departments
    ]

    title = models.CharField(max_length=50)
    department = models.CharField(max_length=4, choices=DEPARTMENTS)

    def __str__(self) -> str:
        return self.title

class Section(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='sections')
    title = models.CharField(max_length=150)
    description = models.TextField()

    def __str__(self):
        return self.title
    

class ContentProxyQuerySet(models.QuerySet):
    def __iter__(self):
        contents = db.collection('contents').stream()
        for content in contents:
            data = content.to_dict()
            yield ContentProxy(
                section_id=data.get('section_id'),
                course_id=data.get('course_id'),
                video=data.get('video', ''),
                content=data.get('content', ''),
                questions=data.get('questions', [])
            )

class ContentProxyManager(models.Manager):
    def get_queryset(self):
        return ContentProxyQuerySet(self.model, using=self._db)

class ContentProxy(models.Model):
    section_id = models.CharField(max_length=200)
    course_id = models.CharField(max_length=200)
    video = models.URLField(blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    questions = models.JSONField(blank=True, null=True)


    objects = ContentProxyManager()

    class Meta:
        managed = False  # No migrations will be created for this model
        verbose_name = "Content"
        verbose_name_plural = "Contents"