(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{169:function(e,t,a){"use strict";a.r(t);var r=a(6),n=a.n(r),o=a(0),i=a.n(o),l=a(170),s=a(243),c=a(265),m=a(174),d=a.n(m),u=a(193),p=a(233),g=a(235),h=a(234),f=a(236),b=function(e){var t=e.title,a=void 0===t?"about":t,r=e.text,n=void 0===r?"":r;return i.a.createElement(o.Fragment,null,i.a.createElement("h1",null,a),i.a.createElement("hr",{style:{color:"orange"}}),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}))},v={color:"orange",listStyle:"none",margin:"1rem auto",fontSize:"1rem",display:"grid"},y={color:"orange",listStyle:"none",margin:"1rem auto",fontSize:"1rem",gridColumn:"2",display:"grid"},x={display:"grid",gridTemplateColumn:"1fr auto 1fr"},E=function(e){var t=e.title,a=void 0===t?"Skills":t;e.skills;return i.a.createElement(o.Fragment,null,i.a.createElement("h1",{style:{margin:"0 auto"}},a),i.a.createElement("hr",null),i.a.createElement("div",{style:x},i.a.createElement("ul",{style:v},i.a.createElement("li",null,"HTML"),i.a.createElement("li",null,"CSS"),i.a.createElement("li",null,"Javascript"),i.a.createElement("li",null,"PHP")),i.a.createElement("ul",{style:y},i.a.createElement("li",null,"Laravel"),i.a.createElement("li",null,"VueJS"),i.a.createElement("li",null,"ReactJS"),i.a.createElement("li",null,"NodeJS"))))},w=a(286),_=a.n(w);function k(){var e=_()(["\n  .timeline__item div.inner {\n    width: 40%;\n    margin: 5px 0 0 0;\n  }\n\n  .timeline__item div.inner h2:after {\n    top: 20px;\n    left: unset;\n    \n    right: -5px;\n  }\n  .timeline__item:nth-child(2n+2) div.inner h2:after {\n    left: -5px;\n  }\n\n  "]);return k=function(){return e},e}var N=Object(l.default)(function(e){var t=e.className;return i.a.createElement("div",{id:"xp",className:t},i.a.createElement("h1",null,"Expérience Professionelle"),i.a.createElement("hr",null),i.a.createElement("br",null),d.a.jobs&&d.a.jobs.map(function(e){return i.a.createElement("article",{key:e.begin.month+e.begin.year,className:"timeline__item"},i.a.createElement("div",{className:"inner"},i.a.createElement("span",{className:"timeline__date"},i.a.createElement("span",{className:"timeline__month"},e.begin.month),i.a.createElement("span",{className:"timeline__year"},e.begin.year)),i.a.createElement("h2",{className:"timeline__title"},e.occupation," chez ",e.company," ",i.a.createElement("br",null),i.a.createElement("small",{className:"timeline__title--small"},"(",e.duration||"present",")")),i.a.createElement("p",null,e.description)))}))}).withConfig({displayName:"timeline",componentId:"sc-17iljv1-0"})(["position:relative;:before{content:'';display:block;position:absolute;left:50%;top:0;margin:70px 0 0 -1px;width:.1rem;height:calc(100% - 70px);background:orange;}.timeline__item{text-align:center;width:100%;margin:0 0 20px 0;position:relative;margin-bottom:2rem;}.timeline__item:after{content:'';display:block;clear:both;}.timeline__item div.inner{width:100%;float:left;margin:85px 0 0 0;border-radius:.5rem;border:.15rem solid orange;}.timeline__date{display:block;width:60px;padding:3px 5px;position:absolute;top:0;left:50%;margin:0 0 0 -30px;border-radius:100%;font-size:10px;font-weight:700;text-transform:uppercase;background:#25303B;color:#fff;box-shadow:0 0 0 7px #fff;}.timeline__date span{display:block;text-align:center;}.timeline__month{font-size:18px;padding-top:4px;}.timeline__year{font-size:10px;font-style:italic;color:orange;}.timeline__title{padding:15px;margin:0;color:#fff;font-size:20px;text-transform:uppercase;border-radius:3px 3px 0 0;position:relative;}.timeline__title:after{content:'';position:absolute;top:-5px;left:30%;width:10px;height:10px;transform:rotate(-45deg);}.timeline__item div.inner p{padding:15px;margin:0;font-size:14px;background:#fff;color:#656565;border-radius:0 0 6px 6px;}.timeline__item:nth-child(2n+2) div.inner{float:right;}.timeline__title{background:#25303B;}.inner p{font-style:italic;}.timeline__title:after{background:orange;border:.1rem solid orange;}.timeline__title--small{font-size:10px;}",""],function(e){return Object(s.config)().media.sm(k())}),C=(a(287),a(179)),S=a.n(C),j=(a(244),a(181)),z=a.n(j),I=a(289),T=a.n(I),A=Object(l.default)(function(e){var t=e.className;return i.a.createElement("div",{className:t},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))}).withConfig({displayName:"loader",componentId:"sc-1vddm10-0"})(["display:inline-block;position:relative;width:64px;height:64px;margin:0 auto;div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #25303B;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#25303B transparent transparent transparent;}div:nth-child(1){animation-delay:-0.45s;}div:nth-child(2){animation-delay:-0.3s;}div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]),q="https://api.github.com/users/"+d.a.githubUsername+"/repos?type=owner&sort=updated",L=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={repos:[],status:"loading"},a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=z()(S.a.mark(function e(){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()(q);case 2:(t=e.sent).json&&t.json.length&&this.setState({repos:t.json,status:"ready"});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){var e=this.state.status;return i.a.createElement("div",{className:this.props.className},i.a.createElement("h2",null,"Projet sur Github "),i.a.createElement("hr",null),"loading"===e&&i.a.createElement("div",{className:"repositories__loader"},i.a.createElement(A,null)),"ready"===e&&this.state.repos&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"repositories__content"},this.state.repos.map(function(e){return i.a.createElement(i.a.Fragment,{key:e.name},i.a.createElement("div",{className:"repositories__repo"},i.a.createElement("a",{className:"repositories__repo-link",href:e.html_url,rel:"noopener noreferrer",target:"_blank"},i.a.createElement("strong",null,e.name)),i.a.createElement("div",{className:"repositories__desc"},e.description),i.a.createElement("div",{className:"repositories__repo-date"},"Updated: ",new Date(e.updated_at).toUTCString()),i.a.createElement("div",{className:"repositories__repo-star"},"★ ",e.stargazers_count)),i.a.createElement("hr",null))}))))},t}(i.a.Component),J=Object(l.default)(L).withConfig({displayName:"repositories",componentId:"v4d4qd-0"})(["position:relative;.repositories__content{margin-bottom:40px;}.repositories__repo{position:relative;color:grey;border:.04rem solid orange;padding:1rem;border-radius:1rem;margin:2rem;cursor:pointer;}.repositories__desc{font-size:.5rem;color:white;}.repositories__repo-link{text-decoration:none;color:orange;font-size:1rem;}.repositories__repo-date{color:#bbb;font-style:italic;font-size:.5rem;}.repositories__repo-star{position:absolute;top:0;right:0;color:orange;margin-right:1rem;margin-top:1rem;}.repositories__loader{display:flex;}"]),D=l.default.header.withConfig({displayName:"footer__FooterWrapper",componentId:"q4ji9k-0"})(["position:fixed;bottom:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:#000a12;opacity:6;"]),H=l.default.nav.withConfig({displayName:"footer__FooterNav",componentId:"q4ji9k-1"})(["margin-left:auto;margin-right:auto;width:100%;height:40px;display:flex;font-size:.7rem;flex-direction:row;max-width:960px;z-index:1000;justify-content:space-between;overflow-x:auto;overflow-y:hidden;background-color:#000a12;"]),F=Object(l.default)(function(e){var t=e.className;return i.a.createElement("a",{className:t,href:"https://github.com/"+d.a.githubUsername,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(c.b,{size:20}))}).withConfig({displayName:"footer__GithubLink",componentId:"q4ji9k-2"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;min-width:32px;z-index:10;"]),P=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return i.a.createElement(D,null,i.a.createElement(H,null,i.a.createElement("footer",{style:{margin:"0 auto",paddingTop:".3rem"}},i.a.createElement("p",{className:"websitefooter",style:{color:"white",margin:"0 auto",fontSize:".7rem",textAlign:"center"}},"www.badou.be")),i.a.createElement(F,null)))},t}(i.a.Component),B=a(386),V=a(387),O=a(388),Y=a(389),M=a(390),R=a(391),W=l.default.div.withConfig({displayName:"footerhero__FooterContainer",componentId:"yj2pit-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;filter:contrast(100%);img:hover{outline:none;}"]),U=l.default.div.withConfig({displayName:"footerhero__FooterTitleContainer",componentId:"yj2pit-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),G=l.default.h1.withConfig({displayName:"footerhero__FooterHeroTitle",componentId:"yj2pit-2"})(["font-weight:700;font-size:2.5rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);color:orange;"]),K="https://www.badou.be",Q="Junior Web Developpeur - Recherche Stage",X=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.className;return i.a.createElement(W,{className:a},i.a.createElement(U,null,i.a.createElement(G,null,t),i.a.createElement("div",{className:"social"},i.a.createElement("h1",null,"Share"),i.a.createElement(B.a,{url:K},i.a.createElement(V.a,{size:28,round:!0})),i.a.createElement(O.a,{url:K,hashtag:"#webdevelopper #becode.org #stage #liege #bruxelles"},i.a.createElement(Y.a,{size:28,round:!0,title:Q})),i.a.createElement(M.a,{subject:Q,body:"Voici un Développeur Web Junior à la recherche d'un stage sur la région de Liège / Bruxelles - El Hirech Youssef - CV disponible sur https://www.badou.be",url:K},i.a.createElement(R.a,{size:28,round:!0})))))},t}(i.a.Component),Z=Object(l.default)(X).withConfig({displayName:"footerhero",componentId:"yj2pit-3"})([""," background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;height:10rem;h1{font-size:.9rem;margin-bottom:1rem;color:orange;}.social{margin-bottom:3.5rem;}.SocialMediaShareButton{display:inline-flex;left:50%;right:50%;margin-right:.8rem;text-align:center;margin-left:1rem;cursor:pointer;margin-bottom:2rem;}.social-link{padding:.5rem;color:grey;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077B5;}a.social-link.email:hover{color:#c23a2b;}"],function(e){return"background-image: url("+(e.heroImg||d.a.siteCover)+");"}),$=a(343),ee=a(344),te=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={fullScreen:!1,numPages:null,pageNumber:1,Hello:i.a.createElement("p",null,"Voir mon CV"),DownloadCv:i.a.createElement("a",{href:"./images/cv_el_hirech_youssef.pdf",target:"_blank",rel:"noopener noreferrer",download:!0},i.a.createElement("p",{className:"download_cv"},"  Télécharger mon CV "))},t.onDocumentLoadSuccess=function(e){var a=e.numPages;t.setState({numPages:a})},t.toggleFullScreen=function(){t.setState(function(e){return{fullScreen:!e.fullScreen,Hello:i.a.createElement("p",null,"Voir mon CV")}}),!1===t.state.fullScreen?t.setState({Hello:i.a.createElement(ee.Document,{file:"./images/cv_el_hirech_youssef.pdf",onLoadSuccess:t.onDocumentLoadSuccess},i.a.createElement(ee.Page,{pageNumber:1,width:560}))}):t.setState({Hello:i.a.createElement("p",null,"Voir mon CV")})},t}return n()(t,e),t.prototype.render=function(){return i.a.createElement(p.a,{location:this.props.location},i.a.createElement(h.a,{title:"Je suis Youssef",keywords:["gatsbyjs","react","curriculum","belgium","stage","work","web","developper","developpeur","becode","becode.org","badouuuuuu","Youssef","el"]}),i.a.createElement(g.a,{heroImg:d.a.siteCover,title:"Je suis Youssef",className:this.props.className}),i.a.createElement(f.a,{className:this.props.className},i.a.createElement(s.Container,{className:"page-content",fluid:!0},i.a.createElement(s.Col,{xs:4,className:"avatar"},i.a.createElement("img",{className:"avatar__image",src:"./images/avatar2.jpeg",alt:"user avatar"}),i.a.createElement("div",{id:"skills"}),i.a.createElement("div",{className:"social"},d.a.social.github&&i.a.createElement("a",{className:"social-link github",href:d.a.social.github},i.a.createElement(c.b,{className:"social-icon",size:"24"})),d.a.social.linkedin&&i.a.createElement("a",{className:"social-link linkedin",href:d.a.social.linkedin},i.a.createElement(c.c,{className:"social-icon",size:"24"})),d.a.social.twitter&&i.a.createElement("a",{className:"social-link twitter",href:d.a.social.twitter},i.a.createElement(c.d,{className:"social-icon",size:"24"})),d.a.social.email&&i.a.createElement("a",{className:"social-link email",href:"mailto:"+d.a.social.email},i.a.createElement(c.a,{className:"social-icon",size:"24"})))),i.a.createElement(s.Row,null,i.a.createElement(s.Col,{xs:4,sm:4},i.a.createElement(b,{title:"A propos",text:d.a.authorDescription})),i.a.createElement(s.Col,{xs:4,sm:4},i.a.createElement(E,{title:"Mes skills",skills:d.a.skills}))),i.a.createElement(N,{className:this.props.className}),i.a.createElement("div",{id:"github"}),i.a.createElement(J,null)),i.a.createElement(u.Link,{activeClass:"active",to:"top",spy:!0,smooth:!0,duration:700,onSetActive:this.handleSetActive},i.a.createElement("div",{className:"arrow-up bounce"})),i.a.createElement($.b,{flipKey:this.state.fullScreen},i.a.createElement($.a,{flipId:"square"},i.a.createElement("div",{className:this.state.fullScreen?"full-screen-square":"square",onClick:this.toggleFullScreen},this.state.Hello))),this.state.DownloadCv),i.a.createElement(Z,{className:this.props.className}),i.a.createElement("div",{id:"footer"}),i.a.createElement(P,null))},t}(i.a.Component);t.default=Object(l.default)(te).withConfig({displayName:"pages",componentId:"sc-1wky38e-0"})([".page-content{max-width:100%;margin-bottom:40px;}.square{width:7rem;cursor:pointer;border-radius:1rem;margin:0 auto;color:white;background-color:#000a12;p{font-size:.8rem;}}.square:hover{color:orange;}.full-screen-square{position:relative;height:100%;width:100%;cursor:pointer;text-align:center;overflow:hidden;a{text-decoration:none;}p{cursor:pointer;border-radius:1rem;margin:0 auto;color:white;background-color:#000a12;width:7rem;font-size:.8rem;}p:hover{color:orange;}.react-pdf__Page__canvas{width:100% !important;overflow-x:scroll !important;padding-right:1.5rem !important;height:100% !important;}}.download_cv{cursor:pointer;border-radius:1rem;margin:0 auto;color:white;background-color:#000a12;width:7rem;font-size:.8rem;}.download_cv:hover{color:orange;}a{text-decoration:none;}.topicon{width:20px;cursor:pointer;}hr{background-color:orange;width:35%;margin:1.2rem auto;padding:.07rem;}.avatar{align-items:center;margin-bottom:24px;}.avatar__image{box-shadow:3px 3px 15px 0px rgba(0,0,0,0.75);max-width:130px;border-radius:100px;margin:0 auto 24px;}.social{margin-top:12px;margin-bottom:12px;}.social-link{padding:8px;color:#555;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077B5;}a.social-link.email:hover{color:#c23a2b;}.arrow-up{width:0;height:0;border-left:18px solid transparent;border-right:18px solid transparent;border-bottom:18px solid orange;margin:2rem auto;cursor:pointer;}.bounce{animation:bounce 2s infinite;}@keyframes bounce{0%,20%,50%,80%,100%{transform:translateY(0);}40%{transform:translateY(-30px);}60%{transform:translateY(-15px);}}"])},174:function(e,t){e.exports={siteTitle:"Junior Web Developpeur",siteDescription:"Curriculum Vitae - El Hirech Youssef - Web Developpeur Junior",authorName:"Youssef El Hirech",twitterUsername:"badouuuuuu",githubUsername:"badouuuuuu",authorAvatar:"/images/avatar2.jpeg",authorDescription:" Je suis un developpeur junior ayant commencé le code il y a tout juste 6 mois.\n  Avant celà, j'ai travaillé pendant près de 10 ans dans un service clientèle. Totalement passioné de technologie et de numérique.\n  J'aime travailler sous <strong>Javascript, NodeJS, ou ReactJS</strong>. <br/>\n   <br/> Actuellement à la recherche d'un stage, je suis prêt a apprendre de nouveaux language,\n   ou d'appronfondir ceux déjà présent dans ma liste de skills, motivé, j'adore back-end comme front-end",jobs:[{company:"BeCode.org",begin:{month:"oct",year:"2018"},duration:null,occupation:"Web Developper",description:"Début de formation en tant que web developpeur Fullstack chez BeCode.org"},{company:"SNT - IPG Group",begin:{month:"aou",year:"2018"},duration:"7 ans & 5 mois",occupation:"Service clientèle",description:"Agent Middle-Office & Service Urgent projet Luminus"},{company:"Call-It",begin:{month:"dec",year:"2011"},duration:"2 ans & 5 mois",occupation:"Support Clientèle",description:"Agent Middle-Office sur le projet Luminus, service déménagement"},{company:"Target Power Group",begin:{month:"sept",year:"2010"},duration:"1 an",occupation:"Expert Belgacom - Second ligne",description:"Expert Mobile, agent deuxième ligne Belgacom."},{company:"Target Power Group",begin:{month:"sept",year:"2009"},duration:"1 an & 5 mois",occupation:"Formateur",description:"Former les agents call-center sur les technologies Belgacom TV/NET/TEL."},{company:"Target Power Group",begin:{month:"sept",year:"2008"},duration:"1 an",occupation:"Support clientèle",description:"Agent Call Center Front-Office sur le projet Belgacom TV/NET/TEL."},{company:"ESCO Turbines",begin:{month:"jan",year:"2008"},duration:"2 mois",occupation:"Stagiaire électricien de maintenance",description:"maintenance des équipements électrique"},{company:"BALTEAU I.E",begin:{month:"set",year:"2007"},duration:"2 mois",occupation:"Intallateur/monteur",description:"Installation de système informatique & électrique"}],social:{twitter:"https://twitter.com/badouuuuuu",linkedin:"https://www.linkedin.com/in/youssef-el-hirech/",github:"https://github.com/badouuuuuu",email:"el.hirech.youssef@gmail.com@gmail.com"},siteUrl:"https://badouuuuuu.github.io/cv-gatsby-badou",pathPrefix:"/",siteCover:"./images/back.jpeg",googleAnalyticsId:"UA-136249840-1",background_color:"#ffffff",theme_color:"#25303B",display:"minimal-ui",icon:"src/assets/gatsby-icon.png",headerLinks:[{label:"Junior Web Developpeur",url:"www.badou.be"}]}},195:function(e,t,a){var r;e.exports=(r=a(213))&&r.default||r},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Junior Web Developpeur",description:"Curriculum Vitae - El Hirech Youssef - Web Developpeur Junior",author:"Youssef El Hirech"}}}}},213:function(e,t,a){"use strict";a.r(t);a(39);var r=a(0),n=a.n(r),o=a(2),i=a.n(o),l=a(59),s=a(3),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},233:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(2),i=a.n(o),l=a(174),s=a.n(l),c=a(6),m=a.n(c),d=a(170),u=a(193),p=d.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"c0ml3m-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:flex;width:100%;z-index:1000;background-color:#000a12;overflow:hidden;.navbaritems a{color:white;text-decoration:none;margin:0 auto;color:white;font-weight:200;outline:none;margin-top:.8rem;padding-right:2em;}.navbaritems a:hover{color:orange;}.navbaritems a:active{color:orange;}"]),g=d.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"c0ml3m-1"})(["width:100%;min-height:2rem;padding:.1rem;font-size:.9rem;max-width:100%;z-index:1000;overflow-x:auto;overflow-y:hidden;background-color:#000a12;"]),h=d.default.div.withConfig({displayName:"header__HeaderLinkGroup",componentId:"c0ml3m-2"})(["display:flex;flex-direction:row;"]),f=function(e){function t(){return e.apply(this,arguments)||this}return m()(t,e),t.prototype.render=function(){return n.a.createElement(p,null,n.a.createElement(g,null,n.a.createElement(h,null),n.a.createElement("div",{className:"navbaritems",style:{display:"flex",listStyle:"none"}},n.a.createElement(u.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,duration:500,onSetActive:this.handleSetActive,offset:-50},n.a.createElement("p",{style:{cursor:"pointer"}},"Moi")),n.a.createElement(u.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:-50,duration:900,onSetActive:this.handleSetActive},n.a.createElement("p",{style:{cursor:"pointer"}},"Skills")),n.a.createElement(u.Link,{activeClass:"active",to:"xp",spy:!0,smooth:!0,offset:-100,duration:900,onSetActive:this.handleSetActive},n.a.createElement("p",{style:{cursor:"pointer"}},"Expérience")),n.a.createElement(u.Link,{activeClass:"active",to:"github",spy:!0,smooth:!0,offset:-100,duration:900,onSetActive:this.handleSetActive},n.a.createElement("p",{style:{cursor:"pointer"}},"Projet")),n.a.createElement(u.Link,{activeClass:"active",to:"footer",spy:!0,smooth:!0,duration:700,onSetActive:this.handleSetActive},n.a.createElement("p",{style:{cursor:"pointer"}},"CV")))))},t}(n.a.Component),b=(a(166),function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{headerLinks:s.a.headerLinks}),n.a.createElement("div",null,t))});b.propTypes={children:i.a.node.isRequired};var v=b;a.d(t,"a",function(){return v})},234:function(e,t,a){"use strict";var r=a(212),n=a(0),o=a.n(n),i=a(2),l=a.n(i),s=a(241),c=a.n(s),m=(a(37),a(195),o.a.createContext({})),d=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function u(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,l=e.title;return o.a.createElement(d,{query:g,render:function(e){var r=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:l},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:r}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})},data:r})}d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func},u.defaultProps={lang:"fr",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var p=u,g="1025518380";a.d(t,"a",function(){return p})},235:function(e,t,a){"use strict";var r=a(6),n=a.n(r),o=a(0),i=a.n(o),l=a(174),s=a.n(l),c=a(170),m=a(193),d=c.default.div.withConfig({displayName:"hero__HeroContainer",componentId:"s3dy64-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;filter:contrast(130%);.clicktoscroll p:hover{color:red;}"]),u=c.default.div.withConfig({displayName:"hero__TitleContainer",componentId:"s3dy64-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),p=c.default.h1.withConfig({displayName:"hero__HeroTitle",componentId:"s3dy64-2"})(["font-weight:700;font-size:2.5rem;margin:10px 60px;text-shadow:1px 1px 4px rgba(34,34,34,0.6);color:orange;"]),g=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.title;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"top"}),i.a.createElement(d,{className:this.props.className},i.a.createElement(u,null,i.a.createElement(p,null,e),i.a.createElement(m.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,duration:500,onSetActive:this.handleSetActive,offset:-350},i.a.createElement("div",{className:"arrow bounce clicktoscroll"}),i.a.createElement("br",null)),i.a.createElement("br",null))))},t}(i.a.Component),h=Object(c.default)(g).withConfig({displayName:"hero",componentId:"s3dy64-3"})([""," height:110vh;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;.arrow{width:0;height:0;border-left:18px solid transparent;border-right:18px solid transparent;border-top:18px solid orange;cursor:pointer;color:orange;margin:0 auto;margin-top:3rem;}.bounce{animation:bounce 2s infinite;}@keyframes bounce{0%,20%,50%,80%,100%{transform:translateY(0);}40%{transform:translateY(-30px);}60%{transform:translateY(-15px);}}"],function(e){return"background-image: url("+(e.heroImg||s.a.siteCover)+");"});a.d(t,"a",function(){return h})},236:function(e,t,a){"use strict";var r=a(170).default.main.attrs({role:"main"}).withConfig({displayName:"wrapper__Wrapper",componentId:"sc-1t1hior-0"})(["position:relative;border-radius:3px;width:75%;max-width:720px;word-wrap:break-word;background-color:#ffa1;text-align:center;color:white;margin:0px auto 30px auto;top:-40px;padding:50px;box-shadow:5px 1px 15px 3px #4f5b62,10px 40px 32px rgba(0,0,0,0.1);min-height:200px;@media (max-width:780px){width:100%;padding:25px;}"]);a.d(t,"a",function(){return r})},348:function(e,t){},349:function(e,t){},350:function(e,t){},351:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-56e7341a141b0a8045b2.js.map