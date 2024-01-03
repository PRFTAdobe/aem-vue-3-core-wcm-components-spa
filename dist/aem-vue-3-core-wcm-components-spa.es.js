import { MapTo as ne, ComponentMapping as K, componentProperties as z, componentClassNames as V, AllowedComponentsContainer as le, ResponsiveGrid as ie, Container as oe, Utils as H, ContainerPlaceholder as W } from "aem-vue-3-editable-components";
import { defineComponent as j, useAttrs as X, inject as M, computed as m, openBlock as n, createBlock as h, unref as g, normalizeProps as k, mergeProps as x, resolveDynamicComponent as L, normalizeClass as d, normalizeStyle as re, withCtx as Y, createElementBlock as p, createElementVNode as O, toDisplayString as A, createCommentVNode as q, Fragment as B, renderList as F, ref as D, watch as Q, onMounted as Z, onUnmounted as ee, h as b, watchEffect as te, guardReactiveProps as se, withKeys as T } from "vue";
import { AuthoringUtils as U } from "@adobe/aem-spa-page-model-manager";
const Me = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ne = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, De = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Re = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return t.elementsOrder.length === 0 && t.cqItemsOrder.length === 0;
  }
}, Be = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Fe = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, ce = "ContentFragment-", ae = (t) => ce + t, de = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((u) => {
    ne(ae(u))(e);
  });
}, ue = (t) => {
  const e = ae(t);
  return K.get(e);
}, je = (t) => (e) => de(t, e), me = /* @__PURE__ */ j({
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
    ...z("cmp-container")
  },
  setup(t) {
    const e = t, l = X(), u = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", U.isInEditor()), y = m(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), c = m(
      () => {
        var $;
        return u && (l == null ? void 0 : l.allowedComponents) && (($ = l == null ? void 0 : l.allowedComponents) == null ? void 0 : $.applicable);
      }
    );
    return ($, v) => c.value ? (n(), h(g(le), k(x({ key: 0 }, { ...e, ...g(l) })), null, 16)) : (n(), h(L(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: d(y.value),
      role: e.roleAttribute,
      style: re(e.backgroundStyle)
    }, {
      default: Y(() => [
        t.layout === "RESPONSIVE_GRID" ? (n(), h(g(ie), k(x({ key: 0 }, {
          ...e,
          ...g(l),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (n(), h(g(oe), k(x({ key: 1 }, { ...e, ...g(l) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), pe = ["id"], be = ["innerHTML"], Ce = /* @__PURE__ */ j({
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
    ...z("cmp-contentfragment")
  },
  setup(t) {
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", U.isInEditor()), u = M("componentMapping", new K()), y = m(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), c = m(
      () => H.getChildComponents(
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
      return n(), p("div", {
        id: e.id,
        class: d(y.value)
      }, [
        O("h3", {
          class: d(`${e.baseCssClass}__title`)
        }, A(e.title), 3),
        e.description ? (n(), p("p", {
          key: 0,
          class: d(`${e.baseCssClass}__description`)
        }, A(e.description), 3)) : q("", !0),
        (w = e.elementsOrder) != null && w.length ? (n(), p("div", {
          key: 1,
          class: d(`${e.baseCssClass}__elements`)
        }, [
          (n(!0), p(B, null, F(e.elementsOrder, (C, N) => (n(), p("div", {
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
            }, null, 10, be),
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
        (n(!0), p(B, null, F(c.value, (C) => (n(), h(L(C), {
          key: C.toString()
        }))), 128))
      ], 10, pe);
    };
  }
}), Te = /* @__PURE__ */ j({
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
    ...z("cmp-contentfragment")
  },
  setup(t) {
    const e = t, l = X(), u = m(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), y = m(() => {
      const c = ue(e.model);
      return c || Ce;
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
}, _e = ["id", "data-cmp-single-expansion"], ye = ["id", "data-cmp-expanded"], fe = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], he = /* @__PURE__ */ O("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ O("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), ve = [
  he
], ge = ["id", "aria-labelledby"], ze = /* @__PURE__ */ j({
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
    ...z("cmp-accordion")
  },
  setup(t) {
    const e = t, l = X(), u = M("isInEditor", U.isInEditor()), y = M("componentMapping", new K()), c = D(R.initMessageChannel()), $ = D(-1), v = D(e.expandedItems), w = D(null), C = m(() => (l == null ? void 0 : l.singleExpansion) === !0), N = m(() => {
      const s = {};
      return u && (s["data-panelcontainer"] = "accordion", s["data-cq-data-path"] = e.cqPath || "", s["data-placeholder-text"] = "Please drag Accordion item components here"), s;
    }), G = m(
      () => H.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        y
      )
    ), P = m(
      () => V(
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
      const i = v.value.indexOf(s) > -1;
      if (C.value)
        v.value = i ? [] : [s];
      else if (i) {
        const E = v.value.indexOf(s);
        v.value.splice(E, 1);
      } else
        v.value.push(s);
      a.target.focus();
    }, _ = (s, a, i) => {
      const E = w.value.querySelectorAll("button").length - 1;
      switch (a.code) {
        case "ArrowLeft":
        case "ArrowUp":
          a.preventDefault(), i > 0 && S(i - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          a.preventDefault(), i < E && S(i + 1);
          break;
        case "Home":
          a.preventDefault(), S(0);
          break;
        case "End":
          a.preventDefault(), S(E);
          break;
        case "Enter":
        case "Space":
          a.preventDefault(), I(s, a), S(i);
          break;
      }
    }, f = (s) => v.value.indexOf(s) > -1, o = m(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    Q(C, async (s, a) => {
      s !== a && (v.value = e.expandedItems);
    }), Q(e.expandedItems, async (s, a) => {
      s !== a && (v.value = s);
    }), Q($, async (s, a) => {
      s !== -1 && typeof s < "u" && s !== a && e.cqItemsOrder && (v.value = [e.cqItemsOrder[s]]);
    });
    const r = R.createCallbackListener(
      e.cqPath,
      $
    );
    return Z(() => {
      R.subscribeRequestMessage(c.value, r);
    }), ee(() => {
      R.unsubscribeRequestMessage(c.value, r);
    }), (s, a) => (n(), p("div", x({
      id: e.id,
      ref_key: "accordion",
      ref: w,
      class: P.value,
      "data-cmp-single-expansion": C.value === !0 ? !0 : void 0
    }, N.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (n(!0), p(B, { key: 0 }, F(e.cqItemsOrder, (i, E) => (n(), p("div", {
        id: `accordion-${e.cqItems[i].id}`,
        key: `accordion-index-${E}`,
        class: d(`${e.baseCssClass}__item`),
        "data-cmp-expanded": f(i) ? !0 : void 0
      }, [
        (n(), h(L(e.headingElement), {
          class: d(`${e.baseCssClass}__heading`)
        }, {
          default: Y(() => [
            O("button", {
              id: `accordion-${e.cqItems[i].id}-button`,
              "aria-controls": `accordion-${e.cqItems[i].id}-panel`,
              class: d([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: f(i)
                }
              ]),
              "data-cmp-button-id": E,
              onClick: (J) => I(i, J),
              onKeydown: (J) => _(i, J, E)
            }, [
              O("span", {
                class: d(`${e.baseCssClass}__title`)
              }, A(e.cqItems[i]["cq:panelTitle"]), 3),
              O("span", {
                class: d(`${e.baseCssClass}__icon`)
              }, ve, 2)
            ], 42, fe)
          ]),
          _: 2
        }, 1032, ["class"])),
        g(u) || f(i) ? (n(), p("div", {
          key: 0,
          id: `accordion-${e.cqItems[i].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[i].id}-button`,
          class: d(`${e.baseCssClass}__panel ${f(i) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (n(), h(L(G.value[t.cqItemsOrder.indexOf(i)]), { key: 0 })) : q("", !0)
        ], 10, ge)) : q("", !0)
      ], 10, ye))), 128)) : q("", !0),
      g(u) ? (n(), h(g(W), k(x({ key: 1 }, o.value)), null, 16)) : q("", !0)
    ], 16, _e));
  }
}), Ie = ["id"], qe = ["aria-live"], $e = ["id", "aria-label", "aria-labelledby"], Oe = ["aria-label"], Ee = ["id", "aria-controls", "aria-label"], Ge = /* @__PURE__ */ j({
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
    ...z("cmp-carousel")
  },
  setup(t) {
    const e = t, l = X(), u = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", U.isInEditor()), y = M("componentMapping", new K()), c = D(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), $ = m(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), v = m(() => {
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
    }), w = m(() => {
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
      ), o = b(
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
      ), r = [I, _];
      return (l == null ? void 0 : l.autoplay) === !0 && (r.push(f), r.push(o)), b("div", { class: `${e.baseCssClass}__actions` }, r);
    }), C = m(
      () => H.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        y
      )
    ), N = m(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), G = m(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), P = (I) => {
      var o;
      let _ = ((o = e.accessibility) == null ? void 0 : o.indicator) || "";
      const f = "{0}";
      return _ = _.replace(f, (I + 1).toString()), _;
    }, S = (I) => {
      var r;
      let _ = ((r = e.accessibility) == null ? void 0 : r.slide) || "";
      const f = "{0}";
      _ = _.replace(f, (I + 1).toString());
      const o = "{1}";
      return _ = _.replace(
        o,
        e.cqItemsOrder.length.toString()
      ), _;
    };
    return te(
      // eslint-disable-next-line no-return-assign
      () => c.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (I, _) => {
      var f;
      return n(), p("div", x({
        id: e.id,
        class: $.value
      }, v.value), [
        e.controlsPrepended ? (n(), h(L(w.value), { key: 0 })) : q("", !0),
        N.value ? q("", !0) : (n(), p("div", {
          key: 1,
          "aria-live": ((f = g(l)) == null ? void 0 : f.autoplay) === !0 ? "off" : "polite",
          class: d(`${e.baseCssClass}__content`),
          "aria-atomic": "false"
        }, [
          (n(!0), p(B, null, F(C.value, (o, r) => (n(), p("div", {
            id: `${e.cqItems[e.cqItemsOrder[r]].id}-tabpanel`,
            key: `item-${r}`,
            "aria-label": S(r),
            "aria-labelledby": `${e.cqItems[e.cqItemsOrder[r]].id}-tab`,
            class: d([
              `${e.baseCssClass}__item`,
              {
                [`${e.baseCssClass}__item--active`]: r === c.value
              }
            ]),
            "aria-roledescription": "slide",
            "data-cmp-hook-carousel": "item",
            role: "tabpanel"
          }, [
            (n(), h(L(o), k(se({ isInEditor: !1 })), null, 16))
          ], 10, $e))), 128)),
          e.controlsPrepended ? q("", !0) : (n(), h(L(w.value), { key: 0 })),
          O("ol", {
            "aria-label": e.accessibilityTablist,
            class: d(`${e.baseCssClass}__indicators`),
            "data-cmp-hook-carousel": "indicators",
            role: "tablist"
          }, [
            (n(!0), p(B, null, F(e.cqItemsOrder, (o, r) => (n(), p("li", {
              id: `${e.cqItems[e.cqItemsOrder[r]].id}-tab`,
              key: `item-${r}`,
              "aria-controls": `${e.cqItems[e.cqItemsOrder[r]].id}-tabpanel`,
              "aria-label": P(r),
              class: d([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: r === c.value
                }
              ]),
              "data-cmp-hook-carousel": "indicator",
              role: "tab"
            }, A(e.cqItems[o]["cq:panelTitle"]), 11, Ee))), 128))
          ], 10, Oe)
        ], 10, qe)),
        g(u) ? (n(), h(g(W), k(x({ key: 2 }, G.value)), null, 16)) : q("", !0)
      ], 16, Ie);
    };
  }
}), Ke = /* @__PURE__ */ j({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, l) => (n(), h(me, { "is-in-editor": !1 }));
  }
}), we = ["id", "onKeydown"], Pe = ["aria-label"], Se = ["id", "aria-controls", "aria-selected", "tabIndex", "onClick"], xe = ["id", "aria-hidden", "aria-labelledby"], Ve = /* @__PURE__ */ j({
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
    ...z("cmp-tabs")
  },
  setup(t) {
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", U.isInEditor()), u = M("componentMapping", new K()), y = D(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), c = D(null), $ = R.initMessageChannel(), v = m(
      () => H.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        u
      )
    ), w = m(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), C = m(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), N = m(() => {
      const o = {
        class: "aem-container",
        "data-panelcontainer": "tabs"
      };
      return l && (o["data-cq-data-path"] = e.cqPath), o;
    }), G = m(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), P = (o) => {
      if (c.value) {
        const r = c.value, s = r.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), a = r.querySelectorAll(
          `.${e.baseCssClass}__tabpanel`
        );
        o < 0 && (o = s.length - 1), o >= s.length && (o = 0), s.length && s.forEach((i, E) => {
          E === o ? (i.classList.add(`${e.baseCssClass}__tab--active`), i.setAttribute("aria-selected", "true"), i.setAttribute("tabindex", "0")) : (i.classList.remove(`${e.baseCssClass}__tab--active`), i.removeAttribute("aria-selected"), i.setAttribute("tabindex", "-1"));
        }), a.length && a.forEach((i, E) => {
          E === o ? (i.classList.add(
            `${e.baseCssClass}__tabpanel--active`
          ), i.removeAttribute("aria-hidden"), i.focus()) : (i.classList.remove(
            `${e.baseCssClass}__tabpanel--active`
          ), i.setAttribute("aria-hidden", "true"));
        });
      }
    }, S = (o, r = e.cqPath) => {
      o.data && o.data.id === r && o.data.operation === "navigate" && P(o.data.index);
    }, I = () => {
      if (c.value) {
        const r = c.value.querySelectorAll(
          `.${e.baseCssClass}__tab`
        );
        P(r.length - 1);
      }
    }, _ = () => {
      if (c.value) {
        const o = c.value, r = o.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), s = o.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), a = Array.from(r).indexOf(s);
        P(a - 1);
      }
    }, f = () => {
      if (c.value) {
        const o = c.value, r = o.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), s = o.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), a = Array.from(r).indexOf(s);
        P(a + 1);
      }
    };
    return Z(() => {
      R.subscribeRequestMessage($, S);
    }), ee(() => {
      R.unsubscribeRequestMessage($, S);
    }), te(
      // eslint-disable-next-line no-return-assign
      () => y.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (o, r) => (n(), p("div", x({
      id: e.id,
      ref_key: "tabContainer",
      ref: c,
      class: w.value
    }, N.value, {
      onKeydown: [
        T(_, ["left"]),
        T(_, ["up"]),
        T(f, ["right"]),
        T(f, ["down"]),
        r[0] || (r[0] = T((s) => P(0), ["home"])),
        T(I, ["end"])
      ]
    }), [
      C.value ? q("", !0) : (n(), p("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: d(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (n(!0), p(B, null, F(e.cqItemsOrder, (s, a) => (n(), p("li", {
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
          role: "tab",
          onClick: (i) => P(a)
        }, A(e.cqItems[s]["cq:panelTitle"]), 11, Se))), 128))
      ], 10, Pe)),
      C.value ? q("", !0) : (n(!0), p(B, { key: 1 }, F(v.value, (s, a) => (n(), p("div", {
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
        role: "tabpanel",
        tabindex: "0"
      }, [
        (n(), h(L(s), k(se({ isInEditor: !1 })), null, 16))
      ], 10, xe))), 128)),
      g(l) ? (n(), h(g(W), k(x({ key: 2 }, G.value)), null, 16)) : q("", !0)
    ], 16, we));
  }
});
export {
  Me as AccordionEditConfig,
  Ne as CarouselEditConfig,
  De as ContainerEditConfig,
  Re as ContentFragmentEditConfig,
  ze as CoreAccordion,
  Ge as CoreCarousel,
  me as CoreContainer,
  Te as CoreContentFragment,
  Ke as CoreExperienceFragment,
  Ve as CoreTabs,
  Ce as DefaultContentFragment,
  Be as ExperienceFragmentEditConfig,
  je as MapToContentFragmentModel,
  R as SpaUtils,
  Fe as TabsEditConfig,
  ue as getRenderer,
  de as mapRenderer
};
