<template>
  <img alt="LFP logo" src="./assets/logo.svg" height="100">
  <PlaceOrder msg="LibreFoodPantry Order Example"/>
</template>

<script>
import PlaceOrder from './components/PlaceOrder.vue'

export default {
  name: 'App',
  components: {
    PlaceOrder
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
