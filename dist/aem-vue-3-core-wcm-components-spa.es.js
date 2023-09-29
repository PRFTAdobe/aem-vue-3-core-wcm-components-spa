import { defineComponent as D, useAttrs as R, inject as O, computed as p, openBlock as l, createBlock as u, unref as r, normalizeProps as I, mergeProps as C, resolveDynamicComponent as $, normalizeClass as h, normalizeStyle as J, withCtx as M, createCommentVNode as q, ref as g, watch as S, onMounted as Q, onUnmounted as X, createElementBlock as _, Fragment as Y, renderList as Z, createElementVNode as x, toDisplayString as K, h as ee } from "vue";
import { componentProperties as G, componentClassNames as L, AllowedComponentsContainer as te, ResponsiveGrid as ne, Container as ae, ContainerPlaceholder as B, ComponentMapping as se, Utils as oe } from "aem-vue-3-editable-components";
import { AuthoringUtils as j } from "@adobe/aem-spa-page-model-manager";
const me = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(c) {
    return !c.cqItemsOrder || (c == null ? void 0 : c.cqItemsOrder.length) === 0;
  }
}, he = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "CoreContainer",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    accessibilityLabel: {
      type: String
    },
    aemNoDecoration: {
      type: Boolean,
      default: !0
    },
    // eslint-disable-next-line vue/require-default-prop
    backgroundStyle: {
      type: String
    },
    cqPath: {
      type: String,
      default: ""
    },
    layout: {
      type: String,
      default: "RESPONSIVE_GRID",
      validator: (c) => ["RESPONSIVE_GRID", "SIMPLE"].includes(c)
    },
    // eslint-disable-next-line vue/require-default-prop
    roleAttribute: {
      type: String
    },
    styleSystemElement: {
      type: String,
      default: "div"
    },
    ...G("cmp-container")
  },
  setup(c) {
    const e = c, s = R(), d = O("isInEditor", j.isInEditor()), v = p(
      () => L(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.containerProps,
        d
      )
    ), w = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), m = p(
      () => {
        var f;
        return d && (s == null ? void 0 : s.allowedComponents) && ((f = s == null ? void 0 : s.allowedComponents) == null ? void 0 : f.applicable);
      }
    );
    return (f, i) => m.value ? (l(), u(r(te), I(C({ key: 0 }, { ...e, ...r(s) })), null, 16)) : (l(), u($(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: h(v.value),
      role: e.roleAttribute,
      style: J(e.backgroundStyle)
    }, {
      default: M(() => [
        c.layout === "RESPONSIVE_GRID" ? (l(), u(r(ne), I(C({ key: 0 }, {
          ...e,
          ...r(s),
          allowedComponents: { applicable: !1, components: [] },
          isInEditor: !1,
          title: ""
        })), null, 16)) : (l(), u(r(ae), I(C({ key: 1 }, { ...e, ...r(s), isInEditor: !1 })), null, 16)),
        r(d) ? (l(), u(r(B), I(C({ key: 2 }, w.value)), null, 16)) : q("", !0)
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), ce = ["id", "data-cmp-single-expansion"], le = ["id", "data-cmp-expanded"], re = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], ie = ["id", "aria-labelledby"], fe = /* @__PURE__ */ D({
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
    ...G("cmp-accordion")
  },
  setup(c) {
    const e = c, s = R(), d = O("isInEditor", j.isInEditor()), v = O("componentMapping", new se()), w = (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })(), m = g(null), f = g(-1), i = g(e.expandedItems), P = g(null), E = p(() => (s == null ? void 0 : s.singleExpansion) === !0);
    w && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (m.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const V = p(() => {
      const t = {};
      return d && (t["data-panelcontainer"] = "accordion", t["data-cq-data-path"] = e.cqPath || "", t["data-placeholder-text"] = "Please drag Accordion item components here"), t;
    }), N = (t, n = e.cqPath) => {
      console.log("CqPath: ", n), t.data && t.data.id === n && t.data.operation === "navigate" && (f.value = t.data.index);
    }, T = (t) => {
      var n;
      return ((n = e.cqPath) == null ? void 0 : n.length) > 0 ? `${e.cqPath}/${t}` : t;
    }, U = (t, n, a) => {
      const o = T(a);
      return ee(t, {
        ...n,
        cqPath: o,
        containerProps: {}
      });
    }, z = p(() => {
      const t = [];
      return Object.keys(e.cqItems).length > 0 && e.cqItemsOrder.length > 0 && e.cqItemsOrder.forEach((n) => {
        const a = oe.modelToProps(
          e.cqItems[n]
        );
        if (a && typeof a.cqType < "u") {
          const o = v.get(a.cqType);
          o && t.push(
            U(o, a, n)
          );
        }
      }), t;
    }), F = p(
      () => L(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.containerProps,
        d
      )
    ), b = (t) => {
      const n = P.value.querySelector(
        `button[data-cmp-button-id="${t}"]`
      );
      n && n.focus();
    }, k = (t, n) => {
      const a = i.value.indexOf(t) > -1;
      if (E.value)
        i.value = a ? [] : [t];
      else if (a) {
        const o = i.value.indexOf(t);
        i.value.splice(o, 1);
      } else
        i.value.push(t);
      n.target.focus();
    }, H = (t, n, a) => {
      const o = P.value.querySelectorAll("button").length - 1;
      switch (n.code) {
        case "ArrowLeft":
        case "ArrowUp":
          n.preventDefault(), a > 0 && b(a - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          n.preventDefault(), a < o && b(a + 1);
          break;
        case "Home":
          n.preventDefault(), b(0);
          break;
        case "End":
          n.preventDefault(), b(o);
          break;
        case "Enter":
        case "Space":
          n.preventDefault(), k(t, n), b(a);
          break;
      }
    }, y = (t) => i.value.indexOf(t) > -1, W = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return S(E, async (t, n) => {
      t !== n && (i.value = e.expandedItems);
    }), S(e.expandedItems, async (t, n) => {
      t !== n && (i.value = t);
    }), S(f, async (t, n) => {
      t !== -1 && typeof t < "u" && n !== t && e.cqItemsOrder && (i.value = [e.cqItemsOrder[n]]);
    }), Q(() => {
      m.value && m.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        N
      );
    }), X(() => {
      m.value && m.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        N
      );
    }), (t, n) => (l(), _("div", C({
      id: e.id,
      ref_key: "accordion",
      ref: P,
      class: F.value,
      "data-cmp-single-expansion": E.value === !0 ? !0 : void 0
    }, V.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (l(!0), _(Y, { key: 0 }, Z(e.cqItemsOrder, (a, o) => (l(), _("div", {
        id: `accordion-${e.cqItems[a].id}`,
        key: `accordion-index-${o}`,
        class: h(`${e.baseCssClass}__item`),
        "data-cmp-expanded": y(a) ? !0 : void 0
      }, [
        (l(), u($(e.headingElement), {
          class: h(`${e.baseCssClass}__header`)
        }, {
          default: M(() => [
            x("button", {
              id: `accordion-${e.cqItems[a].id}-button`,
              "aria-controls": `accordion-${e.cqItems[a].id}-panel`,
              class: h([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: y(a)
                }
              ]),
              "data-cmp-button-id": o,
              onClick: (A) => k(a, A),
              onKeydown: (A) => H(a, A, o)
            }, [
              x("span", {
                class: h(`${e.baseCssClass}__title`)
              }, K(e.cqItems[a]["cq:panelTitle"]), 3),
              x("span", {
                class: h(`${e.baseCssClass}__icon`)
              }, null, 2)
            ], 42, re)
          ]),
          _: 2
        }, 1032, ["class"])),
        r(d) || y(a) ? (l(), _("div", {
          key: 0,
          id: `accordion-${e.cqItems[a].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[a].id}-button`,
          class: h(`${e.baseCssClass}__panel ${y(a) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (l(), u($(z.value[c.cqItemsOrder.indexOf(a)]), { key: 0 })) : q("", !0)
        ], 10, ie)) : q("", !0)
      ], 10, le))), 128)) : q("", !0),
      r(d) ? (l(), u(r(B), I(C({ key: 1 }, W.value)), null, 16)) : q("", !0)
    ], 16, ce));
  }
});
export {
  me as AccordionEditConfig,
  fe as CoreAccordion,
  he as CoreContainer
};
