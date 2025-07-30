<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss" scoped>
  html, body{
    width: 100%;
    height: 100%;
  }
  body{
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
