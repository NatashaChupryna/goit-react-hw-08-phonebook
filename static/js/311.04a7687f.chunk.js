"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[311],{6311:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var r,i,a,d=t(9434),s=t(1273),o=t(6916),p=function(n){return n.contacts.isLoading},c=function(n){return n.filter},l=(0,o.P1)([function(n){return n.contacts.items},c],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),x=t(168),u=t(6444),h=u.ZP.label(r||(r=(0,x.Z)(["\n  padding: 2px;\n  font-size: 16px;\n"]))),g=u.ZP.input(i||(i=(0,x.Z)(["\n  width: 100%;\n  height: 50px;\n  padding: 8px 16px;\n  font-size: 14px;\n  color: #010101;\n  background-color: transparent;\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n  outline: none;\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\n    width: 200px;\n  }\n"]))),m=u.ZP.div(a||(a=(0,x.Z)(["\n  position: relative;\n  border-radius: 15px;\n"]))),f=t(184);function b(){var n=(0,d.v9)(c),e=(0,d.I0)();return(0,f.jsxs)(m,{children:[(0,f.jsx)(h,{children:"Find contacts by name"}),(0,f.jsx)(g,{type:"text",value:n,onChange:function(n){var t=n.currentTarget.value;e((0,s.T)(t))},placeholder:" "})]})}var Z,j,w,y,v,k,P,z,A,C,X,N,_,F=t(6382),I=t(2791),L=t(3634),M=t(5218),S=t(8820),q=u.ZP.form(Z||(Z=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),J=u.ZP.h2(j||(j=(0,x.Z)(["\n  margin: 0;\n"]))),K=u.ZP.button(w||(w=(0,x.Z)(["\n  width: 150px;\n  padding: 10px 15px;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border: 1px solid black;\n  font-weight: bold;\n  background-color: transparent;\n  cursor: pointer;\n  transition: all 300ms ease;\n  :hover {\n    background-color: red;\n    color: white;\n  }\n"]))),T=u.ZP.label(y||(y=(0,x.Z)(["\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n"]))),B=u.ZP.input(v||(v=(0,x.Z)(["\n  margin-left: 25px;\n  width: 250px;\n  height: 28px;\n  padding: 8px 16px;\n  font-size: 14px;\n  background-color: transparent;\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n  border: 1px solid rgb(200, 200, 200);\n  :focus-visible {\n    outline: transparent;\n  }\n"]))),D=u.ZP.input(k||(k=(0,x.Z)(["\n  margin-left: 10px;\n  width: 250px;\n  height: 28px;\n  padding: 8px 16px;\n  font-size: 14px;\n  background-color: transparent;\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 10px;\n  border: 1px solid rgb(200, 200, 200);\n  :focus-visible {\n    outline: transparent;\n  }\n"]))),E=function(){var n=(0,d.I0)(),e=(0,d.v9)((function(n){return n.contacts.items}));return(0,f.jsxs)(q,{onSubmit:function(t){t.preventDefault();var r=t.target,i=t.target.elements.name.value,a=t.target.elements.number.value;e.find((function(n){return n.name===i&&n.number===a}))?M.Am.error("Uuum, the contact with name ".concat(i," and phone number ").concat(a," is already in the list"),{style:{border:"1px solid #fc0000",padding:"16px",color:"black",fontSize:"16px"}}):(n((0,L.uK)({id:(0,F.x0)(),name:i,number:a})),M.Am.success("Contact was added to the list",{style:{border:"1px solid #128600",padding:"16px",color:"black",fontSize:"16px"}}),r.reset())},children:[(0,f.jsx)(J,{children:"Add new contact :"}),(0,f.jsxs)(T,{children:["Name",(0,f.jsx)(B,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Nataliia"})]}),(0,f.jsxs)(T,{children:["Number",(0,f.jsx)(D,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"+380XXXXXXXXX"})]}),(0,f.jsxs)(K,{type:"submit",children:[(0,f.jsx)(S.vM4,{style:{width:"20px",height:"20px"}}),"Add contact"]})]})},G=t(1454),U=t(3853),V=u.ZP.ul(P||(P=(0,x.Z)(["\n  list-style: none;\n  padding: 0;\n  font-size: 14px;\n"]))),$=u.ZP.li(z||(z=(0,x.Z)(["\n  max-width: 420px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),H=u.ZP.div(A||(A=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n"]))),O=u.ZP.div(C||(C=(0,x.Z)(["\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: red;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Q=u.ZP.span(X||(X=(0,x.Z)(["\n  /* margin-right: 15px; */\n"]))),R=u.ZP.span(N||(N=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n"]))),W=u.ZP.button(_||(_=(0,x.Z)(["\n  border: none;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  padding: 0;\n  cursor: pointer;\n  margin-left: 20px;\n"])));function Y(){var n=(0,d.v9)(l),e=(0,d.v9)(p),t=(0,d.I0)();return(0,I.useEffect)((function(){t((0,L.yF)())}),[t]),(0,f.jsxs)(V,{children:[e&&(0,f.jsx)(G.a,{}),n?n.map((function(n){return(0,f.jsxs)($,{children:[(0,f.jsxs)(H,{children:[(0,f.jsx)(O,{children:(0,f.jsx)(U.tMu,{size:18,color:"white"})}),(0,f.jsxs)(Q,{children:[n.name," "]})]}),(0,f.jsxs)(H,{children:[(0,f.jsx)("a",{type:"tel",href:n.number,children:(0,f.jsxs)(R,{children:[(0,f.jsx)(S.rJP,{}),n.number]})}),(0,f.jsx)(W,{onClick:function(){return t((0,L.GK)(n.id))},children:(0,f.jsx)(S.VPh,{style:{fill:"red",width:"16px",height:"20px"}})})]})]},n.id)})):(0,f.jsx)("span",{children:"\u0442\u0430 \u0431\u043b\u0456\u043d"})]})}var nn,en,tn,rn=t(7163),an=u.ZP.section(nn||(nn=(0,x.Z)(["\n  padding: 36px 0;\n  height: 100vh;\n  background-image: url(",");\n  background-position: top right -100px;\n  background-repeat: no-repeat;\n  background-size: 70%;\n  @media screen and (min-width: 768px) {\n    background-size: 40%;\n    background-position: top right;\n  }\n"])),rn),dn=u.ZP.div(en||(en=(0,x.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 480px) {\n    width: 480px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 1200px;\n  }\n"]))),sn=u.ZP.div(tn||(tn=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  padding: 20px;\n  margin: 0 auto;\n  width: 99%;\n  background-color: transparent;\n  border-radius: 15px;\n\n  @media screen and (min-width: 768px) {\n    width: 510px;\n  }\n"])));function on(){return(0,f.jsx)(an,{children:(0,f.jsx)(dn,{children:(0,f.jsxs)(sn,{children:[(0,f.jsx)(E,{}),(0,f.jsx)(b,{}),(0,f.jsx)(Y,{})]})})})}},7163:function(n,e,t){n.exports=t.p+"static/media/phone.aa00de6a594958f0c0f9.jpg"}}]);
//# sourceMappingURL=311.04a7687f.chunk.js.map