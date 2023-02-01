import{s as t,m as l,U as k,j as e,a as o,C as x,W as y,F as v,c as B,T as r,B as a,L as Y,N as Z,G as z,I as S}from"./index-6f6c61e8.js";import{C as T}from"./cards-d402a061.js";const X=()=>e($,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e(j,{variants:te,initial:"normal",animate:"active",children:o(I,{children:[e(C,{}),o(H,{children:[e(_,{}),e(L,{}),e(F,{}),e(P,{}),e(V,{children:o(D,{children:[e(J,{children:"hello, Hotaroo"}),e(K,{})]})}),o(q,{children:[e(Q,{}),e("span",{children:"Macintosh Plus"})]}),e(ee,{})]}),e(W,{}),e(M,{}),e(N,{}),e(R,{}),e(A,{}),e(G,{}),e(O,{}),e(U,{})]})})}),$=t(l.div)`
  width: 100%;
  perspective: 1600px;
  perspective-origin: 50% 100px;
  font-size: 18px;

  @font-face {
    font-family: 'apple_garamondregular';
    src: url('./fonts/apple_garamond-webfont.eot');
    src: url('./fonts/apple_garamond-webfont.eot?#iefix')
        format('embedded-opentype'),
      url('./fonts/apple_garamond-webfont.woff') format('woff'),
      url('./fonts/apple_garamond-webfont.ttf') format('truetype'),
      url('./fonts/apple_garamond-webfont.svg#apple_garamondregular')
        format('svg');
    font-weight: normal;
    font-style: normal;
  }
`,j=t(l.div)`
  width: 9em;
  margin-inline: auto;
  margin-bottom: 5.5em;
  transform-style: preserve-3d;
`,I=t.div`
  width: 12em;
  height: 10em;
  margin-inline: auto;
  transform-style: preserve-3d;
  transform: rotateY(-20deg);

  & figure,
  & span {
    display: block;
    position: absolute;
    backface-visibility: hidden;
    opacity: 1;
  }
`,C=t.figure`
  height: 10.95em;
  width: 9.6em;
  background: linear-gradient(
    to left,
    #fafafa,
    #d9d9d9 0.25em,
    #d9d9d9 9.35em,
    #fafafa
  );
  transform: rotateX(5deg) rotateX(90deg) translateZ(5.45em);
`,h=t.figure`
  height: 11.5em;
  width: 9.6em;
`,H=t(h)`
  background-color: #e0e0e0;
  transform: rotateX(5deg) translateZ(5.43em);
`,g=t.span`
  width: 100%;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
`,_=t(g)`
  border-top: 0.75em solid #f2f2f2;
`,L=t(g)`
  border-top: 0.75em solid #ccc;
  transform: rotateZ(180deg) translateY(-10.76em);
`,p=t.span`
  width: 11.5em;
  border-left: 0.75em solid transparent;
  border-right: 0.75em solid transparent;
`,F=t(p)`
  border-top: 0.5em solid #d9d9d9;
  transform: rotateZ(-90deg) translateX(-5.5em) translateY(-5.5em);
`,P=t(p)`
  border-top: 0.5em solid #d4d4d4;
  transform: rotateZ(90deg) translateX(5.5em) translateY(-3.6em);
`,W=t(h)`
  background: linear-gradient(to top, #f2f2f2, #e6e6e6 0.25em, #c2c2c2);
  transform: rotateX(5deg) translateZ(-5.45em) rotateY(180deg);
`,f=t.figure`
  height: 11.5em;
  width: 10.9em;
  background: linear-gradient(to top, #fffa, #e0e0e0 0.25em, #b3b3b3);
`,M=t(f)`
  transform: rotateX(5deg) rotateY(-90deg) translateZ(5.45em);
`,N=t(f)`
  transform: rotateX(5deg) rotateY(90deg) translateZ(4.14em);
`,b=t.figure`
  height: 2.1em;
  width: 9.6em;
  background: #c2c2c2;
`,u=t.figure`
  height: 2.1em;
  width: 10em;
  background: #b3b3b3;
`,R=t(b)`
  transform: translateY(10.7em) translateZ(5em);
`,A=t(b)`
  background-color: #b3b3b3;
  transform: translateY(10.7em) translateZ(-5em) rotateY(180deg);
`,G=t(u)`
  transform: translateY(10.7em) rotateY(-90deg) translateZ(4.99em);
`,O=t(u)`
  transform: translateY(10.7em) rotateY(90deg) translateZ(4.58em);
`,U=t.figure`
  width: 10em;
  height: 11em;
  background: transparent;
  transform: rotateX(90deg) translateZ(-7.4em) translateX(12em);
  box-shadow: -12.2em 0 1.8em rgba(100, 90, 100, 0.4);

  @media screen and (max-width: 33.75rem) {
    display: none !important;
  }
`,V=t.figure`
  width: 7.25em;
  height: 5.25em;
  background: linear-gradient(
    to top,
    #b3b3b3,
    #cccccc 4%,
    #cccccc 96%,
    #a6a6a6
  );
  border-radius: 0.1em;
  padding: 0.5em;
  transform: translate3d(1.15em, 1.5em, 0);
`,D=t.span`
  width: 6.75em;
  height: 4.8em;
  top: 0.25em;
  left: 0.25em;
  background: #657374;
  border: 0.25em solid #657374;
  border-radius: 0.25em;
  overflow: hidden;
`,E=k`
  0% { opacity: 0},
  49.9% { opacity: 0},
  50%, 100% {opacity: 1}
`,J=t.p`
  color: #00c317;
  font-family: monospace, prestige;
  font-size: 0.4em;
  &:before {
    content: '> ';
  }
  &:after {
    content: ' |';
    animation: ${E} 1.5s infinite linear;
  }
`,K=t.span`
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.25em;
  background: linear-gradient(
    to bottom left,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.06) 50%,
    transparent 50%,
    transparent
  );
`,q=t.figure`
  transform: translateY(8.25em) translateX(1.25em);
  & > span:last-child {
    top: 0.6em;
    left: 2.5em;
    width: 10em;
    font-family: apple_garamondregular, 'Garamond', 'Times New Roman', Times,
      serif;
    font-size: 0.333em;
    color: #555555;
    line-height: 0.8em;
  }
`,Q=t.span`
  width: 10px;
  height: 16px;
  top: -0.25em;
  left: 0;
  background: url(./apple.png) no-repeat bottom;
  background-size: 100%;
`,ee=t.figure`
  width: 3.2em;
  height: 0.2em;
  background-color: #555;
  transform: translate3d(5em, 8.52em, 0);
  border-top: 0.1em solid #ccc;
  border-bottom: 0.1em solid #f2f2f2;
  border-left: 0.3em solid #e6e6e6;
  border-right: 0.3em solid #e6e6e6;
  border-radius: 0.25em;
`,te={normal:{transform:"none"},active:{transform:["rotateY(40deg)","rotateY(-40deg)","rotateY(40deg)"],transition:{type:"tween",duration:10,repeat:1/0}}},me=()=>o(x,{variants:{},initial:"hidden",animate:"visible",exit:"hidden",children:[e(y,{children:e("title",{children:"Hotaroo - Homepage"})}),o(v,{children:[e(X,{}),o(l.div,{variants:B,transition:{type:"tween",duration:.4},children:[e(oe,{children:"Hello, I'm a student majoring in computer science based in Cambodia!"}),o(c,{children:[e(ne,{src:"./hotaroo.jpg"}),o(re,{children:[e(ae,{children:"Kay Sothearo"}),e(r,{children:"Web Developer ( Frontend / Backend )"})]})]}),o(i,{children:[e(a,{children:"Work"}),o(ie,{children:[e(w,{href:"mailto:kaysothearo19@gmail.com",children:"Hotaroo"})," is a student and full-stack developer based in Phnom Penh. He is not the most talkative guy, and prefers his work to do the talk. On some of these projects he worked alone, but on some he worked on a team and definitely enjoyed teamwork. When not online, he enjoys spending time with his family and sometimes staying alone and watching movies. Honestly think it is important to balance the long hours we spend in front of a computer screen with some physical activity, and that’s exactly what he does in his leisure time."]})]}),e(c,{children:e(Y,{to:"/works",children:o(d,{children:[e("span",{children:"My portfolio"}),e(Z,{})]})})}),o(i,{children:[e(a,{children:"Bio"}),o(se,{children:[o(r,{children:[e("span",{children:"2001"}),"Born in Takhmao, Cambodia"]}),o(r,{children:[e("span",{children:"2019"}),"Passed the National Examinations"]}),o(r,{children:[e("span",{children:"2023"}),"Completed Bachelor's in Computer Science"]}),o(r,{children:[e("span",{children:"2023 to present"}),"Job Hunting"]})]})]}),o(i,{children:[e(a,{children:"I ♥"}),o(r,{children:["Art, Music,"," ",e(s,{href:"https://animedao.to",children:"Watching Anime"}),", Learning from Others"]})]}),o("div",{children:[e(a,{children:"On the Web"}),o(de,{children:[e(m,{children:e(s,{href:"https://github.com/hotaroo-dev",children:o(d,{children:[e(z,{}),e("span",{children:"@hotaroo-dev"})]})})}),e(m,{children:e(s,{href:"#",children:o(d,{children:[e(S,{}),e("span",{children:"@hotaroo"})]})})})]}),e(T,{offset:2})]})]})]})]}),i=t.div`
  margin-bottom: 1.5rem;
`,c=t.div`
  display: flex;
  justify-content: center;
`,oe=t(r)`
  text-align: center;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0.875rem;
  background-color: ${n=>n.theme.textBg};
  transition: background-color 0.25s ease-in-out;
`,ne=t.img`
  order: 1;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 0.25rem solid #204529;
`,re=t.div`
  flex: 1;
`,ae=t.h3`
  font-size: 2.2rem;
  line-height: 1.5;
  font-weight: 700;
`,ie=t(r)`
  text-indent: 1rem;
  text-align: justify;
  hyphens: auto;
`,se=t.div`
  span {
    font-weight: 600;
    margin-right: 1rem;
  }
`,w=t.a`
  color: ${n=>n.theme.anchor};
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
  text-decoration: none;
  text-underline-offset: 3px;
  &:hover {
    text-decoration: underline;
  }
`,s=t(w).attrs({target:"_blank",rel:"noopener noreferrer"})``,d=t.button`
  height: 2.5rem;
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  padding-inline: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${n=>n.theme.button.bg};
  color: ${n=>n.theme.button.color};
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  transition: background-color 0.25s ease-in-out;
  &:hover {
    background-color: ${n=>n.theme.button.hover};
  }

  span {
    font-weight: 600;
  }
`,de=t.ul`
  margin-bottom: 1.25rem;
`,m=t.li`
  a > button {
    box-shadow: none;
    color: ${n=>n.theme.button.bg};
    background-color: transparent;
    &:hover {
      background-color: ${n=>n.theme.button.link.normal};
    }

    &:active {
      background-color: ${n=>n.theme.button.link.active};
    }
  }
`;export{me as default};
