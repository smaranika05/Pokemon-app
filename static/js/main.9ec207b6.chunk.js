(window["webpackJsonppokemon-app"]=window["webpackJsonppokemon-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/pokeball.4602fe00.jpg"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),s=(a(12),a(1)),o=a.n(s),u=a(2),l=a(3),m=(a(14),a(6)),p=a.n(m);var f=function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"left"},"Pokemon Encyclopedia"),r.a.createElement("div",{className:"right"},r.a.createElement("img",{src:p.a})))},d={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#461988",pyschic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"};a(15);var v=function(e){var t=e.pokemon;return r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"Card__img"},r.a.createElement("img",{src:t.sprites.front_default,alt:""})),r.a.createElement("div",{className:"Card__name"},t.name),r.a.createElement("div",{className:"Card__types"},t.types.map((function(e){return r.a.createElement("div",{className:"Card__type",style:{backgroundColor:d[e.type.name]}},e.type.name)}))),r.a.createElement("div",{className:"Card__info"},r.a.createElement("div",{className:"Card__data Card__data--weight"},r.a.createElement("p",{className:"title"},"Weight"),r.a.createElement("p",null,t.weight)),r.a.createElement("div",{className:"Card__data Card__data--weight"},r.a.createElement("p",{className:"title"},"Height"),r.a.createElement("p",null,t.height)),r.a.createElement("div",{className:"Card__data Card__data--ability"},r.a.createElement("p",{className:"title"},"Ability"),r.a.createElement("p",null,t.abilities[0].ability.name))))};function b(e){var t=e.url;return new Promise((function(e,a){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))}))}function h(e){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(16);var w=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),m=s[0],p=s[1],d=Object(n.useState)(""),E=Object(l.a)(d,2),w=E[0],g=E[1],k=Object(n.useState)(!0),y=Object(l.a)(k,2),x=y[0],_=y[1],N="https://pokeapi.co/api/v2/pokemon";Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(N);case 2:return t=e.sent,p(t.next),g(t.previous),e.next=7,O(t.results);case 7:_(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var j=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.next=3,h(m);case 3:return t=e.sent,e.next=6,O(t.results);case 6:p(t.next),g(t.previous),_(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:return _(!0),e.next=5,h(w);case 5:return t=e.sent,e.next=8,O(t.results);case 8:p(t.next),g(t.previous),_(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("div",null,x?r.a.createElement("h1",{style:{textAlign:"center"}},"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:C},"Prev"),r.a.createElement("button",{onClick:j},"Next")),r.a.createElement("div",{className:"grid-container"},a.map((function(e,t){return r.a.createElement(v,{key:t,pokemon:e})}))),r.a.createElement("div",{className:"btn"},r.a.createElement("button",{onClick:C},"Prev"),r.a.createElement("button",{onClick:j},"Next")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.9ec207b6.chunk.js.map