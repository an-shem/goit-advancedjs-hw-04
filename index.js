import{a as g,S as M,i as l}from"./assets/vendor-CucEYOFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();g.defaults.baseURL="https://pixabay.com/api/";const $="56613095-299ca1a4c8e67ddfc9e7ec421",p=15;async function y(r,t){return(await g.get("",{params:{key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:p}})).data}const h=document.querySelector(".gallery"),v=document.querySelector(".loader"),L=document.querySelector(".btn-more"),I=new M(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function A(r){return r.map(({webformatURL:t,largeImageURL:i,tags:s,likes:e,views:a,comments:o,downloads:E})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${s}"
              loading="lazy"
            />
          </a>

          <div class="image-info">
            <div class="image-info-item">
              <p class="image-info-label">Likes</p>
              <p class="image-info-value">${e}</p>
            </div>

            <div class="image-info-item">
              <p class="image-info-label">Views</p>
              <p class="image-info-value">${a}</p>
            </div>

            <div class="image-info-item">
              <p class="image-info-label">Comments</p>
              <p class="image-info-value">${o}</p>
            </div>

            <div class="image-info-item">
              <p class="image-info-label">Downloads</p>
              <p class="image-info-value">${E}</p>
            </div>
          </div>
        </li>
      `).join("")}function b(r){const t=A(r);h.insertAdjacentHTML("beforeend",t),I.refresh()}function B(){h.innerHTML=""}function w(){v.classList.remove("is-hidden")}function q(){v.classList.add("is-hidden")}function P(){L.classList.remove("is-hidden")}function R(){L.classList.add("is-hidden")}const d=document.querySelector(".form"),C=d.elements["search-text"],m=document.querySelector(".btn-more");l.settings({position:"topRight"});let n,c,u,S;const f=async()=>{try{n++,R(),w();const{hits:r}=await y(c,n);b(r),window.scrollBy({top:S*2,behavior:"smooth"}),n===u?(m.removeEventListener("click",f),l.warning({message:"We're sorry, but you've reached the end of search results."})):P()}catch(r){l.warning({message:r.message})}finally{q()}};d.addEventListener("submit",async r=>{try{if(r.preventDefault(),c=C.value.trim(),d.reset(),!c){l.warning({message:"Please enter a search query."});return}B(),w(),n=1,R(),m.removeEventListener("click",f);const{hits:t,totalHits:i}=await y(c,n);if(t.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");u=Math.ceil(i/p),b(t),u>1&&(m.addEventListener("click",f),P(),S=document.querySelector(".gallery-item").getBoundingClientRect().height)}catch(t){l.warning({message:t.message})}finally{q()}});
//# sourceMappingURL=index.js.map
