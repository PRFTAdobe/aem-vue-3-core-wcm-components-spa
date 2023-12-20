import { MapTo as re, ComponentMapping as Q, componentProperties as U, componentClassNames as W, AllowedComponentsContainer as de, ResponsiveGrid as ue, Container as me, Utils as Z, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { defineComponent as z, useAttrs as ee, inject as A, computed as C, openBlock as a, createBlock as v, unref as _, normalizeProps as R, mergeProps as S, resolveDynamicComponent as F, normalizeClass as s, normalizeStyle as le, withCtx as oe, createElementBlock as u, createElementVNode as l, toDisplayString as I, createCommentVNode as q, Fragment as D, renderList as T, ref as E, watch as X, onMounted as se, onUnmounted as ae, nextTick as pe, guardReactiveProps as Ce } from "vue";
import { AuthoringUtils as Y } from "@adobe/aem-spa-page-model-manager";
const We = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ye = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ze = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, et = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return t.elementsOrder.length === 0 && t.cqItemsOrder.length === 0;
  }
}, tt = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, st = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, be = "ContentFragment-", ie = (t) => be + t, _e = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((m) => {
    re(ie(m))(e);
  });
}, ye = (t) => {
  const e = ie(t);
  return Q.get(e);
}, at = (t) => (e) => _e(t, e), ve = /* @__PURE__ */ z({
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
    ...U("cmp-container")
  },
  setup(t) {
    const e = t, n = ee(), m = typeof e.isInEditor < "u" ? e.isInEditor : A("isInEditor", Y.isInEditor()), $ = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        m,
        e.aemNoDecoration
      )
    ), r = C(
      () => {
        var h;
        return m && (n == null ? void 0 : n.allowedComponents) && ((h = n == null ? void 0 : n.allowedComponents) == null ? void 0 : h.applicable);
      }
    );
    return (h, i) => r.value ? (a(), v(_(de), R(S({ key: 0 }, { ...e, ..._(n) })), null, 16)) : (a(), v(F(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: s($.value),
      role: e.roleAttribute,
      style: le(e.backgroundStyle)
    }, {
      default: oe(() => [
        t.layout === "RESPONSIVE_GRID" ? (a(), v(_(ue), R(S({ key: 0 }, {
          ...e,
          ..._(n),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), v(_(me), R(S({ key: 1 }, { ...e, ..._(n) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), he = ["id"], ge = ["innerHTML"], fe = /* @__PURE__ */ z({
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
    ...U("cmp-contentfragment")
  },
  setup(t) {
    const e = t, n = typeof e.isInEditor < "u" ? e.isInEditor : A("isInEditor", Y.isInEditor()), m = A("componentMapping", new Q()), $ = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), r = C(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        m
      )
    );
    return (h, i) => {
      var O;
      return a(), u("div", {
        id: e.id,
        class: s($.value)
      }, [
        l("h3", {
          class: s(`${e.baseCssClass}__title`)
        }, I(e.title), 3),
        e.description ? (a(), u("p", {
          key: 0,
          class: s(`${e.baseCssClass}__description`)
        }, I(e.description), 3)) : q("", !0),
        (O = e.elementsOrder) != null && O.length ? (a(), u("div", {
          key: 1,
          class: s(`${e.baseCssClass}__elements`)
        }, [
          (a(!0), u(D, null, T(e.elementsOrder, (c, B) => (a(), u("div", {
            key: `${e.id}-element-${c}-${B}`,
            class: s(`${e.baseCssClass}__element`)
          }, [
            l("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              l("h4", null, I(c), 1)
            ], 2),
            l("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[c].value}`
            }, null, 10, ge),
            l("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + I(e.elements[c].dataType), 3),
            l("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + I(e.elements[c].multiValue ? "true" : "false"), 3),
            l("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + I(e.elements[c][":type"]), 3)
          ], 2))), 128))
        ], 2)) : q("", !0),
        (a(!0), u(D, null, T(r.value, (c) => (a(), v(F(c), {
          key: c.toString()
        }))), 128))
      ], 10, he);
    };
  }
}), nt = /* @__PURE__ */ z({
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
    ...U("cmp-contentfragment")
  },
  setup(t) {
    const e = t, n = ee(), m = C(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), $ = C(() => {
      const r = ye(e.model);
      return r || fe;
    });
    return (r, h) => m.value ? q("", !0) : (a(), v(F($.value), R(S({ key: 0 }, { ...e, ..._(n) })), null, 16));
  }
}), w = {
  createCallbackListener(t, e) {
    return (n, m = t) => {
      n.data && n.data.id === m && n.data.operation === "navigate" && (console.log(
        "Callback Listener triggered with message: ",
        JSON.stringify(n, null, 2)
      ), e.value = n.data.index);
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
}, Ie = ["id", "data-cmp-single-expansion"], qe = ["id", "data-cmp-expanded"], $e = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], Ee = /* @__PURE__ */ l("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), we = [
  Ee
], Oe = ["id", "aria-labelledby"], lt = /* @__PURE__ */ z({
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
    ...U("cmp-accordion")
  },
  setup(t) {
    const e = t, n = ee(), m = A("isInEditor", Y.isInEditor()), $ = A("componentMapping", new Q()), r = E(w.initMessageChannel()), h = E(-1), i = E(e.expandedItems), O = E(null), c = C(() => (n == null ? void 0 : n.singleExpansion) === !0), B = C(() => {
      const o = {};
      return m && (o["data-panelcontainer"] = "accordion", o["data-cq-data-path"] = e.cqPath || "", o["data-placeholder-text"] = "Please drag Accordion item components here"), o;
    }), H = C(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        $
      )
    ), K = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        m,
        e.aemNoDecoration
      )
    ), k = (o) => {
      const p = O.value.querySelector(
        `button[data-cmp-button-id="${o}"]`
      );
      p && p.focus();
    }, b = (o, p) => {
      const d = i.value.indexOf(o) > -1;
      if (c.value)
        i.value = d ? [] : [o];
      else if (d) {
        const x = i.value.indexOf(o);
        i.value.splice(x, 1);
      } else
        i.value.push(o);
      p.target.focus();
    }, M = (o, p, d) => {
      const x = O.value.querySelectorAll("button").length - 1;
      switch (p.code) {
        case "ArrowLeft":
        case "ArrowUp":
          p.preventDefault(), d > 0 && k(d - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          p.preventDefault(), d < x && k(d + 1);
          break;
        case "Home":
          p.preventDefault(), k(0);
          break;
        case "End":
          p.preventDefault(), k(x);
          break;
        case "Enter":
        case "Space":
          p.preventDefault(), b(o, p), k(d);
          break;
      }
    }, f = (o) => i.value.indexOf(o) > -1, P = C(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    X(c, async (o, p) => {
      o !== p && (i.value = e.expandedItems);
    }), X(e.expandedItems, async (o, p) => {
      o !== p && (i.value = o);
    }), X(h, async (o, p) => {
      o !== -1 && typeof o < "u" && o !== p && e.cqItemsOrder && (i.value = [e.cqItemsOrder[o]]);
    });
    const G = w.createCallbackListener(
      e.cqPath,
      h
    );
    return se(() => {
      w.subscribeRequestMessage(r.value, G);
    }), ae(() => {
      w.unsubscribeRequestMessage(r.value, G);
    }), (o, p) => (a(), u("div", S({
      id: e.id,
      ref_key: "accordion",
      ref: O,
      class: K.value,
      "data-cmp-single-expansion": c.value === !0 ? !0 : void 0
    }, B.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (a(!0), u(D, { key: 0 }, T(e.cqItemsOrder, (d, x) => (a(), u("div", {
        id: `accordion-${e.cqItems[d].id}`,
        key: `accordion-index-${x}`,
        class: s(`${e.baseCssClass}__item`),
        "data-cmp-expanded": f(d) ? !0 : void 0
      }, [
        (a(), v(F(e.headingElement), {
          class: s(`${e.baseCssClass}__heading`)
        }, {
          default: oe(() => [
            l("button", {
              id: `accordion-${e.cqItems[d].id}-button`,
              "aria-controls": `accordion-${e.cqItems[d].id}-panel`,
              class: s([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: f(d)
                }
              ]),
              "data-cmp-button-id": x,
              onClick: (J) => b(d, J),
              onKeydown: (J) => M(d, J, x)
            }, [
              l("span", {
                class: s(`${e.baseCssClass}__title`)
              }, I(e.cqItems[d]["cq:panelTitle"]), 3),
              l("span", {
                class: s(`${e.baseCssClass}__icon`)
              }, we, 2)
            ], 42, $e)
          ]),
          _: 2
        }, 1032, ["class"])),
        _(m) || f(d) ? (a(), u("div", {
          key: 0,
          id: `accordion-${e.cqItems[d].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[d].id}-button`,
          class: s(`${e.baseCssClass}__panel ${f(d) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (a(), v(F(H.value[t.cqItemsOrder.indexOf(d)]), { key: 0 })) : q("", !0)
        ], 10, Oe)) : q("", !0)
      ], 10, qe))), 128)) : q("", !0),
      _(m) ? (a(), v(_(te), R(S({ key: 1 }, P.value)), null, 16)) : q("", !0)
    ], 16, Ie));
  }
}), Pe = ["id", "aria-label"], ke = ["aria-label"], xe = ["aria-label"], Se = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), Ae = [
  Se
], Me = ["aria-label"], Le = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), Ne = [
  Le
], Re = ["aria-label"], De = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), Fe = [
  De
], Be = ["aria-label"], je = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M8 5v14l11-7z" })
], -1), Te = [
  je
], ze = ["aria-label"], Ge = ["aria-label", "onClick"], ot = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "CoreCarousel",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    accessibility: {
      type: Object,
      default: () => ({
        play: "Play",
        pause: "Pause",
        next: "Next",
        previous: "Previous",
        slide: "Slide {0} of {1}",
        indicator: "Slide {0}",
        indicators: "Choose a slide to display"
      })
    },
    accessibilityLabel: {
      type: String,
      default: "Carousel"
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
    delay: {
      type: Number,
      default: 5e3
    },
    isInEditor: {
      type: Boolean,
      default: void 0
    },
    ...U("cmp-carousel")
  },
  setup(t) {
    const e = t, n = ee(), m = typeof e.isInEditor < "u" ? e.isInEditor : A("isInEditor", Y.isInEditor()), $ = A("componentMapping", new Q()), r = E(-1), h = E(-1), i = E(0), O = E(w.initMessageChannel()), c = E((n == null ? void 0 : n.autoplay) === !0 && !m), B = C(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        $
      )
    ), H = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        m,
        e.aemNoDecoration
      )
    ), K = C(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), k = (g) => {
      var j;
      let y = ((j = e.accessibility) == null ? void 0 : j.indicator) || "";
      const V = "{0}";
      return y = y.replace(V, (g + 1).toString()), y;
    }, b = (g) => {
      var L;
      let y = ((L = e.accessibility) == null ? void 0 : L.slide) || "";
      const V = "{0}";
      y = y.replace(V, (g + 1).toString());
      const j = "{1}";
      return y = y.replace(
        j,
        e.cqItemsOrder.length.toString()
      ), y;
    }, M = () => {
      i.value === e.cqItemsOrder.length - 1 ? i.value = 0 : i.value += 1;
    }, f = () => {
      i.value === 0 ? i.value = e.cqItemsOrder.length - 1 : i.value -= 1;
    }, P = () => {
      !c.value || e.cqItemsOrder.length <= 1 || M();
    }, G = () => {
      r.value = setInterval(() => {
        P();
      }, e.delay);
    }, o = () => {
      clearInterval(r.value);
    }, p = (g) => {
      c.value = g;
    }, d = (g) => {
      i.value !== g && (i.value = g);
    }, x = () => {
      !e.autopauseDisabled && c.value && o();
    }, J = () => {
      !e.autopauseDisabled && c.value && G();
    }, ce = C(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    X(h, async (g, y) => {
      g !== -1 && typeof g < "u" && g !== y && (i.value = g, c.value = !1);
    });
    const ne = w.createCallbackListener(
      e.cqPath,
      h
    );
    return se(() => {
      G(), w.subscribeRequestMessage(O.value, ne);
    }), ae(() => {
      typeof r.value == "number" && r.value >= 0 && o(), w.unsubscribeRequestMessage(O.value, ne);
    }), (g, y) => {
      var V, j;
      return a(), u("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: s(H.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        ce.value ? q("", !0) : (a(), u("div", {
          key: 0,
          class: s(`${e.baseCssClass}__content`),
          onMouseenter: x,
          onMouseleave: J
        }, [
          l("div", {
            class: s([{ [`${e.baseCssClass}__items`]: !_(m) }])
          }, [
            (a(!0), u(D, null, T(B.value, (L, N) => (a(), u("div", {
              key: `item-${N}`,
              "aria-label": b(N),
              class: s([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: N === i.value
                }
              ]),
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (a(), v(F(L)))
            ], 10, ke))), 128))
          ], 2),
          l("div", {
            class: s(`${e.baseCssClass}__actions`)
          }, [
            l("button", {
              "aria-label": e.accessibility.previous,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: f
            }, [
              l("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Ae, 2),
              l("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.previous), 3)
            ], 10, xe),
            l("button", {
              "aria-label": e.accessibility.next,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: M
            }, [
              l("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Ne, 2),
              l("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.next), 3)
            ], 10, Me),
            ((V = _(n)) == null ? void 0 : V.autoplay) === !0 ? (a(), u(D, { key: 0 }, [
              l("button", {
                "aria-label": e.accessibility.pause,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--pause`,
                  {
                    [`${e.baseCssClass}__action--disabled`]: !c.value
                  }
                ]),
                type: "button",
                onClick: y[0] || (y[0] = (L) => p(!1))
              }, [
                l("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, Fe, 2),
                l("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, I(e.accessibility.pause), 3)
              ], 10, Re),
              l("button", {
                "aria-label": e.accessibility.play,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: c.value }
                ]),
                type: "button",
                onClick: y[1] || (y[1] = (L) => p(!0))
              }, [
                l("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, Te, 2),
                l("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, I(e.accessibility.play), 3)
              ], 10, Be)
            ], 64)) : q("", !0)
          ], 2),
          l("ol", {
            "aria-label": (j = e.accessibility) == null ? void 0 : j.indicators,
            class: s(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (a(!0), u(D, null, T(e.cqItemsOrder, (L, N) => (a(), u("li", {
              key: `item-${N}`,
              "aria-label": k(N),
              class: s([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: N === i.value
                }
              ]),
              role: "tab",
              onClick: (Ke) => d(N)
            }, I(e.cqItems[L]["cq:panelTitle"]), 11, Ge))), 128))
          ], 10, ze)
        ], 34)),
        _(m) ? (a(), v(_(te), R(S({ key: 1 }, K.value)), null, 16)) : q("", !0)
      ], 10, Pe);
    };
  }
}), it = /* @__PURE__ */ z({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, n) => (a(), v(ve, { "is-in-editor": !1 }));
  }
}), Ve = ["id"], Ue = ["aria-label"], He = ["tabIndex", "onClick"], ct = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "CoreTabs",
  props: {
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
    ...U("cmp-tabs")
  },
  setup(t) {
    const e = t, n = typeof e.isInEditor < "u" ? e.isInEditor : A("isInEditor", Y.isInEditor()), m = A("componentMapping", new Q()), $ = E(1), r = E(0), h = E(w.initMessageChannel()), i = C(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        m
      )
    ), O = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), c = C(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), B = C(() => {
      const b = {
        class: "aem-container",
        "data-cmp-is": "tabs",
        "data-panelcontainer": "tabs"
      };
      return n && (b["data-cq-data-path"] = e.cqPath), b;
    }), H = C(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), K = (b) => {
      r.value !== b && (r.value = b);
    };
    X($, async (b, M) => {
      if (b !== -1 && typeof b < "u" && b !== M && b !== r.value) {
        console.log("activeIndexFromAuthorPanel was: ", M), console.log("activeIndexFromAuthorPanel is: ", b), r.value = b, await pe();
        const f = parent.document.getElementById("ContentFrame");
        f && f.dispatchEvent(new Event("load"));
      }
    });
    const k = w.createCallbackListener(
      e.cqPath,
      $
    );
    return se(() => {
      w.subscribeRequestMessage(h.value, k);
    }), ae(() => {
      w.unsubscribeRequestMessage(h.value, k);
    }), (b, M) => (a(), u("div", S({
      id: e.id,
      class: O.value
    }, B.value), [
      c.value ? q("", !0) : (a(), u("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: s(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (a(!0), u(D, null, T(e.cqItemsOrder, (f, P) => (a(), u("li", {
          key: `tab-${P}`,
          class: s([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: P === r.value
            }
          ]),
          tabIndex: P === r.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (G) => K(P)
        }, I(e.cqItems[f]["cq:panelTitle"]), 11, He))), 128))
      ], 10, Ue)),
      !c.value && _(n) ? (a(!0), u(D, { key: 1 }, T(i.value, (f, P) => (a(), u("div", {
        key: `tab-content-${P}`,
        class: s(`${e.baseCssClass}__author-tab-content`),
        style: le({ display: r.value === P ? "block" : "none" })
      }, [
        (a(), v(F(f), R(Ce({ isInEditor: !1 })), null, 16))
      ], 6))), 128)) : c.value ? q("", !0) : (a(), v(F(i.value[r.value]), { key: 2 })),
      _(n) ? (a(), v(_(te), R(S({ key: 3 }, H.value)), null, 16)) : q("", !0)
    ], 16, Ve));
  }
});
export {
  We as AccordionEditConfig,
  Ye as CarouselEditConfig,
  Ze as ContainerEditConfig,
  et as ContentFragmentEditConfig,
  lt as CoreAccordion,
  ot as CoreCarousel,
  ve as CoreContainer,
  nt as CoreContentFragment,
  it as CoreExperienceFragment,
  ct as CoreTabs,
  fe as DefaultContentFragment,
  tt as ExperienceFragmentEditConfig,
  at as MapToContentFragmentModel,
  w as SpaUtils,
  st as TabsEditConfig,
  ye as getRenderer,
  _e as mapRenderer
};
