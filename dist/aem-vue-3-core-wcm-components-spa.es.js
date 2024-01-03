import { MapTo as ne, ComponentMapping as G, componentProperties as T, componentClassNames as V, AllowedComponentsContainer as ie, ResponsiveGrid as le, Container as oe, Utils as U, ContainerPlaceholder as Q } from "aem-vue-3-editable-components";
import { defineComponent as j, useAttrs as H, inject as k, computed as p, openBlock as n, createBlock as h, unref as g, normalizeProps as x, mergeProps as P, resolveDynamicComponent as A, normalizeClass as r, normalizeStyle as re, withCtx as Y, createElementBlock as m, createElementVNode as O, toDisplayString as S, createCommentVNode as q, Fragment as R, renderList as F, ref as D, watch as J, onMounted as Z, onUnmounted as ee, h as C, watchEffect as te, guardReactiveProps as se, withKeys as W } from "vue";
import { AuthoringUtils as K } from "@adobe/aem-spa-page-model-manager";
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
}, Be = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return t.elementsOrder.length === 0 && t.cqItemsOrder.length === 0;
  }
}, Re = {
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
  t && e && (typeof t == "string" ? [t] : t).forEach((d) => {
    ne(ae(d))(e);
  });
}, ue = (t) => {
  const e = ae(t);
  return G.get(e);
}, je = (t) => (e) => de(t, e), pe = /* @__PURE__ */ j({
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
    ...T("cmp-container")
  },
  setup(t) {
    const e = t, i = H(), d = typeof e.isInEditor < "u" ? e.isInEditor : k("isInEditor", K.isInEditor()), f = p(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        d,
        e.aemNoDecoration
      )
    ), _ = p(
      () => {
        var $;
        return d && (i == null ? void 0 : i.allowedComponents) && (($ = i == null ? void 0 : i.allowedComponents) == null ? void 0 : $.applicable);
      }
    );
    return ($, v) => _.value ? (n(), h(g(ie), x(P({ key: 0 }, { ...e, ...g(i) })), null, 16)) : (n(), h(A(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: r(f.value),
      role: e.roleAttribute,
      style: re(e.backgroundStyle)
    }, {
      default: Y(() => [
        t.layout === "RESPONSIVE_GRID" ? (n(), h(g(le), x(P({ key: 0 }, {
          ...e,
          ...g(i),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (n(), h(g(oe), x(P({ key: 1 }, { ...e, ...g(i) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), me = ["id"], be = ["innerHTML"], Ce = /* @__PURE__ */ j({
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
    ...T("cmp-contentfragment")
  },
  setup(t) {
    const e = t, i = typeof e.isInEditor < "u" ? e.isInEditor : k("isInEditor", K.isInEditor()), d = k("componentMapping", new G()), f = p(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        i,
        e.aemNoDecoration
      )
    ), _ = p(
      () => U.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        d
      )
    );
    return ($, v) => {
      var E;
      return n(), m("div", {
        id: e.id,
        class: r(f.value)
      }, [
        O("h3", {
          class: r(`${e.baseCssClass}__title`)
        }, S(e.title), 3),
        e.description ? (n(), m("p", {
          key: 0,
          class: r(`${e.baseCssClass}__description`)
        }, S(e.description), 3)) : q("", !0),
        (E = e.elementsOrder) != null && E.length ? (n(), m("div", {
          key: 1,
          class: r(`${e.baseCssClass}__elements`)
        }, [
          (n(!0), m(R, null, F(e.elementsOrder, (y, M) => (n(), m("div", {
            key: `${e.id}-element-${y}-${M}`,
            class: r(`${e.baseCssClass}__element`)
          }, [
            O("div", {
              class: r([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              O("h4", null, S(y), 1)
            ], 2),
            O("div", {
              class: r([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[y].value}`
            }, null, 10, be),
            O("div", {
              class: r([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + S(e.elements[y].dataType), 3),
            O("div", {
              class: r([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + S(e.elements[y].multiValue ? "true" : "false"), 3),
            O("div", {
              class: r([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + S(e.elements[y][":type"]), 3)
          ], 2))), 128))
        ], 2)) : q("", !0),
        (n(!0), m(R, null, F(_.value, (y) => (n(), h(A(y), {
          key: y.toString()
        }))), 128))
      ], 10, me);
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
    ...T("cmp-contentfragment")
  },
  setup(t) {
    const e = t, i = H(), d = p(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), f = p(() => {
      const _ = ue(e.model);
      return _ || Ce;
    });
    return (_, $) => d.value ? q("", !0) : (n(), h(A(f.value), x(P({ key: 0 }, { ...e, ...g(i) })), null, 16));
  }
}), B = {
  createCallbackListener(t, e) {
    return (i, d = t) => {
      i.data && i.data.id === d && i.data.operation === "navigate" && (e.value = i.data.index);
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
], Ie = ["id", "aria-labelledby"], ze = /* @__PURE__ */ j({
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
    ...T("cmp-accordion")
  },
  setup(t) {
    const e = t, i = H(), d = k("isInEditor", K.isInEditor()), f = k("componentMapping", new G()), _ = D(B.initMessageChannel()), $ = D(-1), v = D(e.expandedItems), E = D(null), y = p(() => (i == null ? void 0 : i.singleExpansion) === !0), M = p(() => {
      const a = {};
      return d && (a["data-panelcontainer"] = "accordion", a["data-cq-data-path"] = e.cqPath || "", a["data-placeholder-text"] = "Please drag Accordion item components here"), a;
    }), z = p(
      () => U.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        f
      )
    ), N = p(
      () => V(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        d,
        e.aemNoDecoration
      )
    ), w = (a) => {
      const c = E.value.querySelector(
        `button[data-cmp-button-id="${a}"]`
      );
      c && c.focus();
    }, I = (a, c) => {
      const u = v.value.indexOf(a) > -1;
      if (y.value)
        v.value = u ? [] : [a];
      else if (u) {
        const L = v.value.indexOf(a);
        v.value.splice(L, 1);
      } else
        v.value.push(a);
      c.target.focus();
    }, l = (a, c, u) => {
      const L = E.value.querySelectorAll("button").length - 1;
      switch (c.code) {
        case "ArrowLeft":
        case "ArrowUp":
          c.preventDefault(), u > 0 && w(u - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          c.preventDefault(), u < L && w(u + 1);
          break;
        case "Home":
          c.preventDefault(), w(0);
          break;
        case "End":
          c.preventDefault(), w(L);
          break;
        case "Enter":
        case "Space":
          c.preventDefault(), I(a, c), w(u);
          break;
      }
    }, b = (a) => v.value.indexOf(a) > -1, o = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    J(y, async (a, c) => {
      a !== c && (v.value = e.expandedItems);
    }), J(e.expandedItems, async (a, c) => {
      a !== c && (v.value = a);
    }), J($, async (a, c) => {
      a !== -1 && typeof a < "u" && a !== c && e.cqItemsOrder && (v.value = [e.cqItemsOrder[a]]);
    });
    const s = B.createCallbackListener(
      e.cqPath,
      $
    );
    return Z(() => {
      B.subscribeRequestMessage(_.value, s);
    }), ee(() => {
      B.unsubscribeRequestMessage(_.value, s);
    }), (a, c) => (n(), m("div", P({
      id: e.id,
      ref_key: "accordion",
      ref: E,
      class: N.value,
      "data-cmp-single-expansion": y.value === !0 ? !0 : void 0
    }, M.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (n(!0), m(R, { key: 0 }, F(e.cqItemsOrder, (u, L) => (n(), m("div", {
        id: `accordion-${e.cqItems[u].id}`,
        key: `accordion-index-${L}`,
        class: r(`${e.baseCssClass}__item`),
        "data-cmp-expanded": b(u) ? !0 : void 0
      }, [
        (n(), h(A(e.headingElement), {
          class: r(`${e.baseCssClass}__heading`)
        }, {
          default: Y(() => [
            O("button", {
              id: `accordion-${e.cqItems[u].id}-button`,
              "aria-controls": `accordion-${e.cqItems[u].id}-panel`,
              class: r([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: b(u)
                }
              ]),
              "data-cmp-button-id": L,
              onClick: (X) => I(u, X),
              onKeydown: (X) => l(u, X, L)
            }, [
              O("span", {
                class: r(`${e.baseCssClass}__title`)
              }, S(e.cqItems[u]["cq:panelTitle"]), 3),
              O("span", {
                class: r(`${e.baseCssClass}__icon`)
              }, ve, 2)
            ], 42, fe)
          ]),
          _: 2
        }, 1032, ["class"])),
        g(d) || b(u) ? (n(), m("div", {
          key: 0,
          id: `accordion-${e.cqItems[u].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[u].id}-button`,
          class: r(`${e.baseCssClass}__panel ${b(u) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (n(), h(A(z.value[t.cqItemsOrder.indexOf(u)]), { key: 0 })) : q("", !0)
        ], 10, Ie)) : q("", !0)
      ], 10, ye))), 128)) : q("", !0),
      g(d) ? (n(), h(g(Q), x(P({ key: 1 }, o.value)), null, 16)) : q("", !0)
    ], 16, _e));
  }
}), ge = ["id"], qe = ["aria-live"], $e = ["id", "aria-label", "aria-labelledby"], Oe = ["aria-label"], Ee = ["id", "aria-controls", "aria-label"], Ge = /* @__PURE__ */ j({
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
    ...T("cmp-carousel")
  },
  setup(t) {
    const e = t, i = H(), d = typeof e.isInEditor < "u" ? e.isInEditor : k("isInEditor", K.isInEditor()), f = k("componentMapping", new G()), _ = D(
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
    ), v = p(() => {
      const I = {
        "aria-label": e.accessibilityLabel,
        "aria-live": "polite",
        "aria-roledescription": "carousel",
        class: "aem-container",
        "data-cmp-is": "carousel",
        "data-cmp-autoplay": (i == null ? void 0 : i.autoplay) === !0 && !d ? "true" : void 0,
        "data-cmp-delay": e.delay.toString(),
        "data-cmp-autopause-disabled": e.autopauseDisabled.toString(),
        "data-panelcontainer": "carousel",
        role: "group"
      };
      return d && (I["data-cq-data-path"] = e.cqPath), I;
    }), E = p(() => {
      const I = C(
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
          C("span", { class: `${e.baseCssClass}__action-icon` }, [
            C(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              C("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
            )
          ]),
          C("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPrevious
          ])
        ]
      ), l = C(
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
          C("span", { class: `${e.baseCssClass}__action-icon` }, [
            C(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              C("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
            )
          ]),
          C("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityNext
          ])
        ]
      ), b = C(
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
          C("span", { class: `${e.baseCssClass}__action-icon` }, [
            C(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              [C("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })]
            )
          ]),
          C("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPause
          ])
        ]
      ), o = C(
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
          C("span", { class: `${e.baseCssClass}__action-icon` }, [
            C(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              [C("path", { d: "M8 5v14l11-7z" })]
            )
          ]),
          C("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPlay
          ])
        ]
      ), s = [I, l];
      return (i == null ? void 0 : i.autoplay) === !0 && (s.push(b), s.push(o)), C("div", { class: `${e.baseCssClass}__actions` }, s);
    }), y = p(
      () => U.getChildComponents(
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
    })), N = (I) => {
      var o;
      let l = ((o = e.accessibility) == null ? void 0 : o.indicator) || "";
      const b = "{0}";
      return l = l.replace(b, (I + 1).toString()), l;
    }, w = (I) => {
      var s;
      let l = ((s = e.accessibility) == null ? void 0 : s.slide) || "";
      const b = "{0}";
      l = l.replace(b, (I + 1).toString());
      const o = "{1}";
      return l = l.replace(
        o,
        e.cqItemsOrder.length.toString()
      ), l;
    };
    return te(
      // eslint-disable-next-line no-return-assign
      () => _.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (I, l) => {
      var b;
      return n(), m("div", P({
        id: e.id,
        class: $.value
      }, v.value), [
        e.controlsPrepended ? (n(), h(A(E.value), { key: 0 })) : q("", !0),
        M.value ? q("", !0) : (n(), m("div", {
          key: 1,
          "aria-live": ((b = g(i)) == null ? void 0 : b.autoplay) === !0 ? "off" : "polite",
          class: r(`${e.baseCssClass}__content`),
          "aria-atomic": "false"
        }, [
          (n(!0), m(R, null, F(y.value, (o, s) => (n(), m("div", {
            id: `${e.cqItems[e.cqItemsOrder[s]].id}-tabpanel`,
            key: `item-${s}`,
            "aria-label": w(s),
            "aria-labelledby": `${e.cqItems[e.cqItemsOrder[s]].id}-tab`,
            class: r([
              `${e.baseCssClass}__item`,
              {
                [`${e.baseCssClass}__item--active`]: s === _.value
              }
            ]),
            "aria-roledescription": "slide",
            "data-cmp-hook-carousel": "item",
            role: "tabpanel"
          }, [
            (n(), h(A(o), x(se({ isInEditor: !1 })), null, 16))
          ], 10, $e))), 128)),
          e.controlsPrepended ? q("", !0) : (n(), h(A(E.value), { key: 0 })),
          O("ol", {
            "aria-label": e.accessibilityTablist,
            class: r(`${e.baseCssClass}__indicators`),
            "data-cmp-hook-carousel": "indicators",
            role: "tablist"
          }, [
            (n(!0), m(R, null, F(e.cqItemsOrder, (o, s) => (n(), m("li", {
              id: `${e.cqItems[e.cqItemsOrder[s]].id}-tab`,
              key: `item-${s}`,
              "aria-controls": `${e.cqItems[e.cqItemsOrder[s]].id}-tabpanel`,
              "aria-label": N(s),
              class: r([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: s === _.value
                }
              ]),
              "data-cmp-hook-carousel": "indicator",
              role: "tab"
            }, S(e.cqItems[o]["cq:panelTitle"]), 11, Ee))), 128))
          ], 10, Oe)
        ], 10, qe)),
        g(d) ? (n(), h(g(Q), x(P({ key: 2 }, z.value)), null, 16)) : q("", !0)
      ], 16, ge);
    };
  }
}), Ve = /* @__PURE__ */ j({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, i) => (n(), h(pe, { "is-in-editor": !1 }));
  }
}), we = ["id", "onKeydown"], Pe = ["aria-label"], Se = ["id", "aria-controls", "aria-selected", "tabIndex", "onClick"], xe = ["id", "aria-hidden", "aria-labelledby"], Ke = /* @__PURE__ */ j({
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
    ...T("cmp-tabs")
  },
  setup(t) {
    const e = t, i = typeof e.isInEditor < "u" ? e.isInEditor : k("isInEditor", K.isInEditor()), d = k("componentMapping", new G()), f = D(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), _ = D(null), $ = B.initMessageChannel(), v = p(
      () => U.getChildComponents(
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
        i,
        e.aemNoDecoration
      )
    ), y = p(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), M = p(() => {
      const l = {
        class: "aem-container",
        "data-panelcontainer": "tabs"
      };
      return i && (l["data-cq-data-path"] = e.cqPath), l;
    }), z = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), N = (l) => {
      if (_.value) {
        const b = _.value, o = b.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), s = b.querySelectorAll(
          `.${e.baseCssClass}__tabpanel`
        );
        l < 0 && (l = o.length - 1), o.length && o.forEach((a, c) => {
          c === l ? (a.classList.add(`${e.baseCssClass}__tab--active`), a.setAttribute("aria-selected", "true"), a.setAttribute("tabindex", "0")) : (a.classList.remove(`${e.baseCssClass}__tab--active`), a.removeAttribute("aria-selected"), a.setAttribute("tabindex", "-1"));
        }), s.length && s.forEach((a, c) => {
          c === l ? (a.classList.add(
            `${e.baseCssClass}__tabpanel--active`
          ), a.removeAttribute("aria-hidden")) : (a.classList.remove(
            `${e.baseCssClass}__tabpanel--active`
          ), a.setAttribute("aria-hidden", "true"));
        });
      }
    }, w = (l, b = e.cqPath) => {
      l.data && l.data.id === b && l.data.operation === "navigate" && N(l.data.index);
    }, I = () => {
      if (_.value) {
        const l = _.value, b = l.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), o = l.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), s = Array.from(b).indexOf(o);
        console.log(s), N(s - 1);
      }
    };
    return Z(() => {
      B.subscribeRequestMessage($, w);
    }), ee(() => {
      B.unsubscribeRequestMessage($, w);
    }), te(
      // eslint-disable-next-line no-return-assign
      () => f.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (l, b) => (n(), m("div", P({
      id: e.id,
      ref_key: "tabContainer",
      ref: _,
      class: E.value
    }, M.value, {
      onKeydown: [
        W(I, ["left"]),
        W(I, ["up"])
      ]
    }), [
      y.value ? q("", !0) : (n(), m("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: r(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (n(!0), m(R, null, F(e.cqItemsOrder, (o, s) => (n(), m("li", {
          id: `${e.cqItems[o].id}-tab`,
          key: `tab-${s}`,
          "aria-controls": `${e.cqItems[o].id}-tabpanel`,
          "aria-selected": s === f.value ? !0 : void 0,
          class: r([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: s === f.value
            }
          ]),
          tabIndex: s === f.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (a) => N(s)
        }, S(e.cqItems[o]["cq:panelTitle"]), 11, Se))), 128))
      ], 10, Pe)),
      y.value ? q("", !0) : (n(!0), m(R, { key: 1 }, F(v.value, (o, s) => (n(), m("div", {
        id: `${e.cqItems[e.cqItemsOrder[s]].id}-tabpanel`,
        key: `tab-content-${s}`,
        "aria-hidden": s === f.value ? void 0 : !0,
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[s]].id}-tab`,
        class: r([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: s === f.value
          }
        ]),
        "data-cmp-hook-tabs": "tabpanel",
        role: "tabpanel",
        tabindex: "0"
      }, [
        (n(), h(A(o), x(se({ isInEditor: !1 })), null, 16))
      ], 10, xe))), 128)),
      g(i) ? (n(), h(g(Q), x(P({ key: 2 }, z.value)), null, 16)) : q("", !0)
    ], 16, we));
  }
});
export {
  Me as AccordionEditConfig,
  Ne as CarouselEditConfig,
  De as ContainerEditConfig,
  Be as ContentFragmentEditConfig,
  ze as CoreAccordion,
  Ge as CoreCarousel,
  pe as CoreContainer,
  Te as CoreContentFragment,
  Ve as CoreExperienceFragment,
  Ke as CoreTabs,
  Ce as DefaultContentFragment,
  Re as ExperienceFragmentEditConfig,
  je as MapToContentFragmentModel,
  B as SpaUtils,
  Fe as TabsEditConfig,
  ue as getRenderer,
  de as mapRenderer
};
