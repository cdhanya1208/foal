"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},45193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Utilizar Otro ORM",sidebar_label:"Introducci\xf3n"},i=void 0,l={unversionedId:"databases/other-orm/introduction",id:"databases/other-orm/introduction",title:"Utilizar Otro ORM",description:"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/databases/other-orm/introduction.md",sourceDirName:"databases/other-orm",slug:"/databases/other-orm/introduction",permalink:"/es/docs/databases/other-orm/introduction",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/other-orm/introduction.md",tags:[],version:"current",frontMatter:{title:"Utilizar Otro ORM",sidebar_label:"Introducci\xf3n"},sidebar:"someSidebar",previous:{title:"NoSQL",permalink:"/es/docs/databases/typeorm/mongodb"},next:{title:"Prisma",permalink:"/es/docs/databases/other-orm/prisma"}},s={},p=[{value:"Uninstall TypeORM",id:"uninstall-typeorm",level:2},{value:"Examples",id:"examples",level:2},{value:"Limitations",id:"limitations",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The core of the framework is independent of TypeORM. So, if you do not want to use an ORM at all or use another ORM or ODM than TypeORM, you absolutely can."),(0,a.kt)("p",null,"To do so, you will have to remove TypeORM and all its utilities."),(0,a.kt)("h2",{id:"uninstall-typeorm"},"Uninstall TypeORM"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First uninstall the dependencies."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall typeorm @foal/typeorm\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then remove the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/entities")," and the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/db.ts"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove or replace the script ",(0,a.kt)("inlineCode",{parentName:"p"},"create-user")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/scripts"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts"),", delete the connection creation called ",(0,a.kt)("inlineCode",{parentName:"p"},"dataSource.initialize()"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Finally, remove in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," the scripts to manage migrations."))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/es/docs/databases/other-orm/prisma"},"Prisma"))),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"When using another ORM than TypeORM some features are not available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("em",{parentName:"li"},"Groups & Permissions")," system,"),(0,a.kt)("li",{parentName:"ul"},"and the ",(0,a.kt)("inlineCode",{parentName:"li"},"foal g rest-api")," command.")))}m.isMDXComponent=!0}}]);