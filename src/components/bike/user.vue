<template lang="html">
  <q-layout>
      <!-- Header -->
      <div slot="header" class="toolbar">
        <!-- opens left-side drawer using its ref -->
        <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
          <i>navigate_before</i>
        </button>
        <q-toolbar-title :padding="1">
          <h3 v-link.replace=" '/' " class="gt-md">
            Fixly Bike
          </h3>
          <h3 v-link.replace=" '/' " class="lt-md md text-center">
            Fixly Bike
          </h3>
        </q-toolbar-title>
        <!-- opens right-side drawer using its ref -->
        <button class="hide-on-drawer-visible" @click="$refs.rightDrawer.open()">
            <i>navigate_next</i>
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
            About fixly
          </q-drawer-link>
          <hr>
          <div class="list-label">Info Navigator</div>
          <q-drawer-link icon="account_circle" to="/bike/profile" active>
            Profile
          </q-drawer-link>
          <q-drawer-link icon="map" to="/bike/map">
            Map
          </q-drawer-link>
          <q-drawer-link icon="track_changes" to="/bike/help">
            Help
          </q-drawer-link>
        </div>
      </q-drawer>
      <!-- IF USING subRoutes only: -->
      <router-view class="layout-view"> help</router-view>
      <!-- OR ELSE, IF NOT USING subRoutes: -->
      <!-- <div class="layout-view"></div> -->
      <!-- Right-side Drawer -->
      <q-drawer ref="rightDrawer" v-touch-swipe="handler" right-side>
        <p class="text-grey-7" style="padding: 25px;">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </q-drawer>
      <!-- Footer -->
      <div slot="footer" class="toolbar">
        &#9400; Fixly
      </div>
  </q-layout>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
