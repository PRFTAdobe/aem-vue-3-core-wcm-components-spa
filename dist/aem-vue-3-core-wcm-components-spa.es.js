import { MapTo as fe, ComponentMapping as Q, componentProperties as X, componentClassNames as W, AllowedComponentsContainer as he, ResponsiveGrid as ge, Container as Ie, Utils as ee, ContainerPlaceholder as ae } from "aem-vue-3-editable-components";
import { defineComponent as U, useAttrs as te, inject as K, computed as _, openBlock as i, createBlock as O, unref as E, normalizeProps as B, mergeProps as M, resolveDynamicComponent as F, normalizeClass as m, normalizeStyle as qe, withCtx as ce, createElementBlock as v, createElementVNode as w, toDisplayString as R, createCommentVNode as A, Fragment as G, renderList as V, ref as x, watch as se, onMounted as ne, onUnmounted as le, h as f, watchEffect as de, withKeys as P, guardReactiveProps as ue } from "vue";
import { AuthoringUtils as Y } from "@adobe/aem-spa-page-model-manager";
const Je = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Qe = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, We = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ye = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return t.elementsOrder.length === 0 && t.cqItemsOrder.length === 0;
  }
}, Ze = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, et = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, $e = "ContentFragment-", me = (t) => $e + t, Ee = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((b) => {
    fe(me(b))(e);
  });
}, Oe = (t) => {
  const e = me(t);
  return Q.get(e);
}, tt = (t) => (e) => Ee(t, e), we = /* @__PURE__ */ U({
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
        var y;
        return b && (o == null ? void 0 : o.allowedComponents) && ((y = o == null ? void 0 : o.allowedComponents) == null ? void 0 : y.applicable);
      }
    );
    return (y, h) => d.value ? (i(), O(E(he), B(M({ key: 0 }, { ...e, ...E(o) })), null, 16)) : (i(), O(F(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: m(I.value),
      role: e.roleAttribute,
      style: qe(e.backgroundStyle)
    }, {
      default: ce(() => [
        t.layout === "RESPONSIVE_GRID" ? (i(), O(E(ge), B(M({ key: 0 }, {
          ...e,
          ...E(o),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (i(), O(E(Ie), B(M({ key: 1 }, { ...e, ...E(o) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), Ae = ["id"], Pe = ["innerHTML"], Se = /* @__PURE__ */ U({
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
    return (y, h) => {
      var S;
      return i(), v("div", {
        id: e.id,
        class: m(I.value)
      }, [
        w("h3", {
          class: m(`${e.baseCssClass}__title`)
        }, R(e.title), 3),
        e.description ? (i(), v("p", {
          key: 0,
          class: m(`${e.baseCssClass}__description`)
        }, R(e.description), 3)) : A("", !0),
        (S = e.elementsOrder) != null && S.length ? (i(), v("div", {
          key: 1,
          class: m(`${e.baseCssClass}__elements`)
        }, [
          (i(!0), v(G, null, V(e.elementsOrder, (C, T) => (i(), v("div", {
            key: `${e.id}-element-${C}-${T}`,
            class: m(`${e.baseCssClass}__element`)
          }, [
            w("div", {
              class: m([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              w("h4", null, R(C), 1)
            ], 2),
            w("div", {
              class: m([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[C].value}`
            }, null, 10, Pe),
            w("div", {
              class: m([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + R(e.elements[C].dataType), 3),
            w("div", {
              class: m([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + R(e.elements[C].multiValue ? "true" : "false"), 3),
            w("div", {
              class: m([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + R(e.elements[C][":type"]), 3)
          ], 2))), 128))
        ], 2)) : A("", !0),
        (i(!0), v(G, null, V(d.value, (C) => (i(), O(F(C), {
          key: C.toString()
        }))), 128))
      ], 10, Ae);
    };
  }
}), st = /* @__PURE__ */ U({
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
      const d = Oe(e.model);
      return d || Se;
    });
    return (d, y) => b.value ? A("", !0) : (i(), O(F(I.value), B(M({ key: 0 }, { ...e, ...E(o) })), null, 16));
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
}, ke = ["id", "data-cmp-single-expansion"], xe = ["id", "data-cmp-expanded"], Le = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], Me = /* @__PURE__ */ w("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ w("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), Ne = [
  Me
], De = ["id", "aria-labelledby"], at = /* @__PURE__ */ U({
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
    const e = t, o = te(), b = K("isInEditor", Y.isInEditor()), I = K("componentMapping", new Q()), d = x(L.initMessageChannel()), y = x(-1), h = x(e.expandedItems), S = x(null), C = _(() => (o == null ? void 0 : o.singleExpansion) === !0), T = _(() => {
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
      const n = S.value.querySelector(
        `button[data-cmp-button-id="${s}"]`
      );
      n && n.focus();
    }, k = (s, n) => {
      const a = h.value.indexOf(s) > -1;
      if (C.value)
        h.value = a ? [] : [s];
      else if (a) {
        const p = h.value.indexOf(s);
        h.value.splice(p, 1);
      } else
        h.value.push(s);
      n.target.focus();
    }, j = (s, n, a) => {
      const p = S.value.querySelectorAll("button").length - 1;
      switch (n.code) {
        case "ArrowLeft":
        case "ArrowUp":
          n.preventDefault(), a > 0 && g(a - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          n.preventDefault(), a < p && g(a + 1);
          break;
        case "Home":
          n.preventDefault(), g(0);
          break;
        case "End":
          n.preventDefault(), g(p);
          break;
        case "Enter":
        case "Space":
          n.preventDefault(), k(s, n), g(a);
          break;
      }
    }, N = (s) => h.value.indexOf(s) > -1, H = _(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    se(C, async (s, n) => {
      s !== n && (h.value = e.expandedItems);
    }), se(e.expandedItems, async (s, n) => {
      s !== n && (h.value = s);
    }), se(y, async (s, n) => {
      s !== -1 && typeof s < "u" && s !== n && e.cqItemsOrder && (h.value = [e.cqItemsOrder[s]]);
    });
    const c = L.createCallbackListener(
      e.cqPath,
      y
    );
    return ne(() => {
      L.subscribeRequestMessage(d.value, c);
    }), le(() => {
      L.unsubscribeRequestMessage(d.value, c);
    }), (s, n) => (i(), v("div", M({
      id: e.id,
      ref_key: "accordion",
      ref: S,
      class: z.value,
      "data-cmp-single-expansion": C.value === !0 ? !0 : void 0
    }, T.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (i(!0), v(G, { key: 0 }, V(e.cqItemsOrder, (a, p) => (i(), v("div", {
        id: `accordion-${e.cqItems[a].id}`,
        key: `accordion-index-${p}`,
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
              "data-cmp-button-id": p,
              onClick: (D) => k(a, D),
              onKeydown: (D) => j(a, D, p)
            }, [
              w("span", {
                class: m(`${e.baseCssClass}__title`)
              }, R(e.cqItems[a]["cq:panelTitle"]), 3),
              w("span", {
                class: m(`${e.baseCssClass}__icon`)
              }, Ne, 2)
            ], 42, Le)
          ]),
          _: 2
        }, 1032, ["class"])),
        E(b) || N(a) ? (i(), v("div", {
          key: 0,
          id: `accordion-${e.cqItems[a].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[a].id}-button`,
          class: m(`${e.baseCssClass}__panel ${N(a) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (i(), O(F(J.value[t.cqItemsOrder.indexOf(a)]), { key: 0 })) : A("", !0)
        ], 10, De)) : A("", !0)
      ], 10, xe))), 128)) : A("", !0),
      E(b) ? (i(), O(E(ae), B(M({ key: 1 }, H.value)), null, 16)) : A("", !0)
    ], 16, ke));
  }
}), Re = ["id"], Be = ["aria-live", "onKeydown"], Fe = ["id", "aria-hidden", "aria-label", "aria-labelledby"], Ke = ["aria-label"], je = ["id", "aria-controls", "aria-label", "aria-selected", "onClick"], nt = /* @__PURE__ */ U({
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
    ), y = x(null), h = x(-1), S = L.initMessageChannel(), C = x((o == null ? void 0 : o.autoplay) === !0 && !b), T = _(
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
      const l = {
        "aria-label": e.accessibilityLabel,
        "aria-live": "polite",
        "aria-roledescription": "carousel",
        class: "aem-container",
        "data-panelcontainer": "carousel",
        role: "group"
      };
      return b && (l["data-cq-data-path"] = e.cqPath), l;
    }), g = (l) => {
      if (y.value) {
        const u = y.value, q = u.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), $ = u.querySelectorAll(
          `.${e.baseCssClass}__indicator`
        );
        l < 0 && (l = q.length - 1), l >= q.length && (l = 0), q.length && q.forEach((r, Z) => {
          Z === l ? (r.classList.add(`${e.baseCssClass}__item--active`), r.removeAttribute("aria-hidden")) : (r.classList.remove(
            `${e.baseCssClass}__item--active`
          ), r.setAttribute("aria-hidden", "true"));
        }), $.length && $.forEach((r, Z) => {
          Z === l ? (r.classList.add(
            `${e.baseCssClass}__indicator--active`
          ), r.setAttribute("aria-selected", "true"), r.setAttribute("tabindex", "0")) : (r.classList.remove(
            `${e.baseCssClass}__indicator--active`
          ), r.removeAttribute("aria-selected"), r.setAttribute("tabindex", "-1"));
        });
      }
    }, k = () => {
      let l = 0;
      if (y.value) {
        const u = y.value, q = u.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), $ = u.querySelector(
          `.${e.baseCssClass}__item--active`
        );
        l = Array.from(q).indexOf($);
      }
      return l;
    }, j = (l) => {
      g(l), y.value && y.value.querySelectorAll(
        `.${e.baseCssClass}__item`
      )[l].focus();
    }, N = () => {
      const l = k();
      g(l + 1);
    }, H = () => {
      const l = k();
      g(l - 1);
    }, c = () => {
      if (!C.value || e.cqItemsOrder.length <= 1)
        return;
      const l = k();
      g(l + 1);
    }, s = () => {
      h.value = setInterval(() => {
        c();
      }, e.delay);
    }, n = () => {
      clearInterval(h.value);
    }, a = _(() => {
      const l = f(
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
              [`${e.baseCssClass}__action--disabled`]: !C.value
            }
          ],
          type: "button",
          onClick: () => {
            !e.autopauseDisabled && C.value && n();
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
              [`${e.baseCssClass}__action--disabled`]: C.value
            }
          ],
          type: "button",
          onClick: () => {
            !e.autopauseDisabled && C.value && s();
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
      ), r = [l, u];
      return (o == null ? void 0 : o.autoplay) === !0 && (r.push(q), r.push($)), f("div", { class: `${e.baseCssClass}__actions` }, r);
    }), p = _(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), D = _(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), Ce = (l) => {
      var $;
      let u = (($ = e.accessibility) == null ? void 0 : $.indicator) || "";
      const q = "{0}";
      return u = u.replace(q, (l + 1).toString()), u;
    }, be = (l) => {
      var r;
      let u = ((r = e.accessibility) == null ? void 0 : r.slide) || "";
      const q = "{0}";
      u = u.replace(q, (l + 1).toString());
      const $ = "{1}";
      return u = u.replace(
        $,
        e.cqItemsOrder.length.toString()
      ), u;
    }, pe = (l) => {
      g(l);
    }, _e = () => {
      !e.autopauseDisabled && C.value && n();
    }, ve = () => {
      !e.autopauseDisabled && C.value && s();
    }, ye = () => {
      if (y.value) {
        const u = y.value.querySelectorAll(
          `.${e.baseCssClass}__item`
        );
        j(u.length - 1);
      }
    }, ie = () => {
      const l = k();
      j(l - 1);
    }, oe = () => {
      const l = k();
      j(l + 1);
    }, re = (l, u = e.cqPath) => {
      l.data && l.data.id === u && l.data.operation === "navigate" && g(l.data.index);
    };
    return ne(() => {
      s(), L.subscribeRequestMessage(S, re);
    }), le(() => {
      typeof h.value == "number" && h.value >= 0 && n(), L.unsubscribeRequestMessage(S, re);
    }), de(
      // eslint-disable-next-line no-return-assign
      () => d.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (l, u) => {
      var q;
      return i(), v("div", M({
        id: e.id,
        ref_key: "carouselContainer",
        ref: y,
        class: J.value
      }, z.value), [
        e.controlsPrepended ? (i(), O(F(a.value), { key: 0 })) : A("", !0),
        p.value ? A("", !0) : (i(), v("div", {
          key: 1,
          "aria-live": ((q = E(o)) == null ? void 0 : q.autoplay) === !0 ? "off" : "polite",
          class: m(`${e.baseCssClass}__content`),
          "aria-atomic": "false",
          onMouseenter: _e,
          onMouseleave: ve,
          onKeydown: [
            P(ie, ["left"]),
            P(ie, ["up"]),
            P(oe, ["right"]),
            P(oe, ["down"]),
            u[0] || (u[0] = P(($) => j(0), ["home"])),
            P(ye, ["end"])
          ]
        }, [
          w("div", {
            class: m([{ [`${e.baseCssClass}__items`]: !E(b) }])
          }, [
            (i(!0), v(G, null, V(T.value, ($, r) => (i(), v("div", {
              id: `${e.cqItems[e.cqItemsOrder[r]].id}-tabpanel`,
              key: `item-${r}`,
              "aria-hidden": r === d.value ? void 0 : !0,
              "aria-label": be(r),
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
            ], 10, Fe))), 128))
          ], 2),
          e.controlsPrepended ? A("", !0) : (i(), O(F(a.value), { key: 0 })),
          w("ol", {
            "aria-label": e.accessibilityTablist,
            class: m(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (i(!0), v(G, null, V(e.cqItemsOrder, ($, r) => (i(), v("li", {
              id: `${e.cqItems[e.cqItemsOrder[r]].id}-tab`,
              key: `item-${r}`,
              "aria-controls": `${e.cqItems[e.cqItemsOrder[r]].id}-tabpanel`,
              "aria-label": Ce(r),
              "aria-selected": r === d.value ? !0 : void 0,
              class: m([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: r === d.value
                }
              ]),
              role: "tab",
              onClick: (Z) => pe(r)
            }, R(e.cqItems[$]["cq:panelTitle"]), 11, je))), 128))
          ], 10, Ke)
        ], 42, Be)),
        E(b) ? (i(), O(E(ae), B(M({ key: 2 }, D.value)), null, 16)) : A("", !0)
      ], 16, Re);
    };
  }
}), lt = /* @__PURE__ */ U({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, o) => (i(), O(we, { "is-in-editor": !1 }));
  }
}), Te = ["id", "onKeydown"], ze = ["aria-label"], Ge = ["id", "aria-controls", "aria-selected", "tabIndex", "onClick"], Ve = ["id", "aria-hidden", "aria-labelledby"], it = /* @__PURE__ */ U({
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
    ), d = x(null), y = L.initMessageChannel(), h = _(
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
    ), C = _(
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
        const s = d.value, n = s.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), a = s.querySelectorAll(
          `.${e.baseCssClass}__tabpanel`
        );
        c < 0 && (c = n.length - 1), c >= n.length && (c = 0), n.length && n.forEach((p, D) => {
          D === c ? (p.classList.add(`${e.baseCssClass}__tab--active`), p.setAttribute("aria-selected", "true"), p.setAttribute("tabindex", "0")) : (p.classList.remove(`${e.baseCssClass}__tab--active`), p.removeAttribute("aria-selected"), p.setAttribute("tabindex", "-1"));
        }), a.length && a.forEach((p, D) => {
          D === c ? (p.classList.add(
            `${e.baseCssClass}__tabpanel--active`
          ), p.removeAttribute("aria-hidden")) : (p.classList.remove(
            `${e.baseCssClass}__tabpanel--active`
          ), p.setAttribute("aria-hidden", "true"));
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
        ), n = c.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), a = Array.from(s).indexOf(n);
        g(a - 1);
      }
    }, H = () => {
      if (d.value) {
        const c = d.value, s = c.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), n = c.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), a = Array.from(s).indexOf(n);
        g(a + 1);
      }
    };
    return ne(() => {
      L.subscribeRequestMessage(y, k);
    }), le(() => {
      L.unsubscribeRequestMessage(y, k);
    }), de(
      // eslint-disable-next-line no-return-assign
      () => I.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (c, s) => (i(), v("div", M({
      id: e.id,
      ref_key: "tabContainer",
      ref: d,
      class: S.value
    }, T.value, {
      onKeydown: [
        P(N, ["left"]),
        P(N, ["up"]),
        P(H, ["right"]),
        P(H, ["down"]),
        s[0] || (s[0] = P((n) => g(0), ["home"])),
        P(j, ["end"])
      ]
    }), [
      C.value ? A("", !0) : (i(), v("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: m(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (i(!0), v(G, null, V(e.cqItemsOrder, (n, a) => (i(), v("li", {
          id: `${e.cqItems[n].id}-tab`,
          key: `tab-${a}`,
          "aria-controls": `${e.cqItems[n].id}-tabpanel`,
          "aria-selected": a === I.value ? !0 : void 0,
          class: m([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: a === I.value
            }
          ]),
          tabIndex: a === I.value ? 0 : -1,
          role: "tab",
          onClick: (p) => z(a)
        }, R(e.cqItems[n]["cq:panelTitle"]), 11, Ge))), 128))
      ], 10, ze)),
      C.value ? A("", !0) : (i(!0), v(G, { key: 1 }, V(h.value, (n, a) => (i(), v("div", {
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
        (i(), O(F(n), B(ue({ isInEditor: !1 })), null, 16))
      ], 10, Ve))), 128)),
      E(o) ? (i(), O(E(ae), B(M({ key: 2 }, J.value)), null, 16)) : A("", !0)
    ], 16, Te));
  }
});
export {
  Je as AccordionEditConfig,
  Qe as CarouselEditConfig,
  We as ContainerEditConfig,
  Ye as ContentFragmentEditConfig,
  at as CoreAccordion,
  nt as CoreCarousel,
  we as CoreContainer,
  st as CoreContentFragment,
  lt as CoreExperienceFragment,
  it as CoreTabs,
  Se as DefaultContentFragment,
  Ze as ExperienceFragmentEditConfig,
  tt as MapToContentFragmentModel,
  L as SpaUtils,
  et as TabsEditConfig,
  Oe as getRenderer,
  Ee as mapRenderer
};
