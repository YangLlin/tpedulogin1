(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[41],{103:function(e,a,t){"use strict";t.r(a);var l=t(16),n=t.n(l),r=t(54),i=t.n(r),c=t(297),s=t(339),o=t(254),u=t(257),d=t(353),m=t(384),p=t(431),v=t(385),f=t(407),b=t(235),g=t(240),h=t(250),E=t(0),y=t.n(E);function C(e,a){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,a){if(!e)return;if("string"==typeof e)return w(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,a)}(e))||a&&e&&"number"==typeof e.length){t&&(e=t);var l=0,n=function(){};return{s:n,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,r=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw r}}}}function w(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=e[t];return l}var N=function(e){var a=Object(g.a)((function(e){return Object(h.a)({chips:{display:"flex",flexWrap:"wrap"},chip:{margin:1}})}))(),t=function(a){if(e.data&&e.data.length>0){var t,l=C(e.data);try{for(l.s();!(t=l.n()).done;){var n=t.value;if(n.value===a)return n.label}}catch(e){l.e(e)}finally{l.f()}}return null};return y.a.createElement(d.a,{variant:e.variant,size:e.size,style:e.style,className:e.className,fullWidth:e.fullwidth},y.a.createElement(m.a,{id:e.id},e.label),y.a.createElement(p.a,{labelId:e.id,label:e.label,name:e.name,value:e.target,onChange:e.handleChange,multiple:!0,renderValue:function(l){return y.a.createElement("div",{className:a.chips},l.map((function(l){return y.a.createElement(v.a,{key:"multiDropdownList-chip-key-".concat(l),label:t(l),className:a.chip,onDelete:e.handleDelete(l),onMouseDown:function(e){e.stopPropagation()}})})))}},e.data&&e.data.length>0?e.data.map((function(a){if(!e.filter||e.filter===a.group)return y.a.createElement(f.a,{key:"multiDropdownList-item-key-".concat(a.value),value:a.value},y.a.createElement(s.a,{checked:e.target.indexOf(a.value)>-1}),y.a.createElement(b.a,{primary:a.label}))})):null))},O=t(331),D={grades:[{value:"G1",label:"一年級"},{value:"G2",label:"二年級"},{value:"G3",label:"三年級"},{value:"G4",label:"四年級"},{value:"G5",label:"五年級"},{value:"G6",label:"六年級"}],allClass:[{group:"G1",value:"101",label:"一年一班"},{group:"G1",value:"102",label:"一年二班"},{group:"G1",value:"103",label:"一年三班"},{group:"G2",value:"201",label:"二年一班"},{group:"G2",value:"202",label:"二年二班"},{group:"G2",value:"203",label:"二年三班"},{group:"G2",value:"204",label:"二年四班"},{group:"G2",value:"205",label:"二年五班"}]},j={depts:[{value:"1",label:"教官室"},{value:"2",label:"教務處"},{value:"3",label:"學務處"},{value:"4",label:"學校老師"}],teachers:[{group:"1",value:"1",label:"王胤聿"},{group:"1",value:"2",label:"王雅佩"},{group:"2",value:"3",label:"劉乃富"},{group:"3",value:"4",label:"姚翠岑"},{group:"4",value:"5",label:"陳貞孝"}]},A={disciplineClusters:[{code:"A",name:"生活"},{code:"B",name:"語文"},{code:"C",name:"數學"},{code:"D",name:"社會"},{code:"E",name:"自然科學"}],classes:[{disciplineCluster:"B",code:"1",name:"國語文"},{disciplineCluster:"B",code:"2",name:"英語文"},{disciplineCluster:"C",code:"3",name:"數學A"},{disciplineCluster:"D",code:"4",name:"歷史"},{disciplineCluster:"D",code:"5",name:"地理"},{disciplineCluster:"D",code:"6",name:"公民與社會"},{disciplineCluster:"E",code:"7",name:"物理"},{disciplineCluster:"E",code:"8",name:"化學"},{disciplineCluster:"E",code:"9",name:"地球科學"},{disciplineCluster:"F",code:"10",name:"專項體能訓練"},{disciplineCluster:"F",code:"11",name:"專項技術訓練"},{disciplineCluster:"F",code:"12",name:"團體活動時間"},{disciplineCluster:"F",code:"13",name:"彈性學習時間"},{disciplineCluster:"F",code:"14",name:"微控制器應用實務"},{disciplineCluster:"F",code:"15",name:"電子學實習"}]};function G(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function L(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?G(Object(t),!0).forEach((function(a){n()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}a.default=function(){var e=y.a.useState({grade:"",class:[],department:"",teacher:[],disciplineCluster:"",classes:[]}),a=i()(e,2),t=a[0],l=a[1],r=y.a.useState(""),d=i()(r,2),m=d[0],p=d[1],v=function(e){var a=e.target.name,r=e.target.value;l(L(L({},t),{},n()({},a,r)))},f=function(e){for(var a=e.target.value,r=e.target.name,i=[],c=0,s=a.length;c<s;c+=1)i.push(a[c]);l(L(L({},t),{},n()({},r,i)))};return y.a.createElement("div",null,y.a.createElement("div",{className:"my-4 row justify-content-center"},y.a.createElement(o.a,{className:"col-lg-10 col-sm-11",title:"管理班級配課"},y.a.createElement("div",{className:"row align-items-center"},y.a.createElement("div",{className:"col-lg-2 col-12"},"請勾選要指派的班級："),y.a.createElement("div",{className:"col-lg-2 col-12"},y.a.createElement(u.a,{variant:"outlined",size:"small",id:"grade-dropdownList",name:"grade",label:"年級",data:D.grades,handleChange:v,native:!0,needFirstEmptyOption:!0,fullWidth:!0})),y.a.createElement("div",{className:"col-lg-8 col-12"},y.a.createElement(N,{variant:"outlined",size:"small",id:"class-dropdownList",name:"class",label:"班級",data:D.allClass,target:t.class,filter:t.grade,handleChange:f,handleDelete:function(e){return function(){l(L(L({},t),{},{class:t.class.filter((function(a){return a!==e}))}))}},fullwidth:!0}))),y.a.createElement("div",{className:"row align-items-center pt-2"},y.a.createElement("div",{className:"col-lg-2 col-12"},"請勾選要指派的老師："),y.a.createElement("div",{className:"col-lg-2 col-12"},y.a.createElement(u.a,{variant:"outlined",size:"small",id:"dept-dropdownList",name:"department",label:"處室",data:j.depts,handleChange:v,native:!0,needFirstEmptyOption:!0,fullWidth:!0})),y.a.createElement("div",{className:"col-lg-8 col-12"},y.a.createElement(N,{variant:"outlined",size:"small",id:"teacher-dropdownList",name:"teacher",label:"老師",data:j.teachers,target:t.teacher,filter:t.department,handleChange:f,handleDelete:function(e){return function(){l(L(L({},t),{},{teacher:t.teacher.filter((function(a){return a!==e}))}))}},fullwidth:!0}))),y.a.createElement("div",{className:"row align-items-center pt-2"},y.a.createElement("div",{className:"col-lg-2 col-4"},"課程名稱："),y.a.createElement("div",{className:"col-lg-10 col-8 my-1"},y.a.createElement(O.a,{variant:"outlined",size:"small",name:"phone",fullWidth:!0,handleChange:function(e){p(e.target.value)}}))),y.a.createElement("div",{className:"row align-items-center pt-2"},A.classes?A.classes.map((function(e){return""===m||e.name.indexOf(m)>-1||e.code.indexOf(m)>-1?y.a.createElement("div",{key:"classes-key-".concat(e.code),className:"col-lg-3 col-6"},y.a.createElement(c.a,{control:y.a.createElement(s.a,{color:"primary"}),label:e.name})):null})):null),y.a.createElement("div",{className:"row align-items-center justify-center pt-2"},y.a.createElement("div",{className:"col-12 text-center"},y.a.createElement("button",{type:"button",className:"btn badge-pill btn-success allBtn m-2"},"新增指派"),y.a.createElement("button",{type:"button",className:"btn badge-pill btn-primary allBtn m-2"},"取代指派"),y.a.createElement("button",{type:"button",className:"btn badge-pill btn-danger allBtn m-2"},"移除指派"))))))}},254:function(e,a,t){"use strict";var l=t(241),n=t(245),r=t(0),i=t.n(r);a.a=function(e){return i.a.createElement("div",{className:e.className},i.a.createElement(l.a,{variant:"elevation",elevation:0,style:{borderRadius:5}},i.a.createElement("div",{className:"p-2"},i.a.createElement("h2",null,e.title)),i.a.createElement(n.a,null),i.a.createElement("div",{className:"m-3"},e.children)))}},257:function(e,a,t){"use strict";var l=t(353),n=t(384),r=t(431),i=t(0),c=t.n(i);a.a=function(e){return c.a.createElement(l.a,{variant:e.variant,size:e.size,className:e.className,fullWidth:e.fullWidth,disabled:e.disabled},e.label?c.a.createElement(n.a,{id:e.id},e.label):null,c.a.createElement(r.a,{defaultValue:e.value,labelId:e.id,label:e.label,name:e.name,onChange:e.handleChange,native:e.native},e.needFirstEmptyOption?c.a.createElement("option",{value:""}):null,e.data?e.data.map((function(e){return c.a.createElement("option",{key:"dropdownList-key-".concat(e.value),value:e.value},e.label)})):null))}},331:function(e,a,t){"use strict";var l=t(436),n=t(287),r=t(394),i=t(0),c=t.n(i);a.a=function(e){return c.a.createElement(l.a,{variant:e.variant,size:e.size,name:e.name,label:e.label,fullWidth:e.fullWidth,InputProps:{endAdornment:c.a.createElement(n.a,{position:"end"},c.a.createElement(r.a,null,"search"))},onChange:e.handleChange})}}}]);