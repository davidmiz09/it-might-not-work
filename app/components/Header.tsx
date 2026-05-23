import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/components/Header.tsx");const useState = __vite__cjsImport2_react["useState"];const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import RefreshRuntime from "/@id/__x00__virtual:react-router/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "React Router Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/user/website/app/components/Header.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=14cb8495";
import { Link } from "/node_modules/.vite/deps/react-router.js?v=14cb8495";
var _jsxFileName = "/home/user/website/app/components/Header.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=14cb8495";
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
    lineNumber: 7,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, this);
_c = LightningBoltIcon;
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
    lineNumber: 13,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M8 12L11 15L16 9",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 12,
  columnNumber: 3
}, this);
_c2 = CheckmarkCircleIcon;
const ShieldIcon = ({
  className = "w-5 h-5"
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
    lineNumber: 20,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M9 12L11 14L15 10",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 19,
  columnNumber: 3
}, this);
_c3 = ShieldIcon;
const StarIcon = ({
  className = "w-5 h-5"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "#FFD700",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */_jsxDEV("path", {
    d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 26,
  columnNumber: 3
}, this);
_c4 = StarIcon;
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
    lineNumber: 33,
    columnNumber: 5
  }, this), /* @__PURE__ */_jsxDEV("path", {
    d: "M12 6V12L16 14",
    stroke: "#FFD700",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 32,
  columnNumber: 3
}, this);
_c5 = ClockIcon;
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
    lineNumber: 40,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 39,
  columnNumber: 3
}, this);
_c6 = PhoneIcon;
const MenuIcon = ({
  className = "w-6 h-6"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */_jsxDEV("path", {
    d: "M3 12H21M3 6H21M3 18H21",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 45,
  columnNumber: 3
}, this);
_c7 = MenuIcon;
const CloseIcon = ({
  className = "w-6 h-6"
}) => /* @__PURE__ */_jsxDEV("svg", {
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */_jsxDEV("path", {
    d: "M18 6L6 18M6 6L18 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 51,
  columnNumber: 3
}, this);
_c8 = CloseIcon;
export default function Header() {
  _s();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const trustBadges = [{
    icon: /* @__PURE__ */_jsxDEV(CheckmarkCircleIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, this),
    text: "מוסמך"
  }, {
    icon: /* @__PURE__ */_jsxDEV(LightningBoltIcon, {
      className: "w-5 h-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this),
    text: "מנוסה"
  }, {
    icon: /* @__PURE__ */_jsxDEV(ShieldIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this),
    text: "מבוטח"
  }, {
    icon: /* @__PURE__ */_jsxDEV(StarIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this),
    text: "מדורג 5 כוכבים"
  }, {
    icon: /* @__PURE__ */_jsxDEV(ClockIcon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this),
    text: "זמין 24/7"
  }];
  const navLinks = [{
    to: "/צור-קשר",
    text: "צור קשר"
  }, {
    to: "/פרויקטים",
    text: "פרויקטים"
  }, {
    to: "/שירותים",
    text: "שירותים"
  }, {
    to: "/",
    text: "בית"
  }];
  const marqueeItems = "זמינים 24 שעות ביממה — תיקון תקלות חשמל, התקנות, לוחות חשמל — מחירים הוגנים — מורשה ומבוטח — מעל 800 עבודות בוצעו".split(" — ");
  return /* @__PURE__ */_jsxDEV("header", {
    className: "sticky top-0 z-50",
    children: [/* @__PURE__ */_jsxDEV("div", {
      className: "bg-[#2D2D2D] border-b border-[#FFD700]/20",
      children: /* @__PURE__ */_jsxDEV("div", {
        className: "container",
        children: /* @__PURE__ */_jsxDEV("div", {
          className: "flex items-center justify-between py-2 overflow-x-auto",
          children: [/* @__PURE__ */_jsxDEV("div", {
            className: "flex items-center gap-4 md:gap-6",
            children: trustBadges.map((badge, index) => /* @__PURE__ */_jsxDEV("div", {
              className: "flex items-center gap-2 text-[#F5F5F5] whitespace-nowrap text-sm font-bold",
              children: [/* @__PURE__ */_jsxDEV("span", {
                className: "text-[#FFD700]",
                children: badge.icon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 19
              }, this), /* @__PURE__ */_jsxDEV("span", {
                children: badge.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV(Link, {
            to: "/צור-קשר",
            className: "hidden lg:flex items-center gap-2 bg-[#FFD700] text-[#1A1A1A] px-4 py-2 rounded font-bold hover:bg-[#00BFFF] transition-colors",
            children: [/* @__PURE__ */_jsxDEV(PhoneIcon, {
              className: "w-4 h-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this), "התקשר עכשיו"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("div", {
      className: "bg-[#1A1A1A] circuit-pattern shadow-lg shadow-black/50",
      children: [/* @__PURE__ */_jsxDEV("div", {
        className: "container",
        children: /* @__PURE__ */_jsxDEV("div", {
          className: "flex items-center justify-between py-4",
          children: [/* @__PURE__ */_jsxDEV(Link, {
            to: "/",
            className: "flex items-center gap-2",
            children: /* @__PURE__ */_jsxDEV("img", {
              src: "https://assets.ls-assets.com/uploads/19754c85-8b8e-4156-9be3-36e852ea5497/ffa50f09-cb15-47d7-b51a-d4888958ce6f.png?w=768",
              alt: "חשמלאי לוגו",
              className: "h-14 md:h-16"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("nav", {
            className: "hidden lg:flex items-center gap-8",
            children: navLinks.map(link => /* @__PURE__ */_jsxDEV(Link, {
              to: link.to,
              className: "text-[#F5F5F5] font-bold text-lg hover:text-[#FFD700] transition-colors relative group",
              children: [link.text, /* @__PURE__ */_jsxDEV("span", {
                className: "absolute bottom-0 right-0 w-0 h-0.5 bg-[#FFD700] transition-all group-hover:w-full"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 19
              }, this)]
            }, link.to, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this), /* @__PURE__ */_jsxDEV("button", {
            className: "lg:hidden text-[#F5F5F5] p-2",
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
            "aria-label": "תפריט",
            children: mobileMenuOpen ? /* @__PURE__ */_jsxDEV(CloseIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 33
            }, this) : /* @__PURE__ */_jsxDEV(MenuIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 49
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV("div", {
        className: `mobile-menu lg:hidden ${mobileMenuOpen ? "open" : ""}`,
        children: /* @__PURE__ */_jsxDEV("div", {
          className: "container pb-4",
          children: /* @__PURE__ */_jsxDEV("nav", {
            className: "flex flex-col gap-4",
            children: [navLinks.map(link => /* @__PURE__ */_jsxDEV(Link, {
              to: link.to,
              className: "text-[#F5F5F5] font-bold text-lg hover:text-[#FFD700] transition-colors py-2 border-b border-[#2D2D2D]",
              onClick: () => setMobileMenuOpen(false),
              children: link.text
            }, link.to, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 17
            }, this)), /* @__PURE__ */_jsxDEV(Link, {
              to: "/צור-קשר",
              className: "flex items-center justify-center gap-2 bg-[#FFD700] text-[#1A1A1A] px-4 py-3 rounded font-bold hover:bg-[#00BFFF] transition-colors mt-2",
              onClick: () => setMobileMenuOpen(false),
              children: [/* @__PURE__ */_jsxDEV(PhoneIcon, {
                className: "w-5 h-5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 17
              }, this), "התקשר עכשיו"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("div", {
      className: "bg-[#FFD700] overflow-hidden",
      children: /* @__PURE__ */_jsxDEV("div", {
        className: "flex animate-marquee",
        children: [...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => /* @__PURE__ */_jsxDEV("div", {
          className: "flex items-center gap-4 px-8 py-2 text-[#1A1A1A] font-bold whitespace-nowrap",
          children: [/* @__PURE__ */_jsxDEV(LightningBoltIcon, {
            className: "w-4 h-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 15
          }, this), /* @__PURE__ */_jsxDEV("span", {
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 15
          }, this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
_s(Header, "d7gXMF6mPDUhHBNUSEb8mLK4AII=");
_c9 = Header;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
$RefreshReg$(_c, "LightningBoltIcon");
$RefreshReg$(_c2, "CheckmarkCircleIcon");
$RefreshReg$(_c3, "ShieldIcon");
$RefreshReg$(_c4, "StarIcon");
$RefreshReg$(_c5, "ClockIcon");
$RefreshReg$(_c6, "PhoneIcon");
$RefreshReg$(_c7, "MenuIcon");
$RefreshReg$(_c8, "CloseIcon");
$RefreshReg$(_c9, "Header");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/user/website/app/components/Header.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      undefined && window.__reactRouterRouteModuleUpdates.set(undefined, nextExports);
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports, []);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLFFBQUEsUUFBZ0I7QUFDekIsU0FBU0MsSUFBQSxRQUFZOzs7O0FBR3JCLE1BQU1DLGlCQUFBLEdBQUFBLENBQXFCO0VBQUVDLFNBQUEsR0FBWTtBQUFBLE1BQ3ZDLGVBQUFDLE9BQUEsQ0FBQyxPQUFEO0VBQWdCRCxTQUFBO0VBQVdFLE9BQUEsRUFBUTtFQUFZQyxJQUFBLEVBQUs7RUFBT0MsS0FBQSxFQUFNO1lBQy9ELGVBQUFILE9BQUEsQ0FBQyxRQUFEO0lBQU1JLENBQUEsRUFBRTtJQUFxQ0YsSUFBQSxFQUFLO0lBQVVHLE1BQUEsRUFBTztJQUFVQyxXQUFBLEVBQVk7SUFBSUMsY0FBQSxFQUFlO0dBQVM7Ozs7O0NBQ2pIOzs7OztLQUhGVCxpQkFBQTtBQU1OLE1BQU1VLG1CQUFBLEdBQUFBLENBQXVCO0VBQUVULFNBQUEsR0FBWTtBQUFBLE1BQ3pDLGVBQUFDLE9BQUEsQ0FBQyxPQUFEO0VBQWdCRCxTQUFBO0VBQVdFLE9BQUEsRUFBUTtFQUFZQyxJQUFBLEVBQUs7RUFBT0MsS0FBQSxFQUFNO1lBQWpFLENBQ0UsZUFBQUgsT0FBQSxDQUFDLFVBQUQ7SUFBUVMsRUFBQSxFQUFHO0lBQUtDLEVBQUEsRUFBRztJQUFLQyxDQUFBLEVBQUU7SUFBS04sTUFBQSxFQUFPO0lBQVVDLFdBQUEsRUFBWTtHQUFLOzs7O1lBQ2pFLGVBQUFOLE9BQUEsQ0FBQyxRQUFEO0lBQU1JLENBQUEsRUFBRTtJQUFtQkMsTUFBQSxFQUFPO0lBQVVDLFdBQUEsRUFBWTtJQUFJTSxhQUFBLEVBQWM7SUFBUUwsY0FBQSxFQUFlO0dBQVM7Ozs7Ozs7Ozs7TUFIeEdDLG1CQUFBO0FBT04sTUFBTUssVUFBQSxHQUFBQSxDQUFjO0VBQUVkLFNBQUEsR0FBWTtBQUFBLE1BQ2hDLGVBQUFDLE9BQUEsQ0FBQyxPQUFEO0VBQWdCRCxTQUFBO0VBQVdFLE9BQUEsRUFBUTtFQUFZQyxJQUFBLEVBQUs7RUFBT0MsS0FBQSxFQUFNO1lBQWpFLENBQ0UsZUFBQUgsT0FBQSxDQUFDLFFBQUQ7SUFBTUksQ0FBQSxFQUFFO0lBQThFQyxNQUFBLEVBQU87SUFBVUMsV0FBQSxFQUFZO0lBQUlDLGNBQUEsRUFBZTtHQUFTOzs7O1lBQy9JLGVBQUFQLE9BQUEsQ0FBQyxRQUFEO0lBQU1JLENBQUEsRUFBRTtJQUFvQkMsTUFBQSxFQUFPO0lBQVVDLFdBQUEsRUFBWTtJQUFJTSxhQUFBLEVBQWM7SUFBUUwsY0FBQSxFQUFlO0dBQVM7Ozs7Ozs7Ozs7TUFIekdNLFVBQUE7QUFPTixNQUFNQyxRQUFBLEdBQUFBLENBQVk7RUFBRWYsU0FBQSxHQUFZO0FBQUEsTUFDOUIsZUFBQUMsT0FBQSxDQUFDLE9BQUQ7RUFBZ0JELFNBQUE7RUFBV0UsT0FBQSxFQUFRO0VBQVlDLElBQUEsRUFBSztFQUFVQyxLQUFBLEVBQU07WUFDbEUsZUFBQUgsT0FBQSxDQUFDLFFBQUQ7SUFBTUksQ0FBQSxFQUFFO0VBQUEsQ0FBb0c7Ozs7O0NBQ3hHOzs7OztNQUhGVSxRQUFBO0FBTU4sTUFBTUMsU0FBQSxHQUFBQSxDQUFhO0VBQUVoQixTQUFBLEdBQVk7QUFBQSxNQUMvQixlQUFBQyxPQUFBLENBQUMsT0FBRDtFQUFnQkQsU0FBQTtFQUFXRSxPQUFBLEVBQVE7RUFBWUMsSUFBQSxFQUFLO0VBQU9DLEtBQUEsRUFBTTtZQUFqRSxDQUNFLGVBQUFILE9BQUEsQ0FBQyxVQUFEO0lBQVFTLEVBQUEsRUFBRztJQUFLQyxFQUFBLEVBQUc7SUFBS0MsQ0FBQSxFQUFFO0lBQUtOLE1BQUEsRUFBTztJQUFVQyxXQUFBLEVBQVk7R0FBSzs7OztZQUNqRSxlQUFBTixPQUFBLENBQUMsUUFBRDtJQUFNSSxDQUFBLEVBQUU7SUFBaUJDLE1BQUEsRUFBTztJQUFVQyxXQUFBLEVBQVk7SUFBSU0sYUFBQSxFQUFjO0dBQVM7Ozs7Ozs7Ozs7TUFIL0VHLFNBQUE7QUFPTixNQUFNQyxTQUFBLEdBQUFBLENBQWE7RUFBRWpCLFNBQUEsR0FBWTtBQUFBLE1BQy9CLGVBQUFDLE9BQUEsQ0FBQyxPQUFEO0VBQWdCRCxTQUFBO0VBQVdFLE9BQUEsRUFBUTtFQUFZQyxJQUFBLEVBQUs7RUFBT0MsS0FBQSxFQUFNO1lBQy9ELGVBQUFILE9BQUEsQ0FBQyxRQUFEO0lBQU1JLENBQUEsRUFBRTtJQUFvV0YsSUFBQSxFQUFLO0dBQVc7Ozs7O0NBQ3hYOzs7OztNQUhGYyxTQUFBO0FBTU4sTUFBTUMsUUFBQSxHQUFBQSxDQUFZO0VBQUVsQixTQUFBLEdBQVk7QUFBQSxNQUM5QixlQUFBQyxPQUFBLENBQUMsT0FBRDtFQUFnQkQsU0FBQTtFQUFXRSxPQUFBLEVBQVE7RUFBWUMsSUFBQSxFQUFLO0VBQU9DLEtBQUEsRUFBTTtZQUMvRCxlQUFBSCxPQUFBLENBQUMsUUFBRDtJQUFNSSxDQUFBLEVBQUU7SUFBMEJDLE1BQUEsRUFBTztJQUFlQyxXQUFBLEVBQVk7SUFBSU0sYUFBQSxFQUFjO0dBQVM7Ozs7O0NBQzNGOzs7OztNQUhGSyxRQUFBO0FBTU4sTUFBTUMsU0FBQSxHQUFBQSxDQUFhO0VBQUVuQixTQUFBLEdBQVk7QUFBQSxNQUMvQixlQUFBQyxPQUFBLENBQUMsT0FBRDtFQUFnQkQsU0FBQTtFQUFXRSxPQUFBLEVBQVE7RUFBWUMsSUFBQSxFQUFLO0VBQU9DLEtBQUEsRUFBTTtZQUMvRCxlQUFBSCxPQUFBLENBQUMsUUFBRDtJQUFNSSxDQUFBLEVBQUU7SUFBdUJDLE1BQUEsRUFBTztJQUFlQyxXQUFBLEVBQVk7SUFBSU0sYUFBQSxFQUFjO0dBQVM7Ozs7O0NBQ3hGOzs7OztNQUhGTSxTQUFBO0FBTU4sZUFBZSxTQUFTQyxPQUFBLEVBQVM7RUFBQUMsRUFBQTtFQUMvQixNQUFNLENBQUNDLGNBQUEsRUFBZ0JDLGlCQUFBLElBQXFCMUIsUUFBQSxDQUFTLE1BQU07RUFFM0QsTUFBTTJCLFdBQUEsR0FBYyxDQUNsQjtJQUFFQyxJQUFBLEVBQU0sZUFBQXhCLE9BQUEsQ0FBQ1EsbUJBQUEsRUFBRCxFQUF1Qjs7Ozs7SUFBRWlCLElBQUEsRUFBTTtHQUFTLEVBQ2hEO0lBQUVELElBQUEsRUFBTSxlQUFBeEIsT0FBQSxDQUFDRixpQkFBQSxFQUFEO01BQW1CQyxTQUFBLEVBQVU7SUFBQSxDQUFZOzs7OztJQUFFMEIsSUFBQSxFQUFNO0dBQVMsRUFDbEU7SUFBRUQsSUFBQSxFQUFNLGVBQUF4QixPQUFBLENBQUNhLFVBQUEsRUFBRCxFQUFjOzs7OztJQUFFWSxJQUFBLEVBQU07R0FBUyxFQUN2QztJQUFFRCxJQUFBLEVBQU0sZUFBQXhCLE9BQUEsQ0FBQ2MsUUFBQSxFQUFELEVBQVk7Ozs7O0lBQUVXLElBQUEsRUFBTTtHQUFrQixFQUM5QztJQUFFRCxJQUFBLEVBQU0sZUFBQXhCLE9BQUEsQ0FBQ2UsU0FBQSxFQUFELEVBQWE7Ozs7O0lBQUVVLElBQUEsRUFBTTtHQUFhLENBQzNDO0VBRUQsTUFBTUMsUUFBQSxHQUFXLENBQ2Y7SUFBRUMsRUFBQSxFQUFJO0lBQVlGLElBQUEsRUFBTTtHQUFXLEVBQ25DO0lBQUVFLEVBQUEsRUFBSTtJQUFhRixJQUFBLEVBQU07R0FBWSxFQUNyQztJQUFFRSxFQUFBLEVBQUk7SUFBWUYsSUFBQSxFQUFNO0dBQVcsRUFDbkM7SUFBRUUsRUFBQSxFQUFJO0lBQUtGLElBQUEsRUFBTTtHQUFPLENBQ3pCO0VBRUQsTUFBTUcsWUFBQSxHQUFlLG9IQUFvSEMsS0FBQSxDQUFNLE1BQU07RUFFckosT0FDRSxlQUFBN0IsT0FBQSxDQUFDLFVBQUQ7SUFBUUQsU0FBQSxFQUFVO2NBQWxCLENBRUUsZUFBQUMsT0FBQSxDQUFDLE9BQUQ7TUFBS0QsU0FBQSxFQUFVO2dCQUNiLGVBQUFDLE9BQUEsQ0FBQyxPQUFEO1FBQUtELFNBQUEsRUFBVTtrQkFDYixlQUFBQyxPQUFBLENBQUMsT0FBRDtVQUFLRCxTQUFBLEVBQVU7b0JBQWYsQ0FDRSxlQUFBQyxPQUFBLENBQUMsT0FBRDtZQUFLRCxTQUFBLEVBQVU7c0JBQ1p3QixXQUFBLENBQVlPLEdBQUEsRUFBS0MsS0FBQSxFQUFPQyxLQUFBLEtBQ3ZCLGVBQUFoQyxPQUFBLENBQUMsT0FBRDtjQUVFRCxTQUFBLEVBQVU7d0JBRlosQ0FJRSxlQUFBQyxPQUFBLENBQUMsUUFBRDtnQkFBTUQsU0FBQSxFQUFVOzBCQUFrQmdDLEtBQUEsQ0FBTVA7ZUFBWTs7Ozt3QkFDcEQsZUFBQXhCLE9BQUEsQ0FBQyxRQUFEO2dCQUFBaUMsUUFBQSxFQUFPRixLQUFBLENBQU1OO2NBQUEsQ0FBWTs7Ozs7ZUFKcEJPLEtBQUE7Ozs7b0JBS0Q7V0FFSjs7OztvQkFDTixlQUFBaEMsT0FBQSxDQUFDSCxJQUFBLEVBQUQ7WUFDRThCLEVBQUEsRUFBRztZQUNINUIsU0FBQSxFQUFVO3NCQUZaLENBSUUsZUFBQUMsT0FBQSxDQUFDZ0IsU0FBQSxFQUFEO2NBQVdqQixTQUFBLEVBQVU7WUFBQSxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7T0FJakM7Ozs7O0tBQ0Y7Ozs7Y0FHTixlQUFBQyxPQUFBLENBQUMsT0FBRDtNQUFLRCxTQUFBLEVBQVU7Z0JBQWYsQ0FDRSxlQUFBQyxPQUFBLENBQUMsT0FBRDtRQUFLRCxTQUFBLEVBQVU7a0JBQ2IsZUFBQUMsT0FBQSxDQUFDLE9BQUQ7VUFBS0QsU0FBQSxFQUFVO29CQUFmLENBRUUsZUFBQUMsT0FBQSxDQUFDSCxJQUFBLEVBQUQ7WUFBTThCLEVBQUEsRUFBRztZQUFJNUIsU0FBQSxFQUFVO3NCQUNyQixlQUFBQyxPQUFBLENBQUMsT0FBRDtjQUNFa0MsR0FBQSxFQUFJO2NBQ0pDLEdBQUEsRUFBSTtjQUNKcEMsU0FBQSxFQUFVO2FBQ1Y7Ozs7O1dBQ0c7Ozs7b0JBR1AsZUFBQUMsT0FBQSxDQUFDLE9BQUQ7WUFBS0QsU0FBQSxFQUFVO3NCQUNaMkIsUUFBQSxDQUFTSSxHQUFBLENBQUtNLElBQUEsSUFDYixlQUFBcEMsT0FBQSxDQUFDSCxJQUFBLEVBQUQ7Y0FFRThCLEVBQUEsRUFBSVMsSUFBQSxDQUFLVCxFQUFBO2NBQ1Q1QixTQUFBLEVBQVU7d0JBSFosQ0FLR3FDLElBQUEsQ0FBS1gsSUFBQSxFQUNOLGVBQUF6QixPQUFBLENBQUMsUUFBRDtnQkFBTUQsU0FBQSxFQUFVO2NBQUEsQ0FBNEY7Ozs7O2VBTHZHcUMsSUFBQSxDQUFLVCxFQUFBOzs7O29CQU1MO1dBRUw7Ozs7b0JBR04sZUFBQTNCLE9BQUEsQ0FBQyxVQUFEO1lBQ0VELFNBQUEsRUFBVTtZQUNWc0MsT0FBQSxFQUFBQSxDQUFBLEtBQWVmLGlCQUFBLENBQWtCLENBQUNELGNBQUEsQ0FBZTtZQUNqRCxjQUFXO3NCQUVWQSxjQUFBLEdBQWlCLGVBQUFyQixPQUFBLENBQUNrQixTQUFBLEVBQUQsRUFBYTs7Ozt1QkFBRyxlQUFBbEIsT0FBQSxDQUFDaUIsUUFBQSxFQUFELEVBQVk7Ozs7O1dBQ3ZDOzs7Ozs7Ozs7O09BRVA7Ozs7Z0JBR04sZUFBQWpCLE9BQUEsQ0FBQyxPQUFEO1FBQUtELFNBQUEsRUFBVyx5QkFBeUJzQixjQUFBLEdBQWlCLFNBQVM7a0JBQ2pFLGVBQUFyQixPQUFBLENBQUMsT0FBRDtVQUFLRCxTQUFBLEVBQVU7b0JBQ2IsZUFBQUMsT0FBQSxDQUFDLE9BQUQ7WUFBS0QsU0FBQSxFQUFVO3NCQUFmLENBQ0cyQixRQUFBLENBQVNJLEdBQUEsQ0FBS00sSUFBQSxJQUNiLGVBQUFwQyxPQUFBLENBQUNILElBQUEsRUFBRDtjQUVFOEIsRUFBQSxFQUFJUyxJQUFBLENBQUtULEVBQUE7Y0FDVDVCLFNBQUEsRUFBVTtjQUNWc0MsT0FBQSxFQUFBQSxDQUFBLEtBQWVmLGlCQUFBLENBQWtCLE1BQU07d0JBRXRDYyxJQUFBLENBQUtYO2FBQ0QsRUFOQVcsSUFBQSxDQUFLVCxFQUFBOzs7O29CQU1MLENBQ1AsRUFDRixlQUFBM0IsT0FBQSxDQUFDSCxJQUFBLEVBQUQ7Y0FDRThCLEVBQUEsRUFBRztjQUNINUIsU0FBQSxFQUFVO2NBQ1ZzQyxPQUFBLEVBQUFBLENBQUEsS0FBZWYsaUJBQUEsQ0FBa0IsTUFBTTt3QkFIekMsQ0FLRSxlQUFBdEIsT0FBQSxDQUFDZ0IsU0FBQSxFQUFEO2dCQUFXakIsU0FBQSxFQUFVO2NBQUEsQ0FBWTs7Ozs7Ozs7Ozs7Ozs7O1NBSWpDOzs7OztPQUNGOzs7Ozs7Ozs7Y0FJUixlQUFBQyxPQUFBLENBQUMsT0FBRDtNQUFLRCxTQUFBLEVBQVU7Z0JBQ2IsZUFBQUMsT0FBQSxDQUFDLE9BQUQ7UUFBS0QsU0FBQSxFQUFVO2tCQUNaLENBQUMsR0FBRzZCLFlBQUEsRUFBYyxHQUFHQSxZQUFBLEVBQWMsR0FBR0EsWUFBQSxDQUFhLENBQUNFLEdBQUEsRUFBS1EsSUFBQSxFQUFNTixLQUFBLEtBQzlELGVBQUFoQyxPQUFBLENBQUMsT0FBRDtVQUVFRCxTQUFBLEVBQVU7b0JBRlosQ0FJRSxlQUFBQyxPQUFBLENBQUNGLGlCQUFBLEVBQUQ7WUFBbUJDLFNBQUEsRUFBVTtVQUFBLENBQVk7Ozs7b0JBQ3pDLGVBQUFDLE9BQUEsQ0FBQyxRQUFEO1lBQUFpQyxRQUFBLEVBQU9LO1VBQUEsQ0FBWTs7Ozs7V0FKZE4sS0FBQTs7OztnQkFLRDtPQUVKOzs7OztLQUNGOzs7Ozs7Ozs7OztHQTlIWWIsTUFBQTtBQUFBb0IsR0FBQSxHQUFBcEIsTUFBQTtBQUFBLElBQUFxQixFQUFBLEVBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQVIsR0FBQTtBQUFBUyxZQUFBLENBQUFSLEVBQUE7QUFBQVEsWUFBQSxDQUFBUCxHQUFBO0FBQUFPLFlBQUEsQ0FBQU4sR0FBQTtBQUFBTSxZQUFBLENBQUFMLEdBQUE7QUFBQUssWUFBQSxDQUFBSixHQUFBO0FBQUFJLFlBQUEsQ0FBQUgsR0FBQTtBQUFBRyxZQUFBLENBQUFGLEdBQUE7QUFBQUUsWUFBQSxDQUFBRCxHQUFBO0FBQUFDLFlBQUEsQ0FBQVQsR0FBQSIsIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsIkxpZ2h0bmluZ0JvbHRJY29uIiwiY2xhc3NOYW1lIiwiX2pzeERFViIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJkIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lam9pbiIsIkNoZWNrbWFya0NpcmNsZUljb24iLCJjeCIsImN5IiwiciIsInN0cm9rZUxpbmVjYXAiLCJTaGllbGRJY29uIiwiU3Rhckljb24iLCJDbG9ja0ljb24iLCJQaG9uZUljb24iLCJNZW51SWNvbiIsIkNsb3NlSWNvbiIsIkhlYWRlciIsIl9zIiwibW9iaWxlTWVudU9wZW4iLCJzZXRNb2JpbGVNZW51T3BlbiIsInRydXN0QmFkZ2VzIiwiaWNvbiIsInRleHQiLCJuYXZMaW5rcyIsInRvIiwibWFycXVlZUl0ZW1zIiwic3BsaXQiLCJtYXAiLCJiYWRnZSIsImluZGV4IiwiY2hpbGRyZW4iLCJzcmMiLCJhbHQiLCJsaW5rIiwib25DbGljayIsIml0ZW0iLCJfYzkiLCJfYyIsIl9jMiIsIl9jMyIsIl9jNCIsIl9jNSIsIl9jNiIsIl9jNyIsIl9jOCIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJIZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuXG4vLyBTVkcgSWNvbnNcbmNvbnN0IExpZ2h0bmluZ0JvbHRJY29uID0gKHsgY2xhc3NOYW1lID0gXCJ3LTYgaC02XCIgfTogeyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0xOCAyTDYgMThIMTZMMTQgMzBMMjYgMTRIMTZMMTggMlpcIiBmaWxsPVwiI0ZGRDcwMFwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IENoZWNrbWFya0NpcmNsZUljb24gPSAoeyBjbGFzc05hbWUgPSBcInctNSBoLTVcIiB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiAoXG4gIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiLz5cbiAgICA8cGF0aCBkPVwiTTggMTJMMTEgMTVMMTYgOVwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IFNoaWVsZEljb24gPSAoeyBjbGFzc05hbWUgPSBcInctNSBoLTVcIiB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiAoXG4gIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEyIDJMNCA2VjEyQzQgMTYuNDE4MyA3LjU4MTcyIDIwIDEyIDIwQzE2LjQxODMgMjAgMjAgMTYuNDE4MyAyMCAxMlY2TDEyIDJaXCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIi8+XG4gICAgPHBhdGggZD1cIk05IDEyTDExIDE0TDE1IDEwXCIgc3Ryb2tlPVwiI0ZGRDcwMFwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIi8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgU3Rhckljb24gPSAoeyBjbGFzc05hbWUgPSBcInctNSBoLTVcIiB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiAoXG4gIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiI0ZGRDcwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEyIDJMMTUuMDkgOC4yNkwyMiA5LjI3TDE3IDE0LjE0TDE4LjE4IDIxLjAyTDEyIDE3Ljc3TDUuODIgMjEuMDJMNyAxNC4xNEwyIDkuMjdMOC45MSA4LjI2TDEyIDJaXCIvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IENsb2NrSWNvbiA9ICh7IGNsYXNzTmFtZSA9IFwidy01IGgtNVwiIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBzdHJva2U9XCIjRkZENzAwXCIgc3Ryb2tlV2lkdGg9XCIyXCIvPlxuICAgIDxwYXRoIGQ9XCJNMTIgNlYxMkwxNiAxNFwiIHN0cm9rZT1cIiNGRkQ3MDBcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIi8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgUGhvbmVJY29uID0gKHsgY2xhc3NOYW1lID0gXCJ3LTUgaC01XCIgfTogeyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0yMiAxNi45MlYxOS45MkMyMiAyMC40OCAyMS41IDIwLjk4IDIwLjk0IDIwLjk5QzEwLjA1IDIxLjAyIDAuOTggMTEuOTUgMS4wMSAxLjA2QzEuMDEgMC41IDEuNTEgMCAyLjA3IDBINS4wN0M1LjU3IDAgNi4wMiAwLjM3IDYuMTIgMC44N0w3LjYyIDcuOTFDNy43MyA4LjQ3IDcuNDMgOS4wNCA2Ljk0IDkuMzNMNC4xNyAxMUM2LjA4IDE1LjI3IDkuNzMgMTguOTIgMTQgMjAuODNMMTYuNjcgMTguMDZDMTYuOTYgMTcuNTcgMTcuNTMgMTcuMjcgMTguMDkgMTcuMzhMMjUuMTMgMTguODhDMjUuNjMgMTguOTggMjYgMTkuNDMgMjYgMTkuOTNWMTYuOTJDMjYgMTYuNDIgMjUuNjIgMTUuOTcgMjUuMTMgMTUuODdMMjIgMTYuOTJaXCIgZmlsbD1cIiNGRkQ3MDBcIi8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgTWVudUljb24gPSAoeyBjbGFzc05hbWUgPSBcInctNiBoLTZcIiB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiAoXG4gIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTMgMTJIMjFNMyA2SDIxTTMgMThIMjFcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIi8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgQ2xvc2VJY29uID0gKHsgY2xhc3NOYW1lID0gXCJ3LTYgaC02XCIgfTogeyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0xOCA2TDYgMThNNiA2TDE4IDE4XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW21vYmlsZU1lbnVPcGVuLCBzZXRNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdHJ1c3RCYWRnZXMgPSBbXG4gICAgeyBpY29uOiA8Q2hlY2ttYXJrQ2lyY2xlSWNvbiAvPiwgdGV4dDogXCLXnteV16HXnteaXCIgfSxcbiAgICB7IGljb246IDxMaWdodG5pbmdCb2x0SWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4sIHRleHQ6IFwi157XoNeV16HXlFwiIH0sXG4gICAgeyBpY29uOiA8U2hpZWxkSWNvbiAvPiwgdGV4dDogXCLXnteR15XXmNeXXCIgfSxcbiAgICB7IGljb246IDxTdGFySWNvbiAvPiwgdGV4dDogXCLXnteT15XXqNeSIDUg15vXldeb15HXmdedXCIgfSxcbiAgICB7IGljb246IDxDbG9ja0ljb24gLz4sIHRleHQ6IFwi15bXnteZ158gMjQvN1wiIH0sXG4gIF07XG5cbiAgY29uc3QgbmF2TGlua3MgPSBbXG4gICAgeyB0bzogXCIv16bXldeoLden16nXqFwiLCB0ZXh0OiBcItem15XXqCDXp9ep16hcIiB9LFxuICAgIHsgdG86IFwiL9ek16jXldeZ16fXmNeZ151cIiwgdGV4dDogXCLXpNeo15XXmden15jXmdedXCIgfSxcbiAgICB7IHRvOiBcIi/XqdeZ16jXldeq15nXnVwiLCB0ZXh0OiBcItep15nXqNeV16rXmdedXCIgfSxcbiAgICB7IHRvOiBcIi9cIiwgdGV4dDogXCLXkdeZ16pcIiB9LFxuICBdO1xuXG4gIGNvbnN0IG1hcnF1ZWVJdGVtcyA9IFwi15bXnteZ16DXmdedIDI0INep16LXldeqINeR15nXntee15Qg4oCUINeq15nXp9eV158g16rXp9ec15XXqiDXl9ep157XnCwg15TXqten16DXldeqLCDXnNeV15fXldeqINeX16nXntecIOKAlCDXnteX15nXqNeZ150g15TXldeS16DXmdedIOKAlCDXnteV16jXqdeUINeV157XkdeV15jXlyDigJQg157XotecIDgwMCDXoteR15XXk9eV16og15HXldem16LXlVwiLnNwbGl0KFwiIOKAlCBcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTUwXCI+XG4gICAgICB7LyogVHJ1c3QgYmFkZ2VzIGJhciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMyRDJEMkRdIGJvcmRlci1iIGJvcmRlci1bI0ZGRDcwMF0vMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0yIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBtZDpnYXAtNlwiPlxuICAgICAgICAgICAgICB7dHJ1c3RCYWRnZXMubWFwKChiYWRnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1bI0Y1RjVGNV0gd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNGRkQ3MDBdXCI+e2JhZGdlLmljb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2JhZGdlLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIv16bXldeoLden16nXqFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1bI0ZGRDcwMF0gdGV4dC1bIzFBMUExQV0gcHgtNCBweS0yIHJvdW5kZWQgZm9udC1ib2xkIGhvdmVyOmJnLVsjMDBCRkZGXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQaG9uZUljb24gY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgINeU16rXp9ep16gg16LXm9ep15nXlVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTWFpbiBuYXZiYXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMUExQTFBXSBjaXJjdWl0LXBhdHRlcm4gc2hhZG93LWxnIHNoYWRvdy1ibGFjay81MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTRcIj5cbiAgICAgICAgICAgIHsvKiBMb2dvICovfVxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYXNzZXRzLmxzLWFzc2V0cy5jb20vdXBsb2Fkcy8xOTc1NGM4NS04YjhlLTQxNTYtOWJlMy0zNmU4NTJlYTU0OTcvZmZhNTBmMDktY2IxNS00N2Q3LWI1MWEtZDQ4ODg5NThjZTZmLnBuZz93PTc2OFwiXG4gICAgICAgICAgICAgICAgYWx0PVwi15fXqdee15zXkNeZINec15XXkteVXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTE0IG1kOmgtMTZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICB7LyogRGVza3RvcCBOYXZpZ2F0aW9uICovfVxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLThcIj5cbiAgICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBrZXk9e2xpbmsudG99XG4gICAgICAgICAgICAgICAgICB0bz17bGluay50b31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWyNGNUY1RjVdIGZvbnQtYm9sZCB0ZXh0LWxnIGhvdmVyOnRleHQtWyNGRkQ3MDBdIHRyYW5zaXRpb24tY29sb3JzIHJlbGF0aXZlIGdyb3VwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGluay50ZXh0fVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCB3LTAgaC0wLjUgYmctWyNGRkQ3MDBdIHRyYW5zaXRpb24tYWxsIGdyb3VwLWhvdmVyOnctZnVsbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIHsvKiBNb2JpbGUgbWVudSBidXR0b24gKi99XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmhpZGRlbiB0ZXh0LVsjRjVGNUY1XSBwLTJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVNZW51T3BlbighbW9iaWxlTWVudU9wZW4pfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi16rXpNeo15nXmFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttb2JpbGVNZW51T3BlbiA/IDxDbG9zZUljb24gLz4gOiA8TWVudUljb24gLz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1vYmlsZSBOYXZpZ2F0aW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vYmlsZS1tZW51IGxnOmhpZGRlbiAke21vYmlsZU1lbnVPcGVuID8gXCJvcGVuXCIgOiBcIlwifWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHBiLTRcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGtleT17bGluay50b31cbiAgICAgICAgICAgICAgICAgIHRvPXtsaW5rLnRvfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bI0Y1RjVGNV0gZm9udC1ib2xkIHRleHQtbGcgaG92ZXI6dGV4dC1bI0ZGRDcwMF0gdHJhbnNpdGlvbi1jb2xvcnMgcHktMiBib3JkZXItYiBib3JkZXItWyMyRDJEMkRdXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGluay50ZXh0fVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIv16bXldeoLden16nXqFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgYmctWyNGRkQ3MDBdIHRleHQtWyMxQTFBMUFdIHB4LTQgcHktMyByb3VuZGVkIGZvbnQtYm9sZCBob3ZlcjpiZy1bIzAwQkZGRl0gdHJhbnNpdGlvbi1jb2xvcnMgbXQtMlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBob25lSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICDXlNeq16fXqdeoINei15vXqdeZ15VcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBNYXJxdWVlIHRpY2tlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNGRkQ3MDBdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYW5pbWF0ZS1tYXJxdWVlXCI+XG4gICAgICAgICAge1suLi5tYXJxdWVlSXRlbXMsIC4uLm1hcnF1ZWVJdGVtcywgLi4ubWFycXVlZUl0ZW1zXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHB4LTggcHktMiB0ZXh0LVsjMUExQTFBXSBmb250LWJvbGQgd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGlnaHRuaW5nQm9sdEljb24gY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufSJdLCJmaWxlIjoiL2hvbWUvdXNlci93ZWJzaXRlL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3gifQ==