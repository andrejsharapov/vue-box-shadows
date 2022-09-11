<template>
  <div id="app">
    <div class="container">
      <h1 class="message">
        Box-shadows.css
        <strong>for <span style="color: #42d392">Vue</span></strong>
      </h1>
      <p>
        Add beautiful shadow effects to your project without thinking about CSS.
      </p>

      <div class="list-item" v-box-shadow:neu-2></div>

      <br />

      <div class="list">
        <div
          v-for="(item, index) in items"
          :key="index"
          v-box-shadow="item.id"
          class="list-item"
          :class="{ 'no-name': !item.name }"
        >
          <small>id: {{ item.id }}</small>
          <div>{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection } from "./shadows";

export default {
  name: "App",
  data: () => ({
    items: collection,
  }),
};
</script>

<style>
:root {
  --base-size: 0.25rem;
  --body-text-color: #1f2229;
  --body-background: #eceef7; /* #fff; */
  --card-border-color: #abc6d034;
  --card-background: #eceef7; /* #eceef7; */
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

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 8vw;
  place-items: center;
  text-align: center;
}

.list-item {
  display: grid;
  width: 240px;
  height: 240px;
  place-content: center;
  /* border: 0.75rem solid var(--card-background); */
  /* border-radius: 50%; */
  background-color: var(--card-background);
}

.list-item small {
  opacity: 0.4;
}

.no-name {
  background-color: #e9b6cf;
}
</style>