(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1798:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return H}));var r=t(0),a=t.n(r),o=t(310),l=t(817),c=t(933),i=t(4),p=t.n(i),m=t(810),s=p.a.bind(m.a),u=function(){return a.a.createElement(c.a,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",className:s("form-select")},a.a.createElement(c.a.Option,{value:"xSmall",display:"Extra Small"}),a.a.createElement(c.a.Option,{value:"small",display:"Small"}),a.a.createElement(c.a.Option,{value:"medium",display:"Medium"}),a.a.createElement(c.a.Option,{value:"large",display:"Large"}),a.a.createElement(c.a.Option,{value:"xLarge",display:"Extra Large"}))};function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b={};function x(e){var n=e.components,t=f(e,["components"]);return Object(o.mdx)("wrapper",d({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport SearchSelectField from \'terra-form-select/lib/SearchSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchSelectFieldExample = () => (\n  <SearchSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx(\'form-select\')}>\n    <SearchSelectField.Option value="xSmall" display="Extra Small" />\n    <SearchSelectField.Option value="small" display="Small" />\n    <SearchSelectField.Option value="medium" display="Medium" />\n    <SearchSelectField.Option value="large" display="Large" />\n    <SearchSelectField.Option value="xLarge" display="Extra Large" />\n  </SearchSelectField>\n);\n\nexport default SearchSelectFieldExample;\n\n')))}x.isMDXComponent=!0;var h=t(802),O=t.n(h),y=t(811),v=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(O.a,{title:n||"Search Select Field",description:t,example:a.a.createElement(u,null),exampleCssSrc:a.a.createElement(y.a,null),exampleSrc:a.a.createElement(x,null),isExpanded:r})},j=p.a.bind(m.a),g=function(){return a.a.createElement(c.a,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",required:!0,className:j("form-select")},a.a.createElement(c.a.Option,{value:"xSmall",display:"Extra Small"}),a.a.createElement(c.a.Option,{value:"small",display:"Small"}),a.a.createElement(c.a.Option,{value:"medium",display:"Medium"}),a.a.createElement(c.a.Option,{value:"large",display:"Large"}),a.a.createElement(c.a.Option,{value:"xLarge",display:"Extra Large"}))};function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function w(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var M={};function D(e){var n=e.components,t=w(e,["components"]);return Object(o.mdx)("wrapper",S({},M,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport SearchSelectField from \'terra-form-select/lib/SearchSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchSelectFieldExample = () => (\n  <SearchSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" required className={cx(\'form-select\')}>\n    <SearchSelectField.Option value="xSmall" display="Extra Small" />\n    <SearchSelectField.Option value="small" display="Small" />\n    <SearchSelectField.Option value="medium" display="Medium" />\n    <SearchSelectField.Option value="large" display="Large" />\n    <SearchSelectField.Option value="xLarge" display="Extra Large" />\n  </SearchSelectField>\n);\n\nexport default SearchSelectFieldExample;\n\n')))}D.isMDXComponent=!0;var X=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(O.a,{title:n||"Required Search Select Field",description:t,example:a.a.createElement(g,null),exampleCssSrc:a.a.createElement(y.a,null),exampleSrc:a.a.createElement(D,null),isExpanded:r})},L=p.a.bind(m.a),T=function(){return a.a.createElement(c.a,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:L("form-select")},a.a.createElement(c.a.Option,{value:"xSmall",display:"Extra Small"}),a.a.createElement(c.a.Option,{value:"small",display:"Small"}),a.a.createElement(c.a.Option,{value:"medium",display:"Medium"}),a.a.createElement(c.a.Option,{value:"large",display:"Large"}),a.a.createElement(c.a.Option,{value:"xLarge",display:"Extra Large"}))};function C(){return(C=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function E(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var N={};function F(e){var n=e.components,t=E(e,["components"]);return Object(o.mdx)("wrapper",C({},N,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport SearchSelectField from \'terra-form-select/lib/SearchSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchSelectFieldExample = () => (\n  <SearchSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <SearchSelectField.Option value="xSmall" display="Extra Small" />\n    <SearchSelectField.Option value="small" display="Small" />\n    <SearchSelectField.Option value="medium" display="Medium" />\n    <SearchSelectField.Option value="large" display="Large" />\n    <SearchSelectField.Option value="xLarge" display="Extra Large" />\n  </SearchSelectField>\n);\n\nexport default SearchSelectFieldExample;\n\n')))}F.isMDXComponent=!0;var q=function(e){var n=e.title,t=e.description,r=e.isExpanded;return a.a.createElement(O.a,{title:n||"Incomplete Search Select Field",description:t,example:a.a.createElement(T,null),exampleCssSrc:a.a.createElement(y.a,null),exampleSrc:a.a.createElement(F,null),isExpanded:r})},I=t(805),V=t.n(I);function P(){return(P=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function z(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var A=function(){return Object(o.mdx)(V.a,{rows:[{name:"allowClear",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether a clear option is available to clear the selection."))}return n.isMDXComponent=!0,n({})}},{name:"children",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The select options."))}return n.isMDXComponent=!0,n({})}},{name:"label",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The field label."))}return n.isMDXComponent=!0,n({})}},{name:"defaultValue",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"union"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-json"},'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))}return n.isMDXComponent=!0,n({})}},{name:"disabled",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the input is disabled."))}return n.isMDXComponent=!0,n({})}},{name:"error",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Error message displayed when the select is invalid."))}return n.isMDXComponent=!0,n({})}},{name:"help",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Help message to display with the select."))}return n.isMDXComponent=!0,n({})}},{name:"hideRequired",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether to hide the required indicator on the label."))}return n.isMDXComponent=!0,n({})}},{name:"isIncomplete",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(o.mdx)("em",{parentName:"p"},"(usage note: ",Object(o.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return n.isMDXComponent=!0,n({})}},{name:"isInline",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))}return n.isMDXComponent=!0,n({})}},{name:"isInvalid",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return n.isMDXComponent=!0,n({})}},{name:"isLabelHidden",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))}return n.isMDXComponent=!0,n({})}},{name:"isTouchAccessible",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),Object(o.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."))}return n.isMDXComponent=!0,n({})}},{name:"labelAttrs",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"{}",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Additional attributes to spread onto the label."))}return n.isMDXComponent=!0,n({})}},{name:"maxHeight",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The max height of the dropdown."))}return n.isMDXComponent=!0,n({})}},{name:"maxWidth",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Set the max-width of a field using ",Object(o.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(o.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return n.isMDXComponent=!0,n({})}},{name:"onChange",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))}return n.isMDXComponent=!0,n({})}},{name:"placeholder",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Placeholder text."))}return n.isMDXComponent=!0,n({})}},{name:"required",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field is required."))}return n.isMDXComponent=!0,n({})}},{name:"selectAttrs",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"{}",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Additional attributes to spread onto the select."))}return n.isMDXComponent=!0,n({})}},{name:"selectId",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))}return n.isMDXComponent=!0,n({})}},{name:"showOptional",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))}return n.isMDXComponent=!0,n({})}},{name:"value",type:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"union"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-json"},'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=z(n,["components"]);return Object(o.mdx)("wrapper",P({},e,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers."))}return n.isMDXComponent=!0,n({})}}]})};function R(){return(R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function W(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var k={};function H(e){var n=e.components,t=W(e,["components"]);return Object(o.mdx)("wrapper",R({},k,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-form-search-select-field"},"Terra Form Search Select Field"),Object(o.mdx)("p",null,"A convenience wrapper assembling a ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/SearchSelect.jsx"},"terra-form-select SearchSelect")," within a ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field"),"."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import SearchSelectField from 'terra-form-select/lib/SearchSelectField';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(v,{title:"Search Select Field Example",mdxType:"SearchSelectFieldExample"}),Object(o.mdx)(X,{title:"Required Search Select Field Example",mdxType:"RequiredSearchSelectFieldExample"}),Object(o.mdx)(q,{title:"Incomplete Search Select Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteSearchSelectFieldExample"}),Object(o.mdx)("h2",{id:"search-select-field-props"},"Search Select Field Props"),Object(o.mdx)(A,{mdxType:"SearchSelectFieldPropsTable"}))}H.isMDXComponent=!0},806:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(12);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=function(e){var n=l({},e);return a.a.createElement(o.a,n,a.a.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0},n.default=c},810:function(e,n,t){"use strict";n.a={"form-select":"FormSelectDocCommon-module__form-select___m9WxS"}},811:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));t(0);var r=t(310);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={};function c(e){var n=e.components,t=o(e,["components"]);return Object(r.mdx)("wrapper",a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .form-select {\n    max-width: 300px;\n  }\n}\n\n")))}c.isMDXComponent=!0},817:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0),a=t.n(r),o=t(803),l=t.n(o),c=function(e){var n=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.26.0",url:n})}},933:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(1),l=t.n(o),c=t(205),i=t(209),p=t(53),m=t(33);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d={allowClear:l.a.bool,children:l.a.node,label:l.a.string.isRequired,defaultValue:l.a.oneOfType([l.a.string,l.a.number,l.a.array]),disabled:l.a.bool,error:l.a.node,help:l.a.node,hideRequired:l.a.bool,isIncomplete:l.a.bool,isInline:l.a.bool,isInvalid:l.a.bool,isLabelHidden:l.a.bool,isTouchAccessible:l.a.bool,labelAttrs:l.a.object,maxHeight:l.a.number,maxWidth:l.a.string,onChange:l.a.func,placeholder:l.a.string,required:l.a.bool,selectAttrs:l.a.object,selectId:l.a.string.isRequired,showOptional:l.a.bool,value:l.a.oneOfType([l.a.string,l.a.number,l.a.array])},f={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},b=function(e){var n,t=e.allowClear,r=e.children,o=e.defaultValue,l=e.disabled,p=e.error,m=e.help,d=e.hideRequired,f=e.isIncomplete,b=e.isInline,x=e.isInvalid,h=e.isLabelHidden,O=e.isTouchAccessible,y=e.label,v=e.labelAttrs,j=e.maxHeight,g=e.maxWidth,S=e.onChange,w=e.placeholder,M=e.required,D=e.selectAttrs,X=e.selectId,L=e.showOptional,T=e.value,C=u(e,["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"]);return m&&p&&x?n="".concat(X,"-error ").concat(X,"-help"):(m&&(n="".concat(X,"-help")),p&&x&&(n="".concat(X,"-error"))),a.a.createElement(c.a,s({},C,{label:y,labelAttrs:v,error:p,help:m,hideRequired:d,required:M,showOptional:L,isInvalid:x,isInline:b,isLabelHidden:h,htmlFor:X,maxWidth:g}),a.a.createElement(i.a,s({},D,{ariaLabel:y,allowClear:t,"aria-describedby":n,disabled:D.disabled||l,inputId:X,isIncomplete:f,isInvalid:x,isTouchAccessible:O,defaultValue:o,maxHeight:j||D.maxHeight,onChange:S,placeholder:w,required:M,value:T}),r))};b.propTypes=d,b.defaultProps=f,b.Option=m.a,b.OptGroup=p.a,n.a=b}}]);