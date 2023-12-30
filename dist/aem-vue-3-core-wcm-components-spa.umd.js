(function(l,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("aem-vue-3-editable-components"),require("vue"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","aem-vue-3-editable-components","vue","@adobe/aem-spa-page-model-manager"],n):(l=typeof globalThis<"u"?globalThis:l||self,n(l.aemVueCoreWcmComponentsSpa={},l.AemVueEditableComponents,l.Vue,l.AemSpaPageModelManager))})(this,function(l,n,e,E){"use strict";const x={emptyLabel:"Accordion",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},D={emptyLabel:"Carousel",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},L={emptyLabel:"Container",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},M={emptyLabel:"Content Fragment",isEmpty(s){return s.elementsOrder.length===0&&s.cqItemsOrder.length===0}},F={emptyLabel:"Experience Fragment",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},R={emptyLabel:"Tabs",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},j="ContentFragment-",w=s=>j+s,N=(s,t)=>{s&&t&&(typeof s=="string"?[s]:s).forEach(r=>{n.MapTo(w(r))(t)})},S=s=>{const t=w(s);return n.ComponentMapping.get(t)},T=s=>t=>N(s,t),A=e.defineComponent({inheritAttrs:!1,__name:"CoreContainer",props:{accessibilityLabel:{type:String},backgroundStyle:{type:String},cqPath:{type:String,default:""},isInEditor:{type:Boolean,default:void 0},layout:{type:String,default:"RESPONSIVE_GRID",validator:s=>["RESPONSIVE_GRID","SIMPLE"].includes(s)},roleAttribute:{type:String},styleSystemElement:{type:String,default:"div"},...n.componentProperties("cmp-container")},setup(s){const t=s,a=e.useAttrs(),r=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",E.AuthoringUtils.isInEditor()),y=e.computed(()=>n.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,r,t.aemNoDecoration)),p=e.computed(()=>{var h;return r&&(a==null?void 0:a.allowedComponents)&&((h=a==null?void 0:a.allowedComponents)==null?void 0:h.applicable)});return(h,C)=>p.value?(e.openBlock(),e.createBlock(e.unref(n.AllowedComponentsContainer),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(a)})),null,16)):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.styleSystemElement||"div"),{key:1,id:t.id,"aria-label":t.accessibilityLabel,class:e.normalizeClass(y.value),role:t.roleAttribute,style:e.normalizeStyle(t.backgroundStyle)},{default:e.withCtx(()=>[s.layout==="RESPONSIVE_GRID"?(e.openBlock(),e.createBlock(e.unref(n.ResponsiveGrid),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(a),allowedComponents:{applicable:!1,components:[]},title:""})),null,16)):(e.openBlock(),e.createBlock(e.unref(n.Container),e.normalizeProps(e.mergeProps({key:1},{...t,...e.unref(a)})),null,16))]),_:1},8,["id","aria-label","class","role","style"]))}}),U=["id"],V=["innerHTML"],z=e.defineComponent({inheritAttrs:!1,__name:"DefaultContentFragment",props:{cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},description:{type:String},elements:{type:Object,default:()=>({})},elementsOrder:{type:Array,default:()=>[]},isInEditor:{type:Boolean,default:void 0},model:{type:String},title:{type:String},...n.componentProperties("cmp-contentfragment")},setup(s){const t=s,a=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",E.AuthoringUtils.isInEditor()),r=e.inject("componentMapping",new n.ComponentMapping),y=e.computed(()=>n.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,a,t.aemNoDecoration)),p=e.computed(()=>n.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,r));return(h,C)=>{var k;return e.openBlock(),e.createElementBlock("div",{id:t.id,class:e.normalizeClass(y.value)},[e.createElementVNode("h3",{class:e.normalizeClass(`${t.baseCssClass}__title`)},e.toDisplayString(t.title),3),t.description?(e.openBlock(),e.createElementBlock("p",{key:0,class:e.normalizeClass(`${t.baseCssClass}__description`)},e.toDisplayString(t.description),3)):e.createCommentVNode("",!0),(k=t.elementsOrder)!=null&&k.length?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(`${t.baseCssClass}__elements`)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.elementsOrder,(m,q)=>(e.openBlock(),e.createElementBlock("div",{key:`${t.id}-element-${m}-${q}`,class:e.normalizeClass(`${t.baseCssClass}__element`)},[e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--key`])},[e.createElementVNode("h4",null,e.toDisplayString(m),1)],2),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--value`]),innerHTML:`value: ${t.elements[m].value}`},null,10,V),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--datatype`])}," datatype: "+e.toDisplayString(t.elements[m].dataType),3),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--multivalue`])}," multivalue: "+e.toDisplayString(t.elements[m].multiValue?"true":"false"),3),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--type`])}," type: "+e.toDisplayString(t.elements[m][":type"]),3)],2))),128))],2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(p.value,m=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(m),{key:m.toString()}))),128))],10,U)}}}),G=e.defineComponent({inheritAttrs:!1,__name:"CoreContentFragment",props:{cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},description:{type:String},elements:{type:Object,default:()=>({})},elementsOrder:{type:Array,default:()=>[]},isInEditor:{type:Boolean,default:void 0},model:{type:String},title:{type:String},...n.componentProperties("cmp-contentfragment")},setup(s){const t=s,a=e.useAttrs(),r=e.computed(()=>t.elementsOrder.length===0&&t.cqItemsOrder.length===0),y=e.computed(()=>{const p=S(t.model);return p||z});return(p,h)=>r.value?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(y.value),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(a)})),null,16))}}),P={createCallbackListener(s,t){return(a,r=s)=>{a.data&&a.data.id===r&&a.data.operation==="navigate"&&(t.value=a.data.index)}},initMessageChannel(){return this.isBrowser()&&window.Granite&&window.Granite.author&&window.Granite.author.MessageChannel?new window.Granite.author.MessageChannel("cqauthor",window):null},isBrowser(){try{return typeof window<"u"}catch{return!1}},subscribeRequestMessage(s,t){s&&s.subscribeRequestMessage("cmp.panelcontainer",t)},unsubscribeRequestMessage(s,t){s&&s.unsubscribeRequestMessage("cmp.panelcontainer",t)}},H=["id","data-cmp-single-expansion"],K=["id","data-cmp-expanded"],W=["id","aria-controls","data-cmp-button-id","onClick","onKeydown"],X=[e.createElementVNode("svg",{fill:"var(--accordion-heading-color)",height:"18",viewBox:"0 0 24 24",width:"18",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})],-1)],J=["id","aria-labelledby"],Q=e.defineComponent({inheritAttrs:!1,__name:"CoreAccordion",props:{cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},expandedItems:{type:Array,default:()=>[]},headingElement:{type:String,default:"h3"},...n.componentProperties("cmp-accordion")},setup(s){const t=s,a=e.useAttrs(),r=e.inject("isInEditor",E.AuthoringUtils.isInEditor()),y=e.inject("componentMapping",new n.ComponentMapping),p=e.ref(P.initMessageChannel()),h=e.ref(-1),C=e.ref(t.expandedItems),k=e.ref(null),m=e.computed(()=>(a==null?void 0:a.singleExpansion)===!0),q=e.computed(()=>{const o={};return r&&(o["data-panelcontainer"]="accordion",o["data-cq-data-path"]=t.cqPath||"",o["data-placeholder-text"]="Please drag Accordion item components here"),o}),O=e.computed(()=>n.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,y)),B=e.computed(()=>n.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,r,t.aemNoDecoration)),b=o=>{const d=k.value.querySelector(`button[data-cmp-button-id="${o}"]`);d&&d.focus()},g=(o,d)=>{const c=C.value.indexOf(o)>-1;if(m.value)C.value=c?[]:[o];else if(c){const $=C.value.indexOf(o);C.value.splice($,1)}else C.value.push(o);d.target.focus()},_=(o,d,c)=>{const $=k.value.querySelectorAll("button").length-1;switch(d.code){case"ArrowLeft":case"ArrowUp":d.preventDefault(),c>0&&b(c-1);break;case"ArrowRight":case"ArrowDown":d.preventDefault(),c<$&&b(c+1);break;case"Home":d.preventDefault(),b(0);break;case"End":d.preventDefault(),b($);break;case"Enter":case"Space":d.preventDefault(),g(o,d),b(c);break}},f=o=>C.value.indexOf(o)>-1,I=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")}));e.watch(m,async(o,d)=>{o!==d&&(C.value=t.expandedItems)}),e.watch(t.expandedItems,async(o,d)=>{o!==d&&(C.value=o)}),e.watch(h,async(o,d)=>{o!==-1&&typeof o<"u"&&o!==d&&t.cqItemsOrder&&(C.value=[t.cqItemsOrder[o]])});const i=P.createCallbackListener(t.cqPath,h);return e.onMounted(()=>{P.subscribeRequestMessage(p.value,i)}),e.onUnmounted(()=>{P.unsubscribeRequestMessage(p.value,i)}),(o,d)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,ref_key:"accordion",ref:k,class:B.value,"data-cmp-single-expansion":m.value===!0?!0:void 0},q.value),[t.cqItemsOrder&&(t==null?void 0:t.cqItemsOrder.length)>0&&t.cqItems?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(t.cqItemsOrder,(c,$)=>(e.openBlock(),e.createElementBlock("div",{id:`accordion-${t.cqItems[c].id}`,key:`accordion-index-${$}`,class:e.normalizeClass(`${t.baseCssClass}__item`),"data-cmp-expanded":f(c)?!0:void 0},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.headingElement),{class:e.normalizeClass(`${t.baseCssClass}__heading`)},{default:e.withCtx(()=>[e.createElementVNode("button",{id:`accordion-${t.cqItems[c].id}-button`,"aria-controls":`accordion-${t.cqItems[c].id}-panel`,class:e.normalizeClass([`${t.baseCssClass}__button`,{[`${t.baseCssClass}__button--expanded`]:f(c)}]),"data-cmp-button-id":$,onClick:u=>g(c,u),onKeydown:u=>_(c,u,$)},[e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__title`)},e.toDisplayString(t.cqItems[c]["cq:panelTitle"]),3),e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__icon`)},X,2)],42,W)]),_:2},1032,["class"])),e.unref(r)||f(c)?(e.openBlock(),e.createElementBlock("div",{key:0,id:`accordion-${t.cqItems[c].id}-panel`,"aria-labelledby":`accordion-${t.cqItems[c].id}-button`,class:e.normalizeClass(`${t.baseCssClass}__panel ${f(c)?" "+t.baseCssClass+"__panel--expanded":" "+t.baseCssClass+"__panel--hidden"}`),role:"region"},[t.cqItemsOrder?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(O.value[s.cqItemsOrder.indexOf(c)]),{key:0})):e.createCommentVNode("",!0)],10,J)):e.createCommentVNode("",!0)],10,K))),128)):e.createCommentVNode("",!0),e.unref(r)?(e.openBlock(),e.createBlock(e.unref(n.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:1},I.value)),null,16)):e.createCommentVNode("",!0)],16,H))}}),Y=["id"],Z=["aria-live"],v=["id","aria-label","aria-labelledby"],ee=["aria-label"],te=["id","aria-controls","aria-label"],se=e.defineComponent({inheritAttrs:!1,__name:"CoreCarousel",props:{accessibility:{type:Object,default:()=>({slide:"Slide {0} of {1}",indicator:"Slide {0}"})},accessibilityLabel:{type:String,default:"Carousel"},accessibilityNext:{type:String,default:"Next"},accessibilityPause:{type:String,default:"Pause"},accessibilityPlay:{type:String,default:"Play"},accessibilityPrevious:{type:String,default:"Previous"},accessibilityTablist:{type:String,default:"Choose a slide to display"},activeItem:{type:String},autopauseDisabled:{type:Boolean,default:!1},cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},controlsPrepended:{type:Boolean,default:!1},delay:{type:Number,default:5e3},isInEditor:{type:Boolean,default:void 0},...n.componentProperties("cmp-carousel")},setup(s){const t=s,a=e.useAttrs(),r=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",E.AuthoringUtils.isInEditor()),y=e.inject("componentMapping",new n.ComponentMapping),p=e.ref(t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),h=e.computed(()=>n.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,r,t.aemNoDecoration)),C=e.computed(()=>{const g={"aria-label":t.accessibilityLabel,"aria-live":"polite","aria-roledescription":"carousel",class:"aem-container","data-cmp-is":"carousel","data-cmp-autoplay":(a==null?void 0:a.autoplay)===!0&&!r?"true":void 0,"data-cmp-delay":t.delay.toString(),"data-cmp-autopause-disabled":t.autopauseDisabled.toString(),"data-panelcontainer":"carousel",role:"group"};return r&&(g["data-cq-data-path"]=t.cqPath),g}),k=e.computed(()=>{const g=e.h("button",{"aria-label":t.accessibilityPrevious,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--previous`],"data-cmp-hook-carousel":"previous",type:"button"},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e.h("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}))]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityPrevious])]),_=e.h("button",{"aria-label":t.accessibilityNext,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--next`],"data-cmp-hook-carousel":"next",type:"button"},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e.h("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}))]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityNext])]),f=e.h("button",{"aria-label":t.accessibilityPause,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--pause`],"data-cmp-hook-carousel":"pause",type:"button"},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e.h("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})])]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityPause])]),I=e.h("button",{"aria-label":t.accessibilityPlay,class:[`${t.baseCssClass}__action`,`${t.baseCssClass}__action--play`,`${t.baseCssClass}__action--disabled`],"data-cmp-hook-carousel":"play",type:"button"},[e.h("span",{class:`${t.baseCssClass}__action-icon`},[e.h("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e.h("path",{d:"M8 5v14l11-7z"})])]),e.h("span",{class:`${t.baseCssClass}__action-text`},[t.accessibilityPlay])]),i=[g,_];return(a==null?void 0:a.autoplay)===!0&&(i.push(f),i.push(I)),e.h("div",{class:`${t.baseCssClass}__actions`},i)}),m=e.computed(()=>n.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,y)),q=e.computed(()=>!t.cqItemsOrder||(t==null?void 0:t.cqItemsOrder.length)===0),O=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")})),B=g=>{var I;let _=((I=t.accessibility)==null?void 0:I.indicator)||"";const f="{0}";return _=_.replace(f,(g+1).toString()),_},b=g=>{var i;let _=((i=t.accessibility)==null?void 0:i.slide)||"";const f="{0}";_=_.replace(f,(g+1).toString());const I="{1}";return _=_.replace(I,t.cqItemsOrder.length.toString()),_};return e.watchEffect(()=>p.value=t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),(g,_)=>{var f;return e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,class:h.value},C.value),[t.controlsPrepended?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(k.value),{key:0})):e.createCommentVNode("",!0),q.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",{key:1,"aria-live":((f=e.unref(a))==null?void 0:f.autoplay)===!0?"off":"polite",class:e.normalizeClass(`${t.baseCssClass}__content`),"aria-atomic":"false"},[e.createElementVNode("div",{class:e.normalizeClass([{[`${t.baseCssClass}__items`]:!e.unref(r)}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m.value,(I,i)=>(e.openBlock(),e.createElementBlock("div",{id:`${t.cqItems[t.cqItemsOrder[i]].id}-tabpanel`,key:`item-${i}`,"aria-label":b(i),"aria-labelledby":`${t.cqItems[t.cqItemsOrder[i]].id}-tab`,class:e.normalizeClass([`${t.baseCssClass}__item`,{[`${t.baseCssClass}__item--active`]:i===p.value}]),"aria-roledescription":"slide","data-cmp-hook-carousel":"item",role:"tabpanel"},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(I),e.normalizeProps(e.guardReactiveProps({isInEditor:!1})),null,16))],10,v))),128))],2),t.controlsPrepended?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(k.value),{key:0})),e.createElementVNode("ol",{"aria-label":t.accessibilityTablist,class:e.normalizeClass(`${t.baseCssClass}__indicators`),"data-cmp-hook-carousel":"indicators",role:"tablist"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.cqItemsOrder,(I,i)=>(e.openBlock(),e.createElementBlock("li",{id:`${t.cqItems[t.cqItemsOrder[i]].id}-tab`,key:`item-${i}`,"aria-controls":`${t.cqItems[t.cqItemsOrder[i]].id}-tabpanel`,"aria-label":B(i),class:e.normalizeClass([`${t.baseCssClass}__indicator`,{[`${t.baseCssClass}__indicator--active`]:i===p.value}]),"data-cmp-hook-carousel":"indicator",role:"tab"},e.toDisplayString(t.cqItems[I]["cq:panelTitle"]),11,te))),128))],10,ee)],10,Z)),e.unref(r)?(e.openBlock(),e.createBlock(e.unref(n.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:2},O.value)),null,16)):e.createCommentVNode("",!0)],16,Y)}}}),ae=e.defineComponent({__name:"CoreExperienceFragment",setup(s){return(t,a)=>(e.openBlock(),e.createBlock(A,{"is-in-editor":!1}))}}),ne=["id"],oe=["aria-label"],le=["id","aria-controls","tabIndex"],re=["id","aria-labelledby"],ce=e.defineComponent({inheritAttrs:!1,__name:"CoreTabs",props:{activeItem:{type:String},accessibilityLabel:{type:String},cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},isInEditor:{type:Boolean,default:void 0},...n.componentProperties("cmp-tabs")},setup(s){const t=s,a=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",E.AuthoringUtils.isInEditor()),r=e.inject("componentMapping",new n.ComponentMapping),y=e.ref(t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),p=e.computed(()=>n.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,r)),h=e.computed(()=>n.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,a,t.aemNoDecoration)),C=e.computed(()=>!t.cqItemsOrder||(t==null?void 0:t.cqItemsOrder.length)===0),k=e.computed(()=>{const q={class:"aem-container","data-cmp-is":"tabs","data-panelcontainer":"tabs"};return a&&(q["data-cq-data-path"]=t.cqPath),q}),m=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")}));return e.watchEffect(()=>y.value=t.cqItemsOrder.indexOf(t.activeItem)>0?t.cqItemsOrder.indexOf(t.activeItem):0),(q,O)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,class:h.value},k.value),[C.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("ol",{key:0,"aria-label":t.accessibilityLabel,class:e.normalizeClass(`${t.baseCssClass}__tablist`),"aria-multiselectable":"false",role:"tablist"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.cqItemsOrder,(B,b)=>(e.openBlock(),e.createElementBlock("li",{id:`${t.cqItems[B].id}-tab`,key:`tab-${b}`,"aria-controls":`${t.cqItems[B].id}-tabpanel`,class:e.normalizeClass([`${t.baseCssClass}__tab`,{[`${t.baseCssClass}__tab--active`]:b===y.value}]),tabIndex:b===y.value?0:-1,"data-cmp-hook-tabs":"tab",role:"tab"},e.toDisplayString(t.cqItems[B]["cq:panelTitle"]),11,le))),128))],10,oe)),C.value?e.createCommentVNode("",!0):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(p.value,(B,b)=>(e.openBlock(),e.createElementBlock("div",{id:`${t.cqItems[t.cqItemsOrder[b]].id}-tabpanel`,key:`tab-content-${b}`,class:e.normalizeClass([`${t.baseCssClass}__tabpanel`,{[`${t.baseCssClass}__tabpanel--active`]:b===y.value}]),"aria-labelledby":`${t.cqItems[t.cqItemsOrder[b]].id}-tab`,"data-cmp-hook-tabs":"tabpanel",role:"tabpanel",tabindex:"0"},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(B),e.normalizeProps(e.guardReactiveProps({isInEditor:!1})),null,16))],10,re))),128)),e.unref(a)?(e.openBlock(),e.createBlock(e.unref(n.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:2},m.value)),null,16)):e.createCommentVNode("",!0)],16,ne))}});l.AccordionEditConfig=x,l.CarouselEditConfig=D,l.ContainerEditConfig=L,l.ContentFragmentEditConfig=M,l.CoreAccordion=Q,l.CoreCarousel=se,l.CoreContainer=A,l.CoreContentFragment=G,l.CoreExperienceFragment=ae,l.CoreTabs=ce,l.DefaultContentFragment=z,l.ExperienceFragmentEditConfig=F,l.MapToContentFragmentModel=T,l.SpaUtils=P,l.TabsEditConfig=R,l.getRenderer=S,l.mapRenderer=N,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
