from rest_framework import serializers
from .models import *


class ImagesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = '__all__'
        

class DimensionsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Dimensions
        fields =  '__all__'    


        


class PropertiesSerializers(serializers.ModelSerializer):
    dimensions = DimensionsSerializers(read_only=True, many=True)
    image = ImagesSerializers(read_only=True, many=True)
    class Meta:
        model = Properties
        fields =  ['base_id','product_id','original_price','price','dimensions','image']

class BasetableSerializers(serializers.ModelSerializer):
    properties = PropertiesSerializers(read_only=True, many=True)   
    class Meta:
        model = Basetable
        fields =  ['base_id','productname' ,'description', 'properties' ]

class ProductSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = Product
        fields =  '__all__'


        