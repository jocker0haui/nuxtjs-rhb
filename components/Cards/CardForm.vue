<template>
  <form action="">
    <div class="form_group">
      <label for="name">name</label>
      <input
        id="name"
        class="form_control"
        type="text"
        placeholder="vui lòng nhập tên"
      />
    </div>
    <div class="form_group">
      <label for="description">description</label>
      <textarea
        id="description"
        class="form_control"
        type="text"
        placeholder="vui lòng nhập mô tả"
      ></textarea>
    </div>
    <div class="form_group">
      <input class="form_control" type="file" />
    </div>
    <div class="form_group d_flex justify_content_end">
      <button class="btn btn_danger" @click.prevent="closeModal">Close</button>
      <button class="btn btn_success ml_2" @click.prevent="createCard">
        Create
      </button>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$modal.close({ name: 'modalcard' })
    },
  },
}
</script>