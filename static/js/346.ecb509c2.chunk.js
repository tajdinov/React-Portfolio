"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[346],{909:function(e,a,s){s.r(a),s.d(a,{default:function(){return y}});var r=s(152),n=s(791),i=s(184);var t=function(e){var a=e.currentPage,s=e.handlePageChange;return(0,i.jsx)("div",{children:(0,i.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light",children:[(0,i.jsxs)("div",{className:"myName",children:[(0,i.jsx)("span",{className:"letter",children:"R"}),(0,i.jsx)("span",{className:"letter",children:"."}),(0,i.jsx)("span",{className:"letter",children:"T"}),(0,i.jsx)("span",{className:"letter",children:"a"}),(0,i.jsx)("span",{className:"letter",children:"z"}),(0,i.jsx)("span",{className:"letter",children:"h"}),(0,i.jsx)("span",{className:"letter",children:"d"}),(0,i.jsx)("span",{className:"letter",children:"y"}),(0,i.jsx)("span",{className:"letter",children:"n"}),(0,i.jsx)("span",{className:"letter",children:"o"}),(0,i.jsx)("span",{className:"letter",children:"v"})]}),(0,i.jsx)("div",{className:"container-fluid justify-content-end",children:(0,i.jsxs)("ul",{className:"navbar-nav ml-auto text-end",children:[(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{href:"#home",onClick:function(){return s("Home")},className:"Home"===a?"nav-link active":"nav-link",children:"About Me"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{href:"#Portfolio",onClick:function(){return s("Portfolio")},className:"Portfolio"===a?"nav-link active":"nav-link",children:"Portfolio"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{href:"#Contacts",onClick:function(){return s("Contacts")},className:"Contacts"===a?"nav-link active":"nav-link",children:"Contact Me"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{href:"https://drive.google.com/file/d/11k5LfsVcDYHuCnvDQM5MKgfRV5974Hw_/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"nav-link",children:"Resume"})})]})})]})})},l=s(214),c=s(861),o=function(){var e=(0,n.useState)("Submit"),a=(0,r.Z)(e,2),s=a[0],t=a[1],o=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(a){var s,r,n,i,c,o,d;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t("Sending..."),s=a.target.elements,r=s.name,n=s.email,i=s.message,c={name:r.value,email:n.value,message:i.value},e.next=6,fetch("http://localhost:5000/contact",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(c)});case 6:return o=e.sent,t("Submit"),e.next=10,o.json();case 10:d=e.sent,alert(d.status);case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,i.jsx)("div",{className:"contactMe",children:(0,i.jsxs)("form",{className:"contactForm",onSubmit:o,children:[(0,i.jsxs)("div",{className:"formInput",children:[(0,i.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,i.jsx)("input",{type:"text",id:"name",required:!0})]}),(0,i.jsxs)("div",{className:"formInput",children:[(0,i.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,i.jsx)("input",{type:"email",id:"email",required:!0})]}),(0,i.jsxs)("div",{className:"formInput",children:[(0,i.jsx)("label",{htmlFor:"message",children:"Message:"}),(0,i.jsx)("textarea",{id:"message",required:!0})]}),(0,i.jsx)("button",{className:"btnSubmit",type:"submit",children:s})]})})},d=function(){return(0,i.jsx)("div",{children:"Experience"})},h=s(186),m=s.n(h),x=s(87),p=s(483),j=s(187),u=s.p+"static/media/screenshot.f384877b13434632d43d.png",v=s.p+"static/media/Screenshot-main.77255932cea5702196ae.jpeg",f=s.p+"static/media/users.35dd996b30a45dc8ce42.png",g=s.p+"static/media/download.b84cabf5e3845020a43e.png",N=s.p+"static/media/main.0515e550cea477b97c11.png",b=s.p+"static/media/welcome.0a6751bf80ea6e0cfa5e.png",k=function(){return m().init(document.querySelectorAll(".box"),{max:25,speed:400,easing:"cubic-bezier(.03,.98,.52,.99)",perspective:500,transition:!0}),(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsx)("div",{className:"box",children:(0,i.jsxs)("div",{className:"description",children:[(0,i.jsx)("h2",{children:"Character Generator"}),(0,i.jsx)(x.LazyLoadImage,{className:"preview",src:u,alt:"DND"}),(0,i.jsx)("p",{children:"This is a full stack web application that creates, updates, reads, and deletes a DnD Character."}),(0,i.jsx)("div",{className:"gLink",children:(0,i.jsx)("a",{href:"https://github.com/SamMarch/DnD-Character-Generator.git",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(p.G,{icon:j.zhw})})})]})}),(0,i.jsx)("div",{className:"box",children:(0,i.jsxs)("div",{className:"description",children:[(0,i.jsx)("h2",{children:"YouTrailer"}),(0,i.jsx)(x.LazyLoadImage,{className:"preview",src:v,alt:"YouTrailer"}),(0,i.jsx)("p",{children:"YouTrailer is a library of trailers for different types of entertainment, whether it is movies, tv shows, video games or other sources of video entertainment."}),(0,i.jsx)("div",{className:"gLink",children:(0,i.jsx)("a",{href:"https://carolinemae.github.io/YouTrailer/",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(p.G,{icon:j.zhw})})})]})}),(0,i.jsx)("div",{className:"box",children:(0,i.jsxs)("div",{className:"description",children:[(0,i.jsx)("h2",{children:"Social Network API"}),(0,i.jsx)(x.LazyLoadImage,{className:"preview",src:f,alt:"Social-Network-API"}),(0,i.jsx)("p",{children:"API for a social network web application where users can share thoughts, react to thoughts, and create a friend list."}),(0,i.jsx)("div",{className:"gLink",children:(0,i.jsx)("a",{href:"https://github.com/tajdinov/Social-Network-API.git",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(p.G,{icon:j.zhw})})})]})}),(0,i.jsx)("div",{className:"box",children:(0,i.jsxs)("div",{className:"description",children:[(0,i.jsx)("h2",{children:"PWA Text Editor"}),(0,i.jsx)(x.LazyLoadImage,{className:"preview",src:g,alt:"PWA-Text-Editor"}),(0,i.jsx)("p",{children:"Single page text editor that runs in the browser as well as offline."}),(0,i.jsx)("div",{className:"gLink",children:(0,i.jsx)("a",{href:"https://github.com/tajdinov/PWA-Text-Editor.git",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(p.G,{icon:j.zhw})})})]})}),(0,i.jsx)("div",{className:"box",children:(0,i.jsxs)("div",{className:"description",children:[(0,i.jsx)("h2",{children:"Tech Blog"}),(0,i.jsx)(x.LazyLoadImage,{className:"preview",src:N,alt:"Tech-Blog"}),(0,i.jsx)("p",{children:"CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers\u2019 posts as well."}),(0,i.jsx)("div",{className:"gLink",children:(0,i.jsx)("a",{href:"https://github.com/tajdinov/Tech-Blog.git",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(p.G,{icon:j.zhw})})})]})}),(0,i.jsx)("div",{className:"box",children:(0,i.jsxs)("div",{className:"description",children:[(0,i.jsx)("h2",{children:"Employee-Tracker"}),(0,i.jsx)(x.LazyLoadImage,{className:"preview",src:b,alt:"SQL-Employee-Tracker"}),(0,i.jsx)("p",{children:" Command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL."}),(0,i.jsx)("div",{className:"gLink",children:(0,i.jsx)("a",{href:"https://github.com/tajdinov/Employee-Tracker.git",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(p.G,{icon:j.zhw})})})]})})]})},w=(0,n.lazy)((function(){return s.e(163).then(s.bind(s,988))}));function y(){var e=(0,n.useState)("Home"),a=(0,r.Z)(e,2),s=a[0],l=a[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)(t,{currentPage:s,handlePageChange:function(e){return l(e)}}),"Home"===s?(0,i.jsx)("div",{children:(0,i.jsx)(n.Suspense,{fallback:(0,i.jsx)("div",{children:"loading..."}),children:(0,i.jsx)(w,{})})}):"Contacts"===s?(0,i.jsx)(o,{}):"Experience"===s?(0,i.jsx)(d,{}):(0,i.jsx)(k,{})]})}}}]);
//# sourceMappingURL=346.ecb509c2.chunk.js.map