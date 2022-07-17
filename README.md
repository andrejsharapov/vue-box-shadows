# Vue Box-shadows

Vue.js wrapper for [Box-shadow.css][bsh-repo] to build simple and awesome shadows with use vue.

---

[![discord][discord-img]][discord]
[![GitHub contributors][contributors-img]][contributors]
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

## Usage

To create a basic shadow element with minimal configuration, write the following:

```html
<div v-box-shadow>
  Properties are supported by all modern browsers. You can find out about
  browser support for earlier versions on the Can I Use site.
</div>
```

```js
import Vue from "vue";
import boxShadows from "vue-box-shadows";

Vue.use(boxShadows, {
  // options
});
```

## Options

| Option           | Type    | Default | Description                                                          |
| ---------------- | ------- | ------- | -------------------------------------------------------------------- |
| useClass         | Boolean | false   | Set to `true` in order to import styles into `<head>` automatically. |
| shadowBaseCustom | String  | ``      | Set a value for [`box-shadow`][docs] to change the default property. |

---

### Examples

View the collection of shadows on the repository [site][collection].  
View an example of using the directive on CodePen. :red_circle:

### Browser compatibility

Properties are supported by all modern browsers. You can find out about browser support for earlier versions on the [Can I Use][caniuse] site.

### Contributing

Feedback, bug reports, and pull requests are welcome. Read the detailed information about contributions in the [CONTRIBUTING.md][contributing] file.

> **Warning** `Bug reporting and testing`  
> The package is currently under development and bug fixes. More about [testing][testing].

If you find a bug and would like to [report it][bug-report], please make sure the request is not on the [list of known issues][bugs].

### License

vue-box-shadows is licensed under the MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.

---

<a href="#install">Install</a> | <a href="#usage">Usage</a> | <a href="#options">Options</a>

<p align="right">
<a href="#vue-box-shadows">Return to top</a>
</p>

[bsh-repo]: https://github.com/madeas/box-shadows.css
[collection]: https://madeas.github.io/box-shadows/
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
