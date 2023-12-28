import { MapTo as ce, ComponentMapping as U, componentProperties as z, componentClassNames as H, AllowedComponentsContainer as re, ResponsiveGrid as de, Container as ue, Utils as Y, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { defineComponent as F, useAttrs as Z, inject as S, computed as m, openBlock as a, createBlock as v, unref as y, normalizeProps as L, mergeProps as x, resolveDynamicComponent as R, normalizeClass as s, normalizeStyle as pe, withCtx as ae, createElementBlock as d, createElementVNode as n, toDisplayString as I, createCommentVNode as q, Fragment as N, renderList as B, ref as w, watch as W, onMounted as ne, onUnmounted as le, guardReactiveProps as me } from "vue";
import { AuthoringUtils as K } from "@adobe/aem-spa-page-model-manager";
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
}, Ce = "ContentFragment-", oe = (t) => Ce + t, be = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((u) => {
    ce(oe(u))(e);
  });
}, _e = (t) => {
  const e = oe(t);
  return U.get(e);
}, at = (t) => (e) => be(t, e), ye = /* @__PURE__ */ F({
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
    const e = t, l = Z(), u = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", K.isInEditor()), f = m(
      () => H(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), C = m(
      () => {
        var g;
        return u && (l == null ? void 0 : l.allowedComponents) && ((g = l == null ? void 0 : l.allowedComponents) == null ? void 0 : g.applicable);
      }
    );
    return (g, i) => C.value ? (a(), v(y(re), L(x({ key: 0 }, { ...e, ...y(l) })), null, 16)) : (a(), v(R(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: s(f.value),
      role: e.roleAttribute,
      style: pe(e.backgroundStyle)
    }, {
      default: ae(() => [
        t.layout === "RESPONSIVE_GRID" ? (a(), v(y(de), L(x({ key: 0 }, {
          ...e,
          ...y(l),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), v(y(ue), L(x({ key: 1 }, { ...e, ...y(l) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), he = ["id"], ve = ["innerHTML"], fe = /* @__PURE__ */ F({
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
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", K.isInEditor()), u = S("componentMapping", new U()), f = m(
      () => H(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), C = m(
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
    return (g, i) => {
      var $;
      return a(), d("div", {
        id: e.id,
        class: s(f.value)
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
          (a(!0), d(N, null, B(e.elementsOrder, (r, O) => (a(), d("div", {
            key: `${e.id}-element-${r}-${O}`,
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
            }, null, 10, ve),
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
        (a(!0), d(N, null, B(C.value, (r) => (a(), v(R(r), {
          key: r.toString()
        }))), 128))
      ], 10, he);
    };
  }
}), nt = /* @__PURE__ */ F({
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
    const e = t, l = Z(), u = m(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), f = m(() => {
      const C = _e(e.model);
      return C || fe;
    });
    return (C, g) => u.value ? q("", !0) : (a(), v(R(f.value), L(x({ key: 0 }, { ...e, ...y(l) })), null, 16));
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
}, ge = ["id", "data-cmp-single-expansion"], Ie = ["id", "data-cmp-expanded"], qe = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], $e = /* @__PURE__ */ n("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), Ee = [
  $e
], we = ["id", "aria-labelledby"], lt = /* @__PURE__ */ F({
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
    const e = t, l = Z(), u = S("isInEditor", K.isInEditor()), f = S("componentMapping", new U()), C = w(M.initMessageChannel()), g = w(-1), i = w(e.expandedItems), $ = w(null), r = m(() => (l == null ? void 0 : l.singleExpansion) === !0), O = m(() => {
      const o = {};
      return u && (o["data-panelcontainer"] = "accordion", o["data-cq-data-path"] = e.cqPath || "", o["data-placeholder-text"] = "Please drag Accordion item components here"), o;
    }), X = m(
      () => Y.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        f
      )
    ), P = m(
      () => H(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), b = (o) => {
      const p = $.value.querySelector(
        `button[data-cmp-button-id="${o}"]`
      );
      p && p.focus();
    }, J = (o, p) => {
      const c = i.value.indexOf(o) > -1;
      if (r.value)
        i.value = c ? [] : [o];
      else if (c) {
        const E = i.value.indexOf(o);
        i.value.splice(E, 1);
      } else
        i.value.push(o);
      p.target.focus();
    }, Q = (o, p, c) => {
      const E = $.value.querySelectorAll("button").length - 1;
      switch (p.code) {
        case "ArrowLeft":
        case "ArrowUp":
          p.preventDefault(), c > 0 && b(c - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          p.preventDefault(), c < E && b(c + 1);
          break;
        case "Home":
          p.preventDefault(), b(0);
          break;
        case "End":
          p.preventDefault(), b(E);
          break;
        case "Enter":
        case "Space":
          p.preventDefault(), J(o, p), b(c);
          break;
      }
    }, j = (o) => i.value.indexOf(o) > -1, ee = m(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    W(r, async (o, p) => {
      o !== p && (i.value = e.expandedItems);
    }), W(e.expandedItems, async (o, p) => {
      o !== p && (i.value = o);
    }), W(g, async (o, p) => {
      o !== -1 && typeof o < "u" && o !== p && e.cqItemsOrder && (i.value = [e.cqItemsOrder[o]]);
    });
    const G = M.createCallbackListener(
      e.cqPath,
      g
    );
    return ne(() => {
      M.subscribeRequestMessage(C.value, G);
    }), le(() => {
      M.unsubscribeRequestMessage(C.value, G);
    }), (o, p) => (a(), d("div", x({
      id: e.id,
      ref_key: "accordion",
      ref: $,
      class: P.value,
      "data-cmp-single-expansion": r.value === !0 ? !0 : void 0
    }, O.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (a(!0), d(N, { key: 0 }, B(e.cqItemsOrder, (c, E) => (a(), d("div", {
        id: `accordion-${e.cqItems[c].id}`,
        key: `accordion-index-${E}`,
        class: s(`${e.baseCssClass}__item`),
        "data-cmp-expanded": j(c) ? !0 : void 0
      }, [
        (a(), v(R(e.headingElement), {
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
              }, Ee, 2)
            ], 42, qe)
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
          e.cqItemsOrder ? (a(), v(R(X.value[t.cqItemsOrder.indexOf(c)]), { key: 0 })) : q("", !0)
        ], 10, we)) : q("", !0)
      ], 10, Ie))), 128)) : q("", !0),
      y(u) ? (a(), v(y(te), L(x({ key: 1 }, ee.value)), null, 16)) : q("", !0)
    ], 16, ge));
  }
}), Oe = ["id", "aria-label"], Pe = ["aria-label"], xe = ["aria-label"], Se = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), ke = [
  Se
], Ae = ["aria-label"], Me = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), Le = [
  Me
], Ne = ["aria-label"], De = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), Re = [
  De
], Be = ["aria-label"], Fe = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M8 5v14l11-7z" })
], -1), je = [
  Fe
], Te = ["aria-label"], ze = ["aria-label", "onClick"], ot = /* @__PURE__ */ F({
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
    const e = t, l = Z(), u = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", K.isInEditor()), f = S("componentMapping", new U()), C = w(-1), g = w(-1), i = w(0), $ = w(M.initMessageChannel()), r = w((l == null ? void 0 : l.autoplay) === !0 && !u), O = m(
      () => Y.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        f
      )
    ), X = m(
      () => H(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), P = m(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), b = (h) => {
      var D;
      let _ = ((D = e.accessibility) == null ? void 0 : D.indicator) || "";
      const T = "{0}";
      return _ = _.replace(T, (h + 1).toString()), _;
    }, J = (h) => {
      var k;
      let _ = ((k = e.accessibility) == null ? void 0 : k.slide) || "";
      const T = "{0}";
      _ = _.replace(T, (h + 1).toString());
      const D = "{1}";
      return _ = _.replace(
        D,
        e.cqItemsOrder.length.toString()
      ), _;
    }, Q = () => {
      i.value === e.cqItemsOrder.length - 1 ? i.value = 0 : i.value += 1;
    }, j = () => {
      i.value === 0 ? i.value = e.cqItemsOrder.length - 1 : i.value -= 1;
    }, ee = () => {
      !r.value || e.cqItemsOrder.length <= 1 || Q();
    }, G = () => {
      C.value = setInterval(() => {
        ee();
      }, e.delay);
    }, o = () => {
      clearInterval(C.value);
    }, p = (h) => {
      r.value = h;
    }, c = (h) => {
      i.value !== h && (i.value = h);
    }, E = () => {
      !e.autopauseDisabled && r.value && o();
    }, V = () => {
      !e.autopauseDisabled && r.value && G();
    }, ie = m(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    W(g, async (h, _) => {
      h !== -1 && typeof h < "u" && h !== _ && (i.value = h, r.value = !1);
    });
    const se = M.createCallbackListener(
      e.cqPath,
      g
    );
    return ne(() => {
      G(), M.subscribeRequestMessage($.value, se);
    }), le(() => {
      typeof C.value == "number" && C.value >= 0 && o(), M.unsubscribeRequestMessage($.value, se);
    }), (h, _) => {
      var T, D;
      return a(), d("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: s(X.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        ie.value ? q("", !0) : (a(), d("div", {
          key: 0,
          class: s(`${e.baseCssClass}__content`),
          onMouseenter: E,
          onMouseleave: V
        }, [
          n("div", {
            class: s([{ [`${e.baseCssClass}__items`]: !y(u) }])
          }, [
            (a(!0), d(N, null, B(O.value, (k, A) => (a(), d("div", {
              key: `item-${A}`,
              "aria-label": J(A),
              class: s([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: A === i.value
                }
              ]),
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (a(), v(R(k)))
            ], 10, Pe))), 128))
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
              }, ke, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.previous), 3)
            ], 10, xe),
            n("button", {
              "aria-label": e.accessibility.next,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: Q
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Le, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.next), 3)
            ], 10, Ae),
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
                onClick: _[0] || (_[0] = (k) => p(!1))
              }, [
                n("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, Re, 2),
                n("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, I(e.accessibility.pause), 3)
              ], 10, Ne),
              n("button", {
                "aria-label": e.accessibility.play,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: r.value }
                ]),
                type: "button",
                onClick: _[1] || (_[1] = (k) => p(!0))
              }, [
                n("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, je, 2),
                n("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, I(e.accessibility.play), 3)
              ], 10, Be)
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
                  [`${e.baseCssClass}__indicator--active`]: A === i.value
                }
              ]),
              role: "tab",
              onClick: (Ke) => c(A)
            }, I(e.cqItems[k]["cq:panelTitle"]), 11, ze))), 128))
          ], 10, Te)
        ], 34)),
        y(u) ? (a(), v(y(te), L(x({ key: 1 }, P.value)), null, 16)) : q("", !0)
      ], 10, Oe);
    };
  }
}), it = /* @__PURE__ */ F({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, l) => (a(), v(ye, { "is-in-editor": !1 }));
  }
}), Ge = ["id"], Ve = ["aria-label"], Ue = ["id", "aria-controls", "tabIndex"], He = ["id", "aria-labelledby"], ct = /* @__PURE__ */ F({
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
    ...z("cmp-tabs")
  },
  setup(t) {
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", K.isInEditor()), u = S("componentMapping", new U()), f = w(0), C = m(
      () => Y.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        u
      )
    ), g = m(
      () => H(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), i = m(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), $ = m(() => {
      const O = {
        class: "aem-container",
        "data-cmp-is": "tabs",
        "data-panelcontainer": "tabs"
      };
      return l && (O["data-cq-data-path"] = e.cqPath), O;
    }), r = m(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return (O, X) => (a(), d("div", x({
      id: e.id,
      class: g.value
    }, $.value), [
      i.value ? q("", !0) : (a(), d("ol", {
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
              [`${e.baseCssClass}__tab--active`]: b === f.value
            }
          ]),
          tabIndex: b === f.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab"
        }, I(e.cqItems[P]["cq:panelTitle"]), 11, Ue))), 128))
      ], 10, Ve)),
      i.value ? q("", !0) : (a(!0), d(N, { key: 1 }, B(C.value, (P, b) => (a(), d("div", {
        id: `${e.cqItems[e.cqItemsOrder[b]].id}-tabpanel`,
        key: `tab-content-${b}`,
        class: s([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: b === f.value
          }
        ]),
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[b]].id}-tab`,
        "data-cmp-hook-tabs": "tabpanel",
        role: "tabpanel",
        tabindex: "0"
      }, [
        (a(), v(R(P), L(me({ isInEditor: !1 })), null, 16))
      ], 10, He))), 128)),
      y(l) ? (a(), v(y(te), L(x({ key: 2 }, r.value)), null, 16)) : q("", !0)
    ], 16, Ge));
  }
});
export {
  We as AccordionEditConfig,
  Ye as CarouselEditConfig,
  Ze as ContainerEditConfig,
  et as ContentFragmentEditConfig,
  lt as CoreAccordion,
  ot as CoreCarousel,
  ye as CoreContainer,
  nt as CoreContentFragment,
  it as CoreExperienceFragment,
  ct as CoreTabs,
  fe as DefaultContentFragment,
  tt as ExperienceFragmentEditConfig,
  at as MapToContentFragmentModel,
  M as SpaUtils,
  st as TabsEditConfig,
  _e as getRenderer,
  be as mapRenderer
};
