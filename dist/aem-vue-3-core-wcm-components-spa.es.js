import { MapTo as re, ComponentMapping as Q, componentProperties as H, componentClassNames as W, AllowedComponentsContainer as de, ResponsiveGrid as ue, Container as pe, Utils as Z, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { defineComponent as z, useAttrs as ee, inject as S, computed as b, openBlock as a, createBlock as v, unref as y, normalizeProps as G, mergeProps as x, resolveDynamicComponent as D, normalizeClass as s, normalizeStyle as le, withCtx as oe, createElementBlock as u, createElementVNode as l, toDisplayString as I, createCommentVNode as q, Fragment as N, renderList as T, ref as E, watch as X, onMounted as se, onUnmounted as ae } from "vue";
import { AuthoringUtils as Y } from "@adobe/aem-spa-page-model-manager";
const Xe = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Qe = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, We = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ye = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return t.elementsOrder.length === 0 && t.cqItemsOrder.length === 0;
  }
}, Ze = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, et = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, me = "ContentFragment-", ie = (t) => me + t, Ce = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((p) => {
    re(ie(p))(e);
  });
}, be = (t) => {
  const e = ie(t);
  return Q.get(e);
}, tt = (t) => (e) => Ce(t, e), _e = /* @__PURE__ */ z({
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
    ...H("cmp-container")
  },
  setup(t) {
    const e = t, n = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), $ = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        p,
        e.aemNoDecoration
      )
    ), d = b(
      () => {
        var _;
        return p && (n == null ? void 0 : n.allowedComponents) && ((_ = n == null ? void 0 : n.allowedComponents) == null ? void 0 : _.applicable);
      }
    );
    return (_, i) => d.value ? (a(), v(y(de), G(x({ key: 0 }, { ...e, ...y(n) })), null, 16)) : (a(), v(D(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: s($.value),
      role: e.roleAttribute,
      style: le(e.backgroundStyle)
    }, {
      default: oe(() => [
        t.layout === "RESPONSIVE_GRID" ? (a(), v(y(ue), G(x({ key: 0 }, {
          ...e,
          ...y(n),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), v(y(pe), G(x({ key: 1 }, { ...e, ...y(n) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), ye = ["id"], he = ["innerHTML"], ve = /* @__PURE__ */ z({
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
    ...H("cmp-contentfragment")
  },
  setup(t) {
    const e = t, n = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), p = S("componentMapping", new Q()), $ = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), d = b(
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
    return (_, i) => {
      var w;
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
        (w = e.elementsOrder) != null && w.length ? (a(), u("div", {
          key: 1,
          class: s(`${e.baseCssClass}__elements`)
        }, [
          (a(!0), u(N, null, T(e.elementsOrder, (c, R) => (a(), u("div", {
            key: `${e.id}-element-${c}-${R}`,
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
            }, null, 10, he),
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
        (a(!0), u(N, null, T(d.value, (c) => (a(), v(D(c), {
          key: c.toString()
        }))), 128))
      ], 10, ye);
    };
  }
}), st = /* @__PURE__ */ z({
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
    ...H("cmp-contentfragment")
  },
  setup(t) {
    const e = t, n = ee(), p = b(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), $ = b(() => {
      const d = be(e.model);
      return d || ve;
    });
    return (d, _) => p.value ? q("", !0) : (a(), v(D($.value), G(x({ key: 0 }, { ...e, ...y(n) })), null, 16));
  }
}), L = {
  createCallbackListener(t, e) {
    return (n, p = t) => {
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
}, fe = ["id", "data-cmp-single-expansion"], ge = ["id", "data-cmp-expanded"], Ie = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], qe = /* @__PURE__ */ l("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), $e = [
  qe
], we = ["id", "aria-labelledby"], at = /* @__PURE__ */ z({
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
    ...H("cmp-accordion")
  },
  setup(t) {
    const e = t, n = ee(), p = S("isInEditor", Y.isInEditor()), $ = S("componentMapping", new Q()), d = E(L.initMessageChannel()), _ = E(-1), i = E(e.expandedItems), w = E(null), c = b(() => (n == null ? void 0 : n.singleExpansion) === !0), R = b(() => {
      const o = {};
      return p && (o["data-panelcontainer"] = "accordion", o["data-cq-data-path"] = e.cqPath || "", o["data-placeholder-text"] = "Please drag Accordion item components here"), o;
    }), B = b(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        $
      )
    ), K = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        p,
        e.aemNoDecoration
      )
    ), k = (o) => {
      const C = w.value.querySelector(
        `button[data-cmp-button-id="${o}"]`
      );
      C && C.focus();
    }, V = (o, C) => {
      const r = i.value.indexOf(o) > -1;
      if (c.value)
        i.value = r ? [] : [o];
      else if (r) {
        const P = i.value.indexOf(o);
        i.value.splice(P, 1);
      } else
        i.value.push(o);
      C.target.focus();
    }, m = (o, C, r) => {
      const P = w.value.querySelectorAll("button").length - 1;
      switch (C.code) {
        case "ArrowLeft":
        case "ArrowUp":
          C.preventDefault(), r > 0 && k(r - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          C.preventDefault(), r < P && k(r + 1);
          break;
        case "Home":
          C.preventDefault(), k(0);
          break;
        case "End":
          C.preventDefault(), k(P);
          break;
        case "Enter":
        case "Space":
          C.preventDefault(), V(o, C), k(r);
          break;
      }
    }, O = (o) => i.value.indexOf(o) > -1, F = b(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    X(c, async (o, C) => {
      o !== C && (i.value = e.expandedItems);
    }), X(e.expandedItems, async (o, C) => {
      o !== C && (i.value = o);
    }), X(_, async (o, C) => {
      o !== -1 && typeof o < "u" && o !== C && e.cqItemsOrder && (i.value = [e.cqItemsOrder[o]]);
    });
    const g = L.createCallbackListener(
      e.cqPath,
      _
    );
    return se(() => {
      L.subscribeRequestMessage(d.value, g);
    }), ae(() => {
      L.unsubscribeRequestMessage(d.value, g);
    }), (o, C) => (a(), u("div", x({
      id: e.id,
      ref_key: "accordion",
      ref: w,
      class: K.value,
      "data-cmp-single-expansion": c.value === !0 ? !0 : void 0
    }, R.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (a(!0), u(N, { key: 0 }, T(e.cqItemsOrder, (r, P) => (a(), u("div", {
        id: `accordion-${e.cqItems[r].id}`,
        key: `accordion-index-${P}`,
        class: s(`${e.baseCssClass}__item`),
        "data-cmp-expanded": O(r) ? !0 : void 0
      }, [
        (a(), v(D(e.headingElement), {
          class: s(`${e.baseCssClass}__heading`)
        }, {
          default: oe(() => [
            l("button", {
              id: `accordion-${e.cqItems[r].id}-button`,
              "aria-controls": `accordion-${e.cqItems[r].id}-panel`,
              class: s([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: O(r)
                }
              ]),
              "data-cmp-button-id": P,
              onClick: (J) => V(r, J),
              onKeydown: (J) => m(r, J, P)
            }, [
              l("span", {
                class: s(`${e.baseCssClass}__title`)
              }, I(e.cqItems[r]["cq:panelTitle"]), 3),
              l("span", {
                class: s(`${e.baseCssClass}__icon`)
              }, $e, 2)
            ], 42, Ie)
          ]),
          _: 2
        }, 1032, ["class"])),
        y(p) || O(r) ? (a(), u("div", {
          key: 0,
          id: `accordion-${e.cqItems[r].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[r].id}-button`,
          class: s(`${e.baseCssClass}__panel ${O(r) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (a(), v(D(B.value[t.cqItemsOrder.indexOf(r)]), { key: 0 })) : q("", !0)
        ], 10, we)) : q("", !0)
      ], 10, ge))), 128)) : q("", !0),
      y(p) ? (a(), v(y(te), G(x({ key: 1 }, F.value)), null, 16)) : q("", !0)
    ], 16, fe));
  }
}), Ee = ["id", "aria-label"], Oe = ["aria-label"], Pe = ["aria-label"], ke = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), xe = [
  ke
], Se = ["aria-label"], Me = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), Ae = [
  Me
], Le = ["aria-label"], Ne = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), De = [
  Ne
], Re = ["aria-label"], Be = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M8 5v14l11-7z" })
], -1), Fe = [
  Be
], je = ["aria-label"], Ge = ["aria-label", "onClick"], nt = /* @__PURE__ */ z({
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
    ...H("cmp-carousel")
  },
  setup(t) {
    const e = t, n = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), $ = S("componentMapping", new Q()), d = E(-1), _ = E(-1), i = E(0), w = E(L.initMessageChannel()), c = E((n == null ? void 0 : n.autoplay) === !0 && !p), R = b(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        $
      )
    ), B = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        p,
        e.aemNoDecoration
      )
    ), K = b(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), k = (f) => {
      var j;
      let h = ((j = e.accessibility) == null ? void 0 : j.indicator) || "";
      const U = "{0}";
      return h = h.replace(U, (f + 1).toString()), h;
    }, V = (f) => {
      var M;
      let h = ((M = e.accessibility) == null ? void 0 : M.slide) || "";
      const U = "{0}";
      h = h.replace(U, (f + 1).toString());
      const j = "{1}";
      return h = h.replace(
        j,
        e.cqItemsOrder.length.toString()
      ), h;
    }, m = () => {
      i.value === e.cqItemsOrder.length - 1 ? i.value = 0 : i.value += 1;
    }, O = () => {
      i.value === 0 ? i.value = e.cqItemsOrder.length - 1 : i.value -= 1;
    }, F = () => {
      !c.value || e.cqItemsOrder.length <= 1 || m();
    }, g = () => {
      d.value = setInterval(() => {
        F();
      }, e.delay);
    }, o = () => {
      clearInterval(d.value);
    }, C = (f) => {
      c.value = f;
    }, r = (f) => {
      i.value !== f && (i.value = f);
    }, P = () => {
      !e.autopauseDisabled && c.value && o();
    }, J = () => {
      !e.autopauseDisabled && c.value && g();
    }, ce = b(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    X(_, async (f, h) => {
      f !== -1 && typeof f < "u" && f !== h && (i.value = f, c.value = !1);
    });
    const ne = L.createCallbackListener(
      e.cqPath,
      _
    );
    return se(() => {
      g(), L.subscribeRequestMessage(w.value, ne);
    }), ae(() => {
      typeof d.value == "number" && d.value >= 0 && o(), L.unsubscribeRequestMessage(w.value, ne);
    }), (f, h) => {
      var U, j;
      return a(), u("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: s(B.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        ce.value ? q("", !0) : (a(), u("div", {
          key: 0,
          class: s(`${e.baseCssClass}__content`),
          onMouseenter: P,
          onMouseleave: J
        }, [
          l("div", {
            class: s([{ [`${e.baseCssClass}__items`]: !y(p) }])
          }, [
            (a(!0), u(N, null, T(R.value, (M, A) => (a(), u("div", {
              key: `item-${A}`,
              "aria-label": V(A),
              class: s([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: A === i.value
                }
              ]),
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (a(), v(D(M)))
            ], 10, Oe))), 128))
          ], 2),
          l("div", {
            class: s(`${e.baseCssClass}__actions`)
          }, [
            l("button", {
              "aria-label": e.accessibility.previous,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: O
            }, [
              l("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, xe, 2),
              l("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.previous), 3)
            ], 10, Pe),
            l("button", {
              "aria-label": e.accessibility.next,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: m
            }, [
              l("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Ae, 2),
              l("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.next), 3)
            ], 10, Se),
            ((U = y(n)) == null ? void 0 : U.autoplay) === !0 ? (a(), u(N, { key: 0 }, [
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
                onClick: h[0] || (h[0] = (M) => C(!1))
              }, [
                l("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, De, 2),
                l("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, I(e.accessibility.pause), 3)
              ], 10, Le),
              l("button", {
                "aria-label": e.accessibility.play,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: c.value }
                ]),
                type: "button",
                onClick: h[1] || (h[1] = (M) => C(!0))
              }, [
                l("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, Fe, 2),
                l("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, I(e.accessibility.play), 3)
              ], 10, Re)
            ], 64)) : q("", !0)
          ], 2),
          l("ol", {
            "aria-label": (j = e.accessibility) == null ? void 0 : j.indicators,
            class: s(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (a(!0), u(N, null, T(e.cqItemsOrder, (M, A) => (a(), u("li", {
              key: `item-${A}`,
              "aria-label": k(A),
              class: s([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: A === i.value
                }
              ]),
              role: "tab",
              onClick: (Ue) => r(A)
            }, I(e.cqItems[M]["cq:panelTitle"]), 11, Ge))), 128))
          ], 10, je)
        ], 34)),
        y(p) ? (a(), v(y(te), G(x({ key: 1 }, K.value)), null, 16)) : q("", !0)
      ], 10, Ee);
    };
  }
}), lt = /* @__PURE__ */ z({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, n) => (a(), v(_e, { "is-in-editor": !1 }));
  }
}), Te = ["id"], ze = ["aria-label"], Ve = ["tabIndex", "onClick"], ot = /* @__PURE__ */ z({
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
    ...H("cmp-tabs")
  },
  setup(t) {
    const e = t, n = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), p = S("componentMapping", new Q()), $ = E(-1), d = E(0), _ = E(null);
    (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })() && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (_.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const w = (m, O = e.cqPath) => {
      m.data && m.data.id === O && m.data.operation === "navigate" && ($.value = m.data.index);
    }, c = b(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        p
      )
    ), R = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        n,
        e.aemNoDecoration
      )
    ), B = b(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), K = b(() => {
      const m = {
        class: "aem-container",
        "data-cmp-is": "tabs",
        "data-panelcontainer": "tabs"
      };
      return n && (m["data-cq-data-path"] = e.cqPath), m;
    }), k = b(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), V = (m) => {
      d.value !== m && (d.value = m);
    };
    return X($, async (m, O) => {
      m !== -1 && typeof m < "u" && m !== O && (d.value = m);
    }), se(() => {
      _.value && _.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        w
      );
    }), ae(() => {
      _.value && _.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        w
      );
    }), (m, O) => (a(), u("div", x({
      id: e.id,
      class: R.value
    }, K.value), [
      B.value ? q("", !0) : (a(), u("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: s(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (a(!0), u(N, null, T(e.cqItemsOrder, (F, g) => (a(), u("li", {
          key: `tab-${g}`,
          class: s([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: g === d.value
            }
          ]),
          tabIndex: g === d.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (o) => V(g)
        }, I(e.cqItems[F]["cq:panelTitle"]), 11, Ve))), 128))
      ], 10, ze)),
      !B.value && y(n) ? (a(!0), u(N, { key: 1 }, T(c.value, (F, g) => (a(), u("div", {
        key: `tab-content-${g}`,
        class: s(`${e.baseCssClass}__author-tab-content`),
        style: le({ display: d.value === g ? "block" : "none" })
      }, [
        (a(), v(D(F)))
      ], 6))), 128)) : B.value ? q("", !0) : (a(), v(D(c.value[d.value]), { key: 2 })),
      y(n) ? (a(), v(y(te), G(x({ key: 3 }, k.value)), null, 16)) : q("", !0)
    ], 16, Te));
  }
});
export {
  Xe as AccordionEditConfig,
  Qe as CarouselEditConfig,
  We as ContainerEditConfig,
  Ye as ContentFragmentEditConfig,
  at as CoreAccordion,
  nt as CoreCarousel,
  _e as CoreContainer,
  st as CoreContentFragment,
  lt as CoreExperienceFragment,
  ot as CoreTabs,
  ve as DefaultContentFragment,
  Ze as ExperienceFragmentEditConfig,
  tt as MapToContentFragmentModel,
  L as SpaUtils,
  et as TabsEditConfig,
  be as getRenderer,
  Ce as mapRenderer
};
