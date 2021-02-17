(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1793:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n(0),a=n.n(r),l=n(310),o=n(827),c=n(98),m=n(816),i=n(4),s=n.n(i),d=n(841),p=s.a.bind(d.a),u=function(){return a.a.createElement(c.default,null,a.a.createElement(c.Item,{key:"123"},a.a.createElement(m.c,{title:"Item 0",className:p("placeholder")})),a.a.createElement(c.Item,{key:"124"},a.a.createElement(m.c,{title:"Item 1",className:p("placeholder")})),a.a.createElement(c.Item,{key:"125"},a.a.createElement(m.c,{title:"Item 2",className:p("placeholder")})))};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x={};function y(e){var t=e.components,n=f(e,["components"]);return Object(l.mdx)("wrapper",b({},x,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, { Item } from 'terra-list/lib/index';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\nimport styles from './ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ListExample = () => (\n  <List>\n    <Item key=\"123\">\n      <Placeholder title=\"Item 0\" className={cx('placeholder')} />\n    </Item>\n    <Item key=\"124\">\n      <Placeholder title=\"Item 1\" className={cx('placeholder')} />\n    </Item>\n    <Item key=\"125\">\n      <Placeholder title=\"Item 2\" className={cx('placeholder')} />\n    </Item>\n  </List>\n);\n\nexport default ListExample;\n\n")))}y.isMDXComponent=!0;var O=n(802),h=n.n(O),j=n(842),v=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(h.a,{title:t||"List",description:n,example:a.a.createElement(u,null),exampleCssSrc:a.a.createElement(j.a,null),exampleSrc:a.a.createElement(y,null),isExpanded:r})},g=s.a.bind(d.a),I=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.default,{dividerStyle:"standard"},a.a.createElement(c.Item,{key:"123"},a.a.createElement(m.c,{title:"Standard Divider Item 0",className:g("placeholder")})),a.a.createElement(c.Item,{key:"124"},a.a.createElement(m.c,{title:"Standard Divider Item 1",className:g("placeholder")})),a.a.createElement(c.Item,{key:"125"},a.a.createElement(m.c,{title:"Standard Divider Item 2",className:g("placeholder")}))),a.a.createElement("br",null),a.a.createElement(c.default,{dividerStyle:"bottom-only"},a.a.createElement(c.Item,{key:"123"},a.a.createElement(m.c,{title:"Bottom Divider Item 0",className:g("placeholder")})),a.a.createElement(c.Item,{key:"124"},a.a.createElement(m.c,{title:"Bottom Divider Item 1",className:g("placeholder")})),a.a.createElement(c.Item,{key:"125"},a.a.createElement(m.c,{title:"Bottom Divider Item 2",className:g("placeholder")}))))};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P={};function w(e){var t=e.components,n=E(e,["components"]);return Object(l.mdx)("wrapper",N({},P,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport List, { Item } from \'terra-list/lib/index\';\nimport { Placeholder } from \'@cerner/terra-docs\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListDividedExample = () => (\n  <React.Fragment>\n    <List dividerStyle="standard">\n      <Item key="123">\n        <Placeholder title="Standard Divider Item 0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Standard Divider Item 1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Standard Divider Item 2" className={cx(\'placeholder\')} />\n      </Item>\n    </List>\n    <br />\n    <List dividerStyle="bottom-only">\n      <Item key="123">\n        <Placeholder title="Bottom Divider Item 0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Bottom Divider Item 1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Bottom Divider Item 2" className={cx(\'placeholder\')} />\n      </Item>\n    </List>\n  </React.Fragment>\n);\n\nexport default ListDividedExample;\n\n')))}w.isMDXComponent=!0;var L=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(h.a,{title:t||"List Divided",description:n,example:a.a.createElement(I,null),exampleCssSrc:a.a.createElement(j.a,null),exampleSrc:a.a.createElement(w,null),isExpanded:r})},D=s.a.bind(d.a),S=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.default,{paddingStyle:"standard"},a.a.createElement(c.Item,{key:"123"},a.a.createElement(m.c,{title:"Standard Padding Item 0",className:D("placeholder")})),a.a.createElement(c.Item,{key:"124"},a.a.createElement(m.c,{title:"Standard Padding Item 1",className:D("placeholder")})),a.a.createElement(c.Item,{key:"125"},a.a.createElement(m.c,{title:"Standard Padding Item 2",className:D("placeholder")}))),a.a.createElement("br",null),a.a.createElement(c.default,{paddingStyle:"compact"},a.a.createElement(c.Item,{key:"123"},a.a.createElement(m.c,{title:"Compact Padding Item 0",className:D("placeholder")})),a.a.createElement(c.Item,{key:"124"},a.a.createElement(m.c,{title:"Compact Padding Item 1",className:D("placeholder")})),a.a.createElement(c.Item,{key:"125"},a.a.createElement(m.c,{title:"Compact Padding Item 2",className:D("placeholder")}))))};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M={};function X(e){var t=e.components,n=C(e,["components"]);return Object(l.mdx)("wrapper",k({},M,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport List, { Item } from \'terra-list/lib/index\';\nimport { Placeholder } from \'@cerner/terra-docs\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListPaddedExample = () => (\n  <React.Fragment>\n    <List paddingStyle="standard">\n      <Item key="123">\n        <Placeholder title="Standard Padding Item 0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Standard Padding Item 1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Standard Padding Item 2" className={cx(\'placeholder\')} />\n      </Item>\n    </List>\n    <br />\n    <List paddingStyle="compact">\n      <Item key="123">\n        <Placeholder title="Compact Padding Item 0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Compact Padding Item 1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Compact Padding Item 2" className={cx(\'placeholder\')} />\n      </Item>\n    </List>\n  </React.Fragment>\n);\n\nexport default ListPaddedExample;\n\n')))}X.isMDXComponent=!0;var T=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(h.a,{title:t||"List Padded",description:n,example:a.a.createElement(S,null),exampleCssSrc:a.a.createElement(j.a,null),exampleSrc:a.a.createElement(X,null),isExpanded:r})},B=n(805),F=n.n(B);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var V=function(){return Object(l.mdx)(F.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The children list items passed to the component."))}return t.isMDXComponent=!0,t({})}},{name:"dividerStyle",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "none",\n "standard",\n "bottom-only"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'none'",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether or not the list's child items should have a border color applied.\nOne of ",Object(l.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",Object(l.mdx)("inlineCode",{parentName:"p"},"'standard'"),", ",Object(l.mdx)("inlineCode",{parentName:"p"},"'bottom-only'"),"."))}return t.isMDXComponent=!0,t({})}},{name:"paddingStyle",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"enum"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "none",\n "standard",\n "compact"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'none'",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The padding styling to apply to the child list item content.\nOne of ",Object(l.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",Object(l.mdx)("inlineCode",{parentName:"p"},"'standard'"),", ",Object(l.mdx)("inlineCode",{parentName:"p"},"'compact'"),"."))}return t.isMDXComponent=!0,t({})}},{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Function callback for the ref of the ul."))}return t.isMDXComponent=!0,t({})}},{name:"role",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'none'",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(l.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Accessibility role of the list, defaults to 'none'. If creating a list with selectable items, pass 'listbox'."))}return t.isMDXComponent=!0,t({})}}]})};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var z={};function A(e){var t=e.components,n=J(e,["components"]);return Object(l.mdx)("wrapper",_({},z,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(o.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-list"},"Terra List"),Object(l.mdx)("p",null,"The Terra List is a structural component to vertically arrange content within list/list items."),Object(l.mdx)("p",null,'If a list implementation contains selectable list options the role prop should be set to "listbox" for accesibility.'),Object(l.mdx)("p",null,"Two padding variants are provide for list item content, standard and compact. If different padding is desired use the defaulted style of 'none' and set the padding on the list item's child content with your own css values, preferrably themeable variables."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-list"))))),Object(l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(l.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"react"),Object(l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import List, { Item } from 'terra-list';\n")),Object(l.mdx)("h2",{id:"component-features"},"Component Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(v,{title:"Default List",mdxType:"ListExample"}),Object(l.mdx)(L,{title:"Divided List",mdxType:"ListDividedExample"}),Object(l.mdx)(T,{title:"Padded List",mdxType:"ListPaddedExample"}),Object(l.mdx)("h2",{id:"list-props"},"List Props"),Object(l.mdx)(V,{mdxType:"ListPropsTable"}))}A.isMDXComponent=!0},806:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(12);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e){var t=o({},e);return a.a.createElement(l.a,t,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},t.default=c},827:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),l=n(803),o=n.n(l),c=function(e){var t=e.url;return a.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.43.0",url:t})}},841:function(e,t,n){"use strict";t.a={placeholder:"ListDocCommon-module__placeholder___3a1of"}},842:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var r=n(310);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o={};function c(e){var t=e.components,n=l(e,["components"]);return Object(r.mdx)("wrapper",a({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .placeholder {\n    height: 50px;\n  }\n}\n\n")))}c.isMDXComponent=!0}}]);