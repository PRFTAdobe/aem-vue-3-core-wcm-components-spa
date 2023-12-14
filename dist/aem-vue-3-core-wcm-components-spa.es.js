import { MapTo as de, ComponentMapping as Q, componentProperties as U, componentClassNames as W, AllowedComponentsContainer as ue, ResponsiveGrid as pe, Container as me, Utils as Z, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { defineComponent as j, useAttrs as ee, inject as S, computed as b, openBlock as a, createBlock as v, unref as y, normalizeProps as B, mergeProps as x, resolveDynamicComponent as D, normalizeClass as s, normalizeStyle as ne, withCtx as le, createElementBlock as u, createElementVNode as n, toDisplayString as I, createCommentVNode as q, Fragment as N, renderList as F, ref as E, watch as J, onMounted as se, onUnmounted as ae } from "vue";
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
}, Ce = "ContentFragment-", oe = (t) => Ce + t, be = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((p) => {
    de(oe(p))(e);
  });
}, _e = (t) => {
  const e = oe(t);
  return Q.get(e);
}, st = (t) => (e) => be(t, e), ye = /* @__PURE__ */ j({
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
    const e = t, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), $ = b(
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
        var f;
        return p && (l == null ? void 0 : l.allowedComponents) && ((f = l == null ? void 0 : l.allowedComponents) == null ? void 0 : f.applicable);
      }
    );
    return (f, i) => d.value ? (a(), v(y(ue), B(x({ key: 0 }, { ...e, ...y(l) })), null, 16)) : (a(), v(D(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: s($.value),
      role: e.roleAttribute,
      style: ne(e.backgroundStyle)
    }, {
      default: le(() => [
        t.layout === "RESPONSIVE_GRID" ? (a(), v(y(pe), B(x({ key: 0 }, {
          ...e,
          ...y(l),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), v(y(me), B(x({ key: 1 }, { ...e, ...y(l) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), he = ["id"], ve = ["innerHTML"], fe = /* @__PURE__ */ j({
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
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), p = S("componentMapping", new Q()), $ = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
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
    return (f, i) => {
      var g;
      return a(), u("div", {
        id: e.id,
        class: s($.value)
      }, [
        n("h3", {
          class: s(`${e.baseCssClass}__title`)
        }, I(e.title), 3),
        e.description ? (a(), u("p", {
          key: 0,
          class: s(`${e.baseCssClass}__description`)
        }, I(e.description), 3)) : q("", !0),
        (g = e.elementsOrder) != null && g.length ? (a(), u("div", {
          key: 1,
          class: s(`${e.baseCssClass}__elements`)
        }, [
          (a(!0), u(N, null, F(e.elementsOrder, (c, G) => (a(), u("div", {
            key: `${e.id}-element-${c}-${G}`,
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
            }, null, 10, ve),
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
        (a(!0), u(N, null, F(d.value, (c) => (a(), v(D(c), {
          key: c.toString()
        }))), 128))
      ], 10, he);
    };
  }
}), at = /* @__PURE__ */ j({
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
    const e = t, l = ee(), p = b(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), $ = b(() => {
      const d = _e(e.model);
      return d || fe;
    });
    return (d, f) => p.value ? q("", !0) : (a(), v(D($.value), B(x({ key: 0 }, { ...e, ...y(l) })), null, 16));
  }
}), L = {
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
}, ge = ["id", "data-cmp-single-expansion"], Ie = ["id", "data-cmp-expanded"], qe = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], $e = /* @__PURE__ */ n("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), we = [
  $e
], Ee = ["id", "aria-labelledby"], nt = /* @__PURE__ */ j({
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
    const e = t, l = ee(), p = S("isInEditor", Y.isInEditor()), $ = S("componentMapping", new Q()), d = E(L.initMessageChannel()), f = E(-1), i = E(e.expandedItems), g = E(null), c = b(() => (l == null ? void 0 : l.singleExpansion) === !0), G = b(() => {
      const o = {};
      return p && (o["data-panelcontainer"] = "accordion", o["data-cq-data-path"] = e.cqPath || "", o["data-placeholder-text"] = "Please drag Accordion item components here"), o;
    }), T = b(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        $
      )
    ), H = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        p,
        e.aemNoDecoration
      )
    ), P = (o) => {
      const m = g.value.querySelector(
        `button[data-cmp-button-id="${o}"]`
      );
      m && m.focus();
    }, h = (o, m) => {
      const r = i.value.indexOf(o) > -1;
      if (c.value)
        i.value = r ? [] : [o];
      else if (r) {
        const O = i.value.indexOf(o);
        i.value.splice(O, 1);
      } else
        i.value.push(o);
      m.target.focus();
    }, z = (o, m, r) => {
      const O = g.value.querySelectorAll("button").length - 1;
      switch (m.code) {
        case "ArrowLeft":
        case "ArrowUp":
          m.preventDefault(), r > 0 && P(r - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          m.preventDefault(), r < O && P(r + 1);
          break;
        case "Home":
          m.preventDefault(), P(0);
          break;
        case "End":
          m.preventDefault(), P(O);
          break;
        case "Enter":
        case "Space":
          m.preventDefault(), h(o, m), P(r);
          break;
      }
    }, k = (o) => i.value.indexOf(o) > -1, w = b(() => ({
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
    const K = L.createCallbackListener(
      e.cqPath,
      f
    );
    return se(() => {
      L.subscribeRequestMessage(d.value, K);
    }), ae(() => {
      L.unsubscribeRequestMessage(d.value, K);
    }), (o, m) => (a(), u("div", x({
      id: e.id,
      ref_key: "accordion",
      ref: g,
      class: H.value,
      "data-cmp-single-expansion": c.value === !0 ? !0 : void 0
    }, G.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (a(!0), u(N, { key: 0 }, F(e.cqItemsOrder, (r, O) => (a(), u("div", {
        id: `accordion-${e.cqItems[r].id}`,
        key: `accordion-index-${O}`,
        class: s(`${e.baseCssClass}__item`),
        "data-cmp-expanded": k(r) ? !0 : void 0
      }, [
        (a(), v(D(e.headingElement), {
          class: s(`${e.baseCssClass}__heading`)
        }, {
          default: le(() => [
            n("button", {
              id: `accordion-${e.cqItems[r].id}-button`,
              "aria-controls": `accordion-${e.cqItems[r].id}-panel`,
              class: s([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: k(r)
                }
              ]),
              "data-cmp-button-id": O,
              onClick: (X) => h(r, X),
              onKeydown: (X) => z(r, X, O)
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__title`)
              }, I(e.cqItems[r]["cq:panelTitle"]), 3),
              n("span", {
                class: s(`${e.baseCssClass}__icon`)
              }, we, 2)
            ], 42, qe)
          ]),
          _: 2
        }, 1032, ["class"])),
        y(p) || k(r) ? (a(), u("div", {
          key: 0,
          id: `accordion-${e.cqItems[r].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[r].id}-button`,
          class: s(`${e.baseCssClass}__panel ${k(r) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (a(), v(D(T.value[t.cqItemsOrder.indexOf(r)]), { key: 0 })) : q("", !0)
        ], 10, Ee)) : q("", !0)
      ], 10, Ie))), 128)) : q("", !0),
      y(p) ? (a(), v(y(te), B(x({ key: 1 }, w.value)), null, 16)) : q("", !0)
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
], Ge = ["aria-label"], Te = ["aria-label", "onClick"], lt = /* @__PURE__ */ j({
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
    const e = t, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), $ = S("componentMapping", new Q()), d = E(-1), f = E(-1), i = E(0), g = E(null), c = E((l == null ? void 0 : l.autoplay) === !0 && !p);
    (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })() && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (g.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const T = (C, _ = e.cqPath) => {
      C.data && C.data.id === _ && C.data.operation === "navigate" && (f.value = C.data.index);
    }, H = b(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        $
      )
    ), P = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        p,
        e.aemNoDecoration
      )
    ), h = b(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), z = (C) => {
      var R;
      let _ = ((R = e.accessibility) == null ? void 0 : R.indicator) || "";
      const V = "{0}";
      return _ = _.replace(V, (C + 1).toString()), _;
    }, k = (C) => {
      var M;
      let _ = ((M = e.accessibility) == null ? void 0 : M.slide) || "";
      const V = "{0}";
      _ = _.replace(V, (C + 1).toString());
      const R = "{1}";
      return _ = _.replace(
        R,
        e.cqItemsOrder.length.toString()
      ), _;
    }, w = () => {
      i.value === e.cqItemsOrder.length - 1 ? i.value = 0 : i.value += 1;
    }, K = () => {
      i.value === 0 ? i.value = e.cqItemsOrder.length - 1 : i.value -= 1;
    }, o = () => {
      !c.value || e.cqItemsOrder.length <= 1 || w();
    }, m = () => {
      d.value = setInterval(() => {
        o();
      }, e.delay);
    }, r = () => {
      clearInterval(d.value);
    }, O = (C) => {
      c.value = C;
    }, X = (C) => {
      i.value !== C && (i.value = C);
    }, ie = () => {
      !e.autopauseDisabled && c.value && r();
    }, ce = () => {
      !e.autopauseDisabled && c.value && m();
    }, re = b(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    return J(f, async (C, _) => {
      C !== -1 && typeof C < "u" && C !== _ && (i.value = C, c.value = !1);
    }), se(() => {
      m(), g.value && g.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        T
      );
    }), ae(() => {
      typeof d.value == "number" && d.value >= 0 && r(), g.value && g.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        T
      );
    }), (C, _) => {
      var V, R;
      return a(), u("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: s(P.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        re.value ? q("", !0) : (a(), u("div", {
          key: 0,
          class: s(`${e.baseCssClass}__content`),
          onMouseenter: ie,
          onMouseleave: ce
        }, [
          n("div", {
            class: s([{ [`${e.baseCssClass}__items`]: !y(p) }])
          }, [
            (a(!0), u(N, null, F(H.value, (M, A) => (a(), u("div", {
              key: `item-${A}`,
              "aria-label": k(A),
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
            ], 10, Pe))), 128))
          ], 2),
          n("div", {
            class: s(`${e.baseCssClass}__actions`)
          }, [
            n("button", {
              "aria-label": e.accessibility.previous,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: K
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
              onClick: w
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Le, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.next), 3)
            ], 10, Me),
            ((V = y(l)) == null ? void 0 : V.autoplay) === !0 ? (a(), u(N, { key: 0 }, [
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
                onClick: _[0] || (_[0] = (M) => O(!1))
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
                  { [`${e.baseCssClass}__action--disabled`]: c.value }
                ]),
                type: "button",
                onClick: _[1] || (_[1] = (M) => O(!0))
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
            "aria-label": (R = e.accessibility) == null ? void 0 : R.indicators,
            class: s(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (a(!0), u(N, null, F(e.cqItemsOrder, (M, A) => (a(), u("li", {
              key: `item-${A}`,
              "aria-label": z(A),
              class: s([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: A === i.value
                }
              ]),
              role: "tab",
              onClick: (He) => X(A)
            }, I(e.cqItems[M]["cq:panelTitle"]), 11, Te))), 128))
          ], 10, Ge)
        ], 34)),
        y(p) ? (a(), v(y(te), B(x({ key: 1 }, h.value)), null, 16)) : q("", !0)
      ], 10, Oe);
    };
  }
}), ot = /* @__PURE__ */ j({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, l) => (a(), v(ye, { "is-in-editor": !1 }));
  }
}), ze = ["id"], Ve = ["aria-label"], Ue = ["tabIndex", "onClick"], it = /* @__PURE__ */ j({
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
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : S("isInEditor", Y.isInEditor()), p = S("componentMapping", new Q()), $ = E(-1), d = E(0), f = E(L.initMessageChannel()), i = b(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        p
      )
    ), g = b(
      () => W(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        l,
        e.aemNoDecoration
      )
    ), c = b(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), G = b(() => {
      const h = {
        class: "aem-container",
        "data-cmp-is": "tabs",
        "data-panelcontainer": "tabs"
      };
      return l && (h["data-cq-data-path"] = e.cqPath), h;
    }), T = b(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), H = (h) => {
      d.value !== h && (d.value = h);
    };
    J($, async (h, z) => {
      h !== -1 && typeof h < "u" && h !== z && (d.value = h);
    });
    const P = L.createCallbackListener(
      e.cqPath,
      $
    );
    return se(() => {
      L.subscribeRequestMessage(f.value, P);
    }), ae(() => {
      L.unsubscribeRequestMessage(f.value, P);
    }), (h, z) => (a(), u("div", x({
      id: e.id,
      class: g.value
    }, G.value), [
      c.value ? q("", !0) : (a(), u("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: s(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (a(!0), u(N, null, F(e.cqItemsOrder, (k, w) => (a(), u("li", {
          key: `tab-${w}`,
          class: s([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: w === d.value
            }
          ]),
          tabIndex: w === d.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (K) => H(w)
        }, I(e.cqItems[k]["cq:panelTitle"]), 11, Ue))), 128))
      ], 10, Ve)),
      !c.value && y(l) ? (a(!0), u(N, { key: 1 }, F(i.value, (k, w) => (a(), u("div", {
        key: `tab-content-${w}`,
        class: s(`${e.baseCssClass}__author-tab-content`),
        style: ne({ display: d.value === w ? "block" : "none" })
      }, [
        (a(), v(D(k)))
      ], 6))), 128)) : c.value ? q("", !0) : (a(), v(D(i.value[d.value]), { key: 2 })),
      y(l) ? (a(), v(y(te), B(x({ key: 3 }, T.value)), null, 16)) : q("", !0)
    ], 16, ze));
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
  tt as TabsEditConfig,
  _e as getRenderer,
  be as mapRenderer
};
