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
        <div class="list-item">without directive</div>
        <div class="list-item" v-box-shadow>
          directive without num (base shadow)
        </div>
        <div class="list-item" v-box-shadow="num">
          directive used `num` from data: {{ num }}
        </div>
        <div class="list-item" v-box-shadow="num" style="color: red">
          custom style='color: red;' width directive
        </div>
      </div>

      <h3 class="message">Directive used v-for (index)</h3>

      <div class="list">
        <div
          class="list-item"
          v-for="(item, index) in 65"
          :key="index"
          v-box-shadow="index"
        >
          {{ index }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    num: 4,
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
  grid-template-columns: repeat(auto-fit, minmax(8rem, auto));
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
</style>
