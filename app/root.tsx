import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/app/root.tsx");import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false};const useEffect = __vite__cjsImport4_react["useEffect"];const _jsxDEV = __vite__cjsImport8_react_jsxDevRuntime["jsxDEV"];import RefreshRuntime from "/@id/__x00__virtual:react-router/hmr-runtime";const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;let prevRefreshReg;let prevRefreshSig;if (import.meta.hot && !inWebWorker) {  if (!window.__vite_plugin_react_preamble_installed__) {    throw new Error(      "React Router Vite plugin can't detect preamble. Something is wrong."    );  }  prevRefreshReg = window.$RefreshReg$;  prevRefreshSig = window.$RefreshSig$;  window.$RefreshReg$ = (type, id) => {    RefreshRuntime.register(type, "/home/user/website/app/root.tsx" + " " + id)  };  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;}var _s = $RefreshSig$();
import { UNSAFE_withComponentProps as _UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps as _UNSAFE_withErrorBoundaryProps } from "/node_modules/.vite/deps/react-router.js?v=14cb8495";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useLocation, useNavigation } from "/node_modules/.vite/deps/react-router.js?v=14cb8495";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=14cb8495";
import "/app/styles/globals.css?t=1779545007033";
import Header from "/app/components/Header.tsx?t=1779544418371";
import Footer from "/app/components/Footer.tsx?t=1779544983913";
var _jsxFileName = "/home/user/website/app/root.tsx";
import __vite__cjsImport8_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=14cb8495";
// Reports client-side navigation state to the parent iframe chrome so the
// preview panel can drive a loading spinner and URL bar. No-op when not
// running inside an iframe (standalone publish, tests).
function NavigationBridge() {
  _s();
  const navigation = useNavigation();
  const location = useLocation();
  useEffect(() => {
    if (typeof window === "undefined" || window.parent === window) return;
    const target = navigation.location;
    const path = navigation.state !== "idle" && target ? `${target.pathname}${target.search}${target.hash}` : `${location.pathname}${location.search}${location.hash}`;
    window.parent.postMessage({
      type: "navigation",
      path,
      state: navigation.state
    }, "*");
  }, [navigation.state, navigation.location, location.pathname, location.search, location.hash]);
  return null;
}
/**
* Root Layout
*
* This is the root layout component that wraps all pages.
* It includes the HTML document structure, global styles,
* and shared components like Header and Footer.
*/
_s(NavigationBridge, "CceJUuM25qmN50iHxqxN8SOyPnM=", false, function () {
  return [useNavigation, useLocation];
});
_c = NavigationBridge;
export const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Heebo:wght@700;900&display=swap"
}];
export function Layout({
  children
}) {
  return /* @__PURE__ */_jsxDEV("html", {
    lang: "he",
    dir: "rtl",
    children: [/* @__PURE__ */_jsxDEV("head", {
      children: [/* @__PURE__ */_jsxDEV("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV(Meta, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV(Links, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("body", {
      children: [children, /* @__PURE__ */_jsxDEV(ScrollRestoration, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /* @__PURE__ */_jsxDEV(Scripts, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
_c2 = Layout;
export default _c4 = _UNSAFE_withComponentProps(_c3 = function App() {
  return /* @__PURE__ */_jsxDEV("div", {
    className: "flex min-h-screen flex-col",
    children: [/* @__PURE__ */_jsxDEV(NavigationBridge, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV(Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("main", {
      className: "flex-1",
      children: /* @__PURE__ */_jsxDEV(Outlet, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV(Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, this);
});
export const ErrorBoundary = _UNSAFE_withErrorBoundaryProps(_c5 = function ErrorBoundary({
  error
}) {
  // Note: 404s are handled by the catch-all route (routes/$.tsx), not this error boundary.
  // This error boundary is for actual errors (500s, etc.).
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }
  return /* @__PURE__ */_jsxDEV("main", {
    className: "container mx-auto p-4 pt-16",
    children: [/* @__PURE__ */_jsxDEV("h1", {
      className: "text-4xl font-bold",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this), /* @__PURE__ */_jsxDEV("p", {
      className: "mt-4",
      children: details
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this), stack && /* @__PURE__ */_jsxDEV("pre", {
      className: "mt-4 w-full overflow-x-auto rounded bg-gray-100 p-4",
      children: /* @__PURE__ */_jsxDEV("code", {
        children: stack
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 5
  }, this);
});
_c6 = ErrorBoundary;
var _c, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "NavigationBridge");
$RefreshReg$(_c2, "Layout");
$RefreshReg$(_c3, "%default%$_UNSAFE_withComponentProps");
$RefreshReg$(_c4, "%default%");
$RefreshReg$(_c5, "ErrorBoundary$_UNSAFE_withErrorBoundaryProps");
$RefreshReg$(_c6, "ErrorBoundary");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/user/website/app/root.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      "root" && window.__reactRouterRouteModuleUpdates.set("root", nextExports);
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports, ["clientAction","clientLoader","clientMiddleware","handle","meta","links","shouldRevalidate"]);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
//# sourceMappingURL=data:application/json;base64,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TUFBQSxDQUFhOzs7OztLQUNoQjs7Ozs7Ozs7Ozs7TUF6QmROLGFBQUE7QUFBQSxJQUFBbEIsRUFBQSxFQUFBZ0MsR0FBQSxFQUFBakIsR0FBQSxFQUFBRixHQUFBLEVBQUFPLEdBQUEsRUFBQWEsR0FBQTtBQUFBQyxZQUFBLENBQUFsQyxFQUFBO0FBQUFrQyxZQUFBLENBQUFGLEdBQUE7QUFBQUUsWUFBQSxDQUFBbkIsR0FBQTtBQUFBbUIsWUFBQSxDQUFBckIsR0FBQTtBQUFBcUIsWUFBQSxDQUFBZCxHQUFBO0FBQUFjLFlBQUEsQ0FBQUQsR0FBQSIsIm5hbWVzIjpbIkxpbmtzIiwiTWV0YSIsIk91dGxldCIsIlNjcmlwdHMiLCJTY3JvbGxSZXN0b3JhdGlvbiIsImlzUm91dGVFcnJvclJlc3BvbnNlIiwidXNlTG9jYXRpb24iLCJ1c2VOYXZpZ2F0aW9uIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwiRm9vdGVyIiwiTmF2aWdhdGlvbkJyaWRnZSIsIl9zIiwibmF2aWdhdGlvbiIsImxvY2F0aW9uIiwid2luZG93IiwicGFyZW50IiwidGFyZ2V0IiwicGF0aCIsInN0YXRlIiwicGF0aG5hbWUiLCJzZWFyY2giLCJoYXNoIiwicG9zdE1lc3NhZ2UiLCJ0eXBlIiwiX2MiLCJsaW5rcyIsInJlbCIsImhyZWYiLCJjcm9zc09yaWdpbiIsIkxheW91dCIsImNoaWxkcmVuIiwiX2pzeERFViIsImxhbmciLCJkaXIiLCJjaGFyU2V0IiwibmFtZSIsImNvbnRlbnQiLCJfYzQiLCJfVU5TQUZFX3dpdGhDb21wb25lbnRQcm9wcyIsIl9jMyIsIkFwcCIsImNsYXNzTmFtZSIsIkVycm9yQm91bmRhcnkiLCJfVU5TQUZFX3dpdGhFcnJvckJvdW5kYXJ5UHJvcHMiLCJfYzUiLCJlcnJvciIsIm1lc3NhZ2UiLCJkZXRhaWxzIiwic3RhY2siLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiaW1wb3J0IiwibWV0YSIsImVudiIsIkRFViIsIkVycm9yIiwiX2MyIiwiX2M2IiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbInJvb3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExpbmtzLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICBpc1JvdXRlRXJyb3JSZXNwb25zZSxcbiAgdXNlTG9jYXRpb24sXG4gIHVzZU5hdmlnYXRpb24sXG59IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBSb3V0ZSB9IGZyb20gXCIuLyt0eXBlcy9yb290XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG4vLyBSZXBvcnRzIGNsaWVudC1zaWRlIG5hdmlnYXRpb24gc3RhdGUgdG8gdGhlIHBhcmVudCBpZnJhbWUgY2hyb21lIHNvIHRoZVxuLy8gcHJldmlldyBwYW5lbCBjYW4gZHJpdmUgYSBsb2FkaW5nIHNwaW5uZXIgYW5kIFVSTCBiYXIuIE5vLW9wIHdoZW4gbm90XG4vLyBydW5uaW5nIGluc2lkZSBhbiBpZnJhbWUgKHN0YW5kYWxvbmUgcHVibGlzaCwgdGVzdHMpLlxuZnVuY3Rpb24gTmF2aWdhdGlvbkJyaWRnZSgpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRpb24oKTtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgd2luZG93LnBhcmVudCA9PT0gd2luZG93KSByZXR1cm47XG5cbiAgICBjb25zdCB0YXJnZXQgPSBuYXZpZ2F0aW9uLmxvY2F0aW9uO1xuICAgIGNvbnN0IHBhdGggPVxuICAgICAgbmF2aWdhdGlvbi5zdGF0ZSAhPT0gXCJpZGxlXCIgJiYgdGFyZ2V0XG4gICAgICAgID8gYCR7dGFyZ2V0LnBhdGhuYW1lfSR7dGFyZ2V0LnNlYXJjaH0ke3RhcmdldC5oYXNofWBcbiAgICAgICAgOiBgJHtsb2NhdGlvbi5wYXRobmFtZX0ke2xvY2F0aW9uLnNlYXJjaH0ke2xvY2F0aW9uLmhhc2h9YDtcblxuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoXG4gICAgICB7IHR5cGU6IFwibmF2aWdhdGlvblwiLCBwYXRoLCBzdGF0ZTogbmF2aWdhdGlvbi5zdGF0ZSB9LFxuICAgICAgXCIqXCIsXG4gICAgKTtcbiAgfSwgW1xuICAgIG5hdmlnYXRpb24uc3RhdGUsXG4gICAgbmF2aWdhdGlvbi5sb2NhdGlvbixcbiAgICBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICBsb2NhdGlvbi5zZWFyY2gsXG4gICAgbG9jYXRpb24uaGFzaCxcbiAgXSk7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUm9vdCBMYXlvdXRcbiAqXG4gKiBUaGlzIGlzIHRoZSByb290IGxheW91dCBjb21wb25lbnQgdGhhdCB3cmFwcyBhbGwgcGFnZXMuXG4gKiBJdCBpbmNsdWRlcyB0aGUgSFRNTCBkb2N1bWVudCBzdHJ1Y3R1cmUsIGdsb2JhbCBzdHlsZXMsXG4gKiBhbmQgc2hhcmVkIGNvbXBvbmVudHMgbGlrZSBIZWFkZXIgYW5kIEZvb3Rlci5cbiAqL1xuXG5leHBvcnQgY29uc3QgbGlua3M6IFJvdXRlLkxpbmtzRnVuY3Rpb24gPSAoKSA9PiBbXG4gIHsgcmVsOiBcInByZWNvbm5lY3RcIiwgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgfSxcbiAge1xuICAgIHJlbDogXCJwcmVjb25uZWN0XCIsXG4gICAgaHJlZjogXCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIsXG4gICAgY3Jvc3NPcmlnaW46IFwiYW5vbnltb3VzXCIsXG4gIH0sXG4gIHtcbiAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IZWVibzp3Z2h0QDcwMDs5MDAmZGlzcGxheT1zd2FwXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiaGVcIiBkaXI9XCJydGxcIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2xcIj5cbiAgICAgIDxOYXZpZ2F0aW9uQnJpZGdlIC8+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IFJvdXRlLkVycm9yQm91bmRhcnlQcm9wcykge1xuICAvLyBOb3RlOiA0MDRzIGFyZSBoYW5kbGVkIGJ5IHRoZSBjYXRjaC1hbGwgcm91dGUgKHJvdXRlcy8kLnRzeCksIG5vdCB0aGlzIGVycm9yIGJvdW5kYXJ5LlxuICAvLyBUaGlzIGVycm9yIGJvdW5kYXJ5IGlzIGZvciBhY3R1YWwgZXJyb3JzICg1MDBzLCBldGMuKS5cbiAgbGV0IG1lc3NhZ2UgPSBcIk9vcHMhXCI7XG4gIGxldCBkZXRhaWxzID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLlwiO1xuICBsZXQgc3RhY2s6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICBpZiAoaXNSb3V0ZUVycm9yUmVzcG9uc2UoZXJyb3IpKSB7XG4gICAgbWVzc2FnZSA9IGVycm9yLnN0YXR1cyA9PT0gNDA0ID8gXCI0MDRcIiA6IFwiRXJyb3JcIjtcbiAgICBkZXRhaWxzID1cbiAgICAgIGVycm9yLnN0YXR1cyA9PT0gNDA0XG4gICAgICAgID8gXCJUaGUgcmVxdWVzdGVkIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kLlwiXG4gICAgICAgIDogZXJyb3Iuc3RhdHVzVGV4dCB8fCBkZXRhaWxzO1xuICB9IGVsc2UgaWYgKGltcG9ydC5tZXRhLmVudi5ERVYgJiYgZXJyb3IgJiYgZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIGRldGFpbHMgPSBlcnJvci5tZXNzYWdlO1xuICAgIHN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNCBwdC0xNlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZFwiPnttZXNzYWdlfTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC00XCI+e2RldGFpbHN9PC9wPlxuICAgICAge3N0YWNrICYmIChcbiAgICAgICAgPHByZSBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBvdmVyZmxvdy14LWF1dG8gcm91bmRlZCBiZy1ncmF5LTEwMCBwLTRcIj5cbiAgICAgICAgICA8Y29kZT57c3RhY2t9PC9jb2RlPlxuICAgICAgICA8L3ByZT5cbiAgICAgICl9XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sImZpbGUiOiIvaG9tZS91c2VyL3dlYnNpdGUvYXBwL3Jvb3QudHN4In0=