(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{31:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(1),n=s.n(i),a=s(8),r=s.n(a),o=s(9),l=s(24),j=s(4),u="SHOW_MENU",d="HIDE_MENU",b=function(){return{type:d}},m={menuVisible:!1,user:{name:"Dejan Bratic",title:"Software Engineer",contact:{email:"dejobratic@gmail.com",socialNetworks:[{type:"linkedin",url:"https://www.linkedin.com/in/dejobratic"},{type:"github",url:"https://github.com/dejobratic"},{type:"twitter",url:"https://twitter.com/dejobratic"}]},about:"",workExperience:[{company:"",start:"",end:""}],projects:[{title:"CRWN Clothing",demoUrl:""},{title:"ProShop",demoUrl:""}]}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(j.a)(Object(j.a)({},e),{},{menuVisible:!0});case d:return Object(j.a)(Object(j.a)({},e),{},{menuVisible:!1});default:return e}},p=Object(i.createContext)(),O=function(e){var t=e.children,s=Object(i.useReducer)(x,m),n=Object(l.a)(s,2),a=n[0],r=n[1];return Object(c.jsx)(p.Provider,{value:{state:a,dispatch:r},children:t})},h=function(e){var t=e.type,s=e.to;return Object(c.jsx)("a",{href:s,className:"social-network-link",children:Object(c.jsx)("i",{className:"bx bxl-".concat(t)})})},_=(s(31),function(){return Object(c.jsxs)("div",{className:"social-network",children:[Object(c.jsx)(h,{type:"linkedin",to:"#"}),Object(c.jsx)(h,{type:"github",to:"#"}),Object(c.jsx)(h,{type:"twitter",to:"#"})]})}),f=function(){return Object(c.jsx)("div",{className:"home__img",children:Object(c.jsx)("img",{src:"https://images.unsplash.com/photo-1609172772815-fd717cd9761f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",alt:""})})},v=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"home__name",children:"Dejan Brati\u0107"}),Object(c.jsx)("span",{className:"home__profession",children:"Software Engineer | .NET | C# | SQL | JavaScript | React"})]})},N=function(){return Object(c.jsx)(o.b,{to:"/",download:"",className:"button home__button",children:"Download Resume"})},g=function(){return Object(c.jsxs)("div",{className:"home__profile",children:[Object(c.jsx)(f,{}),Object(c.jsx)(v,{}),Object(c.jsx)(_,{}),Object(c.jsx)(N,{})]})},y=(s(36),function(){return Object(c.jsx)("section",{id:"home",className:"home section",children:Object(c.jsx)("div",{className:"home__container bd-grid",children:Object(c.jsx)(g,{})})})}),w=function(e){var t=e.title,s=e.subtitle;return Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"section-subtitle",children:s}),Object(c.jsx)("h2",{className:"section-title",children:t})]})},k=function(){return Object(c.jsxs)("div",{className:"about__data",children:[Object(c.jsx)("p",{className:"about__description",children:"Software engineer with 3+ years experience in .NET, C# and SQL, primarily focused on building RESTful Web APIs. Continuous enthusiastic learner and a strong engineering professional with a Master's degree in Mechatronics from University of Montenegro."}),Object(c.jsx)("img",{src:"https://images.unsplash.com/photo-1609172772948-68c8d8173a9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",alt:"",className:"about__img"})]})},q=function(e){var t=e.title,s=e.children;return Object(c.jsxs)("div",{className:"about__information",children:[Object(c.jsx)("h3",{className:"about__information-title",children:t}),s]})},M=function(e){var t=e.type,s=e.children;return Object(c.jsxs)("div",{className:"about__information-data",children:[Object(c.jsx)("i",{className:"bx bxs-".concat(t," about__information-icon")}),s]})},C=function(){return Object(c.jsxs)(q,{title:"Contact Information",children:[Object(c.jsx)(M,{type:"user",children:Object(c.jsx)("span",{children:"Dejan Brati\u0107"})}),Object(c.jsx)(M,{type:"phone",children:Object(c.jsx)("span",{children:"111-222-333"})}),Object(c.jsx)(M,{type:"envelope",children:Object(c.jsx)("span",{children:"test@example.com"})})]})},D=function(){return Object(c.jsxs)(q,{title:"Experience",children:[Object(c.jsx)(M,{type:"medal",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"about__information-subtitle",children:"4 Years Job"}),Object(c.jsx)("span",{className:"about__information-subtitle-small",children:"Experience"})]})}),Object(c.jsx)(M,{type:"briefcase",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"about__information-subtitle",children:"20+ Projects"}),Object(c.jsx)("span",{className:"about__information-subtitle-small",children:"Completed"})]})})]})},S=(s(37),function(){return Object(c.jsxs)("section",{id:"about",className:"about section",children:[Object(c.jsx)(w,{title:"About Me",subtitle:"Intro"}),Object(c.jsxs)("div",{className:"about__container bd-grid",children:[Object(c.jsx)(k,{}),Object(c.jsxs)("div",{children:[Object(c.jsx)(C,{}),Object(c.jsx)(D,{})]})]})]})}),E=function(e){var t=e.title,s=e.children;return Object(c.jsxs)("div",{className:"skills__content",children:[Object(c.jsx)("h3",{className:"skills__subtitle",children:t}),s]})},U=function(e){var t=e.name,s=e.percentage;return Object(c.jsxs)("div",{className:"skills__data",children:[Object(c.jsx)("span",{className:"skills__name",children:t}),Object(c.jsxs)("span",{className:"skills__number",children:[s,"%"]}),Object(c.jsx)("span",{className:"skills__bar",style:{width:"".concat(s,"%")}})]})},B=function(){return Object(c.jsxs)(E,{title:"Frontend",children:[Object(c.jsx)(U,{name:"HTML/CSS",percentage:80}),Object(c.jsx)(U,{name:"JavaScript",percentage:80}),Object(c.jsx)(U,{name:"React",percentage:90})]})},H=function(){return Object(c.jsxs)(E,{title:"Backend",children:[Object(c.jsx)(U,{name:"C#",percentage:90}),Object(c.jsx)(U,{name:"SQL",percentage:90}),Object(c.jsx)(U,{name:"Python",percentage:70})]})},L=(s(38),function(){return Object(c.jsxs)("section",{id:"skills",className:"skills section",children:[Object(c.jsx)(w,{title:"My Expertise",subtitle:"Why Chose Me?"}),Object(c.jsxs)("div",{className:"skills__container bd-grid",children:[Object(c.jsx)(B,{}),Object(c.jsx)(H,{})]})]})}),V=function(e){var t=e.period,s=e.title,i=e.university,n=e.specialty;return Object(c.jsxs)("div",{className:"education__content",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"education__year",children:t}),Object(c.jsx)("span",{className:"education__university",children:i})]}),Object(c.jsxs)("div",{className:"education__time",children:[Object(c.jsx)("span",{className:"education__rounder"}),Object(c.jsx)("span",{className:"education__line"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"education__title",children:s}),Object(c.jsx)("span",{className:"education__specialty",children:n})]})]})},W=(s(39),function(){return Object(c.jsx)("section",{id:"education",className:"education section",children:Object(c.jsxs)("div",{className:"education__container bd-grid",children:[Object(c.jsx)(w,{title:"My Education",subtitle:"Qualification"}),Object(c.jsx)(V,{period:"2013 - 2017",title:"Master's Degree",university:"University of Montenegro",specialty:"Mechatronics"}),Object(c.jsx)(V,{period:"2010 - 2013",title:"Bachelor's Degree",university:"University of Montenegro",specialty:"Electronics, Telecommunications and Computers"})]})})}),I=function(e){var t=e.type,s=e.title,i=e.description;return Object(c.jsxs)("div",{className:"services__content",children:[Object(c.jsx)("i",{className:"bx bx-".concat(t," services__icon")}),Object(c.jsx)("h3",{className:"services__title",children:s}),Object(c.jsx)("p",{className:"services__description",children:i})]})},A=(s(40),function(){return Object(c.jsxs)("section",{className:"services section",id:"services",children:[Object(c.jsx)(w,{title:"My Services",subtitle:"What I Offer"}),Object(c.jsxs)("div",{className:"services__container bd-grid",children:[Object(c.jsx)(I,{type:"code",title:"Web Design",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque\r quod, voluptas illo, amet quibusdam eum similique voluptatem saepe\r voluptatum soluta voluptates quis sequi. Vero adipisci distinctio\r velit necessitatibus, est quibusdam."}),Object(c.jsx)(I,{type:"pen",title:"Graphic Design",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque\r quod, voluptas illo, amet quibusdam eum similique voluptatem saepe\r voluptatum soluta voluptates quis sequi. Vero adipisci distinctio\r velit necessitatibus, est quibusdam."}),Object(c.jsx)(I,{type:"brush",title:"UI/UX",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque\r quod, voluptas illo, amet quibusdam eum similique voluptatem saepe\r voluptatum soluta voluptates quis sequi. Vero adipisci distinctio\r velit necessitatibus, est quibusdam."}),Object(c.jsx)(I,{type:"server",title:"Backend",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque\r quod, voluptas illo, amet quibusdam eum similique voluptatem saepe\r voluptatum soluta voluptates quis sequi. Vero adipisci distinctio\r velit necessitatibus, est quibusdam."})]})]})}),G=function(e){var t=e.url;return Object(c.jsx)("a",{href:t,className:"projects__link",children:Object(c.jsx)("i",{className:"bx bx-link-alt"})})},P=function(e){var t=e.title,s=e.imageUrl,i=(e.demoUrl,e.codeUrl);return Object(c.jsxs)("div",{className:"projects__img",children:[Object(c.jsx)("img",{src:s,alt:t}),Object(c.jsxs)("div",{className:"projects__data",children:[Object(c.jsx)(G,{to:i}),Object(c.jsx)("span",{className:"projects__title",children:t})]})]})},R=(s(41),function(){return Object(c.jsxs)("section",{className:"projects section",id:"projects",children:[Object(c.jsx)(w,{title:"Recent Works",subtitle:"My Portfolio"}),Object(c.jsx)("div",{className:"projects__container bd-grid",children:Object(c.jsx)(P,{title:"CRWN-Clothing",demoUrl:"https://crwn-clothing-09.herokuapp.com/",imageUrl:"https://png.pngtree.com/png-vector/20190409/ourmid/pngtree-engagement-rate-isometric-illustration-concept-isometric-flat-design-concept-of-png-image_922166.jpg"})})]})}),J=s(5),T=(s(49),function(){return Object(c.jsx)("section",{className:"new-project section",id:"new-project",children:Object(c.jsxs)("div",{className:"new-project__container bd-grid",children:[Object(c.jsxs)("div",{className:"new-project__data",children:[Object(c.jsx)("h2",{className:"section-title new-project__title",children:"You have a project in mind?"}),Object(c.jsx)("p",{className:"new-project__description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure impedit repellendus deserunt placeat unde perferendis quas et, aliquam eligendi! Inventore tempore laborum magnam illum, eos nam repudiandae facilis accusantium?"}),Object(c.jsx)(J.Link,{to:"contact",className:"button button__light new-project__button",children:"Contact Me"})]}),Object(c.jsx)("img",{src:"https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",alt:"",className:"new-project__img"})]})})}),Y=s(25),F=function(e){var t=e.type,s=e.placeholder,i=Object(Y.a)(e,["type","placeholder"]);return Object(c.jsx)("input",Object(j.a)({type:t,placeholder:s,className:"contact__input"},i))},Q=function(){return Object(c.jsxs)("form",{action:"",className:"contact__form",children:[Object(c.jsxs)("div",{className:"contact__inputs",children:[Object(c.jsx)(F,{type:"text",placeholder:"Name"}),Object(c.jsx)(F,{type:"email",placeholder:"E-mail"})]}),Object(c.jsx)(F,{type:"text",placeholder:"Project"}),Object(c.jsx)("textarea",{name:"",id:"",cols:"0",rows:"10",placeholder:"Message",className:"contact__input contact__message"}),Object(c.jsx)(F,{type:"submit",value:"Send Message",className:"button contact__button"})]})},X=(s(50),function(){return Object(c.jsxs)("section",{className:"contact section",id:"contact",children:[Object(c.jsx)(w,{title:"Get In Touch",subtitle:"Contact Me"}),Object(c.jsx)("div",{className:"contact__container bd-grid",children:Object(c.jsx)(Q,{})})]})}),Z=function(){return Object(c.jsxs)("main",{className:"l-main",children:[Object(c.jsx)(y,{}),Object(c.jsx)(S,{}),Object(c.jsx)(L,{}),Object(c.jsx)(W,{}),Object(c.jsx)(A,{}),Object(c.jsx)(R,{}),Object(c.jsx)(T,{}),Object(c.jsx)(X,{})]})},z=function(e){var t=e.to,s=e.title,n=e.active,a=void 0!==n&&n,r=Object(i.useContext)(p).dispatch;return Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(J.Link,{to:t,className:"nav__link ".concat(a&&"active"),onClick:function(){return r(b())},spy:!0,hashSpy:!0,children:s})})},K=function(){var e=Object(i.useContext)(p),t=e.state.menuVisible,s=e.dispatch;return Object(c.jsxs)("div",{className:"nav__menu ".concat(t&&"show"),children:[Object(c.jsx)("div",{className:"nav__close",onClick:function(){return s(b())},children:Object(c.jsx)("i",{className:"bx bx-x"})}),Object(c.jsxs)("ul",{className:"nav__list",children:[Object(c.jsx)(z,{to:"home",title:"Home"}),Object(c.jsx)(z,{to:"about",title:"About"}),Object(c.jsx)(z,{to:"skills",title:"Skills"}),Object(c.jsx)(z,{to:"education",title:"Education"}),Object(c.jsx)(z,{to:"services",title:"Services"}),Object(c.jsx)(z,{to:"projects",title:"Projects"}),Object(c.jsx)(z,{to:"contact",title:"Contact Me"})]})]})},$=function(){var e=Object(i.useContext)(p).dispatch;return Object(c.jsxs)("nav",{className:"nav bd-grid",children:[Object(c.jsx)("div",{className:"nav__toggle",onClick:function(){return e({type:u})},children:Object(c.jsx)("i",{className:"bx bx-menu"})}),Object(c.jsx)("div",{children:Object(c.jsx)(J.Link,{to:"home",spy:!0,children:"Dejan"})}),Object(c.jsx)(K,{})]})},ee=(s(51),function(){return Object(c.jsx)("header",{className:"l-header",children:Object(c.jsx)($,{})})}),te=(s(52),function(){return Object(c.jsx)("footer",{className:"footer section",children:Object(c.jsxs)("div",{className:"footer__container bd-grid",children:[Object(c.jsx)("div",{className:"footer__title",children:"Dejan"}),Object(c.jsx)("p",{className:"footer__description",children:"I am Dejan and this is my personal website."}),Object(c.jsx)(_,{}),Object(c.jsx)("p",{className:"footer__copy",children:"All rights reserved by Dejan - ".concat((new Date).getFullYear())})]})})}),se=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o.a,{children:Object(c.jsxs)(O,{children:[Object(c.jsx)(ee,{}),Object(c.jsx)(Z,{}),Object(c.jsx)(te,{})]})})})};s(53);r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(se,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.94d61389.chunk.js.map