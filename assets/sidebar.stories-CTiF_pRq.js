import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{r as l}from"./index-BEn-qc9j.js";import{c as s}from"./createLucideIcon-BT4tydPZ.js";import{H as I}from"./index-BRgwz2oW.js";import{c as r}from"./index-CQJnhAbd.js";import{S as w}from"./settings-Dg-RlEhs.js";import"./index-C9rmetsa.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=s("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=s("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=s("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=s("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=s("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=s("PanelRightOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=s("Sticker",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=s("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);function q(){const[t,o]=l.useState("open");return{state:t,toggle:()=>o(t==="open"?"close":"open")}}const u=l.createContext({});function g({children:t}){const o=q();return e.jsx(u.Provider,{value:o,children:t})}const d=()=>l.useContext(u);g.__docgenInfo={description:"",methods:[],displayName:"SidebarProvider"};function f({...t}){const{toggle:o,state:a}=d();return a==="open"?e.jsx(H,{...t,className:"cursor-pointer",onClick:o}):e.jsx(x,{...t,className:"cursor-pointer",onClick:o})}f.__docgenInfo={description:"",methods:[],displayName:"Icon"};function y({icon:t,children:o}){const{state:a}=d();return e.jsxs("div",{"data-open":a,className:"flex w-full cursor-pointer items-center gap-4 rounded p-4 text-foreground transition-colors hover:bg-foreground/5 data-[open=close]:justify-center dark:text-background dark:hover:bg-background/5",children:[t,e.jsx("p",{"data-open":a,className:"data-[open=close]:hidden",children:o})]})}y.__docgenInfo={description:"",methods:[],displayName:"Item",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""}}};function k({children:t,...o}){return e.jsx(g,{...o,children:t})}k.__docgenInfo={description:"",methods:[],displayName:"Root"};function b({children:t,...o}){const{state:a}=d();return e.jsx(I,{"data-state":a,size:"sm",className:"data-[state=close]:hidden",...o,children:t})}b.__docgenInfo={description:"",methods:[],displayName:"Title",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}};const z=r({base:"w-full bg-background/15 p-4"});function j({children:t,className:o,...a}){const{state:i}=d();return e.jsx("div",{...a,"data-state":i,className:z({className:o}),children:t})}j.__docgenInfo={description:"",methods:[],displayName:"Footer"};const D=r({base:"flex h-20 w-full items-center justify-center border-b border-b-foreground/15 bg-foreground/5 dark:border-b-background/25 dark:bg-foreground"});function v({children:t,className:o,...a}){return e.jsx("div",{...a,className:D({className:o}),children:e.jsx("img",{alt:"logo",className:"w-40",src:"https://moveuptecnologia.com.br/assets/logo-DxqGdxLn.svg"})})}v.__docgenInfo={description:"",methods:[],displayName:"Header"};const E=r({base:"h-[calc(100vh-14.5rem)] bg-foreground/5 p-4 dark:bg-background/15"});function N({children:t,className:o,...a}){return e.jsx("div",{className:E({className:o}),...a,children:t})}N.__docgenInfo={description:"",methods:[],displayName:"Content"};const O=r({base:"data-[open=open]:w-[276px] w-[100px]"});function _({children:t,className:o,...a}){const{state:i}=d();return e.jsx("aside",{"data-open":i,className:O({className:o}),...a,children:t})}_.__docgenInfo={description:"",methods:[],displayName:"Container"};r({base:"flex flex-col data-[state=close]:hidden"});r({base:"flex items-center gap-2 rounded-b border-t border-t-zinc-200 bg-white p-4"});function C(){const{state:t,toggle:o}=d();return e.jsxs("div",{"data-open":t,className:"mb-8 mt-4 flex items-center justify-center data-[open=open]:justify-between",children:[e.jsx("h3",{"data-open":t,className:"text-lg font-semibold text-foreground data-[open=close]:hidden dark:text-background",children:"Menu"}),e.jsx("button",{onClick:o,className:"cursor-pointer",children:t?e.jsx(T,{size:24,className:"text-foreground dark:text-background"}):e.jsx(x,{size:24,className:"text-foreground dark:text-background"})})]})}C.__docgenInfo={description:"",methods:[],displayName:"HeaderContent"};const n={Root:k,Content:N,Container:_,Header:v,Footer:j,HeaderContent:C,Item:y,Title:b,Icon:f},J={render:()=>e.jsx("div",{className:"h-screen",children:e.jsx(n.Root,{children:e.jsxs(n.Container,{children:[e.jsxs(n.Header,{children:[e.jsx(n.Title,{children:"Menu"}),e.jsx(n.Icon,{})]}),e.jsxs(n.Content,{children:[e.jsx(n.HeaderContent,{}),e.jsx(n.Item,{icon:e.jsx(M,{}),children:"Dashboard"}),e.jsx(n.Item,{icon:e.jsx(L,{}),children:"Chats"}),e.jsx(n.Item,{icon:e.jsx(R,{}),children:"Tickets"}),e.jsx(n.Item,{icon:e.jsx(P,{}),children:"Feedbacks"})]}),e.jsxs(n.Footer,{children:[e.jsx(n.Item,{icon:e.jsx(w,{}),children:"Configuraçoes"}),e.jsx(n.Item,{icon:e.jsx(S,{}),children:"Ajuda"})]})]})})}),title:"Surfaces/Sidebar",tags:["autodocs"]},c={};var p,h,m;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(h=c.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const K=["SidebarDefault"];export{c as SidebarDefault,K as __namedExportsOrder,J as default};
