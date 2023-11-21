(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(612),t.b),d=new URL(t(484),t.b),p=i()(r()),u=s()(l),f=s()(d);p.push([n.id,`/* FONT */\n@font-face {\n    /* From https://fonts.google.com/specimen/Permanent+Marker */\n    font-family: "Permanent Marker";\n    src: url(${u}) format("TrueType");\n}\n\n@font-face {\n    /* From https://fonts.google.com/specimen/Raleway */\n    font-family: "Raleway";\n    src: url(${f}) format("TrueType");\n}\n\n/* GENERAL */\n:root {\n    --color-main: #fbbf24;\n    --color-header: #18181b;\n    --height-header: 80px;\n}\n\nbody,\nul {\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    list-style-type: none;\n}\n\na {\n    text-decoration: none;\n    color: var(--color-main);\n}\n\nimg {\n    border-radius: 10px;\n    display: flex;\n}\n\n/* HEADER AND FOOTER */\n.header,\n.footer {\n    background-color: var(--color-header);\n    color: var(--color-main);\n    font-family: "Permanent Marker";\n\n    height: var(--height-header);\n    padding: 0 100px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n/* HEADER */\n.header {\n    position: sticky;\n    top: 0;\n}\n\n#brand {\n    font-size: calc(var(--height-header) * 0.4);\n}\n\n.header ul {\n    display: flex;\n}\n\n.header li {\n    margin: 0 20px;\n    font-size: calc(var(--height-header) * 0.2);\n}\n\n.header li:hover {\n    cursor: pointer;\n    color: white;\n}\n\n/* FOOTER */\n.footer {\n    font-size: calc(var(--height-header) * 0.2);\n    justify-content: center;\n    gap: 200px;\n}\n\n.footer a:hover {\n    color: white;\n}\n\n#github img {\n    height: calc(var(--height-header) * 0.3);\n    padding: 0 5px;\n}\n\n#github a {\n    display: flex;\n    justify-content: center;\n}\n\n/* CONTENT */\n#content {\n    background-color: var(--color-main);\n    font-family: "Raleway";\n    padding: 50px 100px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n}\n\n/* WELCOME, INTRO AND NEWSLETTER*/\n.welcome,\n.intro,\n.newsletter {\n    display: flex;\n    gap: 50px;\n}\n\n/* WELCOME */\n.welcome img {\n    height: 40vw;\n}\n\n/* INTRO AND NEWSLETTER */\n.intro,\n.newsletter {\n    font-size: 24px;\n}\n\n.intro > div:first-of-type,\n.newsletter > div > div:first-of-type {\n    font-family: "Permanent Marker";\n    font-size: 36px;\n}\n\n/* INTRO */\n.intro {\n    flex-direction: column;\n    justify-content: center;\n}\n\n.intro > div > div:nth-of-type(2) > span {\n    font-style: italic;\n}\n\n.intro > div > div:last-of-type {\n    margin-top: 10px;\n    font-style: italic;\n}\n\n/* FOOD */\n.food {\n    background-color: rgb(255, 255, 255, 0.8);\n    width: 100%;\n    padding: 20px 100px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.food > div:first-of-type {\n    display: flex;\n    gap: 20px;\n}\n\n.food > div:nth-of-type(2) {\n    font-size: 18px;\n}\n\n.food > div:last-of-type {\n    font-size: 24px;\n}\n\n.food img {\n    height: 15vw;\n}\n\n/* NEWSLETTER */\n.newsletter {\n    align-items: center;\n}\n\n.newsletter img {\n    height: 20vw;\n}\n\n.newsletter > div > div:nth-of-type(2),\n.newsletter form {\n    margin-top: 20px;\n}\n\n.newsletter form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#email {\n    height: 2rem;\n    width: 100%;\n    padding-top: 0.1rem;\n    border: none;\n    border-radius: 10px;\n    font-size: 1.2rem;\n    text-indent: 1rem;\n}\n\n#email:focus {\n    outline: none;\n    box-shadow: 0 0 10px var(--color-header);\n}\n\n#sign-up-wrapper {\n    height: 3rem;\n}\n\n#sign-up {\n    background-color: var(--color-header);\n    color: var(--color-main);\n    font-family: "Permanent Marker";\n    height: 3rem;\n    width: 6rem;\n    font-size: 1rem;\n    font-weight: bold;\n    border: none;\n    border-radius: 0.5rem;\n}\n\n#sign-up:disabled {\n    background-color: grey;\n    color: silver;\n}\n\n#sign-up:enabled:hover {\n    color: white;\n}\n\n#sign-up:enabled:active {\n    height: 2.9rem;\n    width: 5.9rem;\n}\n\n/* EMAIL VALIDATION */\n#email + span {\n    position: relative;\n}\n\n#email + span::before {\n    width: 100%;\n    font-size: 1.2rem;\n\n    position: absolute;\n    top: calc(-20px - 1.2rem);\n    left: calc(100% + 1rem);\n}\n\n.invalid + span::before {\n    content: "✖ Invalid email address";\n    color: red;\n}\n\n.valid + span::before {\n    content: "✓";\n    color: green;\n}\n\n/* SIGN UP SUCCESS */\n#sign-up + span::before {\n    margin-left: 10px;\n    font-size: 1.2rem;\n}\n\n.success + span::before {\n    content: "✓ Success!";\n    color: green;\n}\n`,""]);const m=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},612:(n,e,t)=>{n.exports=t.p+"109a10dca0508e41aa12.ttf"},484:(n,e,t)=>{n.exports=t.p+"e14d84ccec6be3ff19e3.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"4ef3d91974b4e95aa9e5.jpg",v=t.p+"af61101db91c344dbd3c.jpg",g=t.p+"514a8c40e2a032dc2f9a.jpg",y=t.p+"b9b4fce6be2f1da887f9.jpg",b=t.p+"42a9acf18778d4efcba6.jpg",x=(()=>{const n=document.querySelector("#content");return{init:function(){w.create(n)}}})(),w=(()=>{function n(n,e){const t=document.createElement("img");return t.src=n,t.alt=e,t}function e(n){const e=document.createElement("div");return e.textContent=n,e}function t(n){const e=document.createElement("span");return null!==n&&(e.textContent=n),e}function o(n,...e){const t=document.createElement("div");return null!==n&&t.classList.add(n),t.append(...e),t}return{create:function(r){!function(r){const a=n(h,"Restaurant Table and Chairs"),i=e("Welcome to Soul Kitchen"),c=e("Founded in 2003 by Mr John Von Jobi."),s=e("Its name took inspiration from the quote"),l=t(' "food for the soul".');s.append(l);const d=o(null,c,s,e("We strive to provide healthy and authentic food for you."),e("Always.")),p=o("intro",i,d),u=o("welcome",a,p);r.append(u)}(r),function(t){const r=o(null,n(v,"Noodles With Meat And Mint On Top"),n(g,"Cooked Dish on Plate"),n(y,"Close-up Photo of a Burrito")),a=o("food",r,e("... and more!"),e("We serve different kinds of food!"));t.append(a)}(r),function(r){const a=n(b,"Man Holding Mug in Front of Laptop"),i=e("Interested?"),c=e("Sign up for our newsletter today!"),s=document.createElement("input");s.type="email",s.id="email",s.name="email",s.placeholder="username@email.com",s.autocomplete="off",s.addEventListener("input",(n=>{const e=n.target;var t;t=s.value,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)?(e.classList.remove("invalid"),e.classList.add("valid"),d.disabled=!1):(e.classList.remove("valid"),e.classList.add("invalid"),d.disabled=!0,d.classList.remove("success"))}));const l=t(null),d=document.createElement("button");d.type="button",d.id="sign-up",d.disabled=!0,d.textContent="Sign Up",d.addEventListener("click",(n=>{n.preventDefault(),n.target.classList.add("success")}));const p=t(null),u=document.createElement("div");u.id="sign-up-wrapper",u.append(d,p);const f=document.createElement("form");f.action="#",f.method="post",f.append(s,l,u);const m=o(null,i,c,f),h=o("newsletter",a,m);r.append(h)}(r)}}})();x.init()})()})();