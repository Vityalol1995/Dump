<template>
  <div>
  <div class="leafs-right"></div>
<!--  <div class="bg2"></div>-->
  <div id="q-app">
    <Header/>
    <Info/>
    <router-view />
    <Footer burger/>
  </div>
  </div>
</template>
<script>
import Header from "components/Mainlayouts/Header";
import Info from "components/Mainlayouts/Info";
import Footer from "components/Mainlayouts/Footer";
export default {
  name: 'App',
  components: {Footer, Info, Header},
}
</script>
