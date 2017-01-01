"""App URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from Tell.views import *
from django.conf import settings

urlpatterns = [
    url(r'^$',index,name="index"),
    url(r'^form/$',form,name="form"),
	url(r'^hello/(?P<name>[a-z0-9_-]*)$',hello,name="hello"),
    url(r'^bye/$',bye,name="bye"),
    url(r'^add/$',add,name="add"),
    url(r'^jia/$',jia,name="jia"),
    url(r'^list/$', ListObj.as_view(),name="list"),
    url(r'^admin/', include(admin.site.urls)),
    # url(r'^static/(?P<path>.*)$', 'django.views.static.serve', { 'document_root': settings.STATICFILES_DIRS,}),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', { 'document_root': settings.MEDIA_ROOT,}),
]

handler404 = 'Tell.views.page_not_found'
handler500 = 'Tell.views.page_error'