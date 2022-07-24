const base = {
  id: "-1",
  inset: false,
  offsetX: 0,
  offsetY: "2px",
  blur: "8px",
  spread: 0,
  color: "50 50 50",
  opacity: 8,
};

const listShadows = [
  {
    id: "0",
    inset: false,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    spread: 0,
    color: "0 0 0",
    opacity: 0,
  },
  {
    id: "1",
    inset: false,
    offsetX: 0,
    offsetY: 0,
    blur: "20px",
    spread: 0,
    color: "150 150 150",
    opacity: 10,
  },
  {
    id: "2",
    inset: false,
    offsetX: 0,
    offsetY: "20px",
    blur: "60px",
    spread: "-10px",
    color: "0 0 0",
    opacity: 10,
  },
  {
    id: "3",
    inset: false,
    offsetX: 0,
    offsetY: "6px",
    blur: "9px",
    spread: 0,
    color: "0 0 0",
    opacity: 9,
  },
  {
    id: "4",
    inset: false,
    offsetX: 0,
    offsetY: "5px",
    blur: "20px",
    spread: 0,
    color: "0 0 0",
    opacity: 10,
  },
  {
    id: "5",
    inset: false,
    offsetX: 0,
    offsetY: "3px",
    blur: "13px",
    spread: "1px",
    color: "0 0 0",
    opacity: 12,
  },
  {
    id: "6",
    multiple: [
      {
        inset: false,
        offsetX: 0,
        offsetY: "15px",
        blur: "35px",
        spread: 0,
        color: "0 0 0",
        opacity: 10,
      },
      {
        inset: false,
        offsetX: 0,
        offsetY: "3px",
        blur: "10px",
        spread: 0,
        color: "0 0 0",
        opacity: 7,
      },
    ],
  },
  {
    id: "7",
    multiple: [
      {
        inset: false,
        offsetX: 0,
        offsetY: 0,
        blur: "1px",
        spread: 0,
        color: "57 70 78",
        opacity: 15,
      },
      {
        inset: false,
        offsetX: 0,
        offsetY: "20px",
        blur: "55px",
        spread: "-8px",
        color: "57 70 78",
        opacity: 25,
      },
    ],
  },
  {
    id: "8",
    inset: false,
    offsetX: 0,
    offsetY: "15px",
    blur: "45px",
    spread: "-9px",
    color: "0 0 0",
    opacity: 25,
  },
  {
    id: "9",
    inset: false,
    offsetX: "1px",
    offsetY: "1px",
    blur: "1px",
    spread: 0,
    color: "0 0 0",
    opacity: 6,
  },
  {
    id: "10",
    inset: false,
    offsetX: 0,
    offsetY: "2px",
    blur: "6px",
    spread: 0,
    color: "0 0 0",
    opacity: 40,
  },
  {
    id: "11",
    inset: false,
    offsetX: 0,
    offsetY: "6px",
    blur: "16px",
    spread: 0,
    color: "0 0 0",
    opacity: 30,
  },
  {
    id: "12",
    multiple: [
      {
        inset: false,
        offsetX: 0,
        offsetY: "16px",
        blur: "38px",
        spread: "-12px",
        color: "62 57 107",
        opacity: 36,
      },
      {
        inset: false,
        offsetX: 0,
        offsetY: "4px",
        blur: "25px",
        spread: 0,
        color: "62 57 107",
        opacity: 12,
      },
      {
        inset: false,
        offsetX: 0,
        offsetY: "8px",
        blur: "10px",
        spread: "-5px",
        color: "62 57 107",
        opacity: 20,
      },
    ],
  },
  {
    id: "13",
    inset: false,
    offsetX: 0,
    offsetY: "-15px",
    blur: "5px",
    spread: "-12px",
    color: "0 0 0",
    opacity: 20,
  },
  {
    id: "14",
    inset: false,
    offsetX: 0,
    offsetY: "-6px",
    blur: "9px",
    spread: 0,
    color: "0 0 0",
    opacity: 9,
  },
  {
    id: "15",
    inset: false,
    offsetX: 0,
    offsetY: "-20px",
    blur: "60px",
    spread: "-10px",
    color: "0 0 0",
    opacity: 10,
  },
  {
    id: "16",
    inset: false,
    offsetX: 0,
    offsetY: "-50px",
    blur: "100px",
    spread: "-30px",
    color: "16 36 94",
    opacity: 25,
  },
  {
    id: "17",
    inset: false,
    offsetX: 0,
    offsetY: "-16px",
    blur: "24px",
    spread: 0,
    color: "112 128 175",
    opacity: 20,
  },
  {
    id: "18",
    multiple: [
      {
        offsetX: 0,
        offsetY: "16px",
        blur: "32px",
        spread: 0,
        color: "72 76 89",
        opacity: 28,
      },
      {
        offsetX: 0,
        offsetY: 0,
        inset: false,
        blur: 0,
        spread: 0,
        color: "transparent",
        opacity: 0,
      },
    ],
  },
  {
    id: "19",
    multiple: [
      {
        offsetX: 0,
        offsetY: "-16px",
        blur: "32px",
        spread: 0,
        color: "72 76 89",
        opacity: 28,
      },
      {
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        spread: 0,
        color: "transparent",
        opacity: 0,
      },
    ],
  },
  {
    id: "20",
    inset: false,
    offsetX: 0,
    offsetY: "-30px",
    blur: "40px",
    spread: 0,
    color: "16 36 94",
    opacity: 20,
  },
  {
    id: "21",
    inset: false,
    offsetX: "5px",
    offsetY: "5px",
    blur: 0,
    spread: 0,
    color: "0 0 0",
    opacity: 5,
  },
  {
    id: "22",
    inset: false,
    offsetX: "-5px",
    offsetY: "5px",
    blur: 0,
    spread: 0,
    color: "0 0 0",
    opacity: 5,
  },
  {
    id: "23",
    inset: false,
    offsetX: "5px",
    offsetY: "-5px",
    blur: 0,
    spread: 0,
    color: "0 0 0",
    opacity: 5,
  },
  {
    id: "24",
    inset: false,
    offsetX: "-5px",
    offsetY: "-5px",
    blur: 0,
    spread: 0,
    color: "0 0 0",
    opacity: 5,
  },
  {
    id: "25",
    inset: false,
    offsetX: "2px",
    offsetY: "2px",
    blur: "4px",
    spread: 0,
    color: "72 76 89",
    opacity: 20,
  },
  {
    id: "26",
    inset: false,
    offsetX: "-2px",
    offsetY: "2px",
    blur: "4px",
    spread: 0,
    color: "72 76 89",
    opacity: 20,
  },
  {
    id: "27",
    inset: false,
    offsetX: "2px",
    offsetY: "-2px",
    blur: "4px",
    spread: 0,
    color: "72 76 89",
    opacity: 20,
  },
  {
    id: "28",
    inset: false,
    offsetX: "-2px",
    offsetY: "-2px",
    blur: "4px",
    spread: 0,
    color: "72 76 89",
    opacity: 20,
  },
  {
    id: "29",
    inset: false,
    offsetX: "2px",
    offsetY: "4px",
    blur: "6px",
    spread: "1px",
    color: "50 50 50",
    opacity: 14,
  },
  {
    id: "30",
    inset: false,
    offsetX: "-2px",
    offsetY: "4px",
    blur: "6px",
    spread: "1px",
    color: "50 50 50",
    opacity: 14,
  },
  {
    id: "31",
    inset: false,
    offsetX: "2px",
    offsetY: "-4px",
    blur: "6px",
    spread: "1px",
    color: "50 50 50",
    opacity: 14,
  },
  {
    id: "32",
    inset: false,
    offsetX: "-2px",
    offsetY: "-4px",
    blur: "6px",
    spread: "1px",
    color: "50 50 50",
    opacity: 14,
  },
  {
    id: "33",
    inset: false,
    offsetX: "15px",
    offsetY: "15px",
    blur: "5px",
    spread: "-5px",
    color: "0 0 0",
    opacity: 20,
  },
  {
    id: "34",
    inset: false,
    offsetX: "-15px",
    offsetY: "15px",
    blur: "5px",
    spread: "-5px",
    color: "0 0 0",
    opacity: 20,
  },
  {
    id: "35",
    inset: false,
    offsetX: "15px",
    offsetY: "-15px",
    blur: "5px",
    spread: "-5px",
    color: "0 0 0",
    opacity: 20,
  },
  {
    id: "36",
    inset: false,
    offsetX: "-15px",
    offsetY: "-15px",
    blur: "5px",
    spread: "-5px",
    color: "0 0 0",
    opacity: 20,
  },
  {
    id: "37",
    multiple: [
      {
        inset: false,
        offsetX: "10px",
        offsetY: "10px",
        blur: "32px",
        spread: 0,
        color: "62 57 107",
        opacity: 28,
      },
      {
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        spread: 0,
        color: "transparent",
        opacity: 0,
      },
    ],
  },
  {
    id: "38",
    multiple: [
      {
        inset: false,
        offsetX: "-10px",
        offsetY: "10px",
        blur: "32px",
        spread: 0,
        color: "62 57 107",
        opacity: 28,
      },
      {
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        spread: 0,
        color: "transparent",
        opacity: 0,
      },
    ],
  },
  {
    id: "39",
    multiple: [
      {
        inset: false,
        offsetX: "10px",
        offsetY: "-10px",
        blur: "32px",
        spread: 0,
        color: "62 57 107",
        opacity: 28,
      },
      {
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        spread: 0,
        color: "transparent",
        opacity: 0,
      },
    ],
  },
  {
    id: "40",
    multiple: [
      {
        inset: false,
        offsetX: "-10px",
        offsetY: "-10px",
        blur: "32px",
        spread: 0,
        color: "62 57 107",
        opacity: 28,
      },
      {
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        spread: 0,
        color: "transparent",
        opacity: 0,
      },
    ],
  },
  {
    id: "41",
    multiple: [
      {
        inset: false,
        offsetX: "1px",
        offsetY: "1px",
        blur: "5px",
        spread: 0,
        color: "26 26 67",
        opacity: 5,
      },
      {
        inset: false,
        offsetX: "39px",
        offsetY: "63px",
        blur: "125px",
        spread: "-25px",
        color: "50 50 93",
        opacity: 50,
      },
      {
        inset: false,
        offsetX: "24px",
        offsetY: "38px",
        blur: "75px",
        spread: "-38px",
        color: "0 0 0",
        opacity: 30,
      },
    ],
  },
  {
    id: "42",
    multiple: [
      {
        inset: false,
        offsetX: "1px",
        offsetY: "1px",
        blur: "5px",
        spread: 0,
        color: "26 26 67",
        opacity: 5,
      },
      {
        inset: false,
        offsetX: "-39px",
        offsetY: "63px",
        blur: "125px",
        spread: "-25px",
        color: "50 50 93",
        opacity: 50,
      },
      {
        inset: false,
        offsetX: "24px",
        offsetY: "38px",
        blur: "75px",
        spread: "-38px",
        color: "0 0 0",
        opacity: 30,
      },
    ],
  },
  {
    id: "43",
    inset: false,
    offsetX: 0,
    offsetY: "15px",
    blur: "5px",
    spread: "-12px",
    color: "0 0 0",
    opacity: 20,
  },
  {
    id: "44",
    inset: false,
    offsetX: 0,
    offsetY: "50px",
    blur: "100px",
    spread: "-30px",
    color: "16 36 94",
    opacity: 25,
  },
  {
    id: "45",
    inset: false,
    offsetX: 0,
    offsetY: "8px",
    blur: "16px",
    spread: 0,
    color: "0 0 0",
    opacity: 5,
  },
  {
    id: "46",
    inset: false,
    offsetX: 0,
    offsetY: "6px",
    blur: "9px",
    spread: 0,
    color: "0 0 0",
    opacity: 9,
  },
  {
    id: "47",
    inset: false,
    offsetX: 0,
    offsetY: "16px",
    blur: "24px",
    spread: 0,
    color: "112 128 175",
    opacity: 20,
  },
  {
    id: "48",
    multiple: [
      {
        inset: false,
        offsetX: 0,
        offsetY: "16px",
        blur: "32px",
        spread: 0,
        color: "72 76 89",
        opacity: 28,
      },
      {
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        spread: 0,
        color: "transparent",
        opacity: 0,
      },
    ],
  },
  {
    id: "49",
    inset: false,
    offsetX: 0,
    offsetY: "30px",
    blur: "40px",
    spread: 0,
    color: "16 36 94",
    opacity: 20,
  },
  {
    id: "50",
    inset: false,
    offsetX: 0,
    offsetY: 0,
    blur: "70px",
    spread: "6px",
    color: "0 0 0",
    opacity: 12,
  },
  {
    id: "51",
    inset: false,
    offsetX: "5px",
    offsetY: "31px",
    blur: "85px",
    spread: "23px",
    color: "0 0 0",
    opacity: 7,
  },
  {
    id: "52",
    inset: false,
    offsetX: "30px",
    offsetY: "70px",
    blur: "70px",
    spread: "40px",
    color: "0 0 0",
    opacity: 5,
  },
  {
    id: "53",
    inset: false,
    offsetX: 0,
    offsetY: "30px",
    blur: "48px",
    spread: "22px",
    color: "0 0 0",
    opacity: 7,
  },
  {
    id: "54",
    inset: false,
    offsetX: "-41px",
    offsetY: "51px",
    blur: "68px",
    spread: "5px",
    color: "0 0 0",
    opacity: 6,
  },
  {
    id: "55",
    inset: false,
    offsetX: "41px",
    offsetY: "51px",
    blur: "68px",
    spread: "5px",
    color: "0 0 0",
    opacity: 6,
  },
  {
    id: "56",
    inset: false,
    offsetX: "-100px",
    offsetY: "100px",
    blur: "85px",
    spread: "23px",
    color: "0 0 0",
    opacity: 7,
  },
  {
    id: "57",
    inset: false,
    offsetX: "100px",
    offsetY: "100px",
    blur: "85px",
    spread: "23px",
    color: "0 0 0",
    opacity: 7,
  },
  {
    id: "58",
    multiple: [
      {
        inset: false,
        offsetX: "5px",
        offsetY: 0,
        blur: "12px",
        spread: "-10px",
        color: "0 0 0",
        opacity: 25,
      },
      {
        offsetX: "-5px",
        offsetY: 0,
        blur: "12px",
        spread: "-10px",
        color: "0 0 0",
        opacity: 25,
      },
    ],
  },
  {
    id: "59",
    multiple: [
      {
        offsetX: "6px",
        offsetY: 0,
        blur: "12px",
        spread: "-8px",
        color: "50 50 50",
        opacity: 45,
      },
      {
        offsetX: "-6px",
        offsetY: 0,
        blur: "12px",
        spread: "-8px",
        color: "50 50 50",
        opacity: 45,
      },
    ],
  },
  {
    id: "60",
    multiple: [
      {
        offsetX: "6px",
        offsetY: 0,
        blur: "12px",
        spread: "-7px",
        color: "50 50 50",
        opacity: 75,
      },
      {
        offsetX: "-6px",
        offsetY: 0,
        blur: "12px",
        spread: "-7px",
        color: "50 50 50",
        opacity: 75,
      },
    ],
  },
  {
    id: "61",
    multiple: [
      {
        offsetX: "-20px",
        offsetY: 0,
        blur: "50px",
        spread: "-25px",
        color: "50 50 50",
        opacity: 65,
      },
      {
        offsetX: "20px",
        offsetY: 0,
        blur: "50px",
        spread: "-25px",
        color: "50 50 50",
        opacity: 65,
      },
    ],
  },
  {
    id: "62",
    multiple: [
      {
        offsetX: "20px",
        offsetY: 0,
        blur: "25px",
        spread: "-15px",
        color: "50 50 50",
        opacity: 35,
      },
      {
        offsetX: "-20px",
        offsetY: 0,
        blur: "25px",
        spread: "-15px",
        color: "50 50 50",
        opacity: 35,
      },
    ],
  },
  {
    id: "63",
    multiple: [
      {
        offsetX: 0,
        offsetY: "11px",
        blur: "30px",
        spread: "-20px",
        color: "51 51 51",
        opacity: 51,
      },
      {
        offsetX: 0,
        offsetY: "-12px",
        blur: "30px",
        spread: "-20px",
        color: "51 51 51",
        opacity: 51,
      },
    ],
  },
  {
    id: "64",
    multiple: [
      {
        offsetX: 0,
        offsetY: "11px",
        blur: "8px",
        spread: "-10px",
        color: "51 51 51",
        opacity: 51,
      },
      {
        offsetX: 0,
        offsetY: "-11px",
        blur: "8px",
        spread: "-10px",
        color: "51 51 51",
        opacity: 51,
      },
    ],
  },
];

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
      const one = el.multiple[0];
      const two = el.multiple[1];
      const three = el.multiple[2];

      if (three === undefined) {
        return shadow(one) + ", " + shadow(two);
      } else {
        return shadow(one) + ", " + shadow(two) + ", " + shadow(three);
      }
    } else {
      return shadow(el);
    }
  }
};

const numShadows = (el, bindings) => {
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
