######################################
#
# audiorouter
#
######################################
AUDIOROUTER_VERSION = 7dd28b9b6559b72aea9e75fa0cfc169591428cca
AUDIOROUTER_SITE = https://github.com/stivb/audiorouter.git
AUDIOROUTER_SITE_METHOD = git
AUDIOROUTER_BUNDLES = audiorouter.lv2

AUDIOROUTER_TARGET_MAKE = $(TARGET_MAKE_ENV) $(TARGET_CONFIGURE_OPTS) $(MAKE) MOD=1 OPTIMIZATIONS="" PREFIX=/usr -C $(@D)/source

define AUDIOROUTER_BUILD_CMDS
	$(AUDIOROUTER_TARGET_MAKE)
endef

define AUDIOROUTER_INSTALL_TARGET_CMDS
	$(AUDIOROUTER_TARGET_MAKE) install DESTDIR=$(TARGET_DIR)
endef

$(eval $(generic-package))