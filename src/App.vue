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

      <div class="list">
        <div
          v-for="(item, index) in items"
          :key="index"
          v-box-shadow="index"
          class="list-item"
          :class="{ 'no-name': !item.name }"
        >
          <small>{{ item.id }}</small>
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
body {
  --base-size: 0.25rem;
  --body-text-color: #1f2229;
  --body-background: #fff; /* #e9ecf2; */
  --card-border-color: #abc6d034;
  --card-background: #fff; /* #eceef7; */

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
  margin-bottom: 2rem;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, auto));
  gap: 8vw;
  text-align: center;
}

.list-item {
  display: grid;
  padding: 1rem;
  min-height: 8rem;
  place-content: center;
  border: thin solid var(--card-border-color);
  border-radius: calc(var(--base-size) * 2);
  background-color: var(--card-background);
}

/* .no-name {
  background-color: #e6e9ef;
} */
</style>
