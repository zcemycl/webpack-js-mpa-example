(()=>{"use strict";var t={54:(t,e,a)=>{var n=a(212);console.log("this is the about page..."),(0,n.F)()},212:(t,e,a)=>{a.d(e,{F:()=>n});const n=()=>{console.log("callme....")}},221:(t,e,a)=>{a.d(e,{I:()=>n});const n=(t,e)=>t+e},750:(t,e,a)=>{a.d(e,{Q:()=>n});class n{constructor(t,e){this.model=t,this.view=e,this.model.bindDataChanged(this.onDataChanged),this.view.bindAddRandom(this.handleAddRandom),this.onDataChanged(this.model.data)}onDataChanged=t=>{console.log("changed data"),this.view.displayChanges(t)};handleAddRandom=t=>{this.model.addRandom(t)}}},166:(t,e,a)=>{a.d(e,{H:()=>n});class n{constructor(){this.data=[]}bindDataChanged(t){this.onDataChanged=t}_commit(t){this.onDataChanged(t)}addRandom(t){this.data.push(t),this._commit(this.data)}}},767:(t,e,a)=>{a.d(e,{G:()=>n});class n{constructor(){this.app=this.getElement("#root"),this.button=this.createElement("button"),this.button.textContent="New Number",this.paragraph=this.createElement("p"),this.paragraph.innerHTML="",this.app.append(this.button,this.paragraph)}getElement(t){return document.querySelector(t)}createElement(t,e){const a=document.createElement(t);return e&&a.classList.add(e),a}bindAddRandom(t){this.button.addEventListener("click",(e=>{console.log("click!!!"),t(Math.floor(100*Math.random())+1)}))}displayChanges(t){console.log(t),this.paragraph.innerHTML=t.toString()}}}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,a),s.exports}a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{a(54);var t=a(221),e=a(767),n=a(750),o=a(166);console.log("this is the index page..."),console.log((0,t.I)(3,4));new n.Q(new o.H,new e.G)})()})();