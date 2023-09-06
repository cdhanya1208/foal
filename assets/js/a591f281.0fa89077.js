"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={title:"Users"},i=void 0,o={unversionedId:"authentication/user-class",id:"version-3.x/authentication/user-class",title:"Users",description:"The User Entity",source:"@site/versioned_docs/version-3.x/authentication/user-class.md",sourceDirName:"authentication",slug:"/authentication/user-class",permalink:"/docs/3.x/authentication/user-class",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/authentication/user-class.md",tags:[],version:"3.x",frontMatter:{title:"Users"},sidebar:"someSidebar",previous:{title:"Quick Start",permalink:"/docs/3.x/authentication/quick-start"},next:{title:"Passwords",permalink:"/docs/3.x/authentication/password-management"}},l={},p=[{value:"The User Entity",id:"the-user-entity",level:2},{value:"Creating Users ...",id:"creating-users-",level:2},{value:"... Programmatically",id:"-programmatically",level:3},{value:"... with a Shell Script (CLI)",id:"-with-a-shell-script-cli",level:3},{value:"Example (email and password)",id:"example-email-and-password",level:2},{value:"The User Entity",id:"the-user-entity-1",level:3},{value:"The create-user Shell Script",id:"the-create-user-shell-script",level:3},{value:"Using another ORM/ODM",id:"using-another-ormodm",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-user-entity"},"The User Entity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Entity, PrimaryGenerateColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number\n\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," entity is the core of the authentication and authorization system. It is a class that represents the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," table in the database and each of its instances represents a row in this table."),(0,a.kt)("p",null,"The class definition is usually located in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/entities/user.entity.ts"),". Its attributes represent the columns of the table. "),(0,a.kt)("p",null,"In FoalTS you can customize the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class to suit your needs. The framework makes no assumptions about the attributes required by the user objects. Maybe you'll need a ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," column, maybe not. Maybe the authentication will be processed with an email and a password or maybe you will use an authentication token. The choice is yours!"),(0,a.kt)("p",null,"However, FoalTS provides abstract classes from which you can extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," entity. Such classes, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"UserWithPermissions"),", have useful utilities for handling authentication and authorization, so that you do not have to reinvent the wheel."),(0,a.kt)("h2",{id:"creating-users-"},"Creating Users ..."),(0,a.kt)("p",null,"There are several ways to create users."),(0,a.kt)("h3",{id:"-programmatically"},"... Programmatically"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { User } from './src/app/entities';\n\nasync function main() {\n  const user = new User();\n  user.foo = 1;\n  await user.save(); 1\n  });\n}\n")),(0,a.kt)("h3",{id:"-with-a-shell-script-cli"},"... with a Shell Script (CLI)"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"create-user")," shell script (located in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/scripts"),") to create a new user through the command line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\nfoal run create-user\n")),(0,a.kt)("h2",{id:"example-email-and-password"},"Example (email and password)"),(0,a.kt)("p",null,"This section describes how to create users with an email and a password."),(0,a.kt)("h3",{id:"the-user-entity-1"},"The User Entity"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/entities/user.entity.ts")," and add two new columns: an email and a password."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { hashPassword } from '@foal/core';\nimport { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';\n\n@Entity()\nexport class User {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  @BeforeInsert()\n  @BeforeUpdate()\n  async hashPassword() {\n    // Hash the password before storing it in the database\n    this.password = await hashPassword(this.password);\n  }\n\n}\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: The ",(0,a.kt)("inlineCode",{parentName:"p"},"BeforeInsert")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BeforeUpdate")," are TypeORM decorators for Entity Listeners that run before the entity is saved in the db. In this example they take care of hashing the password. More info about ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity Listeners")," in the ",(0,a.kt)("a",{parentName:"p",href:"https://typeorm.io/#/listeners-and-subscribers"},"TypeORM docs"))),(0,a.kt)("h3",{id:"the-create-user-shell-script"},"The create-user Shell Script"),(0,a.kt)("p",null,"Running the ",(0,a.kt)("inlineCode",{parentName:"p"},"create-user")," script will result in an error since we do not provide an email and a password as arguments."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/scripts/create-user.ts")," and replace its content with the following lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { hashPassword } from '@foal/core';\n\n// App\nimport { User } from '../app/entities';\nimport { dataSource } from '../db';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' },\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport async function main(args) {\n  await dataSource.initialize();\n\n  try {\n    const user = new User();\n    user.email = args.email;\n    user.password = await hashPassword(args.password);\n\n    console.log(await user.save());\n  } catch (error: any) {\n    console.error(error.message);\n  } finally {\n    await dataSource.destroy();\n  }\n}\n\n")),(0,a.kt)("p",null,"You can now create a new user with these commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\nfoal run create-user email=mary@foalts.org password=mary_password\n")),(0,a.kt)("h2",{id:"using-another-ormodm"},"Using another ORM/ODM"),(0,a.kt)("p",null,"In this document, we used TypeORM to define the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," class and the ",(0,a.kt)("inlineCode",{parentName:"p"},"create-user")," shell script. However, you can still use another ORM/ODM if you want to."))}u.isMDXComponent=!0}}]);