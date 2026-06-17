(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const Fr={render(i){const e=i.personal;let t=`${e.fullName.toUpperCase()}`;const n=e.fullName.indexOf(" ");if(n!==-1){const s=e.fullName.substring(0,n).toUpperCase(),a=e.fullName.substring(n+1);t=`${s} <span class="accent-text">${a}</span>`}return`
      <header class="fixed-header">
        <div class="container header-container">
          <a href="#hero" class="logo-area">
            <svg class="logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H21V21H3V3Z" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="2 2" />
              <path d="M3 12H21" stroke="#38BDF8" stroke-width="0.5" stroke-dasharray="1 3" />
              <path d="M12 3V21" stroke="#38BDF8" stroke-width="0.5" stroke-dasharray="1 3" />
              <path d="M4 17L12 7L20 17H4Z" stroke="#2563EB" stroke-width="2" stroke-linejoin="round" />
              <circle cx="12" cy="7" r="2" fill="#38BDF8" />
            </svg>
            <span class="logo-text" id="header-logo-text">${t}</span>
          </a>

          <nav class="main-nav" id="main-nav">
            <ul>
              <li><a href="#about" class="nav-link">About</a></li>
              <li><a href="#skills" class="nav-link">Skills</a></li>
              <li><a href="#services" class="nav-link">Services</a></li>
              <li><a href="#bim" class="nav-link">BIM</a></li>
              <li><a href="#education" class="nav-link">Education</a></li>
              <li><a href="#projects" class="nav-link">Projects</a></li>
              <li><a href="#experience" class="nav-link">Experience</a></li>
              <li><a href="#gallery" class="nav-link">Gallery</a></li>
              <li><a href="#resume" class="nav-link">Resume</a></li>
              <li><a href="#faq" class="nav-link">FAQ</a></li>
              <li><a href="#contact" class="btn btn-primary nav-cta">Hire Me</a></li>
            </ul>
          </nav>

          <button class="mobile-nav-toggle" id="mobile-toggle" aria-label="Toggle Navigation">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>
    `},init(i){const e=document.getElementById("mobile-toggle"),t=document.getElementById("main-nav");!e||!t||(e.addEventListener("click",()=>{t.classList.toggle("active"),e.querySelector("i").classList.toggle("fa-bars"),e.querySelector("i").classList.toggle("fa-times")}),t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{t.classList.remove("active"),e.querySelector("i").className="fa-solid fa-bars"})}))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ar="184",sc=0,Or=1,ac=2,cs=1,fl=2,Ai=3,Rn=0,Lt=1,Jt=2,pn=0,ci=1,da=2,Br=3,kr=4,rc=5,On=100,oc=101,lc=102,cc=103,dc=104,uc=200,fc=201,hc=202,pc=203,ua=204,fa=205,mc=206,gc=207,vc=208,_c=209,xc=210,bc=211,yc=212,Sc=213,Mc=214,ha=0,pa=1,ma=2,ui=3,ga=4,va=5,_a=6,xa=7,hl=0,Ec=1,Tc=2,tn=0,pl=1,ml=2,gl=3,rr=4,vl=5,_l=6,xl=7,bl=300,Hn=301,fi=302,Rs=303,Ps=304,Ms=306,ba=1e3,hn=1001,ya=1002,St=1003,Ac=1004,Oi=1005,wt=1006,Ds=1007,zn=1008,Bt=1009,yl=1010,Sl=1011,Ci=1012,or=1013,an=1014,Qt=1015,gn=1016,lr=1017,cr=1018,Ri=1020,Ml=35902,El=35899,Tl=1021,Al=1022,jt=1023,vn=1026,Gn=1027,wl=1028,dr=1029,Vn=1030,ur=1031,fr=1033,ds=33776,us=33777,fs=33778,hs=33779,Sa=35840,Ma=35841,Ea=35842,Ta=35843,Aa=36196,wa=37492,Ca=37496,Ra=37488,Pa=37489,ms=37490,Da=37491,La=37808,Ia=37809,Ua=37810,Na=37811,Fa=37812,Oa=37813,Ba=37814,ka=37815,za=37816,Ga=37817,Ha=37818,Va=37819,Wa=37820,Xa=37821,ja=36492,qa=36494,$a=36495,Ya=36283,Ka=36284,gs=36285,Za=36286,wc=3200,Ja=0,Cc=1,wn="",Gt="srgb",vs="srgb-linear",_s="linear",Je="srgb",$n=7680,zr=519,Rc=512,Pc=513,Dc=514,hr=515,Lc=516,Ic=517,pr=518,Uc=519,Gr=35044,Hr="300 es",en=2e3,Pi=2001;function Nc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fc(){const i=xs("canvas");return i.style.display="block",i}const Vr={};function Wr(...i){const e="THREE."+i.shift();console.log(e,...i)}function Cl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ae(...i){i=Cl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Cl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Qa(...i){const e=i.join(" ");e in Vr||(Vr[e]=!0,Ae(...i))}function Oc(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Bc={[ha]:pa,[ma]:_a,[ga]:xa,[ui]:va,[pa]:ha,[_a]:ma,[xa]:ga,[va]:ui};class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,er=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function kc(i,e){return(i%e+e)%e}function Is(i,e,t){return(1-t)*i+t*e}function vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mr=class Mr{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mr.prototype.isVector2=!0;let qe=Mr;class mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let c=n[s+0],d=n[s+1],m=n[s+2],p=n[s+3],h=a[r+0],g=a[r+1],f=a[r+2],v=a[r+3];if(p!==v||c!==h||d!==g||m!==f){let u=c*h+d*g+m*f+p*v;u<0&&(h=-h,g=-g,f=-f,v=-v,u=-u);let l=1-o;if(u<.9995){const x=Math.acos(u),y=Math.sin(x);l=Math.sin(l*x)/y,o=Math.sin(o*x)/y,c=c*l+h*o,d=d*l+g*o,m=m*l+f*o,p=p*l+v*o}else{c=c*l+h*o,d=d*l+g*o,m=m*l+f*o,p=p*l+v*o;const x=1/Math.sqrt(c*c+d*d+m*m+p*p);c*=x,d*=x,m*=x,p*=x}}e[t]=c,e[t+1]=d,e[t+2]=m,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],c=n[s+1],d=n[s+2],m=n[s+3],p=a[r],h=a[r+1],g=a[r+2],f=a[r+3];return e[t]=o*f+m*p+c*g-d*h,e[t+1]=c*f+m*h+d*p-o*g,e[t+2]=d*f+m*g+o*h-c*p,e[t+3]=m*f-o*p-c*h-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,d=o(n/2),m=o(s/2),p=o(a/2),h=c(n/2),g=c(s/2),f=c(a/2);switch(r){case"XYZ":this._x=h*m*p+d*g*f,this._y=d*g*p-h*m*f,this._z=d*m*f+h*g*p,this._w=d*m*p-h*g*f;break;case"YXZ":this._x=h*m*p+d*g*f,this._y=d*g*p-h*m*f,this._z=d*m*f-h*g*p,this._w=d*m*p+h*g*f;break;case"ZXY":this._x=h*m*p-d*g*f,this._y=d*g*p+h*m*f,this._z=d*m*f+h*g*p,this._w=d*m*p-h*g*f;break;case"ZYX":this._x=h*m*p-d*g*f,this._y=d*g*p+h*m*f,this._z=d*m*f-h*g*p,this._w=d*m*p+h*g*f;break;case"YZX":this._x=h*m*p+d*g*f,this._y=d*g*p+h*m*f,this._z=d*m*f-h*g*p,this._w=d*m*p-h*g*f;break;case"XZY":this._x=h*m*p-d*g*f,this._y=d*g*p-h*m*f,this._z=d*m*f+h*g*p,this._w=d*m*p+h*g*f;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],d=t[2],m=t[6],p=t[10],h=n+o+p;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(m-c)*g,this._y=(a-d)*g,this._z=(r-s)*g}else if(n>o&&n>p){const g=2*Math.sqrt(1+n-o-p);this._w=(m-c)/g,this._x=.25*g,this._y=(s+r)/g,this._z=(a+d)/g}else if(o>p){const g=2*Math.sqrt(1+o-n-p);this._w=(a-d)/g,this._x=(s+r)/g,this._y=.25*g,this._z=(c+m)/g}else{const g=2*Math.sqrt(1+p-n-o);this._w=(r-s)/g,this._x=(a+d)/g,this._y=(c+m)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,d=t._z,m=t._w;return this._x=n*m+r*o+s*d-a*c,this._y=s*m+r*c+a*o-n*d,this._z=a*m+r*d+n*c-s*o,this._w=r*m-n*o-s*c-a*d,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let c=1-t;if(o<.9995){const d=Math.acos(o),m=Math.sin(d);c=Math.sin(c*d)/m,t=Math.sin(t*d)/m,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+a*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+a*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Er=class Er{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,d=2*(r*s-o*n),m=2*(o*t-a*s),p=2*(a*n-r*t);return this.x=t+c*d+r*p-o*m,this.y=n+c*m+o*d-a*p,this.z=s+c*p+a*m-r*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Us.copy(this).projectOnVector(e),this.sub(Us)}reflect(e){return this.sub(Us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Er.prototype.isVector3=!0;let z=Er;const Us=new z,Xr=new mi,Tr=class Tr{constructor(e,t,n,s,a,r,o,c,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,d)}set(e,t,n,s,a,r,o,c,d){const m=this.elements;return m[0]=e,m[1]=s,m[2]=o,m[3]=t,m[4]=a,m[5]=c,m[6]=n,m[7]=r,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],d=n[1],m=n[4],p=n[7],h=n[2],g=n[5],f=n[8],v=s[0],u=s[3],l=s[6],x=s[1],y=s[4],M=s[7],A=s[2],E=s[5],R=s[8];return a[0]=r*v+o*x+c*A,a[3]=r*u+o*y+c*E,a[6]=r*l+o*M+c*R,a[1]=d*v+m*x+p*A,a[4]=d*u+m*y+p*E,a[7]=d*l+m*M+p*R,a[2]=h*v+g*x+f*A,a[5]=h*u+g*y+f*E,a[8]=h*l+g*M+f*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],d=e[7],m=e[8];return t*r*m-t*o*d-n*a*m+n*o*c+s*a*d-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],d=e[7],m=e[8],p=m*r-o*d,h=o*c-m*a,g=d*a-r*c,f=t*p+n*h+s*g;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/f;return e[0]=p*v,e[1]=(s*d-m*n)*v,e[2]=(o*n-s*r)*v,e[3]=h*v,e[4]=(m*t-s*c)*v,e[5]=(s*a-o*t)*v,e[6]=g*v,e[7]=(n*c-d*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const c=Math.cos(a),d=Math.sin(a);return this.set(n*c,n*d,-n*(c*r+d*o)+r+e,-s*d,s*c,-s*(-d*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ns.makeScale(e,t)),this}rotate(e){return this.premultiply(Ns.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ns.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tr.prototype.isMatrix3=!0;let De=Tr;const Ns=new De,jr=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qr=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zc(){const i={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Je&&(s.r=mn(s.r),s.g=mn(s.g),s.b=mn(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Je&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?_s:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vs]:{primaries:e,whitePoint:n,transfer:_s,toXYZ:jr,fromXYZ:qr,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:jr,fromXYZ:qr,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const Ge=zc();function mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yn;class Gc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yn===void 0&&(Yn=xs("canvas")),Yn.width=e.width,Yn.height=e.height;const s=Yn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=mn(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mn(t[n]/255)*255):t[n]=mn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hc=0;class mr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Fs(s[r].image)):a.push(Fs(s[r]))}else a=Fs(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let Vc=0;const Os=new z;class Ct extends Wn{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=hn,s=hn,a=wt,r=zn,o=jt,c=Bt,d=Ct.DEFAULT_ANISOTROPY,m=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Di(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Os).x}get height(){return this.source.getSize(Os).y}get depth(){return this.source.getSize(Os).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=bl;Ct.DEFAULT_ANISOTROPY=1;const Ar=class Ar{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const c=e.elements,d=c[0],m=c[4],p=c[8],h=c[1],g=c[5],f=c[9],v=c[2],u=c[6],l=c[10];if(Math.abs(m-h)<.01&&Math.abs(p-v)<.01&&Math.abs(f-u)<.01){if(Math.abs(m+h)<.1&&Math.abs(p+v)<.1&&Math.abs(f+u)<.1&&Math.abs(d+g+l-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(d+1)/2,M=(g+1)/2,A=(l+1)/2,E=(m+h)/4,R=(p+v)/4,b=(f+u)/4;return y>M&&y>A?y<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(y),s=E/n,a=R/n):M>A?M<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),n=E/s,a=b/s):A<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),n=R/a,s=b/a),this.set(n,s,a,t),this}let x=Math.sqrt((u-f)*(u-f)+(p-v)*(p-v)+(h-m)*(h-m));return Math.abs(x)<.001&&(x=1),this.x=(u-f)/x,this.y=(p-v)/x,this.z=(h-m)/x,this.w=Math.acos((d+g+l-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ar.prototype.isVector4=!0;let ft=Ar;class Wc extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},a=new Ct(s),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nn extends Wc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rl extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xc extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ss=class Ss{constructor(e,t,n,s,a,r,o,c,d,m,p,h,g,f,v,u){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,d,m,p,h,g,f,v,u)}set(e,t,n,s,a,r,o,c,d,m,p,h,g,f,v,u){const l=this.elements;return l[0]=e,l[4]=t,l[8]=n,l[12]=s,l[1]=a,l[5]=r,l[9]=o,l[13]=c,l[2]=d,l[6]=m,l[10]=p,l[14]=h,l[3]=g,l[7]=f,l[11]=v,l[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ss().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Kn.setFromMatrixColumn(e,0).length(),a=1/Kn.setFromMatrixColumn(e,1).length(),r=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),d=Math.sin(s),m=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const h=r*m,g=r*p,f=o*m,v=o*p;t[0]=c*m,t[4]=-c*p,t[8]=d,t[1]=g+f*d,t[5]=h-v*d,t[9]=-o*c,t[2]=v-h*d,t[6]=f+g*d,t[10]=r*c}else if(e.order==="YXZ"){const h=c*m,g=c*p,f=d*m,v=d*p;t[0]=h+v*o,t[4]=f*o-g,t[8]=r*d,t[1]=r*p,t[5]=r*m,t[9]=-o,t[2]=g*o-f,t[6]=v+h*o,t[10]=r*c}else if(e.order==="ZXY"){const h=c*m,g=c*p,f=d*m,v=d*p;t[0]=h-v*o,t[4]=-r*p,t[8]=f+g*o,t[1]=g+f*o,t[5]=r*m,t[9]=v-h*o,t[2]=-r*d,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const h=r*m,g=r*p,f=o*m,v=o*p;t[0]=c*m,t[4]=f*d-g,t[8]=h*d+v,t[1]=c*p,t[5]=v*d+h,t[9]=g*d-f,t[2]=-d,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const h=r*c,g=r*d,f=o*c,v=o*d;t[0]=c*m,t[4]=v-h*p,t[8]=f*p+g,t[1]=p,t[5]=r*m,t[9]=-o*m,t[2]=-d*m,t[6]=g*p+f,t[10]=h-v*p}else if(e.order==="XZY"){const h=r*c,g=r*d,f=o*c,v=o*d;t[0]=c*m,t[4]=-p,t[8]=d*m,t[1]=h*p+v,t[5]=r*m,t[9]=g*p-f,t[2]=f*p-g,t[6]=o*m,t[10]=v*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jc,e,qc)}lookAt(e,t,n){const s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),yn.crossVectors(n,Ut),yn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),yn.crossVectors(n,Ut)),yn.normalize(),Bi.crossVectors(Ut,yn),s[0]=yn.x,s[4]=Bi.x,s[8]=Ut.x,s[1]=yn.y,s[5]=Bi.y,s[9]=Ut.y,s[2]=yn.z,s[6]=Bi.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],d=n[12],m=n[1],p=n[5],h=n[9],g=n[13],f=n[2],v=n[6],u=n[10],l=n[14],x=n[3],y=n[7],M=n[11],A=n[15],E=s[0],R=s[4],b=s[8],w=s[12],L=s[1],C=s[5],N=s[9],k=s[13],j=s[2],P=s[6],F=s[10],B=s[14],J=s[3],te=s[7],ne=s[11],le=s[15];return a[0]=r*E+o*L+c*j+d*J,a[4]=r*R+o*C+c*P+d*te,a[8]=r*b+o*N+c*F+d*ne,a[12]=r*w+o*k+c*B+d*le,a[1]=m*E+p*L+h*j+g*J,a[5]=m*R+p*C+h*P+g*te,a[9]=m*b+p*N+h*F+g*ne,a[13]=m*w+p*k+h*B+g*le,a[2]=f*E+v*L+u*j+l*J,a[6]=f*R+v*C+u*P+l*te,a[10]=f*b+v*N+u*F+l*ne,a[14]=f*w+v*k+u*B+l*le,a[3]=x*E+y*L+M*j+A*J,a[7]=x*R+y*C+M*P+A*te,a[11]=x*b+y*N+M*F+A*ne,a[15]=x*w+y*k+M*B+A*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],d=e[13],m=e[2],p=e[6],h=e[10],g=e[14],f=e[3],v=e[7],u=e[11],l=e[15],x=c*g-d*h,y=o*g-d*p,M=o*h-c*p,A=r*g-d*m,E=r*h-c*m,R=r*p-o*m;return t*(v*x-u*y+l*M)-n*(f*x-u*A+l*E)+s*(f*y-v*A+l*R)-a*(f*M-v*E+u*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],d=e[7],m=e[8],p=e[9],h=e[10],g=e[11],f=e[12],v=e[13],u=e[14],l=e[15],x=t*o-n*r,y=t*c-s*r,M=t*d-a*r,A=n*c-s*o,E=n*d-a*o,R=s*d-a*c,b=m*v-p*f,w=m*u-h*f,L=m*l-g*f,C=p*u-h*v,N=p*l-g*v,k=h*l-g*u,j=x*k-y*N+M*C+A*L-E*w+R*b;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/j;return e[0]=(o*k-c*N+d*C)*P,e[1]=(s*N-n*k-a*C)*P,e[2]=(v*R-u*E+l*A)*P,e[3]=(h*E-p*R-g*A)*P,e[4]=(c*L-r*k-d*w)*P,e[5]=(t*k-s*L+a*w)*P,e[6]=(u*M-f*R-l*y)*P,e[7]=(m*R-h*M+g*y)*P,e[8]=(r*N-o*L+d*b)*P,e[9]=(n*L-t*N-a*b)*P,e[10]=(f*E-v*M+l*x)*P,e[11]=(p*M-m*E-g*x)*P,e[12]=(o*w-r*C-c*b)*P,e[13]=(t*C-n*w+s*b)*P,e[14]=(v*y-f*A-u*x)*P,e[15]=(m*A-p*y+h*x)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,d=a*r,m=a*o;return this.set(d*r+n,d*o-s*c,d*c+s*o,0,d*o+s*c,m*o+n,m*c-s*r,0,d*c-s*o,m*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,d=a+a,m=r+r,p=o+o,h=a*d,g=a*m,f=a*p,v=r*m,u=r*p,l=o*p,x=c*d,y=c*m,M=c*p,A=n.x,E=n.y,R=n.z;return s[0]=(1-(v+l))*A,s[1]=(g+M)*A,s[2]=(f-y)*A,s[3]=0,s[4]=(g-M)*E,s[5]=(1-(h+l))*E,s[6]=(u+x)*E,s[7]=0,s[8]=(f+y)*R,s[9]=(u-x)*R,s[10]=(1-(h+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinant();if(a===0)return n.set(1,1,1),t.identity(),this;let r=Kn.set(s[0],s[1],s[2]).length();const o=Kn.set(s[4],s[5],s[6]).length(),c=Kn.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ht.copy(this);const d=1/r,m=1/o,p=1/c;return Ht.elements[0]*=d,Ht.elements[1]*=d,Ht.elements[2]*=d,Ht.elements[4]*=m,Ht.elements[5]*=m,Ht.elements[6]*=m,Ht.elements[8]*=p,Ht.elements[9]*=p,Ht.elements[10]*=p,t.setFromRotationMatrix(Ht),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,s,a,r,o=en,c=!1){const d=this.elements,m=2*a/(t-e),p=2*a/(n-s),h=(t+e)/(t-e),g=(n+s)/(n-s);let f,v;if(c)f=a/(r-a),v=r*a/(r-a);else if(o===en)f=-(r+a)/(r-a),v=-2*r*a/(r-a);else if(o===Pi)f=-r/(r-a),v=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return d[0]=m,d[4]=0,d[8]=h,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=f,d[14]=v,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=en,c=!1){const d=this.elements,m=2/(t-e),p=2/(n-s),h=-(t+e)/(t-e),g=-(n+s)/(n-s);let f,v;if(c)f=1/(r-a),v=r/(r-a);else if(o===en)f=-2/(r-a),v=-(r+a)/(r-a);else if(o===Pi)f=-1/(r-a),v=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return d[0]=m,d[4]=0,d[8]=0,d[12]=h,d[1]=0,d[5]=p,d[9]=0,d[13]=g,d[2]=0,d[6]=0,d[10]=f,d[14]=v,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ss.prototype.isMatrix4=!0;let ct=Ss;const Kn=new z,Ht=new ct,jc=new z(0,0,0),qc=new z(1,1,1),yn=new z,Bi=new z,Ut=new z,$r=new ct,Yr=new mi;class Pn{constructor(e=0,t=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],d=s[5],m=s[9],p=s[2],h=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-m,g),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,d),this._z=0);break;case"YXZ":this._x=Math.asin(-He(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-r,d)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-He(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,d));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-He(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,d),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-m,g),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $r.makeRotationFromQuaternion(e),this.setFromRotationMatrix($r,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yr.setFromEuler(this),this.setFromQuaternion(Yr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $c=0;const Kr=new z,Zn=new mi,ln=new ct,ki=new z,_i=new z,Yc=new z,Kc=new mi,Zr=new z(1,0,0),Jr=new z(0,1,0),Qr=new z(0,0,1),eo={type:"added"},Zc={type:"removed"},Jn={type:"childadded",child:null},Bs={type:"childremoved",child:null};class yt extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new z,t=new Pn,n=new mi,s=new z(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new De}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(Zr,e)}rotateY(e){return this.rotateOnAxis(Jr,e)}rotateZ(e){return this.rotateOnAxis(Qr,e)}translateOnAxis(e,t){return Kr.copy(e).applyQuaternion(this.quaternion),this.position.add(Kr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zr,e)}translateY(e){return this.translateOnAxis(Jr,e)}translateZ(e){return this.translateOnAxis(Qr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ki.copy(e):ki.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(_i,ki,this.up):ln.lookAt(ki,_i,this.up),this.quaternion.setFromRotationMatrix(ln),s&&(ln.extractRotation(s.matrixWorld),Zn.setFromRotationMatrix(ln),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eo),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zc),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eo),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,Yc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,Kc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*s,a[13]+=n-a[1]*t-a[5]*n-a[9]*s,a[14]+=s-a[2]*t-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let d=0,m=c.length;d<m;d++){const p=c[d];a(e.shapes,p)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,d=this.material.length;c<d;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),d=r(e.textures),m=r(e.images),p=r(e.shapes),h=r(e.skeletons),g=r(e.animations),f=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),m.length>0&&(n.images=m),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),f.length>0&&(n.nodes=f)}return n.object=s,n;function r(o){const c=[];for(const d in o){const m=o[d];delete m.metadata,c.push(m)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new z(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class li extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jc={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){r=!0;for(const v of e.hand.values()){const u=t.getJointPose(v,n),l=this._getHandJoint(d,v);u!==null&&(l.matrix.fromArray(u.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=u.radius),l.visible=u!==null}const m=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],h=m.position.distanceTo(p.position),g=.02,f=.005;d.inputState.pinching&&h>g+f?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&h<=g-f&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jc)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),d!==null&&(d.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},zi={h:0,s:0,l:0};function zs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ge.workingColorSpace){if(e=kc(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=zs(r,a,e+1/3),this.g=zs(r,a,e),this.b=zs(r,a,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(a){a!==void 0&&parseFloat(a)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Dl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Ge.workingToColorSpace(At.copy(this),e),Math.round(He(At.r*255,0,255))*65536+Math.round(He(At.g*255,0,255))*256+Math.round(He(At.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(At.copy(this),t);const n=At.r,s=At.g,a=At.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,d;const m=(o+r)/2;if(o===r)c=0,d=0;else{const p=r-o;switch(d=m<=.5?p/(r+o):p/(2-r-o),r){case n:c=(s-a)/p+(s<a?6:0);break;case s:c=(a-n)/p+2;break;case a:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=d,e.l=m,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Gt){Ge.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,s=At.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(zi);const n=Is(Sn.h,zi.h,t),s=Is(Sn.s,zi.s,t),a=Is(Sn.l,zi.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ve;Ve.NAMES=Dl;class gr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new gr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qc extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vt=new z,cn=new z,Gs=new z,dn=new z,Qn=new z,ei=new z,to=new z,Hs=new z,Vs=new z,Ws=new z,Xs=new ft,js=new ft,qs=new ft;class Xt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vt.subVectors(e,t),s.cross(Vt);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Vt.subVectors(s,t),cn.subVectors(n,t),Gs.subVectors(e,t);const r=Vt.dot(Vt),o=Vt.dot(cn),c=Vt.dot(Gs),d=cn.dot(cn),m=cn.dot(Gs),p=r*d-o*o;if(p===0)return a.set(0,0,0),null;const h=1/p,g=(d*c-o*m)*h,f=(r*m-o*c)*h;return a.set(1-g-f,f,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,s,a,r,o,c){return this.getBarycoord(e,t,n,s,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,dn.x),c.addScaledVector(r,dn.y),c.addScaledVector(o,dn.z),c)}static getInterpolatedAttribute(e,t,n,s,a,r){return Xs.setScalar(0),js.setScalar(0),qs.setScalar(0),Xs.fromBufferAttribute(e,t),js.fromBufferAttribute(e,n),qs.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Xs,a.x),r.addScaledVector(js,a.y),r.addScaledVector(qs,a.z),r}static isFrontFacing(e,t,n,s){return Vt.subVectors(n,t),cn.subVectors(e,t),Vt.cross(cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Vt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;Qn.subVectors(s,n),ei.subVectors(a,n),Hs.subVectors(e,n);const c=Qn.dot(Hs),d=ei.dot(Hs);if(c<=0&&d<=0)return t.copy(n);Vs.subVectors(e,s);const m=Qn.dot(Vs),p=ei.dot(Vs);if(m>=0&&p<=m)return t.copy(s);const h=c*p-m*d;if(h<=0&&c>=0&&m<=0)return r=c/(c-m),t.copy(n).addScaledVector(Qn,r);Ws.subVectors(e,a);const g=Qn.dot(Ws),f=ei.dot(Ws);if(f>=0&&g<=f)return t.copy(a);const v=g*d-c*f;if(v<=0&&d>=0&&f<=0)return o=d/(d-f),t.copy(n).addScaledVector(ei,o);const u=m*f-g*p;if(u<=0&&p-m>=0&&g-f>=0)return to.subVectors(a,s),o=(p-m)/(p-m+(g-f)),t.copy(s).addScaledVector(to,o);const l=1/(u+v+h);return r=v*l,o=h*l,t.copy(n).addScaledVector(Qn,r).addScaledVector(ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Li{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Wt):Wt.fromBufferAttribute(a,r),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xi),Hi.subVectors(this.max,xi),ti.subVectors(e.a,xi),ni.subVectors(e.b,xi),ii.subVectors(e.c,xi),Mn.subVectors(ni,ti),En.subVectors(ii,ni),Ln.subVectors(ti,ii);let t=[0,-Mn.z,Mn.y,0,-En.z,En.y,0,-Ln.z,Ln.y,Mn.z,0,-Mn.x,En.z,0,-En.x,Ln.z,0,-Ln.x,-Mn.y,Mn.x,0,-En.y,En.x,0,-Ln.y,Ln.x,0];return!$s(t,ti,ni,ii,Hi)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,ti,ni,ii,Hi))?!1:(Vi.crossVectors(Mn,En),t=[Vi.x,Vi.y,Vi.z],$s(t,ti,ni,ii,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const un=[new z,new z,new z,new z,new z,new z,new z,new z],Wt=new z,Gi=new Li,ti=new z,ni=new z,ii=new z,Mn=new z,En=new z,Ln=new z,xi=new z,Hi=new z,Vi=new z,In=new z;function $s(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){In.fromArray(i,a);const o=s.x*Math.abs(In.x)+s.y*Math.abs(In.y)+s.z*Math.abs(In.z),c=e.dot(In),d=t.dot(In),m=n.dot(In);if(Math.max(-Math.max(c,d,m),Math.min(c,d,m))>o)return!1}return!0}const gt=new z,Wi=new qe;let ed=0;class sn extends Wn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gr,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix3(e),this.setXY(t,Wi.x,Wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),a=Pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gr&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ll extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Il extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const td=new Li,bi=new z,Ys=new z;class Ii{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):td.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(bi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(Ys)),this.expandByPoint(bi.copy(e.center).sub(Ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nd=0;const zt=new ct,Ks=new yt,si=new z,Nt=new Li,yi=new Li,bt=new z;class Mt extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nc(e)?Il:Ll)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new De().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Ks.lookAt(e),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Nt.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Nt.min,yi.min),Nt.expandByPoint(bt),bt.addVectors(Nt.max,yi.max),Nt.expandByPoint(bt)):(Nt.expandByPoint(yi.min),Nt.expandByPoint(yi.max))}Nt.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)bt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(bt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let d=0,m=o.count;d<m;d++)bt.fromBufferAttribute(o,d),c&&(si.fromBufferAttribute(e,d),bt.add(si)),s=Math.max(s,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let b=0;b<n.count;b++)o[b]=new z,c[b]=new z;const d=new z,m=new z,p=new z,h=new qe,g=new qe,f=new qe,v=new z,u=new z;function l(b,w,L){d.fromBufferAttribute(n,b),m.fromBufferAttribute(n,w),p.fromBufferAttribute(n,L),h.fromBufferAttribute(a,b),g.fromBufferAttribute(a,w),f.fromBufferAttribute(a,L),m.sub(d),p.sub(d),g.sub(h),f.sub(h);const C=1/(g.x*f.y-f.x*g.y);isFinite(C)&&(v.copy(m).multiplyScalar(f.y).addScaledVector(p,-g.y).multiplyScalar(C),u.copy(p).multiplyScalar(g.x).addScaledVector(m,-f.x).multiplyScalar(C),o[b].add(v),o[w].add(v),o[L].add(v),c[b].add(u),c[w].add(u),c[L].add(u))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let b=0,w=x.length;b<w;++b){const L=x[b],C=L.start,N=L.count;for(let k=C,j=C+N;k<j;k+=3)l(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new z,M=new z,A=new z,E=new z;function R(b){A.fromBufferAttribute(s,b),E.copy(A);const w=o[b];y.copy(w),y.sub(A.multiplyScalar(A.dot(w))).normalize(),M.crossVectors(E,w);const C=M.dot(c[b])<0?-1:1;r.setXYZW(b,y.x,y.y,y.z,C)}for(let b=0,w=x.length;b<w;++b){const L=x[b],C=L.start,N=L.count;for(let k=C,j=C+N;k<j;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);const s=new z,a=new z,r=new z,o=new z,c=new z,d=new z,m=new z,p=new z;if(e)for(let h=0,g=e.count;h<g;h+=3){const f=e.getX(h+0),v=e.getX(h+1),u=e.getX(h+2);s.fromBufferAttribute(t,f),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,u),m.subVectors(r,a),p.subVectors(s,a),m.cross(p),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,v),d.fromBufferAttribute(n,u),o.add(m),c.add(m),d.add(m),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(u,d.x,d.y,d.z)}else for(let h=0,g=t.count;h<g;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),m.subVectors(r,a),p.subVectors(s,a),m.cross(p),n.setXYZ(h+0,m.x,m.y,m.z),n.setXYZ(h+1,m.x,m.y,m.z),n.setXYZ(h+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,c){const d=o.array,m=o.itemSize,p=o.normalized,h=new d.constructor(c.length*m);let g=0,f=0;for(let v=0,u=c.length;v<u;v++){o.isInterleavedBufferAttribute?g=c[v]*o.data.stride+o.offset:g=c[v]*m;for(let l=0;l<m;l++)h[f++]=d[g++]}return new sn(h,m,p)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],d=e(c,n);t.setAttribute(o,d)}const a=this.morphAttributes;for(const o in a){const c=[],d=a[o];for(let m=0,p=d.length;m<p;m++){const h=d[m],g=e(h,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const d=r[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const d=n[c];e.data.attributes[c]=d.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],m=[];for(let p=0,h=d.length;p<h;p++){const g=d[p];m.push(g.toJSON(e.data))}m.length>0&&(s[c]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(t))}const a=e.morphAttributes;for(const d in a){const m=[],p=a[d];for(let h=0,g=p.length;h<g;h++)m.push(p[h].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let d=0,m=r.length;d<m;d++){const p=r[d];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let id=0;class Xn extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=ci,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=fa,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fn=new z,Zs=new z,Xi=new z,Tn=new z,Js=new z,ji=new z,Qs=new z;class vr{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zs.copy(e).add(t).multiplyScalar(.5),Xi.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(Zs);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Xi),o=Tn.dot(this.direction),c=-Tn.dot(Xi),d=Tn.lengthSq(),m=Math.abs(1-r*r);let p,h,g,f;if(m>0)if(p=r*c-o,h=r*o-c,f=a*m,p>=0)if(h>=-f)if(h<=f){const v=1/m;p*=v,h*=v,g=p*(p+r*h+2*o)+h*(r*p+h+2*c)+d}else h=a,p=Math.max(0,-(r*h+o)),g=-p*p+h*(h+2*c)+d;else h=-a,p=Math.max(0,-(r*h+o)),g=-p*p+h*(h+2*c)+d;else h<=-f?(p=Math.max(0,-(-r*a+o)),h=p>0?-a:Math.min(Math.max(-a,-c),a),g=-p*p+h*(h+2*c)+d):h<=f?(p=0,h=Math.min(Math.max(-a,-c),a),g=h*(h+2*c)+d):(p=Math.max(0,-(r*a+o)),h=p>0?a:Math.min(Math.max(-a,-c),a),g=-p*p+h*(h+2*c)+d);else h=r>0?-a:a,p=Math.max(0,-(r*h+o)),g=-p*p+h*(h+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Zs).addScaledVector(Xi,h),g}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),s=fn.dot(fn)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,c;const d=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,h=this.origin;return d>=0?(n=(e.min.x-h.x)*d,s=(e.max.x-h.x)*d):(n=(e.max.x-h.x)*d,s=(e.min.x-h.x)*d),m>=0?(a=(e.min.y-h.y)*m,r=(e.max.y-h.y)*m):(a=(e.max.y-h.y)*m,r=(e.min.y-h.y)*m),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,s,a){Js.subVectors(t,e),ji.subVectors(n,e),Qs.crossVectors(Js,ji);let r=this.direction.dot(Qs),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Tn.subVectors(this.origin,e);const c=o*this.direction.dot(ji.crossVectors(Tn,ji));if(c<0)return null;const d=o*this.direction.dot(Js.cross(Tn));if(d<0||c+d>r)return null;const m=-o*Tn.dot(Qs);return m<0?null:this.at(m/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ul extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const no=new ct,Un=new vr,qi=new Ii,io=new z,$i=new z,Yi=new z,Ki=new z,ea=new z,Zi=new z,so=new z,Ji=new z;class Dt extends yt{constructor(e=new Mt,t=new Ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){Zi.set(0,0,0);for(let c=0,d=a.length;c<d;c++){const m=o[c],p=a[c];m!==0&&(ea.fromBufferAttribute(p,e),r?Zi.addScaledVector(ea,m):Zi.addScaledVector(ea.sub(t),m))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(a),Un.copy(e.ray).recast(e.near),!(qi.containsPoint(Un.origin)===!1&&(Un.intersectSphere(qi,io)===null||Un.origin.distanceToSquared(io)>(e.far-e.near)**2))&&(no.copy(a).invert(),Un.copy(e.ray).applyMatrix4(no),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,d=a.attributes.uv,m=a.attributes.uv1,p=a.attributes.normal,h=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(r))for(let f=0,v=h.length;f<v;f++){const u=h[f],l=r[u.materialIndex],x=Math.max(u.start,g.start),y=Math.min(o.count,Math.min(u.start+u.count,g.start+g.count));for(let M=x,A=y;M<A;M+=3){const E=o.getX(M),R=o.getX(M+1),b=o.getX(M+2);s=Qi(this,l,e,n,d,m,p,E,R,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const f=Math.max(0,g.start),v=Math.min(o.count,g.start+g.count);for(let u=f,l=v;u<l;u+=3){const x=o.getX(u),y=o.getX(u+1),M=o.getX(u+2);s=Qi(this,r,e,n,d,m,p,x,y,M),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let f=0,v=h.length;f<v;f++){const u=h[f],l=r[u.materialIndex],x=Math.max(u.start,g.start),y=Math.min(c.count,Math.min(u.start+u.count,g.start+g.count));for(let M=x,A=y;M<A;M+=3){const E=M,R=M+1,b=M+2;s=Qi(this,l,e,n,d,m,p,E,R,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const f=Math.max(0,g.start),v=Math.min(c.count,g.start+g.count);for(let u=f,l=v;u<l;u+=3){const x=u,y=u+1,M=u+2;s=Qi(this,r,e,n,d,m,p,x,y,M),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}}function sd(i,e,t,n,s,a,r,o){let c;if(e.side===Lt?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,e.side===Rn,o),c===null)return null;Ji.copy(o),Ji.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Ji);return d<t.near||d>t.far?null:{distance:d,point:Ji.clone(),object:i}}function Qi(i,e,t,n,s,a,r,o,c,d){i.getVertexPosition(o,$i),i.getVertexPosition(c,Yi),i.getVertexPosition(d,Ki);const m=sd(i,e,t,n,$i,Yi,Ki,so);if(m){const p=new z;Xt.getBarycoord(so,$i,Yi,Ki,p),s&&(m.uv=Xt.getInterpolatedAttribute(s,o,c,d,p,new qe)),a&&(m.uv1=Xt.getInterpolatedAttribute(a,o,c,d,p,new qe)),r&&(m.normal=Xt.getInterpolatedAttribute(r,o,c,d,p,new z),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const h={a:o,b:c,c:d,normal:new z,materialIndex:0};Xt.getNormal($i,Yi,Ki,h.normal),m.face=h,m.barycoord=p}return m}class ad extends Ct{constructor(e=null,t=1,n=1,s,a,r,o,c,d=St,m=St,p,h){super(null,r,o,c,d,m,s,a,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ta=new z,rd=new z,od=new De;class Fn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ta.subVectors(n,t).cross(rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(ta),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||od.getNormalMatrix(e),s=this.coplanarPoint(ta).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Ii,ld=new qe(.5,.5),es=new z;class _r{constructor(e=new Fn,t=new Fn,n=new Fn,s=new Fn,a=new Fn,r=new Fn){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=en,n=!1){const s=this.planes,a=e.elements,r=a[0],o=a[1],c=a[2],d=a[3],m=a[4],p=a[5],h=a[6],g=a[7],f=a[8],v=a[9],u=a[10],l=a[11],x=a[12],y=a[13],M=a[14],A=a[15];if(s[0].setComponents(d-r,g-m,l-f,A-x).normalize(),s[1].setComponents(d+r,g+m,l+f,A+x).normalize(),s[2].setComponents(d+o,g+p,l+v,A+y).normalize(),s[3].setComponents(d-o,g-p,l-v,A-y).normalize(),n)s[4].setComponents(c,h,u,M).normalize(),s[5].setComponents(d-c,g-h,l-u,A-M).normalize();else if(s[4].setComponents(d-c,g-h,l-u,A-M).normalize(),t===en)s[5].setComponents(d+c,g+h,l+u,A+M).normalize();else if(t===Pi)s[5].setComponents(c,h,u,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){Nn.center.set(0,0,0);const t=ld.distanceTo(e.center);return Nn.radius=.7071067811865476+t,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(es.x=s.normal.x>0?e.max.x:e.min.x,es.y=s.normal.y>0?e.max.y:e.min.y,es.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tr extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bs=new z,ys=new z,ao=new ct,Si=new vr,ts=new Ii,na=new z,ro=new z;class Nl extends yt{constructor(e=new Mt,t=new tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)bs.fromBufferAttribute(t,s-1),ys.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=bs.distanceTo(ys);e.setAttribute("lineDistance",new dt(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(s),ts.radius+=a,e.ray.intersectsSphere(ts)===!1)return;ao.copy(s).invert(),Si.copy(e.ray).applyMatrix4(ao);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,d=this.isLineSegments?2:1,m=n.index,h=n.attributes.position;if(m!==null){const g=Math.max(0,r.start),f=Math.min(m.count,r.start+r.count);for(let v=g,u=f-1;v<u;v+=d){const l=m.getX(v),x=m.getX(v+1),y=ns(this,e,Si,c,l,x,v);y&&t.push(y)}if(this.isLineLoop){const v=m.getX(f-1),u=m.getX(g),l=ns(this,e,Si,c,v,u,f-1);l&&t.push(l)}}else{const g=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let v=g,u=f-1;v<u;v+=d){const l=ns(this,e,Si,c,v,v+1,v);l&&t.push(l)}if(this.isLineLoop){const v=ns(this,e,Si,c,f-1,g,f-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ns(i,e,t,n,s,a,r){const o=i.geometry.attributes.position;if(bs.fromBufferAttribute(o,s),ys.fromBufferAttribute(o,a),t.distanceSqToSegment(bs,ys,na,ro)>n)return;na.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(na);if(!(d<e.near||d>e.far))return{distance:d,point:ro.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const oo=new z,lo=new z;class co extends Nl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)oo.fromBufferAttribute(t,s),lo.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+oo.distanceTo(lo);e.setAttribute("lineDistance",new dt(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fl extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const uo=new ct,nr=new vr,is=new Ii,ss=new z;class cd extends yt{constructor(e=new Mt,t=new Fl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(s),is.radius+=a,e.ray.intersectsSphere(is)===!1)return;uo.copy(s).invert(),nr.copy(e.ray).applyMatrix4(uo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,d=n.index,p=n.attributes.position;if(d!==null){const h=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let f=h,v=g;f<v;f++){const u=d.getX(f);ss.fromBufferAttribute(p,u),fo(ss,u,c,s,e,t,this)}}else{const h=Math.max(0,r.start),g=Math.min(p.count,r.start+r.count);for(let f=h,v=g;f<v;f++)ss.fromBufferAttribute(p,f),fo(ss,f,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function fo(i,e,t,n,s,a,r){const o=nr.distanceSqToPoint(i);if(o<t){const c=new z;nr.closestPointToPoint(i,c),c.applyMatrix4(n);const d=s.ray.origin.distanceTo(c);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Ol extends Ct{constructor(e=[],t=Hn,n,s,a,r,o,c,d,m){super(e,t,n,s,a,r,o,c,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dd extends Ct{constructor(e,t,n,s,a,r,o,c,d){super(e,t,n,s,a,r,o,c,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hi extends Ct{constructor(e,t,n=an,s,a,r,o=St,c=St,d,m=vn,p=1){if(m!==vn&&m!==Gn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,s,a,r,o,c,m,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ud extends hi{constructor(e,t=an,n=Hn,s,a,r=St,o=St,c,d=vn){const m={width:e,height:e,depth:1},p=[m,m,m,m,m,m];super(e,e,t,n,s,a,r,o,c,d),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bl extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ui extends Mt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],d=[],m=[],p=[];let h=0,g=0;f("z","y","x",-1,-1,n,t,e,r,a,0),f("z","y","x",1,-1,n,t,-e,r,a,1),f("x","z","y",1,1,e,n,t,s,r,2),f("x","z","y",1,-1,e,n,-t,s,r,3),f("x","y","z",1,-1,e,t,n,s,a,4),f("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(m,3)),this.setAttribute("uv",new dt(p,2));function f(v,u,l,x,y,M,A,E,R,b,w){const L=M/R,C=A/b,N=M/2,k=A/2,j=E/2,P=R+1,F=b+1;let B=0,J=0;const te=new z;for(let ne=0;ne<F;ne++){const le=ne*C-k;for(let ve=0;ve<P;ve++){const Ue=ve*L-N;te[v]=Ue*x,te[u]=le*y,te[l]=j,d.push(te.x,te.y,te.z),te[v]=0,te[u]=0,te[l]=E>0?1:-1,m.push(te.x,te.y,te.z),p.push(ve/R),p.push(1-ne/b),B+=1}}for(let ne=0;ne<b;ne++)for(let le=0;le<R;le++){const ve=h+le+P*ne,Ue=h+le+P*(ne+1),ze=h+(le+1)+P*(ne+1),Re=h+(le+1)+P*ne;c.push(ve,Ue,Re),c.push(Ue,ze,Re),J+=6}o.addGroup(g,J,w),g+=J,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bn extends Mt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const d=this;s=Math.floor(s),a=Math.floor(a);const m=[],p=[],h=[],g=[];let f=0;const v=[],u=n/2;let l=0;x(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(m),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(g,2));function x(){const M=new z,A=new z;let E=0;const R=(t-e)/n;for(let b=0;b<=a;b++){const w=[],L=b/a,C=L*(t-e)+e;for(let N=0;N<=s;N++){const k=N/s,j=k*c+o,P=Math.sin(j),F=Math.cos(j);A.x=C*P,A.y=-L*n+u,A.z=C*F,p.push(A.x,A.y,A.z),M.set(P,R,F).normalize(),h.push(M.x,M.y,M.z),g.push(k,1-L),w.push(f++)}v.push(w)}for(let b=0;b<s;b++)for(let w=0;w<a;w++){const L=v[w][b],C=v[w+1][b],N=v[w+1][b+1],k=v[w][b+1];(e>0||w!==0)&&(m.push(L,C,k),E+=3),(t>0||w!==a-1)&&(m.push(C,N,k),E+=3)}d.addGroup(l,E,0),l+=E}function y(M){const A=f,E=new qe,R=new z;let b=0;const w=M===!0?e:t,L=M===!0?1:-1;for(let N=1;N<=s;N++)p.push(0,u*L,0),h.push(0,L,0),g.push(.5,.5),f++;const C=f;for(let N=0;N<=s;N++){const j=N/s*c+o,P=Math.cos(j),F=Math.sin(j);R.x=w*F,R.y=u*L,R.z=w*P,p.push(R.x,R.y,R.z),h.push(0,L,0),E.x=P*.5+.5,E.y=F*.5*L+.5,g.push(E.x,E.y),f++}for(let N=0;N<s;N++){const k=A+N,j=C+N;M===!0?m.push(j,j+1,k):m.push(j+1,j,k),b+=3}d.addGroup(l,b,M===!0?1:2),l+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Es extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(s),d=o+1,m=c+1,p=e/o,h=t/c,g=[],f=[],v=[],u=[];for(let l=0;l<m;l++){const x=l*h-r;for(let y=0;y<d;y++){const M=y*p-a;f.push(M,-x,0),v.push(0,0,1),u.push(y/o),u.push(1-l/c)}}for(let l=0;l<c;l++)for(let x=0;x<o;x++){const y=x+d*l,M=x+d*(l+1),A=x+1+d*(l+1),E=x+1+d*l;g.push(y,M,E),g.push(M,A,E)}this.setIndex(g),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}class xr extends Mt{constructor(e=.5,t=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],d=[],m=[];let p=e;const h=(t-e)/s,g=new z,f=new qe;for(let v=0;v<=s;v++){for(let u=0;u<=n;u++){const l=a+u/n*r;g.x=p*Math.cos(l),g.y=p*Math.sin(l),c.push(g.x,g.y,g.z),d.push(0,0,1),f.x=(g.x/t+1)/2,f.y=(g.y/t+1)/2,m.push(f.x,f.y)}p+=h}for(let v=0;v<s;v++){const u=v*(n+1);for(let l=0;l<n;l++){const x=l+u,y=x,M=x+n+1,A=x+n+2,E=x+1;o.push(y,M,E),o.push(M,A,E)}}this.setIndex(o),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class br extends Mt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let d=0;const m=[],p=new z,h=new z,g=[],f=[],v=[],u=[];for(let l=0;l<=n;l++){const x=[],y=l/n;let M=0;l===0&&r===0?M=.5/t:l===n&&c===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const E=A/t;p.x=-e*Math.cos(s+E*a)*Math.sin(r+y*o),p.y=e*Math.cos(r+y*o),p.z=e*Math.sin(s+E*a)*Math.sin(r+y*o),f.push(p.x,p.y,p.z),h.copy(p).normalize(),v.push(h.x,h.y,h.z),u.push(E+M,1-y),x.push(d++)}m.push(x)}for(let l=0;l<n;l++)for(let x=0;x<t;x++){const y=m[l][x+1],M=m[l][x],A=m[l+1][x],E=m[l+1][x+1];(l!==0||r>0)&&g.push(y,M,E),(l!==n-1||c<Math.PI)&&g.push(M,A,E)}this.setIndex(g),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fd extends Mt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new z,a=new z;if(e.index!==null){const r=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let d=0,m=c.length;d<m;++d){const p=c[d],h=p.start,g=p.count;for(let f=h,v=h+g;f<v;f+=3)for(let u=0;u<3;u++){const l=o.getX(f+u),x=o.getX(f+(u+1)%3);s.fromBufferAttribute(r,l),a.fromBufferAttribute(r,x),ho(s,a,n)===!0&&(t.push(s.x,s.y,s.z),t.push(a.x,a.y,a.z))}}}else{const r=e.attributes.position;for(let o=0,c=r.count/3;o<c;o++)for(let d=0;d<3;d++){const m=3*o+d,p=3*o+(d+1)%3;s.fromBufferAttribute(r,m),a.fromBufferAttribute(r,p),ho(s,a,n)===!0&&(t.push(s.x,s.y,s.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new dt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function ho(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}function pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(po(s))s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(po(s[0])){const a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][n]=a}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=pi(i[t]);for(const s in n)e[s]=n[s]}return e}function po(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const pd={clone:pi,merge:Rt};var md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=md,this.fragmentShader=gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vd extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mi extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _d extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xd extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yr extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ia=new ct,mo=new z,go=new z;class zl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Bt,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mo.setFromMatrixPosition(e.matrixWorld),t.position.copy(mo),go.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(go),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Pi||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const as=new z,rs=new mi,Yt=new z;class Gl extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=en,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(as,rs,Yt),Yt.x===1&&Yt.y===1&&Yt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(as,rs,Yt.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(as,rs,Yt),Yt.x===1&&Yt.y===1&&Yt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(as,rs,Yt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const An=new z,vo=new qe,_o=new qe;class Ot extends Gl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,vo,_o),t.subVectors(_o,vo)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,d=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*n/d,s*=r.width/c,n*=r.height/d}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bd extends zl{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0}}class xo extends yr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Sr extends Gl{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,r=a+d*this.view.width,o-=m*this.view.offsetY,c=o-m*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yd extends zl{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bo extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new yd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Sd extends yr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ai=-90,ri=1;class Md extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ot(ai,ri,e,t);s.layers=this.layers,this.add(s);const a=new Ot(ai,ri,e,t);a.layers=this.layers,this.add(a);const r=new Ot(ai,ri,e,t);r.layers=this.layers,this.add(r);const o=new Ot(ai,ri,e,t);o.layers=this.layers,this.add(o);const c=new Ot(ai,ri,e,t);c.layers=this.layers,this.add(c);const d=new Ot(ai,ri,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,c]=t;for(const d of t)this.remove(d);if(e===en)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,d,m]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let u=!1;e.isWebGLRenderer===!0?u=e.state.buffers.depth.getReversed():u=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(p,h,g),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Ed extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Td{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ae("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const wr=class wr{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=s,this}};wr.prototype.isMatrix2=!0;let yo=wr;function So(i,e,t,n){const s=Ad(n);switch(t){case Tl:return i*e;case wl:return i*e/s.components*s.byteLength;case dr:return i*e/s.components*s.byteLength;case Vn:return i*e*2/s.components*s.byteLength;case ur:return i*e*2/s.components*s.byteLength;case Al:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case fr:return i*e*4/s.components*s.byteLength;case ds:case us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fs:case hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:case Ta:return Math.max(i,16)*Math.max(e,8)/4;case Sa:case Ea:return Math.max(i,8)*Math.max(e,8)/2;case Aa:case wa:case Ra:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:case ms:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ja:case qa:case $a:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ya:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gs:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ad(i){switch(i){case Bt:case yl:return{byteLength:1,components:1};case Ci:case Sl:case gn:return{byteLength:2,components:1};case lr:case cr:return{byteLength:2,components:4};case an:case or:case Qt:return{byteLength:4,components:1};case Ml:case El:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ar}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ar);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hl(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function wd(i){const e=new WeakMap;function t(o,c){const d=o.array,m=o.usage,p=d.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,d,m),o.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)g=i.HALF_FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,d){const m=c.array,p=c.updateRanges;if(i.bindBuffer(d,o),p.length===0)i.bufferSubData(d,0,m);else{p.sort((g,f)=>g.start-f.start);let h=0;for(let g=1;g<p.length;g++){const f=p[h],v=p[g];v.start<=f.start+f.count+1?f.count=Math.max(f.count,v.start+v.count-f.start):(++h,p[h]=v)}p.length=h+1;for(let g=0,f=p.length;g<f;g++){const v=p[g];i.bufferSubData(d,v.start*m.BYTES_PER_ELEMENT,m,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const m=e.get(o);(!m||m.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const d=e.get(o);if(d===void 0)e.set(o,t(o,c));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,o,c),d.version=o.version}}return{get:s,remove:a,update:r}}var Cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,su="gl_FragColor = linearToOutputTexel( gl_FragColor );",au=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Su=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Au=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pu=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Du=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ku=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ju=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ef=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ff=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Of=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$f=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,th=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ih=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ah=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Cd,alphahash_pars_fragment:Rd,alphamap_fragment:Pd,alphamap_pars_fragment:Dd,alphatest_fragment:Ld,alphatest_pars_fragment:Id,aomap_fragment:Ud,aomap_pars_fragment:Nd,batching_pars_vertex:Fd,batching_vertex:Od,begin_vertex:Bd,beginnormal_vertex:kd,bsdfs:zd,iridescence_fragment:Gd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Wd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:jd,color_fragment:qd,color_pars_fragment:$d,color_pars_vertex:Yd,color_vertex:Kd,common:Zd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:eu,displacementmap_vertex:tu,emissivemap_fragment:nu,emissivemap_pars_fragment:iu,colorspace_fragment:su,colorspace_pars_fragment:au,envmap_fragment:ru,envmap_common_pars_fragment:ou,envmap_pars_fragment:lu,envmap_pars_vertex:cu,envmap_physical_pars_fragment:bu,envmap_vertex:du,fog_vertex:uu,fog_pars_vertex:fu,fog_fragment:hu,fog_pars_fragment:pu,gradientmap_pars_fragment:mu,lightmap_pars_fragment:gu,lights_lambert_fragment:vu,lights_lambert_pars_fragment:_u,lights_pars_begin:xu,lights_toon_fragment:yu,lights_toon_pars_fragment:Su,lights_phong_fragment:Mu,lights_phong_pars_fragment:Eu,lights_physical_fragment:Tu,lights_physical_pars_fragment:Au,lights_fragment_begin:wu,lights_fragment_maps:Cu,lights_fragment_end:Ru,lightprobes_pars_fragment:Pu,logdepthbuf_fragment:Du,logdepthbuf_pars_fragment:Lu,logdepthbuf_pars_vertex:Iu,logdepthbuf_vertex:Uu,map_fragment:Nu,map_pars_fragment:Fu,map_particle_fragment:Ou,map_particle_pars_fragment:Bu,metalnessmap_fragment:ku,metalnessmap_pars_fragment:zu,morphinstance_vertex:Gu,morphcolor_vertex:Hu,morphnormal_vertex:Vu,morphtarget_pars_vertex:Wu,morphtarget_vertex:Xu,normal_fragment_begin:ju,normal_fragment_maps:qu,normal_pars_fragment:$u,normal_pars_vertex:Yu,normal_vertex:Ku,normalmap_pars_fragment:Zu,clearcoat_normal_fragment_begin:Ju,clearcoat_normal_fragment_maps:Qu,clearcoat_pars_fragment:ef,iridescence_pars_fragment:tf,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:af,project_vertex:rf,dithering_fragment:of,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:df,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:ff,shadowmap_vertex:hf,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:vf,skinnormal_vertex:_f,specularmap_fragment:xf,specularmap_pars_fragment:bf,tonemapping_fragment:yf,tonemapping_pars_fragment:Sf,transmission_fragment:Mf,transmission_pars_fragment:Ef,uv_pars_fragment:Tf,uv_pars_vertex:Af,uv_vertex:wf,worldpos_vertex:Cf,background_vert:Rf,background_frag:Pf,backgroundCube_vert:Df,backgroundCube_frag:Lf,cube_vert:If,cube_frag:Uf,depth_vert:Nf,depth_frag:Ff,distance_vert:Of,distance_frag:Bf,equirect_vert:kf,equirect_frag:zf,linedashed_vert:Gf,linedashed_frag:Hf,meshbasic_vert:Vf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:jf,meshmatcap_vert:qf,meshmatcap_frag:$f,meshnormal_vert:Yf,meshnormal_frag:Kf,meshphong_vert:Zf,meshphong_frag:Jf,meshphysical_vert:Qf,meshphysical_frag:eh,meshtoon_vert:th,meshtoon_frag:nh,points_vert:ih,points_frag:sh,shadow_vert:ah,shadow_frag:rh,sprite_vert:oh,sprite_frag:lh},fe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Zt={basic:{uniforms:Rt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Rt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Rt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Rt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Rt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Rt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Rt([fe.points,fe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Rt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Rt([fe.common,fe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Rt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Rt([fe.sprite,fe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:Rt([fe.common,fe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:Rt([fe.lights,fe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Zt.physical={uniforms:Rt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const os={r:0,b:0,g:0},ch=new ct,Vl=new De;Vl.set(-1,0,0,0,1,0,0,0,1);function dh(i,e,t,n,s,a){const r=new Ve(0);let o=s===!0?0:1,c,d,m=null,p=0,h=null;function g(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const M=x.backgroundBlurriness>0;y=e.get(y,M)}return y}function f(x){let y=!1;const M=g(x);M===null?u(r,o):M&&M.isColor&&(u(M,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===Ms)?(d===void 0&&(d=new Dt(new Ui(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:pi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=M,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ch.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Vl),d.material.toneMapped=Ge.getTransfer(M.colorSpace)!==Je,(m!==M||p!==M.version||h!==i.toneMapping)&&(d.material.needsUpdate=!0,m=M,p=M.version,h=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Dt(new Es(2,2),new rn({name:"BackgroundMaterial",uniforms:pi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(M.colorSpace)!==Je,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(m!==M||p!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,m=M,p=M.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(os,kl(i)),t.buffers.color.setClear(os.r,os.g,os.b,y,a)}function l(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,y=1){r.set(x),o=y,u(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,u(r,o)},render:f,addToRenderList:v,dispose:l}}function uh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let a=s,r=!1;function o(C,N,k,j,P){let F=!1;const B=p(C,j,k,N);a!==B&&(a=B,d(a.object)),F=g(C,j,k,P),F&&f(C,j,k,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(F||r)&&(r=!1,M(C,N,k,j),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return i.createVertexArray()}function d(C){return i.bindVertexArray(C)}function m(C){return i.deleteVertexArray(C)}function p(C,N,k,j){const P=j.wireframe===!0;let F=n[N.id];F===void 0&&(F={},n[N.id]=F);const B=C.isInstancedMesh===!0?C.id:0;let J=F[B];J===void 0&&(J={},F[B]=J);let te=J[k.id];te===void 0&&(te={},J[k.id]=te);let ne=te[P];return ne===void 0&&(ne=h(c()),te[P]=ne),ne}function h(C){const N=[],k=[],j=[];for(let P=0;P<t;P++)N[P]=0,k[P]=0,j[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:j,object:C,attributes:{},index:null}}function g(C,N,k,j){const P=a.attributes,F=N.attributes;let B=0;const J=k.getAttributes();for(const te in J)if(J[te].location>=0){const le=P[te];let ve=F[te];if(ve===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;B++}return a.attributesNum!==B||a.index!==j}function f(C,N,k,j){const P={},F=N.attributes;let B=0;const J=k.getAttributes();for(const te in J)if(J[te].location>=0){let le=F[te];le===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(le=C.instanceColor));const ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),P[te]=ve,B++}a.attributes=P,a.attributesNum=B,a.index=j}function v(){const C=a.newAttributes;for(let N=0,k=C.length;N<k;N++)C[N]=0}function u(C){l(C,0)}function l(C,N){const k=a.newAttributes,j=a.enabledAttributes,P=a.attributeDivisors;k[C]=1,j[C]===0&&(i.enableVertexAttribArray(C),j[C]=1),P[C]!==N&&(i.vertexAttribDivisor(C,N),P[C]=N)}function x(){const C=a.newAttributes,N=a.enabledAttributes;for(let k=0,j=N.length;k<j;k++)N[k]!==C[k]&&(i.disableVertexAttribArray(k),N[k]=0)}function y(C,N,k,j,P,F,B){B===!0?i.vertexAttribIPointer(C,N,k,P,F):i.vertexAttribPointer(C,N,k,j,P,F)}function M(C,N,k,j){v();const P=j.attributes,F=k.getAttributes(),B=N.defaultAttributeValues;for(const J in F){const te=F[J];if(te.location>=0){let ne=P[J];if(ne===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor)),ne!==void 0){const le=ne.normalized,ve=ne.itemSize,Ue=e.get(ne);if(Ue===void 0)continue;const ze=Ue.buffer,Re=Ue.type,Q=Ue.bytesPerElement,ue=Re===i.INT||Re===i.UNSIGNED_INT||ne.gpuType===or;if(ne.isInterleavedBufferAttribute){const re=ne.data,Ee=re.stride,we=ne.offset;if(re.isInstancedInterleavedBuffer){for(let Te=0;Te<te.locationSize;Te++)l(te.location+Te,re.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Te=0;Te<te.locationSize;Te++)u(te.location+Te);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Te=0;Te<te.locationSize;Te++)y(te.location+Te,ve/te.locationSize,Re,le,Ee*Q,(we+ve/te.locationSize*Te)*Q,ue)}else{if(ne.isInstancedBufferAttribute){for(let re=0;re<te.locationSize;re++)l(te.location+re,ne.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let re=0;re<te.locationSize;re++)u(te.location+re);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let re=0;re<te.locationSize;re++)y(te.location+re,ve/te.locationSize,Re,le,ve*Q,ve/te.locationSize*re*Q,ue)}}else if(B!==void 0){const le=B[J];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(te.location,le);break;case 3:i.vertexAttrib3fv(te.location,le);break;case 4:i.vertexAttrib4fv(te.location,le);break;default:i.vertexAttrib1fv(te.location,le)}}}}x()}function A(){w();for(const C in n){const N=n[C];for(const k in N){const j=N[k];for(const P in j){const F=j[P];for(const B in F)m(F[B].object),delete F[B];delete j[P]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const N=n[C.id];for(const k in N){const j=N[k];for(const P in j){const F=j[P];for(const B in F)m(F[B].object),delete F[B];delete j[P]}}delete n[C.id]}function R(C){for(const N in n){const k=n[N];for(const j in k){const P=k[j];if(P[C.id]===void 0)continue;const F=P[C.id];for(const B in F)m(F[B].object),delete F[B];delete P[C.id]}}}function b(C){for(const N in n){const k=n[N],j=C.isInstancedMesh===!0?C.id:0,P=k[j];if(P!==void 0){for(const F in P){const B=P[F];for(const J in B)m(B[J].object),delete B[J];delete P[F]}delete k[j],Object.keys(k).length===0&&delete n[N]}}}function w(){L(),r=!0,a!==s&&(a=s,d(a.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:u,disableUnusedAttributes:x}}function fh(i,e,t){let n;function s(c){n=c}function a(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function r(c,d,m){m!==0&&(i.drawArraysInstanced(n,c,d,m),t.update(d,n,m))}function o(c,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,m);let h=0;for(let g=0;g<m;g++)h+=d[g];t.update(h,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function hh(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==jt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const b=R===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Bt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qt&&!b)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=c(d);m!==d&&(Ae("WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),l=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:u,maxAttributes:l,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:M,maxSamples:A,samples:E}}function ph(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new Fn,o=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const g=p.length!==0||h||n!==0||s;return s=h,n=p.length,g},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,h){t=m(p,h,0)},this.setState=function(p,h,g){const f=p.clippingPlanes,v=p.clipIntersection,u=p.clipShadows,l=i.get(p);if(!s||f===null||f.length===0||a&&!u)a?m(null):d();else{const x=a?0:n,y=x*4;let M=l.clippingState||null;c.value=M,M=m(f,h,y,g);for(let A=0;A!==y;++A)M[A]=t[A];l.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(p,h,g,f){const v=p!==null?p.length:0;let u=null;if(v!==0){if(u=c.value,f!==!0||u===null){const l=g+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(u===null||u.length<l)&&(u=new Float32Array(l));for(let y=0,M=g;y!==v;++y,M+=4)r.copy(p[y]).applyMatrix4(x,o),r.normal.toArray(u,M),u[M+3]=r.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,u}}const Cn=4,Mo=[.125,.215,.35,.446,.526,.582],kn=20,mh=256,Ei=new Sr,Eo=new Ve;let sa=null,aa=0,ra=0,oa=!1;const gh=new z;class To{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,a={}){const{size:r=256,position:o=gh}=a;sa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sa,aa,ra),this._renderer.xr.enabled=oa,e.scissorTest=!1,oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hn||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:gn,format:jt,colorSpace:vs,depthBuffer:!1},s=Ao(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ao(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vh(a)),this._blurMaterial=xh(a,e,t),this._ggxMaterial=_h(a,e,t)}return s}_compileMaterial(e){const t=new Dt(new Mt,e);this._renderer.compile(t,Ei)}_sceneToCubeUV(e,t,n,s,a){const c=new Ot(90,1,t,n),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,g=p.toneMapping;p.getClearColor(Eo),p.toneMapping=tn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dt(new Ui,new Ul({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,u=v.material;let l=!1;const x=e.background;x?x.isColor&&(u.color.copy(x),e.background=null,l=!0):(u.color.copy(Eo),l=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(c.up.set(0,d[y],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+m[y],a.y,a.z)):M===1?(c.up.set(0,0,d[y]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+m[y],a.z)):(c.up.set(0,d[y],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+m[y]));const A=this._cubeSize;oi(s,M*A,y>2?A:0,A,A),p.setRenderTarget(s),l&&p.render(v,c),p.render(e,c)}p.toneMapping=g,p.autoClear=h,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Hn||e.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Co()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wo());const a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;oi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Ei)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const c=r.uniforms,d=n/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),p=Math.sqrt(d*d-m*m),h=0+d*1.25,g=p*h,{_lodMax:f}=this,v=this._sizeLods[n],u=3*v*(n>f-Cn?n-f+Cn:0),l=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=f-t,oi(a,u,l,3*v,2*v),s.setRenderTarget(a),s.render(o,Ei),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=f-n,oi(e,u,l,3*v,2*v),s.setRenderTarget(e),s.render(o,Ei)}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const c=this._renderer,d=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const m=3,p=this._lodMeshes[s];p.material=d;const h=d.uniforms,g=this._sizeLods[n]-1,f=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*kn-1),v=a/f,u=isFinite(a)?1+Math.floor(m*v):kn;u>kn&&Ae(`sigmaRadians, ${a}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${kn}`);const l=[];let x=0;for(let R=0;R<kn;++R){const b=R/v,w=Math.exp(-b*b/2);l.push(w),R===0?x+=w:R<u&&(x+=2*w)}for(let R=0;R<l.length;R++)l[R]=l[R]/x;h.envMap.value=e.texture,h.samples.value=u,h.weights.value=l,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=f,h.mipInt.value=y-n;const M=this._sizeLods[s],A=3*M*(s>y-Cn?s-y+Cn:0),E=4*(this._cubeSize-M);oi(t,A,E,3*M,2*M),c.setRenderTarget(t),c.render(p,Ei)}}function vh(i){const e=[],t=[],n=[];let s=i;const a=i-Cn+1+Mo.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let c=1/o;r>i-Cn?c=Mo[r-i+Cn-1]:r===0&&(c=0),t.push(c);const d=1/(o-2),m=-d,p=1+d,h=[m,m,p,m,p,p,m,m,p,p,m,p],g=6,f=6,v=3,u=2,l=1,x=new Float32Array(v*f*g),y=new Float32Array(u*f*g),M=new Float32Array(l*f*g);for(let E=0;E<g;E++){const R=E%3*2/3-1,b=E>2?0:-1,w=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];x.set(w,v*f*E),y.set(h,u*f*E);const L=[E,E,E,E,E,E];M.set(L,l*f*E)}const A=new Mt;A.setAttribute("position",new sn(x,v)),A.setAttribute("uv",new sn(y,u)),A.setAttribute("faceIndex",new sn(M,l)),n.push(new Dt(A,null)),s>Cn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ao(i,e,t){const n=new nn(i,e,t);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _h(i,e,t){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ts(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function xh(i,e,t){const n=new Float32Array(kn),s=new z(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function wo(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Co(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ts(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wl extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ol(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ui(5,5,5),a=new rn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:pn});a.uniforms.tEquirect.value=t;const r=new Dt(s,a),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=wt),new Md(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}function bh(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,g=!1){return h==null?null:g?r(h):a(h)}function a(h){if(h&&h.isTexture){const g=h.mapping;if(g===Rs||g===Ps)if(e.has(h)){const f=e.get(h).texture;return o(f,h.mapping)}else{const f=h.image;if(f&&f.height>0){const v=new Wl(f.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",d),o(v.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){const g=h.mapping,f=g===Rs||g===Ps,v=g===Hn||g===fi;if(f||v){let u=t.get(h);const l=u!==void 0?u.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==l)return n===null&&(n=new To(i)),u=f?n.fromEquirectangular(h,u):n.fromCubemap(h,u),u.texture.pmremVersion=h.pmremVersion,t.set(h,u),u.texture;if(u!==void 0)return u.texture;{const x=h.image;return f&&x&&x.height>0||v&&x&&c(x)?(n===null&&(n=new To(i)),u=f?n.fromEquirectangular(h):n.fromCubemap(h),u.texture.pmremVersion=h.pmremVersion,t.set(h,u),h.addEventListener("dispose",m),u.texture):null}}}return h}function o(h,g){return g===Rs?h.mapping=Hn:g===Ps&&(h.mapping=fi),h}function c(h){let g=0;const f=6;for(let v=0;v<f;v++)h[v]!==void 0&&g++;return g===f}function d(h){const g=h.target;g.removeEventListener("dispose",d);const f=e.get(g);f!==void 0&&(e.delete(g),f.dispose())}function m(h){const g=h.target;g.removeEventListener("dispose",m);const f=t.get(g);f!==void 0&&(t.delete(g),f.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function yh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Qa("WebGLRenderer: "+n+" extension not supported."),s}}}function Sh(i,e,t,n){const s={},a=new WeakMap;function r(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const f in h.attributes)e.remove(h.attributes[f]);h.removeEventListener("dispose",r),delete s[h.id];const g=a.get(h);g&&(e.remove(g),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER)}function d(p){const h=[],g=p.index,f=p.attributes.position;let v=0;if(f===void 0)return;if(g!==null){const x=g.array;v=g.version;for(let y=0,M=x.length;y<M;y+=3){const A=x[y+0],E=x[y+1],R=x[y+2];h.push(A,E,E,R,R,A)}}else{const x=f.array;v=f.version;for(let y=0,M=x.length/3-1;y<M;y+=3){const A=y+0,E=y+1,R=y+2;h.push(A,E,E,R,R,A)}}const u=new(f.count>=65535?Il:Ll)(h,1);u.version=v;const l=a.get(p);l&&e.remove(l),a.set(p,u)}function m(p){const h=a.get(p);if(h){const g=p.index;g!==null&&h.version<g.version&&d(p)}else d(p);return a.get(p)}return{get:o,update:c,getWireframeAttribute:m}}function Mh(i,e,t){let n;function s(p){n=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function c(p,h){i.drawElements(n,h,a,p*r),t.update(h,n,1)}function d(p,h,g){g!==0&&(i.drawElementsInstanced(n,h,a,p*r,g),t.update(h,n,g))}function m(p,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,a,p,0,g);let v=0;for(let u=0;u<g;u++)v+=h[u];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=m}function Eh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:je("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Th(i,e,t){const n=new WeakMap,s=new ft;function a(r,o,c){const d=r.morphTargetInfluences,m=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=m!==void 0?m.length:0;let h=n.get(o);if(h===void 0||h.count!==p){let L=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var g=L;h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,l=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),v===!0&&(M=2),u===!0&&(M=3);let A=o.attributes.position.count*M,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*E*4*p),b=new Rl(R,A,E,p);b.type=Qt,b.needsUpdate=!0;const w=M*4;for(let C=0;C<p;C++){const N=l[C],k=x[C],j=y[C],P=A*E*4*C;for(let F=0;F<N.count;F++){const B=F*w;f===!0&&(s.fromBufferAttribute(N,F),R[P+B+0]=s.x,R[P+B+1]=s.y,R[P+B+2]=s.z,R[P+B+3]=0),v===!0&&(s.fromBufferAttribute(k,F),R[P+B+4]=s.x,R[P+B+5]=s.y,R[P+B+6]=s.z,R[P+B+7]=0),u===!0&&(s.fromBufferAttribute(j,F),R[P+B+8]=s.x,R[P+B+9]=s.y,R[P+B+10]=s.z,R[P+B+11]=j.itemSize===4?s.w:1)}}h={count:p,texture:b,size:new qe(A,E)},n.set(o,h),o.addEventListener("dispose",L)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let f=0;for(let u=0;u<d.length;u++)f+=d[u];const v=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:a}}function Ah(i,e,t,n,s){let a=new WeakMap;function r(d){const m=s.render.frame,p=d.geometry,h=e.get(d,p);if(a.get(h)!==m&&(e.update(h),a.set(h,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),a.get(d)!==m&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),a.set(d,m))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==m&&(g.update(),a.set(g,m))}return h}function o(){a=new WeakMap}function c(d){const m=d.target;m.removeEventListener("dispose",c),n.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:r,dispose:o}}const wh={[pl]:"LINEAR_TONE_MAPPING",[ml]:"REINHARD_TONE_MAPPING",[gl]:"CINEON_TONE_MAPPING",[rr]:"ACES_FILMIC_TONE_MAPPING",[_l]:"AGX_TONE_MAPPING",[xl]:"NEUTRAL_TONE_MAPPING",[vl]:"CUSTOM_TONE_MAPPING"};function Ch(i,e,t,n,s){const a=new nn(e,t,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new hi(e,t):void 0}),r=new nn(e,t,{type:gn,depthBuffer:!1,stencilBuffer:!1}),o=new Mt;o.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new dt([0,2,0,0,2,0],2));const c=new vd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Dt(o,c),m=new Sr(-1,1,1,-1,0,1);let p=null,h=null,g=!1,f,v=null,u=[],l=!1;this.setSize=function(x,y){a.setSize(x,y),r.setSize(x,y);for(let M=0;M<u.length;M++){const A=u[M];A.setSize&&A.setSize(x,y)}},this.setEffects=function(x){u=x,l=u.length>0&&u[0].isRenderPass===!0;const y=a.width,M=a.height;for(let A=0;A<u.length;A++){const E=u[A];E.setSize&&E.setSize(y,M)}},this.begin=function(x,y){if(g||x.toneMapping===tn&&u.length===0)return!1;if(v=y,y!==null){const M=y.width,A=y.height;(a.width!==M||a.height!==A)&&this.setSize(M,A)}return l===!1&&x.setRenderTarget(a),f=x.toneMapping,x.toneMapping=tn,!0},this.hasRenderPass=function(){return l},this.end=function(x,y){x.toneMapping=f,g=!0;let M=a,A=r;for(let E=0;E<u.length;E++){const R=u[E];if(R.enabled!==!1&&(R.render(x,A,M,y),R.needsSwap!==!1)){const b=M;M=A,A=b}}if(p!==x.outputColorSpace||h!==x.toneMapping){p=x.outputColorSpace,h=x.toneMapping,c.defines={},Ge.getTransfer(p)===Je&&(c.defines.SRGB_TRANSFER="");const E=wh[h];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(v),x.render(d,m),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),r.dispose(),o.dispose(),c.dispose()}}const Xl=new Ct,ir=new hi(1,1),jl=new Rl,ql=new Xc,$l=new Ol,Ro=[],Po=[],Do=new Float32Array(16),Lo=new Float32Array(9),Io=new Float32Array(4);function gi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Ro[s];if(a===void 0&&(a=new Float32Array(s),Ro[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function As(i,e){let t=Po[e];t===void 0&&(t=new Int32Array(e),Po[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ph(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function Dh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Lh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function Ih(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Io.set(n),i.uniformMatrix2fv(this.addr,!1,Io),_t(t,n)}}function Uh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Lo.set(n),i.uniformMatrix3fv(this.addr,!1,Lo),_t(t,n)}}function Nh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Do.set(n),i.uniformMatrix4fv(this.addr,!1,Do),_t(t,n)}}function Fh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Oh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Bh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function zh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function Hh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function Vh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function Wh(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(ir.compareFunction=t.isReversedDepthBuffer()?pr:hr,a=ir):a=Xl,t.setTexture2D(e||a,s)}function Xh(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ql,s)}function jh(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$l,s)}function qh(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jl,s)}function $h(i){switch(i){case 5126:return Rh;case 35664:return Ph;case 35665:return Dh;case 35666:return Lh;case 35674:return Ih;case 35675:return Uh;case 35676:return Nh;case 5124:case 35670:return Fh;case 35667:case 35671:return Oh;case 35668:case 35672:return Bh;case 35669:case 35673:return kh;case 5125:return zh;case 36294:return Gh;case 36295:return Hh;case 36296:return Vh;case 35678:case 36198:case 36298:case 36306:case 35682:return Wh;case 35679:case 36299:case 36307:return Xh;case 35680:case 36300:case 36308:case 36293:return jh;case 36289:case 36303:case 36311:case 36292:return qh}}function Yh(i,e){i.uniform1fv(this.addr,e)}function Kh(i,e){const t=gi(e,this.size,2);i.uniform2fv(this.addr,t)}function Zh(i,e){const t=gi(e,this.size,3);i.uniform3fv(this.addr,t)}function Jh(i,e){const t=gi(e,this.size,4);i.uniform4fv(this.addr,t)}function Qh(i,e){const t=gi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ep(i,e){const t=gi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tp(i,e){const t=gi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function np(i,e){i.uniform1iv(this.addr,e)}function ip(i,e){i.uniform2iv(this.addr,e)}function sp(i,e){i.uniform3iv(this.addr,e)}function ap(i,e){i.uniform4iv(this.addr,e)}function rp(i,e){i.uniform1uiv(this.addr,e)}function op(i,e){i.uniform2uiv(this.addr,e)}function lp(i,e){i.uniform3uiv(this.addr,e)}function cp(i,e){i.uniform4uiv(this.addr,e)}function dp(i,e,t){const n=this.cache,s=e.length,a=As(t,s);vt(n,a)||(i.uniform1iv(this.addr,a),_t(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=ir:r=Xl;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function up(i,e,t){const n=this.cache,s=e.length,a=As(t,s);vt(n,a)||(i.uniform1iv(this.addr,a),_t(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||ql,a[r])}function fp(i,e,t){const n=this.cache,s=e.length,a=As(t,s);vt(n,a)||(i.uniform1iv(this.addr,a),_t(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||$l,a[r])}function hp(i,e,t){const n=this.cache,s=e.length,a=As(t,s);vt(n,a)||(i.uniform1iv(this.addr,a),_t(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||jl,a[r])}function pp(i){switch(i){case 5126:return Yh;case 35664:return Kh;case 35665:return Zh;case 35666:return Jh;case 35674:return Qh;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return sp;case 35669:case 35673:return ap;case 5125:return rp;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return hp}}class mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$h(t.type)}}class gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pp(t.type)}}class vp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Uo(i,e){i.seq.push(e),i.map[e.id]=e}function _p(i,e,t){const n=i.name,s=n.length;for(la.lastIndex=0;;){const a=la.exec(n),r=la.lastIndex;let o=a[1];const c=a[2]==="]",d=a[3];if(c&&(o=o|0),d===void 0||d==="["&&r+2===s){Uo(t,d===void 0?new mp(o,i,e):new gp(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new vp(o),Uo(t,p)),t=p}}}class ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);_p(o,c,this)}const s=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function No(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xp=37297;let bp=0;function yp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Fo=new De;function Sp(i){Ge._getMatrix(Fo,Ge.workingColorSpace,i);const e=`mat3( ${Fo.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case _s:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Oo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+yp(i.getShaderSource(e),o)}else return a}function Mp(i,e){const t=Sp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ep={[pl]:"Linear",[ml]:"Reinhard",[gl]:"Cineon",[rr]:"ACESFilmic",[_l]:"AgX",[xl]:"Neutral",[vl]:"Custom"};function Tp(i,e){const t=Ep[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ls=new z;function Ap(){Ge.getLuminanceCoefficients(ls);const i=ls.x.toFixed(4),e=ls.y.toFixed(4),t=ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function Cp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function wi(i){return i!==""}function Bo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ko(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function sr(i){return i.replace(Pp,Lp)}const Dp=new Map;function Lp(i,e){let t=Fe[e];if(t===void 0){const n=Dp.get(e);if(n!==void 0)t=Fe[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sr(t)}const Ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zo(i){return i.replace(Ip,Up)}function Up(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Go(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Np={[cs]:"SHADOWMAP_TYPE_PCF",[Ai]:"SHADOWMAP_TYPE_VSM"};function Fp(i){return Np[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Op={[Hn]:"ENVMAP_TYPE_CUBE",[fi]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE_UV"};function Bp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Op[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const kp={[fi]:"ENVMAP_MODE_REFRACTION"};function zp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":kp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gp={[hl]:"ENVMAP_BLENDING_MULTIPLY",[Ec]:"ENVMAP_BLENDING_MIX",[Tc]:"ENVMAP_BLENDING_ADD"};function Hp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gp[i.combine]||"ENVMAP_BLENDING_NONE"}function Vp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wp(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=Fp(t),d=Bp(t),m=zp(t),p=Hp(t),h=Vp(t),g=wp(t),f=Cp(a),v=s.createProgram();let u,l,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(wi).join(`
`),u.length>0&&(u+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(wi).join(`
`),l.length>0&&(l+=`
`)):(u=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),l=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tn?"#define TONE_MAPPING":"",t.toneMapping!==tn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==tn?Tp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Mp("linearToOutputTexel",t.outputColorSpace),Ap(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),r=sr(r),r=Bo(r,t),r=ko(r,t),o=sr(o),o=Bo(o,t),o=ko(o,t),r=zo(r),o=zo(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,l=["#define varying in",t.glslVersion===Hr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const y=x+u+r,M=x+l+o,A=No(s,s.VERTEX_SHADER,y),E=No(s,s.FRAGMENT_SHADER,M);s.attachShader(v,A),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(A)||"",j=s.getShaderInfoLog(E)||"",P=N.trim(),F=k.trim(),B=j.trim();let J=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,E);else{const ne=Oo(s,A,"vertex"),le=Oo(s,E,"fragment");je("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+ne+`
`+le)}else P!==""?Ae("WebGLProgram: Program Info Log:",P):(F===""||B==="")&&(te=!1);te&&(C.diagnostics={runnable:J,programLog:P,vertexShader:{log:F,prefix:u},fragmentShader:{log:B,prefix:l}})}s.deleteShader(A),s.deleteShader(E),b=new ps(s,v),w=Rp(s,v)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(v,xp)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}let Xp=0;class jp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qp(e),t.set(e,n)),n}}class qp{constructor(e){this.id=Xp++,this.code=e,this.usedTimes=0}}function $p(i){return i===Vn||i===ms||i===gs}function Yp(i,e,t,n,s,a){const r=new Pl,o=new jp,c=new Set,d=[],m=new Map,p=n.logarithmicDepthBuffer;let h=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return c.add(b),b===0?"uv":`uv${b}`}function v(b,w,L,C,N,k){const j=C.fog,P=N.geometry,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?C.environment:null,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,J=e.get(b.envMap||F,B),te=J&&J.mapping===Ms?J.image.height:null,ne=g[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&Ae("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const le=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ve=le!==void 0?le.length:0;let Ue=0;P.morphAttributes.position!==void 0&&(Ue=1),P.morphAttributes.normal!==void 0&&(Ue=2),P.morphAttributes.color!==void 0&&(Ue=3);let ze,Re,Q,ue;if(ne){const Le=Zt[ne];ze=Le.vertexShader,Re=Le.fragmentShader}else ze=b.vertexShader,Re=b.fragmentShader,o.update(b),Q=o.getVertexShaderID(b),ue=o.getFragmentShaderID(b);const re=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),we=N.isInstancedMesh===!0,Te=N.isBatchedMesh===!0,at=!!b.map,Oe=!!b.matcap,$e=!!J,Ke=!!b.aoMap,Pe=!!b.lightMap,ot=!!b.bumpMap,tt=!!b.normalMap,xt=!!b.displacementMap,U=!!b.emissiveMap,lt=!!b.metalnessMap,Be=!!b.roughnessMap,Ze=b.anisotropy>0,de=b.clearcoat>0,nt=b.dispersion>0,T=b.iridescence>0,_=b.sheen>0,G=b.transmission>0,I=Ze&&!!b.anisotropyMap,q=de&&!!b.clearcoatMap,$=de&&!!b.clearcoatNormalMap,Z=de&&!!b.clearcoatRoughnessMap,W=T&&!!b.iridescenceMap,Y=T&&!!b.iridescenceThicknessMap,ie=_&&!!b.sheenColorMap,me=_&&!!b.sheenRoughnessMap,ae=!!b.specularMap,se=!!b.specularColorMap,Ce=!!b.specularIntensityMap,Ne=G&&!!b.transmissionMap,Ye=G&&!!b.thicknessMap,D=!!b.gradientMap,oe=!!b.alphaMap,K=b.alphaTest>0,ge=!!b.alphaHash,ce=!!b.extensions;let ee=tn;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ee=i.toneMapping);const ye={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:ze,fragmentShader:Re,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Te,batchingColor:Te&&N._colorsTexture!==null,instancing:we,instancingColor:we&&N.instanceColor!==null,instancingMorph:we&&N.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:at,matcap:Oe,envMap:$e,envMapMode:$e&&J.mapping,envMapCubeUVHeight:te,aoMap:Ke,lightMap:Pe,bumpMap:ot,normalMap:tt,displacementMap:xt,emissiveMap:U,normalMapObjectSpace:tt&&b.normalMapType===Cc,normalMapTangentSpace:tt&&b.normalMapType===Ja,packedNormalMap:tt&&b.normalMapType===Ja&&$p(b.normalMap.format),metalnessMap:lt,roughnessMap:Be,anisotropy:Ze,anisotropyMap:I,clearcoat:de,clearcoatMap:q,clearcoatNormalMap:$,clearcoatRoughnessMap:Z,dispersion:nt,iridescence:T,iridescenceMap:W,iridescenceThicknessMap:Y,sheen:_,sheenColorMap:ie,sheenRoughnessMap:me,specularMap:ae,specularColorMap:se,specularIntensityMap:Ce,transmission:G,transmissionMap:Ne,thicknessMap:Ye,gradientMap:D,opaque:b.transparent===!1&&b.blending===ci&&b.alphaToCoverage===!1,alphaMap:oe,alphaTest:K,alphaHash:ge,combine:b.combine,mapUv:at&&f(b.map.channel),aoMapUv:Ke&&f(b.aoMap.channel),lightMapUv:Pe&&f(b.lightMap.channel),bumpMapUv:ot&&f(b.bumpMap.channel),normalMapUv:tt&&f(b.normalMap.channel),displacementMapUv:xt&&f(b.displacementMap.channel),emissiveMapUv:U&&f(b.emissiveMap.channel),metalnessMapUv:lt&&f(b.metalnessMap.channel),roughnessMapUv:Be&&f(b.roughnessMap.channel),anisotropyMapUv:I&&f(b.anisotropyMap.channel),clearcoatMapUv:q&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:$&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(b.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:me&&f(b.sheenRoughnessMap.channel),specularMapUv:ae&&f(b.specularMap.channel),specularColorMapUv:se&&f(b.specularColorMap.channel),specularIntensityMapUv:Ce&&f(b.specularIntensityMap.channel),transmissionMapUv:Ne&&f(b.transmissionMap.channel),thicknessMapUv:Ye&&f(b.thicknessMap.channel),alphaMapUv:oe&&f(b.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(tt||Ze),vertexNormals:!!P.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(at||oe),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||P.attributes.normal===void 0&&tt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ee,skinning:N.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:at&&b.map.isVideoTexture===!0&&Ge.getTransfer(b.map.colorSpace)===Je,decodeVideoTextureEmissive:U&&b.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(b.emissiveMap.colorSpace)===Je,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Jt,flipSided:b.side===Lt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ce&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&b.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function u(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)w.push(L),w.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(l(w,b),x(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function l(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),b.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),b.push(r.mask)}function y(b){const w=g[b.type];let L;if(w){const C=Zt[w];L=pd.clone(C.uniforms)}else L=b.uniforms;return L}function M(b,w){let L=m.get(w);return L!==void 0?++L.usedTimes:(L=new Wp(i,w,b,s),d.push(L),m.set(w,L)),L}function A(b){if(--b.usedTimes===0){const w=d.indexOf(b);d[w]=d[d.length-1],d.pop(),m.delete(b.cacheKey),b.destroy()}}function E(b){o.remove(b)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:y,acquireProgram:M,releaseProgram:A,releaseShaderCache:E,programs:d,dispose:R}}function Kp(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ho(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vo(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,f,v,u,l){let x=i[e];return x===void 0?(x={id:h.id,object:h,geometry:g,material:f,materialVariant:r(h),groupOrder:v,renderOrder:h.renderOrder,z:u,group:l},i[e]=x):(x.id=h.id,x.object=h,x.geometry=g,x.material=f,x.materialVariant=r(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=u,x.group=l),e++,x}function c(h,g,f,v,u,l){const x=o(h,g,f,v,u,l);f.transmission>0?n.push(x):f.transparent===!0?s.push(x):t.push(x)}function d(h,g,f,v,u,l){const x=o(h,g,f,v,u,l);f.transmission>0?n.unshift(x):f.transparent===!0?s.unshift(x):t.unshift(x)}function m(h,g){t.length>1&&t.sort(h||Zp),n.length>1&&n.sort(g||Ho),s.length>1&&s.sort(g||Ho)}function p(){for(let h=e,g=i.length;h<g;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:c,unshift:d,finish:p,sort:m}}function Jp(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new Vo,i.set(n,[r])):s>=a.length?(r=new Vo,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ve};break;case"SpotLight":t={position:new z,direction:new z,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function em(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tm=0;function nm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function im(i){const e=new Qp,t=em(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new z);const s=new z,a=new ct,r=new ct;function o(d){let m=0,p=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let g=0,f=0,v=0,u=0,l=0,x=0,y=0,M=0,A=0,E=0,R=0;d.sort(nm);for(let w=0,L=d.length;w<L;w++){const C=d[w],N=C.color,k=C.intensity,j=C.distance;let P=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Vn?P=C.shadow.map.texture:P=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)m+=N.r*k,p+=N.g*k,h+=N.b*k;else if(C.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(C.sh.coefficients[F],k);R++}else if(C.isDirectionalLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,J=t.get(C);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=P,n.directionalShadowMatrix[g]=C.shadow.matrix,x++}n.directional[g]=F,g++}else if(C.isSpotLight){const F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(N).multiplyScalar(k),F.distance=j,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,n.spot[v]=F;const B=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,B.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[v]=B.matrix,C.castShadow){const J=t.get(C);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=P,M++}v++}else if(C.isRectAreaLight){const F=e.get(C);F.color.copy(N).multiplyScalar(k),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),n.rectArea[u]=F,u++}else if(C.isPointLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const B=C.shadow,J=t.get(C);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,J.shadowCameraNear=B.camera.near,J.shadowCameraFar=B.camera.far,n.pointShadow[f]=J,n.pointShadowMap[f]=P,n.pointShadowMatrix[f]=C.shadow.matrix,y++}n.point[f]=F,f++}else if(C.isHemisphereLight){const F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(k),F.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[l]=F,l++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=p,n.ambient[2]=h;const b=n.hash;(b.directionalLength!==g||b.pointLength!==f||b.spotLength!==v||b.rectAreaLength!==u||b.hemiLength!==l||b.numDirectionalShadows!==x||b.numPointShadows!==y||b.numSpotShadows!==M||b.numSpotMaps!==A||b.numLightProbes!==R)&&(n.directional.length=g,n.spot.length=v,n.rectArea.length=u,n.point.length=f,n.hemi.length=l,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,b.directionalLength=g,b.pointLength=f,b.spotLength=v,b.rectAreaLength=u,b.hemiLength=l,b.numDirectionalShadows=x,b.numPointShadows=y,b.numSpotShadows=M,b.numSpotMaps=A,b.numLightProbes=R,n.version=tm++)}function c(d,m){let p=0,h=0,g=0,f=0,v=0;const u=m.matrixWorldInverse;for(let l=0,x=d.length;l<x;l++){const y=d[l];if(y.isDirectionalLight){const M=n.directional[p];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),p++}else if(y.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(u),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),g++}else if(y.isRectAreaLight){const M=n.rectArea[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(u),r.identity(),a.copy(y.matrixWorld),a.premultiply(u),r.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),f++}else if(y.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(u),h++}else if(y.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(u),v++}}}return{setup:o,setupView:c,state:n}}function Wo(i){const e=new im(i),t=[],n=[],s=[];function a(h){p.camera=h,t.length=0,n.length=0,s.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function d(){e.setup(t)}function m(h){e.setupView(t,h)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:d,setupLightsView:m,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function sm(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Wo(i),e.set(s,[o])):a>=r.length?(o=new Wo(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,om=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],lm=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Xo=new ct,Ti=new z,ca=new z;function cm(i,e,t){let n=new _r;const s=new qe,a=new qe,r=new ft,o=new _d,c=new xd,d={},m=t.maxTextureSize,p={[Rn]:Lt,[Lt]:Rn,[Jt]:Jt},h=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:am,fragmentShader:rm}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const f=new Mt;f.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dt(f,h),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let l=this.type;this.render=function(E,R,b){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||E.length===0)return;this.type===fl&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cs);const w=i.getRenderTarget(),L=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(pn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=l!==this.type;k&&R.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(P=>P.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,P=E.length;j<P;j++){const F=E[j],B=F.shadow;if(B===void 0){Ae("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const J=B.getFrameExtents();s.multiply(J),a.copy(B.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/J.x),s.x=a.x*J.x,B.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/J.y),s.y=a.y*J.y,B.mapSize.y=a.y));const te=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=te,B.map===null||k===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ai){if(F.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new nn(s.x,s.y,{format:Vn,type:gn,minFilter:wt,magFilter:wt,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new hi(s.x,s.y,Qt),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=vn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=St,B.map.depthTexture.magFilter=St}else F.isPointLight?(B.map=new Wl(s.x),B.map.depthTexture=new ud(s.x,an)):(B.map=new nn(s.x,s.y),B.map.depthTexture=new hi(s.x,s.y,an)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=vn,this.type===cs?(B.map.depthTexture.compareFunction=te?pr:hr,B.map.depthTexture.minFilter=wt,B.map.depthTexture.magFilter=wt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=St,B.map.depthTexture.magFilter=St);B.camera.updateProjectionMatrix()}const ne=B.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<ne;le++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,le),i.clear();else{le===0&&(i.setRenderTarget(B.map),i.clear());const ve=B.getViewport(le);r.set(a.x*ve.x,a.y*ve.y,a.x*ve.z,a.y*ve.w),N.viewport(r)}if(F.isPointLight){const ve=B.camera,Ue=B.matrix,ze=F.distance||ve.far;ze!==ve.far&&(ve.far=ze,ve.updateProjectionMatrix()),Ti.setFromMatrixPosition(F.matrixWorld),ve.position.copy(Ti),ca.copy(ve.position),ca.add(om[le]),ve.up.copy(lm[le]),ve.lookAt(ca),ve.updateMatrixWorld(),Ue.makeTranslation(-Ti.x,-Ti.y,-Ti.z),Xo.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Xo,ve.coordinateSystem,ve.reversedDepth)}else B.updateMatrices(F);n=B.getFrustum(),M(R,b,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===Ai&&x(B,b),B.needsUpdate=!1}l=this.type,u.needsUpdate=!1,i.setRenderTarget(w,L,C)};function x(E,R){const b=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new nn(s.x,s.y,{format:Vn,type:gn})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,b,h,v,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,b,g,v,null)}function y(E,R,b,w){let L=null;const C=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)L=C;else if(L=b.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=L.uuid,k=R.uuid;let j=d[N];j===void 0&&(j={},d[N]=j);let P=j[k];P===void 0&&(P=L.clone(),j[k]=P,R.addEventListener("dispose",A)),L=P}if(L.visible=R.visible,L.wireframe=R.wireframe,w===Ai?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:p[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const N=i.properties.get(L);N.light=b}return L}function M(E,R,b,w,L){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Ai)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const k=e.update(E),j=E.material;if(Array.isArray(j)){const P=k.groups;for(let F=0,B=P.length;F<B;F++){const J=P[F],te=j[J.materialIndex];if(te&&te.visible){const ne=y(E,te,w,L);E.onBeforeShadow(i,E,R,b,k,ne,J),i.renderBufferDirect(b,null,k,ne,E,J),E.onAfterShadow(i,E,R,b,k,ne,J)}}}else if(j.visible){const P=y(E,j,w,L);E.onBeforeShadow(i,E,R,b,k,P,null),i.renderBufferDirect(b,null,k,P,E,null),E.onAfterShadow(i,E,R,b,k,P,null)}}const N=E.children;for(let k=0,j=N.length;k<j;k++)M(N[k],R,b,w,L)}function A(E){E.target.removeEventListener("dispose",A);for(const b in d){const w=d[b],L=E.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function dm(i,e){function t(){let D=!1;const oe=new ft;let K=null;const ge=new ft(0,0,0,0);return{setMask:function(ce){K!==ce&&!D&&(i.colorMask(ce,ce,ce,ce),K=ce)},setLocked:function(ce){D=ce},setClear:function(ce,ee,ye,Le,ht){ht===!0&&(ce*=Le,ee*=Le,ye*=Le),oe.set(ce,ee,ye,Le),ge.equals(oe)===!1&&(i.clearColor(ce,ee,ye,Le),ge.copy(oe))},reset:function(){D=!1,K=null,ge.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,K=null,ge=null,ce=null;return{setReversed:function(ee){if(oe!==ee){const ye=e.get("EXT_clip_control");ee?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),oe=ee;const Le=ce;ce=null,this.setClear(Le)}},getReversed:function(){return oe},setTest:function(ee){ee?re(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(ee){K!==ee&&!D&&(i.depthMask(ee),K=ee)},setFunc:function(ee){if(oe&&(ee=Bc[ee]),ge!==ee){switch(ee){case ha:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=ee}},setLocked:function(ee){D=ee},setClear:function(ee){ce!==ee&&(ce=ee,oe&&(ee=1-ee),i.clearDepth(ee))},reset:function(){D=!1,K=null,ge=null,ce=null,oe=!1}}}function s(){let D=!1,oe=null,K=null,ge=null,ce=null,ee=null,ye=null,Le=null,ht=null;return{setTest:function(Qe){D||(Qe?re(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Qe){oe!==Qe&&!D&&(i.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,on,qt){(K!==Qe||ge!==on||ce!==qt)&&(i.stencilFunc(Qe,on,qt),K=Qe,ge=on,ce=qt)},setOp:function(Qe,on,qt){(ee!==Qe||ye!==on||Le!==qt)&&(i.stencilOp(Qe,on,qt),ee=Qe,ye=on,Le=qt)},setLocked:function(Qe){D=Qe},setClear:function(Qe){ht!==Qe&&(i.clearStencil(Qe),ht=Qe)},reset:function(){D=!1,oe=null,K=null,ge=null,ce=null,ee=null,ye=null,Le=null,ht=null}}}const a=new t,r=new n,o=new s,c=new WeakMap,d=new WeakMap;let m={},p={},h={},g=new WeakMap,f=[],v=null,u=!1,l=null,x=null,y=null,M=null,A=null,E=null,R=null,b=new Ve(0,0,0),w=0,L=!1,C=null,N=null,k=null,j=null,P=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(te)[1]),B=J>=1):te.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),B=J>=2);let ne=null,le={};const ve=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),ze=new ft().fromArray(ve),Re=new ft().fromArray(Ue);function Q(D,oe,K,ge){const ce=new Uint8Array(4),ee=i.createTexture();i.bindTexture(D,ee),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<K;ye++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(oe+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return ee}const ue={};ue[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),re(i.DEPTH_TEST),r.setFunc(ui),ot(!1),tt(Or),re(i.CULL_FACE),Ke(pn);function re(D){m[D]!==!0&&(i.enable(D),m[D]=!0)}function Ee(D){m[D]!==!1&&(i.disable(D),m[D]=!1)}function we(D,oe){return h[D]!==oe?(i.bindFramebuffer(D,oe),h[D]=oe,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Te(D,oe){let K=f,ge=!1;if(D){K=g.get(oe),K===void 0&&(K=[],g.set(oe,K));const ce=D.textures;if(K.length!==ce.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,ye=ce.length;ee<ye;ee++)K[ee]=i.COLOR_ATTACHMENT0+ee;K.length=ce.length,ge=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ge=!0);ge&&i.drawBuffers(K)}function at(D){return v!==D?(i.useProgram(D),v=D,!0):!1}const Oe={[On]:i.FUNC_ADD,[oc]:i.FUNC_SUBTRACT,[lc]:i.FUNC_REVERSE_SUBTRACT};Oe[cc]=i.MIN,Oe[dc]=i.MAX;const $e={[uc]:i.ZERO,[fc]:i.ONE,[hc]:i.SRC_COLOR,[ua]:i.SRC_ALPHA,[xc]:i.SRC_ALPHA_SATURATE,[vc]:i.DST_COLOR,[mc]:i.DST_ALPHA,[pc]:i.ONE_MINUS_SRC_COLOR,[fa]:i.ONE_MINUS_SRC_ALPHA,[_c]:i.ONE_MINUS_DST_COLOR,[gc]:i.ONE_MINUS_DST_ALPHA,[bc]:i.CONSTANT_COLOR,[yc]:i.ONE_MINUS_CONSTANT_COLOR,[Sc]:i.CONSTANT_ALPHA,[Mc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ke(D,oe,K,ge,ce,ee,ye,Le,ht,Qe){if(D===pn){u===!0&&(Ee(i.BLEND),u=!1);return}if(u===!1&&(re(i.BLEND),u=!0),D!==rc){if(D!==l||Qe!==L){if((x!==On||A!==On)&&(i.blendEquation(i.FUNC_ADD),x=On,A=On),Qe)switch(D){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case da:i.blendFunc(i.ONE,i.ONE);break;case Br:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kr:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",D);break}else switch(D){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Br:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kr:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",D);break}y=null,M=null,E=null,R=null,b.set(0,0,0),w=0,l=D,L=Qe}return}ce=ce||oe,ee=ee||K,ye=ye||ge,(oe!==x||ce!==A)&&(i.blendEquationSeparate(Oe[oe],Oe[ce]),x=oe,A=ce),(K!==y||ge!==M||ee!==E||ye!==R)&&(i.blendFuncSeparate($e[K],$e[ge],$e[ee],$e[ye]),y=K,M=ge,E=ee,R=ye),(Le.equals(b)===!1||ht!==w)&&(i.blendColor(Le.r,Le.g,Le.b,ht),b.copy(Le),w=ht),l=D,L=!1}function Pe(D,oe){D.side===Jt?Ee(i.CULL_FACE):re(i.CULL_FACE);let K=D.side===Lt;oe&&(K=!K),ot(K),D.blending===ci&&D.transparent===!1?Ke(pn):Ke(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);const ge=D.stencilWrite;o.setTest(ge),ge&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),U(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(D){C!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),C=D)}function tt(D){D!==sc?(re(i.CULL_FACE),D!==N&&(D===Or?i.cullFace(i.BACK):D===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),N=D}function xt(D){D!==k&&(B&&i.lineWidth(D),k=D)}function U(D,oe,K){D?(re(i.POLYGON_OFFSET_FILL),(j!==oe||P!==K)&&(j=oe,P=K,r.getReversed()&&(oe=-oe),i.polygonOffset(oe,K))):Ee(i.POLYGON_OFFSET_FILL)}function lt(D){D?re(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function Be(D){D===void 0&&(D=i.TEXTURE0+F-1),ne!==D&&(i.activeTexture(D),ne=D)}function Ze(D,oe,K){K===void 0&&(ne===null?K=i.TEXTURE0+F-1:K=ne);let ge=le[K];ge===void 0&&(ge={type:void 0,texture:void 0},le[K]=ge),(ge.type!==D||ge.texture!==oe)&&(ne!==K&&(i.activeTexture(K),ne=K),i.bindTexture(D,oe||ue[D]),ge.type=D,ge.texture=oe)}function de(){const D=le[ne];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function nt(){try{i.compressedTexImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function _(){try{i.texSubImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function G(){try{i.texSubImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function I(){try{i.compressedTexSubImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function $(){try{i.texStorage2D(...arguments)}catch(D){je("WebGLState:",D)}}function Z(){try{i.texStorage3D(...arguments)}catch(D){je("WebGLState:",D)}}function W(){try{i.texImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function Y(){try{i.texImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function ie(D){return p[D]!==void 0?p[D]:i.getParameter(D)}function me(D,oe){p[D]!==oe&&(i.pixelStorei(D,oe),p[D]=oe)}function ae(D){ze.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ze.copy(D))}function se(D){Re.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Re.copy(D))}function Ce(D,oe){let K=d.get(oe);K===void 0&&(K=new WeakMap,d.set(oe,K));let ge=K.get(D);ge===void 0&&(ge=i.getUniformBlockIndex(oe,D.name),K.set(D,ge))}function Ne(D,oe){const ge=d.get(oe).get(D);c.get(oe)!==ge&&(i.uniformBlockBinding(oe,ge,D.__bindingPointIndex),c.set(oe,ge))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),m={},p={},ne=null,le={},h={},g=new WeakMap,f=[],v=null,u=!1,l=null,x=null,y=null,M=null,A=null,E=null,R=null,b=new Ve(0,0,0),w=0,L=!1,C=null,N=null,k=null,j=null,P=null,ze.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:re,disable:Ee,bindFramebuffer:we,drawBuffers:Te,useProgram:at,setBlending:Ke,setMaterial:Pe,setFlipSided:ot,setCullFace:tt,setLineWidth:xt,setPolygonOffset:U,setScissorTest:lt,activeTexture:Be,bindTexture:Ze,unbindTexture:de,compressedTexImage2D:nt,compressedTexImage3D:T,texImage2D:W,texImage3D:Y,pixelStorei:me,getParameter:ie,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:$,texStorage3D:Z,texSubImage2D:_,texSubImage3D:G,compressedTexSubImage2D:I,compressedTexSubImage3D:q,scissor:ae,viewport:se,reset:Ye}}function um(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new qe,m=new WeakMap,p=new Set;let h;const g=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,_){return f?new OffscreenCanvas(T,_):xs("canvas")}function u(T,_,G){let I=1;const q=nt(T);if((q.width>G||q.height>G)&&(I=G/Math.max(q.width,q.height)),I<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(I*q.width),Z=Math.floor(I*q.height);h===void 0&&(h=v($,Z));const W=_?v($,Z):h;return W.width=$,W.height=Z,W.getContext("2d").drawImage(T,0,0,$,Z),Ae("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+$+"x"+Z+")."),W}else return"data"in T&&Ae("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function l(T){return T.generateMipmaps}function x(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,_,G,I,q,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z;I&&(Z=e.get("EXT_texture_norm16"),Z||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=_;if(_===i.RED&&(G===i.FLOAT&&(W=i.R32F),G===i.HALF_FLOAT&&(W=i.R16F),G===i.UNSIGNED_BYTE&&(W=i.R8),G===i.UNSIGNED_SHORT&&Z&&(W=Z.R16_EXT),G===i.SHORT&&Z&&(W=Z.R16_SNORM_EXT)),_===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(W=i.R8UI),G===i.UNSIGNED_SHORT&&(W=i.R16UI),G===i.UNSIGNED_INT&&(W=i.R32UI),G===i.BYTE&&(W=i.R8I),G===i.SHORT&&(W=i.R16I),G===i.INT&&(W=i.R32I)),_===i.RG&&(G===i.FLOAT&&(W=i.RG32F),G===i.HALF_FLOAT&&(W=i.RG16F),G===i.UNSIGNED_BYTE&&(W=i.RG8),G===i.UNSIGNED_SHORT&&Z&&(W=Z.RG16_EXT),G===i.SHORT&&Z&&(W=Z.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(W=i.RG8UI),G===i.UNSIGNED_SHORT&&(W=i.RG16UI),G===i.UNSIGNED_INT&&(W=i.RG32UI),G===i.BYTE&&(W=i.RG8I),G===i.SHORT&&(W=i.RG16I),G===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(W=i.RGB8UI),G===i.UNSIGNED_SHORT&&(W=i.RGB16UI),G===i.UNSIGNED_INT&&(W=i.RGB32UI),G===i.BYTE&&(W=i.RGB8I),G===i.SHORT&&(W=i.RGB16I),G===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),G===i.UNSIGNED_INT&&(W=i.RGBA32UI),G===i.BYTE&&(W=i.RGBA8I),G===i.SHORT&&(W=i.RGBA16I),G===i.INT&&(W=i.RGBA32I)),_===i.RGB&&(G===i.UNSIGNED_SHORT&&Z&&(W=Z.RGB16_EXT),G===i.SHORT&&Z&&(W=Z.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),_===i.RGBA){const Y=$?_s:Ge.getTransfer(q);G===i.FLOAT&&(W=i.RGBA32F),G===i.HALF_FLOAT&&(W=i.RGBA16F),G===i.UNSIGNED_BYTE&&(W=Y===Je?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&Z&&(W=Z.RGBA16_EXT),G===i.SHORT&&Z&&(W=Z.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function A(T,_){let G;return T?_===null||_===an||_===Ri?G=i.DEPTH24_STENCIL8:_===Qt?G=i.DEPTH32F_STENCIL8:_===Ci&&(G=i.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===an||_===Ri?G=i.DEPTH_COMPONENT24:_===Qt?G=i.DEPTH_COMPONENT32F:_===Ci&&(G=i.DEPTH_COMPONENT16),G}function E(T,_){return l(T)===!0||T.isFramebufferTexture&&T.minFilter!==St&&T.minFilter!==wt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function R(T){const _=T.target;_.removeEventListener("dispose",R),w(_),_.isVideoTexture&&m.delete(_),_.isHTMLTexture&&p.delete(_)}function b(T){const _=T.target;_.removeEventListener("dispose",b),C(_)}function w(T){const _=n.get(T);if(_.__webglInit===void 0)return;const G=T.source,I=g.get(G);if(I){const q=I[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&L(T),Object.keys(I).length===0&&g.delete(G)}n.remove(T)}function L(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const G=T.source,I=g.get(G);delete I[_.__cacheKey],r.memory.textures--}function C(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(_.__webglFramebuffer[I]))for(let q=0;q<_.__webglFramebuffer[I].length;q++)i.deleteFramebuffer(_.__webglFramebuffer[I][q]);else i.deleteFramebuffer(_.__webglFramebuffer[I]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[I])}else{if(Array.isArray(_.__webglFramebuffer))for(let I=0;I<_.__webglFramebuffer.length;I++)i.deleteFramebuffer(_.__webglFramebuffer[I]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let I=0;I<_.__webglColorRenderbuffer.length;I++)_.__webglColorRenderbuffer[I]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[I]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const G=T.textures;for(let I=0,q=G.length;I<q;I++){const $=n.get(G[I]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),r.memory.textures--),n.remove(G[I])}n.remove(T)}let N=0;function k(){N=0}function j(){return N}function P(T){N=T}function F(){const T=N;return T>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),N+=1,T}function B(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function J(T,_){const G=n.get(T);if(T.isVideoTexture&&Ze(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){const I=T.image;if(I===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(G,T,_);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+_)}function te(T,_){const G=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){Ee(G,T,_);return}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+_)}function ne(T,_){const G=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){Ee(G,T,_);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+_)}function le(T,_){const G=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&G.__version!==T.version){we(G,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+_)}const ve={[ba]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},Ue={[St]:i.NEAREST,[Ac]:i.NEAREST_MIPMAP_NEAREST,[Oi]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[Ds]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},ze={[Rc]:i.NEVER,[Uc]:i.ALWAYS,[Pc]:i.LESS,[hr]:i.LEQUAL,[Dc]:i.EQUAL,[pr]:i.GEQUAL,[Lc]:i.GREATER,[Ic]:i.NOTEQUAL};function Re(T,_){if(_.type===Qt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===wt||_.magFilter===Ds||_.magFilter===Oi||_.magFilter===zn||_.minFilter===wt||_.minFilter===Ds||_.minFilter===Oi||_.minFilter===zn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ve[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ve[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ve[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ue[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ue[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ze[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===St||_.minFilter!==Oi&&_.minFilter!==zn||_.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Q(T,_){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",R));const I=_.source;let q=g.get(I);q===void 0&&(q={},g.set(I,q));const $=B(_);if($!==T.__cacheKey){q[$]===void 0&&(q[$]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,G=!0),q[$].usedTimes++;const Z=q[T.__cacheKey];Z!==void 0&&(q[T.__cacheKey].usedTimes--,Z.usedTimes===0&&L(_)),T.__cacheKey=$,T.__webglTexture=q[$].texture}return G}function ue(T,_,G){return Math.floor(Math.floor(T/G)/_)}function re(T,_,G,I){const $=T.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,G,I,_.data);else{$.sort((me,ae)=>me.start-ae.start);let Z=0;for(let me=1;me<$.length;me++){const ae=$[Z],se=$[me],Ce=ae.start+ae.count,Ne=ue(se.start,_.width,4),Ye=ue(ae.start,_.width,4);se.start<=Ce+1&&Ne===Ye&&ue(se.start+se.count-1,_.width,4)===Ne?ae.count=Math.max(ae.count,se.start+se.count-ae.start):(++Z,$[Z]=se)}$.length=Z+1;const W=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),ie=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let me=0,ae=$.length;me<ae;me++){const se=$[me],Ce=Math.floor(se.start/4),Ne=Math.ceil(se.count/4),Ye=Ce%_.width,D=Math.floor(Ce/_.width),oe=Ne,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ye,D,oe,K,G,I,_.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,W),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,ie)}}function Ee(T,_,G){let I=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(I=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(I=i.TEXTURE_3D);const q=Q(T,_),$=_.source;t.bindTexture(I,T.__webglTexture,i.TEXTURE0+G);const Z=n.get($);if($.version!==Z.__version||q===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const K=Ge.getPrimaries(Ge.workingColorSpace),ge=_.colorSpace===wn?null:Ge.getPrimaries(_.colorSpace),ce=_.colorSpace===wn||K===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=u(_.image,!1,s.maxTextureSize);Y=de(_,Y);const ie=a.convert(_.format,_.colorSpace),me=a.convert(_.type);let ae=M(_.internalFormat,ie,me,_.normalized,_.colorSpace,_.isVideoTexture);Re(I,_);let se;const Ce=_.mipmaps,Ne=_.isVideoTexture!==!0,Ye=Z.__version===void 0||q===!0,D=$.dataReady,oe=E(_,Y);if(_.isDepthTexture)ae=A(_.format===Gn,_.type),Ye&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,ae,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,ae,Y.width,Y.height,0,ie,me,null));else if(_.isDataTexture)if(Ce.length>0){Ne&&Ye&&t.texStorage2D(i.TEXTURE_2D,oe,ae,Ce[0].width,Ce[0].height);for(let K=0,ge=Ce.length;K<ge;K++)se=Ce[K],Ne?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,se.width,se.height,ie,me,se.data):t.texImage2D(i.TEXTURE_2D,K,ae,se.width,se.height,0,ie,me,se.data);_.generateMipmaps=!1}else Ne?(Ye&&t.texStorage2D(i.TEXTURE_2D,oe,ae,Y.width,Y.height),D&&re(_,Y,ie,me)):t.texImage2D(i.TEXTURE_2D,0,ae,Y.width,Y.height,0,ie,me,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ae,Ce[0].width,Ce[0].height,Y.depth);for(let K=0,ge=Ce.length;K<ge;K++)if(se=Ce[K],_.format!==jt)if(ie!==null)if(Ne){if(D)if(_.layerUpdates.size>0){const ce=So(se.width,se.height,_.format,_.type);for(const ee of _.layerUpdates){const ye=se.data.subarray(ee*ce/se.data.BYTES_PER_ELEMENT,(ee+1)*ce/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ee,se.width,se.height,1,ie,ye)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,Y.depth,ie,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ae,se.width,se.height,Y.depth,0,se.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,Y.depth,ie,me,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ae,se.width,se.height,Y.depth,0,ie,me,se.data)}else{Ne&&Ye&&t.texStorage2D(i.TEXTURE_2D,oe,ae,Ce[0].width,Ce[0].height);for(let K=0,ge=Ce.length;K<ge;K++)se=Ce[K],_.format!==jt?ie!==null?Ne?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,se.width,se.height,ie,se.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ae,se.width,se.height,0,se.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,se.width,se.height,ie,me,se.data):t.texImage2D(i.TEXTURE_2D,K,ae,se.width,se.height,0,ie,me,se.data)}else if(_.isDataArrayTexture)if(Ne){if(Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ae,Y.width,Y.height,Y.depth),D)if(_.layerUpdates.size>0){const K=So(Y.width,Y.height,_.format,_.type);for(const ge of _.layerUpdates){const ce=Y.data.subarray(ge*K/Y.data.BYTES_PER_ELEMENT,(ge+1)*K/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,Y.width,Y.height,1,ie,me,ce)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ie,me,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,Y.width,Y.height,Y.depth,0,ie,me,Y.data);else if(_.isData3DTexture)Ne?(Ye&&t.texStorage3D(i.TEXTURE_3D,oe,ae,Y.width,Y.height,Y.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ie,me,Y.data)):t.texImage3D(i.TEXTURE_3D,0,ae,Y.width,Y.height,Y.depth,0,ie,me,Y.data);else if(_.isFramebufferTexture){if(Ye)if(Ne)t.texStorage2D(i.TEXTURE_2D,oe,ae,Y.width,Y.height);else{let K=Y.width,ge=Y.height;for(let ce=0;ce<oe;ce++)t.texImage2D(i.TEXTURE_2D,ce,ae,K,ge,0,ie,me,null),K>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Y.parentNode!==K){K.appendChild(Y),p.add(_),K.onpaint=Le=>{const ht=Le.changedElements;for(const Qe of p)ht.includes(Qe.image)&&(Qe.needsUpdate=!0)},K.requestPaint();return}const ge=0,ce=i.RGBA,ee=i.RGBA,ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,ge,ce,ee,ye,Y),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ne&&Ye){const K=nt(Ce[0]);t.texStorage2D(i.TEXTURE_2D,oe,ae,K.width,K.height)}for(let K=0,ge=Ce.length;K<ge;K++)se=Ce[K],Ne?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ie,me,se):t.texImage2D(i.TEXTURE_2D,K,ae,ie,me,se);_.generateMipmaps=!1}else if(Ne){if(Ye){const K=nt(Y);t.texStorage2D(i.TEXTURE_2D,oe,ae,K.width,K.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,me,Y)}else t.texImage2D(i.TEXTURE_2D,0,ae,ie,me,Y);l(_)&&x(I),Z.__version=$.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function we(T,_,G){if(_.image.length!==6)return;const I=Q(T,_),q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);const $=n.get(q);if(q.version!==$.__version||I===!0){t.activeTexture(i.TEXTURE0+G);const Z=Ge.getPrimaries(Ge.workingColorSpace),W=_.colorSpace===wn?null:Ge.getPrimaries(_.colorSpace),Y=_.colorSpace===wn||Z===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const ie=_.isCompressedTexture||_.image[0].isCompressedTexture,me=_.image[0]&&_.image[0].isDataTexture,ae=[];for(let ee=0;ee<6;ee++)!ie&&!me?ae[ee]=u(_.image[ee],!0,s.maxCubemapSize):ae[ee]=me?_.image[ee].image:_.image[ee],ae[ee]=de(_,ae[ee]);const se=ae[0],Ce=a.convert(_.format,_.colorSpace),Ne=a.convert(_.type),Ye=M(_.internalFormat,Ce,Ne,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,oe=$.__version===void 0||I===!0,K=q.dataReady;let ge=E(_,se);Re(i.TEXTURE_CUBE_MAP,_);let ce;if(ie){D&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ye,se.width,se.height);for(let ee=0;ee<6;ee++){ce=ae[ee].mipmaps;for(let ye=0;ye<ce.length;ye++){const Le=ce[ye];_.format!==jt?Ce!==null?D?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,Le.width,Le.height,Ce,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,Ye,Le.width,Le.height,0,Le.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,Le.width,Le.height,Ce,Ne,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,Ye,Le.width,Le.height,0,Ce,Ne,Le.data)}}}else{if(ce=_.mipmaps,D&&oe){ce.length>0&&ge++;const ee=nt(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(me){D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ae[ee].width,ae[ee].height,Ce,Ne,ae[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,ae[ee].width,ae[ee].height,0,Ce,Ne,ae[ee].data);for(let ye=0;ye<ce.length;ye++){const ht=ce[ye].image[ee].image;D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,ht.width,ht.height,Ce,Ne,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,Ye,ht.width,ht.height,0,Ce,Ne,ht.data)}}else{D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce,Ne,ae[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Ce,Ne,ae[ee]);for(let ye=0;ye<ce.length;ye++){const Le=ce[ye];D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,Ce,Ne,Le.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,Ye,Ce,Ne,Le.image[ee])}}}l(_)&&x(i.TEXTURE_CUBE_MAP),$.__version=q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Te(T,_,G,I,q,$){const Z=a.convert(G.format,G.colorSpace),W=a.convert(G.type),Y=M(G.internalFormat,Z,W,G.normalized,G.colorSpace),ie=n.get(_),me=n.get(G);if(me.__renderTarget=_,!ie.__hasExternalTextures){const ae=Math.max(1,_.width>>$),se=Math.max(1,_.height>>$);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,$,Y,ae,se,_.depth,0,Z,W,null):t.texImage2D(q,$,Y,ae,se,0,Z,W,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,q,me.__webglTexture,0,lt(_)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,I,q,me.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(T,_,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const I=_.depthTexture,q=I&&I.isDepthTexture?I.type:null,$=A(_.stencilBuffer,q),Z=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(_),$,_.width,_.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(_),$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,T)}else{const I=_.textures;for(let q=0;q<I.length;q++){const $=I[q],Z=a.convert($.format,$.colorSpace),W=a.convert($.type),Y=M($.internalFormat,Z,W,$.normalized,$.colorSpace);Be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(_),Y,_.width,_.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(T,_,G){const I=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(_.depthTexture);if(q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),I){if(q.__webglInit===void 0&&(q.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Re(i.TEXTURE_CUBE_MAP,_.depthTexture);const ie=a.convert(_.depthTexture.format),me=a.convert(_.depthTexture.type);let ae;_.depthTexture.format===vn?ae=i.DEPTH_COMPONENT24:_.depthTexture.format===Gn&&(ae=i.DEPTH24_STENCIL8);for(let se=0;se<6;se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ae,_.width,_.height,0,ie,me,null)}}else J(_.depthTexture,0);const $=q.__webglTexture,Z=lt(_),W=I?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Y=_.depthTexture.format===Gn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===vn)Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,W,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,Y,W,$,0);else if(_.depthTexture.format===Gn)Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,W,$,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,Y,W,$,0);else throw new Error("Unknown depthTexture format")}function $e(T){const _=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const I=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),I){const q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,I.removeEventListener("dispose",q)};I.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=I}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(G)for(let I=0;I<6;I++)Oe(_.__webglFramebuffer[I],T,I);else{const I=T.texture.mipmaps;I&&I.length>0?Oe(_.__webglFramebuffer[0],T,0):Oe(_.__webglFramebuffer,T,0)}else if(G){_.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[I]),_.__webglDepthbuffer[I]===void 0)_.__webglDepthbuffer[I]=i.createRenderbuffer(),at(_.__webglDepthbuffer[I],T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[I];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,$)}}else{const I=T.texture.mipmaps;if(I&&I.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),at(_.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(T,_,G){const I=n.get(T);_!==void 0&&Te(I.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&$e(T)}function Pe(T){const _=T.texture,G=n.get(T),I=n.get(_);T.addEventListener("dispose",b);const q=T.textures,$=T.isWebGLCubeRenderTarget===!0,Z=q.length>1;if(Z||(I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture()),I.__version=_.version,r.memory.textures++),$){G.__webglFramebuffer=[];for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer[W]=[];for(let Y=0;Y<_.mipmaps.length;Y++)G.__webglFramebuffer[W][Y]=i.createFramebuffer()}else G.__webglFramebuffer[W]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer=[];for(let W=0;W<_.mipmaps.length;W++)G.__webglFramebuffer[W]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Z)for(let W=0,Y=q.length;W<Y;W++){const ie=n.get(q[W]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),r.memory.textures++)}if(T.samples>0&&Be(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let W=0;W<q.length;W++){const Y=q[W];G.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[W]);const ie=a.convert(Y.format,Y.colorSpace),me=a.convert(Y.type),ae=M(Y.internalFormat,ie,me,Y.normalized,Y.colorSpace,T.isXRRenderTarget===!0),se=lt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ae,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,G.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),at(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture),Re(i.TEXTURE_CUBE_MAP,_);for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Te(G.__webglFramebuffer[W][Y],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Y);else Te(G.__webglFramebuffer[W],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);l(_)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){for(let W=0,Y=q.length;W<Y;W++){const ie=q[W],me=n.get(ie);let ae=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,me.__webglTexture),Re(ae,ie),Te(G.__webglFramebuffer,T,ie,i.COLOR_ATTACHMENT0+W,ae,0),l(ie)&&x(ae)}t.unbindTexture()}else{let W=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(W=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,I.__webglTexture),Re(W,_),_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Te(G.__webglFramebuffer[Y],T,_,i.COLOR_ATTACHMENT0,W,Y);else Te(G.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,W,0);l(_)&&x(W),t.unbindTexture()}T.depthBuffer&&$e(T)}function ot(T){const _=T.textures;for(let G=0,I=_.length;G<I;G++){const q=_[G];if(l(q)){const $=y(T),Z=n.get(q).__webglTexture;t.bindTexture($,Z),x($),t.unbindTexture()}}}const tt=[],xt=[];function U(T){if(T.samples>0){if(Be(T)===!1){const _=T.textures,G=T.width,I=T.height;let q=i.COLOR_BUFFER_BIT;const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=n.get(T),W=_.length>1;if(W)for(let ie=0;ie<_.length;ie++)t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer);const Y=T.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let ie=0;ie<_.length;ie++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ie]);const me=n.get(_[ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,G,I,0,0,G,I,q,i.NEAREST),c===!0&&(tt.length=0,xt.length=0,tt.push(i.COLOR_ATTACHMENT0+ie),T.depthBuffer&&T.resolveDepthBuffer===!1&&(tt.push($),xt.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let ie=0;ie<_.length;ie++){t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ie]);const me=n.get(_[ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function lt(T){return Math.min(s.maxSamples,T.samples)}function Be(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ze(T){const _=r.render.frame;m.get(T)!==_&&(m.set(T,_),T.update())}function de(T,_){const G=T.colorSpace,I=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==vs&&G!==wn&&(Ge.getTransfer(G)===Je?(I!==jt||q!==Bt)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",G)),_}function nt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(d.width=T.naturalWidth||T.width,d.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(d.width=T.displayWidth,d.height=T.displayHeight):(d.width=T.width,d.height=T.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.getTextureUnits=j,this.setTextureUnits=P,this.setTexture2D=J,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=le,this.rebindTextures=Ke,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fm(i,e){function t(n,s=wn){let a;const r=Ge.getTransfer(s);if(n===Bt)return i.UNSIGNED_BYTE;if(n===lr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===El)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yl)return i.BYTE;if(n===Sl)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===or)return i.INT;if(n===an)return i.UNSIGNED_INT;if(n===Qt)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===Tl)return i.ALPHA;if(n===Al)return i.RGB;if(n===jt)return i.RGBA;if(n===vn)return i.DEPTH_COMPONENT;if(n===Gn)return i.DEPTH_STENCIL;if(n===wl)return i.RED;if(n===dr)return i.RED_INTEGER;if(n===Vn)return i.RG;if(n===ur)return i.RG_INTEGER;if(n===fr)return i.RGBA_INTEGER;if(n===ds||n===us||n===fs||n===hs)if(r===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ds)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ds)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===us)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===Ma||n===Ea||n===Ta)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Sa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===wa||n===Ca||n===Ra||n===Pa||n===ms||n===Da)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Aa||n===wa)return r===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ca)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ra)return a.COMPRESSED_R11_EAC;if(n===Pa)return a.COMPRESSED_SIGNED_R11_EAC;if(n===ms)return a.COMPRESSED_RG11_EAC;if(n===Da)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===La||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Ga||n===Ha||n===Va||n===Wa||n===Xa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===La)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return r===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===qa||n===$a)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ja)return r===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ya||n===Ka||n===gs||n===Za)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ya)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rn({vertexShader:hm,fragmentShader:pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dt(new Es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gm extends Wn{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,d=null,m=null,p=null,h=null,g=null,f=null;const v=typeof XRWebGLBinding<"u",u=new mm,l={},x=t.getContextAttributes();let y=null,M=null;const A=[],E=[],R=new qe;let b=null;const w=new Ot;w.viewport=new ft;const L=new Ot;L.viewport=new ft;const C=[w,L],N=new Ed;let k=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=A[Q];return ue===void 0&&(ue=new ks,A[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=A[Q];return ue===void 0&&(ue=new ks,A[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=A[Q];return ue===void 0&&(ue=new ks,A[Q]=ue),ue.getHandSpace()};function P(Q){const ue=E.indexOf(Q.inputSource);if(ue===-1)return;const re=A[ue];re!==void 0&&(re.update(Q.inputSource,Q.frame,d||r),re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function F(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",B);for(let Q=0;Q<A.length;Q++){const ue=E[Q];ue!==null&&(E[Q]=null,A[Q].disconnect(ue))}k=null,j=null,u.reset();for(const Q in l)delete l[Q];e.setRenderTarget(y),g=null,h=null,p=null,s=null,M=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||r},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",F),s.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ee=null,we=null;x.depth&&(we=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=x.stencil?Gn:vn,Ee=x.stencil?Ri:an);const Te={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};p=this.getBinding(),h=p.createProjectionLayer(Te),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new nn(h.textureWidth,h.textureHeight,{format:jt,type:Bt,depthTexture:new hi(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new nn(g.framebufferWidth,g.framebufferHeight,{format:jt,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),d=null,r=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function B(Q){for(let ue=0;ue<Q.removed.length;ue++){const re=Q.removed[ue],Ee=E.indexOf(re);Ee>=0&&(E[Ee]=null,A[Ee].disconnect(re))}for(let ue=0;ue<Q.added.length;ue++){const re=Q.added[ue];let Ee=E.indexOf(re);if(Ee===-1){for(let Te=0;Te<A.length;Te++)if(Te>=E.length){E.push(re),Ee=Te;break}else if(E[Te]===null){E[Te]=re,Ee=Te;break}if(Ee===-1)break}const we=A[Ee];we&&we.connect(re)}}const J=new z,te=new z;function ne(Q,ue,re){J.setFromMatrixPosition(ue.matrixWorld),te.setFromMatrixPosition(re.matrixWorld);const Ee=J.distanceTo(te),we=ue.projectionMatrix.elements,Te=re.projectionMatrix.elements,at=we[14]/(we[10]-1),Oe=we[14]/(we[10]+1),$e=(we[9]+1)/we[5],Ke=(we[9]-1)/we[5],Pe=(we[8]-1)/we[0],ot=(Te[8]+1)/Te[0],tt=at*Pe,xt=at*ot,U=Ee/(-Pe+ot),lt=U*-Pe;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(lt),Q.translateZ(U),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Be=at+U,Ze=Oe+U,de=tt-lt,nt=xt+(Ee-lt),T=$e*Oe/Ze*Be,_=Ke*Oe/Ze*Be;Q.projectionMatrix.makePerspective(de,nt,T,_,Be,Ze),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ue=Q.near,re=Q.far;u.texture!==null&&(u.depthNear>0&&(ue=u.depthNear),u.depthFar>0&&(re=u.depthFar)),N.near=L.near=w.near=ue,N.far=L.far=w.far=re,(k!==N.near||j!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,j=N.far),N.layers.mask=Q.layers.mask|6,w.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;const Ee=Q.parent,we=N.cameras;le(N,Ee);for(let Te=0;Te<we.length;Te++)le(we[Te],Ee);we.length===2?ne(N,w,L):N.projectionMatrix.copy(w.projectionMatrix),ve(Q,N,Ee)};function ve(Q,ue,re){re===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=er*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(Q){c=Q,h!==null&&(h.fixedFoveation=Q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Q)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(N)},this.getCameraTexture=function(Q){return l[Q]};let Ue=null;function ze(Q,ue){if(m=ue.getViewerPose(d||r),f=ue,m!==null){const re=m.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let Ee=!1;re.length!==N.cameras.length&&(N.cameras.length=0,Ee=!0);for(let Oe=0;Oe<re.length;Oe++){const $e=re[Oe];let Ke=null;if(g!==null)Ke=g.getViewport($e);else{const ot=p.getViewSubImage(h,$e);Ke=ot.viewport,Oe===0&&(e.setRenderTargetTextures(M,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(M))}let Pe=C[Oe];Pe===void 0&&(Pe=new Ot,Pe.layers.enable(Oe),Pe.viewport=new ft,C[Oe]=Pe),Pe.matrix.fromArray($e.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray($e.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Oe===0&&(N.matrix.copy(Pe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ee===!0&&N.cameras.push(Pe)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){p=n.getBinding();const Oe=p.getDepthInformation(re[0]);Oe&&Oe.isValid&&Oe.texture&&u.init(Oe,s.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),p=n.getBinding();for(let Oe=0;Oe<re.length;Oe++){const $e=re[Oe].camera;if($e){let Ke=l[$e];Ke||(Ke=new Bl,l[$e]=Ke);const Pe=p.getCameraImage($e);Ke.sourceTexture=Pe}}}}for(let re=0;re<A.length;re++){const Ee=E[re],we=A[re];Ee!==null&&we!==void 0&&we.update(Ee,ue,d||r)}Ue&&Ue(Q,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),f=null}const Re=new Hl;Re.setAnimationLoop(ze),this.setAnimationLoop=function(Q){Ue=Q},this.dispose=function(){}}}const vm=new ct,Yl=new De;Yl.set(-1,0,0,0,1,0,0,0,1);function _m(i,e){function t(u,l){u.matrixAutoUpdate===!0&&u.updateMatrix(),l.value.copy(u.matrix)}function n(u,l){l.color.getRGB(u.fogColor.value,kl(i)),l.isFog?(u.fogNear.value=l.near,u.fogFar.value=l.far):l.isFogExp2&&(u.fogDensity.value=l.density)}function s(u,l,x,y,M){l.isNodeMaterial?l.uniformsNeedUpdate=!1:l.isMeshBasicMaterial?a(u,l):l.isMeshLambertMaterial?(a(u,l),l.envMap&&(u.envMapIntensity.value=l.envMapIntensity)):l.isMeshToonMaterial?(a(u,l),p(u,l)):l.isMeshPhongMaterial?(a(u,l),m(u,l),l.envMap&&(u.envMapIntensity.value=l.envMapIntensity)):l.isMeshStandardMaterial?(a(u,l),h(u,l),l.isMeshPhysicalMaterial&&g(u,l,M)):l.isMeshMatcapMaterial?(a(u,l),f(u,l)):l.isMeshDepthMaterial?a(u,l):l.isMeshDistanceMaterial?(a(u,l),v(u,l)):l.isMeshNormalMaterial?a(u,l):l.isLineBasicMaterial?(r(u,l),l.isLineDashedMaterial&&o(u,l)):l.isPointsMaterial?c(u,l,x,y):l.isSpriteMaterial?d(u,l):l.isShadowMaterial?(u.color.value.copy(l.color),u.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(u,l){u.opacity.value=l.opacity,l.color&&u.diffuse.value.copy(l.color),l.emissive&&u.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(u.map.value=l.map,t(l.map,u.mapTransform)),l.alphaMap&&(u.alphaMap.value=l.alphaMap,t(l.alphaMap,u.alphaMapTransform)),l.bumpMap&&(u.bumpMap.value=l.bumpMap,t(l.bumpMap,u.bumpMapTransform),u.bumpScale.value=l.bumpScale,l.side===Lt&&(u.bumpScale.value*=-1)),l.normalMap&&(u.normalMap.value=l.normalMap,t(l.normalMap,u.normalMapTransform),u.normalScale.value.copy(l.normalScale),l.side===Lt&&u.normalScale.value.negate()),l.displacementMap&&(u.displacementMap.value=l.displacementMap,t(l.displacementMap,u.displacementMapTransform),u.displacementScale.value=l.displacementScale,u.displacementBias.value=l.displacementBias),l.emissiveMap&&(u.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,u.emissiveMapTransform)),l.specularMap&&(u.specularMap.value=l.specularMap,t(l.specularMap,u.specularMapTransform)),l.alphaTest>0&&(u.alphaTest.value=l.alphaTest);const x=e.get(l),y=x.envMap,M=x.envMapRotation;y&&(u.envMap.value=y,u.envMapRotation.value.setFromMatrix4(vm.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply(Yl),u.reflectivity.value=l.reflectivity,u.ior.value=l.ior,u.refractionRatio.value=l.refractionRatio),l.lightMap&&(u.lightMap.value=l.lightMap,u.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,u.lightMapTransform)),l.aoMap&&(u.aoMap.value=l.aoMap,u.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,u.aoMapTransform))}function r(u,l){u.diffuse.value.copy(l.color),u.opacity.value=l.opacity,l.map&&(u.map.value=l.map,t(l.map,u.mapTransform))}function o(u,l){u.dashSize.value=l.dashSize,u.totalSize.value=l.dashSize+l.gapSize,u.scale.value=l.scale}function c(u,l,x,y){u.diffuse.value.copy(l.color),u.opacity.value=l.opacity,u.size.value=l.size*x,u.scale.value=y*.5,l.map&&(u.map.value=l.map,t(l.map,u.uvTransform)),l.alphaMap&&(u.alphaMap.value=l.alphaMap,t(l.alphaMap,u.alphaMapTransform)),l.alphaTest>0&&(u.alphaTest.value=l.alphaTest)}function d(u,l){u.diffuse.value.copy(l.color),u.opacity.value=l.opacity,u.rotation.value=l.rotation,l.map&&(u.map.value=l.map,t(l.map,u.mapTransform)),l.alphaMap&&(u.alphaMap.value=l.alphaMap,t(l.alphaMap,u.alphaMapTransform)),l.alphaTest>0&&(u.alphaTest.value=l.alphaTest)}function m(u,l){u.specular.value.copy(l.specular),u.shininess.value=Math.max(l.shininess,1e-4)}function p(u,l){l.gradientMap&&(u.gradientMap.value=l.gradientMap)}function h(u,l){u.metalness.value=l.metalness,l.metalnessMap&&(u.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,u.metalnessMapTransform)),u.roughness.value=l.roughness,l.roughnessMap&&(u.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,u.roughnessMapTransform)),l.envMap&&(u.envMapIntensity.value=l.envMapIntensity)}function g(u,l,x){u.ior.value=l.ior,l.sheen>0&&(u.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),u.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(u.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,u.sheenColorMapTransform)),l.sheenRoughnessMap&&(u.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,u.sheenRoughnessMapTransform))),l.clearcoat>0&&(u.clearcoat.value=l.clearcoat,u.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(u.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,u.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(u.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Lt&&u.clearcoatNormalScale.value.negate())),l.dispersion>0&&(u.dispersion.value=l.dispersion),l.iridescence>0&&(u.iridescence.value=l.iridescence,u.iridescenceIOR.value=l.iridescenceIOR,u.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(u.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,u.iridescenceMapTransform)),l.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),l.transmission>0&&(u.transmission.value=l.transmission,u.transmissionSamplerMap.value=x.texture,u.transmissionSamplerSize.value.set(x.width,x.height),l.transmissionMap&&(u.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,u.transmissionMapTransform)),u.thickness.value=l.thickness,l.thicknessMap&&(u.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=l.attenuationDistance,u.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(u.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(u.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=l.specularIntensity,u.specularColor.value.copy(l.specularColor),l.specularColorMap&&(u.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,u.specularColorMapTransform)),l.specularIntensityMap&&(u.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,u.specularIntensityMapTransform))}function f(u,l){l.matcap&&(u.matcap.value=l.matcap)}function v(u,l){const x=e.get(l).light;u.referencePosition.value.setFromMatrixPosition(x.matrixWorld),u.nearDistance.value=x.shadow.camera.near,u.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xm(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const M=y.program;n.uniformBlockBinding(x,M)}function d(x,y){let M=s[x.id];M===void 0&&(f(x),M=m(x),s[x.id]=M,x.addEventListener("dispose",u));const A=y.program;n.updateUBOMapping(x,A);const E=e.render.frame;a[x.id]!==E&&(h(x),a[x.id]=E)}function m(x){const y=p();x.__bindingPointIndex=y;const M=i.createBuffer(),A=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function p(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=s[x.id],M=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,R=M.length;E<R;E++){const b=Array.isArray(M[E])?M[E]:[M[E]];for(let w=0,L=b.length;w<L;w++){const C=b[w];if(g(C,E,w,A)===!0){const N=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let j=0;for(let P=0;P<k.length;P++){const F=k[P],B=v(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,N+j,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):ArrayBuffer.isView(F)?C.__data.set(new F.constructor(F.buffer,F.byteOffset,C.__data.length)):(F.toArray(C.__data,j),j+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(x,y,M,A){const E=x.value,R=y+"_"+M;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:ArrayBuffer.isView(E)?A[R]=E.slice():A[R]=E.clone(),!0;{const b=A[R];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return A[R]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(b.equals(E)===!1)return b.copy(E),!0}}return!1}function f(x){const y=x.uniforms;let M=0;const A=16;for(let R=0,b=y.length;R<b;R++){const w=Array.isArray(y[R])?y[R]:[y[R]];for(let L=0,C=w.length;L<C;L++){const N=w[L],k=Array.isArray(N.value)?N.value:[N.value];for(let j=0,P=k.length;j<P;j++){const F=k[j],B=v(F),J=M%A,te=J%B.boundary,ne=J+te;M+=te,ne!==0&&A-ne<B.storage&&(M+=A-ne),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=B.storage}}}const E=M%A;return E>0&&(M+=A-E),x.__size=M,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",x),y}function u(x){const y=x.target;y.removeEventListener("dispose",u);const M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function l(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},a={}}return{bind:c,update:d,dispose:l}}const bm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kt=null;function ym(){return Kt===null&&(Kt=new ad(bm,16,16,Vn,gn),Kt.name="DFG_LUT",Kt.minFilter=wt,Kt.magFilter=wt,Kt.wrapS=hn,Kt.wrapT=hn,Kt.generateMipmaps=!1,Kt.needsUpdate=!0),Kt}class Sm{constructor(e={}){const{canvas:t=Fc(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:g=Bt}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const v=g,u=new Set([fr,ur,dr]),l=new Set([Bt,an,Ci,Ri,lr,cr]),x=new Uint32Array(4),y=new Int32Array(4),M=new z;let A=null,E=null;const R=[],b=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let C=!1,N=null;this._outputColorSpace=Gt;let k=0,j=0,P=null,F=-1,B=null;const J=new ft,te=new ft;let ne=null;const le=new Ve(0);let ve=0,Ue=t.width,ze=t.height,Re=1,Q=null,ue=null;const re=new ft(0,0,Ue,ze),Ee=new ft(0,0,Ue,ze);let we=!1;const Te=new _r;let at=!1,Oe=!1;const $e=new ct,Ke=new z,Pe=new ft,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function xt(){return P===null?Re:1}let U=n;function lt(S,O){return t.getContext(S,O)}try{const S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ar}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Le,!1),U===null){const O="webgl2";if(U=lt(O,S),U===null)throw lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw je("WebGLRenderer: "+S.message),S}let Be,Ze,de,nt,T,_,G,I,q,$,Z,W,Y,ie,me,ae,se,Ce,Ne,Ye,D,oe,K;function ge(){Be=new yh(U),Be.init(),D=new fm(U,Be),Ze=new hh(U,Be,e,D),de=new dm(U,Be),Ze.reversedDepthBuffer&&h&&de.buffers.depth.setReversed(!0),nt=new Eh(U),T=new Kp,_=new um(U,Be,de,T,Ze,D,nt),G=new bh(L),I=new wd(U),oe=new uh(U,I),q=new Sh(U,I,nt,oe),$=new Ah(U,q,I,oe,nt),Ce=new Th(U,Ze,_),me=new ph(T),Z=new Yp(L,G,Be,Ze,oe,me),W=new _m(L,T),Y=new Jp,ie=new sm(Be),se=new dh(L,G,de,$,f,c),ae=new cm(L,$,Ze),K=new xm(U,nt,Ze,de),Ne=new fh(U,Be,nt),Ye=new Mh(U,Be,nt),nt.programs=Z.programs,L.capabilities=Ze,L.extensions=Be,L.properties=T,L.renderLists=Y,L.shadowMap=ae,L.state=de,L.info=nt}ge(),v!==Bt&&(w=new Ch(v,t.width,t.height,s,a));const ce=new gm(L,U);this.xr=ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(S){S!==void 0&&(Re=S,this.setSize(Ue,ze,!1))},this.getSize=function(S){return S.set(Ue,ze)},this.setSize=function(S,O,X=!0){if(ce.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=S,ze=O,t.width=Math.floor(S*Re),t.height=Math.floor(O*Re),X===!0&&(t.style.width=S+"px",t.style.height=O+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(Ue*Re,ze*Re).floor()},this.setDrawingBufferSize=function(S,O,X){Ue=S,ze=O,Re=X,t.width=Math.floor(S*X),t.height=Math.floor(O*X),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(v===Bt){je("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){Ae("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(J)},this.getViewport=function(S){return S.copy(re)},this.setViewport=function(S,O,X,H){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,O,X,H),de.viewport(J.copy(re).multiplyScalar(Re).round())},this.getScissor=function(S){return S.copy(Ee)},this.setScissor=function(S,O,X,H){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,O,X,H),de.scissor(te.copy(Ee).multiplyScalar(Re).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(S){de.setScissorTest(we=S)},this.setOpaqueSort=function(S){Q=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,X=!0){let H=0;if(S){let V=!1;if(P!==null){const pe=P.texture.format;V=u.has(pe)}if(V){const pe=P.texture.type,xe=l.has(pe),he=se.getClearColor(),be=se.getClearAlpha(),Se=he.r,Ie=he.g,ke=he.b;xe?(x[0]=Se,x[1]=Ie,x[2]=ke,x[3]=be,U.clearBufferuiv(U.COLOR,0,x)):(y[0]=Se,y[1]=Ie,y[2]=ke,y[3]=be,U.clearBufferiv(U.COLOR,0,y))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),se.dispose(),Y.dispose(),ie.dispose(),T.dispose(),G.dispose(),$.dispose(),oe.dispose(),K.dispose(),Z.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Cr),ce.removeEventListener("sessionend",Rr),Dn.stop()};function ee(S){S.preventDefault(),Wr("WebGLRenderer: Context Lost."),C=!0}function ye(){Wr("WebGLRenderer: Context Restored."),C=!1;const S=nt.autoReset,O=ae.enabled,X=ae.autoUpdate,H=ae.needsUpdate,V=ae.type;ge(),nt.autoReset=S,ae.enabled=O,ae.autoUpdate=X,ae.needsUpdate=H,ae.type=V}function Le(S){je("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ht(S){const O=S.target;O.removeEventListener("dispose",ht),Qe(O)}function Qe(S){on(S),T.remove(S)}function on(S){const O=T.get(S).programs;O!==void 0&&(O.forEach(function(X){Z.releaseProgram(X)}),S.isShaderMaterial&&Z.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,X,H,V,pe){O===null&&(O=ot);const xe=V.isMesh&&V.matrixWorld.determinant()<0,he=Jl(S,O,X,H,V);de.setMaterial(H,xe);let be=X.index,Se=1;if(H.wireframe===!0){if(be=q.getWireframeAttribute(X),be===void 0)return;Se=2}const Ie=X.drawRange,ke=X.attributes.position;let Me=Ie.start*Se,et=(Ie.start+Ie.count)*Se;pe!==null&&(Me=Math.max(Me,pe.start*Se),et=Math.min(et,(pe.start+pe.count)*Se)),be!==null?(Me=Math.max(Me,0),et=Math.min(et,be.count)):ke!=null&&(Me=Math.max(Me,0),et=Math.min(et,ke.count));const pt=et-Me;if(pt<0||pt===1/0)return;oe.setup(V,H,he,X,be);let ut,it=Ne;if(be!==null&&(ut=I.get(be),it=Ye,it.setIndex(ut)),V.isMesh)H.wireframe===!0?(de.setLineWidth(H.wireframeLinewidth*xt()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(V.isLine){let Et=H.linewidth;Et===void 0&&(Et=1),de.setLineWidth(Et*xt()),V.isLineSegments?it.setMode(U.LINES):V.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else V.isPoints?it.setMode(U.POINTS):V.isSprite&&it.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(Be.get("WEBGL_multi_draw"))it.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Et=V._multiDrawStarts,_e=V._multiDrawCounts,It=V._multiDrawCount,We=be?I.get(be).bytesPerElement:1,kt=T.get(H).currentProgram.getUniforms();for(let $t=0;$t<It;$t++)kt.setValue(U,"_gl_DrawID",$t),it.render(Et[$t]/We,_e[$t])}else if(V.isInstancedMesh)it.renderInstances(Me,pt,V.count);else if(X.isInstancedBufferGeometry){const Et=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_e=Math.min(X.instanceCount,Et);it.renderInstances(Me,pt,_e)}else it.render(Me,pt)};function qt(S,O,X){S.transparent===!0&&S.side===Jt&&S.forceSinglePass===!1?(S.side=Lt,S.needsUpdate=!0,Fi(S,O,X),S.side=Rn,S.needsUpdate=!0,Fi(S,O,X),S.side=Jt):Fi(S,O,X)}this.compile=function(S,O,X=null){X===null&&(X=S),E=ie.get(X),E.init(O),b.push(E),X.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),S!==X&&S.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();const H=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pe=V.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const he=pe[xe];qt(he,X,V),H.add(he)}else qt(pe,X,V),H.add(pe)}),E=b.pop(),H},this.compileAsync=function(S,O,X=null){const H=this.compile(S,O,X);return new Promise(V=>{function pe(){if(H.forEach(function(xe){T.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){V(S);return}setTimeout(pe,10)}Be.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ws=null;function Kl(S){ws&&ws(S)}function Cr(){Dn.stop()}function Rr(){Dn.start()}const Dn=new Hl;Dn.setAnimationLoop(Kl),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(S){ws=S,ce.setAnimationLoop(S),S===null?Dn.stop():Dn.start()},ce.addEventListener("sessionstart",Cr),ce.addEventListener("sessionend",Rr),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(S,O);const X=ce.enabled===!0&&ce.isPresenting===!0,H=w!==null&&(P===null||X)&&w.begin(L,P);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(L,S,O,P),E=ie.get(S,b.length),E.init(O),E.state.textureUnits=_.getTextureUnits(),b.push(E),$e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Te.setFromProjectionMatrix($e,en,O.reversedDepth),Oe=this.localClippingEnabled,at=me.init(this.clippingPlanes,Oe),A=Y.get(S,R.length),A.init(),R.push(A),ce.enabled===!0&&ce.isPresenting===!0){const xe=L.xr.getDepthSensingMesh();xe!==null&&Cs(xe,O,-1/0,L.sortObjects)}Cs(S,O,0,L.sortObjects),A.finish(),L.sortObjects===!0&&A.sort(Q,ue),tt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,tt&&se.addToRenderList(A,S),this.info.render.frame++,at===!0&&me.beginShadows();const V=E.state.shadowsArray;if(ae.render(V,S,O),at===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&w.hasRenderPass())===!1){const xe=A.opaque,he=A.transmissive;if(E.setupLights(),O.isArrayCamera){const be=O.cameras;if(he.length>0)for(let Se=0,Ie=be.length;Se<Ie;Se++){const ke=be[Se];Dr(xe,he,S,ke)}tt&&se.render(S);for(let Se=0,Ie=be.length;Se<Ie;Se++){const ke=be[Se];Pr(A,S,ke,ke.viewport)}}else he.length>0&&Dr(xe,he,S,O),tt&&se.render(S),Pr(A,S,O)}P!==null&&j===0&&(_.updateMultisampleRenderTarget(P),_.updateRenderTargetMipmap(P)),H&&w.end(L),S.isScene===!0&&S.onAfterRender(L,S,O),oe.resetDefaultState(),F=-1,B=null,b.pop(),b.length>0?(E=b[b.length-1],_.setTextureUnits(E.state.textureUnits),at===!0&&me.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,N!==null&&N.renderEnd()};function Cs(S,O,X,H){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Te.intersectsSprite(S)){H&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4($e);const xe=$.update(S),he=S.material;he.visible&&A.push(S,xe,he,X,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Te.intersectsObject(S))){const xe=$.update(S),he=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Pe.copy(xe.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4($e)),Array.isArray(he)){const be=xe.groups;for(let Se=0,Ie=be.length;Se<Ie;Se++){const ke=be[Se],Me=he[ke.materialIndex];Me&&Me.visible&&A.push(S,xe,Me,X,Pe.z,ke)}}else he.visible&&A.push(S,xe,he,X,Pe.z,null)}}const pe=S.children;for(let xe=0,he=pe.length;xe<he;xe++)Cs(pe[xe],O,X,H)}function Pr(S,O,X,H){const{opaque:V,transmissive:pe,transparent:xe}=S;E.setupLightsView(X),at===!0&&me.setGlobalState(L.clippingPlanes,X),H&&de.viewport(J.copy(H)),V.length>0&&Ni(V,O,X),pe.length>0&&Ni(pe,O,X),xe.length>0&&Ni(xe,O,X),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Dr(S,O,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const Me=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new nn(1,1,{generateMipmaps:!0,type:Me?gn:Bt,minFilter:zn,samples:Math.max(4,Ze.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const pe=E.state.transmissionRenderTarget[H.id],xe=H.viewport||J;pe.setSize(xe.z*L.transmissionResolutionScale,xe.w*L.transmissionResolutionScale);const he=L.getRenderTarget(),be=L.getActiveCubeFace(),Se=L.getActiveMipmapLevel();L.setRenderTarget(pe),L.getClearColor(le),ve=L.getClearAlpha(),ve<1&&L.setClearColor(16777215,.5),L.clear(),tt&&se.render(X);const Ie=L.toneMapping;L.toneMapping=tn;const ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),at===!0&&me.setGlobalState(L.clippingPlanes,H),Ni(S,X,H),_.updateMultisampleRenderTarget(pe),_.updateRenderTargetMipmap(pe),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let et=0,pt=O.length;et<pt;et++){const ut=O[et],{object:it,geometry:Et,material:_e,group:It}=ut;if(_e.side===Jt&&it.layers.test(H.layers)){const We=_e.side;_e.side=Lt,_e.needsUpdate=!0,Lr(it,X,H,Et,_e,It),_e.side=We,_e.needsUpdate=!0,Me=!0}}Me===!0&&(_.updateMultisampleRenderTarget(pe),_.updateRenderTargetMipmap(pe))}L.setRenderTarget(he,be,Se),L.setClearColor(le,ve),ke!==void 0&&(H.viewport=ke),L.toneMapping=Ie}function Ni(S,O,X){const H=O.isScene===!0?O.overrideMaterial:null;for(let V=0,pe=S.length;V<pe;V++){const xe=S[V],{object:he,geometry:be,group:Se}=xe;let Ie=xe.material;Ie.allowOverride===!0&&H!==null&&(Ie=H),he.layers.test(X.layers)&&Lr(he,O,X,be,Ie,Se)}}function Lr(S,O,X,H,V,pe){S.onBeforeRender(L,O,X,H,V,pe),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(L,O,X,H,S,pe),V.transparent===!0&&V.side===Jt&&V.forceSinglePass===!1?(V.side=Lt,V.needsUpdate=!0,L.renderBufferDirect(X,O,H,V,S,pe),V.side=Rn,V.needsUpdate=!0,L.renderBufferDirect(X,O,H,V,S,pe),V.side=Jt):L.renderBufferDirect(X,O,H,V,S,pe),S.onAfterRender(L,O,X,H,V,pe)}function Fi(S,O,X){O.isScene!==!0&&(O=ot);const H=T.get(S),V=E.state.lights,pe=E.state.shadowsArray,xe=V.state.version,he=Z.getParameters(S,V.state,pe,O,X,E.state.lightProbeGridArray),be=Z.getProgramCacheKey(he);let Se=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Ie=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=G.get(S.envMap||H.environment,Ie),H.envMapRotation=H.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Se===void 0&&(S.addEventListener("dispose",ht),Se=new Map,H.programs=Se);let ke=Se.get(be);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===xe)return Ur(S,he),ke}else he.uniforms=Z.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,X,he),S.onBeforeCompile(he,L),ke=Z.acquireProgram(he,be),Se.set(be,ke),H.uniforms=he.uniforms;const Me=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Me.clippingPlanes=me.uniform),Ur(S,he),H.needsLights=ec(S),H.lightsStateVersion=xe,H.needsLights&&(Me.ambientLightColor.value=V.state.ambient,Me.lightProbe.value=V.state.probe,Me.directionalLights.value=V.state.directional,Me.directionalLightShadows.value=V.state.directionalShadow,Me.spotLights.value=V.state.spot,Me.spotLightShadows.value=V.state.spotShadow,Me.rectAreaLights.value=V.state.rectArea,Me.ltc_1.value=V.state.rectAreaLTC1,Me.ltc_2.value=V.state.rectAreaLTC2,Me.pointLights.value=V.state.point,Me.pointLightShadows.value=V.state.pointShadow,Me.hemisphereLights.value=V.state.hemi,Me.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Me.spotLightMatrix.value=V.state.spotLightMatrix,Me.spotLightMap.value=V.state.spotLightMap,Me.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=ke,H.uniformsList=null,ke}function Ir(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=ps.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Ur(S,O){const X=T.get(S);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Zl(S,O){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(O.matrixWorld);for(let X=0,H=S.length;X<H;X++){const V=S[X];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function Jl(S,O,X,H,V){O.isScene!==!0&&(O=ot),_.resetTextureUnits();const pe=O.fog,xe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,he=P===null?L.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ge.workingColorSpace,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Se=G.get(H.envMap||xe,be),Ie=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Me=!!X.morphAttributes.position,et=!!X.morphAttributes.normal,pt=!!X.morphAttributes.color;let ut=tn;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ut=L.toneMapping);const it=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Et=it!==void 0?it.length:0,_e=T.get(H),It=E.state.lights;if(at===!0&&(Oe===!0||S!==B)){const rt=S===B&&H.id===F;me.setState(H,S,rt)}let We=!1;H.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==It.state.version||_e.outputColorSpace!==he||V.isBatchedMesh&&_e.batching===!1||!V.isBatchedMesh&&_e.batching===!0||V.isBatchedMesh&&_e.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&_e.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&_e.instancing===!1||!V.isInstancedMesh&&_e.instancing===!0||V.isSkinnedMesh&&_e.skinning===!1||!V.isSkinnedMesh&&_e.skinning===!0||V.isInstancedMesh&&_e.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&_e.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&_e.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&_e.instancingMorph===!1&&V.morphTexture!==null||_e.envMap!==Se||H.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==me.numPlanes||_e.numIntersection!==me.numIntersection)||_e.vertexAlphas!==Ie||_e.vertexTangents!==ke||_e.morphTargets!==Me||_e.morphNormals!==et||_e.morphColors!==pt||_e.toneMapping!==ut||_e.morphTargetsCount!==Et||!!_e.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,_e.__version=H.version);let kt=_e.currentProgram;We===!0&&(kt=Fi(H,O,V),N&&H.isNodeMaterial&&N.onUpdateProgram(H,kt,_e));let $t=!1,_n=!1,jn=!1;const st=kt.getUniforms(),mt=_e.uniforms;if(de.useProgram(kt.program)&&($t=!0,_n=!0,jn=!0),H.id!==F&&(F=H.id,_n=!0),_e.needsLights){const rt=Zl(E.state.lightProbeGridArray,V);_e.lightProbeGrid!==rt&&(_e.lightProbeGrid=rt,_n=!0)}if($t||B!==S){de.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),st.setValue(U,"projectionMatrix",S.projectionMatrix),st.setValue(U,"viewMatrix",S.matrixWorldInverse);const bn=st.map.cameraPosition;bn!==void 0&&bn.setValue(U,Ke.setFromMatrixPosition(S.matrixWorld)),Ze.logarithmicDepthBuffer&&st.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&st.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,_n=!0,jn=!0)}if(_e.needsLights&&(It.state.directionalShadowMap.length>0&&st.setValue(U,"directionalShadowMap",It.state.directionalShadowMap,_),It.state.spotShadowMap.length>0&&st.setValue(U,"spotShadowMap",It.state.spotShadowMap,_),It.state.pointShadowMap.length>0&&st.setValue(U,"pointShadowMap",It.state.pointShadowMap,_)),V.isSkinnedMesh){st.setOptional(U,V,"bindMatrix"),st.setOptional(U,V,"bindMatrixInverse");const rt=V.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),st.setValue(U,"boneTexture",rt.boneTexture,_))}V.isBatchedMesh&&(st.setOptional(U,V,"batchingTexture"),st.setValue(U,"batchingTexture",V._matricesTexture,_),st.setOptional(U,V,"batchingIdTexture"),st.setValue(U,"batchingIdTexture",V._indirectTexture,_),st.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&st.setValue(U,"batchingColorTexture",V._colorsTexture,_));const xn=X.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Ce.update(V,X,kt),(_n||_e.receiveShadow!==V.receiveShadow)&&(_e.receiveShadow=V.receiveShadow,st.setValue(U,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(mt.envMapIntensity.value=O.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=ym()),_n){if(st.setValue(U,"toneMappingExposure",L.toneMappingExposure),_e.needsLights&&Ql(mt,jn),pe&&H.fog===!0&&W.refreshFogUniforms(mt,pe),W.refreshMaterialUniforms(mt,H,Re,ze,E.state.transmissionRenderTarget[S.id]),_e.needsLights&&_e.lightProbeGrid){const rt=_e.lightProbeGrid;mt.probesSH.value=rt.texture,mt.probesMin.value.copy(rt.boundingBox.min),mt.probesMax.value.copy(rt.boundingBox.max),mt.probesResolution.value.copy(rt.resolution)}ps.upload(U,Ir(_e),mt,_)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ps.upload(U,Ir(_e),mt,_),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&st.setValue(U,"center",V.center),st.setValue(U,"modelViewMatrix",V.modelViewMatrix),st.setValue(U,"normalMatrix",V.normalMatrix),st.setValue(U,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const rt=H.uniformsGroups;for(let bn=0,qn=rt.length;bn<qn;bn++){const Nr=rt[bn];K.update(Nr,kt),K.bind(Nr,kt)}}return kt}function Ql(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function ec(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,O,X){const H=T.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),T.get(S.texture).__webglTexture=O,T.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const X=T.get(S);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const tc=U.createFramebuffer();this.setRenderTarget=function(S,O=0,X=0){P=S,k=O,j=X;let H=null,V=!1,pe=!1;if(S){const he=T.get(S);if(he.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(U.FRAMEBUFFER,he.__webglFramebuffer),J.copy(S.viewport),te.copy(S.scissor),ne=S.scissorTest,de.viewport(J),de.scissor(te),de.setScissorTest(ne),F=-1;return}else if(he.__webglFramebuffer===void 0)_.setupRenderTarget(S);else if(he.__hasExternalTextures)_.rebindTextures(S,T.get(S.texture).__webglTexture,T.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ie=S.depthTexture;if(he.__boundDepthTexture!==Ie){if(Ie!==null&&T.has(Ie)&&(S.width!==Ie.image.width||S.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(S)}}const be=S.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(pe=!0);const Se=T.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Se[O])?H=Se[O][X]:H=Se[O],V=!0):S.samples>0&&_.useMultisampledRTT(S)===!1?H=T.get(S).__webglMultisampledFramebuffer:Array.isArray(Se)?H=Se[X]:H=Se,J.copy(S.viewport),te.copy(S.scissor),ne=S.scissorTest}else J.copy(re).multiplyScalar(Re).floor(),te.copy(Ee).multiplyScalar(Re).floor(),ne=we;if(X!==0&&(H=tc),de.bindFramebuffer(U.FRAMEBUFFER,H)&&de.drawBuffers(S,H),de.viewport(J),de.scissor(te),de.setScissorTest(ne),V){const he=T.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,he.__webglTexture,X)}else if(pe){const he=O;for(let be=0;be<S.textures.length;be++){const Se=T.get(S.textures[be]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+be,Se.__webglTexture,X,he)}}else if(S!==null&&X!==0){const he=T.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,X)}F=-1},this.readRenderTargetPixels=function(S,O,X,H,V,pe,xe,he=0){if(!(S&&S.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=T.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){de.bindFramebuffer(U.FRAMEBUFFER,be);try{const Se=S.textures[he],Ie=Se.format,ke=Se.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he),!Ze.textureFormatReadable(Ie)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(ke)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-H&&X>=0&&X<=S.height-V&&U.readPixels(O,X,H,V,D.convert(Ie),D.convert(ke),pe)}finally{const Se=P!==null?T.get(P).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(S,O,X,H,V,pe,xe,he=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=T.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be)if(O>=0&&O<=S.width-H&&X>=0&&X<=S.height-V){de.bindFramebuffer(U.FRAMEBUFFER,be);const Se=S.textures[he],Ie=Se.format,ke=Se.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he),!Ze.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.bufferData(U.PIXEL_PACK_BUFFER,pe.byteLength,U.STREAM_READ),U.readPixels(O,X,H,V,D.convert(Ie),D.convert(ke),0);const et=P!==null?T.get(P).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,et);const pt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Oc(U,pt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pe),U.deleteBuffer(Me),U.deleteSync(pt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,X=0){const H=Math.pow(2,-X),V=Math.floor(S.image.width*H),pe=Math.floor(S.image.height*H),xe=O!==null?O.x:0,he=O!==null?O.y:0;_.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,xe,he,V,pe),de.unbindTexture()};const nc=U.createFramebuffer(),ic=U.createFramebuffer();this.copyTextureToTexture=function(S,O,X=null,H=null,V=0,pe=0){let xe,he,be,Se,Ie,ke,Me,et,pt;const ut=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(X!==null)xe=X.max.x-X.min.x,he=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Se=X.min.x,Ie=X.min.y,ke=X.isBox3?X.min.z:0;else{const mt=Math.pow(2,-V);xe=Math.floor(ut.width*mt),he=Math.floor(ut.height*mt),S.isDataArrayTexture?be=ut.depth:S.isData3DTexture?be=Math.floor(ut.depth*mt):be=1,Se=0,Ie=0,ke=0}H!==null?(Me=H.x,et=H.y,pt=H.z):(Me=0,et=0,pt=0);const it=D.convert(O.format),Et=D.convert(O.type);let _e;O.isData3DTexture?(_.setTexture3D(O,0),_e=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(_.setTexture2DArray(O,0),_e=U.TEXTURE_2D_ARRAY):(_.setTexture2D(O,0),_e=U.TEXTURE_2D),de.activeTexture(U.TEXTURE0),de.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),de.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),de.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const It=de.getParameter(U.UNPACK_ROW_LENGTH),We=de.getParameter(U.UNPACK_IMAGE_HEIGHT),kt=de.getParameter(U.UNPACK_SKIP_PIXELS),$t=de.getParameter(U.UNPACK_SKIP_ROWS),_n=de.getParameter(U.UNPACK_SKIP_IMAGES);de.pixelStorei(U.UNPACK_ROW_LENGTH,ut.width),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut.height),de.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),de.pixelStorei(U.UNPACK_SKIP_ROWS,Ie),de.pixelStorei(U.UNPACK_SKIP_IMAGES,ke);const jn=S.isDataArrayTexture||S.isData3DTexture,st=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const mt=T.get(S),xn=T.get(O),rt=T.get(mt.__renderTarget),bn=T.get(xn.__renderTarget);de.bindFramebuffer(U.READ_FRAMEBUFFER,rt.__webglFramebuffer),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let qn=0;qn<be;qn++)jn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,T.get(S).__webglTexture,V,ke+qn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,T.get(O).__webglTexture,pe,pt+qn)),U.blitFramebuffer(Se,Ie,xe,he,Me,et,xe,he,U.DEPTH_BUFFER_BIT,U.NEAREST);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||T.has(S)){const mt=T.get(S),xn=T.get(O);de.bindFramebuffer(U.READ_FRAMEBUFFER,nc),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,ic);for(let rt=0;rt<be;rt++)jn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.__webglTexture,V,ke+rt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mt.__webglTexture,V),st?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xn.__webglTexture,pe,pt+rt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xn.__webglTexture,pe),V!==0?U.blitFramebuffer(Se,Ie,xe,he,Me,et,xe,he,U.COLOR_BUFFER_BIT,U.NEAREST):st?U.copyTexSubImage3D(_e,pe,Me,et,pt+rt,Se,Ie,xe,he):U.copyTexSubImage2D(_e,pe,Me,et,Se,Ie,xe,he);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else st?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(_e,pe,Me,et,pt,xe,he,be,it,Et,ut.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(_e,pe,Me,et,pt,xe,he,be,it,ut.data):U.texSubImage3D(_e,pe,Me,et,pt,xe,he,be,it,Et,ut):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pe,Me,et,xe,he,it,Et,ut.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pe,Me,et,ut.width,ut.height,it,ut.data):U.texSubImage2D(U.TEXTURE_2D,pe,Me,et,xe,he,it,Et,ut);de.pixelStorei(U.UNPACK_ROW_LENGTH,It),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,We),de.pixelStorei(U.UNPACK_SKIP_PIXELS,kt),de.pixelStorei(U.UNPACK_SKIP_ROWS,$t),de.pixelStorei(U.UNPACK_SKIP_IMAGES,_n),pe===0&&O.generateMipmaps&&U.generateMipmap(_e),de.unbindTexture()},this.initRenderTarget=function(S){T.get(S).__webglFramebuffer===void 0&&_.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?_.setTextureCube(S,0):S.isData3DTexture?_.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?_.setTexture2DArray(S,0):_.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){k=0,j=0,P=null,de.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const jo={render(i){const e=i.personal;return`
      <section id="hero" class="hero-section">
        <div class="container hero-container grid-2">
          <div class="hero-content">
            <img id="hero-profile-pic" class="hero-avatar-image" src="${e.profilePhoto||"/assets/images/profile.jpg"}" onerror="this.src='/assets/images/profile.jpg'">
            <h1 class="hero-title">
              <span class="sub-title">CIVIL CAD & BIM</span>
              <span class="main-name text-white" id="hero-name">${e.fullName}</span>
            </h1>
            <p class="hero-lead text-cyan monospace-font" id="hero-title-text">${e.title}</p>
            <div class="hero-info-grid monospace-font">
              <div class="info-item"><i class="fa-solid fa-location-dot"></i> <span id="hero-loc">${e.location}</span></div>
              <div class="info-item"><i class="fa-solid fa-envelope"></i> <span id="hero-email">${e.email}</span></div>
              <div class="info-item"><i class="fa-solid fa-phone"></i> <span id="hero-phone">${e.phone}</span></div>
            </div>
            <div class="hero-actions">
              <a href="${e.resumeUrl||"#resume"}" id="hero-resume-btn" download class="btn btn-primary"><i class="fa-solid fa-file-pdf"></i> Download Resume</a>
              <a href="#projects" class="btn btn-secondary"><i class="fa-solid fa-compass"></i> View Projects</a>
              <a href="#contact" class="btn btn-outline"><i class="fa-solid fa-paper-plane"></i> Hire Me</a>
            </div>
          </div>
          <div class="hero-visual">
            <div class="blueprint-canvas-container">
              <!-- Canvas to render 3D rotating structural wireframe -->
              <canvas id="hero-blueprint-canvas"></canvas>
              <div class="compass-rose">
                <svg width="60" height="60" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="#38BDF8" stroke-width="1" fill="none" stroke-dasharray="3 3" />
                  <line x1="50" y1="5" x2="50" y2="95" stroke="#38BDF8" stroke-width="0.5" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke="#38BDF8" stroke-width="0.5" />
                  <polygon points="50,15 45,50 50,55" fill="#2563EB" />
                  <polygon points="50,15 55,50 50,55" fill="#38BDF8" />
                  <polygon points="50,85 45,50 50,55" fill="#0F172A" />
                  <polygon points="50,85 55,50 50,55" fill="#1E293B" />
                  <text x="47" y="14" fill="#38BDF8" font-size="10" font-family="monospace">N</text>
                </svg>
              </div>
              <div class="canvas-controls">
                <span class="control-label monospace-font">MODEL: ISO_WIRE_01</span>
                <button class="canvas-btn" id="canvas-rotate-toggle" title="Toggle Auto-Rotation"><i
                    class="fa-solid fa-sync fa-spin"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `},init(i){const e=document.getElementById("cad-crosshair"),t=document.getElementById("hero");if(e&&t){const I=()=>{e.style.display="block"},q=()=>{e.style.display="none"};t.addEventListener("mouseenter",I),t.addEventListener("mouseleave",q),window.addEventListener("mousemove",$=>{e.style.left=`${$.clientX}px`,e.style.top=`${$.clientY}px`;const Z=t.getBoundingClientRect(),W=(($.clientX-Z.left)/Z.width*100).toFixed(2),Y=((Z.bottom-$.clientY)/Z.height*100).toFixed(2),ie=document.getElementById("crosshair-coords");ie&&(ie.innerText=`X: ${W}, Y: ${Y}`)})}const n=document.querySelector(".blueprint-canvas-container"),s=document.getElementById("hero-blueprint-canvas");if(!n||!s)return;const a=new Qc;a.fog=new gr(132631,.1);let r=n.clientWidth||450,o=n.clientHeight||450;const c=new Ot(45,r/o,.1,100);c.position.set(0,1.2,4.8);const d=new Sm({canvas:s,antialias:!0,alpha:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(r,o),d.shadowMap.enabled=!0,d.shadowMap.type=fl,d.toneMapping=rr,d.toneMappingExposure=1.3;const m=new Sd(859187,2);a.add(m);const p=new bo(16777215,4);p.position.set(6,12,5),p.castShadow=!0,p.shadow.mapSize.width=1024,p.shadow.mapSize.height=1024,a.add(p);const h=new bo(1981066,2);h.position.set(-6,2,-5),a.add(h);const g=new xo(959977,15,12);g.position.set(0,-1.8,0),a.add(g);const f=new xo(14239471,12,10);f.position.set(0,2.2,0),a.add(f);const v=new li;v.scale.set(1.28,1.28,1.28),a.add(v);const u=10,l=.44,x=1.2,y=.12,M=6,A=new Mi({color:959977,emissive:165063,emissiveIntensity:.45,metalness:.85,roughness:.15,transparent:!0,opacity:.65,side:Jt}),E=new Mi({color:6583435,metalness:.95,roughness:.1}),R=[];function b(I,q,$,Z){const W=I.distanceTo(q),Y=new Bn($,$,W,6),ie=new Dt(Y,Z);return ie.position.copy(I).add(q).multiplyScalar(.5),ie.lookAt(q),ie.rotateX(Math.PI/2),ie.castShadow=!0,ie.receiveShadow=!0,ie}for(let I=0;I<u;I++){const q=-1.8+I*l,$=1-I*.045,Z=x*$,W=I*y,Y=new Bn(Z,Z,.035,M,1),ie=new Dt(Y,A);ie.position.set(0,q,0),ie.rotation.y=W,ie.castShadow=!0,ie.receiveShadow=!0,v.add(ie);const me=[];for(let ae=0;ae<M;ae++){const se=ae/M*Math.PI*2+W;me.push(new z(Math.cos(se)*Z,q,Math.sin(se)*Z))}R.push({y:q,radius:Z,vertices:me})}const w=new Bn(.12,.16,u*l,12),L=new Dt(w,E);L.position.set(0,-1.8+u*l/2,0),L.castShadow=!0,L.receiveShadow=!0,v.add(L);const C=new Bn(.15,.19,u*l,8,1,!0),N=new fd(C),k=new co(N,new tr({color:3718648,transparent:!0,opacity:.55}));k.position.copy(L.position),v.add(k);const j=new Bn(1.35,1.45,.15,6),P=new Dt(j,E);P.position.set(0,-1.9,0),P.receiveShadow=!0,v.add(P);const F=new Mi({color:3718648,emissive:165063,emissiveIntensity:.8,metalness:.9,roughness:.1});for(let I=0;I<u;I++){const q=R[I].vertices;for(let $=0;$<M;$++){const Z=new br(.032,8,8),W=new Dt(Z,F);W.position.copy(q[$]),v.add(W)}}const B=new Mi({color:14239471,emissive:7346805,emissiveIntensity:.6,metalness:.9,roughness:.1}),J=new Mi({color:959977,emissive:223649,emissiveIntensity:.6,metalness:.9,roughness:.1});for(let I=0;I<u-1;I++){const q=R[I].vertices[I%M],$=R[I+1].vertices[(I+1)%M];v.add(b(q,$,.022,B));const Z=R[I].vertices[(I+Math.floor(M/2))%M],W=R[I+1].vertices[(I+1+Math.floor(M/2))%M];v.add(b(Z,W,.022,J))}for(let I=0;I<u-1;I++){const q=R[I].vertices,$=R[I+1].vertices;for(let Z=0;Z<M;Z++){const W=(Z+1)%M;v.add(b(q[Z],$[Z],.018,E)),v.add(b(q[Z],$[W],.008,E)),v.add(b(q[W],$[Z],.008,E)),v.add(b(q[Z],q[W],.011,E))}}const te=R[u-1].vertices;for(let I=0;I<M;I++){const q=(I+1)%M;v.add(b(te[I],te[q],.011,E))}const ne=new li;a.add(ne);const le=new tr({color:3718648,transparent:!0,opacity:.15});for(let I=0;I<=3.5;I+=.5){if(I===0)continue;const q=new xr(I-.004,I+.004,64),$=new Nl(q,le);$.rotation.x=Math.PI/2,$.position.y=-1.82,ne.add($)}const ve=12,Ue=new Mt,ze=[];for(let I=0;I<ve;I++){const q=I/ve*Math.PI*2;ze.push(0,-1.82,0),ze.push(Math.cos(q)*3.5,-1.82,Math.sin(q)*3.5)}Ue.setAttribute("position",new dt(ze,3));const Re=new co(Ue,le);ne.add(Re);const Q=75,ue=new Mt,re=[];for(let I=0;I<Q;I++){const q=.8+Math.random()*2.8,$=Math.random()*Math.PI*2,Z=-1.8+Math.random()*4;re.push(Math.cos($)*q,Z,Math.sin($)*q)}ue.setAttribute("position",new dt(re,3));const Ee=()=>{const I=document.createElement("canvas");I.width=16,I.height=16;const q=I.getContext("2d"),$=q.createRadialGradient(8,8,0,8,8,8);return $.addColorStop(0,"rgba(255, 255, 255, 1)"),$.addColorStop(.25,"rgba(56, 189, 248, 1)"),$.addColorStop(.6,"rgba(37, 99, 235, 0.3)"),$.addColorStop(1,"rgba(0, 0, 0, 0)"),q.fillStyle=$,q.fillRect(0,0,16,16),new dd(I)},we=new Fl({size:.14,map:Ee(),transparent:!0,blending:da,depthWrite:!1}),Te=new cd(ue,we);a.add(Te);let at=0,Oe=0,$e=0,Ke=0,Pe=!1,ot=0,tt=0,xt=.0025,U=.45,lt=.8;const Be=document.getElementById("view-cube"),Ze=(I,q)=>{Pe=!0,ot=I,tt=q},de=(I,q)=>{if(Pe){const $=I-ot,Z=q-tt;lt+=$*.007,U=Math.max(.1,Math.min(1.2,U+Z*.007)),ot=I,tt=q}else{const $=n.getBoundingClientRect(),Z=I-$.left,W=q-$.top;at=Math.max(-1.2,Math.min(1.2,Z/$.width*2-1)),Oe=Math.max(-1.2,Math.min(1.2,-(W/$.height)*2+1))}};n.addEventListener("mousedown",I=>Ze(I.clientX,I.clientY)),window.addEventListener("mousemove",I=>de(I.clientX,I.clientY)),window.addEventListener("mouseup",()=>{Pe=!1}),n.addEventListener("touchstart",I=>Ze(I.touches[0].clientX,I.touches[0].clientY),{passive:!0}),window.addEventListener("touchmove",I=>de(I.touches[0].clientX,I.touches[0].clientY),{passive:!0}),window.addEventListener("touchend",()=>{Pe=!1});const nt=document.getElementById("canvas-rotate-toggle");nt&&nt.addEventListener("click",()=>{xt>0?(xt=0,nt.querySelector("i").className="fa-solid fa-play"):(xt=.0025,nt.querySelector("i").className="fa-solid fa-sync fa-spin")}),new ResizeObserver(I=>{for(let q of I){const{width:$,height:Z}=q.contentRect;$>0&&Z>0&&(c.aspect=$/Z,c.updateProjectionMatrix(),d.setSize($,Z))}}).observe(n);const _=new Td;function G(){requestAnimationFrame(G);const I=_.getElapsedTime();v.position.y=Math.sin(I*.7)*.08,Pe||(lt+=xt),v.rotation.y=lt,v.rotation.x=U,Te.rotation.y=I*.015,$e+=(at-$e)*.04,Ke+=(Oe-Ke)*.04,c.position.x=$e*.45,c.position.y=1.2+Ke*.3,c.lookAt(0,0,0),Be&&(Be.style.transform=`rotateX(${-v.rotation.x*57.3}deg) rotateY(${v.rotation.y*57.3}deg)`),d.render(a,c)}G()}},qo={render(i){return`
      <section id="why-hire-me" class="why-hire-me-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">01 //</span> WHY HIRE ME: RECRUITER DASHBOARD</h2>
            <div class="header-line"></div>
          </div>

          <div class="why-hire-me-grid">
            <div class="why-hire-me-left">
              <div class="kpi-grid">
                <div class="glass-card kpi-card">
                  <div class="kpi-icon"><i class="fa-solid fa-drafting-compass text-cyan"></i></div>
                  <h3 class="kpi-title text-white">AutoCAD Expertise</h3>
                  <p class="kpi-value text-cyan monospace-font">95% Speed & Precision</p>
                  <p class="kpi-desc text-slate">Highly proficient in structural detailing, municipal setbacks planning,
                    dynamic blocks, external references (Xrefs), and sheet set managers.</p>
                </div>
                <div class="glass-card kpi-card">
                  <div class="kpi-icon"><i class="fa-solid fa-cube text-cyan"></i></div>
                  <h3 class="kpi-title text-white">Revit Expertise</h3>
                  <p class="kpi-value text-cyan monospace-font">90% Parametric Flow</p>
                  <p class="kpi-desc text-slate">Advanced creation of nested parametric families, wall/floor structural
                    scheduling, phase staging, and database coordinate extraction.</p>
                </div>
                <div class="glass-card kpi-card">
                  <div class="kpi-icon"><i class="fa-solid fa-network-wired text-cyan"></i></div>
                  <h3 class="kpi-title text-white">BIM Coordination</h3>
                  <p class="kpi-value text-cyan monospace-font">LOD 300/400 Standards</p>
                  <p class="kpi-desc text-slate">Strong capability in coordinating multi-disciplinary models, managing design
                    tolerances, and federating structural with MEP systems.</p>
                </div>
                <div class="glass-card kpi-card">
                  <div class="kpi-icon"><i class="fa-solid fa-bullseye text-cyan"></i></div>
                  <h3 class="kpi-title text-white">Drafting Accuracy</h3>
                  <p class="kpi-value text-cyan monospace-font">&lt;2mm Site Tolerance</p>
                  <p class="kpi-desc text-slate">Strict compliance with engineering guidelines (IS 456, SP 34 standards),
                    clean snapping, closed loops, and perfect alignment checks.</p>
                </div>
                <div class="glass-card kpi-card">
                  <div class="kpi-icon"><i class="fa-solid fa-file-invoice text-cyan"></i></div>
                  <h3 class="kpi-title text-white">Project Documentation</h3>
                  <p class="kpi-value text-cyan monospace-font">BBS & BOQ Compilation</p>
                  <p class="kpi-desc text-slate">Formulating precise structural reinforcement bar bending schedules and
                    comprehensive cost estimation spreadsheets directly from models.</p>
                </div>
                <div class="glass-card kpi-card">
                  <div class="kpi-icon"><i class="fa-solid fa-trowel-bricks text-cyan"></i></div>
                  <h3 class="kpi-title text-white">Construction Drawing</h3>
                  <p class="kpi-value text-cyan monospace-font">Execution-Ready</p>
                  <p class="kpi-desc text-slate">Specialized in concrete formwork, deep-foundation rebar binding layouts,
                    columns-beam detailing sheets, and site-level plans.</p>
                </div>
              </div>
            </div>
            <div class="why-hire-me-right">
              <div class="blueprint-canvas-container dashboard-3d-container">
                <canvas id="dashboard-3d-canvas"></canvas>
                <div class="canvas-controls">
                  <span class="control-label monospace-font">STRUCTURE: TRUSS_BRIDGE_3D</span>
                  <button class="canvas-btn" id="dashboard-rotate-toggle" title="Toggle Auto-Rotation"><i
                      class="fa-solid fa-sync fa-spin"></i></button>
                </div>
              </div>
            </div>
          </div>

          <div class="stats-grid monospace-font" style="margin-top: 4rem;">
            ${i.statistics?i.statistics.map(t=>`
      <div class="glass-card stat-item">
        <div class="stat-num text-cyan" data-target="${t.value}">0</div>
        <div class="stat-label">${t.label}</div>
      </div>
    `).join(""):""}
          </div>
        </div>
      </section>
    `},init(i){Mm(),Em()}};function Mm(){const i=document.getElementById("dashboard-3d-canvas");if(!i)return;const e=i.getContext("2d");let t=!0;(()=>{i.parentElement&&(i.width=i.parentElement.clientWidth||500,i.height=i.parentElement.clientHeight||300)})();const s=new ResizeObserver(y=>{for(let M of y){const{width:A,height:E}=M.contentRect;A>0&&E>0&&(i.width=A,i.height=E)}});i.parentElement&&s.observe(i.parentElement);const a=[{x:-1.5,y:-.3,z:-.35},{x:-.9,y:-.3,z:-.35},{x:-.3,y:-.3,z:-.35},{x:.3,y:-.3,z:-.35},{x:.9,y:-.3,z:-.35},{x:1.5,y:-.3,z:-.35},{x:-1.5,y:-.3,z:.35},{x:-.9,y:-.3,z:.35},{x:-.3,y:-.3,z:.35},{x:.3,y:-.3,z:.35},{x:.9,y:-.3,z:.35},{x:1.5,y:-.3,z:.35},{x:-.9,y:.3,z:-.35},{x:-.3,y:.3,z:-.35},{x:.3,y:.3,z:-.35},{x:.9,y:.3,z:-.35},{x:-.9,y:.3,z:.35},{x:-.3,y:.3,z:.35},{x:.3,y:.3,z:.35},{x:.9,y:.3,z:.35}],r=[[0,1],[1,2],[2,3],[3,4],[4,5],[6,7],[7,8],[8,9],[9,10],[10,11],[12,13],[13,14],[14,15],[16,17],[17,18],[18,19],[0,6],[1,7],[2,8],[3,9],[4,10],[5,11],[12,16],[13,17],[14,18],[15,19],[1,12],[2,13],[3,14],[4,15],[7,16],[8,17],[9,18],[10,19],[0,12],[5,15],[1,13],[2,12],[3,13],[2,14],[4,14],[3,15],[6,16],[11,19],[7,17],[8,16],[9,17],[8,18],[10,18],[9,19],[12,17],[16,13],[13,18],[17,14],[14,19],[18,15]];let o=.4,c=-.5,d=!1,m=0,p=0;const h=(y,M)=>{d=!0,t=!1,m=y,p=M},g=(y,M)=>{if(!d)return;const A=y-m,E=M-p;c+=A*.01,o+=E*.01,m=y,p=M};i.addEventListener("mousedown",y=>h(y.clientX,y.clientY)),window.addEventListener("mousemove",y=>g(y.clientX,y.clientY)),window.addEventListener("mouseup",()=>{d=!1}),i.addEventListener("touchstart",y=>h(y.touches[0].clientX,y.touches[0].clientY)),window.addEventListener("touchmove",y=>g(y.touches[0].clientX,y.touches[0].clientY)),window.addEventListener("touchend",()=>{d=!1});const f=document.getElementById("dashboard-rotate-toggle");f&&f.addEventListener("click",()=>{t=!t,f.querySelector("i").className=t?"fa-solid fa-sync fa-spin":"fa-solid fa-play"});function v(y,M,A){const E=Math.min(M,A)*.28;let R=y.x*Math.cos(c)-y.z*Math.sin(c),b=y.x*Math.sin(c)+y.z*Math.cos(c),w=y.y;const L=w*Math.cos(o)-b*Math.sin(o);b=w*Math.sin(o)+b*Math.cos(o),w=L;const C=4,N=C/(C-b);return{x:R*N*E+M/2,y:-(w*N)*E+A/2,z:b}}let u=-1.6,l=.008;function x(){if(!i.parentElement)return;e.clearRect(0,0,i.width,i.height),e.strokeStyle="rgba(56, 189, 248, 0.03)",e.lineWidth=1,e.beginPath(),e.arc(i.width/2,i.height/2,Math.min(i.width,i.height)*.4,0,2*Math.PI),e.stroke(),t&&(c+=.0025),u+=l,u>1.6&&(u=-1.6);const y=a.map(E=>v(E,i.width,i.height));e.strokeStyle="rgba(56, 189, 248, 0.04)",e.lineWidth=.5;for(let E=0;E<5;E++){const R=-1.5+E*.6,b=v({x:R,y:-.3,z:-.35},i.width,i.height),w=v({x:R,y:-.3,z:.35},i.width,i.height);e.beginPath(),e.moveTo(b.x,b.y),e.lineTo(w.x,w.y),e.stroke()}r.forEach(E=>{const R=y[E[0]],b=y[E[1]],w=(a[E[0]].x+a[E[1]].x)/2,L=Math.abs(w-u),C=Math.max(0,1-L/.85);let N="rgba(56, 189, 248, 0.2)",k=1;if(C>.05)if(k=1+C*2.2,E[0]>=12||E[0]<12&&E[1]>=12&&E[0]%6===E[1]%6){const P=Math.floor(56+C*183),F=Math.floor(189-C*121),B=Math.floor(248-C*180);N=`rgba(${P}, ${F}, ${B}, ${.25+C*.75})`}else{const P=Math.floor(56+C*189),F=Math.floor(189-C*31),B=Math.floor(248-C*237);N=`rgba(${P}, ${F}, ${B}, ${.25+C*.75})`}e.strokeStyle=N,e.lineWidth=k,e.beginPath(),e.moveTo(R.x,R.y),e.lineTo(b.x,b.y),e.stroke()}),y.forEach((E,R)=>{e.beginPath(),e.arc(E.x,E.y,2.5,0,2*Math.PI),e.fillStyle=R>=12?"#ef4444":"#38BDF8",e.fill()});const A=v({x:u,y:-.3,z:0},i.width,i.height);e.fillStyle="#f59e0b",e.beginPath(),e.arc(A.x,A.y,4+Math.sin(Date.now()*.015)*1.5,0,2*Math.PI),e.fill(),e.strokeStyle="rgba(245, 158, 11, 0.4)",e.lineWidth=1,e.beginPath(),e.arc(A.x,A.y,9+Math.sin(Date.now()*.015)*2.5,0,2*Math.PI),e.stroke(),requestAnimationFrame(x)}x()}function Em(){const i=document.getElementById("why-hire-me");if(!i)return;const e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(document.querySelectorAll(".stat-num").forEach(s=>{const a=parseInt(s.getAttribute("data-target"));let r=0;const o=Math.ceil(a/40),c=()=>{r+=o,r<a?(s.innerText=Math.floor(r),setTimeout(c,20)):s.innerText=a+"+"};c()}),e.unobserve(n.target))})},{threshold:.1});e.observe(i)}const $o={render(i){const e=i.about,t=i.personal,n=e.yearsOfExperience.match(/\d+/),s=n?n[0]:"0",r=[{label:"FULL NAME",val:t.fullName},{label:"DATE OF BIRTH",val:t.dateOfBirth},{label:"GENDER",val:t.gender},{label:"LOCATION",val:t.location},{label:"EMAIL",val:t.email},{label:"PHONE NO",val:t.phone},{label:"NATIONALITY",val:t.nationality},{label:"LANGUAGES KNOWN",val:t.languages.join(", ")},{label:"LINKEDIN URL",val:t.linkedin.replace("https://","")},{label:"PORTFOLIO URL",val:t.portfolioUrl.replace("https://","")}].map(o=>`
      <div class="tb-item">
        <div class="tb-label">${o.label}</div>
        <div class="tb-val">${o.val}</div>
      </div>
    `).join("");return`
      <section id="about" class="about-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">02 //</span> ABOUT ME</h2>
            <div class="header-line"></div>
          </div>
          <div class="grid-about">
            <div class="about-text-container">
              <div class="glass-card about-card">
                <h3 class="card-title text-white">Professional Profile</h3>
                <p class="text-slate lead-paragraph" id="about-summary">${e.summary}</p>
                <div class="objective-box">
                  <h4 class="text-cyan monospace-font font-bold">CAREER OBJECTIVE:</h4>
                  <p class="text-slate italic-text" id="about-objective">${e.objective}</p>
                </div>
                <div class="experience-badge-row">
                  <div class="exp-badge">
                    <div class="exp-num" id="about-exp">${s}</div>
                    <div class="exp-label">Years Experience</div>
                  </div>
                  <div class="exp-badge">
                    <div class="exp-num text-cyan" id="about-status-short">ACTIVE</div>
                    <div class="exp-label" id="about-status-desc">${e.currentStatus}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- TITLE BLOCK DESIGN SECTION -->
            <div class="about-details-container">
              <div class="glass-card title-block-card">
                <div class="title-block-header monospace-font">
                  <div class="tb-title">AUTODESK DESIGN SHEETS</div>
                  <div class="tb-sheet">SHEET: G-101</div>
                </div>
                <div class="title-block-grid monospace-font" id="personal-details-grid">
                  ${r}
                </div>
                <div class="title-block-footer monospace-font">
                  <div>SCALE: NTS</div>
                  <div>DRAWN BY: ${t.firstName?t.firstName.toUpperCase():"YASWANTH"}</div>
                  <div>APPROVED: RECRUITER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `},init(i){}},Yo={render(i){const e=i.skills?i.skills.map(s=>`
      <div class="skill-bar-item">
        <div class="skill-bar-info">
          <span class="skill-bar-name">${s.name}</span>
          <span class="skill-bar-percent monospace-font">${s.level}%</span>
        </div>
        <div class="skill-bar-progress">
          <div class="skill-bar-fill" data-level="${s.level}"></div>
        </div>
      </div>
    `).join(""):"",t=i.softwareProficiency?i.softwareProficiency.map(s=>`
        <div class="radial-item">
          <div class="radial-svg-box">
            <svg width="90" height="90">
              <circle class="radial-bg-circle" cx="45" cy="45" r="40" />
              <circle class="radial-fill-circle" cx="45" cy="45" r="40" data-offset="${2*Math.PI*40}" data-percent="${s.percentage}" />
            </svg>
            <div class="radial-percentage-text">${s.percentage}%</div>
          </div>
          <span class="radial-name">${s.name}</span>
        </div>
      `).join(""):"",n=i.softwareProficiency?i.softwareProficiency.map(s=>{const a=s.name.toLowerCase();let r="fa-screwdriver-wrench",o="Engineering design software";return a.includes("autocad")?(r="fa-draw-polygon",o="2D Drafting, Layouts, Xrefs, Dynamic Blocks"):a.includes("revit")?(r="fa-cube",o="BIM Modeling, Parametric Families, Detailing"):a.includes("civil 3d")||a.includes("civil3d")?(r="fa-road",o="Corridors, Grading, Land Alignment, Pipings"):a.includes("staad")?(r="fa-chart-line",o="Frame Analysis, Load Cases, Steel/RC Design"):a.includes("navisworks")?(r="fa-compress",o="Clash Tests, Model Federation, Timelining"):a.includes("sketchup")?(r="fa-shapes",o="Concept Modeling, Texturing, Speed Renders"):a.includes("project")?(r="fa-calendar-days",o="Gantt Charts, CPM Scheduling, Resource Alloc"):a.includes("excel")||a.includes("office")?(r="fa-file-excel",o="Data Parsing, BBS Formulas, QTO Compilations"):a.includes("sql")&&(r="fa-database",o="Relational Databases, Schema Queries, Data Organization"),`
        <div class="glass-card tool-badge-card">
          <div class="tool-badge-icon text-cyan"><i class="fa-solid ${r}"></i></div>
          <h4 class="text-white tool-badge-name">${s.name}</h4>
          <p class="text-slate text-xxs">${o}</p>
          <div class="tool-badge-bar">
            <div class="tool-badge-fill" style="width: ${s.percentage}%;"></div>
          </div>
        </div>
      `}).join(""):"";return`
      <section id="skills" class="skills-section section-padding border-t">
        <svg style="width:0;height:0;position:absolute;" id="svg-gradients">
          <defs>
            <linearGradient id="cyanGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38BDF8" />
              <stop offset="100%" stop-color="#2563EB" />
            </linearGradient>
          </defs>
        </svg>

        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">03 //</span> SKILLS & ABILITIES</h2>
            <div class="header-line"></div>
          </div>

          <div class="skills-grid">
            <!-- Left side: Skills bars -->
            <div class="skills-bars-container">
              <h3 class="skills-subheading text-white"><i class="fa-solid fa-sliders text-cyan"></i> Technical Skills</h3>
              <div class="skills-bars-wrapper" id="skills-bars-container">
                ${e}
              </div>
            </div>

            <!-- Right side: Software Proficiency (Radial Charts) -->
            <div class="software-proficiency-container">
              <h3 class="skills-subheading text-white"><i class="fa-solid fa-chart-pie text-cyan"></i> Software Proficiency</h3>
              <div class="radials-wrapper" id="software-radials-container">
                ${t}
              </div>
            </div>
          </div>

          <!-- INDUSTRY TOOLS SECTION -->
          <div class="industry-tools-box" style="margin-top: 5rem;">
            <h3 class="skills-subheading text-white" style="margin-bottom: 2rem;"><i
                class="fa-solid fa-screwdriver-wrench text-cyan"></i> Industry Software Toolkit</h3>
            <div class="tools-grid">
              ${n}
            </div>
          </div>
        </div>
      </section>
    `},init(i){const e=document.getElementById("skills"),t=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&(document.querySelectorAll(".skill-bar-fill").forEach(a=>{const r=a.getAttribute("data-level");a.style.width=`${r}%`}),document.querySelectorAll(".radial-fill-circle").forEach(a=>{const r=parseFloat(a.getAttribute("data-offset")),o=parseFloat(a.getAttribute("data-percent")),c=r-o/100*r;a.style.strokeDashoffset=c}),t.unobserve(s.target))})},{threshold:.15});e&&t.observe(e)}},Ko={render(i){const e=i.bim,n=[{title:"3D Modeling",text:e.modeling,icon:"fa-cubes"},{title:"Clash Detection",text:e.clashDetection,icon:"fa-compress"},{title:"Construction Documentation",text:e.documentation,icon:"fa-file-lines"},{title:"Quantity Takeoff (QTO)",text:e.quantityTakeoff,icon:"fa-calculator"}].map(s=>`
      <div class="glass-card bim-wf-card">
        <div class="bim-wf-icon"><i class="fa-solid ${s.icon}"></i></div>
        <h3 class="bim-wf-title">${s.title}</h3>
        <p class="bim-wf-text">${s.text}</p>
      </div>
    `).join("");return`
      <section id="bim" class="bim-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">04 //</span> BIM COORDINATION WORKFLOW</h2>
            <div class="header-line"></div>
          </div>
          <div class="bim-intro glass-card">
            <div class="bim-intro-content">
              <h3 class="text-white">What is Building Information Modeling (BIM)?</h3>
              <p class="text-slate" id="bim-desc">${e.knowledge}</p>
            </div>
            <div class="bim-visual">
              <!-- Simulated isometric drafting -->
              <svg viewBox="0 0 200 200" class="bim-svg">
                <defs>
                  <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8" />
                    <stop offset="100%" stop-color="#2563EB" stop-opacity="0.2" />
                  </linearGradient>
                </defs>
                <g class="iso-grid">
                  <!-- Iso grid lines -->
                  <path d="M 0 100 L 100 50 L 200 100 L 100 150 Z" fill="none" stroke="#1E293B" stroke-width="1" />
                  <path d="M 0 130 L 100 80 L 200 130" fill="none" stroke="#1E293B" stroke-width="1" />
                  <path d="M 0 70 L 100 20 L 200 70" fill="none" stroke="#1E293B" stroke-width="1" />

                  <!-- Floor slabs -->
                  <polygon points="30,100 100,65 170,100 100,135" fill="url(#cyanGrad)" stroke="#38BDF8" stroke-width="1"
                    class="floorslab slab-1" />
                  <polygon points="30,80 100,45 170,80 100,115" fill="none" stroke="#38BDF8" stroke-width="0.75"
                    stroke-dasharray="3 3" class="floorslab slab-2" />
                  <polygon points="30,60 100,25 170,60 100,95" fill="none" stroke="#38BDF8" stroke-width="0.75"
                    class="floorslab slab-3" />

                  <!-- Structural Columns -->
                  <line x1="100" y1="135" x2="100" y2="95" stroke="#38BDF8" stroke-width="2" />
                  <line x1="65" y1="117" x2="65" y2="77" stroke="#38BDF8" stroke-width="1.5" />
                  <line x1="135" y1="117" x2="135" y2="77" stroke="#38BDF8" stroke-width="1.5" />
                  <line x1="100" y1="95" x2="100" y2="55" stroke="#2563EB" stroke-width="2" />

                  <!-- Coordinate markers -->
                  <circle cx="100" cy="135" r="3" fill="#EF4444" class="pulse-dot" />
                  <circle cx="65" cy="77" r="2" fill="#38BDF8" />
                  <circle cx="135" cy="77" r="2" fill="#38BDF8" />
                </g>
              </svg>
            </div>
          </div>

          <div class="bim-cards-grid" id="bim-cards-container">
            ${n}
          </div>

          <!-- INTERACTIVE LOD SPECTRUM -->
          <div class="lod-spectrum-box glass-card" style="margin-top: 3rem;">
            <h3 class="skills-subheading text-white" style="margin-bottom: 1.5rem;"><i
                class="fa-solid fa-signal text-cyan"></i> BIM LOD (Level of Development) Matrix</h3>
            <p class="text-slate" style="font-size: 0.85rem; margin-bottom: 2.5rem;">Click each LOD stage below to examine
              model element detail specifications and coordination tolerances.</p>

            <div class="lod-tabs-nav monospace-font">
              <button class="lod-tab-btn active" data-lod="100">LOD 100</button>
              <button class="lod-tab-btn" data-lod="200">LOD 200</button>
              <button class="lod-tab-btn" data-lod="300">LOD 300</button>
              <button class="lod-tab-btn" data-lod="400">LOD 400</button>
              <button class="lod-tab-btn" data-lod="500">LOD 500</button>
            </div>

            <div class="lod-panes">
              <div class="lod-pane active" id="lod-pane-100">
                <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">LOD 100: Conceptual Design <span
                    class="text-cyan monospace-font">// Concept</span></h4>
                <p class="text-slate">Model elements are represented as overall masses with approximate size, shape, and
                  location. Ideal for volume studies, space plans, and spatial orientations.</p>
                <ul class="lod-spec-list text-xs monospace-font"
                  style="margin-top: 1rem; list-style: none; display: flex; flex-direction: column; gap: 0.25rem;">
                  <li>• Graphic Representation: Conceptual 3D blocks</li>
                  <li>• Level of Accuracy: &plusmn;1.5 Meters</li>
                  <li>• Primary Purpose: Feasibility studies & shadow analysis</li>
                </ul>
              </div>
              <div class="lod-pane" id="lod-pane-200">
                <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">LOD 200: Schematic Design <span
                    class="text-cyan monospace-font">// Approximate</span></h4>
                <p class="text-slate">Model elements are represented as general assemblies with approximate quantities,
                  sizing, shape, location, and orientation. Useful for system analysis and generic planning.</p>
                <ul class="lod-spec-list text-xs monospace-font"
                  style="margin-top: 1rem; list-style: none; display: flex; flex-direction: column; gap: 0.25rem;">
                  <li>• Graphic Representation: Structural grid layout and generic slabs</li>
                  <li>• Level of Accuracy: &plusmn;200 Millimeters</li>
                  <li>• Primary Purpose: Spatial coordination & system allocations</li>
                </ul>
              </div>
              <div class="lod-pane" id="lod-pane-300">
                <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">LOD 300: Construction Documentation <span
                    class="text-cyan monospace-font">// Precise Geometry</span></h4>
                <p class="text-slate">Model elements are graphically represented as specific systems, assemblies, or
                  components with precise quantities, dimensions, coordinates, and orientations. Sheets can be extracted
                  directly.</p>
                <ul class="lod-spec-list text-xs monospace-font"
                  style="margin-top: 1rem; list-style: none; display: flex; flex-direction: column; gap: 0.25rem;">
                  <li>• Graphic Representation: Accurate wall assemblies, windows, and main structural details</li>
                  <li>• Level of Accuracy: &plusmn;10 Millimeters</li>
                  <li>• Primary Purpose: Permit drawings extraction & material scheduling</li>
                </ul>
              </div>
              <div class="lod-pane" id="lod-pane-400">
                <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">LOD 400: Fabrication & Assembly <span
                    class="text-cyan monospace-font">// Detailing</span></h4>
                <p class="text-slate">Model elements are detailed with complete fabrication, assembly, and installation
                  details (e.g., specific rebar bend radius, structural steel connections, MEP fittings clearances).</p>
                <ul class="lod-spec-list text-xs monospace-font"
                  style="margin-top: 1rem; list-style: none; display: flex; flex-direction: column; gap: 0.25rem;">
                  <li>• Graphic Representation: Bar reinforcement binds, bolts, and MEP layout routing</li>
                  <li>• Level of Accuracy: &plusmn;2 Millimeters</li>
                  <li>• Primary Purpose: Fabrication, shop drawing approval & procurement</li>
                </ul>
              </div>
              <div class="lod-pane" id="lod-pane-500">
                <h4 class="text-white font-bold" style="margin-bottom: 0.5rem;">LOD 500: As-Built Operations <span
                    class="text-cyan monospace-font">// Lifecycle</span></h4>
                <p class="text-slate">Model elements are verified on-site for coordinates, orientation, dimensions, and
                  operational characteristics, functioning as a digital twin for facility management.</p>
                <ul class="lod-spec-list text-xs monospace-font"
                  style="margin-top: 1rem; list-style: none; display: flex; flex-direction: column; gap: 0.25rem;">
                  <li>• Graphic Representation: Site-verified spatial parameters & asset attributes</li>
                  <li>• Level of Accuracy: Survey-grade verification</li>
                  <li>• Primary Purpose: Operations, maintenance, and asset management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `},init(i){const e=document.querySelectorAll(".lod-tab-btn"),t=document.querySelectorAll(".lod-pane");e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("active")),t.forEach(a=>a.classList.remove("active")),n.classList.add("active");const s=n.getAttribute("data-lod");document.getElementById(`lod-pane-${s}`).classList.add("active")})})}},Zo={render(i){return`
      <section id="services" class="services-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">04a //</span> SERVICES OFFERED</h2>
            <div class="header-line"></div>
          </div>
          <div class="services-grid" id="services-container">
            ${i.services?i.services.map(t=>`
      <div class="glass-card service-card">
        <div class="service-icon"><i class="fa-solid ${t.icon||"fa-cubes"}"></i></div>
        <h3 class="service-title">${t.title}</h3>
        <p class="service-desc text-slate">${t.desc}</p>
      </div>
    `).join(""):""}
          </div>
        </div>
      </section>
    `},init(i){}},Jo={render(i){return`
      <section id="education" class="education-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">05 //</span> EDUCATION TIMELINE</h2>
            <div class="header-line"></div>
          </div>
          <div class="timeline-container" id="education-timeline">
            ${i.education?i.education.map(t=>`
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-content glass-card">
          <span class="timeline-date monospace-font">${t.startYear} - ${t.endYear}</span>
          <h3 class="timeline-title">${t.degree}</h3>
          <p class="timeline-subtitle text-cyan">${t.branch}</p>
          <span class="timeline-univ">${t.collegeName} (${t.university})</span>
          <span class="timeline-grade">Score: ${t.cgpa}</span>
        </div>
      </div>
    `).join(""):""}
          </div>
        </div>
      </section>
    `},init(i){}},Qo={render(i){return`
      <section id="projects" class="projects-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">06 //</span> DESIGN PROJECTS</h2>
            <div class="header-line"></div>
          </div>

          <!-- Category Filters -->
          <div class="projects-filters">
            <button class="filter-btn active" data-filter="all">ALL PROJECTS</button>
            <button class="filter-btn" data-filter="Residential">RESIDENTIAL</button>
            <button class="filter-btn" data-filter="Commercial">COMMERCIAL</button>
            <button class="filter-btn" data-filter="Structural">STRUCTURAL</button>
            <button class="filter-btn" data-filter="Architectural">ARCHITECTURAL</button>
          </div>

          <!-- Projects Grid -->
          <div class="projects-grid" id="projects-grid">
            ${i.projects?i.projects.map(t=>`
      <div class="glass-card project-card" data-project-type="${t.projectType}" data-category="${t.category}" onclick="openProjectDetail('${t.id}')">
        <div class="project-thumbnail">
          <img src="${t.image}" alt="${t.title}" onerror="this.src='/assets/images/proj-placeholder.jpg'">
          <span class="project-card-type-tag monospace-font">${t.projectType.toUpperCase()}</span>
        </div>
        <div class="project-card-body">
          <span class="project-card-cat">${t.category}</span>
          <h3 class="project-card-title">${t.title}</h3>
          <p class="project-card-desc">${t.description}</p>
          
          <!-- Impact Metrics Row -->
          <div class="project-metrics-row monospace-font">
            <div class="metric-badge" title="Built-up Area"><i class="fa-solid fa-ruler-combined"></i> ${t.builtUpArea}</div>
            <div class="metric-badge" title="Floors"><i class="fa-solid fa-building"></i> ${t.floors}</div>
            <div class="metric-badge" title="Drawings Created"><i class="fa-solid fa-file-lines"></i> ${t.drawingsCount} Sheets</div>
          </div>

          <div class="project-card-footer">
            <span class="proj-software"><i class="fa-solid fa-screwdriver-wrench"></i> ${t.softwareUsed.slice(0,3).join(", ")}</span>
            <span class="proj-link-label">CASE STUDY <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
        
        <!-- Project Compare Checkbox -->
        <div class="compare-checkbox-container" onclick="event.stopPropagation();">
          <label class="compare-checkbox-label monospace-font">
            <input type="checkbox" class="compare-checkbox" data-id="${t.id}" onchange="handleProjectCompareSelect(this)">
            <span>Compare</span>
          </label>
        </div>
      </div>
    `).join(""):""}
          </div>
        </div>
      </section>
    `},init(i){const e=document.querySelectorAll(".filter-btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("active")),t.classList.add("active");const n=t.getAttribute("data-filter");document.querySelectorAll(".project-card").forEach(a=>{n==="all"||a.getAttribute("data-project-type")===n?a.style.display="flex":a.style.display="none"})})}),window.openProjectDetail=function(t){window.location.hash=`#/project/${t}`}}},el={render(i){return`
      <section id="experience" class="experience-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">07 //</span> EXPERIENCE & OBSERVATIONS</h2>
            <div class="header-line"></div>
          </div>
          <div class="experience-timeline" id="experience-container">
            ${i.experience?i.experience.map(t=>`
      <div class="glass-card experience-card">
        <div class="exp-time-meta">
          <span class="exp-duration monospace-font">${t.duration}</span>
          <span class="exp-company text-cyan">${t.company}</span>
        </div>
        <div class="exp-details">
          <h3 class="exp-role">${t.position}</h3>
          <p class="exp-desc">${t.description}</p>
        </div>
      </div>
    `).join(""):""}
          </div>
        </div>
      </section>
    `},init(i){}},tl={render(i){return`
      <section id="certifications" class="certifications-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">08 //</span> CERTIFICATIONS</h2>
            <div class="header-line"></div>
          </div>
          <div class="certifications-grid" id="certifications-container">
            ${i.certifications?i.certifications.map(t=>`
      <div class="glass-card cert-card">
        <div class="cert-img-box">
          <img src="${t.image}" alt="${t.name}" onerror="this.src='/assets/images/cert-placeholder.jpg'">
        </div>
        <div class="cert-details">
          <span class="cert-issuer">${t.organization}</span>
          <h3 class="cert-name">${t.name}</h3>
        </div>
        <div class="cert-meta">
          <span class="cert-date">${t.issueDate}</span>
          ${t.link!=="#"?`<a href="${t.link}" target="_blank" class="cert-verify-link">Verify <i class="fa-solid fa-up-right-from-square"></i></a>`:""}
        </div>
      </div>
    `).join(""):""}
          </div>
        </div>
      </section>
    `},init(i){}},nl={render(i){return`
      <section id="achievements" class="achievements-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">09 //</span> ACADEMIC ACHIEVEMENTS</h2>
            <div class="header-line"></div>
          </div>
          <div class="achievements-grid" id="achievements-container">
            ${i.achievements?i.achievements.map(t=>`
      <div class="glass-card ach-card">
        <span class="ach-cat monospace-font">${t.category.toUpperCase()}</span>
        <h3 class="ach-title">${t.title}</h3>
        <p class="ach-desc">${t.description}</p>
      </div>
    `).join(""):""}
          </div>
        </div>
      </section>
    `},init(i){}},il={render(i){return`
      <section id="gallery" class="gallery-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">10 //</span> DRAFTING GALLERY</h2>
            <div class="header-line"></div>
          </div>

          <div class="gallery-filters">
            <button class="gal-filter-btn active" data-filter="all">ALL ITEMS</button>
            <button class="gal-filter-btn" data-filter="AutoCAD Drawings">CAD DRAWINGS</button>
            <button class="gal-filter-btn" data-filter="Revit Models">REVIT MODELS</button>
            <button class="gal-filter-btn" data-filter="Site Visits">SITE OBSERVATIONS</button>
          </div>

          <div class="gallery-masonry" id="gallery-container">
            ${i.gallery?i.gallery.map(t=>`
      <div class="gallery-item" data-type="${t.type}">
        <img src="${t.url}" alt="${t.caption}" onerror="this.src='/assets/images/gallery-placeholder.jpg'">
        <div class="gallery-item-overlay">
          <span class="gal-type">${t.type}</span>
          <span class="gal-caption">${t.caption}</span>
        </div>
      </div>
    `).join(""):""}
          </div>
        </div>
      </section>
    `},init(i){const e=document.querySelectorAll(".gal-filter-btn"),t=document.querySelectorAll(".gallery-item");e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("active")),n.classList.add("active");const s=n.getAttribute("data-filter");t.forEach(a=>{s==="all"||a.getAttribute("data-type")===s?a.style.display="block":a.style.display="none"})})})}},sl={render(i){return`
      <section id="testimonials" class="testimonials-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">11 //</span> TESTIMONIALS</h2>
            <div class="header-line"></div>
          </div>
          <div class="testimonials-slider-container">
            <div class="testimonials-grid" id="testimonials-container">
              ${i.testimonials?i.testimonials.map(t=>`
      <div class="glass-card test-card corporate-testimonial">
        <div class="test-header-corporate">
          <i class="fa-solid fa-quote-left quote-icon-corporate"></i>
          <div class="rating-stars text-cyan">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
        </div>
        <p class="test-feedback">"${t.feedback}"</p>
        <div class="test-user border-t-corporate">
          <img class="test-avatar" src="${t.photo}" alt="${t.name}" onerror="this.src='/assets/images/user-placeholder.jpg'">
          <div class="test-meta">
            <span class="test-name text-white">${t.name}</span>
            <span class="test-role monospace-font">${t.designation}</span>
            <span class="test-company text-cyan font-bold">${t.company}</span>
          </div>
        </div>
      </div>
    `).join(""):""}
            </div>
          </div>
        </div>
      </section>
    `},init(i){}},al={render(i){const e=i.personal,t=i.about,n=i.resumeData||{strengths:[],languages:[],interests:[],academicProjects:[]},s=i.education?i.education.map(p=>`
      <div style="margin-bottom: 0.5rem;">
        <div class="res-item-title-row">
          <span>${p.degree} in ${p.branch}</span>
          <span>${p.startYear} - ${p.endYear}</span>
        </div>
        <div class="res-item-sub">${p.collegeName} (${p.university}) - CGPA: ${p.cgpa}</div>
      </div>
    `).join(""):"",a=i.experience?i.experience.map(p=>`
      <div style="margin-bottom: 0.75rem;">
        <div class="res-item-title-row">
          <span>${p.position}</span>
          <span>${p.duration}</span>
        </div>
        <div class="res-item-sub" style="font-weight: bold; color: #1e3a8a;">${p.company}</div>
        <div style="margin-top: 0.25rem; line-height: 1.4; color: #475569;">${p.description}</div>
      </div>
    `).join(""):"",r=i.certifications?i.certifications.map(p=>`
      <div style="margin-bottom: 0.4rem;">
        <div class="res-item-title-row">
          <span>${p.name}</span>
          <span>${p.issueDate}</span>
        </div>
        <div class="res-item-sub">Issuer: ${p.organization}</div>
      </div>
    `).join(""):"",o=n.strengths?n.strengths.map(p=>`<li>${p}</li>`).join(""):"",c=n.academicProjects?n.academicProjects.map(p=>`
      <div style="border-bottom: 0.5px solid rgba(56, 189, 248, 0.1); padding-bottom: 0.5rem; margin-bottom: 0.25rem;">
        <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:0.8rem;">
          <span class="text-white">${p.title}</span>
          <span class="text-cyan" style="font-size:0.75rem;">${p.duration}</span>
        </div>
        <p style="font-size:0.75rem; color:var(--text-slate); margin-top:0.25rem;">${p.description}</p>
      </div>
    `).join(""):"",d=n.languages?n.languages.map(p=>`
      <div style="display:flex; justify-content:space-between;">
        <span class="text-white">${p.name}</span>
        <span class="text-slate">${p.fluency}</span>
      </div>
    `).join(""):"",m=n.interests?n.interests.map(p=>`
      <div style="display:flex; align-items:center; gap:0.5rem;">
        <i class="fa-solid fa-chevron-right text-cyan" style="font-size:0.6rem;"></i>
        <span>${p}</span>
      </div>
    `).join(""):"";return`
      <section id="resume" class="resume-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">12 //</span> PROFESSIONAL RESUME</h2>
            <div class="header-line"></div>
          </div>

          <div class="resume-container glass-card">
            <div class="resume-meta-grid">
              <div class="resume-meta">
                <h3 class="text-white">Curriculum Vitae</h3>
                <p class="text-slate">Review my qualifications, training, and academic background below. You can download
                  the print-ready PDF file for offline viewing.</p>
                <div class="resume-actions">
                  <a href="${e.resumeUrl||"/assets/resume.pdf"}" download class="btn btn-primary" id="download-resume-btn"><i
                      class="fa-solid fa-download"></i> Download PDF</a>
                  <button class="btn btn-secondary" onclick="window.print()"><i class="fa-solid fa-print"></i> Print
                    Document</button>
                </div>
              </div>

              <!-- ATS ANALYZER CARD -->
              <div class="ats-analyzer-card glass-card">
                <div class="ats-header">
                  <span class="logo-text" style="font-size: 0.95rem;"><i class="fa-solid fa-circle-nodes text-cyan"></i>
                    ATS_RESUME_SCANNER</span>
                  <span class="ats-badge monospace-font">SYS: READY</span>
                </div>
                <div class="ats-body-grid">
                  <div class="ats-gauge-container">
                    <svg class="ats-gauge" width="80" height="80" viewBox="0 0 36 36">
                      <path class="gauge-bg"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none"
                        stroke="rgba(30, 41, 59, 0.8)" stroke-width="3" />
                      <path class="gauge-fill"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none"
                        stroke="url(#cyanGrad2)" stroke-width="3" stroke-dasharray="96, 100" id="ats-gauge-fill-arc" />
                    </svg>
                    <div class="ats-score-display monospace-font"><span id="ats-score-val">96</span>%</div>
                  </div>
                  <div class="ats-specs monospace-font">
                    <div><strong>ATS FRIENDLY:</strong> <span class="text-cyan">YES</span></div>
                    <div><strong>ALIGNMENT:</strong> CIVIL / BIM</div>
                    <div><strong>KEYWORDS MATCHED:</strong> <span id="ats-keywords-count">14 / 15</span></div>
                  </div>
                </div>
                <div class="ats-actions">
                  <button class="btn btn-secondary w-full" id="run-ats-scan-btn"><i class="fa-solid fa-qrcode"></i> RUN
                    ATS ALIGNMENT SCAN</button>
                </div>
                <div class="ats-keywords-matches text-xxs" id="ats-keywords-container">
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> AutoCAD</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Revit</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> BIM</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> LOD 300</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Clash Detection</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Navisworks</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> STAAD Pro</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Quantity Takeoff</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Schedules</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> IS 456</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Drafting Tolerance</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Structural Detailing</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Civil 3D</span>
                  <span class="keyword-tag matched"><i class="fa-solid fa-check"></i> Excel</span>
                  <span class="keyword-tag missing"><i class="fa-solid fa-circle-exclamation"></i> Dynamo</span>
                </div>
              </div>
            </div>

            <div class="resume-viewer-frame">
              <div class="resume-viewer-mockup" id="resume-mockup">
                <div class="res-header">
                  <div>
                    <div class="res-name">${e.fullName}</div>
                    <div class="res-title">${e.title}</div>
                  </div>
                  <div class="res-contact-info">
                    <div>${e.email}</div>
                    <div>${e.phone}</div>
                    <div>${e.location}</div>
                    <div>linkedin.com/in/yaswanth-terli-civil</div>
                  </div>
                </div>

                <div class="res-section">
                  <div class="res-sec-title">Objective</div>
                  <div class="res-sec-body">
                    <p style="color: #475569; line-height: 1.5;">${t.objective}</p>
                  </div>
                </div>

                <div class="res-section">
                  <div class="res-sec-title">Education</div>
                  <div class="res-sec-body">
                    ${s}
                  </div>
                </div>

                <div class="res-section">
                  <div class="res-sec-title">Experience</div>
                  <div class="res-sec-body">
                    ${a}
                  </div>
                </div>

                <div class="res-section">
                  <div class="res-sec-title">Skills</div>
                  <div class="res-sec-body">
                    <div class="res-skills-list">
                      ${i.skills?i.skills.map(p=>`<div>• <strong>${p.name}</strong></div>`).join(""):""}
                    </div>
                  </div>
                </div>

                <div class="res-section">
                  <div class="res-sec-title">Credentials</div>
                  <div class="res-sec-body">
                    ${r}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Resume Details Cards Grid -->
          <div class="resume-details-cards-grid monospace-font" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2.5rem;">
            
            <!-- Card 1: Strengths -->
            <div class="glass-card resume-detail-card" style="padding: 1.5rem;">
              <h4 class="text-white card-subtitle" style="font-size: 0.9rem; margin-bottom: 1rem;"><i class="fa-solid fa-star text-cyan"></i> CORE STRENGTHS</h4>
              <ul class="resume-card-list" id="resume-strengths-list" style="list-style: none; font-size: 0.8rem; display: flex; flex-direction: column; gap: 0.6rem; padding-left: 0; margin-top: 0; margin-bottom: 0;">
                ${o}
              </ul>
            </div>

            <!-- Card 2: Academic Projects -->
            <div class="glass-card resume-detail-card" style="padding: 1.5rem; grid-column: span 2;">
              <h4 class="text-white card-subtitle" style="font-size: 0.9rem; margin-bottom: 1rem;"><i class="fa-solid fa-project-diagram text-cyan"></i> ACADEMIC PROJECTS</h4>
              <div id="resume-academic-projects" style="display: flex; flex-direction: column; gap: 0.75rem;">
                ${c}
              </div>
            </div>

            <!-- Card 3: Languages -->
            <div class="glass-card resume-detail-card" style="padding: 1.5rem;">
              <h4 class="text-white card-subtitle" style="font-size: 0.9rem; margin-bottom: 1rem;"><i class="fa-solid fa-language text-cyan"></i> LANGUAGES</h4>
              <div id="resume-languages-list" style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.8rem;">
                ${d}
              </div>
            </div>

            <!-- Card 4: Interests -->
            <div class="glass-card resume-detail-card" style="padding: 1.5rem; grid-column: span 2;">
              <h4 class="text-white card-subtitle" style="font-size: 0.9rem; margin-bottom: 1rem;"><i class="fa-solid fa-compass text-cyan"></i> INTERESTS & FOCUS AREAS</h4>
              <div id="resume-interests-list" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.8rem;">
                ${m}
              </div>
            </div>

          </div>

        </div>
      </section>
    `},init(i){Tm()}};function Tm(){const i=document.getElementById("run-ats-scan-btn"),e=document.getElementById("ats-score-val"),t=document.getElementById("ats-gauge-fill-arc"),n=document.getElementById("ats-keywords-container");i&&i.addEventListener("click",()=>{i.disabled=!0,i.innerHTML='<i class="fa-solid fa-sync fa-spin"></i> PARSING RESUME SECTIONS...',n&&n.classList.remove("active"),e&&(e.innerText="0"),t&&t.setAttribute("stroke-dasharray","0, 100"),setTimeout(()=>{i.innerHTML='<i class="fa-solid fa-crosshairs text-cyan"></i> INDEXING KEYWORDS...',setTimeout(()=>{i.innerHTML='<i class="fa-solid fa-check-double text-emerald-500"></i> ALIGNMENT SCAN COMPLETE',i.disabled=!1;const s=96;let a=0;const r=()=>{a+=4,a<=s&&(e&&(e.innerText=a),t&&t.setAttribute("stroke-dasharray",`${a}, 100`),setTimeout(r,25))};r(),n&&n.classList.add("active")},1e3)},1e3)})}const rl={render(i){return`
      <section id="faq" class="faq-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">12a //</span> FREQUENTLY ASKED QUESTIONS</h2>
            <div class="header-line"></div>
          </div>
          <div class="faq-grid" id="faq-container">
            ${i.faqs?i.faqs.map((t,n)=>`
      <div class="faq-item" data-idx="${n}">
        <div class="faq-question">
          <span>${t.question}</span>
          <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
        </div>
        <div class="faq-answer">
          <p>${t.answer}</p>
        </div>
      </div>
    `).join(""):""}
          </div>
        </div>
      </section>
    `},init(i){const e=document.getElementById("faq-container");e&&e.querySelectorAll(".faq-question").forEach(t=>{t.addEventListener("click",()=>{const n=t.closest(".faq-item"),s=n.classList.contains("active");e.querySelectorAll(".faq-item").forEach(a=>a.classList.remove("active")),s||n.classList.add("active")})})}},ol={render(i){const e=i.personal;return`
      <section id="contact" class="contact-section section-padding border-t">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title"><span class="section-num monospace-font">13 //</span> INITIATE CONTACT</h2>
            <div class="header-line"></div>
          </div>

          <div class="contact-grid">
            <div class="contact-info-panel">
              <div class="glass-card contact-card">
                <h3 class="text-white card-title">Direct Inquiries</h3>
                <p class="text-slate">Feel free to reach out for internship opportunities, full-time employment, or design
                  consultations. I'll get back to you within 24 hours.</p>

                <div class="contact-methods-list monospace-font">
                  <a href="mailto:${e.email}" class="method-item" id="contact-email-link">
                    <div class="method-icon"><i class="fa-solid fa-envelope"></i></div>
                    <div class="method-details">
                      <span class="method-label">EMAIL:</span>
                      <span class="method-val" id="contact-email">${e.email}</span>
                    </div>
                  </a>
                  <a href="tel:${e.phone.replace(/[\s-()]/g,"")}" class="method-item" id="contact-phone-link">
                    <div class="method-icon"><i class="fa-solid fa-phone"></i></div>
                    <div class="method-details">
                      <span class="method-label">PHONE:</span>
                      <span class="method-val" id="contact-phone">${e.phone}</span>
                    </div>
                  </a>
                  <a href="https://wa.me/${e.whatsapp}?text=Hi%20Yaswanth,%20viewed%20your%20portfolio." target="_blank" class="method-item" id="contact-whatsapp-link">
                    <div class="method-icon"><i class="fa-brands fa-whatsapp text-emerald-500"></i></div>
                    <div class="method-details">
                      <span class="method-label">WHATSAPP:</span>
                      <span class="method-val">Quick Connect</span>
                    </div>
                  </a>
                  <div class="method-item">
                    <div class="method-icon"><i class="fa-solid fa-map-location-dot"></i></div>
                    <div class="method-details">
                      <span class="method-label">ADDRESS:</span>
                      <span class="method-val" id="contact-address">${e.location}</span>
                    </div>
                  </div>
                </div>

                <div class="social-links-container">
                  <a href="${e.linkedin}" target="_blank" class="social-link" id="contact-linkedin-link" title="LinkedIn"><i
                      class="fa-brands fa-linkedin-in"></i></a>
                  <a href="${e.github}" target="_blank" class="social-link" id="contact-github-link" title="GitHub"><i
                      class="fa-brands fa-github"></i></a>
                </div>
              </div>
            </div>

            <div class="contact-form-panel">
              <div class="glass-card form-card">
                <h3 class="text-white card-title">Submit Message</h3>
                <form id="portfolio-contact-form" class="contact-form">
                  <div class="form-group">
                    <input type="text" id="form-name" required placeholder=" " class="form-input">
                    <label for="form-name" class="form-label">Full Name</label>
                  </div>
                  <div class="form-group">
                    <input type="email" id="form-email" required placeholder=" " class="form-input">
                    <label for="form-email" class="form-label">Email Address</label>
                  </div>
                  <div class="form-group">
                    <textarea id="form-message" rows="5" required placeholder=" " class="form-input"></textarea>
                    <label for="form-message" class="form-label">Project Details / Message</label>
                  </div>
                  <button type="submit" class="btn btn-primary w-full form-submit-btn">
                    <span>SEND TRANSMISSION</span> <i class="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
                <div class="form-status" id="form-status-msg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `},init(i){const e=document.getElementById("portfolio-contact-form"),t=document.getElementById("form-status-msg");!e||!t||e.addEventListener("submit",n=>{n.preventDefault();const s=e.querySelector(".form-submit-btn");s.disabled=!0,s.querySelector("span").innerText="TRANSMITTING DESIGN...",s.querySelector("i").className="fa-solid fa-sync fa-spin",setTimeout(()=>{t.innerText="TRANSMISSION COMPLETE. Recruiter contact log registered.",t.className="form-status success",s.disabled=!1,s.querySelector("span").innerText="SEND TRANSMISSION",s.querySelector("i").className="fa-solid fa-paper-plane",e.reset(),setTimeout(()=>{t.innerText="",t.className="form-status"},5e3)},1500)})}},Am={render(i){return`
      <footer class="footer border-t">
        <div class="container footer-container">
          <div class="footer-copy">
            <p class="monospace-font text-xs">&copy; 2026 ${i.personal.fullName.toUpperCase()}. ALL RIGHTS RESERVED.</p>
            <p class="text-slate text-xxs">AUTODESK INTEROP INTEGRATION // DESIGN BLOCK: v1.0.0</p>
          </div>
          <div class="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
          </div>
        </div>
      </footer>
    `},init(i){}},ll={render(i){const e=i.personal;return`
      <!-- FLOATING COMPARE TRAY -->
      <div class="compare-tray" id="compare-tray">
        <div class="compare-tray-content monospace-font">
          <span class="compare-count"><i class="fa-solid fa-layer-group text-cyan"></i> <span
              id="compare-count-val">0</span> Selected</span>
          <div class="compare-actions">
            <button class="btn btn-secondary btn-outline" id="clear-compare-btn"
              style="padding: 0.35rem 0.75rem; font-size: 0.7rem;">Clear</button>
            <button class="btn btn-primary" id="trigger-compare-btn"
              style="padding: 0.35rem 0.75rem; font-size: 0.7rem;">Compare</button>
          </div>
        </div>
      </div>

      <!-- PROJECT COMPARISON MODAL -->
      <div class="compare-modal-overlay" id="compare-modal" aria-hidden="true" role="dialog">
        <div class="compare-modal-box glass-card">
          <button class="close-overlay-btn" id="close-compare-modal-btn" aria-label="Close Comparison">
            <i class="fa-solid fa-times"></i>
          </button>
          <h2 class="section-title text-white monospace-font" style="margin-bottom: 2rem;"><span
              class="text-cyan">COMPARE_MATRIX:</span> DESIGN PROJECT GRID</h2>
          <div class="compare-table-wrapper" id="compare-table-container">
            <!-- Rendered dynamically -->
          </div>
        </div>
      </div>

      <!-- STICKY FLOATING QUICK CONTACT CTA -->
      <div class="floating-cta-container" id="floating-cta">
        <button class="floating-cta-trigger" id="floating-cta-btn">
          <i class="fa-solid fa-briefcase"></i>
          <span class="monospace-font">Recruiter Opportunities</span>
          <span class="pulse-dot-green"></span>
        </button>
        <div class="floating-cta-menu glass-card">
          <h4 class="text-white monospace-font"
            style="margin-bottom:0.75rem; font-size:0.75rem; border-bottom:0.5px solid rgba(56,189,248,0.2); padding-bottom:0.25rem;">
            CONNECT CHANNELS</h4>
          <div class="floating-cta-links monospace-font">
            <a href="tel:${e.phone.replace(/[\s-()]/g,"")}" class="floating-cta-link" id="floating-call-link"><i
                class="fa-solid fa-phone text-cyan"></i> CALL DESIGNER</a>
            <a href="mailto:${e.email}" class="floating-cta-link" id="floating-email-link"><i
                class="fa-solid fa-envelope text-cyan"></i> EMAIL INQUIRY</a>
            <a href="https://wa.me/${e.whatsapp}?text=Hi%20Yaswanth,%20viewed%20your%20portfolio." target="_blank" class="floating-cta-link" id="floating-whatsapp-link"><i
                class="fa-brands fa-whatsapp text-emerald-500"></i> WHATSAPP CONNECT</a>
            <a href="${e.linkedin}" target="_blank" class="floating-cta-link"
              id="floating-linkedin-link"><i class="fa-brands fa-linkedin-in text-cyan"></i> LINKEDIN PROFILE</a>
          </div>
        </div>
      </div>

      <!-- 8. PROJECT DETAIL ROUTER / PAGE OVERLAY -->
      <div class="project-detail-overlay" id="project-detail-modal" aria-hidden="true" role="dialog">
        <div class="detail-container-box glass-card">
          <button class="close-overlay-btn" id="close-modal-btn" aria-label="Close Project Detail">
            <i class="fa-solid fa-times"></i>
          </button>
          <div class="detail-modal-body" id="project-detail-body">
            <!-- Filled dynamically based on active project -->
          </div>
        </div>
      </div>

      <!-- GALLERY LIGHTBOX -->
      <div class="lightbox-overlay" id="gallery-lightbox" aria-hidden="true" role="dialog">
        <button class="close-lightbox-btn" id="close-lightbox-btn" aria-label="Close Preview">
          <i class="fa-solid fa-times"></i>
        </button>
        <div class="lightbox-content-box">
          <img src="" alt="" id="lightbox-img">
          <div class="lightbox-caption" id="lightbox-caption">Caption text</div>
        </div>
      </div>
    `},init(i){window.comparedProjectIds=[],window.handleProjectCompareSelect=function(s){const a=s.getAttribute("data-id");s.checked?window.comparedProjectIds.includes(a)||window.comparedProjectIds.push(a):window.comparedProjectIds=window.comparedProjectIds.filter(r=>r!==a),e()},window.viewComparedProject=function(s){const a=document.getElementById("compare-modal");a&&(a.classList.remove("active"),a.setAttribute("aria-hidden","true")),window.openProjectDetail(s)},window.renderProjectDetail=function(s){const a=document.getElementById("project-detail-body");if(!a)return;const r=s.drawingsPreview||[s.image],o=s.caseStudy||{problem:s.challenges||"No problem statement defined.",approach:s.overview||"No approach details provided.",designProcess:s.process||"No process details provided.",outcome:s.description||"No outcome details provided."},c=s.sheets||{plans:"#",elevations:"#",sections:"#",report:"#",boq:"#"},d=s.softwareUsed.map(p=>`<span class="tech-tag-item">${p}</span>`).join(""),m=r.map((p,h)=>`
        <option value="${h}">Sheet ${h+1}: ${h===0?"Model Space Plan":"Section Layout D-"+(100+h)}</option>
      `).join("");a.innerHTML=`
        <div class="proj-detail-header">
          <span class="proj-detail-cat monospace-font">${s.projectType.toUpperCase()} // ${s.category}</span>
          <h1 class="proj-detail-title">${s.title}</h1>
        </div>

        <div class="engineering-viewer glass-card" id="eng-drawing-viewer">
          <div class="viewer-toolbar monospace-font">
            <div class="toolbar-title"><i class="fa-solid fa-expand text-cyan"></i> VIEWER: ${s.id.toUpperCase()}_REV02.DWG</div>
            <div class="toolbar-controls">
              <button class="viewer-btn" id="viewer-zoom-in" title="Zoom In"><i class="fa-solid fa-magnifying-glass-plus"></i></button>
              <button class="viewer-btn" id="viewer-zoom-out" title="Zoom Out"><i class="fa-solid fa-magnifying-glass-minus"></i></button>
              <button class="viewer-btn" id="viewer-zoom-reset" title="Reset Viewport"><i class="fa-solid fa-rotate-left"></i></button>
              <button class="viewer-btn" id="viewer-cad-mode" title="Toggle CAD Space (Invert)"><i class="fa-solid fa-circle-half-stroke"></i> CAD</button>
              <button class="viewer-btn" id="viewer-fullscreen" title="Toggle Fullscreen"><i class="fa-solid fa-expand"></i></button>
              <button class="viewer-btn" id="viewer-grid-toggle" title="Toggle Sheets Grid"><i class="fa-solid fa-table-cells"></i> Sheets</button>
            </div>
          </div>
          
          <div class="viewer-viewport-container" id="viewer-viewport-box">
            <div class="viewer-crosshairs"></div>
            <div class="viewer-coords monospace-font" id="viewer-coords-read">X: 0.00, Y: 0.00</div>
            
            <div class="viewer-canvas-wrapper" id="viewer-canvas-wrap">
              <img id="viewer-active-sheet" src="${r[0]}" alt="${s.title}" onerror="this.src='/assets/images/proj-placeholder.jpg'">
            </div>
            
            <div class="viewer-grid-overlay" id="viewer-grid-overlay">
              <div class="viewer-grid-header">
                <span class="monospace-font text-white">DRAWINGS SHEET INDEX</span>
                <button class="viewer-btn" id="viewer-grid-close"><i class="fa-solid fa-times"></i></button>
              </div>
              <div class="viewer-thumbnails">
                ${r.map((p,h)=>`
                  <div class="viewer-thumb-card" data-idx="${h}">
                    <img src="${p}" onerror="this.src='/assets/images/proj-placeholder.jpg'">
                    <span class="monospace-font">SHEET D-${101+h}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
          
          <div class="viewer-statusbar monospace-font">
            <button class="statusbar-nav" id="viewer-prev-sheet"><i class="fa-solid fa-chevron-left"></i> PREV</button>
            <div class="statusbar-sheet-select">
              <select id="viewer-sheet-select">
                ${m}
              </select>
            </div>
            <button class="statusbar-nav" id="viewer-next-sheet">NEXT <i class="fa-solid fa-chevron-right"></i></button>
            <div class="statusbar-scale">SCALE: 1:${s.projectType==="Structural"?"50":"100"} // UNIT: MM</div>
          </div>
        </div>

        <div class="proj-detail-grid" style="margin-top: 3rem;">
          <div class="proj-detail-content">
            <div>
              <h2 class="proj-detail-section-title">Case Study: Problem Statement</h2>
              <p class="proj-detail-desc text-slate">${o.problem}</p>
            </div>

            <div>
              <h2 class="proj-detail-section-title">Engineering Design Approach</h2>
              <p class="proj-detail-desc text-slate">${o.approach}</p>
            </div>

            <div>
              <h2 class="proj-detail-section-title">Execution & Drafting Process</h2>
              <p class="proj-detail-desc text-slate">${o.designProcess}</p>
            </div>

            <div>
              <h2 class="proj-detail-section-title">Design Deliverables & Outcome</h2>
              <p class="proj-detail-desc text-slate">${o.outcome}</p>
            </div>

            <div class="downloadable-sheets-container">
              <h2 class="proj-detail-section-title">CAD Transmittal Sheets Index & Downloads</h2>
              <div class="sheets-table-wrapper monospace-font">
                <table class="sheets-table">
                  <thead>
                    <tr>
                      <th>SHEET NO.</th>
                      <th>DRAWING TITLE / DOCUMENT</th>
                      <th>FORMAT</th>
                      <th>DOWNLOAD LINK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>D-101</td>
                      <td>Architectural Floor Plans & Section Detail Layouts</td>
                      <td>PDF Vector</td>
                      <td><a href="${c.plans}" download class="sheet-download-link"><i class="fa-solid fa-download"></i> Plan Sheets</a></td>
                    </tr>
                    <tr>
                      <td>D-102</td>
                      <td>Structural Concrete Columns & Beam Layout Drawings</td>
                      <td>PDF Detailing</td>
                      <td><a href="${c.elevations}" download class="sheet-download-link"><i class="fa-solid fa-download"></i> Structural Elevations</a></td>
                    </tr>
                    <tr>
                      <td>D-103</td>
                      <td>Staircase Detail Detailing Cross-Section Sheets</td>
                      <td>PDF Vector</td>
                      <td><a href="${c.sections}" download class="sheet-download-link"><i class="fa-solid fa-download"></i> Section Details</a></td>
                    </tr>
                    <tr>
                      <td>R-101</td>
                      <td>BIM Design & Coordination Structural Report</td>
                      <td>PDF Report</td>
                      <td><a href="${c.report}" download class="sheet-download-link"><i class="fa-solid fa-file-pdf"></i> Technical Report</a></td>
                    </tr>
                    <tr>
                      <td>B-101</td>
                      <td>Bar Bending Schedule & Bill of Quantities (BBS & BOQ)</td>
                      <td>MS Excel</td>
                      <td><a href="${c.boq}" download class="sheet-download-link"><i class="fa-solid fa-file-excel text-emerald-500"></i> Quantity Takeoffs</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            ${s.modelPreview?`
              <div>
                <h2 class="proj-detail-section-title">Interactive Revit 3D Model Showcase</h2>
                <div class="modal-3d-viewport" id="showcase-3d-viewport-box">
                  <div class="modal-3d-toolbar monospace-font">
                    <div class="toolbar-title"><i class="fa-solid fa-cube text-cyan"></i> 3D_SHOWCASE: ${s.modelPreview.toUpperCase()}</div>
                    <div class="toolbar-controls">
                      <button class="viewer-btn" id="showcase-3d-rot-l" title="Rotate Left"><i class="fa-solid fa-rotate-left"></i></button>
                      <button class="viewer-btn" id="showcase-3d-rot-r" title="Rotate Right"><i class="fa-solid fa-rotate-right"></i></button>
                      <button class="viewer-btn" id="showcase-3d-zoom-in" title="Zoom In"><i class="fa-solid fa-plus"></i></button>
                      <button class="viewer-btn" id="showcase-3d-zoom-out" title="Zoom Out"><i class="fa-solid fa-minus"></i></button>
                      <button class="viewer-btn" id="showcase-3d-reset" title="Reset Viewport"><i class="fa-solid fa-home"></i></button>
                      <select id="showcase-3d-shade-mode" class="viewer-btn" style="border:none; border-radius:4px; padding:0 0.5rem; background:rgba(30,41,59,0.85); color:var(--accent);">
                        <option value="wireframe">Wireframe</option>
                        <option value="shaded">Solid Shaded</option>
                        <option value="xray">X-Ray Glass</option>
                      </select>
                      <button class="viewer-btn" id="showcase-3d-fullscreen" title="Toggle Fullscreen"><i class="fa-solid fa-expand"></i></button>
                    </div>
                  </div>
                  <div class="modal-3d-help monospace-font">SYSTEM: LOAD_SUCCESS // ROTATE: DRAG WITH MOUSE // ZOOM: SCROLL WHEEL</div>
                  <canvas id="modal-3d-canvas"></canvas>
                </div>
              </div>
            `:""}
          </div>

          <div class="proj-detail-sidebar">
            <div class="glass-card sidebar-details-card">
              <h3 class="text-white card-title" style="font-size: 1.1rem; margin-bottom: 1rem;"><i class="fa-solid fa-info-circle text-cyan"></i> Specifications</h3>
              
              <div class="sidebar-spec-row">
                <span class="spec-label">PROJECT TYPE:</span>
                <span class="spec-val text-white font-bold monospace-font" style="font-size: 0.8rem;">${s.projectType.toUpperCase()}</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">BUILT-UP AREA:</span>
                <span class="spec-val monospace-font">${s.builtUpArea}</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">FLOORS:</span>
                <span class="spec-val">${s.floors}</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">DRAWINGS SHEET COUNT:</span>
                <span class="spec-val monospace-font">${s.drawingsCount} Sheets</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">STATUS:</span>
                <span class="spec-val monospace-font" style="font-size: 0.8rem; color:#10B981;">${s.status}</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">TIMELINE:</span>
                <span class="spec-val">${s.duration}</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">COMPLEXITY:</span>
                <span class="spec-val monospace-font text-cyan">${s.complexity.toUpperCase()}</span>
              </div>
              <div class="sidebar-spec-row">
                <span class="spec-label">SOFTWARE:</span>
                <div class="tech-tags-list">
                  ${d}
                </div>
              </div>
            </div>
          </div>
        </div>
      `,t(r),s.modelPreview&&n(s.modelPreview)};function e(){const s=document.getElementById("compare-tray"),a=document.getElementById("compare-count-val");!s||!a||(a.innerText=window.comparedProjectIds.length,window.comparedProjectIds.length>0?s.classList.add("active"):s.classList.remove("active"))}function t(s){const a=document.getElementById("viewer-active-sheet"),r=document.getElementById("viewer-viewport-box"),o=document.getElementById("viewer-canvas-wrap"),c=document.getElementById("viewer-coords-read"),d=document.getElementById("viewer-sheet-select"),m=document.getElementById("viewer-zoom-in"),p=document.getElementById("viewer-zoom-out"),h=document.getElementById("viewer-zoom-reset"),g=document.getElementById("viewer-cad-mode"),f=document.getElementById("viewer-fullscreen"),v=document.getElementById("viewer-grid-toggle"),u=document.getElementById("viewer-grid-overlay"),l=document.getElementById("viewer-grid-close"),x=document.getElementById("viewer-prev-sheet"),y=document.getElementById("viewer-next-sheet");if(!a||!o||!r)return;let M=0,A=1,E=0,R=0,b=!1,w=0,L=0;const C=()=>{o.style.transform=`scale(${A}) translate(${E}px, ${R}px)`};m&&m.addEventListener("click",()=>{A=Math.min(A+.25,4),C()}),p&&p.addEventListener("click",()=>{A=Math.max(A-.25,.5),C()}),h&&h.addEventListener("click",()=>{A=1,E=0,R=0,C()}),o.addEventListener("mousedown",k=>{k.preventDefault(),b=!0,w=k.clientX-E,L=k.clientY-R,o.style.cursor="grabbing"}),window.addEventListener("mousemove",k=>{b&&(E=(k.clientX-w)/A,R=(k.clientY-L)/A,C())}),window.addEventListener("mouseup",()=>{b=!1,o&&(o.style.cursor="grab")}),r.addEventListener("mousemove",k=>{if(!c)return;const j=r.getBoundingClientRect(),P=((k.clientX-j.left)*(100/A)).toFixed(2),F=((j.bottom-k.clientY)*(100/A)).toFixed(2);c.innerText=`X: ${P}, Y: ${F}, Z: 0.00`}),g&&g.addEventListener("click",()=>{o.classList.toggle("cad-invert-mode"),g.classList.toggle("active")}),f&&f.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():r.requestFullscreen().catch(k=>{console.error(`Error attempting to enable full-screen: ${k.message}`)})});const N=k=>{M=k,a.src=s[k],d&&(d.value=k),k===0?(o.classList.add("cad-invert-mode"),g&&g.classList.add("active")):(o.classList.remove("cad-invert-mode"),g&&g.classList.remove("active")),A=1,E=0,R=0,C()};d&&d.addEventListener("change",k=>{N(parseInt(k.target.value))}),x&&x.addEventListener("click",()=>{let k=M-1;k<0&&(k=s.length-1),N(k)}),y&&y.addEventListener("click",()=>{let k=M+1;k>=s.length&&(k=0),N(k)}),v&&u&&v.addEventListener("click",()=>{u.classList.toggle("active")}),l&&u&&l.addEventListener("click",()=>{u.classList.remove("active")}),document.querySelectorAll(".viewer-thumb-card").forEach(k=>{k.addEventListener("click",()=>{const j=parseInt(k.getAttribute("data-idx"));N(j),u&&u.classList.remove("active")})}),N(0)}function n(s){const a=document.getElementById("modal-3d-canvas");if(!a)return;const r=a.getContext("2d"),o=document.getElementById("showcase-3d-rot-l"),c=document.getElementById("showcase-3d-rot-r"),d=document.getElementById("showcase-3d-zoom-in"),m=document.getElementById("showcase-3d-zoom-out"),p=document.getElementById("showcase-3d-reset"),h=document.getElementById("showcase-3d-shade-mode"),g=document.getElementById("showcase-3d-fullscreen"),f=document.getElementById("showcase-3d-viewport-box"),v=()=>{a.parentElement&&(a.width=a.parentElement.clientWidth||600,a.height=a.parentElement.clientHeight||400,j())},u=new ResizeObserver(P=>{for(let F of P){const{width:B,height:J}=F.contentRect;B>0&&J>0&&(a.width=B,a.height=J,j())}});a.parentElement&&u.observe(a.parentElement);let l=[],x=[],y=[];s==="interactive-3d-villa"?(l=[{x:-1.2,y:-.8,z:-.8},{x:1.2,y:-.8,z:-.8},{x:1.2,y:-.8,z:.8},{x:-1.2,y:-.8,z:.8},{x:-1.2,y:.4,z:-.8},{x:1.2,y:.4,z:-.8},{x:1.2,y:.4,z:.8},{x:-1.2,y:.4,z:.8},{x:-.4,y:.4,z:-.8},{x:1.2,y:.4,z:-.8},{x:1.2,y:.4,z:.4},{x:-.4,y:.4,z:.4},{x:-.4,y:1.2,z:-.8},{x:1.2,y:1.2,z:-.8},{x:1.2,y:1.2,z:.4},{x:-.4,y:1.2,z:.4}],x=[[0,1],[1,2],[2,3],[3,0],[0,4],[1,5],[2,6],[3,7],[4,5],[5,6],[6,7],[7,4],[8,9],[9,10],[10,11],[11,8],[8,12],[9,13],[10,14],[11,15],[12,13],[13,14],[14,15],[15,12]],y=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[12,13,14,15],[8,9,13,12],[9,10,14,13],[10,11,15,14]]):(l=[{x:-2,y:-.4,z:-.4},{x:-1,y:-.4,z:-.4},{x:0,y:-.4,z:-.4},{x:1,y:-.4,z:-.4},{x:2,y:-.4,z:-.4},{x:-1.5,y:.4,z:-.4},{x:-.5,y:.4,z:-.4},{x:.5,y:.4,z:-.4},{x:1.5,y:.4,z:-.4},{x:-2,y:-.4,z:.4},{x:-1,y:-.4,z:.4},{x:0,y:-.4,z:.4},{x:1,y:-.4,z:.4},{x:2,y:-.4,z:.4},{x:-1.5,y:.4,z:.4},{x:-.5,y:.4,z:.4},{x:.5,y:.4,z:.4},{x:1.5,y:.4,z:.4}],x=[[0,1],[1,2],[2,3],[3,4],[9,10],[10,11],[11,12],[12,13],[5,6],[6,7],[7,8],[14,15],[15,16],[16,17],[0,5],[1,5],[1,6],[2,6],[2,7],[3,7],[3,8],[4,8],[9,14],[10,14],[10,15],[11,15],[11,16],[12,16],[12,17],[13,17],[0,9],[1,10],[2,11],[3,12],[4,13],[5,14],[6,15],[7,16],[8,17]],y=[[0,1,10,9],[1,2,11,10],[2,3,12,11],[3,4,13,12],[5,6,15,14],[6,7,16,15],[7,8,17,16]]);let M=.4,A=.5,E=1,R="wireframe",b=!1,w=0,L=0;const C=(P,F)=>{b=!0,w=P,L=F},N=(P,F)=>{if(!b)return;const B=P-w,J=F-L;A+=B*.01,M+=J*.01,w=P,L=F,j()};a.addEventListener("mousedown",P=>C(P.clientX,P.clientY)),window.addEventListener("mousemove",P=>N(P.clientX,P.clientY)),window.addEventListener("mouseup",()=>{b=!1}),a.addEventListener("touchstart",P=>C(P.touches[0].clientX,P.touches[0].clientY)),window.addEventListener("touchmove",P=>N(P.touches[0].clientX,P.touches[0].clientY)),window.addEventListener("touchend",()=>{b=!1}),o&&o.addEventListener("click",()=>{A-=.15,j()}),c&&c.addEventListener("click",()=>{A+=.15,j()}),d&&d.addEventListener("click",()=>{E=Math.min(E+.15,2.5),j()}),m&&m.addEventListener("click",()=>{E=Math.max(E-.15,.4),j()}),p&&p.addEventListener("click",()=>{M=.4,A=.5,E=1,j()}),h&&h.addEventListener("change",P=>{R=P.target.value,j()}),g&&g.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().then(v):f.requestFullscreen().then(v).catch(P=>{console.error(P)})});function k(P,F,B){const J=Math.min(F,B)*.22*E;let te=P.x*Math.cos(A)-P.z*Math.sin(A),ne=P.x*Math.sin(A)+P.z*Math.cos(A),le=P.y;const ve=le*Math.cos(M)-ne*Math.sin(M);ne=le*Math.sin(M)+ne*Math.cos(M),le=ve;const Ue=3.5,ze=Ue/(Ue-ne);return{x:te*ze*J+F/2,y:-(le*ze)*J+B/2,z:ne}}function j(){r.clearRect(0,0,a.width,a.height),r.strokeStyle="rgba(56, 189, 248, 0.02)",r.lineWidth=.5;for(let F=-10;F<=10;F++)r.beginPath(),r.moveTo(0,a.height/2+F*20),r.lineTo(a.width,a.height/2+F*20),r.stroke(),r.beginPath(),r.moveTo(a.width/2+F*20,0),r.lineTo(a.width/2+F*20,a.height),r.stroke();const P=l.map(F=>k(F,a.width,a.height));(R==="shaded"||R==="xray")&&(r.fillStyle=R==="shaded"?"rgba(30, 41, 59, 0.85)":"rgba(56, 189, 248, 0.15)",r.strokeStyle="#38BDF8",r.lineWidth=1,y.forEach(F=>{r.beginPath(),r.moveTo(P[F[0]].x,P[F[0]].y);for(let B=1;B<F.length;B++)r.lineTo(P[F[B]].x,P[F[B]].y);r.closePath(),r.fill(),r.stroke()})),r.strokeStyle="#2563EB",r.lineWidth=1.5,r.beginPath(),x.forEach(F=>{const B=P[F[0]],J=P[F[1]];r.moveTo(B.x,B.y),r.lineTo(J.x,J.y)}),r.stroke(),r.fillStyle="#38BDF8",P.forEach(F=>{r.beginPath(),r.arc(F.x,F.y,3,0,2*Math.PI),r.fill()})}j()}}},cl={render(i){return`
      <div class="admin-panel-overlay" id="admin-panel-modal" aria-hidden="true" role="dialog">
        <div class="admin-container-box glass-card">
          <button class="close-overlay-btn" id="close-admin-btn" aria-label="Close Admin Panel">
            <i class="fa-solid fa-times"></i>
          </button>

          <div class="admin-modal-body">

            <!-- ADMIN LOGIN STATE -->
            <div id="admin-login-view" class="admin-login-card">
              <div class="cad-badge"><span class="badge-dot"></span>SECURITY CHECK</div>
              <h2 class="text-white monospace-font" style="margin-top: 1rem;">ADMIN AUTHENTICATION</h2>
              <p class="text-slate" style="font-size:0.8rem; margin-bottom: 2rem;">Enter admin passcode to unlock the
                configuration portal.</p>
              <form id="admin-login-form" class="contact-form" style="gap: 1.5rem;">
                <div class="form-group">
                  <input type="password" id="admin-passcode" required placeholder=" " class="form-input">
                  <label for="admin-passcode" class="form-label">Passcode</label>
                </div>
                <button type="submit" class="btn btn-primary w-full">ACCESS CMS PORTAL</button>
              </form>
              <div id="admin-login-error" class="form-status error" style="margin-top: 1.25rem;"></div>
            </div>

            <!-- ADMIN DASHBOARD STATE -->
            <div id="admin-dashboard-view" class="admin-dashboard-layout" style="display: none;">
              <div class="admin-db-header">
                <div>
                  <span class="logo-text">PORTFOLIO <span class="accent-text">CMS BUILDER</span></span>
                  <p class="text-slate text-xxs monospace-font" style="margin-top: 0.25rem;">REFLECT STATE IN BROWSER OR
                    EXPORT TO FILE</p>
                </div>
                <div class="admin-db-header-actions">
                  <button class="btn btn-outline text-rose-500" style="border-color: rgba(239, 68, 68, 0.2);"
                    id="admin-reset-btn"><i class="fa-solid fa-arrow-rotate-left"></i> Reset</button>
                  <button class="btn btn-secondary" id="admin-export-btn"><i class="fa-solid fa-download"></i> Export
                    JSON</button>
                  <button class="btn btn-primary" id="admin-save-btn"><i class="fa-solid fa-save"></i> Save & Apply</button>
                  <button class="btn btn-outline" id="admin-logout-btn"><i class="fa-solid fa-sign-out"></i> Exit</button>
                </div>
              </div>

              <div class="admin-db-body">
                <!-- Sidebar tabs -->
                <div class="admin-db-sidebar">
                  <button class="admin-tab-btn active" data-tab="general">General Info</button>
                  <button class="admin-tab-btn" data-tab="photo">Profile Photo</button>
                  <button class="admin-tab-btn" data-tab="skills-tab">Skills & Software</button>
                  <button class="admin-tab-btn" data-tab="experience-tab">Projects Editor</button>
                  <button class="admin-tab-btn" data-tab="academics-tab">Academics & Experience</button>
                  <button class="admin-tab-btn" data-tab="services-tab">Services, Stats & FAQ</button>
                  <button class="admin-tab-btn" data-tab="resume-details-tab">Resume Details</button>
                  <button class="admin-tab-btn" data-tab="gallery-tab">Gallery Manager</button>
                </div>

                <!-- Forms Content pane -->
                <div class="admin-db-content">

                  <!-- Tab 1: General Info -->
                  <div class="admin-tab-content active" id="tab-general">
                    <h3 class="text-white font-bold" style="margin-bottom: 1.5rem;"><i
                        class="fa-solid fa-user text-cyan"></i> Personal Details</h3>
                    <div class="admin-form-grid">
                      <div class="form-group">
                        <input type="text" id="admin-fullName" placeholder=" " class="form-input">
                        <label for="admin-fullName" class="form-label">Full Name</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-title" placeholder=" " class="form-input">
                        <label for="admin-title" class="form-label">Professional Title</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-location" placeholder=" " class="form-input">
                        <label for="admin-location" class="form-label">Location</label>
                      </div>
                      <div class="form-group">
                        <input type="email" id="admin-email" placeholder=" " class="form-input">
                        <label for="admin-email" class="form-label">Email</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-phone" placeholder=" " class="form-input">
                        <label for="admin-phone" class="form-label">Phone</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-whatsapp" placeholder=" " class="form-input">
                        <label for="admin-whatsapp" class="form-label">WhatsApp (Intl format)</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-nationality" placeholder=" " class="form-input">
                        <label for="admin-nationality" class="form-label">Nationality</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-dob" placeholder=" " class="form-input">
                        <label for="admin-dob" class="form-label">Date of Birth</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-gender" placeholder=" " class="form-input">
                        <label for="admin-gender" class="form-label">Gender</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-resumeUrl" placeholder=" " class="form-input">
                        <label for="admin-resumeUrl" class="form-label">Resume PDF Link</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-linkedin" placeholder=" " class="form-input">
                        <label for="admin-linkedin" class="form-label">LinkedIn URL</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-github" placeholder=" " class="form-input">
                        <label for="admin-github" class="form-label">GitHub URL</label>
                      </div>
                    </div>

                    <h3 class="text-white font-bold" style="margin: 2rem 0 1.5rem;"><i
                        class="fa-solid fa-address-card text-cyan"></i> Career Bio</h3>
                    <div class="form-group" style="margin-bottom: 1.5rem;">
                      <textarea id="admin-summary" rows="3" placeholder=" " class="form-input"></textarea>
                      <label for="admin-summary" class="form-label">Professional Summary</label>
                    </div>
                    <div class="form-group" style="margin-bottom: 1.5rem;">
                      <textarea id="admin-objective" rows="3" placeholder=" " class="form-input"></textarea>
                      <label for="admin-objective" class="form-label">Career Objective</label>
                    </div>
                    <div class="admin-form-grid">
                      <div class="form-group">
                        <input type="text" id="admin-yearsExp" placeholder=" " class="form-input">
                        <label for="admin-yearsExp" class="form-label">Years of Experience</label>
                      </div>
                      <div class="form-group">
                        <input type="text" id="admin-currentStatus" placeholder=" " class="form-input">
                        <label for="admin-currentStatus" class="form-label">Current Status</label>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 2: Profile Photo -->
                  <div class="admin-tab-content" id="tab-photo">
                    <h3 class="text-white font-bold" style="margin-bottom: 1rem;"><i
                        class="fa-solid fa-image text-cyan"></i> Profile Image</h3>
                    <p class="text-slate" style="font-size:0.8rem; margin-bottom: 2rem;">Upload a new profile picture. It
                      will be stored in your browser as a Base64 string and reflected on the portfolio. Use "Export JSON" to
                      compile it into your settings.</p>

                    <div class="photo-upload-zone">
                      <div class="photo-preview-box">
                        <img id="admin-photo-preview" src="" alt="Profile Preview"
                          style="width:100%; height:100%; object-fit:cover;">
                      </div>
                      <div class="file-uploader-box">
                        <input type="file" id="admin-photo-file" accept="image/*" class="photo-file-input">
                        <div class="uploader-overlay">
                          <i class="fa-solid fa-cloud-upload-alt text-cyan"
                            style="font-size: 2rem; margin-bottom:0.5rem;"></i>
                          <span class="monospace-font" style="font-size: 0.8rem;">Select Image File</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Tab 3: Skills & Software -->
                  <div class="admin-tab-content" id="tab-skills-tab">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-sliders text-cyan"></i> Technical Skill Levels</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;" id="add-skill-btn"><i class="fa-solid fa-plus"></i> ADD SKILL</button>
                    </div>
                    <div id="admin-skills-list-container" class="admin-sliders-list">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin: 2.5rem 0 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-laptop-code text-cyan"></i> Software Proficiencies</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;" id="add-software-btn"><i class="fa-solid fa-plus"></i> ADD SOFTWARE</button>
                    </div>
                    <div id="admin-software-list-container" class="admin-sliders-list">
                      <!-- Generated dynamically -->
                    </div>
                  </div>

                  <!-- Tab 4: Projects & Timeline -->
                  <div class="admin-tab-content" id="tab-experience-tab">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-briefcase text-cyan"></i> Manage Projects</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-project-btn"><i class="fa-solid fa-plus"></i> ADD NEW PROJECT</button>
                    </div>
                    <div id="admin-projects-list-container" class="admin-items-editor-list">
                      <!-- Generated dynamically -->
                    </div>
                  </div>

                  <!-- Tab 5: Academics & Experience -->
                  <div class="admin-tab-content" id="tab-academics-tab">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-graduation-cap text-cyan"></i> Education History</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-education-btn"><i class="fa-solid fa-plus"></i> ADD EDUCATION</button>
                    </div>
                    <div id="admin-education-list-container" class="admin-items-editor-list" style="margin-bottom: 3rem;">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-briefcase text-cyan"></i> Work Experience</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-experience-btn"><i class="fa-solid fa-plus"></i> ADD EXPERIENCE</button>
                    </div>
                    <div id="admin-experience-list-container" class="admin-items-editor-list" style="margin-bottom: 3rem;">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-certificate text-cyan"></i> Certifications</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-cert-btn"><i class="fa-solid fa-plus"></i> ADD CERTIFICATE</button>
                    </div>
                    <div id="admin-certs-list-container" class="admin-items-editor-list">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 3rem; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-trophy text-cyan"></i> Achievements</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-achievement-btn"><i class="fa-solid fa-plus"></i> ADD ACHIEVEMENT</button>
                    </div>
                    <div id="admin-achievements-list-container" class="admin-items-editor-list">
                      <!-- Generated dynamically -->
                    </div>
                  </div>

                  <!-- Tab 6: Services, Stats & FAQ -->
                  <div class="admin-tab-content" id="tab-services-tab">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-gears text-cyan"></i> Services Offered</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-service-btn"><i class="fa-solid fa-plus"></i> ADD SERVICE</button>
                    </div>
                    <div id="admin-services-list-container" class="admin-items-editor-list" style="margin-bottom: 3rem;">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-chart-column text-cyan"></i> Project Statistics</h3>
                    </div>
                    <div id="admin-stats-list-container" class="admin-items-editor-list" style="margin-bottom: 3rem;">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-circle-question text-cyan"></i> FAQ Accordions</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-faq-btn"><i class="fa-solid fa-plus"></i> ADD FAQ</button>
                    </div>
                    <div id="admin-faqs-list-container" class="admin-items-editor-list">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 3rem; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-comment-dots text-cyan"></i> Testimonials</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-testimonial-btn"><i class="fa-solid fa-plus"></i> ADD TESTIMONIAL</button>
                    </div>
                    <div id="admin-testimonials-list-container" class="admin-items-editor-list" style="margin-bottom: 3rem;">
                      <!-- Generated dynamically -->
                    </div>
                  </div>

                  <!-- Tab 7: Resume Details -->
                  <div class="admin-tab-content" id="tab-resume-details-tab">
                    <h3 class="text-white font-bold" style="margin-bottom: 1.5rem;"><i class="fa-solid fa-file-invoice text-cyan"></i> Resume Technical Details</h3>
                    
                    <div class="form-group" style="margin-bottom: 1.5rem;">
                      <textarea id="admin-resume-strengths" rows="2" placeholder=" " class="form-input"></textarea>
                      <label for="admin-resume-strengths" class="form-label">Key Strengths (Comma separated)</label>
                    </div>

                    <div class="form-group" style="margin-bottom: 1.5rem;">
                      <textarea id="admin-resume-interests" rows="2" placeholder=" " class="form-input"></textarea>
                      <label for="admin-resume-interests" class="form-label">Hobbies & Interests (Comma separated)</label>
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 2rem; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold" style="font-size: 1rem;"><i class="fa-solid fa-language text-cyan"></i> Languages Known</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-resume-lang-btn"><i class="fa-solid fa-plus"></i> ADD LANGUAGE</button>
                    </div>
                    <div id="admin-resume-lang-container" class="admin-items-editor-list" style="margin-bottom: 2.5rem;">
                      <!-- Generated dynamically -->
                    </div>

                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 2rem; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold" style="font-size: 1rem;"><i class="fa-solid fa-diagram-project text-cyan"></i> Academic Projects</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-resume-acad-btn"><i class="fa-solid fa-plus"></i> ADD ACADEMIC PROJECT</button>
                    </div>
                    <div id="admin-resume-acad-container" class="admin-items-editor-list">
                      <!-- Generated dynamically -->
                    </div>
                  </div>

                  <!-- Tab 8: Gallery Manager -->
                  <div class="admin-tab-content" id="tab-gallery-tab">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
                      <h3 class="text-white font-bold"><i class="fa-solid fa-images text-cyan"></i> Portfolio Gallery</h3>
                      <button class="btn btn-secondary btn-outline" style="padding: 0.35rem 0.75rem; font-size: 0.7rem;"
                        id="add-gallery-item-btn"><i class="fa-solid fa-plus"></i> ADD GALLERY ITEM</button>
                    </div>
                    <div id="admin-gallery-container" class="admin-items-editor-list">
                      <!-- Generated dynamically -->
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    `},init(i){let e=i;t(),n(),window.checkAdminLoginState=t;function t(){const f=sessionStorage.getItem("portfolio_admin_logged_in")==="true",v=document.getElementById("admin-login-view"),u=document.getElementById("admin-dashboard-view");f?(v&&(v.style.display="none"),u&&(u.style.display="block"),s()):(v&&(v.style.display="block"),u&&(u.style.display="none"))}function n(){const f=document.getElementById("admin-login-form"),v=document.getElementById("admin-login-error");f&&f.addEventListener("submit",ne=>{ne.preventDefault(),document.getElementById("admin-passcode").value==="Yashu@123"?(sessionStorage.setItem("portfolio_admin_logged_in","true"),v&&(v.innerText=""),f.reset(),t()):v&&(v.innerText="INVALID PASSCODE. ACCESS BLOCKED.")});const u=document.getElementById("admin-logout-btn");u&&u.addEventListener("click",()=>{sessionStorage.removeItem("portfolio_admin_logged_in"),t()});const l=document.querySelectorAll(".admin-tab-btn");l.forEach(ne=>{ne.addEventListener("click",()=>{l.forEach(ve=>ve.classList.remove("active")),ne.classList.add("active");const le=ne.getAttribute("data-tab");document.querySelectorAll(".admin-tab-content").forEach(ve=>{ve.classList.remove("active")}),document.getElementById(`tab-${le}`).classList.add("active")})});const x=document.getElementById("admin-reset-btn");x&&x.addEventListener("click",()=>{confirm("Are you sure you want to discard ALL modifications and restore defaults?")&&(localStorage.removeItem("portfolio_custom_profile"),location.reload())});const y=document.getElementById("admin-export-btn");y&&y.addEventListener("click",()=>{o();const ne="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e,null,2)),le=document.createElement("a");le.setAttribute("href",ne),le.setAttribute("download","profile.json"),document.body.appendChild(le),le.click(),le.remove()});const M=document.getElementById("admin-save-btn");M&&M.addEventListener("click",()=>{o(),localStorage.setItem("portfolio_custom_profile",JSON.stringify(e)),alert("CMS state saved locally inside browser cache. Portfolio reloaded."),location.reload()});const A=document.getElementById("admin-photo-file"),E=document.getElementById("admin-photo-preview");A&&E&&A.addEventListener("change",ne=>{const le=ne.target.files[0];if(le){const ve=new FileReader;ve.onload=Ue=>{const ze=Ue.target.result;E.src=ze,e.personal.profilePhoto=ze},ve.readAsDataURL(le)}});const R=document.getElementById("add-skill-btn");R&&R.addEventListener("click",()=>{e.skills.push({name:"New Technical Skill",level:80}),a()});const b=document.getElementById("add-software-btn");b&&b.addEventListener("click",()=>{e.softwareProficiency.push({name:"New Software",percentage:80}),a()});const w=document.getElementById("add-project-btn");w&&w.addEventListener("click",()=>{const le={id:`project-${Date.now()}`,title:"New Drafting Design Project",category:"AutoCAD Drafting",description:"Standard project summary and specifications layout.",overview:"A details overview describing spacing planning and dimension coordinates.",challenges:"Adhering to municipal setbacks and structural grid margins.",process:"Formulated spatial lines, drafted structural concrete frames.",softwareUsed:["AutoCAD","Excel"],duration:"3 Weeks",status:"In Progress",image:"/assets/images/proj-residential.jpg",builtUpArea:"2,000 sq ft",floors:"G+1",drawingsCount:8,complexity:"Intermediate",caseStudy:{problem:"Sample problem statement...",approach:"Sample approach...",designProcess:"Sample process...",outcome:"Sample outcome..."},sheets:{plans:"#",elevations:"#",sections:"#",report:"#",boq:"#"}};e.projects.push(le),r()});const L=document.getElementById("add-education-btn");L&&L.addEventListener("click",()=>{e.education.push({degree:"New Certificate / Degree",branch:"Civil Detailing",collegeName:"College Name",university:"University",cgpa:"80%",startYear:"2020",endYear:"2024"}),c()});const C=document.getElementById("add-experience-btn");C&&C.addEventListener("click",()=>{e.experience.push({company:"New Company",position:"Design Engineer",duration:"3 Months",description:"Assisted in AutoCAD layouts design."}),c()});const N=document.getElementById("add-cert-btn");N&&N.addEventListener("click",()=>{e.certifications.push({name:"Autodesk Workshop",organization:"Autodesk",issueDate:"2026",link:"#",image:"/assets/images/cert-placeholder.jpg"}),c()});const k=document.getElementById("add-service-btn");k&&k.addEventListener("click",()=>{e.services.push({title:"New Drafting Service",desc:"Precision structural plans and detailing.",icon:"fa-draw-polygon"}),d()});const j=document.getElementById("add-faq-btn");j&&j.addEventListener("click",()=>{e.faqs.push({question:"New Question?",answer:"Accordion answer detail goes here."}),d()});const P=document.getElementById("add-achievement-btn");P&&P.addEventListener("click",()=>{e.achievements||(e.achievements=[]),e.achievements.push({title:"New Achievement",description:"Details about the award or achievement.",category:"Other"}),m()});const F=document.getElementById("add-testimonial-btn");F&&F.addEventListener("click",()=>{e.testimonials||(e.testimonials=[]),e.testimonials.push({name:"Client / Colleague",designation:"Role",company:"Company Name",feedback:"Yaswanth did a great job.",photo:"/assets/images/user-placeholder.jpg"}),p()});const B=document.getElementById("add-resume-lang-btn");B&&B.addEventListener("click",()=>{e.resumeData||(e.resumeData={}),e.resumeData.languages||(e.resumeData.languages=[]),e.resumeData.languages.push({name:"New Language",fluency:"Professional"}),h()});const J=document.getElementById("add-resume-acad-btn");J&&J.addEventListener("click",()=>{e.resumeData||(e.resumeData={}),e.resumeData.academicProjects||(e.resumeData.academicProjects=[]),e.resumeData.academicProjects.push({title:"New Design Project Study",duration:"4 Weeks",description:"Conducted studies and prepared reports."}),h()});const te=document.getElementById("add-gallery-item-btn");te&&te.addEventListener("click",()=>{e.gallery||(e.gallery=[]),e.gallery.push({url:"/assets/images/gallery-placeholder.jpg",caption:"New CAD Blueprint Sheet",type:"AutoCAD Drawings"}),g()})}function s(){const f=e.personal,v=e.about;document.getElementById("admin-fullName").value=f.fullName,document.getElementById("admin-title").value=f.title,document.getElementById("admin-location").value=f.location,document.getElementById("admin-email").value=f.email,document.getElementById("admin-phone").value=f.phone,document.getElementById("admin-whatsapp").value=f.whatsapp,document.getElementById("admin-nationality").value=f.nationality,document.getElementById("admin-dob").value=f.dateOfBirth,document.getElementById("admin-gender").value=f.gender,document.getElementById("admin-resumeUrl").value=f.resumeUrl||"",document.getElementById("admin-linkedin").value=f.linkedin||"",document.getElementById("admin-github").value=f.github||"",document.getElementById("admin-summary").value=v.summary,document.getElementById("admin-objective").value=v.objective,document.getElementById("admin-yearsExp").value=v.yearsOfExperience,document.getElementById("admin-currentStatus").value=v.currentStatus;const u=document.getElementById("admin-photo-preview");u&&(u.src=f.profilePhoto||"/assets/images/profile.jpg"),a(),r(),c(),d(),m(),p(),h(),g()}function a(){const f=document.getElementById("admin-skills-list-container");f&&(f.innerHTML=e.skills.map((u,l)=>`
          <div class="admin-slider-row" data-idx="${l}" style="display: grid; grid-template-columns: 180px 1fr 60px 40px; gap: 1.5rem; align-items: center;">
            <input type="text" class="form-input skill-edit-name" value="${u.name}" placeholder=" " style="font-size:0.85rem; padding:0.25rem 0; border:none; border-bottom:1.5px solid rgba(148,163,184,0.2); background:none; color:var(--text-white);">
            <input type="range" class="admin-slider-input skill-slider" min="0" max="100" value="${u.level}">
            <span class="admin-slider-val">${u.level}%</span>
            <button class="admin-item-delete-btn" onclick="deleteAdminSkill(${l})"><i class="fa-solid fa-trash"></i></button>
          </div>
        `).join(""),f.querySelectorAll(".admin-slider-row").forEach(u=>{const l=parseInt(u.getAttribute("data-idx"));u.querySelector(".skill-edit-name").addEventListener("change",x=>{e.skills[l].name=x.target.value}),u.querySelector(".skill-slider").addEventListener("input",x=>{const y=x.target.value;u.querySelector(".admin-slider-val").innerText=`${y}%`,e.skills[l].level=parseInt(y)})}));const v=document.getElementById("admin-software-list-container");v&&(v.innerHTML=e.softwareProficiency.map((u,l)=>`
          <div class="admin-slider-row" data-idx="${l}" style="display: grid; grid-template-columns: 180px 1fr 60px 40px; gap: 1.5rem; align-items: center;">
            <input type="text" class="form-input software-edit-name" value="${u.name}" placeholder=" " style="font-size:0.85rem; padding:0.25rem 0; border:none; border-bottom:1.5px solid rgba(148,163,184,0.2); background:none; color:var(--text-white);">
            <input type="range" class="admin-slider-input software-slider" min="0" max="100" value="${u.percentage}">
            <span class="admin-slider-val">${u.percentage}%</span>
            <button class="admin-item-delete-btn" onclick="deleteAdminSoftware(${l})"><i class="fa-solid fa-trash"></i></button>
          </div>
        `).join(""),v.querySelectorAll(".admin-slider-row").forEach(u=>{const l=parseInt(u.getAttribute("data-idx"));u.querySelector(".software-edit-name").addEventListener("change",x=>{e.softwareProficiency[l].name=x.target.value}),u.querySelector(".software-slider").addEventListener("input",x=>{const y=x.target.value;u.querySelector(".admin-slider-val").innerText=`${y}%`,e.softwareProficiency[l].percentage=parseInt(y)})}))}function r(){const f=document.getElementById("admin-projects-list-container");f&&(f.innerHTML=e.projects.map((v,u)=>{const l=v.caseStudy||{problem:"",approach:"",designProcess:"",outcome:""},x=v.sheets||{plans:"",elevations:"",sections:"",report:"",boq:""};return`
          <div class="admin-item-row" data-proj-id="${v.id}" data-idx="${u}" style="border: 1.5px solid var(--accent); margin-bottom: 2rem; padding: 1.5rem;">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[${u+1}] ID: ${v.id}</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminProject('${v.id}')"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input proj-edit-title" value="${v.title}" placeholder=" ">
                <label class="form-label">Project Title</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-cat" value="${v.category}" placeholder=" ">
                <label class="form-label">Category</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-duration" value="${v.duration}" placeholder=" ">
                <label class="form-label">Duration</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-status" value="${v.status}" placeholder=" ">
                <label class="form-label">Status</label>
              </div>
            </div>

            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input proj-edit-builtUpArea" value="${v.builtUpArea||""}" placeholder=" ">
                <label class="form-label">Built-Up Area</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-floors" value="${v.floors||""}" placeholder=" ">
                <label class="form-label">Floors</label>
              </div>
              <div class="form-group">
                <input type="number" class="form-input proj-edit-drawingsCount" value="${v.drawingsCount||0}" placeholder=" ">
                <label class="form-label">Drawings Count</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-complexity" value="${v.complexity||""}" placeholder=" ">
                <label class="form-label">Complexity</label>
              </div>
            </div>

            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input proj-edit-tech" value="${v.softwareUsed?v.softwareUsed.join(", "):""}" placeholder=" ">
                <label class="form-label">Software/Tech Used (comma-separated)</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-image" value="${v.image||""}" placeholder=" ">
                <label class="form-label">Project Image URL or Path</label>
              </div>
              <div class="form-group" style="display:flex; flex-direction:column; justify-content:center;">
                <input type="file" class="proj-edit-image-file" accept="image/*" style="font-size:0.75rem;">
                <div class="text-xxs text-slate" style="margin-top:0.2rem;">Or upload image file</div>
              </div>
            </div>

            <div class="form-group">
              <textarea class="form-input proj-edit-desc" placeholder=" " rows="2">${v.description}</textarea>
              <label class="form-label">Card Summary Description</label>
            </div>
            <div class="form-group">
              <textarea class="form-input proj-edit-overview" placeholder=" " rows="3">${v.overview||""}</textarea>
              <label class="form-label">Detailed Project Overview</label>
            </div>

            <!-- Case Study Fields -->
            <h4 class="text-cyan monospace-font" style="font-size:0.75rem; margin-top:0.5rem; border-bottom:0.5px solid rgba(56,189,248,0.1); padding-bottom:0.25rem;">CASE STUDY DETAILS</h4>
            <div class="admin-form-grid">
              <div class="form-group">
                <textarea class="form-input proj-edit-cs-problem" placeholder=" " rows="2">${l.problem||""}</textarea>
                <label class="form-label">Case Study: Problem / Challenges</label>
              </div>
              <div class="form-group">
                <textarea class="form-input proj-edit-cs-approach" placeholder=" " rows="2">${l.approach||""}</textarea>
                <label class="form-label">Case Study: Approach</label>
              </div>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <textarea class="form-input proj-edit-cs-process" placeholder=" " rows="2">${l.designProcess||""}</textarea>
                <label class="form-label">Case Study: Process</label>
              </div>
              <div class="form-group">
                <textarea class="form-input proj-edit-cs-outcome" placeholder=" " rows="2">${l.outcome||""}</textarea>
                <label class="form-label">Case Study: Outcome / Deliverables</label>
              </div>
            </div>

            <!-- Document Sheets -->
            <h4 class="text-cyan monospace-font" style="font-size:0.75rem; margin-top:0.5rem; border-bottom:0.5px solid rgba(56,189,248,0.1); padding-bottom:0.25rem;">CAD / BIM TRANSMITTAL DOWNLOAD LINKS</h4>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input proj-edit-sheet-plans" value="${x.plans||""}" placeholder=" ">
                <label class="form-label">D-101 Floor Plans Link</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-sheet-elevations" value="${x.elevations||""}" placeholder=" ">
                <label class="form-label">D-102 Elevations Link</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-sheet-sections" value="${x.sections||""}" placeholder=" ">
                <label class="form-label">D-103 Section Details Link</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-sheet-report" value="${x.report||""}" placeholder=" ">
                <label class="form-label">R-101 Report Link</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input proj-edit-sheet-boq" value="${x.boq||""}" placeholder=" ">
                <label class="form-label">B-101 BOQ / QTO Link</label>
              </div>
            </div>

            <div class="admin-reorder-buttons" style="display: flex; gap: 0.5rem; margin-top: 0.5rem; border-top: 0.5px solid rgba(56,189,248,0.1); padding-top: 0.5rem;">
              <button class="btn btn-secondary btn-outline reorder-up-btn" style="padding: 0.25rem 0.5rem; font-size: 0.65rem;" onclick="moveProjectUp(${u})"><i class="fa-solid fa-arrow-up"></i> Move Up</button>
              <button class="btn btn-secondary btn-outline reorder-down-btn" style="padding: 0.25rem 0.5rem; font-size: 0.65rem;" onclick="moveProjectDown(${u})"><i class="fa-solid fa-arrow-down"></i> Move Down</button>
            </div>
          </div>
        `}).join(""),f.querySelectorAll(".admin-item-row").forEach(v=>{const u=parseInt(v.getAttribute("data-idx"));v.querySelector(".proj-edit-title").addEventListener("change",l=>{e.projects[u].title=l.target.value}),v.querySelector(".proj-edit-cat").addEventListener("change",l=>{e.projects[u].category=l.target.value}),v.querySelector(".proj-edit-duration").addEventListener("change",l=>{e.projects[u].duration=l.target.value}),v.querySelector(".proj-edit-status").addEventListener("change",l=>{e.projects[u].status=l.target.value}),v.querySelector(".proj-edit-builtUpArea").addEventListener("change",l=>{e.projects[u].builtUpArea=l.target.value}),v.querySelector(".proj-edit-floors").addEventListener("change",l=>{e.projects[u].floors=l.target.value}),v.querySelector(".proj-edit-drawingsCount").addEventListener("change",l=>{e.projects[u].drawingsCount=parseInt(l.target.value)||0}),v.querySelector(".proj-edit-complexity").addEventListener("change",l=>{e.projects[u].complexity=l.target.value}),v.querySelector(".proj-edit-tech").addEventListener("change",l=>{e.projects[u].softwareUsed=l.target.value.split(",").map(x=>x.trim()).filter(Boolean)}),v.querySelector(".proj-edit-image").addEventListener("change",l=>{e.projects[u].image=l.target.value}),v.querySelector(".proj-edit-image-file").addEventListener("change",l=>{const x=l.target.files[0];if(x){const y=new FileReader;y.onload=M=>{const A=M.target.result;e.projects[u].image=A,v.querySelector(".proj-edit-image").value=A},y.readAsDataURL(x)}}),v.querySelector(".proj-edit-desc").addEventListener("change",l=>{e.projects[u].description=l.target.value}),v.querySelector(".proj-edit-overview").addEventListener("change",l=>{e.projects[u].overview=l.target.value}),e.projects[u].caseStudy||(e.projects[u].caseStudy={problem:"",approach:"",designProcess:"",outcome:""}),v.querySelector(".proj-edit-cs-problem").addEventListener("change",l=>{e.projects[u].caseStudy.problem=l.target.value}),v.querySelector(".proj-edit-cs-approach").addEventListener("change",l=>{e.projects[u].caseStudy.approach=l.target.value}),v.querySelector(".proj-edit-cs-process").addEventListener("change",l=>{e.projects[u].caseStudy.designProcess=l.target.value}),v.querySelector(".proj-edit-cs-outcome").addEventListener("change",l=>{e.projects[u].caseStudy.outcome=l.target.value}),e.projects[u].sheets||(e.projects[u].sheets={plans:"",elevations:"",sections:"",report:"",boq:""}),v.querySelector(".proj-edit-sheet-plans").addEventListener("change",l=>{e.projects[u].sheets.plans=l.target.value}),v.querySelector(".proj-edit-sheet-elevations").addEventListener("change",l=>{e.projects[u].sheets.elevations=l.target.value}),v.querySelector(".proj-edit-sheet-sections").addEventListener("change",l=>{e.projects[u].sheets.sections=l.target.value}),v.querySelector(".proj-edit-sheet-report").addEventListener("change",l=>{e.projects[u].sheets.report=l.target.value}),v.querySelector(".proj-edit-sheet-boq").addEventListener("change",l=>{e.projects[u].sheets.boq=l.target.value})}))}function o(){const f=e.personal,v=e.about;f.fullName=document.getElementById("admin-fullName").value,f.title=document.getElementById("admin-title").value,f.location=document.getElementById("admin-location").value,f.email=document.getElementById("admin-email").value,f.phone=document.getElementById("admin-phone").value,f.whatsapp=document.getElementById("admin-whatsapp").value,f.nationality=document.getElementById("admin-nationality").value,f.dateOfBirth=document.getElementById("admin-dob").value,f.gender=document.getElementById("admin-gender").value,f.resumeUrl=document.getElementById("admin-resumeUrl").value,f.linkedin=document.getElementById("admin-linkedin").value,f.github=document.getElementById("admin-github").value,v.summary=document.getElementById("admin-summary").value,v.objective=document.getElementById("admin-objective").value,v.yearsOfExperience=document.getElementById("admin-yearsExp").value,v.currentStatus=document.getElementById("admin-currentStatus").value,e.resumeData||(e.resumeData={});const u=document.getElementById("admin-resume-strengths");u&&(e.resumeData.strengths=u.value.split(",").map(x=>x.trim()).filter(x=>x!==""));const l=document.getElementById("admin-resume-interests");l&&(e.resumeData.interests=l.value.split(",").map(x=>x.trim()).filter(x=>x!==""))}function c(){const f=document.getElementById("admin-education-list-container");f&&e.education&&(f.innerHTML=e.education.map((l,x)=>`
          <div class="admin-item-row" data-idx="${x}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[Edu ${x+1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminEducation(${x})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input edu-edit-degree" value="${l.degree}" placeholder=" ">
                <label class="form-label">Degree</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input edu-edit-branch" value="${l.branch}" placeholder=" ">
                <label class="form-label">Branch</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input edu-edit-college" value="${l.collegeName}" placeholder=" ">
                <label class="form-label">College</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input edu-edit-univ" value="${l.university}" placeholder=" ">
                <label class="form-label">University</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input edu-edit-cgpa" value="${l.cgpa}" placeholder=" ">
                <label class="form-label">Score / CGPA</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input edu-edit-start" value="${l.startYear}" placeholder=" ">
                <label class="form-label">Start Year</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input edu-edit-end" value="${l.endYear}" placeholder=" ">
                <label class="form-label">End Year</label>
              </div>
            </div>
          </div>
        `).join(""),f.querySelectorAll(".admin-item-row").forEach(l=>{const x=parseInt(l.getAttribute("data-idx"));l.querySelector(".edu-edit-degree").addEventListener("change",y=>{e.education[x].degree=y.target.value}),l.querySelector(".edu-edit-branch").addEventListener("change",y=>{e.education[x].branch=y.target.value}),l.querySelector(".edu-edit-college").addEventListener("change",y=>{e.education[x].collegeName=y.target.value}),l.querySelector(".edu-edit-univ").addEventListener("change",y=>{e.education[x].university=y.target.value}),l.querySelector(".edu-edit-cgpa").addEventListener("change",y=>{e.education[x].cgpa=y.target.value}),l.querySelector(".edu-edit-start").addEventListener("change",y=>{e.education[x].startYear=y.target.value}),l.querySelector(".edu-edit-end").addEventListener("change",y=>{e.education[x].endYear=y.target.value})}));const v=document.getElementById("admin-experience-list-container");v&&e.experience&&(v.innerHTML=e.experience.map((l,x)=>`
          <div class="admin-item-row" data-idx="${x}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[Exp ${x+1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminExperience(${x})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input exp-edit-company" value="${l.company}" placeholder=" ">
                <label class="form-label">Company Name</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input exp-edit-position" value="${l.position}" placeholder=" ">
                <label class="form-label">Position / Role</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input exp-edit-duration" value="${l.duration}" placeholder=" ">
                <label class="form-label">Duration</label>
              </div>
            </div>
            <div class="form-group" style="margin-top: 1rem;">
              <textarea class="form-input exp-edit-desc" rows="2" placeholder=" ">${l.description}</textarea>
              <label class="form-label">Description</label>
            </div>
          </div>
        `).join(""),v.querySelectorAll(".admin-item-row").forEach(l=>{const x=parseInt(l.getAttribute("data-idx"));l.querySelector(".exp-edit-company").addEventListener("change",y=>{e.experience[x].company=y.target.value}),l.querySelector(".exp-edit-position").addEventListener("change",y=>{e.experience[x].position=y.target.value}),l.querySelector(".exp-edit-duration").addEventListener("change",y=>{e.experience[x].duration=y.target.value}),l.querySelector(".exp-edit-desc").addEventListener("change",y=>{e.experience[x].description=y.target.value})}));const u=document.getElementById("admin-certs-list-container");u&&e.certifications&&(u.innerHTML=e.certifications.map((l,x)=>`
          <div class="admin-item-row" data-idx="${x}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[Cert ${x+1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminCert(${x})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input cert-edit-name" value="${l.name}" placeholder=" ">
                <label class="form-label">Certificate Name</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input cert-edit-org" value="${l.organization}" placeholder=" ">
                <label class="form-label">Issuing Organization</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input cert-edit-date" value="${l.issueDate}" placeholder=" ">
                <label class="form-label">Issue Date</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input cert-edit-link" value="${l.link}" placeholder=" ">
                <label class="form-label">Verification Link</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input cert-edit-image" value="${l.image}" placeholder=" ">
                <label class="form-label">Image Path</label>
              </div>
            </div>
          </div>
        `).join(""),u.querySelectorAll(".admin-item-row").forEach(l=>{const x=parseInt(l.getAttribute("data-idx"));l.querySelector(".cert-edit-name").addEventListener("change",y=>{e.certifications[x].name=y.target.value}),l.querySelector(".cert-edit-org").addEventListener("change",y=>{e.certifications[x].organization=y.target.value}),l.querySelector(".cert-edit-date").addEventListener("change",y=>{e.certifications[x].issueDate=y.target.value}),l.querySelector(".cert-edit-link").addEventListener("change",y=>{e.certifications[x].link=y.target.value}),l.querySelector(".cert-edit-image").addEventListener("change",y=>{e.certifications[x].image=y.target.value})}))}function d(){const f=document.getElementById("admin-services-list-container");f&&e.services&&(f.innerHTML=e.services.map((l,x)=>`
          <div class="admin-item-row" data-idx="${x}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[Service ${x+1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminService(${x})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input serv-edit-title" value="${l.title}" placeholder=" ">
                <label class="form-label">Service Title</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input serv-edit-icon" value="${l.icon}" placeholder=" ">
                <label class="form-label">FontAwesome Icon</label>
              </div>
            </div>
            <div class="form-group" style="margin-top: 1rem;">
              <textarea class="form-input serv-edit-desc" rows="2" placeholder=" ">${l.desc}</textarea>
              <label class="form-label">Description</label>
            </div>
          </div>
        `).join(""),f.querySelectorAll(".admin-item-row").forEach(l=>{const x=parseInt(l.getAttribute("data-idx"));l.querySelector(".serv-edit-title").addEventListener("change",y=>{e.services[x].title=y.target.value}),l.querySelector(".serv-edit-icon").addEventListener("change",y=>{e.services[x].icon=y.target.value}),l.querySelector(".serv-edit-desc").addEventListener("change",y=>{e.services[x].desc=y.target.value})}));const v=document.getElementById("admin-stats-list-container");v&&e.statistics&&(v.innerHTML=e.statistics.map((l,x)=>`
          <div class="admin-item-row" data-idx="${x}">
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input stat-edit-label" value="${l.label}" placeholder=" " readonly>
                <label class="form-label">Statistic Category</label>
              </div>
              <div class="form-group">
                <input type="number" class="form-input stat-edit-val" value="${l.value}" placeholder=" ">
                <label class="form-label">Numeric Value</label>
              </div>
            </div>
          </div>
        `).join(""),v.querySelectorAll(".admin-item-row").forEach(l=>{const x=parseInt(l.getAttribute("data-idx"));l.querySelector(".stat-edit-val").addEventListener("change",y=>{e.statistics[x].value=parseInt(y.target.value)||0})}));const u=document.getElementById("admin-faqs-list-container");u&&e.faqs&&(u.innerHTML=e.faqs.map((l,x)=>`
          <div class="admin-item-row" data-idx="${x}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[FAQ ${x+1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminFaq(${x})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="form-group">
              <input type="text" class="form-input faq-edit-q" value="${l.question}" placeholder=" ">
              <label class="form-label">Question</label>
            </div>
            <div class="form-group" style="margin-top: 1rem;">
              <textarea class="form-input faq-edit-a" rows="2" placeholder=" ">${l.answer}</textarea>
              <label class="form-label">Answer</label>
            </div>
          </div>
        `).join(""),u.querySelectorAll(".admin-item-row").forEach(l=>{const x=parseInt(l.getAttribute("data-idx"));l.querySelector(".faq-edit-q").addEventListener("change",y=>{e.faqs[x].question=y.target.value}),l.querySelector(".faq-edit-a").addEventListener("change",y=>{e.faqs[x].answer=y.target.value})}))}function m(){const f=document.getElementById("admin-achievements-list-container");!f||!e.achievements||(f.innerHTML=e.achievements.map((v,u)=>`
        <div class="admin-item-row" data-idx="${u}">
          <div class="admin-item-row-header">
            <span class="admin-item-row-title monospace-font">[Achievement ${u+1}]</span>
            <button class="admin-item-delete-btn" onclick="deleteAdminAchievement(${u})"><i class="fa-solid fa-trash"></i> DELETE</button>
          </div>
          <div class="admin-form-grid">
            <div class="form-group">
              <input type="text" class="form-input ach-edit-title" value="${v.title}" placeholder=" ">
              <label class="form-label">Achievement Title</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-input ach-edit-cat" value="${v.category}" placeholder=" ">
              <label class="form-label">Category</label>
            </div>
          </div>
          <div class="form-group" style="margin-top: 1rem;">
            <textarea class="form-input ach-edit-desc" rows="2" placeholder=" ">${v.description}</textarea>
            <label class="form-label">Description</label>
          </div>
        </div>
      `).join(""),f.querySelectorAll(".admin-item-row").forEach(v=>{const u=parseInt(v.getAttribute("data-idx"));v.querySelector(".ach-edit-title").addEventListener("change",l=>{e.achievements[u].title=l.target.value}),v.querySelector(".ach-edit-cat").addEventListener("change",l=>{e.achievements[u].category=l.target.value}),v.querySelector(".ach-edit-desc").addEventListener("change",l=>{e.achievements[u].description=l.target.value})}))}function p(){const f=document.getElementById("admin-testimonials-list-container");!f||!e.testimonials||(f.innerHTML=e.testimonials.map((v,u)=>`
        <div class="admin-item-row" data-idx="${u}">
          <div class="admin-item-row-header">
            <span class="admin-item-row-title monospace-font">[Testimonial ${u+1}]</span>
            <button class="admin-item-delete-btn" onclick="deleteAdminTestimonial(${u})"><i class="fa-solid fa-trash"></i> DELETE</button>
          </div>
          <div class="admin-form-grid">
            <div class="form-group">
              <input type="text" class="form-input test-edit-name" value="${v.name}" placeholder=" ">
              <label class="form-label">Name</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-input test-edit-role" value="${v.designation}" placeholder=" ">
              <label class="form-label">Role/Designation</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-input test-edit-company" value="${v.company}" placeholder=" ">
              <label class="form-label">Company</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-input test-edit-photo" value="${v.photo}" placeholder=" ">
              <label class="form-label">Photo URL</label>
            </div>
          </div>
          <div class="form-group" style="margin-top: 1rem;">
            <textarea class="form-input test-edit-feedback" rows="2" placeholder=" ">${v.feedback}</textarea>
            <label class="form-label">Feedback Text</label>
          </div>
        </div>
      `).join(""),f.querySelectorAll(".admin-item-row").forEach(v=>{const u=parseInt(v.getAttribute("data-idx"));v.querySelector(".test-edit-name").addEventListener("change",l=>{e.testimonials[u].name=l.target.value}),v.querySelector(".test-edit-role").addEventListener("change",l=>{e.testimonials[u].designation=l.target.value}),v.querySelector(".test-edit-company").addEventListener("change",l=>{e.testimonials[u].company=l.target.value}),v.querySelector(".test-edit-photo").addEventListener("change",l=>{e.testimonials[u].photo=l.target.value}),v.querySelector(".test-edit-feedback").addEventListener("change",l=>{e.testimonials[u].feedback=l.target.value})}))}function h(){e.resumeData||(e.resumeData={});const f=e.resumeData;f.strengths||(f.strengths=[]),f.interests||(f.interests=[]),f.languages||(f.languages=[]),f.academicProjects||(f.academicProjects=[]);const v=document.getElementById("admin-resume-strengths");v&&(v.value=f.strengths.join(", "));const u=document.getElementById("admin-resume-interests");u&&(u.value=f.interests.join(", "));const l=document.getElementById("admin-resume-lang-container");l&&(l.innerHTML=f.languages.map((y,M)=>`
          <div class="admin-item-row" data-idx="${M}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[Language ${M+1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminResumeLang(${M})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input lang-edit-name" value="${y.name}" placeholder=" ">
                <label class="form-label">Language</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input lang-edit-fluency" value="${y.fluency}" placeholder=" ">
                <label class="form-label">Fluency Level</label>
              </div>
            </div>
          </div>
        `).join(""),l.querySelectorAll(".admin-item-row").forEach(y=>{const M=parseInt(y.getAttribute("data-idx"));y.querySelector(".lang-edit-name").addEventListener("change",A=>{f.languages[M].name=A.target.value}),y.querySelector(".lang-edit-fluency").addEventListener("change",A=>{f.languages[M].fluency=A.target.value})}));const x=document.getElementById("admin-resume-acad-container");x&&(x.innerHTML=f.academicProjects.map((y,M)=>`
          <div class="admin-item-row" data-idx="${M}">
            <div class="admin-item-row-header">
              <span class="admin-item-row-title monospace-font">[Academic Project ${M+1}]</span>
              <button class="admin-item-delete-btn" onclick="deleteAdminResumeAcad(${M})"><i class="fa-solid fa-trash"></i> DELETE</button>
            </div>
            <div class="admin-form-grid">
              <div class="form-group">
                <input type="text" class="form-input acad-edit-title" value="${y.title}" placeholder=" ">
                <label class="form-label">Project Title</label>
              </div>
              <div class="form-group">
                <input type="text" class="form-input acad-edit-duration" value="${y.duration}" placeholder=" ">
                <label class="form-label">Duration</label>
              </div>
            </div>
            <div class="form-group" style="margin-top: 1rem;">
              <textarea class="form-input acad-edit-desc" rows="3" placeholder=" ">${y.description}</textarea>
              <label class="form-label">Description / Responsibilities</label>
            </div>
          </div>
        `).join(""),x.querySelectorAll(".admin-item-row").forEach(y=>{const M=parseInt(y.getAttribute("data-idx"));y.querySelector(".acad-edit-title").addEventListener("change",A=>{f.academicProjects[M].title=A.target.value}),y.querySelector(".acad-edit-duration").addEventListener("change",A=>{f.academicProjects[M].duration=A.target.value}),y.querySelector(".acad-edit-desc").addEventListener("change",A=>{f.academicProjects[M].description=A.target.value})}))}function g(){const f=document.getElementById("admin-gallery-container");!f||!e.gallery||(f.innerHTML=e.gallery.map((v,u)=>`
        <div class="admin-item-row" data-idx="${u}">
          <div class="admin-item-row-header">
            <span class="admin-item-row-title monospace-font">[Gallery Item ${u+1}]</span>
            <button class="admin-item-delete-btn" onclick="deleteAdminGalleryItem(${u})"><i class="fa-solid fa-trash"></i> DELETE</button>
          </div>
          <div class="admin-form-grid">
            <div class="form-group">
              <input type="text" class="form-input gal-edit-url" value="${v.url}" placeholder=" ">
              <label class="form-label">Image URL / Path</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-input gal-edit-caption" value="${v.caption}" placeholder=" ">
              <label class="form-label">Caption</label>
            </div>
            <div class="form-group">
              <input type="text" class="form-input gal-edit-type" value="${v.type}" placeholder=" ">
              <label class="form-label">Category (e.g. AutoCAD Drawings)</label>
            </div>
          </div>
        </div>
      `).join(""),f.querySelectorAll(".admin-item-row").forEach(v=>{const u=parseInt(v.getAttribute("data-idx"));v.querySelector(".gal-edit-url").addEventListener("change",l=>{e.gallery[u].url=l.target.value}),v.querySelector(".gal-edit-caption").addEventListener("change",l=>{e.gallery[u].caption=l.target.value}),v.querySelector(".gal-edit-type").addEventListener("change",l=>{e.gallery[u].type=l.target.value})}))}window.deleteAdminProject=function(f){confirm(`Are you sure you want to delete project ${f}?`)&&(e.projects=e.projects.filter(v=>v.id!==f),r())},window.moveProjectUp=function(f){if(f>0){const v=e.projects[f];e.projects[f]=e.projects[f-1],e.projects[f-1]=v,r()}},window.moveProjectDown=function(f){if(f<e.projects.length-1){const v=e.projects[f];e.projects[f]=e.projects[f+1],e.projects[f+1]=v,r()}},window.deleteAdminEducation=function(f){confirm("Delete this education entry?")&&(e.education.splice(f,1),c())},window.deleteAdminExperience=function(f){confirm("Delete this experience entry?")&&(e.experience.splice(f,1),c())},window.deleteAdminCert=function(f){confirm("Delete this certification?")&&(e.certifications.splice(f,1),c())},window.deleteAdminService=function(f){confirm("Delete this service?")&&(e.services.splice(f,1),d())},window.deleteAdminFaq=function(f){confirm("Delete this FAQ accordion?")&&(e.faqs.splice(f,1),d())},window.deleteAdminAchievement=function(f){confirm("Delete this achievement?")&&(e.achievements.splice(f,1),m())},window.deleteAdminTestimonial=function(f){confirm("Delete this testimonial?")&&(e.testimonials.splice(f,1),p())},window.deleteAdminResumeLang=function(f){confirm("Delete this language?")&&(e.resumeData.languages.splice(f,1),h())},window.deleteAdminResumeAcad=function(f){confirm("Delete this academic project?")&&(e.resumeData.academicProjects.splice(f,1),h())},window.deleteAdminGalleryItem=function(f){confirm("Delete this gallery item?")&&(e.gallery.splice(f,1),g())},window.deleteAdminSkill=function(f){confirm("Delete this skill?")&&(e.skills.splice(f,1),a())},window.deleteAdminSoftware=function(f){confirm("Delete this software proficiency?")&&(e.softwareProficiency.splice(f,1),a())}}},dl={render(i){return i.personal,`
      <!-- AI CHATBOT WIDGET -->
      <div class="chatbot-container" id="chatbot-widget">
        <!-- Chat trigger button -->
        <button class="chatbot-trigger" id="chatbot-trigger-btn" aria-label="Open AI Assistant">
          <i class="fa-solid fa-robot"></i>
          <span class="chatbot-pulse-dot"></span>
        </button>

        <!-- Chat Panel Window -->
        <div class="chatbot-panel glass-card">
          <div class="chatbot-header monospace-font">
            <span class="chatbot-header-title">
              <i class="fa-solid fa-circle-nodes text-cyan"></i> PORTFOLIO_AI: RECV_01
            </span>
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <span class="chatbot-header-status" title="Active"></span>
              <button class="chatbot-close-btn" id="chatbot-close-btn" aria-label="Close Chat">
                <i class="fa-solid fa-times"></i>
              </button>
            </div>
          </div>

          <!-- Messages scrollable box -->
          <div class="chatbot-messages-box" id="chatbot-messages-container">
            <div class="chat-bubble bot">
              Hi! I am Yaswanth's Portfolio AI Assistant. Ask me anything about his Civil CAD design skill set, BIM modeling experience, academic projects, or certifications!
            </div>
          </div>

          <!-- Suggested quick questions chips -->
          <div class="chatbot-suggestions">
            <button class="chat-chip" data-query="What software do you use?">🛠️ Software</button>
            <button class="chat-chip" data-query="Show me your projects">📁 Projects</button>
            <button class="chat-chip" data-query="What is your education?">🎓 Education</button>
            <button class="chat-chip" data-query="How can I contact you?">📧 Contact</button>
          </div>

          <!-- Input chat field -->
          <form class="chatbot-input-area" id="chatbot-form">
            <input type="text" class="chatbot-input" id="chatbot-user-input" required placeholder="Type a message..." autocomplete="off">
            <button type="submit" class="chatbot-send-btn" aria-label="Send message">
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    `},init(i){const e=document.getElementById("chatbot-widget"),t=document.getElementById("chatbot-trigger-btn"),n=document.getElementById("chatbot-close-btn"),s=document.getElementById("chatbot-form"),a=document.getElementById("chatbot-user-input"),r=document.getElementById("chatbot-messages-container");if(!e||!t||!n||!s||!r)return;t.addEventListener("click",()=>{e.classList.toggle("active");const g=t.querySelector(".chatbot-pulse-dot");g&&(g.style.display="none"),e.classList.contains("active")&&(setTimeout(()=>a.focus(),150),o())}),n.addEventListener("click",()=>{e.classList.remove("active")}),document.querySelectorAll(".chat-chip").forEach(g=>{g.addEventListener("click",()=>{const f=g.getAttribute("data-query");p(f)})}),s.addEventListener("submit",g=>{g.preventDefault();const f=a.value.trim();f&&(p(f),a.value="")});function o(){r.scrollTop=r.scrollHeight}function c(g,f=!1){const v=document.createElement("div");v.className=`chat-bubble ${f?"user":"bot"}`,v.innerHTML=g,r.appendChild(v),o()}function d(){const g=document.createElement("div");g.className="chat-bubble bot typing-indicator",g.id="chatbot-typing-bubble",g.innerHTML=`
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      `,r.appendChild(g),o()}function m(){const g=document.getElementById("chatbot-typing-bubble");g&&g.remove()}function p(g){c(g,!0),d(),setTimeout(()=>{m();const f=h(g);c(f)},700)}function h(g){const f=g.toLowerCase(),v=i.personal||{};i.about;const u=i.resumeData||{},l=i.projects||[],x=i.education||[],y=i.experience||[];if(f.includes("hello")||f.includes("hi ")||f.startsWith("hi")&&f.length<4||f.includes("hey"))return"Hello! How can I help you find information about Yaswanth Terli today? You can ask me about his software toolkit, academic projects, or direct contact links.";if(f.includes("contact")||f.includes("phone")||f.includes("email")||f.includes("number")||f.includes("whatsapp")||f.includes("reach")||f.includes("hire")||f.includes("linkedin"))return`
          Yaswanth's contact information:<br>
          📧 <strong>Email</strong>: <a href="mailto:${v.email}" class="text-cyan">${v.email}</a><br>
          📞 <strong>Phone</strong>: <a href="tel:${v.phone}" class="text-cyan">${v.phone}</a><br>
          💬 <strong>WhatsApp</strong>: <a href="https://wa.me/${v.whatsapp}" target="_blank" class="text-cyan">Direct WhatsApp Connect</a><br>
          🔗 <strong>LinkedIn</strong>: <a href="${v.linkedin}" target="_blank" class="text-cyan">Yaswanth's Profile</a>
        `;if(f.includes("software")||f.includes("tool")||f.includes("autocad")||f.includes("revit")||f.includes("staad")||f.includes("excel")||f.includes("civil 3d")||f.includes("navisworks"))return`
          Yaswanth is proficient in standard Civil Engineering software:<br>
          ${i.softwareProficiency?i.softwareProficiency.map(A=>`• <strong>${A.name}</strong>: ${A.percentage}%`).join("<br>"):""}<br><br>
          He has expert-level experience in 2D Municipal Drafting, Revit Parametric Families modeling, and Navisworks multi-disciplinary clash interference detections.
        `;if(f.includes("project")||f.includes("duplex")||f.includes("villa")||f.includes("highway")||f.includes("commercial")||f.includes("design")||f.includes("work")||f.includes("portfolio"))return l.length>0?`
            Yaswanth has worked on several realistic Civil CAD & BIM projects:<br>
            ${l.map((A,E)=>`[${E+1}] <strong>${A.title}</strong> (${A.category}) - ${A.duration}`).join("<br>")}<br><br>
            <i>Tip: You can scroll up to the "Design Projects" section and click "View Detail" to see drawings and 3D models of these projects!</i>
          `:"Yaswanth has worked on AutoCAD drafting projects, structural details, and Revit villa space planning configurations.";if(f.includes("education")||f.includes("college")||f.includes("degree")||f.includes("b.tech")||f.includes("study")||f.includes("gpa")||f.includes("marks")||f.includes("percentage")||f.includes("school"))return x.length>0?`
            Yaswanth's academic qualifications:<br><br>
            ${x.map(A=>`🎓 <strong>${A.degree}</strong> (${A.branch}) at <i>${A.collegeName}</i> - CGPA: <strong>${A.cgpa}</strong> (${A.startYear}-${A.endYear})`).join("<br><br>")}
          `:"Yaswanth holds a Bachelor of Technology (B.Tech) degree in Civil Engineering from Swamy Vivekananda Engineering College with a CGPA score of 71.40%.";if(f.includes("academic")||f.includes("experiment")||f.includes("concrete")||f.includes("additives")||f.includes("waste")||f.includes("fly ash")){if(u.academicProjects&&u.academicProjects.length>0){const M=u.academicProjects[0];return`
            🧪 <strong>Academic Project:</strong> "${M.title}"<br>
            <strong>Duration:</strong> ${M.duration}<br>
            <strong>Overview:</strong> ${M.description}<br><br>
            He was responsible for Mix Design calculations, compressive strength testing, material testing, and documentation report compiling.
          `}return"Yaswanth's B.Tech academic project studied Fly Ash and Rice Husk Ash as partial concrete cement replacements to evaluate concrete compaction strengths and cost reductions."}if(f.includes("experience")||f.includes("job")||f.includes("intern")||f.includes("work")||f.includes("l&t")||f.includes("buildtech"))return y.length>0?`
            Yaswanth's professional training and experiences:<br><br>
            ${y.map(A=>`💼 <strong>${A.position}</strong> at <i>${A.company}</i> (${A.duration})<br>• ${A.description}`).join("<br><br>")}
          `:"Yaswanth has completed a 6-month Civil Design Internship at BuildTech Infrastructure Solutions and observed structural concrete casting operations under an L&T Site Program.";if(f.includes("strength")||f.includes("hobby")||f.includes("hobbies")||f.includes("chess")||f.includes("language")||f.includes("interest")){const M=u.strengths?u.strengths.join(", "):"Quick Learner, Team Collaboration",A=v.languages?v.languages.join(", "):"English, Telugu",E=u.interests?u.interests.join(", "):"Chess, Music, Technology";return`
          📝 <strong>Core Strengths</strong>: ${M}<br>
          🗣️ <strong>Languages</strong>: ${A}<br>
          🎮 <strong>Hobbies</strong>: ${E}
        `}return f.includes("bim")||f.includes("lod")||f.includes("clash")||f.includes("coordination")?`
          Yaswanth possesses a solid understanding of BIM workflows:<br>
          • <strong>LOD Matrix</strong>: Knows specifications from conceptual LOD 100 up to detailed fabrication LOD 400.<br>
          • <strong>Clash Detection</strong>: Federated architecture with structural and MEP plans inside Navisworks to run clash reports.<br>
          • <strong>Schedules</strong>: Extract schedules and material takeoffs (QTO) in Excel.
        `:`
        I'm not sure I understand that query. I can help you with:<br>
        • 🛠️ <strong>Skills</strong>: Ask "What software do you use?"<br>
        • 📁 <strong>Projects</strong>: Ask "Show me your projects"<br>
        • 💼 <strong>Experience</strong>: Ask "Do you have internship experience?"<br>
        • 🎓 <strong>Education</strong>: Ask "What are your college grades?"<br>
        • 📧 <strong>Contact</strong>: Ask "How can I contact you?"
      `}}},Ft={personal:{fullName:"Yaswanth Terli",firstName:"Yaswanth",lastName:"Terli",title:"Civil CAD Designer | AutoCAD | Revit | BIM Specialist",location:"Visakhapatnam, Andhra Pradesh, India",email:"yaswanthterli09@gmail.com",phone:"+91 9160578774",whatsapp:"919160578774",linkedin:"https://linkedin.com/in/yaswanth-terli-civil",github:"https://github.com/yaswanth-terli",portfolioUrl:"https://yaswanth-terli.com",nationality:"Indian",gender:"Male",dateOfBirth:"15th August, 2004",languages:["Telugu","English"],profilePhoto:"/assets/images/profile.jpg",resumeUrl:"/assets/resume.pdf"},about:{summary:"Civil Engineering graduate with strong knowledge of construction materials, concrete technology, CAD drafting, and civil engineering fundamentals. Skilled in analytical thinking, problem solving, documentation, and technical software. Seeking opportunities to contribute to engineering projects while continuously improving professional expertise.",objective:"To secure a challenging role as a Civil CAD/Revit Designer in a forward-thinking construction or design firm, where I can apply my proficiency in BIM software, drafting standards, and structural detailing to contribute to large-scale infrastructure projects.",yearsOfExperience:"Fresher (with 6 Months Internship experience)",currentStatus:"Actively looking for opportunities & available for immediate joining"},skills:[{name:"AutoCAD",level:95},{name:"Revit",level:90},{name:"BIM",level:85},{name:"SQL",level:80},{name:"Microsoft Excel",level:90},{name:"Microsoft Office",level:85},{name:"Data Documentation",level:85},{name:"Civil Engineering Fundamentals",level:90},{name:"Construction Materials",level:90},{name:"Concrete Technology",level:90},{name:"Report Preparation",level:85}],softwareProficiency:[{name:"AutoCAD",percentage:95},{name:"Revit",percentage:90},{name:"SQL",percentage:75},{name:"Microsoft Excel",percentage:85},{name:"Microsoft Office",percentage:80},{name:"Civil 3D",percentage:75},{name:"Navisworks",percentage:80}],bim:{knowledge:"Sound understanding of BIM concepts, Level of Development (LOD 100 to LOD 400), and coordination processes.",modeling:"Expertise in creating detailed 3D architectural and structural models in Revit based on 2D design inputs, ensuring high visual and parametric accuracy.",clashDetection:"Proficient in federating models and executing clash tests in Autodesk Navisworks to detect spatial interferences between architectural, structural, and MEP disciplines.",documentation:"Capable of extraction of precise construction drawings, floor plans, sections, elevations, and structural detailing sheets directly from 3D BIM models.",quantityTakeoff:"Experienced in generating automated materials schedules and quantities takeoffs (QTO) in Revit and MS Excel, minimizing waste and material discrepancies."},education:[{degree:"Bachelor of Technology (B.Tech)",branch:"Civil Engineering",collegeName:"Swamy Vivekananda Engineering College",university:"JNTU Kakinada",cgpa:"71.40%",startYear:"2017",endYear:"2021"},{degree:"Intermediate",branch:"MPC (Maths, Physics, Chemistry)",collegeName:"APTWRJ College",university:"Board of Intermediate Education",cgpa:"93.99%",startYear:"2015",endYear:"2017"},{degree:"SSC (10th Grade)",branch:"General Education",collegeName:"Suvarna High School",university:"State Board of Secondary Education",cgpa:"73.00%",startYear:"2014",endYear:"2015"}],experience:[{company:"BuildTech Infrastructure Solutions",position:"Civil Design Intern (AutoCAD & Revit)",duration:"Dec 2025 - May 2026 (6 Months)",description:"Assisted senior design engineers in drafting residential submission plans using AutoCAD. Developed Revit 3D architectural models for client presentations. Drafted reinforcement details for structural columns and beams in accordance with IS 456 standards. Extracted material takeoff lists for costing reports."},{company:"L&T Construction Site Visit Program",position:"Graduate Trainee Observer",duration:"Oct 2025 (2 Weeks)",description:"Observed on-site operations of structural concreting, reinforcement binding, and foundation casting. Correlated site executions with approved structural blueprints to understand drawing interpretation and tolerances."},{company:"Self-Employed / Freelance",position:"Freelance CAD Drafter",duration:"2024 - Present",description:"Designed and finalized standard floor plan layouts for local individual home owners. Handled conversions of manual hand sketches into standardized digital dwg files for architectural approval."}],certifications:[{name:"Autodesk Certified Professional: Revit for Architectural Design",organization:"Autodesk",issueDate:"Jan 2026",link:"https://www.credly.com/org/autodesk",image:"/assets/images/cert-autodesk.jpg"},{name:"Advanced Civil CAD Drafting & BIM Modeling",organization:"CADD Centre Training Services",issueDate:"Nov 2025",link:"https://caddcentre.com",image:"/assets/images/cert-cadd.jpg"},{name:"STAAD Pro V8i Structural Analysis & Detailing",organization:"Bentley Institute Partner Certification",issueDate:"Jul 2025",link:"#",image:"/assets/images/cert-bentley.jpg"}],projects:[{id:"residential-bim",title:"Residential Building BIM Modeling",category:"Revit Architecture",description:"High-fidelity parametric 3D modeling and space planning of a modern residential duplex using Autodesk Revit.",overview:"This project covers the complete design cycle for a residential duplex. Starting with basic layouts, the design was built in Revit Architecture to create coordinated 3D models. Detailed reinforcement schedules and sheet layouts were compiled for building license clearance.",challenges:"Ensuring structural grid stability with a light load-bearing column framework while conforming to municipal side-setback guidelines and ventilation codes.",process:"Conducted space layout planning, engineered concrete column layouts, developed architectural elevations in Revit, and completed structural scheduling for staircase runs.",softwareUsed:["Revit","AutoCAD","Excel"],duration:"4 Weeks",status:"Completed",image:"/assets/images/proj-residential.jpg",pdf:"/assets/docs/residential-drawing.pdf",video:"",drawingsPreview:["/assets/images/proj-residential.jpg","/assets/images/proj-residential-cad1.jpg","/assets/images/proj-residential-cad2.jpg"],modelPreview:"interactive-3d-villa",builtUpArea:"3,200 sq ft",floors:"G+2",drawingsCount:12,projectType:"Residential",complexity:"Intermediate",caseStudy:{problem:"Designing a compact structural layout on a tight plot limit with strict local setback codes.",approach:"Integrated column dimensions into internal walls and customized riser heights to keep the layout open.",designProcess:"Developed zoning drafts, calculated stair run clearances, structured frame details, and extracted permit drawings.",outcome:"Drafted a complete municipal sheet set approved on first submittal with zero corrections."},sheets:{plans:"/assets/docs/residential-drawing.pdf#page=1",elevations:"/assets/docs/residential-drawing.pdf#page=2",sections:"/assets/docs/residential-drawing.pdf#page=3",report:"/assets/docs/residential-report.pdf",boq:"/assets/docs/residential-boq.xlsx"}},{id:"commercial-cad",title:"Commercial Complex CAD Drafting",category:"AutoCAD Drafting",description:"Comprehensive 2D architectural drafting, structural layouts, and municipal submission drawing sheets using AutoCAD.",overview:"Developed complete municipal approval blueprints for a multi-story commercial complex, including structural gridlines, column sizes, elevations, and sections.",challenges:"Optimizing commercial space utility while complying strictly with municipal side setbacks and local code regulations.",process:"Drafted structural grid systems, designed floor layouts, configured staircase riser runs, and set up sheet layouts.",softwareUsed:["AutoCAD","Excel"],duration:"6 Weeks",status:"Completed",image:"/assets/images/proj-commercial.jpg",pdf:"/assets/docs/structural-detailing.pdf",video:"",drawingsPreview:["/assets/images/proj-commercial.jpg","/assets/images/proj-commercial-str1.jpg","/assets/images/proj-commercial-str2.jpg"],modelPreview:"interactive-3d-structure",builtUpArea:"18,500 sq ft",floors:"G+4",drawingsCount:32,projectType:"Commercial",complexity:"Advanced",caseStudy:{problem:"Coordinating concrete reinforcement schedules and structural dimensions with MEP clearances.",approach:"Linked structural grids to Revit schedules and ran interference checks using federated models.",designProcess:"Calculated structural design loads, drafted columns/beams modeling, ran spatial clash reports, and compiled documentation.",outcome:"Created a clash-free physical model and structural sheets package, saving site rework expenses."},sheets:{plans:"/assets/docs/structural-detailing.pdf#page=1",elevations:"/assets/docs/structural-detailing.pdf#page=2",sections:"/assets/docs/structural-detailing.pdf#page=3",report:"/assets/docs/structural-report.pdf",boq:"/assets/docs/structural-boq.xlsx"}},{id:"highway-design",title:"Highway Alignment Design",category:"Civil 3D",description:"Geometric highway alignment, corridor modeling, profiling, and earthwork calculations using Autodesk Civil 3D.",overview:"Designed a 2.5km rural highway stretch, including horizontal and vertical curves, profile views, corridors, cross-sections, and grading analysis.",challenges:"Balancing cut-and-fill volumes to optimize earthwork costs while maintaining design speeds and safety standards.",process:"Created alignment lines, configured profile views, built design corridors, calculated mass haul diagrams, and extracted sections.",softwareUsed:["Civil 3D","Excel"],duration:"8 Weeks",status:"Completed",image:"/assets/images/proj-revit-3d.jpg",pdf:"/assets/docs/revit-villa-sheets.pdf",video:"",drawingsPreview:["/assets/images/proj-revit-3d.jpg","/assets/images/proj-revit-sheet1.jpg","/assets/images/proj-revit-sheet2.jpg"],modelPreview:"interactive-3d-villa",builtUpArea:"25,000 sq m",floors:"N/A",drawingsCount:18,projectType:"Infrastructure",complexity:"Advanced",caseStudy:{problem:"Optimizing earthwork balance in hilly terrain with severe slope angles.",approach:"Adjusted vertical alignment slopes and ran cut/fill quantity analysis to find the optimal corridor profile.",designProcess:"Developed terrain surfaces, horizontal alignments, profiles, assemblies, and corridors.",outcome:"Reduced estimated excavation cost by 18% through optimized curve selection."},sheets:{plans:"/assets/docs/revit-villa-sheets.pdf#page=1",elevations:"/assets/docs/revit-villa-sheets.pdf#page=2",sections:"/assets/docs/revit-villa-sheets.pdf#page=3",report:"/assets/docs/revit-villa-report.pdf",boq:"/assets/docs/revit-villa-boq.xlsx"}},{id:"structural-detailing",title:"Structural Detailing Project",category:"AutoCAD Drawings",description:"Standardized structural concrete reinforcement drafting and detailed reinforcement schedules conforming to IS 456 codes.",overview:"Detailed structural concrete shop drawings for foundations, columns, and slabs, compiling complete bar bending schedules (BBS).",challenges:"Representing highly congested reinforcement detailing at column-beam joints clearly for on-site concrete binding crews.",process:"Computed development lengths, mapped lap splices, detailed structural foundations, and generated Excel BBS.",softwareUsed:["AutoCAD","Excel"],duration:"5 Weeks",status:"Completed",image:"/assets/images/gallery-cad-detail.jpg",pdf:"/assets/docs/structural-detailing-drawings.pdf",video:"",drawingsPreview:["/assets/images/gallery-cad-detail.jpg","/assets/images/proj-residential-cad1.jpg","/assets/images/proj-residential-cad2.jpg"],modelPreview:"interactive-3d-structure",builtUpArea:"6,800 sq ft",floors:"G+3",drawingsCount:15,projectType:"Structural",complexity:"Intermediate",caseStudy:{problem:"Representing dense structural reinforcement rebars clearly in 2D AutoCAD section drawings for on-site binding teams.",approach:"Utilized color-coded drafting layers, clear dimensional offsets, and detailed localized cross-sections.",designProcess:"Calculated structural rebar sizes, drafted cross-sections, compiled schedules, and finalized sheet layouts.",outcome:"Delivered production-ready detailing prints that eliminated structural binding mistakes on site."},sheets:{plans:"/assets/docs/structural-detailing-drawings.pdf#page=1",elevations:"/assets/docs/structural-detailing-drawings.pdf#page=2",sections:"/assets/docs/structural-detailing-drawings.pdf#page=3",report:"/assets/docs/structural-detailing-report.pdf",boq:"/assets/docs/structural-detailing-boq.xlsx"}},{id:"revit-coordination",title:"Revit BIM Coordination Project",category:"Revit & Navisworks",description:"Multi-disciplinary model coordination, LOD 300 modeling, and Navisworks clash-detection interference reports.",overview:"Coordinated architectural and structural design models with MEP layouts, performing clash detection runs in Autodesk Navisworks.",challenges:"Detecting and resolving spatial piping interference conflicts within structural concrete beams and elevator shafts.",process:"Federated design models, ran clash-tests, resolved model overlaps, and generated coordinated shop drawings.",softwareUsed:["Revit","Navisworks","AutoCAD"],duration:"6 Weeks",status:"Completed",image:"/assets/images/gallery-site1.jpg",pdf:"/assets/docs/apartment-sheets.pdf",video:"",drawingsPreview:["/assets/images/gallery-site1.jpg","/assets/images/proj-residential-cad2.jpg","/assets/gallery-site2.jpg"],modelPreview:"interactive-3d-structure",builtUpArea:"12,400 sq ft",floors:"G+3",drawingsCount:16,projectType:"BIM Coordination",complexity:"Advanced",caseStudy:{problem:"Compiling a precise and coordinated Bill of Quantities for structural estimation without BIM model database access.",approach:"Developed mathematical estimation algorithms in Excel linked to AutoCAD structural grids for fast quantification.",designProcess:"Calculated site areas, drafted floor sections, structured structural schedules, and finalized BOQ formulas.",outcome:"Produced a highly accurate cost estimation list reducing material waste margins to less than 3%."},sheets:{plans:"/assets/docs/apartment-sheets.pdf#page=1",elevations:"/assets/docs/apartment-sheets.pdf#page=2",sections:"/assets/docs/apartment-sheets.pdf#page=3",report:"/assets/docs/apartment-report.pdf",boq:"/assets/docs/apartment-boq.xlsx"}}],achievements:[{title:"1st Place - CAD Design Challenge",description:"Awarded first place among 120 participants in the National CAD Drafting Competition organized during JNTUH TechFest 2025.",category:"Competitions"},{title:"Academic Excellence Award",description:"Received a certificate of appreciation from the Dean of Civil Engineering for maintaining a top 5% rank in structural design modules.",category:"Academic"},{title:"Autodesk BIM Workshop Leader",description:"Selected to coordinate and tutor a 3-day Revit bootcamp for junior students at JNTU College of Engineering.",category:"Leadership"}],gallery:[{url:"/assets/images/proj-residential.jpg",caption:"AutoCAD G+2 Elevation View",type:"AutoCAD Drawings"},{url:"/assets/images/proj-revit-3d.jpg",caption:"Revit Modern Villa Render",type:"Revit Models"},{url:"/assets/images/gallery-site1.jpg",caption:"Structural Rebar Binding Inspection",type:"Site Visits"},{url:"/assets/images/proj-commercial.jpg",caption:"BIM Structural Framing Wireframe",type:"Revit Models"},{url:"/assets/images/gallery-cad-detail.jpg",caption:"Column Beam Connection Section Detail",type:"AutoCAD Drawings"},{url:"/assets/images/gallery-site2.jpg",caption:"Foundation Trench Excavation",type:"Site Visits"}],testimonials:[{name:"Dr. Ramesh Babu",designation:"Professor & Head of Civil Engineering",company:"JNTU Hyderabad",feedback:"Yaswanth possesses exceptional talent in CAD drafting and BIM processes. His design projects demonstrate clarity, structural accuracy, and careful attention to building code guidelines. He is highly capable.",photo:"/assets/images/test-prof.jpg"},{name:"Er. Suresh Kumar",designation:"Senior Structural Consultant",company:"BuildTech Infrastructure Solutions",feedback:"Yaswanth proved to be quick at grasping Autodesk Revit structure modeling during his internship. His documentation extraction was precise and fit for production use. He has a bright career in BIM ahead.",photo:"/assets/images/test-eng.jpg"}],resumeData:{summary:"Civil Engineering graduate with strong knowledge of construction materials, concrete technology, CAD drafting, and civil engineering fundamentals. Skilled in analytical thinking, problem solving, documentation, and technical software. Seeking opportunities to contribute to engineering projects while continuously improving professional expertise.",strengths:["Quick Learner","Adaptability","Team Collaboration","Time Management","Positive Attitude","Analytical Thinking","Problem Solving"],languages:[{name:"Telugu",fluency:"Native"},{name:"English",fluency:"Professional Working Proficiency"}],interests:["Playing Chess","Listening to Music","Learning New Technologies"],academicProjects:[{title:"Experimental Study on Waste Materials as Additives in Concrete",duration:"Academic Year Project",description:"Conducted an experimental study on Fly Ash and Rice Husk Ash as partial replacements in concrete production to improve sustainability, reduce costs, and evaluate concrete strength and durability. Responsible for: Mix Design Analysis, Material Testing, Data Collection, Documentation, and Report Preparation."}]},services:[{title:"AutoCAD Drafting",desc:"Precision 2D architectural plans, elevations, sections, and municipal permit drawings.",icon:"fa-draw-polygon"},{title:"BIM Modeling",desc:"3D parametric modeling and coordination using Revit Architecture and Structure.",icon:"fa-cube"},{title:"Revit Design",desc:"Custom parametric family creation, wall/floor scheduling, and detail extraction.",icon:"fa-cubes"},{title:"Quantity Estimation",desc:"Accurate concrete and steel quantities takeoffs (QTO) and cost estimation reports.",icon:"fa-calculator"},{title:"Structural Detailing",desc:"Reinforcement detailing shop drawings and bar bending schedules conforming to standards.",icon:"fa-circle-nodes"}],statistics:[{label:"Projects Completed",value:15},{label:"Years of Experience",value:1},{label:"CAD Drawings Created",value:120},{label:"BIM Models Delivered",value:25}],faqs:[{question:"What software do you specialize in?",answer:"I specialize in AutoCAD, Autodesk Revit (Architecture & Structure), Navisworks, Civil 3D, and Microsoft Excel."},{question:"What is your typical project delivery workflow?",answer:"My workflow starts with 2D drafting in AutoCAD, migrating to Revit for 3D BIM modeling, executing clash-detection in Navisworks, and generating construction-ready detailing sheets."},{question:"Are you open to immediate full-time opportunities?",answer:"Yes, I have completed my B.Tech and internship, and I am available for immediate joining and relocation if required."},{question:"Can you handle structural analysis?",answer:"Yes, I have academic training and project experience using STAAD Pro for framing load calculations and reinforcement scheduling."}]};let Xe=null;document.addEventListener("DOMContentLoaded",()=>{wm()});async function wm(){var i,e;try{const t=localStorage.getItem("portfolio_custom_profile");if(t)try{Xe=JSON.parse(t),console.log("Loaded custom profile from LocalStorage.")}catch{console.warn("Failed to parse cached profile data, falling back to default.")}if(!Xe)try{const n=["profile","projects","skills","education","gallery","resume"],s=await Promise.all(n.map(async o=>{try{const c=await fetch(`/config/${o}.json`);if(!c.ok)throw new Error(`HTTP error ${c.status}`);return[o,await c.json()]}catch(c){return console.warn(`Failed to fetch ${o}.json, using fallback:`,c),[o,null]}})),a=Object.fromEntries(s),r=a.profile||Ft;Xe={...r,projects:a.projects||Ft.projects,skills:((i=a.skills)==null?void 0:i.skills)||Ft.skills,softwareProficiency:((e=a.skills)==null?void 0:e.softwareProficiency)||Ft.softwareProficiency,education:a.education||Ft.education,gallery:a.gallery||Ft.gallery,resumeData:a.resume||Ft.resumeData||null,services:r.services||Ft.services||[],statistics:r.statistics||Ft.statistics||[],faqs:r.faqs||Ft.faqs||[],achievements:r.achievements||Ft.achievements||[],testimonials:r.testimonials||Ft.testimonials||[]}}catch(n){console.warn("Failed to fetch config files, falling back to embedded default config:",n),Xe=Ft}Xe&&Cm()}catch(t){console.error("Initialization Error:",t)}}function Cm(){document.getElementById("header-root").innerHTML=Fr.render(Xe);const i=[jo,qo,$o,Yo,Ko,Zo,Jo,Qo,el,tl,nl,il,sl,al,rl,ol];document.getElementById("main-root").innerHTML=i.map(e=>e.render(Xe)).join(""),document.getElementById("footer-root").innerHTML=Am.render(Xe),document.getElementById("floating-ui-root").innerHTML=ll.render(Xe),document.getElementById("admin-panel-root").innerHTML=cl.render(Xe),document.getElementById("chatbot-root").innerHTML=dl.render(Xe),Fr.init(Xe),jo.init(Xe),qo.init(Xe),$o.init(Xe),Yo.init(Xe),Ko.init(Xe),Zo.init(Xe),Jo.init(Xe),Qo.init(Xe),el.init(Xe),tl.init(Xe),nl.init(Xe),il.init(Xe),sl.init(Xe),al.init(Xe),rl.init(Xe),ol.init(Xe),ll.init(Xe),cl.init(Xe),dl.init(Xe),Rm()}function Rm(){ul(),window.addEventListener("hashchange",ul);const i=document.getElementById("close-modal-btn"),e=document.getElementById("project-detail-modal"),t=()=>{window.location.hash="#projects"};i&&i.addEventListener("click",t),e&&e.addEventListener("click",r=>{r.target===e&&t()});const n=document.getElementById("close-admin-btn"),s=document.getElementById("admin-panel-modal"),a=()=>{window.location.hash="#about"};n&&n.addEventListener("click",a),s&&s.addEventListener("click",r=>{r.target===s&&a()})}function ul(){const i=window.location.hash,e=document.getElementById("project-detail-modal"),t=document.getElementById("admin-panel-modal");if(e&&(e.classList.remove("active"),e.setAttribute("aria-hidden","true")),t&&(t.classList.remove("active"),t.setAttribute("aria-hidden","true")),document.body.style.overflow="",i.startsWith("#/project/")){const n=i.replace("#/project/","");if(Xe){const s=Xe.projects.find(a=>a.id===n);if(s){window.renderProjectDetail&&window.renderProjectDetail(s),e.classList.add("active"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden";return}}}if((i==="#admin"||i.startsWith("#/admin"))&&t){t.classList.add("active"),t.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",window.checkAdminLoginState&&window.checkAdminLoginState();return}}
