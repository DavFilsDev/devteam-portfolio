from .base import *
import os
from dotenv import load_dotenv

load_dotenv()  # Load from .env file

DEBUG = True

SECRET_KEY = os.getenv('SECRET_KEY') # For development only

ALLOWED_HOSTS = ['*']  # For development only

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME'),
        'USER': os.getenv('DB_USER'),
        'PASSWORD': os.getenv('DB_PASSWORD'),
        'HOST': os.getenv('DB_HOST'),
        'PORT': os.getenv('DB_PORT'),
    }
}

# CORS settings for development
CORS_ALLOW_ALL_ORIGINS = True

# Email settings for development
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# Django REST Framework settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',  # For development only
    )
}

# Additional development apps
INSTALLED_APPS += [
   
]

# Additional development middleware
MIDDLEWARE += [

]

# Debug toolbar settings (optional)
INTERNAL_IPS = [
    '127.0.0.1',
]