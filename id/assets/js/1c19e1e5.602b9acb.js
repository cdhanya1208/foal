"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,b=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Version 3.3 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-3.3-release-notes.png",tags:["release"]},s=void 0,i={permalink:"/id/blog/2023/08/13/version-3.3-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2023-08-13-version-3.3-release-notes.md",source:"@site/blog/2023-08-13-version-3.3-release-notes.md",title:"Version 3.3 release notes",description:"Banner",date:"2023-08-13T00:00:00.000Z",formattedDate:"13 Agustus 2023",tags:[{label:"release",permalink:"/id/blog/tags/release"}],readingTime:.265,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 3.3 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-3.3-release-notes.png",tags:["release"]},nextItem:{title:"Version 3.2 release notes",permalink:"/id/blog/2023/04/04/version-3.2-release-notes"}},l={authorsImageUrls:[void 0]},u=[{value:"Better security for JWT",id:"better-security-for-jwt",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Banner",src:r(16348).Z,width:"914",height:"315"})),(0,o.kt)("p",null,"Version 3.3 of ",(0,o.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," is out!"),(0,o.kt)("h2",{id:"better-security-for-jwt"},"Better security for JWT"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonwebtoken")," dependency has been upgraded to v9 to address ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/auth0/node-jsonwebtoken/blob/master/CHANGELOG.md#900---2022-12-21"},"security issues"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that RSA key size now must be 2048 bits or greater. Make sure to check the size of your RSA key before upgrading to this version.")))}p.isMDXComponent=!0},16348:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner-f1f26ca8012593181b9aa1aea2ed64be.png"}}]);