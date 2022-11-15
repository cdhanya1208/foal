"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,n;const{lazy:l,block:c,defaultValue:d,values:b,groupId:f,className:g}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:O}=(0,s.U)(),[j,w]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=f){const e=N[f];null!=e&&e!==j&&h.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==j&&(C(t),w(a),null!=f&&O(f,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},g)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function d(e){const t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},43803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={title:"MongoDB (noSQL)",sidebar_label:"NoSQL"},s=void 0,u={unversionedId:"databases/typeorm/mongodb",id:"databases/typeorm/mongodb",title:"MongoDB (noSQL)",description:"Creating a new project",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/databases/typeorm/mongodb.md",sourceDirName:"databases/typeorm",slug:"/databases/typeorm/mongodb",permalink:"/fr/docs/databases/typeorm/mongodb",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/typeorm/mongodb.md",tags:[],version:"current",frontMatter:{title:"MongoDB (noSQL)",sidebar_label:"NoSQL"},sidebar:"someSidebar",previous:{title:"Migrations",permalink:"/fr/docs/databases/typeorm/generate-and-run-migrations"},next:{title:"Introduction",permalink:"/fr/docs/databases/other-orm/introduction"}},p={},m=[{value:"Creating a new project",id:"creating-a-new-project",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Defining Entities and Columns",id:"defining-entities-and-columns",level:2},{value:"Authentication",id:"authentication",level:2},{value:"The <code>MongoDBStore</code>",id:"the-mongodbstore",level:3},{value:"Limitations",id:"limitations",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"creating-a-new-project"},"Creating a new project"),(0,r.kt)("p",null,"To generate a new project that uses MongoDB, run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"createapp")," with the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--mongodb"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal createapp my-app --mongodb\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install mongodb\n")),(0,r.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"database:\n  type: mongodb\n  url: mongodb://localhost:27017/test-foo-bar\n"))),(0,r.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "database": {\n    "type": "mongodb",\n    "url": "mongodb://localhost:27017/test-foo-bar"\n  }\n}\n'))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  database: {\n    type: "mongodb",\n    url: "mongodb://localhost:27017/test-foo-bar"\n  }\n}\n')))),(0,r.kt)("h2",{id:"defining-entities-and-columns"},"Defining Entities and Columns"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"More documentation here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typeorm/typeorm/blob/master/docs/mongodb.md"},"https://github.com/typeorm/typeorm/blob/master/docs/mongodb.md"),".")),(0,r.kt)("p",null,"The definition of entities and columns is the same as in relational databases, except that the ID type must be an ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectID")," and the column decorator must be ",(0,r.kt)("inlineCode",{parentName:"p"},"@ObjectIdColumn"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n    \n    @ObjectIdColumn()\n    _id: ObjectID;\n    \n    @Column()\n    firstName: string;\n    \n    @Column()\n    lastName: string;\n    \n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ObjectId } from 'mongodb';\n\nconst user = await User.findOneBy({ _id: new ObjectId('xxxx') });\n")),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"user.entity.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Entity, ObjectID, ObjectIdColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @ObjectIdColumn()\n  _id: ObjectID;\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example with JSON Web Tokens"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { JWTRequired } from '@foal/jwt';\nimport { ObjectId } from 'mongodb';\n\nimport { User } from '../entities';\n\n@JWTRequired({\n  userIdType: 'string',\n  user: id => User.findOneBy({ _id: new ObjectId(id) })\n})\nclass MyController {}\n")),(0,r.kt)("h3",{id:"the-mongodbstore"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"MongoDBStore")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @foal/mongodb\n")),(0,r.kt)("p",null,"If you use sessions with ",(0,r.kt)("inlineCode",{parentName:"p"},"@UseSessions"),", you must use the ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDBStore")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/mongodb"),". ",(0,r.kt)("strong",{parentName:"p"},"The ",(0,r.kt)("inlineCode",{parentName:"strong"},"TypeORMStore")," does not work with noSQL databases.")),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"When using MongoDB, there are some features that are not available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"foal g rest-api <name>")," command,"),(0,r.kt)("li",{parentName:"ul"},"and the ",(0,r.kt)("em",{parentName:"li"},"Groups & Permissions")," system.")))}d.isMDXComponent=!0}}]);