<template>
  <div class="box-shadow">
    <label>
      Columns of grid: {{ grid }}
      <input
        v-model="gridVal"
        min="2"
        max="12"
        type="range"
        style="cursor: pointer"
      />
    </label>
    <div class="box-shadow__container">
      <h1 class="box-shadow__container__message" v-html="msg"></h1>
      <div class="box-shadow__container__list" :style="gridTemplateColumns">
        <div class="list-item pa-4">without directive</div>
        <div class="list-item pa-4" v-box-shadow>
          directive without num (added base state)
        </div>
        <div class="list-item pa-4" v-box-shadow="num">
          directive used `num` from data: {{ num }}
        </div>
        <div class="list-item pa-4" v-box-shadow="num" style="color: red">
          custom style='color: red;' width directive
        </div>
      </div>
      <h3 class="box-shadow__container__message">
        Directive used v-for (index)
      </h3>
      <div class="box-shadow__container__list" :style="gridTemplateColumns">
        <div
          class="list-item pa-4"
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
