<template>
  <div class="app">
    <hero :is-online="isOnline" />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Hero
  },
  async asyncData({ $axios }) {
    $axios.setHeader('Client-ID', process.env.api_key)
    const status = await $axios.get('/helix/streams?user_login=godzamy')
    if (status.data.data.length) {
      return {
        isOnline: true
      }
    } else {
      return {
        isOnline: false
      }
    }
  }
}
</script>
