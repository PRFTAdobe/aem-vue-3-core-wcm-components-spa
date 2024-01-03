import { MapTo as ae, ComponentMapping as G, componentProperties as j, componentClassNames as V, AllowedComponentsContainer as ne, ResponsiveGrid as ie, Container as le, Utils as H, ContainerPlaceholder as J } from "aem-vue-3-editable-components";
import { defineComponent as F, useAttrs as K, inject as A, computed as p, openBlock as s, createBlock as v, unref as g, normalizeProps as x, mergeProps as P, resolveDynamicComponent as k, normalizeClass as r, normalizeStyle as oe, withCtx as Q, createElementBlock as m, createElementVNode as O, toDisplayString as S, createCommentVNode as q, Fragment as D, renderList as R, ref as N, watch as X, onMounted as Y, onUnmounted as Z, h as b, watchEffect as ee, guardReactiveProps as te } from "vue";
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
  t && e && (typeof t == "string" ? [t] : t).forEach((d) => {
    ae(se(d))(e);
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
    const e = t, a = K(), d = typeof e.isInEditor < "u" ? e.isInEditor : A("isInEditor", U.isInEditor()), f = p(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        d,
        e.aemNoDecoration
      )
    ), y = p(
      () => {
        var $;
        return d && (a == null ? void 0 : a.allowedComponents) && (($ = a == null ? void 0 : a.allowedComponents) == null ? void 0 : $.applicable);
      }
    );
    return ($, I) => y.value ? (s(), v(g(ne), x(P({ key: 0 }, { ...e, ...g(a) })), null, 16)) : (s(), v(k(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: r(f.value),
      role: e.roleAttribute,
      style: oe(e.backgroundStyle)
    }, {
      default: Q(() => [
        t.layout === "RESPONSIVE_GRID" ? (s(), v(g(ie), x(P({ key: 0 }, {
          ...e,
          ...g(a),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (s(), v(g(le), x(P({ key: 1 }, { ...e, ...g(a) })), null, 16))
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
    const e = t, a = typeof e.isInEditor < "u" ? e.isInEditor : A("isInEditor", U.isInEditor()), d = A("componentMapping", new G()), f = p(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        a,
        e.aemNoDecoration
      )
    ), y = p(
      () => H.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        d
      )
    );
    return ($, I) => {
      var E;
      return s(), m("div", {
        id: e.id,
        class: r(f.value)
      }, [
        O("h3", {
          class: r(`${e.baseCssClass}__title`)
        }, S(e.title), 3),
        e.description ? (s(), m("p", {
          key: 0,
          class: r(`${e.baseCssClass}__description`)
        }, S(e.description), 3)) : q("", !0),
        (E = e.elementsOrder) != null && E.length ? (s(), m("div", {
          key: 1,
          class: r(`${e.baseCssClass}__elements`)
        }, [
          (s(!0), m(D, null, R(e.elementsOrder, (h, M) => (s(), m("div", {
            key: `${e.id}-element-${h}-${M}`,
            class: r(`${e.baseCssClass}__element`)
          }, [
            O("div", {
              class: r([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              O("h4", null, S(h), 1)
            ], 2),
            O("div", {
              class: r([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[h].value}`
            }, null, 10, me),
            O("div", {
              class: r([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + S(e.elements[h].dataType), 3),
            O("div", {
              class: r([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + S(e.elements[h].multiValue ? "true" : "false"), 3),
            O("div", {
              class: r([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + S(e.elements[h][":type"]), 3)
          ], 2))), 128))
        ], 2)) : q("", !0),
        (s(!0), m(D, null, R(y.value, (h) => (s(), v(k(h), {
          key: h.toString()
        }))), 128))
      ], 10, pe);
    };
  }
}), Te = /* @__PURE__ */ F({
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
    const e = t, a = K(), d = p(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), f = p(() => {
      const y = de(e.model);
      return y || be;
    });
    return (y, $) => d.value ? q("", !0) : (s(), v(k(f.value), x(P({ key: 0 }, { ...e, ...g(a) })), null, 16));
  }
}), B = {
  createCallbackListener(t, e) {
    return (a, d = t) => {
      a.data && a.data.id === d && a.data.operation === "navigate" && (e.value = a.data.index);
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
], ve = ["id", "aria-labelledby"], je = /* @__PURE__ */ F({
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
    const e = t, a = K(), d = A("isInEditor", U.isInEditor()), f = A("componentMapping", new G()), y = N(B.initMessageChannel()), $ = N(-1), I = N(e.expandedItems), E = N(null), h = p(() => (a == null ? void 0 : a.singleExpansion) === !0), M = p(() => {
      const i = {};
      return d && (i["data-panelcontainer"] = "accordion", i["data-cq-data-path"] = e.cqPath || "", i["data-placeholder-text"] = "Please drag Accordion item components here"), i;
    }), z = p(
      () => H.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        f
      )
    ), T = p(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        d,
        e.aemNoDecoration
      )
    ), w = (i) => {
      const _ = E.value.querySelector(
        `button[data-cmp-button-id="${i}"]`
      );
      _ && _.focus();
    }, o = (i, _) => {
      const u = I.value.indexOf(i) > -1;
      if (h.value)
        I.value = u ? [] : [i];
      else if (u) {
        const L = I.value.indexOf(i);
        I.value.splice(L, 1);
      } else
        I.value.push(i);
      _.target.focus();
    }, C = (i, _, u) => {
      const L = E.value.querySelectorAll("button").length - 1;
      switch (_.code) {
        case "ArrowLeft":
        case "ArrowUp":
          _.preventDefault(), u > 0 && w(u - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          _.preventDefault(), u < L && w(u + 1);
          break;
        case "Home":
          _.preventDefault(), w(0);
          break;
        case "End":
          _.preventDefault(), w(L);
          break;
        case "Enter":
        case "Space":
          _.preventDefault(), o(i, _), w(u);
          break;
      }
    }, c = (i) => I.value.indexOf(i) > -1, l = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    X(h, async (i, _) => {
      i !== _ && (I.value = e.expandedItems);
    }), X(e.expandedItems, async (i, _) => {
      i !== _ && (I.value = i);
    }), X($, async (i, _) => {
      i !== -1 && typeof i < "u" && i !== _ && e.cqItemsOrder && (I.value = [e.cqItemsOrder[i]]);
    });
    const n = B.createCallbackListener(
      e.cqPath,
      $
    );
    return Y(() => {
      B.subscribeRequestMessage(y.value, n);
    }), Z(() => {
      B.unsubscribeRequestMessage(y.value, n);
    }), (i, _) => (s(), m("div", P({
      id: e.id,
      ref_key: "accordion",
      ref: E,
      class: T.value,
      "data-cmp-single-expansion": h.value === !0 ? !0 : void 0
    }, M.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (s(!0), m(D, { key: 0 }, R(e.cqItemsOrder, (u, L) => (s(), m("div", {
        id: `accordion-${e.cqItems[u].id}`,
        key: `accordion-index-${L}`,
        class: r(`${e.baseCssClass}__item`),
        "data-cmp-expanded": c(u) ? !0 : void 0
      }, [
        (s(), v(k(e.headingElement), {
          class: r(`${e.baseCssClass}__heading`)
        }, {
          default: Q(() => [
            O("button", {
              id: `accordion-${e.cqItems[u].id}-button`,
              "aria-controls": `accordion-${e.cqItems[u].id}-panel`,
              class: r([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: c(u)
                }
              ]),
              "data-cmp-button-id": L,
              onClick: (W) => o(u, W),
              onKeydown: (W) => C(u, W, L)
            }, [
              O("span", {
                class: r(`${e.baseCssClass}__title`)
              }, S(e.cqItems[u]["cq:panelTitle"]), 3),
              O("span", {
                class: r(`${e.baseCssClass}__icon`)
              }, fe, 2)
            ], 42, ye)
          ]),
          _: 2
        }, 1032, ["class"])),
        g(d) || c(u) ? (s(), m("div", {
          key: 0,
          id: `accordion-${e.cqItems[u].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[u].id}-button`,
          class: r(`${e.baseCssClass}__panel ${c(u) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (s(), v(k(z.value[t.cqItemsOrder.indexOf(u)]), { key: 0 })) : q("", !0)
        ], 10, ve)) : q("", !0)
      ], 10, _e))), 128)) : q("", !0),
      g(d) ? (s(), v(g(J), x(P({ key: 1 }, l.value)), null, 16)) : q("", !0)
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
    const e = t, a = K(), d = typeof e.isInEditor < "u" ? e.isInEditor : A("isInEditor", U.isInEditor()), f = A("componentMapping", new G()), y = N(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), $ = p(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        d,
        e.aemNoDecoration
      )
    ), I = p(() => {
      const o = {
        "aria-label": e.accessibilityLabel,
        "aria-live": "polite",
        "aria-roledescription": "carousel",
        class: "aem-container",
        "data-cmp-is": "carousel",
        "data-cmp-autoplay": (a == null ? void 0 : a.autoplay) === !0 && !d ? "true" : void 0,
        "data-cmp-delay": e.delay.toString(),
        "data-cmp-autopause-disabled": e.autopauseDisabled.toString(),
        "data-panelcontainer": "carousel",
        role: "group"
      };
      return d && (o["data-cq-data-path"] = e.cqPath), o;
    }), E = p(() => {
      const o = b(
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
      ), C = b(
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
      ), c = b(
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
      ), l = b(
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
      ), n = [o, C];
      return (a == null ? void 0 : a.autoplay) === !0 && (n.push(c), n.push(l)), b("div", { class: `${e.baseCssClass}__actions` }, n);
    }), h = p(
      () => H.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        f
      )
    ), M = p(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), z = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), T = (o) => {
      var l;
      let C = ((l = e.accessibility) == null ? void 0 : l.indicator) || "";
      const c = "{0}";
      return C = C.replace(c, (o + 1).toString()), C;
    }, w = (o) => {
      var n;
      let C = ((n = e.accessibility) == null ? void 0 : n.slide) || "";
      const c = "{0}";
      C = C.replace(c, (o + 1).toString());
      const l = "{1}";
      return C = C.replace(
        l,
        e.cqItemsOrder.length.toString()
      ), C;
    };
    return ee(
      // eslint-disable-next-line no-return-assign
      () => y.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (o, C) => {
      var c;
      return s(), m("div", P({
        id: e.id,
        class: $.value
      }, I.value), [
        e.controlsPrepended ? (s(), v(k(E.value), { key: 0 })) : q("", !0),
        M.value ? q("", !0) : (s(), m("div", {
          key: 1,
          "aria-live": ((c = g(a)) == null ? void 0 : c.autoplay) === !0 ? "off" : "polite",
          class: r(`${e.baseCssClass}__content`),
          "aria-atomic": "false"
        }, [
          (s(!0), m(D, null, R(h.value, (l, n) => (s(), m("div", {
            id: `${e.cqItems[e.cqItemsOrder[n]].id}-tabpanel`,
            key: `item-${n}`,
            "aria-label": w(n),
            "aria-labelledby": `${e.cqItems[e.cqItemsOrder[n]].id}-tab`,
            class: r([
              `${e.baseCssClass}__item`,
              {
                [`${e.baseCssClass}__item--active`]: n === y.value
              }
            ]),
            "aria-roledescription": "slide",
            "data-cmp-hook-carousel": "item",
            role: "tabpanel"
          }, [
            (s(), v(k(l), x(te({ isInEditor: !1 })), null, 16))
          ], 10, qe))), 128)),
          e.controlsPrepended ? q("", !0) : (s(), v(k(E.value), { key: 0 })),
          O("ol", {
            "aria-label": e.accessibilityTablist,
            class: r(`${e.baseCssClass}__indicators`),
            "data-cmp-hook-carousel": "indicators",
            role: "tablist"
          }, [
            (s(!0), m(D, null, R(e.cqItemsOrder, (l, n) => (s(), m("li", {
              id: `${e.cqItems[e.cqItemsOrder[n]].id}-tab`,
              key: `item-${n}`,
              "aria-controls": `${e.cqItems[e.cqItemsOrder[n]].id}-tabpanel`,
              "aria-label": T(n),
              class: r([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: n === y.value
                }
              ]),
              "data-cmp-hook-carousel": "indicator",
              role: "tab"
            }, S(e.cqItems[l]["cq:panelTitle"]), 11, Oe))), 128))
          ], 10, $e)
        ], 10, ge)),
        g(d) ? (s(), v(g(J), x(P({ key: 2 }, z.value)), null, 16)) : q("", !0)
      ], 16, Ie);
    };
  }
}), Ge = /* @__PURE__ */ F({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, a) => (s(), v(ue, { "is-in-editor": !1 }));
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
    const e = t, a = typeof e.isInEditor < "u" ? e.isInEditor : A("isInEditor", U.isInEditor()), d = A("componentMapping", new G()), f = N(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), y = N(null), $ = B.initMessageChannel(), I = p(
      () => H.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        d
      )
    ), E = p(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        a,
        e.aemNoDecoration
      )
    ), h = p(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), M = p(() => {
      const o = {
        class: "aem-container",
        "data-panelcontainer": "tabs"
      };
      return a && (o["data-cq-data-path"] = e.cqPath), o;
    }), z = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), T = (o) => {
      if (y.value) {
        console.log("We have a tab container!");
        const C = y.value, c = C.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), l = C.querySelectorAll(
          `.${e.baseCssClass}__tabpanel`
        );
        console.log("Tabs: ", c), console.log("Tab Panels: ", l), c.length && c.forEach((n, i) => {
          i === o ? (n.classList.add(`${e.baseCssClass}__tab--active`), n.setAttribute("aria-selected", "true"), n.setAttribute("tabindex", "0")) : (n.classList.remove(`${e.baseCssClass}__tab--active`), n.removeAttribute("aria-selected"), n.setAttribute("tabindex", "-1"));
        }), l.length && l.forEach((n, i) => {
          i === o ? (n.classList.add(
            `${e.baseCssClass}__tabpanel--active`
          ), n.removeAttribute("aria-hidden")) : (n.classList.remove(
            `${e.baseCssClass}__tabpanel--active`
          ), n.setAttribute("aria-hidden", "true"));
        });
      }
    }, w = (o, C = e.cqPath) => {
      o.data && o.data.id === C && o.data.operation === "navigate" && T(o.data.index);
    };
    return Y(() => {
      B.subscribeRequestMessage($, w);
    }), Z(() => {
      B.unsubscribeRequestMessage($, w);
    }), ee(
      // eslint-disable-next-line no-return-assign
      () => f.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (o, C) => (s(), m("div", P({
      id: e.id,
      ref_key: "tabContainer",
      ref: y,
      class: E.value
    }, M.value), [
      h.value ? q("", !0) : (s(), m("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: r(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (s(!0), m(D, null, R(e.cqItemsOrder, (c, l) => (s(), m("li", {
          id: `${e.cqItems[c].id}-tab`,
          key: `tab-${l}`,
          "aria-controls": `${e.cqItems[c].id}-tabpanel`,
          "aria-selected": l === f.value ? !0 : void 0,
          class: r([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: l === f.value
            }
          ]),
          tabIndex: l === f.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (n) => T(l)
        }, S(e.cqItems[c]["cq:panelTitle"]), 11, Pe))), 128))
      ], 10, we)),
      h.value ? q("", !0) : (s(!0), m(D, { key: 1 }, R(I.value, (c, l) => (s(), m("div", {
        id: `${e.cqItems[e.cqItemsOrder[l]].id}-tabpanel`,
        key: `tab-content-${l}`,
        "aria-hidden": l === f.value ? void 0 : !0,
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[l]].id}-tab`,
        class: r([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: l === f.value
          }
        ]),
        "data-cmp-hook-tabs": "tabpanel",
        role: "tabpanel",
        tabindex: "0"
      }, [
        (s(), v(k(c), x(te({ isInEditor: !1 })), null, 16))
      ], 10, Se))), 128)),
      g(a) ? (s(), v(g(J), x(P({ key: 2 }, z.value)), null, 16)) : q("", !0)
    ], 16, Ee));
  }
});
export {
  Le as AccordionEditConfig,
  Me as CarouselEditConfig,
  Ne as ContainerEditConfig,
  Be as ContentFragmentEditConfig,
  je as CoreAccordion,
  ze as CoreCarousel,
  ue as CoreContainer,
  Te as CoreContentFragment,
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
