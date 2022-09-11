# Vue Box-shadows

Collection of CSS box-shadows for every taste contains [more than 100](#groups) simple, beautiful and airy shadows. Add beautiful shadow effects to your Vue project without thinking about CSS.

---

[![discord][discord-img]][discord]
[![GitHub contributors][contributors-img]][contributors]
[![npm][npm-img]][npm]
[![download][download-img]][download]
[![GitHub issues][issues-img]][issues]
[![GitHub license][license-img]][license]

[![GitHub watchers](https://img.shields.io/github/watchers/andrejsharapov/vue-box-shadows?style=social)][watchers]
[![GitHub forks](https://img.shields.io/github/forks/andrejsharapov/vue-box-shadows.svg?style=social&)][forks]
[![GitHub stars](https://img.shields.io/github/stars/andrejsharapov/vue-box-shadows.svg?style=social)][stars]

<p align="center">
<img alt="vue-box-shadows" width="128" height="128" src="https://raw.githubusercontent.com/andrejsharapov/vue-box-shadows/master/src/logo.png">
</p>

<p align="center">
Fully compatible with
</p>

<p align="center">
  <a target="_blank" title="" href="https://github.com/vuejs/vue-cli">
    <img width="65" alt="vuejs" src="https://cli.vuejs.org/favicon.png">
  </a>
  <a target="_blank" title="" href="https://github.com/bootstrap-vue/bootstrap-vue">
    <img width="75" alt="bootstrap-vue" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg">
  </a>
  <a target="_blank" title="" href="https://github.com/tailwindlabs/tailwindcss">
    <img width="90" alt="tailwindcss" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg">
  </a>
  <a target="_blank" title="" href="https://github.com/vuetifyjs/vuetify">
    <img width="75" alt="vuetifyjs" src="https://cdn.vuetifyjs.com/images/logos/logo.svg">
  </a>
  <a target="_blank" title="" href="https://github.com/buefy/buefy">
    <img height="60" alt="buefy" src="https://buefy.org/static/img/buefy.1d65c18.png">
  </a>
  <a target="_blank" title="" href="https://github.com/nuxt/nuxt.js">
    <img height="75" alt="nuxtjs" src="https://nuxtjs.org/design-kit/colored-logo.svg">
  </a>
</p>

<p align="center">
  and others...
</p>

## Install

```bash
$ npm i vue-box-shadows
# or yarn
$ yarn add vue-box-shadows
```

## How to use

To create a basic shadow element with minimal configuration, write the following:

```html
<script>
  import Vue from "vue";
  import vueBoxShadows from "vue-box-shadows";

  Vue.use(vueBoxShadows, {
    // options
  });

  export default {};
</script>

<template>
  <div v-box-shadow>
    Add beautiful shadow effects to your project without thinking about CSS.
    Properties are supported by all modern browsers.
  </div>
</template>
```

To use collection shadows, you need to apply **ids** or short **names** from the [groups](#groups) table.

> **Note**  
> Note that ids and names are used differently:

```html
<script>
  export default {
    data: () => ({
      items: [2, 4, 2],
    }),
  };
</script>

<template>
  <!-- use name -->
  <div v-box-shadow:neu-2></div>

  <!-- or -->

  <!--  use id -->
  <div v-box-shadow="34"></div>

  <!-- use shadow ids in a loop -->
  <div v-for="(item, index) in items" :key="index" v-box-shadow="item">
    {{ item }}
  </div>
</template>
```

## Groups

The entire list of shadows can be viewed **[here][1.0.4]** or separately in the table below.

| Group               |   Id    | Names ($ is value/number)          | Values |    Examples    |
| ------------------- | :-----: | ---------------------------------- | :----: | :------------: |
| None                |    0    | `none`                             |   1    |      ---       |
| Elevation           |  1-24   | `el-$`                             |  1-24  | [View][ex-el]  |
| Borders             |  25-30  | `bd-$`                             |  1-6   | [View][ex-bd]  |
| Neumorphism         |  31-39  | `neu-$` or `neu-$-i` or `neu-$-io` |  1-3   | [View][ex-neu] |
| Axis x              |  40-45  | `ax-$`                             |  1-6   | [View][ex-ax]  |
| Axis y              |  46-51  | `ay-$`                             |  1-6   | [View][ex-ay]  |
| Small inner side    |  52-55  | `si-$`                             |  1-4   | [View][ex-si]  |
| Medium inner side   |  56-59  | `mi-$`                             |  1-4   | [View][ex-mi]  |
| Large inner side    |  60-63  | `li-$`                             |  1-4   | [View][ex-li]  |
| Top                 |  64-69  | `t-$`                              |  1-6   |  [View][ex-t]  |
| Bottom              |  70-75  | `b-$`                              |  1-6   |  [View][ex-b]  |
| Right side          |  76-81  | `r-$`                              |  1-6   |  [View][ex-r]  |
| Left side           |  82-87  | `l-$`                              |  1-6   |  [View][ex-l]  |
| Angle: top left     |  88-93  | `tl-$`                             |  1-6   | [View][ex-tl]  |
| Angle: top right    |  94-99  | `tr-$`                             |  1-6   | [View][ex-tr]  |
| Angle: bottom right | 100-105 | `br-$`                             |  1-6   | [View][ex-br]  |
| Angle: bottom left  | 106-111 | `bl-$`                             |  1-6   | [View][ex-bl]  |
| Patterns            | 112-115 | `p-$`                              |  1-2   |      ---       |

## Options

| Option           | Type    | Default                          | Description                                                          |
| ---------------- | ------- | -------------------------------- | -------------------------------------------------------------------- |
| useClass         | Boolean | false                            | Set to `true` in order to import styles into `<head>` automatically. |
| shadowBaseCustom | String  | "0 2px 8px 0 rgb(50 50 50 / 8%)" | Set a value for [`box-shadow`][docs] to change the default property. |

### Browser compatibility

Properties are supported by all modern browsers. You can find out about browser support for earlier versions on the [Can I Use][caniuse] site.

## Contributing

Feedback, bug reports, and pull requests are welcome. Read the detailed information about contributions in the [CONTRIBUTING.md][contributing] file.

> **Note** `Bug reporting`  
> If you find a bug and would like to [report it][bug-report], please make sure the request is not on the [list of known issues][bugs].

## License

vue-box-shadows is licensed under the MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.

---

[Installing](#install) · [Usage](#how-to-use) · [Groups](#groups) · [Options](#options)

<p align="right">
<a href="#vue-box-shadows">Return to top</a>
</p>

<!-- Repo -->

[1.0.4]: https://codesandbox.io/s/vue-box-shadows-1-0-4-mrjlvt
[docs]: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
[bugs]: https://github.com/andrejsharapov/vue-box-shadows/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3ABugfix
[bug-report]: https://github.com/andrejsharapov/vue-box-shadows/issues/new?labels=Bug+report&template=bug_report.md+

<!--  -->

[npm]: https://www.npmjs.com/package/vue-box-shadows
[npm-img]: https://img.shields.io/npm/v/vue-box-shadows?color=c53635

<!--  -->

[download]: https://npm-stat.com/charts.html?package=vue-box-shadows
[download-img]: https://img.shields.io/npm/dm/vue-box-shadows.svg

<!--  -->

[license]: https://github.com/andrejsharapov/vue-box-shadows/blob/master/LICENSE
[license-img]: https://img.shields.io/github/license/andrejsharapov/vue-box-shadows.svg

<!--  -->

[issues]: https://github.com/andrejsharapov/vue-box-shadows/issues/
[issues-img]: https://img.shields.io/github/issues/andrejsharapov/vue-box-shadows.svg

<!--  -->

[contributing]: https://github.com/andrejsharapov/vue-box-shadows/blob/master/CONTRIBUTING.md
[contributors]: https://github.com/andrejsharapov/vue-box-shadows/graphs/contributors/
[contributors-img]: https://img.shields.io/github/contributors/andrejsharapov/vue-box-shadows?color=fd7e17

<!--  -->

[discord]: https://discord.gg/XtT4Hdf3
[discord-img]: https://img.shields.io/badge/discord-channel-5865f2.svg

<!-- GitHub buttons -->

[watchers]: https://github.com/andrejsharapov/vue-box-shadows/watchers/
[forks]: https://github.com/andrejsharapov/vue-box-shadows/network/
[stars]: https://github.com/andrejsharapov/vue-box-shadows/stargazers/

<!--Examples  -->

[ex-el]: https://codesandbox.io/s/v-b-s-1-0-4-elevation-w22j9h?file=/src/App.vue
[ex-bd]: https://codesandbox.io/s/v-b-s-1-0-4-bd-merco1?file=/src/App.vue
[ex-neu]: https://codesandbox.io/s/v-b-s-1-0-4-neumorphism-0pnb12?file=/src/App.vu
[ex-ax]: https://codesandbox.io/s/v-b-s-1-0-4-axis-x-msdqlx?file=/src/App.vue
[ex-ay]: https://codesandbox.io/s/v-b-s-1-0-4-axis-y-nzd9gm?file=/src/App.vue
[ex-si]: https://codesandbox.io/s/v-b-s-1-0-4-si-rppl4t?file=/src/App.vue
[ex-mi]: https://codesandbox.io/s/v-b-s-1-0-4-mi-pcisfe?file=/src/App.vue
[ex-li]: https://codesandbox.io/s/v-b-s-1-0-4-li-yu3hf1?file=/src/App.vue
[ex-t]: https://codesandbox.io/s/v-b-s-1-0-4-top-wezz49?file=/src/App.vue
[ex-b]: https://codesandbox.io/s/v-b-s-1-0-4-bottom-t7fjxr?file=/src/App.vue
[ex-r]: https://codesandbox.io/s/v-b-s-1-0-4-right-vjc7f1?file=/src/App.vue
[ex-l]: https://codesandbox.io/s/v-b-s-1-0-4-left-jz580s?file=/src/App.vue
[ex-tl]: https://codesandbox.io/s/v-b-s-1-0-4-tl-ir0icl?file=/src/App.vue
[ex-tr]: https://codesandbox.io/s/v-b-s-1-0-4-tr-mvskqv?file=/src/App.vue
[ex-br]: https://codesandbox.io/s/v-b-s-1-0-4-br-ktwumh?file=/src/App.vue
[ex-bl]: https://codesandbox.io/s/v-b-s-1-0-4-bl-g231ml?file=/src/App.vue

<!-- Other -->

[caniuse]: https://caniuse.com/?search=box-shadow
