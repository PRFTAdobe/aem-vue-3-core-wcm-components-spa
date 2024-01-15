import { MapTo as he, ComponentMapping as te, componentProperties as Z, componentClassNames as se, AllowedComponentsContainer as ge, ResponsiveGrid as Ie, Container as $e, Utils as le, ContainerPlaceholder as ie } from "aem-vue-3-editable-components";
import { defineComponent as Y, useAttrs as oe, inject as T, computed as v, openBlock as n, createBlock as w, unref as x, normalizeProps as N, mergeProps as R, resolveDynamicComponent as F, normalizeClass as b, normalizeStyle as qe, withCtx as pe, createElementBlock as h, createElementVNode as P, toDisplayString as K, createCommentVNode as M, Fragment as Q, renderList as W, ref as J, onMounted as re, onUnmounted as ce, withKeys as $, withModifiers as G, guardReactiveProps as de, h as f, watchEffect as be } from "vue";
import { AuthoringUtils as ae } from "@adobe/aem-spa-page-model-manager";
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
  return te.get(e);
}, st = (t) => (e) => Oe(t, e), Se = /* @__PURE__ */ Y({
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
    ...Z("cmp-container")
  },
  setup(t) {
    const e = t, o = oe(), q = typeof e.isInEditor < "u" ? e.isInEditor : T("isInEditor", ae.isInEditor()), r = v(
      () => se(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        q,
        e.aemNoDecoration
      )
    ), d = v(
      () => {
        var g;
        return q && (o == null ? void 0 : o.allowedComponents) && ((g = o == null ? void 0 : o.allowedComponents) == null ? void 0 : g.applicable);
      }
    );
    return (g, k) => d.value ? (n(), w(x(ge), N(R({ key: 0 }, { ...e, ...x(o) })), null, 16)) : (n(), w(F(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: b(r.value),
      role: e.roleAttribute,
      style: qe(e.backgroundStyle)
    }, {
      default: pe(() => [
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
}), we = ["id"], Pe = ["innerHTML"], xe = /* @__PURE__ */ Y({
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
    ...Z("cmp-contentfragment")
  },
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : T("isInEditor", ae.isInEditor()), q = T("componentMapping", new te()), r = v(
      () => se(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), d = v(
      () => le.getChildComponents(
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
        class: b(r.value)
      }, [
        P("h3", {
          class: b(`${e.baseCssClass}__title`)
        }, K(e.title), 3),
        e.description ? (n(), h("p", {
          key: 0,
          class: b(`${e.baseCssClass}__description`)
        }, K(e.description), 3)) : M("", !0),
        (D = e.elementsOrder) != null && D.length ? (n(), h("div", {
          key: 1,
          class: b(`${e.baseCssClass}__elements`)
        }, [
          (n(!0), h(Q, null, W(e.elementsOrder, (y, V) => (n(), h("div", {
            key: `${e.id}-element-${y}-${V}`,
            class: b(`${e.baseCssClass}__element`)
          }, [
            P("div", {
              class: b([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              P("h4", null, K(y), 1)
            ], 2),
            P("div", {
              class: b([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[y].value}`
            }, null, 10, Pe),
            P("div", {
              class: b([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + K(e.elements[y].dataType), 3),
            P("div", {
              class: b([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + K(e.elements[y].multiValue ? "true" : "false"), 3),
            P("div", {
              class: b([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + K(e.elements[y][":type"]), 3)
          ], 2))), 128))
        ], 2)) : M("", !0),
        (n(!0), h(Q, null, W(d.value, (y) => (n(), w(F(y), {
          key: y.toString()
        }))), 128))
      ], 10, we);
    };
  }
}), at = /* @__PURE__ */ Y({
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
    ...Z("cmp-contentfragment")
  },
  setup(t) {
    const e = t, o = oe(), q = v(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), r = v(() => {
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
], De = ["id", "aria-hidden", "aria-labelledby"], nt = /* @__PURE__ */ Y({
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
    ...Z("cmp-accordion")
  },
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : T("isInEditor", ae.isInEditor()), q = T("componentMapping", new te()), r = J(null), d = j.initMessageChannel(), g = v(
      () => le.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        q
      )
    ), k = v(
      () => se(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), D = v(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), y = v(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), V = v(() => {
      const s = {
        class: "aem-container",
        "data-panelcontainer": "accordion"
      };
      return o && (s["data-cq-data-path"] = e.cqPath), s;
    }), ee = () => {
      let s = [];
      if (r.value) {
        const m = r.value.querySelectorAll(
          `.${e.baseCssClass}__item[data-cmp-expanded]`
        );
        s = Array.from(m);
      }
      return s;
    }, U = (s) => {
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
    }, H = (s) => {
      s > 0 && E(s - 1);
    }, X = (s) => {
      if (r.value) {
        const m = r.value.querySelectorAll(
          `.${e.baseCssClass}__button`
        );
        s < m.length - 1 && E(s + 1);
      }
    }, c = (s) => {
      s.hasAttribute("data-cmp-expanded") ? U(s) : L(s);
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
    return re(() => {
      if (e.singleExpansion === !0) {
        const s = ee();
        s.length > 1 && C(s.length - 1);
      }
      j.subscribeRequestMessage(d, _);
    }), ce(() => {
      j.unsubscribeRequestMessage(d, _);
    }), (s, u) => (n(), h("div", R({
      id: e.id,
      ref_key: "accordionContainer",
      ref: r,
      class: k.value
    }, V.value), [
      D.value ? M("", !0) : (n(!0), h(Q, { key: 0 }, W(e.cqItemsOrder, (m, i) => (n(), h("div", {
        id: `accordion-${e.cqItems[m].id}`,
        key: `accordion-index-${i}`,
        class: b(`${e.baseCssClass}__item`),
        "data-cmp-expanded": e.expandedItems.includes(m) ? !0 : void 0,
        "data-cmp-hook-accordion": "item"
      }, [
        (n(), w(F(e.headingElement), {
          class: b(`${e.baseCssClass}__heading`)
        }, {
          default: pe(() => [
            P("button", {
              id: `accordion-${e.cqItems[m].id}-button`,
              "aria-controls": `accordion-${e.cqItems[m].id}-panel`,
              "aria-expanded": e.expandedItems.includes(m) ? "true" : void 0,
              class: b([
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
                $((O) => H(i), ["left"]),
                $((O) => H(i), ["up"]),
                $((O) => X(i), ["right"]),
                $((O) => X(i), ["down"]),
                u[0] || (u[0] = $(G((O) => E(0), ["prevent"]), ["home"])),
                $(G(z, ["prevent"]), ["end"]),
                $(G(
                  () => {
                    C(i), E(i);
                  },
                  ["prevent"]
                ), ["enter"]),
                $(G(
                  () => {
                    C(i), E(i);
                  },
                  ["prevent"]
                ), ["space"])
              ]
            }, [
              P("span", {
                class: b(`${e.baseCssClass}__title`)
              }, K(e.cqItems[m]["cq:panelTitle"]), 3),
              P("span", {
                class: b(`${e.baseCssClass}__icon`)
              }, Re, 2)
            ], 42, ke)
          ]),
          _: 2
        }, 1032, ["class"])),
        P("div", {
          id: `accordion-${e.cqItems[m].id}-panel`,
          "aria-hidden": e.expandedItems.includes(m) ? void 0 : "true",
          "aria-labelledby": `accordion-${e.cqItems[m].id}-button`,
          class: b([
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
          (n(), w(F(g.value[t.cqItemsOrder.indexOf(m)]), N(de({ isInEditor: !1 })), null, 16))
        ], 10, De)
      ], 10, Me))), 128)),
      t.isInEditor ? (n(), w(x(ie), N(R({ key: 1 }, y.value)), null, 16)) : M("", !0)
    ], 16, Le));
  }
}), Be = ["id"], Ke = ["aria-live", "onKeydown"], Fe = ["id", "aria-hidden", "aria-label", "aria-labelledby"], je = ["aria-label"], Te = ["id", "aria-controls", "aria-label", "aria-selected", "onClick"], lt = /* @__PURE__ */ Y({
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
    ...Z("cmp-carousel")
  },
  setup(t) {
    const e = t, o = oe(), q = typeof e.isInEditor < "u" ? e.isInEditor : T("isInEditor", ae.isInEditor()), r = T("componentMapping", new te()), d = J(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), g = J(null), k = J(-1), D = j.initMessageChannel(), y = J((o == null ? void 0 : o.autoplay) === !0 && !q), V = v(
      () => le.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        r
      )
    ), ee = v(
      () => se(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        q,
        e.aemNoDecoration
      )
    ), U = v(() => {
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
        const p = g.value, A = p.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), S = p.querySelectorAll(
          `.${e.baseCssClass}__indicator`
        );
        a < 0 && (a = A.length - 1), a >= A.length && (a = 0), A.length && A.forEach((l, ne) => {
          ne === a ? (l.classList.add(`${e.baseCssClass}__item--active`), l.removeAttribute("aria-hidden")) : (l.classList.remove(
            `${e.baseCssClass}__item--active`
          ), l.setAttribute("aria-hidden", "true"));
        }), S.length && S.forEach((l, ne) => {
          ne === a ? (l.classList.add(
            `${e.baseCssClass}__indicator--active`
          ), l.setAttribute("aria-selected", "true"), l.setAttribute("tabindex", "0")) : (l.classList.remove(
            `${e.baseCssClass}__indicator--active`
          ), l.removeAttribute("aria-selected"), l.setAttribute("tabindex", "-1"));
        });
      }
    }, E = () => {
      let a = 0;
      if (g.value) {
        const p = g.value, A = p.querySelectorAll(
          `.${e.baseCssClass}__item`
        ), S = p.querySelector(
          `.${e.baseCssClass}__item--active`
        );
        a = Array.from(A).indexOf(S);
      }
      return a;
    }, z = (a) => {
      L(a), g.value && g.value.querySelectorAll(
        `.${e.baseCssClass}__item`
      )[a].focus();
    }, H = () => {
      const a = E();
      L(a + 1);
    }, X = () => {
      const a = E();
      L(a - 1);
    }, c = () => {
      if (!y.value || e.cqItemsOrder.length <= 1)
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
      y.value = a;
    }, s = v(() => {
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
            X();
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
      ), p = f(
        "button",
        {
          "aria-label": e.accessibilityNext,
          class: [
            `${e.baseCssClass}__action`,
            `${e.baseCssClass}__action--next`
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
              [`${e.baseCssClass}__action--disabled`]: !y.value
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
              [`${e.baseCssClass}__action--disabled`]: y.value
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
      ), l = [a, p];
      return (o == null ? void 0 : o.autoplay) === !0 && (l.push(A), l.push(S)), f("div", { class: `${e.baseCssClass}__actions` }, l);
    }), u = v(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), m = v(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), i = (a) => {
      var S;
      let p = ((S = e.accessibility) == null ? void 0 : S.indicator) || "";
      const A = "{0}";
      return p = p.replace(A, (a + 1).toString()), p;
    }, O = (a) => {
      var l;
      let p = ((l = e.accessibility) == null ? void 0 : l.slide) || "";
      const A = "{0}";
      p = p.replace(A, (a + 1).toString());
      const S = "{1}";
      return p = p.replace(
        S,
        e.cqItemsOrder.length.toString()
      ), p;
    }, B = (a) => {
      L(a);
    }, ve = () => {
      !e.autopauseDisabled && y.value && C();
    }, ye = () => {
      !e.autopauseDisabled && y.value && I();
    }, fe = () => {
      if (g.value) {
        const p = g.value.querySelectorAll(
          `.${e.baseCssClass}__item`
        );
        z(p.length - 1);
      }
    }, ue = () => {
      const a = E();
      z(a - 1);
    }, me = () => {
      const a = E();
      z(a + 1);
    }, Ce = (a, p = e.cqPath) => {
      a.data && a.data.id === p && a.data.operation === "navigate" && L(a.data.index);
    };
    return re(() => {
      I(), j.subscribeRequestMessage(D, Ce);
    }), ce(() => {
      typeof k.value == "number" && k.value >= 0 && C(), j.unsubscribeRequestMessage(D, Ce);
    }), be(
      // eslint-disable-next-line no-return-assign
      () => d.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (a, p) => {
      var A;
      return n(), h("div", R({
        id: e.id,
        ref_key: "carouselContainer",
        ref: g,
        class: ee.value
      }, U.value), [
        e.controlsPrepended ? (n(), w(F(s.value), { key: 0 })) : M("", !0),
        u.value ? M("", !0) : (n(), h("div", {
          key: 1,
          "aria-live": ((A = x(o)) == null ? void 0 : A.autoplay) === !0 ? "off" : "polite",
          class: b(`${e.baseCssClass}__content`),
          "aria-atomic": "false",
          onMouseenter: ve,
          onMouseleave: ye,
          onKeydown: [
            $(ue, ["left"]),
            $(ue, ["up"]),
            $(me, ["right"]),
            $(me, ["down"]),
            p[0] || (p[0] = $(G((S) => z(0), ["prevent"]), ["home"])),
            $(G(fe, ["prevent"]), ["end"])
          ]
        }, [
          P("div", {
            class: b([{ [`${e.baseCssClass}__items`]: !x(q) }])
          }, [
            (n(!0), h(Q, null, W(V.value, (S, l) => (n(), h("div", {
              id: `${e.cqItems[e.cqItemsOrder[l]].id}-tabpanel`,
              key: `item-${l}`,
              "aria-hidden": l === d.value ? void 0 : !0,
              "aria-label": O(l),
              "aria-labelledby": `${e.cqItems[e.cqItemsOrder[l]].id}-tab`,
              class: b([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: l === d.value
                }
              ]),
              "aria-roledescription": "slide",
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (n(), w(F(S), N(de({ isInEditor: !1 })), null, 16))
            ], 10, Fe))), 128))
          ], 2),
          e.controlsPrepended ? M("", !0) : (n(), w(F(s.value), { key: 0 })),
          P("ol", {
            "aria-label": e.accessibilityTablist,
            class: b(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (n(!0), h(Q, null, W(e.cqItemsOrder, (S, l) => (n(), h("li", {
              id: `${e.cqItems[e.cqItemsOrder[l]].id}-tab`,
              key: `item-${l}`,
              "aria-controls": `${e.cqItems[e.cqItemsOrder[l]].id}-tabpanel`,
              "aria-label": i(l),
              "aria-selected": l === d.value ? !0 : void 0,
              class: b([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: l === d.value
                }
              ]),
              role: "tab",
              onClick: (ne) => B(l)
            }, K(e.cqItems[S]["cq:panelTitle"]), 11, Te))), 128))
          ], 10, je)
        ], 42, Ke)),
        x(q) ? (n(), w(x(ie), N(R({ key: 2 }, m.value)), null, 16)) : M("", !0)
      ], 16, Be);
    };
  }
}), it = /* @__PURE__ */ Y({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, o) => (n(), w(Se, { "is-in-editor": !1 }));
  }
}), ze = ["id", "onKeydown"], Ge = ["aria-label"], Ve = ["id", "aria-controls", "aria-selected", "tabIndex", "onClick"], Ue = ["id", "aria-hidden", "aria-labelledby"], ot = /* @__PURE__ */ Y({
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
    ...Z("cmp-tabs")
  },
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : T("isInEditor", ae.isInEditor()), q = T("componentMapping", new te()), r = J(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), d = J(null), g = j.initMessageChannel(), k = v(
      () => le.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        q
      )
    ), D = v(
      () => se(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), y = v(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), V = v(() => {
      const c = {
        class: "aem-container",
        "data-panelcontainer": "tabs"
      };
      return o && (c["data-cq-data-path"] = e.cqPath), c;
    }), ee = v(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), U = (c) => {
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
      U(c), d.value && d.value.querySelectorAll(
        `.${e.baseCssClass}__tabpanel`
      )[c].focus();
    }, E = (c, I = e.cqPath) => {
      c.data && c.data.id === I && c.data.operation === "navigate" && U(c.data.index);
    }, z = () => {
      if (d.value) {
        const I = d.value.querySelectorAll(
          `.${e.baseCssClass}__tab`
        );
        L(I.length - 1);
      }
    }, H = () => {
      if (d.value) {
        const c = d.value, I = c.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), C = c.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), _ = Array.from(I).indexOf(C);
        L(_ - 1);
      }
    }, X = () => {
      if (d.value) {
        const c = d.value, I = c.querySelectorAll(
          `.${e.baseCssClass}__tab`
        ), C = c.querySelector(
          `.${e.baseCssClass}__tab--active`
        ), _ = Array.from(I).indexOf(C);
        L(_ + 1);
      }
    };
    return re(() => {
      j.subscribeRequestMessage(g, E);
    }), ce(() => {
      j.unsubscribeRequestMessage(g, E);
    }), be(
      // eslint-disable-next-line no-return-assign
      () => r.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (c, I) => (n(), h("div", R({
      id: e.id,
      ref_key: "tabContainer",
      ref: d,
      class: D.value
    }, V.value, {
      onKeydown: [
        $(H, ["left"]),
        $(H, ["up"]),
        $(X, ["right"]),
        $(X, ["down"]),
        I[0] || (I[0] = $(G((C) => L(0), ["prevent"]), ["home"])),
        $(G(z, ["prevent"]), ["end"])
      ]
    }), [
      y.value ? M("", !0) : (n(), h("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: b(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (n(!0), h(Q, null, W(e.cqItemsOrder, (C, _) => (n(), h("li", {
          id: `${e.cqItems[C].id}-tab`,
          key: `tab-${_}`,
          "aria-controls": `${e.cqItems[C].id}-tabpanel`,
          "aria-selected": _ === r.value ? !0 : void 0,
          class: b([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: _ === r.value
            }
          ]),
          tabIndex: _ === r.value ? 0 : -1,
          role: "tab",
          onClick: (s) => U(_)
        }, K(e.cqItems[C]["cq:panelTitle"]), 11, Ve))), 128))
      ], 10, Ge)),
      y.value ? M("", !0) : (n(!0), h(Q, { key: 1 }, W(k.value, (C, _) => (n(), h("div", {
        id: `${e.cqItems[e.cqItemsOrder[_]].id}-tabpanel`,
        key: `tab-content-${_}`,
        "aria-hidden": _ === r.value ? void 0 : !0,
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[_]].id}-tab`,
        class: b([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: _ === r.value
          }
        ]),
        role: "tabpanel",
        tabindex: "0"
      }, [
        (n(), w(F(C), N(de({ isInEditor: !1 })), null, 16))
      ], 10, Ue))), 128)),
      x(o) ? (n(), w(x(ie), N(R({ key: 2 }, ee.value)), null, 16)) : M("", !0)
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
