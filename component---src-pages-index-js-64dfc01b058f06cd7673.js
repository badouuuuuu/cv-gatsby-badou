(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{169:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a.n(n),r=a(0),o=a.n(r),l=a(170),s=a(193),c=a(184),m=a(171),u=a.n(m),d=a(173),p=a(183),g=a(185),h=a(187),f=a(186),b=function(e){var t=e.title,a=void 0===t?"about":t,n=e.text,i=void 0===n?"":n;return o.a.createElement(r.Fragment,null,o.a.createElement("h1",null,a),o.a.createElement("hr",{style:{color:"orange"}}),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}))},y={color:"orange",listStyle:"none",margin:"1rem auto",fontSize:"1rem",display:"grid"},w={color:"orange",listStyle:"none",margin:"1rem auto",fontSize:"1rem",gridColumn:"2",display:"grid"},v={display:"grid",gridTemplateColumn:"1fr auto 1fr"},x=function(e){var t=e.title,a=void 0===t?"Skills":t;e.skills;return o.a.createElement(r.Fragment,null,o.a.createElement("h1",{style:{margin:"0 auto"}},a),o.a.createElement("hr",null),o.a.createElement("div",{style:v},o.a.createElement("ul",{style:y},o.a.createElement("li",null,"HTML"),o.a.createElement("li",null,"CSS"),o.a.createElement("li",null,"Javascript"),o.a.createElement("li",null,"PHP")),o.a.createElement("ul",{style:w},o.a.createElement("li",null,"Laravel"),o.a.createElement("li",null,"VueJS"),o.a.createElement("li",null,"ReactJS"),o.a.createElement("li",null,"NodeJS"))))},N=a(216),E=a.n(N);function M(){var e=E()(["\n  .timeline__item div.inner {\n    width: 40%;\n    margin: 5px 0 0 0;\n  }\n\n  .timeline__item div.inner h2:after {\n    top: 20px;\n    left: unset;\n    \n    right: -5px;\n  }\n  .timeline__item:nth-child(2n+2) div.inner h2:after {\n    left: -5px;\n  }\n\n  "]);return M=function(){return e},e}var j=Object(l.default)(function(e){var t=e.className;return o.a.createElement("div",{id:"xp",className:t},o.a.createElement("h1",null,"Expérience Professionelle"),o.a.createElement("hr",null),o.a.createElement("br",null),u.a.jobs&&u.a.jobs.map(function(e){return o.a.createElement("article",{key:e.begin.month+e.begin.year,className:"timeline__item"},o.a.createElement("div",{className:"inner"},o.a.createElement("span",{className:"timeline__date"},o.a.createElement("span",{className:"timeline__month"},e.begin.month),o.a.createElement("span",{className:"timeline__year"},e.begin.year)),o.a.createElement("h2",{className:"timeline__title"},e.occupation," chez ",e.company," ",o.a.createElement("br",null),o.a.createElement("small",{className:"timeline__title--small"},"(",e.duration||"present",")")),o.a.createElement("p",null,e.description)))}))}).withConfig({displayName:"timeline",componentId:"sc-17iljv1-0"})(["position:relative;:before{content:'';display:block;position:absolute;left:50%;top:0;margin:70px 0 0 -1px;width:.1rem;height:calc(100% - 70px);background:orange;}.timeline__item{text-align:center;width:100%;margin:0 0 20px 0;position:relative;margin-bottom:2rem;}.timeline__item:after{content:'';display:block;clear:both;}.timeline__item div.inner{width:100%;float:left;margin:85px 0 0 0;border-radius:.5rem;border:.15rem solid orange;}.timeline__date{display:block;width:60px;padding:3px 5px;position:absolute;top:0;left:50%;margin:0 0 0 -30px;border-radius:100%;font-size:10px;font-weight:700;text-transform:uppercase;background:#25303B;color:#fff;box-shadow:0 0 0 7px #fff;}.timeline__date span{display:block;text-align:center;}.timeline__month{font-size:18px;padding-top:4px;}.timeline__year{font-size:10px;font-style:italic;color:orange;}.timeline__title{padding:15px;margin:0;color:#fff;font-size:20px;text-transform:uppercase;border-radius:3px 3px 0 0;position:relative;}.timeline__title:after{content:'';position:absolute;top:-5px;left:30%;width:10px;height:10px;transform:rotate(-45deg);}.timeline__item div.inner p{padding:15px;margin:0;font-size:14px;background:#fff;color:#656565;border-radius:0 0 6px 6px;}.timeline__item:nth-child(2n+2) div.inner{float:right;}.timeline__title{background:#25303B;}.inner p{font-style:italic;}.timeline__title:after{background:orange;border:.1rem solid orange;}.timeline__title--small{font-size:10px;}",""],function(e){return Object(s.config)().media.sm(M())}),C=(a(217),a(218)),L=a.n(C),k=(a(194),a(220)),z=a.n(k),_=a(221),I=a.n(_),D=Object(l.default)(function(e){var t=e.className;return o.a.createElement("div",{className:t},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}).withConfig({displayName:"loader",componentId:"sc-1vddm10-0"})(["display:inline-block;position:relative;width:64px;height:64px;margin:0 auto;div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #25303B;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#25303B transparent transparent transparent;}div:nth-child(1){animation-delay:-0.45s;}div:nth-child(2){animation-delay:-0.3s;}div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]),S="https://api.github.com/users/"+u.a.githubUsername+"/repos?type=owner&sort=updated",T=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={repos:[],status:"loading"},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=z()(L.a.mark(function e(){var t;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I()(S);case 2:(t=e.sent).json&&t.json.length&&this.setState({repos:t.json,status:"ready"});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){var e=this.state.status;return o.a.createElement("div",{className:this.props.className},o.a.createElement("h2",{id:"github"},"Projet sur Github "),o.a.createElement("hr",null),"loading"===e&&o.a.createElement("div",{className:"repositories__loader"},o.a.createElement(D,null)),"ready"===e&&this.state.repos&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"repositories__content"},this.state.repos.map(function(e){return o.a.createElement(o.a.Fragment,{key:e.name},o.a.createElement("div",{className:"repositories__repo"},o.a.createElement("a",{className:"repositories__repo-link",href:e.html_url,rel:"noopener noreferrer",target:"_blank"},o.a.createElement("strong",null,e.name)),o.a.createElement("div",{className:"repositories__desc"},e.description),o.a.createElement("div",{className:"repositories__repo-date"},"Updated: ",new Date(e.updated_at).toUTCString()),o.a.createElement("div",{className:"repositories__repo-star"},"★ ",e.stargazers_count)),o.a.createElement("hr",null))}))))},t}(o.a.Component),P=Object(l.default)(T).withConfig({displayName:"repositories",componentId:"v4d4qd-0"})(["position:relative;.repositories__content{margin-bottom:40px;}.repositories__repo{position:relative;color:grey;border:.04rem solid orange;padding:1rem;border-radius:1rem;margin:2rem;cursor:pointer;}.repositories__desc{font-size:.5rem;color:white;}.repositories__repo-link{text-decoration:none;color:orange;font-size:1rem;}.repositories__repo-date{color:#bbb;font-style:italic;font-size:.5rem;}.repositories__repo-star{position:absolute;top:0;right:0;color:orange;margin-right:1rem;margin-top:1rem;}.repositories__loader{display:flex;}"]),Q=l.default.header.withConfig({displayName:"footer__FooterWrapper",componentId:"q4ji9k-0"})(["position:fixed;bottom:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:#000a12;opacity:6;"]),Z=l.default.nav.withConfig({displayName:"footer__FooterNav",componentId:"q4ji9k-1"})(["margin-left:auto;margin-right:auto;width:100%;height:40px;display:flex;font-size:.7rem;flex-direction:row;max-width:960px;z-index:1000;justify-content:space-between;overflow-x:auto;overflow-y:hidden;background-color:#000a12;"]),A=Object(l.default)(function(e){var t=e.className;return o.a.createElement("a",{className:t,href:"https://github.com/"+u.a.githubUsername,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(c.b,{size:20}))}).withConfig({displayName:"footer__GithubLink",componentId:"q4ji9k-2"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;min-width:32px;z-index:10;"]),G=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(Q,null,o.a.createElement(Z,null,o.a.createElement("footer",{style:{margin:"0 auto",paddingTop:".3rem"}},o.a.createElement("p",{className:"websitefooter",style:{color:"white",margin:"0 auto",fontSize:".7rem",textAlign:"center"}},"www.badou.be")),o.a.createElement(A,null)))},t}(o.a.Component),U=a(172),J=a(222),Y=a.n(J),H=l.default.div.withConfig({displayName:"footerhero__FooterContainer",componentId:"yj2pit-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;filter:contrast(100%);img:hover{outline:none;}"]),O=l.default.div.withConfig({displayName:"footerhero__FooterTitleContainer",componentId:"yj2pit-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),K=l.default.h1.withConfig({displayName:"footerhero__FooterHeroTitle",componentId:"yj2pit-2"})(["font-weight:700;font-size:2.5rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);color:orange;"]),V={cursor:"pointer",border:"none",backgroundColor:"#fff5",color:"orange",borderRadius:".5rem",width:"40px",height:"40px",margin:"1rem",outline:"none"},B=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.className;return o.a.createElement(H,{className:a},o.a.createElement(O,null,o.a.createElement(K,null,t),o.a.createElement("p",{className:"download_cv"},"  Télécharger mon CV "),o.a.createElement("a",{href:"https://drive.google.com/file/d/1XYVN2qqVQKUsb4TNzdw4vaFXd5kQTCMT/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}," ",o.a.createElement("button",{className:"button_footer",style:V},o.a.createElement("img",{src:Y.a,alt:"download"}))),o.a.createElement("div",{className:"social"},u.a.social.github&&o.a.createElement("a",{className:"social-link github",href:u.a.social.github},o.a.createElement(c.b,{className:"social-icon",size:"22"})),u.a.social.linkedin&&o.a.createElement("a",{className:"social-link linkedin",href:u.a.social.linkedin},o.a.createElement(c.c,{className:"social-icon",size:"22"})),u.a.social.twitter&&o.a.createElement("a",{className:"social-link twitter",href:u.a.social.twitter},o.a.createElement(c.d,{className:"social-icon",size:"22"})),u.a.social.email&&o.a.createElement("a",{className:"social-link email",href:"mailto:"+u.a.social.email},o.a.createElement(c.a,{className:"social-icon",size:"22"})))))},t}(o.a.Component),F=Object(l.default)(B).withConfig({displayName:"footerhero",componentId:"yj2pit-3"})([""," background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;.download_cv{margin-top:1rem;margin-bottom:-.35rem;color:grey;}.social{margin-bottom:3rem;}.social-link{padding:.5rem;color:grey;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077B5;}a.social-link.email:hover{color:#c23a2b;}"],function(e){return"background-image: url("+(e.heroImg||Object(U.b)(u.a.siteCover))+");"}),q=a(223),W=a.n(q),R=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(p.a,{location:this.props.location},o.a.createElement(h.a,{title:"Je suis Youssef",keywords:["gatsbyjs","react","curriculum","belgium","stage","work","web","developper","developpeur","becode","becode.org","badouuuuuu","Youssef","el"]}),o.a.createElement(g.a,{heroImg:u.a.siteCover,title:"Je suis Youssef"}),o.a.createElement(f.a,{className:this.props.className},o.a.createElement(s.Container,{className:"page-content",fluid:!0},o.a.createElement(s.Row,null,o.a.createElement(s.Col,{xs:4,className:"avatar"},o.a.createElement("img",{className:"avatar__image",src:"/images/avatar2.jpeg",alt:"user avatar"}),o.a.createElement("div",{id:"skills"}),o.a.createElement("div",{className:"social"},u.a.social.github&&o.a.createElement("a",{className:"social-link github",href:u.a.social.github},o.a.createElement(c.b,{className:"social-icon",size:"32"})),u.a.social.linkedin&&o.a.createElement("a",{className:"social-link linkedin",href:u.a.social.linkedin},o.a.createElement(c.c,{className:"social-icon",size:"32"})),u.a.social.twitter&&o.a.createElement("a",{className:"social-link twitter",href:u.a.social.twitter},o.a.createElement(c.d,{className:"social-icon",size:"32"})),u.a.social.email&&o.a.createElement("a",{className:"social-link email",href:"mailto:"+u.a.social.email},o.a.createElement(c.a,{className:"social-icon",size:"32"}))))),o.a.createElement(s.Row,null,o.a.createElement(s.Col,{xs:4,sm:4},o.a.createElement(b,{title:"A propos",text:u.a.authorDescription})),o.a.createElement(s.Col,{xs:4,sm:4},o.a.createElement(x,{title:"Mes skills",skills:u.a.skills}))),o.a.createElement(j,null),o.a.createElement(P,null)),o.a.createElement(d.Link,{activeClass:"active",to:"top",spy:!0,smooth:!0,duration:700,onSetActive:this.handleSetActive},o.a.createElement("img",{className:"topicon",src:W.a,alt:"icon_back_top"}))),o.a.createElement(F,null),o.a.createElement("div",{id:"footer"}),o.a.createElement(G,null))},t}(o.a.Component);t.default=Object(l.default)(R).withConfig({displayName:"pages",componentId:"sc-1wky38e-0"})([".page-content{max-width:100%;margin-bottom:40px;}.topicon{width:20px;cursor:pointer;}hr{background-color:orange;width:35%;margin:1.2rem auto;padding:.07rem;}.avatar{align-items:center;margin-bottom:24px;}.avatar__image{box-shadow:3px 3px 15px 0px rgba(0,0,0,0.75);max-width:130px;border-radius:100px;margin:0 auto 24px;}.social{margin-top:12px;margin-bottom:12px;}.social-link{padding:8px;color:#555;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077B5;}a.social-link.email:hover{color:#c23a2b;}"])},171:function(e,t){e.exports={siteTitle:"Youssef El Hirech",siteDescription:"Create your online curriculum in just a few minutes with this starter",authorName:"Youssef El Hirech",twitterUsername:"badouuuuuu",githubUsername:"badouuuuuu",authorAvatar:"./images/avatar2.jpeg",authorDescription:" Je suis un developpeur junior ayant commencé le code il y a tout juste 6 mois.\n  Avant celà, j'ai travaillé pendant près de 10 ans dans un service clientèle. Totalement passioné de technologie et de numérique.\n  Je suis a la recherche d'un stage dans le domaine du web, que celà soit en backend, ou frontend.\n  J'aime travailler sous <strong>Javascript, NodeJS, ou ReactJS</strong>. <br/>\n   <br/> Actuellement a la recherche d'un stage, je suis prêt a apprendre de nouveaux language,\n   ou d'appronfondir ceux déjà présent dans ma liste de skills",jobs:[{company:"BeCode.org",begin:{month:"oct",year:"2018"},duration:null,occupation:"Web Developper",description:"Début de formation en tant que web developpeur Fullstack chez BeCode.org"},{company:"SNT - IPG Group",begin:{month:"aou",year:"2018"},duration:"7 ans & 5 mois",occupation:"Service clientèle",description:"Agent Middle-Office & Service Urgent projet Luminus"},{company:"Call-It",begin:{month:"dec",year:"2011"},duration:"2 ans & 5 mois",occupation:"Support Clientèle",description:"Middle-Office sur le projet Luminus, service déménagement"},{company:"Target Power Group",begin:{month:"set",year:"2010"},duration:"1 an",occupation:"Support clientèle",description:"Agent Call Center Front-Office sur le projet Belgacom TV/NET/TEL, par la suite promu en tant que formateur TV & NET pendant 2 années. Expert Back Office seconde ligne"}],social:{twitter:"https://twitter.com/badouuuuuu",linkedin:"https://www.linkedin.com/in/youssef-el-hirech/",github:"https://github.com/badouuuuuu",email:"el.hirech.youssef@gmail.com"},siteUrl:"https://badouuuuuu.github.io/cv-gatsby-badou/",pathPrefix:"/cv-gatsby-badou/public",siteCover:"/images/back.jpeg",siteFooter:"/images/back.jpeg",googleAnalyticsId:"UA-131359385-1",background_color:"#ffffff",theme_color:"#25303B",display:"minimal-ui",icon:"src/assets/gatsby-icon.png",headerLinks:[{label:"Youssef El Hirech",url:"/"}]}},172:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(0),i=a.n(n),r=a(2),o=a.n(r),l=a(37);a.d(t,"b",function(){return l.withPrefix});a(175);var s=i.a.createContext({}),c=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},175:function(e,t,a){var n;e.exports=(n=a(181))&&n.default||n},181:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),i=a.n(n),r=a(2),o=a.n(r),l=a(59),s=a(3),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},182:function(e){e.exports={data:{site:{siteMetadata:{title:"Youssef El Hirech",description:"Create your online curriculum in just a few minutes with this starter",author:"Youssef El Hirech"}}}}},183:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(2),o=a.n(r),l=a(171),s=a.n(l),c=a(6),m=a.n(c),u=a(170),d=a(173),p=u.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"c0ml3m-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:flex;width:100%;z-index:1000;background-color:#000a12;overflow:hidden;.navbaritems a{color:white;text-decoration:none;margin:0 auto;color:white;font-weight:200;outline:none;margin-top:.8rem;padding-right:2em;}.navbaritems a:hover{color:orange;}.navbaritems a:active{color:orange;}"]),g=u.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"c0ml3m-1"})(["width:100%;min-height:2rem;padding:.1rem;font-size:.9rem;max-width:100%;z-index:1000;overflow-x:auto;overflow-y:hidden;background-color:#000a12;"]),h=u.default.div.withConfig({displayName:"header__HeaderLinkGroup",componentId:"c0ml3m-2"})(["display:flex;flex-direction:row;"]),f=function(e){function t(){return e.apply(this,arguments)||this}return m()(t,e),t.prototype.render=function(){return i.a.createElement(p,null,i.a.createElement(g,null,i.a.createElement(h,null),i.a.createElement("div",{className:"navbaritems",style:{display:"flex",listStyle:"none"}},i.a.createElement(d.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,duration:500,onSetActive:this.handleSetActive,offset:-50},i.a.createElement("p",{style:{cursor:"pointer"}},"Moi")),i.a.createElement(d.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:-50,duration:900,onSetActive:this.handleSetActive},i.a.createElement("p",{style:{cursor:"pointer"}},"Skills")),i.a.createElement(d.Link,{activeClass:"active",to:"xp",spy:!0,smooth:!0,offset:-100,duration:900,onSetActive:this.handleSetActive},i.a.createElement("p",{style:{cursor:"pointer"}},"Expérience")),i.a.createElement(d.Link,{activeClass:"active",to:"github",spy:!0,smooth:!0,offset:-100,duration:900,onSetActive:this.handleSetActive},i.a.createElement("p",{style:{cursor:"pointer"}},"Projet")),i.a.createElement(d.Link,{activeClass:"active",to:"footer",spy:!0,smooth:!0,duration:700,onSetActive:this.handleSetActive},i.a.createElement("p",{style:{cursor:"pointer"}},"CV")))))},t}(i.a.Component),b=(a(166),function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{headerLinks:s.a.headerLinks}),i.a.createElement("div",null,t))});b.propTypes={children:o.a.node.isRequired};var y=b;a.d(t,"a",function(){return y})},185:function(e,t,a){"use strict";var n=a(6),i=a.n(n),r=a(0),o=a.n(r),l=a(172),s=a(171),c=a.n(s),m=a(170),u=a(173),d=m.default.div.withConfig({displayName:"hero__HeroContainer",componentId:"s3dy64-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;filter:contrast(130%);.clicktoscroll p:hover{color:red;}"]),p=m.default.div.withConfig({displayName:"hero__TitleContainer",componentId:"s3dy64-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),g=m.default.h1.withConfig({displayName:"hero__HeroTitle",componentId:"s3dy64-2"})(["font-weight:700;font-size:2.5rem;margin:10px 60px;text-shadow:1px 1px 4px rgba(34,34,34,0.6);color:orange;"]),h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.className;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"top"}),o.a.createElement(d,{className:a},o.a.createElement(p,null,o.a.createElement(g,null,t),o.a.createElement(u.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,duration:500,onSetActive:this.handleSetActive,offset:-350},o.a.createElement("p",{className:"clicktoscroll",style:{cursor:"pointer",color:"orange"}},"Click to scroll")),o.a.createElement("br",null))))},t}(o.a.Component),f=Object(m.default)(h).withConfig({displayName:"hero",componentId:"s3dy64-3"})([""," height:100vh;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;"],function(e){return"background-image: url("+(e.heroImg||Object(l.b)(c.a.siteCover))+");"});a.d(t,"a",function(){return f})},186:function(e,t,a){"use strict";var n=a(170).default.main.attrs({role:"main"}).withConfig({displayName:"wrapper__Wrapper",componentId:"sc-1t1hior-0"})(["position:relative;border-radius:3px;width:75%;max-width:720px;word-wrap:break-word;background-color:#ffa1;text-align:center;color:white;margin:0px auto 30px auto;top:-40px;padding:50px;box-shadow:5px 1px 15px 3px #4f5b62,10px 40px 32px rgba(0,0,0,0.1);min-height:200px;@media (max-width:780px){width:100%;padding:25px;}"]);a.d(t,"a",function(){return n})},187:function(e,t,a){"use strict";var n=a(182),i=a(0),r=a.n(i),o=a(2),l=a.n(o),s=a(191),c=a.n(s),m=a(172);function u(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title;return r.a.createElement(m.a,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var d=u,p="1025518380";a.d(t,"a",function(){return d})},222:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcxLjIgNDcxLjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MS4yIDQ3MS4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0ib3JhbmdlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDU3LjcsMjMwLjE1Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41djEyMi44YzAsMzMuNC0yNy4yLDYwLjUtNjAuNSw2MC41SDg3LjVjLTMzLjQsMC02MC41LTI3LjItNjAuNS02MC41di0xMjQuOA0KCQkJYzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MTI0LjhjMCw0OC4zLDM5LjMsODcuNSw4Ny41LDg3LjVoMjk2LjJjNDguMywwLDg3LjUtMzkuMyw4Ny41LTg3LjV2LTEyMi44DQoJCQlDNDcxLjIsMjM2LjI1LDQ2NS4yLDIzMC4xNSw0NTcuNywyMzAuMTV6Ii8+DQoJCTxwYXRoIGQ9Ik0yMjYuMSwzNDYuNzVjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00bDg1LjgtODUuOGM1LjMtNS4zLDUuMy0xMy44LDAtMTkuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBsLTYyLjcsNjIuOA0KCQkJVjMwLjc1YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjczLjlsLTYyLjgtNjIuOGMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xDQoJCQlMMjI2LjEsMzQ2Ljc1eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},223:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzIuNjM0IDMyLjYzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIuNjM0IDMyLjYzNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9Im9yYW5nZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMTYuMzE3LDMyLjYzNGMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNVYwLjVjMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNXMwLjUsMC4yMjQsMC41LDAuNXYzMS42MzQNCgkJQzE2LjgxNywzMi40MSwxNi41OTQsMzIuNjM0LDE2LjMxNywzMi42MzR6Ii8+DQoJPHBhdGggZD0iTTI4Ljg1MiwxMy41MzZjLTAuMTI4LDAtMC4yNTYtMC4wNDktMC4zNTQtMC4xNDZMMTYuMzE5LDEuMjA3TDQuMTM1LDEzLjM5Yy0wLjE5NSwwLjE5NS0wLjUxMiwwLjE5NS0wLjcwNywwDQoJCXMtMC4xOTUtMC41MTIsMC0wLjcwN0wxNS45NjYsMC4xNDZDMTYuMDU5LDAuMDUzLDE2LjE4NiwwLDE2LjMxOSwwbDAsMGMwLjEzMywwLDAuMjYsMC4wNTMsMC4zNTQsMC4xNDZsMTIuNTMzLDEyLjUzNg0KCQljMC4xOTUsMC4xOTUsMC4xOTUsMC41MTIsMCwwLjcwN0MyOS4xMDgsMTMuNDg3LDI4Ljk4LDEzLjUzNiwyOC44NTIsMTMuNTM2eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="}}]);
//# sourceMappingURL=component---src-pages-index-js-64dfc01b058f06cd7673.js.map