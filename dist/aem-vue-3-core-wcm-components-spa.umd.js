(function(l,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("aem-vue-3-editable-components"),require("@adobe/aem-spa-page-model-manager")):typeof define=="function"&&define.amd?define(["exports","vue","aem-vue-3-editable-components","@adobe/aem-spa-page-model-manager"],e):(l=typeof globalThis<"u"?globalThis:l||self,e(l.aemVueCoreWcmComponentsSpa={},l.Vue,l.AemVueEditableComponents,l.AemSpaPageModelManager))})(this,function(l,e,i,q){"use strict";const w={emptyLabel:"Accordion",isEmpty(s){return!s.cqItemsOrder||(s==null?void 0:s.cqItemsOrder.length)===0}},k=e.defineComponent({inheritAttrs:!1,__name:"CoreContainer",props:{accessibilityLabel:{type:String},backgroundStyle:{type:String},cqPath:{type:String,default:""},isInEditor:{type:Boolean,default:void 0},layout:{type:String,default:"RESPONSIVE_GRID",validator:s=>["RESPONSIVE_GRID","SIMPLE"].includes(s)},roleAttribute:{type:String},styleSystemElement:{type:String,default:"div"},...i.componentProperties("cmp-container")},setup(s){const t=s,c=e.useAttrs(),p=typeof t.isInEditor<"u"?t.isInEditor:e.inject("isInEditor",q.AuthoringUtils.isInEditor()),I=e.computed(()=>i.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.containerProps,p,t.aemNoDecoration)),g=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")})),m=e.computed(()=>{var f;return p&&(c==null?void 0:c.allowedComponents)&&((f=c==null?void 0:c.allowedComponents)==null?void 0:f.applicable)});return(f,d)=>m.value?(e.openBlock(),e.createBlock(e.unref(i.AllowedComponentsContainer),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(c)})),null,16)):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.styleSystemElement||"div"),{key:1,id:t.id,"aria-label":t.accessibilityLabel,class:e.normalizeClass(I.value),role:t.roleAttribute,style:e.normalizeStyle(t.backgroundStyle)},{default:e.withCtx(()=>[s.layout==="RESPONSIVE_GRID"?(e.openBlock(),e.createBlock(e.unref(i.ResponsiveGrid),e.normalizeProps(e.mergeProps({key:0},{...t,...e.unref(c),allowedComponents:{applicable:!1,components:[]},isInEditor:!1,title:""})),null,16)):(e.openBlock(),e.createBlock(e.unref(i.Container),e.normalizeProps(e.mergeProps({key:1},{...t,...e.unref(c),isInEditor:!1})),null,16)),s.isInEditor?(e.openBlock(),e.createBlock(e.unref(i.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:2},g.value)),null,16)):e.createCommentVNode("",!0)]),_:1},8,["id","aria-label","class","role","style"]))}}),E=["id","data-cmp-single-expansion"],A=["id","data-cmp-expanded"],B=["id","aria-controls","data-cmp-button-id","onClick","onKeydown"],S=["id","aria-labelledby"],N=e.defineComponent({inheritAttrs:!1,__name:"CoreAccordion",props:{cqItems:{type:Object},cqItemsOrder:{type:Array},cqPath:{type:String,default:""},expandedItems:{type:Array,default:()=>[]},headingElement:{type:String,default:"h3"},...i.componentProperties("cmp-accordion")},setup(s){const t=s,c=e.useAttrs(),p=e.inject("isInEditor",q.AuthoringUtils.isInEditor()),I=e.inject("componentMapping",new i.ComponentMapping),g=(()=>{try{return typeof window<"u"}catch{return!1}})(),m=e.ref(null),f=e.ref(-1),d=e.ref(t.expandedItems),u=e.ref(null),y=e.computed(()=>(c==null?void 0:c.singleExpansion)===!0);g&&window.Granite&&window.Granite.author&&window.Granite.author.MessageChannel&&(m.value=new window.Granite.author.MessageChannel("cqauthor",window));const x=e.computed(()=>{const n={};return p&&(n["data-panelcontainer"]="accordion",n["data-cq-data-path"]=t.cqPath||"",n["data-placeholder-text"]="Please drag Accordion item components here"),n}),P=(n,o=t.cqPath)=>{console.log("CqPath: ",o),n.data&&n.data.id===o&&n.data.operation==="navigate"&&(f.value=n.data.index)},O=n=>{var o;return((o=t.cqPath)==null?void 0:o.length)>0?`${t.cqPath}/${n}`:n},$=(n,o,a)=>{const r=O(a);return e.h(n,{...o,cqPath:r,containerProps:{}})},D=e.computed(()=>{const n=[];return Object.keys(t.cqItems).length>0&&t.cqItemsOrder.length>0&&t.cqItemsOrder.forEach(o=>{const a=i.Utils.modelToProps(t.cqItems[o]);if(a&&typeof a.cqType<"u"){const r=I.get(a.cqType);r&&n.push($(r,a,o))}}),n}),z=e.computed(()=>i.componentClassNames(t.baseCssClass,t.appliedCssClassNames,t.containerProps,p,t.aemNoDecoration)),C=n=>{const o=u.value.querySelector(`button[data-cmp-button-id="${n}"]`);o&&o.focus()},_=(n,o)=>{const a=d.value.indexOf(n)>-1;if(y.value)d.value=a?[]:[n];else if(a){const r=d.value.indexOf(n);d.value.splice(r,1)}else d.value.push(n);o.target.focus()},M=(n,o,a)=>{const r=u.value.querySelectorAll("button").length-1;switch(o.code){case"ArrowLeft":case"ArrowUp":o.preventDefault(),a>0&&C(a-1);break;case"ArrowRight":case"ArrowDown":o.preventDefault(),a<r&&C(a+1);break;case"Home":o.preventDefault(),C(0);break;case"End":o.preventDefault(),C(r);break;case"Enter":case"Space":o.preventDefault(),_(n,o),C(a);break}},h=n=>d.value.indexOf(n)>-1,R=e.computed(()=>({cqPath:t.cqPath,placeholderClassNames:["new","section"].join(" ")}));return e.watch(y,async(n,o)=>{n!==o&&(d.value=t.expandedItems)}),e.watch(t.expandedItems,async(n,o)=>{n!==o&&(d.value=n)}),e.watch(f,async(n,o)=>{n!==-1&&typeof n<"u"&&o!==n&&t.cqItemsOrder&&(d.value=[t.cqItemsOrder[o]])}),e.onMounted(()=>{m.value&&m.value.subscribeRequestMessage("cmp.panelcontainer",P)}),e.onUnmounted(()=>{m.value&&m.value.unsubscribeRequestMessage("cmp.panelcontainer",P)}),(n,o)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({id:t.id,ref_key:"accordion",ref:u,class:z.value,"data-cmp-single-expansion":y.value===!0?!0:void 0},x.value),[t.cqItemsOrder&&(t==null?void 0:t.cqItemsOrder.length)>0&&t.cqItems?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(t.cqItemsOrder,(a,r)=>(e.openBlock(),e.createElementBlock("div",{id:`accordion-${t.cqItems[a].id}`,key:`accordion-index-${r}`,class:e.normalizeClass(`${t.baseCssClass}__item`),"data-cmp-expanded":h(a)?!0:void 0},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.headingElement),{class:e.normalizeClass(`${t.baseCssClass}__header`)},{default:e.withCtx(()=>[e.createElementVNode("button",{id:`accordion-${t.cqItems[a].id}-button`,"aria-controls":`accordion-${t.cqItems[a].id}-panel`,class:e.normalizeClass([`${t.baseCssClass}__button`,{[`${t.baseCssClass}__button--expanded`]:h(a)}]),"data-cmp-button-id":r,onClick:b=>_(a,b),onKeydown:b=>M(a,b,r)},[e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__title`)},e.toDisplayString(t.cqItems[a]["cq:panelTitle"]),3),e.createElementVNode("span",{class:e.normalizeClass(`${t.baseCssClass}__icon`)},null,2)],42,B)]),_:2},1032,["class"])),e.unref(p)||h(a)?(e.openBlock(),e.createElementBlock("div",{key:0,id:`accordion-${t.cqItems[a].id}-panel`,"aria-labelledby":`accordion-${t.cqItems[a].id}-button`,class:e.normalizeClass(`${t.baseCssClass}__panel ${h(a)?" "+t.baseCssClass+"__panel--expanded":" "+t.baseCssClass+"__panel--hidden"}`),role:"region"},[t.cqItemsOrder?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(D.value[s.cqItemsOrder.indexOf(a)]),{key:0})):e.createCommentVNode("",!0)],10,S)):e.createCommentVNode("",!0)],10,A))),128)):e.createCommentVNode("",!0),e.unref(p)?(e.openBlock(),e.createBlock(e.unref(i.ContainerPlaceholder),e.normalizeProps(e.mergeProps({key:1},R.value)),null,16)):e.createCommentVNode("",!0)],16,E))}}),j="";l.AccordionEditConfig=w,l.CoreAccordion=N,l.CoreContainer=k,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
