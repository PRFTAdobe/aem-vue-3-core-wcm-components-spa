import { MapTo as re, ComponentMapping as Q, componentProperties as U, componentClassNames as W, AllowedComponentsContainer as de, ResponsiveGrid as ue, Container as pe, Utils as Z, ContainerPlaceholder as se } from "aem-vue-3-editable-components";
import { defineComponent as z, useAttrs as ee, inject as S, computed as C, openBlock as a, createBlock as h, unref as _, normalizeProps as N, mergeProps as M, resolveDynamicComponent as D, normalizeClass as t, normalizeStyle as le, withCtx as oe, createElementBlock as u, createElementVNode as n, toDisplayString as g, createCommentVNode as $, Fragment as R, renderList as T, ref as q, watch as J, onMounted as te, onUnmounted as ae, nextTick as me, guardReactiveProps as Ce } from "vue";
import { AuthoringUtils as Y, ModelManager as be } from "@adobe/aem-spa-page-model-manager";
const Ye = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, Ze = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, es = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, ss = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return s.elementsOrder.length === 0 && s.cqItemsOrder.length === 0;
  }
}, ts = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, as = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, _e = "ContentFragment-", ie = (s) => _e + s, ye = (s, e) => {
  s && e && (typeof s == "string" ? [s] : s).forEach((p) => {
    re(ie(p))(e);
  });
}, he = (s) => {
  const e = ie(s);
  return Q.get(e);
}, ns = (s) => (e) => ye(s, e), ve = /* @__PURE__ */ z({
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
      validator: (s) => ["RESPONSIVE_GRID", "SIMPLE"].includes(s)
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
  setup(s) {
    const e = s, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), I = C(
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
      class: t(I.value),
      role: e.roleAttribute,
      style: le(e.backgroundStyle)
    }, {
      default: oe(() => [
        s.layout === "RESPONSIVE_GRID" ? (a(), h(_(ue), N(M({ key: 0 }, {
          ...e,
          ..._(l),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), h(_(pe), N(M({ key: 1 }, { ...e, ..._(l) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), fe = ["id"], ge = ["innerHTML"], Ie = /* @__PURE__ */ z({
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
  setup(s) {
    const e = s, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), p = S("componentMapping", new Q()), I = C(
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
        class: t(I.value)
      }, [
        n("h3", {
          class: t(`${e.baseCssClass}__title`)
        }, g(e.title), 3),
        e.description ? (a(), u("p", {
          key: 0,
          class: t(`${e.baseCssClass}__description`)
        }, g(e.description), 3)) : $("", !0),
        (w = e.elementsOrder) != null && w.length ? (a(), u("div", {
          key: 1,
          class: t(`${e.baseCssClass}__elements`)
        }, [
          (a(!0), u(R, null, T(e.elementsOrder, (d, B) => (a(), u("div", {
            key: `${e.id}-element-${d}-${B}`,
            class: t(`${e.baseCssClass}__element`)
          }, [
            n("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              n("h4", null, g(d), 1)
            ], 2),
            n("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[d].value}`
            }, null, 10, ge),
            n("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + g(e.elements[d].dataType), 3),
            n("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + g(e.elements[d].multiValue ? "true" : "false"), 3),
            n("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + g(e.elements[d][":type"]), 3)
          ], 2))), 128))
        ], 2)) : $("", !0),
        (a(!0), u(R, null, T(c.value, (d) => (a(), h(D(d), {
          key: d.toString()
        }))), 128))
      ], 10, fe);
    };
  }
}), ls = /* @__PURE__ */ z({
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
  setup(s) {
    const e = s, l = ee(), p = C(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), I = C(() => {
      const c = he(e.model);
      return c || Ie;
    });
    return (c, v) => p.value ? $("", !0) : (a(), h(D(I.value), N(M({ key: 0 }, { ...e, ..._(l) })), null, 16));
  }
}), E = {
  createCallbackListener(s, e) {
    return (l, p = s) => {
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
  subscribeRequestMessage(s, e) {
    s && s.subscribeRequestMessage(
      "cmp.panelcontainer",
      e
    );
  },
  unsubscribeRequestMessage(s, e) {
    s && s.unsubscribeRequestMessage(
      "cmp.panelcontainer",
      e
    );
  }
}, qe = ["id", "data-cmp-single-expansion"], $e = ["id", "data-cmp-expanded"], Ee = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], we = /* @__PURE__ */ n("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), Oe = [
  we
], Pe = ["id", "aria-labelledby"], os = /* @__PURE__ */ z({
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
  setup(s) {
    const e = s, l = ee(), p = S("isInEditor", Y.isInEditor()), I = S("componentMapping", new Q()), c = q(E.initMessageChannel()), v = q(-1), i = q(e.expandedItems), w = q(null), d = C(() => (l == null ? void 0 : l.singleExpansion) === !0), B = C(() => {
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
    const G = E.createCallbackListener(
      e.cqPath,
      v
    );
    return te(() => {
      E.subscribeRequestMessage(c.value, G);
    }), ae(() => {
      E.unsubscribeRequestMessage(c.value, G);
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
        class: t(`${e.baseCssClass}__item`),
        "data-cmp-expanded": k(r) ? !0 : void 0
      }, [
        (a(), h(D(e.headingElement), {
          class: t(`${e.baseCssClass}__heading`)
        }, {
          default: oe(() => [
            n("button", {
              id: `accordion-${e.cqItems[r].id}-button`,
              "aria-controls": `accordion-${e.cqItems[r].id}-panel`,
              class: t([
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
                class: t(`${e.baseCssClass}__title`)
              }, g(e.cqItems[r]["cq:panelTitle"]), 3),
              n("span", {
                class: t(`${e.baseCssClass}__icon`)
              }, Oe, 2)
            ], 42, Ee)
          ]),
          _: 2
        }, 1032, ["class"])),
        _(p) || k(r) ? (a(), u("div", {
          key: 0,
          id: `accordion-${e.cqItems[r].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[r].id}-button`,
          class: t(`${e.baseCssClass}__panel ${k(r) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (a(), h(D(H.value[s.cqItemsOrder.indexOf(r)]), { key: 0 })) : $("", !0)
        ], 10, Pe)) : $("", !0)
      ], 10, $e))), 128)) : $("", !0),
      _(p) ? (a(), h(_(se), N(M({ key: 1 }, O.value)), null, 16)) : $("", !0)
    ], 16, qe));
  }
}), ke = ["id", "aria-label"], xe = ["aria-label"], Me = ["aria-label"], Se = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), Ae = [
  Se
], Le = ["aria-label"], Ne = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), Re = [
  Ne
], De = ["aria-label"], Be = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), Fe = [
  Be
], je = ["aria-label"], Te = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M8 5v14l11-7z" })
], -1), ze = [
  Te
], Ge = ["aria-label"], Ve = ["aria-label", "onClick"], is = /* @__PURE__ */ z({
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
  setup(s) {
    const e = s, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), I = S("componentMapping", new Q()), c = q(-1), v = q(-1), i = q(0), w = q(E.initMessageChannel()), d = q((l == null ? void 0 : l.autoplay) === !0 && !p), B = C(
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
    }, G = () => {
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
      !e.autopauseDisabled && d.value && G();
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
    return te(() => {
      G(), E.subscribeRequestMessage(w.value, ne);
    }), ae(() => {
      typeof c.value == "number" && c.value >= 0 && o(), E.unsubscribeRequestMessage(w.value, ne);
    }), (f, y) => {
      var V, j;
      return a(), u("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: t(H.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        ce.value ? $("", !0) : (a(), u("div", {
          key: 0,
          class: t(`${e.baseCssClass}__content`),
          onMouseenter: x,
          onMouseleave: X
        }, [
          n("div", {
            class: t([{ [`${e.baseCssClass}__items`]: !_(p) }])
          }, [
            (a(!0), u(R, null, T(B.value, (A, L) => (a(), u("div", {
              key: `item-${L}`,
              "aria-label": b(L),
              class: t([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: L === i.value
                }
              ]),
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (a(), h(D(A)))
            ], 10, xe))), 128))
          ], 2),
          n("div", {
            class: t(`${e.baseCssClass}__actions`)
          }, [
            n("button", {
              "aria-label": e.accessibility.previous,
              class: t(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: k
            }, [
              n("span", {
                class: t(`${e.baseCssClass}__action-icon`)
              }, Ae, 2),
              n("span", {
                class: t(`${e.baseCssClass}__action-text`)
              }, g(e.accessibility.previous), 3)
            ], 10, Me),
            n("button", {
              "aria-label": e.accessibility.next,
              class: t(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: F
            }, [
              n("span", {
                class: t(`${e.baseCssClass}__action-icon`)
              }, Re, 2),
              n("span", {
                class: t(`${e.baseCssClass}__action-text`)
              }, g(e.accessibility.next), 3)
            ], 10, Le),
            ((V = _(l)) == null ? void 0 : V.autoplay) === !0 ? (a(), u(R, { key: 0 }, [
              n("button", {
                "aria-label": e.accessibility.pause,
                class: t([
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
                  class: t(`${e.baseCssClass}__action-icon`)
                }, Fe, 2),
                n("span", {
                  class: t(`${e.baseCssClass}__action-text`)
                }, g(e.accessibility.pause), 3)
              ], 10, De),
              n("button", {
                "aria-label": e.accessibility.play,
                class: t([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: d.value }
                ]),
                type: "button",
                onClick: y[1] || (y[1] = (A) => m(!0))
              }, [
                n("span", {
                  class: t(`${e.baseCssClass}__action-icon`)
                }, ze, 2),
                n("span", {
                  class: t(`${e.baseCssClass}__action-text`)
                }, g(e.accessibility.play), 3)
              ], 10, je)
            ], 64)) : $("", !0)
          ], 2),
          n("ol", {
            "aria-label": (j = e.accessibility) == null ? void 0 : j.indicators,
            class: t(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (a(!0), u(R, null, T(e.cqItemsOrder, (A, L) => (a(), u("li", {
              key: `item-${L}`,
              "aria-label": P(L),
              class: t([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: L === i.value
                }
              ]),
              role: "tab",
              onClick: (Xe) => r(L)
            }, g(e.cqItems[A]["cq:panelTitle"]), 11, Ve))), 128))
          ], 10, Ge)
        ], 34)),
        _(p) ? (a(), h(_(se), N(M({ key: 1 }, K.value)), null, 16)) : $("", !0)
      ], 10, ke);
    };
  }
}), cs = /* @__PURE__ */ z({
  __name: "CoreExperienceFragment",
  setup(s) {
    return (e, l) => (a(), h(ve, { "is-in-editor": !1 }));
  }
}), Ue = ["id"], He = ["aria-label"], Ke = ["tabIndex", "onClick"], rs = /* @__PURE__ */ z({
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
  setup(s) {
    const e = s, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), p = S("componentMapping", new Q()), I = q(1), c = q(0), v = q(E.initMessageChannel()), i = C(
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
      b !== -1 && typeof b < "u" && b !== F && b !== c.value && (c.value = b, await me(), be._notifyListeners(
        `${e.cqPath}/${e.cqItemsOrder[b]}`
      ));
    });
    const P = E.createCallbackListener(
      e.cqPath,
      I
    );
    return te(() => {
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
        class: t(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (a(!0), u(R, null, T(e.cqItemsOrder, (k, O) => (a(), u("li", {
          key: `tab-${O}`,
          class: t([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: O === c.value
            }
          ]),
          tabIndex: O === c.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (G) => K(O)
        }, g(e.cqItems[k]["cq:panelTitle"]), 11, Ke))), 128))
      ], 10, He)),
      _(l) ? (a(!0), u(R, { key: 1 }, T(i.value, (k, O) => (a(), u("div", {
        key: `tab-content-${O}`,
        class: t(`${e.baseCssClass}__author-tab-content`),
        style: le({ display: c.value === O ? "block" : "none" })
      }, [
        (a(), h(D(k), N(Ce({ isInEditor: !1 })), null, 16))
      ], 6))), 128)) : (a(), h(D(i.value[c.value]), { key: 2 })),
      _(l) ? (a(), h(_(se), N(M({ key: 3 }, H.value)), null, 16)) : $("", !0)
    ], 16, Ue));
  }
});
export {
  Ye as AccordionEditConfig,
  Ze as CarouselEditConfig,
  es as ContainerEditConfig,
  ss as ContentFragmentEditConfig,
  os as CoreAccordion,
  is as CoreCarousel,
  ve as CoreContainer,
  ls as CoreContentFragment,
  cs as CoreExperienceFragment,
  rs as CoreTabs,
  Ie as DefaultContentFragment,
  ts as ExperienceFragmentEditConfig,
  ns as MapToContentFragmentModel,
  E as SpaUtils,
  as as TabsEditConfig,
  he as getRenderer,
  ye as mapRenderer
};
