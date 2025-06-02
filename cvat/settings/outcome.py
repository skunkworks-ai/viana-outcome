import os

# Inherit parent config
from .production import *  # pylint: disable=wildcard-import

# Email backend settings for Django
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
