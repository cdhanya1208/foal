"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),s=n(72389),i=n(67392),l=n(7094),p=n(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n;const{lazy:s,block:d,defaultValue:m,values:k,groupId:h,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:S}=(0,l.U)(),[T,N]=(0,r.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=h){const e=w[h];null!=e&&e!==T&&v.some((t=>t.value===e))&&N(e)}const R=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==T&&(x(t),N(a),null!=h&&S(h,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:P,onFocus:R,onClick:R},s,{className:(0,o.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},20803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),s=n(85162);const i={title:"CSRF Protection",sidebar_label:"CSRF"},l=void 0,p={unversionedId:"security/csrf-protection",id:"version-3.x/security/csrf-protection",title:"CSRF Protection",description:"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-3.x/security/csrf-protection.md",sourceDirName:"security",slug:"/security/csrf-protection",permalink:"/id/docs/3.x/security/csrf-protection",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-3.x/security/csrf-protection.md",tags:[],version:"3.x",frontMatter:{title:"CSRF Protection",sidebar_label:"CSRF"},sidebar:"someSidebar",previous:{title:"Response Headers",permalink:"/id/docs/3.x/security/http-headers-protection"},next:{title:"CORS",permalink:"/id/docs/3.x/security/cors"}},c={},u=[{value:"Defense Principle",id:"defense-principle",level:2},{value:"Authentication with Session Tokens",id:"authentication-with-session-tokens",level:3},{value:"Authentication with JSON Web Tokens",id:"authentication-with-json-web-tokens",level:3},{value:"Examples",id:"examples",level:2},{value:"Single-Page Applications (session tokens)",id:"single-page-applications-session-tokens",level:3},{value:"Server",id:"server",level:4},{value:"Client",id:"client",level:4},{value:"Single-Page Applications (JWTs)",id:"single-page-applications-jwts",level:3},{value:"Server",id:"server-1",level:4},{value:"Client",id:"client-1",level:4},{value:"Regular Web Applications (session tokens)",id:"regular-web-applications-session-tokens",level:3},{value:"Server",id:"server-2",level:4},{value:"Client",id:"client-2",level:4},{value:"Advanced",id:"advanced",level:2},{value:"Increase stateless protection (JWT)",id:"increase-stateless-protection-jwt",level:3},{value:"Custom CSRF cookie name",id:"custom-csrf-cookie-name",level:3},{value:"Disable CSRF protection on a specific route",id:"disable-csrf-protection-on-a-specific-route",level:3}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Source: ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md"},"OWASP")))),(0,r.kt)("h2",{id:"defense-principle"},"Defense Principle"),(0,r.kt)("p",null,"FoalTS combines two defenses to protect your application against a CSRF attack. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"SameSite")," cookie directive and a token-based technique to have in-depth protection."),(0,r.kt)("p",null,"When enabled, authentication cookies have their ",(0,r.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute set to ",(0,r.kt)("inlineCode",{parentName:"p"},"lax")," in order to prevent third-party websites from sending authenticated requests to your server. When they make a POST, PUT, PATCH or DELETE request to your application, the authentication cookie is not sent. As of November 2022, this protection is supported by 96% of modern browsers."),(0,r.kt)("p",null,"In addition, the framework provides token-based mitigation that works with either state (session tokens) or stateless (JWT). The client can read the ",(0,r.kt)("em",{parentName:"p"},"CSRF token")," either from the HTML page (using a template) or from the ",(0,r.kt)("inlineCode",{parentName:"p"},"XSRF-Token")," cookie. Then, the token must be included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header, the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-CSRF-Token")," header or in the body with the ",(0,r.kt)("inlineCode",{parentName:"p"},"_csrf")," field in any POST, PUT, PATCH or DELETE request sent to the server (see examples)."),(0,r.kt)("h3",{id:"authentication-with-session-tokens"},"Authentication with Session Tokens"),(0,r.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  session:\n    csrf:\n      enabled: true\n"))),(0,r.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "session": {\n      "csrf": {\n        "enabled": true\n      }\n    }\n  }\n}\n'))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    session: {\n      csrf: {\n        enabled: true\n      }\n    }\n  }\n}\n")))),(0,r.kt)("h3",{id:"authentication-with-json-web-tokens"},"Authentication with JSON Web Tokens"),(0,r.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    csrf:\n      enabled: true\n"))),(0,r.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "csrf": {\n        "enabled": true\n      }\n    }\n  }\n}\n'))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    jwt: {\n      csrf: {\n        enabled: true\n      }\n    }\n  }\n}\n")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"single-page-applications-session-tokens"},"Single-Page Applications (session tokens)"),(0,r.kt)("h4",{id:"server"},"Server"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context,\n  createSession,\n  dependency,\n  HttpResponseNoContent,\n  HttpResponseUnauthorized,\n  Post,\n  Store,\n  UseSessions,\n  ValidateBody,\n  verifyPassword\n} from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = { /* ... */ };\n\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  @UseSessions({\n    cookie: true,\n    required: false,\n  })\n  async login(ctx: Context) {\n    const user = await User.findOneBy({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = ctx.session || await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseNoContent();\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"api.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseCreated, UseSessions } from '@foal/core';\n\n@UseSessions({\n  cookie: true,\n  required: true,\n})\nexport class ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),(0,r.kt)("h4",{id:"client"},"Client"),(0,r.kt)("p",null,"The client must retrieve the ",(0,r.kt)("em",{parentName:"p"},"CSRF token")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"XSRF-Token")," cookie and then send it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header, the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-CSRF-Token")," header or in the request body with the ",(0,r.kt)("inlineCode",{parentName:"p"},"_csrf")," field."),(0,r.kt)("p",null,"Most modern request libraries already handle it automatically for you using the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header."),(0,r.kt)(o.Z,{defaultValue:"angular",values:[{label:"Angular HttpClient",value:"angular"},{label:"Axios",value:"axios"},{label:"Native JavaScript",value:"native"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("p",null,"No additional configuration required.")),(0,r.kt)(s.Z,{value:"axios",mdxType:"TabItem"},(0,r.kt)("p",null,"No additional configuration required.")),(0,r.kt)(s.Z,{value:"native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"async function postData(url = '', data = {}) {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      // Assuming you use this library: https://www.npmjs.com/package/js-cookie.\n      'X-XSRF-TOKEN': Cookies.get('XSRF-Token')\n    },\n    body: JSON.stringify(data),\n  });\n  return response.json();\n}\n")))),(0,r.kt)("h3",{id:"single-page-applications-jwts"},"Single-Page Applications (JWTs)"),(0,r.kt)("h4",{id:"server-1"},"Server"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context,\n  HttpResponseNoContent,\n  HttpResponseUnauthorized,\n  Post,\n  ValidateBody,\n  verifyPassword\n} from '@foal/core';\nimport { getSecretOrPrivateKey, setAuthCookie } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = { /* ... */ };\n\nexport class AuthController {\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n    async login(ctx: Context) {\n    const user = await User.findOneBy({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const token: string = await new Promise((resolve, reject) => {\n      sign(\n        { email: user.email },\n        getSecretOrPrivateKey(),\n        { subject: user.id.toString() },\n        (err, encoded) => {\n          if (err) {\n            return reject(err);\n          }\n          resolve(encoded as string);\n        }\n      );\n    });\n\n    const response = new HttpResponseNoContent();\n    // Do not forget the \"await\" keyword.\n    await setAuthCookie(response, token);\n    return response;\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"api.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseCreated } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({\n  cookie: true,\n})\nexport class ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),(0,r.kt)("h4",{id:"client-1"},"Client"),(0,r.kt)("p",null,"Same as session tokens."),(0,r.kt)("h3",{id:"regular-web-applications-session-tokens"},"Regular Web Applications (session tokens)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Regular Web Applications")," use ",(0,r.kt)("em",{parentName:"p"},"Server-Side Rendering")," to generate their HTML pages. "),(0,r.kt)("h4",{id:"server-2"},"Server"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context,\n  createSession,\n  dependency,\n  HttpResponseRedirect,\n  Post,\n  Store,\n  UseSessions,\n  ValidateBody,\n  verifyPassword\n} from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = { /* ... */ };\n\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  @UseSessions({\n    cookie: true,\n    required: false,\n  })\n  async login(ctx: Context) {\n    const user = await User.findOneBy({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseRedirect('/login');\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseRedirect('/login');\n    }\n\n    ctx.session = ctx.session || await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseRedirect('/products');\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"view.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Context,\n  dependency,\n  Get,\n  render,\n  Store,\n  UseSessions,\n} from '@foal/core';\n\nexport class ViewController {\n  @dependency\n  store: Store;\n\n  @Get('/login')\n  async login(ctx: Context) {\n    return render('./templates/login.html');\n  }\n\n  @Get('/products')\n  @UseSessions({\n    cookie: true,\n    required: true,\n    redirectTo: '/login'\n  })\n  async index(ctx: Context) {\n    return render(\n      './templates/products.html',\n      { csrfToken: ctx.session!.get('csrfToken') },\n    );\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"api.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseRedirect, UseSessions } from '@foal/core';\n\n@UseSessions({\n  cookie: true,\n  required: true,\n  redirectTo: '/login'\n})\nexport class ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseRedirect('/products');\n  }\n}\n")),(0,r.kt)("h4",{id:"client-2"},"Client"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"login.html")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <title>Log in</title>\n  </head>\n  <body>\n    <form method="POST" action="/login">\n      <input name="email" type="email" >\n      <input name="password" type="password" >\n      <button type="submit">Log in</button>\n    </form>\n  </body>\n</html>\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"products.html")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <title>Add a product</title>\n  </head>\n  <body>\n    <form method="POST" action="/api/products">\n      <input style="display: none" name="_csrf" value="{{ csrfToken }}">\n      <input name="name" type="text">\n      <button type="submit">Add product</button>\n    </form>\n  </body>\n</html>\n')),(0,r.kt)("h2",{id:"advanced"},"Advanced"),(0,r.kt)("h3",{id:"increase-stateless-protection-jwt"},"Increase stateless protection (JWT)"),(0,r.kt)("p",null,"In FoalTS, stateless CSRF protection is based on the double submit technique. CSRF tokens are generated randomly and signed with the JWT secret or RSA private key."),(0,r.kt)("p",null,"To increase the effectiveness of protection against sub-domain attacks, your auth JWT must include a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"subject")," per user (usually the user ID) and an expiration date. The framework will then use these to create and sign the ",(0,r.kt)("em",{parentName:"p"},"CSRF token"),"."),(0,r.kt)("h3",{id:"custom-csrf-cookie-name"},"Custom CSRF cookie name"),(0,r.kt)("p",null,"The name of the CSRF cookie can be changed in the configuration."),(0,r.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    csrf:\n      enabled: true\n      cookie:\n        name: CSRF-Token # Default: XSRF-TOKEN\n"))),(0,r.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "csrf": {\n        "enabled": true,\n        "cookie": {\n          "name": "CSRF-Token"\n        }\n      }\n    }\n  }\n}\n'))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    jwt: {\n      csrf: {\n        enabled: true,\n        cookie: {\n          name: "CSRF-Token"\n        }\n      }\n    }\n  }\n}\n')))),(0,r.kt)("h3",{id:"disable-csrf-protection-on-a-specific-route"},"Disable CSRF protection on a specific route"),(0,r.kt)("p",null,"In case the CSRF protection is enabled globally and you want to disable it for a specific route, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," option for that."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HttpResponseOK, Post, UseSessions } from '@foal/core';\n\nexport class ApiController {\n  @Post('/foo')\n  @UseSessions({ cookie: true })\n  foo() {\n    // This method has the CSRF protection enabled.\n    return new HttpResponseOK();\n  }\n\n  @Post('/bar')\n  @UseSessions({ cookie: true, csrf: false })\n  bar() {\n    // This method does not have the CSRF protection enabled.\n    return new HttpResponseOK();\n  }\n}\n\n")))}m.isMDXComponent=!0}}]);