<template>
  <div class="dialog">
    <div class="dialog__inner">
      <h3>Edit User</h3>
      <p>Content</p>
      <h1>This is the a deep nested {{ this.$route.params.id }}</h1>
      <br>
      <a class="btn" @click="close">Close</a>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss">
.dialog {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(#333, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    background-color: white;
    padding: 30px;
    width: 300px;
  }
}
</style>