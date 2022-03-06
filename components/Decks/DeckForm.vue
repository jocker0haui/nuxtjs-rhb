<template>
  <form action="" @submit.prevent="onSaveDeck">
  <!-- <form action="" @submit="onSaveDeck"> -->
    <div class="form_group">
      <label for="name">name</label>
      <input
        id="name"
        v-model="editDeck.name"
        class="form_control"
        type="text"
        placeholder="vui lòng nhập tên"
      />
    </div>
    <div class="form_group">
      <label for="description">description</label>
      <textarea
        id="description"
        v-model="editDeck.description"
        class="form_control"
        type="text"
        placeholder="vui lòng nhập mô tả"
      ></textarea>
    </div>
    <div class="form_group">
      <label for="thumbnail">thumbnail</label>
      <input 
        v-model="editDeck.thumbnail"
        class="form_control" 
        type="text"
        placeholder="https://image.png" 
    />
    </div>
    <div class="form_group d_flex justify_content_end">
      <button class="btn btn_danger" @click.prevent="closeModal">Close</button>
      <button
        class="btn btn_success ml_2"
        type="submit"
      >
        {{editDeck && editDeck.id ? 'Edit' : 'Create'}}
      </button>
    </div>
  </form>
</template>
<script>
export default {
  props: {
    deck: {
      type: Object,
      require: false,
      default: () => {
        return {
          name: '',
          description: '',
          thumbnail: '',
        }
      },
    },
  },
  data() {
    return {
      editDeck: this.deck ? { ...this.deck } : {
            name: '',
            description: '',
            thumbnail: '',
      },
    }
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'modaldeck' })
    },
    onSaveDeck() {
        const {name,description,thumbnail} = this.editDeck
        if(name && description && thumbnail){
            this.$emit('submitDeck',this.editDeck)
        }else{
            // console.log('chưa nhập')
        }
    },
  },
}
</script>