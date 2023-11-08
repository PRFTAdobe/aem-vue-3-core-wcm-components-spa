import { defineComponent as j, useAttrs as K, inject as N, computed as y, openBlock as i, createBlock as w, unref as v, normalizeProps as M, mergeProps as A, resolveDynamicComponent as V, normalizeClass as o, normalizeStyle as le, withCtx as Y, ref as I, watch as z, onMounted as Z, onUnmounted as ee, createElementBlock as h, Fragment as F, renderList as J, createElementVNode as t, toDisplayString as P, createCommentVNode as q } from "vue";
import { componentProperties as Q, componentClassNames as W, AllowedComponentsContainer as ie, ResponsiveGrid as ce, Container as re, ComponentMapping as ae, Utils as se, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { AuthoringUtils as X } from "@adobe/aem-spa-page-model-manager";
const Be = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, Re = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, Ge = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, ze = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, de = /* @__PURE__ */ j({
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
    const e = s, r = K(), _ = typeof e.isInEditor < "u" ? e.isInEditor : N("isInEditor", X.isInEditor()), S = y(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        _,
        e.aemNoDecoration
      )
    ), $ = y(
      () => {
        var m;
        return _ && (r == null ? void 0 : r.allowedComponents) && ((m = r == null ? void 0 : r.allowedComponents) == null ? void 0 : m.applicable);
      }
    );
    return (m, u) => $.value ? (i(), w(v(ie), M(A({ key: 0 }, { ...e, ...v(r) })), null, 16)) : (i(), w(V(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: o(S.value),
      role: e.roleAttribute,
      style: le(e.backgroundStyle)
    }, {
      default: Y(() => [
        s.layout === "RESPONSIVE_GRID" ? (i(), w(v(ce), M(A({ key: 0 }, {
          ...e,
          ...v(r),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (i(), w(v(re), M(A({ key: 1 }, { ...e, ...v(r) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), ue = ["id", "data-cmp-single-expansion"], pe = ["id", "data-cmp-expanded"], _e = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], me = /* @__PURE__ */ t("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ t("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), Ce = [
  me
], be = ["id", "aria-labelledby"], Fe = /* @__PURE__ */ j({
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
    const e = s, r = K(), _ = N("isInEditor", X.isInEditor()), S = N("componentMapping", new ae()), $ = (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })(), m = I(null), u = I(-1), p = I(e.expandedItems), C = I(null), L = y(() => (r == null ? void 0 : r.singleExpansion) === !0);
    $ && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (m.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const D = y(() => {
      const a = {};
      return _ && (a["data-panelcontainer"] = "accordion", a["data-cq-data-path"] = e.cqPath || "", a["data-placeholder-text"] = "Please drag Accordion item components here"), a;
    }), B = (a, l = e.cqPath) => {
      a.data && a.data.id === l && a.data.operation === "navigate" && (u.value = a.data.index);
    }, U = y(
      () => se.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        S
      )
    ), T = y(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        _,
        e.aemNoDecoration
      )
    ), E = (a) => {
      const l = C.value.querySelector(
        `button[data-cmp-button-id="${a}"]`
      );
      l && l.focus();
    }, R = (a, l) => {
      const n = p.value.indexOf(a) > -1;
      if (L.value)
        p.value = n ? [] : [a];
      else if (n) {
        const f = p.value.indexOf(a);
        p.value.splice(f, 1);
      } else
        p.value.push(a);
      l.target.focus();
    }, G = (a, l, n) => {
      const f = C.value.querySelectorAll("button").length - 1;
      switch (l.code) {
        case "ArrowLeft":
        case "ArrowUp":
          l.preventDefault(), n > 0 && E(n - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          l.preventDefault(), n < f && E(n + 1);
          break;
        case "Home":
          l.preventDefault(), E(0);
          break;
        case "End":
          l.preventDefault(), E(f);
          break;
        case "Enter":
        case "Space":
          l.preventDefault(), R(a, l), E(n);
          break;
      }
    }, x = (a) => p.value.indexOf(a) > -1, H = y(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return z(L, async (a, l) => {
      a !== l && (p.value = e.expandedItems);
    }), z(e.expandedItems, async (a, l) => {
      a !== l && (p.value = a);
    }), z(u, async (a, l) => {
      a !== -1 && typeof a < "u" && a !== l && e.cqItemsOrder && (p.value = [e.cqItemsOrder[a]]);
    }), Z(() => {
      m.value && m.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        B
      );
    }), ee(() => {
      m.value && m.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        B
      );
    }), (a, l) => (i(), h("div", A({
      id: e.id,
      ref_key: "accordion",
      ref: C,
      class: T.value,
      "data-cmp-single-expansion": L.value === !0 ? !0 : void 0
    }, D.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (i(!0), h(F, { key: 0 }, J(e.cqItemsOrder, (n, f) => (i(), h("div", {
        id: `accordion-${e.cqItems[n].id}`,
        key: `accordion-index-${f}`,
        class: o(`${e.baseCssClass}__item`),
        "data-cmp-expanded": x(n) ? !0 : void 0
      }, [
        (i(), w(V(e.headingElement), {
          class: o(`${e.baseCssClass}__heading`)
        }, {
          default: Y(() => [
            t("button", {
              id: `accordion-${e.cqItems[n].id}-button`,
              "aria-controls": `accordion-${e.cqItems[n].id}-panel`,
              class: o([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: x(n)
                }
              ]),
              "data-cmp-button-id": f,
              onClick: (k) => R(n, k),
              onKeydown: (k) => G(n, k, f)
            }, [
              t("span", {
                class: o(`${e.baseCssClass}__title`)
              }, P(e.cqItems[n]["cq:panelTitle"]), 3),
              t("span", {
                class: o(`${e.baseCssClass}__icon`)
              }, Ce, 2)
            ], 42, _e)
          ]),
          _: 2
        }, 1032, ["class"])),
        v(_) || x(n) ? (i(), h("div", {
          key: 0,
          id: `accordion-${e.cqItems[n].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[n].id}-button`,
          class: o(`${e.baseCssClass}__panel ${x(n) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (i(), w(V(U.value[s.cqItemsOrder.indexOf(n)]), { key: 0 })) : q("", !0)
        ], 10, be)) : q("", !0)
      ], 10, pe))), 128)) : q("", !0),
      v(_) ? (i(), w(v(te), M(A({ key: 1 }, H.value)), null, 16)) : q("", !0)
    ], 16, ue));
  }
});
const ve = ["id", "aria-label"], he = ["aria-label"], ye = ["aria-label"], fe = /* @__PURE__ */ t("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ t("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), ge = [
  fe
], we = ["aria-label"], Ie = /* @__PURE__ */ t("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ t("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), qe = [
  Ie
], $e = ["aria-label"], Ee = /* @__PURE__ */ t("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ t("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), xe = [
  Ee
], Oe = ["aria-label"], Pe = /* @__PURE__ */ t("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ t("path", { d: "M8 5v14l11-7z" })
], -1), Ae = [
  Pe
], Se = ["aria-label"], ke = ["aria-label", "onClick"], Ve = /* @__PURE__ */ j({
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
    const e = s, r = K(), _ = typeof e.isInEditor < "u" ? e.isInEditor : N("isInEditor", X.isInEditor()), S = N("componentMapping", new ae());
    let $ = -1;
    const m = I(-1), u = I(0), p = I(null), C = I((r == null ? void 0 : r.autoplay) === !0 && !_);
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
    const D = (c, d = e.cqPath) => {
      c.data && c.data.id === d && c.data.operation === "navigate" && (m.value = c.data.index);
    }, B = y(
      () => se.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        S
      )
    ), U = y(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        _,
        e.aemNoDecoration
      )
    ), T = y(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), E = (c) => {
      var g;
      let d = ((g = e.accessibility) == null ? void 0 : g.indicator) || "";
      const O = "{0}";
      return d = d.replace(O, (c + 1).toString()), d;
    }, R = (c) => {
      var b;
      let d = ((b = e.accessibility) == null ? void 0 : b.slide) || "";
      const O = "{0}";
      d = d.replace(O, (c + 1).toString());
      const g = "{1}";
      return d = d.replace(
        g,
        e.cqItemsOrder.length.toString()
      ), d;
    }, G = () => {
      u.value === e.cqItemsOrder.length - 1 ? u.value = 0 : u.value += 1;
    }, x = () => {
      u.value === 0 ? u.value = e.cqItemsOrder.length - 1 : u.value -= 1;
    }, H = () => {
      !C.value || e.cqItemsOrder.length <= 1 || G();
    }, a = () => {
      $ = window.setInterval(() => {
        H();
      }, e.delay);
    }, l = () => {
      window.clearInterval($);
    }, n = (c) => {
      C.value = c;
    }, f = (c) => {
      u.value !== c && (u.value = c);
    }, k = () => {
      !e.autopauseDisabled && C.value && l();
    }, ne = () => {
      !e.autopauseDisabled && C.value && a();
    }, oe = y(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    return z(m, async (c, d) => {
      c !== -1 && typeof c < "u" && c !== d && (u.value = c, C.value = !1);
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
    }), (c, d) => {
      var O;
      return i(), h("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: o(U.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        oe.value ? q("", !0) : (i(), h("div", {
          key: 0,
          class: o(`${e.baseCssClass}__content`),
          onMouseenter: k,
          onMouseleave: ne
        }, [
          (i(!0), h(F, null, J(B.value, (g, b) => (i(), h("div", {
            key: `item-${b}`,
            "aria-label": R(b),
            class: o([
              `${e.baseCssClass}__item`,
              {
                [`${e.baseCssClass}__item--active`]: b === u.value
              }
            ]),
            "data-cmp-hook-carousel": "item",
            role: "tabpanel"
          }, [
            b === u.value || v(_) ? (i(), w(V(g), { key: 0 })) : q("", !0)
          ], 10, he))), 128)),
          t("div", {
            class: o(`${e.baseCssClass}__actions`)
          }, [
            t("button", {
              "aria-label": e.accessibility.previous,
              class: o(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: x
            }, [
              t("span", {
                class: o(`${e.baseCssClass}__action-icon`)
              }, ge, 2),
              t("span", {
                class: o(`${e.baseCssClass}__action-text`)
              }, P(e.accessibility.previous), 3)
            ], 10, ye),
            t("button", {
              "aria-label": e.accessibility.next,
              class: o(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: G
            }, [
              t("span", {
                class: o(`${e.baseCssClass}__action-icon`)
              }, qe, 2),
              t("span", {
                class: o(`${e.baseCssClass}__action-text`)
              }, P(e.accessibility.next), 3)
            ], 10, we),
            C.value ? (i(), h(F, { key: 0 }, [
              t("button", {
                "aria-label": e.accessibility.pause,
                class: o([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--pause`,
                  {
                    [`${e.baseCssClass}__action--disabled`]: !C.value
                  }
                ]),
                type: "button",
                onClick: d[0] || (d[0] = (g) => n(!1))
              }, [
                t("span", {
                  class: o(`${e.baseCssClass}__action-icon`)
                }, xe, 2),
                t("span", {
                  class: o(`${e.baseCssClass}__action-text`)
                }, P(e.accessibility.pause), 3)
              ], 10, $e),
              t("button", {
                "aria-label": e.accessibility.play,
                class: o([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: C.value }
                ]),
                type: "button",
                onClick: d[1] || (d[1] = (g) => n(!0))
              }, [
                t("span", {
                  class: o(`${e.baseCssClass}__action-icon`)
                }, Ae, 2),
                t("span", {
                  class: o(`${e.baseCssClass}__action-text`)
                }, P(e.accessibility.play), 3)
              ], 10, Oe)
            ], 64)) : q("", !0)
          ], 2),
          t("ol", {
            "aria-label": (O = e.accessibility) == null ? void 0 : O.indicators,
            class: o(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (i(!0), h(F, null, J(e.cqItemsOrder, (g, b) => (i(), h("li", {
              key: `item-${b}`,
              "aria-label": E(b),
              class: o([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: b === u.value
                }
              ]),
              role: "tab",
              onClick: (Me) => f(b)
            }, P(e.cqItems[g]["cq:panelTitle"]), 11, ke))), 128))
          ], 10, Se)
        ], 34)),
        v(_) ? (i(), w(v(te), M(A({ key: 1 }, T.value)), null, 16)) : q("", !0)
      ], 10, ve);
    };
  }
});
const je = /* @__PURE__ */ j({
  __name: "CoreExperienceFragment",
  setup(s) {
    return (e, r) => (i(), w(de, { "is-in-editor": !1 }));
  }
});
export {
  Be as AccordionEditConfig,
  Re as CarouselEditConfig,
  Ge as ContainerEditConfig,
  Fe as CoreAccordion,
  Ve as CoreCarousel,
  de as CoreContainer,
  je as CoreExperienceFragment,
  ze as ExperienceFragmentEditConfig
};
