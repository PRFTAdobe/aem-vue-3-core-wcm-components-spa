import { MapTo as re, ComponentMapping as Q, componentProperties as U, componentClassNames as W, AllowedComponentsContainer as de, ResponsiveGrid as ue, Container as pe, Utils as Z, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { defineComponent as G, useAttrs as ee, inject as S, computed as C, openBlock as a, createBlock as h, unref as _, normalizeProps as N, mergeProps as M, resolveDynamicComponent as D, normalizeClass as s, normalizeStyle as le, withCtx as oe, createElementBlock as u, createElementVNode as n, toDisplayString as g, createCommentVNode as $, Fragment as R, renderList as T, ref as q, watch as J, onMounted as se, onUnmounted as ae, nextTick as me, guardReactiveProps as Ce } from "vue";
import { AuthoringUtils as Y, ModelManager as be, PathUtils as _e } from "@adobe/aem-spa-page-model-manager";
const Ze = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, et = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, tt = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, st = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return t.elementsOrder.length === 0 && t.cqItemsOrder.length === 0;
  }
}, at = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, nt = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, ye = "ContentFragment-", ie = (t) => ye + t, he = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((p) => {
    re(ie(p))(e);
  });
}, ve = (t) => {
  const e = ie(t);
  return Q.get(e);
}, lt = (t) => (e) => he(t, e), fe = /* @__PURE__ */ G({
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
    const e = t, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), I = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        p,
        e.aemNoDecoration
      )
    ), c = C(
      () => {
        var v;
        return p && (l == null ? void 0 : l.allowedComponents) && ((v = l == null ? void 0 : l.allowedComponents) == null ? void 0 : v.applicable);
      }
    );
    return (v, i) => c.value ? (a(), h(_(de), N(M({ key: 0 }, { ...e, ..._(l) })), null, 16)) : (a(), h(D(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: s(I.value),
      role: e.roleAttribute,
      style: le(e.backgroundStyle)
    }, {
      default: oe(() => [
        t.layout === "RESPONSIVE_GRID" ? (a(), h(_(ue), N(M({ key: 0 }, {
          ...e,
          ..._(l),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), h(_(pe), N(M({ key: 1 }, { ...e, ..._(l) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), ge = ["id"], Ie = ["innerHTML"], qe = /* @__PURE__ */ G({
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
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), p = S("componentMapping", new Q()), I = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), c = C(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        p
      )
    );
    return (v, i) => {
      var w;
      return a(), u("div", {
        id: e.id,
        class: s(I.value)
      }, [
        n("h3", {
          class: s(`${e.baseCssClass}__title`)
        }, g(e.title), 3),
        e.description ? (a(), u("p", {
          key: 0,
          class: s(`${e.baseCssClass}__description`)
        }, g(e.description), 3)) : $("", !0),
        (w = e.elementsOrder) != null && w.length ? (a(), u("div", {
          key: 1,
          class: s(`${e.baseCssClass}__elements`)
        }, [
          (a(!0), u(R, null, T(e.elementsOrder, (d, B) => (a(), u("div", {
            key: `${e.id}-element-${d}-${B}`,
            class: s(`${e.baseCssClass}__element`)
          }, [
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              n("h4", null, g(d), 1)
            ], 2),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[d].value}`
            }, null, 10, Ie),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + g(e.elements[d].dataType), 3),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + g(e.elements[d].multiValue ? "true" : "false"), 3),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + g(e.elements[d][":type"]), 3)
          ], 2))), 128))
        ], 2)) : $("", !0),
        (a(!0), u(R, null, T(c.value, (d) => (a(), h(D(d), {
          key: d.toString()
        }))), 128))
      ], 10, ge);
    };
  }
}), ot = /* @__PURE__ */ G({
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
    const e = t, l = ee(), p = C(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), I = C(() => {
      const c = ve(e.model);
      return c || qe;
    });
    return (c, v) => p.value ? $("", !0) : (a(), h(D(I.value), N(M({ key: 0 }, { ...e, ..._(l) })), null, 16));
  }
}), E = {
  createCallbackListener(t, e) {
    return (l, p = t) => {
      l.data && l.data.id === p && l.data.operation === "navigate" && (e.value = l.data.index);
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
}, $e = ["id", "data-cmp-single-expansion"], Ee = ["id", "data-cmp-expanded"], we = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], Oe = /* @__PURE__ */ n("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), Pe = [
  Oe
], ke = ["id", "aria-labelledby"], it = /* @__PURE__ */ G({
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
    const e = t, l = ee(), p = S("isInEditor", Y.isInEditor()), I = S("componentMapping", new Q()), c = q(E.initMessageChannel()), v = q(-1), i = q(e.expandedItems), w = q(null), d = C(() => (l == null ? void 0 : l.singleExpansion) === !0), B = C(() => {
      const o = {};
      return p && (o["data-panelcontainer"] = "accordion", o["data-cq-data-path"] = e.cqPath || "", o["data-placeholder-text"] = "Please drag Accordion item components here"), o;
    }), H = C(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        I
      )
    ), K = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        p,
        e.aemNoDecoration
      )
    ), P = (o) => {
      const m = w.value.querySelector(
        `button[data-cmp-button-id="${o}"]`
      );
      m && m.focus();
    }, b = (o, m) => {
      const r = i.value.indexOf(o) > -1;
      if (d.value)
        i.value = r ? [] : [o];
      else if (r) {
        const x = i.value.indexOf(o);
        i.value.splice(x, 1);
      } else
        i.value.push(o);
      m.target.focus();
    }, F = (o, m, r) => {
      const x = w.value.querySelectorAll("button").length - 1;
      switch (m.code) {
        case "ArrowLeft":
        case "ArrowUp":
          m.preventDefault(), r > 0 && P(r - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          m.preventDefault(), r < x && P(r + 1);
          break;
        case "Home":
          m.preventDefault(), P(0);
          break;
        case "End":
          m.preventDefault(), P(x);
          break;
        case "Enter":
        case "Space":
          m.preventDefault(), b(o, m), P(r);
          break;
      }
    }, k = (o) => i.value.indexOf(o) > -1, O = C(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    J(d, async (o, m) => {
      o !== m && (i.value = e.expandedItems);
    }), J(e.expandedItems, async (o, m) => {
      o !== m && (i.value = o);
    }), J(v, async (o, m) => {
      o !== -1 && typeof o < "u" && o !== m && e.cqItemsOrder && (i.value = [e.cqItemsOrder[o]]);
    });
    const z = E.createCallbackListener(
      e.cqPath,
      v
    );
    return se(() => {
      E.subscribeRequestMessage(c.value, z);
    }), ae(() => {
      E.unsubscribeRequestMessage(c.value, z);
    }), (o, m) => (a(), u("div", M({
      id: e.id,
      ref_key: "accordion",
      ref: w,
      class: K.value,
      "data-cmp-single-expansion": d.value === !0 ? !0 : void 0
    }, B.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (a(!0), u(R, { key: 0 }, T(e.cqItemsOrder, (r, x) => (a(), u("div", {
        id: `accordion-${e.cqItems[r].id}`,
        key: `accordion-index-${x}`,
        class: s(`${e.baseCssClass}__item`),
        "data-cmp-expanded": k(r) ? !0 : void 0
      }, [
        (a(), h(D(e.headingElement), {
          class: s(`${e.baseCssClass}__heading`)
        }, {
          default: oe(() => [
            n("button", {
              id: `accordion-${e.cqItems[r].id}-button`,
              "aria-controls": `accordion-${e.cqItems[r].id}-panel`,
              class: s([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: k(r)
                }
              ]),
              "data-cmp-button-id": x,
              onClick: (X) => b(r, X),
              onKeydown: (X) => F(r, X, x)
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__title`)
              }, g(e.cqItems[r]["cq:panelTitle"]), 3),
              n("span", {
                class: s(`${e.baseCssClass}__icon`)
              }, Pe, 2)
            ], 42, we)
          ]),
          _: 2
        }, 1032, ["class"])),
        _(p) || k(r) ? (a(), u("div", {
          key: 0,
          id: `accordion-${e.cqItems[r].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[r].id}-button`,
          class: s(`${e.baseCssClass}__panel ${k(r) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (a(), h(D(H.value[t.cqItemsOrder.indexOf(r)]), { key: 0 })) : $("", !0)
        ], 10, ke)) : $("", !0)
      ], 10, Ee))), 128)) : $("", !0),
      _(p) ? (a(), h(_(te), N(M({ key: 1 }, O.value)), null, 16)) : $("", !0)
    ], 16, $e));
  }
}), xe = ["id", "aria-label"], Me = ["aria-label"], Se = ["aria-label"], Ae = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), Le = [
  Ae
], Ne = ["aria-label"], Re = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), De = [
  Re
], Be = ["aria-label"], Fe = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), je = [
  Fe
], Te = ["aria-label"], Ge = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M8 5v14l11-7z" })
], -1), ze = [
  Ge
], Ve = ["aria-label"], Ue = ["aria-label", "onClick"], ct = /* @__PURE__ */ G({
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
    const e = t, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), I = S("componentMapping", new Q()), c = q(-1), v = q(-1), i = q(0), w = q(E.initMessageChannel()), d = q((l == null ? void 0 : l.autoplay) === !0 && !p), B = C(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        I
      )
    ), H = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        p,
        e.aemNoDecoration
      )
    ), K = C(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), P = (f) => {
      var j;
      let y = ((j = e.accessibility) == null ? void 0 : j.indicator) || "";
      const V = "{0}";
      return y = y.replace(V, (f + 1).toString()), y;
    }, b = (f) => {
      var A;
      let y = ((A = e.accessibility) == null ? void 0 : A.slide) || "";
      const V = "{0}";
      y = y.replace(V, (f + 1).toString());
      const j = "{1}";
      return y = y.replace(
        j,
        e.cqItemsOrder.length.toString()
      ), y;
    }, F = () => {
      i.value === e.cqItemsOrder.length - 1 ? i.value = 0 : i.value += 1;
    }, k = () => {
      i.value === 0 ? i.value = e.cqItemsOrder.length - 1 : i.value -= 1;
    }, O = () => {
      !d.value || e.cqItemsOrder.length <= 1 || F();
    }, z = () => {
      c.value = setInterval(() => {
        O();
      }, e.delay);
    }, o = () => {
      clearInterval(c.value);
    }, m = (f) => {
      d.value = f;
    }, r = (f) => {
      i.value !== f && (i.value = f);
    }, x = () => {
      !e.autopauseDisabled && d.value && o();
    }, X = () => {
      !e.autopauseDisabled && d.value && z();
    }, ce = C(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    J(v, async (f, y) => {
      f !== -1 && typeof f < "u" && f !== y && (i.value = f, d.value = !1);
    });
    const ne = E.createCallbackListener(
      e.cqPath,
      v
    );
    return se(() => {
      z(), E.subscribeRequestMessage(w.value, ne);
    }), ae(() => {
      typeof c.value == "number" && c.value >= 0 && o(), E.unsubscribeRequestMessage(w.value, ne);
    }), (f, y) => {
      var V, j;
      return a(), u("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: s(H.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        ce.value ? $("", !0) : (a(), u("div", {
          key: 0,
          class: s(`${e.baseCssClass}__content`),
          onMouseenter: x,
          onMouseleave: X
        }, [
          n("div", {
            class: s([{ [`${e.baseCssClass}__items`]: !_(p) }])
          }, [
            (a(!0), u(R, null, T(B.value, (A, L) => (a(), u("div", {
              key: `item-${L}`,
              "aria-label": b(L),
              class: s([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: L === i.value
                }
              ]),
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (a(), h(D(A)))
            ], 10, Me))), 128))
          ], 2),
          n("div", {
            class: s(`${e.baseCssClass}__actions`)
          }, [
            n("button", {
              "aria-label": e.accessibility.previous,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: k
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Le, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, g(e.accessibility.previous), 3)
            ], 10, Se),
            n("button", {
              "aria-label": e.accessibility.next,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: F
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, De, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, g(e.accessibility.next), 3)
            ], 10, Ne),
            ((V = _(l)) == null ? void 0 : V.autoplay) === !0 ? (a(), u(R, { key: 0 }, [
              n("button", {
                "aria-label": e.accessibility.pause,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--pause`,
                  {
                    [`${e.baseCssClass}__action--disabled`]: !d.value
                  }
                ]),
                type: "button",
                onClick: y[0] || (y[0] = (A) => m(!1))
              }, [
                n("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, je, 2),
                n("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, g(e.accessibility.pause), 3)
              ], 10, Be),
              n("button", {
                "aria-label": e.accessibility.play,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: d.value }
                ]),
                type: "button",
                onClick: y[1] || (y[1] = (A) => m(!0))
              }, [
                n("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, ze, 2),
                n("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, g(e.accessibility.play), 3)
              ], 10, Te)
            ], 64)) : $("", !0)
          ], 2),
          n("ol", {
            "aria-label": (j = e.accessibility) == null ? void 0 : j.indicators,
            class: s(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (a(!0), u(R, null, T(e.cqItemsOrder, (A, L) => (a(), u("li", {
              key: `item-${L}`,
              "aria-label": P(L),
              class: s([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: L === i.value
                }
              ]),
              role: "tab",
              onClick: (Je) => r(L)
            }, g(e.cqItems[A]["cq:panelTitle"]), 11, Ue))), 128))
          ], 10, Ve)
        ], 34)),
        _(p) ? (a(), h(_(te), N(M({ key: 1 }, K.value)), null, 16)) : $("", !0)
      ], 10, xe);
    };
  }
}), rt = /* @__PURE__ */ G({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, l) => (a(), h(fe, { "is-in-editor": !1 }));
  }
}), He = ["id"], Ke = ["aria-label"], Xe = ["tabIndex", "onClick"], dt = /* @__PURE__ */ G({
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
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), p = S("componentMapping", new Q()), I = q(1), c = q(0), v = q(E.initMessageChannel()), i = C(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        p
      )
    ), w = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), d = C(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), B = C(() => {
      const b = {
        class: "aem-container",
        "data-cmp-is": "tabs",
        "data-panelcontainer": "tabs"
      };
      return l && (b["data-cq-data-path"] = e.cqPath), b;
    }), H = C(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), K = (b) => {
      c.value !== b && (c.value = b);
    };
    J(I, async (b, F) => {
      b !== -1 && typeof b < "u" && b !== F && b !== c.value && (c.value = b, await me(), be._notifyListeners(e.cqPath), _e.dispatchGlobalCustomEvent("cq-async-content-loaded", {}));
    });
    const P = E.createCallbackListener(
      e.cqPath,
      I
    );
    return se(() => {
      E.subscribeRequestMessage(v.value, P);
    }), ae(() => {
      E.unsubscribeRequestMessage(v.value, P);
    }), (b, F) => (a(), u("div", M({
      id: e.id,
      class: w.value
    }, B.value), [
      d.value ? $("", !0) : (a(), u("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: s(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (a(!0), u(R, null, T(e.cqItemsOrder, (k, O) => (a(), u("li", {
          key: `tab-${O}`,
          class: s([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: O === c.value
            }
          ]),
          tabIndex: O === c.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (z) => K(O)
        }, g(e.cqItems[k]["cq:panelTitle"]), 11, Xe))), 128))
      ], 10, Ke)),
      _(l) ? (a(!0), u(R, { key: 1 }, T(i.value, (k, O) => (a(), u("div", {
        key: `tab-content-${O}`,
        class: s(`${e.baseCssClass}__author-tab-content`),
        style: le({ display: c.value === O ? "block" : "none" })
      }, [
        (a(), h(D(k), N(Ce({ isInEditor: !1 })), null, 16))
      ], 6))), 128)) : (a(), h(D(i.value[c.value]), { key: 2 })),
      _(l) ? (a(), h(_(te), N(M({ key: 3 }, H.value)), null, 16)) : $("", !0)
    ], 16, He));
  }
});
export {
  Ze as AccordionEditConfig,
  et as CarouselEditConfig,
  tt as ContainerEditConfig,
  st as ContentFragmentEditConfig,
  it as CoreAccordion,
  ct as CoreCarousel,
  fe as CoreContainer,
  ot as CoreContentFragment,
  rt as CoreExperienceFragment,
  dt as CoreTabs,
  qe as DefaultContentFragment,
  at as ExperienceFragmentEditConfig,
  lt as MapToContentFragmentModel,
  E as SpaUtils,
  nt as TabsEditConfig,
  ve as getRenderer,
  he as mapRenderer
};
