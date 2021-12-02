(this["webpackJsonpreact-course"]=this["webpackJsonpreact-course"]||[]).push([[0],{12:function(e,t,r){e.exports={item:"WorkshopItem_item__15b_5",image:"WorkshopItem_image__1lq0_",content:"WorkshopItem_content__3gSkq",actions:"WorkshopItem_actions__21hxJ"}},13:function(e,t,r){e.exports={header:"MainNavigation_header__3zIGU",logo:"MainNavigation_logo__2dU90",active:"MainNavigation_active__AETM0",badge:"MainNavigation_badge__3yMtS"}},18:function(e,t,r){e.exports={list:"WorkshopList_list__39EzV"}},19:function(e,t,r){e.exports={card:"Card_card__6SxsO"}},22:function(e,t,r){e.exports={main:"Layout_main__1VgM5"}},28:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var c=r(1),s=r(17),i=r.n(s),n=r(7),o=(r(28),r(2)),a=r(23),d=r(11),j=r(18),l=r.n(j),h=r(12),b=r.n(h),u=r(19),O=r.n(u),x=r(0);var v=function(e){return Object(x.jsx)("div",{className:O.a.card,children:e.children})},f=Object(c.createContext)({favorites:[],favoritesCount:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}});function p(e){var t=Object(c.useState)([]),r=Object(d.a)(t,2),s=r[0],i=r[1];var n={favorites:s,favoritesCount:s.length,addFavorite:function(e){i((function(t){return t.concat(e)}))},removeFavorite:function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return s.some((function(t){return t.id===e}))}};return Object(x.jsx)(f.Provider,{value:n,children:e.children})}var m=f;var _=function(e){var t=Object(c.useContext)(m),r=t.itemIsFavorite(e.id);return Object(x.jsx)(v,{children:Object(x.jsxs)("li",{className:b.a.item,children:[Object(x.jsx)("div",{className:b.a.image,children:Object(x.jsx)("img",{src:e.image,alt:e.title})}),Object(x.jsxs)("div",{className:b.a.content,children:[Object(x.jsx)("h3",{children:e.title}),Object(x.jsx)("address",{children:e.address}),Object(x.jsx)("p",{children:e.description})]}),Object(x.jsx)("div",{className:b.a.actions,children:Object(x.jsx)("button",{onClick:function(){r?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,description:e.description,image:e.image,address:e.address})},children:r?"Unfavorite":"Add to Favorites"})})]})})};var k=function(e){return Object(x.jsx)("ul",{className:l.a.list,children:e.workshops.map((function(e){return Object(x.jsx)(_,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})};var g=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),r=t[0],s=t[1],i=Object(c.useState)([]),n=Object(d.a)(i,2),o=n[0],j=n[1];return Object(c.useEffect)((function(){s(!0),fetch("https://react-workshops-default-rtdb.firebaseio.com/workshops.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var r in e){var c=Object(a.a)({id:r},e[r]);t.push(c)}s(!1),j(t)}))}),[]),r?Object(x.jsx)("section",{children:Object(x.jsx)("p",{children:"Loading workshops..."})}):Object(x.jsxs)("section",{children:[Object(x.jsx)("h1",{children:"All Workshops"}),Object(x.jsx)(k,{workshops:o})]})},N=r(9),F=r.n(N);var w=function(e){var t=Object(c.useRef)(),r=Object(c.useRef)(),s=Object(c.useRef)(),i=Object(c.useRef)();return Object(x.jsx)(v,{children:Object(x.jsxs)("form",{className:F.a.form,onSubmit:function(c){c.preventDefault();var n={title:t.current.value,image:r.current.value,address:s.current.value,description:i.current.value};e.onAddWorkshop(n)},children:[Object(x.jsxs)("div",{className:F.a.control,children:[Object(x.jsx)("label",{htmlFor:"title",children:"Workshop Title"}),Object(x.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(x.jsxs)("div",{className:F.a.control,children:[Object(x.jsx)("label",{htmlFor:"image",children:"Workshop Image"}),Object(x.jsx)("input",{type:"url",required:!0,id:"image",ref:r})]}),Object(x.jsxs)("div",{className:F.a.control,children:[Object(x.jsx)("label",{htmlFor:"address",children:"Address"}),Object(x.jsx)("input",{type:"text",required:!0,id:"address",ref:s})]}),Object(x.jsxs)("div",{className:F.a.control,children:[Object(x.jsx)("label",{htmlFor:"description",children:"Description"}),Object(x.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:i})]}),Object(x.jsx)("div",{className:F.a.action,children:Object(x.jsx)("button",{children:"Add Workshop"})})]})})};var W=function(){var e=Object(o.f)();return Object(x.jsxs)("section",{children:[Object(x.jsx)("h1",{children:"Add new Workshop"}),Object(x.jsx)(w,{onAddWorkshop:function(t){fetch("https://react-workshops-default-rtdb.firebaseio.com/workshops.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})};var y=function(){var e,t=Object(c.useContext)(m);return e=0===t.totalFavorites?Object(x.jsx)("p",{children:"You have no favorites yet."}):Object(x.jsx)(k,{workshops:t.favorites}),Object(x.jsxs)("section",{children:[Object(x.jsx)("h1",{children:"Favorites"}),e]})},A=r(13),I=r.n(A);var C=function(){var e=Object(c.useContext)(m);return Object(x.jsxs)("header",{className:I.a.header,children:[Object(x.jsx)("div",{className:I.a.logo,children:"React Workshops"}),Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(n.b,{to:"/",children:"All Workshops"})}),Object(x.jsx)("li",{children:Object(x.jsx)(n.b,{to:"/new-workshop",children:"Add New Workshop"})}),Object(x.jsx)("li",{children:Object(x.jsxs)(n.b,{to:"/favorites",children:["Favorites",Object(x.jsx)("span",{className:I.a.badge,children:e.totalFavorites})]})})]})})]})},S=r(22),M=r.n(S);var q=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(C,{}),Object(x.jsx)("main",{className:M.a.main,children:e.children})]})};var R=function(){return Object(x.jsx)(q,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/",exact:!0,children:Object(x.jsx)(g,{})}),Object(x.jsx)(o.a,{path:"/new-workshop",children:Object(x.jsx)(W,{})}),Object(x.jsx)(o.a,{path:"/favorites",children:Object(x.jsx)(y,{})})]})})};i.a.render(Object(x.jsx)(p,{children:Object(x.jsx)(n.a,{children:Object(x.jsx)(R,{})})}),document.getElementById("root"))},9:function(e,t,r){e.exports={form:"NewWorkshopForm_form__3QW24",control:"NewWorkshopForm_control__3lFxk",actions:"NewWorkshopForm_actions__3uY1y"}}},[[38,1,2]]]);
//# sourceMappingURL=main.17410e79.chunk.js.map