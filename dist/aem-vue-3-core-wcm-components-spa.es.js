import { MapTo as fe, ComponentMapping as Q, componentProperties as X, componentClassNames as W, AllowedComponentsContainer as he, ResponsiveGrid as ge, Container as Ie, Utils as ee, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { defineComponent as H, useAttrs as se, inject as F, computed as b, openBlock as i, createBlock as q, unref as E, normalizeProps as L, mergeProps as M, resolveDynamicComponent as B, normalizeClass as C, normalizeStyle as qe, withCtx as ce, createElementBlock as v, createElementVNode as $, toDisplayString as R, createCommentVNode as x, Fragment as V, renderList as U, ref as G, onMounted as ae, onUnmounted as ne, guardReactiveProps as le, h as y, watchEffect as de, withKeys as S } from "vue";
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
}, $e = "ContentFragment-", ue = (t) => $e + t, Ee = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((f) => {
    fe(ue(f))(e);
  });
}, Oe = (t) => {
  const e = ue(t);
  return Q.get(e);
}, tt = (t) => (e) => Ee(t, e), Ae = /* @__PURE__ */ H({
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
    const e = t, o = se(), f = typeof e.isInEditor < "u" ? e.isInEditor : F("isInEditor", Y.isInEditor()), p = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        f,
        e.aemNoDecoration
      )
    ), d = b(
      () => {
        var h;
        return f && (o == null ? void 0 : o.allowedComponents) && ((h = o == null ? void 0 : o.allowedComponents) == null ? void 0 : h.applicable);
      }
    );
    return (h, w) => d.value ? (i(), q(E(he), L(M({ key: 0 }, { ...e, ...E(o) })), null, 16)) : (i(), q(B(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: C(p.value),
      role: e.roleAttribute,
      style: qe(e.backgroundStyle)
    }, {
      default: ce(() => [
        t.layout === "RESPONSIVE_GRID" ? (i(), q(E(ge), L(M({ key: 0 }, {
          ...e,
          ...E(o),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (i(), q(E(Ie), L(M({ key: 1 }, { ...e, ...E(o) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), Se = ["id"], xe = ["innerHTML"], we = /* @__PURE__ */ H({
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : F("isInEditor", Y.isInEditor()), f = F("componentMapping", new Q()), p = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), d = b(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        f
      )
    );
    return (h, w) => {
      var k;
      return i(), v("div", {
        id: e.id,
        class: C(p.value)
      }, [
        $("h3", {
          class: C(`${e.baseCssClass}__title`)
        }, R(e.title), 3),
        e.description ? (i(), v("p", {
          key: 0,
          class: C(`${e.baseCssClass}__description`)
        }, R(e.description), 3)) : x("", !0),
        (k = e.elementsOrder) != null && k.length ? (i(), v("div", {
          key: 1,
          class: C(`${e.baseCssClass}__elements`)
        }, [
          (i(!0), v(V, null, U(e.elementsOrder, (_, T) => (i(), v("div", {
            key: `${e.id}-element-${_}-${T}`,
            class: C(`${e.baseCssClass}__element`)
          }, [
            $("div", {
              class: C([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              $("h4", null, R(_), 1)
            ], 2),
            $("div", {
              class: C([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[_].value}`
            }, null, 10, xe),
            $("div", {
              class: C([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + R(e.elements[_].dataType), 3),
            $("div", {
              class: C([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + R(e.elements[_].multiValue ? "true" : "false"), 3),
            $("div", {
              class: C([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + R(e.elements[_][":type"]), 3)
          ], 2))), 128))
        ], 2)) : x("", !0),
        (i(!0), v(V, null, U(d.value, (_) => (i(), q(B(_), {
          key: _.toString()
        }))), 128))
      ], 10, Se);
    };
  }
}), st = /* @__PURE__ */ H({
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
    const e = t, o = se(), f = b(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), p = b(() => {
      const d = Oe(e.model);
      return d || we;
    });
    return (d, h) => f.value ? x("", !0) : (i(), q(B(p.value), L(M({ key: 0 }, { ...e, ...E(o) })), null, 16));
  }
}), D = {
  createCallbackListener(t, e) {
    return (o, f = t) => {
      o.data && o.data.id === f && o.data.operation === "navigate" && (e.value = o.data.index);
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
}, Pe = ["id"], Le = ["id", "data-cmp-expanded"], Me = ["id", "aria-controls", "aria-expanded", "onClick"], ke = /* @__PURE__ */ $("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ $("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), Ne = [
  ke
], Re = ["id", "aria-hidden", "aria-labelledby"], at = /* @__PURE__ */ H({
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
    isInEditor: {
      type: Boolean,
      default: void 0
    },
    singleExpansion: {
      type: Boolean,
      default: void 0
    },
    ...X("cmp-accordion")
  },
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : F("isInEditor", Y.isInEditor()), f = F("componentMapping", new Q()), p = G(null), d = D.initMessageChannel(), h = b(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        f
      )
    ), w = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), k = b(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), _ = b(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), T = b(() => {
      const s = {
        class: "aem-container",
        "data-panelcontainer": "accordion"
      };
      return o && (s["data-cq-data-path"] = e.cqPath), s;
    }), J = () => {
      let s = [];
      if (p.value) {
        const n = p.value.querySelectorAll(
          `.${e.baseCssClass}__item[data-cmp-expanded]`
        );
        s = Array.from(n);
      }
      return s;
    }, j = (s) => {
      if (p.value) {
        const r = p.value, n = r.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), a = Array.from(n).indexOf(s);
        if (a > -1) {
          const u = r.querySelectorAll(
            `.${e.baseCssClass}__button`
          );
          u[a].classList.add(
            `${e.baseCssClass}__button--expanded`
          ), u[a].setAttribute("aria-expanded", "true");
          const A = r.querySelectorAll(
            `.${e.baseCssClass}__panel`
          );
          A[a].classList.add(
            `${e.baseCssClass}__panel--expanded`
          ), A[a].classList.remove(
            `${e.baseCssClass}__panel--hidden`
          ), A[a].setAttribute("aria-hidden", "false");
        }
      }
    }, O = (s) => {
      if (p.value) {
        const r = p.value, n = r.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), a = Array.from(n).indexOf(s);
        if (a > -1) {
          const u = r.querySelectorAll(
            `.${e.baseCssClass}__button`
          );
          u[a].classList.remove(
            `${e.baseCssClass}__button--expanded`
          ), u[a].removeAttribute("aria-expanded");
          const A = r.querySelectorAll(
            `.${e.baseCssClass}__panel`
          );
          A[a].classList.remove(
            `${e.baseCssClass}__panel--expanded`
          ), A[a].classList.add(
            `${e.baseCssClass}__panel--hidden`
          ), A[a].setAttribute("aria-hidden", "true");
        }
      }
    }, P = (s) => {
      s.hasAttribute("data-cmp-expanded") ? j(s) : O(s);
    }, N = (s, r) => {
      r ? s.setAttribute("data-cmp-expanded", "") : s.removeAttribute("data-cmp-expanded"), P(s);
    }, K = (s) => {
      if (p.value) {
        const n = p.value.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), a = n[s];
        a && (e.singleExpansion === !0 && n.forEach((u) => {
          u !== a && u.hasAttribute("data-cmp-expanded") && N(u, !1);
        }), N(
          a,
          !a.hasAttribute("data-cmp-expanded")
        ));
      }
    }, z = (s, r = e.cqPath) => {
      s.data && s.data.id === r && s.data.operation === "navigate" && K(s.data.index);
    };
    return ae(() => {
      if (e.singleExpansion === !0) {
        const s = J();
        s.length > 1 && K(s.length - 1);
      }
      D.subscribeRequestMessage(d, z);
    }), ne(() => {
      D.unsubscribeRequestMessage(d, z);
    }), (s, r) => (i(), v("div", M({
      id: e.id,
      ref_key: "accordionContainer",
      ref: p,
      class: w.value
    }, T.value), [
      k.value ? x("", !0) : (i(!0), v(V, { key: 0 }, U(e.cqItemsOrder, (n, a) => (i(), v("div", {
        id: `accordion-${e.cqItems[n].id}`,
        key: `accordion-index-${a}`,
        class: C(`${e.baseCssClass}__item`),
        "data-cmp-expanded": e.expandedItems.includes(n) ? !0 : void 0,
        "data-cmp-hook-accordion": "item"
      }, [
        (i(), q(B(e.headingElement), {
          class: C(`${e.baseCssClass}__heading`)
        }, {
          default: ce(() => [
            $("button", {
              id: `accordion-${e.cqItems[n].id}-button`,
              "aria-controls": `accordion-${e.cqItems[n].id}-panel`,
              "aria-expanded": e.expandedItems.includes(n) ? "true" : void 0,
              class: C([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: e.expandedItems.includes(n)
                }
              ]),
              "data-cmp-hook-accordion": "button",
              type: "button",
              onClick: (u) => {
                K(a), u.currentTarget.focus();
              }
            }, [
              $("span", {
                class: C(`${e.baseCssClass}__title`)
              }, R(e.cqItems[n]["cq:panelTitle"]), 3),
              $("span", {
                class: C(`${e.baseCssClass}__icon`)
              }, Ne, 2)
            ], 10, Me)
          ]),
          _: 2
        }, 1032, ["class"])),
        $("div", {
          id: `accordion-${e.cqItems[n].id}-panel`,
          "aria-hidden": e.expandedItems.includes(n) ? void 0 : "true",
          "aria-labelledby": `accordion-${e.cqItems[n].id}-button`,
          class: C([
            `${e.baseCssClass}__panel`,
            {
              [`${e.baseCssClass}__panel--expanded`]: e.expandedItems.includes(n)
            },
            {
              [`${e.baseCssClass}__panel--hidden`]: !e.expandedItems.includes(n)
            }
          ]),
          "data-cmp-hook-accordion": "panel",
          role: "region"
        }, [
          (i(), q(B(h.value[t.cqItemsOrder.indexOf(n)]), L(le({ isInEditor: !1 })), null, 16))
        ], 10, Re)
      ], 10, Le))), 128)),
      t.isInEditor ? (i(), q(E(te), L(M({ key: 1 }, _.value)), null, 16)) : x("", !0)
    ], 16, Pe));
  }
}), Be = ["id"], De = ["aria-live", "onKeydown"], Fe = ["id", "aria-hidden", "aria-label", "aria-labelledby"], Ke = ["aria-label"], Te = ["id", "aria-controls", "aria-label", "aria-selected", "onClick"], nt = /* @__PURE__ */ H({
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
    const e = t, o = se(), f = typeof e.isInEditor < "u" ? e.isInEditor : F("isInEditor", Y.isInEditor()), p = F("componentMapping", new Q()), d = G(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), h = G(null), w = G(-1), k = D.initMessageChannel(), _ = G((o == null ? void 0 : o.autoplay) === !0 && !f), T = b(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        p
      )
    ), J = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        f,
        e.aemNoDecoration
      )
    ), j = b(() => {
      const l = {
        "aria-label": e.accessibilityLabel,
        "aria-live": "polite",
        "aria-roledescription": "carousel",
        class: "aem-container",
        "data-panelcontainer": "carousel",
        role: "group"
      };
      return f && (l["data-cq-data-path"] = e.cqPath), l;
    }), O = (l) => {
      if (h.value) {
        const m = h.value, g = m.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), I = m.querySelectorAll(
          `.${e.baseCssClass}__indicator`
        );
        l < 0 && (l = g.length - 1), l >= g.length && (l = 0), g.length && g.forEach((c, Z) => {
          Z === l ? (c.classList.add(`${e.baseCssClass}__item--active`), c.removeAttribute("aria-hidden")) : (c.classList.remove(
            `${e.baseCssClass}__item--active`
          ), c.setAttribute("aria-hidden", "true"));
        }), I.length && I.forEach((c, Z) => {
          Z === l ? (c.classList.add(
            `${e.baseCssClass}__indicator--active`
          ), c.setAttribute("aria-selected", "true"), c.setAttribute("tabindex", "0")) : (c.classList.remove(
            `${e.baseCssClass}__indicator--active`
          ), c.removeAttribute("aria-selected"), c.setAttribute("tabindex", "-1"));
        });
      }
    }, P = () => {
      let l = 0;
      if (h.value) {
        const m = h.value, g = m.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), I = m.querySelector(
          `.${e.baseCssClass}__item--active`
        );
        l = Array.from(g).indexOf(I);
      }
      return l;
    }, N = (l) => {
      O(l), h.value && h.value.querySelectorAll(
        `.${e.baseCssClass}__item`
      )[l].focus();
    }, K = () => {
      const l = P();
      O(l + 1);
    }, z = () => {
      const l = P();
      O(l - 1);
    }, s = () => {
      if (!_.value || e.cqItemsOrder.length <= 1)
        return;
      const l = P();
      O(l + 1);
    }, r = () => {
      w.value = setInterval(() => {
        s();
      }, e.delay);
    }, n = () => {
      clearInterval(w.value);
    }, a = (l) => {
      _.value = l;
    }, u = b(() => {
      const l = y(
        "button",
        {
          "aria-label": e.accessibilityPrevious,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--previous`
          ],
          type: "button",
          onClick: () => {
            z();
          }
        },
        [
          y("span", { class: `${e.baseCssClass}__action-icon` }, [
            y(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              y("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
            )
          ]),
          y("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPrevious
          ])
        ]
      ), m = y(
        "button",
        {
          "aria-label": e.accessibilityNext,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--next`
          ],
          type: "button",
          onClick: () => {
            K();
          }
        },
        [
          y("span", { class: `${e.baseCssClass}__action-icon` }, [
            y(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              y("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
            )
          ]),
          y("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityNext
          ])
        ]
      ), g = y(
        "button",
        {
          "aria-label": e.accessibilityPause,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--pause`,
            {
              [`${e.baseCssClass}__action--disabled`]: !_.value
            }
          ],
          type: "button",
          onClick: () => {
            a(!1);
          }
        },
        [
          y("span", { class: `${e.baseCssClass}__action-icon` }, [
            y(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              [y("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })]
            )
          ]),
          y("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPause
          ])
        ]
      ), I = y(
        "button",
        {
          "aria-label": e.accessibilityPlay,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--play`,
            {
              [`${e.baseCssClass}__action--disabled`]: _.value
            }
          ],
          type: "button",
          onClick: () => {
            a(!0);
          }
        },
        [
          y("span", { class: `${e.baseCssClass}__action-icon` }, [
            y(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              [y("path", { d: "M8 5v14l11-7z" })]
            )
          ]),
          y("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPlay
          ])
        ]
      ), c = [l, m];
      return (o == null ? void 0 : o.autoplay) === !0 && (c.push(g), c.push(I)), y("div", { class: `${e.baseCssClass}__actions` }, c);
    }), A = b(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), me = b(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), Ce = (l) => {
      var I;
      let m = ((I = e.accessibility) == null ? void 0 : I.indicator) || "";
      const g = "{0}";
      return m = m.replace(g, (l + 1).toString()), m;
    }, pe = (l) => {
      var c;
      let m = ((c = e.accessibility) == null ? void 0 : c.slide) || "";
      const g = "{0}";
      m = m.replace(g, (l + 1).toString());
      const I = "{1}";
      return m = m.replace(
        I,
        e.cqItemsOrder.length.toString()
      ), m;
    }, be = (l) => {
      O(l);
    }, _e = () => {
      !e.autopauseDisabled && _.value && n();
    }, ye = () => {
      !e.autopauseDisabled && _.value && r();
    }, ve = () => {
      if (h.value) {
        const m = h.value.querySelectorAll(
          `.${e.baseCssClass}__item`
        );
        N(m.length - 1);
      }
    }, ie = () => {
      const l = P();
      N(l - 1);
    }, oe = () => {
      const l = P();
      N(l + 1);
    }, re = (l, m = e.cqPath) => {
      l.data && l.data.id === m && l.data.operation === "navigate" && O(l.data.index);
    };
    return ae(() => {
      r(), D.subscribeRequestMessage(k, re);
    }), ne(() => {
      typeof w.value == "number" && w.value >= 0 && n(), D.unsubscribeRequestMessage(k, re);
    }), de(
      // eslint-disable-next-line no-return-assign
      () => d.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (l, m) => {
      var g;
      return i(), v("div", M({
        id: e.id,
        ref_key: "carouselContainer",
        ref: h,
        class: J.value
      }, j.value), [
        e.controlsPrepended ? (i(), q(B(u.value), { key: 0 })) : x("", !0),
        A.value ? x("", !0) : (i(), v("div", {
          key: 1,
          "aria-live": ((g = E(o)) == null ? void 0 : g.autoplay) === !0 ? "off" : "polite",
          class: C(`${e.baseCssClass}__content`),
          "aria-atomic": "false",
          onMouseenter: _e,
          onMouseleave: ye,
          onKeydown: [
            S(ie, ["left"]),
            S(ie, ["up"]),
            S(oe, ["right"]),
            S(oe, ["down"]),
            m[0] || (m[0] = S((I) => N(0), ["home"])),
            S(ve, ["end"])
          ]
        }, [
          $("div", {
            class: C([{ [`${e.baseCssClass}__items`]: !E(f) }])
          }, [
            (i(!0), v(V, null, U(T.value, (I, c) => (i(), v("div", {
              id: `${e.cqItems[e.cqItemsOrder[c]].id}-tabpanel`,
              key: `item-${c}`,
              "aria-hidden": c === d.value ? void 0 : !0,
              "aria-label": pe(c),
              "aria-labelledby": `${e.cqItems[e.cqItemsOrder[c]].id}-tab`,
              class: C([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: c === d.value
                }
              ]),
              "aria-roledescription": "slide",
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (i(), q(B(I), L(le({ isInEditor: !1 })), null, 16))
            ], 10, Fe))), 128))
          ], 2),
          e.controlsPrepended ? x("", !0) : (i(), q(B(u.value), { key: 0 })),
          $("ol", {
            "aria-label": e.accessibilityTablist,
            class: C(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (i(!0), v(V, null, U(e.cqItemsOrder, (I, c) => (i(), v("li", {
              id: `${e.cqItems[e.cqItemsOrder[c]].id}-tab`,
              key: `item-${c}`,
              "aria-controls": `${e.cqItems[e.cqItemsOrder[c]].id}-tabpanel`,
              "aria-label": Ce(c),
              "aria-selected": c === d.value ? !0 : void 0,
              class: C([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: c === d.value
                }
              ]),
              role: "tab",
              onClick: (Z) => be(c)
            }, R(e.cqItems[I]["cq:panelTitle"]), 11, Te))), 128))
          ], 10, Ke)
        ], 42, De)),
        E(f) ? (i(), q(E(te), L(M({ key: 2 }, me.value)), null, 16)) : x("", !0)
      ], 16, Be);
    };
  }
}), lt = /* @__PURE__ */ H({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, o) => (i(), q(Ae, { "is-in-editor": !1 }));
  }
}), je = ["id", "onKeydown"], ze = ["aria-label"], Ge = ["id", "aria-controls", "aria-selected", "tabIndex", "onClick"], Ve = ["id", "aria-hidden", "aria-labelledby"], it = /* @__PURE__ */ H({
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : F("isInEditor", Y.isInEditor()), f = F("componentMapping", new Q()), p = G(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), d = G(null), h = D.initMessageChannel(), w = b(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        f
      )
    ), k = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), _ = b(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), T = b(() => {
      const s = {
        class: "aem-container",
        "data-panelcontainer": "tabs"
      };
      return o && (s["data-cq-data-path"] = e.cqPath), s;
    }), J = b(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), j = (s) => {
      if (d.value) {
        const r = d.value, n = r.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), a = r.querySelectorAll(
          `.${e.baseCssClass}__tabpanel`
        );
        s < 0 && (s = n.length - 1), s >= n.length && (s = 0), n.length && n.forEach((u, A) => {
          A === s ? (u.classList.add(`${e.baseCssClass}__tab--active`), u.setAttribute("aria-selected", "true"), u.setAttribute("tabindex", "0")) : (u.classList.remove(`${e.baseCssClass}__tab--active`), u.removeAttribute("aria-selected"), u.setAttribute("tabindex", "-1"));
        }), a.length && a.forEach((u, A) => {
          A === s ? (u.classList.add(
            `${e.baseCssClass}__tabpanel--active`
          ), u.removeAttribute("aria-hidden")) : (u.classList.remove(
            `${e.baseCssClass}__tabpanel--active`
          ), u.setAttribute("aria-hidden", "true"));
        });
      }
    }, O = (s) => {
      j(s), d.value && d.value.querySelectorAll(
        `.${e.baseCssClass}__tabpanel`
      )[s].focus();
    }, P = (s, r = e.cqPath) => {
      s.data && s.data.id === r && s.data.operation === "navigate" && j(s.data.index);
    }, N = () => {
      if (d.value) {
        const r = d.value.querySelectorAll(
          `.${e.baseCssClass}__tab`
        );
        O(r.length - 1);
      }
    }, K = () => {
      if (d.value) {
        const s = d.value, r = s.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), n = s.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), a = Array.from(r).indexOf(n);
        O(a - 1);
      }
    }, z = () => {
      if (d.value) {
        const s = d.value, r = s.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), n = s.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), a = Array.from(r).indexOf(n);
        O(a + 1);
      }
    };
    return ae(() => {
      D.subscribeRequestMessage(h, P);
    }), ne(() => {
      D.unsubscribeRequestMessage(h, P);
    }), de(
      // eslint-disable-next-line no-return-assign
      () => p.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (s, r) => (i(), v("div", M({
      id: e.id,
      ref_key: "tabContainer",
      ref: d,
      class: k.value
    }, T.value, {
      onKeydown: [
        S(K, ["left"]),
        S(K, ["up"]),
        S(z, ["right"]),
        S(z, ["down"]),
        r[0] || (r[0] = S((n) => O(0), ["home"])),
        S(N, ["end"])
      ]
    }), [
      _.value ? x("", !0) : (i(), v("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: C(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (i(!0), v(V, null, U(e.cqItemsOrder, (n, a) => (i(), v("li", {
          id: `${e.cqItems[n].id}-tab`,
          key: `tab-${a}`,
          "aria-controls": `${e.cqItems[n].id}-tabpanel`,
          "aria-selected": a === p.value ? !0 : void 0,
          class: C([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: a === p.value
            }
          ]),
          tabIndex: a === p.value ? 0 : -1,
          role: "tab",
          onClick: (u) => j(a)
        }, R(e.cqItems[n]["cq:panelTitle"]), 11, Ge))), 128))
      ], 10, ze)),
      _.value ? x("", !0) : (i(!0), v(V, { key: 1 }, U(w.value, (n, a) => (i(), v("div", {
        id: `${e.cqItems[e.cqItemsOrder[a]].id}-tabpanel`,
        key: `tab-content-${a}`,
        "aria-hidden": a === p.value ? void 0 : !0,
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[a]].id}-tab`,
        class: C([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: a === p.value
          }
        ]),
        role: "tabpanel",
        tabindex: "0"
      }, [
        (i(), q(B(n), L(le({ isInEditor: !1 })), null, 16))
      ], 10, Ve))), 128)),
      E(o) ? (i(), q(E(te), L(M({ key: 2 }, J.value)), null, 16)) : x("", !0)
    ], 16, je));
  }
});
export {
  Je as AccordionEditConfig,
  Qe as CarouselEditConfig,
  We as ContainerEditConfig,
  Ye as ContentFragmentEditConfig,
  at as CoreAccordion,
  nt as CoreCarousel,
  Ae as CoreContainer,
  st as CoreContentFragment,
  lt as CoreExperienceFragment,
  it as CoreTabs,
  we as DefaultContentFragment,
  Ze as ExperienceFragmentEditConfig,
  tt as MapToContentFragmentModel,
  D as SpaUtils,
  et as TabsEditConfig,
  Oe as getRenderer,
  Ee as mapRenderer
};
