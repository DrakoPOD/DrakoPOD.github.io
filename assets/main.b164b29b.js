import"./materialdesignicons.min.601bd078.js";/* empty css             */const y=document.querySelector("#menu-btn"),i=document.querySelector("#menu");var l=!1;y.addEventListener("click",()=>{i.classList.toggle("nav-visible"),l=!l});document.addEventListener("click",t=>{const e=t.target;e.id!=="menu-btn"&&l&&!i.contains(e)&&(i.classList.toggle("nav-visible"),l=!l)});const f=document.querySelector("#says"),s=["Hello World!","\xA1Hola Mundo!","I \u2764 code"];var n=0,a=!1;const c=t=>{t==0&&(a=!0,n++,n>=s.length&&(n=0));let e;if(a?e=t+1:e=t-1,e>s[n].length){a=!1;return}f.textContent=s[n].substring(0,e),setTimeout(()=>{c(e)},70)};c(s[n].length);setInterval(()=>{c(s[n].length)},5e3);function g(){var t=window.innerHeight,e=document.querySelector("#lang-svg").getBoundingClientRect().top,o=300;if(e<t-o){let r=document.querySelector("#line-py"),u=document.querySelector("#line-js"),d=document.querySelector("#line-cpp"),m=document.querySelector("#line-py-full"),p=document.querySelector("#line-js-full"),v=document.querySelector("#line-cpp-full");r.classList.add("ani-class","ani-py"),u.classList.add("ani-class","ani-js"),d.classList.add("ani-class","ani-cpp"),m.classList.add("ani-class","ani-py-full"),p.classList.add("ani-class","ani-js-full"),v.classList.add("ani-class","ani-cpp-full")}}window.addEventListener("scroll",g);
