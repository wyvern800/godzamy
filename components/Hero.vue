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
          v-text="isOnline ? 'Assistir' : 'Atualizar'"
        />
      </div>
    </div>
    <div class="hero-foot">
      <div class="container has-text-right">
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
export default {
  data() {
    return {
      isOnline: false,
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
  }
}
</script>
