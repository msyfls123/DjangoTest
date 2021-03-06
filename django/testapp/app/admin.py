#-*- coding:utf-8 -*-
from django.contrib import admin

# Register your models here.
from .models import *
from pagedown.widgets import AdminPagedownWidget
from django import forms

# Register your models here.
class DataForm(forms.ModelForm):
    contentPre = forms.CharField(label="Markdown编辑(不显示)",widget=AdminPagedownWidget(),required=False)

    class Meta:
        model = Data
        fields = '__all__'

class DataAdmin(admin.ModelAdmin):
	list_display = ('name', 'data',)
	form = DataForm

class NotesAdmin(admin.ModelAdmin):
	list_display = ('tip', 'time',)
	list_editable = ('tip','time')

admin.site.register(Data, DataAdmin)
admin.site.register(Notes, NotesAdmin)