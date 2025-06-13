from django.db import models

class AppMetadata(models.Model):
    """Minimal model to establish core's database presence"""
    maintenance_mode = models.BooleanField(default=False)
    
    class Meta:
        verbose_name = "Application Metadata"