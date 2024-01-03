import { MapTo as ae, ComponentMapping as G, componentProperties as j, componentClassNames as V, AllowedComponentsContainer as ne, ResponsiveGrid as ie, Container as le, Utils as K, ContainerPlaceholder as Q } from "aem-vue-3-editable-components";
import { defineComponent as F, useAttrs as X, inject as L, computed as u, openBlock as a, createBlock as v, unref as g, normalizeProps as k, mergeProps as P, resolveDynamicComponent as A, normalizeClass as o, normalizeStyle as oe, withCtx as W, createElementBlock as p, createElementVNode as O, toDisplayString as S, createCommentVNode as q, Fragment as D, renderList as R, ref as x, watch as H, onMounted as Y, onUnmounted as Z, h as b, watchEffect as ee, guardReactiveProps as te } from "vue";
import { AuthoringUtils as U } from "@adobe/aem-spa-page-model-manager";
const Le = {
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
}, Ne = {
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
}, re = "ContentFragment-", se = (t) => re + t, ce = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((c) => {
    ae(se(c))(e);
  });
}, de = (t) => {
  const e = se(t);
  return G.get(e);
}, Fe = (t) => (e) => ce(t, e), ue = /* @__PURE__ */ F({
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
    const e = t, n = X(), c = typeof e.isInEditor < "u" ? e.isInEditor : L("isInEditor", U.isInEditor()), h = u(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        c,
        e.aemNoDecoration
      )
    ), _ = u(
      () => {
        var $;
        return c && (n == null ? void 0 : n.allowedComponents) && (($ = n == null ? void 0 : n.allowedComponents) == null ? void 0 : $.applicable);
      }
    );
    return ($, f) => _.value ? (a(), v(g(ne), k(P({ key: 0 }, { ...e, ...g(n) })), null, 16)) : (a(), v(A(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: o(h.value),
      role: e.roleAttribute,
      style: oe(e.backgroundStyle)
    }, {
      default: W(() => [
        t.layout === "RESPONSIVE_GRID" ? (a(), v(g(ie), k(P({ key: 0 }, {
          ...e,
          ...g(n),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), v(g(le), k(P({ key: 1 }, { ...e, ...g(n) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), pe = ["id"], me = ["innerHTML"], be = /* @__PURE__ */ F({
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
    const e = t, n = typeof e.isInEditor < "u" ? e.isInEditor : L("isInEditor", U.isInEditor()), c = L("componentMapping", new G()), h = u(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), _ = u(
      () => K.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        c
      )
    );
    return ($, f) => {
      var E;
      return a(), p("div", {
        id: e.id,
        class: o(h.value)
      }, [
        O("h3", {
          class: o(`${e.baseCssClass}__title`)
        }, S(e.title), 3),
        e.description ? (a(), p("p", {
          key: 0,
          class: o(`${e.baseCssClass}__description`)
        }, S(e.description), 3)) : q("", !0),
        (E = e.elementsOrder) != null && E.length ? (a(), p("div", {
          key: 1,
          class: o(`${e.baseCssClass}__elements`)
        }, [
          (a(!0), p(D, null, R(e.elementsOrder, (y, M) => (a(), p("div", {
            key: `${e.id}-element-${y}-${M}`,
            class: o(`${e.baseCssClass}__element`)
          }, [
            O("div", {
              class: o([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              O("h4", null, S(y), 1)
            ], 2),
            O("div", {
              class: o([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[y].value}`
            }, null, 10, me),
            O("div", {
              class: o([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + S(e.elements[y].dataType), 3),
            O("div", {
              class: o([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + S(e.elements[y].multiValue ? "true" : "false"), 3),
            O("div", {
              class: o([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + S(e.elements[y][":type"]), 3)
          ], 2))), 128))
        ], 2)) : q("", !0),
        (a(!0), p(D, null, R(_.value, (y) => (a(), v(A(y), {
          key: y.toString()
        }))), 128))
      ], 10, pe);
    };
  }
}), je = /* @__PURE__ */ F({
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
    const e = t, n = X(), c = u(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), h = u(() => {
      const _ = de(e.model);
      return _ || be;
    });
    return (_, $) => c.value ? q("", !0) : (a(), v(A(h.value), k(P({ key: 0 }, { ...e, ...g(n) })), null, 16));
  }
}), B = {
  createCallbackListener(t, e) {
    return (n, c = t) => {
      n.data && n.data.id === c && n.data.operation === "navigate" && (e.value = n.data.index);
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
}, Ce = ["id", "data-cmp-single-expansion"], _e = ["id", "data-cmp-expanded"], ye = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], he = /* @__PURE__ */ O("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ O("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), fe = [
  he
], ve = ["id", "aria-labelledby"], Te = /* @__PURE__ */ F({
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
    const e = t, n = X(), c = L("isInEditor", U.isInEditor()), h = L("componentMapping", new G()), _ = x(B.initMessageChannel()), $ = x(-1), f = x(e.expandedItems), E = x(null), y = u(() => (n == null ? void 0 : n.singleExpansion) === !0), M = u(() => {
      const s = {};
      return c && (s["data-panelcontainer"] = "accordion", s["data-cq-data-path"] = e.cqPath || "", s["data-placeholder-text"] = "Please drag Accordion item components here"), s;
    }), T = u(
      () => K.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        h
      )
    ), z = u(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        c,
        e.aemNoDecoration
      )
    ), w = (s) => {
      const r = E.value.querySelector(
        `button[data-cmp-button-id="${s}"]`
      );
      r && r.focus();
    }, I = (s, r) => {
      const d = f.value.indexOf(s) > -1;
      if (y.value)
        f.value = d ? [] : [s];
      else if (d) {
        const N = f.value.indexOf(s);
        f.value.splice(N, 1);
      } else
        f.value.push(s);
      r.target.focus();
    }, l = (s, r, d) => {
      const N = E.value.querySelectorAll("button").length - 1;
      switch (r.code) {
        case "ArrowLeft":
        case "ArrowUp":
          r.preventDefault(), d > 0 && w(d - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          r.preventDefault(), d < N && w(d + 1);
          break;
        case "Home":
          r.preventDefault(), w(0);
          break;
        case "End":
          r.preventDefault(), w(N);
          break;
        case "Enter":
        case "Space":
          r.preventDefault(), I(s, r), w(d);
          break;
      }
    }, C = (s) => f.value.indexOf(s) > -1, m = u(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    H(y, async (s, r) => {
      s !== r && (f.value = e.expandedItems);
    }), H(e.expandedItems, async (s, r) => {
      s !== r && (f.value = s);
    }), H($, async (s, r) => {
      s !== -1 && typeof s < "u" && s !== r && e.cqItemsOrder && (f.value = [e.cqItemsOrder[s]]);
    });
    const i = B.createCallbackListener(
      e.cqPath,
      $
    );
    return Y(() => {
      B.subscribeRequestMessage(_.value, i);
    }), Z(() => {
      B.unsubscribeRequestMessage(_.value, i);
    }), (s, r) => (a(), p("div", P({
      id: e.id,
      ref_key: "accordion",
      ref: E,
      class: z.value,
      "data-cmp-single-expansion": y.value === !0 ? !0 : void 0
    }, M.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (a(!0), p(D, { key: 0 }, R(e.cqItemsOrder, (d, N) => (a(), p("div", {
        id: `accordion-${e.cqItems[d].id}`,
        key: `accordion-index-${N}`,
        class: o(`${e.baseCssClass}__item`),
        "data-cmp-expanded": C(d) ? !0 : void 0
      }, [
        (a(), v(A(e.headingElement), {
          class: o(`${e.baseCssClass}__heading`)
        }, {
          default: W(() => [
            O("button", {
              id: `accordion-${e.cqItems[d].id}-button`,
              "aria-controls": `accordion-${e.cqItems[d].id}-panel`,
              class: o([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: C(d)
                }
              ]),
              "data-cmp-button-id": N,
              onClick: (J) => I(d, J),
              onKeydown: (J) => l(d, J, N)
            }, [
              O("span", {
                class: o(`${e.baseCssClass}__title`)
              }, S(e.cqItems[d]["cq:panelTitle"]), 3),
              O("span", {
                class: o(`${e.baseCssClass}__icon`)
              }, fe, 2)
            ], 42, ye)
          ]),
          _: 2
        }, 1032, ["class"])),
        g(c) || C(d) ? (a(), p("div", {
          key: 0,
          id: `accordion-${e.cqItems[d].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[d].id}-button`,
          class: o(`${e.baseCssClass}__panel ${C(d) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (a(), v(A(T.value[t.cqItemsOrder.indexOf(d)]), { key: 0 })) : q("", !0)
        ], 10, ve)) : q("", !0)
      ], 10, _e))), 128)) : q("", !0),
      g(c) ? (a(), v(g(Q), k(P({ key: 1 }, m.value)), null, 16)) : q("", !0)
    ], 16, Ce));
  }
}), Ie = ["id"], ge = ["aria-live"], qe = ["id", "aria-label", "aria-labelledby"], $e = ["aria-label"], Oe = ["id", "aria-controls", "aria-label"], ze = /* @__PURE__ */ F({
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
    const e = t, n = X(), c = typeof e.isInEditor < "u" ? e.isInEditor : L("isInEditor", U.isInEditor()), h = L("componentMapping", new G()), _ = x(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), $ = u(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        c,
        e.aemNoDecoration
      )
    ), f = u(() => {
      const I = {
        "aria-label": e.accessibilityLabel,
        "aria-live": "polite",
        "aria-roledescription": "carousel",
        class: "aem-container",
        "data-cmp-is": "carousel",
        "data-cmp-autoplay": (n == null ? void 0 : n.autoplay) === !0 && !c ? "true" : void 0,
        "data-cmp-delay": e.delay.toString(),
        "data-cmp-autopause-disabled": e.autopauseDisabled.toString(),
        "data-panelcontainer": "carousel",
        role: "group"
      };
      return c && (I["data-cq-data-path"] = e.cqPath), I;
    }), E = u(() => {
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
      ), l = b(
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
      ), C = b(
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
      ), m = b(
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
      ), i = [I, l];
      return (n == null ? void 0 : n.autoplay) === !0 && (i.push(C), i.push(m)), b("div", { class: `${e.baseCssClass}__actions` }, i);
    }), y = u(
      () => K.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        h
      )
    ), M = u(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), T = u(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), z = (I) => {
      var m;
      let l = ((m = e.accessibility) == null ? void 0 : m.indicator) || "";
      const C = "{0}";
      return l = l.replace(C, (I + 1).toString()), l;
    }, w = (I) => {
      var i;
      let l = ((i = e.accessibility) == null ? void 0 : i.slide) || "";
      const C = "{0}";
      l = l.replace(C, (I + 1).toString());
      const m = "{1}";
      return l = l.replace(
        m,
        e.cqItemsOrder.length.toString()
      ), l;
    };
    return ee(
      // eslint-disable-next-line no-return-assign
      () => _.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (I, l) => {
      var C;
      return a(), p("div", P({
        id: e.id,
        class: $.value
      }, f.value), [
        e.controlsPrepended ? (a(), v(A(E.value), { key: 0 })) : q("", !0),
        M.value ? q("", !0) : (a(), p("div", {
          key: 1,
          "aria-live": ((C = g(n)) == null ? void 0 : C.autoplay) === !0 ? "off" : "polite",
          class: o(`${e.baseCssClass}__content`),
          "aria-atomic": "false"
        }, [
          (a(!0), p(D, null, R(y.value, (m, i) => (a(), p("div", {
            id: `${e.cqItems[e.cqItemsOrder[i]].id}-tabpanel`,
            key: `item-${i}`,
            "aria-label": w(i),
            "aria-labelledby": `${e.cqItems[e.cqItemsOrder[i]].id}-tab`,
            class: o([
              `${e.baseCssClass}__item`,
              {
                [`${e.baseCssClass}__item--active`]: i === _.value
              }
            ]),
            "aria-roledescription": "slide",
            "data-cmp-hook-carousel": "item",
            role: "tabpanel"
          }, [
            (a(), v(A(m), k(te({ isInEditor: !1 })), null, 16))
          ], 10, qe))), 128)),
          e.controlsPrepended ? q("", !0) : (a(), v(A(E.value), { key: 0 })),
          O("ol", {
            "aria-label": e.accessibilityTablist,
            class: o(`${e.baseCssClass}__indicators`),
            "data-cmp-hook-carousel": "indicators",
            role: "tablist"
          }, [
            (a(!0), p(D, null, R(e.cqItemsOrder, (m, i) => (a(), p("li", {
              id: `${e.cqItems[e.cqItemsOrder[i]].id}-tab`,
              key: `item-${i}`,
              "aria-controls": `${e.cqItems[e.cqItemsOrder[i]].id}-tabpanel`,
              "aria-label": z(i),
              class: o([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: i === _.value
                }
              ]),
              "data-cmp-hook-carousel": "indicator",
              role: "tab"
            }, S(e.cqItems[m]["cq:panelTitle"]), 11, Oe))), 128))
          ], 10, $e)
        ], 10, ge)),
        g(c) ? (a(), v(g(Q), k(P({ key: 2 }, T.value)), null, 16)) : q("", !0)
      ], 16, Ie);
    };
  }
}), Ge = /* @__PURE__ */ F({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, n) => (a(), v(ue, { "is-in-editor": !1 }));
  }
}), Ee = ["id"], we = ["aria-label"], Pe = ["id", "aria-controls", "aria-selected", "tabIndex", "onClick"], Se = ["id", "aria-hidden", "aria-labelledby"], Ve = /* @__PURE__ */ F({
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
    const e = t, n = typeof e.isInEditor < "u" ? e.isInEditor : L("isInEditor", U.isInEditor()), c = L("componentMapping", new G()), h = x(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), _ = x(null), $ = x(1), f = x(B.initMessageChannel()), E = u(
      () => K.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        c
      )
    ), y = u(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), M = u(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), T = u(() => {
      const l = {
        class: "aem-container",
        "data-panelcontainer": "tabs"
      };
      return n && (l["data-cq-data-path"] = e.cqPath), l;
    }), z = u(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), w = (l) => {
      if (_.value) {
        const C = _.value, m = C.querySelectorAll(
          `${e.baseCssClass}__tab`
        ), i = C.querySelectorAll(
          `${e.baseCssClass}__tabpanel`
        );
        m.length && m.forEach((s, r) => {
          r === l ? (s.classList.add(`${e.baseCssClass}__tab--active`), s.setAttribute("aria-selected", "true"), s.setAttribute("tabindex", "0")) : (s.classList.remove(`${e.baseCssClass}__tab--active`), s.removeAttribute("aria-selected"), s.setAttribute("tabindex", "-1"));
        }), i.length && i.forEach((s, r) => {
          r === l ? (s.classList.add(
            `${e.baseCssClass}__tabpanel--active`
          ), s.removeAttribute("aria-hidden")) : (s.classList.remove(
            `${e.baseCssClass}__tabpanel--active`
          ), s.setAttribute("aria-hidden", "true"));
        });
      }
    }, I = B.createCallbackListener(
      e.cqPath,
      $
    );
    return Y(() => {
      B.subscribeRequestMessage(f.value, I);
    }), Z(() => {
      B.unsubscribeRequestMessage(f.value, I);
    }), H($, async (l, C) => {
      l !== -1 && typeof l < "u" && l !== C && w(l);
    }), ee(
      // eslint-disable-next-line no-return-assign
      () => h.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (l, C) => (a(), p("div", P({
      id: e.id,
      ref_key: "tabContainer",
      ref: _,
      class: y.value
    }, T.value), [
      M.value ? q("", !0) : (a(), p("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: o(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (a(!0), p(D, null, R(e.cqItemsOrder, (m, i) => (a(), p("li", {
          id: `${e.cqItems[m].id}-tab`,
          key: `tab-${i}`,
          "aria-controls": `${e.cqItems[m].id}-tabpanel`,
          "aria-selected": i === h.value ? !0 : void 0,
          class: o([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: i === h.value
            }
          ]),
          tabIndex: i === h.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (s) => w(i)
        }, S(e.cqItems[m]["cq:panelTitle"]), 11, Pe))), 128))
      ], 10, we)),
      M.value ? q("", !0) : (a(!0), p(D, { key: 1 }, R(E.value, (m, i) => (a(), p("div", {
        id: `${e.cqItems[e.cqItemsOrder[i]].id}-tabpanel`,
        key: `tab-content-${i}`,
        "aria-hidden": i === h.value ? void 0 : !0,
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[i]].id}-tab`,
        class: o([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: i === h.value
          }
        ]),
        "data-cmp-hook-tabs": "tabpanel",
        role: "tabpanel",
        tabindex: "0"
      }, [
        (a(), v(A(m), k(te({ isInEditor: !1 })), null, 16))
      ], 10, Se))), 128)),
      g(n) ? (a(), v(g(Q), k(P({ key: 2 }, z.value)), null, 16)) : q("", !0)
    ], 16, Ee));
  }
});
export {
  Le as AccordionEditConfig,
  Me as CarouselEditConfig,
  Ne as ContainerEditConfig,
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
  B as SpaUtils,
  Re as TabsEditConfig,
  de as getRenderer,
  ce as mapRenderer
};
