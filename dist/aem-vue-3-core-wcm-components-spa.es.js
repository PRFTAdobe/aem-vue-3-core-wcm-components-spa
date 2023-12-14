import { MapTo as re, ComponentMapping as Q, componentProperties as U, componentClassNames as W, AllowedComponentsContainer as de, ResponsiveGrid as ue, Container as pe, Utils as Z, ContainerPlaceholder as se } from "aem-vue-3-editable-components";
import { defineComponent as z, useAttrs as ee, inject as M, computed as C, openBlock as a, createBlock as h, unref as b, normalizeProps as j, mergeProps as S, resolveDynamicComponent as D, normalizeClass as t, normalizeStyle as le, withCtx as oe, createElementBlock as u, createElementVNode as n, toDisplayString as g, createCommentVNode as I, Fragment as N, renderList as T, ref as $, watch as J, onMounted as te, onUnmounted as ae } from "vue";
import { AuthoringUtils as Y } from "@adobe/aem-spa-page-model-manager";
const Je = {
  emptyLabel: "Accordion",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, Qe = {
  emptyLabel: "Carousel",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, We = {
  emptyLabel: "Container",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, Ye = {
  emptyLabel: "Content Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return s.elementsOrder.length === 0 && s.cqItemsOrder.length === 0;
  }
}, Ze = {
  emptyLabel: "Experience Fragment",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, es = {
  emptyLabel: "Tabs",
  // eslint-disable-next-line no-shadow
  isEmpty(s) {
    return !s.cqItemsOrder || (s == null ? void 0 : s.cqItemsOrder.length) === 0;
  }
}, me = "ContentFragment-", ie = (s) => me + s, Ce = (s, e) => {
  s && e && (typeof s == "string" ? [s] : s).forEach((p) => {
    re(ie(p))(e);
  });
}, be = (s) => {
  const e = ie(s);
  return Q.get(e);
}, ss = (s) => (e) => Ce(s, e), _e = /* @__PURE__ */ z({
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
    const e = s, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), q = C(
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
        var v;
        return p && (l == null ? void 0 : l.allowedComponents) && ((v = l == null ? void 0 : l.allowedComponents) == null ? void 0 : v.applicable);
      }
    );
    return (v, i) => d.value ? (a(), h(b(de), j(S({ key: 0 }, { ...e, ...b(l) })), null, 16)) : (a(), h(D(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: t(q.value),
      role: e.roleAttribute,
      style: le(e.backgroundStyle)
    }, {
      default: oe(() => [
        s.layout === "RESPONSIVE_GRID" ? (a(), h(b(ue), j(S({ key: 0 }, {
          ...e,
          ...b(l),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), h(b(pe), j(S({ key: 1 }, { ...e, ...b(l) })), null, 16))
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
    ...U("cmp-contentfragment")
  },
  setup(s) {
    const e = s, l = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), p = M("componentMapping", new Q()), q = C(
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
    return (v, i) => {
      var w;
      return a(), u("div", {
        id: e.id,
        class: t(q.value)
      }, [
        n("h3", {
          class: t(`${e.baseCssClass}__title`)
        }, g(e.title), 3),
        e.description ? (a(), u("p", {
          key: 0,
          class: t(`${e.baseCssClass}__description`)
        }, g(e.description), 3)) : I("", !0),
        (w = e.elementsOrder) != null && w.length ? (a(), u("div", {
          key: 1,
          class: t(`${e.baseCssClass}__elements`)
        }, [
          (a(!0), u(N, null, T(e.elementsOrder, (c, R) => (a(), u("div", {
            key: `${e.id}-element-${c}-${R}`,
            class: t(`${e.baseCssClass}__element`)
          }, [
            n("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              n("h4", null, g(c), 1)
            ], 2),
            n("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[c].value}`
            }, null, 10, he),
            n("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + g(e.elements[c].dataType), 3),
            n("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + g(e.elements[c].multiValue ? "true" : "false"), 3),
            n("div", {
              class: t([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + g(e.elements[c][":type"]), 3)
          ], 2))), 128))
        ], 2)) : I("", !0),
        (a(!0), u(N, null, T(d.value, (c) => (a(), h(D(c), {
          key: c.toString()
        }))), 128))
      ], 10, ye);
    };
  }
}), ts = /* @__PURE__ */ z({
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
    ), q = C(() => {
      const d = be(e.model);
      return d || ve;
    });
    return (d, v) => p.value ? I("", !0) : (a(), h(D(q.value), j(S({ key: 0 }, { ...e, ...b(l) })), null, 16));
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
}, fe = ["id", "data-cmp-single-expansion"], ge = ["id", "data-cmp-expanded"], Ie = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], qe = /* @__PURE__ */ n("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), $e = [
  qe
], Ee = ["id", "aria-labelledby"], as = /* @__PURE__ */ z({
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
    const e = s, l = ee(), p = M("isInEditor", Y.isInEditor()), q = M("componentMapping", new Q()), d = $(E.initMessageChannel()), v = $(-1), i = $(e.expandedItems), w = $(null), c = C(() => (l == null ? void 0 : l.singleExpansion) === !0), R = C(() => {
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
    }), J(v, async (o, m) => {
      o !== -1 && typeof o < "u" && o !== m && e.cqItemsOrder && (i.value = [e.cqItemsOrder[o]]);
    });
    const G = E.createCallbackListener(
      e.cqPath,
      v
    );
    return te(() => {
      E.subscribeRequestMessage(d.value, G);
    }), ae(() => {
      E.unsubscribeRequestMessage(d.value, G);
    }), (o, m) => (a(), u("div", S({
      id: e.id,
      ref_key: "accordion",
      ref: w,
      class: K.value,
      "data-cmp-single-expansion": c.value === !0 ? !0 : void 0
    }, R.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (a(!0), u(N, { key: 0 }, T(e.cqItemsOrder, (r, x) => (a(), u("div", {
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
              onClick: (X) => _(r, X),
              onKeydown: (X) => B(r, X, x)
            }, [
              n("span", {
                class: t(`${e.baseCssClass}__title`)
              }, g(e.cqItems[r]["cq:panelTitle"]), 3),
              n("span", {
                class: t(`${e.baseCssClass}__icon`)
              }, $e, 2)
            ], 42, Ie)
          ]),
          _: 2
        }, 1032, ["class"])),
        b(p) || k(r) ? (a(), u("div", {
          key: 0,
          id: `accordion-${e.cqItems[r].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[r].id}-button`,
          class: t(`${e.baseCssClass}__panel ${k(r) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (a(), h(D(H.value[s.cqItemsOrder.indexOf(r)]), { key: 0 })) : I("", !0)
        ], 10, Ee)) : I("", !0)
      ], 10, ge))), 128)) : I("", !0),
      b(p) ? (a(), h(b(se), j(S({ key: 1 }, O.value)), null, 16)) : I("", !0)
    ], 16, fe));
  }
}), we = ["id", "aria-label"], Oe = ["aria-label"], Pe = ["aria-label"], ke = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), xe = [
  ke
], Se = ["aria-label"], Me = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), Ae = [
  Me
], Le = ["aria-label"], Ne = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), De = [
  Ne
], Re = ["aria-label"], Be = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M8 5v14l11-7z" })
], -1), Fe = [
  Be
], je = ["aria-label"], Te = ["aria-label", "onClick"], ns = /* @__PURE__ */ z({
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
    const e = s, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), q = M("componentMapping", new Q()), d = $(-1), v = $(-1), i = $(0), w = $(E.initMessageChannel()), c = $((l == null ? void 0 : l.autoplay) === !0 && !p), R = C(
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
    })), P = (f) => {
      var F;
      let y = ((F = e.accessibility) == null ? void 0 : F.indicator) || "";
      const V = "{0}";
      return y = y.replace(V, (f + 1).toString()), y;
    }, _ = (f) => {
      var A;
      let y = ((A = e.accessibility) == null ? void 0 : A.slide) || "";
      const V = "{0}";
      y = y.replace(V, (f + 1).toString());
      const F = "{1}";
      return y = y.replace(
        F,
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
    }, m = (f) => {
      c.value = f;
    }, r = (f) => {
      i.value !== f && (i.value = f);
    }, x = () => {
      !e.autopauseDisabled && c.value && o();
    }, X = () => {
      !e.autopauseDisabled && c.value && G();
    }, ce = C(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    J(v, async (f, y) => {
      f !== -1 && typeof f < "u" && f !== y && (i.value = f, c.value = !1);
    });
    const ne = E.createCallbackListener(
      e.cqPath,
      v
    );
    return te(() => {
      G(), E.subscribeRequestMessage(w.value, ne);
    }), ae(() => {
      typeof d.value == "number" && d.value >= 0 && o(), E.unsubscribeRequestMessage(w.value, ne);
    }), (f, y) => {
      var V, F;
      return a(), u("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: t(H.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        ce.value ? I("", !0) : (a(), u("div", {
          key: 0,
          class: t(`${e.baseCssClass}__content`),
          onMouseenter: x,
          onMouseleave: X
        }, [
          n("div", {
            class: t([{ [`${e.baseCssClass}__items`]: !b(p) }])
          }, [
            (a(!0), u(N, null, T(R.value, (A, L) => (a(), u("div", {
              key: `item-${L}`,
              "aria-label": _(L),
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
            ], 10, Oe))), 128))
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
              }, xe, 2),
              n("span", {
                class: t(`${e.baseCssClass}__action-text`)
              }, g(e.accessibility.previous), 3)
            ], 10, Pe),
            n("button", {
              "aria-label": e.accessibility.next,
              class: t(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: B
            }, [
              n("span", {
                class: t(`${e.baseCssClass}__action-icon`)
              }, Ae, 2),
              n("span", {
                class: t(`${e.baseCssClass}__action-text`)
              }, g(e.accessibility.next), 3)
            ], 10, Se),
            ((V = b(l)) == null ? void 0 : V.autoplay) === !0 ? (a(), u(N, { key: 0 }, [
              n("button", {
                "aria-label": e.accessibility.pause,
                class: t([
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
                  class: t(`${e.baseCssClass}__action-icon`)
                }, De, 2),
                n("span", {
                  class: t(`${e.baseCssClass}__action-text`)
                }, g(e.accessibility.pause), 3)
              ], 10, Le),
              n("button", {
                "aria-label": e.accessibility.play,
                class: t([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: c.value }
                ]),
                type: "button",
                onClick: y[1] || (y[1] = (A) => m(!0))
              }, [
                n("span", {
                  class: t(`${e.baseCssClass}__action-icon`)
                }, Fe, 2),
                n("span", {
                  class: t(`${e.baseCssClass}__action-text`)
                }, g(e.accessibility.play), 3)
              ], 10, Re)
            ], 64)) : I("", !0)
          ], 2),
          n("ol", {
            "aria-label": (F = e.accessibility) == null ? void 0 : F.indicators,
            class: t(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (a(!0), u(N, null, T(e.cqItemsOrder, (A, L) => (a(), u("li", {
              key: `item-${L}`,
              "aria-label": P(L),
              class: t([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: L === i.value
                }
              ]),
              role: "tab",
              onClick: (Ue) => r(L)
            }, g(e.cqItems[A]["cq:panelTitle"]), 11, Te))), 128))
          ], 10, je)
        ], 34)),
        b(p) ? (a(), h(b(se), j(S({ key: 1 }, K.value)), null, 16)) : I("", !0)
      ], 10, we);
    };
  }
}), ls = /* @__PURE__ */ z({
  __name: "CoreExperienceFragment",
  setup(s) {
    return (e, l) => (a(), h(_e, { "is-in-editor": !1 }));
  }
}), ze = ["id"], Ge = ["aria-label"], Ve = ["tabIndex", "onClick"], os = /* @__PURE__ */ z({
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
    const e = s, l = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), p = M("componentMapping", new Q()), q = $(-1), d = $(0), v = $(E.initMessageChannel()), i = C(
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
    ), R = C(() => {
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
    J(q, async (_, B) => {
      _ !== -1 && typeof _ < "u" && _ !== B && (d.value = _);
    });
    const P = E.createCallbackListener(
      e.cqPath,
      q
    );
    return te(() => {
      E.subscribeRequestMessage(v.value, P);
    }), ae(() => {
      E.unsubscribeRequestMessage(v.value, P);
    }), (_, B) => (a(), u("div", S({
      id: e.id,
      class: w.value
    }, R.value), [
      c.value ? I("", !0) : (a(), u("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: t(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (a(!0), u(N, null, T(e.cqItemsOrder, (k, O) => (a(), u("li", {
          key: `tab-${O}`,
          class: t([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: O === d.value
            }
          ]),
          tabIndex: O === d.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (G) => K(O)
        }, g(e.cqItems[k]["cq:panelTitle"]), 11, Ve))), 128))
      ], 10, Ge)),
      !c.value && b(l) ? (a(!0), u(N, { key: 1 }, T(i.value, (k, O) => (a(), u("div", {
        key: `tab-content-${O}`,
        class: t(`${e.baseCssClass}__author-tab-content`),
        style: le({ display: d.value === O ? "block" : "none" })
      }, [
        (a(), h(D(k)))
      ], 6))), 128)) : c.value ? I("", !0) : (a(), h(D(i.value[d.value]), { key: 2 })),
      b(l) ? (a(), h(b(se), j(S({ key: 3 }, H.value)), null, 16)) : I("", !0)
    ], 16, ze));
  }
});
export {
  Je as AccordionEditConfig,
  Qe as CarouselEditConfig,
  We as ContainerEditConfig,
  Ye as ContentFragmentEditConfig,
  as as CoreAccordion,
  ns as CoreCarousel,
  _e as CoreContainer,
  ts as CoreContentFragment,
  ls as CoreExperienceFragment,
  os as CoreTabs,
  ve as DefaultContentFragment,
  Ze as ExperienceFragmentEditConfig,
  ss as MapToContentFragmentModel,
  es as TabsEditConfig,
  be as getRenderer,
  Ce as mapRenderer
};
