import { MapTo as ce, ComponentMapping as U, componentProperties as z, componentClassNames as H, AllowedComponentsContainer as re, ResponsiveGrid as de, Container as ue, Utils as Y, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { defineComponent as F, useAttrs as Z, inject as S, computed as p, openBlock as a, createBlock as f, unref as y, normalizeProps as L, mergeProps as x, resolveDynamicComponent as R, normalizeClass as s, normalizeStyle as me, withCtx as ae, createElementBlock as d, createElementVNode as n, toDisplayString as I, createCommentVNode as q, Fragment as N, renderList as B, ref as O, watch as W, onMounted as ne, onUnmounted as le, watchEffect as pe, guardReactiveProps as Ce } from "vue";
import { AuthoringUtils as K } from "@adobe/aem-spa-page-model-manager";
const Ye = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ze = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, et = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, tt = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return t.elementsOrder.length === 0 && t.cqItemsOrder.length === 0;
  }
}, st = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, at = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, be = "ContentFragment-", ie = (t) => be + t, _e = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((u) => {
    ce(ie(u))(e);
  });
}, ye = (t) => {
  const e = ie(t);
  return U.get(e);
}, nt = (t) => (e) => _e(t, e), he = /* @__PURE__ */ F({
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
    ...z("cmp-container")
  },
  setup(t) {
    const e = t, l = Z(), u = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", K.isInEditor()), h = p(
      () => H(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), C = p(
      () => {
        var g;
        return u && (l == null ? void 0 : l.allowedComponents) && ((g = l == null ? void 0 : l.allowedComponents) == null ? void 0 : g.applicable);
      }
    );
    return (g, o) => C.value ? (a(), f(y(re), L(x({ key: 0 }, { ...e, ...y(l) })), null, 16)) : (a(), f(R(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: s(h.value),
      role: e.roleAttribute,
      style: me(e.backgroundStyle)
    }, {
      default: ae(() => [
        t.layout === "RESPONSIVE_GRID" ? (a(), f(y(de), L(x({ key: 0 }, {
          ...e,
          ...y(l),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), f(y(ue), L(x({ key: 1 }, { ...e, ...y(l) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), ve = ["id"], fe = ["innerHTML"], ge = /* @__PURE__ */ F({
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
    ...z("cmp-contentfragment")
  },
  setup(t) {
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", K.isInEditor()), u = S("componentMapping", new U()), h = p(
      () => H(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), C = p(
      () => Y.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        u
      )
    );
    return (g, o) => {
      var $;
      return a(), d("div", {
        id: e.id,
        class: s(h.value)
      }, [
        n("h3", {
          class: s(`${e.baseCssClass}__title`)
        }, I(e.title), 3),
        e.description ? (a(), d("p", {
          key: 0,
          class: s(`${e.baseCssClass}__description`)
        }, I(e.description), 3)) : q("", !0),
        ($ = e.elementsOrder) != null && $.length ? (a(), d("div", {
          key: 1,
          class: s(`${e.baseCssClass}__elements`)
        }, [
          (a(!0), d(N, null, B(e.elementsOrder, (r, w) => (a(), d("div", {
            key: `${e.id}-element-${r}-${w}`,
            class: s(`${e.baseCssClass}__element`)
          }, [
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              n("h4", null, I(r), 1)
            ], 2),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[r].value}`
            }, null, 10, fe),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + I(e.elements[r].dataType), 3),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + I(e.elements[r].multiValue ? "true" : "false"), 3),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + I(e.elements[r][":type"]), 3)
          ], 2))), 128))
        ], 2)) : q("", !0),
        (a(!0), d(N, null, B(C.value, (r) => (a(), f(R(r), {
          key: r.toString()
        }))), 128))
      ], 10, ve);
    };
  }
}), lt = /* @__PURE__ */ F({
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
    ...z("cmp-contentfragment")
  },
  setup(t) {
    const e = t, l = Z(), u = p(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), h = p(() => {
      const C = ye(e.model);
      return C || ge;
    });
    return (C, g) => u.value ? q("", !0) : (a(), f(R(h.value), L(x({ key: 0 }, { ...e, ...y(l) })), null, 16));
  }
}), M = {
  createCallbackListener(t, e) {
    return (l, u = t) => {
      l.data && l.data.id === u && l.data.operation === "navigate" && (e.value = l.data.index);
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
}, Ie = ["id", "data-cmp-single-expansion"], qe = ["id", "data-cmp-expanded"], $e = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], Ee = /* @__PURE__ */ n("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), Oe = [
  Ee
], we = ["id", "aria-labelledby"], it = /* @__PURE__ */ F({
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
    ...z("cmp-accordion")
  },
  setup(t) {
    const e = t, l = Z(), u = S("isInEditor", K.isInEditor()), h = S("componentMapping", new U()), C = O(M.initMessageChannel()), g = O(-1), o = O(e.expandedItems), $ = O(null), r = p(() => (l == null ? void 0 : l.singleExpansion) === !0), w = p(() => {
      const i = {};
      return u && (i["data-panelcontainer"] = "accordion", i["data-cq-data-path"] = e.cqPath || "", i["data-placeholder-text"] = "Please drag Accordion item components here"), i;
    }), X = p(
      () => Y.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        h
      )
    ), P = p(
      () => H(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), b = (i) => {
      const m = $.value.querySelector(
        `button[data-cmp-button-id="${i}"]`
      );
      m && m.focus();
    }, J = (i, m) => {
      const c = o.value.indexOf(i) > -1;
      if (r.value)
        o.value = c ? [] : [i];
      else if (c) {
        const E = o.value.indexOf(i);
        o.value.splice(E, 1);
      } else
        o.value.push(i);
      m.target.focus();
    }, Q = (i, m, c) => {
      const E = $.value.querySelectorAll("button").length - 1;
      switch (m.code) {
        case "ArrowLeft":
        case "ArrowUp":
          m.preventDefault(), c > 0 && b(c - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          m.preventDefault(), c < E && b(c + 1);
          break;
        case "Home":
          m.preventDefault(), b(0);
          break;
        case "End":
          m.preventDefault(), b(E);
          break;
        case "Enter":
        case "Space":
          m.preventDefault(), J(i, m), b(c);
          break;
      }
    }, j = (i) => o.value.indexOf(i) > -1, ee = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    W(r, async (i, m) => {
      i !== m && (o.value = e.expandedItems);
    }), W(e.expandedItems, async (i, m) => {
      i !== m && (o.value = i);
    }), W(g, async (i, m) => {
      i !== -1 && typeof i < "u" && i !== m && e.cqItemsOrder && (o.value = [e.cqItemsOrder[i]]);
    });
    const G = M.createCallbackListener(
      e.cqPath,
      g
    );
    return ne(() => {
      M.subscribeRequestMessage(C.value, G);
    }), le(() => {
      M.unsubscribeRequestMessage(C.value, G);
    }), (i, m) => (a(), d("div", x({
      id: e.id,
      ref_key: "accordion",
      ref: $,
      class: P.value,
      "data-cmp-single-expansion": r.value === !0 ? !0 : void 0
    }, w.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (a(!0), d(N, { key: 0 }, B(e.cqItemsOrder, (c, E) => (a(), d("div", {
        id: `accordion-${e.cqItems[c].id}`,
        key: `accordion-index-${E}`,
        class: s(`${e.baseCssClass}__item`),
        "data-cmp-expanded": j(c) ? !0 : void 0
      }, [
        (a(), f(R(e.headingElement), {
          class: s(`${e.baseCssClass}__heading`)
        }, {
          default: ae(() => [
            n("button", {
              id: `accordion-${e.cqItems[c].id}-button`,
              "aria-controls": `accordion-${e.cqItems[c].id}-panel`,
              class: s([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: j(c)
                }
              ]),
              "data-cmp-button-id": E,
              onClick: (V) => J(c, V),
              onKeydown: (V) => Q(c, V, E)
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__title`)
              }, I(e.cqItems[c]["cq:panelTitle"]), 3),
              n("span", {
                class: s(`${e.baseCssClass}__icon`)
              }, Oe, 2)
            ], 42, $e)
          ]),
          _: 2
        }, 1032, ["class"])),
        y(u) || j(c) ? (a(), d("div", {
          key: 0,
          id: `accordion-${e.cqItems[c].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[c].id}-button`,
          class: s(`${e.baseCssClass}__panel ${j(c) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (a(), f(R(X.value[t.cqItemsOrder.indexOf(c)]), { key: 0 })) : q("", !0)
        ], 10, we)) : q("", !0)
      ], 10, qe))), 128)) : q("", !0),
      y(u) ? (a(), f(y(te), L(x({ key: 1 }, ee.value)), null, 16)) : q("", !0)
    ], 16, Ie));
  }
}), Pe = ["id", "aria-label"], xe = ["aria-label"], Se = ["aria-label"], ke = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), Ae = [
  ke
], Me = ["aria-label"], Le = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), Ne = [
  Le
], De = ["aria-label"], Re = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), Be = [
  Re
], Fe = ["aria-label"], je = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M8 5v14l11-7z" })
], -1), Te = [
  je
], ze = ["aria-label"], Ge = ["aria-label", "onClick"], ot = /* @__PURE__ */ F({
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
    ...z("cmp-carousel")
  },
  setup(t) {
    const e = t, l = Z(), u = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", K.isInEditor()), h = S("componentMapping", new U()), C = O(-1), g = O(-1), o = O(0), $ = O(M.initMessageChannel()), r = O((l == null ? void 0 : l.autoplay) === !0 && !u), w = p(
      () => Y.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        h
      )
    ), X = p(
      () => H(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), P = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), b = (v) => {
      var D;
      let _ = ((D = e.accessibility) == null ? void 0 : D.indicator) || "";
      const T = "{0}";
      return _ = _.replace(T, (v + 1).toString()), _;
    }, J = (v) => {
      var k;
      let _ = ((k = e.accessibility) == null ? void 0 : k.slide) || "";
      const T = "{0}";
      _ = _.replace(T, (v + 1).toString());
      const D = "{1}";
      return _ = _.replace(
        D,
        e.cqItemsOrder.length.toString()
      ), _;
    }, Q = () => {
      o.value === e.cqItemsOrder.length - 1 ? o.value = 0 : o.value += 1;
    }, j = () => {
      o.value === 0 ? o.value = e.cqItemsOrder.length - 1 : o.value -= 1;
    }, ee = () => {
      !r.value || e.cqItemsOrder.length <= 1 || Q();
    }, G = () => {
      C.value = setInterval(() => {
        ee();
      }, e.delay);
    }, i = () => {
      clearInterval(C.value);
    }, m = (v) => {
      r.value = v;
    }, c = (v) => {
      o.value !== v && (o.value = v);
    }, E = () => {
      !e.autopauseDisabled && r.value && i();
    }, V = () => {
      !e.autopauseDisabled && r.value && G();
    }, oe = p(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    W(g, async (v, _) => {
      v !== -1 && typeof v < "u" && v !== _ && (o.value = v, r.value = !1);
    });
    const se = M.createCallbackListener(
      e.cqPath,
      g
    );
    return ne(() => {
      G(), M.subscribeRequestMessage($.value, se);
    }), le(() => {
      typeof C.value == "number" && C.value >= 0 && i(), M.unsubscribeRequestMessage($.value, se);
    }), (v, _) => {
      var T, D;
      return a(), d("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: s(X.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        oe.value ? q("", !0) : (a(), d("div", {
          key: 0,
          class: s(`${e.baseCssClass}__content`),
          onMouseenter: E,
          onMouseleave: V
        }, [
          n("div", {
            class: s([{ [`${e.baseCssClass}__items`]: !y(u) }])
          }, [
            (a(!0), d(N, null, B(w.value, (k, A) => (a(), d("div", {
              key: `item-${A}`,
              "aria-label": J(A),
              class: s([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: A === o.value
                }
              ]),
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (a(), f(R(k)))
            ], 10, xe))), 128))
          ], 2),
          n("div", {
            class: s(`${e.baseCssClass}__actions`)
          }, [
            n("button", {
              "aria-label": e.accessibility.previous,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: j
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Ae, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.previous), 3)
            ], 10, Se),
            n("button", {
              "aria-label": e.accessibility.next,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: Q
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Ne, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.next), 3)
            ], 10, Me),
            ((T = y(l)) == null ? void 0 : T.autoplay) === !0 ? (a(), d(N, { key: 0 }, [
              n("button", {
                "aria-label": e.accessibility.pause,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--pause`,
                  {
                    [`${e.baseCssClass}__action--disabled`]: !r.value
                  }
                ]),
                type: "button",
                onClick: _[0] || (_[0] = (k) => m(!1))
              }, [
                n("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, Be, 2),
                n("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, I(e.accessibility.pause), 3)
              ], 10, De),
              n("button", {
                "aria-label": e.accessibility.play,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: r.value }
                ]),
                type: "button",
                onClick: _[1] || (_[1] = (k) => m(!0))
              }, [
                n("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, Te, 2),
                n("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, I(e.accessibility.play), 3)
              ], 10, Fe)
            ], 64)) : q("", !0)
          ], 2),
          n("ol", {
            "aria-label": (D = e.accessibility) == null ? void 0 : D.indicators,
            class: s(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (a(!0), d(N, null, B(e.cqItemsOrder, (k, A) => (a(), d("li", {
              key: `item-${A}`,
              "aria-label": b(A),
              class: s([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: A === o.value
                }
              ]),
              role: "tab",
              onClick: (Xe) => c(A)
            }, I(e.cqItems[k]["cq:panelTitle"]), 11, Ge))), 128))
          ], 10, ze)
        ], 34)),
        y(u) ? (a(), f(y(te), L(x({ key: 1 }, P.value)), null, 16)) : q("", !0)
      ], 10, Pe);
    };
  }
}), ct = /* @__PURE__ */ F({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, l) => (a(), f(he, { "is-in-editor": !1 }));
  }
}), Ve = ["id"], Ue = ["aria-label"], He = ["id", "aria-controls", "tabIndex"], Ke = ["id", "aria-labelledby"], rt = /* @__PURE__ */ F({
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
    ...z("cmp-tabs")
  },
  setup(t) {
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", K.isInEditor()), u = S("componentMapping", new U()), h = O(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    );
    pe(
      // eslint-disable-next-line no-return-assign
      () => h.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    );
    const C = p(
      () => Y.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        u
      )
    ), g = p(
      () => H(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), o = p(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), $ = p(() => {
      const w = {
        class: "aem-container",
        "data-cmp-is": "tabs",
        "data-panelcontainer": "tabs"
      };
      return l && (w["data-cq-data-path"] = e.cqPath), w;
    }), r = p(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return (w, X) => (a(), d("div", x({
      id: e.id,
      class: g.value
    }, $.value), [
      o.value ? q("", !0) : (a(), d("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: s(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (a(!0), d(N, null, B(e.cqItemsOrder, (P, b) => (a(), d("li", {
          id: `${e.cqItems[P].id}-tab`,
          key: `tab-${b}`,
          "aria-controls": `${e.cqItems[P].id}-tabpanel`,
          class: s([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: b === h.value
            }
          ]),
          tabIndex: b === h.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab"
        }, I(e.cqItems[P]["cq:panelTitle"]), 11, He))), 128))
      ], 10, Ue)),
      o.value ? q("", !0) : (a(!0), d(N, { key: 1 }, B(C.value, (P, b) => (a(), d("div", {
        id: `${e.cqItems[e.cqItemsOrder[b]].id}-tabpanel`,
        key: `tab-content-${b}`,
        class: s([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: b === h.value
          }
        ]),
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[b]].id}-tab`,
        "data-cmp-hook-tabs": "tabpanel",
        role: "tabpanel",
        tabindex: "0"
      }, [
        (a(), f(R(P), L(Ce({ isInEditor: !1 })), null, 16))
      ], 10, Ke))), 128)),
      y(l) ? (a(), f(y(te), L(x({ key: 2 }, r.value)), null, 16)) : q("", !0)
    ], 16, Ve));
  }
});
export {
  Ye as AccordionEditConfig,
  Ze as CarouselEditConfig,
  et as ContainerEditConfig,
  tt as ContentFragmentEditConfig,
  it as CoreAccordion,
  ot as CoreCarousel,
  he as CoreContainer,
  lt as CoreContentFragment,
  ct as CoreExperienceFragment,
  rt as CoreTabs,
  ge as DefaultContentFragment,
  st as ExperienceFragmentEditConfig,
  nt as MapToContentFragmentModel,
  M as SpaUtils,
  at as TabsEditConfig,
  ye as getRenderer,
  _e as mapRenderer
};
