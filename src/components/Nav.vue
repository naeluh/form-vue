<template>
<header id="header" class="header" role="banner">
  <nav>
    <div class="logo">
      <a href="#"><img src="../assets/getty_logo_og.png"></a>
    </div>
    <div class="nav">
      <ul>
        <li><a href="#">{{msg}}</a></li>
        <li><a href="#">{{msg}}</a></li>
        <li><a href="#">{{msg}}</a></li>
        <li><a href="#">{{msg}}</a></li>
      </ul>
  	</div>
  </nav>
</header>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: 'LINK'
    }
  }
}
</script>

<style lang="scss" scoped>

@import "../assets/scss/main";
$nav: (columns: 12,gutter: 0);

nav {
	@include grid-container;
    position:relative;
	margin-bottom:4rem;
	height:80px;

	.logo {
      @include grid-column(3);
	    background: url(../assets/getty_logo_og.png);
	    background-image: url(../assets/getty_logo_og.png),none;
	    background-repeat: no-repeat;
	    background-position: left center;
	    background-size: 100% auto;
	    position: absolute;
	    display: block;
	    top: 0;
	    left: 0;
	    width: 80px;
	    height: 80px;
	    line-height: 1;
	    overflow: hidden;
	    text-indent: 9999px;
	    z-index: 1;
	    margin-left: 0;
	}

	.nav {
		@include grid-column(9);

		float: right;
		ul {
		  height: 80px;
		  margin:0 auto;
		  padding:0;
		  list-style-type: none;
		  @include grid-container;
		  li {
			    cursor: pointer;
			   @include grid-column(3, $nav);
		    a {
		    	text-align:center;
			    padding: 28px 0;
			    font-size: 21px;
			    display: block;
			    background: #000;
			    color: #fff;
			    font-weight: 900;
			    text-decoration: none;
		    }
		  }
		}
	}
}
</style>
