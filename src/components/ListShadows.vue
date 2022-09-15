<template>
  <div>
    <!-- ANCHOR use shadow name -->
    <div class="list">
      <div class="list-item" v-box-shadow:neu-2></div>
    </div>

    <br />

    <!-- ANCHOR use shadow id -->
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
</template>

<script>
import { collection } from "@/shadows";

export default {
  name: "Shadows",
  data: () => ({
    items: collection,
  }),
};
</script>

<style scoped>
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