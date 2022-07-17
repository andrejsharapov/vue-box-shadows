import { baseShadow as base, listShadows } from "./shadows";

const currentValue = "vBoxShadowValue";
const baseBoxShadow = (el) => {
  if (el == undefined) {
    el = base;
  }

  // return "0 1.85em 2.5em 0 rgba(38, 39, 44, 0.2)";
  return `${el?.inset ? "inset" : ""} ${el?.offsetX} ${el?.offsetY} ${
    el?.blur
  } ${el?.spread} rgba(${el?.color}/${el?.opacity}%)
  `;
};

const numShadows = function (el, bindings) {
  let num = parseInt(bindings.value);

  if (isNaN(num)) {
    return;
  } else if (num !== el[currentValue]) {
    el[currentValue] = num;

    if (!bindings) {
      console.warn("bindings is not found");
    } else {
      const list = listShadows;

      const newStyle = {
        prop: "--box-shadow",
        val: baseBoxShadow(list[num]),
      };

      el.style.setProperty(newStyle.prop, newStyle.val);
    }
  }
};

const VueBoxShadow = {
  install(Vue, options) {
    options = Object.assign(
      { useClass: false, shadowBaseCustom: baseBoxShadow() },
      options
    );

    const styles = `
      --box-shadow: ${options.shadowBaseCustom};
      box-shadow: var(--box-shadow);`;

    if (options.useClass) {
      const stylesheets = window.document.styleSheets;
      const rule = `.vue-box-shadow{${styles}}`;

      if (stylesheets && stylesheets[0] && stylesheets.insertRule) {
        stylesheets.insertRule(rule);
      } else {
        let styleTag = window.document.createElement("style");

        styleTag.setAttribute("type", "text/css");
        styleTag.appendChild(window.document.createTextNode(rule));
        window.document.head.appendChild(styleTag);
      }
    } else {
      //
    }

    Vue.directive("box-shadow", {
      currentValue: 0,
      bind(el) {
        if (!options.useClass) {
          el.style.cssText += styles;
        } else {
          el.classList.add("vue-box-shadow");
        }
      },
      inserted: (el, bindings) => numShadows(el, bindings),
      updated: (el, bindings) => numShadows(el, bindings),
      componentUpdated: (el, bindings) => numShadows(el, bindings),
    });
  },
};

export default VueBoxShadow;
