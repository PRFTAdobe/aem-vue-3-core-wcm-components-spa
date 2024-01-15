import { MapTo as he, ComponentMapping as ee, componentProperties as Y, componentClassNames as te, AllowedComponentsContainer as ge, ResponsiveGrid as Ie, Container as $e, Utils as ne, ContainerPlaceholder as le } from "aem-vue-3-editable-components";
import { defineComponent as W, useAttrs as ie, inject as T, computed as y, openBlock as n, createBlock as w, unref as x, normalizeProps as N, mergeProps as R, resolveDynamicComponent as F, normalizeClass as p, normalizeStyle as qe, withCtx as be, createElementBlock as h, createElementVNode as P, toDisplayString as K, createCommentVNode as M, Fragment as J, renderList as Q, ref as X, onMounted as oe, onUnmounted as re, withKeys as $, withModifiers as Ce, guardReactiveProps as ce, h as f, watchEffect as pe } from "vue";
import { AuthoringUtils as se } from "@adobe/aem-spa-page-model-manager";
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
}, Ee = "ContentFragment-", _e = (t) => Ee + t, Oe = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((q) => {
    he(_e(q))(e);
  });
}, Ae = (t) => {
  const e = _e(t);
  return ee.get(e);
}, st = (t) => (e) => Oe(t, e), Se = /* @__PURE__ */ W({
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
    ...Y("cmp-container")
  },
  setup(t) {
    const e = t, o = ie(), q = typeof e.isInEditor < "u" ? e.isInEditor : T("isInEditor", se.isInEditor()), r = y(
      () => te(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        q,
        e.aemNoDecoration
      )
    ), d = y(
      () => {
        var g;
        return q && (o == null ? void 0 : o.allowedComponents) && ((g = o == null ? void 0 : o.allowedComponents) == null ? void 0 : g.applicable);
      }
    );
    return (g, k) => d.value ? (n(), w(x(ge), N(R({ key: 0 }, { ...e, ...x(o) })), null, 16)) : (n(), w(F(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: p(r.value),
      role: e.roleAttribute,
      style: qe(e.backgroundStyle)
    }, {
      default: be(() => [
        t.layout === "RESPONSIVE_GRID" ? (n(), w(x(Ie), N(R({ key: 0 }, {
          ...e,
          ...x(o),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (n(), w(x($e), N(R({ key: 1 }, { ...e, ...x(o) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), we = ["id"], Pe = ["innerHTML"], xe = /* @__PURE__ */ W({
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
    ...Y("cmp-contentfragment")
  },
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : T("isInEditor", se.isInEditor()), q = T("componentMapping", new ee()), r = y(
      () => te(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), d = y(
      () => ne.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        q
      )
    );
    return (g, k) => {
      var D;
      return n(), h("div", {
        id: e.id,
        class: p(r.value)
      }, [
        P("h3", {
          class: p(`${e.baseCssClass}__title`)
        }, K(e.title), 3),
        e.description ? (n(), h("p", {
          key: 0,
          class: p(`${e.baseCssClass}__description`)
        }, K(e.description), 3)) : M("", !0),
        (D = e.elementsOrder) != null && D.length ? (n(), h("div", {
          key: 1,
          class: p(`${e.baseCssClass}__elements`)
        }, [
          (n(!0), h(J, null, Q(e.elementsOrder, (v, G) => (n(), h("div", {
            key: `${e.id}-element-${v}-${G}`,
            class: p(`${e.baseCssClass}__element`)
          }, [
            P("div", {
              class: p([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              P("h4", null, K(v), 1)
            ], 2),
            P("div", {
              class: p([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[v].value}`
            }, null, 10, Pe),
            P("div", {
              class: p([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + K(e.elements[v].dataType), 3),
            P("div", {
              class: p([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + K(e.elements[v].multiValue ? "true" : "false"), 3),
            P("div", {
              class: p([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + K(e.elements[v][":type"]), 3)
          ], 2))), 128))
        ], 2)) : M("", !0),
        (n(!0), h(J, null, Q(d.value, (v) => (n(), w(F(v), {
          key: v.toString()
        }))), 128))
      ], 10, we);
    };
  }
}), at = /* @__PURE__ */ W({
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
    ...Y("cmp-contentfragment")
  },
  setup(t) {
    const e = t, o = ie(), q = y(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), r = y(() => {
      const d = Ae(e.model);
      return d || xe;
    });
    return (d, g) => q.value ? M("", !0) : (n(), w(F(r.value), N(R({ key: 0 }, { ...e, ...x(o) })), null, 16));
  }
}), j = {
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
}, Le = ["id"], Me = ["id", "data-cmp-expanded"], ke = ["id", "aria-controls", "aria-expanded", "onClick", "onKeydown"], Ne = /* @__PURE__ */ P("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ P("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), Re = [
  Ne
], De = ["id", "aria-hidden", "aria-labelledby"], nt = /* @__PURE__ */ W({
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
    ...Y("cmp-accordion")
  },
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : T("isInEditor", se.isInEditor()), q = T("componentMapping", new ee()), r = X(null), d = j.initMessageChannel(), g = y(
      () => ne.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        q
      )
    ), k = y(
      () => te(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), D = y(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), v = y(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), G = y(() => {
      const s = {
        class: "aem-container",
        "data-panelcontainer": "accordion"
      };
      return o && (s["data-cq-data-path"] = e.cqPath), s;
    }), Z = () => {
      let s = [];
      if (r.value) {
        const m = r.value.querySelectorAll(
          `.${e.baseCssClass}__item[data-cmp-expanded]`
        );
        s = Array.from(m);
      }
      return s;
    }, V = (s) => {
      if (r.value) {
        const u = r.value, m = u.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), i = Array.from(m).indexOf(s);
        if (i > -1) {
          const O = u.querySelectorAll(
            `.${e.baseCssClass}__button`
          );
          O[i].classList.add(
            `${e.baseCssClass}__button--expanded`
          ), O[i].setAttribute("aria-expanded", "true");
          const B = u.querySelectorAll(
            `.${e.baseCssClass}__panel`
          );
          B[i].classList.add(
            `${e.baseCssClass}__panel--expanded`
          ), B[i].classList.remove(
            `${e.baseCssClass}__panel--hidden`
          ), B[i].setAttribute("aria-hidden", "false");
        }
      }
    }, L = (s) => {
      if (r.value) {
        const u = r.value, m = u.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), i = Array.from(m).indexOf(s);
        if (i > -1) {
          const O = u.querySelectorAll(
            `.${e.baseCssClass}__button`
          );
          O[i].classList.remove(
            `${e.baseCssClass}__button--expanded`
          ), O[i].removeAttribute("aria-expanded");
          const B = u.querySelectorAll(
            `.${e.baseCssClass}__panel`
          );
          B[i].classList.remove(
            `${e.baseCssClass}__panel--expanded`
          ), B[i].classList.add(
            `${e.baseCssClass}__panel--hidden`
          ), B[i].setAttribute("aria-hidden", "true");
        }
      }
    }, E = (s) => {
      r.value && r.value.querySelectorAll(
        `.${e.baseCssClass}__button`
      )[s].focus();
    }, z = () => {
      if (r.value) {
        const u = r.value.querySelectorAll(
          `.${e.baseCssClass}__button`
        );
        E(u.length - 1);
      }
    }, U = (s) => {
      s > 0 && E(s - 1);
    }, H = (s) => {
      if (r.value) {
        const m = r.value.querySelectorAll(
          `.${e.baseCssClass}__button`
        );
        s < m.length - 1 && E(s + 1);
      }
    }, c = (s) => {
      s.hasAttribute("data-cmp-expanded") ? V(s) : L(s);
    }, I = (s, u) => {
      u ? s.setAttribute("data-cmp-expanded", "") : s.removeAttribute("data-cmp-expanded"), c(s);
    }, C = (s) => {
      if (r.value) {
        const m = r.value.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), i = m[s];
        i && (e.singleExpansion === !0 && m.forEach((O) => {
          O !== i && O.hasAttribute("data-cmp-expanded") && I(O, !1);
        }), I(
          i,
          !i.hasAttribute("data-cmp-expanded")
        ));
      }
    }, _ = (s, u = e.cqPath) => {
      s.data && s.data.id === u && s.data.operation === "navigate" && C(s.data.index);
    };
    return oe(() => {
      if (e.singleExpansion === !0) {
        const s = Z();
        s.length > 1 && C(s.length - 1);
      }
      j.subscribeRequestMessage(d, _);
    }), re(() => {
      j.unsubscribeRequestMessage(d, _);
    }), (s, u) => (n(), h("div", R({
      id: e.id,
      ref_key: "accordionContainer",
      ref: r,
      class: k.value
    }, G.value), [
      D.value ? M("", !0) : (n(!0), h(J, { key: 0 }, Q(e.cqItemsOrder, (m, i) => (n(), h("div", {
        id: `accordion-${e.cqItems[m].id}`,
        key: `accordion-index-${i}`,
        class: p(`${e.baseCssClass}__item`),
        "data-cmp-expanded": e.expandedItems.includes(m) ? !0 : void 0,
        "data-cmp-hook-accordion": "item"
      }, [
        (n(), w(F(e.headingElement), {
          class: p(`${e.baseCssClass}__heading`)
        }, {
          default: be(() => [
            P("button", {
              id: `accordion-${e.cqItems[m].id}-button`,
              "aria-controls": `accordion-${e.cqItems[m].id}-panel`,
              "aria-expanded": e.expandedItems.includes(m) ? "true" : void 0,
              class: p([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: e.expandedItems.includes(m)
                }
              ]),
              "data-cmp-hook-accordion": "button",
              type: "button",
              onClick: () => {
                C(i), E(i);
              },
              onKeydown: [
                $((O) => U(i), ["left"]),
                $((O) => U(i), ["up"]),
                $((O) => H(i), ["right"]),
                $((O) => H(i), ["down"]),
                u[0] || (u[0] = $((O) => E(0), ["home"])),
                $(z, ["end"]),
                $(Ce(
                  () => {
                    C(i), E(i);
                  },
                  ["prevent"]
                ), ["enter"]),
                $(Ce(
                  () => {
                    C(i), E(i);
                  },
                  ["prevent"]
                ), ["space"])
              ]
            }, [
              P("span", {
                class: p(`${e.baseCssClass}__title`)
              }, K(e.cqItems[m]["cq:panelTitle"]), 3),
              P("span", {
                class: p(`${e.baseCssClass}__icon`)
              }, Re, 2)
            ], 42, ke)
          ]),
          _: 2
        }, 1032, ["class"])),
        P("div", {
          id: `accordion-${e.cqItems[m].id}-panel`,
          "aria-hidden": e.expandedItems.includes(m) ? void 0 : "true",
          "aria-labelledby": `accordion-${e.cqItems[m].id}-button`,
          class: p([
            `${e.baseCssClass}__panel`,
            {
              [`${e.baseCssClass}__panel--expanded`]: e.expandedItems.includes(m)
            },
            {
              [`${e.baseCssClass}__panel--hidden`]: !e.expandedItems.includes(m)
            }
          ]),
          "data-cmp-hook-accordion": "panel",
          role: "region"
        }, [
          (n(), w(F(g.value[t.cqItemsOrder.indexOf(m)]), N(ce({ isInEditor: !1 })), null, 16))
        ], 10, De)
      ], 10, Me))), 128)),
      t.isInEditor ? (n(), w(x(le), N(R({ key: 1 }, v.value)), null, 16)) : M("", !0)
    ], 16, Le));
  }
}), Be = ["id"], Ke = ["aria-live", "onKeydown"], Fe = ["id", "aria-hidden", "aria-label", "aria-labelledby"], je = ["aria-label"], Te = ["id", "aria-controls", "aria-label", "aria-selected", "onClick"], lt = /* @__PURE__ */ W({
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
    ...Y("cmp-carousel")
  },
  setup(t) {
    const e = t, o = ie(), q = typeof e.isInEditor < "u" ? e.isInEditor : T("isInEditor", se.isInEditor()), r = T("componentMapping", new ee()), d = X(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), g = X(null), k = X(-1), D = j.initMessageChannel(), v = X((o == null ? void 0 : o.autoplay) === !0 && !q), G = y(
      () => ne.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        r
      )
    ), Z = y(
      () => te(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        q,
        e.aemNoDecoration
      )
    ), V = y(() => {
      const a = {
        "aria-label": e.accessibilityLabel,
        "aria-live": "polite",
        "aria-roledescription": "carousel",
        class: "aem-container",
        "data-panelcontainer": "carousel",
        role: "group"
      };
      return q && (a["data-cq-data-path"] = e.cqPath), a;
    }), L = (a) => {
      if (g.value) {
        const b = g.value, A = b.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), S = b.querySelectorAll(
          `.${e.baseCssClass}__indicator`
        );
        a < 0 && (a = A.length - 1), a >= A.length && (a = 0), A.length && A.forEach((l, ae) => {
          ae === a ? (l.classList.add(`${e.baseCssClass}__item--active`), l.removeAttribute("aria-hidden")) : (l.classList.remove(
            `${e.baseCssClass}__item--active`
          ), l.setAttribute("aria-hidden", "true"));
        }), S.length && S.forEach((l, ae) => {
          ae === a ? (l.classList.add(
            `${e.baseCssClass}__indicator--active`
          ), l.setAttribute("aria-selected", "true"), l.setAttribute("tabindex", "0")) : (l.classList.remove(
            `${e.baseCssClass}__indicator--active`
          ), l.removeAttribute("aria-selected"), l.setAttribute("tabindex", "-1"));
        });
      }
    }, E = () => {
      let a = 0;
      if (g.value) {
        const b = g.value, A = b.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), S = b.querySelector(
          `.${e.baseCssClass}__item--active`
        );
        a = Array.from(A).indexOf(S);
      }
      return a;
    }, z = (a) => {
      L(a), g.value && g.value.querySelectorAll(
        `.${e.baseCssClass}__item`
      )[a].focus();
    }, U = () => {
      const a = E();
      L(a + 1);
    }, H = () => {
      const a = E();
      L(a - 1);
    }, c = () => {
      if (!v.value || e.cqItemsOrder.length <= 1)
        return;
      const a = E();
      L(a + 1);
    }, I = () => {
      k.value = setInterval(() => {
        c();
      }, e.delay);
    }, C = () => {
      clearInterval(k.value);
    }, _ = (a) => {
      v.value = a;
    }, s = y(() => {
      const a = f(
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
      ), b = f(
        "button",
        {
          "aria-label": e.accessibilityNext,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--next`
          ],
          type: "button",
          onClick: () => {
            U();
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
      ), A = f(
        "button",
        {
          "aria-label": e.accessibilityPause,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--pause`,
            {
              [`${e.baseCssClass}__action--disabled`]: !v.value
            }
          ],
          type: "button",
          onClick: () => {
            _(!1);
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
      ), S = f(
        "button",
        {
          "aria-label": e.accessibilityPlay,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--play`,
            {
              [`${e.baseCssClass}__action--disabled`]: v.value
            }
          ],
          type: "button",
          onClick: () => {
            _(!0);
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
      ), l = [a, b];
      return (o == null ? void 0 : o.autoplay) === !0 && (l.push(A), l.push(S)), f("div", { class: `${e.baseCssClass}__actions` }, l);
    }), u = y(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), m = y(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), i = (a) => {
      var S;
      let b = ((S = e.accessibility) == null ? void 0 : S.indicator) || "";
      const A = "{0}";
      return b = b.replace(A, (a + 1).toString()), b;
    }, O = (a) => {
      var l;
      let b = ((l = e.accessibility) == null ? void 0 : l.slide) || "";
      const A = "{0}";
      b = b.replace(A, (a + 1).toString());
      const S = "{1}";
      return b = b.replace(
        S,
        e.cqItemsOrder.length.toString()
      ), b;
    }, B = (a) => {
      L(a);
    }, ye = () => {
      !e.autopauseDisabled && v.value && C();
    }, ve = () => {
      !e.autopauseDisabled && v.value && I();
    }, fe = () => {
      if (g.value) {
        const b = g.value.querySelectorAll(
          `.${e.baseCssClass}__item`
        );
        z(b.length - 1);
      }
    }, de = () => {
      const a = E();
      z(a - 1);
    }, ue = () => {
      const a = E();
      z(a + 1);
    }, me = (a, b = e.cqPath) => {
      a.data && a.data.id === b && a.data.operation === "navigate" && L(a.data.index);
    };
    return oe(() => {
      I(), j.subscribeRequestMessage(D, me);
    }), re(() => {
      typeof k.value == "number" && k.value >= 0 && C(), j.unsubscribeRequestMessage(D, me);
    }), pe(
      // eslint-disable-next-line no-return-assign
      () => d.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (a, b) => {
      var A;
      return n(), h("div", R({
        id: e.id,
        ref_key: "carouselContainer",
        ref: g,
        class: Z.value
      }, V.value), [
        e.controlsPrepended ? (n(), w(F(s.value), { key: 0 })) : M("", !0),
        u.value ? M("", !0) : (n(), h("div", {
          key: 1,
          "aria-live": ((A = x(o)) == null ? void 0 : A.autoplay) === !0 ? "off" : "polite",
          class: p(`${e.baseCssClass}__content`),
          "aria-atomic": "false",
          onMouseenter: ye,
          onMouseleave: ve,
          onKeydown: [
            $(de, ["left"]),
            $(de, ["up"]),
            $(ue, ["right"]),
            $(ue, ["down"]),
            b[0] || (b[0] = $((S) => z(0), ["home"])),
            $(fe, ["end"])
          ]
        }, [
          P("div", {
            class: p([{ [`${e.baseCssClass}__items`]: !x(q) }])
          }, [
            (n(!0), h(J, null, Q(G.value, (S, l) => (n(), h("div", {
              id: `${e.cqItems[e.cqItemsOrder[l]].id}-tabpanel`,
              key: `item-${l}`,
              "aria-hidden": l === d.value ? void 0 : !0,
              "aria-label": O(l),
              "aria-labelledby": `${e.cqItems[e.cqItemsOrder[l]].id}-tab`,
              class: p([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: l === d.value
                }
              ]),
              "aria-roledescription": "slide",
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (n(), w(F(S), N(ce({ isInEditor: !1 })), null, 16))
            ], 10, Fe))), 128))
          ], 2),
          e.controlsPrepended ? M("", !0) : (n(), w(F(s.value), { key: 0 })),
          P("ol", {
            "aria-label": e.accessibilityTablist,
            class: p(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (n(!0), h(J, null, Q(e.cqItemsOrder, (S, l) => (n(), h("li", {
              id: `${e.cqItems[e.cqItemsOrder[l]].id}-tab`,
              key: `item-${l}`,
              "aria-controls": `${e.cqItems[e.cqItemsOrder[l]].id}-tabpanel`,
              "aria-label": i(l),
              "aria-selected": l === d.value ? !0 : void 0,
              class: p([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: l === d.value
                }
              ]),
              role: "tab",
              onClick: (ae) => B(l)
            }, K(e.cqItems[S]["cq:panelTitle"]), 11, Te))), 128))
          ], 10, je)
        ], 42, Ke)),
        x(q) ? (n(), w(x(le), N(R({ key: 2 }, m.value)), null, 16)) : M("", !0)
      ], 16, Be);
    };
  }
}), it = /* @__PURE__ */ W({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, o) => (n(), w(Se, { "is-in-editor": !1 }));
  }
}), ze = ["id", "onKeydown"], Ge = ["aria-label"], Ve = ["id", "aria-controls", "aria-selected", "tabIndex", "onClick"], Ue = ["id", "aria-hidden", "aria-labelledby"], ot = /* @__PURE__ */ W({
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
    ...Y("cmp-tabs")
  },
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : T("isInEditor", se.isInEditor()), q = T("componentMapping", new ee()), r = X(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), d = X(null), g = j.initMessageChannel(), k = y(
      () => ne.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        q
      )
    ), D = y(
      () => te(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), v = y(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), G = y(() => {
      const c = {
        class: "aem-container",
        "data-panelcontainer": "tabs"
      };
      return o && (c["data-cq-data-path"] = e.cqPath), c;
    }), Z = y(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), V = (c) => {
      if (d.value) {
        const I = d.value, C = I.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), _ = I.querySelectorAll(
          `.${e.baseCssClass}__tabpanel`
        );
        c < 0 && (c = C.length - 1), c >= C.length && (c = 0), C.length && C.forEach((s, u) => {
          u === c ? (s.classList.add(`${e.baseCssClass}__tab--active`), s.setAttribute("aria-selected", "true"), s.setAttribute("tabindex", "0")) : (s.classList.remove(`${e.baseCssClass}__tab--active`), s.removeAttribute("aria-selected"), s.setAttribute("tabindex", "-1"));
        }), _.length && _.forEach((s, u) => {
          u === c ? (s.classList.add(
            `${e.baseCssClass}__tabpanel--active`
          ), s.removeAttribute("aria-hidden")) : (s.classList.remove(
            `${e.baseCssClass}__tabpanel--active`
          ), s.setAttribute("aria-hidden", "true"));
        });
      }
    }, L = (c) => {
      V(c), d.value && d.value.querySelectorAll(
        `.${e.baseCssClass}__tabpanel`
      )[c].focus();
    }, E = (c, I = e.cqPath) => {
      c.data && c.data.id === I && c.data.operation === "navigate" && V(c.data.index);
    }, z = () => {
      if (d.value) {
        const I = d.value.querySelectorAll(
          `.${e.baseCssClass}__tab`
        );
        L(I.length - 1);
      }
    }, U = () => {
      if (d.value) {
        const c = d.value, I = c.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), C = c.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), _ = Array.from(I).indexOf(C);
        L(_ - 1);
      }
    }, H = () => {
      if (d.value) {
        const c = d.value, I = c.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), C = c.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), _ = Array.from(I).indexOf(C);
        L(_ + 1);
      }
    };
    return oe(() => {
      j.subscribeRequestMessage(g, E);
    }), re(() => {
      j.unsubscribeRequestMessage(g, E);
    }), pe(
      // eslint-disable-next-line no-return-assign
      () => r.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (c, I) => (n(), h("div", R({
      id: e.id,
      ref_key: "tabContainer",
      ref: d,
      class: D.value
    }, G.value, {
      onKeydown: [
        $(U, ["left"]),
        $(U, ["up"]),
        $(H, ["right"]),
        $(H, ["down"]),
        I[0] || (I[0] = $((C) => L(0), ["home"])),
        $(z, ["end"])
      ]
    }), [
      v.value ? M("", !0) : (n(), h("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: p(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (n(!0), h(J, null, Q(e.cqItemsOrder, (C, _) => (n(), h("li", {
          id: `${e.cqItems[C].id}-tab`,
          key: `tab-${_}`,
          "aria-controls": `${e.cqItems[C].id}-tabpanel`,
          "aria-selected": _ === r.value ? !0 : void 0,
          class: p([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: _ === r.value
            }
          ]),
          tabIndex: _ === r.value ? 0 : -1,
          role: "tab",
          onClick: (s) => V(_)
        }, K(e.cqItems[C]["cq:panelTitle"]), 11, Ve))), 128))
      ], 10, Ge)),
      v.value ? M("", !0) : (n(!0), h(J, { key: 1 }, Q(k.value, (C, _) => (n(), h("div", {
        id: `${e.cqItems[e.cqItemsOrder[_]].id}-tabpanel`,
        key: `tab-content-${_}`,
        "aria-hidden": _ === r.value ? void 0 : !0,
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[_]].id}-tab`,
        class: p([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: _ === r.value
          }
        ]),
        role: "tabpanel",
        tabindex: "0"
      }, [
        (n(), w(F(C), N(ce({ isInEditor: !1 })), null, 16))
      ], 10, Ue))), 128)),
      x(o) ? (n(), w(x(le), N(R({ key: 2 }, Z.value)), null, 16)) : M("", !0)
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
  Se as CoreContainer,
  at as CoreContentFragment,
  it as CoreExperienceFragment,
  ot as CoreTabs,
  xe as DefaultContentFragment,
  et as ExperienceFragmentEditConfig,
  st as MapToContentFragmentModel,
  j as SpaUtils,
  tt as TabsEditConfig,
  Ae as getRenderer,
  Oe as mapRenderer
};
