(this["webpackJsonpreact-class"]=this["webpackJsonpreact-class"]||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),j=n(16),r=n.n(j),i=(n(61),n(62),n(74)),a=n(33),o=n(20),l=n(73),b=n(31),d=n(3),h=function(){var e=Object(c.useState)(new Date),t=Object(b.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){s(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),Object(d.jsx)("div",{children:Object(d.jsx)("small",{children:n.toUTCString()})})},u=function(e){return Object(d.jsx)("div",{style:{width:300,margin:"auto",marginBottom:15},children:Object(d.jsxs)(l.a,{children:[e.name,Object(d.jsx)(h,{})]})})},O=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Workshop #2 "}),Object(d.jsx)(u,{name:"Test 01"}),Object(d.jsx)(u,{name:"Test 02"}),Object(d.jsx)(u,{name:"Test 03"})]})},x=n(72),p=function(e){var t=Object(c.useState)(),n=Object(b.a)(t,2),s=n[0],j=n[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Change on 'Key Up'"}),Object(d.jsx)("input",{type:"text",placeholder:"input your name",onKeyPress:function(e){return function(e){console.log(e)}(e)},onChange:function(e){return t=e.target.value,j(t);var t}}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:["Name:",Object(d.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",s]})]}),Object(d.jsx)(x.a,{dashed:!0}),Object(d.jsx)("h3",{children:"Change on 'Click'"}),Object(d.jsx)("input",{type:"text",placeholder:"input your name"}),Object(d.jsx)("button",{type:"button",onClick:function(e){return j("Hi ~~~~"+s)},children:"Ok!"}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:["Name:",Object(d.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",s]})]})]})},f=function(e){return Object(d.jsxs)("div",{style:{width:300,margin:"auto",marginBottom:15},children:[Object(d.jsx)("h1",{children:"Workshop #Form"}),Object(d.jsx)(l.a,{children:Object(d.jsx)(p,{})})]})},m=function(e){var t=e.users.map((function(e){return Object(d.jsx)(l.a,{style:{width:300,margin:"auto",marginBottom:15},children:Object(d.jsxs)("p",{children:[e.name,", ",e.age]})},e.id)}));return Object(d.jsx)("div",{children:t})},v=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Workshop #list"}),Object(d.jsx)(m,{users:[{id:1,name:"John",age:30},{id:2,name:"John 2",age:33},{id:3,name:"John 3",age:35}]})]})},g=function(e){var t=Object(c.useRef)(null);return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",placeholder:"input your value",ref:t}),Object(d.jsx)("button",{type:"button",onClick:function(n){return console.log(t.value),void e.onCallback("Hi ~~~~"+t.current.value)},children:"Ok!"})]})},y=function(e){var t=Object(c.useState)(),n=Object(b.a)(t,2),s=n[0],j=n[1];return Object(d.jsxs)("div",{style:{width:300,margin:"auto",marginBottom:15},children:[Object(d.jsx)("h1",{children:"Workshop #EventCallback"}),Object(d.jsxs)(l.a,{children:[Object(d.jsxs)("p",{children:["Parent Component: ",s]}),Object(d.jsx)(x.a,{dashed:!0}),Object(d.jsx)("p",{children:"Child Component: "}),Object(d.jsx)(g,{onCallback:function(e){console.log(e),j(e)}})]})]})},C=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"DayOne #Quiz"}),Object(d.jsx)(l.a,{})]})},k=i.a.Header,w=i.a.Content;var B=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(i.a,{style:{height:"100vh",overflow:"scroll"},children:[Object(d.jsx)(k,{style:{color:"#fff"},children:"React Class"}),Object(d.jsx)(w,{style:{margin:"60px",textAlign:"center"},children:Object(d.jsx)("div",{children:Object(d.jsxs)(a.a,{children:[Object(d.jsx)(o.a,{span:8,children:Object(d.jsx)(O,{})}),Object(d.jsx)(o.a,{span:8,children:Object(d.jsx)(f,{})}),Object(d.jsx)(o.a,{span:8,children:Object(d.jsx)(v,{})}),Object(d.jsx)(o.a,{span:8,children:Object(d.jsx)(y,{})}),Object(d.jsx)(o.a,{span:16,children:Object(d.jsx)(C,{})})]})})})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,j=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),j(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),S()}},[[69,1,2]]]);
//# sourceMappingURL=main.84717135.chunk.js.map