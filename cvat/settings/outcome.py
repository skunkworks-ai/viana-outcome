from .production import *  # pylint: disable=wildcard-import

LOGO_FILENAME = "outcome-logo.png"
ABOUT_INFO = {
    "subtitle": "Viana Outcome",
}

# Email backend settings for Django
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = os.environ.get("EMAIL_HOST", None)
EMAIL_HOST_USER = os.environ.get("EMAIL_HOST_USER", None)
EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD", None)
EMAIL_PORT = 587
EMAIL_USE_TLS = True

# https://github.com/pennersr/django-allauth
DEFAULT_FROM_EMAIL = os.environ.get("DEFAULT_FROM_EMAIL", None)
