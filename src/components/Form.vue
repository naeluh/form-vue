<template>
<main id="main" role="main">
  <header class="container"></header>
  <article class="container">
      <section>
        <form v-bind:class="{'fadeInOut animated': this.animated}">
          <fieldset v-bind:class="{ 'hide': this.isActive }" >
            <div>
                <h2>{{question}}</h2>
              <input id="toggle-on" name="toggle" type="radio" value="yes" v-model="radio">
              <label for="toggle-on">Yes</label>
              <input id="toggle-off" name="toggle" type="radio" value="no" v-model="radio">
              <label for="toggle-off">No</label>
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
  name: 'Form',
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
    question: {
      default: function () {
        return questions[0].question
      },
      type: Array
    },
    yes: {
      default: function () {
        return questions[0].yes
      },
      type: Array
    },
    no: {
      default: function () {
        return questions[0].no
      },
      type: Array
    },
    answers: {
      default: function () {
        return []
      },
      type: Array
    },
    isActive: {
      default: function () {
        return false
      },
      type: Boolean
    },
    animated: {
      default: function () {
        return false
      },
      type: Boolean
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
    }
  },
  methods: {
    getQ (id, answer) {
      this.animate()
      if (questions[id].yes === 'done' || questions[id].no === 'done') {
        this.question = 'done'
        this.isActive = true
        this.radio = null
        return this.question
      }
      this.yes = questions[id].yes
      this.no = questions[id].no
      this.question = questions[id].question
      this.radio = null
      this.answers.push(answer)
    },
    animate () {
      let self = this
      self.animated = true
      setTimeout(function () {
        self.animated = false
      }, 500)
    }
  },
  watch: {
    'radio': function (val) {
      if (val === 'yes') {
        this.getQ(this.yes, 'yes')
      }
      if (val === 'no') {
        this.getQ(this.no, 'no')
      }
    }
  }
}
</script>

<style lang="scss">
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
            label {
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

          label {
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





