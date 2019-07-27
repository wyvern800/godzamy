<template>
  <main class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure class="image is-inline-block">
          <img class="is-rounded" src="~/assets/images/godzamy.jpg" alt="" />
        </figure>
        <div class="status is-flex">
          <span :class="classChecker" class="icon" />
          <p class="title is-6" v-text="statusChecker" />
        </div>
        <button
          :class="classChecker"
          class="button is-rounded is-medium"
          @click="checkStatus"
          v-text="isOnline ? 'Assistir' : 'Atualizar'"
        />
      </div>
    </div>
    <div class="hero-foot">
      <div class="container has-text-right has-text-centered-mobile">
        <p class="has-text-grey-lighter">
          made with love by
          <a
            class="has-text-grey-lighter"
            href="https://marlospomin.com"
            rel="noopener"
            target="_blank"
          >
            Marlos Pomin
          </a>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
/* eslint-disable space-before-function-paren */

import throttle from 'lodash/throttle'

export default {
  props: {
    isOnline: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isChecking: false
    }
  },
  computed: {
    classChecker() {
      return {
        'has-background-success is-success': this.isOnline && !this.isChecking,
        'has-background-danger is-danger': !this.isOnline && !this.isChecking,
        'has-background-grey-light is-light is-inverted': this.isChecking
      }
    },
    statusChecker() {
      if (this.isOnline && !this.isChecking) {
        return 'online'
      } else if (!this.isOnline && !this.isChecking) {
        return 'offline'
      } else {
        return 'atualizando'
      }
    }
  },
  methods: {
    checkStatus: throttle(async function(event) {
      if (!this.isOnline) {
        this.isChecking = !this.isChecking
        await new Promise((resolve) => {
          setTimeout(resolve, 1000)
        })
        this.$axios.setHeader('Client-ID', process.env.api_key)
        const status = await this.$axios.get(
          '/helix/streams?user_login=godzamy'
        )
        if (status.data.data.length) {
          this.isOnline = !this.isOnline
        }
        this.isChecking = !this.isChecking
      } else {
        window.open('https://twitch.tv/godzamy')
      }
    }, 1000)
  }
}
</script>
