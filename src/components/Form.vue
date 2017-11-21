<template>
<main id="main" role="main">
  <header class="container"></header>
  <article class="container">
      <section>
        <form v-for="(value, key, index) in arr">
          <fieldset v-if="picked === 'yes' && value.yes === value.id">
            <h2>{{value.id}} {{value.question}}</h2>
            <input id="toggle-on" name="toggle" type="radio" value="yes" v-model="picked">
            <label for="toggle-on">Yes</label>
            <input id="toggle-off" name="toggle" type="radio" value="no" v-model="picked">
            <label for="toggle-off">No</label>
            {{picked}}
          </fieldset>
          <fieldset v-else-if="picked === 'no' && value.no === value.id">
            <h2>{{value.id}} {{value.question}}</h2>
            <input id="toggle-on" name="toggle" type="radio" value="yes" v-model="picked">
            <label for="toggle-on">Yes</label>
            <input id="toggle-off" name="toggle" type="radio" value="no" v-model="picked">
            <label for="toggle-off">No</label>
            {{picked}}
          </fieldset>
          <fieldset v-else-if="value.id === 0">
            <h2>{{value.id}} {{value.question}}</h2>
            <input id="toggle-on" name="toggle" type="radio" value="yes" v-model="picked">
            <label for="toggle-on">Yes</label>
            <input id="toggle-off" name="toggle" type="radio" value="no" v-model="picked">
            <label for="toggle-off">No</label>
            {{picked}}
          </fieldset>
        </form>
      </section>
    </article>
  </main>
</template> 

<script>
/* import axios from 'axios' */
import questions from '../assets/data/questions.json'

export default {
  name: 'Form',
  data () {
    return {
      arr: questions,
      picked: null,
      question: questions[0].question
    }
  },
  methods: {
    check () {
      console.log(questions)
      for (var i = questions.length - 1; i >= 0; i--) {
        if (this.picked === 'yes') {
          console.log(questions[i].yes)
        }
        if (this.picked === 'no') {
          console.log(questions[i].no)
        }
      }
    },
    getQ () {}
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
    this.check()
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

      form {
        fieldset {
              border: 0;
              outline: none;
              margin: 0 auto;
              padding: 0;

          p {

          }

          input[type="radio"] {
              display: none;
          }

          label {
            padding: 10px 40px;
            background-color: #fff;
            color:#000;
            border: thin solid #000;
            margin-right:10px;
            display: inline-block;
          }

          input[type="radio"]:checked + label {
              background-color: #000;
              cursor: default;
              color: #fff;
          }
        }
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





