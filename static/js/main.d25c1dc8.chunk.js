(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(2),n=a.n(s),r=a(28),i=a.n(r),o=a(6),l=a(19),u=a(5),j=a(8),b=a.n(j),m=a(14),d=a(20);a(37),a(55),a(56);d.a.initializeApp({apiKey:"AIzaSyA0isd9BTLDQi2QQGhQRwHkqTJMT70TyGU",authDomain:"test-cbbfb.firebaseapp.com",projectId:"test-cbbfb",storageBucket:"test-cbbfb.appspot.com",messagingSenderId:"176284544329",appId:"1:176284544329:web:a7ac164b8eced6a81c3e98",measurementId:"G-LZHQ26NB61"});var f=d.a,p=d.a.auth(),_=d.a.firestore(),h=d.a.storage(),x=(a(39),a(40),function(){var e=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(c=t.target.name)?a=new f.auth.GoogleAuthProvider:"github"===c&&(a=new f.auth.GithubAuthProvider),e.next=4,p.signInWithPopup(a);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"socialLogin",children:[Object(c.jsx)("button",{name:"google",className:"socialLogin__google",onClick:e,children:Object(c.jsx)("i",{className:"fab fa-google"})}),Object(c.jsx)("button",{name:"github",className:"socialLogin__github",onClick:e,children:Object(c.jsx)("i",{className:"fab fa-github"})})]})}),O=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(s.useState)(""),d=Object(o.a)(j,2),f=d[0],_=d[1],h=Object(s.useState)(!1),O=Object(o.a)(h,2),g=O[0],v=O[1],w=function(e){var t=e.target,a=t.name,c=t.value;"email"===a?n(c):"password"===a&&u(c)},N=function(){var e=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!g){e.next=8;break}return e.next=5,p.createUserWithEmailAndPassword(a,l);case 5:e.sent,e.next=11;break;case 8:return e.next=10,p.signInWithEmailAndPassword(a,l);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),_(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)("span",{className:"login__title",children:"Login"}),Object(c.jsxs)("form",{className:"login__Form",onSubmit:N,children:[Object(c.jsxs)("div",{className:"login__Form__email",children:[Object(c.jsx)("i",{className:"fas fa-user login__Form__email__icon"}),Object(c.jsx)("input",{className:"login__Form__email__input",name:"email",type:"email",placeholder:"email",onChange:w,required:!0,value:a})]}),Object(c.jsxs)("div",{className:"login__Form__password",children:[Object(c.jsx)("i",{className:"fas fa-lock login__Form__password__icon"}),Object(c.jsx)("input",{className:"login__Form__password__input",name:"password",type:"password",placeholder:"password",onChange:w,required:!0,value:l})]}),f&&Object(c.jsx)("span",{className:"login__Form__error",children:f}),Object(c.jsx)("input",{className:"login__Form__submit",type:"submit",value:g?"Create Account":"Sign in"})]}),Object(c.jsxs)("div",{className:"login__control",children:[Object(c.jsx)("button",{className:"login__control__toggle",onClick:function(){return v((function(e){return!e}))},children:g?"...You Have Accont?":"...You Have No Accont?"}),Object(c.jsx)("button",{className:"login__control__find",children:"...Forgot Password?"})]}),Object(c.jsx)(x,{})]})},g=a(30),v=(a(41),function(e){var t=e.twitt,a=e.userobj,n=Object(s.useState)(!1),r=Object(o.a)(n,2),i=r[0],l=r[1],u=Object(s.useState)(t.text),j=Object(o.a)(u,2),d=j[0],f=j[1],p=function(){var e=Object(m.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,_.doc("twittom/".concat(t.id)).update({text:d});case 3:l(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure to delete?")){e.next=6;break}return e.next=4,_.doc("twittom/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("li",{className:"twitt",children:[Object(c.jsxs)("div",{className:"twitt__profile",children:[Object(c.jsx)("img",{className:"twitt__profile__img",src:t.creatorPhoto}),Object(c.jsx)("p",{className:"twitt__profile__name",children:t.creatorName}),t.creatorId==a.uid&&Object(c.jsxs)("div",{className:"twitt__profile__control",children:[Object(c.jsx)("button",{className:"twitt__profile__control__edit",onClick:function(){return l((function(e){return!e}))},children:Object(c.jsx)("i",{className:"fas fa-edit"})}),Object(c.jsx)("button",{className:"twitt__profile__control__delete",onClick:x,children:Object(c.jsx)("i",{className:"fas fa-trash-alt"})})]})]}),Object(c.jsx)("div",{className:"twitt__twitt",children:Object(c.jsx)("span",{className:"twitt__twitt__text",children:t.text})}),t.attachmentUrl&&Object(c.jsx)("img",{className:"twitt__img",src:t.attachmentUrl,width:"50px",height:"50px"}),Object(c.jsxs)("div",{className:"twitt__btn",children:[i?Object(c.jsxs)("form",{className:"twitt__editForm",onSubmit:p,children:[Object(c.jsx)("input",{className:"twitt__editForm__text",type:"text",placeholder:"Less than 100 texts...",onChange:function(e){var t=e.target.value;f(t)},value:d,required:!0}),Object(c.jsx)("button",{className:"twitt__editForm__submit",type:"submit",children:Object(c.jsx)("i",{className:"fas fa-edit"})})]}):Object(c.jsx)(c.Fragment,{}),Object(c.jsx)("button",{className:"twitt__btn__good",children:Object(c.jsx)("i",{className:"fas fa-thumbs-up"})}),Object(c.jsx)("button",{className:"twitt__btn__bad",children:Object(c.jsx)("i",{className:"fas fa-thumbs-down"})})]})]})}),w=(a(42),a(58)),N=(a(43),function(e){var t,a=e.userobj,n=Object(s.useRef)(),r=Object(s.useState)(""),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(s.useState)(""),d=Object(o.a)(j,2),f=d[0],p=d[1],x=Object(s.useState)(""),O=Object(o.a)(x,2),g=O[0],v=O[1],N=function(){var e=Object(m.a)(b.a.mark((function e(t){var c,s,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==f){e.next=5;break}return v("At Least 1 Type..."),n.current.style.opacity=1,e.abrupt("return");case 5:if(c="",""===l){e.next=14;break}return s=h.ref().child("".concat(a.uid,"/").concat(Object(w.a)())),e.next=10,s.putString(l,"data_url");case 10:return r=e.sent,e.next=13,r.ref.getDownloadURL();case 13:c=e.sent;case 14:return i={text:f,createdAt:Date.now(),creatorId:a.uid,creatorName:a.displayName,creatorPhoto:a.photoURL,attachmentUrl:c},e.next=17,_.collection("twittom").add(i);case 17:p(""),u(""),window.scroll({bottom:0,behavior:"smooth"});case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=(t=function(e){return e.length<=100},{onChange:function(e){var a=e.target.value,c=!0;t&&"function"===typeof t&&(c=t(a)),c?(p(a),n.current.style.opacity=0):(v("Less Than 100 Texts Please..."),n.current.style.opacity=1)}});return Object(c.jsxs)("form",{className:"twittForm",onSubmit:N,children:[l&&Object(c.jsxs)("div",{className:"twittForm__preview",children:[Object(c.jsx)("button",{className:"twittForm__preview__cancle",onClick:function(){return u("")},children:Object(c.jsx)("i",{className:"fas fa-times"})}),Object(c.jsx)("img",{className:"twittForm__preview__img",src:l})]}),Object(c.jsx)("label",{for:"fileForm",className:"twittForm__file",children:Object(c.jsx)("i",{className:"fas fa-paperclip"})}),Object(c.jsx)("input",{id:"fileForm",style:{display:"none"},type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.readAsDataURL(t),a.onloadend=function(e){var t=e.currentTarget.result;u(t)}}}),Object(c.jsxs)("div",{className:"twittForm__message",children:[Object(c.jsx)("input",{className:"twittForm__message__text",type:"text",placeholder:"Less than 100 texts...",maxLength:120,onChange:y.onChange,value:f}),Object(c.jsx)("button",{className:"twittForm__message__submit",type:"submit",value:"twitt",children:Object(c.jsx)("i",{className:"fas fa-paper-plane"})})]}),Object(c.jsx)("span",{className:"twittForm__error",ref:n,children:g})]})}),y=function(e){var t=e.userobj,a=Object(s.useState)([]),n=Object(o.a)(a,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){_.collection("twittom").orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(c.jsxs)("div",{className:"homeGrid",children:[Object(c.jsx)("ul",{className:"twitts",children:r.map((function(e){return Object(c.jsx)(v,{twitt:e,userobj:t},e.id)}))}),Object(c.jsx)(N,{userobj:t})]})},F=(a(44),function(e){e.userobj;return Object(c.jsxs)("nav",{className:"nav",children:[Object(c.jsx)(l.b,{exact:!0,className:"nav__nav",to:"/",activeStyle:{color:"#1b9cfc"},children:"Home"}),Object(c.jsx)(l.b,{className:"nav__nav",to:"/profile",activeStyle:{color:"#1b9cfc"},children:"Profile"})]})}),S=(a(49),function(e){var t=e.refreshUser,a=e.userobj,n=Object(u.f)(),r=Object(s.useState)(a.displayName),i=Object(o.a)(r,2),l=i[0],j=i[1],d=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.collection("twittom").where("creatorId","==",a.uid).orderBy("createdAt").get();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){return d}),[]);var f=function(){var e=Object(m.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),a.displayName===l){e.next=5;break}return e.next=4,a.updateProfile({displayName:l});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"profile",children:[Object(c.jsxs)("div",{className:"profile__state",children:[Object(c.jsx)("img",{className:"profile__state__img",src:a.photoURL}),Object(c.jsx)("p",{className:"profile__state__text",children:a.displayName}),Object(c.jsxs)("form",{className:"profile__updateProfile",onSubmit:f,children:[Object(c.jsx)("input",{className:"profile__updateProfile__input",type:"text",onChange:function(e){var t=e.target.value;j(t)},value:l}),Object(c.jsx)("button",{className:"profile__updateProfile__submit",type:"submit",value:"Update profile",children:Object(c.jsx)("i",{className:"fas fa-edit"})})]})]}),Object(c.jsx)("button",{className:"profile__logout",onClick:function(){p.signOut(),n.push("/")},children:"sign out"})]})}),k=function(e){var t=e.refreshUser,a=e.isLoggedIn,s=e.userobj;return Object(c.jsx)(l.a,{children:Object(c.jsx)(u.c,{children:a?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(F,{userobj:s}),Object(c.jsx)(u.a,{exact:!0,path:"/",children:Object(c.jsx)(y,{userobj:s})}),Object(c.jsx)(u.a,{path:"/profile",children:Object(c.jsx)(S,{refreshUser:t,userobj:s})})]}):Object(c.jsx)(u.a,{exact:!0,path:"/",children:Object(c.jsx)(O,{})})})})};a(50);var L=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(!1),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(s.useState)(null),b=Object(o.a)(j,2),m=b[0],d=b[1];return Object(s.useEffect)((function(){p.onAuthStateChanged((function(e){e?(u(!0),d({displayName:e.displayName||"Visitor.".concat(e.uid.slice(0,3)),uid:e.uid,photoURL:e.photoURL||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6affXwdu79nsCKnaRYrbRuY8DKGw52nOaXw&usqp=CAU",updateProfile:function(t){return e.updateProfile(t)}})):u(!1),n(!0)}))}),[]),Object(c.jsx)(c.Fragment,{children:a?Object(c.jsx)(k,{refreshUser:function(){var e=p.currentUser;d({displayName:e.displayName,uid:e.uid,photoURL:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:l,userobj:m}):"initializing..."})};a(51);i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.d25c1dc8.chunk.js.map