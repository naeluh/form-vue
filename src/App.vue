<template>
  <div id="app">
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
}
</style>

<style lang="scss">
@import "./assets/scss/main";
@font-face {
  font-family: 'GT-Walsheim-Condensed-Regular';
  src: url("./assets/fonts/gt-walsheim/GT-Walsheim-Pro-Condensed-Regular.eot");
  src: url("./assets/fonts/gt-walsheim/GT-Walsheim-Pro-Condensed-Regular.eot?#iefix") format("embedded-opentype"), 
       url("./assets/fonts/gt-walsheim/GT-Walsheim-Pro-Condensed-Regular.woff2") format("woff2"),
       url("./assets/fonts/gt-walsheim/GT-Walsheim-Pro-Condensed-Regular.woff") format("woff"), 
       url("./assets/fonts/gt-walsheim/GT-Walsheim-Pro-Condensed-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
</style>
