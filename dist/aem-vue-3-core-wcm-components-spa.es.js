import { MapTo as ce, ComponentMapping as K, componentProperties as V, componentClassNames as X, AllowedComponentsContainer as re, ResponsiveGrid as de, Container as ue, Utils as ee, ContainerPlaceholder as se } from "aem-vue-3-editable-components";
import { defineComponent as B, useAttrs as J, inject as M, computed as _, openBlock as o, createBlock as v, unref as y, normalizeProps as N, mergeProps as A, resolveDynamicComponent as R, normalizeClass as s, normalizeStyle as me, withCtx as ae, createElementBlock as m, createElementVNode as a, toDisplayString as h, createCommentVNode as I, Fragment as D, renderList as G, ref as w, watch as H, onMounted as ne, onUnmounted as le } from "vue";
import { AuthoringUtils as Q } from "@adobe/aem-spa-page-model-manager";
const He = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ke = {
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
}, pe = "ContentFragment-", oe = (t) => pe + t, Ce = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((u) => {
    ce(oe(u))(e);
  });
}, _e = (t) => {
  const e = oe(t);
  return K.get(e);
}, Ye = (t) => (e) => Ce(t, e), be = /* @__PURE__ */ B({
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
    ...V("cmp-container")
  },
  setup(t) {
    const e = t, n = J(), u = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Q.isInEditor()), q = _(
      () => X(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), C = _(
      () => {
        var g;
        return u && (n == null ? void 0 : n.allowedComponents) && ((g = n == null ? void 0 : n.allowedComponents) == null ? void 0 : g.applicable);
      }
    );
    return (g, c) => C.value ? (o(), v(y(re), N(A({ key: 0 }, { ...e, ...y(n) })), null, 16)) : (o(), v(R(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: s(q.value),
      role: e.roleAttribute,
      style: me(e.backgroundStyle)
    }, {
      default: ae(() => [
        t.layout === "RESPONSIVE_GRID" ? (o(), v(y(de), N(A({ key: 0 }, {
          ...e,
          ...y(n),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (o(), v(y(ue), N(A({ key: 1 }, { ...e, ...y(n) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), ye = ["id"], he = ["innerHTML"], ve = /* @__PURE__ */ B({
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
    ...V("cmp-contentfragment")
  },
  setup(t) {
    const e = t, n = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Q.isInEditor()), u = M("componentMapping", new K()), q = _(
      () => X(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), C = _(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        u
      )
    );
    return (g, c) => {
      var $;
      return o(), m("div", {
        id: e.id,
        class: s(q.value)
      }, [
        a("h3", {
          class: s(`${e.baseCssClass}__title`)
        }, h(e.title), 3),
        e.description ? (o(), m("p", {
          key: 0,
          class: s(`${e.baseCssClass}__description`)
        }, h(e.description), 3)) : I("", !0),
        ($ = e.elementsOrder) != null && $.length ? (o(), m("div", {
          key: 1,
          class: s(`${e.baseCssClass}__elements`)
        }, [
          (o(!0), m(D, null, G(e.elementsOrder, (d, F) => (o(), m("div", {
            key: `${e.id}-element-${d}-${F}`,
            class: s(`${e.baseCssClass}__element`)
          }, [
            a("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              a("h4", null, h(d), 1)
            ], 2),
            a("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[d].value}`
            }, null, 10, he),
            a("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + h(e.elements[d].dataType), 3),
            a("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + h(e.elements[d].multiValue ? "true" : "false"), 3),
            a("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + h(e.elements[d][":type"]), 3)
          ], 2))), 128))
        ], 2)) : I("", !0),
        (o(!0), m(D, null, G(C.value, (d) => (o(), v(R(d), {
          key: d.toString()
        }))), 128))
      ], 10, ye);
    };
  }
}), Ze = /* @__PURE__ */ B({
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
    ...V("cmp-contentfragment")
  },
  setup(t) {
    const e = t, n = J(), u = _(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), q = _(() => {
      const C = _e(e.model);
      return C || ve;
    });
    return (C, g) => u.value ? I("", !0) : (o(), v(R(q.value), N(A({ key: 0 }, { ...e, ...y(n) })), null, 16));
  }
}), x = {
  createCallbackListener(t, e) {
    return (n, u = t) => {
      n.data && n.data.id === u && n.data.operation === "navigate" && (e.value = n.data.index);
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
}, ge = ["id", "data-cmp-single-expansion"], fe = ["id", "data-cmp-expanded"], Ie = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], qe = /* @__PURE__ */ a("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ a("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), $e = [
  qe
], we = ["id", "aria-labelledby"], et = /* @__PURE__ */ B({
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
    ...V("cmp-accordion")
  },
  setup(t) {
    const e = t, n = J(), u = M("isInEditor", Q.isInEditor()), q = M("componentMapping", new K()), C = w(x.initMessageChannel()), g = w(-1), c = w(e.expandedItems), $ = w(null), d = _(() => (n == null ? void 0 : n.singleExpansion) === !0), F = _(() => {
      const l = {};
      return u && (l["data-panelcontainer"] = "accordion", l["data-cq-data-path"] = e.cqPath || "", l["data-placeholder-text"] = "Please drag Accordion item components here"), l;
    }), W = _(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        q
      )
    ), Y = _(
      () => X(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), P = (l) => {
      const r = $.value.querySelector(
        `button[data-cmp-button-id="${l}"]`
      );
      r && r.focus();
    }, T = (l, r) => {
      const i = c.value.indexOf(l) > -1;
      if (d.value)
        c.value = i ? [] : [l];
      else if (i) {
        const f = c.value.indexOf(l);
        c.value.splice(f, 1);
      } else
        c.value.push(l);
      r.target.focus();
    }, U = (l, r, i) => {
      const f = $.value.querySelectorAll("button").length - 1;
      switch (r.code) {
        case "ArrowLeft":
        case "ArrowUp":
          r.preventDefault(), i > 0 && P(i - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          r.preventDefault(), i < f && P(i + 1);
          break;
        case "Home":
          r.preventDefault(), P(0);
          break;
        case "End":
          r.preventDefault(), P(f);
          break;
        case "Enter":
        case "Space":
          r.preventDefault(), T(l, r), P(i);
          break;
      }
    }, k = (l) => c.value.indexOf(l) > -1, Z = _(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    H(d, async (l, r) => {
      l !== r && (c.value = e.expandedItems);
    }), H(e.expandedItems, async (l, r) => {
      l !== r && (c.value = l);
    }), H(g, async (l, r) => {
      l !== -1 && typeof l < "u" && l !== r && e.cqItemsOrder && (c.value = [e.cqItemsOrder[l]]);
    });
    const j = x.createCallbackListener(
      e.cqPath,
      g
    );
    return ne(() => {
      x.subscribeRequestMessage(C.value, j);
    }), le(() => {
      x.unsubscribeRequestMessage(C.value, j);
    }), (l, r) => (o(), m("div", A({
      id: e.id,
      ref_key: "accordion",
      ref: $,
      class: Y.value,
      "data-cmp-single-expansion": d.value === !0 ? !0 : void 0
    }, F.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (o(!0), m(D, { key: 0 }, G(e.cqItemsOrder, (i, f) => (o(), m("div", {
        id: `accordion-${e.cqItems[i].id}`,
        key: `accordion-index-${f}`,
        class: s(`${e.baseCssClass}__item`),
        "data-cmp-expanded": k(i) ? !0 : void 0
      }, [
        (o(), v(R(e.headingElement), {
          class: s(`${e.baseCssClass}__heading`)
        }, {
          default: ae(() => [
            a("button", {
              id: `accordion-${e.cqItems[i].id}-button`,
              "aria-controls": `accordion-${e.cqItems[i].id}-panel`,
              class: s([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: k(i)
                }
              ]),
              "data-cmp-button-id": f,
              onClick: (z) => T(i, z),
              onKeydown: (z) => U(i, z, f)
            }, [
              a("span", {
                class: s(`${e.baseCssClass}__title`)
              }, h(e.cqItems[i]["cq:panelTitle"]), 3),
              a("span", {
                class: s(`${e.baseCssClass}__icon`)
              }, $e, 2)
            ], 42, Ie)
          ]),
          _: 2
        }, 1032, ["class"])),
        y(u) || k(i) ? (o(), m("div", {
          key: 0,
          id: `accordion-${e.cqItems[i].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[i].id}-button`,
          class: s(`${e.baseCssClass}__panel ${k(i) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (o(), v(R(W.value[t.cqItemsOrder.indexOf(i)]), { key: 0 })) : I("", !0)
        ], 10, we)) : I("", !0)
      ], 10, fe))), 128)) : I("", !0),
      y(u) ? (o(), v(y(se), N(A({ key: 1 }, Z.value)), null, 16)) : I("", !0)
    ], 16, ge));
  }
}), Ee = ["id", "aria-label"], Oe = ["aria-label"], xe = ["aria-label"], Pe = /* @__PURE__ */ a("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ a("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), Se = [
  Pe
], Ae = ["aria-label"], Me = /* @__PURE__ */ a("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ a("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), ke = [
  Me
], Le = ["aria-label"], Ne = /* @__PURE__ */ a("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ a("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), De = [
  Ne
], Re = ["aria-label"], Be = /* @__PURE__ */ a("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ a("path", { d: "M8 5v14l11-7z" })
], -1), Fe = [
  Be
], je = ["aria-label"], ze = ["aria-label", "onClick"], tt = /* @__PURE__ */ B({
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
    ...V("cmp-carousel")
  },
  setup(t) {
    const e = t, n = J(), u = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Q.isInEditor()), q = M("componentMapping", new K()), C = w(-1), g = w(-1), c = w(0), $ = w(x.initMessageChannel()), d = w((n == null ? void 0 : n.autoplay) === !0 && !u), F = _(
      () => ee.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        q
      )
    ), W = _(
      () => X(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        u,
        e.aemNoDecoration
      )
    ), Y = _(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), P = (b) => {
      var S;
      let p = ((S = e.accessibility) == null ? void 0 : S.indicator) || "";
      const L = "{0}";
      return p = p.replace(L, (b + 1).toString()), p;
    }, T = (b) => {
      var E;
      let p = ((E = e.accessibility) == null ? void 0 : E.slide) || "";
      const L = "{0}";
      p = p.replace(L, (b + 1).toString());
      const S = "{1}";
      return p = p.replace(
        S,
        e.cqItemsOrder.length.toString()
      ), p;
    }, U = () => {
      c.value === e.cqItemsOrder.length - 1 ? c.value = 0 : c.value += 1;
    }, k = () => {
      c.value === 0 ? c.value = e.cqItemsOrder.length - 1 : c.value -= 1;
    }, Z = () => {
      !d.value || e.cqItemsOrder.length <= 1 || U();
    }, j = () => {
      C.value = setInterval(() => {
        Z();
      }, e.delay);
    }, l = () => {
      clearInterval(C.value);
    }, r = (b) => {
      d.value = b;
    }, i = (b) => {
      c.value !== b && (c.value = b);
    }, f = () => {
      !e.autopauseDisabled && d.value && l();
    }, z = () => {
      !e.autopauseDisabled && d.value && j();
    }, ie = _(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    H(g, async (b, p) => {
      b !== -1 && typeof b < "u" && b !== p && (c.value = b, d.value = !1);
    });
    const te = x.createCallbackListener(
      e.cqPath,
      g
    );
    return ne(() => {
      j(), x.subscribeRequestMessage($.value, te);
    }), le(() => {
      typeof C.value == "number" && C.value >= 0 && l(), x.unsubscribeRequestMessage($.value, te);
    }), (b, p) => {
      var L, S;
      return o(), m("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: s(W.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        ie.value ? I("", !0) : (o(), m("div", {
          key: 0,
          class: s(`${e.baseCssClass}__content`),
          onMouseenter: f,
          onMouseleave: z
        }, [
          a("div", {
            class: s([{ [`${e.baseCssClass}__items`]: !y(u) }])
          }, [
            (o(!0), m(D, null, G(F.value, (E, O) => (o(), m("div", {
              key: `item-${O}`,
              "aria-label": T(O),
              class: s([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: O === c.value
                }
              ]),
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (o(), v(R(E)))
            ], 10, Oe))), 128))
          ], 2),
          a("div", {
            class: s(`${e.baseCssClass}__actions`)
          }, [
            a("button", {
              "aria-label": e.accessibility.previous,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: k
            }, [
              a("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Se, 2),
              a("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, h(e.accessibility.previous), 3)
            ], 10, xe),
            a("button", {
              "aria-label": e.accessibility.next,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: U
            }, [
              a("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, ke, 2),
              a("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, h(e.accessibility.next), 3)
            ], 10, Ae),
            ((L = y(n)) == null ? void 0 : L.autoplay) === !0 ? (o(), m(D, { key: 0 }, [
              a("button", {
                "aria-label": e.accessibility.pause,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--pause`,
                  {
                    [`${e.baseCssClass}__action--disabled`]: !d.value
                  }
                ]),
                type: "button",
                onClick: p[0] || (p[0] = (E) => r(!1))
              }, [
                a("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, De, 2),
                a("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, h(e.accessibility.pause), 3)
              ], 10, Le),
              a("button", {
                "aria-label": e.accessibility.play,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: d.value }
                ]),
                type: "button",
                onClick: p[1] || (p[1] = (E) => r(!0))
              }, [
                a("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, Fe, 2),
                a("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, h(e.accessibility.play), 3)
              ], 10, Re)
            ], 64)) : I("", !0)
          ], 2),
          a("ol", {
            "aria-label": (S = e.accessibility) == null ? void 0 : S.indicators,
            class: s(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (o(!0), m(D, null, G(e.cqItemsOrder, (E, O) => (o(), m("li", {
              key: `item-${O}`,
              "aria-label": P(O),
              class: s([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: O === c.value
                }
              ]),
              role: "tab",
              onClick: (Ge) => i(O)
            }, h(e.cqItems[E]["cq:panelTitle"]), 11, ze))), 128))
          ], 10, je)
        ], 34)),
        y(u) ? (o(), v(y(se), N(A({ key: 1 }, Y.value)), null, 16)) : I("", !0)
      ], 10, Ee);
    };
  }
}), st = /* @__PURE__ */ B({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, n) => (o(), v(be, { "is-in-editor": !1 }));
  }
});
export {
  He as AccordionEditConfig,
  Ke as CarouselEditConfig,
  Xe as ContainerEditConfig,
  Je as ContentFragmentEditConfig,
  et as CoreAccordion,
  tt as CoreCarousel,
  be as CoreContainer,
  Ze as CoreContentFragment,
  st as CoreExperienceFragment,
  ve as DefaultContentFragment,
  Qe as ExperienceFragmentEditConfig,
  Ye as MapToContentFragmentModel,
  x as SpaUtils,
  We as TabsEditConfig,
  _e as getRenderer,
  Ce as mapRenderer
};
