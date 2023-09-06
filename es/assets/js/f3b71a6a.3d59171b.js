"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5710],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>h});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),i=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return n?t.createElement(d,l(l({ref:r},c),{},{components:n})):t.createElement(d,l({ref:r},c))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59087:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var t=n(87462),a=(n(67294),n(3905));const o={title:"GraphQL"},l=void 0,p={unversionedId:"common/graphql",id:"common/graphql",title:"GraphQL",description:"GraphQL is a query language for APIs. Unlike traditional REST APIs, GraphQL APIs have only one endpoint to which requests are sent. The content of the request describes all the operations to be performed and the data to be returned in the response. Many resources can be retrieved in a single request and the client gets exactly the properties it asks for.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/common/graphql.md",sourceDirName:"common",slug:"/common/graphql",permalink:"/es/docs/common/graphql",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/graphql.md",tags:[],version:"current",frontMatter:{title:"GraphQL"},sidebar:"someSidebar",previous:{title:"OpenAPI",permalink:"/es/docs/common/openapi-and-swagger-ui"},next:{title:"WebSockets",permalink:"/es/docs/common/websockets"}},s={},i=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Using Separate Files for Type Definitions",id:"using-separate-files-for-type-definitions",level:2},{value:"Using a Service for the Root Resolvers",id:"using-a-service-for-the-root-resolvers",level:2},{value:"GraphiQL",id:"graphiql",level:2},{value:"Custom GraphiQL Options",id:"custom-graphiql-options",level:3},{value:"Custom API endpoint",id:"custom-api-endpoint",level:3},{value:"Custom CSS theme",id:"custom-css-theme",level:3},{value:"Error Handling - Masking &amp; Logging Errors",id:"error-handling---masking--logging-errors",level:2},{value:"Authentication &amp; Authorization",id:"authentication--authorization",level:2},{value:"Using TypeGraphQL",id:"using-typegraphql",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Override the Resolver Context",id:"override-the-resolver-context",level:3}],c={toc:i};function u(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," is a query language for APIs. Unlike traditional REST APIs, GraphQL APIs have only one endpoint to which requests are sent. The content of the request describes all the operations to be performed and the data to be returned in the response. Many resources can be retrieved in a single request and the client gets exactly the properties it asks for."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example of request")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  project(name: "GraphQL") {\n    tagline\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example of response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "project": {\n      "tagline": "A query language for APIs"\n    }\n  }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The below document assumes that you have a basic knowledge of GraphQL.")),(0,a.kt)("p",null,"To use GraphQL with FoalTS, you need to install the packages ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@foal/graphql"),". The first one is maintained by the GraphQL community and parses and resolves queries. The second is specific to FoalTS and allows you to configure a controller compatible with common GraphQL clients (",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql-request"},"graphql-request"),", etc), load type definitions from separate files or handle errors thrown in resolvers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install graphql@16 @foal/graphql\n")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"The main component of the package is the abstract ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQLController"),". Inheriting this class allows you to create a controller that is compatible with common GraphQL clients (",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql-request"},"graphql-request"),", etc) or any client that follows the HTTP specification defined ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/serving-over-http/"},"here"),"."),(0,a.kt)("p",null,"Here is an example on how to use it with a simple schema and resolver."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class AppController {\n  subControllers = [\n    controller('/graphql', ApiController)\n  ]\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"api.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLController } from '@foal/graphql';\nimport { buildSchema } from 'graphql';\n\nconst schema = buildSchema(`\n  type Query {\n    hello: String\n  }\n`);\n\nconst root = {\n  hello: () => {\n    return 'Hello world!';\n  },\n};\n\nexport class ApiController extends GraphQLController {\n  schema = schema;\n  resolvers = root;\n}\n")),(0,a.kt)("p",null,"And here is an example of what your client code might look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { request } from 'graphql-request';\n\nconst data = await request('/graphql', '{ hello }');\n// data equals \"{ hello: 'Hello world!' }\"\n")),(0,a.kt)("p",null,"Alternatively, if you have several strings that define your GraphQL types, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"schemaFromTypeDefs")," function to build the schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLController, schemaFromTypeDefs } from '@foal/graphql';\n\nconst source1 = `\n  type Query {\n    me: User\n  }\n`;\nconst source2 = `\n  type User {\n    id: ID\n    name: String\n  }\n`;\n\n// ...\n\nexport class ApiController extends GraphQLController {\n  schema = schemaFromTypeDefs(source1, source2);\n  // ...\n}\n\n")),(0,a.kt)("h2",{id:"using-separate-files-for-type-definitions"},"Using Separate Files for Type Definitions"),(0,a.kt)("p",null,"If you want to specify type definitions in separate files, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"schemaFromTypeGlob")," function for this."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"src/\n'- app/\n  '- controllers/\n    |- query.graphql\n    |- user.graphql\n    '- api.controller.ts\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"query.graphql")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  me: User\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"user.graphql")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  id: ID\n  name: String\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"api.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLController, schemaFromTypeGlob } from '@foal/graphql';\nimport { join } from 'path';\n\nexport class ApiController extends GraphQLController {\n  schema = schemaFromTypeGlob(join(__dirname, '**/*.graphql'));\n  // ...\n}\n")),(0,a.kt)("p",null,"Note that for this to work, you must copy the graphql files during the build. To do this, you need to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"copy")," package and update some commands of your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install cpx2  --save-dev\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build": "foal rmdir build && cpx \\"src/**/*.graphql\\" build && tsc -p tsconfig.app.json",\n    "dev": "npm run build && concurrently \\"cpx \\\\\\"src/**/*.graphql\\\\\\" build -w\\" \\"tsc -p tsconfig.app.json -w\\" \\"supervisor -w ./build,./config -e js,json,yml,graphql --no-restart-on error ./build/index.js\\"",\n    "build:test": "foal rmdir build && cpx \\"src/**/*.graphql\\" build && tsc -p tsconfig.test.json",\n    "test": "npm run build:test && concurrently \\"cpx \\\\\\"src/**/*.graphql\\\\\\" build -w\\" \\"tsc -p tsconfig.test.json -w\\" \\"mocha --file ./build/test.js -w --watch-files build \\\\\\"./build/**/*.spec.js\\\\\\"\\"",\n    "build:e2e": "foal rmdir build && cpx \\"src/**/*.graphql\\" build && tsc -p tsconfig.e2e.json",\n    "e2e": "npm run build:e2e && concurrently \\"cpx \\\\\\"src/**/*.graphql\\\\\\" build -w\\" \\"tsc -p tsconfig.e2e.json -w\\" \\"mocha --file ./build/e2e.js -w --watch-files build \\\\\\"./build/e2e/**/*.js\\\\\\"\\"",\n    ...\n  }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Alternatively, if you want to specify only specific files instead of using a glob pattern, you can call ",(0,a.kt)("inlineCode",{parentName:"p"},"schemaFromTypePaths"),"."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLController, schemaFromTypePaths } from '@foal/graphql';\nimport { join } from 'path';\n\nexport class ApiController extends GraphQLController {\n  schema = schemaFromTypePaths(\n    join(__dirname, './query.graphql'),\n    join(__dirname, './user.graphql')\n  );\n  // ...\n}\n"))),(0,a.kt)("h2",{id:"using-a-service-for-the-root-resolvers"},"Using a Service for the Root Resolvers"),(0,a.kt)("p",null,"Root resolvers can also be grouped into a service in order to benefit from all the advantages offered by services (dependency injection, etc.). All you have to do is add the ",(0,a.kt)("inlineCode",{parentName:"p"},"@dependency")," decorator as you would with any service."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"api.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency } from '@foal/core';\nimport { GraphQLController } from '@foal/graphql';\nimport { RootResolverService } from '../services';\n\n// ...\n\nexport class ApiController extends GraphQLController {\n  schema = // ...\n\n  @dependency\n  resolvers: RootResolverService;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"root-resolver.service.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class RootResolverService {\n\n  hello() {\n    return 'Hello world!';\n  }\n\n}\n")),(0,a.kt)("h2",{id:"graphiql"},"GraphiQL"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GraphiQL",src:n(41088).Z,width:"988",height:"601"})),(0,a.kt)("p",null,"You can generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphiQL")," page with the ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphiQLController")," class by installing the following package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @foal/graphiql\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"app.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller } from '@foal/core';\nimport { GraphiQLController } from '@foal/graphiql';\n\nimport { GraphqlApiController } from './services';\n\nexport class AppController {\n\n  subControllers = [\n    // ...\n    controller('/graphql', GraphqlApiController),\n    controller('/graphiql', GraphiQLController)\n  ];\n\n}\n")),(0,a.kt)("h3",{id:"custom-graphiql-options"},"Custom GraphiQL Options"),(0,a.kt)("p",null,"Most ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql/tree/main/packages/graphiql#props"},"GraphiQL options")," are supported and can be provided by inheriting the ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphiQLController")," class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphiQLController, GraphiQLControllerOptions } from '@foal/graphiql';\n\nexport class GraphiQL2Controller extends GraphiQLController {\n  options: GraphiQLControllerOptions = {\n    docExplorerOpen: true,\n  }\n}\n\n")),(0,a.kt)("h3",{id:"custom-api-endpoint"},"Custom API endpoint"),(0,a.kt)("p",null,"By default, the GraphiQL page assumes that the GraphiQL API is located at ",(0,a.kt)("inlineCode",{parentName:"p"},"/graphql"),". This behavior can be overridden with the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiEndpoint")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphiQLController, GraphiQLControllerOptions } from '@foal/graphiql';\n\nexport class GraphiQL2Controller extends GraphiQLController {\n  apiEndpoint = '/api';\n}\n\n")),(0,a.kt)("h3",{id:"custom-css-theme"},"Custom CSS theme"),(0,a.kt)("p",null,"In order to change the page theme, the controller class allows you to include custom CSS files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphiQLController, GraphiQLControllerOptions } from '@foal/graphiql';\n\nexport class GraphiQL2Controller extends GraphiQLController {\n  cssThemeURL = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.23.0/theme/solarized.css';\n\n  options: GraphiQLControllerOptions = {\n    editorTheme: 'solarized light'\n  }\n}\n\n")),(0,a.kt)("h2",{id:"error-handling---masking--logging-errors"},"Error Handling - Masking & Logging Errors"),(0,a.kt)("p",null,"By default, GraphQL returns all errors thrown (or rejected) in the resolvers. However, this behavior is often not desired in production as it could cause sensitive information to leak from the server."),(0,a.kt)("p",null,"In comparison with REST APIs, when the ",(0,a.kt)("a",{parentName:"p",href:"/es/docs/architecture/configuration"},"configuration key"),"  ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.debug")," does not equal ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," (production case), details of the errors thrown in controllers are not returned to the client. Only a ",(0,a.kt)("inlineCode",{parentName:"p"},"500 - Internal Server Error")," error is sent back."),(0,a.kt)("p",null,"In a similar way, FoalTS provides two utilities ",(0,a.kt)("inlineCode",{parentName:"p"},"formatError")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@FormatError")," for your GraphQL APIs to log and mask errors.  When ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.debug")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the errors are converted into a new one whose unique message is ",(0,a.kt)("inlineCode",{parentName:"p"},"Internal Server Error"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example of GraphQL response in production")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": { "user": null },\n  "errors": [\n    {\n      "locations": [ { "column": 2, "line": 1 } ],\n      "message": "Internal Server Error",\n      "path": [ "user" ]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Here are examples on how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"formatError")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@FormatError"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function user() {\n  // ...\n}\n\nconst resolvers = {\n  user: formatError(user)\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class ResolverService {\n  @FormatError()\n  user() {\n    // ...\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"formatError")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@FormatError")," make your functions become asynchronous. This means that any value returned by the function is now a resolved promise of this value, and any errors thrown in the function is converted into a rejected promise. This only has an impact on unit testing as you may need to preceed your function calls by the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"await"),".")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"formatError")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@FormatError")," also accept an optional parameter to override its default behavior. It is a function that takes the error thrown or rejected in the resolver and return the error that must be sent to the client. It may be asynchronous or synchronous."),(0,a.kt)("p",null,"By default, this function is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function maskAndLogError(err: any): any {\n  console.log(err);\n\n  if (Config.get('settings.debug', 'boolean')) {\n    return err;\n  }\n\n  return new Error('Internal Server Error');\n}\n")),(0,a.kt)("p",null,"But we can also imagine other implementations such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { reportErrorTo3rdPartyService } from 'somewhere';\n\nasync function maskAndLogError(err: any): Promise<any> {\n  console.log(err);\n\n  try {\n    await reportErrorTo3rdPartyService(err);\n  } catch (error: any) {}\n\n  if (err instanceof MyCustomError) {\n    return err;\n  }\n\n  if (Config.get('settings.debug', 'boolean')) {\n    return err;\n  }\n\n  return new Error('Internal Server Error');\n}\n")),(0,a.kt)("h2",{id:"authentication--authorization"},"Authentication & Authorization"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The below code is an example of managing authentication and authorization with a GraphQL controller.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"api.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLController } from '@foal/graphql';\nimport { JWTRequired } from '@foal/jwt';\nimport { buildSchema } from 'graphql';\n\nimport { User } from '../entities';\n\nconst schema = buildSchema(`\n  type Query {\n    hello: String\n  }\n`);\n\nconst root = {\n  hello: (_, context) => {\n    if (!context.user.isAdmin) {\n      return null;\n    }\n    return 'Hello world!';\n  },\n};\n\n@JWTRequired({ user: (id: number) => User.findOneBy({ id }) })\nexport class ApiController extends GraphQLController {\n  schema = schema;\n  resolvers = root;\n}\n")),(0,a.kt)("h2",{id:"using-typegraphql"},"Using TypeGraphQL"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://typegraphql.com/"},"TypeGraphQL")," is a library that allows you to create GraphQL schemas and resolvers with TypeScript classes and decorators."))),(0,a.kt)("p",null,"You can use TypeGraphQL by simply calling its ",(0,a.kt)("inlineCode",{parentName:"p"},"buildSchema")," function."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLController } from '@foal/graphql';\nimport { buildSchema, Field, ObjectType, Query, Resolver } from 'type-graphql';\n\n@ObjectType()\nclass Recipe {\n  @Field()\n  title: string;\n}\n\n@Resolver(Recipe)\nclass RecipeResolver {\n\n  @Query(returns => Recipe)\n  async recipe() {\n    return {\n      title: 'foobar'\n    };\n  }\n\n}\n\nexport class ApiController extends GraphQLController {\n  schema = buildSchema({\n    resolvers: [ RecipeResolver ]\n  });\n}\n")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("h3",{id:"override-the-resolver-context"},"Override the Resolver Context"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"GraphQL context")," that is passed to the resolvers is by default the ",(0,a.kt)("em",{parentName:"p"},"request context"),". This behavior can be changed by overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"getResolverContext")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@foal/core';\nimport { GraphQLController } from '@foal/graphql';\n\nexport class ApiController extends GraphQLController {\n  // ...\n\n  getResolverContext(ctx: Context) {\n    return { user: ctx.user };\n  }\n}\n")))}u.isMDXComponent=!0},41088:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/graphiql-f099ed2191f41190bd6569d1b5cd1267.png"}}]);