<template>
<main id="main" role="main">
  <header class="container"></header>
  <article class="container">
      <section>
        <form v-bind:class="{'fadeInOut animated': this.animated}">
          <fieldset v-bind:class="{ 'hide': this.isActive }" >
            <div>
              <h2>{{question}}</h2>
              <router-link :to="this.yes.toString() + '?answer=yes'">Yes</router-link>
              <router-link :to="this.no.toString() + '?answer=no'">No</router-link>
            </div>
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
  name: 'Index',
  props: {
    arr: {
      default: function () {
        return questions
      },
      type: Array
    },
    radio: {
      default: function () {
        return null
      },
      type: Array
    },
    show: {
      default: function () {
        return true
      },
      type: Boolean
    }
  },
  data () {
    return {
      question: questions[0].question,
      yes: questions[0].yes,
      no: questions[0].no,
      animated: false,
      isActive: false,
      answers: []
    }
  },
  methods: {
    getQ (id, answer) {
      let self = this
      console.log(questions[id].yes, questions[id].no)
      self.animate()
      if (questions[id].yes === 'done' || questions[id].no === 'done') {
        self.question = 'done'
        self.isActive = true
        self.answers = []
        return self.question
      } else {
        self.isActive = false
        self.yes = questions[id].yes
        self.no = questions[id].no
        self.question = questions[id].question
      }
      self.answers.push(answer)
    },
    animate () {
      let self = this
      self.animated = true
      setTimeout(function () {
        self.animated = false
      }, 500)
    }
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

  },
  watch: {
    '$route': function (val) {
      if (val.query.answer === 'yes') {
        this.getQ(this.yes, 'yes')
      }
      if (val.query.answer === 'no') {
        this.getQ(this.no, 'no')
      }
      console.log(val.query.answer, val.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";

@keyframes fadeInOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeInOut {
  animation-name: fadeInOut;
}



$dark_blue:#2f4c67;
$med_blue:#4a7391;
$light_blue:#91b1c5;
$orange:#f7b320;
$off_white:#f5f5f5;

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

      color: $dark_blue;

      //@include grid-column(8, $article);

      @include grid-media($article-phone) {
          //@include grid-column(12, $article);
      }

      form {

        .hide {
          div {
            label,a {
              display: none;
            }
          }
        }

        fieldset {
              border: 5px solid $dark_blue;
              outline: none;
              margin: 0 auto;
              padding: 2rem;

          p {

          }

          input[type="radio"] {
              display: none;
          }

          label,a {
            padding: 10px 40px;
            background-color:transparent;
            color: $dark_blue;
            border: 5px solid $dark_blue;
            margin-right:10px;
            display: inline-block;
            text-transform:uppercase;
          }

          input[type="radio"]:checked + label {
              background-color: $dark_blue;
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





