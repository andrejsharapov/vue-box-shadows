# Vue Box-shadows

Collection of CSS box-shadows for every taste contains [more than 100](#groups) simple, beautiful and airy shadows. Add beautiful shadow effects to your Vue project without thinking about CSS. Some shadows are borrowed from the collection of [box-shadow.css][bsh-repo].

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

## Install

```bash
$ npm i vue-box-shadows
# or yarn
$ yarn add vue-box-shadows
```

## How to use

To create a basic shadow element with minimal configuration, write the following:

[Vue CLI](#vue-cli) | [Nuxt](#nuxtjs-global-registration)

### Vue CLI

```html
<div v-box-shadow>
  Add beautiful shadow effects to your project without thinking about CSS.
  Properties are supported by all modern browsers.
</div>
```

```js
import Vue from "vue";
import vueBoxShadows from "vue-box-shadows";

Vue.use(vueBoxShadows, {
  // options
});
```

### Nuxt.js: Global Registration

Create plugin _/plugins/vue-box-shadows.js_

```js
import Vue from "vue";
import vueBoxShadows from "vue-box-shadows";

Vue.use(vueBoxShadows);
```

Add to _nuxt.config.js_

```js
export default {
  plugins: [{ src: "~/plugins/vue-box-shadows" }],
};
```

Usage in _index.vue_

```js
<template>
   <div
      v-for="(item, index) in items"
      :key="index"
      v-box-shadow="item"
    >
      {{ item }}
    </div>
</template>

<script>
  export default {
    data: () => ({
      items: [2, 4, 2],
    }),
  };
</script>
```

[![Edit Vue Box-shadows, Nuxt2 and TailwindCSS](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-box-shadows-nuxt2-and-tailwindcss-db9968?fontsize=14&hidenavigation=1&theme=dark)

## Options

| Option           | Type    | Default                          | Description                                                          |
| ---------------- | ------- | -------------------------------- | -------------------------------------------------------------------- |
| useClass         | Boolean | false                            | Set to `true` in order to import styles into `<head>` automatically. |
| shadowBaseCustom | String  | "0 2px 8px 0 rgb(50 50 50 / 8%)" | Set a value for [`box-shadow`][docs] to change the default property. |

---

## Examples

An example of using the [v0.0.1](https://github.com/andrejsharapov/vue-box-shadows/discussions/7#discussioncomment-3175104) directive on [CodeSandbox][codesandbox-01] :green_circle:  
An example of using the v0.0.2 directive on [CodeSandbox][codesandbox-02] :green_circle:

## Groups

In release v1.0.4, shadows have been grouped and sorted.  
You can [see the entire list of shadows][1.0.4] in the table below.

| Group               | Name ($ is value/number)           | Values | Shadow id's |   Examples    |
| ------------------- | ---------------------------------- | :----: | :---------: | :-----------: |
| None                | `none`                             |   1    |      0      |      ---      |
| Elevation           | `el-$`                             |  1-24  |    1-24     | [View][ex-el] |
| Borders             | `bd-$`                             |  1-6   |    25-30    | [View][ex-bd] |
| Neumorphism         | `neu-$` or `neu-$-i` or `neu-$-io` |  1-3   |    31-39    |     View      |
| Axis x              | `ax-$`                             |  1-6   |    40-45    | [View][ex-ax] |
| Axis y              | `ay-$`                             |  1-6   |    46-51    | [View][ex-ay] |
| Small inner side    | `si-$`                             |  1-4   |    52-55    | [View][ex-si] |
| Medium inner side   | `mi-$`                             |  1-4   |    56-59    | [View][ex-mi] |
| Large inner side    | `li-$`                             |  1-4   |    60-63    | [View][ex-li] |
| Top                 | `t-$`                              |  1-6   |    64-69    | [View][ex-t]  |
| Bottom              | `b-$`                              |  1-6   |    70-75    | [View][ex-b]  |
| Right side          | `r-$`                              |  1-6   |    76-81    | [View][ex-r]  |
| Left side           | `l-$`                              |  1-6   |    82-87    | [View][ex-l]  |
| Angle: top left     | `tl-$`                             |  1-6   |    88-93    | [View][ex-tl] |
| Angle: top right    | `tr-$`                             |  1-6   |    94-99    | [View][ex-tr] |
| Angle: bottom right | `br-$`                             |  1-6   |   100-105   | [View][ex-br] |
| Angle: bottom left  | `bl-$`                             |  1-6   |   106-111   | [View][ex-bl] |
| Patterns            | `p-$`                              |  1-2   |   112-115   |     View      |

> **Warning** `Names don't work`  
> In the v2.0.0 release, you will be able to use these names in the directive instead of numbers.  
> **They are currently unavailable.**

### Browser compatibility

Properties are supported by all modern browsers. You can find out about browser support for earlier versions on the [Can I Use][caniuse] site.

## Contributing

Feedback, bug reports, and pull requests are welcome. Read the detailed information about contributions in the [CONTRIBUTING.md][contributing] file.

> **Note** `Bug reporting`  
> If you find a bug and would like to [report it][bug-report], please make sure the request is not on the [list of known issues][bugs].

## License

vue-box-shadows is licensed under the MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.

---

[Installing](#install) · [Usage](#how-to-use) · [Options](#options) · [Groups](#groups) · [Examples](#examples)

<p align="right">
<a href="#vue-box-shadows">Return to top</a>
</p>

[bsh-repo]: https://github.com/madeas/box-shadows.css
[caniuse]: https://caniuse.com/?search=box-shadow
[codesandbox-01]: https://codesandbox.io/s/vue-box-shadows-0-0-1-ukvpi1
[codesandbox-02]: https://codesandbox.io/s/vue-box-shadows-0-0-2-j5fx1i
[1.0.4]: https://codesandbox.io/s/vue-box-shadows-1-0-4-mrjlvt

<!--  -->

[docs]: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
[contributing]: https://github.com/andrejsharapov/vue-box-shadows/blob/master/CONTRIBUTING.md
[testing]: https://github.com/andrejsharapov/vue-box-shadows/discussions/8
[bugs]: https://github.com/andrejsharapov/vue-box-shadows/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3ABugfix
[bug-report]: https://github.com/andrejsharapov/vue-box-shadows/issues/new?labels=Bug+report&template=bug_report.md+

<!--  -->

[discord]: https://discord.gg/XtT4Hdf3
[discord-img]: https://img.shields.io/badge/discord-channel-5865f2.svg

<!--  -->

[npm]: https://www.npmjs.com/package/vue-box-shadows
[npm-img]: https://img.shields.io/npm/v/vue-box-shadows?color=c53635
[download]: https://npm-stat.com/charts.html?package=vue-box-shadows
[download-img]: https://img.shields.io/npm/dm/vue-box-shadows.svg
[license]: https://github.com/andrejsharapov/vue-box-shadows/blob/master/LICENSE
[license-img]: https://img.shields.io/github/license/andrejsharapov/vue-box-shadows.svg
[issues]: https://github.com/andrejsharapov/vue-box-shadows/issues/
[issues-img]: https://img.shields.io/github/issues/andrejsharapov/vue-box-shadows.svg
[contributors]: https://github.com/andrejsharapov/vue-box-shadows/graphs/contributors/
[contributors-img]: https://img.shields.io/github/contributors/andrejsharapov/vue-box-shadows?color=fd7e17

<!--  -->

[watchers]: https://github.com/andrejsharapov/vue-box-shadows/watchers/
[forks]: https://github.com/andrejsharapov/vue-box-shadows/network/
[stars]: https://github.com/andrejsharapov/vue-box-shadows/stargazers/

<!--  -->

[ex-el]: https://codesandbox.io/s/v-b-s-1-0-4-elevation-w22j9h?file=/src/App.vue
[ex-bd]: https://codesandbox.io/s/v-b-s-1-0-4-bd-merco1?file=/src/App.vue
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
