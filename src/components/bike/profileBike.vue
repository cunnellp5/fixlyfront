<template lang="html">
  <div class="bod">
    <h1>Profile</h1>
    <!-- <li v-for="info in user"> {{ info.username }}</li> -->
    <div class="card">
      <div class="item two-lines bod">
        <img style="margin-left:10px" class="item-primary" src="http://placehold.it/200x200">
        <div class="item-content">
          <div v-model="user"> {{ user.username }} </div>
          <div v-model="user"> {{ user.email }} </div>
        </div>
      </div>
      <img src="http://lorempixel.com/1000/300/sports/">
      <div class="card-content bod" v-model="user">
        {{ user.address }} | {{ user.phone }}
      </div>
      <div class="card-actions bod">
        <div class="text-primary">
          <i>thumb_up</i> 11k likes
        </div>
        <div class="text-primary">
          <i>mode_comment</i> 8 comments
        </div>
        <div class="auto"></div>
      </div>
    </div>
    <p>History</p>
    <div class="list">
      <q-collapsible
        icon="done"
        :label="data.description"
        v-for="data in helps">
        Rescued by:
        <ul class="bg">
          <em><li>Phil</li></em>
        </ul>
        Date:
        <ul class="bg">
          <li>
            <em>{{ data.day }}</em>
          </li>
          <li>
            <em>{{ data.time }}</em>
          </li>
        </ul>
      </q-collapsible>
    </div>
    <br>

</div>
</template>

<script>
export default {
  data () {
    return {
      helps: this.$store.state.help.AllHelpsAtUser,
      user: this.$store.state.user.Users['0']
    }
  },
  mounted () {
    this.$store.dispatch('bicycleUser')
    this.$store.dispatch('userHelps')
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    },
    decrement () {
      this.$store.dispatch('decrement')
    }
  }
}
</script>

<style lang="css">
  .bod {
    padding-left: 25px;
    padding-right: 25px;
  }
  li {
    list-style-type: none;
  }
  .bg {
    background-color: #d8e7ff;
  }
</style>
