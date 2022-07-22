# Vue Box-shadows

Vue.js wrapper for [Box-shadow.css][bsh-repo] to build simple and awesome shadows with use vue.

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

Installing via npm

```bash
npm i vue-box-shadows
```

or yarn

```bash
yarn add vue-box-shadows
```

## How to use

To create a basic shadow element with minimal configuration, write the following:

<a href="#vue-cli">Vue CLI</a> | <a href="#nuxtjs-global-registration">Nuxt</a>

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

## Options

| Option           | Type    | Default                          | Description                                                          |
| ---------------- | ------- | -------------------------------- | -------------------------------------------------------------------- |
| useClass         | Boolean | false                            | Set to `true` in order to import styles into `<head>` automatically. |
| shadowBaseCustom | String  | "0 2px 8px 0 rgb(50 50 50 / 8%)" | Set a value for [`box-shadow`][docs] to change the default property. |

---

## Examples

View the entire collection of shadows on the [site][collection].  
An example of using the [v0.0.1](https://github.com/andrejsharapov/vue-box-shadows/discussions/7#discussioncomment-3175104) directive on [CodeSandbox][codesandbox-01] :green_circle:  
An example of using the v0.0.2 directive on [CodeSandbox][codesandbox-02] :green_circle:

### Browser compatibility

Properties are supported by all modern browsers. You can find out about browser support for earlier versions on the [Can I Use][caniuse] site.

## Contributing

Feedback, bug reports, and pull requests are welcome. Read the detailed information about contributions in the [CONTRIBUTING.md][contributing] file.

> **Note** `Bug reporting`  
> If you find a bug and would like to [report it][bug-report], please make sure the request is not on the [list of known issues][bugs].

## License

vue-box-shadows is licensed under the MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.

---

<a href="#install">Installing</a> | <a href="#how-to-use">Usage</a> | <a href="#options">Options</a> | <a href="#examples">Examples</a>

<p align="right">
<a href="#vue-box-shadows">Return to top</a>
</p>

[bsh-repo]: https://github.com/madeas/box-shadows.css
[collection]: https://madeas.github.io/box-shadows/
[codesandbox-01]: https://codesandbox.io/s/vue-box-shadows-0-0-1-ukvpi1
[codesandbox-02]: https://codesandbox.io/s/vue-box-shadows-0-0-2-j5fx1i
[caniuse]: https://caniuse.com/?search=box-shadow

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
