# Vue Box-shadows

Vue.js wrapper for [Box-shadow.css][box-shadows-css] to build simple and awesome shadows with use vue.

---

[![discord][discord-image]][discord]

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
View an example of using the directive on CodePen.

### Browser compatibility

Properties are supported by all modern browsers. You can find out about browser support for earlier versions on the [Can I Use][caniuse] site.

### Contributing

Feedback, bug reports, and pull requests are welcome. Read the detailed information about contributions in the [CONTRIBUTING.md][contributing] file.

> **Warning** `Bug reporting and testing`  
> The package is currently under development and bug fixes. More about [testing][testing].

If you find a bug and would like to [report it][bug-report], please make sure the request is not on the [list of known issues][bugs].

### License

vue-box-shadows is licensed under the MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.

<p align="right">
  <a href="#vue-box-shadows">To top</a>
</p>

[box-shadows-css]: https://github.com/madeas/box-shadows.css
[collection]: https://madeas.github.io/box-shadows/
[caniuse]: https://caniuse.com/?search=box-shadow
[docs]: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
[contributing]: https://github.com/andrejsharapov/vue-box-shadows/blob/master/CONTRIBUTING.md
[discord]: https://discord.gg/XtT4Hdf3
[discord-image]: https://img.shields.io/badge/discord-channel-5865f2.svg
[testing]: ../../discussions/8
[bugs]: https://github.com/andrejsharapov/vue-box-shadows/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3ABugfix
[bug-report]: https://github.com/andrejsharapov/vue-box-shadows/issues/new?labels=Bug+report&template=bug_report.md+
