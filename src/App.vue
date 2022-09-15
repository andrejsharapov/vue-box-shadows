<template>
  <div id="app">
    <div class="container">
      <h1 class="message">
        {{ package.title }}
        <strong>for <span>Vue</span></strong>
      </h1>
      <p>
        {{ package.desc }}
      </p>
      <ListShadows />
    </div>
  </div>
</template>

<script>
import ListShadows from "@/components/ListShadows";

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

<style>
:root {
  --base-size: 0.25rem;
  --body-text-color: #1f2229;
  --body-background: #eceef7;
  --card-border-color: #abc6d034;
  --card-background: #eceef7;
  --vue-color: #42d392;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  font-size: clamp(1rem, 1.5vw, 2.25rem);
  color: var(--body-text-color);
  background-color: var(--body-background);
}

.container {
  max-width: 86vw;
  margin: auto;
  padding: calc(var(--base-size) * 6);
}

.message {
  margin-bottom: 1rem;
}

.message span {
  color: var(--vue-color);
}
</style>