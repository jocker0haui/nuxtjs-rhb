<template>
  <section>
    <div class="r">
      <div class="ct">
        <div class="d_flex justify_content_between my_3">
          <h3>Deck : {{ deck.name }} {{ $route.params.id }}</h3>
        </div>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click="openModal('modalcard')">
            Create card
          </button>
          <button class="btn btn_warning" @click="openModal('modaldeck')">Edit Deck</button>
        </div>
        <hr class="divide" />
        <div class="r cards">
          <CardList
            v-for="card in cards"
            :id="card.id"
            :key="card.id"
            :keyword="card.keyword"
            :thumbnail="card.thumbnail"
          />
        </div>
      </div>

      <!-- modal -->
      <v-modal name="modalcard">
        <div class="modalcard-body">
          <h1>Create a new card</h1>
          <CardForm />
        </div>
      </v-modal>


    </div>
  </section>
</template>

<script>
import axios from 'axios'

import CardList from '@/components/Cards/CardList'
import CardForm from '@/components/Cards/CardForm'

export default {
  
  name: 'IndexPage',
  components: {
    CardList,
    CardForm,
  },
  // validate({ params, query, store }) {
  // console.log({ params, query, store })
  // console.log(params.id)
  // return /^[0-9]{1,5}$/.test(params.id)
  // kiểm tra xem params.id có các kí tự /^ từ [0-9] và độ dài {1,5}kí tự $/
  // },
  middleware : ['checkAuth','auth'] ,
  asyncData({ params, error }) {
    // console.log(params.id)
    return axios
      .get(
        `https://nuxt-lv1-default-rtdb.firebaseio.com/decks/${params.id}.json`
      )
      .then((res) => {
        // console.log(res.data)
        return {
          deck: res.data,
        }
      })
      .catch((e) => {
        error(e)
      })
  },
  data() {
    return {
      cards: [
        // {
        //   id: '1',
        //   keyword: 'bài 1',
        //   thumbnail: '/_nuxt/assets/images/adu.png',
        // }
      ],
    }
  },
  // asyncData(context) {
  //   return new Promise((resolve, reject) => {
  //     resolve({
  //       cards: [
  //         {
  //           id: 5,
  //           keyword: 'bài 5',
  //           thumbnail: '/_nuxt/assets/images/adu.png',
  //         },
  //       ],
  //     })
  //   })
  //     .then((data) => {
  //       console.log(data)
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // },
  fetch(context) {
    return new Promise((resolve, reject) => {
      resolve({
        cards: [
          {
            id: 5,
            keyword: 'bài 5',
            thumbnail: '/_nuxt/assets/images/adu.png',
          },
        ],
      })
    })
      .then((data) => {
        context.store.dispatch('setCards', data.cards)
      })
      .catch((e) => {
        // console.log(e)
      })
  },
  // head : {
  //   title : 'deck con'
  // },
   head() {
     return {
       title : `deck : ${this.deck.name}` // muốn truyền value vào thì 
     }
  },
  created() {
    this.cards = this.$store.getters.cards
  },

  // computed: {
  //   cards() {
  //     return this.$store.getters.cards
  //   },
  // },

  methods: {
    openModal(name) {
      // if (name === 'modalcard') {
      //   this.$modal.open({ name: 'modalcard' })
      // } else if (name === 'modaldeck') {
      //   this.$modal.open({ name: 'modaldeck' })
      // }
      switch (name) {
        case 'modalcard':
          this.$modal.open({ name: 'modalcard' })
          break
        case 'modaldeck':
          this.$modal.open({ name: 'modaldeck' ,payload : {...this.deck, id : this.$route.params.id} })
          break

        default:
          break
      }
    },
  },
}
</script>

<style scoped>
section {
  margin-top: 40px;
}

.divide {
  margin: 2rem 0;
}

.modalcard-body {
  padding: 20px;
}
</style>
