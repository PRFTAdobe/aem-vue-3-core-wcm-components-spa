import { defineComponent as k, useAttrs as R, inject as O, computed as m, openBlock as i, createBlock as C, unref as d, normalizeProps as g, mergeProps as h, resolveDynamicComponent as $, normalizeClass as p, normalizeStyle as W, withCtx as L, ref as I, watch as S, onMounted as J, onUnmounted as Q, createElementBlock as _, Fragment as X, renderList as Y, createElementVNode as x, toDisplayString as Z, createCommentVNode as y, h as K } from "vue";
import { componentProperties as M, componentClassNames as G, AllowedComponentsContainer as ee, ResponsiveGrid as te, Container as ne, ComponentMapping as ae, Utils as oe, ContainerPlaceholder as se } from "aem-vue-3-editable-components";
import { AuthoringUtils as B } from "@adobe/aem-spa-page-model-manager";
const me = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(o) {
    return !o.cqItemsOrder || (o == null ? void 0 : o.cqItemsOrder.length) === 0;
  }
}, Ce = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(o) {
    return !o.cqItemsOrder || (o == null ? void 0 : o.cqItemsOrder.length) === 0;
  }
}, fe = /* @__PURE__ */ k({
  inheritAttrs: !1,
  __name: "CoreContainer",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    accessibilityLabel: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    backgroundStyle: {
      type: String
    },
    cqPath: {
      type: String,
      default: ""
    },
    isInEditor: {
      type: Boolean,
      default: void 0
    },
    layout: {
      type: String,
      default: "RESPONSIVE_GRID",
      validator: (o) => ["RESPONSIVE_GRID", "SIMPLE"].includes(o)
    },
    // eslint-disable-next-line vue/require-default-prop
    roleAttribute: {
      type: String
    },
    styleSystemElement: {
      type: String,
      default: "div"
    },
    ...M("cmp-container")
  },
  setup(o) {
    const e = o, s = R(), u = typeof e.isInEditor < "u" ? e.isInEditor : O("isInEditor", B.isInEditor()), q = m(
      () => G(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), v = m(
      () => {
        var r;
        return u && (s == null ? void 0 : s.allowedComponents) && ((r = s == null ? void 0 : s.allowedComponents) == null ? void 0 : r.applicable);
      }
    );
    return (r, w) => v.value ? (i(), C(d(ee), g(h({ key: 0 }, { ...e, ...d(s) })), null, 16)) : (i(), C($(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: p(q.value),
      role: e.roleAttribute,
      style: W(e.backgroundStyle)
    }, {
      default: L(() => [
        o.layout === "RESPONSIVE_GRID" ? (i(), C(d(te), g(h({ key: 0 }, {
          ...e,
          ...d(s),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (i(), C(d(ne), g(h({ key: 1 }, { ...e, ...d(s) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), ce = ["id", "data-cmp-single-expansion"], ie = ["id", "data-cmp-expanded"], re = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], le = ["id", "aria-labelledby"], he = /* @__PURE__ */ k({
  inheritAttrs: !1,
  __name: "CoreAccordion",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    cqItems: {
      type: Object
    },
    // eslint-disable-next-line vue/require-default-prop
    cqItemsOrder: {
      type: Array
    },
    cqPath: {
      type: String,
      default: ""
    },
    expandedItems: {
      type: Array,
      default: () => []
    },
    headingElement: {
      type: String,
      default: "h3"
    },
    ...M("cmp-accordion")
  },
  setup(o) {
    const e = o, s = R(), u = O("isInEditor", B.isInEditor()), q = O("componentMapping", new ae()), v = (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })(), r = I(null), w = I(-1), l = I(e.expandedItems), E = I(null), P = m(() => (s == null ? void 0 : s.singleExpansion) === !0);
    v && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (r.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const V = m(() => {
      const t = {};
      return u && (t["data-panelcontainer"] = "accordion", t["data-cq-data-path"] = e.cqPath || "", t["data-placeholder-text"] = "Please drag Accordion item components here"), t;
    }), N = (t, n = e.cqPath) => {
      console.log("CqPath: ", n), t.data && t.data.id === n && t.data.operation === "navigate" && (w.value = t.data.index);
    }, j = (t) => {
      var n;
      return ((n = e.cqPath) == null ? void 0 : n.length) > 0 ? `${e.cqPath}/${t}` : t;
    }, T = (t, n, a) => {
      const c = j(a);
      return K(t, {
        ...n,
        cqPath: c,
        containerProps: {}
      });
    }, U = m(() => {
      const t = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((n) => {
        const a = oe.modelToProps(
          e.cqItems[n]
        );
        if (a && typeof a.cqType < "u") {
          const c = q.get(a.cqType);
          c && t.push(
            T(c, a, n)
          );
        }
      }), t;
    }), z = m(
      () => G(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), f = (t) => {
      const n = E.value.querySelector(
        `button[data-cmp-button-id="${t}"]`
      );
      n && n.focus();
    }, D = (t, n) => {
      const a = l.value.indexOf(t) > -1;
      if (P.value)
        l.value = a ? [] : [t];
      else if (a) {
        const c = l.value.indexOf(t);
        l.value.splice(c, 1);
      } else
        l.value.push(t);
      n.target.focus();
    }, F = (t, n, a) => {
      const c = E.value.querySelectorAll("button").length - 1;
      switch (n.code) {
        case "ArrowLeft":
        case "ArrowUp":
          n.preventDefault(), a > 0 && f(a - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          n.preventDefault(), a < c && f(a + 1);
          break;
        case "Home":
          n.preventDefault(), f(0);
          break;
        case "End":
          n.preventDefault(), f(c);
          break;
        case "Enter":
        case "Space":
          n.preventDefault(), D(t, n), f(a);
          break;
      }
    }, b = (t) => l.value.indexOf(t) > -1, H = m(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return S(P, async (t, n) => {
      t !== n && (l.value = e.expandedItems);
    }), S(e.expandedItems, async (t, n) => {
      t !== n && (l.value = t);
    }), S(w, async (t, n) => {
      t !== -1 && typeof t < "u" && n !== t && e.cqItemsOrder && (l.value = [e.cqItemsOrder[n]]);
    }), J(() => {
      r.value && r.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        N
      );
    }), Q(() => {
      r.value && r.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        N
      );
    }), (t, n) => (i(), _("div", h({
      id: e.id,
      ref_key: "accordion",
      ref: E,
      class: z.value,
      "data-cmp-single-expansion": P.value === !0 ? !0 : void 0
    }, V.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (i(!0), _(X, { key: 0 }, Y(e.cqItemsOrder, (a, c) => (i(), _("div", {
        id: `accordion-${e.cqItems[a].id}`,
        key: `accordion-index-${c}`,
        class: p(`${e.baseCssClass}__item`),
        "data-cmp-expanded": b(a) ? !0 : void 0
      }, [
        (i(), C($(e.headingElement), {
          class: p(`${e.baseCssClass}__header`)
        }, {
          default: L(() => [
            x("button", {
              id: `accordion-${e.cqItems[a].id}-button`,
              "aria-controls": `accordion-${e.cqItems[a].id}-panel`,
              class: p([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: b(a)
                }
              ]),
              "data-cmp-button-id": c,
              onClick: (A) => D(a, A),
              onKeydown: (A) => F(a, A, c)
            }, [
              x("span", {
                class: p(`${e.baseCssClass}__title`)
              }, Z(e.cqItems[a]["cq:panelTitle"]), 3),
              x("span", {
                class: p(`${e.baseCssClass}__icon`)
              }, null, 2)
            ], 42, re)
          ]),
          _: 2
        }, 1032, ["class"])),
        d(u) || b(a) ? (i(), _("div", {
          key: 0,
          id: `accordion-${e.cqItems[a].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[a].id}-button`,
          class: p(`${e.baseCssClass}__panel ${b(a) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (i(), C($(U.value[o.cqItemsOrder.indexOf(a)]), { key: 0 })) : y("", !0)
        ], 10, le)) : y("", !0)
      ], 10, ie))), 128)) : y("", !0),
      d(u) ? (i(), C(d(se), g(h({ key: 1 }, H.value)), null, 16)) : y("", !0)
    ], 16, ce));
  }
});
export {
  me as AccordionEditConfig,
  Ce as ContainerEditConfig,
  he as CoreAccordion,
  fe as CoreContainer
};
