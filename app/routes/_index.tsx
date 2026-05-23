import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/routes/_index.tsx");const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport5_react_jsxDevRuntime["Fragment"];import RefreshRuntime from "/@id/__x00__virtual:react-router/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "React Router Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/user/website/app/routes/_index.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$(),
  _s2 = $RefreshSig$(),
  _s3 = $RefreshSig$();
import { UNSAFE_withComponentProps as _UNSAFE_withComponentProps } from "/node_modules/.vite/deps/react-router.js?v=14cb8495";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=14cb8495";
import { Link } from "/node_modules/.vite/deps/react-router.js?v=14cb8495";
var _jsxFileName = "/home/user/website/app/routes/_index.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=14cb8495";
// SVG Icons
const LightningBoltIcon = ({
  className = "w-6 h-6"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */_jsxDEV("path", {
    d: "M18 2L6 18H16L14 30L26 14H16L18 2Z",
    fill: "#FFD700",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, this);
_c = LightningBoltIcon;
const PlugIcon = ({
  className = "w-6 h-6"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("path", {
    d: "M12 2V7M12 7C10.3431 7 9 8.34315 9 10V15H15V10C15 8.34315 13.6569 7 12 7Z",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M9 15V19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19V15",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M7 21H17",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 3
}, this);
_c2 = PlugIcon;
const StarIcon = ({
  className = "w-6 h-6"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "#FFD700",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */_jsxDEV("path", {
    d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 21,
  columnNumber: 3
}, this);
_c3 = StarIcon;
const ShieldIcon = ({
  className = "w-6 h-6"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("path", {
    d: "M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M9 12L11 14L15 10",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 27,
  columnNumber: 3
}, this);
_c4 = ShieldIcon;
const TagIcon = ({
  className = "w-5 h-5"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("path", {
    d: "M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("circle", {
    cx: "7",
    cy: "7",
    r: "1.5",
    fill: "#FFD700"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 34,
  columnNumber: 3
}, this);
_c5 = TagIcon;
const ClockIcon = ({
  className = "w-5 h-5"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "#FFD700",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M12 6V12L16 14",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 41,
  columnNumber: 3
}, this);
_c6 = ClockIcon;
const CheckmarkCircleIcon = ({
  className = "w-5 h-5"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "#FFD700",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M8 12L11 15L16 9",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 48,
  columnNumber: 3
}, this);
_c7 = CheckmarkCircleIcon;
const CircuitBreakerIcon = ({
  className = "w-8 h-8"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("rect", {
    x: "4",
    y: "6",
    width: "24",
    height: "20",
    rx: "2",
    stroke: "#FFD700",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M10 12V16M10 12H14M10 16H14",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M16 12V16M16 12H20M16 16H20",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M10 20V24M16 20V24M22 20V24",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 55,
  columnNumber: 3
}, this);
_c8 = CircuitBreakerIcon;
const LightBulbIcon = ({
  className = "w-8 h-8"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("path", {
    d: "M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.2208 7.2068 13.1599 9 14.1973V17H15V14.1973C16.7932 13.1599 18 11.2208 18 9C18 5.68629 15.3137 3 12 3Z",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M9 21H15",
    stroke: "#FFD700",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 64,
  columnNumber: 3
}, this);
_c9 = LightBulbIcon;
const SolarPanelIcon = ({
  className = "w-8 h-8"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("rect", {
    x: "4",
    y: "8",
    width: "24",
    height: "16",
    rx: "2",
    stroke: "#FFD700",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M4 14H28M4 20H28M12 8V24M20 8V24",
    stroke: "#FFD700",
    strokeWidth: "1.5"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M14 24L16 28L18 24",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 71,
  columnNumber: 3
}, this);
_c0 = SolarPanelIcon;
const VoltMeterIcon = ({
  className = "w-8 h-8"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: "#FFD700",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M12 7V12L15 15",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M4 4L6 6",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M20 4L18 6",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 79,
  columnNumber: 3
}, this);
_c1 = VoltMeterIcon;
const CoilIcon = ({
  className = "w-8 h-8"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("ellipse", {
    cx: "16",
    cy: "16",
    rx: "10",
    ry: "6",
    stroke: "#FFD700",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("ellipse", {
    cx: "16",
    cy: "12",
    rx: "10",
    ry: "6",
    stroke: "#FFD700",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("ellipse", {
    cx: "16",
    cy: "8",
    rx: "10",
    ry: "6",
    stroke: "#FFD700",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M6 8V4M26 8V4",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 88,
  columnNumber: 3
}, this);
_c10 = CoilIcon;
const WarningTriangleIcon = ({
  className = "w-8 h-8"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("path", {
    d: "M12 3L22 20H2L12 3Z",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M12 10V14",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("circle", {
    cx: "12",
    cy: "17",
    r: "1",
    fill: "#FFD700"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 97,
  columnNumber: 3
}, this);
_c11 = WarningTriangleIcon;
const MapPinIcon = ({
  className = "w-5 h-5"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("path", {
    d: "M12 2C8.68629 2 6 4.68629 6 8C6 12.5 12 20 12 20C12 20 18 12.5 18 8C18 4.68629 15.3137 2 12 2Z",
    stroke: "#FFD700",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("circle", {
    cx: "12",
    cy: "8",
    r: "2",
    stroke: "#FFD700",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 105,
  columnNumber: 3
}, this);
_c12 = MapPinIcon;
const EnvelopeIcon = ({
  className = "w-6 h-6"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2",
    stroke: "#FFD700",
    strokeWidth: "2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M2 6L12 13L22 6",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 112,
  columnNumber: 3
}, this);
_c13 = EnvelopeIcon;
const WhatsAppIcon = ({
  className = "w-6 h-6"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */_jsxDEV("path", {
    d: "M21 11.5C21 16.1944 17.1944 20 12.5 20C11.0779 20 9.74381 19.5988 8.59609 18.9069L2.5 20L3.64356 14.2371C2.85357 12.9818 2.5 11.5497 2.5 10C2.5 5.30558 6.30558 1.5 11 1.5C15.6944 1.5 19.5 5.30558 19.5 10C19.5 14.6944 15.6944 18.5 11 18.5",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M8 8L10.5 10.5M15.5 10.5L18 8M15.5 13.5L18 16",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 119,
  columnNumber: 3
}, this);
_c14 = WhatsAppIcon;
const NavigationIcon = ({
  className = "w-5 h-5"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */_jsxDEV("path", {
    d: "M12 2L4 14H9L10 22L20 10H15L12 2Z",
    fill: "#FFD700",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 126,
  columnNumber: 3
}, this);
_c15 = NavigationIcon;
const PhoneIcon = ({
  className = "w-5 h-5"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */_jsxDEV("path", {
    d: "M22 16.92V19.92C22 20.48 21.5 20.98 20.94 20.99C10.05 21.02 0.98 11.95 1.01 1.06C1.01 0.5 1.51 0 2.07 0H5.07C5.57 0 6.02 0.37 6.12 0.87L7.62 7.91C7.73 8.47 7.43 9.04 6.94 9.33L4.17 11C6.08 15.27 9.73 18.92 14 20.83L16.67 18.06C16.96 17.57 17.53 17.27 18.09 17.38L25.13 18.88C25.63 18.98 26 19.43 26 19.93V16.92C26 16.42 25.62 15.97 25.13 15.87L22 16.92Z",
    fill: "#FFD700"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 132,
  columnNumber: 3
}, this);
_c16 = PhoneIcon;
const ArrowIcon = ({
  className = "w-5 h-5"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */_jsxDEV("path", {
    d: "M4 12H20M20 12L14 6M20 12L14 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 138,
  columnNumber: 3
}, this);
// Animated counter hook
_c17 = ArrowIcon;
function useAnimatedCounter(end, duration = 2e3) {
  _s();
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime;
    const animate = currentTime => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  return count;
}
_s(useAnimatedCounter, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
export function meta({}) {
  return [{
    title: "חשמלאי - שירות חשמל מקצועי ואמין לכל בית ועסק"
  }, {
    name: "description",
    content: "שירות חשמל מקצועי לבית ולעסק — זמינים 24/7 ומגיעים אליך תוך 30 דקות. תיקון תקלות, התקנות, לוחות חשמל ומערכות סולאריות."
  }];
}
export default _c19 = _s2(_UNSAFE_withComponentProps(_c18 = _s2(function Home() {
  _s2();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const yearsExp = useAnimatedCounter(15);
  const projectsDone = useAnimatedCounter(800);
  const satisfaction = useAnimatedCounter(100);
  const stats = [{
    icon: /* @__PURE__ */_jsxDEV(LightningBoltIcon, {
      className: "w-10 h-10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }, this),
    value: `${yearsExp}+`,
    label: "שנות ניסיון"
  }, {
    icon: /* @__PURE__ */_jsxDEV(PlugIcon, {
      className: "w-10 h-10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }, this),
    value: `${projectsDone}+`,
    label: "עבודות בוצעו"
  }, {
    icon: /* @__PURE__ */_jsxDEV(StarIcon, {
      className: "w-10 h-10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }, this),
    value: `${satisfaction}%`,
    label: "שביעות רצון"
  }, {
    icon: /* @__PURE__ */_jsxDEV(ShieldIcon, {
      className: "w-10 h-10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }, this),
    value: "על כל עבודה",
    label: "אחריות"
  }];
  const floatingTags = ["תיקון תקלות", "התקנת לוח חשמל", "חשמל ביתי", "חשמל עסקי", "מערכות סולאריות"];
  return /* @__PURE__ */_jsxDEV("div", {
    className: "min-h-screen bg-[#1A1A1A]",
    children: [/* @__PURE__ */_jsxDEV("section", {
      className: "relative min-h-screen flex items-center overflow-hidden circuit-pattern",
      children: [/* @__PURE__ */_jsxDEV("div", {
        className: "absolute inset-0 pointer-events-none",
        children: [/* @__PURE__ */_jsxDEV("svg", {
          className: "absolute top-10 right-10 w-32 h-32 lightning-flash opacity-30",
          viewBox: "0 0 100 100",
          children: /* @__PURE__ */_jsxDEV("path", {
            d: "M50 0L20 50H45L35 100L80 40H55L50 0Z",
            fill: "#FFD700"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("svg", {
          className: "absolute top-1/4 left-20 w-24 h-24 lightning-flash opacity-20",
          style: {
            animationDelay: "1s"
          },
          viewBox: "0 0 100 100",
          children: /* @__PURE__ */_jsxDEV("path", {
            d: "M50 0L20 50H45L35 100L80 40H55L50 0Z",
            fill: "#00BFFF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("svg", {
          className: "absolute bottom-1/4 right-1/4 w-20 h-20 lightning-flash opacity-25",
          style: {
            animationDelay: "2s"
          },
          viewBox: "0 0 100 100",
          children: /* @__PURE__ */_jsxDEV("path", {
            d: "M50 0L20 50H45L35 100L80 40H55L50 0Z",
            fill: "#FFD700"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("svg", {
          className: "absolute top-1/2 left-1/3 w-16 h-16 lightning-flash opacity-15",
          style: {
            animationDelay: "0.5s"
          },
          viewBox: "0 0 100 100",
          children: /* @__PURE__ */_jsxDEV("path", {
            d: "M50 0L20 50H45L35 100L80 40H55L50 0Z",
            fill: "#FFD700"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV("div", {
        className: "absolute top-20 right-1/4 w-2 h-2 bg-[#FFD700] rounded-full spark-flicker"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV("div", {
        className: "absolute top-40 left-1/3 w-1 h-1 bg-[#00BFFF] rounded-full spark-flicker",
        style: {
          animationDelay: "0.5s"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV("div", {
        className: "absolute bottom-40 right-1/3 w-2 h-2 bg-[#FFD700] rounded-full spark-flicker",
        style: {
          animationDelay: "1s"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV("div", {
        className: "absolute bottom-20 left-1/4 w-1 h-1 bg-[#FFD700] rounded-full spark-flicker",
        style: {
          animationDelay: "1.5s"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV("div", {
        className: "container relative z-10 py-20",
        children: /* @__PURE__ */_jsxDEV("div", {
          className: "text-center",
          children: [/* @__PURE__ */_jsxDEV("div", {
            className: "flex flex-wrap justify-center gap-3 mb-8",
            children: floatingTags.map((tag, index) => /* @__PURE__ */_jsxDEV("span", {
              className: `inline-flex items-center gap-2 bg-[#FFD700] text-[#1A1A1A] px-4 py-2 rounded-full text-sm font-bold float-animation`,
              style: {
                animationDelay: `${index * .2}s`
              },
              children: [/* @__PURE__ */_jsxDEV(LightningBoltIcon, {
                className: "w-4 h-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 19
              }, this), tag]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("h1", {
            className: `text-6xl md:text-8xl lg:text-9xl font-black text-[#F5F5F5] mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
            children: "המומחים לחשמל שלך"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("p", {
            className: `text-xl md:text-2xl text-[#F5F5F5]/90 mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
            children: "שירות חשמל מקצועי לבית ולעסק — זמינים 24/7 ומגיעים אליך תוך 30 דקות"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("div", {
            className: `flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
            children: [/* @__PURE__ */_jsxDEV(Link, {
              to: "/צור-קשר",
              className: "flex items-center gap-3 bg-[#FFD700] text-[#1A1A1A] px-8 py-4 rounded-lg text-xl font-bold hover:bg-[#00BFFF] hover:text-white transition-all transform hover:scale-105 shadow-lg shadow-[#FFD700]/30",
              children: ["קבל הצעת מחיר חינם", /* @__PURE__ */_jsxDEV(ArrowIcon, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 15
            }, this), /* @__PURE__ */_jsxDEV(Link, {
              to: "/שירותים",
              className: "flex items-center gap-3 border-2 border-[#F5F5F5] text-[#F5F5F5] px-8 py-4 rounded-lg text-xl font-bold hover:bg-[#F5F5F5] hover:text-[#1A1A1A] transition-all",
              children: "השירותים שלנו"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("div", {
            className: `grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
            children: stats.map((stat, index) => /* @__PURE__ */_jsxDEV("div", {
              className: "bg-[#2D2D2D]/80 backdrop-blur-sm rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700] transition-all hover:shadow-lg hover:shadow-[#FFD700]/20",
              children: [/* @__PURE__ */_jsxDEV("div", {
                className: "flex justify-center mb-3",
                children: stat.icon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 19
              }, this), /* @__PURE__ */_jsxDEV("div", {
                className: "text-4xl md:text-5xl font-black text-[#FFD700] mb-2",
                children: stat.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 19
              }, this), /* @__PURE__ */_jsxDEV("div", {
                className: "text-[#F5F5F5] font-bold",
                children: stat.label
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 276,
                columnNumber: 19
              }, this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV("div", {
        className: "absolute bottom-0 left-0 right-0 h-16",
        children: /* @__PURE__ */_jsxDEV("svg", {
          viewBox: "0 0 1200 60",
          className: "w-full h-full",
          preserveAspectRatio: "none",
          children: [/* @__PURE__ */_jsxDEV("path", {
            d: "M0 30 Q100 10 200 30 T400 30 T600 30 T800 30 T1000 30 T1200 30",
            fill: "none",
            stroke: "#FFD700",
            strokeWidth: "3",
            className: "spark-flicker"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("path", {
            d: "M0 30 Q100 50 200 30 T400 30 T600 30 T800 30 T1000 30 T1200 30",
            fill: "none",
            stroke: "#00BFFF",
            strokeWidth: "2",
            opacity: "0.5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("section", {
      className: "bg-[#2D2D2D] py-8 border-y border-[#FFD700]/20",
      children: /* @__PURE__ */_jsxDEV("div", {
        className: "container",
        children: /* @__PURE__ */_jsxDEV("div", {
          className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",
          children: [{
            icon: /* @__PURE__ */_jsxDEV(ClockIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 23
            }, this),
            text: "זמינות 24/7"
          }, {
            icon: /* @__PURE__ */_jsxDEV(ShieldIcon, {
              className: "w-8 h-8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 23
            }, this),
            text: "מבוטח במלואו"
          }, {
            icon: /* @__PURE__ */_jsxDEV(CheckmarkCircleIcon, {
              className: "w-8 h-8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 23
            }, this),
            text: "רישיון ממשלתי"
          }, {
            icon: /* @__PURE__ */_jsxDEV(StarIcon, {
              className: "w-8 h-8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 23
            }, this),
            text: "דירוג 5 כוכבים"
          }, {
            icon: /* @__PURE__ */_jsxDEV(LightningBoltIcon, {
              className: "w-8 h-8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 23
            }, this),
            text: "אחריות על עבודה"
          }, {
            icon: /* @__PURE__ */_jsxDEV(TagIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 23
            }, this),
            text: "הצעת מחיר חינם"
          }].map((item, index) => /* @__PURE__ */_jsxDEV("div", {
            className: "flex flex-col items-center text-center gap-2",
            children: [/* @__PURE__ */_jsxDEV("span", {
              className: "text-[#FFD700]",
              children: item.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 17
            }, this), /* @__PURE__ */_jsxDEV("span", {
              className: "text-[#F5F5F5] font-bold text-sm",
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 17
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("section", {
      className: "bg-[#1A1A1A] py-16",
      children: /* @__PURE__ */_jsxDEV("div", {
        className: "container",
        children: [/* @__PURE__ */_jsxDEV("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */_jsxDEV("h2", {
            className: "text-5xl md:text-6xl font-black text-[#F5F5F5] mb-4",
            children: "השירותים שלנו"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("div", {
            className: "w-48 h-1 bg-[#FFD700] mx-auto rounded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
          children: [{
            icon: /* @__PURE__ */_jsxDEV(LightningBoltIcon, {
              className: "w-12 h-12"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 23
            }, this),
            title: "תיקון תקלות חשמל",
            desc: "פתרון מקצועי לכל תקלת חשמל בבית או בעסק",
            tag: "דחוף",
            tagColor: "bg-red-500"
          }, {
            icon: /* @__PURE__ */_jsxDEV(CircuitBreakerIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 23
            }, this),
            title: "התקנת לוח חשמל",
            desc: "התקנה ושדרוג לוחות חשמל בטוחים ותקניים",
            tag: "פופולרי",
            tagColor: "bg-[#FFD700]"
          }, {
            icon: /* @__PURE__ */_jsxDEV(PlugIcon, {
              className: "w-12 h-12"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 23
            }, this),
            title: "התקנת שקעים ומתגים",
            desc: "התקנת שקעים, מתגים ונקודות חשמל חדשות",
            tag: "פופולרי",
            tagColor: "bg-[#FFD700]"
          }, {
            icon: /* @__PURE__ */_jsxDEV(LightBulbIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 23
            }, this),
            title: "התקנת תאורה",
            desc: "התקנת פנסים, מנורות ותאורת LED חסכונית",
            tag: "חדש",
            tagColor: "bg-green-500"
          }, {
            icon: /* @__PURE__ */_jsxDEV(SolarPanelIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 23
            }, this),
            title: "מערכות סולאריות",
            desc: "תכנון והתקנת מערכות סולאריות לבתים ועסקים",
            tag: "ירוק",
            tagColor: "bg-green-500"
          }, {
            icon: /* @__PURE__ */_jsxDEV(VoltMeterIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 23
            }, this),
            title: "בדיקות חשמל",
            desc: "בדיקות בטיחות ומדידות חשמל מקצועיות",
            tag: "חיוני",
            tagColor: "bg-blue-500"
          }, {
            icon: /* @__PURE__ */_jsxDEV(CoilIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 23
            }, this),
            title: "החלפת כבלים",
            desc: "החלפת כבלים פגומים וחיווט מקצועי",
            tag: "מומחיות",
            tagColor: "bg-purple-500"
          }, {
            icon: /* @__PURE__ */_jsxDEV(WarningTriangleIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 23
            }, this),
            title: "חשמלאי חירום 24/7",
            desc: "זמינות מלאה לתקלות חירום בכל שעה",
            tag: "חירום",
            tagColor: "bg-red-500"
          }].map((service, index) => /* @__PURE__ */_jsxDEV(Link, {
            to: "/שירותים",
            className: "bg-[#2D2D2D] rounded-xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700] transition-all hover:shadow-lg hover:shadow-[#FFD700]/20 card-hover group",
            children: /* @__PURE__ */_jsxDEV("div", {
              className: "flex flex-col h-full",
              children: [/* @__PURE__ */_jsxDEV("div", {
                className: "flex items-start justify-between mb-4",
                children: [/* @__PURE__ */_jsxDEV("span", {
                  className: "text-[#FFD700] group-hover:scale-110 transition-transform",
                  children: service.icon
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 353,
                  columnNumber: 21
                }, this), /* @__PURE__ */_jsxDEV("span", {
                  className: `${service.tagColor} text-white text-xs font-bold px-2 py-1 rounded`,
                  children: service.tag
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 354,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 19
              }, this), /* @__PURE__ */_jsxDEV("h3", {
                className: "text-xl font-black text-[#F5F5F5] mb-2",
                children: service.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 356,
                columnNumber: 19
              }, this), /* @__PURE__ */_jsxDEV("p", {
                className: "text-[#F5F5F5]/70 font-bold text-sm flex-grow",
                children: service.desc
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 357,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 351,
              columnNumber: 17
            }, this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("div", {
          className: "mt-12 bg-[#2D2D2D] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#FFD700]/20",
          children: [/* @__PURE__ */_jsxDEV("div", {
            className: "flex items-center gap-4",
            children: [/* @__PURE__ */_jsxDEV(PhoneIcon, {
              className: "w-12 h-12 text-[#FFD700]"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 15
            }, this), /* @__PURE__ */_jsxDEV("p", {
              className: "text-[#F5F5F5] font-bold text-lg",
              children: "לא מצאת את השירות שאתה מחפש? התקשר אלינו ונמצא פתרון!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV(Link, {
            to: "/צור-קשר",
            className: "bg-[#FFD700] text-[#1A1A1A] px-6 py-3 rounded-lg font-bold hover:bg-[#00BFFF] hover:text-white transition-all whitespace-nowrap",
            children: "דברו איתנו"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("section", {
      className: "bg-[#2D2D2D] py-16",
      children: /* @__PURE__ */_jsxDEV("div", {
        className: "container",
        children: [/* @__PURE__ */_jsxDEV("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */_jsxDEV("h2", {
            className: "text-5xl md:text-6xl font-black text-[#F5F5F5] mb-4",
            children: "למה לבחור בנו?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("div", {
            className: "w-48 h-1 bg-[#FFD700] mx-auto rounded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 387,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
          children: [/* @__PURE__ */_jsxDEV("div", {
            className: "space-y-4",
            children: ["15 שנות ניסיון בתחום החשמל", "צוות חשמלאים מוסמך ומנוסה", "זמינות 24/7 כולל שבתות וחגים", "מגיעים תוך 30 דקות לכל תקלה"].map((item, index) => /* @__PURE__ */_jsxDEV("div", {
              className: "flex items-center gap-3",
              children: [/* @__PURE__ */_jsxDEV(CheckmarkCircleIcon, {
                className: "w-6 h-6 flex-shrink-0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 400,
                columnNumber: 19
              }, this), /* @__PURE__ */_jsxDEV("span", {
                className: "text-[#F5F5F5] font-bold text-lg",
                children: item
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 401,
                columnNumber: 19
              }, this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 399,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 392,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("div", {
            className: "flex flex-col items-center",
            children: [/* @__PURE__ */_jsxDEV("div", {
              className: "relative w-48 h-48 mb-6",
              children: [/* @__PURE__ */_jsxDEV("div", {
                className: "absolute inset-0 rounded-full border-4 border-[#FFD700] animate-pulse"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 409,
                columnNumber: 17
              }, this), /* @__PURE__ */_jsxDEV("div", {
                className: "absolute inset-4 rounded-full border-2 border-[#FFD700]/50"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 410,
                columnNumber: 17
              }, this), /* @__PURE__ */_jsxDEV("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /* @__PURE__ */_jsxDEV("div", {
                  className: "text-center",
                  children: [/* @__PURE__ */_jsxDEV("div", {
                    className: "text-5xl font-black text-[#FFD700]",
                    children: "15+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 413,
                    columnNumber: 21
                  }, this), /* @__PURE__ */_jsxDEV("div", {
                    className: "text-[#F5F5F5] font-bold text-sm",
                    children: "שנות ניסיון"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 414,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 412,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 408,
              columnNumber: 15
            }, this), /* @__PURE__ */_jsxDEV("div", {
              className: "grid grid-cols-2 gap-4",
              children: [{
                icon: /* @__PURE__ */_jsxDEV(LightningBoltIcon, {
                  className: "w-6 h-6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 420,
                  columnNumber: 27
                }, this),
                text: "מקצועי"
              }, {
                icon: /* @__PURE__ */_jsxDEV(ClockIcon, {
                  className: "w-6 h-6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 421,
                  columnNumber: 27
                }, this),
                text: "מהיר"
              }, {
                icon: /* @__PURE__ */_jsxDEV(ShieldIcon, {
                  className: "w-6 h-6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 422,
                  columnNumber: 27
                }, this),
                text: "אמין"
              }, {
                icon: /* @__PURE__ */_jsxDEV(StarIcon, {
                  className: "w-6 h-6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 423,
                  columnNumber: 27
                }, this),
                text: "מוביל"
              }].map((item, index) => /* @__PURE__ */_jsxDEV("div", {
                className: "flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-lg border border-[#FFD700]/20",
                children: [/* @__PURE__ */_jsxDEV("span", {
                  className: "text-[#FFD700]",
                  children: item.icon
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 426,
                  columnNumber: 21
                }, this), /* @__PURE__ */_jsxDEV("span", {
                  className: "text-[#F5F5F5] font-bold",
                  children: item.text
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 427,
                  columnNumber: 21
                }, this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 425,
                columnNumber: 19
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 407,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("div", {
            className: "space-y-4",
            children: ["מחירים הוגנים ללא הפתעות", "כיסוי ביטוחי מלא לכל עבודה", "רישיון ממשלתי והסמכות מקצועיות", "אחריות על כל עבודה ותיקון"].map((item, index) => /* @__PURE__ */_jsxDEV("div", {
              className: "flex items-center gap-3",
              children: [/* @__PURE__ */_jsxDEV(CheckmarkCircleIcon, {
                className: "w-6 h-6 flex-shrink-0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 442,
                columnNumber: 19
              }, this), /* @__PURE__ */_jsxDEV("span", {
                className: "text-[#F5F5F5] font-bold text-lg",
                children: item
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 443,
                columnNumber: 19
              }, this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 441,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("div", {
          className: "flex flex-wrap justify-center gap-4 mt-12",
          children: ["תל אביב", "רמת גן", "הרצליה", "פתח תקווה", "ראשון לציון"].map((city, index) => /* @__PURE__ */_jsxDEV("div", {
            className: "flex items-center gap-2 bg-[#FFD700] text-[#1A1A1A] px-4 py-2 rounded-full font-bold",
            children: [/* @__PURE__ */_jsxDEV(MapPinIcon, {
              className: "w-4 h-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 453,
              columnNumber: 17
            }, this), city]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 452,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 450,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("section", {
      className: "bg-[#1A1A1A] py-16 circuit-pattern",
      children: /* @__PURE__ */_jsxDEV("div", {
        className: "container",
        children: [/* @__PURE__ */_jsxDEV("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */_jsxDEV("h2", {
            className: "text-5xl md:text-6xl font-black text-[#F5F5F5] mb-4",
            children: "איך זה עובד?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 466,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("div", {
            className: "w-48 h-1 bg-[#FFD700] mx-auto rounded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 467,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative",
          children: [/* @__PURE__ */_jsxDEV("div", {
            className: "hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFD700] via-[#00BFFF] to-[#FFD700]"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 473,
            columnNumber: 13
          }, this), [{
            step: "1",
            icon: /* @__PURE__ */_jsxDEV(PhoneIcon, {
              className: "w-10 h-10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 476,
              columnNumber: 34
            }, this),
            title: "יצירת קשר",
            desc: "התקשרו אלינו או שלחו הודעה",
            tag: "מיידי"
          }, {
            step: "2",
            icon: /* @__PURE__ */_jsxDEV(VoltMeterIcon, {
              className: "w-10 h-10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 477,
              columnNumber: 34
            }, this),
            title: "אבחון הבעיה",
            desc: "נאבחן את התקלה במדויק",
            tag: "מדויק"
          }, {
            step: "3",
            icon: /* @__PURE__ */_jsxDEV(TagIcon, {
              className: "w-10 h-10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 34
            }, this),
            title: "הצעת מחיר",
            desc: "תקבלו הצעת מחיר שקופה",
            tag: "שקוף"
          }, {
            step: "4",
            icon: /* @__PURE__ */_jsxDEV(LightningBoltIcon, {
              className: "w-10 h-10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 479,
              columnNumber: 34
            }, this),
            title: "תיקון וסיום",
            desc: "נתקן ונבטיח איכות",
            tag: "עם אחריות"
          }].map((item, index) => /* @__PURE__ */_jsxDEV("div", {
            className: "flex flex-col items-center text-center relative z-10",
            children: [/* @__PURE__ */_jsxDEV("div", {
              className: "w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center mb-4 shadow-lg shadow-[#FFD700]/30",
              children: /* @__PURE__ */_jsxDEV("span", {
                className: "text-3xl font-black text-[#1A1A1A]",
                children: item.step
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 483,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 482,
              columnNumber: 17
            }, this), /* @__PURE__ */_jsxDEV("div", {
              className: "w-16 h-16 rounded-full bg-[#2D2D2D] border-4 border-[#FFD700] flex items-center justify-center mb-4 -mt-8",
              children: /* @__PURE__ */_jsxDEV("span", {
                className: "text-[#FFD700]",
                children: item.icon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 486,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 485,
              columnNumber: 17
            }, this), /* @__PURE__ */_jsxDEV("h3", {
              className: "text-2xl font-black text-[#F5F5F5] mb-2",
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 488,
              columnNumber: 17
            }, this), /* @__PURE__ */_jsxDEV("p", {
              className: "text-[#F5F5F5]/70 font-bold mb-3",
              children: item.desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 489,
              columnNumber: 17
            }, this), /* @__PURE__ */_jsxDEV("span", {
              className: "bg-[#FFD700] text-[#1A1A1A] px-3 py-1 rounded-full text-sm font-bold",
              children: item.tag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 490,
              columnNumber: 17
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 481,
            columnNumber: 15
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 463,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("section", {
      className: "bg-[#2D2D2D] py-16",
      children: /* @__PURE__ */_jsxDEV("div", {
        className: "container",
        children: [/* @__PURE__ */_jsxDEV("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */_jsxDEV("h2", {
            className: "text-5xl md:text-6xl font-black text-[#F5F5F5] mb-4",
            children: "הפרויקטים שלנו"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 502,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("div", {
            className: "w-48 h-1 bg-[#FFD700] mx-auto rounded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 503,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: [{
            img: "https://assets.ls-assets.com/provider/istock/2267268610.jpg?w=768",
            category: "דירה פרטית",
            name: "התקנת לוח חשמל"
          }, {
            img: "https://assets.ls-assets.com/provider/istock/2259318138.jpg?w=768",
            category: "שיפוץ מלא",
            name: "חיווט חשמל מלא"
          }, {
            img: "https://assets.ls-assets.com/provider/istock/2196158127.jpg?w=768",
            category: "עסק מסחרי",
            name: "התקנת תאורה"
          }, {
            img: "https://assets.ls-assets.com/provider/istock/2256303189.jpg?w=768",
            category: "דירה פרטית",
            name: "תיקון תקלה"
          }, {
            img: "https://assets.ls-assets.com/provider/istock/2199111472.jpg?w=768",
            category: "מערכת סולארית",
            name: "התקנת פאנלים"
          }, {
            img: "https://assets.ls-assets.com/provider/istock/2213571973.jpg?w=768",
            category: "שיפוץ מלא",
            name: "החלפת כבלים"
          }, {
            img: "https://assets.ls-assets.com/provider/istock/2249306331.jpg?w=768",
            category: "עסק מסחרי",
            name: "בדיקת בטיחות"
          }, {
            img: "https://assets.ls-assets.com/provider/istock/2233277944.jpg?w=768",
            category: "דירה פרטית",
            name: "התקנת שקעים"
          }, {
            img: "https://assets.ls-assets.com/provider/istock/2175868193.jpg?w=768",
            category: "לוח חשמל",
            name: "שדרוג לוח"
          }].map((project, index) => /* @__PURE__ */_jsxDEV("div", {
            className: "relative overflow-hidden rounded-xl bg-[#1A1A1A] group cursor-pointer",
            children: [/* @__PURE__ */_jsxDEV("img", {
              src: project.img,
              alt: project.name,
              className: "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 523,
              columnNumber: 17
            }, this), /* @__PURE__ */_jsxDEV("div", {
              className: "absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 528,
              columnNumber: 17
            }, this), /* @__PURE__ */_jsxDEV("div", {
              className: "absolute bottom-0 left-0 right-0 p-4",
              children: [/* @__PURE__ */_jsxDEV("span", {
                className: "inline-block bg-[#FFD700] text-[#1A1A1A] text-xs font-bold px-2 py-1 rounded mb-2",
                children: project.category
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 530,
                columnNumber: 19
              }, this), /* @__PURE__ */_jsxDEV("h3", {
                className: "text-xl font-black text-white",
                children: project.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 531,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 529,
              columnNumber: 17
            }, this), /* @__PURE__ */_jsxDEV("div", {
              className: "absolute top-4 left-4 opacity-30 group-hover:opacity-100 transition-opacity",
              children: /* @__PURE__ */_jsxDEV(LightningBoltIcon, {
                className: "w-12 h-12"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 534,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 533,
              columnNumber: 17
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 519,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("div", {
          className: "text-center mt-8",
          children: /* @__PURE__ */_jsxDEV(Link, {
            to: "/פרויקטים",
            className: "inline-flex items-center gap-2 bg-[#FFD700] text-[#1A1A1A] px-8 py-4 rounded-lg text-xl font-bold hover:bg-[#00BFFF] hover:text-white transition-all",
            children: ["צפה בכל הפרויקטים", /* @__PURE__ */_jsxDEV(ArrowIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 546,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 541,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 540,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("section", {
      className: "bg-gradient-to-r from-[#FFD700] to-[#1A1A1A] py-16 relative overflow-hidden",
      children: [/* @__PURE__ */_jsxDEV("div", {
        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10",
        children: /* @__PURE__ */_jsxDEV(LightningBoltIcon, {
          className: "w-96 h-96"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV("div", {
        className: "container relative z-10",
        children: [/* @__PURE__ */_jsxDEV("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */_jsxDEV("h2", {
            className: "text-5xl md:text-6xl font-black text-[#1A1A1A] mb-4",
            children: "שירות חירום חשמלי 24/7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 562,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("div", {
            className: "w-48 h-1 bg-[#1A1A1A] mx-auto rounded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 563,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",
          children: [{
            icon: /* @__PURE__ */_jsxDEV(ClockIcon, {
              className: "w-10 h-10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 569,
              columnNumber: 23
            }, this),
            text: "מענה תוך 30 דקות"
          }, {
            icon: /* @__PURE__ */_jsxDEV(LightningBoltIcon, {
              className: "w-10 h-10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 570,
              columnNumber: 23
            }, this),
            text: "חשמלאי מוסמך בשטח"
          }, {
            icon: /* @__PURE__ */_jsxDEV(ShieldIcon, {
              className: "w-10 h-10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 571,
              columnNumber: 23
            }, this),
            text: "תיקון מובטח עם אחריות"
          }].map((item, index) => /* @__PURE__ */_jsxDEV("div", {
            className: "bg-[#1A1A1A] rounded-xl p-6 text-center border border-[#FFD700]/30",
            children: [/* @__PURE__ */_jsxDEV("div", {
              className: "flex justify-center mb-4 text-[#FFD700]",
              children: item.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 574,
              columnNumber: 17
            }, this), /* @__PURE__ */_jsxDEV("h3", {
              className: "text-2xl font-black text-white",
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 575,
              columnNumber: 17
            }, this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 573,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 567,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("div", {
          className: "text-center",
          children: [/* @__PURE__ */_jsxDEV("p", {
            className: "text-3xl font-black text-[#1A1A1A] mb-6",
            children: "יש לך תקלת חשמל?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 582,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV(Link, {
            to: "/חירום",
            className: "inline-flex items-center gap-3 bg-[#1A1A1A] text-[#FFD700] px-10 py-5 rounded-xl text-2xl font-black pulse-animation hover:bg-[#2D2D2D] transition-all",
            children: [/* @__PURE__ */_jsxDEV(PhoneIcon, {
              className: "w-8 h-8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 587,
              columnNumber: 15
            }, this), "התקשר עכשיו — זמינים 24/7"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 583,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("div", {
          className: "mt-12 bg-[#1A1A1A] rounded-lg py-4 overflow-hidden",
          children: /* @__PURE__ */_jsxDEV("div", {
            className: "flex animate-marquee",
            children: ["נפל חשמל", "קצר חשמלי", "תקלה בלוח", "אין חשמל", "סכנת התחשמלות", "כל תקלה", "אנחנו כאן", "נפל חשמל", "קצר חשמלי", "תקלה בלוח", "אין חשמל", "סכנת התחשמלות", "כל תקלה", "אנחנו כאן"].map((item, index) => /* @__PURE__ */_jsxDEV("div", {
              className: "flex items-center gap-4 px-8",
              children: [/* @__PURE__ */_jsxDEV(LightningBoltIcon, {
                className: "w-4 h-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 597,
                columnNumber: 19
              }, this), /* @__PURE__ */_jsxDEV("span", {
                className: "text-white font-bold whitespace-nowrap",
                children: item
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 598,
                columnNumber: 19
              }, this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 596,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 594,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 593,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 559,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("section", {
      className: "bg-[#1A1A1A] py-16",
      children: /* @__PURE__ */_jsxDEV("div", {
        className: "container",
        children: [/* @__PURE__ */_jsxDEV("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */_jsxDEV("h2", {
            className: "text-5xl md:text-6xl font-black text-[#F5F5F5] mb-4",
            children: "שאלות נפוצות"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 611,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("div", {
            className: "w-48 h-1 bg-[#FFD700] mx-auto rounded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 612,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 610,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("div", {
          className: "max-w-3xl mx-auto space-y-4",
          children: [{
            q: "כמה עולה תיקון תקלת חשמל?",
            a: "המחיר תלוי בסוג התקלה ומורכבותה. אנחנו מספקים הצעת מחיר שקופה לפני כל עבודה, ללא הפתעות. התקשרו לקבלת הערכת מחיר מדויקת."
          }, {
            q: "האם אתם זמינים בשבת ובלילה?",
            a: "כן! אנחנו זמינים 24/7 כולל שבתות, חגים וחגים. תקלות חשמל לא מחכות ואנחנו פה בכל שעה."
          }, {
            q: "כמה זמן לוקח להגיע לתקלת חירום?",
            a: "אנחנו מתחייבים להגיע תוך 30 דקות מרגע הקריאה. זמינות מהירה היא אחד היתרונות המרכזיים שלנו."
          }, {
            q: "האם אתם מתקינים לוחות חשמל חדשים?",
            a: "בוודאי! אנחנו מתקינים ומשדרגים לוחות חשמל בהתאם לתקנים המעודכנים, עם אחריות מלאה על העבודה."
          }, {
            q: "מה כולל שירות חירום חשמלי?",
            a: "שירות חירום כולל: הגעה מהירה, אבחון התקלה, תיקון מקצועי, ואחריות על העבודה. הכל במחיר הוגן ושקוף."
          }, {
            q: "האם יש אחריות על העבודה?",
            a: "כן! כל עבודה מגיעה עם אחריות מלאה. אנחנו עומדים מאחורי האיכות שלנו ומבטיחים שביעות רצון מלאה."
          }, {
            q: "האם אתם מתקינים מערכות סולאריות?",
            a: "כן! אנחנו מתמחים בתכנון והתקנת מערכות סולאריות לבתים פרטיים ועסקים. פנו אלינו לקבלת הצעת מחיר מותאמת."
          }, {
            q: "איך מזמינים חשמלאי?",
            a: "פשוט התקשרו אלינו, שלחו הודעת וואטסאפ, או מלאו את הטופס בעמוד צור קשר. אנחנו נחזור אליכם תוך דקות!"
          }].map((faq, index) => /* @__PURE__ */_jsxDEV(FAQItem, {
            question: faq.q,
            answer: faq.a
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 627,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("section", {
      className: "bg-[#2D2D2D] py-16",
      children: /* @__PURE__ */_jsxDEV("div", {
        className: "container",
        children: [/* @__PURE__ */_jsxDEV("div", {
          className: "text-center mb-12",
          children: [/* @__PURE__ */_jsxDEV("h2", {
            className: "text-5xl md:text-6xl font-black text-[#F5F5F5] mb-4",
            children: "צור קשר עכשיו"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 638,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("div", {
            className: "w-48 h-1 bg-[#FFD700] mx-auto rounded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 639,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 637,
          columnNumber: 11
        }, this), /* @__PURE__ */_jsxDEV("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: [/* @__PURE__ */_jsxDEV("div", {
            className: "bg-[#1A1A1A] rounded-xl p-8 border border-[#FFD700]/20",
            children: [/* @__PURE__ */_jsxDEV("h3", {
              className: "text-3xl font-black text-[#FFD700] mb-6",
              children: "פרטי יצירת קשר"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 645,
              columnNumber: 15
            }, this), /* @__PURE__ */_jsxDEV("div", {
              className: "space-y-4",
              children: [/* @__PURE__ */_jsxDEV("div", {
                className: "flex items-center gap-4",
                children: [/* @__PURE__ */_jsxDEV(PhoneIcon, {
                  className: "w-8 h-8 text-[#FFD700]"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 649,
                  columnNumber: 19
                }, this), /* @__PURE__ */_jsxDEV("div", {
                  children: [/* @__PURE__ */_jsxDEV("span", {
                    className: "text-[#F5F5F5]/60 font-bold",
                    children: "טלפון:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 651,
                    columnNumber: 21
                  }, this), /* @__PURE__ */_jsxDEV("a", {
                    href: "tel:0500000000",
                    className: "text-[#F5F5F5] font-bold text-xl mr-2 hover:text-[#FFD700]",
                    children: "050-000-0000"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 652,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 650,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 648,
                columnNumber: 17
              }, this), /* @__PURE__ */_jsxDEV("div", {
                className: "flex items-center gap-4",
                children: [/* @__PURE__ */_jsxDEV(EnvelopeIcon, {
                  className: "w-8 h-8 text-[#FFD700]"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 657,
                  columnNumber: 19
                }, this), /* @__PURE__ */_jsxDEV("div", {
                  children: [/* @__PURE__ */_jsxDEV("span", {
                    className: "text-[#F5F5F5]/60 font-bold",
                    children: "אימייל:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 659,
                    columnNumber: 21
                  }, this), /* @__PURE__ */_jsxDEV("a", {
                    href: "mailto:info@hashmalay.co.il",
                    className: "text-[#F5F5F5] font-bold mr-2 hover:text-[#FFD700]",
                    children: "info@hashmalay.co.il"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 660,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 658,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 656,
                columnNumber: 17
              }, this), /* @__PURE__ */_jsxDEV("div", {
                className: "flex items-center gap-4",
                children: [/* @__PURE__ */_jsxDEV(WhatsAppIcon, {
                  className: "w-8 h-8 text-[#FFD700]"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 665,
                  columnNumber: 19
                }, this), /* @__PURE__ */_jsxDEV("span", {
                  className: "text-[#F5F5F5] font-bold",
                  children: "שלח הודעה ישירה בוואטסאפ"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 666,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 664,
                columnNumber: 17
              }, this), /* @__PURE__ */_jsxDEV("div", {
                className: "flex items-center gap-4",
                children: [/* @__PURE__ */_jsxDEV(ClockIcon, {
                  className: "w-8 h-8 text-[#FFD700]"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 670,
                  columnNumber: 19
                }, this), /* @__PURE__ */_jsxDEV("span", {
                  className: "text-[#F5F5F5] font-bold",
                  children: "24/7 כולל שבתות וחגים"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 671,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 669,
                columnNumber: 17
              }, this), /* @__PURE__ */_jsxDEV("div", {
                className: "flex items-center gap-4",
                children: [/* @__PURE__ */_jsxDEV(MapPinIcon, {
                  className: "w-8 h-8 text-[#FFD700]"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 675,
                  columnNumber: 19
                }, this), /* @__PURE__ */_jsxDEV("span", {
                  className: "text-[#F5F5F5] font-bold",
                  children: "תל אביב והמרכז"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 676,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 674,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 647,
              columnNumber: 15
            }, this), /* @__PURE__ */_jsxDEV("div", {
              className: "flex flex-wrap gap-3 mt-8",
              children: ["מענה תוך 30 דקות", "ללא התחייבות", "ייעוץ חינם"].map((badge, index) => /* @__PURE__ */_jsxDEV("span", {
                className: "bg-[#FFD700] text-[#1A1A1A] px-4 py-2 rounded-full font-bold text-sm",
                children: badge
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 683,
                columnNumber: 19
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 681,
              columnNumber: 15
            }, this), /* @__PURE__ */_jsxDEV("div", {
              className: "mt-8 space-y-4",
              children: [/* @__PURE__ */_jsxDEV(Link, {
                to: "tel:0500000000",
                className: "flex items-center justify-center gap-3 bg-[#FFD700] text-[#1A1A1A] px-6 py-4 rounded-lg font-bold text-xl hover:bg-[#00BFFF] transition-all",
                children: [/* @__PURE__ */_jsxDEV(PhoneIcon, {
                  className: "w-6 h-6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 690,
                  columnNumber: 19
                }, this), "התקשר עכשיו"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 689,
                columnNumber: 17
              }, this), /* @__PURE__ */_jsxDEV(Link, {
                to: "https://wa.me/972500000000",
                className: "flex items-center justify-center gap-3 bg-[#1A1A1A] text-[#FFD700] border-2 border-[#FFD700] px-6 py-4 rounded-lg font-bold text-xl hover:bg-[#FFD700] hover:text-[#1A1A1A] transition-all",
                children: [/* @__PURE__ */_jsxDEV(WhatsAppIcon, {
                  className: "w-6 h-6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 694,
                  columnNumber: 19
                }, this), "שלח וואטסאפ"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 693,
                columnNumber: 17
              }, this), /* @__PURE__ */_jsxDEV(Link, {
                to: "mailto:info@hashmalay.co.il",
                className: "flex items-center justify-center gap-3 border-2 border-[#F5F5F5] text-[#F5F5F5] px-6 py-4 rounded-lg font-bold text-xl hover:bg-[#F5F5F5] hover:text-[#1A1A1A] transition-all",
                children: [/* @__PURE__ */_jsxDEV(EnvelopeIcon, {
                  className: "w-6 h-6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 698,
                  columnNumber: 19
                }, this), "שלח אימייל"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 697,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 688,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 644,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("div", {
            children: [/* @__PURE__ */_jsxDEV("div", {
              className: "mb-4 flex items-center gap-2",
              children: [/* @__PURE__ */_jsxDEV(MapPinIcon, {
                className: "w-6 h-6 text-[#FFD700]"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 707,
                columnNumber: 17
              }, this), /* @__PURE__ */_jsxDEV("h3", {
                className: "text-2xl font-black text-[#FFD700]",
                children: "המיקום שלנו"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 708,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 706,
              columnNumber: 15
            }, this), /* @__PURE__ */_jsxDEV("iframe", {
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54078.85284906636!2d34.77553!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca7593e8555%3A0x7d8f2d8f8f8f8f8f!2sTel%20Aviv-Yafo%2C%20Israel!5e0!3m2!1sen!2sil!4v1234567890",
              width: "100%",
              height: "400",
              style: {
                border: 0,
                borderRadius: "12px"
              },
              allowFullScreen: true,
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
              title: "מיקום חשמלאי"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 710,
              columnNumber: 15
            }, this), /* @__PURE__ */_jsxDEV("div", {
              className: "flex flex-col sm:flex-row gap-4 mt-4",
              children: [/* @__PURE__ */_jsxDEV("a", {
                href: "https://www.google.com/maps/dir/?api=1&destination=Tel+Aviv-Yafo,+Israel",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex-1 flex items-center justify-center gap-2 bg-[#FFD700] text-[#1A1A1A] px-4 py-3 rounded-lg font-bold hover:bg-[#00BFFF] hover:text-white transition-all",
                children: [/* @__PURE__ */_jsxDEV(NavigationIcon, {
                  className: "w-5 h-5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 728,
                  columnNumber: 19
                }, this), "נווט אלינו ב-Google Maps"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 722,
                columnNumber: 17
              }, this), /* @__PURE__ */_jsxDEV("a", {
                href: "https://www.google.com/maps/search/?api=1&query=Tel+Aviv-Yafo,+Israel",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex-1 flex items-center justify-center gap-2 bg-[#1A1A1A] text-[#FFD700] border-2 border-[#FFD700] px-4 py-3 rounded-lg font-bold hover:bg-[#FFD700] hover:text-[#1A1A1A] transition-all",
                children: [/* @__PURE__ */_jsxDEV(MapPinIcon, {
                  className: "w-5 h-5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 737,
                  columnNumber: 19
                }, this), "הצג במפה המלאה"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 731,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 721,
              columnNumber: 15
            }, this), /* @__PURE__ */_jsxDEV("p", {
              className: "text-[#F5F5F5] font-bold text-center mt-4",
              children: "אזור שירות: תל אביב, רמת גן, הרצליה, פתח תקווה וכל המרכז"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 742,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 705,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 642,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 635,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV(FloatingButtons, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 749,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 5
  }, this);
}, "onCFlCE3u4/3vRLCCAA7vlce27k=", false, function () {
  return [useAnimatedCounter, useAnimatedCounter, useAnimatedCounter];
})), "onCFlCE3u4/3vRLCCAA7vlce27k=", false, function () {
  return [useAnimatedCounter, useAnimatedCounter, useAnimatedCounter];
});
// FAQ Item Component
function FAQItem({
  question,
  answer
}) {
  _s3();
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */_jsxDEV("div", {
    className: "bg-[#2D2D2D] rounded-xl overflow-hidden border border-[#FFD700]/20",
    children: [/* @__PURE__ */_jsxDEV("button", {
      onClick: () => setIsOpen(!isOpen),
      className: "w-full flex items-center justify-between p-4 text-right",
      children: [/* @__PURE__ */_jsxDEV("span", {
        className: "text-[#F5F5F5] font-bold text-lg",
        children: question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 765,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV("svg", {
        className: `w-6 h-6 text-[#FFD700] transition-transform ${isOpen ? "rotate-180" : ""}`,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */_jsxDEV("path", {
          d: "M12 5V19M5 12H19",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 772,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 766,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("div", {
      className: `faq-content ${isOpen ? "open" : ""}`,
      children: /* @__PURE__ */_jsxDEV("p", {
        className: "text-[#F5F5F5]/70 font-bold p-4 pt-0",
        children: answer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 776,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 760,
    columnNumber: 5
  }, this);
}
// Floating Buttons Component
_s3(FAQItem, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c20 = FAQItem;
function FloatingButtons() {
  return /* @__PURE__ */_jsxDEV(_Fragment, {
    children: [/* @__PURE__ */_jsxDEV("a", {
      href: "https://wa.me/972500000000",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-105 transition-transform",
      children: [/* @__PURE__ */_jsxDEV(WhatsAppIcon, {
        className: "w-6 h-6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 793,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV("span", {
        className: "font-bold hidden sm:inline",
        children: "שלח הודעה"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 794,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 787,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("a", {
      href: "tel:0500000000",
      className: "fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#FFD700] text-[#1A1A1A] px-5 py-3 rounded-full shadow-lg shadow-[#FFD700]/30 hover:scale-105 transition-transform pulse-animation",
      children: [/* @__PURE__ */_jsxDEV(PhoneIcon, {
        className: "w-6 h-6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 802,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV("span", {
        className: "font-bold hidden sm:inline",
        children: "התקשר עכשיו"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 803,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c21 = FloatingButtons;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c0, _c1, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21;
$RefreshReg$(_c, "LightningBoltIcon");
$RefreshReg$(_c2, "PlugIcon");
$RefreshReg$(_c3, "StarIcon");
$RefreshReg$(_c4, "ShieldIcon");
$RefreshReg$(_c5, "TagIcon");
$RefreshReg$(_c6, "ClockIcon");
$RefreshReg$(_c7, "CheckmarkCircleIcon");
$RefreshReg$(_c8, "CircuitBreakerIcon");
$RefreshReg$(_c9, "LightBulbIcon");
$RefreshReg$(_c0, "SolarPanelIcon");
$RefreshReg$(_c1, "VoltMeterIcon");
$RefreshReg$(_c10, "CoilIcon");
$RefreshReg$(_c11, "WarningTriangleIcon");
$RefreshReg$(_c12, "MapPinIcon");
$RefreshReg$(_c13, "EnvelopeIcon");
$RefreshReg$(_c14, "WhatsAppIcon");
$RefreshReg$(_c15, "NavigationIcon");
$RefreshReg$(_c16, "PhoneIcon");
$RefreshReg$(_c17, "ArrowIcon");
$RefreshReg$(_c18, "%default%$_UNSAFE_withComponentProps");
$RefreshReg$(_c19, "%default%");
$RefreshReg$(_c20, "FAQItem");
$RefreshReg$(_c21, "FloatingButtons");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/user/website/app/routes/_index.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      "routes/_index" && window.__reactRouterRouteModuleUpdates.set("routes/_index", nextExports);
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports, ["clientAction","clientLoader","clientMiddleware","handle","meta","links","shouldRevalidate"]);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
//# sourceMappingURL=data:application/json;base64,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QUEsRUFBSztNQUNMTyxNQUFBLEVBQU87TUFDUEMsR0FBQSxFQUFJO01BQ0oxRyxTQUFBLEVBQVU7Z0JBSlosQ0FNRSxlQUFBQyxPQUFBLENBQUNnQyxZQUFBLEVBQUQ7UUFBY2pDLFNBQUEsRUFBVTtNQUFBLENBQVk7Ozs7Z0JBQ3BDLGVBQUFDLE9BQUEsQ0FBQyxRQUFEO1FBQU1ELFNBQUEsRUFBVTtrQkFBNkI7T0FBZ0I7Ozs7Ozs7OztjQUkvRCxlQUFBQyxPQUFBLENBQUMsS0FBRDtNQUNFaUcsSUFBQSxFQUFLO01BQ0xsRyxTQUFBLEVBQVU7Z0JBRlosQ0FJRSxlQUFBQyxPQUFBLENBQUNrQyxTQUFBLEVBQUQ7UUFBV25DLFNBQUEsRUFBVTtNQUFBLENBQVk7Ozs7Z0JBQ2pDLGVBQUFDLE9BQUEsQ0FBQyxRQUFEO1FBQU1ELFNBQUEsRUFBVTtrQkFBNkI7T0FBa0I7Ozs7Ozs7Ozs7RUFFaEU7O09BdEJFMkc7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJMaWdodG5pbmdCb2x0SWNvbiIsImNsYXNzTmFtZSIsIl9qc3hERVYiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwiZCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWpvaW4iLCJQbHVnSWNvbiIsInN0cm9rZUxpbmVjYXAiLCJTdGFySWNvbiIsIlNoaWVsZEljb24iLCJUYWdJY29uIiwiY3giLCJjeSIsInIiLCJDbG9ja0ljb24iLCJDaGVja21hcmtDaXJjbGVJY29uIiwiQ2lyY3VpdEJyZWFrZXJJY29uIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInJ4IiwiTGlnaHRCdWxiSWNvbiIsIlNvbGFyUGFuZWxJY29uIiwiVm9sdE1ldGVySWNvbiIsIkNvaWxJY29uIiwicnkiLCJXYXJuaW5nVHJpYW5nbGVJY29uIiwiTWFwUGluSWNvbiIsIkVudmVsb3BlSWNvbiIsIldoYXRzQXBwSWNvbiIsIk5hdmlnYXRpb25JY29uIiwiUGhvbmVJY29uIiwiQXJyb3dJY29uIiwidXNlQW5pbWF0ZWRDb3VudGVyIiwiZW5kIiwiZHVyYXRpb24iLCJfcyIsImNvdW50Iiwic2V0Q291bnQiLCJzdGFydFRpbWUiLCJhbmltYXRlIiwiY3VycmVudFRpbWUiLCJwcm9ncmVzcyIsIk1hdGgiLCJtaW4iLCJmbG9vciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1ldGEiLCJ0aXRsZSIsIm5hbWUiLCJjb250ZW50IiwiX2MxOSIsIl9zMiIsIl9VTlNBRkVfd2l0aENvbXBvbmVudFByb3BzIiwiX2MxOCIsIkhvbWUiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJ5ZWFyc0V4cCIsInByb2plY3RzRG9uZSIsInNhdGlzZmFjdGlvbiIsInN0YXRzIiwiaWNvbiIsInZhbHVlIiwibGFiZWwiLCJmbG9hdGluZ1RhZ3MiLCJzdHlsZSIsImFuaW1hdGlvbkRlbGF5IiwibWFwIiwidGFnIiwiaW5kZXgiLCJ0byIsInN0YXQiLCJwcmVzZXJ2ZUFzcGVjdFJhdGlvIiwib3BhY2l0eSIsInRleHQiLCJpdGVtIiwiZGVzYyIsInRhZ0NvbG9yIiwic2VydmljZSIsImNpdHkiLCJzdGVwIiwiaW1nIiwiY2F0ZWdvcnkiLCJwcm9qZWN0Iiwic3JjIiwiYWx0IiwicSIsImEiLCJmYXEiLCJGQVFJdGVtIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJjaGlsZHJlbiIsImhyZWYiLCJiYWRnZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImFsbG93RnVsbFNjcmVlbiIsImxvYWRpbmciLCJyZWZlcnJlclBvbGljeSIsInRhcmdldCIsInJlbCIsIkZsb2F0aW5nQnV0dG9ucyIsIl9zMyIsImlzT3BlbiIsInNldElzT3BlbiIsIm9uQ2xpY2siLCJfRnJhZ21lbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiX2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHR5cGUgeyBSb3V0ZSB9IGZyb20gXCIuLyt0eXBlcy9faW5kZXhcIjtcblxuLy8gU1ZHIEljb25zXG5jb25zdCBMaWdodG5pbmdCb2x0SWNvbiA9ICh7IGNsYXNzTmFtZSA9IFwidy02IGgtNlwiIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD1cIjAgMCAzMiAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTggMkw2IDE4SDE2TDE0IDMwTDI2IDE0SDE2TDE4IDJaXCIgZmlsbD1cIiNGRkQ3MDBcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiLz5cbiAgPC9zdmc+XG4pO1xuXG5jb25zdCBQbHVnSWNvbiA9ICh7IGNsYXNzTmFtZSA9IFwidy02IGgtNlwiIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTIgMlY3TTEyIDdDMTAuMzQzMSA3IDkgOC4zNDMxNSA5IDEwVjE1SDE1VjEwQzE1IDguMzQzMTUgMTMuNjU2OSA3IDEyIDdaXCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiLz5cbiAgICA8cGF0aCBkPVwiTTkgMTVWMTlDOSAyMC4xMDQ2IDkuODk1NDMgMjEgMTEgMjFIMTNDMTQuMTA0NiAyMSAxNSAyMC4xMDQ2IDE1IDE5VjE1XCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiLz5cbiAgICA8cGF0aCBkPVwiTTcgMjFIMTdcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IFN0YXJJY29uID0gKHsgY2xhc3NOYW1lID0gXCJ3LTYgaC02XCIgfTogeyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIiNGRkQ3MDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0xMiAyTDE1LjA5IDguMjZMMjIgOS4yN0wxNyAxNC4xNEwxOC4xOCAyMS4wMkwxMiAxNy43N0w1LjgyIDIxLjAyTDcgMTQuMTRMMiA5LjI3TDguOTEgOC4yNkwxMiAyWlwiLz5cbiAgPC9zdmc+XG4pO1xuXG5jb25zdCBTaGllbGRJY29uID0gKHsgY2xhc3NOYW1lID0gXCJ3LTYgaC02XCIgfTogeyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0xMiAyTDQgNlYxMkM0IDE2LjQxODMgNy41ODE3MiAyMCAxMiAyMEMxNi40MTgzIDIwIDIwIDE2LjQxODMgMjAgMTJWNkwxMiAyWlwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuICAgIDxwYXRoIGQ9XCJNOSAxMkwxMSAxNEwxNSAxMFwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IFRhZ0ljb24gPSAoeyBjbGFzc05hbWUgPSBcInctNSBoLTVcIiB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiAoXG4gIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTIwLjU5IDEzLjQxTDEzLjQyIDIwLjU4QzEzLjIzNDMgMjAuNzY2IDEzLjAxMzcgMjAuOTEzNSAxMi43NzA5IDIxLjAxNDFDMTIuNTI4MSAyMS4xMTQ4IDEyLjI2NzggMjEuMTY2NiAxMi4wMDUgMjEuMTY2NkMxMS43NDIyIDIxLjE2NjYgMTEuNDgxOSAyMS4xMTQ4IDExLjIzOTEgMjEuMDE0MUMxMC45OTYzIDIwLjkxMzUgMTAuNzc1NyAyMC43NjYgMTAuNTkgMjAuNThMMiAxMlYySDEyTDIwLjU5IDEwLjU5QzIwLjk2MjUgMTAuOTY0NyAyMS4xNzE2IDExLjQ3MTYgMjEuMTcxNiAxMkMyMS4xNzE2IDEyLjUyODQgMjAuOTYyNSAxMy4wMzUzIDIwLjU5IDEzLjQxWlwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuICAgIDxjaXJjbGUgY3g9XCI3XCIgY3k9XCI3XCIgcj1cIjEuNVwiIGZpbGw9XCIjRkZENzAwXCIvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IENsb2NrSWNvbiA9ICh7IGNsYXNzTmFtZSA9IFwidy01IGgtNVwiIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIvPlxuICAgIDxwYXRoIGQ9XCJNMTIgNlYxMkwxNiAxNFwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIi8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgQ2hlY2ttYXJrQ2lyY2xlSWNvbiA9ICh7IGNsYXNzTmFtZSA9IFwidy01IGgtNVwiIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIvPlxuICAgIDxwYXRoIGQ9XCJNOCAxMkwxMSAxNUwxNiA5XCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIi8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgQ2lyY3VpdEJyZWFrZXJJY29uID0gKHsgY2xhc3NOYW1lID0gXCJ3LTggaC04XCIgfTogeyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHJlY3QgeD1cIjRcIiB5PVwiNlwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiMlwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIi8+XG4gICAgPHBhdGggZD1cIk0xMCAxMlYxNk0xMCAxMkgxNE0xMCAxNkgxNFwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIi8+XG4gICAgPHBhdGggZD1cIk0xNiAxMlYxNk0xNiAxMkgyME0xNiAxNkgyMFwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIi8+XG4gICAgPHBhdGggZD1cIk0xMCAyMFYyNE0xNiAyMFYyNE0yMiAyMFYyNFwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIi8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgTGlnaHRCdWxiSWNvbiA9ICh7IGNsYXNzTmFtZSA9IFwidy04IGgtOFwiIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNOSAyMUgxNU0xMiAzQzguNjg2MjkgMyA2IDUuNjg2MjkgNiA5QzYgMTEuMjIwOCA3LjIwNjggMTMuMTU5OSA5IDE0LjE5NzNWMTdIMTVWMTQuMTk3M0MxNi43OTMyIDEzLjE1OTkgMTggMTEuMjIwOCAxOCA5QzE4IDUuNjg2MjkgMTUuMzEzNyAzIDEyIDNaXCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIi8+XG4gICAgPHBhdGggZD1cIk05IDIxSDE1XCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiLz5cbiAgPC9zdmc+XG4pO1xuXG5jb25zdCBTb2xhclBhbmVsSWNvbiA9ICh7IGNsYXNzTmFtZSA9IFwidy04IGgtOFwiIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD1cIjAgMCAzMiAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxyZWN0IHg9XCI0XCIgeT1cIjhcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMTZcIiByeD1cIjJcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIvPlxuICAgIDxwYXRoIGQ9XCJNNCAxNEgyOE00IDIwSDI4TTEyIDhWMjRNMjAgOFYyNFwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjEuNVwiLz5cbiAgICA8cGF0aCBkPVwiTTE0IDI0TDE2IDI4TDE4IDI0XCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIi8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgVm9sdE1ldGVySWNvbiA9ICh7IGNsYXNzTmFtZSA9IFwidy04IGgtOFwiIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiOVwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIi8+XG4gICAgPHBhdGggZD1cIk0xMiA3VjEyTDE1IDE1XCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiLz5cbiAgICA8cGF0aCBkPVwiTTQgNEw2IDZcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIvPlxuICAgIDxwYXRoIGQ9XCJNMjAgNEwxOCA2XCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiLz5cbiAgPC9zdmc+XG4pO1xuXG5jb25zdCBDb2lsSWNvbiA9ICh7IGNsYXNzTmFtZSA9IFwidy04IGgtOFwiIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD1cIjAgMCAzMiAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxlbGxpcHNlIGN4PVwiMTZcIiBjeT1cIjE2XCIgcng9XCIxMFwiIHJ5PVwiNlwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIi8+XG4gICAgPGVsbGlwc2UgY3g9XCIxNlwiIGN5PVwiMTJcIiByeD1cIjEwXCIgcnk9XCI2XCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiLz5cbiAgICA8ZWxsaXBzZSBjeD1cIjE2XCIgY3k9XCI4XCIgcng9XCIxMFwiIHJ5PVwiNlwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIi8+XG4gICAgPHBhdGggZD1cIk02IDhWNE0yNiA4VjRcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IFdhcm5pbmdUcmlhbmdsZUljb24gPSAoeyBjbGFzc05hbWUgPSBcInctOCBoLThcIiB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiAoXG4gIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEyIDNMMjIgMjBIMkwxMiAzWlwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuICAgIDxwYXRoIGQ9XCJNMTIgMTBWMTRcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIvPlxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTdcIiByPVwiMVwiIGZpbGw9XCIjRkZENzAwXCIvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IE1hcFBpbkljb24gPSAoeyBjbGFzc05hbWUgPSBcInctNSBoLTVcIiB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiAoXG4gIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEyIDJDOC42ODYyOSAyIDYgNC42ODYyOSA2IDhDNiAxMi41IDEyIDIwIDEyIDIwQzEyIDIwIDE4IDEyLjUgMTggOEMxOCA0LjY4NjI5IDE1LjMxMzcgMiAxMiAyWlwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIi8+XG4gICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCI4XCIgcj1cIjJcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IEVudmVsb3BlSWNvbiA9ICh7IGNsYXNzTmFtZSA9IFwidy02IGgtNlwiIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxyZWN0IHg9XCIyXCIgeT1cIjRcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMTZcIiByeD1cIjJcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIvPlxuICAgIDxwYXRoIGQ9XCJNMiA2TDEyIDEzTDIyIDZcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IFdoYXRzQXBwSWNvbiA9ICh7IGNsYXNzTmFtZSA9IFwidy02IGgtNlwiIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMjEgMTEuNUMyMSAxNi4xOTQ0IDE3LjE5NDQgMjAgMTIuNSAyMEMxMS4wNzc5IDIwIDkuNzQzODEgMTkuNTk4OCA4LjU5NjA5IDE4LjkwNjlMMi41IDIwTDMuNjQzNTYgMTQuMjM3MUMyLjg1MzU3IDEyLjk4MTggMi41IDExLjU0OTcgMi41IDEwQzIuNSA1LjMwNTU4IDYuMzA1NTggMS41IDExIDEuNUMxNS42OTQ0IDEuNSAxOS41IDUuMzA1NTggMTkuNSAxMEMxOS41IDE0LjY5NDQgMTUuNjk0NCAxOC41IDExIDE4LjVcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIvPlxuICAgIDxwYXRoIGQ9XCJNOCA4TDEwLjUgMTAuNU0xNS41IDEwLjVMMTggOE0xNS41IDEzLjVMMTggMTZcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IE5hdmlnYXRpb25JY29uID0gKHsgY2xhc3NOYW1lID0gXCJ3LTUgaC01XCIgfTogeyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0xMiAyTDQgMTRIOUwxMCAyMkwyMCAxMEgxNUwxMiAyWlwiIGZpbGw9XCIjRkZENzAwXCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIi8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgUGhvbmVJY29uID0gKHsgY2xhc3NOYW1lID0gXCJ3LTUgaC01XCIgfTogeyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0yMiAxNi45MlYxOS45MkMyMiAyMC40OCAyMS41IDIwLjk4IDIwLjk0IDIwLjk5QzEwLjA1IDIxLjAyIDAuOTggMTEuOTUgMS4wMSAxLjA2QzEuMDEgMC41IDEuNTEgMCAyLjA3IDBINS4wN0M1LjU3IDAgNi4wMiAwLjM3IDYuMTIgMC44N0w3LjYyIDcuOTFDNy43MyA4LjQ3IDcuNDMgOS4wNCA2Ljk0IDkuMzNMNC4xNyAxMUM2LjA4IDE1LjI3IDkuNzMgMTguOTIgMTQgMjAuODNMMTYuNjcgMTguMDZDMTYuOTYgMTcuNTcgMTcuNTMgMTcuMjcgMTguMDkgMTcuMzhMMjUuMTMgMTguODhDMjUuNjMgMTguOTggMjYgMTkuNDMgMjYgMTkuOTNWMTYuOTJDMjYgMTYuNDIgMjUuNjIgMTUuOTcgMjUuMTMgMTUuODdMMjIgMTYuOTJaXCIgZmlsbD1cIiNGRkQ3MDBcIi8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgQXJyb3dJY29uID0gKHsgY2xhc3NOYW1lID0gXCJ3LTUgaC01XCIgfTogeyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk00IDEySDIwTTIwIDEyTDE0IDZNMjAgMTJMMTQgMThcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuICA8L3N2Zz5cbik7XG5cbi8vIEFuaW1hdGVkIGNvdW50ZXIgaG9va1xuZnVuY3Rpb24gdXNlQW5pbWF0ZWRDb3VudGVyKGVuZDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMjAwMCkge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHN0YXJ0VGltZTogbnVtYmVyO1xuICAgIGNvbnN0IGFuaW1hdGUgPSAoY3VycmVudFRpbWU6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKCFzdGFydFRpbWUpIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbigoY3VycmVudFRpbWUgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24sIDEpO1xuICAgICAgc2V0Q291bnQoTWF0aC5mbG9vcihwcm9ncmVzcyAqIGVuZCkpO1xuICAgICAgaWYgKHByb2dyZXNzIDwgMSkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH0sIFtlbmQsIGR1cmF0aW9uXSk7XG5cbiAgcmV0dXJuIGNvdW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSh7fTogUm91dGUuTWV0YUFyZ3MpIHtcbiAgcmV0dXJuIFtcbiAgICB7IHRpdGxlOiBcIteX16nXntec15DXmSAtINep15nXqNeV16og15fXqdee15wg157Xp9em15XXoteZINeV15DXnteZ158g15zXm9ecINeR15nXqiDXldei16HXp1wiIH0sXG4gICAgeyBuYW1lOiBcImRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IFwi16nXmdeo15XXqiDXl9ep157XnCDXnten16bXldei15kg15zXkdeZ16og15XXnNei16HXpyDigJQg15bXnteZ16DXmdedIDI0Lzcg15XXnteS15nXoteZ150g15DXnNeZ15og16rXldeaIDMwINeT16fXldeqLiDXqteZ16fXldefINeq16fXnNeV16osINeU16rXp9eg15XXqiwg15zXldeX15XXqiDXl9ep157XnCDXldee16LXqNeb15XXqiDXodeV15zXkNeo15nXldeqLlwiIH0sXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB5ZWFyc0V4cCA9IHVzZUFuaW1hdGVkQ291bnRlcigxNSk7XG4gIGNvbnN0IHByb2plY3RzRG9uZSA9IHVzZUFuaW1hdGVkQ291bnRlcig4MDApO1xuICBjb25zdCBzYXRpc2ZhY3Rpb24gPSB1c2VBbmltYXRlZENvdW50ZXIoMTAwKTtcblxuICBjb25zdCBzdGF0cyA9IFtcbiAgICB7IGljb246IDxMaWdodG5pbmdCb2x0SWNvbiBjbGFzc05hbWU9XCJ3LTEwIGgtMTBcIiAvPiwgdmFsdWU6IGAke3llYXJzRXhwfStgLCBsYWJlbDogXCLXqdeg15XXqiDXoNeZ16HXmdeV159cIiB9LFxuICAgIHsgaWNvbjogPFBsdWdJY29uIGNsYXNzTmFtZT1cInctMTAgaC0xMFwiIC8+LCB2YWx1ZTogYCR7cHJvamVjdHNEb25lfStgLCBsYWJlbDogXCLXoteR15XXk9eV16og15HXldem16LXlVwiIH0sXG4gICAgeyBpY29uOiA8U3Rhckljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz4sIHZhbHVlOiBgJHtzYXRpc2ZhY3Rpb259JWAsIGxhYmVsOiBcItep15HXmdei15XXqiDXqNem15XXn1wiIH0sXG4gICAgeyBpY29uOiA8U2hpZWxkSWNvbiBjbGFzc05hbWU9XCJ3LTEwIGgtMTBcIiAvPiwgdmFsdWU6IFwi16LXnCDXm9ecINei15HXldeT15RcIiwgbGFiZWw6IFwi15DXl9eo15nXldeqXCIgfSxcbiAgXTtcblxuICBjb25zdCBmbG9hdGluZ1RhZ3MgPSBbXCLXqteZ16fXldefINeq16fXnNeV16pcIiwgXCLXlNeq16fXoNeqINec15XXlyDXl9ep157XnFwiLCBcIteX16nXntecINeR15nXqteZXCIsIFwi15fXqdee15wg16LXoden15lcIiwgXCLXntei16jXm9eV16og16HXldec15DXqNeZ15XXqlwiXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLVsjMUExQTFBXVwiPlxuICAgICAgey8qIEhlcm8gU2VjdGlvbiAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gY2lyY3VpdC1wYXR0ZXJuXCI+XG4gICAgICAgIHsvKiBBbmltYXRlZCBsaWdodG5pbmcgYm9sdHMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMTAgcmlnaHQtMTAgdy0zMiBoLTMyIGxpZ2h0bmluZy1mbGFzaCBvcGFjaXR5LTMwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTUwIDBMMjAgNTBINDVMMzUgMTAwTDgwIDQwSDU1TDUwIDBaXCIgZmlsbD1cIiNGRkQ3MDBcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS80IGxlZnQtMjAgdy0yNCBoLTI0IGxpZ2h0bmluZy1mbGFzaCBvcGFjaXR5LTIwXCIgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IFwiMXNcIiB9fSB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTAgMEwyMCA1MEg0NUwzNSAxMDBMODAgNDBINTVMNTAgMFpcIiBmaWxsPVwiIzAwQkZGRlwiLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0xLzQgcmlnaHQtMS80IHctMjAgaC0yMCBsaWdodG5pbmctZmxhc2ggb3BhY2l0eS0yNVwiIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIjJzXCIgfX0gdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTUwIDBMMjAgNTBINDVMMzUgMTAwTDgwIDQwSDU1TDUwIDBaXCIgZmlsbD1cIiNGRkQ3MDBcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8zIHctMTYgaC0xNiBsaWdodG5pbmctZmxhc2ggb3BhY2l0eS0xNVwiIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIjAuNXNcIiB9fSB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTAgMEwyMCA1MEg0NUwzNSAxMDBMODAgNDBINTVMNTAgMFpcIiBmaWxsPVwiI0ZGRDcwMFwiLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEVsZWN0cmljIHNwYXJrcyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjAgcmlnaHQtMS80IHctMiBoLTIgYmctWyNGRkQ3MDBdIHJvdW5kZWQtZnVsbCBzcGFyay1mbGlja2VyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQwIGxlZnQtMS8zIHctMSBoLTEgYmctWyMwMEJGRkZdIHJvdW5kZWQtZnVsbCBzcGFyay1mbGlja2VyXCIgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IFwiMC41c1wiIH19PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00MCByaWdodC0xLzMgdy0yIGgtMiBiZy1bI0ZGRDcwMF0gcm91bmRlZC1mdWxsIHNwYXJrLWZsaWNrZXJcIiBzdHlsZT17eyBhbmltYXRpb25EZWxheTogXCIxc1wiIH19PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yMCBsZWZ0LTEvNCB3LTEgaC0xIGJnLVsjRkZENzAwXSByb3VuZGVkLWZ1bGwgc3BhcmstZmxpY2tlclwiIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBcIjEuNXNcIiB9fT48L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSB6LTEwIHB5LTIwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgey8qIEZsb2F0aW5nIHRhZ3MgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC0zIG1iLThcIj5cbiAgICAgICAgICAgICAge2Zsb2F0aW5nVGFncy5tYXAoKHRhZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1bI0ZGRDcwMF0gdGV4dC1bIzFBMUExQV0gcHgtNCBweS0yIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIGZvbnQtYm9sZCBmbG9hdC1hbmltYXRpb25gfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IGAke2luZGV4ICogMC4yfXNgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPExpZ2h0bmluZ0JvbHRJY29uIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBNYWluIGhlYWRsaW5lICovfVxuICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtNnhsIG1kOnRleHQtOHhsIGxnOnRleHQtOXhsIGZvbnQtYmxhY2sgdGV4dC1bI0Y1RjVGNV0gbWItNiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS0xMFwifWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgINeU157Xldee15fXmdedINec15fXqdee15wg16nXnNeaXG4gICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICB7LyogU3VidGl0bGUgKi99XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXhsIG1kOnRleHQtMnhsIHRleHQtWyNGNUY1RjVdLzkwIG1iLTEwIG1heC13LTN4bCBteC1hdXRvIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDAgZGVsYXktMjAwICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS0xMFwifWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgINep15nXqNeV16og15fXqdee15wg157Xp9em15XXoteZINec15HXmdeqINeV15zXoteh16cg4oCUINeW157Xmdeg15nXnSAyNC83INeV157XkteZ16LXmdedINeQ15zXmdeaINeq15XXmiAzMCDXk9en15XXqlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICB7LyogQ1RBIEJ1dHRvbnMgKi99XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC00IG1iLTE2IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDAgZGVsYXktNDAwICR7aXNWaXNpYmxlID8gXCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCIgOiBcIm9wYWNpdHktMCB0cmFuc2xhdGUteS0xMFwifWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIv16bXldeoLden16nXqFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgYmctWyNGRkQ3MDBdIHRleHQtWyMxQTFBMUFdIHB4LTggcHktNCByb3VuZGVkLWxnIHRleHQteGwgZm9udC1ib2xkIGhvdmVyOmJnLVsjMDBCRkZGXSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LWxnIHNoYWRvdy1bI0ZGRDcwMF0vMzBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg16fXkdecINeU16bXoteqINee15fXmdeoINeX15nXoNedXG4gICAgICAgICAgICAgICAgPEFycm93SWNvbiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIv16nXmdeo15XXqteZ151cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGJvcmRlci0yIGJvcmRlci1bI0Y1RjVGNV0gdGV4dC1bI0Y1RjVGNV0gcHgtOCBweS00IHJvdW5kZWQtbGcgdGV4dC14bCBmb250LWJvbGQgaG92ZXI6YmctWyNGNUY1RjVdIGhvdmVyOnRleHQtWyMxQTFBMUFdIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgINeU16nXmdeo15XXqteZ150g16nXnNeg15VcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBTdGF0cyAqL31cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNiBtYXgtdy00eGwgbXgtYXV0byB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwIGRlbGF5LTYwMCAke2lzVmlzaWJsZSA/IFwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiIDogXCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktMTBcIn1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3RhdHMubWFwKChzdGF0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzJEMkQyRF0vODAgYmFja2Ryb3AtYmx1ci1zbSByb3VuZGVkLXhsIHAtNiBib3JkZXIgYm9yZGVyLVsjRkZENzAwXS8yMCBob3Zlcjpib3JkZXItWyNGRkQ3MDBdIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNoYWRvdy1sZyBob3ZlcjpzaGFkb3ctWyNGRkQ3MDBdLzIwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItM1wiPntzdGF0Lmljb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtYmxhY2sgdGV4dC1bI0ZGRDcwMF0gbWItMlwiPntzdGF0LnZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsjRjVGNUY1XSBmb250LWJvbGRcIj57c3RhdC5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEVsZWN0cmljIHdhdmUgZGl2aWRlciBhdCBib3R0b20gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgaC0xNlwiPlxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMjAwIDYwXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTAgMzAgUTEwMCAxMCAyMDAgMzAgVDQwMCAzMCBUNjAwIDMwIFQ4MDAgMzAgVDEwMDAgMzAgVDEyMDAgMzBcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIiNGRkQ3MDBcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFyay1mbGlja2VyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTAgMzAgUTEwMCA1MCAyMDAgMzAgVDQwMCAzMCBUNjAwIDMwIFQ4MDAgMzAgVDEwMDAgMzAgVDEyMDAgMzBcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIiMwMEJGRkZcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICBvcGFjaXR5PVwiMC41XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogVHJ1c3QgQmFyICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctWyMyRDJEMkRdIHB5LTggYm9yZGVyLXkgYm9yZGVyLVsjRkZENzAwXS8yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNiBnYXAtNlwiPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBpY29uOiA8Q2xvY2tJY29uIC8+LCB0ZXh0OiBcIteW157Xmdeg15XXqiAyNC83XCIgfSxcbiAgICAgICAgICAgICAgeyBpY29uOiA8U2hpZWxkSWNvbiBjbGFzc05hbWU9XCJ3LTggaC04XCIgLz4sIHRleHQ6IFwi157XkdeV15jXlyDXkdee15zXldeQ15VcIiB9LFxuICAgICAgICAgICAgICB7IGljb246IDxDaGVja21hcmtDaXJjbGVJY29uIGNsYXNzTmFtZT1cInctOCBoLThcIiAvPiwgdGV4dDogXCLXqNeZ16nXmdeV158g157Xntep15zXqteZXCIgfSxcbiAgICAgICAgICAgICAgeyBpY29uOiA8U3Rhckljb24gY2xhc3NOYW1lPVwidy04IGgtOFwiIC8+LCB0ZXh0OiBcIteT15nXqNeV15IgNSDXm9eV15vXkdeZ151cIiB9LFxuICAgICAgICAgICAgICB7IGljb246IDxMaWdodG5pbmdCb2x0SWNvbiBjbGFzc05hbWU9XCJ3LTggaC04XCIgLz4sIHRleHQ6IFwi15DXl9eo15nXldeqINei15wg16LXkdeV15PXlFwiIH0sXG4gICAgICAgICAgICAgIHsgaWNvbjogPFRhZ0ljb24gLz4sIHRleHQ6IFwi15TXptei16og157Xl9eZ16gg15fXmdeg151cIiB9LFxuICAgICAgICAgICAgXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjRkZENzAwXVwiPntpdGVtLmljb259PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNGNUY1RjVdIGZvbnQtYm9sZCB0ZXh0LXNtXCI+e2l0ZW0udGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogU2VydmljZXMgU2VjdGlvbiAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLVsjMUExQTFBXSBweS0xNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIHsvKiBTZWN0aW9uIFRpdGxlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtZDp0ZXh0LTZ4bCBmb250LWJsYWNrIHRleHQtWyNGNUY1RjVdIG1iLTRcIj7XlNep15nXqNeV16rXmdedINep15zXoNeVPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00OCBoLTEgYmctWyNGRkQ3MDBdIG14LWF1dG8gcm91bmRlZFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFNlcnZpY2VzIEdyaWQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC02XCI+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IGljb246IDxMaWdodG5pbmdCb2x0SWNvbiBjbGFzc05hbWU9XCJ3LTEyIGgtMTJcIiAvPiwgdGl0bGU6IFwi16rXmden15XXnyDXqten15zXldeqINeX16nXntecXCIsIGRlc2M6IFwi16TXqteo15XXnyDXnten16bXldei15kg15zXm9ecINeq16fXnNeqINeX16nXntecINeR15HXmdeqINeQ15Ug15HXoteh16dcIiwgdGFnOiBcIteT15fXldejXCIsIHRhZ0NvbG9yOiBcImJnLXJlZC01MDBcIiB9LFxuICAgICAgICAgICAgICB7IGljb246IDxDaXJjdWl0QnJlYWtlckljb24gLz4sIHRpdGxlOiBcIteU16rXp9eg16og15zXldeXINeX16nXntecXCIsIGRlc2M6IFwi15TXqten16DXlCDXldep15PXqNeV15Ig15zXldeX15XXqiDXl9ep157XnCDXkdeY15XXl9eZ150g15XXqten16DXmdeZ151cIiwgdGFnOiBcItek15XXpNeV15zXqNeZXCIsIHRhZ0NvbG9yOiBcImJnLVsjRkZENzAwXVwiIH0sXG4gICAgICAgICAgICAgIHsgaWNvbjogPFBsdWdJY29uIGNsYXNzTmFtZT1cInctMTIgaC0xMlwiIC8+LCB0aXRsZTogXCLXlNeq16fXoNeqINep16fXoteZ150g15XXnteq15LXmdedXCIsIGRlc2M6IFwi15TXqten16DXqiDXqden16LXmdedLCDXnteq15LXmdedINeV16DXp9eV15PXldeqINeX16nXntecINeX15PXqdeV16pcIiwgdGFnOiBcItek15XXpNeV15zXqNeZXCIsIHRhZ0NvbG9yOiBcImJnLVsjRkZENzAwXVwiIH0sXG4gICAgICAgICAgICAgIHsgaWNvbjogPExpZ2h0QnVsYkljb24gLz4sIHRpdGxlOiBcIteU16rXp9eg16og16rXkNeV16jXlFwiLCBkZXNjOiBcIteU16rXp9eg16og16TXoNeh15nXnSwg157XoNeV16jXldeqINeV16rXkNeV16jXqiBMRUQg15fXodeb15XXoNeZ16pcIiwgdGFnOiBcIteX15PXqVwiLCB0YWdDb2xvcjogXCJiZy1ncmVlbi01MDBcIiB9LFxuICAgICAgICAgICAgICB7IGljb246IDxTb2xhclBhbmVsSWNvbiAvPiwgdGl0bGU6IFwi157Xoteo15vXldeqINeh15XXnNeQ16jXmdeV16pcIiwgZGVzYzogXCLXqteb16DXldefINeV15TXqten16DXqiDXntei16jXm9eV16og16HXldec15DXqNeZ15XXqiDXnNeR16rXmdedINeV16LXoden15nXnVwiLCB0YWc6IFwi15nXqNeV16dcIiwgdGFnQ29sb3I6IFwiYmctZ3JlZW4tNTAwXCIgfSxcbiAgICAgICAgICAgICAgeyBpY29uOiA8Vm9sdE1ldGVySWNvbiAvPiwgdGl0bGU6IFwi15HXk9eZ16fXldeqINeX16nXntecXCIsIGRlc2M6IFwi15HXk9eZ16fXldeqINeR15jXmdeX15XXqiDXldee15PXmdeT15XXqiDXl9ep157XnCDXnten16bXldei15nXldeqXCIsIHRhZzogXCLXl9eZ15XXoNeZXCIsIHRhZ0NvbG9yOiBcImJnLWJsdWUtNTAwXCIgfSxcbiAgICAgICAgICAgICAgeyBpY29uOiA8Q29pbEljb24gLz4sIHRpdGxlOiBcIteU15fXnNek16og15vXkdec15nXnVwiLCBkZXNjOiBcIteU15fXnNek16og15vXkdec15nXnSDXpNeS15XXnteZ150g15XXl9eZ15XXldeYINee16fXpteV16LXmVwiLCB0YWc6IFwi157Xldee15fXmdeV16pcIiwgdGFnQ29sb3I6IFwiYmctcHVycGxlLTUwMFwiIH0sXG4gICAgICAgICAgICAgIHsgaWNvbjogPFdhcm5pbmdUcmlhbmdsZUljb24gLz4sIHRpdGxlOiBcIteX16nXntec15DXmSDXl9eZ16jXldedIDI0LzdcIiwgZGVzYzogXCLXltee15nXoNeV16og157XnNeQ15Qg15zXqten15zXldeqINeX15nXqNeV150g15HXm9ecINep16LXlFwiLCB0YWc6IFwi15fXmdeo15XXnVwiLCB0YWdDb2xvcjogXCJiZy1yZWQtNTAwXCIgfSxcbiAgICAgICAgICAgIF0ubWFwKChzZXJ2aWNlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgdG89XCIv16nXmdeo15XXqteZ151cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMkQyRDJEXSByb3VuZGVkLXhsIHAtNiBib3JkZXIgYm9yZGVyLVsjRkZENzAwXS8yMCBob3Zlcjpib3JkZXItWyNGRkQ3MDBdIHRyYW5zaXRpb24tYWxsIGhvdmVyOnNoYWRvdy1sZyBob3ZlcjpzaGFkb3ctWyNGRkQ3MDBdLzIwIGNhcmQtaG92ZXIgZ3JvdXBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNGRkQ3MDBdIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybVwiPntzZXJ2aWNlLmljb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3NlcnZpY2UudGFnQ29sb3J9IHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcHgtMiBweS0xIHJvdW5kZWRgfT57c2VydmljZS50YWd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJsYWNrIHRleHQtWyNGNUY1RjVdIG1iLTJcIj57c2VydmljZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0Y1RjVGNV0vNzAgZm9udC1ib2xkIHRleHQtc20gZmxleC1ncm93XCI+e3NlcnZpY2UuZGVzY308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIENUQSBCYW5uZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBiZy1bIzJEMkQyRF0gcm91bmRlZC14bCBwLTYgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00IGJvcmRlciBib3JkZXItWyNGRkQ3MDBdLzIwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgIDxQaG9uZUljb24gY2xhc3NOYW1lPVwidy0xMiBoLTEyIHRleHQtWyNGRkQ3MDBdXCIgLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0Y1RjVGNV0gZm9udC1ib2xkIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICDXnNeQINee16bXkNeqINeQ16og15TXqdeZ16jXldeqINep15DXqteUINee15fXpNepPyDXlNeq16fXqdeoINeQ15zXmdeg15Ug15XXoNee16bXkCDXpNeq16jXldefIVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL9em15XXqC3Xp9ep16hcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0ZGRDcwMF0gdGV4dC1bIzFBMUExQV0gcHgtNiBweS0zIHJvdW5kZWQtbGcgZm9udC1ib2xkIGhvdmVyOmJnLVsjMDBCRkZGXSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg15PXkdeo15Ug15DXmdeq16DXlVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIFdoeSBVcyBTZWN0aW9uICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctWyMyRDJEMkRdIHB5LTE2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgey8qIFNlY3Rpb24gVGl0bGUgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNXhsIG1kOnRleHQtNnhsIGZvbnQtYmxhY2sgdGV4dC1bI0Y1RjVGNV0gbWItNFwiPtec157XlCDXnNeR15fXldeoINeR16DXlT88L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQ4IGgtMSBiZy1bI0ZGRDcwMF0gbXgtYXV0byByb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cbiAgICAgICAgICAgIHsvKiBDb2x1bW4gMSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgXCIxNSDXqdeg15XXqiDXoNeZ16HXmdeV158g15HXqteX15XXnSDXlNeX16nXntecXCIsXG4gICAgICAgICAgICAgICAgXCLXpteV15XXqiDXl9ep157XnNeQ15nXnSDXnteV16HXnteaINeV157XoNeV16HXlFwiLFxuICAgICAgICAgICAgICAgIFwi15bXnteZ16DXldeqIDI0Lzcg15vXldec15wg16nXkdeq15XXqiDXldeX15LXmdedXCIsXG4gICAgICAgICAgICAgICAgXCLXnteS15nXoteZ150g16rXldeaIDMwINeT16fXldeqINec15vXnCDXqten15zXlFwiLFxuICAgICAgICAgICAgICBdLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2ttYXJrQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02IGZsZXgtc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bI0Y1RjVGNV0gZm9udC1ib2xkIHRleHQtbGdcIj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDb2x1bW4gMiAtIEV4cGVyaWVuY2UgQmFkZ2UgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy00OCBoLTQ4IG1iLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgcm91bmRlZC1mdWxsIGJvcmRlci00IGJvcmRlci1bI0ZGRDcwMF0gYW5pbWF0ZS1wdWxzZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtNCByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLVsjRkZENzAwXS81MFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYmxhY2sgdGV4dC1bI0ZGRDcwMF1cIj4xNSs8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsjRjVGNUY1XSBmb250LWJvbGQgdGV4dC1zbVwiPtep16DXldeqINeg15nXodeZ15XXnzwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgeyBpY29uOiA8TGlnaHRuaW5nQm9sdEljb24gY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+LCB0ZXh0OiBcItee16fXpteV16LXmVwiIH0sXG4gICAgICAgICAgICAgICAgICB7IGljb246IDxDbG9ja0ljb24gY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+LCB0ZXh0OiBcItee15TXmdeoXCIgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWNvbjogPFNoaWVsZEljb24gY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+LCB0ZXh0OiBcIteQ157XmdefXCIgfSxcbiAgICAgICAgICAgICAgICAgIHsgaWNvbjogPFN0YXJJY29uIGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPiwgdGV4dDogXCLXnteV15HXmdecXCIgfSxcbiAgICAgICAgICAgICAgICBdLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctWyMxQTFBMUFdIHB4LTQgcHktMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItWyNGRkQ3MDBdLzIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNGRkQ3MDBdXCI+e2l0ZW0uaWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNGNUY1RjVdIGZvbnQtYm9sZFwiPntpdGVtLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDb2x1bW4gMyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgXCLXnteX15nXqNeZ150g15TXldeS16DXmdedINec15zXkCDXlNek16rXoteV16pcIixcbiAgICAgICAgICAgICAgICBcIteb15nXodeV15kg15HXmdeY15XXl9eZINee15zXkCDXnNeb15wg16LXkdeV15PXlFwiLFxuICAgICAgICAgICAgICAgIFwi16jXmdep15nXldefINee157Xqdec16rXmSDXldeU16HXnteb15XXqiDXnten16bXldei15nXldeqXCIsXG4gICAgICAgICAgICAgICAgXCLXkNeX16jXmdeV16og16LXnCDXm9ecINei15HXldeT15Qg15XXqteZ16fXldefXCIsXG4gICAgICAgICAgICAgIF0ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxDaGVja21hcmtDaXJjbGVJY29uIGNsYXNzTmFtZT1cInctNiBoLTYgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjRjVGNUY1XSBmb250LWJvbGQgdGV4dC1sZ1wiPntpdGVtfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDaXR5IGNoaXBzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTQgbXQtMTJcIj5cbiAgICAgICAgICAgIHtbXCLXqtecINeQ15HXmdeRXCIsIFwi16jXnteqINeS159cIiwgXCLXlNeo16bXnNeZ15RcIiwgXCLXpNeq15cg16rXp9eV15XXlFwiLCBcIteo15DXqdeV158g15zXpteZ15XXn1wiXS5tYXAoKGNpdHksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctWyNGRkQ3MDBdIHRleHQtWyMxQTFBMUFdIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgPE1hcFBpbkljb24gY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAge2NpdHl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogUHJvY2VzcyBTZWN0aW9uICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctWyMxQTFBMUFdIHB5LTE2IGNpcmN1aXQtcGF0dGVyblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIHsvKiBTZWN0aW9uIFRpdGxlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtZDp0ZXh0LTZ4bCBmb250LWJsYWNrIHRleHQtWyNGNUY1RjVdIG1iLTRcIj7XkNeZ15og15bXlCDXoteV15HXkz88L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQ4IGgtMSBiZy1bI0ZGRDcwMF0gbXgtYXV0byByb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUHJvY2VzcyBTdGVwcyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTggcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIHsvKiBDb25uZWN0aW5nIGxpbmVzIChkZXNrdG9wKSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGFic29sdXRlIHRvcC0xNiBsZWZ0LTAgcmlnaHQtMCBoLTAuNSBiZy1ncmFkaWVudC10by1yIGZyb20tWyNGRkQ3MDBdIHZpYS1bIzAwQkZGRl0gdG8tWyNGRkQ3MDBdXCI+PC9kaXY+XG5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgc3RlcDogXCIxXCIsIGljb246IDxQaG9uZUljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz4sIHRpdGxlOiBcIteZ16bXmdeo16og16fXqdeoXCIsIGRlc2M6IFwi15TXqten16nXqNeVINeQ15zXmdeg15Ug15DXlSDXqdec15fXlSDXlNeV15PXoteUXCIsIHRhZzogXCLXnteZ15nXk9eZXCIgfSxcbiAgICAgICAgICAgICAgeyBzdGVwOiBcIjJcIiwgaWNvbjogPFZvbHRNZXRlckljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz4sIHRpdGxlOiBcIteQ15HXl9eV158g15TXkdei15nXlFwiLCBkZXNjOiBcIteg15DXkdeX158g15DXqiDXlNeq16fXnNeUINeR157Xk9eV15nXp1wiLCB0YWc6IFwi157Xk9eV15nXp1wiIH0sXG4gICAgICAgICAgICAgIHsgc3RlcDogXCIzXCIsIGljb246IDxUYWdJY29uIGNsYXNzTmFtZT1cInctMTAgaC0xMFwiIC8+LCB0aXRsZTogXCLXlNem16LXqiDXnteX15nXqFwiLCBkZXNjOiBcIteq16fXkdec15Ug15TXptei16og157Xl9eZ16gg16nXp9eV16TXlFwiLCB0YWc6IFwi16nXp9eV16NcIiB9LFxuICAgICAgICAgICAgICB7IHN0ZXA6IFwiNFwiLCBpY29uOiA8TGlnaHRuaW5nQm9sdEljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz4sIHRpdGxlOiBcIteq15nXp9eV158g15XXodeZ15XXnVwiLCBkZXNjOiBcIteg16rXp9efINeV16DXkdeY15nXlyDXkNeZ15vXldeqXCIsIHRhZzogXCLXotedINeQ15fXqNeZ15XXqlwiIH0sXG4gICAgICAgICAgICBdLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciByZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsIGJnLVsjRkZENzAwXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi00IHNoYWRvdy1sZyBzaGFkb3ctWyNGRkQ3MDBdLzMwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJsYWNrIHRleHQtWyMxQTFBMUFdXCI+e2l0ZW0uc3RlcH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsIGJnLVsjMkQyRDJEXSBib3JkZXItNCBib3JkZXItWyNGRkQ3MDBdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTQgLW10LThcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNGRkQ3MDBdXCI+e2l0ZW0uaWNvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYmxhY2sgdGV4dC1bI0Y1RjVGNV0gbWItMlwiPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0Y1RjVGNV0vNzAgZm9udC1ib2xkIG1iLTNcIj57aXRlbS5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1bI0ZGRDcwMF0gdGV4dC1bIzFBMUExQV0gcHgtMyBweS0xIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIGZvbnQtYm9sZFwiPntpdGVtLnRhZ308L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogUHJvamVjdHMgU2VjdGlvbiAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLVsjMkQyRDJEXSBweS0xNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIHsvKiBTZWN0aW9uIFRpdGxlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtZDp0ZXh0LTZ4bCBmb250LWJsYWNrIHRleHQtWyNGNUY1RjVdIG1iLTRcIj7XlNek16jXldeZ16fXmNeZ150g16nXnNeg15U8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQ4IGgtMSBiZy1bI0ZGRDcwMF0gbXgtYXV0byByb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUHJvamVjdHMgR3JpZCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgaW1nOiBcImh0dHBzOi8vYXNzZXRzLmxzLWFzc2V0cy5jb20vcHJvdmlkZXIvaXN0b2NrLzIyNjcyNjg2MTAuanBnP3c9NzY4XCIsIGNhdGVnb3J5OiBcIteT15nXqNeUINek16jXmNeZ16pcIiwgbmFtZTogXCLXlNeq16fXoNeqINec15XXlyDXl9ep157XnFwiIH0sXG4gICAgICAgICAgICAgIHsgaW1nOiBcImh0dHBzOi8vYXNzZXRzLmxzLWFzc2V0cy5jb20vcHJvdmlkZXIvaXN0b2NrLzIyNTkzMTgxMzguanBnP3c9NzY4XCIsIGNhdGVnb3J5OiBcItep15nXpNeV16Ug157XnNeQXCIsIG5hbWU6IFwi15fXmdeV15XXmCDXl9ep157XnCDXntec15BcIiB9LFxuICAgICAgICAgICAgICB7IGltZzogXCJodHRwczovL2Fzc2V0cy5scy1hc3NldHMuY29tL3Byb3ZpZGVyL2lzdG9jay8yMTk2MTU4MTI3LmpwZz93PTc2OFwiLCBjYXRlZ29yeTogXCLXoteh16cg157XodeX16jXmVwiLCBuYW1lOiBcIteU16rXp9eg16og16rXkNeV16jXlFwiIH0sXG4gICAgICAgICAgICAgIHsgaW1nOiBcImh0dHBzOi8vYXNzZXRzLmxzLWFzc2V0cy5jb20vcHJvdmlkZXIvaXN0b2NrLzIyNTYzMDMxODkuanBnP3c9NzY4XCIsIGNhdGVnb3J5OiBcIteT15nXqNeUINek16jXmNeZ16pcIiwgbmFtZTogXCLXqteZ16fXldefINeq16fXnNeUXCIgfSxcbiAgICAgICAgICAgICAgeyBpbWc6IFwiaHR0cHM6Ly9hc3NldHMubHMtYXNzZXRzLmNvbS9wcm92aWRlci9pc3RvY2svMjE5OTExMTQ3Mi5qcGc/dz03NjhcIiwgY2F0ZWdvcnk6IFwi157Xoteo15vXqiDXodeV15zXkNeo15nXqlwiLCBuYW1lOiBcIteU16rXp9eg16og16TXkNeg15zXmdedXCIgfSxcbiAgICAgICAgICAgICAgeyBpbWc6IFwiaHR0cHM6Ly9hc3NldHMubHMtYXNzZXRzLmNvbS9wcm92aWRlci9pc3RvY2svMjIxMzU3MTk3My5qcGc/dz03NjhcIiwgY2F0ZWdvcnk6IFwi16nXmdek15XXpSDXntec15BcIiwgbmFtZTogXCLXlNeX15zXpNeqINeb15HXnNeZ151cIiB9LFxuICAgICAgICAgICAgICB7IGltZzogXCJodHRwczovL2Fzc2V0cy5scy1hc3NldHMuY29tL3Byb3ZpZGVyL2lzdG9jay8yMjQ5MzA2MzMxLmpwZz93PTc2OFwiLCBjYXRlZ29yeTogXCLXoteh16cg157XodeX16jXmVwiLCBuYW1lOiBcIteR15PXmden16og15HXmNeZ15fXldeqXCIgfSxcbiAgICAgICAgICAgICAgeyBpbWc6IFwiaHR0cHM6Ly9hc3NldHMubHMtYXNzZXRzLmNvbS9wcm92aWRlci9pc3RvY2svMjIzMzI3Nzk0NC5qcGc/dz03NjhcIiwgY2F0ZWdvcnk6IFwi15PXmdeo15Qg16TXqNeY15nXqlwiLCBuYW1lOiBcIteU16rXp9eg16og16nXp9ei15nXnVwiIH0sXG4gICAgICAgICAgICAgIHsgaW1nOiBcImh0dHBzOi8vYXNzZXRzLmxzLWFzc2V0cy5jb20vcHJvdmlkZXIvaXN0b2NrLzIxNzU4NjgxOTMuanBnP3c9NzY4XCIsIGNhdGVnb3J5OiBcItec15XXlyDXl9ep157XnFwiLCBuYW1lOiBcItep15PXqNeV15Ig15zXldeXXCIgfSxcbiAgICAgICAgICAgIF0ubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC14bCBiZy1bIzFBMUExQV0gZ3JvdXAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltZ31cbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDggb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1bIzFBMUExQV0gdmlhLXRyYW5zcGFyZW50IHRvLXRyYW5zcGFyZW50XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBiZy1bI0ZGRDcwMF0gdGV4dC1bIzFBMUExQV0gdGV4dC14cyBmb250LWJvbGQgcHgtMiBweS0xIHJvdW5kZWQgbWItMlwiPntwcm9qZWN0LmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYmxhY2sgdGV4dC13aGl0ZVwiPntwcm9qZWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IGxlZnQtNCBvcGFjaXR5LTMwIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiPlxuICAgICAgICAgICAgICAgICAgPExpZ2h0bmluZ0JvbHRJY29uIGNsYXNzTmFtZT1cInctMTIgaC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LThcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL9ek16jXldeZ16fXmNeZ151cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctWyNGRkQ3MDBdIHRleHQtWyMxQTFBMUFdIHB4LTggcHktNCByb3VuZGVkLWxnIHRleHQteGwgZm9udC1ib2xkIGhvdmVyOmJnLVsjMDBCRkZGXSBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg16bXpNeUINeR15vXnCDXlNek16jXldeZ16fXmNeZ151cbiAgICAgICAgICAgICAgPEFycm93SWNvbiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIEVtZXJnZW5jeSBTZWN0aW9uICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLVsjRkZENzAwXSB0by1bIzFBMUExQV0gcHktMTYgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIHsvKiBCYWNrZ3JvdW5kIGxpZ2h0bmluZyB3YXRlcm1hcmsgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgb3BhY2l0eS0xMFwiPlxuICAgICAgICAgIDxMaWdodG5pbmdCb2x0SWNvbiBjbGFzc05hbWU9XCJ3LTk2IGgtOTZcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAgey8qIFNlY3Rpb24gVGl0bGUgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNXhsIG1kOnRleHQtNnhsIGZvbnQtYmxhY2sgdGV4dC1bIzFBMUExQV0gbWItNFwiPtep15nXqNeV16og15fXmdeo15XXnSDXl9ep157XnNeZIDI0Lzc8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQ4IGgtMSBiZy1bIzFBMUExQV0gbXgtYXV0byByb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU3RhdHMgQ2FyZHMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC02IG1iLTEyXCI+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7IGljb246IDxDbG9ja0ljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz4sIHRleHQ6IFwi157Xoteg15Qg16rXldeaIDMwINeT16fXldeqXCIgfSxcbiAgICAgICAgICAgICAgeyBpY29uOiA8TGlnaHRuaW5nQm9sdEljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz4sIHRleHQ6IFwi15fXqdee15zXkNeZINee15XXodee15og15HXqdeY15dcIiB9LFxuICAgICAgICAgICAgICB7IGljb246IDxTaGllbGRJY29uIGNsYXNzTmFtZT1cInctMTAgaC0xMFwiIC8+LCB0ZXh0OiBcIteq15nXp9eV158g157XldeR15jXlyDXotedINeQ15fXqNeZ15XXqlwiIH0sXG4gICAgICAgICAgICBdLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy1bIzFBMUExQV0gcm91bmRlZC14bCBwLTYgdGV4dC1jZW50ZXIgYm9yZGVyIGJvcmRlci1bI0ZGRDcwMF0vMzBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItNCB0ZXh0LVsjRkZENzAwXVwiPntpdGVtLmljb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYmxhY2sgdGV4dC13aGl0ZVwiPntpdGVtLnRleHR9PC9oMz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDVEEgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ibGFjayB0ZXh0LVsjMUExQTFBXSBtYi02XCI+15nXqSDXnNeaINeq16fXnNeqINeX16nXntecPzwvcD5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL9eX15nXqNeV151cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgYmctWyMxQTFBMUFdIHRleHQtWyNGRkQ3MDBdIHB4LTEwIHB5LTUgcm91bmRlZC14bCB0ZXh0LTJ4bCBmb250LWJsYWNrIHB1bHNlLWFuaW1hdGlvbiBob3ZlcjpiZy1bIzJEMkQyRF0gdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGhvbmVJY29uIGNsYXNzTmFtZT1cInctOCBoLThcIiAvPlxuICAgICAgICAgICAgICDXlNeq16fXqdeoINei15vXqdeZ15Ug4oCUINeW157Xmdeg15nXnSAyNC83XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU2Nyb2xsaW5nIHN0cmlwICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgYmctWyMxQTFBMUFdIHJvdW5kZWQtbGcgcHktNCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbmltYXRlLW1hcnF1ZWVcIj5cbiAgICAgICAgICAgICAge1tcIteg16TXnCDXl9ep157XnFwiLCBcIten16bXqCDXl9ep157XnNeZXCIsIFwi16rXp9ec15Qg15HXnNeV15dcIiwgXCLXkNeZ158g15fXqdee15xcIiwgXCLXodeb16DXqiDXlNeq15fXqdee15zXldeqXCIsIFwi15vXnCDXqten15zXlFwiLCBcIteQ16DXl9eg15Ug15vXkNefXCIsIFwi16DXpNecINeX16nXntecXCIsIFwi16fXpteoINeX16nXntec15lcIiwgXCLXqten15zXlCDXkdec15XXl1wiLCBcIteQ15nXnyDXl9ep157XnFwiLCBcIteh15vXoNeqINeU16rXl9ep157XnNeV16pcIiwgXCLXm9ecINeq16fXnNeUXCIsIFwi15DXoNeX16DXlSDXm9eQ159cIl0ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcHgtOFwiPlxuICAgICAgICAgICAgICAgICAgPExpZ2h0bmluZ0JvbHRJY29uIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgd2hpdGVzcGFjZS1ub3dyYXBcIj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogRkFRIFNlY3Rpb24gKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1bIzFBMUExQV0gcHktMTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICB7LyogU2VjdGlvbiBUaXRsZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC01eGwgbWQ6dGV4dC02eGwgZm9udC1ibGFjayB0ZXh0LVsjRjVGNUY1XSBtYi00XCI+16nXkNec15XXqiDXoNek15XXpteV16o8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQ4IGgtMSBiZy1bI0ZGRDcwMF0gbXgtYXV0byByb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogRkFRIEFjY29yZGlvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgeyBxOiBcIteb157XlCDXoteV15zXlCDXqteZ16fXldefINeq16fXnNeqINeX16nXntecP1wiLCBhOiBcIteU157Xl9eZ16gg16rXnNeV15kg15HXodeV15Ig15TXqten15zXlCDXldee15XXqNeb15HXldeq15QuINeQ16DXl9eg15Ug157Xodek16fXmdedINeU16bXoteqINee15fXmdeoINep16fXldek15Qg15zXpNeg15kg15vXnCDXoteR15XXk9eULCDXnNec15Ag15TXpNeq16LXldeqLiDXlNeq16fXqdeo15Ug15zXp9eR15zXqiDXlNei16jXm9eqINee15fXmdeoINee15PXldeZ16fXqi5cIiB9LFxuICAgICAgICAgICAgICB7IHE6IFwi15TXkNedINeQ16rXnSDXltee15nXoNeZ150g15HXqdeR16og15XXkdec15nXnNeUP1wiLCBhOiBcIteb158hINeQ16DXl9eg15Ug15bXnteZ16DXmdedIDI0Lzcg15vXldec15wg16nXkdeq15XXqiwg15fXkteZ150g15XXl9eS15nXnS4g16rXp9ec15XXqiDXl9ep157XnCDXnNeQINee15fXm9eV16og15XXkNeg15fXoNeVINek15Qg15HXm9ecINep16LXlC5cIiB9LFxuICAgICAgICAgICAgICB7IHE6IFwi15vXnteUINeW157XnyDXnNeV16fXlyDXnNeU15LXmdeiINec16rXp9ec16og15fXmdeo15XXnT9cIiwgYTogXCLXkNeg15fXoNeVINee16rXl9eZ15nXkdeZ150g15zXlNeS15nXoiDXqteV15ogMzAg15PXp9eV16og157XqNeS16Ig15TXp9eo15nXkNeULiDXltee15nXoNeV16og157XlNeZ16jXlCDXlNeZ15Ag15DXl9eTINeU15nXqteo15XXoNeV16og15TXnteo15vXlteZ15nXnSDXqdec16DXlS5cIiB9LFxuICAgICAgICAgICAgICB7IHE6IFwi15TXkNedINeQ16rXnSDXnteq16fXmdeg15nXnSDXnNeV15fXldeqINeX16nXntecINeX15PXqdeZ150/XCIsIGE6IFwi15HXldeV15PXkNeZISDXkNeg15fXoNeVINee16rXp9eZ16DXmdedINeV157XqdeT16jXkteZ150g15zXldeX15XXqiDXl9ep157XnCDXkdeU16rXkNedINec16rXp9eg15nXnSDXlNee16LXldeT15vXoNeZ150sINei150g15DXl9eo15nXldeqINee15zXkNeUINei15wg15TXoteR15XXk9eULlwiIH0sXG4gICAgICAgICAgICAgIHsgcTogXCLXnteUINeb15XXnNecINep15nXqNeV16og15fXmdeo15XXnSDXl9ep157XnNeZP1wiLCBhOiBcItep15nXqNeV16og15fXmdeo15XXnSDXm9eV15zXnDog15TXktei15Qg157XlNeZ16jXlCwg15DXkdeX15XXnyDXlNeq16fXnNeULCDXqteZ16fXldefINee16fXpteV16LXmSwg15XXkNeX16jXmdeV16og16LXnCDXlNei15HXldeT15QuINeU15vXnCDXkdee15fXmdeoINeU15XXktefINeV16nXp9eV16MuXCIgfSxcbiAgICAgICAgICAgICAgeyBxOiBcIteU15DXnSDXmdepINeQ15fXqNeZ15XXqiDXotecINeU16LXkdeV15PXlD9cIiwgYTogXCLXm9efISDXm9ecINei15HXldeT15Qg157XkteZ16LXlCDXotedINeQ15fXqNeZ15XXqiDXntec15DXlC4g15DXoNeX16DXlSDXoteV157Xk9eZ150g157XkNeX15XXqNeZINeU15DXmdeb15XXqiDXqdec16DXlSDXldee15HXmNeZ15fXmdedINep15HXmdei15XXqiDXqNem15XXnyDXntec15DXlC5cIiB9LFxuICAgICAgICAgICAgICB7IHE6IFwi15TXkNedINeQ16rXnSDXnteq16fXmdeg15nXnSDXntei16jXm9eV16og16HXldec15DXqNeZ15XXqj9cIiwgYTogXCLXm9efISDXkNeg15fXoNeVINee16rXnteX15nXnSDXkdeq15vXoNeV158g15XXlNeq16fXoNeqINee16LXqNeb15XXqiDXodeV15zXkNeo15nXldeqINec15HXqteZ150g16TXqNeY15nXmdedINeV16LXoden15nXnS4g16TXoNeVINeQ15zXmdeg15Ug15zXp9eR15zXqiDXlNem16LXqiDXnteX15nXqCDXnteV16rXkNee16ouXCIgfSxcbiAgICAgICAgICAgICAgeyBxOiBcIteQ15nXmiDXnteW157Xmdeg15nXnSDXl9ep157XnNeQ15k/XCIsIGE6IFwi16TXqdeV15gg15TXqten16nXqNeVINeQ15zXmdeg15UsINep15zXl9eVINeU15XXk9ei16og15XXldeQ15jXodeQ16QsINeQ15Ug157XnNeQ15Ug15DXqiDXlNeY15XXpNehINeR16LXnteV15Mg16bXldeoINen16nXqC4g15DXoNeX16DXlSDXoNeX15bXldeoINeQ15zXmdeb150g16rXldeaINeT16fXldeqIVwiIH0sXG4gICAgICAgICAgICBdLm1hcCgoZmFxLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8RkFRSXRlbSBrZXk9e2luZGV4fSBxdWVzdGlvbj17ZmFxLnF9IGFuc3dlcj17ZmFxLmF9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBDb250YWN0IFNlY3Rpb24gKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1bIzJEMkQyRF0gcHktMTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICB7LyogU2VjdGlvbiBUaXRsZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC01eGwgbWQ6dGV4dC02eGwgZm9udC1ibGFjayB0ZXh0LVsjRjVGNUY1XSBtYi00XCI+16bXldeoINen16nXqCDXoteb16nXmdeVPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00OCBoLTEgYmctWyNGRkQ3MDBdIG14LWF1dG8gcm91bmRlZFwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yIGdhcC04XCI+XG4gICAgICAgICAgICB7LyogQ29udGFjdCBJbmZvICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzFBMUExQV0gcm91bmRlZC14bCBwLTggYm9yZGVyIGJvcmRlci1bI0ZGRDcwMF0vMjBcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYmxhY2sgdGV4dC1bI0ZGRDcwMF0gbWItNlwiPtek16jXmNeZINeZ16bXmdeo16og16fXqdeoPC9oMz5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxQaG9uZUljb24gY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LVsjRkZENzAwXVwiIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjRjVGNUY1XS82MCBmb250LWJvbGRcIj7XmNec16TXldefOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDowNTAwMDAwMDAwXCIgY2xhc3NOYW1lPVwidGV4dC1bI0Y1RjVGNV0gZm9udC1ib2xkIHRleHQteGwgbXItMiBob3Zlcjp0ZXh0LVsjRkZENzAwXVwiPjA1MC0wMDAtMDAwMDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPEVudmVsb3BlSWNvbiBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtWyNGRkQ3MDBdXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNGNUY1RjVdLzYwIGZvbnQtYm9sZFwiPteQ15nXnteZ15nXnDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aW5mb0BoYXNobWFsYXkuY28uaWxcIiBjbGFzc05hbWU9XCJ0ZXh0LVsjRjVGNUY1XSBmb250LWJvbGQgbXItMiBob3Zlcjp0ZXh0LVsjRkZENzAwXVwiPmluZm9AaGFzaG1hbGF5LmNvLmlsPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8V2hhdHNBcHBJY29uIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1bI0ZGRDcwMF1cIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bI0Y1RjVGNV0gZm9udC1ib2xkXCI+16nXnNeXINeU15XXk9ei15Qg15nXqdeZ16jXlCDXkdeV15XXkNeY16HXkNekPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPENsb2NrSWNvbiBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtWyNGRkQ3MDBdXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNGNUY1RjVdIGZvbnQtYm9sZFwiPjI0Lzcg15vXldec15wg16nXkdeq15XXqiDXldeX15LXmdedPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPE1hcFBpbkljb24gY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LVsjRkZENzAwXVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjRjVGNUY1XSBmb250LWJvbGRcIj7XqtecINeQ15HXmdeRINeV15TXnteo15vXljwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFByb21pc2UgYmFkZ2VzICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0zIG10LThcIj5cbiAgICAgICAgICAgICAgICB7W1wi157Xoteg15Qg16rXldeaIDMwINeT16fXldeqXCIsIFwi15zXnNeQINeU16rXl9eZ15nXkdeV16pcIiwgXCLXmdeZ16LXldelINeX15nXoNedXCJdLm1hcCgoYmFkZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy1bI0ZGRDcwMF0gdGV4dC1bIzFBMUExQV0gcHgtNCBweS0yIHJvdW5kZWQtZnVsbCBmb250LWJvbGQgdGV4dC1zbVwiPntiYWRnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBBY3Rpb24gYnV0dG9ucyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwidGVsOjA1MDAwMDAwMDBcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMyBiZy1bI0ZGRDcwMF0gdGV4dC1bIzFBMUExQV0gcHgtNiBweS00IHJvdW5kZWQtbGcgZm9udC1ib2xkIHRleHQteGwgaG92ZXI6YmctWyMwMEJGRkZdIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICA8UGhvbmVJY29uIGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgICAgICAg15TXqten16nXqCDXoteb16nXmdeVXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiaHR0cHM6Ly93YS5tZS85NzI1MDAwMDAwMDBcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMyBiZy1bIzFBMUExQV0gdGV4dC1bI0ZGRDcwMF0gYm9yZGVyLTIgYm9yZGVyLVsjRkZENzAwXSBweC02IHB5LTQgcm91bmRlZC1sZyBmb250LWJvbGQgdGV4dC14bCBob3ZlcjpiZy1bI0ZGRDcwMF0gaG92ZXI6dGV4dC1bIzFBMUExQV0gdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgICAgICAgICAgICAgIDxXaGF0c0FwcEljb24gY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgICAgICDXqdec15cg15XXldeQ15jXodeQ16RcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCJtYWlsdG86aW5mb0BoYXNobWFsYXkuY28uaWxcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMyBib3JkZXItMiBib3JkZXItWyNGNUY1RjVdIHRleHQtWyNGNUY1RjVdIHB4LTYgcHktNCByb3VuZGVkLWxnIGZvbnQtYm9sZCB0ZXh0LXhsIGhvdmVyOmJnLVsjRjVGNUY1XSBob3Zlcjp0ZXh0LVsjMUExQTFBXSB0cmFuc2l0aW9uLWFsbFwiPlxuICAgICAgICAgICAgICAgICAgPEVudmVsb3BlSWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgICAgICAgICAgINep15zXlyDXkNeZ157XmdeZ15xcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBNYXAgKi99XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8TWFwUGluSWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtWyNGRkQ3MDBdXCIgLz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ibGFjayB0ZXh0LVsjRkZENzAwXVwiPteU157Xmden15XXnSDXqdec16DXlTwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNTQwNzguODUyODQ5MDY2MzYhMmQzNC43NzU1MyEzZDMyLjA4NTMhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDE1MWQ0Y2E3NTkzZTg1NTUlM0EweDdkOGYyZDhmOGY4ZjhmOGYhMnNUZWwlMjBBdml2LVlhZm8lMkMlMjBJc3JhZWwhNWUwITNtMiExc2VuITJzaWwhNHYxMjM0NTY3ODkwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwMFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAwLCBib3JkZXJSYWRpdXM6IFwiMTJweFwiIH19XG4gICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwi157Xmden15XXnSDXl9ep157XnNeQ15lcIlxuICAgICAgICAgICAgICA+PC9pZnJhbWU+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC00IG10LTRcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9kaXIvP2FwaT0xJmRlc3RpbmF0aW9uPVRlbCtBdml2LVlhZm8sK0lzcmFlbFwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgYmctWyNGRkQ3MDBdIHRleHQtWyMxQTFBMUFdIHB4LTQgcHktMyByb3VuZGVkLWxnIGZvbnQtYm9sZCBob3ZlcjpiZy1bIzAwQkZGRl0gaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25JY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgICAg16DXldeV15gg15DXnNeZ16DXlSDXkS1Hb29nbGUgTWFwc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvP2FwaT0xJnF1ZXJ5PVRlbCtBdml2LVlhZm8sK0lzcmFlbFwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgYmctWyMxQTFBMUFdIHRleHQtWyNGRkQ3MDBdIGJvcmRlci0yIGJvcmRlci1bI0ZGRDcwMF0gcHgtNCBweS0zIHJvdW5kZWQtbGcgZm9udC1ib2xkIGhvdmVyOmJnLVsjRkZENzAwXSBob3Zlcjp0ZXh0LVsjMUExQTFBXSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1hcFBpbkljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgICDXlNem15Ig15HXntek15Qg15TXntec15DXlFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0Y1RjVGNV0gZm9udC1ib2xkIHRleHQtY2VudGVyIG10LTRcIj7XkNeW15XXqCDXqdeZ16jXldeqOiDXqtecINeQ15HXmdeRLCDXqNee16og15LXnywg15TXqNem15zXmdeULCDXpNeq15cg16rXp9eV15XXlCDXldeb15wg15TXnteo15vXljwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIEZsb2F0aW5nIEJ1dHRvbnMgKi99XG4gICAgICA8RmxvYXRpbmdCdXR0b25zIC8+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gRkFRIEl0ZW0gQ29tcG9uZW50XG5mdW5jdGlvbiBGQVFJdGVtKHsgcXVlc3Rpb24sIGFuc3dlciB9OiB7IHF1ZXN0aW9uOiBzdHJpbmc7IGFuc3dlcjogc3RyaW5nIH0pIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMyRDJEMkRdIHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItWyNGRkQ3MDBdLzIwXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTQgdGV4dC1yaWdodFwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNGNUY1RjVdIGZvbnQtYm9sZCB0ZXh0LWxnXCI+e3F1ZXN0aW9ufTwvc3Bhbj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzTmFtZT17YHctNiBoLTYgdGV4dC1bI0ZGRDcwMF0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gJHtpc09wZW4gPyBcInJvdGF0ZS0xODBcIiA6IFwiXCJ9YH1cbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBkPVwiTTEyIDVWMTlNNSAxMkgxOVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZhcS1jb250ZW50ICR7aXNPcGVuID8gXCJvcGVuXCIgOiBcIlwifWB9PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjRjVGNUY1XS83MCBmb250LWJvbGQgcC00IHB0LTBcIj57YW5zd2VyfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBGbG9hdGluZyBCdXR0b25zIENvbXBvbmVudFxuZnVuY3Rpb24gRmxvYXRpbmdCdXR0b25zKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogV2hhdHNBcHAgQnV0dG9uICovfVxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vd2EubWUvOTcyNTAwMDAwMDAwXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS02IGxlZnQtNiB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIGJnLVsjMjVEMzY2XSB0ZXh0LXdoaXRlIHB4LTUgcHktMyByb3VuZGVkLWZ1bGwgc2hhZG93LWxnIHNoYWRvdy1bIzI1RDM2Nl0vMzAgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtXCJcbiAgICAgID5cbiAgICAgICAgPFdoYXRzQXBwSWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIGhpZGRlbiBzbTppbmxpbmVcIj7Xqdec15cg15TXldeT16LXlDwvc3Bhbj5cbiAgICAgIDwvYT5cblxuICAgICAgey8qIFBob25lIEJ1dHRvbiAqL31cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJ0ZWw6MDUwMDAwMDAwMFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS02IHJpZ2h0LTYgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBiZy1bI0ZGRDcwMF0gdGV4dC1bIzFBMUExQV0gcHgtNSBweS0zIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGcgc2hhZG93LVsjRkZENzAwXS8zMCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gcHVsc2UtYW5pbWF0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPFBob25lSWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIGhpZGRlbiBzbTppbmxpbmVcIj7XlNeq16fXqdeoINei15vXqdeZ15U8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC8+XG4gICk7XG59Il0sImZpbGUiOiIvaG9tZS91c2VyL3dlYnNpdGUvYXBwL3JvdXRlcy9faW5kZXgudHN4In0=