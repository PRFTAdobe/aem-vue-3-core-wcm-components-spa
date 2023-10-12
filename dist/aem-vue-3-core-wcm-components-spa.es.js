import { defineComponent as k, useAttrs as R, inject as O, computed as m, openBlock as c, createBlock as C, unref as l, normalizeProps as v, mergeProps as b, resolveDynamicComponent as $, normalizeClass as p, normalizeStyle as H, withCtx as L, ref as I, watch as x, onMounted as T, onUnmounted as J, createElementBlock as _, Fragment as K, renderList as Q, createElementVNode as P, toDisplayString as W, createCommentVNode as y } from "vue";
import { componentProperties as M, componentClassNames as G, AllowedComponentsContainer as X, ResponsiveGrid as Y, Container as Z, ComponentMapping as ee, Utils as te, ContainerPlaceholder as ne } from "aem-vue-3-editable-components";
import { AuthoringUtils as B } from "@adobe/aem-spa-page-model-manager";
const de = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, ue = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, pe = /* @__PURE__ */ k({
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
      validator: (s) => ["RESPONSIVE_GRID", "SIMPLE"].includes(s)
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
  setup(s) {
    const e = s, o = R(), u = typeof e.isInEditor < "u" ? e.isInEditor : O("isInEditor", B.isInEditor()), g = m(
      () => G(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), q = m(
      () => {
        var i;
        return u && (o == null ? void 0 : o.allowedComponents) && ((i = o == null ? void 0 : o.allowedComponents) == null ? void 0 : i.applicable);
      }
    );
    return (i, w) => q.value ? (c(), C(l(X), v(b({ key: 0 }, { ...e, ...l(o) })), null, 16)) : (c(), C($(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: p(g.value),
      role: e.roleAttribute,
      style: H(e.backgroundStyle)
    }, {
      default: L(() => [
        s.layout === "RESPONSIVE_GRID" ? (c(), C(l(Y), v(b({ key: 0 }, {
          ...e,
          ...l(o),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (c(), C(l(Z), v(b({ key: 1 }, { ...e, ...l(o) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), ae = ["id", "data-cmp-single-expansion"], se = ["id", "data-cmp-expanded"], oe = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], ce = ["id", "aria-labelledby"], me = /* @__PURE__ */ k({
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
  setup(s) {
    const e = s, o = R(), u = O("isInEditor", B.isInEditor()), g = O("componentMapping", new ee()), q = (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })(), i = I(null), w = I(-1), r = I(e.expandedItems), E = I(null), A = m(() => (o == null ? void 0 : o.singleExpansion) === !0);
    q && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (i.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const V = m(() => {
      const t = {};
      return u && (t["data-panelcontainer"] = "accordion", t["data-cq-data-path"] = e.cqPath || "", t["data-placeholder-text"] = "Please drag Accordion item components here"), t;
    }), N = (t, n = e.cqPath) => {
      t.data && t.data.id === n && t.data.operation === "navigate" && (w.value = t.data.index);
    }, U = m(
      () => te.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        g
      )
    ), j = m(
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
      const a = r.value.indexOf(t) > -1;
      if (A.value)
        r.value = a ? [] : [t];
      else if (a) {
        const d = r.value.indexOf(t);
        r.value.splice(d, 1);
      } else
        r.value.push(t);
      n.target.focus();
    }, z = (t, n, a) => {
      const d = E.value.querySelectorAll("button").length - 1;
      switch (n.code) {
        case "ArrowLeft":
        case "ArrowUp":
          n.preventDefault(), a > 0 && f(a - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          n.preventDefault(), a < d && f(a + 1);
          break;
        case "Home":
          n.preventDefault(), f(0);
          break;
        case "End":
          n.preventDefault(), f(d);
          break;
        case "Enter":
        case "Space":
          n.preventDefault(), D(t, n), f(a);
          break;
      }
    }, h = (t) => r.value.indexOf(t) > -1, F = m(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return x(A, async (t, n) => {
      t !== n && (r.value = e.expandedItems);
    }), x(e.expandedItems, async (t, n) => {
      t !== n && (r.value = t);
    }), x(w, async (t, n) => {
      t !== -1 && typeof t < "u" && n !== t && e.cqItemsOrder && (r.value = [e.cqItemsOrder[n]]);
    }), T(() => {
      i.value && i.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        N
      );
    }), J(() => {
      i.value && i.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        N
      );
    }), (t, n) => (c(), _("div", b({
      id: e.id,
      ref_key: "accordion",
      ref: E,
      class: j.value,
      "data-cmp-single-expansion": A.value === !0 ? !0 : void 0
    }, V.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (c(!0), _(K, { key: 0 }, Q(e.cqItemsOrder, (a, d) => (c(), _("div", {
        id: `accordion-${e.cqItems[a].id}`,
        key: `accordion-index-${d}`,
        class: p(`${e.baseCssClass}__item`),
        "data-cmp-expanded": h(a) ? !0 : void 0
      }, [
        (c(), C($(e.headingElement), {
          class: p(`${e.baseCssClass}__header`)
        }, {
          default: L(() => [
            P("button", {
              id: `accordion-${e.cqItems[a].id}-button`,
              "aria-controls": `accordion-${e.cqItems[a].id}-panel`,
              class: p([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: h(a)
                }
              ]),
              "data-cmp-button-id": d,
              onClick: (S) => D(a, S),
              onKeydown: (S) => z(a, S, d)
            }, [
              P("span", {
                class: p(`${e.baseCssClass}__title`)
              }, W(e.cqItems[a]["cq:panelTitle"]), 3),
              P("span", {
                class: p(`${e.baseCssClass}__icon`)
              }, null, 2)
            ], 42, oe)
          ]),
          _: 2
        }, 1032, ["class"])),
        l(u) || h(a) ? (c(), _("div", {
          key: 0,
          id: `accordion-${e.cqItems[a].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[a].id}-button`,
          class: p(`${e.baseCssClass}__panel ${h(a) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (c(), C($(U.value[s.cqItemsOrder.indexOf(a)]), { key: 0 })) : y("", !0)
        ], 10, ce)) : y("", !0)
      ], 10, se))), 128)) : y("", !0),
      l(u) ? (c(), C(l(ne), v(b({ key: 1 }, F.value)), null, 16)) : y("", !0)
    ], 16, ae));
  }
});
export {
  de as AccordionEditConfig,
  ue as ContainerEditConfig,
  me as CoreAccordion,
  pe as CoreContainer
};
