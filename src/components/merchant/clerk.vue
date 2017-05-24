<template lang="html">
  <q-layout>
      <!-- Header -->
      <div slot="header" class="toolbar">
        <!-- opens left-side drawer using its ref -->
        <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
          <i>menu</i>
        </button>
        <q-toolbar-title :padding="1">
            <h3 v-link.replace=" '/' " class="gt-md">
              Fixly Store
            </h3>
            <h3 v-link.replace=" '/' " class="lt-md md text-center">
              Fixly Store
            </h3>
        </q-toolbar-title>
        <!-- opens right-side drawer using its ref -->
        <button class="hide-on-drawer-visible" @click="$refs.rightDrawer.open()">
            <i>menu</i>
          </button>
      </div>
      <!-- Navigation Tabs -->
      <q-tabs slot="navigation">
          <q-tab icon="account_circle" route="/bike/profile" exact replace>Profile</q-tab>
          <q-tab icon="map" route="/bike/map" exact replace>Map</q-tab>
          <q-tab icon="help" route="/bike/help" exact replace>Help</q-tab>
      </q-tabs>

      <!-- Left-side Drawer -->
      <q-drawer ref="leftDrawer" v-touch-swipe="handler">
        <div class="toolbar light">
          <q-toolbar-title :padding="1">
              Drawer
          </q-toolbar-title>
        </div>

        <div class="list no-border platform-delimiter">
          <q-drawer-link icon="view_quilt" to="/bike/about" exact>
            About Layout
          </q-drawer-link>
          <hr>
          <div class="list-label">Info Navigator</div>
          <q-drawer-link icon="account_circle" to="/bike/profile">
            Profile
          </q-drawer-link>
          <q-drawer-link icon="map" to="/bike/map">
            Map
          </q-drawer-link>
          <q-drawer-link icon="help" to="/bike/help">
            Help
          </q-drawer-link>
        </div>
      </q-drawer>
      <!-- IF USING subRoutes only: -->
      <router-view class="layout-view"> help</router-view>
      <!-- OR ELSE, IF NOT USING subRoutes: -->
      <!-- <div class="layout-view"></div> -->
      <!-- Right-side Drawer -->
      <q-drawer ref="rightDrawer" right-side v-touch-swipe="handler">
        <p class="text-grey-7" style="padding: 25px;">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </q-drawer>
      <!-- Footer -->
      <div slot="footer" class="toolbar">
        <i>star</i>
        <i>star</i>
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
}
</script>

<style lang="css">
</style>
