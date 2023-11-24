(()=>{"use strict";var n={446:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,".contact {\n    width: 60vw;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n}\n\n.contact > img:first-of-type {\n    height: 30vw;\n}\n\n.info {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.contact .item {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.contact .item > img {\n    height: 32px;\n}\n\n.contact .list {\n    display: flex;\n    flex-direction: column;\n}\n",""]);const c=a},652:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,'/* HEADER AND FOOTER */\n.header,\n.footer {\n    background-color: var(--color-header);\n    color: var(--color-main);\n    font-family: "Permanent Marker";\n\n    height: var(--height-header);\n    padding: 0 100px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n/* HEADER */\n.header {\n    position: sticky;\n    top: 0;\n}\n\n#brand {\n    font-size: calc(var(--height-header) * 0.4);\n}\n\n.header ul {\n    display: flex;\n}\n\n.header li {\n    margin: 0 20px;\n    font-size: calc(var(--height-header) * 0.2);\n}\n\n.header li:hover {\n    cursor: pointer;\n    color: white;\n}\n\n/* FOOTER */\n.footer {\n    font-size: calc(var(--height-header) * 0.2);\n    justify-content: center;\n    gap: 50px;\n}\n\n.footer a:hover {\n    color: white;\n}\n\n#github img {\n    height: calc(var(--height-header) * 0.3);\n    padding: 0 5px;\n}\n\n#github a {\n    display: flex;\n    justify-content: center;\n}\n',""]);const c=a},434:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,'/* GENERAL */\n:root {\n    --width-section: 60vw;\n    --gap-section: 50px;\n}\n\n.welcome,\n.food,\n.newsletter {\n    width: var(--width-section);\n}\n\n/* WELCOME AND NEWSLETTER*/\n.welcome,\n.newsletter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: var(--gap-section);\n}\n\n.welcome img,\n.newsletter img {\n    width: calc((var(--width-section) - var(--gap-section)) * 0.4);\n}\n\n/* .welcome .intro,\n.newsletter > div {\n    width: calc((var(--width-section) - var(--gap-section)) * 0.6);\n} */\n\n/* INTRO AND NEWSLETTER */\n.intro > div:first-of-type,\n.newsletter > div > div:first-of-type {\n    font-family: "Permanent Marker";\n    font-size: 36px;\n}\n\n/* INTRO */\n.intro {\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n}\n\n.intro > div > div:nth-of-type(2) > span {\n    font-style: italic;\n}\n\n.intro > div > div:last-of-type {\n    margin-top: 10px;\n    font-style: italic;\n    font-size: 24px;\n}\n\n/* FOOD */\n.food {\n    background-color: var(--color-food);\n    padding: 20px calc((100vw - var(--width-section)) * 0.5);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.food > div:first-of-type {\n    display: flex;\n    gap: 20px;\n}\n\n.food > div:last-of-type {\n    font-size: 24px;\n}\n\n.food img {\n    height: 12vw;\n}\n\n/* NEWSLETTER */\n.newsletter > div > div:nth-of-type(2),\n.newsletter form {\n    margin-top: 20px;\n}\n\n.newsletter form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#email {\n    height: 2rem;\n    padding-top: 0.2rem;\n    border: none;\n    border-radius: 10px;\n    font-size: 1.2rem;\n    text-indent: 1rem;\n}\n\n#email:focus {\n    outline: none;\n    box-shadow: 0 0 10px var(--color-header);\n}\n\n#sign-up-wrapper {\n    height: 3rem;\n}\n\n#sign-up {\n    background-color: var(--color-header);\n    color: var(--color-main);\n    font-family: "Permanent Marker";\n    height: 3rem;\n    width: 6rem;\n    font-size: 1rem;\n    font-weight: bold;\n    border: none;\n    border-radius: 0.5rem;\n}\n\n#sign-up:disabled {\n    background-color: grey;\n    color: silver;\n}\n\n#sign-up:enabled:hover {\n    color: white;\n}\n\n#sign-up:enabled:active {\n    height: 2.9rem;\n    width: 5.9rem;\n}\n\n/* EMAIL VALIDATION */\n#email + span {\n    position: relative;\n}\n\n#email + span::before {\n    font-size: 1.2rem;\n\n    position: absolute;\n    top: calc(-20px - 1.2rem);\n    left: calc(100% - 2rem);\n}\n\n.invalid + span::before {\n    content: "✖";\n    color: red;\n}\n\n.valid + span::before {\n    content: "✓";\n    color: green;\n}\n\n/* SIGN UP SUCCESS */\n#sign-up + span::before {\n    margin-left: 10px;\n    font-size: 1.2rem;\n}\n\n.success + span::before {\n    content: "✓ Success!";\n    color: green;\n}\n',""]);const c=a},113:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,'.month-year,\n.title,\n.message {\n    font-family: "Permanent Marker";\n}\n\n.month-year {\n    font-size: 36px;\n}\n\n.menu {\n    box-sizing: border-box;\n    background-color: var(--color-food);\n    width: 80%;\n    padding: 20px 40px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.title,\n.message {\n    font-size: 24px;\n}\n\n.divider {\n    width: 80px;\n    border-bottom: 2px solid black;\n}\n\n.menu .list,\n.menu .list-less {\n    margin-top: 30px;\n    display: grid;\n    gap: 20px;\n}\n\n.list-less {\n    grid-template-columns: 1fr 1fr;\n}\n\n.menu .item {\n    text-align: center;\n}\n\n.menu .item > div:first-of-type {\n    font-weight: bold;\n}\n\n.menu .item > div:nth-of-type(2) {\n    margin-top: 5px;\n}\n',""]);const c=a},402:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(612),t.b),d=new URL(t(8),t.b),u=a()(r()),p=s()(l),f=s()(d);u.push([n.id,`/* FONT */\n@font-face {\n    /* From https://fonts.google.com/specimen/Permanent+Marker */\n    font-family: "Permanent Marker";\n    src: url(${p}) format("TrueType");\n}\n\n@font-face {\n    /* From https://fonts.google.com/specimen/Raleway */\n    font-family: "Raleway";\n    src: url(${f}) format("TrueType");\n}\n\n/* GENERAL */\n:root {\n    --color-main: #fbbf24;\n    --color-header: #18181b;\n    --color-food: rgb(255, 255, 255, 0.8);\n    --height-header: 80px;\n}\n\nbody,\nul {\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    list-style-type: none;\n}\n\na {\n    text-decoration: none;\n    color: var(--color-main);\n}\n\nimg {\n    border-radius: 10px;\n    display: flex;\n}\n\n/* CONTENT */\n#content {\n    background-color: var(--color-main);\n    font-family: "Raleway";\n    font-size: 18px;\n\n    box-sizing: border-box;\n    min-height: calc(100vh - var(--height-header) * 2);\n    padding: 50px 0;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 50px;\n}\n`,""]);const m=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},612:(n,e,t)=>{n.exports=t.p+"109a10dca0508e41aa12.ttf"},8:(n,e,t)=>{n.exports=t.p+"c15b0bf7b86f34335251.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(402),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=t(652),g={};g.styleTagTransform=p(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var v=t(434),b={};b.styleTagTransform=p(),b.setAttributes=s(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=d(),e()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;var y=t(113),x={};x.styleTagTransform=p(),x.setAttributes=s(),x.insert=a().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=d(),e()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;var w=t(446),E={};function S(n,e){const t=document.createElement("img");return t.src=n,t.alt=e,t}function C(n){const e=document.createElement("div");return e.textContent=n,e}function T(n,...e){const t=document.createElement("div");return null!==n&&t.classList.add(n),t.append(...e),t}E.styleTagTransform=p(),E.setAttributes=s(),E.insert=a().bind(null,"head"),E.domAPI=r(),E.insertStyleElement=d(),e()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;const A=t.p+"925aa8e685ab0217bb34.png",I=(()=>{function n(n){const e=document.createElement("li");return e.textContent=n,e}function e(n,e){const t=document.createElement("a");return t.href=n,t.target="_blank",t.rel="noopener noreferrer",null!==e&&(t.textContent=e),t}return{createHeader:function(){const e=document.createElement("div");e.id="brand",e.textContent="Soul Kitchen";const t=n("HOME");t.id="home";const o=n("MENU");o.id="menu";const r=n("CONTACT");r.id="contact";const i=document.createElement("ul");i.append(t,o,r);const a=document.createElement("div");return a.append(i),T("header",e,a)},createFooter:function(){const n=C("Inspired by "),t=e("https://jbjsoulkitchen.org/","JBJ Soul Kitchen");n.append(t);const o=e("https://github.com/woonzf",null),r=S(A,"GitHub Invertocat Logo");o.append(r,"ZF");const i=T(null,o);return i.id="github",T("footer",n,i)}}})(),L=t.p+"4aab74970d7a8560745e.jpg",R=t.p+"a6c57e080c3d708b6016.jpg",O=t.p+"1bee45a67ed16b459ac8.jpg",P=t.p+"96dfe311116178f31082.jpg",k=t.p+"53ca78ee88dd9f319565.jpg",M=(()=>{function n(){const n=S(L,"Restaurant Table and Chairs"),e=C("Welcome to Soul Kitchen"),t=C("Founded in 2003 by Mr John Von Jobi."),r=C("Its name took inspiration from the quote"),i=o(' "food for the soul".');r.append(i);const a=T(null,t,r,C("We strive to provide healthy and authentic food for you."),C("Always.")),c=T("intro",e,a);return T("welcome",n,c)}function e(){const n=T(null,S(R,"Noodles With Meat And Mint On Top"),S(O,"Cooked Dish on Plate"),S(P,"Close-up Photo of a Burrito"));return T("food",n,C("... and more!"),C("We update our menu monthly!"))}function t(){const n=S(k,"Man Holding Mug in Front of Laptop"),e=C("Interested?"),t=C("Sign up for our newsletter today!"),r=document.createElement("input");r.type="email",r.id="email",r.name="email",r.placeholder="username@email.com",r.autocomplete="off",r.addEventListener("input",(n=>{const e=n.target;var t;t=r.value,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)?(e.classList.remove("invalid"),e.classList.add("valid"),a.disabled=!1):(e.classList.remove("valid"),e.classList.add("invalid"),a.disabled=!0,a.classList.remove("success"))}));const i=o(null),a=document.createElement("button");a.type="button",a.id="sign-up",a.disabled=!0,a.textContent="Sign Up",a.addEventListener("click",(n=>{n.preventDefault(),n.target.classList.add("success")}));const c=o(null),s=document.createElement("div");s.id="sign-up-wrapper",s.append(a,c);const l=document.createElement("form");l.action="#",l.method="post",l.append(r,i,s);const d=T(null,e,t,l);return T("newsletter",n,d)}function o(n){const e=document.createElement("span");return null!==n&&(e.textContent=n),e}return{createContent:function(){return[n(),e(),t()]}}})(),N=(()=>{const n=["January","February","March","April","May","June","July","August","September","October","November","December"];function e(){const e=new Date,t=C(`${n[e.getMonth()]} ${e.getFullYear()}`);return t.classList.add("month-year"),t}function t(){const n=T("list-less",i("HOUSE GARDEN SALAD","Tomato, Red Onion, Cucumber, Shaved Carrots & Croutons over a bed of Mixed Greeens with Balsalmic Vinaigrette"),i("SOUP DU JOUR",null));return T("menu",a("APPETIZER"),c(),n)}function o(){const n=T("list",i("FRITTATA DU JOUR","Served with Garden Salad and Sweet Potato Chips"),i("SOUTHWEST BLACK BEAN BURGER","Pepper Jack Cheese, Chipotle Aioli, and Onion Rings; Served with Soul Chips, Coleslaw and Pickle"),i("CHICKEN CHEESESTEAK PITA","Grilled Chicken with Sauteed Peppers, Onions and Provolone Cheese; Served on an Open Face Pita with Soul Chips and Coleslaw"),i("ANGUS BEEF SLIDERS","Bacon Cheddar Sliders with Barbeque Sauce; Served with Soul Chips, Coleslaw & a Pickle"),i("CHEF’S LUNCH SPECIAL",null));return T("menu",a("MAIN COURSE"),c(),n)}function r(){const n=T("list",i("CHEF’S CHOICE OR FRUIT CUP",null));return T("menu",a("DESSERT"),c(),n)}function i(n,e){const t=C(n);return null!==e?T("item",t,C(e)):T("item",t)}function a(n){const e=C(n);return e.classList.add("title"),e}function c(){const n=document.createElement("div");return n.classList.add("divider"),n}return{createContent:function(){return[e(),t(),o(),r(),T("message","New menu, every month!")]}}})(),Z=t.p+"b0c595cc00bb97b9099f.jpg",F=t.p+"7459c0f1b422be3bcaad.png",U=t.p+"273d914855a232298fed.png",j=t.p+"e7f43f512e1a7664969b.png",D=t.p+"0571246c20e889d51546.png",H=(()=>{function n(){const n=S(Z,"Grey and black light bulbs during night time"),t=T("info",e(F,"Location Icon","207 ABC Street Orange Bank, AZ 07701"),e(U,"Phone Icon","345 012 6789"),e(j,"Mail Icon","info@soulkitchen.com"),e(D,"Clock Icon","Monday ~ Saturday","Sunday: Closed"));return T("contact",n,t)}function e(n,e,...t){const o=S(n,e),r=document.createElement("div");r.classList.add("list");for(const n of[...t])r.append(C(n));return T("item",o,r)}return{createContent:function(){return[n()]}}})();(()=>{const n=document.querySelector("#content");function e(){r(),i(M.createContent()),a()}function t(){r(),i(N.createContent()),a()}function o(){r(),i(H.createContent()),a()}function r(){for(;n.children.length>0;)n.removeChild(n.lastChild)}function i(e){for(const t of e)n.append(t)}function a(){window.scrollTo(0,0)}return{init:function(){const r=document.querySelector("body");r.prepend(I.createHeader(),n),r.append(I.createFooter());const i=document.querySelector("#home"),a=document.querySelector("#menu"),c=document.querySelector("#contact");i.onclick=e,a.onclick=t,c.onclick=o,e()}}})().init()})()})();