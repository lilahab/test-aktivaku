<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
    </p>
    <h3>Progress</h3>
    <br>
      <TestProgress /> 
    <h3> Line Graph</h3>
      <TestGraph />
    <h3>Maps</h3>
      <TestMap />
  </div>
</template>

<script>
import TestProgress from './TestProgress.vue'
import TestGraph from './TestGraph.vue'
import TestMap from './TestMap.vue'

export default {
  name: 'Test',
  components: {
    TestProgress,
    TestGraph,
    TestMap
    },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
