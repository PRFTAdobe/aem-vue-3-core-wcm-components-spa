import { defineComponent as U, useAttrs as Q, inject as L, computed as h, openBlock as i, createBlock as f, unref as _, normalizeProps as N, mergeProps as S, resolveDynamicComponent as j, normalizeClass as n, normalizeStyle as ie, withCtx as Z, ref as I, watch as F, onMounted as ee, onUnmounted as se, createElementBlock as v, Fragment as V, renderList as K, createElementVNode as t, toDisplayString as A, createCommentVNode as E } from "vue";
import { componentProperties as W, componentClassNames as X, AllowedComponentsContainer as ce, ResponsiveGrid as re, Container as de, ComponentMapping as ae, Utils as te, ContainerPlaceholder as ne } from "aem-vue-3-editable-components";
import { AuthoringUtils as Y } from "@adobe/aem-spa-page-model-manager";
const Be = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(a) {
    return !a.cqItemsOrder || (a == null ? void 0 : a.cqItemsOrder.length) === 0;
  }
}, Ge = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(a) {
    return !a.cqItemsOrder || (a == null ? void 0 : a.cqItemsOrder.length) === 0;
  }
}, ze = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(a) {
    return !a.cqItemsOrder || (a == null ? void 0 : a.cqItemsOrder.length) === 0;
  }
}, Fe = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(a) {
    return !a.cqItemsOrder || (a == null ? void 0 : a.cqItemsOrder.length) === 0;
  }
}, ue = /* @__PURE__ */ U({
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
      validator: (a) => ["RESPONSIVE_GRID", "SIMPLE"].includes(a)
    },
    // eslint-disable-next-line vue/require-default-prop
    roleAttribute: {
      type: String
    },
    styleSystemElement: {
      type: String,
      default: "div"
    },
    ...W("cmp-container")
  },
  setup(a) {
    const e = a, r = Q(), C = typeof e.isInEditor < "u" ? e.isInEditor : L("isInEditor", Y.isInEditor()), k = h(
      () => X(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        C,
        e.aemNoDecoration
      )
    ), q = h(
      () => {
        var m;
        return C && (r == null ? void 0 : r.allowedComponents) && ((m = r == null ? void 0 : r.allowedComponents) == null ? void 0 : m.applicable);
      }
    );
    return (m, u) => q.value ? (i(), f(_(ce), N(S({ key: 0 }, { ...e, ..._(r) })), null, 16)) : (i(), f(j(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: n(k.value),
      role: e.roleAttribute,
      style: ie(e.backgroundStyle)
    }, {
      default: Z(() => [
        a.layout === "RESPONSIVE_GRID" ? (i(), f(_(re), N(S({ key: 0 }, {
          ...e,
          ..._(r),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (i(), f(_(de), N(S({ key: 1 }, { ...e, ..._(r) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), pe = ["id", "data-cmp-single-expansion"], me = ["id", "data-cmp-expanded"], _e = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], Ce = /* @__PURE__ */ t("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ t("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), be = [
  Ce
], ve = ["id", "aria-labelledby"], Ve = /* @__PURE__ */ U({
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
    ...W("cmp-accordion")
  },
  setup(a) {
    const e = a, r = Q(), C = L("isInEditor", Y.isInEditor()), k = L("componentMapping", new ae()), q = (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })(), m = I(null), u = I(-1), p = I(e.expandedItems), b = I(null), D = h(() => (r == null ? void 0 : r.singleExpansion) === !0);
    q && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (m.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const R = h(() => {
      const s = {};
      return C && (s["data-panelcontainer"] = "accordion", s["data-cq-data-path"] = e.cqPath || "", s["data-placeholder-text"] = "Please drag Accordion item components here"), s;
    }), B = (s, l = e.cqPath) => {
      s.data && s.data.id === l && s.data.operation === "navigate" && (u.value = s.data.index);
    }, T = h(
      () => te.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        k
      )
    ), H = h(
      () => X(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        C,
        e.aemNoDecoration
      )
    ), $ = (s) => {
      const l = b.value.querySelector(
        `button[data-cmp-button-id="${s}"]`
      );
      l && l.focus();
    }, G = (s, l) => {
      const o = p.value.indexOf(s) > -1;
      if (D.value)
        p.value = o ? [] : [s];
      else if (o) {
        const y = p.value.indexOf(s);
        p.value.splice(y, 1);
      } else
        p.value.push(s);
      l.target.focus();
    }, z = (s, l, o) => {
      const y = b.value.querySelectorAll("button").length - 1;
      switch (l.code) {
        case "ArrowLeft":
        case "ArrowUp":
          l.preventDefault(), o > 0 && $(o - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          l.preventDefault(), o < y && $(o + 1);
          break;
        case "Home":
          l.preventDefault(), $(0);
          break;
        case "End":
          l.preventDefault(), $(y);
          break;
        case "Enter":
        case "Space":
          l.preventDefault(), G(s, l), $(o);
          break;
      }
    }, P = (s) => p.value.indexOf(s) > -1, J = h(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return F(D, async (s, l) => {
      s !== l && (p.value = e.expandedItems);
    }), F(e.expandedItems, async (s, l) => {
      s !== l && (p.value = s);
    }), F(u, async (s, l) => {
      s !== -1 && typeof s < "u" && s !== l && e.cqItemsOrder && (p.value = [e.cqItemsOrder[s]]);
    }), ee(() => {
      m.value && m.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        B
      );
    }), se(() => {
      m.value && m.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        B
      );
    }), (s, l) => (i(), v("div", S({
      id: e.id,
      ref_key: "accordion",
      ref: b,
      class: H.value,
      "data-cmp-single-expansion": D.value === !0 ? !0 : void 0
    }, R.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (i(!0), v(V, { key: 0 }, K(e.cqItemsOrder, (o, y) => (i(), v("div", {
        id: `accordion-${e.cqItems[o].id}`,
        key: `accordion-index-${y}`,
        class: n(`${e.baseCssClass}__item`),
        "data-cmp-expanded": P(o) ? !0 : void 0
      }, [
        (i(), f(j(e.headingElement), {
          class: n(`${e.baseCssClass}__heading`)
        }, {
          default: Z(() => [
            t("button", {
              id: `accordion-${e.cqItems[o].id}-button`,
              "aria-controls": `accordion-${e.cqItems[o].id}-panel`,
              class: n([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: P(o)
                }
              ]),
              "data-cmp-button-id": y,
              onClick: (M) => G(o, M),
              onKeydown: (M) => z(o, M, y)
            }, [
              t("span", {
                class: n(`${e.baseCssClass}__title`)
              }, A(e.cqItems[o]["cq:panelTitle"]), 3),
              t("span", {
                class: n(`${e.baseCssClass}__icon`)
              }, be, 2)
            ], 42, _e)
          ]),
          _: 2
        }, 1032, ["class"])),
        _(C) || P(o) ? (i(), v("div", {
          key: 0,
          id: `accordion-${e.cqItems[o].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[o].id}-button`,
          class: n(`${e.baseCssClass}__panel ${P(o) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (i(), f(j(T.value[a.cqItemsOrder.indexOf(o)]), { key: 0 })) : E("", !0)
        ], 10, ve)) : E("", !0)
      ], 10, me))), 128)) : E("", !0),
      _(C) ? (i(), f(_(ne), N(S({ key: 1 }, J.value)), null, 16)) : E("", !0)
    ], 16, pe));
  }
});
const he = ["id", "aria-label"], ye = ["aria-label"], fe = ["aria-label"], ge = /* @__PURE__ */ t("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ t("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), we = [
  ge
], Ie = ["aria-label"], qe = /* @__PURE__ */ t("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ t("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), $e = [
  qe
], xe = ["aria-label"], Ee = /* @__PURE__ */ t("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ t("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), Pe = [
  Ee
], Oe = ["aria-label"], Ae = /* @__PURE__ */ t("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ t("path", { d: "M8 5v14l11-7z" })
], -1), Se = [
  Ae
], ke = ["aria-label"], Me = ["aria-label", "onClick"], je = /* @__PURE__ */ U({
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
    ...W("cmp-carousel")
  },
  setup(a) {
    const e = a, r = Q(), C = typeof e.isInEditor < "u" ? e.isInEditor : L("isInEditor", Y.isInEditor()), k = L("componentMapping", new ae());
    let q = -1;
    const m = I(-1), u = I(0), p = I(null), b = I((r == null ? void 0 : r.autoplay) === !0 && !C);
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
    const R = (c, d = e.cqPath) => {
      c.data && c.data.id === d && c.data.operation === "navigate" && (m.value = c.data.index);
    }, B = h(
      () => te.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        k
      )
    ), T = h(
      () => X(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        C,
        e.aemNoDecoration
      )
    ), H = h(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), $ = (c) => {
      var x;
      let d = ((x = e.accessibility) == null ? void 0 : x.indicator) || "";
      const O = "{0}";
      return d = d.replace(O, (c + 1).toString()), d;
    }, G = (c) => {
      var g;
      let d = ((g = e.accessibility) == null ? void 0 : g.slide) || "";
      const O = "{0}";
      d = d.replace(O, (c + 1).toString());
      const x = "{1}";
      return d = d.replace(
        x,
        e.cqItemsOrder.length.toString()
      ), d;
    }, z = () => {
      u.value === e.cqItemsOrder.length - 1 ? u.value = 0 : u.value += 1;
    }, P = () => {
      u.value === 0 ? u.value = e.cqItemsOrder.length - 1 : u.value -= 1;
    }, J = () => {
      !b.value || e.cqItemsOrder.length <= 1 || z();
    }, s = () => {
      q = window.setInterval(() => {
        J();
      }, e.delay);
    }, l = () => {
      window.clearInterval(q);
    }, o = (c) => {
      b.value = c;
    }, y = (c) => {
      u.value !== c && (u.value = c);
    }, M = () => {
      console.log("Running on mouse enter"), !e.autopauseDisabled && b.value && (console.log("Clearing Auto Play"), l());
    }, oe = () => {
      console.log("Running on mouse leave"), !e.autopauseDisabled && b.value && (console.log("Resuming Auto Play"), s());
    }, le = h(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    return F(m, async (c, d) => {
      c !== -1 && typeof c < "u" && c !== d && (u.value = c, b.value = !1);
    }), ee(() => {
      s(), p.value && p.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        R
      );
    }), se(() => {
      q >= 0 && l(), p.value && p.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        R
      );
    }), (c, d) => {
      var O, x;
      return i(), v("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: n(T.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        le.value ? E("", !0) : (i(), v("div", {
          key: 0,
          class: n(`${e.baseCssClass}__content`),
          onMouseenter: M,
          onMouseleave: oe
        }, [
          t("div", {
            class: n(`${e.baseCssClass}__items`)
          }, [
            (i(!0), v(V, null, K(B.value, (g, w) => (i(), v("div", {
              key: `item-${w}`,
              "aria-label": G(w),
              class: n([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: w === u.value
                }
              ]),
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (i(), f(j(g), { key: u.value }))
            ], 10, ye))), 128))
          ], 2),
          t("div", {
            class: n(`${e.baseCssClass}__actions`)
          }, [
            t("button", {
              "aria-label": e.accessibility.previous,
              class: n(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: P
            }, [
              t("span", {
                class: n(`${e.baseCssClass}__action-icon`)
              }, we, 2),
              t("span", {
                class: n(`${e.baseCssClass}__action-text`)
              }, A(e.accessibility.previous), 3)
            ], 10, fe),
            t("button", {
              "aria-label": e.accessibility.next,
              class: n(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: z
            }, [
              t("span", {
                class: n(`${e.baseCssClass}__action-icon`)
              }, $e, 2),
              t("span", {
                class: n(`${e.baseCssClass}__action-text`)
              }, A(e.accessibility.next), 3)
            ], 10, Ie),
            ((O = _(r)) == null ? void 0 : O.autoplay) === !0 ? (i(), v(V, { key: 0 }, [
              t("button", {
                "aria-label": e.accessibility.pause,
                class: n([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--pause`,
                  {
                    [`${e.baseCssClass}__action--disabled`]: !b.value
                  }
                ]),
                type: "button",
                onClick: d[0] || (d[0] = (g) => o(!1))
              }, [
                t("span", {
                  class: n(`${e.baseCssClass}__action-icon`)
                }, Pe, 2),
                t("span", {
                  class: n(`${e.baseCssClass}__action-text`)
                }, A(e.accessibility.pause), 3)
              ], 10, xe),
              t("button", {
                "aria-label": e.accessibility.play,
                class: n([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: b.value }
                ]),
                type: "button",
                onClick: d[1] || (d[1] = (g) => o(!0))
              }, [
                t("span", {
                  class: n(`${e.baseCssClass}__action-icon`)
                }, Se, 2),
                t("span", {
                  class: n(`${e.baseCssClass}__action-text`)
                }, A(e.accessibility.play), 3)
              ], 10, Oe)
            ], 64)) : E("", !0)
          ], 2),
          t("ol", {
            "aria-label": (x = e.accessibility) == null ? void 0 : x.indicators,
            class: n(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (i(!0), v(V, null, K(e.cqItemsOrder, (g, w) => (i(), v("li", {
              key: `item-${w}`,
              "aria-label": $(w),
              class: n([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: w === u.value
                }
              ]),
              role: "tab",
              onClick: (Ne) => y(w)
            }, A(e.cqItems[g]["cq:panelTitle"]), 11, Me))), 128))
          ], 10, ke)
        ], 34)),
        _(C) ? (i(), f(_(ne), N(S({ key: 1 }, H.value)), null, 16)) : E("", !0)
      ], 10, he);
    };
  }
});
const Ue = /* @__PURE__ */ U({
  __name: "CoreExperienceFragment",
  setup(a) {
    return (e, r) => (i(), f(ue, { "is-in-editor": !1 }));
  }
});
export {
  Be as AccordionEditConfig,
  Ge as CarouselEditConfig,
  ze as ContainerEditConfig,
  Ve as CoreAccordion,
  je as CoreCarousel,
  ue as CoreContainer,
  Ue as CoreExperienceFragment,
  Fe as ExperienceFragmentEditConfig
};
