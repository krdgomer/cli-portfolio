if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>n(e,r),f={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-87098c68"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-4a655f7e.js",revision:null},{url:"index.html",revision:"fb5681ecbe99ed58ac7690a0f1287abc"},{url:"registerSW.js",revision:"b8dd1f54a9f9acff10eb24386cc2fb56"},{url:"manifest.webmanifest",revision:"a34c99f5ec8a4a2dbc8fba94fd6cbf39"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
