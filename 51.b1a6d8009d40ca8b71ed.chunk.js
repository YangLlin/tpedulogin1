(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[51],{252:function(e,a,t){"use strict";var n=t(44),l=t.n(n),r=t(16),c=t.n(r),o=t(256),i=t.n(o),s=t(288),d=t(240),m=t(250),u=t(4),v=t(0),f=t.n(v),p=["width","height","border","text","variant","className","size"];a.a=function(e){var a,t=e.width,n=void 0===t?"120px":t,r=e.height,o=void 0===r?"40px":r,v=e.border,b=void 0===v?"normal":v,E=e.text,h=e.variant,g=e.className,N=e.size,O=i()(e,p),x=Object(d.a)((function(e){return Object(m.a)({root:{borderRadius:12,fontFamily:"Noto Sans TC"},outline:{border:"2px solid","&:hover":{border:"2px solid"}},buttonSize:{minWidth:n,minHeight:o},buttonText:{whiteSpace:"nowrap"}})}))();return f.a.createElement(s.a,l()({color:"primary",variant:h,size:N,className:Object(u.a)(g,x.root,(a={},c()(a,x.outline,"outlined"===h&&"normal"===b),c()(a,x.buttonSize,!N),a)),disableElevation:!0},O),f.a.createElement("span",{className:x.buttonText},E))}},253:function(e,a,t){"use strict";var n=t(144),l=t(246),r=t(145),c=t(0),o=t.n(c),i=t(252);a.a=function(e){var a=Object(r.a)(),t=Object(n.a)({palette:{primary:a.palette.primary}});return o.a.createElement(l.a,{theme:t},o.a.createElement(i.a,e))}},255:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(54),l=t.n(n),r=t(428),c=t(0),o=t.n(c);function i(e){var a=o.a.useState(!1),t=l()(a,2),n=t[0],c=t[1];o.a.useEffect((function(){c(e.open)}),[e.open]);return o.a.createElement("div",null,o.a.createElement(r.a,{open:n,onClose:function(){e.handleClose()},fullWidth:e.fullWidth,maxWidth:e.maxWidth},e.children))}},257:function(e,a,t){"use strict";var n=t(353),l=t(384),r=t(431),c=t(0),o=t.n(c);a.a=function(e){return o.a.createElement(n.a,{variant:e.variant,size:e.size,className:e.className,fullWidth:e.fullWidth,disabled:e.disabled},e.label?o.a.createElement(l.a,{id:e.id},e.label):null,o.a.createElement(r.a,{defaultValue:e.value,labelId:e.id,label:e.label,name:e.name,onChange:e.handleChange,native:e.native},e.needFirstEmptyOption?o.a.createElement("option",{value:""}):null,e.data?e.data.map((function(e){return o.a.createElement("option",{key:"dropdownList-key-".concat(e.value),value:e.value},e.label)})):null))}},277:function(e,a,t){"use strict";var n=t(1),l=t(3),r=t(0),c=(t(2),t(4)),o=t(5),i=r.forwardRef((function(e,a){var t=e.classes,o=e.className,i=e.dividers,s=void 0!==i&&i,d=Object(l.a)(e,["classes","className","dividers"]);return r.createElement("div",Object(n.a)({className:Object(c.a)(t.root,o,s&&t.dividers),ref:a},d))}));a.a=Object(o.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(i)},278:function(e,a,t){"use strict";var n=t(1),l=t(0),r=(t(2),t(5)),c=t(77),o=l.forwardRef((function(e,a){return l.createElement(c.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:a},e))}));a.a=Object(r.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(o)},279:function(e,a,t){"use strict";var n=t(1),l=t(3),r=t(0),c=(t(2),t(4)),o=t(5),i=r.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,i=e.classes,s=e.className,d=Object(l.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(n.a)({className:Object(c.a)(i.root,s,!o&&i.spacing),ref:a},d))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(i)},297:function(e,a,t){"use strict";var n=t(1),l=t(3),r=t(0),c=(t(2),t(4)),o=t(272),i=t(5),s=t(77),d=t(13),m=r.forwardRef((function(e,a){e.checked;var t=e.classes,i=e.className,m=e.control,u=e.disabled,v=(e.inputRef,e.label),f=e.labelPlacement,p=void 0===f?"end":f,b=(e.name,e.onChange,e.value,Object(l.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),E=Object(o.a)(),h=u;void 0===h&&void 0!==m.props.disabled&&(h=m.props.disabled),void 0===h&&E&&(h=E.disabled);var g={disabled:h};return["checked","name","onChange","value","inputRef"].forEach((function(a){void 0===m.props[a]&&void 0!==e[a]&&(g[a]=e[a])})),r.createElement("label",Object(n.a)({className:Object(c.a)(t.root,i,"end"!==p&&t["labelPlacement".concat(Object(d.a)(p))],h&&t.disabled),ref:a},b),r.cloneElement(m,g),r.createElement(s.a,{component:"span",className:Object(c.a)(t.label,h&&t.disabled)},v))}));a.a=Object(i.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(m)},310:function(e,a,t){"use strict";t.d(a,"d",(function(){return n})),t.d(a,"c",(function(){return l})),t.d(a,"e",(function(){return r})),t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return o}));var n=[{label:"一年級",value:"1"},{label:"三年級",value:"3"}],l=[{label:"一年一班",value:"101",grade:"1"},{label:"三年一班",value:"301",grade:"3"}],r=[{label:"學校資料",value:"0"},{label:"班級資料",value:"1"},{label:"學生資料",value:"2"}],c=[{type:"學校資料",syncTime:"2021-01-01 00:00:00",successCount:123,errorCount:0},{type:"班級資料",syncTime:"2021-02-01 00:00:00",successCount:321,errorCount:0},{type:"學生資料",syncTime:"2021-03-01 00:00:00",successCount:50,errorCount:2}],o=["第32列:學生在其他學校仍為在籍生,學生身分為 : A131179460","第82列:學生在其他學校仍為在籍生,學生身分為 : F131340866","第164列:學生在其他學校仍為在籍生,學生身分為 : F170005628","第199列:學生在其他學校仍為在籍生,學生身分為 : F131202745"]},339:function(e,a,t){"use strict";var n=t(1),l=t(3),r=t(0),c=(t(2),t(4)),o=t(45),i=t(123),s=t(272),d=t(5),m=t(244),u=r.forwardRef((function(e,a){var t=e.autoFocus,d=e.checked,u=e.checkedIcon,v=e.classes,f=e.className,p=e.defaultChecked,b=e.disabled,E=e.icon,h=e.id,g=e.inputProps,N=e.inputRef,O=e.name,x=e.onBlur,y=e.onChange,j=e.onFocus,w=e.readOnly,C=e.required,k=e.tabIndex,z=e.type,S=e.value,M=Object(l.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),D=Object(i.a)({controlled:d,default:Boolean(p),name:"SwitchBase",state:"checked"}),P=Object(o.a)(D,2),F=P[0],L=P[1],_=Object(s.a)(),B=b;_&&void 0===B&&(B=_.disabled);var I="checkbox"===z||"radio"===z;return r.createElement(m.a,Object(n.a)({component:"span",className:Object(c.a)(v.root,f,F&&v.checked,B&&v.disabled),disabled:B,tabIndex:null,role:void 0,onFocus:function(e){j&&j(e),_&&_.onFocus&&_.onFocus(e)},onBlur:function(e){x&&x(e),_&&_.onBlur&&_.onBlur(e)},ref:a},M),r.createElement("input",Object(n.a)({autoFocus:t,checked:d,defaultChecked:p,className:v.input,disabled:B,id:I&&h,name:O,onChange:function(e){var a=e.target.checked;L(a),y&&y(e,a)},readOnly:w,ref:N,required:C,tabIndex:k,type:z,value:S},g)),F?u:E)})),v=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(u),f=t(62),p=Object(f.a)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),b=Object(f.a)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),E=t(22),h=Object(f.a)(r.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),g=t(13),N=r.createElement(b,null),O=r.createElement(p,null),x=r.createElement(h,null),y=r.forwardRef((function(e,a){var t=e.checkedIcon,o=void 0===t?N:t,i=e.classes,s=e.color,d=void 0===s?"secondary":s,m=e.icon,u=void 0===m?O:m,f=e.indeterminate,p=void 0!==f&&f,b=e.indeterminateIcon,E=void 0===b?x:b,h=e.inputProps,y=e.size,j=void 0===y?"medium":y,w=Object(l.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),C=p?E:u,k=p?E:o;return r.createElement(v,Object(n.a)({type:"checkbox",classes:{root:Object(c.a)(i.root,i["color".concat(Object(g.a)(d))],p&&i.indeterminate),checked:i.checked,disabled:i.disabled},color:d,inputProps:Object(n.a)({"data-indeterminate":p},h),icon:r.cloneElement(C,{fontSize:void 0===C.props.fontSize&&"small"===j?j:C.props.fontSize}),checkedIcon:r.cloneElement(k,{fontSize:void 0===k.props.fontSize&&"small"===j?j:k.props.fontSize}),ref:a},w))}));a.a=Object(d.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(E.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(E.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(y)},353:function(e,a,t){"use strict";var n=t(1),l=t(3),r=t(0),c=(t(2),t(4)),o=t(304),i=t(5),s=t(13),d=t(69),m=t(266),u=r.forwardRef((function(e,a){var t=e.children,i=e.classes,u=e.className,v=e.color,f=void 0===v?"primary":v,p=e.component,b=void 0===p?"div":p,E=e.disabled,h=void 0!==E&&E,g=e.error,N=void 0!==g&&g,O=e.fullWidth,x=void 0!==O&&O,y=e.focused,j=e.hiddenLabel,w=void 0!==j&&j,C=e.margin,k=void 0===C?"none":C,z=e.required,S=void 0!==z&&z,M=e.size,D=e.variant,P=void 0===D?"standard":D,F=Object(l.a)(e,["children","classes","className","color","component","disabled","error","fullWidth","focused","hiddenLabel","margin","required","size","variant"]),L=r.useState((function(){var e=!1;return t&&r.Children.forEach(t,(function(a){if(Object(d.a)(a,["Input","Select"])){var t=Object(d.a)(a,["Select"])?a.props.input:a;t&&Object(o.a)(t.props)&&(e=!0)}})),e})),_=L[0],B=L[1],I=r.useState((function(){var e=!1;return t&&r.Children.forEach(t,(function(a){Object(d.a)(a,["Input","Select"])&&Object(o.b)(a.props,!0)&&(e=!0)})),e})),R=I[0],A=I[1],W=r.useState(!1),q=W[0],$=W[1],H=void 0!==y?y:q;h&&H&&$(!1);var T=r.useCallback((function(){A(!0)}),[]),V={adornedStart:_,setAdornedStart:B,color:f,disabled:h,error:N,filled:R,focused:H,fullWidth:x,hiddenLabel:w,margin:("small"===M?"dense":void 0)||k,onBlur:function(){$(!1)},onEmpty:r.useCallback((function(){A(!1)}),[]),onFilled:T,onFocus:function(){$(!0)},registerEffect:void 0,required:S,variant:P};return r.createElement(m.a.Provider,{value:V},r.createElement(b,Object(n.a)({className:Object(c.a)(i.root,u,"none"!==k&&i["margin".concat(Object(s.a)(k))],x&&i.fullWidth),ref:a},F),t))}));a.a=Object(i.a)({root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}},{name:"MuiFormControl"})(u)},378:function(e,a,t){"use strict";var n=t(119),l=t(120);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(0)),c=(0,n(t(121)).default)(r.createElement("path",{d:"M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"}),"AccountBalance");a.default=c},379:function(e,a,t){"use strict";var n=t(119),l=t(120);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(0)),c=(0,n(t(121)).default)(r.createElement("path",{d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"}),"HelpOutline");a.default=c},380:function(e,a,t){"use strict";var n=t(119),l=t(120);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(0)),c=(0,n(t(121)).default)(r.createElement("path",{d:"M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"}),"MeetingRoom");a.default=c},381:function(e,a,t){"use strict";var n=t(119),l=t(120);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(0)),c=(0,n(t(121)).default)(r.createElement("path",{d:"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"}),"Class");a.default=c},382:function(e,a,t){"use strict";var n=t(119),l=t(120);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(0)),c=(0,n(t(121)).default)(r.createElement(r.Fragment,null,r.createElement("circle",{cx:"9",cy:"9",r:"4"}),r.createElement("path",{d:"M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"})),"RecordVoiceOver");a.default=c},383:function(e,a,t){"use strict";var n=t(119),l=t(120);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=l(t(0)),c=(0,n(t(121)).default)(r.createElement("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}),"Face");a.default=c},384:function(e,a,t){"use strict";var n=t(1),l=t(3),r=t(0),c=(t(2),t(4)),o=t(282),i=t(272),s=t(5),d=t(13),m=r.forwardRef((function(e,a){var t=e.children,s=e.classes,m=e.className,u=(e.color,e.component),v=void 0===u?"label":u,f=(e.disabled,e.error,e.filled,e.focused,e.required,Object(l.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),p=Object(i.a)(),b=Object(o.a)({props:e,muiFormControl:p,states:["color","required","focused","disabled","error","filled"]});return r.createElement(v,Object(n.a)({className:Object(c.a)(s.root,s["color".concat(Object(d.a)(b.color||"primary"))],m,b.disabled&&s.disabled,b.error&&s.error,b.filled&&s.filled,b.focused&&s.focused,b.required&&s.required),ref:a},f),t,b.required&&r.createElement("span",{"aria-hidden":!0,className:Object(c.a)(s.asterisk,b.error&&s.error)}," ","*"))})),u=Object(s.a)((function(e){return{root:Object(n.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(m),v=r.forwardRef((function(e,a){var t=e.classes,s=e.className,d=e.disableAnimation,m=void 0!==d&&d,v=(e.margin,e.shrink),f=(e.variant,Object(l.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),p=Object(i.a)(),b=v;void 0===b&&p&&(b=p.filled||p.focused||p.adornedStart);var E=Object(o.a)({props:e,muiFormControl:p,states:["margin","variant"]});return r.createElement(u,Object(n.a)({"data-shrink":b,className:Object(c.a)(t.root,s,p&&t.formControl,!m&&t.animated,b&&t.shrink,"dense"===E.margin&&t.marginDense,{filled:t.filled,outlined:t.outlined}[E.variant]),classes:{focused:t.focused,disabled:t.disabled,error:t.error,required:t.required,asterisk:t.asterisk},ref:a},f))}));a.a=Object(s.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(v)},92:function(e,a,t){"use strict";t.r(a);var n=t(16),l=t.n(n),r=t(54),c=t.n(r),o=t(241),i=t(297),s=t(339),d=t(240),m=t(250),u=t(378),v=t.n(u),f=t(381),p=t.n(f),b=t(383),E=t.n(b),h=t(379),g=t.n(h),N=t(380),O=t.n(N),x=t(382),y=t.n(x),j=t(253),w=t(257),C=t(429),k=t(277),z=t(278),S=t(279),M=t(0),D=t.n(M),P=t(255);function F(e){return D.a.createElement("div",null,D.a.createElement(P.a,{open:e.open,handleClose:e.handleClose},D.a.createElement(C.a,{id:"form-dialog-title"},e.content.title),D.a.createElement(k.a,null,D.a.createElement(z.a,{component:"span"},D.a.createElement("div",{className:"row"},D.a.createElement("div",{className:"col-12 my-1"},e.content.content)))),D.a.createElement(S.a,{style:{justifyContent:"center"}},D.a.createElement(j.a,{text:"確認",variant:"contained",onClick:e.handleClose}))))}var L=t(310);function _(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?_(Object(t),!0).forEach((function(a){l()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}a.default=function(){var e=D.a.useState({syncAllStudent:!1,grade:"",class:""}),a=c()(e,2),t=a[0],n=a[1],r=D.a.useState([]),u=c()(r,2),f=u[0],b=u[1],h=D.a.useState([]),N=c()(h,2),x=(N[0],N[1]),C=D.a.useState([]),k=c()(C,2),z=k[0],S=k[1],M=D.a.useState(!1),P=c()(M,2),_=P[0],I=P[1],R=D.a.useState({title:"說明",content:""}),A=c()(R,2),W=A[0],q=A[1],$=["將從校務行政系統將行政部門資料同步到openldap，同步過程中會自動移除已經不存在的單位，並更新單位名稱，同時也會視狀況為您新增行政部門。同步過程需要時間，直到結果出現為止，請勿關閉瀏覽器或離開此網頁，以避免同步程序被關閉。","將從校務行政系統將班級資料同步到openldap，同步過程中會自動移除已經不存在的班級，並更新班級名稱，同時也會視狀況為您新增班級。同步過程需要時間，直到結果出現為止，請勿關閉瀏覽器或離開此網頁，以避免同步程序被關閉。","將從校務行政系統將教學科目資料同步到openldap，同步過程中會自動移除已經不使用的科目，同時也會視狀況為您新增科目，但科目所屬領域無法從校務行政系統同步，事後您仍然必須透過網頁自行輸入，很抱歉！同步過程需要時間，直到結果出現為止，請勿關閉瀏覽器或離開此網頁，以避免同步程序被關閉。","將從校務行政系統將教師資料同步到openldap，同步過程中會自動修正教師個人資料、設定單位職稱、級任、配課資訊，並將離職教師標註為刪除，但無法處理帳號密碼同步。同步過程需要時間，直到結果出現為止，請勿關閉瀏覽器或離開此網頁，以避免同步程序被關閉。","將從校務行政系統將學生資料同步到openldap，同步過程中會自動將畢業或轉學學生標註為刪除，必要時會自動新增學生（新生入學）。此同步會自動更新學生個人資料，包含：姓名、性別、生日、學號、地址、電話、電子郵件、手機號碼和就讀年班、座號。如果學號相同，則保留原有帳號密碼。若學號不相同，則會將舊帳號刪除，重新建立預設帳號與密碼！每次僅同步一個班級，若顯示結果後管理員未回應網頁訊息，60秒後自動同步下一個班級。同步過程需要時間，直到全部同步完畢為止，請勿關閉瀏覽器或離開此網頁，以避免同步程序被關閉。"];D.a.useEffect((function(){b(L.d),x(L.c)}),[]),D.a.useEffect((function(){var e=L.c.filter((function(e){return e.grade===t.grade}));e.splice(0,0,{label:"全部",value:"all",grade:null}),S(e)}),[t.grade]);var H=function(e){q(B(B({},W),{},{content:$[e]})),I(!0)},T=function(e){var a=e.target.name,r=e.target.value;n(B(B({},t),{},l()({},a,r)))},V=Object(d.a)((function(e){return Object(m.a)({title:{fontSize:"1.5rem",fontWeight:"bold",paddingRight:"5px"},description:{fontSize:"0.9rem"}})}))();return D.a.createElement(D.a.Fragment,null,D.a.createElement(o.a,{variant:"outlined",className:"p-3 my-3"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-lg-2 col-12 text-center"},D.a.createElement(v.a,{style:{fontSize:100}})),D.a.createElement("div",{className:"col-lg-7 col-12 my-3"},D.a.createElement("div",null,D.a.createElement("span",{className:V.title},"1. 同步部門及職稱"),D.a.createElement("span",{className:V.description},D.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),H(0)}},D.a.createElement("u",{className:"text-nowrap"},"說明",D.a.createElement(g.a,{className:V.description}))))),D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-12"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-lg-6 col-12"},D.a.createElement("span",{className:"font-weight-bold"},"上次同步時間:",D.a.createElement("br",null),"2021/09/28 00:00")),D.a.createElement("div",{className:"col-lg-6 col-12"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-6 text-green font-weight-bold"},"成功: 100"),D.a.createElement("div",{className:"col-6 text-orange font-weight-bold"},"刪除: 10"),D.a.createElement("div",{className:"col-6 text-red font-weight-bold"},"失敗: 0"))))))),D.a.createElement("div",{className:"col-lg-3 col-12 text-center"},D.a.createElement(j.a,{text:"開始同步",variant:"contained"})))),D.a.createElement(o.a,{variant:"outlined",className:"p-3 my-3"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-lg-2 col-12 text-center"},D.a.createElement(O.a,{style:{fontSize:100}})),D.a.createElement("div",{className:"col-lg-7 col-12 my-3"},D.a.createElement("div",null,D.a.createElement("span",{className:V.title},"2. 同步班級資訊"),D.a.createElement("span",{className:V.description},D.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),H(1)}},D.a.createElement("u",{className:"text-nowrap"},"說明",D.a.createElement(g.a,{className:V.description}))))),D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-12"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-lg-6 col-12"},D.a.createElement("span",{className:"font-weight-bold"},"上次同步時間:",D.a.createElement("br",null),"2021/09/28 00:00")),D.a.createElement("div",{className:"col-lg-6 col-12"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-6 text-green font-weight-bold"},"成功: 100"),D.a.createElement("div",{className:"col-6 text-orange font-weight-bold"},"刪除: 10"),D.a.createElement("div",{className:"col-6 text-red font-weight-bold"},"失敗: 0"))))))),D.a.createElement("div",{className:"col-lg-3 col-12 text-center"},D.a.createElement(j.a,{text:"開始同步",variant:"contained"})))),D.a.createElement(o.a,{variant:"outlined",className:"p-3 my-3"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-lg-2 col-12 text-center"},D.a.createElement(p.a,{style:{fontSize:100}})),D.a.createElement("div",{className:"col-lg-7 col-12 my-3"},D.a.createElement("div",null,D.a.createElement("span",{className:V.title},"3. 同步教學科目"),D.a.createElement("span",{className:V.description},D.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),H(2)}},D.a.createElement("u",{className:"text-nowrap"},"說明",D.a.createElement(g.a,{className:V.description}))))),D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-12"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-lg-6 col-12"},D.a.createElement("span",{className:"font-weight-bold"},"上次同步時間:",D.a.createElement("br",null),"2021/09/28 00:00")),D.a.createElement("div",{className:"col-lg-6 col-12"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-6 text-green font-weight-bold"},"成功: 100"),D.a.createElement("div",{className:"col-6 text-orange font-weight-bold"},"刪除: 10"),D.a.createElement("div",{className:"col-6 text-red font-weight-bold"},"失敗: 0"))))))),D.a.createElement("div",{className:"col-lg-3 col-12 text-center"},D.a.createElement(j.a,{text:"開始同步",variant:"contained"})))),D.a.createElement(o.a,{variant:"outlined",className:"p-3 my-3"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-lg-2 col-12 text-center"},D.a.createElement(y.a,{style:{fontSize:100}})),D.a.createElement("div",{className:"col-lg-7 col-12 my-3"},D.a.createElement("div",null,D.a.createElement("span",{className:V.title},"4. 同步教師"),D.a.createElement("span",{className:V.description},D.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),H(3)}},D.a.createElement("u",{className:"text-nowrap"},"說明",D.a.createElement(g.a,{className:V.description}))))),D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-12"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-lg-6 col-12"},D.a.createElement("span",{className:"font-weight-bold"},"上次同步時間:",D.a.createElement("br",null),"2021/09/28 00:00")),D.a.createElement("div",{className:"col-lg-6 col-12"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-6 text-green font-weight-bold"},"成功: 100"),D.a.createElement("div",{className:"col-6 text-orange font-weight-bold"},"刪除: 10"),D.a.createElement("div",{className:"col-6 text-red font-weight-bold"},"失敗: 0"))))))),D.a.createElement("div",{className:"col-lg-3 col-12 text-center"},D.a.createElement(j.a,{text:"開始同步",variant:"contained"})))),D.a.createElement(o.a,{variant:"outlined",className:"p-3 my-3"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-lg-2 col-12 text-center"},D.a.createElement(E.a,{style:{fontSize:100}})),D.a.createElement("div",{className:"col-lg-7 col-12 my-3"},D.a.createElement("div",null,D.a.createElement("span",{className:V.title},"5. 同步學生"),D.a.createElement("span",{className:V.description},D.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),H(4)}},D.a.createElement("u",{className:"text-nowrap"},"說明",D.a.createElement(g.a,{className:V.description}))))),D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-12"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-lg-6 col-12"},D.a.createElement("span",{className:"font-weight-bold"},"上次同步時間:",D.a.createElement("br",null),"2021/09/28 00:00")),D.a.createElement("div",{className:"col-lg-6 col-12"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-6 text-green font-weight-bold"},"成功: 100"),D.a.createElement("div",{className:"col-6 text-orange font-weight-bold"},"刪除: 10"),D.a.createElement("div",{className:"col-6 text-red font-weight-bold"},"失敗: 0"))))))),D.a.createElement("div",{className:"col-lg-3 col-12"},D.a.createElement("div",{className:"row align-items-center"},D.a.createElement("div",{className:"col-12 my-1"},D.a.createElement(i.a,{className:"m-0",control:D.a.createElement(s.a,{color:"primary",name:"syncAllStudent",checked:t.syncAllStudent,onChange:function(e){var a=e.target.name;n(B(B({},t),{},l()({},a,!t[a])))}}),label:"同步全校資料"})),D.a.createElement("div",{className:"col-12 my-1"},D.a.createElement(w.a,{variant:"outlined",size:"small",id:"grade-dropdownList",name:"grade",label:"年級",data:f,disabled:t.syncAllStudent,handleChange:T,native:!0,needFirstEmptyOption:!0,fullWidth:!0})),D.a.createElement("div",{className:"col-12 my-1"},D.a.createElement(w.a,{variant:"outlined",size:"small",id:"class-dropdownList",name:"class",label:"班級",data:z,disabled:t.syncAllStudent||""===t.grade,handleChange:T,native:!0,needFirstEmptyOption:!0,fullWidth:!0})),D.a.createElement("div",{className:"col-12 my-1 text-center"},D.a.createElement(j.a,{text:"開始同步",variant:"contained"})))))),D.a.createElement(F,{open:_,content:W,handleClose:function(){I(!1)}}))}}}]);