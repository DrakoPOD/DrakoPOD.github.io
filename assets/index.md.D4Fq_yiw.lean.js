import{d as p,g as v,h as f,a as s,b as e,t as h,i as n,n as x,w as k,T as b,r as i,o as a}from"./chunks/framework.ipRWHJtN.js";import{m as g,a as w,b as y,c as V,d as B}from"./chunks/theme.DlZRO3bo.js";const I={class:"main-page"},P={class:"main-title"},C={class:"icon",viewBox:"0 0 24 24"},H=["d"],j={class:"main-content"},E={key:0},M={key:1,class:"about"},N={key:2},S={key:3},D={key:4},T={class:"main-content-mobile"},q={class:"experience-section"},A={class:"projects-section"},F=JSON.parse('{"title":"","description":"","frontmatter":{"home":true},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),G={name:"index.md"},K=p({...G,setup(J){const o=v(0),c=[g,w,y,V,B],l=f(()=>{switch(o.value){case 0:return"Home";case 1:return"About Me";case 2:return"Experience";case 3:return"Projects";case 4:return"More";default:return"Home"}});return(O,t)=>{const u=i("CardMenu"),d=i("Experience"),r=i("Projects"),m=i("SVGBackground");return a(),s("div",null,[e("div",I,[e("div",P,[(a(),s("svg",C,[e("path",{d:c[o.value]},null,8,H)])),e("h1",null,h(l.value),1)]),n(u,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=_=>o.value=_)},null,8,["modelValue"]),t[4]||(t[4]=x()),e("div",j,[n(b,{name:"content",mode:"out-in"},{default:k(()=>[o.value==0?(a(),s("div",E,"aaaaa")):o.value==1?(a(),s("div",M,t[1]||(t[1]=[e("div",{class:"about-text"}," I’m a front-end and back-end developer, I also have experience with microcontrollers. I consider myself a self-learner, able to quickly grasp new technologies and adapt to new situations. ",-1)]))):o.value==2?(a(),s("div",N,[n(d)])):o.value==3?(a(),s("div",S,[n(r)])):(a(),s("div",D))]),_:1})]),e("div",T,[t[2]||(t[2]=e("div",null,null,-1)),t[3]||(t[3]=e("div",{class:"about"},[e("div",{class:"about-text"}," I’m a front-end and back-end developer, I also have experience with microcontrollers. I consider myself a self-learner, able to quickly grasp new technologies and adapt to new situations. ")],-1)),e("div",q,[n(d)]),e("div",A,[n(r)])]),n(m,{class:"background"})])])}}});export{F as __pageData,K as default};
