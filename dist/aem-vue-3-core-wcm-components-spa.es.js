import { defineComponent as V, useAttrs as K, inject as M, computed as f, openBlock as o, createBlock as g, unref as y, normalizeProps as N, mergeProps as A, resolveDynamicComponent as z, normalizeClass as n, normalizeStyle as oe, withCtx as Y, ref as q, watch as F, onMounted as Z, onUnmounted as ee, createElementBlock as v, Fragment as j, renderList as J, createElementVNode as c, toDisplayString as P, createCommentVNode as w } from "vue";
import { componentProperties as Q, componentClassNames as W, AllowedComponentsContainer as ie, ResponsiveGrid as ce, Container as re, ComponentMapping as ae, Utils as se, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { AuthoringUtils as X } from "@adobe/aem-spa-page-model-manager";
const Pe = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, Ae = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, Se = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, ke = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, de = /* @__PURE__ */ V({
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
    ...Q("cmp-container")
  },
  setup(s) {
    const e = s, r = K(), m = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", X.isInEditor()), S = f(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        m,
        e.aemNoDecoration
      )
    ), $ = f(
      () => {
        var C;
        return m && (r == null ? void 0 : r.allowedComponents) && ((C = r == null ? void 0 : r.allowedComponents) == null ? void 0 : C.applicable);
      }
    );
    return (C, u) => $.value ? (o(), g(y(ie), N(A({ key: 0 }, { ...e, ...y(r) })), null, 16)) : (o(), g(z(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: n(S.value),
      role: e.roleAttribute,
      style: oe(e.backgroundStyle)
    }, {
      default: Y(() => [
        s.layout === "RESPONSIVE_GRID" ? (o(), g(y(ce), N(A({ key: 0 }, {
          ...e,
          ...y(r),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (o(), g(y(re), N(A({ key: 1 }, { ...e, ...y(r) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), ue = ["id", "data-cmp-single-expansion"], pe = ["id", "data-cmp-expanded"], me = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], Ce = /* @__PURE__ */ c("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ c("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), _e = [
  Ce
], be = ["id", "aria-labelledby"], Ne = /* @__PURE__ */ V({
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
    ...Q("cmp-accordion")
  },
  setup(s) {
    const e = s, r = K(), m = M("isInEditor", X.isInEditor()), S = M("componentMapping", new ae()), $ = (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })(), C = q(null), u = q(-1), p = q(e.expandedItems), _ = q(null), L = f(() => (r == null ? void 0 : r.singleExpansion) === !0);
    $ && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (C.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const D = f(() => {
      const a = {};
      return m && (a["data-panelcontainer"] = "accordion", a["data-cq-data-path"] = e.cqPath || "", a["data-placeholder-text"] = "Please drag Accordion item components here"), a;
    }), R = (a, l = e.cqPath) => {
      a.data && a.data.id === l && a.data.operation === "navigate" && (u.value = a.data.index);
    }, U = f(
      () => se.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        S
      )
    ), T = f(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        m,
        e.aemNoDecoration
      )
    ), E = (a) => {
      const l = _.value.querySelector(
        `button[data-cmp-button-id="${a}"]`
      );
      l && l.focus();
    }, G = (a, l) => {
      const t = p.value.indexOf(a) > -1;
      if (L.value)
        p.value = t ? [] : [a];
      else if (t) {
        const h = p.value.indexOf(a);
        p.value.splice(h, 1);
      } else
        p.value.push(a);
      l.target.focus();
    }, B = (a, l, t) => {
      const h = _.value.querySelectorAll("button").length - 1;
      switch (l.code) {
        case "ArrowLeft":
        case "ArrowUp":
          l.preventDefault(), t > 0 && E(t - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          l.preventDefault(), t < h && E(t + 1);
          break;
        case "Home":
          l.preventDefault(), E(0);
          break;
        case "End":
          l.preventDefault(), E(h);
          break;
        case "Enter":
        case "Space":
          l.preventDefault(), G(a, l), E(t);
          break;
      }
    }, x = (a) => p.value.indexOf(a) > -1, H = f(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return F(L, async (a, l) => {
      a !== l && (p.value = e.expandedItems);
    }), F(e.expandedItems, async (a, l) => {
      a !== l && (p.value = a);
    }), F(u, async (a, l) => {
      a !== -1 && typeof a < "u" && a !== l && e.cqItemsOrder && (p.value = [e.cqItemsOrder[a]]);
    }), Z(() => {
      C.value && C.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        R
      );
    }), ee(() => {
      C.value && C.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        R
      );
    }), (a, l) => (o(), v("div", A({
      id: e.id,
      ref_key: "accordion",
      ref: _,
      class: T.value,
      "data-cmp-single-expansion": L.value === !0 ? !0 : void 0
    }, D.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (o(!0), v(j, { key: 0 }, J(e.cqItemsOrder, (t, h) => (o(), v("div", {
        id: `accordion-${e.cqItems[t].id}`,
        key: `accordion-index-${h}`,
        class: n(`${e.baseCssClass}__item`),
        "data-cmp-expanded": x(t) ? !0 : void 0
      }, [
        (o(), g(z(e.headingElement), {
          class: n(`${e.baseCssClass}__heading`)
        }, {
          default: Y(() => [
            c("button", {
              id: `accordion-${e.cqItems[t].id}-button`,
              "aria-controls": `accordion-${e.cqItems[t].id}-panel`,
              class: n([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: x(t)
                }
              ]),
              "data-cmp-button-id": h,
              onClick: (k) => G(t, k),
              onKeydown: (k) => B(t, k, h)
            }, [
              c("span", {
                class: n(`${e.baseCssClass}__title`)
              }, P(e.cqItems[t]["cq:panelTitle"]), 3),
              c("span", {
                class: n(`${e.baseCssClass}__icon`)
              }, _e, 2)
            ], 42, me)
          ]),
          _: 2
        }, 1032, ["class"])),
        y(m) || x(t) ? (o(), v("div", {
          key: 0,
          id: `accordion-${e.cqItems[t].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[t].id}-button`,
          class: n(`${e.baseCssClass}__panel ${x(t) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (o(), g(z(U.value[s.cqItemsOrder.indexOf(t)]), { key: 0 })) : w("", !0)
        ], 10, be)) : w("", !0)
      ], 10, pe))), 128)) : w("", !0),
      y(m) ? (o(), g(y(te), N(A({ key: 1 }, H.value)), null, 16)) : w("", !0)
    ], 16, ue));
  }
});
const ye = ["id", "aria-label"], ve = ["aria-label"], fe = ["aria-label"], he = ["aria-label"], Ie = ["aria-label"], ge = ["aria-label"], qe = ["aria-label"], we = ["aria-label", "onClick"], Me = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "CoreCarousel",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    accessibility: {
      type: Object,
      default: () => ({
        play: "Play",
        pause: "Pause",
        next: "Next",
        previous: "Previous",
        slide: "Slide {0} of {1}",
        indicator: "Slide %{0}",
        indicators: "Choose a slide to display"
      })
    },
    accessibilityLabel: {
      type: String,
      default: "Carousel"
    },
    autopauseDisabled: {
      type: Boolean,
      default: !1
    },
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
    delay: {
      type: Number,
      default: 5e3
    },
    isInEditor: {
      type: Boolean,
      default: void 0
    },
    ...Q("cmp-carousel")
  },
  setup(s) {
    const e = s, r = K(), m = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", X.isInEditor()), S = M("componentMapping", new ae());
    let $ = -1;
    const C = q(-1), u = q(0), p = q(null), _ = q((r == null ? void 0 : r.autoplay) === !0 && !m);
    (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })() && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (p.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const D = (i, d = e.cqPath) => {
      i.data && i.data.id === d && i.data.operation === "navigate" && (C.value = i.data.index);
    }, R = f(
      () => se.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        S
      )
    ), U = f(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        m,
        e.aemNoDecoration
      )
    ), T = f(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), E = (i) => {
      var I;
      let d = ((I = e.accessibility) == null ? void 0 : I.indicator) || "";
      const O = "{0}";
      return d = d.replace(O, (i + 1).toString()), d;
    }, G = (i) => {
      var b;
      let d = ((b = e.accessibility) == null ? void 0 : b.slide) || "";
      const O = "{0}";
      d = d.replace(O, (i + 1).toString());
      const I = "{1}";
      return d = d.replace(
        I,
        e.cqItemsOrder.length.toString()
      ), d;
    }, B = () => {
      u.value === e.cqItemsOrder.length - 1 ? u.value = 0 : u.value += 1;
    }, x = () => {
      u.value === 0 ? u.value = e.cqItemsOrder.length - 1 : u.value -= 1;
    }, H = () => {
      !_.value || e.cqItemsOrder.length <= 1 || B();
    }, a = () => {
      $ = window.setInterval(() => {
        H();
      }, e.delay);
    }, l = () => {
      window.clearInterval($);
    }, t = (i) => {
      _.value = i;
    }, h = (i) => {
      u.value !== i && (u.value = i);
    }, k = () => {
      !e.autopauseDisabled && _.value && l();
    }, ne = () => {
      !e.autopauseDisabled && _.value && a();
    }, le = f(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    return F(C, async (i, d) => {
      i !== -1 && typeof i < "u" && i !== d && (u.value = i, _.value = !1);
    }), Z(() => {
      a(), p.value && p.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        D
      );
    }), ee(() => {
      $ >= 0 && l(), p.value && p.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        D
      );
    }), (i, d) => {
      var O;
      return o(), v("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: n(U.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        le.value ? w("", !0) : (o(), v("div", {
          key: 0,
          class: n(`${e.baseCssClass}__content`),
          onMouseenter: k,
          onMouseleave: ne
        }, [
          (o(!0), v(j, null, J(R.value, (I, b) => (o(), v("div", {
            key: `item-${b}`,
            "aria-label": G(b),
            class: n([
              `${e.baseCssClass}__item`,
              {
                [`${e.baseCssClass}__item--active`]: b === u.value
              }
            ]),
            "data-cmp-hook-carousel": "item",
            role: "tabpanel"
          }, [
            b === u.value || y(m) ? (o(), g(z(I), { key: 0 })) : w("", !0)
          ], 10, ve))), 128)),
          c("div", {
            class: n(`${e.baseCssClass}__actions`)
          }, [
            c("button", {
              "aria-label": e.accessibility.previous,
              class: n(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: x
            }, [
              c("span", {
                class: n(`${e.baseCssClass}__action-icon`)
              }, null, 2),
              c("span", {
                class: n(`${e.baseCssClass}__action-text`)
              }, P(e.accessibility.previous), 3)
            ], 10, fe),
            c("button", {
              "aria-label": e.accessibility.next,
              class: n(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: B
            }, [
              c("span", {
                class: n(`${e.baseCssClass}__action-icon`)
              }, null, 2),
              c("span", {
                class: n(`${e.baseCssClass}__action-text`)
              }, P(e.accessibility.next), 3)
            ], 10, he),
            _.value ? (o(), v(j, { key: 0 }, [
              c("button", {
                "aria-label": e.accessibility.pause,
                class: n([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--pause`,
                  {
                    [`${e.baseCssClass}__action--disabled`]: !_.value
                  }
                ]),
                type: "button",
                onClick: d[0] || (d[0] = (I) => t(!1))
              }, [
                c("span", {
                  class: n(`${e.baseCssClass}__action-icon`)
                }, null, 2),
                c("span", {
                  class: n(`${e.baseCssClass}__action-text`)
                }, P(e.accessibility.pause), 3)
              ], 10, Ie),
              c("button", {
                "aria-label": e.accessibility.play,
                class: n([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: _.value }
                ]),
                type: "button",
                onClick: d[1] || (d[1] = (I) => t(!0))
              }, [
                c("span", {
                  class: n(`${e.baseCssClass}__action-icon`)
                }, null, 2),
                c("span", {
                  class: n(`${e.baseCssClass}__action-text`)
                }, P(e.accessibility.play), 3)
              ], 10, ge)
            ], 64)) : w("", !0)
          ], 2),
          c("ol", {
            "aria-label": (O = e.accessibility) == null ? void 0 : O.indicators,
            class: n(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (o(!0), v(j, null, J(e.cqItemsOrder, (I, b) => (o(), v("li", {
              key: `item-${b}`,
              "aria-label": E(b),
              class: n([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: b === u.value
                }
              ]),
              role: "tab",
              onClick: ($e) => h(b)
            }, P(e.cqItems[I]["cq:panelTitle"]), 11, we))), 128))
          ], 10, qe)
        ], 34)),
        y(m) ? (o(), g(y(te), N(A({ key: 1 }, T.value)), null, 16)) : w("", !0)
      ], 10, ye);
    };
  }
});
const Le = /* @__PURE__ */ V({
  __name: "CoreExperienceFragment",
  setup(s) {
    return (e, r) => (o(), g(de, { "is-in-editor": !1 }));
  }
});
export {
  Pe as AccordionEditConfig,
  Ae as CarouselEditConfig,
  Se as ContainerEditConfig,
  Ne as CoreAccordion,
  Me as CoreCarousel,
  de as CoreContainer,
  Le as CoreExperienceFragment,
  ke as ExperienceFragmentEditConfig
};
