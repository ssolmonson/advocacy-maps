(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[2],{"/0+H":function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(n.default.useContext(o.AmpStateContext))};var r,n=(r=a("q1tI"))&&r.__esModule?r:{default:r},o=a("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,r=e.hybrid,n=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return a||n&&i}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"48fX":function(e,t,a){var r=a("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,a){var r=a("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}},"8Kt/":function(e,t,a){"use strict";a("oI91");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=r?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(a,n,o):a[n]=e[n]}a.default=e,t&&t.set(e,a);return a}(a("q1tI")),o=(r=a("Xuae"))&&r.__esModule?r:{default:r},i=a("lwAK"),c=a("FYa8"),s=a("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var a=n.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,r={};return function(n){var o=!0;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){var i=n.key.slice(n.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(n.type){case"title":case"base":t.has(n.type)?o=!1:t.add(n.type);break;case"meta":for(var c=0,s=f.length;c<s;c++){var u=f[c];if(n.props.hasOwnProperty(u))if("charSet"===u)a.has(u)?o=!1:a.add(u);else{var d=n.props[u],l=r[u]||new Set;l.has(d)?o=!1:(l.add(d),r[u]=l)}}}return o}}()).reverse().map((function(e,t){var a=e.key||t;return n.default.cloneElement(e,{key:a})}))}function m(e){var t=e.children,a=(0,n.useContext)(i.AmpStateContext),r=(0,n.useContext)(c.HeadManagerContext);return n.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(a)},t)}m.rewind=function(){};var h=m;t.default=h},"C+bE":function(e,t){function a(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=a=function(e){return typeof e}:e.exports=a=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}e.exports=a},FYa8:function(e,t,a){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var n=((r=a("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=n},KckH:function(e,t,a){var r=a("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}},Qetd:function(e,t,a){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},T0f4:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},WnM3:function(e,t,a){"use strict";var r=a("nKUr"),n=(a("q1tI"),a("g4pe")),o=a.n(n),i=a("j72l"),c=a.n(i);var s=a("yly6"),u=a.n(s),d=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),Object(r.jsxs)("div",{className:u.a.sideNavBar,children:[Object(r.jsx)("div",{className:u.a.sideNavBarLogo,children:Object(r.jsxs)("a",{className:u.a.sideNavBarLogoHeader,href:"/",children:[Object(r.jsx)("div",{children:"GGP"}),Object(r.jsx)("div",{className:u.a.sideNavBarLogoText,children:"Boston College Clough Center for Constitutional Democracy"})]})}),Object(r.jsxs)("div",{className:u.a.sideNavBarAllItems,children:[Object(r.jsx)("div",{className:u.a.sideNavBarItem,children:Object(r.jsx)("a",{href:"/democracy-maps",children:"Democracy Maps"})}),Object(r.jsx)("div",{className:u.a.sideNavBarItemAccent,children:Object(r.jsx)("a",{href:"/",children:"2021 Priorities"})}),Object(r.jsxs)("ul",{className:u.a.sideNavBarItemsList,children:[Object(r.jsx)("li",{className:u.a.sideNavBarSubItem,children:Object(r.jsx)("a",{href:"/election-day-registration",children:"Same Day Registration"})}),Object(r.jsx)("li",{className:u.a.sideNavBarSubItem,children:Object(r.jsx)("a",{href:"/early-mail-voting",children:"No-Excuse Absentee Voting"})}),Object(r.jsx)("li",{className:u.a.sideNavBarSubItem,children:Object(r.jsx)("a",{href:"/campaign-finance",children:"Publicly Financed Campaigns"})})]}),Object(r.jsx)("div",{className:u.a.sideNavBarItem,children:Object(r.jsx)("a",{href:"/other-legislative-endorsements",children:"Other Endorsements"})}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:u.a.sideNavBarItem,children:Object(r.jsx)("a",{href:"/about",children:"About"})}),Object(r.jsx)("div",{className:u.a.sideNavBarItem,children:Object(r.jsx)("a",{href:"/disclaimer",children:"Disclaimer"})}),Object(r.jsx)("div",{className:u.a.sideNavBarItem,children:Object(r.jsx)("a",{href:"mailto: GGP.BCLaw@gmail.com",children:"Contact Us"})})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:u.a.sideNavBarItem,children:[Object(r.jsx)("p",{children:"Professors, student groups, public officials, for-profits and non-profits can add their position to our map:"}),Object(r.jsx)("p",{children:Object(r.jsxs)("a",{className:u.a.actionButton,target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSfpwQoQV2MpIVbaKdIB2D6DKnrxnU4u_MZbFpXBaQgvmcRclg/viewform?usp=sf_link",children:["Add your voice \xa0",Object(r.jsx)("i",{className:"fa fa-comment"})]})}),Object(r.jsx)("br",{}),Object(r.jsx)("hr",{}),Object(r.jsxs)("p",{className:u.a.betaThoughts,children:['This platform is in "beta" \u2013 Please provide your thoughts on it via our ',Object(r.jsx)("a",{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSf8R24Ocv_z8F2pUSu6Pp0JxeJsh0-hA_20gTR4Xgg2LR_BYQ/viewform",children:"feedback form"}),"."]})]})]})};t.a=function(e){var t=e.pageTitle,a=void 0===t?"Easy To Do Good":t,n=e.children,i=e.title,s=void 0===i?"Easy To Do Good":i;return Object(r.jsxs)("div",{className:c.a.container,children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{children:s}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(r.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),Object(r.jsxs)("div",{className:c.a.newLayoutFlex,children:[Object(r.jsx)("div",{className:c.a.newLayoutSideNav,children:Object(r.jsx)(d,{})}),Object(r.jsxs)("section",{className:c.a.newLayoutContent,children:[Object(r.jsx)("div",{className:c.a.imageHeader,children:Object(r.jsx)("div",{className:c.a.imageText,children:a})}),Object(r.jsx)("div",{className:c.a.children,children:n}),Object(r.jsx)("div",{className:c.a.democracyPower,children:"Powered By Democracy"})]})]})]})}},Xuae:function(e,t,a){"use strict";var r=a("mPvQ"),n=a("/GRZ"),o=a("i2R6"),i=(a("qXWd"),a("48fX")),c=a("tCBg"),s=a("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=s(e);if(t){var n=s(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return c(this,a)}}t.__esModule=!0,t.default=void 0;var d=a("q1tI"),l=function(e){i(a,e);var t=u(a);function a(e){var o;return n(this,a),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(a,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),a}(d.Component);t.default=l},g4pe:function(e,t,a){e.exports=a("8Kt/")},i2R6:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}},j72l:function(e,t,a){e.exports={container:"NewLayout_container__fj9KC",imageHeader:"NewLayout_imageHeader__1YnFu",imageText:"NewLayout_imageText__1i77R",newLayoutFlex:"NewLayout_newLayoutFlex__1K1wv",newLayoutSideNav:"NewLayout_newLayoutSideNav__HOuWd",newLayoutContent:"NewLayout_newLayoutContent__NsPvB",democracyPower:"NewLayout_democracyPower__1vxSt",children:"NewLayout_children__1Mzb2"}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,a){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var n=((r=a("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=n},mPvQ:function(e,t,a){var r=a("5fIB"),n=a("rlHP"),o=a("KckH"),i=a("kG2m");e.exports=function(e){return r(e)||n(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function a(t,r){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,r)}e.exports=a},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,a){var r=a("C+bE"),n=a("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?n(e):t}},yly6:function(e,t,a){e.exports={sideNavBar:"SideNavBar_sideNavBar__1DKKb",sideNavBarLogo:"SideNavBar_sideNavBarLogo__2ocYO",sideNavBarLogoHeader:"SideNavBar_sideNavBarLogoHeader__2dKjL",sideNavBarLogoText:"SideNavBar_sideNavBarLogoText__17w6V",sideNavBarAllItems:"SideNavBar_sideNavBarAllItems__3N1DO",sideNavBarItem:"SideNavBar_sideNavBarItem__3KVEj",sideNavBarItemAccent:"SideNavBar_sideNavBarItemAccent__4jB6Q",sideNavBarSubItemList:"SideNavBar_sideNavBarSubItemList__3FRy2",sideNavBarSubItem:"SideNavBar_sideNavBarSubItem__H_Iga",actionButton:"SideNavBar_actionButton__JdiJI",betaThoughts:"SideNavBar_betaThoughts__Z2e3h"}}}]);