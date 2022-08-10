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
    el: [1, 3, 4, 5, 6, 7, 8],
    bd: [71, 72, 73, 74, 75, 76],
    t: [13, 14, 15, 16, 17, 20],
    rs: [],
    b: [],
    ls: [],
    ax: [24, 23, 22, 21],
    ay: [28, 27, 26, 25],
    // more groups
    // g3: [32, 31, 30, 29],
    // g4: [36, 35, 34, 33],
    // g5: [40, 39, 38, 37],
    // g6: [42, 41, 77, 78],
    // g7: [54, 55],
    // g8: [18, 19],
    // g9: [13, 43],
    tl: [],
    tr: [],
    br: [],
    bl: [],
    neu: [65, 66, 67, 68, 69, 70],
    p: [],
  }),
};
</script>

<style>
body {
  --base-size: 0.25rem;
  --body-text-color: #1f2229;
  --body-background: #e9ecf2;
  --card-border-color: #abc6d034;
  --card-background: #fafafa;

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
  border-radius: var(--base-size);
  background-color: var(--card-background);
}

.no-name {
  background-color: #d84c4c1f;
}
</style>
