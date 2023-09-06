"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7979],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},59249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"API Testing with Swagger",id:"tuto-6-swagger-interface",slug:"6-swagger-interface"},l=void 0,i={unversionedId:"tutorials/real-world-example-with-react/tuto-6-swagger-interface",id:"version-3.x/tutorials/real-world-example-with-react/tuto-6-swagger-interface",title:"API Testing with Swagger",description:"Now that the first API endpoint has been implemented, the next step is to test it.",source:"@site/versioned_docs/version-3.x/tutorials/real-world-example-with-react/6-swagger-interface.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/6-swagger-interface",permalink:"/docs/3.x/tutorials/real-world-example-with-react/6-swagger-interface",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/tutorials/real-world-example-with-react/6-swagger-interface.md",tags:[],version:"3.x",sidebarPosition:6,frontMatter:{title:"API Testing with Swagger",id:"tuto-6-swagger-interface",slug:"6-swagger-interface"},sidebar:"someSidebar",previous:{title:"Your First Route",permalink:"/docs/3.x/tutorials/real-world-example-with-react/5-our-first-route"},next:{title:"The Frontend App",permalink:"/docs/3.x/tutorials/real-world-example-with-react/7-add-frontend"}},s={},p=[],c={toc:p};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that the first API endpoint has been implemented, the next step is to test it."),(0,o.kt)("p",null,"To do this, you will generate a complete documentation page of your API from which you can send requests. This page will be generated using ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/tools/swagger-ui/"},"Swagger UI")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/"},"OpenAPI specification"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @foal/swagger\n")),(0,o.kt)("p",null,"First, provide some information to describe your API globally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiInfo, ApiServer, controller } from '@foal/core';\nimport { StoriesController } from './api';\n\n@ApiInfo({\n  title: 'Application API',\n  version: '1.0.0'\n})\n@ApiServer({\n  url: '/api'\n})\nexport class ApiController {\n\n  subControllers = [\n    controller('/stories', StoriesController),\n  ];\n\n}\n\n")),(0,o.kt)("p",null,"Then generate a new controller. This one will be in charge of rendering the new page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate controller openapi --register\n")),(0,o.kt)("p",null,"Make the generated class extend the abstract class ",(0,o.kt)("inlineCode",{parentName:"p"},"SwaggerController"),". And then provide the root controller of your API as an option to the controller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwaggerController } from '@foal/swagger';\nimport { ApiController } from './api.controller';\n\nexport class OpenapiController extends SwaggerController  {\n\n  options = {\n    controllerClass: ApiController\n  }\n\n}\n")),(0,o.kt)("p",null,"Finally, update your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.controller.ts")," file so that the Swagger UI page is available at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001/swagger"},"/swagger"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, IAppController } from '@foal/core';\n\nimport { ApiController, OpenapiController } from './controllers';\n\nexport class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController),\n    controller('/swagger', OpenapiController)\n  ];\n}\n\n")),(0,o.kt)("p",null,"If you navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001/swagger"},"http://localhost:3001/swagger"),", you will see the documentation page generated from your code."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Swagger page",src:r(82246).Z,width:"2560",height:"1394"})),(0,o.kt)("p",null,"Now click on the ",(0,o.kt)("em",{parentName:"p"},"Try it out")," button. The fields become editable and you can send requests to test your API."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Swagger page",src:r(53394).Z,width:"2560",height:"1386"})))}g.isMDXComponent=!0},82246:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/swagger1-3abe32cd345086f35f191e1284daa45e.png"},53394:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/swagger2-a7c73effa7473d646ed981f1f55acd4f.png"}}]);