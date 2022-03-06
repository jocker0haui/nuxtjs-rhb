<template>
  <div>
    <CpnHeader />
    <Nuxt />
    <v-modal v-slot="payload" name="modaldeck">
      <div class="modaldeck-body">
        <h1>
          {{
            payload && payload.payload
              ? 'Edit a deck theo id'
              : 'Create a new deck'
          }}
        </h1>
        <DeckForm :deck="payload.payload" @submitDeck="onSubmit" />
      </div>
    </v-modal>
    <CpnFooter />
  </div>
</template>
<script>
import CpnHeader from '../components/Header.vue'
import CpnFooter from '../components/Footer.vue'
import DeckForm from '@/components/Decks/DeckForm'

export default {
  name: 'DefaultLayout',
  components: {
    CpnHeader,
    CpnFooter,
    DeckForm,
  },
  methods: {
    onSubmit(decksData) {
      if (decksData && !decksData.id) {
        // axios
        //   .post(
        //     'https://nuxt-lv1-default-rtdb.firebaseio.com/decks.json',
        //     decksData
        //   )
        //   .then((data) => {
        //     // console.log(data)
        //   })
        //   .catch((e) => {
        //     // console.log(e)
        //   })

        this.$store.dispatch('addDeck',decksData)
          .then(() => {
            this.$modal.close({ name: 'modaldeck' })
          })
      }else{
        // const deckId = decksData.id
        // delete decksData.id
        // axios
        // .put(
        //   'https://nuxt-lv1-default-rtdb.firebaseio.com/decks/'+deckId+'.json',
        //   decksData
        // )
        // .then((data) => {
        //   // console.log(data)
        // })
        // .catch((e) => {
        //   // console.log(e)
        // })

        this.$store.dispatch('editDeck',decksData)
          .then(() => {
            this.$modal.close({ name: 'modaldeck' })
            this.$router.push('/deck')   // khi cần chuyển hướng router
          })
      }
    },
  },
}
</script>

<style scoped>
.modaldeck-body {
  padding: 20px;
}
</style>
