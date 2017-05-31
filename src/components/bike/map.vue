<template lang="html">
  <div id="app">
    <h1 class="pad">Map view</h1>
    <span v-if="loading" class="mids">
      <spinner name="circles" color="#5ac6ce" :size="200"></spinner>
    </span>
    <span v-if="!loading">
      <gmap-map class="pad"
        :center="center"
        :zoom="12"
        style="width: 100%; height: 300px"
        >
        <gmap-marker
          v-for="m in markers"
          :position="m.geometry.location"
          :clickable="true"
          :draggable="true"
          :scroll="false"
          :zoomControl= "false"
          :scaleControl= "false"
          :scrollwheel= "false"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>

      <div class="pad">
        <ul>
          <li v-for="info in maps"> {{ info.name }}</li>
        </ul>
      </div>
    </span>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: true,
      currentLocation: {
        currentLocationLat: null,
        currentLocationLon: null,
        currentLocation: null
      },
      maps: [],
      center: {
        lat: 39.757600,
        lng: -105.0069376000
      },
      markers: [{
        position: {}
      }]
    }
  },
  mounted () {
    console.log(this.center)
    axios.get('http://localhost:3000/map')
    .then((response) => {
      this.maps = response.data
      this.markers = response.data
      console.log(response.data)
    }).then(() => {
      this.loading = false
    })
    if ('geolocation' in navigator) {
      var gl = navigator.geolocation
      gl.getCurrentPosition(function (position) {
        this.currentLocation = position.coords
        this.currentLocationLon = position.coords.longitude
        this.currentLocationLat = position.coords.latitude
        console.log(this.currentLocation)
      }.bind(this)) // bind to `this` so it's the current component.
    }
  }
}
</script>

<style lang="css">
  .map-container {
    width: 500px;
    height: 300px;
  }
  .pad {
    padding-left: 25px;
    padding-right: 25px;
  }
  .mids {
    display: flex;
    justify-content: center;
  }
</style>
