import{s as t,j as e,a as n,T as o}from"./index-6f6c61e8.js";const s=[{title:"Netflix Clone",description:"Netflix clone with vanilla JS"},{title:"Tolv Clone",description:"Tolv clone with React and tailwindcss"},{title:"Checkout Cart",description:"( Add / Delete ) Cart"},{title:"Calendar",description:"Calendar with tailwindcss"},{title:"Php Contacts",description:"PHP Crud Opeations and Searching"},{title:"Crypto Tracker",description:"track cryptocurrency with coinpaprika api"}],h=({offset:a})=>e(l,{children:s.slice(0,a).map((i,r)=>e(c,{children:n("a",{href:`https://github.com/hotaroo-dev/${i.title.replace(/\s/g,"-")}`,target:"_blank",rel:"noopener noreferrer",children:[e(p,{src:`./posts/post${r}.jpg`,alt:i.title}),e(d,{children:i.description})]})},r))}),l=t.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;

  @media screen and (min-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`,c=t.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,p=t.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
  box-shadow: #0003 0px 1px 2px 0px, #0002 0px 1px 3px 1px;
`,d=t(o)`
  margin-top: 0.75rem;
  opacity: 0.8;
`;export{h as C};
