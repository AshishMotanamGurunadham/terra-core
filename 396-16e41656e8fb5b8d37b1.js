(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1369:function(e,r,t){"use strict";t.r(r);var l=t(0),n=t.n(l),a=t(872);r.default=function(){return n.a.createElement("div",null,n.a.createElement(a.a,{key:"cell-0"},"Default Cell"),n.a.createElement(a.a,{key:"cell-1",width:{scalar:2}},"Scalar 2"),n.a.createElement(a.a,{key:"cell-2",width:{scalar:3}},"Scalar 3"),n.a.createElement(a.a,{key:"cell-3",width:{static:{value:50,unit:"px"}}},"Static Cell"),n.a.createElement(a.a,{key:"cell-4",width:{percentage:20}},"20% Cell"))}},872:function(e,r,t){"use strict";t.d(r,"a",(function(){return j}));var l=t(0),n=t.n(l),a=t(1),i=t.n(a),c=t(10),o=t.n(c),u=t(4),d=t.n(u),s=t(6),f=t.n(s);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function h(e,r){if(null==e)return{};var t,l,n=function(e,r){if(null==e)return{};var t,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var v=d.a.bind({"clinical-lowlight-theme":"CellGrid-module__clinical-lowlight-theme___1n7Ir","orion-fusion-theme":"CellGrid-module__orion-fusion-theme___2uXAE","cell-grid":"CellGrid-module__cell-grid___3unhf","divider-horizontal":"CellGrid-module__divider-horizontal___1cOi-","divider-both":"CellGrid-module__divider-both___1F-r3","divider-vertical":"CellGrid-module__divider-vertical___3ijcx"}),m={children:i.a.node.isRequired,dividerStyle:i.a.oneOf(["vertical","horizontal","both"]),refCallback:i.a.func},b=function(e){var r=e.children,t=e.dividerStyle,l=e.refCallback,a=h(e,["children","dividerStyle","refCallback"]),i=n.a.useContext(f.a),c=t?"divider-".concat(t):void 0,u=o()(v("cell-grid",c,i.className),a.className);return n.a.createElement("div",p({},a,{className:u,ref:l}),r)};b.propTypes=m;var _=b,y=function(e){return{msFlex:"0 0 0px",flex:"0 0 0px",maxWidth:e,minWidth:e}},O=function(e){if(e)return e.static?y("".concat(e.static.value).concat(e.static.unit)):e.percentage?y("".concat(e.percentage,"%")):e.scalar?function(e){return{msFlex:"".concat(e," ").concat(e," 0px"),flex:"".concat(e," ").concat(e," 0px")}}(e.scalar):void 0};function g(){return(g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function w(e,r){if(null==e)return{};var t,l,n=function(e,r){if(null==e)return{};var t,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var C=d.a.bind({cell:"Cell-module__cell___3HPnv"}),x={children:i.a.node,refCallback:i.a.func,width:i.a.shape({static:i.a.shape({value:i.a.number.isRequired,unit:i.a.string.isRequired}),percentage:i.a.number,scalar:i.a.number})},k=function(e){var r=e.children,t=e.refCallback,l=e.width,a=w(e,["children","refCallback","width"]),i=C(["cell"]);return n.a.createElement("div",g({},a,{style:O(l),className:a.className?"".concat(i," ").concat(a.className):i,ref:t}),r)};k.propTypes=x,k.defaultProps={children:[]};var j=k;r.b=_}}]);