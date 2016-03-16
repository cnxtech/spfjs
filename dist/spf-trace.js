/* SPF 23 (v2.3.2) | (c) 2012-2016 Google Inc. | License: MIT */
/**
 * https://github.com/google/tracing-framework
 * Copyright 2013 Google, Inc. All Rights Reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found at https://github.com/google/tracing-framework/blob/master/LICENSE.
 */
(function(){function aa(a){return a};function g(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(b,c)}}function ba(a,b){if(a){var c=Array.prototype.slice.call(arguments,1);try{return a.apply(null,c)}catch(d){return d}}}function m(a,b){if(document.createEvent){var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!0,!0,b);return document.dispatchEvent(c)}return!0}
var n=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function ca(){};function p(a,b){return r[a]=b}var r=window._spf_state||{};window._spf_state=r;var da={"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6E5,"cache-max":50,"cache-unified":!1,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":20,"navigate-lifetime":864E5,"reload-identifier":null,"request-timeout":0,"url-identifier":"?spf=__type__"},u={};"config"in r||p("config",u);u=r.config;n();function ea(a,b){var c=b||document;return c.querySelectorAll?c.querySelectorAll(a):[]}function fa(a,b,c){for(;a;){if(b(a))return a;if(c&&a==c)break;a=a.parentNode}return null}function ga(a,b,c){b=b||document;var d=b.createElement("iframe");d.id=a||"";d.src='javascript:""';d.style.display="none";c&&(d.onload=g(c,null,d));b.body.appendChild(d);return d};function ha(a,b,c){var d=null,e=window.history.state;if(e){var d={},f;for(f in e)d[f]=e[f]}if(b)for(f in d=d||{},b)d[f]=b[f];ia(!0,a,d,c)}function ia(a,b,c,d){if(b||c){b=b||window.location.href;c=c||{};var e=n();p("history-timestamp",e);c["spf-timestamp"]=e;if(a)ja(c,b);else if(a=ka().contentWindow.history.pushState,"function"==typeof a)a.call(window.history,c,"",b);else throw Error("history.pushState is not a function.");p("history-url",b);d&&(d=r["history-callback"])&&d(b,c)}}
function la(a){var b=window.location.href;if(r["history-ignore-pop"])p("history-ignore-pop",!1);else if(a.state){a=a.state;var c=a["spf-timestamp"];b==r["history-url"]?(p("history-timestamp",c),ja(a,b)):(a["spf-back"]=c<parseInt(r["history-timestamp"],10),a["spf-current"]=r["history-url"],p("history-timestamp",c),p("history-url",b),(c=r["history-callback"])&&c(b,a))}}
function ja(a,b){var c=ka().contentWindow.history.replaceState;if("function"==typeof c)c.call(window.history,a,"",b);else throw Error("history.replaceState is not a function");}function ka(){var a=document.getElementById("history-iframe");a||(a=ga("history-iframe"));return a};function v(a,b){if(a.forEach)a.forEach(b,void 0);else for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function ma(a,b){if(a.every)return a.every(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function na(a,b){if(a.some)return a.some(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&b.call(void 0,a[c],c,a))return!0;return!1}
function oa(a,b){if(a.filter)return a.filter(b,void 0);var c=[];v(a,function(a,e,f){b.call(void 0,a,e,f)&&c.push(a)});return c}function pa(a,b){if(a.map)return a.map(b,void 0);var c=[];c.length=a.length;v(a,function(a,e,f){c[e]=b.call(void 0,a,e,f)});return c}function x(a){return"[object Array]"==Object.prototype.toString.call(a)?a:[a]};function qa(a){var b=y();a in b&&delete b[a]}function ra(){var a=y(),b;for(b in a)sa(a[b])||delete a[b];a=y();b=parseInt(u["cache-max"],10);b=isNaN(b)?Infinity:b;b=Object.keys(a).length-b;if(!(0>=b))for(var c=0;c<b;c++){var d=Infinity,e,f;for(f in a)a[f].count<d&&(e=f,d=a[f].count);delete a[e]}}function sa(a){if(!(a&&"data"in a))return!1;var b=a.life,b=isNaN(b)?Infinity:b;a=a.time;return n()-a<b}function ta(a){var b=parseInt(r["cache-counter"],10)||0;b++;p("cache-counter",b);a.count=b}
function y(a){return!a&&"cache-storage"in r?r["cache-storage"]:p("cache-storage",a||{})};function ua(a){return a.classList?a.classList:a.className&&a.className.match(/\S+/g)||[]}function va(a,b){if(b){if(a.classList)return a.classList.contains(b);var c=ua(a);return na(c,function(a){return a==b})}return!1}function z(a,b){b&&(a.classList?a.classList.add(b):va(a,b)||(a.className+=" "+b))}function A(a,b){if(b)if(a.classList)a.classList.remove(b);else{var c=ua(a),c=oa(c,function(a){return a!=b});a.className=c.join(" ")}};function wa(a){var b=document.body;b.dataset?b.dataset.spfName=a:b.setAttribute("data-"+"spfName".replace(/([A-Z])/g,"-$1").toLowerCase(),a)};function B(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}function xa(a){return"[object String]"==Object.prototype.toString.call(a)}var ya=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};function C(a,b){var c=a.split(b),d=1==c.length;return[c[0],d?"":b,d?"":c.slice(1).join(b)]};var za=!!this.wtf&&2==this.wtf.trace.API_VERSION,Aa=za?this.wtf.trace.instrument:aa;function Ba(a){return a}var D=!window._spf_tracing_runtime_disabled&&za?Aa:Ba;function Ca(a){var b;b=window._spf_state=window._spf_state||{};var c=parseInt(b.uid,10)||0;c++;b=b.uid=c;Da[b]=a;Ea?window.postMessage(Fa+b,"*"):window.setTimeout(g(Ga,null,b),0)}function Ha(a){a.data&&xa(a.data)&&0==a.data.lastIndexOf(Fa,0)&&Ga(a.data.substring(Fa.length))}function Ga(a){var b=Da[a];b&&(delete Da[a],b())}function Ia(a){window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)}
function Ja(a){window.removeEventListener?window.removeEventListener("message",a,!1):window.detachEvent&&window.detachEvent("onmessage",a)}var Ea=function(){function a(){b=!1}if(!window.postMessage)return!1;var b=!0;Ia(a);window.postMessage("","*");Ja(a);return b}(),Fa="spf:",Da={};"async-defers"in r||p("async-defers",Da);Da=r["async-defers"];Ea&&("async-listener"in r&&Ja(r["async-listener"]),Ia(Ha),p("async-listener",Ha));Ca=D(Ca,"spf.async.defer");function Ka(a,b){a&&b&&(a in E||(E[a]=[]),E[a].push(b))}function La(a,b){a in E&&b&&ma(E[a],function(a,d,e){return a==b?(e[d]=null,!1):!0})}function Ma(a){a in E&&v(E[a],function(a,c,d){d[c]=null;a&&a()})}var E={};"ps-s"in r||p("ps-s",E);E=r["ps-s"];function F(a,b,c){var d=G[a];return a&&b?(d||(d=G[a]=Na()),a=Oa(b,c||0),d.items.push(a)):d&&d.items.length||0}function H(a,b){var c=G[a];if(c){var d=!!c.j||!!c.i;0<c.o&&(b||!d)&&Pa(a,b)}}function I(a){(a=G[a])&&a.o--}function K(a,b){var c=G[a];c&&(c.o++,H(a,b))}function Qa(a){var b=G[a];b&&(Ra(b),delete G[a])}function Sa(a,b){var c=a||"",d;for(d in G)b!=d&&0==d.lastIndexOf(c,0)&&Qa(d)}function Ta(a){var b=parseInt(r.uid,10)||0;b++;return a["spf-key"]||(a["spf-key"]=""+p("uid",b))}
function Pa(a,b){var c=G[a];if(c&&(Ra(c),0<c.o&&c.items.length)){var d=c.items[0];if(d){var e=g(function(a,b){b();a()},null,g(Pa,null,a,b));b?(c.items.shift(),e(d.t)):Ua(c,d,e)}}}function Ua(a,b,c){b.p?(c=g(c,null,ca),a.i=setTimeout(c,b.p),b.p=0):(a.items.shift(),c=g(c,null,b.t),(b=(b=u["advanced-task-scheduler"])&&b.addTask)?a.j=b(c):a.i=setTimeout(c,0))}function Ra(a){if(a.j){var b=u["advanced-task-scheduler"];(b=b&&b.cancelTask)&&b(a.j);a.j=0}a.i&&(clearTimeout(a.i),a.i=0)}
function Na(){return{items:[],j:0,i:0,o:1}}function Oa(a,b){return{t:a,p:b}}var G={},F=D(F,"spf.tasks.add"),H=D(H,"spf.tasks.run"),I=D(I,"spf.tasks.suspend"),K=D(K,"spf.tasks.resume"),Qa=D(Qa,"spf.tasks.cancel"),Sa=D(Sa,"spf.tasks.cancelAllExcept"),Ta=D(Ta,"spf.tasks.key"),Pa=D(Pa,"spf.tasks.do_"),Na=D(Na,"spf.tasks.createQueue_"),Oa=D(Oa,"spf.tasks.createTask_");function Va(a){var b=document.createElement("a");b.href=a;b.href=b.href;a={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:b.port,pathname:b.pathname,search:b.search,hash:b.hash,L:b.L,K:b.K};a.origin=a.protocol+"//"+a.host;a.pathname&&"/"==a.pathname[0]||(a.pathname="/"+a.pathname);return a}function L(a,b){var c=Va(a);return b?c.href:C(c.href,"#")[0]}
function Wa(a,b){var c=C(a,"#");a=c[0];v(b,function(b){a=a.replace(new RegExp("([?&])"+b+"(?:=[^&]*)?(?:(?=[&])|$)","g"),function(a,b){return"?"==b?b:""})});B(a,"?")&&(a=a.slice(0,-1));return a+c[1]+c[2]}function Xa(a){var b=u["advanced-persistent-parameters"]||"",c=C(a,"#");a=c[0];var d=-1!=a.indexOf("?")?"&":"?";return a+(b?d+b:"")+c[1]+c[2]};var Za;function $a(a,b,c,d){var e=a==M;b=N(a,b);var f=c||"^"+b,l=O(a,f),h;c&&(h=P(a,c))&&b!=h&&(m(e?"spfjsbeforeunload":"spfcssbeforeunload",{name:c,url:h}),ab(a,c,h),Ka(l,g(bb,null,a,c,h)));e=O(a,b);if((e=Q[e])&&f!=e){cb(a,e);var k=O(a,b);delete Q[k];(k=O(a,e))&&l&&k in E&&(E[l]=(E[l]||[]).concat(E[k]),delete E[k])}k=O(a,b);Q[k]=f;db(a,f,b);Ka(l,d);d=g(eb,null,a);R(a,b)?(e&&f!=e&&(a=fb(a,b))&&a.setAttribute("name",c||""),d()):(a=gb(a,b,d,void 0,void 0,h))&&c&&a.setAttribute("name",c)}
function hb(a,b){var c=P(a,b);ab(a,b,c);bb(a,b,c)}function ab(a,b,c){cb(a,b);c&&(c=O(a,c),delete Q[c]);a=O(a,b);delete E[a]}function bb(a,b,c){var d=a==M;c&&(m(d?"spfjsunload":"spfcssunload",{name:b,url:c}),ib(a,c))}function eb(a){var b=O(a,""),c;for(c in E)0==c.indexOf(b)&&ma(c.substring(b.length).split("|"),g(jb,null,a))&&Ma(c)}
function gb(a,b,c,d,e,f){function l(){R(a,b,e)&&kb(lb,a,b,e);h&&q&&q.parentNode&&k==document&&q.parentNode.removeChild(q);c&&setTimeout(c,0);return null}var h=a==M;b=N(a,b);kb(mb,a,b,e);var k=d||document,q=k.createElement(h?"script":"link");if(!b)return l();d=S(b);q.className=O(a,d);"onload"in q?q.onerror=q.onload=l:q.onreadystatechange=function(){/^c|loade/.test(q.readyState)&&l()};d=k.getElementsByTagName("head")[0]||k.body;h?(q.async=!0,q.src=b,d.insertBefore(q,d.firstChild)):(q.rel="stylesheet",
q.href=b,(f=f?fb(a,f,d):null)?d.insertBefore(q,f):d.appendChild(q));return q}function ib(a,b,c){b=N(a,b);(c=fb(a,b,c))&&c.parentNode&&c.parentNode.removeChild(c);nb(a,b)}function fb(a,b,c){b=S(b);a="."+O(a,b);return ea(a,c)[0]}function ob(a){var b=a==M,c=[];v(ea(b?"script[src]":'link[rel~="stylesheet"]'),function(d){var e=b?d.src:d.href,e=N(a,e);if(!R(a,e)){kb(lb,a,e);var f=S(e),f=O(a,f);z(d,f);if(f=d.getAttribute("name")){var l=O(a,e);Q[l]=f;db(a,f,e)}c.push(d)}});return c}
function pb(a,b,c){if(b&&(b=N(a,b),c||!R(a,b)))if(c&&a==qb)rb(b);else{var d=S(b),e=O(a,d),f=O(a,"prefetch"),d=document.getElementById(f);if(!d)d=ga(f,null,function(a){a.title=f;H(f,!0)});else if(!c&&d.contentWindow.document.getElementById(e))return;a=g(sb,null,d,a,b,e,f);d.title?a():F(f,a)}}
function sb(a,b,c,d,e){var f=b==M,l=b==T;a=a.contentWindow.document;var h=a.getElementById(d);h&&h.parentNode.removeChild(h);f?(h=a.createElement("object"),tb?a.createElement("script").src=c:h.data=c,h.id=d,a.body.appendChild(h)):l?(h=gb(b,c,null,a,e),h.id=d):(h=a.createElement("img"),tb&&(c=c+"#"+n()),h.src=c,h.id=d,a.body.appendChild(h))}function rb(a){var b=new Image;tb&&(a=a+"#"+n());b.src=a}
function ub(a,b,c){for(var d=a==M,e=P(a,c),f=b.replace(/\s/g,""),f=f||"",l=0,h=0,k=f.length;h<k;++h)l=31*l+f.charCodeAt(h),l%=4294967296;f="hash-"+l;db(a,c,f);!vb(a,f)&&(b=wb(a,b))&&(kb(lb,a,f),b&&!d&&(d=S(f),d=O(a,d),b.className=d,b.setAttribute("name",c)),(e=e&&e[0])&&ib(a,e))}
function wb(a,b){b=ya(b);if(!b)return null;var c=document.getElementsByTagName("head")[0]||document.body,d;a==M?(d=document.createElement("script"),d.text=b,c.appendChild(d),c.removeChild(d)):(d=document.createElement("style"),c.appendChild(d),"styleSheet"in d?d.styleSheet.cssText=b:d.appendChild(document.createTextNode(b)));return d}function xb(a,b){p("rsrc-p-"+a,b)}
function N(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=r[c]||"";if(xa(c))b=c+b;else for(var e in c)b=b.replace(e,c[e]);a!=qb&&(b=0>b.indexOf("."+a)?b+"."+a:b);b=L(b)}else 0==d&&(b=L(b))}return b}function O(a,b,c){return a+"-"+b+(c?"-"+c:"")}function S(a){return a?String(a).replace(/[^\w]/g,""):""}function kb(a,b,c,d){b=O(b,c,d);yb[b]=a}function R(a,b,c){a=O(a,b,c);return yb[a]}function nb(a,b){var c=O(a,b);delete yb[c]}
function vb(a,b){var c=R(a,b);return""==b||c==lb}function db(a,b,c){a=O(a,b);zb[a]=c}function P(a,b){var c=O(a,b);return zb[c]}function cb(a,b){var c=O(a,b);delete zb[c]}function jb(a,b){var c=P(a,b);return void 0!=c&&vb(a,c)}var yb={},Q={},zb={},tb=-1!=navigator.userAgent.indexOf(" Trident/"),mb=1,lb=2,T="css",qb="img",M="js";"rsrc-s"in r||p("rsrc-s",yb);yb=r["rsrc-s"];"rsrc-n"in r||p("rsrc-n",Q);Q=r["rsrc-n"];"rsrc-u"in r||p("rsrc-u",zb);zb=r["rsrc-u"];$a=D($a,"spf.net.resource.load");hb=D(hb,"spf.net.resource.unload");
Za=D(Za,"spf.net.resource.unload_");eb=D(eb,"spf.net.resource.check");gb=D(gb,"spf.net.resource.create");ib=D(ib,"spf.net.resource.destroy");ob=D(ob,"spf.net.resource.discover");pb=D(pb,"spf.net.resource.prefetch");sb=D(sb,"spf.net.resource.prefetch_");ub=D(ub,"spf.net.resource.eval");wb=D(wb,"spf.net.resource.exec");xb=D(xb,"spf.net.resource.path");N=D(N,"spf.net.resource.canonicalize");O=D(O,"spf.net.resource.key");S=D(S,"spf.net.resource.label");kb=D(kb,"spf.net.resource.status.set");R=D(R,"spf.net.resource.status.get");
nb=D(nb,"spf.net.resource.status.clear");vb=D(vb,"spf.net.resource.status.loaded");db=D(db,"spf.net.resource.url.set");P=D(P,"spf.net.resource.url.get");cb=D(cb,"spf.net.resource.url.clear");jb=D(jb,"spf.net.resource.url.loaded");function Ab(a){a=x(a);v(a,function(a){pb(qb,a,!0)})}Ab=D(Ab,"spf.net.connect.preconnect");function Bb(a,b,c){$a(M,a,b,c)}function Cb(a){hb(M,a)}function Db(){ob(M)}function Eb(a,b){gb(M,a,b)}function Fb(a){a=x(a);v(a,function(a){pb(M,a)})}function Gb(a,b,c){a=x(a);a=oa(a,function(a){return!!a});var d=[];v(a,function(a){void 0==P(M,a)&&d.push(a)});var e=!d.length;if(b){var f=ma(a,g(jb,null,M));e&&f?b():(a=O(M,a.sort().join("|")),Ka(a,b))}c&&!e&&c(d)}function Hb(a){db(M,a,"");eb(M)}function Ib(a,b){a=x(a);var c=O(M,a.sort().join("|"));La(c,b)}
function Jb(a,b){a=x(a);v(a,function(a){if(a){var b=Kb[a]||a,b=N(M,b),e=P(M,a);e&&b!=e&&Lb(a)}});Gb(a,b,Mb)}function Mb(a){v(a,function(a){function c(){Bb(e,a)}var d=Nb[a],e=Kb[a]||a;d?Jb(d,c):c()})}function Lb(a){a=x(a);v(a,function(a){var c=[],d;for(d in Nb){var e=Nb[d],e=x(e);v(e,function(e){e==a&&c.push(d)})}v(c,function(a){Lb(a)});Cb(a)})}function Ob(a,b){ub(M,a,b)}function Pb(a){wb(M,a)}function Qb(a,b){if(a){for(var c in a)Nb[c]=a[c];if(b)for(c in b)Kb[c]=b[c]}}function Rb(a){xb(M,a)}
var Nb={};"js-d"in r||p("js-d",Nb);var Nb=r["js-d"],Kb={};"js-u"in r||p("js-u",Kb);Kb=r["js-u"];Bb=D(Bb,"spf.net.script.load");Cb=D(Cb,"spf.net.script.unload");Db=D(Db,"spf.net.script.discover");Eb=D(Eb,"spf.net.script.get");Fb=D(Fb,"spf.net.script.prefetch");Gb=D(Gb,"spf.net.script.ready");Hb=D(Hb,"spf.net.script.done");Ib=D(Ib,"spf.net.script.ignore");Jb=D(Jb,"spf.net.script.require");Mb=D(Mb,"spf.net.script.require_");Lb=D(Lb,"spf.net.script.unrequire");Ob=D(Ob,"spf.net.script.eval");Qb=D(Qb,"spf.net.script.declare");
Rb=D(Rb,"spf.net.script.path");function Sb(a,b,c){$a(T,a,b,c)}function Tb(a){hb(T,a)}function Vb(){ob(T)}function Wb(a,b){gb(T,a,b)}function Xb(a){a=x(a);v(a,function(a){pb(T,a)})}function Yb(a,b){ub(T,a,b)}function Zb(a){xb(T,a)}Sb=D(Sb,"spf.net.style.load");Tb=D(Tb,"spf.net.style.unload");Vb=D(Vb,"spf.net.style.discover");Wb=D(Wb,"spf.net.style.get");Xb=D(Xb,"spf.net.style.prefetch");Yb=D(Yb,"spf.net.style.eval");Zb=D(Zb,"spf.net.style.path");function $b(a,b,c){if(b){b=[];var d,e=0;c&&(a+="\r\n");var f=a.indexOf(ac,e);for(-1<f&&(e=f+ac.length);-1<(f=a.indexOf(bc,e));)d=ya(a.substring(e,f)),e=f+bc.length,d&&b.push(JSON.parse(d));f=a.indexOf(cc,e);-1<f&&(d=ya(a.substring(e,f)),e=f+cc.length,d&&b.push(JSON.parse(d)));d="";a.length>e&&(d=a.substring(e),c&&B(d,"\r\n")&&(d=d.substring(0,d.length-2)));b=dc(b);return{n:b,c:d}}a=JSON.parse(a);b=dc(x(a));return{n:b,c:""}}
function U(a,b,c,d){var e=c&&0==c.type.lastIndexOf("navigate",0),f=c&&c.reverse,l=c&&!!c.position,h=c&&c.f,k=b.name||"",q="process "+L(a),t=!u["experimental-process-async"],w;w=0;b.timing||(b.timing={});b.title&&(document.title=b.title);e&&b.url&&L(b.url)!=L(window.location.href)&&ha(b.url+window.location.hash);b.head&&(w=g(function(a,b){var c=V(a);ec(c);fc(c);I(q);gc(c,function(){b.spfProcessHead=n();K(q,t)})},null,b.head,b.timing),w=F(q,w));b.attr&&(w=g(function(a,b){for(var c in a){var d=document.getElementById(c);
if(d){var e=a[c],f=void 0;for(f in e){var h=e[f];"class"==f?d.className=h:"style"==f?d.style.cssText=h:(d.setAttribute(f,h),"value"==f&&(d[f]=h))}}}b.spfProcessAttr=n()},null,b.attr,b.timing),w=F(q,w));var J=b.body||{},zd=w,Ub;for(Ub in J)w=g(function(a,b){var d=document.getElementById(a);if(d){!e||l||h||(p("nav-scroll-position",null),p("nav-scroll-url",null),window.scroll(0,0),h=!0,c&&(c.f=!0));var w=V(b);fc(w);var J=function(){I(q);gc(w,function(){K(q,t)})},Ya=u["animation-class"];hc&&va(d,Ya)?
(d=new ic(d,w.html,Ya,k,!!f),I(q),H(d.key,!0),F(d.key,g(jc,null,d),0),F(d.key,g(kc,null,d),17),F(d.key,g(lc,null,d),d.duration),F(d.key,g(function(){J();K(q,t)},null),0),H(d.key)):(Ya=u["experimental-html-handler"])?(I(q),Ya(w.html,d,function(){J();K(q,t)})):(d.innerHTML=w.html,J())}},null,Ub,J[Ub],b.timing),w=F(q,w);J=w-zd;b.foot?(w=g(function(a,b,c){c&&(b.spfProcessBody=n());a=V(a);fc(a);I(q);gc(a,function(){b.spfProcessFoot=n();K(q,t)})},null,b.foot,b.timing,J),w=F(q,w)):J&&(w=g(function(a){a.spfProcessBody=
n()},null,b.timing),w=F(q,w));d&&(w=F(q,g(d,null,a,b)));H(q,t)}function mc(a,b,c,d){c="preprocess "+L(a);var e;b.head&&(e=g(function(a){a=V(a);nc(a);oc(a);pc(a)},null,b.head),F(c,e));var f=b.body||{},l;for(l in f)f[l]&&(e=g(function(a,b){var c=V(b);oc(c);pc(c)},null,l,f[l]),F(c,e));b.foot&&(e=g(function(a){a=V(a);oc(a);pc(a)},null,b.foot),F(c,e));d&&F(c,g(d,null,a,b));H(c)}
function jc(a){z(a.element,a.k);z(a.element,a.u);z(a.element,a.G);z(a.element,a.C);z(a.element,a.D);a.h=document.createElement("div");a.h.className=a.J;var b=a.element,c=a.h;if(c){for(var d;d=b.firstChild;)c.appendChild(d);b.appendChild(c)}a.g=document.createElement("div");a.g.className=a.I;a.g.innerHTML=a.H;a.reverse?(b=a.h,b.parentNode.insertBefore(a.g,b)):(b=a.h,b.parentNode.insertBefore(a.g,b.nextSibling))}function kc(a){A(a.element,a.C);A(a.element,a.D);z(a.element,a.r);z(a.element,a.s)}
function lc(a){a.element.removeChild(a.h);var b=a.g,c,d=b.parentNode;if(d&&11!=d.nodeType)if(b.removeNode)b.removeNode(!1);else{for(;c=b.firstChild;)d.insertBefore(c,b);d.removeChild(b)}A(a.element,a.r);A(a.element,a.s);A(a.element,a.u);A(a.element,a.G);A(a.element,a.k)}function dc(a){v(x(a),function(a){if(a){a.head&&(a.head=V(a.head));if(a.body)for(var c in a.body)a.body[c]=V(a.body[c]);a.foot&&(a.foot=V(a.foot))}});return a}
function V(a){var b=new qc;if(!a)return b;if(!xa(a))return a.scripts&&v(a.scripts,function(a){b.scripts.push({url:a.url||"",text:a.text||"",name:a.name||"",async:a.async||!1})}),a.styles&&v(a.styles,function(a){b.styles.push({url:a.url||"",text:a.text||"",name:a.name||""})}),a.links&&v(a.links,function(a){"spf-preconnect"==a.rel&&b.links.push({url:a.url||"",rel:a.rel||""})}),b.html=a.html||"",b;a=a.replace(rc,function(a,d,e,f){return"script"==d?(a=(a=e.match(sc))?a[1]:"",d=(d=e.match(tc))?d[1]:"",
e=uc.test(e),b.scripts.push({url:d,text:f,name:a,async:e}),""):"style"==d?(a=(a=e.match(sc))?a[1]:"",b.styles.push({url:"",text:f,name:a}),""):a});a=a.replace(vc,function(a,d){var e=d.match(wc),e=e?e[1]:"";if("stylesheet"==e){var e=(e=d.match(sc))?e[1]:"",f=d.match(xc),f=f?f[1]:"";b.styles.push({url:f,text:"",name:e});return""}return"spf-preconnect"==e?(f=(f=d.match(xc))?f[1]:"",b.links.push({url:f,rel:e}),""):a});b.html=a;return b}
function gc(a,b){if(0>=a.scripts.length)b&&b();else{var c=-1,d=function(){c++;if(c<a.scripts.length){var e=a.scripts[c],f=function(){};e.url?f=e.name?g(Bb,null,e.url,e.name):g(Eb,null,e.url):e.text&&(f=e.name?g(Ob,null,e.text,e.name):g(Pb,null,e.text));e.url&&!e.async?f(d):(f(),d())}else b&&b()};d()}}function pc(a){0>=a.scripts.length||(a=pa(a.scripts,function(a){return a.url}),Fb(a))}
function fc(a){0>=a.styles.length||v(a.styles,function(a){a.url?a.name?Sb(a.url,a.name):Wb(a.url):a.text&&(a.name?Yb(a.text,a.name):wb(T,a.text))})}function oc(a){0>=a.styles.length||(a=pa(a.styles,function(a){return a.url}),Xb(a))}function ec(a){nc(a)}function nc(a){0>=a.links.length||(a=pa(a.links,function(a){return"spf-preconnect"==a.rel?a.url:""}),Ab(a))}
function ic(a,b,c,d,e){var f=parseInt(u["animation-duration"],10);this.element=a;this.H=b;this.duration=f;this.reverse=e;b=document.body;b=(b.dataset?b.dataset.spfName:b.getAttribute("data-"+"spfName".replace(/([A-Z])/g,"-$1").toLowerCase()))||"";this.key=Ta(a);this.u=b&&c+"-from-"+b;this.G=d&&c+"-to-"+d;this.h=null;this.J=c+"-old";this.g=null;this.I=c+"-new";this.k=c+(e?"-reverse":"-forward");this.C=c+"-start";this.D=this.k+"-start";this.r=c+"-end";this.s=this.k+"-end"}
function qc(){this.html="";this.scripts=[];this.styles=[];this.links=[]}
var hc=function(){var a=document.createElement("div");return"transition"in a.style?!0:na(["webkit","Moz","Ms","O","Khtml"],function(b){return b+"Transition"in a.style})}(),vc=/\x3clink([\s\S]*?)\x3e/ig,rc=/\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig,uc=/(?:\s|^)async(?:\s|=|$)/i,xc=/(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,sc=/(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,wc=/(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,tc=/(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,ac="[\r\n",bc=",\r\n",cc="]\r\n",$b=D($b,"spf.nav.response.parse"),
U=D(U,"spf.nav.response.process"),mc=D(mc,"spf.nav.response.preprocess"),dc=D(dc,"spf.nav.response.extract"),V=D(V,"spf.nav.response.extract_"),gc=D(gc,"spf.nav.response.installScripts_"),pc=D(pc,"spf.nav.response.preinstallScripts_"),fc=D(fc,"spf.nav.response.installStyles_"),oc=D(oc,"spf.nav.response.preinstallStyles_"),ec=D(ec,"spf.nav.response.installLinks_"),nc=D(nc,"spf.nav.response.preinstallLinks_");function yc(a,b,c,d){var e=d||{},f=!1,l=0,h,k=new XMLHttpRequest;k.open(a,b,!0);k.timing={};var q=k.abort;k.abort=function(){clearTimeout(h);k.onreadystatechange=null;q.call(k)};k.onreadystatechange=function(){var a=k.timing;if(k.readyState==zc){a.responseStart=a.responseStart||n();if("json"==k.responseType)f=!1;else if(-1<(k.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"))f=!0;else{var a=k.getResponseHeader("X-Firefox-Spdy"),c=window.chrome&&chrome.loadTimes&&chrome.loadTimes(),
c=c&&c.wasFetchedViaSpdy;f=!(!a&&!c)}e.A&&e.A(k)}else k.readyState==Ac?f&&e.l&&(a=k.responseText.substring(l),l=k.responseText.length,e.l(k,a)):k.readyState==Bc&&(a.responseEnd=a.responseEnd||n(),window.performance&&window.performance.getEntriesByName&&(k.resourceTiming=window.performance.getEntriesByName(b).pop()),f&&e.l&&k.responseText.length>l&&(a=k.responseText.substring(l),l=k.responseText.length,e.l(k,a)),clearTimeout(h),e.w&&e.w(k))};"responseType"in k&&"json"==e.responseType&&(k.responseType=
"json");a="POST"==a;if(e.headers)for(var t in e.headers)k.setRequestHeader(t,e.headers[t]),"content-type"==t.toLowerCase()&&(a=!1);a&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<e.F&&(h=setTimeout(function(){k.abort();e.B&&e.B(k)},e.F));k.timing.fetchStart=n();k.send(c);return k}var zc=2,Ac=3,Bc=4;function Cc(a,b){var c=b||{};c.method=((c.method||"GET")+"").toUpperCase();c.type=c.type||"request";var d=a,e=u["url-identifier"]||"";if(e){var e=e.replace("__type__",c.type||""),f=C(d,"#"),l=C(f[0],"?"),d=l[0],h=l[1],l=l[2],k=f[1],f=f[2];if(0==e.lastIndexOf("?",0))h&&(e=e.replace("?","&")),l+=e;else{if(0==e.lastIndexOf(".",0))if(B(d,"/"))e="index"+e;else{var q=d.lastIndexOf(".");-1<q&&(d=d.substring(0,q))}else B(d,"/")&&0==e.lastIndexOf("/",0)&&(e=e.substring(1));d+=e}d=d+h+l+k+f}e=L(d);d={};d.spfUrl=
e;d.startTime=n();d.fetchStart=d.startTime;h=Dc(a,c.current,null,c.type,!1);h=Ec(h,c.current);d.spfPrefetched=!!h&&"prefetch"==h.type;d.spfCached=!!h;if(h)return Ca(g(Fc,null,a,c,d,h.key,h.response)),null;h={};if(l=u["experimental-request-headers"])for(var t in l)k=l[t],h[t]=null==k?"":k;if(c.headers)for(t in c.headers)k=c.headers[t],h[t]=null==k?"":k;null!=c.b&&(h["X-SPF-Referer"]=c.b);null!=c.current&&(h["X-SPF-Previous"]=c.current);if(t=u["advanced-header-identifier"])h["X-SPF-Request"]=t.replace("__type__",
c.type),h.Accept="application/json";t=new Gc;l=g(Hc,null,a,c,d,t);t={headers:h,F:u["request-timeout"],A:g(Ic,null,a,t),l:g(Jc,null,a,c,d,t),w:l,B:l};u["advanced-response-type-json"]&&(t.responseType="json");return"POST"==c.method?yc("POST",e,c.q,t):yc("GET",e,null,t)}
function Fc(a,b,c,d,e){var f=!1;c.responseStart=c.responseEnd=n();b.type&&0==b.type.lastIndexOf("navigate",0)&&(c.navigationStart=c.startTime,u["cache-unified"]||(qa(d),f=!0));b.e&&"multipart"==e.type&&v(e.parts,function(d){d.timing||(d.timing={});d.timing.spfCached=!!c.spfCached;d.timing.spfPrefetched=!!c.spfPrefetched;b.e(a,d)});Kc(a,b,c,e,f)}function Ic(a,b,c){a=-1!=(c.getResponseHeader("X-SPF-Response-Type")||"").toLowerCase().indexOf("multipart");b.v=a}
function Jc(a,b,c,d,e,f,l){if(d.v){f=d.c+f;var h;try{h=$b(f,!0,l)}catch(k){e.abort();b.d&&b.d(a,k);return}b.e&&v(h.n,function(d){d.timing||(d.timing={});d.timing.spfCached=!!c.spfCached;d.timing.spfPrefetched=!!c.spfPrefetched;b.e(a,d)});d.complete=d.complete.concat(h.n);d.c=h.c}}
function Hc(a,b,c,d,e){if(e.timing)for(var f in e.timing)c[f]=e.timing[f];if(e.resourceTiming)if("load"==b.type)for(var l in e.resourceTiming)c[l]=e.resourceTiming[l];else if(window.performance&&window.performance.timing&&(f=window.performance.timing.navigationStart,f+e.resourceTiming.startTime>=c.startTime))for(var h in e.resourceTiming)l=e.resourceTiming[h],void 0!==l&&(B(h,"Start")||B(h,"End")||"startTime"==h)&&(c[h]=f+Math.round(l));"load"!=b.type&&(c.navigationStart=c.startTime);d.complete.length&&
(d.c=ya(d.c),d.c&&Jc(a,b,c,d,e,"",!0));var k;if("json"==e.responseType){if(!e.response){b.d&&b.d(a,Error("JSON response parsing failed"));return}k=dc(x(e.response))}else try{k=$b(e.responseText).n}catch(q){b.d&&b.d(a,q);return}if(b.e&&1<k.length)for(d=d.complete.length;d<k.length;d++)e=k[d],e.timing||(e.timing={}),e.timing.spfCached=!!c.spfCached,e.timing.spfPrefetched=!!c.spfPrefetched,b.e(a,e);if(1<k.length){var t;v(k,function(a){a.cacheType&&(t=a.cacheType)});k={parts:k,type:"multipart"};t&&(k.cacheType=
t)}else k=1==k.length?k[0]:{};Kc(a,b,c,k,!0)}function Kc(a,b,c,d,e){if(e&&"POST"!=b.method&&(e=Dc(a,b.current,d.cacheType,b.type,!0))){d.cacheKey=e;var f={response:d,type:b.type||""},l=parseInt(u["cache-lifetime"],10),h=parseInt(u["cache-max"],10);0>=l||0>=h||(h=y(),f={data:f,life:l,time:n(),count:0},ta(f),h[e]=f,setTimeout(ra,1E3))}d.timing=c;b.m&&b.m(a,d)}
function Dc(a,b,c,d,e){a=L(a);var f;u["cache-unified"]?f=a:"navigate-back"==d||"navigate-forward"==d?f="history "+a:"navigate"==d?f=(e?"history ":"prefetch ")+a:"prefetch"==d&&(f=e?"prefetch "+a:"");b&&"url"==c?f+=" previous "+b:b&&"path"==c&&(f+=" previous "+Va(b).pathname);return f||""}
function Ec(a,b){var c=[];b&&(c.push(a+" previous "+b),c.push(a+" previous "+Va(b).pathname));c.push(a);var d=null;na(c,function(a){var b;a:{b=y();if(a in b){b=b[a];if(sa(b)){ta(b);b=b.data;break a}qa(a)}b=void 0}b&&(d={key:a,response:b.response,type:b.type});return!!b});return d}function Gc(){this.v=!1;this.c="";this.complete=[]}Cc=D(Cc,"spf.nav.request.send");Fc=D(Fc,"spf.nav.request.handleResponseFromCache_");Ic=D(Ic,"spf.nav.request.handleHeadersFromXHR_");Jc=D(Jc,"spf.nav.request.handleChunkFromXHR_");
Hc=D(Hc,"spf.nav.request.handleCompleteFromXHR_");Kc=D(Kc,"spf.nav.request.done_");function Lc(){var a=Mc,b=Nc;if(!r["history-init"]&&window.addEventListener){var c=window.location.href;window.addEventListener("popstate",la,!1);p("history-init",!0);p("history-callback",a);p("history-error-callback",b);p("history-listener",la);p("history-url",c);p("history-timestamp",n());a={"spf-referer":document.referrer};try{ha(c,a)}catch(d){b&&b(c,d)}}!r["nav-init"]&&document.addEventListener&&(p("nav-init",!0),p("nav-init-time",n()),p("nav-counter",0),document.addEventListener("click",Oc,!1),
p("nav-listener",Oc),!u["experimental-prefetch-mousedown"]||"ontouchstart"in window||0<window.navigator.maxTouchPoints||0<window.navigator.msMaxTouchPoints||(document.addEventListener("mousedown",Pc,!1),p("nav-mousedown-listener",Pc)),document.addEventListener("scroll",Qc,!1),p("nav-scroll-listener",Qc))}
function Rc(){W();r["nav-init"]&&(document.removeEventListener&&(document.removeEventListener("click",r["nav-listener"],!1),document.removeEventListener("mousedown",r["nav-mousedown-listener"],!1),document.removeEventListener("scroll",r["nav-scroll-listener"],!1)),p("nav-listener",null),p("nav-mousedown-listener",null),p("nav-scroll-listener",null),p("nav-scroll-position",null),p("nav-scroll-url",null),p("nav-init",!1),p("nav-init-time",null),p("nav-counter",null));r["history-init"]&&(window.removeEventListener&&
window.removeEventListener("popstate",r["history-listener"],!1),p("history-init",!1),p("history-callback",null),p("history-error-callback",null),p("history-listener",null),p("history-url",null),p("history-timestamp",0))}function Sc(a){return fa(a,function(a){return va(a,u["link-class"])})}function Tc(a){return fa(a,function(a){return va(a,u["nolink-class"])})}function Uc(a,b){return fa(a,function(a){return a.href&&"img"!=a.tagName.toLowerCase()},b)}
function Vc(a){if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||0<a.button)return null;var b=Sc(a.target);return!b||u["nolink-class"]&&Tc(a.target)?null:(a=Uc(a.target,b))?a.href:null}function Wc(a){return Va(a).origin!=Va(window.location.href).origin?!1:!0}
function Xc(){if(!r["nav-init"])return!1;var a=parseInt(r["nav-counter"],10)||0;a++;var b=parseInt(u["navigate-limit"],10),b=isNaN(b)?Infinity:b;if(a>b)return!1;a=parseInt(r["nav-init-time"],10);a--;a=n()-a;b=parseInt(u["navigate-lifetime"],10);b=isNaN(b)?Infinity:b;return a>b?!1:!0}function Yc(a,b){var c=b||window.location.href;if(-1!=a.indexOf("#")){var d=L(a),c=L(c);if(d==c)return!1}return!0}
function Oc(a){if(!a.defaultPrevented){var b=Vc(a);b&&(b=Xa(b),Wc(b)&&Xc()&&m("spfclick",{url:b,target:a.target})&&(Zc(b,{},new $c),a.preventDefault()))}}function Pc(a){var b=Vc(a);b&&setTimeout(function(){ad(b)},0)}function Qc(){var a;a=r["nav-scroll-position"]||null;var b=r["nav-scroll-url"]||"";a=a&&b==window.location.href?a:null;bd();a&&window.scroll.apply(null,a)}
function Mc(a,b){var c=new $c({current:b&&b["spf-current"],history:!0,position:b&&b["spf-position"],b:b&&b["spf-referer"],reverse:!(!b||!b["spf-back"])}),d=u["reload-identifier"];d&&(a=Wa(a,[d]));Wc(a)?Xc()?m("spfhistory",{url:a,referer:c.b,previous:c.current})&&(c.position&&(p("nav-scroll-position",[window.pageXOffset,window.pageYOffset]),p("nav-scroll-url",window.location.href)),Zc(a,{},c)):X(a,dd):X(a,cd)}function ed(a,b){a&&(a=Xa(a),Wc(a)?Xc()?Zc(a,b||{},new $c):X(a,dd):X(a,cd))}
function Zc(a,b,c){W();if(Yc(a,c.current))if(fd(a,c.b,c.current,b)){p("nav-counter",(parseInt(r["nav-counter"],10)||0)+1);gd(a);var d=L(a),e="preprocess "+L(d);Sa("preprocess",e);d=hd()[d];p("nav-request",d);p("nav-promote",null);p("nav-promote-time",null);d&&4!=d.readyState?id(a,b,c):jd(a,b,c)}else X(a,kd);else c.history||ld(a,c.b,g(Y,null,b)),md(a,c)}
function id(a,b,c){var d="preprocess "+L(a),e="promote "+L(a);p("nav-promote",a);p("nav-promote-time",n());Qa(d);H(e,!0);c.history||ld(a,c.b,g(Y,null,b))}function jd(a,b,c){var d=g(Y,null,b),e=g(nd,null,b,c),f=g(od,null,b,c);u["advanced-navigate-persist-timing"]||pd();c.type="navigate";c.history&&(c.type+=c.reverse?"-back":"-forward");b=Cc(a,{method:b.method,headers:b.experimental_headers,e:e,d:d,m:f,q:b.postData,type:c.type,current:c.current,b:c.b});p("nav-request",b);c.history||ld(a,c.b,d)}
function md(a,b){if(b.position)bd(),window.scroll.apply(null,b.position),b.f=!0;else{var c=C(a,"#");if(c[2]){if(c=document.getElementById(c[2]))bd(),c.scrollIntoView(),b.f=!0}else b.f||(bd(),window.scroll(0,0),b.f=!0)}}function ld(a,b,c){try{ha(null,{"spf-position":[window.pageXOffset,window.pageYOffset]}),L(a,!0)!=window.location.href&&ia(!1,a,{"spf-referer":b},void 0)}catch(d){W(),c(a,d)}}function Y(a,b,c){p("nav-request",null);Nc(b,c,a)&&X(b,qd,c)}
function nd(a,b,c,d){if(rd(c,d,a))if(d.reload)X(c,sd);else if(d.redirect)td(a,d.redirect);else try{U(c,d,b,function(){ud(c,d,a)})}catch(e){Y(a,c,e)}else X(c,vd)}
function od(a,b,c,d){p("nav-request",null);if(r["nav-promote"]==b.a){var e=d.timing||{};e.navigationStart=r["nav-promote-time"];e.spfPrefetched=!0}var f="multipart"==d.type;if(!f){if(!wd(c,d,a)){X(c,xd);return}if(d.reload){X(c,sd);return}if(d.redirect){td(a,d.redirect);return}}try{U(c,f?{}:d,b,function(){var e=d.name||"";f&&v(d.parts,function(a){e=a.name||e});wa(e);md(c,b);yd(c,d,a)})}catch(l){Y(a,c,l)}}function td(a,b){try{b+=window.location.hash,ha(b,null,!0)}catch(c){W(),Y(a,b,c)}}
function W(){var a=r["nav-request"];a&&(a.abort(),p("nav-request",null))}function Z(a,b){var c;a&&(c=Array.prototype.slice.call(arguments),c[0]=a,c=ba.apply(null,c));return!1!==c}
function X(a,b,c){c=c?c.message:"";W();gd();var d=b;c&&(d+=" Message: "+c);m("spfreload",{url:a,reason:d});var e=window.location.href;u["experimental-remove-history"]&&e==a&&(p("history-ignore-pop",!0),window.history.back());setTimeout(function(){var c=u["reload-identifier"];if(c){var d={};d[c]=encodeURIComponent(b);var c=a,h=C(c,"#"),c=h[0],k=-1!=c.indexOf("?")?"&":"?",q;for(q in d)c+=k+q,d[q]&&(c+="="+d[q]),k="&";a=c+h[1]+h[2]}window.location.href=a;Yc(a,e)||window.location.reload()},0)}
function Ad(a,b){a=Xa(a);Bd(a,b||{},new $c)}function Bd(a,b,c){c.a=c.a||a;if(fd(a,void 0,void 0,b,!0)){var d=g(Cd,null,!1,b,c),e=g(Dd,null,!1,b,c),f=g(Ed,null,!1,b,c);c.type="load";Cc(a,{method:b.method,headers:b.experimental_headers,e:e,d:d,m:f,q:b.postData,type:c.type})}}function ad(a,b){a=Xa(a);Fd(a,b||{},new $c)}
function Fd(a,b,c){c.a=c.a||a;if(fd(a,void 0,void 0,b,!0)){var d=g(Cd,null,!0,b,c),e=g(Dd,null,!0,b,c),f=g(Ed,null,!0,b,c);c.type="prefetch";b=Cc(a,{method:b.method,headers:b.experimental_headers,e:e,d:d,m:f,q:b.postData,type:c.type,current:c.current});a=L(a);hd()[a]=b}}function Cd(a,b,c,d,e){a&&Gd(d);a&&r["nav-promote"]==c.a?Y(b,d,e):Nc(d,e,b,!0)}
function Dd(a,b,c,d,e){if(rd(d,e,b,!0)){if(e.reload){if(!a)return;if(r["nav-promote"]==c.a){X(d,sd);return}}if(e.redirect)Hd(a,b,c,e.redirect);else{if(a){var f=g(nd,null,b,c,d,e),l="promote "+L(c.a);F(l,f);if(r["nav-promote"]==c.a){H(l,!0);return}}(a?mc:U)(d,e,c,function(){ud(d,e,b,!0)})}}}
function Ed(a,b,c,d,e){var f="multipart"==e.type;if(!f){if(!wd(d,e,b,!0)){X(d,xd);return}if(e.reload){if(!a)return;if(r["nav-promote"]==c.a){X(d,sd);return}}if(e.redirect){Hd(a,b,c,e.redirect);return}}var l="promote "+L(c.a);if(a){Gd(d);if(r["nav-promote"]==c.a){F(l,g(od,null,b,c,d,e));H(l,!0);return}Qa(l)}l=a?mc:U;try{l(d,f?{}:e,c,function(){yd(d,e,b,!0)})}catch(h){Cd(a,b,c,d,h)}}function Hd(a,b,c,d){a=a?Fd:Bd;var e={};v([Id,Jd,Kd,Ld,Md,Nd],function(a){e[a]=b[a]});a(d,e,c)}
function Nc(a,b,c,d){a={url:a,err:b};(c=Z((c||{})[Id],a))&&!d&&(c=m("spferror",a));return c}function fd(a,b,c,d,e){a={url:a,referer:b,previous:c};(d=Z((d||{})[Jd],a))&&!e&&(d=m("spfrequest",a));return d}function rd(a,b,c,d){a={url:a,part:b};(c=Z((c||{})[Kd],a))&&!d&&(c=m("spfpartprocess",a));return c}function ud(a,b,c,d){a={url:a,part:b};Z((c||{})[Ld],a)&&!d&&m("spfpartdone",a)}function wd(a,b,c,d){a={url:a,response:b};(c=Z((c||{})[Md],a))&&!d&&(c=m("spfprocess",a));return c}
function yd(a,b,c,d){a={url:a,response:b};Z((c||{})[Nd],a)&&!d&&m("spfdone",a)}function Gd(a){a=L(a);var b=hd(),c=b[a];c&&c.abort();delete b[a]}function gd(a){var b=hd();a=a&&L(a);for(var c in b)a!=c&&Gd(c)}var pd,Od=window.performance&&(window.performance.clearResourceTimings||window.performance.webkitClearResourceTimings||window.performance.mozClearResourceTimings||window.performance.msClearResourceTimings||window.performance.oClearResourceTimings);pd=Od?g(Od,window.performance):ca;
function hd(){return"nav-prefetches"in r?r["nav-prefetches"]:p("nav-prefetches",{})}function bd(){p("nav-scroll-position",null);p("nav-scroll-url",null)}function $c(a){a=a||{};this.current=a.history&&a.current?a.current:window.location.href;this.history=!!a.history;this.a=a.a||"";this.position=a.position||null;this.b=void 0!=a.b?a.b:window.location.href;this.reverse=!!a.reverse;this.f=!!a.f;this.type=a.type||""}
var Id="onError",Jd="onRequest",Kd="onPartProcess",Ld="onPartDone",Md="onProcess",Nd="onDone",dd="1",kd="2",vd="3",xd="4",sd="5",cd="9",qd="10",Lc=D(Lc,"spf.nav.init"),Rc=D(Rc,"spf.nav.dispose"),Oc=D(Oc,"spf.nav.handleClick_"),Mc=D(Mc,"spf.nav.handleHistory_"),ed=D(ed,"spf.nav.navigate"),Zc=D(Zc,"spf.nav.navigate_"),id=D(id,"spf.nav.navigatePromotePrefetch_"),jd=D(jd,"spf.nav.navigateSendRequest_"),Y=D(Y,"spf.nav.handleNavigateError_"),nd=D(nd,"spf.nav.handleNavigatePart_"),od=D(od,"spf.nav.handleNavigateSuccess_"),
W=D(W,"spf.nav.cancel"),Z=D(Z,"spf.nav.callback"),X=D(X,"spf.nav.reload"),ad=D(ad,"spf.nav.prefetch"),Fd=D(Fd,"spf.nav.prefetch_"),Ad=D(Ad,"spf.nav.load"),Cd=D(Cd,"spf.nav.handleLoadError_"),Dd=D(Dd,"spf.nav.handleLoadPart_"),Ed=D(Ed,"spf.nav.handleLoadSuccess_");function Pd(){Db();Vb();"complete"==document.readyState&&(document.removeEventListener?document.removeEventListener("DOMContentLoaded",Pd,!1):document.detachEvent&&document.detachEvent("onreadystatechange",Pd))}document.addEventListener?document.addEventListener("DOMContentLoaded",Pd,!1):document.attachEvent&&document.attachEvent("onreadystatechange",Pd);Pd();
var Qd={init:function(a){var b=!("function"!=typeof window.history.pushState&&!ka().contentWindow.history.pushState);a=a||{};for(var c in da)u[c]=c in a?a[c]:da[c];for(c in a)c in da||(u[c]=a[c]);b&&Lc();return b},dispose:function(){"undefined"!=typeof History&&History.prototype.pushState&&Rc();for(var a in u)delete u[a]},navigate:ed,load:Ad,prefetch:ad,process:function(a,b){function c(a,c,d,e){a==c&&b&&b(e)}var d=window.location.href;if("multipart"==a.type){var e=a.parts,f=e.length-1;v(e,function(a,
b){U(d,a,null,g(c,null,b,f))})}else U(d,a,null,g(c,null,0,0))}},Rd={cache:{remove:qa,clear:function(){y({})}},script:{load:Bb,get:Eb,ready:Gb,done:Hb,require:Jb,declare:Qb,path:Rb,unload:Cb,ignore:Ib,unrequire:Lb,prefetch:Fb},style:{load:Sb,get:Wb,unload:Tb,path:Zb,prefetch:Xb}},Sd=this.spf=this.spf||{},Td;for(Td in Qd)Sd[Td]=Qd[Td];for(var Ud in Rd)for(var Vd in Rd[Ud])Sd[Ud]=Sd[Ud]||{},Sd[Ud][Vd]=Rd[Ud][Vd];m("spfready");if(typeof define=='function'&&define.amd)define(spf);else if(typeof exports=='object')for(var f in spf)exports[f]=spf[f];})();
