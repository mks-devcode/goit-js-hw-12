import{a as w,S,i as l}from"./assets/vendor-DaKTFKe4.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const E=w.create({baseURL:"https://pixabay.com",params:{key:"56113716-8c020b23e7503bfe8f17bb94f",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}}),m=async(t,i)=>(await E.get("/api/",{params:{q:t,page:i}})).data,q=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".js-btn-load");function P({webformatURL:t,largeImageURL:i,tags:r,likes:n,views:e,comments:o,downloads:a}){return`
    <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${r}"
    />
  </a>
  <div class="info-wrapper">
    <div class="info-item">
      <h3>Likes</h3>
      <p>${n}</p>
    </div>
    <div class="info-item">
      <h3>Views</h3>
      <p>${e}</p>
    </div>
    <div class="info-item">
      <h3>Comments</h3>
      <p>${o}</p>
    </div>
    <div class="info-item">
      <h3>Downloads</h3>
      <p>${a}</p>
    </div>
  </div>
</li>`}function $(t){return t.map(P).join("")}function p(t){return $(t)}function R(){q.innerHTML=""}const g=new S(".gallery-link",{captionsData:"alt",captionDelay:250});function y(){f.classList.remove("is-hidden")}function u(){f.classList.add("is-hidden")}function L(){h.classList.remove("is-hidden")}function b(){h.classList.add("is-hidden")}const D=document.querySelector(".form"),M=document.querySelector(".js-btn-load"),v=document.querySelector(".gallery"),T=15;let c,s,d;D.addEventListener("submit",async t=>{if(t.preventDefault(),b(),s=1,c=new FormData(t.target).get("search-text").trim(),c==="")return l.error({title:"Search field cannot be empty!",position:"topRight"});R(),y();try{const r=await m(c,s);if(console.log(r),r.hits.length===0){l.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u();return}d=Math.ceil(r.totalHits/T),console.log(d);const n=p(r.hits);v.innerHTML=n,g.refresh(),s<d&&L()}catch{l.error({title:"Sorry, something went wrong",position:"topRight"})}u(),t.target.reset()});M.addEventListener("click",async()=>{s+=1,y();try{const r=await m(c,s);console.log(r);const n=p(r.hits);v.insertAdjacentHTML("beforeend",n),g.refresh()}catch{l.error({title:"Sorry, something went wrong",position:"topRight"})}u(),x();const i=document.querySelector(".gallery-item").getBoundingClientRect();console.log(i),window.scrollBy({top:i.height*2,behavior:"smooth"})});function x(){s<d?L():(b(),l.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}
//# sourceMappingURL=index.js.map
