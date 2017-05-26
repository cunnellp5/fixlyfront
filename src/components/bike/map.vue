<template lang="html">
  <div>
    <h1>Map view</h1>
    <div v-for="info in maps">
      <ul>
        <li> {{ info.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      maps: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/map')
    .then((response) => {
      this.maps = response.data
    })
  }
}
</script>


<style lang="css">
</style>
