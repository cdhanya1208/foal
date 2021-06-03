(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(288)),i={title:"Les Mod\xe8les User et Story"},l={unversionedId:"tutorials/real-world-example-with-react/3-the-models",id:"tutorials/real-world-example-with-react/3-the-models",isDocsHomePage:!1,title:"Les Mod\xe8les User et Story",description:"Maintenant que la connexion \xe0 la base de donn\xe9es est \xe9tablie, vous pouvez cr\xe9er vos deux entit\xe9s User et Story.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/3-the-models.md",slug:"/tutorials/real-world-example-with-react/3-the-models",permalink:"/fr/docs/tutorials/real-world-example-with-react/3-the-models",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/3-the-models.md",version:"current",sidebar:"someSidebar",previous:{title:"Base de Donn\xe9es (configuration)",permalink:"/fr/docs/tutorials/real-world-example-with-react/2-database-set-up"},next:{title:"Les Scripts Shell",permalink:"/fr/docs/tutorials/real-world-example-with-react/4-the-shell-scripts"}},s=[{value:"Le Mod\xe8le <code>User</code>",id:"le-mod\xe8le-user",children:[]},{value:"Le Mod\xe8le <code>Story</code>",id:"le-mod\xe8le-story",children:[]},{value:"Ex\xe9cuter les Migrations",id:"ex\xe9cuter-les-migrations",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Maintenant que la connexion \xe0 la base de donn\xe9es est \xe9tablie, vous pouvez cr\xe9er vos deux entit\xe9s ",Object(o.b)("inlineCode",{parentName:"p"},"User")," et ",Object(o.b)("inlineCode",{parentName:"p"},"Story"),"."),Object(o.b)("p",null,"L'entit\xe9 ",Object(o.b)("inlineCode",{parentName:"p"},"User")," sera le mod\xe8le utilis\xe9 par le framework pour identifier les utilisateurs et l'entit\xe9 ",Object(o.b)("inlineCode",{parentName:"p"},"Story")," repr\xe9sentera les posts des utilisateurs."),Object(o.b)("h2",{id:"le-mod\xe8le-user"},"Le Mod\xe8le ",Object(o.b)("inlineCode",{parentName:"h2"},"User")),Object(o.b)("p",null,"Ouvrez le fichier ",Object(o.b)("inlineCode",{parentName:"p"},"user.entity.ts")," du r\xe9pertoire ",Object(o.b)("inlineCode",{parentName:"p"},"entities")," et ajoutez quatre nouvelles propri\xe9t\xe9s \xe0 votre mod\xe8le : ",Object(o.b)("inlineCode",{parentName:"p"},"email"),", ",Object(o.b)("inlineCode",{parentName:"p"},"password"),", ",Object(o.b)("inlineCode",{parentName:"p"},"name")," et ",Object(o.b)("inlineCode",{parentName:"p"},"avatar"),"."),Object(o.b)("p",null,"La colonne ",Object(o.b)("inlineCode",{parentName:"p"},"avatar")," contiendra les chemins vers les images de profil."),Object(o.b)("p",null,"Vous devrez \xe9galement exporter un mod\xe8le suppl\xe9mentaire ",Object(o.b)("inlineCode",{parentName:"p"},"DatabaseSession")," du paquet ",Object(o.b)("inlineCode",{parentName:"p"},"@foal/typeorm"),". Vous n'avez pas besoin de vous en pr\xe9occuper maintenant, il sera utilis\xe9 plus tard dans le tutoriel lorsque vous ajouterez l'authentification."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n\n  @Column()\n  name: string;\n\n  @Column()\n  avatar: string;\n\n}\n\n// This line is required. It will be used to create the SQL session table later in the tutorial.\nexport { DatabaseSession } from '@foal/typeorm';\n")),Object(o.b)("h2",{id:"le-mod\xe8le-story"},"Le Mod\xe8le ",Object(o.b)("inlineCode",{parentName:"h2"},"Story")),Object(o.b)("p",null,"Cr\xe9ez ensuite votre deuxi\xe8me entit\xe9."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"foal generate entity story\n")),Object(o.b)("p",null,"Ouvrez le nouveau fichier et ajoutez trois nouvelles propri\xe9t\xe9s : ",Object(o.b)("inlineCode",{parentName:"p"},"author"),", ",Object(o.b)("inlineCode",{parentName:"p"},"title")," et ",Object(o.b)("inlineCode",{parentName:"p"},"link"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';\nimport { User } from './user.entity';\n\n@Entity()\nexport class Story extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @ManyToOne(type => User, { nullable: false })\n  author: User;\n\n  @Column()\n  title: string;\n\n  @Column()\n  link: string;\n\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Par d\xe9faut, TypeORM permet aux relations ",Object(o.b)("em",{parentName:"p"},"many-to-one")," d'\xeatre nullables. L'option pass\xe9e au d\xe9corateur sp\xe9cifie que celle-ci ne peut pas l'\xeatre.")),Object(o.b)("h2",{id:"ex\xe9cuter-les-migrations"},"Ex\xe9cuter les Migrations"),Object(o.b)("p",null,"Enfin, cr\xe9ez les tables dans la base de donn\xe9es. G\xe9n\xe9rez les migrations \xe0 partir des entit\xe9s et ex\xe9cutez-les."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run makemigrations\nnpm run migrations\n")),Object(o.b)("p",null,"Trois nouvelles tables sont ajout\xe9es \xe0 la base de donn\xe9es : les tables ",Object(o.b)("inlineCode",{parentName:"p"},"user")," et ",Object(o.b)("inlineCode",{parentName:"p"},"story")," et une table ",Object(o.b)("inlineCode",{parentName:"p"},"sessions"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"+------------+-----------+-------------------------------------+\n|                             user                             |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| email      | varchar   | UNIQUE NOT NULL                     |\n| password   | varchar   | NOT NULL                            |\n| name       | varchar   | NOT NULL                            |\n| avatar     | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"+------------+-----------+-------------------------------------+\n|                             story                            |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| authorId   | integer   | NOT NULL                            |\n| title      | varchar   | NOT NULL                            |\n| link       | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n")))}u.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);