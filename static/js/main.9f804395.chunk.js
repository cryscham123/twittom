(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),s=a.n(c),r=a(28),i=a.n(r),o=a(7),l=a(19),u=a(5),j=a(8),b=a.n(j),m=a(14),d=a(20);a(37),a(55),a(56);d.a.initializeApp({apiKey:"AIzaSyA0isd9BTLDQi2QQGhQRwHkqTJMT70TyGU",authDomain:"test-cbbfb.firebaseapp.com",projectId:"test-cbbfb",storageBucket:"test-cbbfb.appspot.com",messagingSenderId:"176284544329",appId:"1:176284544329:web:a7ac164b8eced6a81c3e98",measurementId:"G-LZHQ26NB61"});var f=d.a,p=d.a.auth(),_=d.a.firestore(),h=d.a.storage(),x=(a(39),a(40),function(){var e=function(){var e=Object(m.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new f.auth.GoogleAuthProvider:"github"===n&&(a=new f.auth.GithubAuthProvider),e.next=4,p.signInWithPopup(a);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"socialLogin",children:[Object(n.jsx)("button",{name:"google",className:"socialLogin__google",onClick:e,children:Object(n.jsx)("i",{className:"fab fa-google"})}),Object(n.jsx)("button",{name:"github",className:"socialLogin__github",onClick:e,children:Object(n.jsx)("i",{className:"fab fa-github"})})]})}),O=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(c.useState)(""),d=Object(o.a)(j,2),f=d[0],_=d[1],h=Object(c.useState)(!1),O=Object(o.a)(h,2),g=O[0],v=O[1],w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?s(n):"password"===a&&u(n)},N=function(){var e=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!g){e.next=8;break}return e.next=5,p.createUserWithEmailAndPassword(a,l);case 5:e.sent,e.next=11;break;case 8:return e.next=10,p.signInWithEmailAndPassword(a,l);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),_(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)("span",{className:"login__title",children:"Login"}),Object(n.jsxs)("form",{className:"login__Form",onSubmit:N,children:[Object(n.jsxs)("div",{className:"login__Form__email",children:[Object(n.jsx)("i",{className:"fas fa-user login__Form__email__icon"}),Object(n.jsx)("input",{className:"login__Form__email__input",name:"email",type:"email",placeholder:"email",onChange:w,required:!0,value:a})]}),Object(n.jsxs)("div",{className:"login__Form__password",children:[Object(n.jsx)("i",{className:"fas fa-lock login__Form__password__icon"}),Object(n.jsx)("input",{className:"login__Form__password__input",name:"password",type:"password",placeholder:"password",onChange:w,required:!0,value:l})]}),f&&Object(n.jsx)("span",{className:"login__Form__error",children:f}),Object(n.jsx)("input",{className:"login__Form__submit",type:"submit",value:g?"Create Account":"Sign in"})]}),Object(n.jsxs)("div",{className:"login__control",children:[Object(n.jsx)("button",{className:"login__control__toggle",onClick:function(){return v((function(e){return!e}))},children:g?"...You Have Accont?":"...You Have No Accont?"}),Object(n.jsx)("button",{className:"login__control__find",children:"...Forgot Password?"})]}),Object(n.jsx)(x,{})]})},g=a(30),v=(a(41),function(e){var t=e.twitt,a=e.userobj,s=Object(c.useState)(!1),r=Object(o.a)(s,2),i=r[0],l=r[1],u=Object(c.useState)(t.text),j=Object(o.a)(u,2),d=j[0],f=j[1],p=function(){var e=Object(m.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,_.doc("twittom/".concat(t.id)).update({text:d});case 3:l(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("are you sure to delet?")){e.next=6;break}return e.next=4,_.doc("twittom/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("li",{className:"twitt",children:[Object(n.jsxs)("div",{className:"twitt__profile",children:[Object(n.jsx)("img",{className:"twitt__profile__img",src:t.creatorPhoto}),Object(n.jsx)("p",{className:"twitt__profile__name",children:t.creatorName}),t.creatorId==a.uid&&Object(n.jsxs)("div",{className:"twitt__profile__control",children:[Object(n.jsx)("button",{className:"twitt__profile__control__edit",onClick:function(){return l((function(e){return!e}))},children:Object(n.jsx)("i",{className:"fas fa-edit"})}),Object(n.jsx)("button",{className:"twitt__profile__control__delete",onClick:x,children:Object(n.jsx)("i",{className:"fas fa-trash-alt"})})]})]}),Object(n.jsx)("div",{className:"twitt__twitt",children:Object(n.jsx)("span",{className:"twitt__twitt__text",children:t.text})}),t.attachmentUrl&&Object(n.jsx)("img",{className:"twitt__img",src:t.attachmentUrl,width:"50px",height:"50px"}),Object(n.jsxs)("div",{className:"twitt__btn",children:[Object(n.jsx)("button",{className:"twitt__btn__good",children:Object(n.jsx)("i",{className:"fas fa-thumbs-up"})}),Object(n.jsx)("button",{className:"twitt__btn__bad",children:Object(n.jsx)("i",{className:"fas fa-thumbs-down"})}),Object(n.jsx)("button",{className:"twitt__btn__comment",children:Object(n.jsx)("i",{className:"fas fa-comment-alt"})})]}),i?Object(n.jsxs)("form",{className:"twitt__editForm",onSubmit:p,children:[Object(n.jsx)("input",{className:"twitt__editForm__text",type:"text",placeholder:"Less than 120 texts...",onChange:function(e){var t=e.target.value;f(t)},value:d,required:!0}),Object(n.jsx)("input",{className:"twitt__editForm__submit",type:"submit",value:"Edit"})]}):Object(n.jsx)(n.Fragment,{})]})}),w=(a(42),a(58)),N=(a(43),function(e){var t=e.userobj,a=Object(c.useState)(""),s=Object(o.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(""),u=Object(o.a)(l,2),j=u[0],d=u[1],f=function(){var e=Object(m.a)(b.a.mark((function e(a){var n,c,s,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n="",""===r){e.next=10;break}return c=h.ref().child("".concat(t.uid,"/").concat(Object(w.a)())),e.next=6,c.putString(r,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:n=e.sent;case 10:return o={text:j,createdAt:Date.now(),creatorId:t.uid,creatorName:t.displayName,creatorPhoto:t.photoURL,attachmentUrl:n},e.next=13,_.collection("twittom").add(o);case 13:d(""),i("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=Object(c.useRef)();return{onChange:function(a){var n=a.target.value,c=!0;e&&"function"===typeof e&&(c=e(n)),c?(d(n),t.current.style.opacity=0):t.current.style.opacity=1},error:t}}((function(e){return e.length<=120}));return Object(n.jsxs)("form",{className:"twittForm",onSubmit:f,children:[r&&Object(n.jsxs)("div",{className:"twittForm__preview",children:[Object(n.jsx)("button",{className:"twittForm__preview__cancle",onClick:function(){return i("")},children:Object(n.jsx)("i",{className:"fas fa-times"})}),Object(n.jsx)("img",{className:"twittForm__preview__img",src:r})]}),Object(n.jsx)("label",{for:"fileForm",className:"twittForm__file",children:Object(n.jsx)("i",{className:"fas fa-paperclip"})}),Object(n.jsx)("input",{id:"fileForm",style:{display:"none"},type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.readAsDataURL(t),a.onloadend=function(e){var t=e.currentTarget.result;i(t)}}}),Object(n.jsxs)("div",{className:"twittForm__message",children:[Object(n.jsx)("input",{className:"twittForm__message__text",type:"text",placeholder:"Less than 120 texts...",maxLength:120,onChange:p.onChange,value:j}),Object(n.jsx)("button",{className:"twittForm__message__submit",type:"submit",value:"twitt",children:Object(n.jsx)("i",{className:"fas fa-paper-plane"})})]}),Object(n.jsx)("span",{className:"twittForm__error",ref:p.error,children:"Less Than 120 Texts Please..."})]})}),y=function(e){var t=e.userobj,a=Object(c.useState)([]),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(c.useEffect)((function(){_.collection("twittom").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(n.jsxs)("div",{className:"homeGrid",children:[Object(n.jsx)("ul",{className:"twitts",children:r.map((function(e){return Object(n.jsx)(v,{twitt:e,userobj:t},e.id)}))}),Object(n.jsx)(N,{userobj:t})]})},F=(a(44),function(e){e.userobj;return Object(n.jsxs)("nav",{className:"nav",children:[Object(n.jsx)(l.b,{exact:!0,className:"nav__nav",to:"/",activeStyle:{color:"#1b9cfc"},children:"Home"}),Object(n.jsx)(l.b,{className:"nav__nav",to:"/profile",activeStyle:{color:"#1b9cfc"},children:"Profile"})]})}),S=(a(49),function(e){var t=e.refreshUser,a=e.userobj,s=Object(u.f)(),r=Object(c.useState)(a.displayName),i=Object(o.a)(r,2),l=i[0],j=i[1],d=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.collection("twittom").where("creatorId","==",a.uid).orderBy("createdAt").get();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return d()}),[]);var f=function(){var e=Object(m.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===l){e.next=5;break}return e.next=4,a.updateProfile({displayName:l});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"profile",children:[Object(n.jsxs)("div",{className:"profile__state",children:[Object(n.jsx)("img",{className:"profile__state__img",src:a.photoURL}),Object(n.jsxs)("p",{className:"profile__state__text",children:["Hi, ",a.displayName]})]}),Object(n.jsxs)("form",{onSubmit:f,children:[Object(n.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;j(t)},value:l}),Object(n.jsx)("input",{type:"submit",value:"Update profile"})]}),Object(n.jsx)("button",{className:"profile__logout",onClick:function(){p.signOut(),s.push("/")},children:"sign out"})]})}),k=function(e){var t=e.refreshUser,a=e.isLoggedIn,c=e.userobj;return Object(n.jsx)(l.a,{children:Object(n.jsx)(u.c,{children:a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(F,{userobj:c}),Object(n.jsx)(u.a,{exact:!0,path:"/",children:Object(n.jsx)(y,{userobj:c})}),Object(n.jsx)(u.a,{path:"/profile",children:Object(n.jsx)(S,{refreshUser:t,userobj:c})})]}):Object(n.jsx)(u.a,{exact:!0,path:"/",children:Object(n.jsx)(O,{})})})})};a(50);var U=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(c.useState)(null),b=Object(o.a)(j,2),m=b[0],d=b[1];return Object(c.useEffect)((function(){p.onAuthStateChanged((function(e){e?(u(!0),d({displayName:e.displayName||"Visitor",uid:e.uid,photoURL:e.photoURL||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6affXwdu79nsCKnaRYrbRuY8DKGw52nOaXw&usqp=CAU",updateProfile:function(t){return e.updateProfile(t)}})):u(!1),s(!0)}))}),[]),Object(n.jsx)(n.Fragment,{children:a?Object(n.jsx)(k,{refreshUser:function(){var e=p.currentUser;d({displayName:e.displayName,uid:e.uid,photoURL:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:l,userobj:m}):"initializing..."})};a(51);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.9f804395.chunk.js.map