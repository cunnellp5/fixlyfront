<template lang="html">
  <div class="bod">
    <h1>Help Form</h1>
    <div class="list">
      <div class="item multiple-lines">
        <i class="item-primary">edit</i>
        <div class="item-content">
          <div class="floating-label">
            <input required class="full-width">
            <label>Username</label>
          </div>
        </div>
      </div>
      <hr>
      <div class="item multiple-lines">
        <i class="item-primary">edit</i>
        <div class="item-content">
          <div class="floating-label">
            <input required class="full-width">
            <label>Floating Label</label>
          </div>
        </div>
      </div>
      <hr>
      <div class="item multiple-lines">
        <i class="item-primary">edit</i>
        <div class="item-content">
          <div class="floating-label">
            <input required class="full-width">
            <label>Floating Label</label>
          </div>
        </div>
      </div>
      <hr>
    </div>
    <p class="caption">Miscellaneous information</p>
    <div class="list">
      <div class="item multiple-lines item-delimiter">
        <div class="item-content floating-label">
          <!-- Notice "no-border" CSS class -->
          <input required class="full-width no-border">
        </div>
      </div>
    </div>
    <br>
    <button class="warning" type="button" name="button">Ping bike stores for help!</button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
