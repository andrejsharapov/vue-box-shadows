<template lang="pug">
div
  //- ANCHOR use shadow name
  .list
    .list-item(v-box-shadow:l-4)
    .list-item(v-box-shadow:ay-6)
    .list-item(v-box-shadow:r-4)
  
  br

  //- ANCHOR use shadow id
  .list
    .list-item(
      v-for="(item, index) in items"
      :key="index"
      v-box-shadow="item.id"
      :class="{ 'no-name': !item.name }"
    )
      small id: {{ item.id }}
      div {{ item.name }}
</template>

<script>
import { collection } from "../../shadows";

export default {
  name: "ListShadows",
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
