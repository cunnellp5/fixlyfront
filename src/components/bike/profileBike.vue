<template lang="html">
  <div class="">
    <h1>Profile view</h1>
    <div>
      {{ this.$store.state.myValue }}
    </div>
    <br>
    <button @click="decrement" type="button" name="button" class="secondary width-1of5">-</button>
    <button @click="increment" type="button" name="button" class="primary width-1of5">+</button>
</div>
</template>

<script>
export default {
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
</style>
