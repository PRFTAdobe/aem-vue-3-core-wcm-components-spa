(function(p,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("aem-vue-3-editable-components"),require("vue"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","aem-vue-3-editable-components","vue","@adobe/aem-spa-page-model-manager"],c):(p=typeof globalThis<"u"?globalThis:p||self,c(p.aemVueCoreWcmComponentsSpa={},p.AemVueEditableComponents,p.Vue,p.AemSpaPageModelManager))})(this,function(p,c,e,N){"use strict";const U={emptyLabel:"Accordion",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},V={emptyLabel:"Carousel",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},G={emptyLabel:"Container",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},H={emptyLabel:"Content Fragment",isEmpty(s){return s.elementsOrder.length===0&&s.cqItemsOrder.length===0}},W={emptyLabel:"Experience Fragment",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},X={emptyLabel:"Tabs",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},J="ContentFragment-",M=s=>J+s,z=(s,t)=>{s&&t&&(typeof s=="string"?[s]:s).forEach(b=>{c.MapTo(M(b))(t)})},x=s=>{const t=M(s);return c.ComponentMapping.get(t)},Q=s=>t=>z(s,t),R=e.defineComponent({inheritAttrs:!1,__name:"CoreContainer",props:{accessibilityLabel:{type:String},backgroundStyle:{type:String},cqPath:{type:String,default:""},isInEditor:{type:Boolean,default:void 0},layout:{type:String,default:"RESPONSIVE_GRID",validator:s=>["RESPONSIVE_GRID","SIMPLE"].includes(s)},roleAttribute:{type:String},styleSystemElement:{type:String,default:"div"},...c.componentProperties("cmp-container")},setup(s){const t=s,r=e.useAttrs(),b=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",N.AuthoringUtils.isInEditor()),u=e.computed(()=>c.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,b,t.aemNoDecoration)),m=e.computed(()=>{var _;return b&&(r==null?void 0:r.allowedComponents)&&((_=r==null?void 0:r.allowedComponents)==null?void 0:_.applicable)});return(_,h)=>m.value?(e.openBlock(),e.createBlock(e.unref(c.AllowedComponentsContainer),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(r)})),null,16)):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.styleSystemElement||"div"),{key:1,id:t.id,"aria-label":t.accessibilityLabel,class:e.normalizeClass(u.value),role:t.roleAttribute,style:e.normalizeStyle(t.backgroundStyle)},{default:e.withCtx(()=>[s.layout==="RESPONSIVE_GRID"?(e.openBlock(),e.createBlock(e.unref(c.ResponsiveGrid),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(r),allowedComponents:{applicable:!1,components:[]},title:""})),null,16)):(e.openBlock(),e.createBlock(e.unref(c.Container),e.normalizeProps(e.mergeProps({key:1},{...t,...e.unref(r)})),null,16))]),_:1},8,["id","aria-label","class","role","style"]))}}),Y=["id"],Z=["innerHTML"],F=e.defineComponent({inheritAttrs:!1,__name:"DefaultContentFragment",props:{cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},description:{type:String},elements:{type:Object,default:()=>({})},elementsOrder:{type:Array,default:()=>[]},isInEditor:{type:Boolean,default:void 0},model:{type:String},title:{type:String},...c.componentProperties("cmp-contentfragment")},setup(s){const t=s,r=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",N.AuthoringUtils.isInEditor()),b=e.inject("componentMapping",new c.ComponentMapping),u=e.computed(()=>c.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,r,t.aemNoDecoration)),m=e.computed(()=>c.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,b));return(_,h)=>{var k;return e.openBlock(),e.createElementBlock("div",{id:t.id,class:e.normalizeClass(u.value)},[e.createElementVNode("h3",{class:e.normalizeClass(`${t.baseCssClass}__title`)},e.toDisplayString(t.title),3),t.description?(e.openBlock(),e.createElementBlock("p",{key:0,class:e.normalizeClass(`${t.baseCssClass}__description`)},e.toDisplayString(t.description),3)):e.createCommentVNode("",!0),(k=t.elementsOrder)!=null&&k.length?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(`${t.baseCssClass}__elements`)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.elementsOrder,(f,O)=>(e.openBlock(),e.createElementBlock("div",{key:`${t.id}-element-${f}-${O}`,class:e.normalizeClass(`${t.baseCssClass}__element`)},[e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--key`])},[e.createElementVNode("h4",null,e.toDisplayString(f),1)],2),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--value`]),innerHTML:`value: ${t.elements[f].value}`},null,10,Z),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--datatype`])}," datatype: "+e.toDisplayString(t.elements[f].dataType),3),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--multivalue`])}," multivalue: "+e.toDisplayString(t.elements[f].multiValue?"true":"false"),3),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--type`])}," type: "+e.toDisplayString(t.elements[f][":type"]),3)],2))),128))],2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m.value,f=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(f),{key:f.toString()}))),128))],10,Y)}}}),v=e.defineComponent({inheritAttrs:!1,__name:"CoreContentFragment",props:{cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},description:{type:String},elements:{type:Object,default:()=>({})},elementsOrder:{type:Array,default:()=>[]},isInEditor:{type:Boolean,default:void 0},model:{type:String},title:{type:String},...c.componentProperties("cmp-contentfragment")},setup(s){const t=s,r=e.useAttrs(),b=e.computed(()=>t.elementsOrder.length===0&&t.cqItemsOrder.length===0),u=e.computed(()=>{const m=x(t.model);return m||F});return(m,_)=>b.value?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(u.value),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(r)})),null,16))}}),$={createCallbackListener(s,t){return(r,b=s)=>{r.data&&r.data.id===b&&r.data.operation==="navigate"&&(t.value=r.data.index)}},initMessageChannel(){return this.isBrowser()&&window.Granite&&window.Granite.author&&window.Granite.author.MessageChannel?new window.Granite.author.MessageChannel("cqauthor",window):null},isBrowser(){try{return typeof window<"u"}catch{return!1}},subscribeRequestMessage(s,t){s&&s.subscribeRequestMessage("cmp.panelcontainer",t)},unsubscribeRequestMessage(s,t){s&&s.unsubscribeRequestMessage("cmp.panelcontainer",t)}},ee=["id","data-cmp-single-expansion"],te=["id","data-cmp-expanded"],se=["id","aria-controls","data-cmp-button-id","onClick","onKeydown"],ae=[e.createElementVNode("svg",{fill:"var(--accordion-heading-color)",height:"18",viewBox:"0 0 24 24",width:"18",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})],-1)],ne=["id","aria-labelledby"],oe=e.defineComponent({inheritAttrs:!1,__name:"CoreAccordion",props:{cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},expandedItems:{type:Array,default:()=>[]},headingElement:{type:String,default:"h3"},...c.componentProperties("cmp-accordion")},setup(s){const t=s,r=e.useAttrs(),b=e.inject("isInEditor",N.AuthoringUtils.isInEditor()),u=e.inject("componentMapping",new c.ComponentMapping),m=e.ref($.initMessageChannel()),_=e.ref(-1),h=e.ref(t.expandedItems),k=e.ref(null),f=e.computed(()=>(r==null?void 0:r.singleExpansion)===!0),O=e.computed(()=>{const a={};return b&&(a["data-panelcontainer"]="accordion",a["data-cq-data-path"]=t.cqPath||"",a["data-placeholder-text"]="Please drag Accordion item components here"),a}),L=e.computed(()=>c.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,u)),A=e.computed(()=>c.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,b,t.aemNoDecoration)),g=a=>{const o=k.value.querySelector(`button[data-cmp-button-id="${a}"]`);o&&o.focus()},E=(a,o)=>{const n=h.value.indexOf(a)>-1;if(f.value)h.value=n?[]:[a];else if(n){const y=h.value.indexOf(a);h.value.splice(y,1)}else h.value.push(a);o.target.focus()},P=(a,o,n)=>{const y=k.value.querySelectorAll("button").length-1;switch(o.code){case"ArrowLeft":case"ArrowUp":o.preventDefault(),n>0&&g(n-1);break;case"ArrowRight":case"ArrowDown":o.preventDefault(),n<y&&g(n+1);break;case"Home":o.preventDefault(),g(0);break;case"End":o.preventDefault(),g(y);break;case"Enter":case"Space":o.preventDefault(),E(a,o),g(n);break}},B=a=>h.value.indexOf(a)>-1,S=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")}));e.watch(f,async(a,o)=>{a!==o&&(h.value=t.expandedItems)}),e.watch(t.expandedItems,async(a,o)=>{a!==o&&(h.value=a)}),e.watch(_,async(a,o)=>{a!==-1&&typeof a<"u"&&a!==o&&t.cqItemsOrder&&(h.value=[t.cqItemsOrder[a]])});const d=$.createCallbackListener(t.cqPath,_);return e.onMounted(()=>{$.subscribeRequestMessage(m.value,d)}),e.onUnmounted(()=>{$.unsubscribeRequestMessage(m.value,d)}),(a,o)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,ref_key:"accordion",ref:k,class:A.value,"data-cmp-single-expansion":f.value===!0?!0:void 0},O.value),[t.cqItemsOrder&&(t==null?void 0:t.cqItemsOrder.length)>0&&t.cqItems?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(t.cqItemsOrder,(n,y)=>(e.openBlock(),e.createElementBlock("div",{id:`accordion-${t.cqItems[n].id}`,key:`accordion-index-${y}`,class:e.normalizeClass(`${t.baseCssClass}__item`),"data-cmp-expanded":B(n)?!0:void 0},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.headingElement),{class:e.normalizeClass(`${t.baseCssClass}__heading`)},{default:e.withCtx(()=>[e.createElementVNode("button",{id:`accordion-${t.cqItems[n].id}-button`,"aria-controls":`accordion-${t.cqItems[n].id}-panel`,class:e.normalizeClass([`${t.baseCssClass}__button`,{[`${t.baseCssClass}__button--expanded`]:B(n)}]),"data-cmp-button-id":y,onClick:w=>E(n,w),onKeydown:w=>P(n,w,y)},[e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__title`)},e.toDisplayString(t.cqItems[n]["cq:panelTitle"]),3),e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__icon`)},ae,2)],42,se)]),_:2},1032,["class"])),e.unref(b)||B(n)?(e.openBlock(),e.createElementBlock("div",{key:0,id:`accordion-${t.cqItems[n].id}-panel`,"aria-labelledby":`accordion-${t.cqItems[n].id}-button`,class:e.normalizeClass(`${t.baseCssClass}__panel ${B(n)?" "+t.baseCssClass+"__panel--expanded":" "+t.baseCssClass+"__panel--hidden"}`),role:"region"},[t.cqItemsOrder?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(L.value[s.cqItemsOrder.indexOf(n)]),{key:0})):e.createCommentVNode("",!0)],10,ne)):e.createCommentVNode("",!0)],10,te))),128)):e.createCommentVNode("",!0),e.unref(b)?(e.openBlock(),e.createBlock(e.unref(c.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:1},S.value)),null,16)):e.createCommentVNode("",!0)],16,ee))}}),le=["id"],re=["aria-live","onKeydown"],ie=["id","aria-hidden","aria-label","aria-labelledby"],ce=["aria-label"],de=["id","aria-controls","aria-label","aria-selected","onClick"],me=e.defineComponent({inheritAttrs:!1,__name:"CoreCarousel",props:{accessibility:{type:Object,default:()=>({slide:"Slide {0} of {1}",indicator:"Slide {0}"})},accessibilityLabel:{type:String,default:"Carousel"},accessibilityNext:{type:String,default:"Next"},accessibilityPause:{type:String,default:"Pause"},accessibilityPlay:{type:String,default:"Play"},accessibilityPrevious:{type:String,default:"Previous"},accessibilityTablist:{type:String,default:"Choose a slide to display"},activeItem:{type:String},autopauseDisabled:{type:Boolean,default:!1},cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},controlsPrepended:{type:Boolean,default:!1},delay:{type:Number,default:5e3},isInEditor:{type:Boolean,default:void 0},...c.componentProperties("cmp-carousel")},setup(s){const t=s,r=e.useAttrs(),b=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",N.AuthoringUtils.isInEditor()),u=e.inject("componentMapping",new c.ComponentMapping),m=e.ref(t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),_=e.ref(null),h=e.ref(-1),k=$.initMessageChannel(),f=e.computed(()=>(r==null?void 0:r.autoplay)===!0&&!b),O=e.computed(()=>c.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,u)),L=e.computed(()=>c.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,b,t.aemNoDecoration)),A=e.computed(()=>{const l={"aria-label":t.accessibilityLabel,"aria-live":"polite","aria-roledescription":"carousel",class:"aem-container","data-panelcontainer":"carousel",role:"group"};return b&&(l["data-cq-data-path"]=t.cqPath),l}),g=l=>{if(_.value){const C=_.value,I=C.querySelectorAll(`.${t.baseCssClass}__item`),q=C.querySelectorAll(`.${t.baseCssClass}__indicator`);l<0&&(l=I.length-1),l>=I.length&&(l=0),I.length&&I.forEach((i,D)=>{D===l?(i.classList.add(`${t.baseCssClass}__item--active`),i.removeAttribute("aria-hidden")):(i.classList.remove(`${t.baseCssClass}__item--active`),i.setAttribute("aria-hidden","true"))}),q.length&&q.forEach((i,D)=>{D===l?(i.classList.add(`${t.baseCssClass}__indicator--active`),i.setAttribute("aria-selected","true"),i.setAttribute("tabindex","0")):(i.classList.remove(`${t.baseCssClass}__indicator--active`),i.removeAttribute("aria-selected"),i.setAttribute("tabindex","-1"))})}},E=()=>{let l=0;if(_.value){const C=_.value,I=C.querySelectorAll(`.${t.baseCssClass}__item`),q=C.querySelector(`.${t.baseCssClass}__item--active`);l=Array.from(I).indexOf(q)}return l},P=l=>{g(l),_.value&&_.value.querySelectorAll(`.${t.baseCssClass}__item`)[l].focus()},B=()=>{const l=E();g(l+1)},S=()=>{const l=E();g(l-1)},d=()=>{if(!f.value||t.cqItemsOrder.length<=1)return;const l=E();g(l+1)},a=()=>{h.value=setInterval(()=>{d()},t.delay)},o=()=>{clearInterval(h.value),h.value=-1},n=e.computed(()=>{const l=e.h("button",{"aria-label":t.accessibilityPrevious,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--previous`],type:"button",onClick:()=>{S()}},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e.h("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}))]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityPrevious])]),C=e.h("button",{"aria-label":t.accessibilityNext,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--next`],type:"button",onClick:()=>{B()}},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e.h("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}))]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityNext])]),I=e.h("button",{"aria-label":t.accessibilityPause,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--pause`,{[`${t.baseCssClass}__action--disabled`]:h.value===-1}],type:"button",onClick:()=>{!t.autopauseDisabled&&f.value&&o()}},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e.h("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})])]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityPause])]),q=e.h("button",{"aria-label":t.accessibilityPlay,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--play`,{[`${t.baseCssClass}__action--disabled`]:h.value!==-1}],type:"button",onClick:()=>{!t.autopauseDisabled&&f.value&&a()}},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e.h("path",{d:"M8 5v14l11-7z"})])]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityPlay])]),i=[l,C];return(r==null?void 0:r.autoplay)===!0&&(i.push(I),i.push(q)),e.h("div",{class:`${t.baseCssClass}__actions`},i)}),y=e.computed(()=>!t.cqItemsOrder||(t==null?void 0:t.cqItemsOrder.length)===0),w=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")})),he=l=>{var q;let C=((q=t.accessibility)==null?void 0:q.indicator)||"";const I="{0}";return C=C.replace(I,(l+1).toString()),C},ge=l=>{var i;let C=((i=t.accessibility)==null?void 0:i.slide)||"";const I="{0}";C=C.replace(I,(l+1).toString());const q="{1}";return C=C.replace(q,t.cqItemsOrder.length.toString()),C},ue=l=>{g(l)},Ie=()=>{!t.autopauseDisabled&&f.value&&o()},qe=()=>{!t.autopauseDisabled&&f.value&&a()},$e=()=>{if(_.value){const C=_.value.querySelectorAll(`.${t.baseCssClass}__item`);P(C.length-1)}},K=()=>{const l=E();P(l-1)},j=()=>{const l=E();P(l+1)},T=(l,C=t.cqPath)=>{l.data&&l.data.id===C&&l.data.operation==="navigate"&&g(l.data.index)};return e.onMounted(()=>{a(),$.subscribeRequestMessage(k,T)}),e.onUnmounted(()=>{typeof h.value=="number"&&h.value>=0&&o(),$.unsubscribeRequestMessage(k,T)}),e.watchEffect(()=>m.value=t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),(l,C)=>{var I;return e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,ref_key:"carouselContainer",ref:_,class:L.value},A.value),[t.controlsPrepended?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.value),{key:0})):e.createCommentVNode("",!0),y.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",{key:1,"aria-live":((I=e.unref(r))==null?void 0:I.autoplay)===!0?"off":"polite",class:e.normalizeClass(`${t.baseCssClass}__content`),"aria-atomic":"false",onMouseenter:Ie,onMouseleave:qe,onKeydown:[e.withKeys(K,["left"]),e.withKeys(K,["up"]),e.withKeys(j,["right"]),e.withKeys(j,["down"]),C[0]||(C[0]=e.withKeys(q=>P(0),["home"])),e.withKeys($e,["end"])]},[e.createElementVNode("div",{class:e.normalizeClass([{[`${t.baseCssClass}__items`]:!e.unref(b)}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(O.value,(q,i)=>(e.openBlock(),e.createElementBlock("div",{id:`${t.cqItems[t.cqItemsOrder[i]].id}-tabpanel`,key:`item-${i}`,"aria-hidden":i===m.value?void 0:!0,"aria-label":ge(i),"aria-labelledby":`${t.cqItems[t.cqItemsOrder[i]].id}-tab`,class:e.normalizeClass([`${t.baseCssClass}__item`,{[`${t.baseCssClass}__item--active`]:i===m.value}]),"aria-roledescription":"slide","data-cmp-hook-carousel":"item",role:"tabpanel"},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(q),e.normalizeProps(e.guardReactiveProps({isInEditor:!1})),null,16))],10,ie))),128))],2),t.controlsPrepended?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.value),{key:0})),e.createElementVNode("ol",{"aria-label":t.accessibilityTablist,class:e.normalizeClass(`${t.baseCssClass}__indicators`),role:"tablist"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.cqItemsOrder,(q,i)=>(e.openBlock(),e.createElementBlock("li",{id:`${t.cqItems[t.cqItemsOrder[i]].id}-tab`,key:`item-${i}`,"aria-controls":`${t.cqItems[t.cqItemsOrder[i]].id}-tabpanel`,"aria-label":he(i),"aria-selected":i===m.value?!0:void 0,class:e.normalizeClass([`${t.baseCssClass}__indicator`,{[`${t.baseCssClass}__indicator--active`]:i===m.value}]),role:"tab",onClick:D=>ue(i)},e.toDisplayString(t.cqItems[q]["cq:panelTitle"]),11,de))),128))],10,ce)],42,re)),e.unref(b)?(e.openBlock(),e.createBlock(e.unref(c.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:2},w.value)),null,16)):e.createCommentVNode("",!0)],16,le)}}}),pe=e.defineComponent({__name:"CoreExperienceFragment",setup(s){return(t,r)=>(e.openBlock(),e.createBlock(R,{"is-in-editor":!1}))}}),Ce=["id","onKeydown"],be=["aria-label"],ye=["id","aria-controls","aria-selected","tabIndex","onClick"],fe=["id","aria-hidden","aria-labelledby"],_e=e.defineComponent({inheritAttrs:!1,__name:"CoreTabs",props:{activeItem:{type:String},accessibilityLabel:{type:String},cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},isInEditor:{type:Boolean,default:void 0},...c.componentProperties("cmp-tabs")},setup(s){const t=s,r=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",N.AuthoringUtils.isInEditor()),b=e.inject("componentMapping",new c.ComponentMapping),u=e.ref(t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),m=e.ref(null),_=$.initMessageChannel(),h=e.computed(()=>c.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,b)),k=e.computed(()=>c.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,r,t.aemNoDecoration)),f=e.computed(()=>!t.cqItemsOrder||(t==null?void 0:t.cqItemsOrder.length)===0),O=e.computed(()=>{const d={class:"aem-container","data-panelcontainer":"tabs"};return r&&(d["data-cq-data-path"]=t.cqPath),d}),L=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")})),A=d=>{if(m.value){const a=m.value,o=a.querySelectorAll(`.${t.baseCssClass}__tab`),n=a.querySelectorAll(`.${t.baseCssClass}__tabpanel`);d<0&&(d=o.length-1),d>=o.length&&(d=0),o.length&&o.forEach((y,w)=>{w===d?(y.classList.add(`${t.baseCssClass}__tab--active`),y.setAttribute("aria-selected","true"),y.setAttribute("tabindex","0")):(y.classList.remove(`${t.baseCssClass}__tab--active`),y.removeAttribute("aria-selected"),y.setAttribute("tabindex","-1"))}),n.length&&n.forEach((y,w)=>{w===d?(y.classList.add(`${t.baseCssClass}__tabpanel--active`),y.removeAttribute("aria-hidden")):(y.classList.remove(`${t.baseCssClass}__tabpanel--active`),y.setAttribute("aria-hidden","true"))})}},g=d=>{A(d),m.value&&m.value.querySelectorAll(`.${t.baseCssClass}__tabpanel`)[d].focus()},E=(d,a=t.cqPath)=>{d.data&&d.data.id===a&&d.data.operation==="navigate"&&A(d.data.index)},P=()=>{if(m.value){const a=m.value.querySelectorAll(`.${t.baseCssClass}__tab`);g(a.length-1)}},B=()=>{if(m.value){const d=m.value,a=d.querySelectorAll(`.${t.baseCssClass}__tab`),o=d.querySelector(`.${t.baseCssClass}__tab--active`),n=Array.from(a).indexOf(o);g(n-1)}},S=()=>{if(m.value){const d=m.value,a=d.querySelectorAll(`.${t.baseCssClass}__tab`),o=d.querySelector(`.${t.baseCssClass}__tab--active`),n=Array.from(a).indexOf(o);g(n+1)}};return e.onMounted(()=>{$.subscribeRequestMessage(_,E)}),e.onUnmounted(()=>{$.unsubscribeRequestMessage(_,E)}),e.watchEffect(()=>u.value=t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),(d,a)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,ref_key:"tabContainer",ref:m,class:k.value},O.value,{onKeydown:[e.withKeys(B,["left"]),e.withKeys(B,["up"]),e.withKeys(S,["right"]),e.withKeys(S,["down"]),a[0]||(a[0]=e.withKeys(o=>g(0),["home"])),e.withKeys(P,["end"])]}),[f.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("ol",{key:0,"aria-label":t.accessibilityLabel,class:e.normalizeClass(`${t.baseCssClass}__tablist`),"aria-multiselectable":"false",role:"tablist"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.cqItemsOrder,(o,n)=>(e.openBlock(),e.createElementBlock("li",{id:`${t.cqItems[o].id}-tab`,key:`tab-${n}`,"aria-controls":`${t.cqItems[o].id}-tabpanel`,"aria-selected":n===u.value?!0:void 0,class:e.normalizeClass([`${t.baseCssClass}__tab`,{[`${t.baseCssClass}__tab--active`]:n===u.value}]),tabIndex:n===u.value?0:-1,role:"tab",onClick:y=>A(n)},e.toDisplayString(t.cqItems[o]["cq:panelTitle"]),11,ye))),128))],10,be)),f.value?e.createCommentVNode("",!0):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(h.value,(o,n)=>(e.openBlock(),e.createElementBlock("div",{id:`${t.cqItems[t.cqItemsOrder[n]].id}-tabpanel`,key:`tab-content-${n}`,"aria-hidden":n===u.value?void 0:!0,"aria-labelledby":`${t.cqItems[t.cqItemsOrder[n]].id}-tab`,class:e.normalizeClass([`${t.baseCssClass}__tabpanel`,{[`${t.baseCssClass}__tabpanel--active`]:n===u.value}]),role:"tabpanel",tabindex:"0"},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(o),e.normalizeProps(e.guardReactiveProps({isInEditor:!1})),null,16))],10,fe))),128)),e.unref(r)?(e.openBlock(),e.createBlock(e.unref(c.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:2},L.value)),null,16)):e.createCommentVNode("",!0)],16,Ce))}});p.AccordionEditConfig=U,p.CarouselEditConfig=V,p.ContainerEditConfig=G,p.ContentFragmentEditConfig=H,p.CoreAccordion=oe,p.CoreCarousel=me,p.CoreContainer=R,p.CoreContentFragment=v,p.CoreExperienceFragment=pe,p.CoreTabs=_e,p.DefaultContentFragment=F,p.ExperienceFragmentEditConfig=W,p.MapToContentFragmentModel=Q,p.SpaUtils=$,p.TabsEditConfig=X,p.getRenderer=x,p.mapRenderer=z,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
