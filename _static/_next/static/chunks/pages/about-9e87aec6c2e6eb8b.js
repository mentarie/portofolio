(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8961:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(414)}])},8907:function(e,t,n){"use strict";var r=n(5893),a=n(1664),o=n(1163);t.Z=(0,o.withRouter)((function(e){var t=e.router;return(0,r.jsx)("nav",{className:"navbar",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"logo",children:"Mentari."})}),(0,r.jsx)("ul",{className:"nav-links",children:[{id:1,text:"Home",href:"/"},{id:2,text:"About",href:"/about"},{id:3,text:"Projects",href:"/projects"},{id:4,text:"Journey",href:"/journey"}].map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:e.href,children:(0,r.jsx)("a",{className:"nav-item ".concat(t.pathname==e.href?"active":""),children:e.text})})},e.id)}))})]})})}))},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},i=n(6273),u=n(387),c=n(7190);var l={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=u.useRouter(),f=o.default.useMemo((function(){var t=r(i.resolveHref(a,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?i.resolveHref(a,e.as):o||n}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,x=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var b=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,j=r(c.useIntersection({rootMargin:"200px"}),2),g=j[0],w=j[1],E=o.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);o.default.useEffect((function(){var e=w&&n&&i.isLocalURL(d),t="undefined"!==typeof x?x:a&&a.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(a,d,p,{locale:t})}),[p,d,w,x,n,a]);var N={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:u}))}(e,a,d,p,v,m,y,x)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof x?x:a&&a.locale,L=a&&a.isLocaleDomain&&i.getDomainLocale(p,_,a&&a.locales,a&&a.domainLocales);N.href=L||i.addBasePath(i.addLocale(p,_,a&&a.defaultLocale))}return o.default.cloneElement(t,N)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=a.useRef(),l=r(a.useState(!1),2),s=l[0],f=l[1],d=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),u.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return a.useEffect((function(){if(!i&&!s){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=n(7294),o=n(9311),i="undefined"!==typeof IntersectionObserver;var u=new Map},414:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7294),o=n(8907),i=n(9008);t.default=function(){return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"About"})}),(0,r.jsx)(o.Z,{}),(0,r.jsx)("section",{className:"hero",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"text-wrapper w-full",children:[(0,r.jsx)("h1",{className:"title",children:"About Me"}),(0,r.jsx)("p",{className:"description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})})]})}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);