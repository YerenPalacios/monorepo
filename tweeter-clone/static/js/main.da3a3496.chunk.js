(this.webpackJsonptwitter=this.webpackJsonptwitter||[]).push([[0],{22:function(e,s,t){},23:function(e,s,t){},24:function(e,s,t){},31:function(e,s,t){},32:function(e,s,t){},33:function(e,s,t){},34:function(e,s,t){},35:function(e,s,t){},36:function(e,s,t){},37:function(e,s,t){},38:function(e,s,t){},39:function(e,s,t){"use strict";t.r(s);var c=t(1),i=t.n(c),a=t(16),n=t.n(a),r=(t(22),t(23),t(4)),o=t(2),l=t(5),j=(t(24),t.p+"static/media/tweeter-small.1dee2d06.svg"),d=t(0);function m(e){var s=e.actual,t=e.user,c=e.icon;return Object(d.jsxs)("header",{children:[Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("img",{src:j,alt:"logo"}),Object(d.jsx)("p",{children:"Tweeter"})]}),Object(d.jsxs)("div",{className:"tabs",children:[Object(d.jsx)("p",{className:"Home"===s?"actual":null,children:Object(d.jsx)(r.b,{to:"/",children:"Home"})}),Object(d.jsx)("p",{className:"Explore"===s?"actual":null,children:Object(d.jsx)(r.b,{to:"/Explore",children:"Explore"})}),Object(d.jsx)("p",{className:"Bookmarks"===s?"actual":null,children:Object(d.jsx)(r.b,{to:"/Bookmarks",children:"Bookmarks"})})]}),Object(d.jsxs)("div",{className:"user",children:[Object(d.jsx)("div",{className:"img",children:Object(d.jsx)("img",{src:c,alt:"user"})}),Object(d.jsx)("p",{className:"user-name",children:t}),Object(d.jsx)("input",{type:"checkbox",id:"toggleMenu"}),Object(d.jsx)("label",{htmlFor:"toggleMenu",children:Object(d.jsx)("i",{className:"fa fa-caret-down"})}),Object(d.jsxs)("div",{className:"menu",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{className:"fa fa-user"}),"My Profile"]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("i",{className:"fa fa-user-friends"}),"Group Chat"]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("p",{id:"signOut",children:[Object(d.jsx)("i",{className:"fa fa-sign-out-alt"}),"Logout"]})]})]}),Object(d.jsxs)("div",{className:"tabs tabs2",children:[Object(d.jsx)("p",{className:"Home"===s?"actual":null,children:Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("i",{className:"fa fa-home"})})}),Object(d.jsx)("p",{className:"Explore"===s?"actual":null,children:Object(d.jsx)(r.b,{to:"/Explore",children:Object(d.jsx)("i",{className:"fas fa-compass"})})}),Object(d.jsx)("p",{className:"Bookmarks"===s?"actual":null,children:Object(d.jsx)(r.b,{to:"/Bookmarks",children:Object(d.jsx)("i",{className:"fa fa-bookmark"})})})]})]})}t(31);function b(e){var s=e.trends;return Object(d.jsxs)("div",{className:"trends",children:[Object(d.jsx)("h1",{children:"Trends for you"}),s.map((function(e,s){return Object(d.jsxs)("div",{className:"trend",children:[Object(d.jsxs)("p",{children:["#",e.trend]}),Object(d.jsxs)("p",{children:[(t=e.tweets,t>999999?Math.floor(t/1e6)+"m":t>999?Math.floor(t/1e3)+"k":void 0)," Tweets"]})]},s);var t}))]})}t(32);function u(e){var s=e.icon,t=Object(c.useState)({icon:"fa-globe-americas",text:"Everyone"}),i=Object(l.a)(t,2),a=i[0],n=i[1],r=function(e){n(1===e?{icon:"fa-globe-americas",text:"Everyone"}:{icon:"fa-user-friends",text:"People you follow"})};return Object(d.jsxs)("div",{className:"tweet-form",children:[Object(d.jsx)("h1",{children:"Tweet something"}),Object(d.jsxs)("div",{className:"text",children:[Object(d.jsx)("div",{className:"img",children:Object(d.jsx)("img",{src:s,alt:"icono"})}),Object(d.jsx)("textarea",{placeholder:"What's happening?"})]}),Object(d.jsxs)("div",{className:"tweet-foot",children:[Object(d.jsxs)("div",{className:"settings",children:[Object(d.jsx)("input",{style:{display:"none"},type:"checkbox",id:"toggleWho"}),Object(d.jsx)("i",{className:"fa fa-image"}),Object(d.jsxs)("label",{className:"toggle",htmlFor:"toggleWho",children:[Object(d.jsx)("i",{className:"fa "+a.icon}),Object(d.jsxs)("span",{children:[a.text," can reply"]})]}),Object(d.jsxs)("div",{className:"who-settings",children:[Object(d.jsx)("p",{children:"Who can reply?"}),Object(d.jsx)("p",{children:"Choose who can reply this Tweet"}),Object(d.jsxs)("label",{htmlFor:"toggleWho",children:[Object(d.jsxs)("p",{onClick:function(){r(1)},className:"item",children:[Object(d.jsx)("i",{className:"fa fa-globe-americas"})," Everyone"]}),Object(d.jsxs)("p",{onClick:function(){r(2)},className:"item",children:[Object(d.jsx)("i",{className:"fa fa-user-friends"})," People you follow"]})]})]})]}),Object(d.jsx)("button",{children:"Tweet"})]})]})}t(33);function x(e){var s=e.data;return Object(d.jsxs)("div",{className:"tweet",children:[Object(d.jsxs)("div",{className:"tweet-user",children:[Object(d.jsx)("div",{className:"img icon",children:Object(d.jsx)("img",{src:s.icon,alt:""})}),Object(d.jsxs)("p",{children:[Object(d.jsx)(r.b,{to:"/profile/"+s.userId,children:s.user}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:s.date})]})]}),Object(d.jsx)("p",{children:s.desc}),s.media&&"image"===s.media.type?Object(d.jsx)("div",{className:"media",children:Object(d.jsx)("div",{className:"img",children:Object(d.jsx)("img",{src:s.media.data,alt:""})})}):null,Object(d.jsxs)("div",{className:"nums",children:[Object(d.jsxs)("p",{children:[s.comments," Comments"]}),Object(d.jsxs)("p",{children:[s.retweets," Retwwts"]}),Object(d.jsxs)("p",{children:[s.saves," Saved"]})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsxs)("button",{children:[Object(d.jsx)("i",{className:"far fa-comment-alt"}),Object(d.jsx)("span",{children:"Comments"})]}),Object(d.jsxs)("button",{children:[Object(d.jsx)("i",{className:"fa fa-sync"}),Object(d.jsx)("span",{children:"Retweet"})]}),Object(d.jsxs)("button",{children:[Object(d.jsx)("i",{className:"far fa-heart"}),Object(d.jsx)("span",{children:"Like"})]}),Object(d.jsxs)("button",{children:[Object(d.jsx)("i",{className:"far fa-bookmark"}),Object(d.jsx)("span",{children:"Saves"})]})]}),Object(d.jsxs)("div",{className:"reply",children:[Object(d.jsx)("div",{className:"img icon",children:Object(d.jsx)("img",{src:s.icon,alt:""})}),Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)("input",{placeholder:"Tweet your reply",type:"text"}),Object(d.jsx)("i",{className:"fa fa-image"})]})]})]})}t(34);function h(e){var s,t=e.userId,c=e.img,i=e.bio,a=e.user,n=e.followers,o=e.background;return Object(d.jsxs)("div",{className:"follow-user",children:[Object(d.jsxs)("div",{className:"data",children:[Object(d.jsx)("div",{className:"img",children:Object(d.jsx)("img",{src:c,alt:"user"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:Object(d.jsx)(r.b,{to:"/profile/"+t,children:a})}),Object(d.jsxs)("p",{children:[(s=n,s>999999?Math.floor(s/1e6)+"m":s>999?Math.floor(s/1e3)+"k":void 0)," followers"]})]}),Object(d.jsxs)("button",{children:[Object(d.jsx)("i",{className:"fa fa-user-plus"})," Follow"]})]}),Object(d.jsx)("p",{children:i}),Object(d.jsx)("div",{className:"img",children:Object(d.jsx)("img",{src:o,alt:""})})]})}function O(e){var s=e.users;return Object(d.jsxs)("div",{className:"to-follow",children:[Object(d.jsx)("h1",{children:"Who to follow"}),s.map((function(e,s){return Object(d.jsx)(h,{bio:e.bio,img:e.img,user:e.name,followers:e.followers,background:e.background},s)}))]})}function p(){var e=Object(c.useState)({icon:"https://thispersondoesnotexist.com/image",name:"User Name"}),s=Object(l.a)(e,2),t=s[0],i=(s[1],Object(c.useState)([{userId:4,img:"https://thispersondoesnotexist.com/image",name:"User Name",bio:"Create a Twitter clone app - Tweeter. Use any front-end libraries of your choice. Create your API.",followers:10900,background:"https://picsum.photos/600/280"},{userId:6,img:"https://thispersondoesnotexist.com/image",name:"User Name2",bio:"Create a Twitter clone app - Tweeter. Use any front-end libraries of your choice. Create your API.",followers:509e4,background:"https://picsum.photos/650/310"}])),a=Object(l.a)(i,2),n=a[0];a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{actual:"Home",icon:t.icon,user:t.name}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"contenedor2",children:[Object(d.jsxs)("div",{className:"tweets",children:[Object(d.jsx)(u,{icon:t.icon}),Object(d.jsx)(x,{data:{icon:"https://thispersondoesnotexist.com/image",user:"Tweet User",userId:2,date:"24 August at 20:43",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non culpa veritatis quia.",media:!1,comments:400,retweets:100,saves:234,retweeted:!0,liked:!1,saved:!1}}),Object(d.jsx)(x,{data:{icon:"https://thispersondoesnotexist.com/image",user:"Tweet User",userId:2,date:"24 August at 20:43",desc:"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non culpa veritatis quia.",media:{type:"image",data:"https://picsum.photos/700/350"},comments:400,retweets:100,saves:234,retweeted:!0,liked:!1,saved:!1}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{trends:[{trend:"programming",tweets:250553},{trend:"devchallenges",tweets:2502},{trend:"backend",tweets:2502}]}),Object(d.jsx)(O,{users:n})]})]})]})}t(35);function g(e){var s=e.tabs;return Object(d.jsx)("div",{className:"filter",children:s.map((function(e,s){return 1!==s?Object(d.jsx)("p",{children:e},s):Object(d.jsx)("p",{className:"actual",children:e},s)}))})}t(36);function f(){return Object(d.jsxs)("div",{className:"search-box",children:[Object(d.jsx)("i",{className:"fa fa-search"}),Object(d.jsx)("input",{type:"text",placeholder:"Search"}),Object(d.jsx)("button",{children:"Search"})]})}var v={icon:"https://thispersondoesnotexist.com/image",user:"Tweet User",date:"24 August at 20:43",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non culpa veritatis quia.",media:!1,comments:400,retweets:100,saves:234,retweeted:!0,liked:!1,saved:!1},w={icon:"https://thispersondoesnotexist.com/image",user:"Tweet User",date:"24 August at 20:43",desc:"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non culpa veritatis quia.",media:{type:"image",data:"https://picsum.photos/700/350"},comments:400,retweets:100,saves:234,retweeted:!0,liked:!1,saved:!1};function N(){var e=Object(c.useState)({icon:"https://thispersondoesnotexist.com/image",name:"User Name"}),s=Object(l.a)(e,2),t=s[0];s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{actual:"Explore",icon:t.icon,user:t.name}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"contenedor",children:[Object(d.jsx)(g,{tabs:["Top","Lastest","People","Media"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsxs)("div",{className:"tweets",children:[Object(d.jsx)(x,{data:v}),Object(d.jsx)(x,{data:w})]})]})]})]})}var k={icon:"https://thispersondoesnotexist.com/image",user:"Tweet User",date:"24 August at 20:43",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non culpa veritatis quia.",media:!1,comments:400,retweets:100,saves:234,retweeted:!0,liked:!1,saved:!1},y={icon:"https://thispersondoesnotexist.com/image",user:"Tweet User",date:"24 August at 20:43",desc:"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non culpa veritatis quia.",media:{type:"image",data:"https://picsum.photos/700/350"},comments:400,retweets:100,saves:234,retweeted:!0,liked:!1,saved:!1};function T(){var e=Object(c.useState)({icon:"https://thispersondoesnotexist.com/image",name:"User Name"}),s=Object(l.a)(e,2),t=s[0];s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{actual:"Bookmarks",icon:t.icon,user:t.name}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"contenedor",children:[Object(d.jsx)(g,{tabs:["Tweets","Tweets y replies","Media","Likes"]}),Object(d.jsxs)("div",{className:"tweets",children:[Object(d.jsx)(x,{data:k}),Object(d.jsx)(x,{data:y})]})]})]})}t(37);function A(e){var s=e.background,t=e.icon,c=e.user,i=e.showFollowers,a=e.showFollowing;return Object(d.jsxs)("div",{className:"main-user",children:[Object(d.jsx)("div",{className:"img",children:Object(d.jsx)("img",{src:s,alt:"back"})}),Object(d.jsxs)("div",{className:"user-data",children:[Object(d.jsx)("div",{className:"img",children:Object(d.jsx)("img",{src:t,alt:"user"})}),Object(d.jsxs)("div",{className:"user-text",children:[Object(d.jsxs)("div",{className:"user-text-head",children:[Object(d.jsx)("p",{id:"bigUserName",children:c}),Object(d.jsxs)("p",{onClick:i,children:["2,300 ",Object(d.jsx)("span",{children:"Followers"})]}),Object(d.jsxs)("p",{onClick:a,children:["1,300 ",Object(d.jsx)("span",{children:"Following"})]})]}),Object(d.jsx)("p",{className:"user-bio",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni laudantium nostrum delectus."})]}),Object(d.jsxs)("button",{children:[Object(d.jsx)("i",{className:"fa fa-user-plus"})," Follow"]})]})]})}t(38);function U(e){var s=e.user,t=e.users,c=e.title,i=e.toggle;return Object(d.jsx)("div",{className:"users-list-container",children:Object(d.jsxs)("div",{className:"users-list",children:[Object(d.jsxs)("h1",{children:[s," ",c,Object(d.jsx)("i",{onClick:i,className:"fa fa-times"})]}),t.map((function(e,s){return Object(d.jsxs)("div",{className:"user-list",children:[Object(d.jsxs)("div",{className:"data",children:[Object(d.jsxs)("div",{className:"user-list-main",children:[Object(d.jsx)("div",{className:"img",children:Object(d.jsx)("img",{src:e.icon,alt:""})}),Object(d.jsx)("h2",{children:Object(d.jsx)(r.b,{to:"/profile/"+e.id,children:e.name})}),Object(d.jsxs)("p",{children:[e.followers," followers"]})]}),Object(d.jsx)("p",{className:"bio",children:e.bio})]}),e.following?Object(d.jsx)("button",{children:"Following"}):Object(d.jsxs)("button",{children:[Object(d.jsx)("i",{className:"fa fa-user-plus"})," follow"]})]},s)}))]})})}function F(){var e=Object(o.f)().id,s=Object(c.useState)(!1),t=Object(l.a)(s,2),i=t[0],a=t[1],n=Object(c.useState)(!1),r=Object(l.a)(n,2),j=r[0],b=r[1],u=Object(c.useState)({icon:"https://thispersondoesnotexist.com/image",name:"User Name"}),h=Object(l.a)(u,2),O=h[0],p=(h[1],Object(c.useState)({icon:"https://thispersondoesnotexist.com/image",background:"https://picsum.photos/800/400",name:"User Name"})),f=Object(l.a)(p,2),v=f[0];f[1];Object(c.useEffect)((function(){a(!1),b(!1)}),[e]);var w=[{id:43,icon:"https://thispersondoesnotexist.com/image",name:"User Name 1",followers:300,bio:"1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non culpa veritatis quia.",following:!1},{id:80,icon:"https://thispersondoesnotexist.com/image",name:"User Name 2",followers:3230,bio:"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non culpa veritatis quia.",following:!0},{id:31,icon:"https://thispersondoesnotexist.com/image",name:"User Name 3",followers:40,bio:"3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non culpa veritatis quia.",following:!1}],N=function(){a(!i)},k=function(){b(!j)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{icon:O.icon,user:O.name}),Object(d.jsx)(A,{showFollowing:k,showFollowers:N,background:v.background,icon:v.icon,user:v.name}),Object(d.jsxs)("div",{className:"contenedor",children:[Object(d.jsx)(g,{tabs:["Tweets","Tweets y replies","Media","Likes"]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{style:{color:"var(--gray3)",fontSize:14},children:[Object(d.jsx)("i",{className:"fa fa-sync"})," ",O.name," Retweeted"]}),Object(d.jsxs)("div",{className:"tweets",children:[Object(d.jsx)(x,{data:{icon:"https://thispersondoesnotexist.com/image",user:"Tweet User",date:"24 August at 20:43",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non culpa veritatis quia.",media:!1,comments:400,retweets:100,saves:234,retweeted:!0,liked:!1,saved:!1}}),Object(d.jsx)(x,{data:{icon:"https://thispersondoesnotexist.com/image",user:"Tweet User",date:"24 August at 20:43",desc:"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non culpa veritatis quia.",media:{type:"image",data:"https://picsum.photos/700/350"},comments:400,retweets:100,saves:234,retweeted:!0,liked:!1,saved:!1}})]})]})]}),j?Object(d.jsx)(U,{toggle:k,title:"is following",user:O.name,users:w}):null,i?Object(d.jsx)(U,{toggle:N,title:"followers",user:O.name,users:w}):null]})}function L(){return Object(d.jsx)("p",{children:"hola"})}var C=function(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:p}),Object(d.jsx)(o.a,{exact:!0,path:"/Explore",component:N}),Object(d.jsx)(o.a,{exact:!0,path:"/Bookmarks",component:T}),Object(d.jsx)(o.a,{exact:!0,path:"/profile/:id",component:F}),Object(d.jsx)(o.a,{component:L})]})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(s){var t=s.getCLS,c=s.getFID,i=s.getFCP,a=s.getLCP,n=s.getTTFB;t(e),c(e),i(e),a(e),n(e)}))};n.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),S()}},[[39,1,2]]]);
//# sourceMappingURL=main.da3a3496.chunk.js.map