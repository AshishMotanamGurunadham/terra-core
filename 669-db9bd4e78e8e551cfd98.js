(window.webpackJsonp=window.webpackJsonp||[]).push([[669],{1917:function(e,t,i){"use strict";i.r(t);var r=i(0),n=i.n(r),u=i(4),o=i.n(u),s=i(129);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=d(e);if(t){var n=d(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return f(this,i)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=o.a.bind({"scroll-wrapper":"DefaultTest-module__scroll-wrapper___3sE-x"}),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(o,e);var t,i,r,u=m(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=u.call(this,e)).setNode=t.setNode.bind(p(t)),t.toggleScroll=t.toggleScroll.bind(p(t)),t}return t=o,(i=[{key:"setNode",value:function(e){this.scrollNode=e}},{key:"toggleScroll",value:function(){this.scrollNode&&(this.scrollNode.scrollTop=this.scrollNode.scrollTop>0?0:1e3)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("button",{type:"button",id:"scroll",onClick:this.toggleScroll},"Scroll"),n.a.createElement("div",{className:b("scroll-wrapper")},n.a.createElement(s.default,{id:"scroll-test",refCallback:this.setNode},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis dapibus erat, eget facilisis nunc ornare in. Vestibulum ut posuere neque. Maecenas nibh lacus, euismod sit amet magna sit amet, porttitor sollicitudin sapien. Vivamus nec lacus vel tortor ultrices efficitur vitae sit amet ipsum. Suspendisse risus eros, faucibus eget mattis in, tincidunt id urna. Integer eget urna quis nisi luctus posuere. Fusce molestie dignissim neque interdum ultrices. Donec porta condimentum quam, at molestie velit scelerisque vitae. Suspendisse eleifend lectus sit amet nunc posuere, sed placerat dolor laoreet. Etiam tempus lacinia purus, ac porttitor nisl posuere eget. Aenean nulla tellus, lacinia eget tortor vel, tempus fermentum ex. Nullam massa nisl, consequat at lorem non, dignissim vehicula mauris. Morbi ultrices mauris ipsum, eu tempor quam luctus id. Curabitur ultrices nunc ultrices, commodo lorem eget, vulputate urna. Quisque porttitor nisi vel diam vulputate vehicula eu quis lacus. Nunc eget aliquam elit. Vivamus dictum mi molestie, tristique est sit amet, pellentesque urna. Etiam arcu felis, pulvinar et lorem et, efficitur ultricies urna. Nunc lacinia pellentesque turpis sit amet egestas. Vivamus ut ex efficitur, egestas lectus sit amet, gravida magna. Vivamus suscipit, erat vitae commodo fermentum, massa dolor egestas arcu, a sollicitudin sem risus eu quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In maximus nunc tempus magna iaculis porttitor.")))}}])&&l(t.prototype,i),r&&l(t,r),o}(n.a.Component);t.default=y}}]);