import { MapTo as re, ComponentMapping as Q, componentProperties as U, componentClassNames as W, AllowedComponentsContainer as de, ResponsiveGrid as ue, Container as pe, Utils as Z, ContainerPlaceholder as se } from "aem-vue-3-editable-components";
import { defineComponent as z, useAttrs as ee, inject as M, computed as C, openBlock as a, createBlock as h, unref as _, normalizeProps as N, mergeProps as S, resolveDynamicComponent as D, normalizeClass as t, normalizeStyle as le, withCtx as oe, createElementBlock as u, createElementVNode as l, toDisplayString as f, createCommentVNode as $, Fragment as R, renderList as T, ref as q, watch as X, onMounted as te, onUnmounted as ae, guardReactiveProps as me } from "vue";
import { AuthoringUtils as Y } from "@adobe/aem-spa-page-model-manager";
const Qe = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, We = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, Ye = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, Ze = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return s.elementsOrder.length === 0 && s.cqItemsOrder.length === 0;
  }
}, es = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, ss = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, Ce = "ContentFragment-", ie = (s) => Ce + s, be = (s, e) => {
  s && e && (typeof s == "string" ? [s] : s).forEach((p) => {
    re(ie(p))(e);
  });
}, _e = (s) => {
  const e = ie(s);
  return Q.get(e);
}, ts = (s) => (e) => be(s, e), ye = /* @__PURE__ */ z({
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
    const e = s, n = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), I = C(
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
        return p && (n == null ? void 0 : n.allowedComponents) && ((v = n == null ? void 0 : n.allowedComponents) == null ? void 0 : v.applicable);
      }
    );
    return (v, i) => c.value ? (a(), h(_(de), N(S({ key: 0 }, { ...e, ..._(n) })), null, 16)) : (a(), h(D(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: t(I.value),
      role: e.roleAttribute,
      style: le(e.backgroundStyle)
    }, {
      default: oe(() => [
        s.layout === "RESPONSIVE_GRID" ? (a(), h(_(ue), N(S({ key: 0 }, {
          ...e,
          ..._(n),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), h(_(pe), N(S({ key: 1 }, { ...e, ..._(n) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), he = ["id"], ve = ["innerHTML"], ge = /* @__PURE__ */ z({
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
    const e = s, n = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), p = M("componentMapping", new Q()), I = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
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
        l("h3", {
          class: t(`${e.baseCssClass}__title`)
        }, f(e.title), 3),
        e.description ? (a(), u("p", {
          key: 0,
          class: t(`${e.baseCssClass}__description`)
        }, f(e.description), 3)) : $("", !0),
        (w = e.elementsOrder) != null && w.length ? (a(), u("div", {
          key: 1,
          class: t(`${e.baseCssClass}__elements`)
        }, [
          (a(!0), u(R, null, T(e.elementsOrder, (d, B) => (a(), u("div", {
            key: `${e.id}-element-${d}-${B}`,
            class: t(`${e.baseCssClass}__element`)
          }, [
            l("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              l("h4", null, f(d), 1)
            ], 2),
            l("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[d].value}`
            }, null, 10, ve),
            l("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + f(e.elements[d].dataType), 3),
            l("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + f(e.elements[d].multiValue ? "true" : "false"), 3),
            l("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + f(e.elements[d][":type"]), 3)
          ], 2))), 128))
        ], 2)) : $("", !0),
        (a(!0), u(R, null, T(c.value, (d) => (a(), h(D(d), {
          key: d.toString()
        }))), 128))
      ], 10, he);
    };
  }
}), as = /* @__PURE__ */ z({
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
    const e = s, n = ee(), p = C(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), I = C(() => {
      const c = _e(e.model);
      return c || ge;
    });
    return (c, v) => p.value ? $("", !0) : (a(), h(D(I.value), N(S({ key: 0 }, { ...e, ..._(n) })), null, 16));
  }
}), E = {
  createCallbackListener(s, e) {
    return (n, p = s) => {
      n.data && n.data.id === p && n.data.operation === "navigate" && (console.log(
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
}, fe = ["id", "data-cmp-single-expansion"], Ie = ["id", "data-cmp-expanded"], qe = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], $e = /* @__PURE__ */ l("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), Ee = [
  $e
], we = ["id", "aria-labelledby"], ns = /* @__PURE__ */ z({
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
    const e = s, n = ee(), p = M("isInEditor", Y.isInEditor()), I = M("componentMapping", new Q()), c = q(E.initMessageChannel()), v = q(-1), i = q(e.expandedItems), w = q(null), d = C(() => (n == null ? void 0 : n.singleExpansion) === !0), B = C(() => {
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
    X(d, async (o, m) => {
      o !== m && (i.value = e.expandedItems);
    }), X(e.expandedItems, async (o, m) => {
      o !== m && (i.value = o);
    }), X(v, async (o, m) => {
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
    }), (o, m) => (a(), u("div", S({
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
            l("button", {
              id: `accordion-${e.cqItems[r].id}-button`,
              "aria-controls": `accordion-${e.cqItems[r].id}-panel`,
              class: t([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: k(r)
                }
              ]),
              "data-cmp-button-id": x,
              onClick: (J) => b(r, J),
              onKeydown: (J) => F(r, J, x)
            }, [
              l("span", {
                class: t(`${e.baseCssClass}__title`)
              }, f(e.cqItems[r]["cq:panelTitle"]), 3),
              l("span", {
                class: t(`${e.baseCssClass}__icon`)
              }, Ee, 2)
            ], 42, qe)
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
        ], 10, we)) : $("", !0)
      ], 10, Ie))), 128)) : $("", !0),
      _(p) ? (a(), h(_(se), N(S({ key: 1 }, O.value)), null, 16)) : $("", !0)
    ], 16, fe));
  }
}), Oe = ["id", "aria-label"], Pe = ["aria-label"], ke = ["aria-label"], xe = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), Se = [
  xe
], Me = ["aria-label"], Ae = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), Le = [
  Ae
], Ne = ["aria-label"], Re = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), De = [
  Re
], Be = ["aria-label"], Fe = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M8 5v14l11-7z" })
], -1), je = [
  Fe
], Te = ["aria-label"], ze = ["aria-label", "onClick"], ls = /* @__PURE__ */ z({
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
    const e = s, n = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), I = M("componentMapping", new Q()), c = q(-1), v = q(-1), i = q(0), w = q(E.initMessageChannel()), d = q((n == null ? void 0 : n.autoplay) === !0 && !p), B = C(
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
    })), P = (g) => {
      var j;
      let y = ((j = e.accessibility) == null ? void 0 : j.indicator) || "";
      const V = "{0}";
      return y = y.replace(V, (g + 1).toString()), y;
    }, b = (g) => {
      var A;
      let y = ((A = e.accessibility) == null ? void 0 : A.slide) || "";
      const V = "{0}";
      y = y.replace(V, (g + 1).toString());
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
    }, m = (g) => {
      d.value = g;
    }, r = (g) => {
      i.value !== g && (i.value = g);
    }, x = () => {
      !e.autopauseDisabled && d.value && o();
    }, J = () => {
      !e.autopauseDisabled && d.value && G();
    }, ce = C(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    X(v, async (g, y) => {
      g !== -1 && typeof g < "u" && g !== y && (i.value = g, d.value = !1);
    });
    const ne = E.createCallbackListener(
      e.cqPath,
      v
    );
    return te(() => {
      G(), E.subscribeRequestMessage(w.value, ne);
    }), ae(() => {
      typeof c.value == "number" && c.value >= 0 && o(), E.unsubscribeRequestMessage(w.value, ne);
    }), (g, y) => {
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
          onMouseleave: J
        }, [
          l("div", {
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
            ], 10, Pe))), 128))
          ], 2),
          l("div", {
            class: t(`${e.baseCssClass}__actions`)
          }, [
            l("button", {
              "aria-label": e.accessibility.previous,
              class: t(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: k
            }, [
              l("span", {
                class: t(`${e.baseCssClass}__action-icon`)
              }, Se, 2),
              l("span", {
                class: t(`${e.baseCssClass}__action-text`)
              }, f(e.accessibility.previous), 3)
            ], 10, ke),
            l("button", {
              "aria-label": e.accessibility.next,
              class: t(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: F
            }, [
              l("span", {
                class: t(`${e.baseCssClass}__action-icon`)
              }, Le, 2),
              l("span", {
                class: t(`${e.baseCssClass}__action-text`)
              }, f(e.accessibility.next), 3)
            ], 10, Me),
            ((V = _(n)) == null ? void 0 : V.autoplay) === !0 ? (a(), u(R, { key: 0 }, [
              l("button", {
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
                l("span", {
                  class: t(`${e.baseCssClass}__action-icon`)
                }, De, 2),
                l("span", {
                  class: t(`${e.baseCssClass}__action-text`)
                }, f(e.accessibility.pause), 3)
              ], 10, Ne),
              l("button", {
                "aria-label": e.accessibility.play,
                class: t([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: d.value }
                ]),
                type: "button",
                onClick: y[1] || (y[1] = (A) => m(!0))
              }, [
                l("span", {
                  class: t(`${e.baseCssClass}__action-icon`)
                }, je, 2),
                l("span", {
                  class: t(`${e.baseCssClass}__action-text`)
                }, f(e.accessibility.play), 3)
              ], 10, Be)
            ], 64)) : $("", !0)
          ], 2),
          l("ol", {
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
              onClick: (He) => r(L)
            }, f(e.cqItems[A]["cq:panelTitle"]), 11, ze))), 128))
          ], 10, Te)
        ], 34)),
        _(p) ? (a(), h(_(se), N(S({ key: 1 }, K.value)), null, 16)) : $("", !0)
      ], 10, Oe);
    };
  }
}), os = /* @__PURE__ */ z({
  __name: "CoreExperienceFragment",
  setup(s) {
    return (e, n) => (a(), h(ye, { "is-in-editor": !1 }));
  }
}), Ge = ["id"], Ve = ["aria-label"], Ue = ["tabIndex", "onClick"], is = /* @__PURE__ */ z({
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
    const e = s, n = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), p = M("componentMapping", new Q()), I = q(1), c = q(0), v = q(E.initMessageChannel()), i = C(
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
        n,
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
      return n && (b["data-cq-data-path"] = e.cqPath), b;
    }), H = C(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), K = (b) => {
      c.value !== b && (c.value = b);
    };
    X(I, async (b, F) => {
      b !== -1 && typeof b < "u" && b !== F && b !== c.value && (c.value = b);
    });
    const P = E.createCallbackListener(
      e.cqPath,
      I
    );
    return te(() => {
      E.subscribeRequestMessage(v.value, P);
    }), ae(() => {
      E.unsubscribeRequestMessage(v.value, P);
    }), (b, F) => (a(), u("div", S({
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
        }, f(e.cqItems[k]["cq:panelTitle"]), 11, Ue))), 128))
      ], 10, Ve)),
      _(n) ? (a(!0), u(R, { key: 1 }, T(i.value, (k, O) => (a(), u("div", {
        key: `tab-content-${O}`,
        class: t(`${e.baseCssClass}__author-tab-content`),
        style: le({ display: c.value === O ? "block" : "none" })
      }, [
        (a(), h(D(k), N(me({ isInEditor: !1 })), null, 16))
      ], 6))), 128)) : (a(), h(D(i.value[c.value]), { key: 2 })),
      _(n) ? (a(), h(_(se), N(S({ key: 3 }, H.value)), null, 16)) : $("", !0)
    ], 16, Ge));
  }
});
export {
  Qe as AccordionEditConfig,
  We as CarouselEditConfig,
  Ye as ContainerEditConfig,
  Ze as ContentFragmentEditConfig,
  ns as CoreAccordion,
  ls as CoreCarousel,
  ye as CoreContainer,
  as as CoreContentFragment,
  os as CoreExperienceFragment,
  is as CoreTabs,
  ge as DefaultContentFragment,
  es as ExperienceFragmentEditConfig,
  ts as MapToContentFragmentModel,
  E as SpaUtils,
  ss as TabsEditConfig,
  _e as getRenderer,
  be as mapRenderer
};
