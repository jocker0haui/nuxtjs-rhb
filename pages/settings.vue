<template>
  <!-- <Tutorial /> -->
  <div class="page">
      <div class="nav">
          <ul>
              <li>
                  <nuxt-link to='/settings'>Chung</nuxt-link>
              </li>
              <li>
                  <nuxt-link to='/settings/deck'>Deck</nuxt-link>
              </li>
              <li>
                  <nuxt-link to='/settings/schedule'>Schedule</nuxt-link>
              </li>
          </ul>
      </div>
      
      <div class="main">
            <nuxt-child keep-alive/>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
}
</script>

<style>
    .page{
        display: flex;
        font-size: 24px;
    }

    .page .nav{
        width: 25%;
    }

    .page .main{
        flex : 1 ;
    }

    ul{
        list-style: none;
    }
</style>
