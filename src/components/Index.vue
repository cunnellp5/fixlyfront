<template>
  <div>
    <h1 class="text-center">Fixly</h1>
    <div class="flex justify-center">
      <router-link to='bike/profile'>
        <button type="button" name="button" class="primary width-1of5">bike</button>
      </router-link>
      <router-link to='clerk/profile'>
        <button type="button" name="button" class="secondary width-1of5">clerk</button>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">

</style>
