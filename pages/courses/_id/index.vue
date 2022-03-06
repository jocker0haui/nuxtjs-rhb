<template>

  <section>
    <div class="r">
      <div class="ct">
        <div class="d_flex justify_content_between my_3">
          <!-- <h3>Deck : {{ deck.name }}</h3> -->
        </div>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click="openModal">
            Create card
          </button>
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

      <v-modal name="modalcourse">
        <div class="modalcourse-body">
          <h1>Create a new card</h1>
          <CardForm />
        </div>
      </v-modal>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'

import CardList from '@/components/Cards/CardList'
import CardForm from '@/components/Cards/CardForm'
export default {
  name: 'IndexPage',
  components: {
    CardList,
    CardForm,
  },
  // validate({ params, query, store }) {
    // console.log(params.id)
    // return /^[0-9]{1,5}$/.test(params.id)
  // },
  
  data() {
    return {
      cards:[
        {
          id: 1,
          keyword: 'bài 1',
          thumbnail: '/_nuxt/assets/images/adu.png',
        }
      ]
    }
  },
 
  // created() {
  //   this.cards = this.$store.getters.cards
  // },

  // computed: {
  //   cards() {
  //     return this.$store.getters.cards
  //   },
  // },

  methods: {
    openModal() {
      this.$modal.open({ name: 'modalcourse' })
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

.modalcourse-body {
  padding: 20px;
}
</style>
