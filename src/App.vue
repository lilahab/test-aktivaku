<template>
  <div id="app">
     <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#" style="margin-right:1000px;">lorem ipsum dolor</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" right>
        <b-nav-item href="#">lorem</b-nav-item>
        <b-nav-item href="#">lorem</b-nav-item>
        <b-nav-item href="#">
          <img src="./assets/fb.png" style="width:50%;" alt="fb">
        </b-nav-item>
        <b-nav-item href="#">
          <img src="./assets/tw.png" style="width:40%;" alt="tw">
        </b-nav-item>
        <b-nav-item href="#">
          <img src="./assets/ig.png" style="width:40%;" alt="ig">
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <br>
    <Test msg="lorem ipsum dolor sit amet consectetur"/>
  </div>
</template>

<script>
import Test from './components/Test.vue'

export default {
  name: 'app',
  components: {
    Test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
