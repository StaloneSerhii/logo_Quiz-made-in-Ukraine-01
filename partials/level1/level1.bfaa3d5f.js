!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("jyBrX"),c=0;function l(e){document.querySelector(".helper").addEventListener("click",(function(){if(g()>=5&&r.level1[e].answer.length>=c+1){var o=r.level1[e].answer.split(""),l=g();a(Number(l)-1),alert(o[c]),n+=o[c],t.value="",t.value+=n,t.placeholder+=o[c],c+=1}}));var t=document.querySelector(".inputClass");document.querySelector(".helper-twit").addEventListener("click",(function(){if(g()>=25){var n=r.level1[e].answer;console.log(n);var o=g();a(Number(o)-25),t.value="",t.value+=n,t.placeholder+=n}}));var n=""}function a(e){localStorage.removeItem("monney"),localStorage.setItem("monney",e),document.querySelector(".monney").textContent=g()}r=o("jyBrX");var i="",u="",s=document.querySelector(".levelsAll"),d=document.querySelector(".back-btn-ref"),m=document.querySelector(".logoList"),v=function(e){var t=document.querySelector(".monney");null===g()?t.textContent=0:t.textContent=g();return e.map((function(e){var t=e.logoHidden,n=e.idName,o=e.answer,r=e.logo;return localStorage.getItem("".concat(o))===n?'<li><img class="imgList" src="'.concat(r,'" alt="').concat(n,'" width="200px" /><img src="/done.3fe18ed5.png" alt="+" width="40" class="check"></li>'):'<li><img class="imgList" src="'.concat(t,'" alt="').concat(n,'" width="200px" /></li>')})).join("")}(r.level1);function g(){var e=localStorage.getItem("monney");return JSON.parse(e)}m.insertAdjacentHTML("beforeend",v);var p=document.querySelector(".logoList");function b(e){i=e.target.alt;var t=r.level1[i].answer;u=localStorage.getItem("".concat(t)),p.removeEventListener("click",b),f(u,i)}function f(e,t){var n=r.level1[t],o=n.logoHidden,c=n.idName,a=n.logo,u=n.info,m=Number(c);if(e==Number(m)){d.hidden=!1,s.hidden=!0,function(){var e='<div class="logoInput"><img src="'.concat(a,'" alt="').concat(c,'" width="200px"><p>').concat(u,'</p><button class="helper back">< Back</button><button  class="helper-twit next">Next ></button></div>');p.innerHTML=e;var t=document.querySelector(".next"),n=document.querySelector(".back");t.addEventListener("click",y),n.addEventListener("click",S)}()}else{d.hidden=!1,s.hidden=!0,function(){var e='<div class="logoInput"><div><button class="helper">Буква</button><button class="helper back">< Back</button></div><img src="'.concat(o,'" alt="').concat(c,'" width="200px"><div><button  class="helper-twit">Відп.</button><button  class="helper-twit next">Next ></button></div><form class="sendBtn"><input class="inputClass" placeholder="" type="text"><button style="backround-color: grey;" class="btn-answer">Відповідь</button></form></div>');p.innerHTML=e,document.querySelector(".sendBtn").addEventListener("submit",(function(e){e.preventDefault(),function(e){var t=r.level1[i],n=t.idName,o=t.answer,c=t.logo,l=t.info;if(e===o)if(null===localStorage.getItem("monney"))localStorage.setItem("monney",5);else{var a=localStorage.getItem("monney"),u=JSON.parse(a),s=Number(u),d=[];d.push(s),d.join("");var m=Number(d)+5;localStorage.removeItem("monney"),localStorage.setItem("monney",m),localStorage.setItem("".concat(o),"".concat(n)),document.querySelector(".monney").textContent=g();var v='<div class="logoInput"><img src="'.concat(c,'" alt="').concat(n,'" width="200px"><p>').concat(l,'</p><button class="helper back"><Back</button><button  class="helper-twit next">Next></button></div>');p.innerHTML=v;var b=document.querySelector(".next"),f=document.querySelector(".back");b.addEventListener("click",y),f.addEventListener("click",S)}else alert("Назва не вірна")}(e.target[0].value.toLowerCase())})),l(t);var n=document.querySelector(".next"),a=document.querySelector(".back");n.addEventListener("click",y),a.addEventListener("click",S)}()}}function y(){i=Number(i)+1;var e=r.level1[i].answer;u=localStorage.getItem("".concat(e)),p.removeEventListener("click",b),f(u,Number(i))}function S(){i=Number(i)-1;var e=r.level1[i].answer;u=localStorage.getItem("".concat(e)),p.removeEventListener("click",b),f(u,Number(i))}p.addEventListener("click",b)}();
//# sourceMappingURL=level1.bfaa3d5f.js.map
