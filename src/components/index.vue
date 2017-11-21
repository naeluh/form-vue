<template>
<main id="main" role="main">
  <header class="container"><h1>Tum mihi Piso: Quid ergo?</h1></header>
  <article class="container">
      <section>
<h2>Tum mihi Piso: Quid ergo?</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Virtutibus igitur rectissime mihi videris et ad consuetudinem nostrae orationis vitia posuisse contraria. Aut haec tibi, Torquate, sunt vituperanda aut patrocinium voluptatis repudiandum. Duo Reges: constructio interrete. Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius. Si autem id non concedatur, non continuo vita beata tollitur. Sed ego in hoc resisto; </p>

<p>Apparet statim, quae sint officia, quae actiones. Quid est, quod ab ea absolvi et perfici debeat? Eaedem enim utilitates poterunt eas labefactare atque pervertere. Est, ut dicis, inquit; </p>

<h2>Si longus, levis.</h2>

<p>Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Non dolere, inquam, istud quam vim habeat postea videro; Intrandum est igitur in rerum naturam et penitus quid ea postulet pervidendum; Illi enim inter se dissentiunt. Est autem etiam actio quaedam corporis, quae motus et status naturae congruentis tenet; Ita fit cum gravior, tum etiam splendidior oratio. </p>

<h3>Placet igitur tibi, Cato, cum res sumpseris non concessas, ex illis efficere, quod velis?</h3>

<p>Quam nemo umquam voluptatem appellavit, appellat; Quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? </p>

<p>Et quidem, inquit, vehementer errat; Iam enim adesse poterit. Traditur, inquit, ab Epicuro ratio neglegendi doloris. An quod ita callida est, ut optime possit architectari voluptates? Ad eos igitur converte te, quaeso. Sed quid minus probandum quam esse aliquem beatum nec satis beatum? Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Idemne potest esse dies saepius, qui semel fuit? Quis non odit sordidos, vanos, leves, futtiles? </p>


      </section>
      <aside>
  <h3>Placet igitur tibi, Cato, cum res sumpseris non concessas, ex illis efficere, quod velis?</h3>

<p>Quam nemo umquam voluptatem appellavit, appellat; Quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? </p>

<p>Et quidem, inquit, vehementer errat; Iam enim adesse poterit. Traditur, inquit, ab Epicuro ratio neglegendi doloris. An quod ita callida est, ut optime possit architectari voluptates? Ad eos igitur converte te, quaeso. Sed quid minus probandum quam esse aliquem beatum nec satis beatum? Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Idemne potest esse dies saepius, qui semel fuit? Quis non odit sordidos, vanos, leves, futtiles? </p>      
      </aside>
    </article>
  </main>
</template>

<script>
/* import axios from 'axios' */

export default {
  name: 'Index',
  data () {
    return {
      arr: []
    }
  },
  methods: {
    /*
    get (params) {
      console.log(this.$route)
      const uri = this.$route.params.id
      return axios.get(`https://nhm.org/nature/map/map/searchobservations?params[project_id]=` + uri)
      .then((res) => {
        this.arr = res.data
      })
    }
    */
  },
  created () {
    /* this.get() */
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";

$article: (
  columns: 12,
  gutter: 2rem
);

$article-phone: (
  columns: 12,
  gutter: 2rem,
  media: "(max-width: 768px)",
);

#main {

    header {
      padding-left:2rem;
    }

    article {
      @include grid-container;
    }

    section {
      @include grid-column(8, $article);

      @include grid-media($article-phone) {
          @include grid-column(12, $article);
      }
    }

    aside {
      @include grid-column(4, $article);
      
      @include grid-media($article-phone) {
          @include grid-column(12, $article);
      }
    }

}


</style>





