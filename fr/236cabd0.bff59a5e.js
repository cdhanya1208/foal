(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(288)),s={title:"Les Scripts Shell"},i={unversionedId:"tutorials/real-world-example-with-react/4-the-shell-scripts",id:"tutorials/real-world-example-with-react/4-the-shell-scripts",isDocsHomePage:!1,title:"Les Scripts Shell",description:"Vos mod\xe8les sont pr\xeats \xe0 \xeatre utilis\xe9s. Comme dans le tutoriel pr\xe9c\xe9dent, vous allez utiliser des scripts shell pour alimenter la base de donn\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/4-the-shell-scripts.md",slug:"/tutorials/real-world-example-with-react/4-the-shell-scripts",permalink:"/fr/docs/tutorials/real-world-example-with-react/4-the-shell-scripts",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/4-the-shell-scripts.md",version:"current",sidebar:"someSidebar",previous:{title:"Les Mod\xe8les User et Story",permalink:"/fr/docs/tutorials/real-world-example-with-react/3-the-models"},next:{title:"Votre Premi\xe8re Route",permalink:"/fr/docs/tutorials/real-world-example-with-react/5-our-first-route"}},l=[{value:"Le script <code>cr\xe9er-utilisateur</code>",id:"le-script-cr\xe9er-utilisateur",children:[]},{value:"Le sc\xe9nario <code>create-story</code>.",id:"le-sc\xe9nario-create-story",children:[]}],c={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Vos mod\xe8les sont pr\xeats \xe0 \xeatre utilis\xe9s. Comme dans le tutoriel pr\xe9c\xe9dent, vous allez utiliser des scripts shell pour alimenter la base de donn\xe9es."),Object(o.b)("h2",{id:"le-script-cr\xe9er-utilisateur"},"Le script ",Object(o.b)("inlineCode",{parentName:"h2"},"cr\xe9er-utilisateur")),Object(o.b)("p",null,"Un script appel\xe9 ",Object(o.b)("inlineCode",{parentName:"p"},"create-user")," existe d\xe9j\xe0 dans le r\xe9pertoire ",Object(o.b)("inlineCode",{parentName:"p"},"scripts"),"."),Object(o.b)("p",null,"Ouvrez le fichier et remplacez son contenu par ce qui suit :"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { hashPassword } from '@foal/core';\nimport { createConnection, getConnection } from 'typeorm';\n\n// App\nimport { User } from '../app/entities';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email', maxLength: 255 },\n    password: { type: 'string' },\n    name: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport async function main(args: { email: string, password: string, name?: string }) {\n  const user = new User();\n  user.email = args.email;\n  user.password = await hashPassword(args.password);\n  user.name = args.name ?? 'Unknown';\n  user.avatar = '';\n\n  await createConnection();\n\n  try {\n    console.log(await user.save());\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    await getConnection().close();\n  }\n}\n\n")),Object(o.b)("p",null,"Certaines parties de ce code devraient vous sembler famili\xe8res."),Object(o.b)("p",null,"L'objet ",Object(o.b)("inlineCode",{parentName:"p"},"schema")," est utilis\xe9 pour valider les arguments tap\xe9s sur la ligne de commande. Dans notre cas, le script attend deux param\xe8tres obligatoires ",Object(o.b)("inlineCode",{parentName:"p"},"email")," et ",Object(o.b)("inlineCode",{parentName:"p"},"password")," et un optionnel ",Object(o.b)("inlineCode",{parentName:"p"},"name"),". La propri\xe9t\xe9 ",Object(o.b)("inlineCode",{parentName:"p"},"format")," v\xe9rifie que la cha\xeene ",Object(o.b)("inlineCode",{parentName:"p"},"email")," est un email (pr\xe9sence du caract\xe8re ",Object(o.b)("inlineCode",{parentName:"p"},"@"),", etc). "),Object(o.b)("p",null,"La fonction ",Object(o.b)("inlineCode",{parentName:"p"},"main")," est appel\xe9e apr\xe8s que la validation ait r\xe9ussi. Elle est divis\xe9e en plusieurs parties. D'abord, elle cr\xe9e un nouvel utilisateur avec les arguments sp\xe9cifi\xe9s dans la ligne de commande. Ensuite, elle \xe9tablit une connexion avec la base de donn\xe9es et enregistre l'utilisateur."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"La fonction ",Object(o.b)("inlineCode",{parentName:"p"},"hashPassword")," est utilis\xe9e pour hacher et saler les mots de passe avant de les stocker dans la base de donn\xe9es. Pour des raisons de s\xe9curit\xe9, vous devez utiliser cette fonction avant de sauvegarder les mots de passe.")),Object(o.b)("p",null,"Construisez le script."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),Object(o.b)("p",null,"Cr\xe9ez ensuite deux nouveaux utilisateurs."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'foal run create-user email="john@foalts.org" password="john_password" name="John"\nfoal run create-user email="mary@foalts.org" password="mary_password" name="Mary"\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Si vous essayez de r\xe9ex\xe9cuter l'une de ces commandes, vous obtiendrez l'erreur MySQL ci-dessous car la cl\xe9 ",Object(o.b)("inlineCode",{parentName:"p"},"email")," est unique."),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"ER_DUP_ENTRY: Duplicate entry 'john@foalts.org' for key 'IDX_xxx'"))),Object(o.b)("h2",{id:"le-sc\xe9nario-create-story"},"Le sc\xe9nario ",Object(o.b)("inlineCode",{parentName:"h2"},"create-story"),"."),Object(o.b)("p",null,"Le script ",Object(o.b)("inlineCode",{parentName:"p"},"create-story")," est un peu plus complexe car ",Object(o.b)("inlineCode",{parentName:"p"},"Story")," a une relation many-to-one avec ",Object(o.b)("inlineCode",{parentName:"p"},"User"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"foal generate script create-story\n")),Object(o.b)("p",null,"Ouvrez le fichier ",Object(o.b)("inlineCode",{parentName:"p"},"create-story.ts")," et remplacez son contenu."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { createConnection } from 'typeorm';\nimport { Story, User } from '../app/entities';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    author: { type: 'string', format: 'email', maxLength: 255 },\n    title: { type: 'string', maxLength: 255 },\n    link: { type: 'string', maxLength: 255 },\n  },\n  required: [ 'author', 'title', 'link' ],\n  type: 'object',\n};\n\nexport async function main(args: { author: string, title: string, link: string }) {\n  const connection = await createConnection();\n\n  const user = await User.findOneOrFail({ email: args.author });\n\n  const story = new Story();\n  story.author = user;\n  story.title = args.title;\n  story.link = args.link;\n\n  try {\n    console.log(await story.save());\n  } catch (error) {\n    console.error(error);\n  } finally {\n    await connection.close();\n  }\n}\n\n")),Object(o.b)("p",null,"Nous avons ajout\xe9 un param\xe8tre ",Object(o.b)("inlineCode",{parentName:"p"},"author")," pour savoir quel utilisateur a post\xe9 l'article. Il attend l'email de l'utilisateur."),Object(o.b)("p",null,"La fonction ",Object(o.b)("inlineCode",{parentName:"p"},"main")," essaie alors de trouver l'utilisateur qui poss\xe8de cet email. S'il existe, l'utilisateur est ajout\xe9 \xe0 la ",Object(o.b)("em",{parentName:"p"},"story")," en tant qu'auteur. Si ce n'est pas le cas, le script se termine par un message affich\xe9 dans la console."),Object(o.b)("p",null,"Construisez le script."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),Object(o.b)("p",null,"Et cr\xe9ez de nouveaux posts pour chaque utilisateur."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'foal run create-story author="john@foalts.org" title="How to build a simple to-do list" link="https://foalts.org/docs/tutorials/simple-todo-list/1-installation"\nfoal run create-story author="mary@foalts.org" title="FoalTS architecture overview" link="https://foalts.org/docs/architecture/architecture-overview"\nfoal run create-story author="mary@foalts.org" title="Authentication with Foal" link="https://foalts.org/docs/authentication-and-access-control/quick-start"\n')))}p.isMDXComponent=!0},288:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,i(i({ref:t},c),{},{components:r})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);