from django.db import models

# Create your models here.


class Brand(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Segment(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Origin(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Engine(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class FuelType(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class DriveType(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class TireSize(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Car(models.Model):
    carName = models.CharField(max_length=500)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    segment = models.ForeignKey(Segment, on_delete=models.CASCADE)
    origin = models.ForeignKey(Origin, on_delete=models.CASCADE)
    engines = models.ForeignKey(Engine, on_delete=models.CASCADE)
    hoursePower = models.CharField(max_length=1000)
    torque = models.CharField(max_length=1000)
    fuelType = models.ForeignKey(FuelType, on_delete=models.CASCADE)
    driveType = models.ForeignKey(DriveType, on_delete=models.CASCADE)
    tireSize = models.ForeignKey(TireSize, on_delete=models.CASCADE)
    highLight = models.CharField(max_length=1000)

    def __str__(self):
        return self.carName
