######################################
#
# audiorouter
#
######################################
AUDIOROUTER_VERSION = bc63aa3b7c60b4658e8adcff72b254bd151ab4e3
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