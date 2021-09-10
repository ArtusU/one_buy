from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "one_buy.users"
    verbose_name = _("Users")

    def ready(self):
        try:
            import one_buy.users.signals  # noqa F401
        except ImportError:
            pass
