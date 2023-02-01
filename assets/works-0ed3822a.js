import{s as r,m as e,a,j as i,B as c,C as d,W as p,F as m,d as h,c as g,b as y}from"./index-6f6c61e8.js";import{C as u}from"./cards-d402a061.js";const v=()=>{const s=[...Array(12)].map((n,t)=>`lang${t+1}.png`);return a(x,{children:[i(c,{style:{textAlign:"center",gridColumn:"span 2"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:"Technology"}),i(o,{variants:f,transition:{type:"tween",duration:.4},children:s.slice(0,6).map((n,t)=>i("span",{children:i(l,{src:`./langs/${n}`,initial:{scale:1},whileHover:{scale:1.2}})},t))}),i(o,{variants:C,transition:{type:"tween",duration:.4},children:s.slice(6,12).map((n,t)=>i("span",{children:i(l,{src:`./langs/${n}`,initial:{scale:1},whileHover:{scale:1.2}})},t+6))})]})},x=r(e.div)`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  gap: 0.625rem;
  justify-content: center;
`,o=r(e.div)`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  gap: 0.625rem;
`,l=r(e.img)`
  width: 3.75rem;
  height: 3.75rem;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 10rem;
  cursor: pointer;
`,f={hidden:{x:-10,opacity:0},visible:{x:0,opacity:1}},C={hidden:{x:10,opacity:0},visible:{x:0,opacity:1}},w=()=>a(d,{variants:{},initial:"hidden",animate:"visible",exit:"hidden",children:[i(p,{children:i("title",{children:"Hotaroo - Works"})}),a(m,{children:[i(v,{}),i(h,{initial:{opacity:0},animate:{opacity:.5},exit:{opacity:0}}),a(e.div,{variants:g,transition:{type:"tween",duration:.4},children:[i(y,{children:"Works"}),i(u,{})]})]})]});export{w as default};
