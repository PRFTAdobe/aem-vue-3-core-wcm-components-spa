import { defineComponent as $, useAttrs as L, inject as P, computed as C, openBlock as c, createBlock as u, unref as l, normalizeProps as g, mergeProps as _, resolveDynamicComponent as N, normalizeClass as p, normalizeStyle as H, withCtx as R, ref as b, watch as S, onMounted as T, onUnmounted as J, createElementBlock as I, Fragment as K, renderList as Q, createElementVNode as O, toDisplayString as W, createCommentVNode as y } from "vue";
import { componentProperties as M, componentClassNames as G, AllowedComponentsContainer as X, ResponsiveGrid as Y, Container as Z, ComponentMapping as ee, Utils as te, ContainerPlaceholder as ne } from "aem-vue-3-editable-components";
import { AuthoringUtils as F } from "@adobe/aem-spa-page-model-manager";
const ue = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(n) {
    return !n.cqItemsOrder || (n == null ? void 0 : n.cqItemsOrder.length) === 0;
  }
}, me = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(n) {
    return !n.cqItemsOrder || (n == null ? void 0 : n.cqItemsOrder.length) === 0;
  }
}, pe = {
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
    ...M("cmp-container")
  },
  setup(n) {
    const e = n, o = L(), m = typeof e.isInEditor < "u" ? e.isInEditor : P("isInEditor", F.isInEditor()), v = C(
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
        var r;
        return m && (o == null ? void 0 : o.allowedComponents) && ((r = o == null ? void 0 : o.allowedComponents) == null ? void 0 : r.applicable);
      }
    );
    return (r, q) => E.value ? (c(), u(l(X), g(_({ key: 0 }, { ...e, ...l(o) })), null, 16)) : (c(), u(N(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: p(v.value),
      role: e.roleAttribute,
      style: H(e.backgroundStyle)
    }, {
      default: R(() => [
        n.layout === "RESPONSIVE_GRID" ? (c(), u(l(Y), g(_({ key: 0 }, {
          ...e,
          ...l(o),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (c(), u(l(Z), g(_({ key: 1 }, { ...e, ...l(o) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), se = ["id", "data-cmp-single-expansion"], oe = ["id", "data-cmp-expanded"], ce = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], re = ["id", "aria-labelledby"], Ce = /* @__PURE__ */ $({
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
  setup(n) {
    const e = n, o = L(), m = P("isInEditor", F.isInEditor()), v = P("componentMapping", new ee()), E = (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })(), r = b(null), q = b(-1), i = b(e.expandedItems), w = b(null), x = C(() => (o == null ? void 0 : o.singleExpansion) === !0);
    E && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (r.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const B = C(() => {
      const t = {};
      return m && (t["data-panelcontainer"] = "accordion", t["data-cq-data-path"] = e.cqPath || "", t["data-placeholder-text"] = "Please drag Accordion item components here"), t;
    }), D = (t, a = e.cqPath) => {
      t.data && t.data.id === a && t.data.operation === "navigate" && (q.value = t.data.index);
    }, V = C(
      () => te.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        v
      )
    ), U = C(
      () => G(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        m,
        e.aemNoDecoration
      )
    ), f = (t) => {
      const a = w.value.querySelector(
        `button[data-cmp-button-id="${t}"]`
      );
      a && a.focus();
    }, k = (t, a) => {
      const s = i.value.indexOf(t) > -1;
      if (x.value)
        i.value = s ? [] : [t];
      else if (s) {
        const d = i.value.indexOf(t);
        i.value.splice(d, 1);
      } else
        i.value.push(t);
      a.target.focus();
    }, j = (t, a, s) => {
      const d = w.value.querySelectorAll("button").length - 1;
      switch (a.code) {
        case "ArrowLeft":
        case "ArrowUp":
          a.preventDefault(), s > 0 && f(s - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          a.preventDefault(), s < d && f(s + 1);
          break;
        case "Home":
          a.preventDefault(), f(0);
          break;
        case "End":
          a.preventDefault(), f(d);
          break;
        case "Enter":
        case "Space":
          a.preventDefault(), k(t, a), f(s);
          break;
      }
    }, h = (t) => i.value.indexOf(t) > -1, z = C(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return S(x, async (t, a) => {
      t !== a && (i.value = e.expandedItems);
    }), S(e.expandedItems, async (t, a) => {
      t !== a && (i.value = t);
    }), S(q, async (t, a) => {
      t !== -1 && typeof t < "u" && a !== t && e.cqItemsOrder && (i.value = [e.cqItemsOrder[a]]);
    }), T(() => {
      r.value && r.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        D
      );
    }), J(() => {
      r.value && r.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        D
      );
    }), (t, a) => (c(), I("div", _({
      id: e.id,
      ref_key: "accordion",
      ref: w,
      class: U.value,
      "data-cmp-single-expansion": x.value === !0 ? !0 : void 0
    }, B.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (c(!0), I(K, { key: 0 }, Q(e.cqItemsOrder, (s, d) => (c(), I("div", {
        id: `accordion-${e.cqItems[s].id}`,
        key: `accordion-index-${d}`,
        class: p(`${e.baseCssClass}__item`),
        "data-cmp-expanded": h(s) ? !0 : void 0
      }, [
        (c(), u(N(e.headingElement), {
          class: p(`${e.baseCssClass}__header`)
        }, {
          default: R(() => [
            O("button", {
              id: `accordion-${e.cqItems[s].id}-button`,
              "aria-controls": `accordion-${e.cqItems[s].id}-panel`,
              class: p([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: h(s)
                }
              ]),
              "data-cmp-button-id": d,
              onClick: (A) => k(s, A),
              onKeydown: (A) => j(s, A, d)
            }, [
              O("span", {
                class: p(`${e.baseCssClass}__title`)
              }, W(e.cqItems[s]["cq:panelTitle"]), 3),
              O("span", {
                class: p(`${e.baseCssClass}__icon`)
              }, null, 2)
            ], 42, ce)
          ]),
          _: 2
        }, 1032, ["class"])),
        l(m) || h(s) ? (c(), I("div", {
          key: 0,
          id: `accordion-${e.cqItems[s].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[s].id}-button`,
          class: p(`${e.baseCssClass}__panel ${h(s) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (c(), u(N(V.value[n.cqItemsOrder.indexOf(s)]), { key: 0 })) : y("", !0)
        ], 10, re)) : y("", !0)
      ], 10, oe))), 128)) : y("", !0),
      l(m) ? (c(), u(l(ne), g(_({ key: 1 }, z.value)), null, 16)) : y("", !0)
    ], 16, se));
  }
});
const fe = /* @__PURE__ */ $({
  __name: "CoreExperienceFragment",
  setup(n) {
    return (e, o) => (c(), u(ae, { "is-in-editor": !1 }));
  }
});
export {
  ue as AccordionEditConfig,
  me as ContainerEditConfig,
  Ce as CoreAccordion,
  ae as CoreContainer,
  fe as CoreExperienceFragment,
  pe as ExperienceFragmentEditConfig
};
