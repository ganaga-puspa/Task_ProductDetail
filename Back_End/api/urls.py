from django.urls import path
from .views import *

urlpatterns = [
    path('images/',ImagesAPI.as_view() ),
    path('basetable/',BasetableAPI.as_view() ),
    path('dimensions/',DimensionsAPI.as_view() ),
    path('properties/',PropertiesAPI.as_view() ),
    path('properties/<int:product_id>/',PropertiesAPI.as_view() ),

    path('product/',ProductAPI.as_view() ),
    path('product/<int:id>/',ProductAPI.as_view() ),
     
]