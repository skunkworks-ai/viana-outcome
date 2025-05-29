import os

# Inherit parent config
from .production import *  # pylint: disable=wildcard-import

# Email backend settings for Django
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = os.environ.get('EMAIL_HOST', None)
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER', None)
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD', None)
EMAIL_PORT = int(os.environ.get('EMAIL_PORT', '0'))
if EMAIL_PORT == 587:
    EMAIL_USE_TLS = True
