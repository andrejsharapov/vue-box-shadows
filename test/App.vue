<template lang="pug">
#app
  .container
    h1.message {{ package.title }}
      strong
        | 
        | for 
        span Vue
    
    p {{ package.desc }}
    
    list-shadows
</template>

<script>
import ListShadows from "~/components/list-shadows";

export default {
  name: "App",
  components: {
    ListShadows,
  },
  computed: {
    package() {
      return {
        title: process.env.VUE_APP_TITLE,
        desc: process.env.VUE_APP_DESCRIPTION,
      };
    },
  },
};
</script>

<style lang="sass">
:root
  --base-size: 0.25rem
  --body-text-color: #1f2229
  --body-background: #eceef7
  --card-border-color: #abc6d034
  --card-background: #eceef7
  --vue-color: #42d392

*,
*::before,
*::after
  box-sizing: border-box

body
  margin: 0
  font-family: sans-serif
  font-size: clamp(1rem, 1.5vw, 2.25rem)
  color: var(--body-text-color)
  background-color: var(--body-background)

.container
  max-width: 86vw
  margin: auto
  padding: calc(var(--base-size) * 6)
  text-align: center

.message
  margin-bottom: 1rem

  span
    color: var(--vue-color)
</style>