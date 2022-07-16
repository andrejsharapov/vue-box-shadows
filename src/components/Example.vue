<template lang="pug">
.box-shadow
  label Columns of grid: {{ grid }}
    input(v-model="gridVal" min="2" max="12" type="range" style="cursor: pointer")

  .box-shadow__container
    h1.box-shadow__container__message(v-html='msg')
    .box-shadow__container__list(:style="gridTemplateColumns")
      .list-item.pa-4 without directive 
      .list-item.pa-4(v-box-shadow) directive without num (added base state)
      .list-item.pa-4(v-box-shadow='num') directive used `num` from data: {{num}}
      .list-item.pa-4(v-box-shadow='num' style="color: red;") custom style='color: red;' width directive
      
    h3.box-shadow__container__message Directive used v-for (index)
    .box-shadow__container__list(:style="gridTemplateColumns")
      .list-item.pa-4(
        v-for="(item, index) in 4"
        :key="index"
        v-box-shadow='index'
      ) {{ index }}
</template>

<script>
export default {
  name: "BoxShadow",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    num: 4,
    gap: 6,
    gridVal: 4,
  }),
  computed: {
    gridTemplateColumns() {
      return `
      gap: ${this.gap}rem;
      grid-template-columns: repeat(${this.grid}, minmax(3rem, calc(100vw / ${
        this.grid
      } + calc(${this.gap}rem * ${this.grid - 1}))))`;
    },
    grid: {
      get() {
        return this.gridVal;
      },
      set(newVal) {
        return newVal;
      },
    },
  },
};
</script>

<style lang="sass" scoped>
.box-shadow
  &__container
    --border-opacity: 0.3

    padding: 4rem
    display: flex
    flex-flow: column wrap
    align-items: center
    border:
      color: rgba(var(--border-color) / var(--border-opacity))
      radius: 0.25rem
      style: solid
      width: thin

    &__message
      margin-bottom: 2rem

    &__list
      display: grid
      width: 100%
      justify-content: space-around

      .list-item
        border: thin solid rgba(var(--border-color) / var(--border-opacity))
        border-radius: var(--base-size)
</style>
