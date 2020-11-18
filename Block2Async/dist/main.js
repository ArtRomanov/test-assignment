(()=>{"use strict";var e={514:function(e,t){var o=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,s){function u(e){try{c(n.next(e))}catch(e){s(e)}}function i(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(u,i)}c((n=n.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var o,n,r,s,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(o)throw new TypeError("Generator is already executing.");for(;u;)try{if(o=1,n&&(r=2&s[0]?n.return:s[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,s[1])).done)return r;switch(n=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,n=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!((r=(r=u.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){u=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){u.label=s[1];break}if(6===s[0]&&u.label<r[1]){u.label=r[1],r=s;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(s);break}r[2]&&u.ops.pop(),u.trys.pop();continue}s=t.call(e,u)}catch(e){s=[6,e],n=0}finally{o=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}};t.__esModule=!0,t.requestForUsers=t.requestForTodos=void 0,t.requestForTodos=function(){return o(void 0,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,fetch("https://jsonplaceholder.typicode.com/todos")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},t.requestForUsers=function(){return o(void 0,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,fetch("https://jsonplaceholder.typicode.com/users")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))}}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=o(514),t=function(e,t,o,n){return new(o||(o=Promise))((function(r,s){function u(e){try{c(n.next(e))}catch(e){s(e)}}function i(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(u,i)}c((n=n.apply(e,t||[])).next())}))};let n={};const r=o=>t(void 0,void 0,void 0,(function*(){const t=yield(0,e.requestForTodos)();if(o in n)return console.log("request found in memo: "),n[o];{console.log("requesting from API...");const e=t.filter((e=>e.id===o));return n[o]=e,e}}));var s;r(1).then((e=>{console.log(e)})),r(1).then((e=>{console.log(e)})),t(void 0,void 0,void 0,(function*(){let t={};return(yield(0,e.requestForTodos)()).forEach((e=>{e.userId in t?t[e.userId].push(e):t[e.userId]=[e]})),console.log("Grouping todos by users: ",t)})),t(void 0,void 0,void 0,(function*(){const t=(yield(0,e.requestForTodos)()).filter((e=>2===e.userId));return console.log("Select all user's todos by userId(2):",t)})),s="Bret",t(void 0,void 0,void 0,(function*(){let t=(yield(0,e.requestForUsers)()).filter((e=>e.username===s));const o=(yield(0,e.requestForTodos)()).filter((e=>e.userId===t[0].id));return console.log("Select todos by user name 'Bret': ",o)}))})()})();