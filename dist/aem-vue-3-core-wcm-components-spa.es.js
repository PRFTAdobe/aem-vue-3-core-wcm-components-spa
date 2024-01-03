import { MapTo as le, ComponentMapping as V, componentProperties as G, componentClassNames as U, AllowedComponentsContainer as ie, ResponsiveGrid as oe, Container as re, Utils as X, ContainerPlaceholder as Y } from "aem-vue-3-editable-components";
import { defineComponent as j, useAttrs as J, inject as M, computed as p, openBlock as n, createBlock as h, unref as g, normalizeProps as k, mergeProps as x, resolveDynamicComponent as L, normalizeClass as d, normalizeStyle as ce, withCtx as Z, createElementBlock as m, createElementVNode as O, toDisplayString as A, createCommentVNode as q, Fragment as B, renderList as F, ref as D, watch as W, onMounted as ee, onUnmounted as te, h as b, watchEffect as se, guardReactiveProps as ae, withKeys as T, withModifiers as z } from "vue";
import { AuthoringUtils as H } from "@adobe/aem-spa-page-model-manager";
const Ne = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, De = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Re = {
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
}, Fe = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, je = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, de = "ContentFragment-", ne = (t) => de + t, ue = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((u) => {
    le(ne(u))(e);
  });
}, pe = (t) => {
  const e = ne(t);
  return V.get(e);
}, Te = (t) => (e) => ue(t, e), me = /* @__PURE__ */ j({
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
    ...G("cmp-container")
  },
  setup(t) {
    const e = t, l = J(), u = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", H.isInEditor()), y = p(
      () => U(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), c = p(
      () => {
        var $;
        return u && (l == null ? void 0 : l.allowedComponents) && (($ = l == null ? void 0 : l.allowedComponents) == null ? void 0 : $.applicable);
      }
    );
    return ($, v) => c.value ? (n(), h(g(ie), k(x({ key: 0 }, { ...e, ...g(l) })), null, 16)) : (n(), h(L(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: d(y.value),
      role: e.roleAttribute,
      style: ce(e.backgroundStyle)
    }, {
      default: Z(() => [
        t.layout === "RESPONSIVE_GRID" ? (n(), h(g(oe), k(x({ key: 0 }, {
          ...e,
          ...g(l),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (n(), h(g(re), k(x({ key: 1 }, { ...e, ...g(l) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), be = ["id"], Ce = ["innerHTML"], _e = /* @__PURE__ */ j({
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
    ...G("cmp-contentfragment")
  },
  setup(t) {
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", H.isInEditor()), u = M("componentMapping", new V()), y = p(
      () => U(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), c = p(
      () => X.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        u
      )
    );
    return ($, v) => {
      var w;
      return n(), m("div", {
        id: e.id,
        class: d(y.value)
      }, [
        O("h3", {
          class: d(`${e.baseCssClass}__title`)
        }, A(e.title), 3),
        e.description ? (n(), m("p", {
          key: 0,
          class: d(`${e.baseCssClass}__description`)
        }, A(e.description), 3)) : q("", !0),
        (w = e.elementsOrder) != null && w.length ? (n(), m("div", {
          key: 1,
          class: d(`${e.baseCssClass}__elements`)
        }, [
          (n(!0), m(B, null, F(e.elementsOrder, (C, N) => (n(), m("div", {
            key: `${e.id}-element-${C}-${N}`,
            class: d(`${e.baseCssClass}__element`)
          }, [
            O("div", {
              class: d([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              O("h4", null, A(C), 1)
            ], 2),
            O("div", {
              class: d([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[C].value}`
            }, null, 10, Ce),
            O("div", {
              class: d([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + A(e.elements[C].dataType), 3),
            O("div", {
              class: d([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + A(e.elements[C].multiValue ? "true" : "false"), 3),
            O("div", {
              class: d([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + A(e.elements[C][":type"]), 3)
          ], 2))), 128))
        ], 2)) : q("", !0),
        (n(!0), m(B, null, F(c.value, (C) => (n(), h(L(C), {
          key: C.toString()
        }))), 128))
      ], 10, be);
    };
  }
}), ze = /* @__PURE__ */ j({
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
    ...G("cmp-contentfragment")
  },
  setup(t) {
    const e = t, l = J(), u = p(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), y = p(() => {
      const c = pe(e.model);
      return c || _e;
    });
    return (c, $) => u.value ? q("", !0) : (n(), h(L(y.value), k(x({ key: 0 }, { ...e, ...g(l) })), null, 16));
  }
}), R = {
  createCallbackListener(t, e) {
    return (l, u = t) => {
      l.data && l.data.id === u && l.data.operation === "navigate" && (e.value = l.data.index);
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
}, ye = ["id", "data-cmp-single-expansion"], fe = ["id", "data-cmp-expanded"], he = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], ve = /* @__PURE__ */ O("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ O("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), ge = [
  ve
], Ie = ["id", "aria-labelledby"], Ge = /* @__PURE__ */ j({
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
  setup(t) {
    const e = t, l = J(), u = M("isInEditor", H.isInEditor()), y = M("componentMapping", new V()), c = D(R.initMessageChannel()), $ = D(-1), v = D(e.expandedItems), w = D(null), C = p(() => (l == null ? void 0 : l.singleExpansion) === !0), N = p(() => {
      const s = {};
      return u && (s["data-panelcontainer"] = "accordion", s["data-cq-data-path"] = e.cqPath || "", s["data-placeholder-text"] = "Please drag Accordion item components here"), s;
    }), K = p(
      () => X.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        y
      )
    ), P = p(
      () => U(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), S = (s) => {
      const a = w.value.querySelector(
        `button[data-cmp-button-id="${s}"]`
      );
      a && a.focus();
    }, I = (s, a) => {
      const r = v.value.indexOf(s) > -1;
      if (C.value)
        v.value = r ? [] : [s];
      else if (r) {
        const E = v.value.indexOf(s);
        v.value.splice(E, 1);
      } else
        v.value.push(s);
      a.target.focus();
    }, _ = (s, a, r) => {
      const E = w.value.querySelectorAll("button").length - 1;
      switch (a.code) {
        case "ArrowLeft":
        case "ArrowUp":
          a.preventDefault(), r > 0 && S(r - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          a.preventDefault(), r < E && S(r + 1);
          break;
        case "Home":
          a.preventDefault(), S(0);
          break;
        case "End":
          a.preventDefault(), S(E);
          break;
        case "Enter":
        case "Space":
          a.preventDefault(), I(s, a), S(r);
          break;
      }
    }, f = (s) => v.value.indexOf(s) > -1, i = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    W(C, async (s, a) => {
      s !== a && (v.value = e.expandedItems);
    }), W(e.expandedItems, async (s, a) => {
      s !== a && (v.value = s);
    }), W($, async (s, a) => {
      s !== -1 && typeof s < "u" && s !== a && e.cqItemsOrder && (v.value = [e.cqItemsOrder[s]]);
    });
    const o = R.createCallbackListener(
      e.cqPath,
      $
    );
    return ee(() => {
      R.subscribeRequestMessage(c.value, o);
    }), te(() => {
      R.unsubscribeRequestMessage(c.value, o);
    }), (s, a) => (n(), m("div", x({
      id: e.id,
      ref_key: "accordion",
      ref: w,
      class: P.value,
      "data-cmp-single-expansion": C.value === !0 ? !0 : void 0
    }, N.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (n(!0), m(B, { key: 0 }, F(e.cqItemsOrder, (r, E) => (n(), m("div", {
        id: `accordion-${e.cqItems[r].id}`,
        key: `accordion-index-${E}`,
        class: d(`${e.baseCssClass}__item`),
        "data-cmp-expanded": f(r) ? !0 : void 0
      }, [
        (n(), h(L(e.headingElement), {
          class: d(`${e.baseCssClass}__heading`)
        }, {
          default: Z(() => [
            O("button", {
              id: `accordion-${e.cqItems[r].id}-button`,
              "aria-controls": `accordion-${e.cqItems[r].id}-panel`,
              class: d([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: f(r)
                }
              ]),
              "data-cmp-button-id": E,
              onClick: (Q) => I(r, Q),
              onKeydown: (Q) => _(r, Q, E)
            }, [
              O("span", {
                class: d(`${e.baseCssClass}__title`)
              }, A(e.cqItems[r]["cq:panelTitle"]), 3),
              O("span", {
                class: d(`${e.baseCssClass}__icon`)
              }, ge, 2)
            ], 42, he)
          ]),
          _: 2
        }, 1032, ["class"])),
        g(u) || f(r) ? (n(), m("div", {
          key: 0,
          id: `accordion-${e.cqItems[r].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[r].id}-button`,
          class: d(`${e.baseCssClass}__panel ${f(r) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (n(), h(L(K.value[t.cqItemsOrder.indexOf(r)]), { key: 0 })) : q("", !0)
        ], 10, Ie)) : q("", !0)
      ], 10, fe))), 128)) : q("", !0),
      g(u) ? (n(), h(g(Y), k(x({ key: 1 }, i.value)), null, 16)) : q("", !0)
    ], 16, ye));
  }
}), qe = ["id"], $e = ["aria-live"], Oe = ["id", "aria-label", "aria-labelledby"], Ee = ["aria-label"], we = ["id", "aria-controls", "aria-label"], Ke = /* @__PURE__ */ j({
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
    ...G("cmp-carousel")
  },
  setup(t) {
    const e = t, l = J(), u = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", H.isInEditor()), y = M("componentMapping", new V()), c = D(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), $ = p(
      () => U(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), v = p(() => {
      const I = {
        "aria-label": e.accessibilityLabel,
        "aria-live": "polite",
        "aria-roledescription": "carousel",
        class: "aem-container",
        "data-cmp-is": "carousel",
        "data-cmp-autoplay": (l == null ? void 0 : l.autoplay) === !0 && !u ? "true" : void 0,
        "data-cmp-delay": e.delay.toString(),
        "data-cmp-autopause-disabled": e.autopauseDisabled.toString(),
        "data-panelcontainer": "carousel",
        role: "group"
      };
      return u && (I["data-cq-data-path"] = e.cqPath), I;
    }), w = p(() => {
      const I = b(
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
          b("span", { class: `${e.baseCssClass}__action-icon` }, [
            b(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              b("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
            )
          ]),
          b("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPrevious
          ])
        ]
      ), _ = b(
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
          b("span", { class: `${e.baseCssClass}__action-icon` }, [
            b(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              b("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
            )
          ]),
          b("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityNext
          ])
        ]
      ), f = b(
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
          b("span", { class: `${e.baseCssClass}__action-icon` }, [
            b(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              [b("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })]
            )
          ]),
          b("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPause
          ])
        ]
      ), i = b(
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
          b("span", { class: `${e.baseCssClass}__action-icon` }, [
            b(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              [b("path", { d: "M8 5v14l11-7z" })]
            )
          ]),
          b("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPlay
          ])
        ]
      ), o = [I, _];
      return (l == null ? void 0 : l.autoplay) === !0 && (o.push(f), o.push(i)), b("div", { class: `${e.baseCssClass}__actions` }, o);
    }), C = p(
      () => X.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        y
      )
    ), N = p(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), K = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), P = (I) => {
      var i;
      let _ = ((i = e.accessibility) == null ? void 0 : i.indicator) || "";
      const f = "{0}";
      return _ = _.replace(f, (I + 1).toString()), _;
    }, S = (I) => {
      var o;
      let _ = ((o = e.accessibility) == null ? void 0 : o.slide) || "";
      const f = "{0}";
      _ = _.replace(f, (I + 1).toString());
      const i = "{1}";
      return _ = _.replace(
        i,
        e.cqItemsOrder.length.toString()
      ), _;
    };
    return se(
      // eslint-disable-next-line no-return-assign
      () => c.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (I, _) => {
      var f;
      return n(), m("div", x({
        id: e.id,
        class: $.value
      }, v.value), [
        e.controlsPrepended ? (n(), h(L(w.value), { key: 0 })) : q("", !0),
        N.value ? q("", !0) : (n(), m("div", {
          key: 1,
          "aria-live": ((f = g(l)) == null ? void 0 : f.autoplay) === !0 ? "off" : "polite",
          class: d(`${e.baseCssClass}__content`),
          "aria-atomic": "false"
        }, [
          (n(!0), m(B, null, F(C.value, (i, o) => (n(), m("div", {
            id: `${e.cqItems[e.cqItemsOrder[o]].id}-tabpanel`,
            key: `item-${o}`,
            "aria-label": S(o),
            "aria-labelledby": `${e.cqItems[e.cqItemsOrder[o]].id}-tab`,
            class: d([
              `${e.baseCssClass}__item`,
              {
                [`${e.baseCssClass}__item--active`]: o === c.value
              }
            ]),
            "aria-roledescription": "slide",
            "data-cmp-hook-carousel": "item",
            role: "tabpanel"
          }, [
            (n(), h(L(i), k(ae({ isInEditor: !1 })), null, 16))
          ], 10, Oe))), 128)),
          e.controlsPrepended ? q("", !0) : (n(), h(L(w.value), { key: 0 })),
          O("ol", {
            "aria-label": e.accessibilityTablist,
            class: d(`${e.baseCssClass}__indicators`),
            "data-cmp-hook-carousel": "indicators",
            role: "tablist"
          }, [
            (n(!0), m(B, null, F(e.cqItemsOrder, (i, o) => (n(), m("li", {
              id: `${e.cqItems[e.cqItemsOrder[o]].id}-tab`,
              key: `item-${o}`,
              "aria-controls": `${e.cqItems[e.cqItemsOrder[o]].id}-tabpanel`,
              "aria-label": P(o),
              class: d([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: o === c.value
                }
              ]),
              "data-cmp-hook-carousel": "indicator",
              role: "tab"
            }, A(e.cqItems[i]["cq:panelTitle"]), 11, we))), 128))
          ], 10, Ee)
        ], 10, $e)),
        g(u) ? (n(), h(g(Y), k(x({ key: 2 }, K.value)), null, 16)) : q("", !0)
      ], 16, qe);
    };
  }
}), Ve = /* @__PURE__ */ j({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, l) => (n(), h(me, { "is-in-editor": !1 }));
  }
}), Pe = ["id", "onKeydown"], Se = ["aria-label"], xe = ["id", "aria-controls", "aria-selected", "tabIndex", "onClick"], Ae = ["id", "aria-hidden", "aria-labelledby"], Ue = /* @__PURE__ */ j({
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
    ...G("cmp-tabs")
  },
  setup(t) {
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", H.isInEditor()), u = M("componentMapping", new V()), y = D(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), c = D(null), $ = R.initMessageChannel(), v = p(
      () => X.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        u
      )
    ), w = p(
      () => U(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), C = p(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), N = p(() => {
      const i = {
        class: "aem-container",
        "data-panelcontainer": "tabs"
      };
      return l && (i["data-cq-data-path"] = e.cqPath), i;
    }), K = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), P = (i) => {
      if (c.value) {
        const o = c.value, s = o.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), a = o.querySelectorAll(
          `.${e.baseCssClass}__tabpanel`
        );
        i < 0 && (i = s.length - 1), i >= s.length && (i = 0), s.length && s.forEach((r, E) => {
          E === i ? (r.classList.add(`${e.baseCssClass}__tab--active`), r.setAttribute("aria-selected", "true"), r.setAttribute("tabindex", "0")) : (r.classList.remove(`${e.baseCssClass}__tab--active`), r.removeAttribute("aria-selected"), r.setAttribute("tabindex", "-1"));
        }), a.length && a.forEach((r, E) => {
          E === i ? (r.classList.add(
            `${e.baseCssClass}__tabpanel--active`
          ), r.removeAttribute("aria-hidden")) : (r.classList.remove(
            `${e.baseCssClass}__tabpanel--active`
          ), r.setAttribute("aria-hidden", "true"));
        });
      }
    }, S = (i, o = e.cqPath) => {
      i.data && i.data.id === o && i.data.operation === "navigate" && P(i.data.index);
    }, I = () => {
      if (c.value) {
        const o = c.value.querySelectorAll(
          `.${e.baseCssClass}__tab`
        );
        P(o.length - 1);
      }
    }, _ = () => {
      if (c.value) {
        const i = c.value, o = i.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), s = i.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), a = Array.from(o).indexOf(s);
        P(a - 1);
      }
    }, f = () => {
      if (c.value) {
        const i = c.value, o = i.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), s = i.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), a = Array.from(o).indexOf(s);
        P(a + 1);
      }
    };
    return ee(() => {
      R.subscribeRequestMessage($, S);
    }), te(() => {
      R.unsubscribeRequestMessage($, S);
    }), se(
      // eslint-disable-next-line no-return-assign
      () => y.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (i, o) => (n(), m("div", x({
      id: e.id,
      ref_key: "tabContainer",
      ref: c,
      class: w.value
    }, N.value, {
      onKeydown: [
        T(z(_, ["prevent"]), ["left"]),
        T(z(_, ["prevent"]), ["up"]),
        T(z(f, ["prevent"]), ["right"]),
        T(z(f, ["prevent"]), ["down"]),
        o[0] || (o[0] = T(z((s) => P(0), ["prevent"]), ["home"])),
        T(z(I, ["prevent"]), ["end"])
      ]
    }), [
      C.value ? q("", !0) : (n(), m("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: d(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (n(!0), m(B, null, F(e.cqItemsOrder, (s, a) => (n(), m("li", {
          id: `${e.cqItems[s].id}-tab`,
          key: `tab-${a}`,
          "aria-controls": `${e.cqItems[s].id}-tabpanel`,
          "aria-selected": a === y.value ? !0 : void 0,
          class: d([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: a === y.value
            }
          ]),
          tabIndex: a === y.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (r) => P(a)
        }, A(e.cqItems[s]["cq:panelTitle"]), 11, xe))), 128))
      ], 10, Se)),
      C.value ? q("", !0) : (n(!0), m(B, { key: 1 }, F(v.value, (s, a) => (n(), m("div", {
        id: `${e.cqItems[e.cqItemsOrder[a]].id}-tabpanel`,
        key: `tab-content-${a}`,
        "aria-hidden": a === y.value ? void 0 : !0,
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[a]].id}-tab`,
        class: d([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: a === y.value
          }
        ]),
        "data-cmp-hook-tabs": "tabpanel",
        role: "tabpanel",
        tabindex: "0"
      }, [
        (n(), h(L(s), k(ae({ isInEditor: !1 })), null, 16))
      ], 10, Ae))), 128)),
      g(l) ? (n(), h(g(Y), k(x({ key: 2 }, K.value)), null, 16)) : q("", !0)
    ], 16, Pe));
  }
});
export {
  Ne as AccordionEditConfig,
  De as CarouselEditConfig,
  Re as ContainerEditConfig,
  Be as ContentFragmentEditConfig,
  Ge as CoreAccordion,
  Ke as CoreCarousel,
  me as CoreContainer,
  ze as CoreContentFragment,
  Ve as CoreExperienceFragment,
  Ue as CoreTabs,
  _e as DefaultContentFragment,
  Fe as ExperienceFragmentEditConfig,
  Te as MapToContentFragmentModel,
  R as SpaUtils,
  je as TabsEditConfig,
  pe as getRenderer,
  ue as mapRenderer
};
