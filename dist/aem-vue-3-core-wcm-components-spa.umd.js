(function(r,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("aem-vue-3-editable-components"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","vue","aem-vue-3-editable-components","@adobe/aem-spa-page-model-manager"],e):(r=typeof globalThis<"u"?globalThis:r||self,e(r.aemVueCoreWcmComponentsSpa={},r.Vue,r.AemVueEditableComponents,r.AemSpaPageModelManager))})(this,function(r,e,m,A){"use strict";const D={emptyLabel:"Accordion",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},L={emptyLabel:"Carousel",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},M={emptyLabel:"Container",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},V={emptyLabel:"Experience Fragment",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},z=e.defineComponent({inheritAttrs:!1,__name:"CoreContainer",props:{accessibilityLabel:{type:String},backgroundStyle:{type:String},cqPath:{type:String,default:""},isInEditor:{type:Boolean,default:void 0},layout:{type:String,default:"RESPONSIVE_GRID",validator:s=>["RESPONSIVE_GRID","SIMPLE"].includes(s)},roleAttribute:{type:String},styleSystemElement:{type:String,default:"div"},...m.componentProperties("cmp-container")},setup(s){const a=s,c=e.useAttrs(),C=typeof a.isInEditor<"u"?a.isInEditor:e.inject("isInEditor",A.AuthoringUtils.isInEditor()),k=e.computed(()=>m.componentClassNames(a.baseCssClass,a.appliedCssClassNames,a.cssClassNames,a.containerProps,C,a.aemNoDecoration)),u=e.computed(()=>{var _;return C&&(c==null?void 0:c.allowedComponents)&&((_=c==null?void 0:c.allowedComponents)==null?void 0:_.applicable)});return(_,d)=>u.value?(e.openBlock(),e.createBlock(e.unref(m.AllowedComponentsContainer),e.normalizeProps(e.mergeProps({key:0},{...a,...e.unref(c)})),null,16)):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(a.styleSystemElement||"div"),{key:1,id:a.id,"aria-label":a.accessibilityLabel,class:e.normalizeClass(k.value),role:a.roleAttribute,style:e.normalizeStyle(a.backgroundStyle)},{default:e.withCtx(()=>[s.layout==="RESPONSIVE_GRID"?(e.openBlock(),e.createBlock(e.unref(m.ResponsiveGrid),e.normalizeProps(e.mergeProps({key:0},{...a,...e.unref(c),allowedComponents:{applicable:!1,components:[]},title:""})),null,16)):(e.openBlock(),e.createBlock(e.unref(m.Container),e.normalizeProps(e.mergeProps({key:1},{...a,...e.unref(c)})),null,16))]),_:1},8,["id","aria-label","class","role","style"]))}}),R=["id","data-cmp-single-expansion"],j=["id","data-cmp-expanded"],F=["id","aria-controls","data-cmp-button-id","onClick","onKeydown"],G=[e.createElementVNode("svg",{fill:"var(--accordion-heading-color)",height:"18",viewBox:"0 0 24 24",width:"18",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})],-1)],U=["id","aria-labelledby"],T=e.defineComponent({inheritAttrs:!1,__name:"CoreAccordion",props:{cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},expandedItems:{type:Array,default:()=>[]},headingElement:{type:String,default:"h3"},...m.componentProperties("cmp-accordion")},setup(s){const a=s,c=e.useAttrs(),C=e.inject("isInEditor",A.AuthoringUtils.isInEditor()),k=e.inject("componentMapping",new m.ComponentMapping),u=(()=>{try{return typeof window<"u"}catch{return!1}})(),_=e.ref(null),d=e.ref(-1),p=e.ref(a.expandedItems),f=e.ref(null),w=e.computed(()=>(c==null?void 0:c.singleExpansion)===!0);u&&window.Granite&&window.Granite.author&&window.Granite.author.MessageChannel&&(_.value=new window.Granite.author.MessageChannel("cqauthor",window));const $=e.computed(()=>{const t={};return C&&(t["data-panelcontainer"]="accordion",t["data-cq-data-path"]=a.cqPath||"",t["data-placeholder-text"]="Please drag Accordion item components here"),t}),N=(t,o=a.cqPath)=>{t.data&&t.data.id===o&&t.data.operation==="navigate"&&(d.value=t.data.index)},S=e.computed(()=>m.Utils.getChildComponents(a.cqPath,a.cqItems,a.cqItemsOrder,!0,()=>({}),!1,k)),O=e.computed(()=>m.componentClassNames(a.baseCssClass,a.appliedCssClassNames,a.cssClassNames,a.containerProps,C,a.aemNoDecoration)),g=t=>{const o=f.value.querySelector(`button[data-cmp-button-id="${t}"]`);o&&o.focus()},B=(t,o)=>{const n=p.value.indexOf(t)>-1;if(w.value)p.value=n?[]:[t];else if(n){const y=p.value.indexOf(t);p.value.splice(y,1)}else p.value.push(t);o.target.focus()},P=(t,o,n)=>{const y=f.value.querySelectorAll("button").length-1;switch(o.code){case"ArrowLeft":case"ArrowUp":o.preventDefault(),n>0&&g(n-1);break;case"ArrowRight":case"ArrowDown":o.preventDefault(),n<y&&g(n+1);break;case"Home":o.preventDefault(),g(0);break;case"End":o.preventDefault(),g(y);break;case"Enter":case"Space":o.preventDefault(),B(t,o),g(n);break}},I=t=>p.value.indexOf(t)>-1,x=e.computed(()=>({cqPath:a.cqPath,placeholderClassNames:["new","section"].join(" ")}));return e.watch(w,async(t,o)=>{t!==o&&(p.value=a.expandedItems)}),e.watch(a.expandedItems,async(t,o)=>{t!==o&&(p.value=t)}),e.watch(d,async(t,o)=>{t!==-1&&typeof t<"u"&&t!==o&&a.cqItemsOrder&&(p.value=[a.cqItemsOrder[t]])}),e.onMounted(()=>{_.value&&_.value.subscribeRequestMessage("cmp.panelcontainer",N)}),e.onUnmounted(()=>{_.value&&_.value.unsubscribeRequestMessage("cmp.panelcontainer",N)}),(t,o)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({id:a.id,ref_key:"accordion",ref:f,class:O.value,"data-cmp-single-expansion":w.value===!0?!0:void 0},$.value),[a.cqItemsOrder&&(a==null?void 0:a.cqItemsOrder.length)>0&&a.cqItems?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(a.cqItemsOrder,(n,y)=>(e.openBlock(),e.createElementBlock("div",{id:`accordion-${a.cqItems[n].id}`,key:`accordion-index-${y}`,class:e.normalizeClass(`${a.baseCssClass}__item`),"data-cmp-expanded":I(n)?!0:void 0},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(a.headingElement),{class:e.normalizeClass(`${a.baseCssClass}__heading`)},{default:e.withCtx(()=>[e.createElementVNode("button",{id:`accordion-${a.cqItems[n].id}-button`,"aria-controls":`accordion-${a.cqItems[n].id}-panel`,class:e.normalizeClass([`${a.baseCssClass}__button`,{[`${a.baseCssClass}__button--expanded`]:I(n)}]),"data-cmp-button-id":y,onClick:q=>B(n,q),onKeydown:q=>P(n,q,y)},[e.createElementVNode("span",{class:e.normalizeClass(`${a.baseCssClass}__title`)},e.toDisplayString(a.cqItems[n]["cq:panelTitle"]),3),e.createElementVNode("span",{class:e.normalizeClass(`${a.baseCssClass}__icon`)},G,2)],42,F)]),_:2},1032,["class"])),e.unref(C)||I(n)?(e.openBlock(),e.createElementBlock("div",{key:0,id:`accordion-${a.cqItems[n].id}-panel`,"aria-labelledby":`accordion-${a.cqItems[n].id}-button`,class:e.normalizeClass(`${a.baseCssClass}__panel ${I(n)?" "+a.baseCssClass+"__panel--expanded":" "+a.baseCssClass+"__panel--hidden"}`),role:"region"},[a.cqItemsOrder?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(S.value[s.cqItemsOrder.indexOf(n)]),{key:0})):e.createCommentVNode("",!0)],10,U)):e.createCommentVNode("",!0)],10,j))),128)):e.createCommentVNode("",!0),e.unref(C)?(e.openBlock(),e.createBlock(e.unref(m.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:1},x.value)),null,16)):e.createCommentVNode("",!0)],16,R))}}),ne="",H=["id","aria-label"],W=["aria-label"],J=["aria-label"],K=["aria-label"],Q=["aria-label"],X=["aria-label"],Y=["aria-label"],Z=["aria-label","onClick"],v=e.defineComponent({inheritAttrs:!1,__name:"CoreCarousel",props:{accessibility:{type:Object,default:()=>({play:"Play",pause:"Pause",next:"Next",previous:"Previous",slide:"Slide {0} of {1}",indicator:"Slide %{0}",indicators:"Choose a slide to display"})},accessibilityLabel:{type:String,default:"Carousel"},autopauseDisabled:{type:Boolean,default:!1},cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},delay:{type:Number,default:5e3},isInEditor:{type:Boolean,default:void 0},...m.componentProperties("cmp-carousel")},setup(s){const a=s,c=e.useAttrs(),C=typeof a.isInEditor<"u"?a.isInEditor:e.inject("isInEditor",A.AuthoringUtils.isInEditor()),k=e.inject("componentMapping",new m.ComponentMapping);let u=-1;const _=e.ref(-1),d=e.ref(0),p=e.ref(null),f=e.ref((c==null?void 0:c.autoplay)===!0&&!C);(()=>{try{return typeof window<"u"}catch{return!1}})()&&window.Granite&&window.Granite.author&&window.Granite.author.MessageChannel&&(p.value=new window.Granite.author.MessageChannel("cqauthor",window));const $=(l,i=a.cqPath)=>{l.data&&l.data.id===i&&l.data.operation==="navigate"&&(_.value=l.data.index)},N=e.computed(()=>m.Utils.getChildComponents(a.cqPath,a.cqItems,a.cqItemsOrder,!0,()=>({}),!1,k)),S=e.computed(()=>m.componentClassNames(a.baseCssClass,a.appliedCssClassNames,a.cssClassNames,a.containerProps,C,a.aemNoDecoration)),O=e.computed(()=>({cqPath:a.cqPath,placeholderClassNames:["new","section"].join(" ")})),g=l=>{var h;let i=((h=a.accessibility)==null?void 0:h.indicator)||"";const E="{0}";return i=i.replace(E,(l+1).toString()),i},B=l=>{var b;let i=((b=a.accessibility)==null?void 0:b.slide)||"";const E="{0}";i=i.replace(E,(l+1).toString());const h="{1}";return i=i.replace(h,a.cqItemsOrder.length.toString()),i},P=()=>{d.value===a.cqItemsOrder.length-1?d.value=0:d.value+=1},I=()=>{d.value===0?d.value=a.cqItemsOrder.length-1:d.value-=1},x=()=>{!f.value||a.cqItemsOrder.length<=1||P()},t=()=>{u=window.setInterval(()=>{x()},a.delay)},o=()=>{window.clearInterval(u)},n=l=>{f.value=l},y=l=>{d.value!==l&&(d.value=l)},q=()=>{!a.autopauseDisabled&&f.value&&o()},ae=()=>{!a.autopauseDisabled&&f.value&&t()},te=e.computed(()=>!a.cqItemsOrder||(a==null?void 0:a.cqItemsOrder.length)===0);return e.watch(_,async(l,i)=>{l!==-1&&typeof l<"u"&&l!==i&&(d.value=l,f.value=!1)}),e.onMounted(()=>{t(),p.value&&p.value.subscribeRequestMessage("cmp.panelcontainer",$)}),e.onUnmounted(()=>{u>=0&&o(),p.value&&p.value.unsubscribeRequestMessage("cmp.panelcontainer",$)}),(l,i)=>{var E;return e.openBlock(),e.createElementBlock("div",{id:a.id,"aria-label":a.accessibilityLabel,class:e.normalizeClass(S.value),"aria-roledescription":"carousel","data-panelcontainer":"carousel",role:"group"},[te.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(`${a.baseCssClass}__content`),onMouseenter:q,onMouseleave:ae},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(N.value,(h,b)=>(e.openBlock(),e.createElementBlock("div",{key:`item-${b}`,"aria-label":B(b),class:e.normalizeClass([`${a.baseCssClass}__item`,{[`${a.baseCssClass}__item--active`]:b===d.value}]),"data-cmp-hook-carousel":"item",role:"tabpanel"},[b===d.value||e.unref(C)?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(h),{key:0})):e.createCommentVNode("",!0)],10,W))),128)),e.createElementVNode("div",{class:e.normalizeClass(`${a.baseCssClass}__actions`)},[e.createElementVNode("button",{"aria-label":a.accessibility.previous,class:e.normalizeClass(`${a.baseCssClass}__action ${a.baseCssClass}__action--previous`),type:"button",onClick:I},[e.createElementVNode("span",{class:e.normalizeClass(`${a.baseCssClass}__action-icon`)},null,2),e.createElementVNode("span",{class:e.normalizeClass(`${a.baseCssClass}__action-text`)},e.toDisplayString(a.accessibility.previous),3)],10,J),e.createElementVNode("button",{"aria-label":a.accessibility.next,class:e.normalizeClass(`${a.baseCssClass}__action ${a.baseCssClass}__action--next`),type:"button",onClick:P},[e.createElementVNode("span",{class:e.normalizeClass(`${a.baseCssClass}__action-icon`)},null,2),e.createElementVNode("span",{class:e.normalizeClass(`${a.baseCssClass}__action-text`)},e.toDisplayString(a.accessibility.next),3)],10,K),f.value?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createElementVNode("button",{"aria-label":a.accessibility.pause,class:e.normalizeClass([`${a.baseCssClass}__action`,`${a.baseCssClass}__action--pause`,{[`${a.baseCssClass}__action--disabled`]:!f.value}]),type:"button",onClick:i[0]||(i[0]=h=>n(!1))},[e.createElementVNode("span",{class:e.normalizeClass(`${a.baseCssClass}__action-icon`)},null,2),e.createElementVNode("span",{class:e.normalizeClass(`${a.baseCssClass}__action-text`)},e.toDisplayString(a.accessibility.pause),3)],10,Q),e.createElementVNode("button",{"aria-label":a.accessibility.play,class:e.normalizeClass([`${a.baseCssClass}__action`,`${a.baseCssClass}__action--play`,{[`${a.baseCssClass}__action--disabled`]:f.value}]),type:"button",onClick:i[1]||(i[1]=h=>n(!0))},[e.createElementVNode("span",{class:e.normalizeClass(`${a.baseCssClass}__action-icon`)},null,2),e.createElementVNode("span",{class:e.normalizeClass(`${a.baseCssClass}__action-text`)},e.toDisplayString(a.accessibility.play),3)],10,X)],64)):e.createCommentVNode("",!0)],2),e.createElementVNode("ol",{"aria-label":(E=a.accessibility)==null?void 0:E.indicators,class:e.normalizeClass(`${a.baseCssClass}__indicators`),role:"tablist"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.cqItemsOrder,(h,b)=>(e.openBlock(),e.createElementBlock("li",{key:`item-${b}`,"aria-label":g(b),class:e.normalizeClass([`${a.baseCssClass}__indicator`,{[`${a.baseCssClass}__indicator--active`]:b===d.value}]),role:"tab",onClick:ce=>y(b)},e.toDisplayString(a.cqItems[h]["cq:panelTitle"]),11,Z))),128))],10,Y)],34)),e.unref(C)?(e.openBlock(),e.createBlock(e.unref(m.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:1},O.value)),null,16)):e.createCommentVNode("",!0)],10,H)}}}),oe="",ee=e.defineComponent({__name:"CoreExperienceFragment",setup(s){return(a,c)=>(e.openBlock(),e.createBlock(z,{"is-in-editor":!1}))}}),le="";r.AccordionEditConfig=D,r.CarouselEditConfig=L,r.ContainerEditConfig=M,r.CoreAccordion=T,r.CoreCarousel=v,r.CoreContainer=z,r.CoreExperienceFragment=ee,r.ExperienceFragmentEditConfig=V,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
