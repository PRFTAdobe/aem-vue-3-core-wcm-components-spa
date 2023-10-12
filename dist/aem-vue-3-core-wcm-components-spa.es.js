import { defineComponent as k, useAttrs as R, inject as O, computed as m, openBlock as c, createBlock as C, unref as r, normalizeProps as v, mergeProps as b, resolveDynamicComponent as N, normalizeClass as p, normalizeStyle as H, withCtx as L, ref as I, watch as x, onMounted as T, onUnmounted as J, createElementBlock as _, Fragment as K, renderList as Q, createElementVNode as P, toDisplayString as W, createCommentVNode as y } from "vue";
import { componentProperties as M, componentClassNames as G, AllowedComponentsContainer as X, ResponsiveGrid as Y, Container as Z, ComponentMapping as ee, Utils as te, ContainerPlaceholder as ae } from "aem-vue-3-editable-components";
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
        e.cssClassNames,
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
    return (i, w) => q.value ? (c(), C(r(X), v(b({ key: 0 }, { ...e, ...r(o) })), null, 16)) : (c(), C(N(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: p(g.value),
      role: e.roleAttribute,
      style: H(e.backgroundStyle)
    }, {
      default: L(() => [
        s.layout === "RESPONSIVE_GRID" ? (c(), C(r(Y), v(b({ key: 0 }, {
          ...e,
          ...r(o),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (c(), C(r(Z), v(b({ key: 1 }, { ...e, ...r(o) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), ne = ["id", "data-cmp-single-expansion"], se = ["id", "data-cmp-expanded"], oe = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], ce = ["id", "aria-labelledby"], me = /* @__PURE__ */ k({
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
    })(), i = I(null), w = I(-1), l = I(e.expandedItems), E = I(null), A = m(() => (o == null ? void 0 : o.singleExpansion) === !0);
    q && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (i.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const V = m(() => {
      const t = {};
      return u && (t["data-panelcontainer"] = "accordion", t["data-cq-data-path"] = e.cqPath || "", t["data-placeholder-text"] = "Please drag Accordion item components here"), t;
    }), $ = (t, a = e.cqPath) => {
      t.data && t.data.id === a && t.data.operation === "navigate" && (w.value = t.data.index);
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
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), f = (t) => {
      const a = E.value.querySelector(
        `button[data-cmp-button-id="${t}"]`
      );
      a && a.focus();
    }, D = (t, a) => {
      const n = l.value.indexOf(t) > -1;
      if (A.value)
        l.value = n ? [] : [t];
      else if (n) {
        const d = l.value.indexOf(t);
        l.value.splice(d, 1);
      } else
        l.value.push(t);
      a.target.focus();
    }, z = (t, a, n) => {
      const d = E.value.querySelectorAll("button").length - 1;
      switch (a.code) {
        case "ArrowLeft":
        case "ArrowUp":
          a.preventDefault(), n > 0 && f(n - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          a.preventDefault(), n < d && f(n + 1);
          break;
        case "Home":
          a.preventDefault(), f(0);
          break;
        case "End":
          a.preventDefault(), f(d);
          break;
        case "Enter":
        case "Space":
          a.preventDefault(), D(t, a), f(n);
          break;
      }
    }, h = (t) => l.value.indexOf(t) > -1, F = m(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return x(A, async (t, a) => {
      t !== a && (l.value = e.expandedItems);
    }), x(e.expandedItems, async (t, a) => {
      t !== a && (l.value = t);
    }), x(w, async (t, a) => {
      t !== -1 && typeof t < "u" && a !== t && e.cqItemsOrder && (l.value = [e.cqItemsOrder[a]]);
    }), T(() => {
      i.value && i.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        $
      );
    }), J(() => {
      i.value && i.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        $
      );
    }), (t, a) => (c(), _("div", b({
      id: e.id,
      ref_key: "accordion",
      ref: E,
      class: j.value,
      "data-cmp-single-expansion": A.value === !0 ? !0 : void 0
    }, V.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (c(!0), _(K, { key: 0 }, Q(e.cqItemsOrder, (n, d) => (c(), _("div", {
        id: `accordion-${e.cqItems[n].id}`,
        key: `accordion-index-${d}`,
        class: p(`${e.baseCssClass}__item`),
        "data-cmp-expanded": h(n) ? !0 : void 0
      }, [
        (c(), C(N(e.headingElement), {
          class: p(`${e.baseCssClass}__header`)
        }, {
          default: L(() => [
            P("button", {
              id: `accordion-${e.cqItems[n].id}-button`,
              "aria-controls": `accordion-${e.cqItems[n].id}-panel`,
              class: p([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: h(n)
                }
              ]),
              "data-cmp-button-id": d,
              onClick: (S) => D(n, S),
              onKeydown: (S) => z(n, S, d)
            }, [
              P("span", {
                class: p(`${e.baseCssClass}__title`)
              }, W(e.cqItems[n]["cq:panelTitle"]), 3),
              P("span", {
                class: p(`${e.baseCssClass}__icon`)
              }, null, 2)
            ], 42, oe)
          ]),
          _: 2
        }, 1032, ["class"])),
        r(u) || h(n) ? (c(), _("div", {
          key: 0,
          id: `accordion-${e.cqItems[n].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[n].id}-button`,
          class: p(`${e.baseCssClass}__panel ${h(n) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (c(), C(N(U.value[s.cqItemsOrder.indexOf(n)]), { key: 0 })) : y("", !0)
        ], 10, ce)) : y("", !0)
      ], 10, se))), 128)) : y("", !0),
      r(u) ? (c(), C(r(ae), v(b({ key: 1 }, F.value)), null, 16)) : y("", !0)
    ], 16, ne));
  }
});
export {
  de as AccordionEditConfig,
  ue as ContainerEditConfig,
  me as CoreAccordion,
  pe as CoreContainer
};
