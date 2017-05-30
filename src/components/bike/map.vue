<template lang="html">
  <div id="app">
    <h1>Map view</h1>

    <gmap-map
      :center="center"
      :zoom="12"
      style="width: 100vw; height: 300px"
      >
      <gmap-marker
        v-for="m in markers"
        :position="m.geometry.location"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>

    <div>
      <ul>
        <li v-for="info in maps"> {{ info.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      maps: [],
      center: { lat: 39.74, lng: -104.99 },
      markers: [{
        position: {}
      }]
    }
  },
  mounted () {
    axios.get('http://localhost:3000/map')
    .then((response) => {
      this.maps = response.data
      this.markers = response.data
      console.log(response.data)
    })
  }
}
</script>


<style lang="css">
  .map-container {
    width: 500px;
    height: 300px;
  }
</style>
