from django.contrib import admin

# Register your models here.
from web_app.models import Topic, Entry
from mediumeditor.admin import MediumEditorAdmin

admin.site.register(Topic)


@admin.register(Entry)
class TopicAdmin(MediumEditorAdmin, admin.ModelAdmin):
    mediumeditor_fields = ('text', )


