(function(l,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("aem-vue-3-editable-components"),require("vue"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","aem-vue-3-editable-components","vue","@adobe/aem-spa-page-model-manager"],o):(l=typeof globalThis<"u"?globalThis:l||self,o(l.aemVueCoreWcmComponentsSpa={},l.AemVueEditableComponents,l.Vue,l.AemSpaPageModelManager))})(this,function(l,o,e,P){"use strict";const j={emptyLabel:"Accordion",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},T={emptyLabel:"Carousel",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},U={emptyLabel:"Container",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},G={emptyLabel:"Content Fragment",isEmpty(s){return s.elementsOrder.length===0&&s.cqItemsOrder.length===0}},H={emptyLabel:"Experience Fragment",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},K={emptyLabel:"Tabs",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},W="ContentFragment-",D=s=>W+s,L=(s,t)=>{s&&t&&(typeof s=="string"?[s]:s).forEach(m=>{o.MapTo(D(m))(t)})},x=s=>{const t=D(s);return o.ComponentMapping.get(t)},X=s=>t=>L(s,t),V=e.defineComponent({inheritAttrs:!1,__name:"CoreContainer",props:{accessibilityLabel:{type:String},backgroundStyle:{type:String},cqPath:{type:String,default:""},isInEditor:{type:Boolean,default:void 0},layout:{type:String,default:"RESPONSIVE_GRID",validator:s=>["RESPONSIVE_GRID","SIMPLE"].includes(s)},roleAttribute:{type:String},styleSystemElement:{type:String,default:"div"},...o.componentProperties("cmp-container")},setup(s){const t=s,a=e.useAttrs(),m=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",P.AuthoringUtils.isInEditor()),b=e.computed(()=>o.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,m,t.aemNoDecoration)),C=e.computed(()=>{var y;return m&&(a==null?void 0:a.allowedComponents)&&((y=a==null?void 0:a.allowedComponents)==null?void 0:y.applicable)});return(y,c)=>C.value?(e.openBlock(),e.createBlock(e.unref(o.AllowedComponentsContainer),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(a)})),null,16)):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.styleSystemElement||"div"),{key:1,id:t.id,"aria-label":t.accessibilityLabel,class:e.normalizeClass(b.value),role:t.roleAttribute,style:e.normalizeStyle(t.backgroundStyle)},{default:e.withCtx(()=>[s.layout==="RESPONSIVE_GRID"?(e.openBlock(),e.createBlock(e.unref(o.ResponsiveGrid),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(a),allowedComponents:{applicable:!1,components:[]},title:""})),null,16)):(e.openBlock(),e.createBlock(e.unref(o.Container),e.normalizeProps(e.mergeProps({key:1},{...t,...e.unref(a)})),null,16))]),_:1},8,["id","aria-label","class","role","style"]))}}),J=["id"],Q=["innerHTML"],F=e.defineComponent({inheritAttrs:!1,__name:"DefaultContentFragment",props:{cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},description:{type:String},elements:{type:Object,default:()=>({})},elementsOrder:{type:Array,default:()=>[]},isInEditor:{type:Boolean,default:void 0},model:{type:String},title:{type:String},...o.componentProperties("cmp-contentfragment")},setup(s){const t=s,a=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",P.AuthoringUtils.isInEditor()),m=e.inject("componentMapping",new o.ComponentMapping),b=e.computed(()=>o.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,a,t.aemNoDecoration)),C=e.computed(()=>o.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,m));return(y,c)=>{var h;return e.openBlock(),e.createElementBlock("div",{id:t.id,class:e.normalizeClass(b.value)},[e.createElementVNode("h3",{class:e.normalizeClass(`${t.baseCssClass}__title`)},e.toDisplayString(t.title),3),t.description?(e.openBlock(),e.createElementBlock("p",{key:0,class:e.normalizeClass(`${t.baseCssClass}__description`)},e.toDisplayString(t.description),3)):e.createCommentVNode("",!0),(h=t.elementsOrder)!=null&&h.length?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(`${t.baseCssClass}__elements`)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.elementsOrder,(d,u)=>(e.openBlock(),e.createElementBlock("div",{key:`${t.id}-element-${d}-${u}`,class:e.normalizeClass(`${t.baseCssClass}__element`)},[e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--key`])},[e.createElementVNode("h4",null,e.toDisplayString(d),1)],2),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--value`]),innerHTML:`value: ${t.elements[d].value}`},null,10,Q),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--datatype`])}," datatype: "+e.toDisplayString(t.elements[d].dataType),3),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--multivalue`])}," multivalue: "+e.toDisplayString(t.elements[d].multiValue?"true":"false"),3),e.createElementVNode("div",{class:e.normalizeClass([`${t.baseCssClass}__elemententry`,`${t.baseCssClass}__elemententry--type`])}," type: "+e.toDisplayString(t.elements[d][":type"]),3)],2))),128))],2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(C.value,d=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(d),{key:d.toString()}))),128))],10,J)}}}),Y=e.defineComponent({inheritAttrs:!1,__name:"CoreContentFragment",props:{cqItems:{type:Object,default:()=>({})},cqItemsOrder:{type:Array,default:()=>[]},cqPath:{type:String,default:""},description:{type:String},elements:{type:Object,default:()=>({})},elementsOrder:{type:Array,default:()=>[]},isInEditor:{type:Boolean,default:void 0},model:{type:String},title:{type:String},...o.componentProperties("cmp-contentfragment")},setup(s){const t=s,a=e.useAttrs(),m=e.computed(()=>t.elementsOrder.length===0&&t.cqItemsOrder.length===0),b=e.computed(()=>{const C=x(t.model);return C||F});return(C,y)=>m.value?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(b.value),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(a)})),null,16))}}),g={createCallbackListener(s,t){return(a,m=s)=>{a.data&&a.data.id===m&&a.data.operation==="navigate"&&(t.value=a.data.index)}},initMessageChannel(){return this.isBrowser()&&window.Granite&&window.Granite.author&&window.Granite.author.MessageChannel?new window.Granite.author.MessageChannel("cqauthor",window):null},isBrowser(){try{return typeof window<"u"}catch{return!1}},subscribeRequestMessage(s,t){s&&s.subscribeRequestMessage("cmp.panelcontainer",t)},unsubscribeRequestMessage(s,t){s&&s.unsubscribeRequestMessage("cmp.panelcontainer",t)}},Z=["id","data-cmp-single-expansion"],v=["id","data-cmp-expanded"],ee=["id","aria-controls","data-cmp-button-id","onClick","onKeydown"],te=[e.createElementVNode("svg",{fill:"var(--accordion-heading-color)",height:"18",viewBox:"0 0 24 24",width:"18",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})],-1)],se=["id","aria-labelledby"],ae=e.defineComponent({inheritAttrs:!1,__name:"CoreAccordion",props:{cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},expandedItems:{type:Array,default:()=>[]},headingElement:{type:String,default:"h3"},...o.componentProperties("cmp-accordion")},setup(s){const t=s,a=e.useAttrs(),m=e.inject("isInEditor",P.AuthoringUtils.isInEditor()),b=e.inject("componentMapping",new o.ComponentMapping),C=e.ref(g.initMessageChannel()),y=e.ref(-1),c=e.ref(t.expandedItems),h=e.ref(null),d=e.computed(()=>(a==null?void 0:a.singleExpansion)===!0),u=e.computed(()=>{const n={};return m&&(n["data-panelcontainer"]="accordion",n["data-cq-data-path"]=t.cqPath||"",n["data-placeholder-text"]="Please drag Accordion item components here"),n}),z=e.computed(()=>o.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,b)),A=e.computed(()=>o.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,m,t.aemNoDecoration)),k=n=>{const i=h.value.querySelector(`button[data-cmp-button-id="${n}"]`);i&&i.focus()},O=(n,i)=>{const r=c.value.indexOf(n)>-1;if(d.value)c.value=r?[]:[n];else if(r){const f=c.value.indexOf(n);c.value.splice(f,1)}else c.value.push(n);i.target.focus()},S=(n,i,r)=>{const f=h.value.querySelectorAll("button").length-1;switch(i.code){case"ArrowLeft":case"ArrowUp":i.preventDefault(),r>0&&k(r-1);break;case"ArrowRight":case"ArrowDown":i.preventDefault(),r<f&&k(r+1);break;case"Home":i.preventDefault(),k(0);break;case"End":i.preventDefault(),k(f);break;case"Enter":case"Space":i.preventDefault(),O(n,i),k(r);break}},$=n=>c.value.indexOf(n)>-1,M=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")}));e.watch(d,async(n,i)=>{n!==i&&(c.value=t.expandedItems)}),e.watch(t.expandedItems,async(n,i)=>{n!==i&&(c.value=n)}),e.watch(y,async(n,i)=>{n!==-1&&typeof n<"u"&&n!==i&&t.cqItemsOrder&&(c.value=[t.cqItemsOrder[n]])});const B=g.createCallbackListener(t.cqPath,y);return e.onMounted(()=>{g.subscribeRequestMessage(C.value,B)}),e.onUnmounted(()=>{g.unsubscribeRequestMessage(C.value,B)}),(n,i)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,ref_key:"accordion",ref:h,class:A.value,"data-cmp-single-expansion":d.value===!0?!0:void 0},u.value),[t.cqItemsOrder&&(t==null?void 0:t.cqItemsOrder.length)>0&&t.cqItems?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(t.cqItemsOrder,(r,f)=>(e.openBlock(),e.createElementBlock("div",{id:`accordion-${t.cqItems[r].id}`,key:`accordion-index-${f}`,class:e.normalizeClass(`${t.baseCssClass}__item`),"data-cmp-expanded":$(r)?!0:void 0},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.headingElement),{class:e.normalizeClass(`${t.baseCssClass}__heading`)},{default:e.withCtx(()=>[e.createElementVNode("button",{id:`accordion-${t.cqItems[r].id}-button`,"aria-controls":`accordion-${t.cqItems[r].id}-panel`,class:e.normalizeClass([`${t.baseCssClass}__button`,{[`${t.baseCssClass}__button--expanded`]:$(r)}]),"data-cmp-button-id":f,onClick:w=>O(r,w),onKeydown:w=>S(r,w,f)},[e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__title`)},e.toDisplayString(t.cqItems[r]["cq:panelTitle"]),3),e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__icon`)},te,2)],42,ee)]),_:2},1032,["class"])),e.unref(m)||$(r)?(e.openBlock(),e.createElementBlock("div",{key:0,id:`accordion-${t.cqItems[r].id}-panel`,"aria-labelledby":`accordion-${t.cqItems[r].id}-button`,class:e.normalizeClass(`${t.baseCssClass}__panel ${$(r)?" "+t.baseCssClass+"__panel--expanded":" "+t.baseCssClass+"__panel--hidden"}`),role:"region"},[t.cqItemsOrder?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(z.value[s.cqItemsOrder.indexOf(r)]),{key:0})):e.createCommentVNode("",!0)],10,se)):e.createCommentVNode("",!0)],10,v))),128)):e.createCommentVNode("",!0),e.unref(m)?(e.openBlock(),e.createBlock(e.unref(o.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:1},M.value)),null,16)):e.createCommentVNode("",!0)],16,Z))}}),ne=["id","aria-label"],oe=["aria-label"],le=["aria-label"],re=[e.createElementVNode("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})],-1)],ce=["aria-label"],ie=[e.createElementVNode("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})],-1)],de=["aria-label"],me=[e.createElementVNode("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})],-1)],pe=["aria-label"],Ce=[e.createElementVNode("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e.createElementVNode("path",{d:"M8 5v14l11-7z"})],-1)],_e=["aria-label"],ye=["aria-label","onClick"],fe=e.defineComponent({inheritAttrs:!1,__name:"CoreCarousel",props:{accessibility:{type:Object,default:()=>({play:"Play",pause:"Pause",next:"Next",previous:"Previous",slide:"Slide {0} of {1}",indicator:"Slide {0}",indicators:"Choose a slide to display"})},accessibilityLabel:{type:String,default:"Carousel"},autopauseDisabled:{type:Boolean,default:!1},cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},delay:{type:Number,default:5e3},isInEditor:{type:Boolean,default:void 0},...o.componentProperties("cmp-carousel")},setup(s){const t=s,a=e.useAttrs(),m=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",P.AuthoringUtils.isInEditor()),b=e.inject("componentMapping",new o.ComponentMapping),C=e.ref(-1),y=e.ref(-1),c=e.ref(0),h=e.ref(g.initMessageChannel()),d=e.ref((a==null?void 0:a.autoplay)===!0&&!m),u=e.computed(()=>o.Utils.getChildComponents(t.cqPath,t.cqItems,t.cqItemsOrder,!0,()=>({}),!1,b)),z=e.computed(()=>o.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.cssClassNames,t.containerProps,m,t.aemNoDecoration)),A=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")})),k=_=>{var q;let p=((q=t.accessibility)==null?void 0:q.indicator)||"";const N="{0}";return p=p.replace(N,(_+1).toString()),p},O=_=>{var E;let p=((E=t.accessibility)==null?void 0:E.slide)||"";const N="{0}";p=p.replace(N,(_+1).toString());const q="{1}";return p=p.replace(q,t.cqItemsOrder.length.toString()),p},S=()=>{c.value===t.cqItemsOrder.length-1?c.value=0:c.value+=1},$=()=>{c.value===0?c.value=t.cqItemsOrder.length-1:c.value-=1},M=()=>{!d.value||t.cqItemsOrder.length<=1||S()},B=()=>{C.value=setInterval(()=>{M()},t.delay)},n=()=>{clearInterval(C.value)},i=_=>{d.value=_},r=_=>{c.value!==_&&(c.value=_)},f=()=>{!t.autopauseDisabled&&d.value&&n()},w=()=>{!t.autopauseDisabled&&d.value&&B()},be=e.computed(()=>!t.cqItemsOrder||(t==null?void 0:t.cqItemsOrder.length)===0);e.watch(y,async(_,p)=>{_!==-1&&typeof _<"u"&&_!==p&&(c.value=_,d.value=!1)});const R=g.createCallbackListener(t.cqPath,y);return e.onMounted(()=>{B(),g.subscribeRequestMessage(h.value,R)}),e.onUnmounted(()=>{typeof C.value=="number"&&C.value>=0&&n(),g.unsubscribeRequestMessage(h.value,R)}),(_,p)=>{var N,q;return e.openBlock(),e.createElementBlock("div",{id:t.id,"aria-label":t.accessibilityLabel,class:e.normalizeClass(z.value),"aria-roledescription":"carousel","data-panelcontainer":"carousel",role:"group"},[be.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(`${t.baseCssClass}__content`),onMouseenter:f,onMouseleave:w},[e.createElementVNode("div",{class:e.normalizeClass([{[`${t.baseCssClass}__items`]:!e.unref(m)}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(u.value,(E,I)=>(e.openBlock(),e.createElementBlock("div",{key:`item-${I}`,"aria-label":O(I),class:e.normalizeClass([`${t.baseCssClass}__item`,{[`${t.baseCssClass}__item--active`]:I===c.value}]),"data-cmp-hook-carousel":"item",role:"tabpanel"},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(E)))],10,oe))),128))],2),e.createElementVNode("div",{class:e.normalizeClass(`${t.baseCssClass}__actions`)},[e.createElementVNode("button",{"aria-label":t.accessibility.previous,class:e.normalizeClass(`${t.baseCssClass}__action ${t.baseCssClass}__action--previous`),type:"button",onClick:$},[e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__action-icon`)},re,2),e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__action-text`)},e.toDisplayString(t.accessibility.previous),3)],10,le),e.createElementVNode("button",{"aria-label":t.accessibility.next,class:e.normalizeClass(`${t.baseCssClass}__action ${t.baseCssClass}__action--next`),type:"button",onClick:S},[e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__action-icon`)},ie,2),e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__action-text`)},e.toDisplayString(t.accessibility.next),3)],10,ce),((N=e.unref(a))==null?void 0:N.autoplay)===!0?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createElementVNode("button",{"aria-label":t.accessibility.pause,class:e.normalizeClass([`${t.baseCssClass}__action`,`${t.baseCssClass}__action--pause`,{[`${t.baseCssClass}__action--disabled`]:!d.value}]),type:"button",onClick:p[0]||(p[0]=E=>i(!1))},[e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__action-icon`)},me,2),e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__action-text`)},e.toDisplayString(t.accessibility.pause),3)],10,de),e.createElementVNode("button",{"aria-label":t.accessibility.play,class:e.normalizeClass([`${t.baseCssClass}__action`,`${t.baseCssClass}__action--play`,{[`${t.baseCssClass}__action--disabled`]:d.value}]),type:"button",onClick:p[1]||(p[1]=E=>i(!0))},[e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__action-icon`)},Ce,2),e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__action-text`)},e.toDisplayString(t.accessibility.play),3)],10,pe)],64)):e.createCommentVNode("",!0)],2),e.createElementVNode("ol",{"aria-label":(q=t.accessibility)==null?void 0:q.indicators,class:e.normalizeClass(`${t.baseCssClass}__indicators`),role:"tablist"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.cqItemsOrder,(E,I)=>(e.openBlock(),e.createElementBlock("li",{key:`item-${I}`,"aria-label":k(I),class:e.normalizeClass([`${t.baseCssClass}__indicator`,{[`${t.baseCssClass}__indicator--active`]:I===c.value}]),role:"tab",onClick:$e=>r(I)},e.toDisplayString(t.cqItems[E]["cq:panelTitle"]),11,ye))),128))],10,_e)],34)),e.unref(m)?(e.openBlock(),e.createBlock(e.unref(o.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:1},A.value)),null,16)):e.createCommentVNode("",!0)],10,ne)}}}),ge=e.defineComponent({__name:"CoreExperienceFragment",setup(s){return(t,a)=>(e.openBlock(),e.createBlock(V,{"is-in-editor":!1}))}});l.AccordionEditConfig=j,l.CarouselEditConfig=T,l.ContainerEditConfig=U,l.ContentFragmentEditConfig=G,l.CoreAccordion=ae,l.CoreCarousel=fe,l.CoreContainer=V,l.CoreContentFragment=Y,l.CoreExperienceFragment=ge,l.DefaultContentFragment=F,l.ExperienceFragmentEditConfig=H,l.MapToContentFragmentModel=X,l.SpaUtils=g,l.TabsEditConfig=K,l.getRenderer=x,l.mapRenderer=L,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
