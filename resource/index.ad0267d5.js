import{g as ue}from"./request.69e0b058.js";import{e as R,i as fe,h as f,t as be,f as P,j as F,k as L,l as ve,m as ge,w as pe,o as me,a as he,b as d,p as E,q as xe,u as g,s as C}from"./entry.9e2b607f.js";import{t as Ce,c as Se,a as z,b,d as s,e as ye,u as _e,N as we,f as ze,g as ke,h as p,i as $e,j as Re,k as Me,l as j,m as Te,n as M,o as Be,p as Pe,r as w,q as Le}from"./light.0a8e13bc.js";function Ee(e,n,r){var o=-1,a=e.length;n<0&&(n=-n>a?0:a+n),r=r>a?a:r,r<0&&(r+=a),a=n>r?0:r-n>>>0,n>>>=0;for(var t=Array(a);++o<a;)t[o]=e[o+n];return t}function Fe(e,n,r){var o=e.length;return r=r===void 0?o:r,!n&&r>=o?e:Ee(e,n,r)}var je="\\ud800-\\udfff",He="\\u0300-\\u036f",Ie="\\ufe20-\\ufe2f",De="\\u20d0-\\u20ff",Oe=He+Ie+De,Ae="\\ufe0e\\ufe0f",Ne="\\u200d",Ve=RegExp("["+Ne+je+Oe+Ae+"]");function H(e){return Ve.test(e)}function We(e){return e.split("")}var I="\\ud800-\\udfff",Ue="\\u0300-\\u036f",qe="\\ufe20-\\ufe2f",Ye="\\u20d0-\\u20ff",Ze=Ue+qe+Ye,Je="\\ufe0e\\ufe0f",Ke="["+I+"]",T="["+Ze+"]",B="\\ud83c[\\udffb-\\udfff]",Xe="(?:"+T+"|"+B+")",D="[^"+I+"]",O="(?:\\ud83c[\\udde6-\\uddff]){2}",A="[\\ud800-\\udbff][\\udc00-\\udfff]",Ge="\\u200d",N=Xe+"?",V="["+Je+"]?",Qe="(?:"+Ge+"(?:"+[D,O,A].join("|")+")"+V+N+")*",eo=V+N+Qe,oo="(?:"+[D+T+"?",T,O,A,Ke].join("|")+")",ro=RegExp(B+"(?="+B+")|"+oo+eo,"g");function no(e){return e.match(ro)||[]}function to(e){return H(e)?no(e):We(e)}function ao(e){return function(n){n=Ce(n);var r=H(n)?to(n):void 0,o=r?r[0]:n.charAt(0),a=r?Fe(r,1).join(""):n.slice(1);return o[e]()+a}}var lo=ao("toUpperCase");const so=lo;function io(e,n){return R({name:so(e),setup(){var r;const o=(r=fe(Se,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var a;const t=(a=o==null?void 0:o.value)===null||a===void 0?void 0:a[e];return t?t():n}}})}const co=io("close",f("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},f("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},f("g",{fill:"currentColor","fill-rule":"nonzero"},f("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),uo=z("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[b("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),s("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),ye("disabled",[s("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),s("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),s("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),s("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),s("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),b("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),b("round",[s("&::before",`
 border-radius: 50%;
 `)])]),fo=R({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return _e("-base-close",uo,be(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:r,absolute:o,round:a,isButtonTag:t}=e;return f(t?"button":"div",{type:t?"button":void 0,tabindex:r||!e.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:t?void 0:"button",disabled:r,class:[`${n}-base-close`,o&&`${n}-base-close--absolute`,r&&`${n}-base-close--disabled`,a&&`${n}-base-close--round`],onMousedown:i=>{e.focusable||i.preventDefault()},onClick:e.onClick},f(we,{clsPrefix:n},{default:()=>f(co,null)}))}}}),bo={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},vo=e=>{const{primaryColor:n,borderRadius:r,lineHeight:o,fontSize:a,cardColor:t,textColor2:S,textColor1:i,dividerColor:c,fontWeightStrong:l,closeIconColor:h,closeIconColorHover:k,closeIconColorPressed:$,closeColorHover:u,closeColorPressed:y,modalColor:v,boxShadow1:m,popoverColor:_,actionColor:x}=e;return Object.assign(Object.assign({},bo),{lineHeight:o,color:t,colorModal:v,colorPopover:_,colorTarget:n,colorEmbedded:x,colorEmbeddedModal:x,colorEmbeddedPopover:x,textColor:S,titleTextColor:i,borderColor:c,actionColor:x,titleFontWeight:l,closeColorHover:u,closeColorPressed:y,closeBorderRadius:r,closeIconColor:h,closeIconColorHover:k,closeIconColorPressed:$,fontSizeSmall:a,fontSizeMedium:a,fontSizeLarge:a,fontSizeHuge:a,boxShadow:m,borderRadius:r})},go={name:"Card",common:ze,self:vo},po=go,mo=s([z("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ke({background:"var(--n-color-modal)"}),b("hoverable",[s("&:hover","box-shadow: var(--n-box-shadow);")]),b("content-segmented",[s(">",[p("content",{paddingTop:"var(--n-padding-bottom)"})])]),b("content-soft-segmented",[s(">",[p("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),b("footer-segmented",[s(">",[p("footer",{paddingTop:"var(--n-padding-bottom)"})])]),b("footer-soft-segmented",[s(">",[p("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),s(">",[z("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[p("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),p("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),p("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),p("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),p("content","flex: 1; min-width: 0;"),p("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[s("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),p("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),z("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[s("img",`
 display: block;
 width: 100%;
 `)]),b("bordered",`
 border: 1px solid var(--n-border-color);
 `,[s("&:target","border-color: var(--n-color-target);")]),b("action-segmented",[s(">",[p("action",[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("content-segmented, content-soft-segmented",[s(">",[p("content",{transition:"border-color 0.3s var(--n-bezier)"},[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("footer-segmented, footer-soft-segmented",[s(">",[p("footer",{transition:"border-color 0.3s var(--n-bezier)"},[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("embedded",`
 background-color: var(--n-color-embedded);
 `)]),$e(z("card",`
 background: var(--n-color-modal);
 `,[b("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Re(z("card",`
 background: var(--n-color-popover);
 `,[b("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),ho={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},xo=Object.assign(Object.assign({},j.props),ho),Co=R({name:"Card",props:xo,setup(e){const n=()=>{const{onClose:l}=e;l&&Le(l)},{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:a}=Me(e),t=j("Card","-card",mo,po,e,o),S=Te("Card",a,o),i=P(()=>{const{size:l}=e,{self:{color:h,colorModal:k,colorTarget:$,textColor:u,titleTextColor:y,titleFontWeight:v,borderColor:m,actionColor:_,borderRadius:x,lineHeight:W,closeIconColor:U,closeIconColorHover:q,closeIconColorPressed:Y,closeColorHover:Z,closeColorPressed:J,closeBorderRadius:K,closeIconSize:X,closeSize:G,boxShadow:Q,colorPopover:ee,colorEmbedded:oe,colorEmbeddedModal:re,colorEmbeddedPopover:ne,[M("padding",l)]:te,[M("fontSize",l)]:ae,[M("titleFontSize",l)]:le},common:{cubicBezierEaseInOut:se}}=t.value,{top:ie,left:de,bottom:ce}=Be(te);return{"--n-bezier":se,"--n-border-radius":x,"--n-color":h,"--n-color-modal":k,"--n-color-popover":ee,"--n-color-embedded":oe,"--n-color-embedded-modal":re,"--n-color-embedded-popover":ne,"--n-color-target":$,"--n-text-color":u,"--n-line-height":W,"--n-action-color":_,"--n-title-text-color":y,"--n-title-font-weight":v,"--n-close-icon-color":U,"--n-close-icon-color-hover":q,"--n-close-icon-color-pressed":Y,"--n-close-color-hover":Z,"--n-close-color-pressed":J,"--n-border-color":m,"--n-box-shadow":Q,"--n-padding-top":ie,"--n-padding-bottom":ce,"--n-padding-left":de,"--n-font-size":ae,"--n-title-font-size":le,"--n-close-size":G,"--n-close-icon-size":X,"--n-close-border-radius":K}}),c=r?Pe("card",P(()=>e.size[0]),i,e):void 0;return{rtlEnabled:S,mergedClsPrefix:o,mergedTheme:t,handleCloseClick:n,cssVars:r?void 0:i,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{segmented:e,bordered:n,hoverable:r,mergedClsPrefix:o,rtlEnabled:a,onRender:t,embedded:S,tag:i,$slots:c}=this;return t==null||t(),f(i,{class:[`${o}-card`,this.themeClass,S&&`${o}-card--embedded`,{[`${o}-card--rtl`]:a,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:n,[`${o}-card--hoverable`]:r}],style:this.cssVars,role:this.role},w(c.cover,l=>l&&f("div",{class:`${o}-card-cover`,role:"none"},l)),w(c.header,l=>l||this.title||this.closable?f("div",{class:`${o}-card-header`,style:this.headerStyle},f("div",{class:`${o}-card-header__main`,role:"heading"},l||this.title),w(c["header-extra"],h=>h&&f("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},h)),this.closable?f(fo,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),w(c.default,l=>l&&f("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},l)),w(c.footer,l=>l&&[f("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},l)]),w(c.action,l=>l&&f("div",{class:`${o}-card__action`,role:"none"},l)))}}),So={duration:{type:Number,default:0},active:{type:Boolean,default:!0},precision:{type:Number,default:0},render:Function,onFinish:Function},yo=R({name:"Countdown",props:So,setup(e){let n=null,r=0,o=!1;const a=F(0);L(()=>{a.value=e.duration});let t=-1;function S(u){return e.duration-r+t-u}function i(u){const y=Math.floor(u/36e5),v=Math.floor(u%36e5/6e4),m=Math.floor(u%6e4/1e3),_=Math.floor(u%1e3);return{hours:y,minutes:v,seconds:m,milliseconds:_}}function c(u){const{hours:y,minutes:v,seconds:m,milliseconds:_}=u,{precision:x}=e;switch(x){case 0:return`${String(y).padStart(2,"0")}:${String(v).padStart(2,"0")}:${String(m).padStart(2,"0")}`;default:return`${String(y).padStart(2,"0")}:${String(v).padStart(2,"0")}:${String(m).padStart(2,"0")}.${String(Math.floor(_/(x===1?100:x===2?10:1))).padStart(x,"0")}`}}const l=()=>{var u;const{precision:y}=e,v=S(performance.now());if(v<=0){a.value=0,h(),o||(o=!0,(u=e.onFinish)===null||u===void 0||u.call(e));return}let m;switch(y){case 3:case 2:m=v%34;break;case 1:m=v%100;break;default:m=v%1e3}a.value=v,n=window.setTimeout(()=>{l()},m)},h=()=>{n!==null&&(window.clearTimeout(n),n=null)};ve(()=>{L(()=>{if(e.active)t=performance.now(),l();else{const u=performance.now();t!==-1&&(r+=u-t),h()}})}),ge(()=>{h()});function k(){a.value=e.duration,r=0,t=performance.now(),e.active&&o&&l(),o=!1}return Object.assign({reset:k},{distance:a,getTimeInfo:i,getDisplayValue:c})},render(){const{render:e,precision:n,distance:r,getTimeInfo:o,getDisplayValue:a}=this;let t;switch(n){case 0:t=o(r+999),t.milliseconds=0;break;case 1:t=o(r+99),t.milliseconds=Math.floor(t.milliseconds/100)*100;break;case 2:t=o(r+9),t.milliseconds=Math.floor(t.milliseconds/10)*10;break;case 3:t=o(r)}return e?e(t):a(t)}});const _o={class:"app-index"},wo={class:"calendar"},zo={class:"calendar-content"},ko=d("div",null,"日期",-1),$o=d("div",null,"天次",-1),Ro=d("div",null,"类型",-1),Mo=d("div",null,"农历",-1),To=d("div",null,"节气",-1),Bo=d("div",null,"星座",-1),Po=d("div",null,"宜项",-1),Lo=d("div",null,"禁忌",-1),Eo=d("div",null,"倒计时",-1),Fo=d("h2",{style:{display:"inline-block","padding-left":"30px"}},"Hello",-1),Do={__name:"index",async setup(e){let n,r;const o=new Date,a=o.getFullYear(),t=o.getMonth()+1,S=o.getDate(),{data:i}=([n,r]=pe(()=>ue({url:`/holiday/single/${a}${t<10?"0"+t:t}${S}`,params:{ignoreHoliday:!1}})),n=await n,r(),n);new Date().setHours(0,0,0,0),new Date().setHours(24,0,0,0);const c=F(new Date().setHours(24,0,0,0)-Date.now());return(l,h)=>(me(),he("div",_o,[d("div",wo,[E(g(Co),{title:"今日日历"},{default:xe(()=>[d("div",zo,[ko,d("div",null,C(g(i).date)+" 星期"+C(["八","一","二","三","四","五","六","日"][g(i).weekDay]),1),$o,d("div",null,"今年的第"+C(g(i).dayOfYear)+"天",1),Ro,d("div",null,C(g(i).typeDes),1),Mo,d("div",null,C(g(i).yearTips)+" "+C(g(i).lunarCalendar)+" "+C(g(i).chineseZodiac)+"年",1),To,d("div",null,C(g(i).solarTerms),1),Bo,d("div",null,C(g(i).constellation),1),Po,d("div",null,C(g(i).avoid),1),Lo,d("div",null,C(g(i).suit),1),Eo,d("div",null,[E(g(yo),{duration:g(c)},null,8,["duration"])])])]),_:1})]),Fo]))}};export{Do as default};
