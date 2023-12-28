import { MapTo as de, ComponentMapping as Q, componentProperties as U, componentClassNames as W, AllowedComponentsContainer as ue, ResponsiveGrid as pe, Container as me, Utils as Z, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { defineComponent as z, useAttrs as ee, inject as S, computed as C, openBlock as a, createBlock as h, unref as _, normalizeProps as N, mergeProps as M, resolveDynamicComponent as D, normalizeClass as s, normalizeStyle as oe, withCtx as ie, createElementBlock as u, createElementVNode as n, toDisplayString as I, createCommentVNode as E, Fragment as R, renderList as T, ref as $, watch as J, onMounted as se, onUnmounted as ae, nextTick as le, guardReactiveProps as Ce } from "vue";
import { AuthoringUtils as Y, ModelManager as be } from "@adobe/aem-spa-page-model-manager";
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
}, _e = "ContentFragment-", ce = (t) => _e + t, ye = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((p) => {
    de(ce(p))(e);
  });
}, he = (t) => {
  const e = ce(t);
  return Q.get(e);
}, nt = (t) => (e) => ye(t, e), ve = /* @__PURE__ */ z({
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
    const e = t, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), q = C(
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
    return (v, i) => c.value ? (a(), h(_(ue), N(M({ key: 0 }, { ...e, ..._(l) })), null, 16)) : (a(), h(D(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: s(q.value),
      role: e.roleAttribute,
      style: oe(e.backgroundStyle)
    }, {
      default: ie(() => [
        t.layout === "RESPONSIVE_GRID" ? (a(), h(_(pe), N(M({ key: 0 }, {
          ...e,
          ..._(l),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), h(_(me), N(M({ key: 1 }, { ...e, ..._(l) })), null, 16))
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
  setup(t) {
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), p = S("componentMapping", new Q()), q = C(
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
      var O;
      return a(), u("div", {
        id: e.id,
        class: s(q.value)
      }, [
        n("h3", {
          class: s(`${e.baseCssClass}__title`)
        }, I(e.title), 3),
        e.description ? (a(), u("p", {
          key: 0,
          class: s(`${e.baseCssClass}__description`)
        }, I(e.description), 3)) : E("", !0),
        (O = e.elementsOrder) != null && O.length ? (a(), u("div", {
          key: 1,
          class: s(`${e.baseCssClass}__elements`)
        }, [
          (a(!0), u(R, null, T(e.elementsOrder, (d, F) => (a(), u("div", {
            key: `${e.id}-element-${d}-${F}`,
            class: s(`${e.baseCssClass}__element`)
          }, [
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              n("h4", null, I(d), 1)
            ], 2),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[d].value}`
            }, null, 10, ge),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + I(e.elements[d].dataType), 3),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + I(e.elements[d].multiValue ? "true" : "false"), 3),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + I(e.elements[d][":type"]), 3)
          ], 2))), 128))
        ], 2)) : E("", !0),
        (a(!0), u(R, null, T(c.value, (d) => (a(), h(D(d), {
          key: d.toString()
        }))), 128))
      ], 10, fe);
    };
  }
}), lt = /* @__PURE__ */ z({
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
    ), q = C(() => {
      const c = he(e.model);
      return c || Ie;
    });
    return (c, v) => p.value ? E("", !0) : (a(), h(D(q.value), N(M({ key: 0 }, { ...e, ..._(l) })), null, 16));
  }
}), w = {
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
], Pe = ["id", "aria-labelledby"], ot = /* @__PURE__ */ z({
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
    const e = t, l = ee(), p = S("isInEditor", Y.isInEditor()), q = S("componentMapping", new Q()), c = $(w.initMessageChannel()), v = $(-1), i = $(e.expandedItems), O = $(null), d = C(() => (l == null ? void 0 : l.singleExpansion) === !0), F = C(() => {
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
        q
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
    ), k = (o) => {
      const m = O.value.querySelector(
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
    }, B = (o, m, r) => {
      const x = O.value.querySelectorAll("button").length - 1;
      switch (m.code) {
        case "ArrowLeft":
        case "ArrowUp":
          m.preventDefault(), r > 0 && k(r - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          m.preventDefault(), r < x && k(r + 1);
          break;
        case "Home":
          m.preventDefault(), k(0);
          break;
        case "End":
          m.preventDefault(), k(x);
          break;
        case "Enter":
        case "Space":
          m.preventDefault(), b(o, m), k(r);
          break;
      }
    }, g = (o) => i.value.indexOf(o) > -1, P = C(() => ({
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
    const G = w.createCallbackListener(
      e.cqPath,
      v
    );
    return se(() => {
      w.subscribeRequestMessage(c.value, G);
    }), ae(() => {
      w.unsubscribeRequestMessage(c.value, G);
    }), (o, m) => (a(), u("div", M({
      id: e.id,
      ref_key: "accordion",
      ref: O,
      class: K.value,
      "data-cmp-single-expansion": d.value === !0 ? !0 : void 0
    }, F.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (a(!0), u(R, { key: 0 }, T(e.cqItemsOrder, (r, x) => (a(), u("div", {
        id: `accordion-${e.cqItems[r].id}`,
        key: `accordion-index-${x}`,
        class: s(`${e.baseCssClass}__item`),
        "data-cmp-expanded": g(r) ? !0 : void 0
      }, [
        (a(), h(D(e.headingElement), {
          class: s(`${e.baseCssClass}__heading`)
        }, {
          default: ie(() => [
            n("button", {
              id: `accordion-${e.cqItems[r].id}-button`,
              "aria-controls": `accordion-${e.cqItems[r].id}-panel`,
              class: s([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: g(r)
                }
              ]),
              "data-cmp-button-id": x,
              onClick: (X) => b(r, X),
              onKeydown: (X) => B(r, X, x)
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__title`)
              }, I(e.cqItems[r]["cq:panelTitle"]), 3),
              n("span", {
                class: s(`${e.baseCssClass}__icon`)
              }, Oe, 2)
            ], 42, Ee)
          ]),
          _: 2
        }, 1032, ["class"])),
        _(p) || g(r) ? (a(), u("div", {
          key: 0,
          id: `accordion-${e.cqItems[r].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[r].id}-button`,
          class: s(`${e.baseCssClass}__panel ${g(r) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (a(), h(D(H.value[t.cqItemsOrder.indexOf(r)]), { key: 0 })) : E("", !0)
        ], 10, Pe)) : E("", !0)
      ], 10, $e))), 128)) : E("", !0),
      _(p) ? (a(), h(_(te), N(M({ key: 1 }, P.value)), null, 16)) : E("", !0)
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
], De = ["aria-label"], Fe = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), Be = [
  Fe
], je = ["aria-label"], Te = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M8 5v14l11-7z" })
], -1), ze = [
  Te
], Ge = ["aria-label"], Ve = ["aria-label", "onClick"], it = /* @__PURE__ */ z({
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
    const e = t, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), q = S("componentMapping", new Q()), c = $(-1), v = $(-1), i = $(0), O = $(w.initMessageChannel()), d = $((l == null ? void 0 : l.autoplay) === !0 && !p), F = C(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        q
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
    })), k = (f) => {
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
    }, B = () => {
      i.value === e.cqItemsOrder.length - 1 ? i.value = 0 : i.value += 1;
    }, g = () => {
      i.value === 0 ? i.value = e.cqItemsOrder.length - 1 : i.value -= 1;
    }, P = () => {
      !d.value || e.cqItemsOrder.length <= 1 || B();
    }, G = () => {
      c.value = setInterval(() => {
        P();
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
    }, re = C(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    J(v, async (f, y) => {
      f !== -1 && typeof f < "u" && f !== y && (i.value = f, d.value = !1);
    });
    const ne = w.createCallbackListener(
      e.cqPath,
      v
    );
    return se(() => {
      G(), w.subscribeRequestMessage(O.value, ne);
    }), ae(() => {
      typeof c.value == "number" && c.value >= 0 && o(), w.unsubscribeRequestMessage(O.value, ne);
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
        re.value ? E("", !0) : (a(), u("div", {
          key: 0,
          class: s(`${e.baseCssClass}__content`),
          onMouseenter: x,
          onMouseleave: X
        }, [
          n("div", {
            class: s([{ [`${e.baseCssClass}__items`]: !_(p) }])
          }, [
            (a(!0), u(R, null, T(F.value, (A, L) => (a(), u("div", {
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
            ], 10, xe))), 128))
          ], 2),
          n("div", {
            class: s(`${e.baseCssClass}__actions`)
          }, [
            n("button", {
              "aria-label": e.accessibility.previous,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: g
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Ae, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.previous), 3)
            ], 10, Me),
            n("button", {
              "aria-label": e.accessibility.next,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: B
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Re, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.next), 3)
            ], 10, Le),
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
                }, I(e.accessibility.play), 3)
              ], 10, je)
            ], 64)) : E("", !0)
          ], 2),
          n("ol", {
            "aria-label": (j = e.accessibility) == null ? void 0 : j.indicators,
            class: s(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (a(!0), u(R, null, T(e.cqItemsOrder, (A, L) => (a(), u("li", {
              key: `item-${L}`,
              "aria-label": k(L),
              class: s([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: L === i.value
                }
              ]),
              role: "tab",
              onClick: (Xe) => r(L)
            }, I(e.cqItems[A]["cq:panelTitle"]), 11, Ve))), 128))
          ], 10, Ge)
        ], 34)),
        _(p) ? (a(), h(_(te), N(M({ key: 1 }, K.value)), null, 16)) : E("", !0)
      ], 10, ke);
    };
  }
}), ct = /* @__PURE__ */ z({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, l) => (a(), h(ve, { "is-in-editor": !1 }));
  }
}), Ue = ["id"], He = ["aria-label"], Ke = ["tabIndex", "onClick"], rt = /* @__PURE__ */ z({
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
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), p = S("componentMapping", new Q()), q = $(1), c = $(0), v = $(w.initMessageChannel()), i = C(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        p
      )
    ), O = C(
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
    ), F = C(() => {
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
    J(q, async (b, B) => {
      if (b !== -1 && typeof b < "u" && b !== B && b !== c.value) {
        c.value = b, await le(), be._notifyListeners(
          `${e.cqPath}/${e.cqItemsOrder[b]}`
        ), await le();
        const g = parent.document.getElementById("ContentFrame");
        g && g.dispatchEvent(new Event("load"));
      }
    });
    const k = w.createCallbackListener(
      e.cqPath,
      q
    );
    return se(() => {
      w.subscribeRequestMessage(v.value, k);
    }), ae(() => {
      w.unsubscribeRequestMessage(v.value, k);
    }), (b, B) => (a(), u("div", M({
      id: e.id,
      class: O.value
    }, F.value), [
      d.value ? E("", !0) : (a(), u("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: s(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (a(!0), u(R, null, T(e.cqItemsOrder, (g, P) => (a(), u("li", {
          key: `tab-${P}`,
          class: s([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: P === c.value
            }
          ]),
          tabIndex: P === c.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (G) => K(P)
        }, I(e.cqItems[g]["cq:panelTitle"]), 11, Ke))), 128))
      ], 10, He)),
      _(l) ? (a(!0), u(R, { key: 1 }, T(i.value, (g, P) => (a(), u("div", {
        key: `tab-content-${P}`,
        class: s(`${e.baseCssClass}__author-tab-content`),
        style: oe({ display: c.value === P ? "block" : "none" })
      }, [
        (a(), h(D(g), N(Ce({ isInEditor: !1 })), null, 16))
      ], 6))), 128)) : (a(), h(D(i.value[c.value]), { key: 2 })),
      _(l) ? (a(), h(_(te), N(M({ key: 3 }, H.value)), null, 16)) : E("", !0)
    ], 16, Ue));
  }
});
export {
  Ye as AccordionEditConfig,
  Ze as CarouselEditConfig,
  et as ContainerEditConfig,
  tt as ContentFragmentEditConfig,
  ot as CoreAccordion,
  it as CoreCarousel,
  ve as CoreContainer,
  lt as CoreContentFragment,
  ct as CoreExperienceFragment,
  rt as CoreTabs,
  Ie as DefaultContentFragment,
  st as ExperienceFragmentEditConfig,
  nt as MapToContentFragmentModel,
  w as SpaUtils,
  at as TabsEditConfig,
  he as getRenderer,
  ye as mapRenderer
};
