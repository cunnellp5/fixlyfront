<template lang="html">
  <div class="bod">
    <h1>Profile view</h1>
    <li v-for="info in user"> {{ info.username }}</li>
    <!-- <div>
      {{ this.$store.state.myValue }}
    </div>
    <br>
    <button @click="decrement" type="button" name="button" class="secondary width-1of5">-</button>
    <button @click="increment" type="button" name="button" class="primary width-1of5">+</button> -->
    <q-ajax-bar></q-ajax-bar>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      user: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/users')
    .then((response) => {
      this.user = response.data.Users
      console.log(response.data.Users)
    })
  }
  // methods: {
  //   increment () {
  //     this.$store.dispatch('increment')
  //   },
  //   decrement () {
  //     this.$store.dispatch('decrement')
  //   }
  // }
}
</script>

<style lang="css">
  .bod {
    padding: 25px;
  }
</style>
