!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var c={id:e,exports:{}};return t[e]=c,o.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var c=o("fOJQG"),r=[{idName:"0",answer:"мівіна",logoHidden:"https://scontent.fifo4-1.fna.fbcdn.net/v/t39.30808-6/328696425_504651701591425_682442139963775075_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=XStT_SOsxzwAX9ZxqC2&_nc_oc=AQkYXRHzSujm0xmBSH9Se1s5Z2rPlhT8b-LIMOJPP6rvfwlzMtRmodcLQuNqnv77zk4&_nc_ht=scontent.fifo4-1.fna&oh=00_AfAMJ6j83guX5SXd4hYgckwusee1982zFYCsRdjXRbY_FQ&oe=63E4C3E7",logo:"https://scontent.fifo4-1.fna.fbcdn.net/v/t39.30808-6/328451124_500768835564531_5334138654413128220_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=75rkE4efDIkAX82jPkW&_nc_ht=scontent.fifo4-1.fna&oh=00_AfANTiD2FvEVcZbeDj4XGYtUCeGTxyGvdWNu4vhshc62qg&oe=63E496A3",info:"Мівіна – товарний знак, розроблений у Харкові корпорацією «Техноком», що займається виробництвом харчових напівфабрикатів.«Мівіна» є загальною назвою вермішелі швидкого приготування в українських споживачів"}],a="",l="",i=document.querySelector(".levelsAll"),s=document.querySelector(".back-btn-ref"),u=document.querySelector(".logoList"),d=function(e){var t=document.querySelector(".monney");null===m()?t.textContent=0:t.textContent=m();return e.map((function(e){var t=e.logoHidden,n=e.idName,o=e.answer,c=e.logo;return localStorage.getItem("".concat(o))===n?'<li><img class="imgList" src="'.concat(c,'" alt="').concat(n,'" width="200px" /><img src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39-340x340.png" alt="+" width="40" class="check"></li>'):'<li><img class="imgList" src="'.concat(t,'" alt="').concat(n,'" width="200px" /></li>')})).join("")}(r);function m(){var e=localStorage.getItem("monney");return JSON.parse(e)}u.insertAdjacentHTML("beforeend",d);var f=document.querySelector(".logoList");function v(e){a=e.target.alt;var t=r[a].answer;l=localStorage.getItem("".concat(t)),f.removeEventListener("click",v),g(l,a)}function g(e,t){var n=r[t],o=n.logoHidden,l=n.idName,u=n.logo,d=n.info,v=Number(l);if(e==Number(v)){s.hidden=!1,i.hidden=!0,function(){var e='<div class="logoInput"><img src="'.concat(u,'" alt="').concat(l,'" width="200px"><p>').concat(d,'</p><button class="helper back">< Back</button><button  class="helper-twit next">Next ></button></div>');f.innerHTML=e;var t=document.querySelector(".next"),n=document.querySelector(".back");t.addEventListener("click",p),n.addEventListener("click",b)}()}else{s.hidden=!1,i.hidden=!0,function(){var e='<div class="logoInput"><div><button class="helper">Буква</button><button class="helper back">< Back</button></div><img src="'.concat(o,'" alt="').concat(l,'" width="200px"><div><button  class="helper-twit">Відп.</button><button  class="helper-twit next">Next ></button></div><form class="sendBtn"><input class="inputClass" placeholder="" type="text"><button style="backround-color: grey;" class="btn-answer">Відповідь</button></form></div>');f.innerHTML=e,document.querySelector(".sendBtn").addEventListener("submit",(function(e){e.preventDefault(),function(e){var t=r[a],n=t.idName,o=t.answer,c=t.logo,l=t.info;if(e===o)if(null===localStorage.getItem("monney"))localStorage.setItem("monney",5);else{var i=localStorage.getItem("monney"),s=JSON.parse(i),u=Number(s),d=[];d.push(u),d.join("");var v=Number(d)+5;localStorage.removeItem("monney"),localStorage.setItem("monney",v),localStorage.setItem("".concat(o),"".concat(n)),document.querySelector(".monney").textContent=m();var g='<div class="logoInput"><img src="'.concat(c,'" alt="').concat(n,'" width="200px"><p>').concat(l,'</p><button class="helper back">< Back</button><button  class="helper-twit next">Next></button></div>');f.innerHTML=g;var h=document.querySelector(".next"),S=document.querySelector(".back");h.addEventListener("click",p),S.addEventListener("click",b)}else alert("Назва не вірна")}(e.target[0].value.toLowerCase())})),(0,c.help)(t);var n=document.querySelector(".next"),i=document.querySelector(".back");n.addEventListener("click",p),i.addEventListener("click",b)}()}}function p(){a=Number(a)+1;var e=r[a].answer;l=localStorage.getItem("".concat(e)),f.removeEventListener("click",v),g(l,Number(a))}function b(){a=Number(a)-1;var e=r[a].answer;l=localStorage.getItem("".concat(e)),f.removeEventListener("click",v),g(l,Number(a))}f.addEventListener("click",v)}();
//# sourceMappingURL=extralevel1.c88be212.js.map
