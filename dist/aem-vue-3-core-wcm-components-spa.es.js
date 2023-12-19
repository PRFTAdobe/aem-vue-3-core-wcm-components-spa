import { MapTo as re, ComponentMapping as Q, componentProperties as U, componentClassNames as W, AllowedComponentsContainer as de, ResponsiveGrid as ue, Container as pe, Utils as Z, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { defineComponent as z, useAttrs as ee, inject as M, computed as C, openBlock as a, createBlock as h, unref as b, normalizeProps as N, mergeProps as S, resolveDynamicComponent as D, normalizeClass as s, normalizeStyle as le, withCtx as oe, createElementBlock as u, createElementVNode as n, toDisplayString as I, createCommentVNode as q, Fragment as R, renderList as T, ref as $, watch as J, onMounted as se, onUnmounted as ae, guardReactiveProps as me } from "vue";
import { AuthoringUtils as Y } from "@adobe/aem-spa-page-model-manager";
const Qe = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, We = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ye = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ze = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return t.elementsOrder.length === 0 && t.cqItemsOrder.length === 0;
  }
}, et = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, tt = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(t) {
    return !t.cqItemsOrder || (t == null ? void 0 : t.cqItemsOrder.length) === 0;
  }
}, Ce = "ContentFragment-", ie = (t) => Ce + t, be = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((p) => {
    re(ie(p))(e);
  });
}, _e = (t) => {
  const e = ie(t);
  return Q.get(e);
}, st = (t) => (e) => be(t, e), ye = /* @__PURE__ */ z({
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
    const e = t, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), v = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        p,
        e.aemNoDecoration
      )
    ), d = C(
      () => {
        var f;
        return p && (l == null ? void 0 : l.allowedComponents) && ((f = l == null ? void 0 : l.allowedComponents) == null ? void 0 : f.applicable);
      }
    );
    return (f, i) => d.value ? (a(), h(b(de), N(S({ key: 0 }, { ...e, ...b(l) })), null, 16)) : (a(), h(D(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: s(v.value),
      role: e.roleAttribute,
      style: le(e.backgroundStyle)
    }, {
      default: oe(() => [
        t.layout === "RESPONSIVE_GRID" ? (a(), h(b(ue), N(S({ key: 0 }, {
          ...e,
          ...b(l),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), h(b(pe), N(S({ key: 1 }, { ...e, ...b(l) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), ve = ["id"], he = ["innerHTML"], fe = /* @__PURE__ */ z({
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
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), p = M("componentMapping", new Q()), v = C(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), d = C(
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
    return (f, i) => {
      var w;
      return a(), u("div", {
        id: e.id,
        class: s(v.value)
      }, [
        n("h3", {
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
          (a(!0), u(R, null, T(e.elementsOrder, (c, F) => (a(), u("div", {
            key: `${e.id}-element-${c}-${F}`,
            class: s(`${e.baseCssClass}__element`)
          }, [
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              n("h4", null, I(c), 1)
            ], 2),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[c].value}`
            }, null, 10, he),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + I(e.elements[c].dataType), 3),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + I(e.elements[c].multiValue ? "true" : "false"), 3),
            n("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + I(e.elements[c][":type"]), 3)
          ], 2))), 128))
        ], 2)) : q("", !0),
        (a(!0), u(R, null, T(d.value, (c) => (a(), h(D(c), {
          key: c.toString()
        }))), 128))
      ], 10, ve);
    };
  }
}), at = /* @__PURE__ */ z({
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
    ), v = C(() => {
      const d = _e(e.model);
      return d || fe;
    });
    return (d, f) => p.value ? q("", !0) : (a(), h(D(v.value), N(S({ key: 0 }, { ...e, ...b(l) })), null, 16));
  }
}), E = {
  createCallbackListener(t, e) {
    return (l, p = t) => {
      if (l.data && l.data.id === p && l.data.operation === "navigate") {
        e.value = l.data.index;
        const v = parent.document.getElementById("ContentFrame");
        v && v.dispatchEvent(new Event("load"));
      }
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
], we = ["id", "aria-labelledby"], nt = /* @__PURE__ */ z({
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
    const e = t, l = ee(), p = M("isInEditor", Y.isInEditor()), v = M("componentMapping", new Q()), d = $(E.initMessageChannel()), f = $(-1), i = $(e.expandedItems), w = $(null), c = C(() => (l == null ? void 0 : l.singleExpansion) === !0), F = C(() => {
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
        v
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
    }, _ = (o, m) => {
      const r = i.value.indexOf(o) > -1;
      if (c.value)
        i.value = r ? [] : [o];
      else if (r) {
        const x = i.value.indexOf(o);
        i.value.splice(x, 1);
      } else
        i.value.push(o);
      m.target.focus();
    }, B = (o, m, r) => {
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
          m.preventDefault(), _(o, m), P(r);
          break;
      }
    }, k = (o) => i.value.indexOf(o) > -1, O = C(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    J(c, async (o, m) => {
      o !== m && (i.value = e.expandedItems);
    }), J(e.expandedItems, async (o, m) => {
      o !== m && (i.value = o);
    }), J(f, async (o, m) => {
      o !== -1 && typeof o < "u" && o !== m && e.cqItemsOrder && (i.value = [e.cqItemsOrder[o]]);
    });
    const G = E.createCallbackListener(
      e.cqPath,
      f
    );
    return se(() => {
      E.subscribeRequestMessage(d.value, G);
    }), ae(() => {
      E.unsubscribeRequestMessage(d.value, G);
    }), (o, m) => (a(), u("div", S({
      id: e.id,
      ref_key: "accordion",
      ref: w,
      class: K.value,
      "data-cmp-single-expansion": c.value === !0 ? !0 : void 0
    }, F.value), [
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
              onClick: (X) => _(r, X),
              onKeydown: (X) => B(r, X, x)
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__title`)
              }, I(e.cqItems[r]["cq:panelTitle"]), 3),
              n("span", {
                class: s(`${e.baseCssClass}__icon`)
              }, Ee, 2)
            ], 42, qe)
          ]),
          _: 2
        }, 1032, ["class"])),
        b(p) || k(r) ? (a(), u("div", {
          key: 0,
          id: `accordion-${e.cqItems[r].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[r].id}-button`,
          class: s(`${e.baseCssClass}__panel ${k(r) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (a(), h(D(H.value[t.cqItemsOrder.indexOf(r)]), { key: 0 })) : q("", !0)
        ], 10, we)) : q("", !0)
      ], 10, Ie))), 128)) : q("", !0),
      b(p) ? (a(), h(b(te), N(S({ key: 1 }, O.value)), null, 16)) : q("", !0)
    ], 16, ge));
  }
}), Oe = ["id", "aria-label"], Pe = ["aria-label"], ke = ["aria-label"], xe = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), Se = [
  xe
], Me = ["aria-label"], Ae = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), Le = [
  Ae
], Ne = ["aria-label"], Re = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), De = [
  Re
], Fe = ["aria-label"], Be = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M8 5v14l11-7z" })
], -1), je = [
  Be
], Te = ["aria-label"], ze = ["aria-label", "onClick"], lt = /* @__PURE__ */ z({
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
    const e = t, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), v = M("componentMapping", new Q()), d = $(-1), f = $(-1), i = $(0), w = $(E.initMessageChannel()), c = $((l == null ? void 0 : l.autoplay) === !0 && !p), F = C(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        v
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
    }, _ = (g) => {
      var A;
      let y = ((A = e.accessibility) == null ? void 0 : A.slide) || "";
      const V = "{0}";
      y = y.replace(V, (g + 1).toString());
      const j = "{1}";
      return y = y.replace(
        j,
        e.cqItemsOrder.length.toString()
      ), y;
    }, B = () => {
      i.value === e.cqItemsOrder.length - 1 ? i.value = 0 : i.value += 1;
    }, k = () => {
      i.value === 0 ? i.value = e.cqItemsOrder.length - 1 : i.value -= 1;
    }, O = () => {
      !c.value || e.cqItemsOrder.length <= 1 || B();
    }, G = () => {
      d.value = setInterval(() => {
        O();
      }, e.delay);
    }, o = () => {
      clearInterval(d.value);
    }, m = (g) => {
      c.value = g;
    }, r = (g) => {
      i.value !== g && (i.value = g);
    }, x = () => {
      !e.autopauseDisabled && c.value && o();
    }, X = () => {
      !e.autopauseDisabled && c.value && G();
    }, ce = C(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    J(f, async (g, y) => {
      g !== -1 && typeof g < "u" && g !== y && (i.value = g, c.value = !1);
    });
    const ne = E.createCallbackListener(
      e.cqPath,
      f
    );
    return se(() => {
      G(), E.subscribeRequestMessage(w.value, ne);
    }), ae(() => {
      typeof d.value == "number" && d.value >= 0 && o(), E.unsubscribeRequestMessage(w.value, ne);
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
          onMouseleave: X
        }, [
          n("div", {
            class: s([{ [`${e.baseCssClass}__items`]: !b(p) }])
          }, [
            (a(!0), u(R, null, T(F.value, (A, L) => (a(), u("div", {
              key: `item-${L}`,
              "aria-label": _(L),
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
            ], 10, Pe))), 128))
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
              }, Se, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.previous), 3)
            ], 10, ke),
            n("button", {
              "aria-label": e.accessibility.next,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: B
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Le, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.next), 3)
            ], 10, Me),
            ((V = b(l)) == null ? void 0 : V.autoplay) === !0 ? (a(), u(R, { key: 0 }, [
              n("button", {
                "aria-label": e.accessibility.pause,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--pause`,
                  {
                    [`${e.baseCssClass}__action--disabled`]: !c.value
                  }
                ]),
                type: "button",
                onClick: y[0] || (y[0] = (A) => m(!1))
              }, [
                n("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, De, 2),
                n("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, I(e.accessibility.pause), 3)
              ], 10, Ne),
              n("button", {
                "aria-label": e.accessibility.play,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: c.value }
                ]),
                type: "button",
                onClick: y[1] || (y[1] = (A) => m(!0))
              }, [
                n("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, je, 2),
                n("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, I(e.accessibility.play), 3)
              ], 10, Fe)
            ], 64)) : q("", !0)
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
              onClick: (He) => r(L)
            }, I(e.cqItems[A]["cq:panelTitle"]), 11, ze))), 128))
          ], 10, Te)
        ], 34)),
        b(p) ? (a(), h(b(te), N(S({ key: 1 }, K.value)), null, 16)) : q("", !0)
      ], 10, Oe);
    };
  }
}), ot = /* @__PURE__ */ z({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, l) => (a(), h(ye, { "is-in-editor": !1 }));
  }
}), Ge = ["id"], Ve = ["aria-label"], Ue = ["tabIndex", "onClick"], it = /* @__PURE__ */ z({
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
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), p = M("componentMapping", new Q()), v = $(-1), d = $(0), f = $(E.initMessageChannel()), i = C(
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
    ), c = C(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), F = C(() => {
      const _ = {
        class: "aem-container",
        "data-cmp-is": "tabs",
        "data-panelcontainer": "tabs"
      };
      return l && (_["data-cq-data-path"] = e.cqPath), _;
    }), H = C(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), K = (_) => {
      d.value !== _ && (d.value = _);
    };
    J(v, async (_, B) => {
      _ !== -1 && typeof _ < "u" && _ !== B && (d.value = _);
    });
    const P = E.createCallbackListener(
      e.cqPath,
      v
    );
    return se(() => {
      E.subscribeRequestMessage(f.value, P);
    }), ae(() => {
      E.unsubscribeRequestMessage(f.value, P);
    }), (_, B) => (a(), u("div", S({
      id: e.id,
      class: w.value
    }, F.value), [
      c.value ? q("", !0) : (a(), u("ol", {
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
              [`${e.baseCssClass}__tab--active`]: O === d.value
            }
          ]),
          tabIndex: O === d.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (G) => K(O)
        }, I(e.cqItems[k]["cq:panelTitle"]), 11, Ue))), 128))
      ], 10, Ve)),
      !c.value && b(l) ? (a(!0), u(R, { key: 1 }, T(i.value, (k, O) => (a(), u("div", {
        key: `tab-content-${O}`,
        class: s(`${e.baseCssClass}__author-tab-content`),
        style: le({ display: d.value === O ? "block" : "none" })
      }, [
        (a(), h(D(k), N(me({ isInEditor: !1 })), null, 16))
      ], 6))), 128)) : c.value ? q("", !0) : (a(), h(D(i.value[d.value]), { key: 2 })),
      b(l) ? (a(), h(b(te), N(S({ key: 3 }, H.value)), null, 16)) : q("", !0)
    ], 16, Ge));
  }
});
export {
  Qe as AccordionEditConfig,
  We as CarouselEditConfig,
  Ye as ContainerEditConfig,
  Ze as ContentFragmentEditConfig,
  nt as CoreAccordion,
  lt as CoreCarousel,
  ye as CoreContainer,
  at as CoreContentFragment,
  ot as CoreExperienceFragment,
  it as CoreTabs,
  fe as DefaultContentFragment,
  et as ExperienceFragmentEditConfig,
  st as MapToContentFragmentModel,
  E as SpaUtils,
  tt as TabsEditConfig,
  _e as getRenderer,
  be as mapRenderer
};
