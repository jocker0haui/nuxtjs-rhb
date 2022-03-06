<template>
  <header>
    <nav>
      <ul class="header">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/Deck">Decks</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/Profile">Profile</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/settings">settings</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/register">register</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login">login</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
    name : 'CpnHeader'
}
</script>
<style lang="css">
    header{
        background: linear-gradient(to right , blue ,green);
        padding: 20px ;
        font-size: 30px;
    }

    ul.header{
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 0;
    }

    .nuxt-link-exact-active,
    .nuxt-link-exact-active:hover{
      color :white ;
    }
</style>