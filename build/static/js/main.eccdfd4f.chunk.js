(this.webpackJsonpjwitter=this.webpackJsonpjwitter||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(22),s=n.n(i),o=n(10),u=n(23),j=n(3),b=n(13),l=n.n(b),d=n(18),h=n(14);n(31);h.a.initializeApp({apiKey:"'AIzaSyDiSlu4bYb_SGp2JUhHEX7DCglb81c71zc',",authDomain:'"jwitter-97efe.firebaseapp.com",',databaseURL:'"https://jwitter-97efe-default-rtdb.firebaseio.com",',projectId:'"jwitter-97efe"",',storageBucket:'"jwitter-97efe.appspot.com",',messagingSenderId:'"571044278735",',appId:'"1:571044278735:web:92467c55e4089c5616a2ba",'});var p=h.a,O=h.a.auth(),g=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),s=Object(o.a)(i,2),u=s[0],j=s[1],b=Object(r.useState)(!0),h=Object(o.a)(b,2),g=h[0],f=h[1],x=Object(r.useState)(""),m=Object(o.a)(x,2),w=m[0],v=m[1],S=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&j(a)},I=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!g){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:r=e.sent,console.log("socialLoggedUser: ",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{onSubmit:I,children:[Object(a.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:S}),Object(a.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:S}),Object(a.jsx)("input",{type:"submit",value:g?"Create Account":"Sign In"}),w]}),Object(a.jsx)("span",{onClick:function(){return f((function(e){return!e}))},children:g?"Sign In":"Create Account"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:k,name:"google",children:"Continue with Google"}),Object(a.jsx)("button",{onClick:k,name:"github",children:"Continue with Github"})]})]})},f=function(){return Object(a.jsx)("span",{children:"Home"})},x=function(e){var t=e.isLoggedIn;return Object(a.jsx)(u.a,{children:Object(a.jsx)(j.c,{children:t?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(j.a,{exact:!0,path:"/",children:Object(a.jsx)(f,{})})}):Object(a.jsx)(j.a,{exact:!0,path:"/",children:Object(a.jsx)(g,{})})})})};var m=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!1),s=Object(o.a)(i,2),u=s[0],j=s[1];return Object(r.useEffect)((function(){O.onAuthStateChanged((function(e){j(!!e),c(!0)}))}),[]),Object(a.jsxs)(a.Fragment,{children:[n?Object(a.jsx)(x,{isLoggedIn:u}):"Initializing...",Object(a.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Nwitter"]})]})};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.eccdfd4f.chunk.js.map