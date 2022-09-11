import { base, collection } from "./shadows";

const currentValue = "vBoxShadowValue";

const baseBoxShadow = (el) => {
  if (el === undefined) {
    el = base;
  }

  if (el !== undefined) {
    const isInset = (el) => {
      if (isNaN(el.inset) || el.inset === false) {
        return "";
      } else {
        return "inset ";
      }
    };

    const getColor = (el) => {
      if (el.color !== "transparent") {
        return " rgb(" + el.color + " / " + el.opacity + "%)";
      } else {
        return "transparent";
      }
    };

    const shadow = (el) => {
      return (
        isInset(el) +
        el.offsetX +
        " " +
        el.offsetY +
        " " +
        el.blur +
        " " +
        el.spread +
        " " +
        getColor(el)
      );
    };

    if (el.multiple) {
      const em = el.multiple;

      return em
        .map(function (el) {
          return shadow(el);
        })
        .join(", ");
    } else {
      return shadow(el);
    }
  }
};

const numShadows = (el, bindings) => {
  let name = bindings.arg;
  let num = bindings.value;

  if (name) {
    const getElName = collection.find((el) => el.name === name);
    const setElStyle = {
      prop: "--box-shadow",
      val: baseBoxShadow(getElName),
    };

    el.style.setProperty(setElStyle.prop, setElStyle.val);
    el.setAttribute("data-shadow", name);
  } else {
    if (isNaN(num)) {
      return;
    } else if (num !== el[currentValue]) {
      el[currentValue] = num;

      if (!bindings) {
        console.warn("bindings is not found");
      } else {
        const setElStyle = {
          prop: "--box-shadow",
          val: baseBoxShadow(collection[num]),
        };

        el.style.setProperty(setElStyle.prop, setElStyle.val);
        el.setAttribute("data-shadow", num);
      }
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
    }

    Vue.directive("box-shadow", {
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
