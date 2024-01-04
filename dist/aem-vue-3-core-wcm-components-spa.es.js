import { MapTo as _e, ComponentMapping as Q, componentProperties as H, componentClassNames as W, AllowedComponentsContainer as ye, ResponsiveGrid as ve, Container as fe, Utils as ee, ContainerPlaceholder as ae } from "aem-vue-3-editable-components";
import { defineComponent as K, useAttrs as te, inject as F, computed as b, openBlock as l, createBlock as q, unref as I, normalizeProps as R, mergeProps as M, resolveDynamicComponent as B, normalizeClass as u, normalizeStyle as he, withCtx as ce, createElementBlock as C, createElementVNode as P, toDisplayString as D, createCommentVNode as A, Fragment as z, renderList as G, ref as k, watch as se, onMounted as ne, onUnmounted as le, h as _, watchEffect as de, guardReactiveProps as ue, withKeys as U } from "vue";
import { AuthoringUtils as Y } from "@adobe/aem-spa-page-model-manager";
const Ue = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, He = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Xe = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Je = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return t.elementsOrder.length === 0 && t.cqItemsOrder.length === 0;
  }
}, Qe = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, We = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, ge = "ContentFragment-", me = (t) => ge + t, Ie = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((m) => {
    _e(me(m))(e);
  });
}, qe = (t) => {
  const e = me(t);
  return Q.get(e);
}, Ye = (t) => (e) => Ie(t, e), $e = /* @__PURE__ */ K({
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
    ...H("cmp-container")
  },
  setup(t) {
    const e = t, i = te(), m = typeof e.isInEditor < "u" ? e.isInEditor : F("isInEditor", Y.isInEditor()), g = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        m,
        e.aemNoDecoration
      )
    ), d = b(
      () => {
        var h;
        return m && (i == null ? void 0 : i.allowedComponents) && ((h = i == null ? void 0 : i.allowedComponents) == null ? void 0 : h.applicable);
      }
    );
    return (h, f) => d.value ? (l(), q(I(ye), R(M({ key: 0 }, { ...e, ...I(i) })), null, 16)) : (l(), q(B(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: u(g.value),
      role: e.roleAttribute,
      style: he(e.backgroundStyle)
    }, {
      default: ce(() => [
        t.layout === "RESPONSIVE_GRID" ? (l(), q(I(ve), R(M({ key: 0 }, {
          ...e,
          ...I(i),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (l(), q(I(fe), R(M({ key: 1 }, { ...e, ...I(i) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), Ee = ["id"], Oe = ["innerHTML"], we = /* @__PURE__ */ K({
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
    ...H("cmp-contentfragment")
  },
  setup(t) {
    const e = t, i = typeof e.isInEditor < "u" ? e.isInEditor : F("isInEditor", Y.isInEditor()), m = F("componentMapping", new Q()), g = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        i,
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
        m
      )
    );
    return (h, f) => {
      var S;
      return l(), C("div", {
        id: e.id,
        class: u(g.value)
      }, [
        P("h3", {
          class: u(`${e.baseCssClass}__title`)
        }, D(e.title), 3),
        e.description ? (l(), C("p", {
          key: 0,
          class: u(`${e.baseCssClass}__description`)
        }, D(e.description), 3)) : A("", !0),
        (S = e.elementsOrder) != null && S.length ? (l(), C("div", {
          key: 1,
          class: u(`${e.baseCssClass}__elements`)
        }, [
          (l(!0), C(z, null, G(e.elementsOrder, (p, T) => (l(), C("div", {
            key: `${e.id}-element-${p}-${T}`,
            class: u(`${e.baseCssClass}__element`)
          }, [
            P("div", {
              class: u([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              P("h4", null, D(p), 1)
            ], 2),
            P("div", {
              class: u([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[p].value}`
            }, null, 10, Oe),
            P("div", {
              class: u([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + D(e.elements[p].dataType), 3),
            P("div", {
              class: u([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + D(e.elements[p].multiValue ? "true" : "false"), 3),
            P("div", {
              class: u([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + D(e.elements[p][":type"]), 3)
          ], 2))), 128))
        ], 2)) : A("", !0),
        (l(!0), C(z, null, G(d.value, (p) => (l(), q(B(p), {
          key: p.toString()
        }))), 128))
      ], 10, Ee);
    };
  }
}), Ze = /* @__PURE__ */ K({
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
    ...H("cmp-contentfragment")
  },
  setup(t) {
    const e = t, i = te(), m = b(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), g = b(() => {
      const d = qe(e.model);
      return d || we;
    });
    return (d, h) => m.value ? A("", !0) : (l(), q(B(g.value), R(M({ key: 0 }, { ...e, ...I(i) })), null, 16));
  }
}), L = {
  createCallbackListener(t, e) {
    return (i, m = t) => {
      i.data && i.data.id === m && i.data.operation === "navigate" && (e.value = i.data.index);
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
}, Pe = ["id", "data-cmp-single-expansion"], Ae = ["id", "data-cmp-expanded"], Se = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], xe = /* @__PURE__ */ P("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ P("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), ke = [
  xe
], Le = ["id", "aria-labelledby"], et = /* @__PURE__ */ K({
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
    ...H("cmp-accordion")
  },
  setup(t) {
    const e = t, i = te(), m = F("isInEditor", Y.isInEditor()), g = F("componentMapping", new Q()), d = k(L.initMessageChannel()), h = k(-1), f = k(e.expandedItems), S = k(null), p = b(() => (i == null ? void 0 : i.singleExpansion) === !0), T = b(() => {
      const s = {};
      return m && (s["data-panelcontainer"] = "accordion", s["data-cq-data-path"] = e.cqPath || "", s["data-placeholder-text"] = "Please drag Accordion item components here"), s;
    }), X = b(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        g
      )
    ), x = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        m,
        e.aemNoDecoration
      )
    ), O = (s) => {
      const a = S.value.querySelector(
        `button[data-cmp-button-id="${s}"]`
      );
      a && a.focus();
    }, j = (s, a) => {
      const n = f.value.indexOf(s) > -1;
      if (p.value)
        f.value = n ? [] : [s];
      else if (n) {
        const w = f.value.indexOf(s);
        f.value.splice(w, 1);
      } else
        f.value.push(s);
      a.target.focus();
    }, V = (s, a, n) => {
      const w = S.value.querySelectorAll("button").length - 1;
      switch (a.code) {
        case "ArrowLeft":
        case "ArrowUp":
          a.preventDefault(), n > 0 && O(n - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          a.preventDefault(), n < w && O(n + 1);
          break;
        case "Home":
          a.preventDefault(), O(0);
          break;
        case "End":
          a.preventDefault(), O(w);
          break;
        case "Enter":
        case "Space":
          a.preventDefault(), j(s, a), O(n);
          break;
      }
    }, N = (s) => f.value.indexOf(s) > -1, c = b(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    se(p, async (s, a) => {
      s !== a && (f.value = e.expandedItems);
    }), se(e.expandedItems, async (s, a) => {
      s !== a && (f.value = s);
    }), se(h, async (s, a) => {
      s !== -1 && typeof s < "u" && s !== a && e.cqItemsOrder && (f.value = [e.cqItemsOrder[s]]);
    });
    const v = L.createCallbackListener(
      e.cqPath,
      h
    );
    return ne(() => {
      L.subscribeRequestMessage(d.value, v);
    }), le(() => {
      L.unsubscribeRequestMessage(d.value, v);
    }), (s, a) => (l(), C("div", M({
      id: e.id,
      ref_key: "accordion",
      ref: S,
      class: x.value,
      "data-cmp-single-expansion": p.value === !0 ? !0 : void 0
    }, T.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (l(!0), C(z, { key: 0 }, G(e.cqItemsOrder, (n, w) => (l(), C("div", {
        id: `accordion-${e.cqItems[n].id}`,
        key: `accordion-index-${w}`,
        class: u(`${e.baseCssClass}__item`),
        "data-cmp-expanded": N(n) ? !0 : void 0
      }, [
        (l(), q(B(e.headingElement), {
          class: u(`${e.baseCssClass}__heading`)
        }, {
          default: ce(() => [
            P("button", {
              id: `accordion-${e.cqItems[n].id}-button`,
              "aria-controls": `accordion-${e.cqItems[n].id}-panel`,
              class: u([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: N(n)
                }
              ]),
              "data-cmp-button-id": w,
              onClick: (J) => j(n, J),
              onKeydown: (J) => V(n, J, w)
            }, [
              P("span", {
                class: u(`${e.baseCssClass}__title`)
              }, D(e.cqItems[n]["cq:panelTitle"]), 3),
              P("span", {
                class: u(`${e.baseCssClass}__icon`)
              }, ke, 2)
            ], 42, Se)
          ]),
          _: 2
        }, 1032, ["class"])),
        I(m) || N(n) ? (l(), C("div", {
          key: 0,
          id: `accordion-${e.cqItems[n].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[n].id}-button`,
          class: u(`${e.baseCssClass}__panel ${N(n) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (l(), q(B(X.value[t.cqItemsOrder.indexOf(n)]), { key: 0 })) : A("", !0)
        ], 10, Le)) : A("", !0)
      ], 10, Ae))), 128)) : A("", !0),
      I(m) ? (l(), q(I(ae), R(M({ key: 1 }, c.value)), null, 16)) : A("", !0)
    ], 16, Pe));
  }
}), Me = ["id"], Ne = ["aria-live"], De = ["id", "aria-hidden", "aria-label", "aria-labelledby"], Re = ["aria-label"], Be = ["id", "aria-controls", "aria-label", "aria-selected", "onClick"], tt = /* @__PURE__ */ K({
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
    ...H("cmp-carousel")
  },
  setup(t) {
    const e = t, i = te(), m = typeof e.isInEditor < "u" ? e.isInEditor : F("isInEditor", Y.isInEditor()), g = F("componentMapping", new Q()), d = k(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), h = k(null), f = k(-1), S = L.initMessageChannel(), p = k((i == null ? void 0 : i.autoplay) === !0 && !m), T = b(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        g
      )
    ), X = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        m,
        e.aemNoDecoration
      )
    ), x = b(() => {
      const r = {
        "aria-label": e.accessibilityLabel,
        "aria-live": "polite",
        "aria-roledescription": "carousel",
        class: "aem-container",
        "data-panelcontainer": "carousel",
        role: "group"
      };
      return m && (r["data-cq-data-path"] = e.cqPath), r;
    }), O = (r) => {
      if (h.value) {
        const y = h.value, $ = y.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), E = y.querySelectorAll(
          `.${e.baseCssClass}__indicator`
        );
        r < 0 && (r = $.length - 1), r >= $.length && (r = 0), $.length && $.forEach((o, Z) => {
          Z === r ? (o.classList.add(`${e.baseCssClass}__item--active`), o.removeAttribute("aria-hidden")) : (o.classList.remove(
            `${e.baseCssClass}__item--active`
          ), o.setAttribute("aria-hidden", "true"));
        }), E.length && E.forEach((o, Z) => {
          Z === r ? (o.classList.add(
            `${e.baseCssClass}__indicator--active`
          ), o.setAttribute("aria-selected", "true"), o.setAttribute("tabindex", "0")) : (o.classList.remove(
            `${e.baseCssClass}__indicator--active`
          ), o.removeAttribute("aria-selected"), o.setAttribute("tabindex", "-1"));
        });
      }
    }, j = () => {
      let r = 0;
      if (h.value) {
        const y = h.value, $ = y.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), E = y.querySelector(
          `.${e.baseCssClass}__item--active`
        );
        r = Array.from($).indexOf(E);
      }
      return r;
    }, V = () => {
      const r = j();
      O(r + 1);
    }, N = () => {
      const r = j();
      O(r - 1);
    }, c = (r) => {
      p.value = r;
    }, v = b(() => {
      const r = _(
        "button",
        {
          "aria-label": e.accessibilityPrevious,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--previous`
          ],
          type: "button",
          onClick: () => {
            N();
          }
        },
        [
          _("span", { class: `${e.baseCssClass}__action-icon` }, [
            _(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              _("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
            )
          ]),
          _("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPrevious
          ])
        ]
      ), y = _(
        "button",
        {
          "aria-label": e.accessibilityNext,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--next`
          ],
          type: "button",
          onClick: () => {
            V();
          }
        },
        [
          _("span", { class: `${e.baseCssClass}__action-icon` }, [
            _(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              _("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
            )
          ]),
          _("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityNext
          ])
        ]
      ), $ = _(
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
            c(!1);
          }
        },
        [
          _("span", { class: `${e.baseCssClass}__action-icon` }, [
            _(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              [_("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })]
            )
          ]),
          _("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPause
          ])
        ]
      ), E = _(
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
            c(!0);
          }
        },
        [
          _("span", { class: `${e.baseCssClass}__action-icon` }, [
            _(
              "svg",
              {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              },
              [_("path", { d: "M8 5v14l11-7z" })]
            )
          ]),
          _("span", { class: `${e.baseCssClass}__action-text` }, [
            e.accessibilityPlay
          ])
        ]
      ), o = [r, y];
      return (i == null ? void 0 : i.autoplay) === !0 && (o.push($), o.push(E)), _("div", { class: `${e.baseCssClass}__actions` }, o);
    }), s = b(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), a = b(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), n = (r) => {
      var E;
      let y = ((E = e.accessibility) == null ? void 0 : E.indicator) || "";
      const $ = "{0}";
      return y = y.replace($, (r + 1).toString()), y;
    }, w = (r) => {
      var o;
      let y = ((o = e.accessibility) == null ? void 0 : o.slide) || "";
      const $ = "{0}";
      y = y.replace($, (r + 1).toString());
      const E = "{1}";
      return y = y.replace(
        E,
        e.cqItemsOrder.length.toString()
      ), y;
    }, J = () => {
      if (!p.value || e.cqItemsOrder.length <= 1)
        return;
      const r = j();
      O(r + 1);
    }, ie = () => {
      f.value = setInterval(() => {
        J();
      }, e.delay);
    }, re = () => {
      clearInterval(f.value);
    }, pe = (r) => {
      O(r);
    }, be = () => {
      !e.autopauseDisabled && p.value && re();
    }, Ce = () => {
      !e.autopauseDisabled && p.value && ie();
    }, oe = (r, y = e.cqPath) => {
      r.data && r.data.id === y && r.data.operation === "navigate" && O(r.data.index);
    };
    return ne(() => {
      ie(), L.subscribeRequestMessage(S, oe);
    }), le(() => {
      typeof f.value == "number" && f.value >= 0 && re(), L.unsubscribeRequestMessage(S, oe);
    }), de(
      // eslint-disable-next-line no-return-assign
      () => d.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (r, y) => {
      var $;
      return l(), C("div", M({
        id: e.id,
        ref_key: "carouselContainer",
        ref: h,
        class: X.value
      }, x.value), [
        e.controlsPrepended ? (l(), q(B(v.value), { key: 0 })) : A("", !0),
        s.value ? A("", !0) : (l(), C("div", {
          key: 1,
          "aria-live": (($ = I(i)) == null ? void 0 : $.autoplay) === !0 ? "off" : "polite",
          class: u(`${e.baseCssClass}__content`),
          "aria-atomic": "false",
          onMouseenter: be,
          onMouseleave: Ce
        }, [
          P("div", {
            class: u([{ [`${e.baseCssClass}__items`]: !I(m) }])
          }, [
            (l(!0), C(z, null, G(T.value, (E, o) => (l(), C("div", {
              id: `${e.cqItems[e.cqItemsOrder[o]].id}-tabpanel`,
              key: `item-${o}`,
              "aria-hidden": o === d.value ? void 0 : !0,
              "aria-label": w(o),
              "aria-labelledby": `${e.cqItems[e.cqItemsOrder[o]].id}-tab`,
              class: u([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: o === d.value
                }
              ]),
              "aria-roledescription": "slide",
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (l(), q(B(E), R(ue({ isInEditor: !1 })), null, 16))
            ], 10, De))), 128))
          ], 2),
          e.controlsPrepended ? A("", !0) : (l(), q(B(v.value), { key: 0 })),
          P("ol", {
            "aria-label": e.accessibilityTablist,
            class: u(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (l(!0), C(z, null, G(e.cqItemsOrder, (E, o) => (l(), C("li", {
              id: `${e.cqItems[e.cqItemsOrder[o]].id}-tab`,
              key: `item-${o}`,
              "aria-controls": `${e.cqItems[e.cqItemsOrder[o]].id}-tabpanel`,
              "aria-label": n(o),
              "aria-selected": o === d.value ? !0 : void 0,
              class: u([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: o === d.value
                }
              ]),
              role: "tab",
              onClick: (Z) => pe(o)
            }, D(e.cqItems[E]["cq:panelTitle"]), 11, Be))), 128))
          ], 10, Re)
        ], 42, Ne)),
        I(m) ? (l(), q(I(ae), R(M({ key: 2 }, a.value)), null, 16)) : A("", !0)
      ], 16, Me);
    };
  }
}), st = /* @__PURE__ */ K({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, i) => (l(), q($e, { "is-in-editor": !1 }));
  }
}), Fe = ["id", "onKeydown"], je = ["aria-label"], Te = ["id", "aria-controls", "aria-selected", "tabIndex", "onClick"], ze = ["id", "aria-hidden", "aria-labelledby"], at = /* @__PURE__ */ K({
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
    ...H("cmp-tabs")
  },
  setup(t) {
    const e = t, i = typeof e.isInEditor < "u" ? e.isInEditor : F("isInEditor", Y.isInEditor()), m = F("componentMapping", new Q()), g = k(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), d = k(null), h = L.initMessageChannel(), f = b(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        m
      )
    ), S = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        i,
        e.aemNoDecoration
      )
    ), p = b(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), T = b(() => {
      const c = {
        class: "aem-container",
        "data-panelcontainer": "tabs"
      };
      return i && (c["data-cq-data-path"] = e.cqPath), c;
    }), X = b(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), x = (c) => {
      if (d.value) {
        const v = d.value, s = v.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), a = v.querySelectorAll(
          `.${e.baseCssClass}__tabpanel`
        );
        c < 0 && (c = s.length - 1), c >= s.length && (c = 0), s.length && s.forEach((n, w) => {
          w === c ? (n.classList.add(`${e.baseCssClass}__tab--active`), n.setAttribute("aria-selected", "true"), n.setAttribute("tabindex", "0")) : (n.classList.remove(`${e.baseCssClass}__tab--active`), n.removeAttribute("aria-selected"), n.setAttribute("tabindex", "-1"));
        }), a.length && a.forEach((n, w) => {
          w === c ? (n.classList.add(
            `${e.baseCssClass}__tabpanel--active`
          ), n.removeAttribute("aria-hidden"), n.focus()) : (n.classList.remove(
            `${e.baseCssClass}__tabpanel--active`
          ), n.setAttribute("aria-hidden", "true"));
        });
      }
    }, O = (c, v = e.cqPath) => {
      c.data && c.data.id === v && c.data.operation === "navigate" && x(c.data.index);
    }, j = () => {
      if (d.value) {
        const v = d.value.querySelectorAll(
          `.${e.baseCssClass}__tab`
        );
        x(v.length - 1);
      }
    }, V = () => {
      if (d.value) {
        const c = d.value, v = c.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), s = c.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), a = Array.from(v).indexOf(s);
        x(a - 1);
      }
    }, N = () => {
      if (d.value) {
        const c = d.value, v = c.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), s = c.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), a = Array.from(v).indexOf(s);
        x(a + 1);
      }
    };
    return ne(() => {
      L.subscribeRequestMessage(h, O);
    }), le(() => {
      L.unsubscribeRequestMessage(h, O);
    }), de(
      // eslint-disable-next-line no-return-assign
      () => g.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (c, v) => (l(), C("div", M({
      id: e.id,
      ref_key: "tabContainer",
      ref: d,
      class: S.value
    }, T.value, {
      onKeydown: [
        U(V, ["left"]),
        U(V, ["up"]),
        U(N, ["right"]),
        U(N, ["down"]),
        v[0] || (v[0] = U((s) => x(0), ["home"])),
        U(j, ["end"])
      ]
    }), [
      p.value ? A("", !0) : (l(), C("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: u(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (l(!0), C(z, null, G(e.cqItemsOrder, (s, a) => (l(), C("li", {
          id: `${e.cqItems[s].id}-tab`,
          key: `tab-${a}`,
          "aria-controls": `${e.cqItems[s].id}-tabpanel`,
          "aria-selected": a === g.value ? !0 : void 0,
          class: u([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: a === g.value
            }
          ]),
          tabIndex: a === g.value ? 0 : -1,
          role: "tab",
          onClick: (n) => x(a)
        }, D(e.cqItems[s]["cq:panelTitle"]), 11, Te))), 128))
      ], 10, je)),
      p.value ? A("", !0) : (l(!0), C(z, { key: 1 }, G(f.value, (s, a) => (l(), C("div", {
        id: `${e.cqItems[e.cqItemsOrder[a]].id}-tabpanel`,
        key: `tab-content-${a}`,
        "aria-hidden": a === g.value ? void 0 : !0,
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[a]].id}-tab`,
        class: u([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: a === g.value
          }
        ]),
        role: "tabpanel",
        tabindex: "0"
      }, [
        (l(), q(B(s), R(ue({ isInEditor: !1 })), null, 16))
      ], 10, ze))), 128)),
      I(i) ? (l(), q(I(ae), R(M({ key: 2 }, X.value)), null, 16)) : A("", !0)
    ], 16, Fe));
  }
});
export {
  Ue as AccordionEditConfig,
  He as CarouselEditConfig,
  Xe as ContainerEditConfig,
  Je as ContentFragmentEditConfig,
  et as CoreAccordion,
  tt as CoreCarousel,
  $e as CoreContainer,
  Ze as CoreContentFragment,
  st as CoreExperienceFragment,
  at as CoreTabs,
  we as DefaultContentFragment,
  Qe as ExperienceFragmentEditConfig,
  Ye as MapToContentFragmentModel,
  L as SpaUtils,
  We as TabsEditConfig,
  qe as getRenderer,
  Ie as mapRenderer
};
