import { MapTo as te, ComponentMapping as T, componentProperties as j, componentClassNames as z, AllowedComponentsContainer as se, ResponsiveGrid as ae, Container as ne, Utils as H, ContainerPlaceholder as Q } from "aem-vue-3-editable-components";
import { defineComponent as R, useAttrs as K, inject as M, computed as r, openBlock as s, createBlock as y, unref as h, normalizeProps as A, mergeProps as P, resolveDynamicComponent as N, normalizeClass as i, normalizeStyle as ie, withCtx as W, createElementBlock as c, createElementVNode as q, toDisplayString as k, createCommentVNode as g, Fragment as B, renderList as D, ref as F, watch as J, onMounted as le, onUnmounted as oe, h as u, watchEffect as Y, guardReactiveProps as Z } from "vue";
import { AuthoringUtils as G } from "@adobe/aem-spa-page-model-manager";
const Ne = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Me = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Le = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Be = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return t.elementsOrder.length === 0 && t.cqItemsOrder.length === 0;
  }
}, De = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Re = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, re = "ContentFragment-", ee = (t) => re + t, ce = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((l) => {
    te(ee(l))(e);
  });
}, de = (t) => {
  const e = ee(t);
  return T.get(e);
}, Fe = (t) => (e) => ce(t, e), ue = /* @__PURE__ */ R({
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
      validator: (t) => ["RESPONSIVE_GRID", "SIMPLE"].includes(t)
    },
    // eslint-disable-next-line vue/require-default-prop
    roleAttribute: {
      type: String
    },
    styleSystemElement: {
      type: String,
      default: "div"
    },
    ...j("cmp-container")
  },
  setup(t) {
    const e = t, a = K(), l = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", G.isInEditor()), f = r(
      () => z(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), b = r(
      () => {
        var $;
        return l && (a == null ? void 0 : a.allowedComponents) && (($ = a == null ? void 0 : a.allowedComponents) == null ? void 0 : $.applicable);
      }
    );
    return ($, C) => b.value ? (s(), y(h(se), A(P({ key: 0 }, { ...e, ...h(a) })), null, 16)) : (s(), y(N(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: i(f.value),
      role: e.roleAttribute,
      style: ie(e.backgroundStyle)
    }, {
      default: W(() => [
        t.layout === "RESPONSIVE_GRID" ? (s(), y(h(ae), A(P({ key: 0 }, {
          ...e,
          ...h(a),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (s(), y(h(ne), A(P({ key: 1 }, { ...e, ...h(a) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), me = ["id"], pe = ["innerHTML"], be = /* @__PURE__ */ R({
  inheritAttrs: !1,
  __name: "DefaultContentFragment",
  props: {
    cqItems: {
      type: Object,
      default: () => ({})
    },
    cqItemsOrder: {
      type: Array,
      default: () => []
    },
    cqPath: {
      type: String,
      default: ""
    },
    // eslint-disable-next-line vue/require-default-prop
    description: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    elements: {
      type: Object,
      default: () => ({})
    },
    // eslint-disable-next-line vue/require-default-prop
    elementsOrder: {
      type: Array,
      default: () => []
    },
    isInEditor: {
      type: Boolean,
      default: void 0
    },
    // eslint-disable-next-line vue/require-default-prop
    model: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String
    },
    ...j("cmp-contentfragment")
  },
  setup(t) {
    const e = t, a = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", G.isInEditor()), l = M("componentMapping", new T()), f = r(
      () => z(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        a,
        e.aemNoDecoration
      )
    ), b = r(
      () => H.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        l
      )
    );
    return ($, C) => {
      var w;
      return s(), c("div", {
        id: e.id,
        class: i(f.value)
      }, [
        q("h3", {
          class: i(`${e.baseCssClass}__title`)
        }, k(e.title), 3),
        e.description ? (s(), c("p", {
          key: 0,
          class: i(`${e.baseCssClass}__description`)
        }, k(e.description), 3)) : g("", !0),
        (w = e.elementsOrder) != null && w.length ? (s(), c("div", {
          key: 1,
          class: i(`${e.baseCssClass}__elements`)
        }, [
          (s(!0), c(B, null, D(e.elementsOrder, (p, S) => (s(), c("div", {
            key: `${e.id}-element-${p}-${S}`,
            class: i(`${e.baseCssClass}__element`)
          }, [
            q("div", {
              class: i([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              q("h4", null, k(p), 1)
            ], 2),
            q("div", {
              class: i([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[p].value}`
            }, null, 10, pe),
            q("div", {
              class: i([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + k(e.elements[p].dataType), 3),
            q("div", {
              class: i([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + k(e.elements[p].multiValue ? "true" : "false"), 3),
            q("div", {
              class: i([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + k(e.elements[p][":type"]), 3)
          ], 2))), 128))
        ], 2)) : g("", !0),
        (s(!0), c(B, null, D(b.value, (p) => (s(), y(N(p), {
          key: p.toString()
        }))), 128))
      ], 10, me);
    };
  }
}), je = /* @__PURE__ */ R({
  inheritAttrs: !1,
  __name: "CoreContentFragment",
  props: {
    cqItems: {
      type: Object,
      default: () => ({})
    },
    cqItemsOrder: {
      type: Array,
      default: () => []
    },
    cqPath: {
      type: String,
      default: ""
    },
    // eslint-disable-next-line vue/require-default-prop
    description: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    elements: {
      type: Object,
      default: () => ({})
    },
    // eslint-disable-next-line vue/require-default-prop
    elementsOrder: {
      type: Array,
      default: () => []
    },
    isInEditor: {
      type: Boolean,
      default: void 0
    },
    // eslint-disable-next-line vue/require-default-prop
    model: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String
    },
    ...j("cmp-contentfragment")
  },
  setup(t) {
    const e = t, a = K(), l = r(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), f = r(() => {
      const b = de(e.model);
      return b || be;
    });
    return (b, $) => l.value ? g("", !0) : (s(), y(N(f.value), A(P({ key: 0 }, { ...e, ...h(a) })), null, 16));
  }
}), U = {
  createCallbackListener(t, e) {
    return (a, l = t) => {
      a.data && a.data.id === l && a.data.operation === "navigate" && (e.value = a.data.index);
    };
  },
  initMessageChannel() {
    return this.isBrowser() && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel ? new window.Granite.author.MessageChannel("cqauthor", window) : null;
  },
  isBrowser() {
    try {
      return typeof window < "u";
    } catch {
      return !1;
    }
  },
  subscribeRequestMessage(t, e) {
    t && t.subscribeRequestMessage(
      "cmp.panelcontainer",
      e
    );
  },
  unsubscribeRequestMessage(t, e) {
    t && t.unsubscribeRequestMessage(
      "cmp.panelcontainer",
      e
    );
  }
}, Ce = ["id", "data-cmp-single-expansion"], _e = ["id", "data-cmp-expanded"], ye = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], he = /* @__PURE__ */ q("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ q("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), fe = [
  he
], Ie = ["id", "aria-labelledby"], Te = /* @__PURE__ */ R({
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
    ...j("cmp-accordion")
  },
  setup(t) {
    const e = t, a = K(), l = M("isInEditor", G.isInEditor()), f = M("componentMapping", new T()), b = F(U.initMessageChannel()), $ = F(-1), C = F(e.expandedItems), w = F(null), p = r(() => (a == null ? void 0 : a.singleExpansion) === !0), S = r(() => {
      const n = {};
      return l && (n["data-panelcontainer"] = "accordion", n["data-cq-data-path"] = e.cqPath || "", n["data-placeholder-text"] = "Please drag Accordion item components here"), n;
    }), V = r(
      () => H.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        f
      )
    ), x = r(
      () => z(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), _ = (n) => {
      const m = w.value.querySelector(
        `button[data-cmp-button-id="${n}"]`
      );
      m && m.focus();
    }, O = (n, m) => {
      const o = C.value.indexOf(n) > -1;
      if (p.value)
        C.value = o ? [] : [n];
      else if (o) {
        const L = C.value.indexOf(n);
        C.value.splice(L, 1);
      } else
        C.value.push(n);
      m.target.focus();
    }, I = (n, m, o) => {
      const L = w.value.querySelectorAll("button").length - 1;
      switch (m.code) {
        case "ArrowLeft":
        case "ArrowUp":
          m.preventDefault(), o > 0 && _(o - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          m.preventDefault(), o < L && _(o + 1);
          break;
        case "Home":
          m.preventDefault(), _(0);
          break;
        case "End":
          m.preventDefault(), _(L);
          break;
        case "Enter":
        case "Space":
          m.preventDefault(), O(n, m), _(o);
          break;
      }
    }, v = (n) => C.value.indexOf(n) > -1, E = r(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    J(p, async (n, m) => {
      n !== m && (C.value = e.expandedItems);
    }), J(e.expandedItems, async (n, m) => {
      n !== m && (C.value = n);
    }), J($, async (n, m) => {
      n !== -1 && typeof n < "u" && n !== m && e.cqItemsOrder && (C.value = [e.cqItemsOrder[n]]);
    });
    const d = U.createCallbackListener(
      e.cqPath,
      $
    );
    return le(() => {
      U.subscribeRequestMessage(b.value, d);
    }), oe(() => {
      U.unsubscribeRequestMessage(b.value, d);
    }), (n, m) => (s(), c("div", P({
      id: e.id,
      ref_key: "accordion",
      ref: w,
      class: x.value,
      "data-cmp-single-expansion": p.value === !0 ? !0 : void 0
    }, S.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (s(!0), c(B, { key: 0 }, D(e.cqItemsOrder, (o, L) => (s(), c("div", {
        id: `accordion-${e.cqItems[o].id}`,
        key: `accordion-index-${L}`,
        class: i(`${e.baseCssClass}__item`),
        "data-cmp-expanded": v(o) ? !0 : void 0
      }, [
        (s(), y(N(e.headingElement), {
          class: i(`${e.baseCssClass}__heading`)
        }, {
          default: W(() => [
            q("button", {
              id: `accordion-${e.cqItems[o].id}-button`,
              "aria-controls": `accordion-${e.cqItems[o].id}-panel`,
              class: i([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: v(o)
                }
              ]),
              "data-cmp-button-id": L,
              onClick: (X) => O(o, X),
              onKeydown: (X) => I(o, X, L)
            }, [
              q("span", {
                class: i(`${e.baseCssClass}__title`)
              }, k(e.cqItems[o]["cq:panelTitle"]), 3),
              q("span", {
                class: i(`${e.baseCssClass}__icon`)
              }, fe, 2)
            ], 42, ye)
          ]),
          _: 2
        }, 1032, ["class"])),
        h(l) || v(o) ? (s(), c("div", {
          key: 0,
          id: `accordion-${e.cqItems[o].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[o].id}-button`,
          class: i(`${e.baseCssClass}__panel ${v(o) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (s(), y(N(V.value[t.cqItemsOrder.indexOf(o)]), { key: 0 })) : g("", !0)
        ], 10, Ie)) : g("", !0)
      ], 10, _e))), 128)) : g("", !0),
      h(l) ? (s(), y(h(Q), A(P({ key: 1 }, E.value)), null, 16)) : g("", !0)
    ], 16, Ce));
  }
}), ge = ["id"], ve = ["aria-live"], qe = ["id", "aria-label", "aria-labelledby"], $e = ["aria-label"], Oe = ["id", "aria-controls", "aria-label"], ze = /* @__PURE__ */ R({
  inheritAttrs: !1,
  __name: "CoreCarousel",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    accessibility: {
      type: Object,
      default: () => ({
        slide: "Slide {0} of {1}",
        indicator: "Slide {0}"
      })
    },
    accessibilityLabel: {
      type: String,
      default: "Carousel"
    },
    accessibilityNext: {
      type: String,
      default: "Next"
    },
    accessibilityPause: {
      type: String,
      default: "Pause"
    },
    accessibilityPlay: {
      type: String,
      default: "Play"
    },
    accessibilityPrevious: {
      type: String,
      default: "Previous"
    },
    accessibilityTablist: {
      type: String,
      default: "Choose a slide to display"
    },
    // eslint-disable-next-line vue/require-default-prop
    activeItem: {
      type: String
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
    controlsPrepended: {
      type: Boolean,
      default: !1
    },
    delay: {
      type: Number,
      default: 5e3
    },
    isInEditor: {
      type: Boolean,
      default: void 0
    },
    ...j("cmp-carousel")
  },
  setup(t) {
    const e = t, a = K(), l = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", G.isInEditor()), f = M("componentMapping", new T()), b = F(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), $ = r(
      () => z(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), C = r(() => {
      const O = {
        "aria-label": e.accessibilityLabel,
        "aria-live": "polite",
        "aria-roledescription": "carousel",
        class: "aem-container",
        "data-cmp-is": "carousel",
        "data-cmp-autoplay": ((a == null ? void 0 : a.autoplay) === !0 && !l).toString(),
        "data-cmp-delay": e.delay.toString(),
        "data-cmp-autopause-disabled": e.autopauseDisabled.toString(),
        "data-panelcontainer": "carousel",
        role: "group"
      };
      return l && (O["data-cq-data-path"] = e.cqPath), O;
    }), w = r(() => {
      const O = u(
        "button",
        {
          "aria-label": e.accessibilityPrevious,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--previous`
          ],
          "data-cmp-hook-carousel": "previous",
          type: "button"
        },
        [
          u("span", { class: `${e.baseCssClass}__action-icon` }, [
            u(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              u("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
            )
          ]),
          u("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPrevious
          ])
        ]
      ), I = u(
        "button",
        {
          "aria-label": e.accessibilityNext,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--next`
          ],
          "data-cmp-hook-carousel": "next",
          type: "button"
        },
        [
          u("span", { class: `${e.baseCssClass}__action-icon` }, [
            u(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              u("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
            )
          ]),
          u("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityNext
          ])
        ]
      ), v = u(
        "button",
        {
          "aria-label": e.accessibilityPause,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--pause`
          ],
          "data-cmp-hook-carousel": "pause",
          type: "button"
        },
        [
          u("span", { class: `${e.baseCssClass}__action-icon` }, [
            u(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              [u("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })]
            )
          ]),
          u("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPause
          ])
        ]
      ), E = u(
        "button",
        {
          "aria-label": e.accessibilityPlay,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--play`,
            `${e.baseCssClass}__action--disabled`
          ],
          "data-cmp-hook-carousel": "play",
          type: "button"
        },
        [
          u("span", { class: `${e.baseCssClass}__action-icon` }, [
            u(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              [u("path", { d: "M8 5v14l11-7z" })]
            )
          ]),
          u("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPlay
          ])
        ]
      ), d = [O, I];
      return (a == null ? void 0 : a.autoplay) === !0 && (d.push(v), d.push(E)), u("div", { class: `${e.baseCssClass}__actions` }, d);
    }), p = r(
      () => H.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        f
      )
    ), S = r(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), V = r(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), x = (O) => {
      var E;
      let I = ((E = e.accessibility) == null ? void 0 : E.indicator) || "";
      const v = "{0}";
      return I = I.replace(v, (O + 1).toString()), I;
    }, _ = (O) => {
      var d;
      let I = ((d = e.accessibility) == null ? void 0 : d.slide) || "";
      const v = "{0}";
      I = I.replace(v, (O + 1).toString());
      const E = "{1}";
      return I = I.replace(
        E,
        e.cqItemsOrder.length.toString()
      ), I;
    };
    return Y(
      // eslint-disable-next-line no-return-assign
      () => b.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (O, I) => {
      var v;
      return s(), c("div", P({
        id: e.id,
        class: $.value
      }, C.value), [
        e.controlsPrepended ? (s(), y(N(w.value), { key: 0 })) : g("", !0),
        S.value ? g("", !0) : (s(), c("div", {
          key: 1,
          "aria-live": ((v = h(a)) == null ? void 0 : v.autoplay) === !0 ? "off" : "polite",
          class: i(`${e.baseCssClass}__content`),
          "aria-atomic": "false"
        }, [
          (s(!0), c(B, null, D(p.value, (E, d) => (s(), c("div", {
            id: `${e.cqItems[e.cqItemsOrder[d]].id}-tabpanel`,
            key: `item-${d}`,
            "aria-label": _(d),
            "aria-labelledby": `${e.cqItems[e.cqItemsOrder[d]].id}-tab`,
            class: i([
              `${e.baseCssClass}__item`,
              {
                [`${e.baseCssClass}__item--active`]: d === b.value
              }
            ]),
            "aria-roledescription": "slide",
            "data-cmp-hook-carousel": "item",
            role: "tabpanel"
          }, [
            (s(), y(N(E), A(Z({ isInEditor: !1 })), null, 16))
          ], 10, qe))), 128)),
          e.controlsPrepended ? g("", !0) : (s(), y(N(w.value), { key: 0 })),
          q("ol", {
            "aria-label": e.accessibilityTablist,
            class: i(`${e.baseCssClass}__indicators`),
            "data-cmp-hook-carousel": "indicators",
            role: "tablist"
          }, [
            (s(!0), c(B, null, D(e.cqItemsOrder, (E, d) => (s(), c("li", {
              id: `${e.cqItems[e.cqItemsOrder[d]].id}-tab`,
              key: `item-${d}`,
              "aria-controls": `${e.cqItems[e.cqItemsOrder[d]].id}-tabpanel`,
              "aria-label": x(d),
              class: i([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: d === b.value
                }
              ]),
              "data-cmp-hook-carousel": "indicator",
              role: "tab"
            }, k(e.cqItems[E]["cq:panelTitle"]), 11, Oe))), 128))
          ], 10, $e)
        ], 10, ve)),
        h(l) ? (s(), y(h(Q), A(P({ key: 2 }, V.value)), null, 16)) : g("", !0)
      ], 16, ge);
    };
  }
}), Ge = /* @__PURE__ */ R({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, a) => (s(), y(ue, { "is-in-editor": !1 }));
  }
}), Ee = ["id"], we = ["aria-label"], Pe = ["id", "aria-controls", "tabIndex"], Se = ["id", "aria-labelledby"], Ve = /* @__PURE__ */ R({
  inheritAttrs: !1,
  __name: "CoreTabs",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    activeItem: {
      type: String
    },
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
    ...j("cmp-tabs")
  },
  setup(t) {
    const e = t, a = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", G.isInEditor()), l = M("componentMapping", new T()), f = F(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), b = r(
      () => H.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        l
      )
    ), $ = r(
      () => z(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        a,
        e.aemNoDecoration
      )
    ), C = r(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), w = r(() => {
      const S = {
        class: "aem-container",
        "data-cmp-is": "tabs",
        "data-panelcontainer": "tabs"
      };
      return a && (S["data-cq-data-path"] = e.cqPath), S;
    }), p = r(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return Y(
      // eslint-disable-next-line no-return-assign
      () => f.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (S, V) => (s(), c("div", P({
      id: e.id,
      class: $.value
    }, w.value), [
      C.value ? g("", !0) : (s(), c("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: i(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (s(!0), c(B, null, D(e.cqItemsOrder, (x, _) => (s(), c("li", {
          id: `${e.cqItems[x].id}-tab`,
          key: `tab-${_}`,
          "aria-controls": `${e.cqItems[x].id}-tabpanel`,
          class: i([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: _ === f.value
            }
          ]),
          tabIndex: _ === f.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab"
        }, k(e.cqItems[x]["cq:panelTitle"]), 11, Pe))), 128))
      ], 10, we)),
      C.value ? g("", !0) : (s(!0), c(B, { key: 1 }, D(b.value, (x, _) => (s(), c("div", {
        id: `${e.cqItems[e.cqItemsOrder[_]].id}-tabpanel`,
        key: `tab-content-${_}`,
        class: i([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: _ === f.value
          }
        ]),
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[_]].id}-tab`,
        "data-cmp-hook-tabs": "tabpanel",
        role: "tabpanel",
        tabindex: "0"
      }, [
        (s(), y(N(x), A(Z({ isInEditor: !1 })), null, 16))
      ], 10, Se))), 128)),
      h(a) ? (s(), y(h(Q), A(P({ key: 2 }, p.value)), null, 16)) : g("", !0)
    ], 16, Ee));
  }
});
export {
  Ne as AccordionEditConfig,
  Me as CarouselEditConfig,
  Le as ContainerEditConfig,
  Be as ContentFragmentEditConfig,
  Te as CoreAccordion,
  ze as CoreCarousel,
  ue as CoreContainer,
  je as CoreContentFragment,
  Ge as CoreExperienceFragment,
  Ve as CoreTabs,
  be as DefaultContentFragment,
  De as ExperienceFragmentEditConfig,
  Fe as MapToContentFragmentModel,
  U as SpaUtils,
  Re as TabsEditConfig,
  de as getRenderer,
  ce as mapRenderer
};
