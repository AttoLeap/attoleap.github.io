import{m as u,w as x,a as C,i as d,s as b,r as L,t as m,b as c,x as h,j as f,T as S}from"./index-BM6vt2eu.js";import{h as N,i as P,u as w,j as v}from"./routing-DaqVXGeE.js";var j=m("<a>");function g(e){e=u({inactiveClass:"inactive",activeClass:"active"},e);const[,l]=x(e,["href","state","class","activeClass","inactiveClass","end"]),r=N(()=>e.href),i=P(r),o=w(),s=C(()=>{const t=r();if(t===void 0)return[!1,!1];const a=v(t.split(/[?#]/,1)[0]).toLowerCase(),n=v(o.pathname).toLowerCase();return[e.end?a===n:n.startsWith(a+"/")||n===a,a===n]});return(()=>{var t=d(j);return b(t,u(l,{get href(){return i()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!s()[0],[e.activeClass]:s()[0],...l.classList}},link:"",get"aria-current"(){return s()[1]?"page":void 0}}),!1,!1),L(),t})()}var k=m('<main class=uno-c409hg><h1 class="uno-7vspv1 max-6-xs">Not Found</h1><p class=uno-7o2od0>Oops! Looks like you got lost in here</p><p class=uno-v08uay><!$><!/> - <!$><!/>');function F(){return[c(S,{children:"AttoLeap | 404 Page Not Found"}),(()=>{var e=d(k),l=e.firstChild,r=l.nextSibling,i=r.nextSibling,o=i.firstChild,[s,t]=h(o.nextSibling),a=s.nextSibling,n=a.nextSibling,[$,_]=h(n.nextSibling);return f(i,c(g,{href:"/",class:"uno-wunj1q",children:"Home"}),s,t),f(i,c(g,{href:"/about",class:"uno-wunj1q",children:"About Page"}),$,_),e})()]}export{F as default};