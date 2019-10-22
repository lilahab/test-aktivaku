<template>
  <div id="mapid"></div>
</template>

<script>
import Leaflet from 'leaflet'

export default {
    name: 'TestMap',
    mounted() {
        var mymap = Leaflet.map('mapid').setView([-6.2117209,106.8196038,17], 11)
        Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'sk.eyJ1Ijoic2FuYWtkYW0iLCJhIjoiY2syMjNweTNiMDU3NzNucGdtMjZzbHdmaSJ9.yljDQJJYRR9Y2JndUJl5Pg'
        }).addTo(mymap)
    });

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

    #mapid { height: 500px; }
</style>
