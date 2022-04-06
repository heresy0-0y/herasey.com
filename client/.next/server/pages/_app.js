"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
const theme_tools_namespaceObject = require("@chakra-ui/theme-tools");
;// CONCATENATED MODULE: ./src/theme.js



const fonts = {
    mono: `'Menlo', monospace`
};
const breakpoints = (0,theme_tools_namespaceObject.createBreakpoints)({
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em"
});
const theme = (0,react_.extendTheme)({
    sizes: {
        max: "max-content",
        min: "min-content",
        full: "100%",
        "3xs": "14rem",
        "2xs": "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "8xl": "90rem",
        container: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px"
        }
    },
    colors: {
        "red": {
            "50": "#FFE5E5",
            "100": "#FFB8B8",
            "200": "#FF8A8A",
            "300": "#FF5C5C",
            "400": "#FF2E2E",
            "500": "#FF0000",
            "600": "#CC0000",
            "700": "#990000",
            "800": "#660000",
            "900": "#330000"
        },
        "orange": {
            "50": "#FFF1E5",
            "100": "#FFD7B8",
            "200": "#FFBD8A",
            "300": "#FFA35C",
            "400": "#FF892E",
            "500": "#FF6F00",
            "600": "#CC5900",
            "700": "#994300",
            "800": "#662C00",
            "900": "#331600"
        },
        "gray": {
            "50": "#F0F2F4",
            "100": "#D6DBE0",
            "200": "#BCC4CD",
            "300": "#A2ADB9",
            "400": "#8896A5",
            "500": "#6D7F92",
            "600": "#576675",
            "700": "#424C57",
            "800": "#2C333A",
            "900": "#16191D"
        },
        "yellow": {
            "50": "#FFFCE5",
            "100": "#FFF5B8",
            "200": "#FFEF8A",
            "300": "#FFE95C",
            "400": "#FFE32E",
            "500": "#FFDD00",
            "600": "#CCB100",
            "700": "#998400",
            "800": "#665800",
            "900": "#332C00"
        },
        "green": {
            "50": "#EAFAF2",
            "100": "#C5F2DB",
            "200": "#9FE9C3",
            "300": "#7AE1AC",
            "400": "#55D894",
            "500": "#2FD07D",
            "600": "#26A664",
            "700": "#1C7D4B",
            "800": "#135332",
            "900": "#092A19"
        },
        "teal": {
            "50": "#E8FCFC",
            "100": "#BFF7F7",
            "200": "#96F2F2",
            "300": "#6EEDED",
            "400": "#45E8E8",
            "500": "#1CE3E3",
            "600": "#16B6B6",
            "700": "#118888",
            "800": "#0B5B5B",
            "900": "#062D2D"
        },
        "cyan": {
            "50": "#E7F9FE",
            "100": "#BCEDFB",
            "200": "#90E2F9",
            "300": "#65D6F6",
            "400": "#39CBF3",
            "500": "#0EBFF1",
            "600": "#0B99C1",
            "700": "#087391",
            "800": "#064C60",
            "900": "#032630"
        },
        "blue": {
            "50": "#E6E6FE",
            "100": "#BABAFC",
            "200": "#8E8EFB",
            "300": "#6262F9",
            "400": "#3636F7",
            "500": "#0A0AF5",
            "600": "#0808C4",
            "700": "#060693",
            "800": "#040462",
            "900": "#020231"
        },
        "purple": {
            "50": "#F4E5FF",
            "100": "#E1B8FF",
            "200": "#CE8AFF",
            "300": "#BB5CFF",
            "400": "#A82EFF",
            "500": "#9400FF",
            "600": "#7700CC",
            "700": "#590099",
            "800": "#3B0066",
            "900": "#1E0033"
        },
        "pink": {
            "50": "#FCE9EC",
            "100": "#F6C0CA",
            "200": "#F198A7",
            "300": "#EB7085",
            "400": "#E54763",
            "500": "#E01F40",
            "600": "#B31933",
            "700": "#861327",
            "800": "#5A0C1A",
            "900": "#2D060D"
        }
    },
    fonts,
    breakpoints,
    icons: {
        logo: {
            path: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                width: "3000",
                height: "3163",
                viewBox: "0 0 3000 3163",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "3000",
                        height: "3162.95",
                        fill: "none"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z",
                        fill: "currentColor"
                    })
                ]
            }),
            viewBox: "0 0 3000 3163"
        }
    }
});
/* harmony default export */ const src_theme = (theme);

;// CONCATENATED MODULE: ./src/pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        resetCSS: true,
        theme: src_theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ColorModeProvider, {
            options: {
                useSystemColorMode: true
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(606));
module.exports = __webpack_exports__;

})();