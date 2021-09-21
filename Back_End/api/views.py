from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework import generics
from django.db import models

# Create your views here.

# class StudentView(viewsets.ModelViewSet):
#     queryset = Student.objects.all()
#     serializer_class = StudentSerializer



class ImagesAPI(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializers

    lookup_field = 'name'

    def get(sef, request, name = None):
        if name:
            return sef.retrieve(request)
        else:
            return  sef.list(request)
    
    def post(self, request ):
        return self.create(request)

    def put(self, request, name=None):
        return self.update(request, name)
    
    def delete(self, request, name):
        return self.destroy(request, name)


class BasetableAPI(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    queryset = Basetable.objects.all()
    serializer_class = BasetableSerializers

    lookup_field = 'productname'

    def get(sef, request, productname = None):
        if productname:
            return sef.retrieve(request)
        else:
            return  sef.list(request)


    def post(self, request ):
        return self.create(request)


    def put(self, request, productname=None):
        return self.update(request, productname)
    
    def delete(self, request, productname):
        return self.destroy(request, productname)

class DimensionsAPI(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    queryset = Dimensions.objects.all()
    serializer_class = DimensionsSerializers

    lookup_field = 'id'

    def get(sef, request, id = None):
        if id:
            return sef.retrieve(request)
        else:
            return  sef.list(request)

    def post(self, request ):
        return self.create(request)

    def put(self, request, id=None):
        return self.update(request, id)
    
    def delete(self, request, id):
        return self.destroy(request, id)


class PropertiesAPI(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):

    serializer_class = PropertiesSerializers
    queryset = Properties.objects.all()

    lookup_field = 'product_id'

    def get(sef, request, product_id = None):
        if product_id:
            return sef.retrieve(request)
        else:
            return  sef.list(request)

    def post(self, request ):
        return self.create(request)

    def put(self, request, product_id=None):
        return self.update(request, product_id)
    
    def delete(self, request, product_id):
        return self.destroy(request, product_id)





class ProductAPI(mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):

    serializer_class = ProductSerializers
    queryset = Product.objects.all()

    lookup_field = 'id'

    def get(sef, request, id = None):
        if id:
            return sef.retrieve(request)
        else:
            return  sef.list(request)

    def post(self, request ):
        return self.create(request)

    def put(self, request, id=None):
        return self.update(request, id)
    
    def delete(self, request, id):
        return self.destroy(request, id)

