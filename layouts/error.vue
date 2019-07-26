<template>
  <main class="error hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="status-code">
          <h1 v-if="statusCode === 404" class="title is-1">
            404
          </h1>
          <h1 v-else class="title is-1">
            500
          </h1>
        </div>
        <h3 class="title is-3">
          {{ message }}
        </h3>
        <p v-if="statusCode === 404">
          <NuxtLink to="/">
            Back to Home
          </NuxtLink>
        </p>
        <p v-else>
          An error occurred while rendering the page.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || `Error`
    }
  }
}
</script>
