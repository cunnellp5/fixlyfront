<template>
  <q-layout>

      <!-- Header -->
      <div slot="header" class="toolbar">
        <!-- opens left-side drawer using its ref -->
        <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
          <i>menu</i>
        </button>
        <q-toolbar-title :padding="1">
          Fix-my-shit
        </q-toolbar-title>
        <!-- opens right-side drawer using its ref -->
        <button class="hide-on-drawer-visible" @click="$refs.rightDrawer.open()">
            <i>menu</i>
          </button>
      </div>
      <!-- Navigation Tabs -->
      <q-tabs slot="navigation">
        <q-tab icon="mail" route="/layout" exact replace>Mails</q-tab>
        <q-tab icon="alarm" route="/layout/alarm" exact replace>Alarms</q-tab>
        <q-tab icon="help" route="/layout/help" exact replace>Help</q-tab>
      </q-tabs>
      <!-- Left-side Drawer -->
      <q-drawer ref="leftDrawer">
        <div class="toolbar light">
          <q-toolbar-title>
            Drawer Title
          </q-toolbar-title>
        </div>
        <div class="list no-border platform-delimiter">
          <q-drawer-link icon="mail" :to="{path: '/', exact: true}">
            About
          </q-drawer-link>
          <hr>
          <div class="list-label">Components</div>
          <div class="item item-link drawer-closer">
            <i class="item-primary">tab</i>
            <div class="item-content">
              Profile
            </div>
          </div>
        </div>
      </q-drawer>
      <!-- IF USING subRoutes only: -->
      <router-view class="layout-view"></router-view>
      <!-- OR ELSE, IF NOT USING subRoutes: -->
      <div class="layout-view"></div>
      <!-- Right-side Drawer -->
      <q-drawer ref="rightDrawer" right-side>
        <p class="text-grey-7" style="padding: 25px;">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </q-drawer>
      <!-- Footer -->
      <div slot="footer" class="toolbar">
        Footer
      </div>


    <!--
      Replace following "div" with
      "<router-view class="layout-view">" component
      if using subRoutes
    -->

    <!-- <div class="layout-view">
      <div class="logo-container non-selectable no-pointer-events">
        <div class="logo" :style="position">
          <img src="~assets/quasar-logo.png">
          <p class="caption text-center">
          </p>
        </div>
      </div>
    </div> -->

  </q-layout>
</template>

<script>
export default {
  data () {
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
.logo-container
  width 192px
  height 268px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
