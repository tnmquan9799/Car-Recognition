from django.db import models

# Create your models here.


class Brand(models.Model):
    name = models.CharField(max_length=200)
    detail = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name


class Segment(models.Model):
    name = models.CharField(max_length=200)
    detail = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Origin(models.Model):
    name = models.CharField(max_length=200)
    detail = models.CharField(max_length=100,null=True, blank=True)

    def __str__(self):
        return self.name


class Engine(models.Model):
    name = models.CharField(max_length=200)
    detail = models.TextField(null=True, blank=True)
    def __str__(self):
        return self.name


class FuelType(models.Model):
    name = models.CharField(max_length=200)
    detail = models.TextField(null=True, blank=True)
    def __str__(self):
        return self.name


class DriveType(models.Model):
    name = models.CharField(max_length=200)
    detail = models.TextField(null=True, blank=True)
    def __str__(self):
        return self.name


class TireSize(models.Model):
    name = models.CharField(max_length=200)
    detail = models.TextField(null=True, blank=True)
    def __str__(self):
        return self.name


class Car(models.Model):
    carName = models.CharField(max_length=100)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, null=True, blank=True)
    segment = models.ForeignKey(Segment, on_delete=models.CASCADE, null=True, blank=True)
    origin = models.ForeignKey(Origin, on_delete=models.CASCADE, null=True, blank=True)
    engines = models.ForeignKey(Engine, on_delete=models.CASCADE, null=True, blank=True)
    hoursePower = models.CharField(max_length=100, null=True, blank=True)
    torque = models.CharField(max_length=100, null=True, blank=True)
    fuelType = models.ForeignKey(FuelType, on_delete=models.CASCADE, null=True, blank=True)
    driveType = models.ForeignKey(DriveType, on_delete=models.CASCADE, null=True, blank=True)
    tireSize = models.ForeignKey(TireSize, on_delete=models.CASCADE, null=True, blank=True)
    highLight = models.CharField(max_length=100, null=True, blank=True)
    detail = models.TextField()

    def __str__(self):
        return self.carName
