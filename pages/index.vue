<template>
  <!-- <Tutorial /> -->
  <div id="root">
    <div class="ct">
      <div class="banner">
        <div class="thumbneil-banner"></div>
        <div class="popular-decks">
          <h3 class="text_center m-t-10">popular decks for you</h3>
          <div class="r">
            <div class="c_4">
              <div class="card">1</div>
            </div>
            <div class="c_4">
              <div class="card">2</div>
            </div>
            <div class="c_4">
              <div class="card">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

}
</script>

<style>
.m-t-10 {
  margin: 10px 0;
}

.banner {
  margin-top: 3rem;
}

.thumbneil-banner {
  background: url('~assets/images/banner.png') center center;
  height: 240px;
}
</style>