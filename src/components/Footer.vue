<template>
<footer class="site-footer" role="contentinfo">
  <div class="container">
      <p>{{msg}}</p>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'This is a footer element'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";
footer {
  color:#fff;
  background:#000;
  margin-top: 100px;
  div {
    padding:5rem 2rem;
  }
}
</style>
