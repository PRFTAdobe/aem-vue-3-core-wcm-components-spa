import { MapTo as he, ComponentMapping as Q, componentProperties as X, componentClassNames as W, AllowedComponentsContainer as ge, ResponsiveGrid as Ie, Container as qe, Utils as ee, ContainerPlaceholder as ae } from "aem-vue-3-editable-components";
import { defineComponent as U, useAttrs as te, inject as K, computed as _, openBlock as i, createBlock as O, unref as E, normalizeProps as B, mergeProps as M, resolveDynamicComponent as F, normalizeClass as m, normalizeStyle as $e, withCtx as ce, createElementBlock as y, createElementVNode as w, toDisplayString as R, createCommentVNode as P, Fragment as G, renderList as V, ref as x, watch as se, onMounted as ne, onUnmounted as le, h as f, watchEffect as de, withKeys as A, guardReactiveProps as ue } from "vue";
import { AuthoringUtils as Y } from "@adobe/aem-spa-page-model-manager";
const Qe = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, We = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ye = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ze = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return t.elementsOrder.length === 0 && t.cqItemsOrder.length === 0;
  }
}, et = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, tt = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ee = "ContentFragment-", me = (t) => Ee + t, Oe = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((b) => {
    he(me(b))(e);
  });
}, we = (t) => {
  const e = me(t);
  return Q.get(e);
}, st = (t) => (e) => Oe(t, e), Pe = /* @__PURE__ */ U({
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
    ...X("cmp-container")
  },
  setup(t) {
    const e = t, o = te(), b = typeof e.isInEditor < "u" ? e.isInEditor : K("isInEditor", Y.isInEditor()), I = _(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        b,
        e.aemNoDecoration
      )
    ), d = _(
      () => {
        var v;
        return b && (o == null ? void 0 : o.allowedComponents) && ((v = o == null ? void 0 : o.allowedComponents) == null ? void 0 : v.applicable);
      }
    );
    return (v, h) => d.value ? (i(), O(E(ge), B(M({ key: 0 }, { ...e, ...E(o) })), null, 16)) : (i(), O(F(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: m(I.value),
      role: e.roleAttribute,
      style: $e(e.backgroundStyle)
    }, {
      default: ce(() => [
        t.layout === "RESPONSIVE_GRID" ? (i(), O(E(Ie), B(M({ key: 0 }, {
          ...e,
          ...E(o),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (i(), O(E(qe), B(M({ key: 1 }, { ...e, ...E(o) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), Ae = ["id"], Se = ["innerHTML"], ke = /* @__PURE__ */ U({
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
    ...X("cmp-contentfragment")
  },
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : K("isInEditor", Y.isInEditor()), b = K("componentMapping", new Q()), I = _(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), d = _(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        b
      )
    );
    return (v, h) => {
      var S;
      return i(), y("div", {
        id: e.id,
        class: m(I.value)
      }, [
        w("h3", {
          class: m(`${e.baseCssClass}__title`)
        }, R(e.title), 3),
        e.description ? (i(), y("p", {
          key: 0,
          class: m(`${e.baseCssClass}__description`)
        }, R(e.description), 3)) : P("", !0),
        (S = e.elementsOrder) != null && S.length ? (i(), y("div", {
          key: 1,
          class: m(`${e.baseCssClass}__elements`)
        }, [
          (i(!0), y(G, null, V(e.elementsOrder, (p, T) => (i(), y("div", {
            key: `${e.id}-element-${p}-${T}`,
            class: m(`${e.baseCssClass}__element`)
          }, [
            w("div", {
              class: m([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              w("h4", null, R(p), 1)
            ], 2),
            w("div", {
              class: m([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[p].value}`
            }, null, 10, Se),
            w("div", {
              class: m([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + R(e.elements[p].dataType), 3),
            w("div", {
              class: m([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + R(e.elements[p].multiValue ? "true" : "false"), 3),
            w("div", {
              class: m([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + R(e.elements[p][":type"]), 3)
          ], 2))), 128))
        ], 2)) : P("", !0),
        (i(!0), y(G, null, V(d.value, (p) => (i(), O(F(p), {
          key: p.toString()
        }))), 128))
      ], 10, Ae);
    };
  }
}), at = /* @__PURE__ */ U({
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
    ...X("cmp-contentfragment")
  },
  setup(t) {
    const e = t, o = te(), b = _(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), I = _(() => {
      const d = we(e.model);
      return d || ke;
    });
    return (d, v) => b.value ? P("", !0) : (i(), O(F(I.value), B(M({ key: 0 }, { ...e, ...E(o) })), null, 16));
  }
}), L = {
  createCallbackListener(t, e) {
    return (o, b = t) => {
      o.data && o.data.id === b && o.data.operation === "navigate" && (e.value = o.data.index);
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
}, xe = ["id", "data-cmp-single-expansion"], Le = ["id", "data-cmp-expanded"], Me = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], Ne = /* @__PURE__ */ w("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ w("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), De = [
  Ne
], Re = ["id", "aria-labelledby"], nt = /* @__PURE__ */ U({
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
    ...X("cmp-accordion")
  },
  setup(t) {
    const e = t, o = te(), b = K("isInEditor", Y.isInEditor()), I = K("componentMapping", new Q()), d = x(L.initMessageChannel()), v = x(-1), h = x(e.expandedItems), S = x(null), p = _(() => (o == null ? void 0 : o.singleExpansion) === !0), T = _(() => {
      const s = {};
      return b && (s["data-panelcontainer"] = "accordion", s["data-cq-data-path"] = e.cqPath || "", s["data-placeholder-text"] = "Please drag Accordion item components here"), s;
    }), J = _(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        I
      )
    ), z = _(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        b,
        e.aemNoDecoration
      )
    ), g = (s) => {
      const l = S.value.querySelector(
        `button[data-cmp-button-id="${s}"]`
      );
      l && l.focus();
    }, k = (s, l) => {
      const a = h.value.indexOf(s) > -1;
      if (p.value)
        h.value = a ? [] : [s];
      else if (a) {
        const C = h.value.indexOf(s);
        h.value.splice(C, 1);
      } else
        h.value.push(s);
      l.target.focus();
    }, j = (s, l, a) => {
      const C = S.value.querySelectorAll("button").length - 1;
      switch (l.code) {
        case "ArrowLeft":
        case "ArrowUp":
          l.preventDefault(), a > 0 && g(a - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          l.preventDefault(), a < C && g(a + 1);
          break;
        case "Home":
          l.preventDefault(), g(0);
          break;
        case "End":
          l.preventDefault(), g(C);
          break;
        case "Enter":
        case "Space":
          l.preventDefault(), k(s, l), g(a);
          break;
      }
    }, N = (s) => h.value.indexOf(s) > -1, H = _(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    se(p, async (s, l) => {
      s !== l && (h.value = e.expandedItems);
    }), se(e.expandedItems, async (s, l) => {
      s !== l && (h.value = s);
    }), se(v, async (s, l) => {
      s !== -1 && typeof s < "u" && s !== l && e.cqItemsOrder && (h.value = [e.cqItemsOrder[s]]);
    });
    const c = L.createCallbackListener(
      e.cqPath,
      v
    );
    return ne(() => {
      L.subscribeRequestMessage(d.value, c);
    }), le(() => {
      L.unsubscribeRequestMessage(d.value, c);
    }), (s, l) => (i(), y("div", M({
      id: e.id,
      ref_key: "accordion",
      ref: S,
      class: z.value,
      "data-cmp-single-expansion": p.value === !0 ? !0 : void 0
    }, T.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (i(!0), y(G, { key: 0 }, V(e.cqItemsOrder, (a, C) => (i(), y("div", {
        id: `accordion-${e.cqItems[a].id}`,
        key: `accordion-index-${C}`,
        class: m(`${e.baseCssClass}__item`),
        "data-cmp-expanded": N(a) ? !0 : void 0
      }, [
        (i(), O(F(e.headingElement), {
          class: m(`${e.baseCssClass}__heading`)
        }, {
          default: ce(() => [
            w("button", {
              id: `accordion-${e.cqItems[a].id}-button`,
              "aria-controls": `accordion-${e.cqItems[a].id}-panel`,
              class: m([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: N(a)
                }
              ]),
              "data-cmp-button-id": C,
              onClick: (D) => k(a, D),
              onKeydown: (D) => j(a, D, C)
            }, [
              w("span", {
                class: m(`${e.baseCssClass}__title`)
              }, R(e.cqItems[a]["cq:panelTitle"]), 3),
              w("span", {
                class: m(`${e.baseCssClass}__icon`)
              }, De, 2)
            ], 42, Me)
          ]),
          _: 2
        }, 1032, ["class"])),
        E(b) || N(a) ? (i(), y("div", {
          key: 0,
          id: `accordion-${e.cqItems[a].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[a].id}-button`,
          class: m(`${e.baseCssClass}__panel ${N(a) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (i(), O(F(J.value[t.cqItemsOrder.indexOf(a)]), { key: 0 })) : P("", !0)
        ], 10, Re)) : P("", !0)
      ], 10, Le))), 128)) : P("", !0),
      E(b) ? (i(), O(E(ae), B(M({ key: 1 }, H.value)), null, 16)) : P("", !0)
    ], 16, xe));
  }
}), Be = ["id"], Fe = ["aria-live", "onKeydown"], Ke = ["id", "aria-hidden", "aria-label", "aria-labelledby"], je = ["aria-label"], Te = ["id", "aria-controls", "aria-label", "aria-selected", "onClick"], lt = /* @__PURE__ */ U({
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
    ...X("cmp-carousel")
  },
  setup(t) {
    const e = t, o = te(), b = typeof e.isInEditor < "u" ? e.isInEditor : K("isInEditor", Y.isInEditor()), I = K("componentMapping", new Q()), d = x(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), v = x(null), h = x(-1), S = L.initMessageChannel(), p = x((o == null ? void 0 : o.autoplay) === !0 && !b), T = _(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        I
      )
    ), J = _(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        b,
        e.aemNoDecoration
      )
    ), z = _(() => {
      const n = {
        "aria-label": e.accessibilityLabel,
        "aria-live": "polite",
        "aria-roledescription": "carousel",
        class: "aem-container",
        "data-panelcontainer": "carousel",
        role: "group"
      };
      return b && (n["data-cq-data-path"] = e.cqPath), n;
    }), g = (n) => {
      if (v.value) {
        const u = v.value, q = u.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), $ = u.querySelectorAll(
          `.${e.baseCssClass}__indicator`
        );
        n < 0 && (n = q.length - 1), n >= q.length && (n = 0), q.length && q.forEach((r, Z) => {
          Z === n ? (r.classList.add(`${e.baseCssClass}__item--active`), r.removeAttribute("aria-hidden")) : (r.classList.remove(
            `${e.baseCssClass}__item--active`
          ), r.setAttribute("aria-hidden", "true"));
        }), $.length && $.forEach((r, Z) => {
          Z === n ? (r.classList.add(
            `${e.baseCssClass}__indicator--active`
          ), r.setAttribute("aria-selected", "true"), r.setAttribute("tabindex", "0")) : (r.classList.remove(
            `${e.baseCssClass}__indicator--active`
          ), r.removeAttribute("aria-selected"), r.setAttribute("tabindex", "-1"));
        });
      }
    }, k = () => {
      let n = 0;
      if (v.value) {
        const u = v.value, q = u.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), $ = u.querySelector(
          `.${e.baseCssClass}__item--active`
        );
        n = Array.from(q).indexOf($);
      }
      return n;
    }, j = (n) => {
      g(n), v.value && v.value.querySelectorAll(
        `.${e.baseCssClass}__item`
      )[n].focus();
    }, N = () => {
      const n = k();
      g(n + 1);
    }, H = () => {
      const n = k();
      g(n - 1);
    }, c = () => {
      if (!p.value || e.cqItemsOrder.length <= 1)
        return;
      const n = k();
      g(n + 1);
    }, s = () => {
      h.value = setInterval(() => {
        c();
      }, e.delay);
    }, l = () => {
      clearInterval(h.value);
    }, a = (n) => {
      p.value = n;
    }, C = _(() => {
      const n = f(
        "button",
        {
          "aria-label": e.accessibilityPrevious,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--previous`
          ],
          type: "button",
          onClick: () => {
            H();
          }
        },
        [
          f("span", { class: `${e.baseCssClass}__action-icon` }, [
            f(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              f("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
            )
          ]),
          f("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPrevious
          ])
        ]
      ), u = f(
        "button",
        {
          "aria-label": e.accessibilityNext,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--next`
          ],
          type: "button",
          onClick: () => {
            N();
          }
        },
        [
          f("span", { class: `${e.baseCssClass}__action-icon` }, [
            f(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              f("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
            )
          ]),
          f("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityNext
          ])
        ]
      ), q = f(
        "button",
        {
          "aria-label": e.accessibilityPause,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--pause`,
            {
              [`${e.baseCssClass}__action--disabled`]: !p.value
            }
          ],
          type: "button",
          onClick: () => {
            a(!1);
          }
        },
        [
          f("span", { class: `${e.baseCssClass}__action-icon` }, [
            f(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              [f("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })]
            )
          ]),
          f("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPause
          ])
        ]
      ), $ = f(
        "button",
        {
          "aria-label": e.accessibilityPlay,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--play`,
            {
              [`${e.baseCssClass}__action--disabled`]: p.value
            }
          ],
          type: "button",
          onClick: () => {
            a(!0);
          }
        },
        [
          f("span", { class: `${e.baseCssClass}__action-icon` }, [
            f(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              [f("path", { d: "M8 5v14l11-7z" })]
            )
          ]),
          f("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPlay
          ])
        ]
      ), r = [n, u];
      return (o == null ? void 0 : o.autoplay) === !0 && (r.push(q), r.push($)), f("div", { class: `${e.baseCssClass}__actions` }, r);
    }), D = _(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), Ce = _(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), be = (n) => {
      var $;
      let u = (($ = e.accessibility) == null ? void 0 : $.indicator) || "";
      const q = "{0}";
      return u = u.replace(q, (n + 1).toString()), u;
    }, pe = (n) => {
      var r;
      let u = ((r = e.accessibility) == null ? void 0 : r.slide) || "";
      const q = "{0}";
      u = u.replace(q, (n + 1).toString());
      const $ = "{1}";
      return u = u.replace(
        $,
        e.cqItemsOrder.length.toString()
      ), u;
    }, _e = (n) => {
      g(n);
    }, ye = () => {
      !e.autopauseDisabled && p.value && l();
    }, ve = () => {
      !e.autopauseDisabled && p.value && s();
    }, fe = () => {
      if (v.value) {
        const u = v.value.querySelectorAll(
          `.${e.baseCssClass}__item`
        );
        j(u.length - 1);
      }
    }, ie = () => {
      const n = k();
      j(n - 1);
    }, oe = () => {
      const n = k();
      j(n + 1);
    }, re = (n, u = e.cqPath) => {
      n.data && n.data.id === u && n.data.operation === "navigate" && g(n.data.index);
    };
    return ne(() => {
      s(), L.subscribeRequestMessage(S, re);
    }), le(() => {
      typeof h.value == "number" && h.value >= 0 && l(), L.unsubscribeRequestMessage(S, re);
    }), de(
      // eslint-disable-next-line no-return-assign
      () => d.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (n, u) => {
      var q;
      return i(), y("div", M({
        id: e.id,
        ref_key: "carouselContainer",
        ref: v,
        class: J.value
      }, z.value), [
        e.controlsPrepended ? (i(), O(F(C.value), { key: 0 })) : P("", !0),
        D.value ? P("", !0) : (i(), y("div", {
          key: 1,
          "aria-live": ((q = E(o)) == null ? void 0 : q.autoplay) === !0 ? "off" : "polite",
          class: m(`${e.baseCssClass}__content`),
          "aria-atomic": "false",
          onMouseenter: ye,
          onMouseleave: ve,
          onKeydown: [
            A(ie, ["left"]),
            A(ie, ["up"]),
            A(oe, ["right"]),
            A(oe, ["down"]),
            u[0] || (u[0] = A(($) => j(0), ["home"])),
            A(fe, ["end"])
          ]
        }, [
          w("div", {
            class: m([{ [`${e.baseCssClass}__items`]: !E(b) }])
          }, [
            (i(!0), y(G, null, V(T.value, ($, r) => (i(), y("div", {
              id: `${e.cqItems[e.cqItemsOrder[r]].id}-tabpanel`,
              key: `item-${r}`,
              "aria-hidden": r === d.value ? void 0 : !0,
              "aria-label": pe(r),
              "aria-labelledby": `${e.cqItems[e.cqItemsOrder[r]].id}-tab`,
              class: m([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: r === d.value
                }
              ]),
              "aria-roledescription": "slide",
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (i(), O(F($), B(ue({ isInEditor: !1 })), null, 16))
            ], 10, Ke))), 128))
          ], 2),
          e.controlsPrepended ? P("", !0) : (i(), O(F(C.value), { key: 0 })),
          w("ol", {
            "aria-label": e.accessibilityTablist,
            class: m(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (i(!0), y(G, null, V(e.cqItemsOrder, ($, r) => (i(), y("li", {
              id: `${e.cqItems[e.cqItemsOrder[r]].id}-tab`,
              key: `item-${r}`,
              "aria-controls": `${e.cqItems[e.cqItemsOrder[r]].id}-tabpanel`,
              "aria-label": be(r),
              "aria-selected": r === d.value ? !0 : void 0,
              class: m([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: r === d.value
                }
              ]),
              role: "tab",
              onClick: (Z) => _e(r)
            }, R(e.cqItems[$]["cq:panelTitle"]), 11, Te))), 128))
          ], 10, je)
        ], 42, Fe)),
        E(b) ? (i(), O(E(ae), B(M({ key: 2 }, Ce.value)), null, 16)) : P("", !0)
      ], 16, Be);
    };
  }
}), it = /* @__PURE__ */ U({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, o) => (i(), O(Pe, { "is-in-editor": !1 }));
  }
}), ze = ["id", "onKeydown"], Ge = ["aria-label"], Ve = ["id", "aria-controls", "aria-selected", "tabIndex", "onClick"], Ue = ["id", "aria-hidden", "aria-labelledby"], ot = /* @__PURE__ */ U({
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
    ...X("cmp-tabs")
  },
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : K("isInEditor", Y.isInEditor()), b = K("componentMapping", new Q()), I = x(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), d = x(null), v = L.initMessageChannel(), h = _(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        b
      )
    ), S = _(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), p = _(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), T = _(() => {
      const c = {
        class: "aem-container",
        "data-panelcontainer": "tabs"
      };
      return o && (c["data-cq-data-path"] = e.cqPath), c;
    }), J = _(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), z = (c) => {
      if (d.value) {
        const s = d.value, l = s.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), a = s.querySelectorAll(
          `.${e.baseCssClass}__tabpanel`
        );
        c < 0 && (c = l.length - 1), c >= l.length && (c = 0), l.length && l.forEach((C, D) => {
          D === c ? (C.classList.add(`${e.baseCssClass}__tab--active`), C.setAttribute("aria-selected", "true"), C.setAttribute("tabindex", "0")) : (C.classList.remove(`${e.baseCssClass}__tab--active`), C.removeAttribute("aria-selected"), C.setAttribute("tabindex", "-1"));
        }), a.length && a.forEach((C, D) => {
          D === c ? (C.classList.add(
            `${e.baseCssClass}__tabpanel--active`
          ), C.removeAttribute("aria-hidden")) : (C.classList.remove(
            `${e.baseCssClass}__tabpanel--active`
          ), C.setAttribute("aria-hidden", "true"));
        });
      }
    }, g = (c) => {
      z(c), d.value && d.value.querySelectorAll(
        `.${e.baseCssClass}__tabpanel`
      )[c].focus();
    }, k = (c, s = e.cqPath) => {
      c.data && c.data.id === s && c.data.operation === "navigate" && z(c.data.index);
    }, j = () => {
      if (d.value) {
        const s = d.value.querySelectorAll(
          `.${e.baseCssClass}__tab`
        );
        g(s.length - 1);
      }
    }, N = () => {
      if (d.value) {
        const c = d.value, s = c.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), l = c.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), a = Array.from(s).indexOf(l);
        g(a - 1);
      }
    }, H = () => {
      if (d.value) {
        const c = d.value, s = c.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), l = c.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), a = Array.from(s).indexOf(l);
        g(a + 1);
      }
    };
    return ne(() => {
      L.subscribeRequestMessage(v, k);
    }), le(() => {
      L.unsubscribeRequestMessage(v, k);
    }), de(
      // eslint-disable-next-line no-return-assign
      () => I.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (c, s) => (i(), y("div", M({
      id: e.id,
      ref_key: "tabContainer",
      ref: d,
      class: S.value
    }, T.value, {
      onKeydown: [
        A(N, ["left"]),
        A(N, ["up"]),
        A(H, ["right"]),
        A(H, ["down"]),
        s[0] || (s[0] = A((l) => g(0), ["home"])),
        A(j, ["end"])
      ]
    }), [
      p.value ? P("", !0) : (i(), y("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: m(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (i(!0), y(G, null, V(e.cqItemsOrder, (l, a) => (i(), y("li", {
          id: `${e.cqItems[l].id}-tab`,
          key: `tab-${a}`,
          "aria-controls": `${e.cqItems[l].id}-tabpanel`,
          "aria-selected": a === I.value ? !0 : void 0,
          class: m([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: a === I.value
            }
          ]),
          tabIndex: a === I.value ? 0 : -1,
          role: "tab",
          onClick: (C) => z(a)
        }, R(e.cqItems[l]["cq:panelTitle"]), 11, Ve))), 128))
      ], 10, Ge)),
      p.value ? P("", !0) : (i(!0), y(G, { key: 1 }, V(h.value, (l, a) => (i(), y("div", {
        id: `${e.cqItems[e.cqItemsOrder[a]].id}-tabpanel`,
        key: `tab-content-${a}`,
        "aria-hidden": a === I.value ? void 0 : !0,
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[a]].id}-tab`,
        class: m([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: a === I.value
          }
        ]),
        role: "tabpanel",
        tabindex: "0"
      }, [
        (i(), O(F(l), B(ue({ isInEditor: !1 })), null, 16))
      ], 10, Ue))), 128)),
      E(o) ? (i(), O(E(ae), B(M({ key: 2 }, J.value)), null, 16)) : P("", !0)
    ], 16, ze));
  }
});
export {
  Qe as AccordionEditConfig,
  We as CarouselEditConfig,
  Ye as ContainerEditConfig,
  Ze as ContentFragmentEditConfig,
  nt as CoreAccordion,
  lt as CoreCarousel,
  Pe as CoreContainer,
  at as CoreContentFragment,
  it as CoreExperienceFragment,
  ot as CoreTabs,
  ke as DefaultContentFragment,
  et as ExperienceFragmentEditConfig,
  st as MapToContentFragmentModel,
  L as SpaUtils,
  tt as TabsEditConfig,
  we as getRenderer,
  Oe as mapRenderer
};
