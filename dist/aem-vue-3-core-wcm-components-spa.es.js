import { defineComponent as J, useAttrs as Y, inject as L, computed as h, openBlock as s, createBlock as I, unref as v, normalizeProps as R, mergeProps as S, resolveDynamicComponent as T, normalizeClass as n, normalizeStyle as ne, withCtx as oe, ref as w, watch as U, onMounted as Z, onUnmounted as ee, createElementBlock as _, Fragment as z, renderList as H, createElementVNode as o, toDisplayString as N, createCommentVNode as $ } from "vue";
import { componentProperties as Q, componentClassNames as W, AllowedComponentsContainer as ce, ResponsiveGrid as re, Container as de, ComponentMapping as ae, Utils as te, ContainerPlaceholder as se } from "aem-vue-3-editable-components";
import { AuthoringUtils as X } from "@adobe/aem-spa-page-model-manager";
const Te = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(a) {
    return !a.cqItemsOrder || (a == null ? void 0 : a.cqItemsOrder.length) === 0;
  }
}, Fe = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(a) {
    return !a.cqItemsOrder || (a == null ? void 0 : a.cqItemsOrder.length) === 0;
  }
}, je = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(a) {
    return !a.cqItemsOrder || (a == null ? void 0 : a.cqItemsOrder.length) === 0;
  }
}, Ve = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(a) {
    return !a.cqItemsOrder || (a == null ? void 0 : a.cqItemsOrder.length) === 0;
  }
}, Ue = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(a) {
    return !a.cqItemsOrder || (a == null ? void 0 : a.cqItemsOrder.length) === 0;
  }
}, ue = /* @__PURE__ */ J({
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
    ...Q("cmp-container")
  },
  setup(a) {
    const e = a, c = Y(), y = typeof e.isInEditor < "u" ? e.isInEditor : L("isInEditor", X.isInEditor()), x = h(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        y,
        e.aemNoDecoration
      )
    ), b = h(
      () => {
        var u;
        return y && (c == null ? void 0 : c.allowedComponents) && ((u = c == null ? void 0 : c.allowedComponents) == null ? void 0 : u.applicable);
      }
    );
    return (u, C) => b.value ? (s(), I(v(ce), R(S({ key: 0 }, { ...e, ...v(c) })), null, 16)) : (s(), I(T(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: n(x.value),
      role: e.roleAttribute,
      style: ne(e.backgroundStyle)
    }, {
      default: oe(() => [
        a.layout === "RESPONSIVE_GRID" ? (s(), I(v(re), R(S({ key: 0 }, {
          ...e,
          ...v(c),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (s(), I(v(de), R(S({ key: 1 }, { ...e, ...v(c) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), pe = ["id", "data-cmp-single-expansion"], me = ["id", "data-cmp-expanded"], _e = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], be = /* @__PURE__ */ o("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ o("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), Ce = [
  be
], ve = ["id", "aria-labelledby"], He = /* @__PURE__ */ J({
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
  setup(a) {
    const e = a, c = Y(), y = L("isInEditor", X.isInEditor()), x = L("componentMapping", new ae()), b = (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })(), u = w(null), C = w(-1), p = w(e.expandedItems), f = w(null), D = h(() => (c == null ? void 0 : c.singleExpansion) === !0);
    b && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (u.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const P = h(() => {
      const t = {};
      return y && (t["data-panelcontainer"] = "accordion", t["data-cq-data-path"] = e.cqPath || "", t["data-placeholder-text"] = "Please drag Accordion item components here"), t;
    }), B = (t, r = e.cqPath) => {
      t.data && t.data.id === r && t.data.operation === "navigate" && (C.value = t.data.index);
    }, F = h(
      () => te.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        x
      )
    ), j = h(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        y,
        e.aemNoDecoration
      )
    ), l = (t) => {
      const r = f.value.querySelector(
        `button[data-cmp-button-id="${t}"]`
      );
      r && r.focus();
    }, E = (t, r) => {
      const i = p.value.indexOf(t) > -1;
      if (D.value)
        p.value = i ? [] : [t];
      else if (i) {
        const q = p.value.indexOf(t);
        p.value.splice(q, 1);
      } else
        p.value.push(t);
      r.target.focus();
    }, O = (t, r, i) => {
      const q = f.value.querySelectorAll("button").length - 1;
      switch (r.code) {
        case "ArrowLeft":
        case "ArrowUp":
          r.preventDefault(), i > 0 && l(i - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          r.preventDefault(), i < q && l(i + 1);
          break;
        case "Home":
          r.preventDefault(), l(0);
          break;
        case "End":
          r.preventDefault(), l(q);
          break;
        case "Enter":
        case "Space":
          r.preventDefault(), E(t, r), l(i);
          break;
      }
    }, g = (t) => p.value.indexOf(t) > -1, K = h(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return U(D, async (t, r) => {
      t !== r && (p.value = e.expandedItems);
    }), U(e.expandedItems, async (t, r) => {
      t !== r && (p.value = t);
    }), U(C, async (t, r) => {
      t !== -1 && typeof t < "u" && t !== r && e.cqItemsOrder && (p.value = [e.cqItemsOrder[t]]);
    }), Z(() => {
      u.value && u.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        B
      );
    }), ee(() => {
      u.value && u.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        B
      );
    }), (t, r) => (s(), _("div", S({
      id: e.id,
      ref_key: "accordion",
      ref: f,
      class: j.value,
      "data-cmp-single-expansion": D.value === !0 ? !0 : void 0
    }, P.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (s(!0), _(z, { key: 0 }, H(e.cqItemsOrder, (i, q) => (s(), _("div", {
        id: `accordion-${e.cqItems[i].id}`,
        key: `accordion-index-${q}`,
        class: n(`${e.baseCssClass}__item`),
        "data-cmp-expanded": g(i) ? !0 : void 0
      }, [
        (s(), I(T(e.headingElement), {
          class: n(`${e.baseCssClass}__heading`)
        }, {
          default: oe(() => [
            o("button", {
              id: `accordion-${e.cqItems[i].id}-button`,
              "aria-controls": `accordion-${e.cqItems[i].id}-panel`,
              class: n([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: g(i)
                }
              ]),
              "data-cmp-button-id": q,
              onClick: (V) => E(i, V),
              onKeydown: (V) => O(i, V, q)
            }, [
              o("span", {
                class: n(`${e.baseCssClass}__title`)
              }, N(e.cqItems[i]["cq:panelTitle"]), 3),
              o("span", {
                class: n(`${e.baseCssClass}__icon`)
              }, Ce, 2)
            ], 42, _e)
          ]),
          _: 2
        }, 1032, ["class"])),
        v(y) || g(i) ? (s(), _("div", {
          key: 0,
          id: `accordion-${e.cqItems[i].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[i].id}-button`,
          class: n(`${e.baseCssClass}__panel ${g(i) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (s(), I(T(F.value[a.cqItemsOrder.indexOf(i)]), { key: 0 })) : $("", !0)
        ], 10, ve)) : $("", !0)
      ], 10, me))), 128)) : $("", !0),
      v(y) ? (s(), I(v(se), R(S({ key: 1 }, K.value)), null, 16)) : $("", !0)
    ], 16, pe));
  }
});
const he = ["id", "aria-label"], ye = ["aria-label"], fe = ["aria-label"], ge = /* @__PURE__ */ o("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ o("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), Ie = [
  ge
], we = ["aria-label"], qe = /* @__PURE__ */ o("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ o("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), $e = [
  qe
], Ee = ["aria-label"], xe = /* @__PURE__ */ o("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ o("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), Pe = [
  xe
], Oe = ["aria-label"], ke = /* @__PURE__ */ o("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ o("path", { d: "M8 5v14l11-7z" })
], -1), Ae = [
  ke
], Se = ["aria-label"], Me = ["aria-label", "onClick"], Je = /* @__PURE__ */ J({
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
        indicator: "Slide {0}",
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
  setup(a) {
    const e = a, c = Y(), y = typeof e.isInEditor < "u" ? e.isInEditor : L("isInEditor", X.isInEditor()), x = L("componentMapping", new ae()), b = w(-1), u = w(-1), C = w(0), p = w(null), f = w((c == null ? void 0 : c.autoplay) === !0 && !y);
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
    const P = (d, m = e.cqPath) => {
      d.data && d.data.id === m && d.data.operation === "navigate" && (u.value = d.data.index);
    }, B = h(
      () => te.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        x
      )
    ), F = h(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        y,
        e.aemNoDecoration
      )
    ), j = h(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), l = (d) => {
      var M;
      let m = ((M = e.accessibility) == null ? void 0 : M.indicator) || "";
      const G = "{0}";
      return m = m.replace(G, (d + 1).toString()), m;
    }, E = (d) => {
      var k;
      let m = ((k = e.accessibility) == null ? void 0 : k.slide) || "";
      const G = "{0}";
      m = m.replace(G, (d + 1).toString());
      const M = "{1}";
      return m = m.replace(
        M,
        e.cqItemsOrder.length.toString()
      ), m;
    }, O = () => {
      C.value === e.cqItemsOrder.length - 1 ? C.value = 0 : C.value += 1;
    }, g = () => {
      C.value === 0 ? C.value = e.cqItemsOrder.length - 1 : C.value -= 1;
    }, K = () => {
      !f.value || e.cqItemsOrder.length <= 1 || O();
    }, t = () => {
      b.value = setInterval(() => {
        K();
      }, e.delay);
    }, r = () => {
      clearInterval(b.value);
    }, i = (d) => {
      f.value = d;
    }, q = (d) => {
      C.value !== d && (C.value = d);
    }, V = () => {
      !e.autopauseDisabled && f.value && r();
    }, le = () => {
      !e.autopauseDisabled && f.value && t();
    }, ie = h(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    return U(u, async (d, m) => {
      d !== -1 && typeof d < "u" && d !== m && (C.value = d, f.value = !1);
    }), Z(() => {
      t(), p.value && p.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        P
      );
    }), ee(() => {
      typeof b.value == "number" && b.value >= 0 && r(), p.value && p.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        P
      );
    }), (d, m) => {
      var G, M;
      return s(), _("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: n(F.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        ie.value ? $("", !0) : (s(), _("div", {
          key: 0,
          class: n(`${e.baseCssClass}__content`),
          onMouseenter: V,
          onMouseleave: le
        }, [
          o("div", {
            class: n([{ [`${e.baseCssClass}__items`]: !v(y) }])
          }, [
            (s(!0), _(z, null, H(B.value, (k, A) => (s(), _("div", {
              key: `item-${A}`,
              "aria-label": E(A),
              class: n([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: A === C.value
                }
              ]),
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (s(), I(T(k)))
            ], 10, ye))), 128))
          ], 2),
          o("div", {
            class: n(`${e.baseCssClass}__actions`)
          }, [
            o("button", {
              "aria-label": e.accessibility.previous,
              class: n(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: g
            }, [
              o("span", {
                class: n(`${e.baseCssClass}__action-icon`)
              }, Ie, 2),
              o("span", {
                class: n(`${e.baseCssClass}__action-text`)
              }, N(e.accessibility.previous), 3)
            ], 10, fe),
            o("button", {
              "aria-label": e.accessibility.next,
              class: n(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: O
            }, [
              o("span", {
                class: n(`${e.baseCssClass}__action-icon`)
              }, $e, 2),
              o("span", {
                class: n(`${e.baseCssClass}__action-text`)
              }, N(e.accessibility.next), 3)
            ], 10, we),
            ((G = v(c)) == null ? void 0 : G.autoplay) === !0 ? (s(), _(z, { key: 0 }, [
              o("button", {
                "aria-label": e.accessibility.pause,
                class: n([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--pause`,
                  {
                    [`${e.baseCssClass}__action--disabled`]: !f.value
                  }
                ]),
                type: "button",
                onClick: m[0] || (m[0] = (k) => i(!1))
              }, [
                o("span", {
                  class: n(`${e.baseCssClass}__action-icon`)
                }, Pe, 2),
                o("span", {
                  class: n(`${e.baseCssClass}__action-text`)
                }, N(e.accessibility.pause), 3)
              ], 10, Ee),
              o("button", {
                "aria-label": e.accessibility.play,
                class: n([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: f.value }
                ]),
                type: "button",
                onClick: m[1] || (m[1] = (k) => i(!0))
              }, [
                o("span", {
                  class: n(`${e.baseCssClass}__action-icon`)
                }, Ae, 2),
                o("span", {
                  class: n(`${e.baseCssClass}__action-text`)
                }, N(e.accessibility.play), 3)
              ], 10, Oe)
            ], 64)) : $("", !0)
          ], 2),
          o("ol", {
            "aria-label": (M = e.accessibility) == null ? void 0 : M.indicators,
            class: n(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (s(!0), _(z, null, H(e.cqItemsOrder, (k, A) => (s(), _("li", {
              key: `item-${A}`,
              "aria-label": l(A),
              class: n([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: A === C.value
                }
              ]),
              role: "tab",
              onClick: (Be) => q(A)
            }, N(e.cqItems[k]["cq:panelTitle"]), 11, Me))), 128))
          ], 10, Se)
        ], 34)),
        v(y) ? (s(), I(v(se), R(S({ key: 1 }, j.value)), null, 16)) : $("", !0)
      ], 10, he);
    };
  }
});
const Ke = /* @__PURE__ */ J({
  __name: "CoreExperienceFragment",
  setup(a) {
    return (e, c) => (s(), I(ue, { "is-in-editor": !1 }));
  }
});
const Ne = ["id"], Le = ["aria-label"], De = ["tabIndex", "onClick"], Qe = /* @__PURE__ */ J({
  inheritAttrs: !1,
  __name: "CoreTabs",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    accessibilityLabel: {
      type: String
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
    isInEditor: {
      type: Boolean,
      default: void 0
    },
    ...Q("cmp-tabs")
  },
  setup(a) {
    const e = a, c = typeof e.isInEditor < "u" ? e.isInEditor : L("isInEditor", X.isInEditor()), y = L("componentMapping", new ae()), x = w(-1), b = w(0), u = w(null);
    (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })() && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (u.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const p = (l, E = e.cqPath) => {
      l.data && l.data.id === E && l.data.operation === "navigate" && (x.value = l.data.index);
    }, f = h(
      () => te.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        y
      )
    ), D = h(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        c,
        e.aemNoDecoration
      )
    ), P = h(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), B = h(() => {
      const l = {
        class: "aem-container",
        "data-cmp-is": "tabs",
        "data-panelcontainer": "tabs"
      };
      return c && (l["data-cq-data-path"] = e.cqPath), l;
    }), F = h(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), j = (l) => {
      b.value !== l && (b.value = l);
    };
    return U(x, async (l, E) => {
      l !== -1 && typeof l < "u" && l !== E && (b.value = l);
    }), Z(() => {
      u.value && u.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        p
      );
    }), ee(() => {
      u.value && u.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        p
      );
    }), (l, E) => (s(), _("div", S({
      id: e.id,
      class: D.value
    }, B.value), [
      P.value ? $("", !0) : (s(), _("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: n(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (s(!0), _(z, null, H(e.cqItemsOrder, (O, g) => (s(), _("li", {
          key: `tab-${g}`,
          class: n([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: g === b.value
            }
          ]),
          tabIndex: g === b.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (K) => j(g)
        }, N(e.cqItems[O]["cq:panelTitle"]), 11, De))), 128))
      ], 10, Le)),
      !P.value && v(c) ? (s(!0), _(z, { key: 1 }, H(f.value, (O, g) => (s(), _("div", {
        key: `tab-content-${g}`,
        class: n(`${e.baseCssClass}__author-tab-content`),
        style: ne({ display: b.value === g ? "block" : "none" })
      }, [
        (s(), I(T(O)))
      ], 6))), 128)) : P.value ? $("", !0) : (s(), I(T(f.value[b.value]), { key: 2 })),
      v(c) ? (s(), I(v(se), R(S({ key: 3 }, F.value)), null, 16)) : $("", !0)
    ], 16, Ne));
  }
});
export {
  Te as AccordionEditConfig,
  Fe as CarouselEditConfig,
  je as ContainerEditConfig,
  He as CoreAccordion,
  Je as CoreCarousel,
  ue as CoreContainer,
  Ke as CoreExperienceFragment,
  Qe as CoreTabs,
  Ve as ExperienceFragmentEditConfig,
  Ue as TabsEditConfig
};
