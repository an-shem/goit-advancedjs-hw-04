import{a as c,S as d,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();c.defaults.baseURL="https://pixabay.com/api/";const p="56613095-299ca1a4c8e67ddfc9e7ec421";async function g(i){return(await c.get("",{params:{key:p,q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function h(i){return i.map(({webformatURL:t,largeImageURL:r,tags:o,likes:e,views:a,comments:s,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${o}"
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
              <p class="image-info-value">${s}</p>
            </div>

            <div class="image-info-item">
              <p class="image-info-label">Downloads</p>
              <p class="image-info-value">${m}</p>
            </div>
          </div>
        </li>
      `).join("")}function v(i){const t=h(i);f.innerHTML=t,y.refresh()}function L(){f.innerHTML=""}function b(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}const l=document.querySelector(".form"),q=l.elements["search-text"];n.settings({position:"topRight"});l.addEventListener("submit",i=>{i.preventDefault();const t=q.value.trim();if(l.reset(),!t){n.warning({message:"Please enter a search query."});return}L(),b(),g(t).then(({hits:r})=>{if(r.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");v(r)}).catch(r=>{n.warning({message:r.message})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
