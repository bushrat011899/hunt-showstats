(()=>{"use strict";var e,t,a,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.m=n,e=[],o.O=(t,a,n,r)=>{if(!a){var i=1/0;for(c=0;c<e.length;c++){for(var[a,n,r]=e[c],s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](a[l])))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,n,r]},o.F={},o.E=e=>{Object.keys(o.F).map((t=>{o.F[t](e)}))},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[])),o.u=e=>e+".bundle.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},a="bushrat-site:",o.l=(e,n,r,i)=>{if(t[e])t[e].push(n);else{var s,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==a+r){s=m;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",a+r),s.src=e),t[e]=[n];var u=(a,n)=>{s.onerror=s.onload=null,clearTimeout(p);var r=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(n))),a)return a(n)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),l&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var n=a.length-1;n>-1&&!e;)e=a[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,a)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var r=new Promise(((a,r)=>n=e[t]=[a,r]));a.push(n[2]=r);var i=o.p+o.u(t),s=new Error;o.l(i,(a=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}}),"chunk-"+t,t)}},o.F.j=t=>{if(!o.o(e,t)||void 0===e[t]){e[t]=null;var a=document.createElement("link");o.nc&&a.setAttribute("nonce",o.nc),a.rel="prefetch",a.as="script",a.href=o.p+o.u(t),document.head.appendChild(a)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var n,r,[i,s,l]=a,d=0;if(i.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var c=l(o)}for(t&&t(a);d<i.length;d++)r=i[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},a=self.webpackChunkbushrat_site=self.webpackChunkbushrat_site||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),o.O(0,[179],(()=>{o.E(148),o.E(282)}),5);var i={};class s extends EventTarget{static#e="HuntShowStats";static#t=1;static#a={0:e=>{console.trace("Applying Migration 0: DB Initialisation"),e.createObjectStore("game",{keyPath:"id"}).createIndex("date","date",{unique:!1}),e.createObjectStore("profile",{keyPath:"id"}).createIndex("date","date",{unique:!1});const t=e.createObjectStore("playerMMR",{keyPath:["game","profile"]});t.createIndex("game","game",{unique:!1}),t.createIndex("profile","profile",{unique:!1}),t.createIndex("date","date",{unique:!1});const a=e.createObjectStore("playerName",{keyPath:["profile","name"]});a.createIndex("profile","profile",{unique:!1}),a.createIndex("date","date",{unique:!1});const n=e.createObjectStore("team",{keyPath:["game","number"]});n.createIndex("game","game",{unique:!1}),n.createIndex("number","number",{unique:!1}),n.createIndex("date","date",{unique:!1});const r=e.createObjectStore("teamMember",{keyPath:["game","number","profile"]});r.createIndex("game","game",{unique:!1}),r.createIndex("game_number",["game","number"],{unique:!1}),r.createIndex("profile","profile",{unique:!1}),r.createIndex("date","date",{unique:!1});const o=e.createObjectStore("event",{keyPath:["game","profile","category","label","clock"]});return o.createIndex("game","game",{unique:!1}),o.createIndex("profile","profile",{unique:!1}),o.createIndex("category","category",{unique:!1}),o.createIndex("label","label",{unique:!1}),o.createIndex("clock","clock",{unique:!1}),o.createIndex("date","date",{unique:!1}),1}};#n=null;#r=!1;get ready(){return this.#r}async open(){null==this.#n&&(await navigator.storage.persist()?console.log("Storage will not be cleared except by explicit user action"):console.log("Storage may be cleared by the UA under storage pressure."),this.#n=await new Promise(((e,t)=>{const a=indexedDB.open(s.#e,s.#t);a.onerror=e=>{console.error("Could not open an IndexDB",e),t(e)},a.onsuccess=t=>{console.trace("DB Opened",t);const a=t.target.result;e(a)},a.onupgradeneeded=e=>{console.trace("DB Upgrade Requested",e);const t=e.target.result;let a=e.oldVersion;for(;a!=e.newVersion;){s.#a;const e=a;a=s.#a[e](t)}console.trace("DB Migrated")}})),this.#r=!0,this.dispatchEvent(new CustomEvent("ready")))}static async do(e){return await new Promise(((t,a)=>{const n=e();n.onsuccess=e=>{const a=e.target.result;t(a)},n.onerror=e=>{console.error("DB Operation Failed",e),a(e)}}))}transaction(e,t,a){const n=this.#n.transaction(e,t,a);"readwrite"==t&&n.addEventListener("complete",(t=>{this.dispatchEvent(new CustomEvent("change",{detail:{stores:e}}))}));const r={};for(const t of e)r[t]=n.objectStore(t);const o=r,i=new Promise(((e,t)=>{n.oncomplete=t=>{e()},n.onerror=e=>{console.error("DB Transaction Failed",e),t(e)}}));return{transaction:n,stores:o,completed:i}}async export(){const{stores:e,completed:t}=this.transaction(this.#n.objectStoreNames,"readonly"),a={};for(const t in e){const n=t;a[n]=await s.do((()=>e[n].getAll()))}return await t,a}async import(e){const{stores:t,completed:a}=this.transaction(this.#n.objectStoreNames,"readwrite");for(const a in e){const n=a;for(const a of e[n])await s.do((()=>t[n].put(a)))}await a}}const l=/(@.*?)~([0-9]{1,2}):([0-9]{2})/g;class d extends EventTarget{#o;#i=0;#s=5e3;#l=null;get ready(){return null!=this.#o}async openPicker(e){try{const[t]=await window.showOpenFilePicker(e);this.#o=t}catch(e){console.error(e),alert("You cannot open this file. If your file is in a system folder (e.g., 'Program Files (x86)'), then you need to create a directory junction to allow your browser to open that file.\n\nAlternatively, you can copy & paste your file into a different folder (e.g., 'Documents') to read the data once.")}}async getFile(e){this.ready||await this.openPicker(e);const t=await this.#o.getFile();this.#i>=t.lastModified||(this.#i=t.lastModified,this.dispatchEvent(new CustomEvent("change",{detail:t})))}start(){null==this.#l&&(this.#l=setInterval((()=>{this.ready&&this.getFile()}),this.#s))}stop(){null!=this.#l&&(clearInterval(this.#l),this.#l=null)}constructor(e){super(),this.#s=e?.watchInterval??this.#s,this.start()}}class c extends HTMLTableCellElement{static define(){customElements.define("hss-table-header-sortable",this,{extends:"th"})}connectedCallback(){this.addEventListener("click",(()=>this.sort()))}sort(){const e=this.closest("table");var t,a,n;t=e.getElementsByTagName("tbody")[0],a=Array.from(this.parentNode.children).indexOf(this),n=!e.toggleAttribute("ascending"),Array.from(t.rows).sort(((e,t)=>{return r=m(n?e:t,a),o=m(n?t:e,a),"number"!=typeof r||"number"!=typeof o||isNaN(r)||isNaN(o)?r.toString().localeCompare(o.toString()):r-o;var r,o})).forEach((e=>t.appendChild(e)))}}function m(e,t){return(e=>e.sortProperty||e.textContent)(e.children[t])}let u=null;async function p(e,t){const a=document.createElement("canvas"),n=[];for(const t of e)n.push({label:t.name,data:t.data,borderWidth:1});const r={y:{type:"linear",suggestedMin:2500,suggestedMax:3e3,grid:{color:"#888"}},x:{type:"linear",position:"bottom",grid:{color:"#888"},ticks:{callback:e=>new Date(e).toLocaleString()}}},i={};for(const[e,t]of y.entries())i[`star${e}`]={type:"line",yMin:t,yMax:t,borderColor:"#888",borderWidth:.5};return null!=t&&(i.dateHighlight={type:"line",xMin:t,xMax:t,borderColor:"#888",borderWidth:.5}),new(await async function(){if(null==u){const{Chart:e,LinearScale:t,LineController:a,PointElement:n,LineElement:r,plugins:i}=await o.e(148).then(o.bind(o,148)),s=await Promise.all([o.e(148),o.e(282)]).then(o.bind(o,282));e.register(t,a,n,r,i.Tooltip,i.Colors,i.Legend,s),u=e}return u}())(a,{type:"line",data:{datasets:n},options:{scales:r,plugins:{annotation:{annotations:i}}}}),a}const y=[2e3,2300,2600,2750,3e3];class g extends HTMLTableElement{static#n;static define(e){this.#n=e,customElements.define("hss-table-games",this,{extends:"table"})}connectedCallback(){g.#n.addEventListener("change",(async e=>{const t=[...e.detail.stores];(t.includes("game")||t.includes("teamMember"))&&await this.update()})),g.#n.ready?this.update():g.#n.addEventListener("ready",(async()=>{await this.update()}))}async update(){const{stores:e,completed:t}=g.#n.transaction(["game","teamMember"],"readonly"),a=await s.do((()=>e.game.index("date").getAll())),n=this.querySelector("tbody"),r=[];for(const t of a){if(n.querySelector(`tr[game="${t.id}"]`))continue;const a=await s.do((()=>e.teamMember.index("game").count(t.id))),o=document.createElement("tr"),i=document.createElement("td"),l=document.createElement("time"),d=document.createElement("td");i.append(l),o.append(i,d),r.push(o),o.setAttribute("game",t.id),o.toggleAttribute("clickable",!0),o.addEventListener("click",(()=>{this.dispatchEvent(new CustomEvent("gameChosen",{detail:t}))})),l.textContent=new Date(t.date).toLocaleString(),l.setAttribute("datetime",t.date.toString()),i.sortProperty=t.date,d.textContent=a.toString(),d.sortProperty=a}await t,n.append(...r),n.toggleAttribute("hidden",!1)}}class h extends HTMLTableElement{static#n;static define(e){this.#n=e,customElements.define("hss-table-players",this,{extends:"table"})}connectedCallback(){h.#n.addEventListener("change",(async e=>{const t=[...e.detail.stores];(t.includes("profile")||t.includes("playerName")||t.includes("playerMMR")||t.includes("teamMember")||t.includes("event"))&&await this.update()})),h.#n.ready?this.update():h.#n.addEventListener("ready",(async()=>{await this.update()}))}async update(){const{stores:e,completed:t}=h.#n.transaction(["profile","playerName","playerMMR","teamMember","event"],"readonly"),a=await s.do((()=>e.profile.getAll())),n=this.querySelector("tbody"),r=[];for(const t of a){const a=await s.do((()=>e.playerName.index("profile").getAll(t.id))),o=await s.do((()=>e.playerMMR.index("profile").getAll(t.id))),i=await s.do((()=>e.event.index("profile").getAll(t.id))),l=await s.do((()=>e.teamMember.index("profile").count(t.id))),d=await b(i),c=n.querySelector(`tr[profile="${t.id}"]`)??(()=>{const e=document.createElement("tr");e.setAttribute("profile",t.id),e.toggleAttribute("clickable",!0),e.addEventListener("click",(()=>{this.dispatchEvent(new CustomEvent("profileChosen",{detail:t}))}));const a=document.createElement("td");a.toggleAttribute("name",!0);const n=document.createElement("td");n.toggleAttribute("mmr",!0);const o=document.createElement("td");o.toggleAttribute("kills",!0);const i=document.createElement("td");i.toggleAttribute("deaths",!0);const s=document.createElement("td");s.toggleAttribute("assists",!0);const l=document.createElement("td");return l.toggleAttribute("games",!0),e.append(a,n,o,i,s,l),r.push(e),e})(),m=c.querySelector("td[name]"),u=c.querySelector("td[mmr]"),p=c.querySelector("td[kills]"),y=c.querySelector("td[deaths]"),g=c.querySelector("td[assists]"),h=c.querySelector("td[games]");a.sort(((e,t)=>t.date-e.date)),o.sort(((e,t)=>t.date-e.date)),m.textContent=a[0].name,m.sortProperty=a[0].name.toLowerCase(),u.textContent=o[0].mmr,u.sortProperty=Number.parseInt(o[0].mmr),h.textContent=l.toString(),h.sortProperty=l,p.textContent=d.kills.toString(),p.sortProperty=d.kills,y.textContent=d.deaths.toString(),y.sortProperty=d.deaths,g.textContent=d.assists.toString(),g.sortProperty=d.assists}await t,n.append(...r),n.toggleAttribute("hidden",!1)}}async function b(e){const t={kills:0,deaths:0,assists:0,collateral:0};for(const a of e)"downedbyme"==a.category||"killedbyme"==a.category?t.kills+=1:"downedme"==a.category||"killedme"==a.category?t.deaths+=1:"downedbyteammate"==a.category||"killedbyteammate"==a.category?t.assists+=1:"downedteammate"!=a.category&&"killedteammate"!=a.category||(t.collateral+=1);return t}class f extends HTMLSpanElement{static define(){customElements.define("hss-span-storage-use",this,{extends:"span"})}#l;connectedCallback(){this.#l&&clearInterval(this.#l),this.#l=setInterval((async()=>{await this.update()}),6e4),this.update()}disconnectedCallback(){this.#l&&clearInterval(this.#l)}#d=0;#c=0;async update(){const e=await navigator.storage.estimate();if((e.usage??0!==this.#d)||(e.quota??0!==this.#c)){this.#d=e.usage??0,this.#c=e.quota??0;const t=`${w(this.#d).toFixed(2)} MB`,a=`${w(this.#c).toFixed(2)} MB`;this.textContent=`${t} / ${a}`}}}const w=e=>e/1024/1024,v=new s,_=new d;async function x(e){const{stores:t,completed:a}=v.transaction(["playerMMR","playerName"],"readonly"),n=await s.do((()=>t.playerName.index("profile").getAll(e))),r=await s.do((()=>t.playerMMR.index("profile").getAll(e)));await a;const o=document.querySelector("dialog#playerDetails"),i=o.querySelector("div#chartArea");n.sort(((e,t)=>t.date-e.date));const l=o.querySelector("a[name]");l.textContent=n[0].name,l.href=`https://www.steamidfinder.com/lookup/${n[0].name}/`,l.target="_blank",o.querySelector("span[profile]").textContent=e,r.sort(((e,t)=>e.date-t.date));const d=[{name:n[0].name,data:[...r.map((e=>({x:e.date,y:Number.parseInt(e.mmr)})))]}],c=await p(d);for(;i.firstChild;)i.removeChild(i.lastChild);i.append(c);const m=await async function(e){const{stores:t,completed:a}=v.transaction(["playerMMR"],"readonly"),n=await s.do((()=>t.playerMMR.index("profile").getAll(e)));await a;const r=n.length,o=n.reduce(((e,t)=>e+Number.parseInt(t.mmr)),0),i=n.reduce(((e,t)=>e+Number.parseInt(t.mmr)**2),0),l=r>0?r:1,d=r>1?r-1:1,c=o/l,m=Math.sqrt((i/l-c**2)*r/d);return{mean:c,std:Math.sqrt(m),count:r}}(e);o.querySelector("span[mmrAverage]").textContent=Math.floor(m.mean).toString(),o.querySelector("span[mmrStd]").textContent=Math.floor(m.std).toString();const u=await async function(e){const{stores:t,completed:a}=v.transaction(["event"],"readonly"),n=await s.do((()=>t.event.index("profile").getAll(e)));await a;const r={kills:0,deaths:0,assists:0,collateral:0};for(const e of n)"downedbyme"==e.category||"killedbyme"==e.category?r.kills+=1:"downedme"==e.category||"killedme"==e.category?r.deaths+=1:"downedbyteammate"==e.category||"killedbyteammate"==e.category?r.assists+=1:"downedteammate"!=e.category&&"killedteammate"!=e.category||(r.collateral+=1);return r}(e);o.querySelector("span[kills]").textContent=u.kills.toString(),o.querySelector("span[deaths]").textContent=u.deaths.toString(),o.querySelector("span[assists]").textContent=u.assists.toString(),o.querySelector("span[collateral]").textContent=u.collateral.toString(),o.showModal()}!async function(){f.define(),c.define(),g.define(v),h.define(v),window.getFile=async()=>{await _.getFile({types:[{description:"Hunt Showdown Attributes",accept:{"text/xml":[".xml"]}}],excludeAcceptAllOption:!0,multiple:!1}),document.querySelector("button#fileButton").toggleAttribute("hidden",!0)},window.importDB=async()=>{const e=document.querySelector("footer input#import");let t;e.click(),await new Promise((a=>{t=setInterval((()=>{e.files[0]&&a()}),100)})),clearInterval(t);const a=await e.files[0].text(),n=JSON.parse(a);await v.import(n)},window.exportDB=async()=>{const e=await v.export(),t=JSON.stringify(e,null,2);!function(e){const t=URL.createObjectURL(e),a=document.createElement("a");a.href=t,a.setAttribute("download",e.name),a.addEventListener("click",(()=>setTimeout((()=>{a.remove()})))),a.click()}(new File([t],"export.json",{type:"application/json"}))},_.addEventListener("change",(async e=>{const t=e.detail,a=await t.text(),n=(new DOMParser).parseFromString(a,"application/xml"),r=await async function(e){const t=e.querySelector('Attr[name="MissionBagNumTeams"]'),a=Number.parseInt(t.attributes.getNamedItem("value").value),n={},r=e.querySelectorAll('Attr[name^="MissionBagTeam_"]');for(const e of r){const[t,r,o]=e.attributes.getNamedItem("name").value.split("_"),i=e.attributes.getNamedItem("value").value;null!=o&&(Number.parseInt(r)>=a||(n[r]??={members:{}},n[r][o]=i))}const o=e.querySelectorAll('Attr[name^="MissionBagPlayer_"]');for(const e of o){const[t,r,o,...i]=e.attributes.getNamedItem("name").value.split("_"),s=i.join("_"),l=e.attributes.getNamedItem("value").value;null!=s&&(Number.parseInt(r)>=a||o>=n[r].numplayers||(n[r].members[o]??={},n[r].members[o][s]=l))}const i=await async function(e){let t="";for(const a in e){const n=e[a];t+=`MMR${n.mmr} #${n.numplayers}\n`;for(const e in n.members){const a=n.members[e];t+=`(ID${a.profileid} AS ${a.blood_line_name} AT ${a.mmr})\n`}}const a=(new TextEncoder).encode(t),n=await crypto.subtle.digest("SHA-256",a);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(n),s={game:[],team:[],teamMember:[],profile:[],playerName:[],playerMMR:[],event:[]},d=Date.now();s.game.push({id:i,date:d});for(const e in n){const t=n[e];s.team.push({game:i,number:e,mmr:t.mmr,own:"true"==t.ownteam,date:d});for(const a in t.members){const n=t.members[a];s.teamMember.push({game:i,number:e,profile:n.profileid,date:d}),s.profile.push({id:n.profileid,date:d}),s.playerName.push({profile:n.profileid,name:n.blood_line_name,date:d}),s.playerMMR.push({game:i,profile:n.profileid,mmr:n.mmr,date:d});for(const e in n){if(!e.startsWith("tooltip"))continue;const t=e.split("tooltip")[1].replace("_",""),a=n[e].matchAll(l);for(const[e,r,o,l]of a){const e=60*Number.parseInt(o)+Number.parseInt(l);s.event.push({game:i,profile:n.profileid,category:t.trim(),label:r.trim(),clock:e,date:d})}}}}return s}(n);await v.import(r)})),document.getElementById("games").addEventListener("gameChosen",(e=>{!async function(e){const t=document.querySelector("dialog#gameDetails"),a=t.querySelector("table#gamePlayers > tbody");for(;a.firstChild;)a.removeChild(a.lastChild);const{stores:n,completed:r}=v.transaction(["game","teamMember","playerName","playerMMR","event","team"],"readonly"),o=await s.do((()=>n.game.get(e))),i=new Date(o.date),l=await s.do((()=>n.teamMember.index("game").getAll(e)));t.querySelector("em").textContent=i.toLocaleString();const d={};let c={};const m=t.querySelector("div[mmr-chart]"),u=[];for(const t of l){const r=await s.do((()=>n.teamMember.index("game_number").count([e,t.number]))),o=await s.do((()=>n.team.get([e,t.number]))),i=document.createElement("tr");if(i.setAttribute("player",t.profile),i.toggleAttribute("own",o?.own??!1),a.append(i),!c[t.number]){const e=document.createElement("td");e.setAttribute("rowspan",r.toString()),e.textContent=t.number,i.append(e),c[t.number]=!0}const l=await s.do((()=>n.playerName.index("profile").getAll(t.profile)));l.sort(((e,t)=>t.date-e.date)),d[t.profile]=l[0].name;const m=document.createElement("td");m.textContent=d[t.profile],i.append(m);const p=await s.do((()=>n.playerMMR.get([e,t.profile]))),y=document.createElement("td");y.textContent=p.mmr,i.append(y),i.toggleAttribute("clickable",!0),i.addEventListener("click",(()=>{x(t.profile)}));const g=await s.do((()=>n.playerMMR.index("profile").getAll(t.profile)));g.sort(((e,t)=>t.date-e.date)),u.push({name:l[0].name,data:[...g.map((e=>({x:e.date,y:Number.parseInt(e.mmr)})))]})}const y=await p(u,o.date);for(;m.firstChild;)m.removeChild(m.lastChild);m.append(y);const g=await s.do((()=>n.event.index("game").getAll(e)));await r,g.sort(((e,t)=>e.clock-t.clock));const h=t.querySelector("ol[events]");for(;h.firstChild;)h.removeChild(h.lastChild);for(const e of g){const t=document.createElement("li");h.append(t);const a=e.clock%60,n=`${((e.clock-a)/60).toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`,r=d[e.profile],o=({bountyextracted:"Bounty Extracted",bountypickedup:"Bounty Picked Up",downedbyme:"Downed By Me",downedbyteammate:"Downed By Teammate",downedme:"Downed Me",downedteammate:"Downed Teammate",killedbyme:"Killed By Me",killedbyteammate:"Killed By Teammate",killedme:"Killed Me",killedteammate:"Killed Teammate"}[e.category]??e.category,{"@ui_mmr_killed_hunter ~~@ui_team_details_killed":"Was Killed By Me","@ui_mmr_died_to_hunter ~~@ui_team_details_killed":"Killed Me","@ui_team_details_carried_bounty":"Picked Up Bounty","@ui_team_details_hunter_downed_teammate ~~@ui_team_details_downed":"Downed Teammate","@ui_team_details_downed":"Downed Teammate","@ui_team_details_hunter_downed_you ~~@ui_team_details_downed":"Downed Me","@ui_team_details_killed_by_team_mate ~~@ui_team_details_downed":"Was Killed By Teammate","@ui_team_details_killed_by_team_mate ~~@ui_team_details_killed":"Was Killed By Teammate","@ui_team_details_killed_team_mate ~~@ui_team_details_downed":"Downed Teammate","@ui_team_details_killed_team_mate ~~@ui_team_details_killed":"Killed Teammate","@ui_team_details_killed":"Killed Teammate","@ui_team_details_teammate_downed_hunter ~~@ui_team_details_downed":"Was Downed By Teammate","@ui_team_details_you_downed_hunter ~~@ui_team_details_downed":"Was Downed By Me","@ui_team_details_extracted_bounty":"Extracted With Bounty"}[e.label]??e.label),i=document.createElement("b");t.append(i),i.textContent=n;const s=document.createElement("span");t.append(s),s.textContent=" ";const l=document.createElement("em");t.append(l),l.textContent=r;const c=document.createElement("span");t.append(c),c.textContent=" ";const m=document.createElement("span");t.append(m),m.textContent=o}t.showModal()}(e.detail.id)})),document.getElementById("players").addEventListener("profileChosen",(e=>{x(e.detail.id)})),await v.open()}(),i=o.O(i)})();