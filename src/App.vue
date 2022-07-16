<template lang="pug">
  #app
    useBoxShadows.text-center(msg="Box-shadows.css <strong>for <span style='color: #42d392'>Vue</span></strong>")
</template>

<script>
import useBoxShadows from "./components/Example.vue";
// import Vue from "vue";
// import boxShadows from "/src/assets/index.js";

// Vue.use(boxShadows, {
//   useClass: true,
//   shadowBaseCustom: "",
// });

export default {
  name: "App",
  components: {
    useBoxShadows,
  },
};
</script>

<style lang="sass">
@function rgb($hex)
    @return red($hex) green($hex) blue($hex)

/* // - e9ecf2 //- 1f2229 */

body
  --base-size: 0.25rem
  --text-color: #{rgb(#1f2229)}
  --background-color: #{rgb(#e9ecf2)}
  --border-color: #{rgb(#abc6d0)}
  --border-opacity: 1
  --background-opacity: 1

  font-family: sans-serif
  font-size: clamp(1rem, 2vw, 2.5rem)
  color: rgba(var(--text-color))
  background-color: rgba(var(--background-color) / var(--background-opacity))

.text-center
  text-align: center

.pa-4
  padding: calc(var(--base-size) * 4)
</style>
