<template>
  <div class="ct">
    <h1>adu</h1>
    <h1>List of your deck</h1>
    <button class="btn btn_success" @click="openModal">Create deck</button>

    <ul class="courses-list">
      <CoursesList
        v-for="deck in decks"
        :id="deck.id"
        :key="deck.id"
        :name="deck.name"
        :description="deck.description"
        :thumbnail="deck.thumbnail"
      />
    </ul>

    <v-modal name="modalcourses">
      <div class="modalcourses-body">
        <h1>Create a new deck</h1>
        <CoursesForm @submitDeck="onSubmit" />
      </div>
    </v-modal>
  </div>
</template>

<script>
// import axios from 'axios'

import CoursesList from '@/components/Courses/CoursesList'
import CoursesForm from '@/components/Courses/CoursesForm'
export default {
  name: 'IndexPage',
  components: {
    CoursesList,
    CoursesForm,
  },
  data() {
    return {
      decks: [ ],
    }
  },
  created() {
    // this.$store.dispatch('setDecks',this.decks)
    this.decks = this.$store.getters.decks
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'modalcourses' })
    },
//     onSubmit(decksData){
//       axios.post('https://nuxt-lv1-default-rtdb.firebaseio.com/decks.json',decksData)
//         .then((data)=>{
//           // console.log(data)
//         })
//         .catch((e)=>{
//           // console.log(e)
//         })
//     }
  },
}
</script>

<style scoped>
.courses-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.modalcourses-body {
  padding: 20px;
}
</style>