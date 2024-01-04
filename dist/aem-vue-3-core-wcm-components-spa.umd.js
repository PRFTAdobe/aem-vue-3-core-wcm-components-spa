(function(p,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("aem-vue-3-editable-components"),require("vue"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","aem-vue-3-editable-components","vue","@adobe/aem-spa-page-model-manager"],i):(p=typeof globalThis<"u"?globalThis:p||self,i(p.aemVueCoreWcmComponentsSpa={},p.AemVueEditableComponents,p.Vue,p.AemSpaPageModelManager))})(this,function(p,i,e,S){"use strict";const K={emptyLabel:"Accordion",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},V={emptyLabel:"Carousel",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},G={emptyLabel:"Container",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},H={emptyLabel:"Content Fragment",isEmpty(s){return s.elementsOrder.length===0&&s.cqItemsOrder.length===0}},W={emptyLabel:"Experience Fragment",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},X={emptyLabel:"Tabs",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},J="ContentFragment-",D=s=>J+s,z=(s,t)=>{s&&t&&(typeof s=="string"?[s]:s).forEach(C=>{i.MapTo(D(C))(t)})},x=s=>{const t=D(s);return i.ComponentMapping.get(t)},Q=s=>t=>z(s,t),R=e.defineComponent({inheritAttrs:!1,__name:"CoreContainer",props:{accessibilityLabel:{type:String},backgroundStyle:{type:String},cqPath:{type:String,default:""},isInEditor:{type:Boolean,default:void 0},layout:{type:String,default:"RESPONSIVE_GRID",validator:s=>["RESPONSIVE_GRID","SIMPLE"].includes(s)},roleAttribute:{type:String},styleSystemElement:{type:String,default:"div"},...i.componentProperties("cmp-container")},setup(s){const t=s,l=e.useAttrs(),C=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",S.AuthoringUtils.isInEditor()),g=e.computed(()=>i.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,C,t.aemNoDecoration)),m=e.computed(()=>{var h;return C&&(l==null?void 0:l.allowedComponents)&&((h=l==null?void 0:l.allowedComponents)==null?void 0:h.applicable)});return(h,y)=>m.value?(e.openBlock(),e.createBlock(e.unref(i.AllowedComponentsContainer),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(l)})),null,16)):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.styleSystemElement||"div"),{key:1,id:t.id,"aria-label":t.accessibilityLabel,class:e.normalizeClass(g.value),role:t.roleAttribute,style:e.normalizeStyle(t.backgroundStyle)},{default:e.withCtx(()=>[s.layout==="RESPONSIVE_GRID"?(e.openBlock(),e.createBlock(e.unref(i.ResponsiveGrid),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(l),allowedComponents:{applicable:!1,components:[]},title:""})),null,16)):(e.openBlock(),e.createBlock(e.unref(i.Container),e.normalizeProps(e.mergeProps({key:1},{...t,...e.unref(l)})),null,16))]),_:1},8,["id","aria-label","class","role","style"]))}}),Y=["id"],Z=["innerHTML"],F=e.defineComponent({inheritAttrs:!1,__name:"DefaultContentFragment",props:{cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},description:{type:String},elements:{type:Object,default:()=>({})},elementsOrder:{type:Array,default:()=>[]},isInEditor:{type:Boolean,default:void 0},model:{type:String},title:{type:String},...i.componentProperties("cmp-contentfragment")},setup(s){const t=s,l=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",S.AuthoringUtils.isInEditor()),C=e.inject("componentMapping",new i.ComponentMapping),g=e.computed(()=>i.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,l,t.aemNoDecoration)),m=e.computed(()=>i.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,C));return(h,y)=>{var E;return e.openBlock(),e.createElementBlock("div",{id:t.id,class:e.normalizeClass(g.value)},[e.createElementVNode("h3",{class:e.normalizeClass(`${t.baseCssClass}__title`)},e.toDisplayString(t.title),3),t.description?(e.openBlock(),e.createElementBlock("p",{key:0,class:e.normalizeClass(`${t.baseCssClass}__description`)},e.toDisplayString(t.description),3)):e.createCommentVNode("",!0),(E=t.elementsOrder)!=null&&E.length?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(`${t.baseCssClass}__elements`)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.elementsOrder,(b,w)=>(e.openBlock(),e.createElementBlock("div",{key:`${t.id}-element-${b}-${w}`,class:e.normalizeClass(`${t.baseCssClass}__element`)},[e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--key`])},[e.createElementVNode("h4",null,e.toDisplayString(b),1)],2),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--value`]),innerHTML:`value: ${t.elements[b].value}`},null,10,Z),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--datatype`])}," datatype: "+e.toDisplayString(t.elements[b].dataType),3),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--multivalue`])}," multivalue: "+e.toDisplayString(t.elements[b].multiValue?"true":"false"),3),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--type`])}," type: "+e.toDisplayString(t.elements[b][":type"]),3)],2))),128))],2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m.value,b=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(b),{key:b.toString()}))),128))],10,Y)}}}),v=e.defineComponent({inheritAttrs:!1,__name:"CoreContentFragment",props:{cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},description:{type:String},elements:{type:Object,default:()=>({})},elementsOrder:{type:Array,default:()=>[]},isInEditor:{type:Boolean,default:void 0},model:{type:String},title:{type:String},...i.componentProperties("cmp-contentfragment")},setup(s){const t=s,l=e.useAttrs(),C=e.computed(()=>t.elementsOrder.length===0&&t.cqItemsOrder.length===0),g=e.computed(()=>{const m=x(t.model);return m||F});return(m,h)=>C.value?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(g.value),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(l)})),null,16))}}),$={createCallbackListener(s,t){return(l,C=s)=>{l.data&&l.data.id===C&&l.data.operation==="navigate"&&(t.value=l.data.index)}},initMessageChannel(){return this.isBrowser()&&window.Granite&&window.Granite.author&&window.Granite.author.MessageChannel?new window.Granite.author.MessageChannel("cqauthor",window):null},isBrowser(){try{return typeof window<"u"}catch{return!1}},subscribeRequestMessage(s,t){s&&s.subscribeRequestMessage("cmp.panelcontainer",t)},unsubscribeRequestMessage(s,t){s&&s.unsubscribeRequestMessage("cmp.panelcontainer",t)}},ee=["id","data-cmp-single-expansion"],te=["id","data-cmp-expanded"],se=["id","aria-controls","data-cmp-button-id","onClick","onKeydown"],ae=[e.createElementVNode("svg",{fill:"var(--accordion-heading-color)",height:"18",viewBox:"0 0 24 24",width:"18",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})],-1)],ne=["id","aria-labelledby"],oe=e.defineComponent({inheritAttrs:!1,__name:"CoreAccordion",props:{cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},expandedItems:{type:Array,default:()=>[]},headingElement:{type:String,default:"h3"},...i.componentProperties("cmp-accordion")},setup(s){const t=s,l=e.useAttrs(),C=e.inject("isInEditor",S.AuthoringUtils.isInEditor()),g=e.inject("componentMapping",new i.ComponentMapping),m=e.ref($.initMessageChannel()),h=e.ref(-1),y=e.ref(t.expandedItems),E=e.ref(null),b=e.computed(()=>(l==null?void 0:l.singleExpansion)===!0),w=e.computed(()=>{const a={};return C&&(a["data-panelcontainer"]="accordion",a["data-cq-data-path"]=t.cqPath||"",a["data-placeholder-text"]="Please drag Accordion item components here"),a}),N=e.computed(()=>i.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,g)),B=e.computed(()=>i.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,C,t.aemNoDecoration)),q=a=>{const n=E.value.querySelector(`button[data-cmp-button-id="${a}"]`);n&&n.focus()},O=(a,n)=>{const o=y.value.indexOf(a)>-1;if(b.value)y.value=o?[]:[a];else if(o){const k=y.value.indexOf(a);y.value.splice(k,1)}else y.value.push(a);n.target.focus()},A=(a,n,o)=>{const k=E.value.querySelectorAll("button").length-1;switch(n.code){case"ArrowLeft":case"ArrowUp":n.preventDefault(),o>0&&q(o-1);break;case"ArrowRight":case"ArrowDown":n.preventDefault(),o<k&&q(o+1);break;case"Home":n.preventDefault(),q(0);break;case"End":n.preventDefault(),q(k);break;case"Enter":case"Space":n.preventDefault(),O(a,n),q(o);break}},P=a=>y.value.indexOf(a)>-1,d=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")}));e.watch(b,async(a,n)=>{a!==n&&(y.value=t.expandedItems)}),e.watch(t.expandedItems,async(a,n)=>{a!==n&&(y.value=a)}),e.watch(h,async(a,n)=>{a!==-1&&typeof a<"u"&&a!==n&&t.cqItemsOrder&&(y.value=[t.cqItemsOrder[a]])});const _=$.createCallbackListener(t.cqPath,h);return e.onMounted(()=>{$.subscribeRequestMessage(m.value,_)}),e.onUnmounted(()=>{$.unsubscribeRequestMessage(m.value,_)}),(a,n)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,ref_key:"accordion",ref:E,class:B.value,"data-cmp-single-expansion":b.value===!0?!0:void 0},w.value),[t.cqItemsOrder&&(t==null?void 0:t.cqItemsOrder.length)>0&&t.cqItems?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(t.cqItemsOrder,(o,k)=>(e.openBlock(),e.createElementBlock("div",{id:`accordion-${t.cqItems[o].id}`,key:`accordion-index-${k}`,class:e.normalizeClass(`${t.baseCssClass}__item`),"data-cmp-expanded":P(o)?!0:void 0},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.headingElement),{class:e.normalizeClass(`${t.baseCssClass}__heading`)},{default:e.withCtx(()=>[e.createElementVNode("button",{id:`accordion-${t.cqItems[o].id}-button`,"aria-controls":`accordion-${t.cqItems[o].id}-panel`,class:e.normalizeClass([`${t.baseCssClass}__button`,{[`${t.baseCssClass}__button--expanded`]:P(o)}]),"data-cmp-button-id":k,onClick:L=>O(o,L),onKeydown:L=>A(o,L,k)},[e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__title`)},e.toDisplayString(t.cqItems[o]["cq:panelTitle"]),3),e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__icon`)},ae,2)],42,se)]),_:2},1032,["class"])),e.unref(C)||P(o)?(e.openBlock(),e.createElementBlock("div",{key:0,id:`accordion-${t.cqItems[o].id}-panel`,"aria-labelledby":`accordion-${t.cqItems[o].id}-button`,class:e.normalizeClass(`${t.baseCssClass}__panel ${P(o)?" "+t.baseCssClass+"__panel--expanded":" "+t.baseCssClass+"__panel--hidden"}`),role:"region"},[t.cqItemsOrder?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(N.value[s.cqItemsOrder.indexOf(o)]),{key:0})):e.createCommentVNode("",!0)],10,ne)):e.createCommentVNode("",!0)],10,te))),128)):e.createCommentVNode("",!0),e.unref(C)?(e.openBlock(),e.createBlock(e.unref(i.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:1},d.value)),null,16)):e.createCommentVNode("",!0)],16,ee))}}),le=["id"],re=["aria-live"],ce=["id","aria-hidden","aria-label","aria-labelledby"],ie=["aria-label"],de=["id","aria-controls","aria-label","aria-selected","onClick"],me=e.defineComponent({inheritAttrs:!1,__name:"CoreCarousel",props:{accessibility:{type:Object,default:()=>({slide:"Slide {0} of {1}",indicator:"Slide {0}"})},accessibilityLabel:{type:String,default:"Carousel"},accessibilityNext:{type:String,default:"Next"},accessibilityPause:{type:String,default:"Pause"},accessibilityPlay:{type:String,default:"Play"},accessibilityPrevious:{type:String,default:"Previous"},accessibilityTablist:{type:String,default:"Choose a slide to display"},activeItem:{type:String},autopauseDisabled:{type:Boolean,default:!1},cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},controlsPrepended:{type:Boolean,default:!1},delay:{type:Number,default:5e3},isInEditor:{type:Boolean,default:void 0},...i.componentProperties("cmp-carousel")},setup(s){const t=s,l=e.useAttrs(),C=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",S.AuthoringUtils.isInEditor()),g=e.inject("componentMapping",new i.ComponentMapping),m=e.ref(t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),h=e.ref(null),y=e.ref(-1),E=$.initMessageChannel(),b=e.ref((l==null?void 0:l.autoplay)===!0&&!C),w=e.computed(()=>i.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,g)),N=e.computed(()=>i.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,C,t.aemNoDecoration)),B=e.computed(()=>{const r={"aria-label":t.accessibilityLabel,"aria-live":"polite","aria-roledescription":"carousel",class:"aem-container","data-panelcontainer":"carousel",role:"group"};return C&&(r["data-cq-data-path"]=t.cqPath),r}),q=r=>{if(h.value){const f=h.value,u=f.querySelectorAll(`.${t.baseCssClass}__item`),I=f.querySelectorAll(`.${t.baseCssClass}__indicator`);r<0&&(r=u.length-1),r>=u.length&&(r=0),u.length&&u.forEach((c,M)=>{M===r?(c.classList.add(`${t.baseCssClass}__item--active`),c.removeAttribute("aria-hidden")):(c.classList.remove(`${t.baseCssClass}__item--active`),c.setAttribute("aria-hidden","true"))}),I.length&&I.forEach((c,M)=>{M===r?(c.classList.add(`${t.baseCssClass}__indicator--active`),c.setAttribute("aria-selected","true"),c.setAttribute("tabindex","0")):(c.classList.remove(`${t.baseCssClass}__indicator--active`),c.removeAttribute("aria-selected"),c.setAttribute("tabindex","-1"))})}},O=()=>{let r=0;if(h.value){const f=h.value,u=f.querySelectorAll(`.${t.baseCssClass}__item`),I=f.querySelector(`.${t.baseCssClass}__item--active`);r=Array.from(u).indexOf(I)}return r},A=()=>{const r=O();q(r+1)},P=()=>{const r=O();q(r-1)},d=r=>{b.value=r},_=e.computed(()=>{const r=e.h("button",{"aria-label":t.accessibilityPrevious,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--previous`],type:"button",onClick:()=>{P()}},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e.h("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}))]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityPrevious])]),f=e.h("button",{"aria-label":t.accessibilityNext,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--next`],type:"button",onClick:()=>{A()}},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e.h("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}))]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityNext])]),u=e.h("button",{"aria-label":t.accessibilityPause,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--pause`,{[`${t.baseCssClass}__action--disabled`]:!b.value}],type:"button",onClick:()=>{d(!1)}},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e.h("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})])]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityPause])]),I=e.h("button",{"aria-label":t.accessibilityPlay,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--play`,{[`${t.baseCssClass}__action--disabled`]:b.value}],type:"button",onClick:()=>{d(!0)}},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e.h("path",{d:"M8 5v14l11-7z"})])]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityPlay])]),c=[r,f];return(l==null?void 0:l.autoplay)===!0&&(c.push(u),c.push(I)),e.h("div",{class:`${t.baseCssClass}__actions`},c)}),a=e.computed(()=>!t.cqItemsOrder||(t==null?void 0:t.cqItemsOrder.length)===0),n=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")})),o=r=>{var I;let f=((I=t.accessibility)==null?void 0:I.indicator)||"";const u="{0}";return f=f.replace(u,(r+1).toString()),f},k=r=>{var c;let f=((c=t.accessibility)==null?void 0:c.slide)||"";const u="{0}";f=f.replace(u,(r+1).toString());const I="{1}";return f=f.replace(I,t.cqItemsOrder.length.toString()),f},L=()=>{if(!b.value||t.cqItemsOrder.length<=1)return;const r=O();q(r+1)},j=()=>{y.value=setInterval(()=>{L()},t.delay)},T=()=>{clearInterval(y.value)},he=r=>{q(r)},ge=()=>{!t.autopauseDisabled&&b.value&&T()},ue=()=>{!t.autopauseDisabled&&b.value&&j()},U=(r,f=t.cqPath)=>{r.data&&r.data.id===f&&r.data.operation==="navigate"&&q(r.data.index)};return e.onMounted(()=>{j(),$.subscribeRequestMessage(E,U)}),e.onUnmounted(()=>{typeof y.value=="number"&&y.value>=0&&T(),$.unsubscribeRequestMessage(E,U)}),e.watchEffect(()=>m.value=t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),(r,f)=>{var u;return e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,ref_key:"carouselContainer",ref:h,class:N.value},B.value),[t.controlsPrepended?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(_.value),{key:0})):e.createCommentVNode("",!0),a.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",{key:1,"aria-live":((u=e.unref(l))==null?void 0:u.autoplay)===!0?"off":"polite",class:e.normalizeClass(`${t.baseCssClass}__content`),"aria-atomic":"false",onMouseenter:ge,onMouseleave:ue},[e.createElementVNode("div",{class:e.normalizeClass([{[`${t.baseCssClass}__items`]:!e.unref(C)}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(w.value,(I,c)=>(e.openBlock(),e.createElementBlock("div",{id:`${t.cqItems[t.cqItemsOrder[c]].id}-tabpanel`,key:`item-${c}`,"aria-hidden":c===m.value?void 0:!0,"aria-label":k(c),"aria-labelledby":`${t.cqItems[t.cqItemsOrder[c]].id}-tab`,class:e.normalizeClass([`${t.baseCssClass}__item`,{[`${t.baseCssClass}__item--active`]:c===m.value}]),"aria-roledescription":"slide",role:"tabpanel"},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(I),e.normalizeProps(e.guardReactiveProps({isInEditor:!1})),null,16))],10,ce))),128))],2),t.controlsPrepended?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(_.value),{key:0})),e.createElementVNode("ol",{"aria-label":t.accessibilityTablist,class:e.normalizeClass(`${t.baseCssClass}__indicators`),role:"tablist"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.cqItemsOrder,(I,c)=>(e.openBlock(),e.createElementBlock("li",{id:`${t.cqItems[t.cqItemsOrder[c]].id}-tab`,key:`item-${c}`,"aria-controls":`${t.cqItems[t.cqItemsOrder[c]].id}-tabpanel`,"aria-label":o(c),"aria-selected":c===m.value?!0:void 0,class:e.normalizeClass([`${t.baseCssClass}__indicator`,{[`${t.baseCssClass}__indicator--active`]:c===m.value}]),role:"tab",onClick:M=>he(c)},e.toDisplayString(t.cqItems[I]["cq:panelTitle"]),11,de))),128))],10,ie)],42,re)),e.unref(C)?(e.openBlock(),e.createBlock(e.unref(i.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:2},n.value)),null,16)):e.createCommentVNode("",!0)],16,le)}}}),pe=e.defineComponent({__name:"CoreExperienceFragment",setup(s){return(t,l)=>(e.openBlock(),e.createBlock(R,{"is-in-editor":!1}))}}),Ce=["id","onKeydown"],be=["aria-label"],fe=["id","aria-controls","aria-selected","tabIndex","onClick"],_e=["id","aria-hidden","aria-labelledby"],ye=e.defineComponent({inheritAttrs:!1,__name:"CoreTabs",props:{activeItem:{type:String},accessibilityLabel:{type:String},cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},isInEditor:{type:Boolean,default:void 0},...i.componentProperties("cmp-tabs")},setup(s){const t=s,l=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",S.AuthoringUtils.isInEditor()),C=e.inject("componentMapping",new i.ComponentMapping),g=e.ref(t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),m=e.ref(null),h=$.initMessageChannel(),y=e.computed(()=>i.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,C)),E=e.computed(()=>i.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,l,t.aemNoDecoration)),b=e.computed(()=>!t.cqItemsOrder||(t==null?void 0:t.cqItemsOrder.length)===0),w=e.computed(()=>{const d={class:"aem-container","data-panelcontainer":"tabs"};return l&&(d["data-cq-data-path"]=t.cqPath),d}),N=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")})),B=d=>{if(m.value){const _=m.value,a=_.querySelectorAll(`.${t.baseCssClass}__tab`),n=_.querySelectorAll(`.${t.baseCssClass}__tabpanel`);d<0&&(d=a.length-1),d>=a.length&&(d=0),a.length&&a.forEach((o,k)=>{k===d?(o.classList.add(`${t.baseCssClass}__tab--active`),o.setAttribute("aria-selected","true"),o.setAttribute("tabindex","0")):(o.classList.remove(`${t.baseCssClass}__tab--active`),o.removeAttribute("aria-selected"),o.setAttribute("tabindex","-1"))}),n.length&&n.forEach((o,k)=>{k===d?(o.classList.add(`${t.baseCssClass}__tabpanel--active`),o.removeAttribute("aria-hidden"),o.focus()):(o.classList.remove(`${t.baseCssClass}__tabpanel--active`),o.setAttribute("aria-hidden","true"))})}},q=(d,_=t.cqPath)=>{d.data&&d.data.id===_&&d.data.operation==="navigate"&&B(d.data.index)},O=()=>{if(m.value){const _=m.value.querySelectorAll(`.${t.baseCssClass}__tab`);B(_.length-1)}},A=()=>{if(m.value){const d=m.value,_=d.querySelectorAll(`.${t.baseCssClass}__tab`),a=d.querySelector(`.${t.baseCssClass}__tab--active`),n=Array.from(_).indexOf(a);B(n-1)}},P=()=>{if(m.value){const d=m.value,_=d.querySelectorAll(`.${t.baseCssClass}__tab`),a=d.querySelector(`.${t.baseCssClass}__tab--active`),n=Array.from(_).indexOf(a);B(n+1)}};return e.onMounted(()=>{$.subscribeRequestMessage(h,q)}),e.onUnmounted(()=>{$.unsubscribeRequestMessage(h,q)}),e.watchEffect(()=>g.value=t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),(d,_)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,ref_key:"tabContainer",ref:m,class:E.value},w.value,{onKeydown:[e.withKeys(A,["left"]),e.withKeys(A,["up"]),e.withKeys(P,["right"]),e.withKeys(P,["down"]),_[0]||(_[0]=e.withKeys(a=>B(0),["home"])),e.withKeys(O,["end"])]}),[b.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("ol",{key:0,"aria-label":t.accessibilityLabel,class:e.normalizeClass(`${t.baseCssClass}__tablist`),"aria-multiselectable":"false",role:"tablist"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.cqItemsOrder,(a,n)=>(e.openBlock(),e.createElementBlock("li",{id:`${t.cqItems[a].id}-tab`,key:`tab-${n}`,"aria-controls":`${t.cqItems[a].id}-tabpanel`,"aria-selected":n===g.value?!0:void 0,class:e.normalizeClass([`${t.baseCssClass}__tab`,{[`${t.baseCssClass}__tab--active`]:n===g.value}]),tabIndex:n===g.value?0:-1,role:"tab",onClick:o=>B(n)},e.toDisplayString(t.cqItems[a]["cq:panelTitle"]),11,fe))),128))],10,be)),b.value?e.createCommentVNode("",!0):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(y.value,(a,n)=>(e.openBlock(),e.createElementBlock("div",{id:`${t.cqItems[t.cqItemsOrder[n]].id}-tabpanel`,key:`tab-content-${n}`,"aria-hidden":n===g.value?void 0:!0,"aria-labelledby":`${t.cqItems[t.cqItemsOrder[n]].id}-tab`,class:e.normalizeClass([`${t.baseCssClass}__tabpanel`,{[`${t.baseCssClass}__tabpanel--active`]:n===g.value}]),role:"tabpanel",tabindex:"0"},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(a),e.normalizeProps(e.guardReactiveProps({isInEditor:!1})),null,16))],10,_e))),128)),e.unref(l)?(e.openBlock(),e.createBlock(e.unref(i.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:2},N.value)),null,16)):e.createCommentVNode("",!0)],16,Ce))}});p.AccordionEditConfig=K,p.CarouselEditConfig=V,p.ContainerEditConfig=G,p.ContentFragmentEditConfig=H,p.CoreAccordion=oe,p.CoreCarousel=me,p.CoreContainer=R,p.CoreContentFragment=v,p.CoreExperienceFragment=pe,p.CoreTabs=ye,p.DefaultContentFragment=F,p.ExperienceFragmentEditConfig=W,p.MapToContentFragmentModel=Q,p.SpaUtils=$,p.TabsEditConfig=X,p.getRenderer=x,p.mapRenderer=z,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
