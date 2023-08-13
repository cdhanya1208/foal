"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7709],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Version 3.2 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-3.2-release-notes.png",tags:["release"]},l=void 0,i={permalink:"/fr/blog/2023/04/04/version-3.2-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2023-04-04-version-3.2-release-notes.md",source:"@site/blog/2023-04-04-version-3.2-release-notes.md",title:"Version 3.2 release notes",description:"Banner",date:"2023-04-04T00:00:00.000Z",formattedDate:"4 avril 2023",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:.54,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 3.2 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-3.2-release-notes.png",tags:["release"]},prevItem:{title:"Version 3.3 release notes",permalink:"/fr/blog/2023/08/13/version-3.3-release-notes"},nextItem:{title:"Version 3.1 release notes",permalink:"/fr/blog/2022/11/28/version-3.1-release-notes"}},s={authorsImageUrls:[void 0]},p=[{value:"New package <code>@foal/password</code>",id:"new-package-foalpassword",level:2},{value:"Read the controller and the controller method names in request contexts",id:"read-the-controller-and-the-controller-method-names-in-request-contexts",level:2}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Banner",src:r(41322).Z,width:"914",height:"315"})),(0,a.kt)("p",null,"Version 3.2 of ",(0,a.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," is out! Here are the improvements that it brings:"),(0,a.kt)("h2",{id:"new-package-foalpassword"},"New package ",(0,a.kt)("inlineCode",{parentName:"h2"},"@foal/password")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"foal/password")," package, which was removed in v3.0, has been re-added. It offers an ",(0,a.kt)("inlineCode",{parentName:"p"},"isCommon")," method to check if a password is too common:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const isPasswordTooCommon = await isCommon(password);\n")),(0,a.kt)("h2",{id:"read-the-controller-and-the-controller-method-names-in-request-contexts"},"Read the controller and the controller method names in request contexts"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WebsocketContext")," have two new properties:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"controllerName")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the controller class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"controllerMethodName")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the controller method.")))))}m.isMDXComponent=!0},41322:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner-bb5c5f2ba365d2cdd1fafbf18bbc5eea.png"}}]);