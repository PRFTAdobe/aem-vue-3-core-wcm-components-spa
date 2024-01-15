(function(b,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("aem-vue-3-editable-components"),require("vue"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","aem-vue-3-editable-components","vue","@adobe/aem-spa-page-model-manager"],i):(b=typeof globalThis<"u"?globalThis:b||self,i(b.aemVueCoreWcmComponentsSpa={},b.AemVueEditableComponents,b.Vue,b.AemSpaPageModelManager))})(this,function(b,i,e,z){"use strict";const W={emptyLabel:"Accordion",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},X={emptyLabel:"Carousel",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},J={emptyLabel:"Container",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},Q={emptyLabel:"Content Fragment",isEmpty(s){return s.elementsOrder.length===0&&s.cqItemsOrder.length===0}},Y={emptyLabel:"Experience Fragment",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},Z={emptyLabel:"Tabs",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},v="ContentFragment-",R=s=>v+s,F=(s,t)=>{s&&t&&(typeof s=="string"?[s]:s).forEach(I=>{i.MapTo(R(I))(t)})},j=s=>{const t=R(s);return i.ComponentMapping.get(t)},ee=s=>t=>F(s,t),T=e.defineComponent({inheritAttrs:!1,__name:"CoreContainer",props:{accessibilityLabel:{type:String},backgroundStyle:{type:String},cqPath:{type:String,default:""},isInEditor:{type:Boolean,default:void 0},layout:{type:String,default:"RESPONSIVE_GRID",validator:s=>["RESPONSIVE_GRID","SIMPLE"].includes(s)},roleAttribute:{type:String},styleSystemElement:{type:String,default:"div"},...i.componentProperties("cmp-container")},setup(s){const t=s,r=e.useAttrs(),I=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",z.AuthoringUtils.isInEditor()),c=e.computed(()=>i.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,I,t.aemNoDecoration)),m=e.computed(()=>{var g;return I&&(r==null?void 0:r.allowedComponents)&&((g=r==null?void 0:r.allowedComponents)==null?void 0:g.applicable)});return(g,P)=>m.value?(e.openBlock(),e.createBlock(e.unref(i.AllowedComponentsContainer),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(r)})),null,16)):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.styleSystemElement||"div"),{key:1,id:t.id,"aria-label":t.accessibilityLabel,class:e.normalizeClass(c.value),role:t.roleAttribute,style:e.normalizeStyle(t.backgroundStyle)},{default:e.withCtx(()=>[s.layout==="RESPONSIVE_GRID"?(e.openBlock(),e.createBlock(e.unref(i.ResponsiveGrid),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(r),allowedComponents:{applicable:!1,components:[]},title:""})),null,16)):(e.openBlock(),e.createBlock(e.unref(i.Container),e.normalizeProps(e.mergeProps({key:1},{...t,...e.unref(r)})),null,16))]),_:1},8,["id","aria-label","class","role","style"]))}}),te=["id"],se=["innerHTML"],U=e.defineComponent({inheritAttrs:!1,__name:"DefaultContentFragment",props:{cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},description:{type:String},elements:{type:Object,default:()=>({})},elementsOrder:{type:Array,default:()=>[]},isInEditor:{type:Boolean,default:void 0},model:{type:String},title:{type:String},...i.componentProperties("cmp-contentfragment")},setup(s){const t=s,r=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",z.AuthoringUtils.isInEditor()),I=e.inject("componentMapping",new i.ComponentMapping),c=e.computed(()=>i.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,r,t.aemNoDecoration)),m=e.computed(()=>i.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,I));return(g,P)=>{var A;return e.openBlock(),e.createElementBlock("div",{id:t.id,class:e.normalizeClass(c.value)},[e.createElementVNode("h3",{class:e.normalizeClass(`${t.baseCssClass}__title`)},e.toDisplayString(t.title),3),t.description?(e.openBlock(),e.createElementBlock("p",{key:0,class:e.normalizeClass(`${t.baseCssClass}__description`)},e.toDisplayString(t.description),3)):e.createCommentVNode("",!0),(A=t.elementsOrder)!=null&&A.length?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(`${t.baseCssClass}__elements`)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.elementsOrder,(h,N)=>(e.openBlock(),e.createElementBlock("div",{key:`${t.id}-element-${h}-${N}`,class:e.normalizeClass(`${t.baseCssClass}__element`)},[e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--key`])},[e.createElementVNode("h4",null,e.toDisplayString(h),1)],2),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--value`]),innerHTML:`value: ${t.elements[h].value}`},null,10,se),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--datatype`])}," datatype: "+e.toDisplayString(t.elements[h].dataType),3),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--multivalue`])}," multivalue: "+e.toDisplayString(t.elements[h].multiValue?"true":"false"),3),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--type`])}," type: "+e.toDisplayString(t.elements[h][":type"]),3)],2))),128))],2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m.value,h=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(h),{key:h.toString()}))),128))],10,te)}}}),ae=e.defineComponent({inheritAttrs:!1,__name:"CoreContentFragment",props:{cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},description:{type:String},elements:{type:Object,default:()=>({})},elementsOrder:{type:Array,default:()=>[]},isInEditor:{type:Boolean,default:void 0},model:{type:String},title:{type:String},...i.componentProperties("cmp-contentfragment")},setup(s){const t=s,r=e.useAttrs(),I=e.computed(()=>t.elementsOrder.length===0&&t.cqItemsOrder.length===0),c=e.computed(()=>{const m=j(t.model);return m||U});return(m,g)=>I.value?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(c.value),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(r)})),null,16))}}),B={initMessageChannel(){return this.isBrowser()&&window.Granite&&window.Granite.author&&window.Granite.author.MessageChannel?new window.Granite.author.MessageChannel("cqauthor",window):null},isBrowser(){try{return typeof window<"u"}catch{return!1}},subscribeRequestMessage(s,t){s&&s.subscribeRequestMessage("cmp.panelcontainer",t)},unsubscribeRequestMessage(s,t){s&&s.unsubscribeRequestMessage("cmp.panelcontainer",t)}},ne=["id"],oe=["id","data-cmp-expanded"],le=["id","aria-controls","aria-expanded","onClick","onKeydown"],ie=[e.createElementVNode("svg",{fill:"var(--accordion-heading-color)",height:"18",viewBox:"0 0 24 24",width:"18",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})],-1)],re=["id","aria-hidden","aria-labelledby"],ce=e.defineComponent({inheritAttrs:!1,__name:"CoreAccordion",props:{cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},expandedItems:{type:Array,default:()=>[]},headingElement:{type:String,default:"h3"},isInEditor:{type:Boolean,default:void 0},singleExpansion:{type:Boolean,default:void 0},...i.componentProperties("cmp-accordion")},setup(s){const t=s,r=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",z.AuthoringUtils.isInEditor()),I=e.inject("componentMapping",new i.ComponentMapping),c=e.ref(null),m=B.initMessageChannel(),g=e.computed(()=>i.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,I)),P=e.computed(()=>i.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,r,t.aemNoDecoration)),A=e.computed(()=>!t.cqItemsOrder||(t==null?void 0:t.cqItemsOrder.length)===0),h=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")})),N=e.computed(()=>{const a={class:"aem-container","data-panelcontainer":"accordion"};return r&&(a["data-cq-data-path"]=t.cqPath),a}),D=()=>{let a=[];if(c.value){const C=c.value.querySelectorAll(`.${t.baseCssClass}__item[data-cmp-expanded]`);a=Array.from(C)}return a},L=a=>{if(c.value){const p=c.value,C=p.querySelectorAll(`.${t.baseCssClass}__item`),l=Array.from(C).indexOf(a);if(l>-1){const q=p.querySelectorAll(`.${t.baseCssClass}__button`);q[l].classList.add(`${t.baseCssClass}__button--expanded`),q[l].setAttribute("aria-expanded","true");const S=p.querySelectorAll(`.${t.baseCssClass}__panel`);S[l].classList.add(`${t.baseCssClass}__panel--expanded`),S[l].classList.remove(`${t.baseCssClass}__panel--hidden`),S[l].setAttribute("aria-hidden","false")}}},w=a=>{if(c.value){const p=c.value,C=p.querySelectorAll(`.${t.baseCssClass}__item`),l=Array.from(C).indexOf(a);if(l>-1){const q=p.querySelectorAll(`.${t.baseCssClass}__button`);q[l].classList.remove(`${t.baseCssClass}__button--expanded`),q[l].removeAttribute("aria-expanded");const S=p.querySelectorAll(`.${t.baseCssClass}__panel`);S[l].classList.remove(`${t.baseCssClass}__panel--expanded`),S[l].classList.add(`${t.baseCssClass}__panel--hidden`),S[l].setAttribute("aria-hidden","true")}}},$=a=>{c.value&&c.value.querySelectorAll(`.${t.baseCssClass}__button`)[a].focus()},O=()=>{if(c.value){const p=c.value.querySelectorAll(`.${t.baseCssClass}__button`);$(p.length-1)}},M=a=>{a>0&&$(a-1)},x=a=>{if(c.value){const C=c.value.querySelectorAll(`.${t.baseCssClass}__button`);a<C.length-1&&$(a+1)}},d=a=>{a.hasAttribute("data-cmp-expanded")?L(a):w(a)},u=(a,p)=>{p?a.setAttribute("data-cmp-expanded",""):a.removeAttribute("data-cmp-expanded"),d(a)},y=a=>{if(c.value){const C=c.value.querySelectorAll(`.${t.baseCssClass}__item`),l=C[a];l&&(t.singleExpansion===!0&&C.forEach(q=>{q!==l&&q.hasAttribute("data-cmp-expanded")&&u(q,!1)}),u(l,!l.hasAttribute("data-cmp-expanded")))}},f=(a,p=t.cqPath)=>{a.data&&a.data.id===p&&a.data.operation==="navigate"&&y(a.data.index)};return e.onMounted(()=>{if(t.singleExpansion===!0){const a=D();a.length>1&&y(a.length-1)}B.subscribeRequestMessage(m,f)}),e.onUnmounted(()=>{B.unsubscribeRequestMessage(m,f)}),(a,p)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,ref_key:"accordionContainer",ref:c,class:P.value},N.value),[A.value?e.createCommentVNode("",!0):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(t.cqItemsOrder,(C,l)=>(e.openBlock(),e.createElementBlock("div",{id:`accordion-${t.cqItems[C].id}`,key:`accordion-index-${l}`,class:e.normalizeClass(`${t.baseCssClass}__item`),"data-cmp-expanded":t.expandedItems.includes(C)?!0:void 0,"data-cmp-hook-accordion":"item"},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.headingElement),{class:e.normalizeClass(`${t.baseCssClass}__heading`)},{default:e.withCtx(()=>[e.createElementVNode("button",{id:`accordion-${t.cqItems[C].id}-button`,"aria-controls":`accordion-${t.cqItems[C].id}-panel`,"aria-expanded":t.expandedItems.includes(C)?"true":void 0,class:e.normalizeClass([`${t.baseCssClass}__button`,{[`${t.baseCssClass}__button--expanded`]:t.expandedItems.includes(C)}]),"data-cmp-hook-accordion":"button",type:"button",onClick:()=>{y(l),$(l)},onKeydown:[e.withKeys(q=>M(l),["left"]),e.withKeys(q=>M(l),["up"]),e.withKeys(q=>x(l),["right"]),e.withKeys(q=>x(l),["down"]),p[0]||(p[0]=e.withKeys(q=>$(0),["home"])),e.withKeys(O,["end"]),e.withKeys(e.withModifiers(()=>{y(l),$(l)},["prevent"]),["enter"]),e.withKeys(e.withModifiers(()=>{y(l),$(l)},["prevent"]),["space"])]},[e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__title`)},e.toDisplayString(t.cqItems[C]["cq:panelTitle"]),3),e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__icon`)},ie,2)],42,le)]),_:2},1032,["class"])),e.createElementVNode("div",{id:`accordion-${t.cqItems[C].id}-panel`,"aria-hidden":t.expandedItems.includes(C)?void 0:"true","aria-labelledby":`accordion-${t.cqItems[C].id}-button`,class:e.normalizeClass([`${t.baseCssClass}__panel`,{[`${t.baseCssClass}__panel--expanded`]:t.expandedItems.includes(C)},{[`${t.baseCssClass}__panel--hidden`]:!t.expandedItems.includes(C)}]),"data-cmp-hook-accordion":"panel",role:"region"},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(g.value[s.cqItemsOrder.indexOf(C)]),e.normalizeProps(e.guardReactiveProps({isInEditor:!1})),null,16))],10,re)],10,oe))),128)),s.isInEditor?(e.openBlock(),e.createBlock(e.unref(i.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:1},h.value)),null,16)):e.createCommentVNode("",!0)],16,ne))}}),de=["id"],me=["aria-live","onKeydown"],pe=["id","aria-hidden","aria-label","aria-labelledby"],Ce=["aria-label"],be=["id","aria-controls","aria-label","aria-selected","onClick"],ye=e.defineComponent({inheritAttrs:!1,__name:"CoreCarousel",props:{accessibility:{type:Object,default:()=>({slide:"Slide {0} of {1}",indicator:"Slide {0}"})},accessibilityLabel:{type:String,default:"Carousel"},accessibilityNext:{type:String,default:"Next"},accessibilityPause:{type:String,default:"Pause"},accessibilityPlay:{type:String,default:"Play"},accessibilityPrevious:{type:String,default:"Previous"},accessibilityTablist:{type:String,default:"Choose a slide to display"},activeItem:{type:String},autopauseDisabled:{type:Boolean,default:!1},cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},controlsPrepended:{type:Boolean,default:!1},delay:{type:Number,default:5e3},isInEditor:{type:Boolean,default:void 0},...i.componentProperties("cmp-carousel")},setup(s){const t=s,r=e.useAttrs(),I=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",z.AuthoringUtils.isInEditor()),c=e.inject("componentMapping",new i.ComponentMapping),m=e.ref(t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),g=e.ref(null),P=e.ref(-1),A=B.initMessageChannel(),h=e.ref((r==null?void 0:r.autoplay)===!0&&!I),N=e.computed(()=>i.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,c)),D=e.computed(()=>i.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,I,t.aemNoDecoration)),L=e.computed(()=>{const n={"aria-label":t.accessibilityLabel,"aria-live":"polite","aria-roledescription":"carousel",class:"aem-container","data-panelcontainer":"carousel",role:"group"};return I&&(n["data-cq-data-path"]=t.cqPath),n}),w=n=>{if(g.value){const _=g.value,E=_.querySelectorAll(`.${t.baseCssClass}__item`),k=_.querySelectorAll(`.${t.baseCssClass}__indicator`);n<0&&(n=E.length-1),n>=E.length&&(n=0),E.length&&E.forEach((o,K)=>{K===n?(o.classList.add(`${t.baseCssClass}__item--active`),o.removeAttribute("aria-hidden")):(o.classList.remove(`${t.baseCssClass}__item--active`),o.setAttribute("aria-hidden","true"))}),k.length&&k.forEach((o,K)=>{K===n?(o.classList.add(`${t.baseCssClass}__indicator--active`),o.setAttribute("aria-selected","true"),o.setAttribute("tabindex","0")):(o.classList.remove(`${t.baseCssClass}__indicator--active`),o.removeAttribute("aria-selected"),o.setAttribute("tabindex","-1"))})}},$=()=>{let n=0;if(g.value){const _=g.value,E=_.querySelectorAll(`.${t.baseCssClass}__item`),k=_.querySelector(`.${t.baseCssClass}__item--active`);n=Array.from(E).indexOf(k)}return n},O=n=>{w(n),g.value&&g.value.querySelectorAll(`.${t.baseCssClass}__item`)[n].focus()},M=()=>{const n=$();w(n+1)},x=()=>{const n=$();w(n-1)},d=()=>{if(!h.value||t.cqItemsOrder.length<=1)return;const n=$();w(n+1)},u=()=>{P.value=setInterval(()=>{d()},t.delay)},y=()=>{clearInterval(P.value)},f=n=>{h.value=n},a=e.computed(()=>{const n=e.h("button",{"aria-label":t.accessibilityPrevious,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--previous`],type:"button",onClick:()=>{x()}},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e.h("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}))]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityPrevious])]),_=e.h("button",{"aria-label":t.accessibilityNext,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--next`],type:"button",onClick:()=>{M()}},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e.h("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}))]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityNext])]),E=e.h("button",{"aria-label":t.accessibilityPause,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--pause`,{[`${t.baseCssClass}__action--disabled`]:!h.value}],type:"button",onClick:()=>{f(!1)}},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e.h("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})])]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityPause])]),k=e.h("button",{"aria-label":t.accessibilityPlay,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--play`,{[`${t.baseCssClass}__action--disabled`]:h.value}],type:"button",onClick:()=>{f(!0)}},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e.h("path",{d:"M8 5v14l11-7z"})])]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityPlay])]),o=[n,_];return(r==null?void 0:r.autoplay)===!0&&(o.push(E),o.push(k)),e.h("div",{class:`${t.baseCssClass}__actions`},o)}),p=e.computed(()=>!t.cqItemsOrder||(t==null?void 0:t.cqItemsOrder.length)===0),C=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")})),l=n=>{var k;let _=((k=t.accessibility)==null?void 0:k.indicator)||"";const E="{0}";return _=_.replace(E,(n+1).toString()),_},q=n=>{var o;let _=((o=t.accessibility)==null?void 0:o.slide)||"";const E="{0}";_=_.replace(E,(n+1).toString());const k="{1}";return _=_.replace(k,t.cqItemsOrder.length.toString()),_},S=n=>{w(n)},$e=()=>{!t.autopauseDisabled&&h.value&&y()},qe=()=>{!t.autopauseDisabled&&h.value&&u()},Ee=()=>{if(g.value){const _=g.value.querySelectorAll(`.${t.baseCssClass}__item`);O(_.length-1)}},V=()=>{const n=$();O(n-1)},G=()=>{const n=$();O(n+1)},H=(n,_=t.cqPath)=>{n.data&&n.data.id===_&&n.data.operation==="navigate"&&w(n.data.index)};return e.onMounted(()=>{u(),B.subscribeRequestMessage(A,H)}),e.onUnmounted(()=>{typeof P.value=="number"&&P.value>=0&&y(),B.unsubscribeRequestMessage(A,H)}),e.watchEffect(()=>m.value=t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),(n,_)=>{var E;return e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,ref_key:"carouselContainer",ref:g,class:D.value},L.value),[t.controlsPrepended?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(a.value),{key:0})):e.createCommentVNode("",!0),p.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",{key:1,"aria-live":((E=e.unref(r))==null?void 0:E.autoplay)===!0?"off":"polite",class:e.normalizeClass(`${t.baseCssClass}__content`),"aria-atomic":"false",onMouseenter:$e,onMouseleave:qe,onKeydown:[e.withKeys(V,["left"]),e.withKeys(V,["up"]),e.withKeys(G,["right"]),e.withKeys(G,["down"]),_[0]||(_[0]=e.withKeys(k=>O(0),["home"])),e.withKeys(Ee,["end"])]},[e.createElementVNode("div",{class:e.normalizeClass([{[`${t.baseCssClass}__items`]:!e.unref(I)}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(N.value,(k,o)=>(e.openBlock(),e.createElementBlock("div",{id:`${t.cqItems[t.cqItemsOrder[o]].id}-tabpanel`,key:`item-${o}`,"aria-hidden":o===m.value?void 0:!0,"aria-label":q(o),"aria-labelledby":`${t.cqItems[t.cqItemsOrder[o]].id}-tab`,class:e.normalizeClass([`${t.baseCssClass}__item`,{[`${t.baseCssClass}__item--active`]:o===m.value}]),"aria-roledescription":"slide","data-cmp-hook-carousel":"item",role:"tabpanel"},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(k),e.normalizeProps(e.guardReactiveProps({isInEditor:!1})),null,16))],10,pe))),128))],2),t.controlsPrepended?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(a.value),{key:0})),e.createElementVNode("ol",{"aria-label":t.accessibilityTablist,class:e.normalizeClass(`${t.baseCssClass}__indicators`),role:"tablist"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.cqItemsOrder,(k,o)=>(e.openBlock(),e.createElementBlock("li",{id:`${t.cqItems[t.cqItemsOrder[o]].id}-tab`,key:`item-${o}`,"aria-controls":`${t.cqItems[t.cqItemsOrder[o]].id}-tabpanel`,"aria-label":l(o),"aria-selected":o===m.value?!0:void 0,class:e.normalizeClass([`${t.baseCssClass}__indicator`,{[`${t.baseCssClass}__indicator--active`]:o===m.value}]),role:"tab",onClick:K=>S(o)},e.toDisplayString(t.cqItems[k]["cq:panelTitle"]),11,be))),128))],10,Ce)],42,me)),e.unref(I)?(e.openBlock(),e.createBlock(e.unref(i.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:2},C.value)),null,16)):e.createCommentVNode("",!0)],16,de)}}}),_e=e.defineComponent({__name:"CoreExperienceFragment",setup(s){return(t,r)=>(e.openBlock(),e.createBlock(T,{"is-in-editor":!1}))}}),fe=["id","onKeydown"],he=["aria-label"],ge=["id","aria-controls","aria-selected","tabIndex","onClick"],ue=["id","aria-hidden","aria-labelledby"],Ie=e.defineComponent({inheritAttrs:!1,__name:"CoreTabs",props:{activeItem:{type:String},accessibilityLabel:{type:String},cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},isInEditor:{type:Boolean,default:void 0},...i.componentProperties("cmp-tabs")},setup(s){const t=s,r=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",z.AuthoringUtils.isInEditor()),I=e.inject("componentMapping",new i.ComponentMapping),c=e.ref(t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),m=e.ref(null),g=B.initMessageChannel(),P=e.computed(()=>i.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,I)),A=e.computed(()=>i.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,r,t.aemNoDecoration)),h=e.computed(()=>!t.cqItemsOrder||(t==null?void 0:t.cqItemsOrder.length)===0),N=e.computed(()=>{const d={class:"aem-container","data-panelcontainer":"tabs"};return r&&(d["data-cq-data-path"]=t.cqPath),d}),D=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")})),L=d=>{if(m.value){const u=m.value,y=u.querySelectorAll(`.${t.baseCssClass}__tab`),f=u.querySelectorAll(`.${t.baseCssClass}__tabpanel`);d<0&&(d=y.length-1),d>=y.length&&(d=0),y.length&&y.forEach((a,p)=>{p===d?(a.classList.add(`${t.baseCssClass}__tab--active`),a.setAttribute("aria-selected","true"),a.setAttribute("tabindex","0")):(a.classList.remove(`${t.baseCssClass}__tab--active`),a.removeAttribute("aria-selected"),a.setAttribute("tabindex","-1"))}),f.length&&f.forEach((a,p)=>{p===d?(a.classList.add(`${t.baseCssClass}__tabpanel--active`),a.removeAttribute("aria-hidden")):(a.classList.remove(`${t.baseCssClass}__tabpanel--active`),a.setAttribute("aria-hidden","true"))})}},w=d=>{L(d),m.value&&m.value.querySelectorAll(`.${t.baseCssClass}__tabpanel`)[d].focus()},$=(d,u=t.cqPath)=>{d.data&&d.data.id===u&&d.data.operation==="navigate"&&L(d.data.index)},O=()=>{if(m.value){const u=m.value.querySelectorAll(`.${t.baseCssClass}__tab`);w(u.length-1)}},M=()=>{if(m.value){const d=m.value,u=d.querySelectorAll(`.${t.baseCssClass}__tab`),y=d.querySelector(`.${t.baseCssClass}__tab--active`),f=Array.from(u).indexOf(y);w(f-1)}},x=()=>{if(m.value){const d=m.value,u=d.querySelectorAll(`.${t.baseCssClass}__tab`),y=d.querySelector(`.${t.baseCssClass}__tab--active`),f=Array.from(u).indexOf(y);w(f+1)}};return e.onMounted(()=>{B.subscribeRequestMessage(g,$)}),e.onUnmounted(()=>{B.unsubscribeRequestMessage(g,$)}),e.watchEffect(()=>c.value=t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),(d,u)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,ref_key:"tabContainer",ref:m,class:A.value},N.value,{onKeydown:[e.withKeys(M,["left"]),e.withKeys(M,["up"]),e.withKeys(x,["right"]),e.withKeys(x,["down"]),u[0]||(u[0]=e.withKeys(y=>w(0),["home"])),e.withKeys(O,["end"])]}),[h.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("ol",{key:0,"aria-label":t.accessibilityLabel,class:e.normalizeClass(`${t.baseCssClass}__tablist`),"aria-multiselectable":"false",role:"tablist"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.cqItemsOrder,(y,f)=>(e.openBlock(),e.createElementBlock("li",{id:`${t.cqItems[y].id}-tab`,key:`tab-${f}`,"aria-controls":`${t.cqItems[y].id}-tabpanel`,"aria-selected":f===c.value?!0:void 0,class:e.normalizeClass([`${t.baseCssClass}__tab`,{[`${t.baseCssClass}__tab--active`]:f===c.value}]),tabIndex:f===c.value?0:-1,role:"tab",onClick:a=>L(f)},e.toDisplayString(t.cqItems[y]["cq:panelTitle"]),11,ge))),128))],10,he)),h.value?e.createCommentVNode("",!0):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(P.value,(y,f)=>(e.openBlock(),e.createElementBlock("div",{id:`${t.cqItems[t.cqItemsOrder[f]].id}-tabpanel`,key:`tab-content-${f}`,"aria-hidden":f===c.value?void 0:!0,"aria-labelledby":`${t.cqItems[t.cqItemsOrder[f]].id}-tab`,class:e.normalizeClass([`${t.baseCssClass}__tabpanel`,{[`${t.baseCssClass}__tabpanel--active`]:f===c.value}]),role:"tabpanel",tabindex:"0"},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(y),e.normalizeProps(e.guardReactiveProps({isInEditor:!1})),null,16))],10,ue))),128)),e.unref(r)?(e.openBlock(),e.createBlock(e.unref(i.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:2},D.value)),null,16)):e.createCommentVNode("",!0)],16,fe))}});b.AccordionEditConfig=W,b.CarouselEditConfig=X,b.ContainerEditConfig=J,b.ContentFragmentEditConfig=Q,b.CoreAccordion=ce,b.CoreCarousel=ye,b.CoreContainer=T,b.CoreContentFragment=ae,b.CoreExperienceFragment=_e,b.CoreTabs=Ie,b.DefaultContentFragment=U,b.ExperienceFragmentEditConfig=Y,b.MapToContentFragmentModel=ee,b.SpaUtils=B,b.TabsEditConfig=Z,b.getRenderer=j,b.mapRenderer=F,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
