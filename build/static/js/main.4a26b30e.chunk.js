(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(21),s=n.n(c),i=(n(28),n(19)),o=n(16),u=n(8),d=n(9),j=n(10),b=n(11),l=n(14),h=n.n(l),p=n(4),m=n(2),O=n(0),x=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:["               ","Balance: $",Math.round(100*this.props.accountBalance)/100]})}}]),n}(r.Component),f=x,v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(O.jsx)("h1",{children:"Bank of React"}),Object(O.jsx)(p.b,{to:"/userProfile",children:"User Profile"}),Object(O.jsx)("br",{}),Object(O.jsx)(p.b,{to:"/login",children:"Login"}),Object(O.jsx)("br",{}),Object(O.jsx)(p.b,{to:"/credits",children:"Credits"}),Object(O.jsx)("br",{}),Object(O.jsx)(p.b,{to:"/debits",children:"Debits"}),Object(O.jsx)(f,{accountBalance:this.props.accountBalance})]})}}]),n}(r.Component),g=v,B=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"User Profile"}),Object(O.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(O.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(O.jsx)(p.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),D=B,S=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(o.a)({},e.state.user),r=t.target.name,a=t.target.value;n[r]=a,e.setState({user:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(d.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(O.jsx)(m.a,{to:"/userProfile"}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(O.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password"})]}),Object(O.jsx)("button",{children:"Log In"})]})]})}}]),n}(r.Component),k=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Credits"}),Object(O.jsxs)("h2",{children:["Account Balance: $",Math.round(100*e.accountBalance)/100]}),e.credits.map((function(e){var t=e.date.slice(0,10);return Object(O.jsxs)("li",{children:[e.amount," ",e.description," ",t]},e.id)})),Object(O.jsxs)("form",{onSubmit:e.addCredit,children:[Object(O.jsx)("input",{type:"text",name:"description",placeholder:"Enter Description"}),Object(O.jsx)("input",{type:"float",name:"amount",placeholder:"Enter Credit Amount"}),Object(O.jsx)("button",{type:"submit",children:"Add Credit"})]}),Object(O.jsx)(p.b,{to:"/",children:"Back to Home Page"})]})},y=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Debits"}),Object(O.jsxs)("h2",{children:["Account Balance: $",Math.round(100*e.accountBalance)/100]}),e.debits.map((function(e){var t=e.date.slice(0,10);return Object(O.jsxs)("li",{children:[e.amount," ",e.description," ",t]},e.id)})),Object(O.jsxs)("form",{onSubmit:e.addDebit,children:[Object(O.jsx)("input",{type:"text",name:"description",placeholder:"Enter Description"}),Object(O.jsx)("input",{type:"float",name:"amount",placeholder:"Enter Debit Amount"}),Object(O.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(O.jsx)(p.b,{to:"/",children:"Back to Home Page"})]})},C=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).addCredit=function(t){t.preventDefault();var n={},r=new Date;n.id=String(10*Math.round(1e7*Math.random())/10),n.description=t.target.description.value,n.amount=Number(t.target.amount.value),r.getMonth()<9?n.date=Date().slice(11,15)+"-0"+(r.getMonth()+1)+"-"+Date().slice(8,10):n.date=Date().slice(11,15)+"-"+(r.getMonth()+1)+"-"+Date().slice(8,10);var a=e.state.credits;a.push(n),e.setState({credits:a,accountBalance:e.state.accountBalance+n.amount}),t.target.description.value="",t.target.amount.value=""},e.addDebit=function(t){t.preventDefault();var n={},r=new Date;n.id=String(10*Math.round(1e7*Math.random())/10),n.description=t.target.description.value,n.amount=Number(t.target.amount.value),r.getMonth()<9?n.date=Date().slice(11,15)+"-0"+(r.getMonth()+1)+"-"+Date().slice(8,10):n.date=Date().slice(11,15)+"-"+(r.getMonth()+1)+"-"+Date().slice(8,10);var a=e.state.debits;a.push(n),e.setState({debits:a,accountBalance:e.state.accountBalance-n.amount}),t.target.description.value="",t.target.amount.value=""},e.mockLogIn=function(t){var n=Object(o.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.state={accountBalance:0,currentUser:{userName:"Joe Smith",memberSince:"07/23/96"},credits:[],debits:[]},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)(p.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(g,{accountBalance:e.state.accountBalance})}}),Object(O.jsx)(m.b,{exact:!0,path:"/userProfile",render:function(){return Object(O.jsx)(D,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(O.jsx)(m.b,{exact:!0,path:"/login",render:function(){return Object(O.jsx)(S,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(O.jsx)(m.b,{exact:!0,path:"/credits",render:function(){return Object(O.jsx)(k,{accountBalance:e.state.accountBalance,addCredit:e.addCredit,credits:e.state.credits})}}),Object(O.jsx)(m.b,{exact:!0,path:"/debits",render:function(){return Object(O.jsx)(y,{accountBalance:e.state.accountBalance,addDebit:e.addDebit,debits:e.state.debits})}})]})})}},{key:"componentDidMount",value:function(){var e=this,t=function(){var t=Object(i.a)(h.a.mark((function t(){var n,r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://moj-api.herokuapp.com/credits");case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,e.setState({credits:r}),a=r.map((function(t){return e.setState({accountBalance:e.state.accountBalance+t.amount})})),t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var t=Object(i.a)(h.a.mark((function t(){var n,r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://moj-api.herokuapp.com/debits");case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,e.setState({debits:r}),a=r.map((function(t){return e.setState({accountBalance:e.state.accountBalance-t.amount})})),t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),n()}}]),n}(r.Component),M=C;s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(M,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.4a26b30e.chunk.js.map