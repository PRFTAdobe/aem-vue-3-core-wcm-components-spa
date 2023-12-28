import { MapTo as re, ComponentMapping as U, componentProperties as z, componentClassNames as H, AllowedComponentsContainer as de, ResponsiveGrid as ue, Container as me, Utils as Y, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { defineComponent as F, useAttrs as Z, inject as S, computed as p, openBlock as a, createBlock as f, unref as y, normalizeProps as L, mergeProps as P, resolveDynamicComponent as R, normalizeClass as s, normalizeStyle as pe, withCtx as ae, createElementBlock as d, createElementVNode as n, toDisplayString as g, createCommentVNode as q, Fragment as N, renderList as B, ref as E, watch as W, onMounted as ne, onUnmounted as le, watchEffect as ie, guardReactiveProps as Ce } from "vue";
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
}, be = "ContentFragment-", oe = (t) => be + t, _e = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((u) => {
    re(oe(u))(e);
  });
}, ye = (t) => {
  const e = oe(t);
  return U.get(e);
}, nt = (t) => (e) => _e(t, e), ve = /* @__PURE__ */ F({
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
    const e = t, l = Z(), u = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", K.isInEditor()), v = p(
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
        var I;
        return u && (l == null ? void 0 : l.allowedComponents) && ((I = l == null ? void 0 : l.allowedComponents) == null ? void 0 : I.applicable);
      }
    );
    return (I, o) => C.value ? (a(), f(y(de), L(P({ key: 0 }, { ...e, ...y(l) })), null, 16)) : (a(), f(R(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: s(v.value),
      role: e.roleAttribute,
      style: pe(e.backgroundStyle)
    }, {
      default: ae(() => [
        t.layout === "RESPONSIVE_GRID" ? (a(), f(y(ue), L(P({ key: 0 }, {
          ...e,
          ...y(l),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), f(y(me), L(P({ key: 1 }, { ...e, ...y(l) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), he = ["id"], fe = ["innerHTML"], Ie = /* @__PURE__ */ F({
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
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", K.isInEditor()), u = S("componentMapping", new U()), v = p(
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
    return (I, o) => {
      var $;
      return a(), d("div", {
        id: e.id,
        class: s(v.value)
      }, [
        n("h3", {
          class: s(`${e.baseCssClass}__title`)
        }, g(e.title), 3),
        e.description ? (a(), d("p", {
          key: 0,
          class: s(`${e.baseCssClass}__description`)
        }, g(e.description), 3)) : q("", !0),
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
              n("h4", null, g(r), 1)
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
            }, " datatype: " + g(e.elements[r].dataType), 3),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + g(e.elements[r].multiValue ? "true" : "false"), 3),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + g(e.elements[r][":type"]), 3)
          ], 2))), 128))
        ], 2)) : q("", !0),
        (a(!0), d(N, null, B(C.value, (r) => (a(), f(R(r), {
          key: r.toString()
        }))), 128))
      ], 10, he);
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
    ), v = p(() => {
      const C = ye(e.model);
      return C || Ie;
    });
    return (C, I) => u.value ? q("", !0) : (a(), f(R(v.value), L(P({ key: 0 }, { ...e, ...y(l) })), null, 16));
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
}, ge = ["id", "data-cmp-single-expansion"], qe = ["id", "data-cmp-expanded"], $e = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], Oe = /* @__PURE__ */ n("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), Ee = [
  Oe
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
    const e = t, l = Z(), u = S("isInEditor", K.isInEditor()), v = S("componentMapping", new U()), C = E(M.initMessageChannel()), I = E(-1), o = E(e.expandedItems), $ = E(null), r = p(() => (l == null ? void 0 : l.singleExpansion) === !0), w = p(() => {
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
        v
      )
    ), x = p(
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
        const O = o.value.indexOf(i);
        o.value.splice(O, 1);
      } else
        o.value.push(i);
      m.target.focus();
    }, Q = (i, m, c) => {
      const O = $.value.querySelectorAll("button").length - 1;
      switch (m.code) {
        case "ArrowLeft":
        case "ArrowUp":
          m.preventDefault(), c > 0 && b(c - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          m.preventDefault(), c < O && b(c + 1);
          break;
        case "Home":
          m.preventDefault(), b(0);
          break;
        case "End":
          m.preventDefault(), b(O);
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
    }), W(I, async (i, m) => {
      i !== -1 && typeof i < "u" && i !== m && e.cqItemsOrder && (o.value = [e.cqItemsOrder[i]]);
    });
    const G = M.createCallbackListener(
      e.cqPath,
      I
    );
    return ne(() => {
      M.subscribeRequestMessage(C.value, G);
    }), le(() => {
      M.unsubscribeRequestMessage(C.value, G);
    }), (i, m) => (a(), d("div", P({
      id: e.id,
      ref_key: "accordion",
      ref: $,
      class: x.value,
      "data-cmp-single-expansion": r.value === !0 ? !0 : void 0
    }, w.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (a(!0), d(N, { key: 0 }, B(e.cqItemsOrder, (c, O) => (a(), d("div", {
        id: `accordion-${e.cqItems[c].id}`,
        key: `accordion-index-${O}`,
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
              "data-cmp-button-id": O,
              onClick: (V) => J(c, V),
              onKeydown: (V) => Q(c, V, O)
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__title`)
              }, g(e.cqItems[c]["cq:panelTitle"]), 3),
              n("span", {
                class: s(`${e.baseCssClass}__icon`)
              }, Ee, 2)
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
      y(u) ? (a(), f(y(te), L(P({ key: 1 }, ee.value)), null, 16)) : q("", !0)
    ], 16, ge));
  }
}), xe = ["id", "aria-label"], Pe = ["aria-label"], Se = ["aria-label"], ke = /* @__PURE__ */ n("svg", {
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
    const e = t, l = Z(), u = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", K.isInEditor()), v = S("componentMapping", new U()), C = E(-1), I = E(-1), o = E(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), $ = E(M.initMessageChannel()), r = E((l == null ? void 0 : l.autoplay) === !0 && !u), w = p(
      () => Y.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        v
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
    ), x = p(() => ({
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
    }, m = (h) => {
      r.value = h;
    }, c = (h) => {
      o.value !== h && (o.value = h);
    }, O = () => {
      !e.autopauseDisabled && r.value && i();
    }, V = () => {
      !e.autopauseDisabled && r.value && G();
    }, ce = p(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    W(I, async (h, _) => {
      h !== -1 && typeof h < "u" && h !== _ && (o.value = h, r.value = !1);
    });
    const se = M.createCallbackListener(
      e.cqPath,
      I
    );
    return ne(() => {
      G(), M.subscribeRequestMessage($.value, se);
    }), le(() => {
      typeof C.value == "number" && C.value >= 0 && i(), M.unsubscribeRequestMessage($.value, se);
    }), ie(
      // eslint-disable-next-line no-return-assign
      () => o.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    ), (h, _) => {
      var T, D;
      return a(), d("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: s(X.value),
        "aria-live": "polite",
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        ce.value ? q("", !0) : (a(), d("div", {
          key: 0,
          class: s(`${e.baseCssClass}__content`),
          onMouseenter: O,
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
              }, Ae, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, g(e.accessibility.previous), 3)
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
              }, g(e.accessibility.next), 3)
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
                }, g(e.accessibility.pause), 3)
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
                }, g(e.accessibility.play), 3)
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
            }, g(e.cqItems[k]["cq:panelTitle"]), 11, Ge))), 128))
          ], 10, ze)
        ], 34)),
        y(u) ? (a(), f(y(te), L(P({ key: 1 }, x.value)), null, 16)) : q("", !0)
      ], 10, xe);
    };
  }
}), ct = /* @__PURE__ */ F({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, l) => (a(), f(ve, { "is-in-editor": !1 }));
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
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", K.isInEditor()), u = S("componentMapping", new U()), v = E(
      e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
    );
    ie(
      // eslint-disable-next-line no-return-assign
      () => v.value = e.cqItemsOrder.indexOf(e.activeItem) > 0 ? e.cqItemsOrder.indexOf(e.activeItem) : 0
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
    ), I = p(
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
    return (w, X) => (a(), d("div", P({
      id: e.id,
      class: I.value
    }, $.value), [
      o.value ? q("", !0) : (a(), d("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: s(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (a(!0), d(N, null, B(e.cqItemsOrder, (x, b) => (a(), d("li", {
          id: `${e.cqItems[x].id}-tab`,
          key: `tab-${b}`,
          "aria-controls": `${e.cqItems[x].id}-tabpanel`,
          class: s([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: b === v.value
            }
          ]),
          tabIndex: b === v.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab"
        }, g(e.cqItems[x]["cq:panelTitle"]), 11, He))), 128))
      ], 10, Ue)),
      o.value ? q("", !0) : (a(!0), d(N, { key: 1 }, B(C.value, (x, b) => (a(), d("div", {
        id: `${e.cqItems[e.cqItemsOrder[b]].id}-tabpanel`,
        key: `tab-content-${b}`,
        class: s([
          `${e.baseCssClass}__tabpanel`,
          {
            [`${e.baseCssClass}__tabpanel--active`]: b === v.value
          }
        ]),
        "aria-labelledby": `${e.cqItems[e.cqItemsOrder[b]].id}-tab`,
        "data-cmp-hook-tabs": "tabpanel",
        role: "tabpanel",
        tabindex: "0"
      }, [
        (a(), f(R(x), L(Ce({ isInEditor: !1 })), null, 16))
      ], 10, Ke))), 128)),
      y(l) ? (a(), f(y(te), L(P({ key: 2 }, r.value)), null, 16)) : q("", !0)
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
  ve as CoreContainer,
  lt as CoreContentFragment,
  ct as CoreExperienceFragment,
  rt as CoreTabs,
  Ie as DefaultContentFragment,
  st as ExperienceFragmentEditConfig,
  nt as MapToContentFragmentModel,
  M as SpaUtils,
  at as TabsEditConfig,
  ye as getRenderer,
  _e as mapRenderer
};
