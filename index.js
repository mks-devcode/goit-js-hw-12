import{a as v,S as w,i as n}from"./assets/vendor-DaKTFKe4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const S=v.create({baseURL:"https://pixabay.com",params:{key:"56113716-8c020b23e7503bfe8f17bb94f",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}}),h=async(t,r)=>(await S.get("/api/",{params:{q:t,page:r}})).data,u=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".js-btn-load");function E({webformatURL:t,largeImageURL:r,tags:o,likes:l,views:e,comments:i,downloads:a}){return`
    <li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${o}"
    />
  </a>
  <div class="info-wrapper">
    <div class="info-item">
      <h3>Likes</h3>
      <p>${l}</p>
    </div>
    <div class="info-item">
      <h3>Views</h3>
      <p>${e}</p>
    </div>
    <div class="info-item">
      <h3>Comments</h3>
      <p>${i}</p>
    </div>
    <div class="info-item">
      <h3>Downloads</h3>
      <p>${a}</p>
    </div>
  </div>
</li>`}function q(t){return t.map(E).join("")}function g(t,r){const o=q(t);r===1?u.innerHTML=o:u.insertAdjacentHTML("beforeend",o),R.refresh()}function P(){u.innerHTML=""}const R=new w(".gallery-link",{captionsData:"alt",captionDelay:250});function y(){p.classList.remove("is-hidden")}function f(){p.classList.add("is-hidden")}function b(){m.classList.remove("is-hidden")}function L(){m.classList.add("is-hidden")}const $=document.querySelector(".form"),D=document.querySelector(".js-btn-load");document.querySelector(".gallery");const M=15;let c,s,d;$.addEventListener("submit",async t=>{if(t.preventDefault(),L(),s=1,c=new FormData(t.target).get("search-text").trim(),c==="")return n.error({title:"Search field cannot be empty!",position:"topRight"});P(),y();try{const o=await h(c,s);if(console.log(o),o.hits.length===0){n.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),f();return}d=Math.ceil(o.totalHits/M),console.log(d),g(o.hits,s),s>=d?n.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}):b()}catch{n.error({title:"Sorry, something went wrong",position:"topRight"})}f(),t.target.reset()});D.addEventListener("click",async()=>{s+=1,L(),y();try{const t=await h(c,s);console.log(t),g(t.hits,s),T();const r=document.querySelector(".gallery-item");if(r){const o=r.getBoundingClientRect();console.log(o),window.scrollBy({top:o.height*2,behavior:"smooth"})}}catch{n.error({title:"Sorry, something went wrong",position:"topRight"})}f()});function T(){s<d?b():n.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"})}
//# sourceMappingURL=index.js.map
