from django.contrib import admin
from .models import User_Info
# Register your models here.
class CAdmin(admin.ModelAdmin):
    list_display = ['pub_date','name','gender','birth','life']

admin.site.register(User_Info,CAdmin)