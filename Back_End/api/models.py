# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

# class Student(models.Model):
#     image = models.ImageField(upload_to='uploads/images', null=True, blank=True)
#     name  = models.CharField(max_length=100, null=False, blank=False)
#     email = models.EmailField(max_length=100, null=False, blank=False)
#     address = models.TextField(blank=True, null=True)
#     phone = models.CharField(max_length=15)

#     def __str__(self):
#         return self.name


class Basetable(models.Model):
    base_id = models.AutoField(primary_key=True)
    productname = models.CharField(max_length=100)
    description = models.CharField(max_length=100)

    class Meta:
        db_table = 'basetable'

    def _str_(self):
        return self.base_id

    

class Properties(models.Model):
    base_id= models.ForeignKey(Basetable, on_delete=models.CASCADE)
    product_id = models.AutoField(primary_key=True)
    original_price = models.IntegerField()
    price = models.IntegerField()

    class Meta:
        db_table = 'properties'

    def _str_(self):
        return self.product_id

    


class Dimensions(models.Model):
    id = models.AutoField(primary_key=True)
    length = models.DecimalField(max_digits=7, decimal_places =2)
    width = models.DecimalField(max_digits=7, decimal_places =2)
    heigth = models.DecimalField(max_digits=7, decimal_places =2)
    base_id= models.ForeignKey(Basetable, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Properties, on_delete=models.CASCADE)

    class Meta:
        db_table = 'dimensions'

    def _str_(self):
        return self.product_id



class Images(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    is_listimage = models.BooleanField(default=True)
    url = models.URLField(max_length=200)
    base_id= models.ForeignKey(Basetable, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Properties, on_delete=models.CASCADE)

    class Meta:
        db_table = 'images'

    def _str_(self):
        return self.name


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    productname = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    original_price = models.IntegerField()
    price = models.IntegerField()
    image_name = models.CharField(max_length=20)
    is_listimage = models.BooleanField(default=True)
    url = models.URLField(max_length=200)

    class Meta:
        db_table = 'id'

    def _str_(self):
        return self.id
    






