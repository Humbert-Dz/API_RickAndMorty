(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=c(e);fetch(e.href,a)}})();const m=t=>{const{id:r,name:c,status:s,species:e,type:a,gender:i,image:d}=t,u=`
    <figure class="main__character__figure">
      <img
        src="${d}"
        alt=""
        class="main__character__img"
      />
      <figcaption class="main__character__name">
        ${c} <span class="main__character__id">#${r}</span>
      </figcaption>
    </figure>
    <div class="main__character__description">
      <p class="main__character__status"><span class="bold">Status: ${s} </span> <span class="status" style="background-color: ${s==="Alive"?"green":"red"}"></span></p>
      <p class="main__character__specie"><span class="bold">Especie:</span> ${e}</p>
      <p class="main__character__type"><span class="bold">Tipo:</span> ${a} </p>
      <p class="main__character__gender"><span class="bold">Gender:</span> ${i}</p>
    </div>
    <button data-id="${r}" class="main__character__delete">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="25px" height="25px">
      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
    <button>
    `,o=document.createElement("div");return o.classList.add("main__character"),o.innerHTML=u,o};let n=[];localStorage.getItem("characters")&&(n=JSON.parse(localStorage.getItem("characters")));//!funcion para guardar en el localStorage los personajes
const l=()=>{const t=JSON.stringify(n);localStorage.setItem("characters",t)},p=()=>n,_=t=>{n.push(t),l()},h=t=>{n=n.filter(r=>r.id!=t),l()},f=async()=>{let t=Math.floor(Math.random()*826);return await(await fetch(`https://rickandmortyapi.com/api/character/${t}`)).json()},g=async t=>{const r=document.querySelector("#main__button");//!función que renderiza los personajes en el elemento div
const c=()=>{t.innerHTML="",p().map(e=>{t.append(m(e))}),document.querySelectorAll(".main__character__delete").forEach(e=>{e.addEventListener("click",()=>{h(e.getAttribute("data-id")),c()})})};c(),r.addEventListener("click",async()=>{await f().then(_),c()})};document.querySelector("#app").innerHTML=`
<h1 class="main__title">Consumiendo API de Rick and Morty</h1>
<button class="main__button" id="main__button">Agregar personaje</button>
<div class="main__characters" id="main__characters">
  
</div>
`;const y=document.querySelector("#main__characters");g(y);
