<template lang="html">
  <div class="bod">
    <h1>Profile</h1>
    <!-- <li v-for="info in user"> {{ info.username }}</li> -->
    <!-- <div>
      <div class="row">
        <img src="http://placehold.it/200x200" alt="">
        <div class="auto">

        </div>
      </div>
      <div class="row">
        <div class="auto">Second column</div>
        <div class="auto">Third column</div>
        <div class="auto">First column</div>
      </div>
    </div> -->
    <div class="card bod">
      <div class="item two-lines">
        <img class="item-primary" src="http://placehold.it/200x200">
        <div class="item-content">
          <div v-model="user"> {{ this.user['0'].username }} </div>
          <div v-model="user"> {{ this.user['0'].email }} </div>
        </div>
      </div>
      <img src="http://lorempixel.com/1000/300/sports/">
      <div class="card-content" v-model="user">
        {{ this.user['0'].address }} | {{ this.user['0'].phone }}
      </div>
      <div class="card-actions">
        <div class="text-primary">
          <i>thumb_up</i> 11k likes
        </div>
        <div class="text-primary">
          <i>mode_comment</i> 8 comments
        </div>
        <div class="auto"></div>
        <div class="text-grey-6" v-model="time">
          {{ time }}
        </div>
      </div>
    </div>
    <p>Help log</p>
    <div class="list">
      <q-collapsible icon="explore" label="First">
        <div>
          Content
        </div>
      </q-collapsible>
      <q-collapsible icon="perm_identity" label="Second">
        <div>
          Content
        </div>
      </q-collapsible>
      <q-collapsible icon="shopping_cart" label="Third">
        <div>
          Content
        </div>
      </q-collapsible>
    </div>
    <br>

    <!-- <div>
      {{ this.$store.state.myValue }}
    </div>
    <br>
    <button @click="decrement" type="button" name="button" class="secondary width-1of5">-</button>
    <button @click="increment" type="button" name="button" class="primary width-1of5">+</button> -->
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      time: '',
      user: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/users')
    .then((response) => {
      this.user = response.data.Users
    })
    if (new Date().getHours() > 12) {
      this.time = new Date().getHours() - 12 + ' PM'
    }
    else {
      this.time = new Date().getHours() + ' AM'
    }
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
    padding-left: 25px;
    padding-right: 25px;
  }
</style>
