import { defineComponent as $, useAttrs as L, inject as P, computed as C, openBlock as i, createBlock as u, unref as l, normalizeProps as y, mergeProps as f, resolveDynamicComponent as N, normalizeClass as p, normalizeStyle as H, withCtx as M, ref as g, watch as O, onMounted as T, onUnmounted as J, createElementBlock as I, Fragment as K, renderList as Q, createElementVNode as h, toDisplayString as W, createCommentVNode as v } from "vue";
import { componentProperties as R, componentClassNames as G, AllowedComponentsContainer as X, ResponsiveGrid as Y, Container as Z, ComponentMapping as ee, Utils as te, ContainerPlaceholder as ne } from "aem-vue-3-editable-components";
import { AuthoringUtils as B } from "@adobe/aem-spa-page-model-manager";
const pe = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(n) {
    return !n.cqItemsOrder || (n == null ? void 0 : n.cqItemsOrder.length) === 0;
  }
}, Ce = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(n) {
    return !n.cqItemsOrder || (n == null ? void 0 : n.cqItemsOrder.length) === 0;
  }
}, _e = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(n) {
    return !n.cqItemsOrder || (n == null ? void 0 : n.cqItemsOrder.length) === 0;
  }
}, ae = /* @__PURE__ */ $({
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
      validator: (n) => ["RESPONSIVE_GRID", "SIMPLE"].includes(n)
    },
    // eslint-disable-next-line vue/require-default-prop
    roleAttribute: {
      type: String
    },
    styleSystemElement: {
      type: String,
      default: "div"
    },
    ...R("cmp-container")
  },
  setup(n) {
    const e = n, o = L(), m = typeof e.isInEditor < "u" ? e.isInEditor : P("isInEditor", B.isInEditor()), w = C(
      () => G(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        m,
        e.aemNoDecoration
      )
    ), E = C(
      () => {
        var c;
        return m && (o == null ? void 0 : o.allowedComponents) && ((c = o == null ? void 0 : o.allowedComponents) == null ? void 0 : c.applicable);
      }
    );
    return (c, q) => E.value ? (i(), u(l(X), y(f({ key: 0 }, { ...e, ...l(o) })), null, 16)) : (i(), u(N(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: p(w.value),
      role: e.roleAttribute,
      style: H(e.backgroundStyle)
    }, {
      default: M(() => [
        n.layout === "RESPONSIVE_GRID" ? (i(), u(l(Y), y(f({ key: 0 }, {
          ...e,
          ...l(o),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (i(), u(l(Z), y(f({ key: 1 }, { ...e, ...l(o) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), se = ["id", "data-cmp-single-expansion"], oe = ["id", "data-cmp-expanded"], ie = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], ce = /* @__PURE__ */ h("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ h("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), re = [
  ce
], le = ["id", "aria-labelledby"], fe = /* @__PURE__ */ $({
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
    ...R("cmp-accordion")
  },
  setup(n) {
    const e = n, o = L(), m = P("isInEditor", B.isInEditor()), w = P("componentMapping", new ee()), E = (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })(), c = g(null), q = g(-1), r = g(e.expandedItems), x = g(null), A = C(() => (o == null ? void 0 : o.singleExpansion) === !0);
    E && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (c.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const F = C(() => {
      const t = {};
      return m && (t["data-panelcontainer"] = "accordion", t["data-cq-data-path"] = e.cqPath || "", t["data-placeholder-text"] = "Please drag Accordion item components here"), t;
    }), D = (t, s = e.cqPath) => {
      t.data && t.data.id === s && t.data.operation === "navigate" && (q.value = t.data.index);
    }, V = C(
      () => te.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        w
      )
    ), z = C(
      () => G(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        m,
        e.aemNoDecoration
      )
    ), _ = (t) => {
      const s = x.value.querySelector(
        `button[data-cmp-button-id="${t}"]`
      );
      s && s.focus();
    }, k = (t, s) => {
      const a = r.value.indexOf(t) > -1;
      if (A.value)
        r.value = a ? [] : [t];
      else if (a) {
        const d = r.value.indexOf(t);
        r.value.splice(d, 1);
      } else
        r.value.push(t);
      s.target.focus();
    }, U = (t, s, a) => {
      const d = x.value.querySelectorAll("button").length - 1;
      switch (s.code) {
        case "ArrowLeft":
        case "ArrowUp":
          s.preventDefault(), a > 0 && _(a - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          s.preventDefault(), a < d && _(a + 1);
          break;
        case "Home":
          s.preventDefault(), _(0);
          break;
        case "End":
          s.preventDefault(), _(d);
          break;
        case "Enter":
        case "Space":
          s.preventDefault(), k(t, s), _(a);
          break;
      }
    }, b = (t) => r.value.indexOf(t) > -1, j = C(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return O(A, async (t, s) => {
      t !== s && (r.value = e.expandedItems);
    }), O(e.expandedItems, async (t, s) => {
      t !== s && (r.value = t);
    }), O(q, async (t, s) => {
      t !== -1 && typeof t < "u" && t !== s && e.cqItemsOrder && (r.value = [e.cqItemsOrder[t]]);
    }), T(() => {
      c.value && c.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        D
      );
    }), J(() => {
      c.value && c.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        D
      );
    }), (t, s) => (i(), I("div", f({
      id: e.id,
      ref_key: "accordion",
      ref: x,
      class: z.value,
      "data-cmp-single-expansion": A.value === !0 ? !0 : void 0
    }, F.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (i(!0), I(K, { key: 0 }, Q(e.cqItemsOrder, (a, d) => (i(), I("div", {
        id: `accordion-${e.cqItems[a].id}`,
        key: `accordion-index-${d}`,
        class: p(`${e.baseCssClass}__item`),
        "data-cmp-expanded": b(a) ? !0 : void 0
      }, [
        (i(), u(N(e.headingElement), {
          class: p(`${e.baseCssClass}__heading`)
        }, {
          default: M(() => [
            h("button", {
              id: `accordion-${e.cqItems[a].id}-button`,
              "aria-controls": `accordion-${e.cqItems[a].id}-panel`,
              class: p([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: b(a)
                }
              ]),
              "data-cmp-button-id": d,
              onClick: (S) => k(a, S),
              onKeydown: (S) => U(a, S, d)
            }, [
              h("span", {
                class: p(`${e.baseCssClass}__title`)
              }, W(e.cqItems[a]["cq:panelTitle"]), 3),
              h("span", {
                class: p(`${e.baseCssClass}__icon`)
              }, re, 2)
            ], 42, ie)
          ]),
          _: 2
        }, 1032, ["class"])),
        l(m) || b(a) ? (i(), I("div", {
          key: 0,
          id: `accordion-${e.cqItems[a].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[a].id}-button`,
          class: p(`${e.baseCssClass}__panel ${b(a) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (i(), u(N(V.value[n.cqItemsOrder.indexOf(a)]), { key: 0 })) : v("", !0)
        ], 10, le)) : v("", !0)
      ], 10, oe))), 128)) : v("", !0),
      l(m) ? (i(), u(l(ne), y(f({ key: 1 }, j.value)), null, 16)) : v("", !0)
    ], 16, se));
  }
});
const he = /* @__PURE__ */ $({
  __name: "CoreExperienceFragment",
  setup(n) {
    return (e, o) => (i(), u(ae, { "is-in-editor": !1 }));
  }
});
export {
  pe as AccordionEditConfig,
  Ce as ContainerEditConfig,
  fe as CoreAccordion,
  ae as CoreContainer,
  he as CoreExperienceFragment,
  _e as ExperienceFragmentEditConfig
};
