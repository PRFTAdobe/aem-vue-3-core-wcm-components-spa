import { MapTo as ce, ComponentMapping as J, componentProperties as V, componentClassNames as Q, AllowedComponentsContainer as de, ResponsiveGrid as ue, Container as pe, Utils as Z, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { defineComponent as j, useAttrs as ee, inject as k, computed as y, openBlock as a, createBlock as g, unref as f, normalizeProps as F, mergeProps as x, resolveDynamicComponent as B, normalizeClass as s, normalizeStyle as ne, withCtx as le, createElementBlock as u, createElementVNode as l, toDisplayString as w, createCommentVNode as q, Fragment as D, renderList as G, ref as E, watch as X, onMounted as se, onUnmounted as ae } from "vue";
import { AuthoringUtils as W } from "@adobe/aem-spa-page-model-manager";
const Je = {
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
}, me = "ContentFragment-", oe = (t) => me + t, Ce = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((C) => {
    ce(oe(C))(e);
  });
}, be = (t) => {
  const e = oe(t);
  return J.get(e);
}, tt = (t) => (e) => Ce(t, e), _e = /* @__PURE__ */ j({
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
    const e = t, o = ee(), C = typeof e.isInEditor < "u" ? e.isInEditor : k("isInEditor", W.isInEditor()), $ = y(
      () => Q(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        C,
        e.aemNoDecoration
      )
    ), p = y(
      () => {
        var b;
        return C && (o == null ? void 0 : o.allowedComponents) && ((b = o == null ? void 0 : o.allowedComponents) == null ? void 0 : b.applicable);
      }
    );
    return (b, h) => p.value ? (a(), g(f(de), F(x({ key: 0 }, { ...e, ...f(o) })), null, 16)) : (a(), g(B(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: s($.value),
      role: e.roleAttribute,
      style: ne(e.backgroundStyle)
    }, {
      default: le(() => [
        t.layout === "RESPONSIVE_GRID" ? (a(), g(f(ue), F(x({ key: 0 }, {
          ...e,
          ...f(o),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), g(f(pe), F(x({ key: 1 }, { ...e, ...f(o) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), ye = ["id"], ve = ["innerHTML"], he = /* @__PURE__ */ j({
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
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : k("isInEditor", W.isInEditor()), C = k("componentMapping", new J()), $ = y(
      () => Q(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), p = y(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        C
      )
    );
    return (b, h) => {
      var m;
      return a(), u("div", {
        id: e.id,
        class: s($.value)
      }, [
        l("h3", {
          class: s(`${e.baseCssClass}__title`)
        }, w(e.title), 3),
        e.description ? (a(), u("p", {
          key: 0,
          class: s(`${e.baseCssClass}__description`)
        }, w(e.description), 3)) : q("", !0),
        (m = e.elementsOrder) != null && m.length ? (a(), u("div", {
          key: 1,
          class: s(`${e.baseCssClass}__elements`)
        }, [
          (a(!0), u(D, null, G(e.elementsOrder, (c, S) => (a(), u("div", {
            key: `${e.id}-element-${c}-${S}`,
            class: s(`${e.baseCssClass}__element`)
          }, [
            l("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--key`
              ])
            }, [
              l("h4", null, w(c), 1)
            ], 2),
            l("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--value`
              ]),
              innerHTML: `value: ${e.elements[c].value}`
            }, null, 10, ve),
            l("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--datatype`
              ])
            }, " datatype: " + w(e.elements[c].dataType), 3),
            l("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--multivalue`
              ])
            }, " multivalue: " + w(e.elements[c].multiValue ? "true" : "false"), 3),
            l("div", {
              class: s([
                `${e.baseCssClass}__elemententry`,
                `${e.baseCssClass}__elemententry--type`
              ])
            }, " type: " + w(e.elements[c][":type"]), 3)
          ], 2))), 128))
        ], 2)) : q("", !0),
        (a(!0), u(D, null, G(p.value, (c) => (a(), g(B(c), {
          key: c.toString()
        }))), 128))
      ], 10, ye);
    };
  }
}), st = /* @__PURE__ */ j({
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
    const e = t, o = ee(), C = y(
      () => e.elementsOrder.length === 0 && e.cqItemsOrder.length === 0
    ), $ = y(() => {
      const p = be(e.model);
      return p || he;
    });
    return (p, b) => C.value ? q("", !0) : (a(), g(B($.value), F(x({ key: 0 }, { ...e, ...f(o) })), null, 16));
  }
}), fe = ["id", "data-cmp-single-expansion"], ge = ["id", "data-cmp-expanded"], Ie = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], we = /* @__PURE__ */ l("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), qe = [
  we
], $e = ["id", "aria-labelledby"], at = /* @__PURE__ */ j({
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
    const e = t, o = ee(), C = k("isInEditor", W.isInEditor()), $ = k("componentMapping", new J()), p = (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })(), b = E(null), h = E(-1), m = E(e.expandedItems), c = E(null), S = y(() => (o == null ? void 0 : o.singleExpansion) === !0);
    p && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (b.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const A = y(() => {
      const n = {};
      return C && (n["data-panelcontainer"] = "accordion", n["data-cq-data-path"] = e.cqPath || "", n["data-placeholder-text"] = "Please drag Accordion item components here"), n;
    }), T = (n, d = e.cqPath) => {
      n.data && n.data.id === d && n.data.operation === "navigate" && (h.value = n.data.index);
    }, H = y(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        $
      )
    ), U = y(
      () => Q(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        C,
        e.aemNoDecoration
      )
    ), i = (n) => {
      const d = c.value.querySelector(
        `button[data-cmp-button-id="${n}"]`
      );
      d && d.focus();
    }, P = (n, d) => {
      const r = m.value.indexOf(n) > -1;
      if (S.value)
        m.value = r ? [] : [n];
      else if (r) {
        const O = m.value.indexOf(n);
        m.value.splice(O, 1);
      } else
        m.value.push(n);
      d.target.focus();
    }, M = (n, d, r) => {
      const O = c.value.querySelectorAll("button").length - 1;
      switch (d.code) {
        case "ArrowLeft":
        case "ArrowUp":
          d.preventDefault(), r > 0 && i(r - 1);
          break;
        case "ArrowRight":
        case "ArrowDown":
          d.preventDefault(), r < O && i(r + 1);
          break;
        case "Home":
          d.preventDefault(), i(0);
          break;
        case "End":
          d.preventDefault(), i(O);
          break;
        case "Enter":
        case "Space":
          d.preventDefault(), P(n, d), i(r);
          break;
      }
    }, I = (n) => m.value.indexOf(n) > -1, Y = y(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    return X(S, async (n, d) => {
      n !== d && (m.value = e.expandedItems);
    }), X(e.expandedItems, async (n, d) => {
      n !== d && (m.value = n);
    }), X(h, async (n, d) => {
      n !== -1 && typeof n < "u" && n !== d && e.cqItemsOrder && (m.value = [e.cqItemsOrder[n]]);
    }), se(() => {
      b.value && b.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        T
      );
    }), ae(() => {
      b.value && b.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        T
      );
    }), (n, d) => (a(), u("div", x({
      id: e.id,
      ref_key: "accordion",
      ref: c,
      class: U.value,
      "data-cmp-single-expansion": S.value === !0 ? !0 : void 0
    }, A.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (a(!0), u(D, { key: 0 }, G(e.cqItemsOrder, (r, O) => (a(), u("div", {
        id: `accordion-${e.cqItems[r].id}`,
        key: `accordion-index-${O}`,
        class: s(`${e.baseCssClass}__item`),
        "data-cmp-expanded": I(r) ? !0 : void 0
      }, [
        (a(), g(B(e.headingElement), {
          class: s(`${e.baseCssClass}__heading`)
        }, {
          default: le(() => [
            l("button", {
              id: `accordion-${e.cqItems[r].id}-button`,
              "aria-controls": `accordion-${e.cqItems[r].id}-panel`,
              class: s([
                `${e.baseCssClass}__button`,
                {
                  [`${e.baseCssClass}__button--expanded`]: I(r)
                }
              ]),
              "data-cmp-button-id": O,
              onClick: (K) => P(r, K),
              onKeydown: (K) => M(r, K, O)
            }, [
              l("span", {
                class: s(`${e.baseCssClass}__title`)
              }, w(e.cqItems[r]["cq:panelTitle"]), 3),
              l("span", {
                class: s(`${e.baseCssClass}__icon`)
              }, qe, 2)
            ], 42, Ie)
          ]),
          _: 2
        }, 1032, ["class"])),
        f(C) || I(r) ? (a(), u("div", {
          key: 0,
          id: `accordion-${e.cqItems[r].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[r].id}-button`,
          class: s(`${e.baseCssClass}__panel ${I(r) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (a(), g(B(H.value[t.cqItemsOrder.indexOf(r)]), { key: 0 })) : q("", !0)
        ], 10, $e)) : q("", !0)
      ], 10, ge))), 128)) : q("", !0),
      f(C) ? (a(), g(f(te), F(x({ key: 1 }, Y.value)), null, 16)) : q("", !0)
    ], 16, fe));
  }
}), Ee = ["id", "aria-label"], Oe = ["aria-label"], Pe = ["aria-label"], xe = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), ke = [
  xe
], Se = ["aria-label"], Ae = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), Me = [
  Ae
], Ne = ["aria-label"], Le = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), De = [
  Le
], Be = ["aria-label"], Re = /* @__PURE__ */ l("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ l("path", { d: "M8 5v14l11-7z" })
], -1), Fe = [
  Re
], Ge = ["aria-label"], je = ["aria-label", "onClick"], nt = /* @__PURE__ */ j({
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
    const e = t, o = ee(), C = typeof e.isInEditor < "u" ? e.isInEditor : k("isInEditor", W.isInEditor()), $ = k("componentMapping", new J()), p = E(-1), b = E(-1), h = E(0), m = E(null), c = E((o == null ? void 0 : o.autoplay) === !0 && !C);
    (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })() && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (m.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const A = (_, v = e.cqPath) => {
      _.data && _.data.id === v && _.data.operation === "navigate" && (b.value = _.data.index);
    }, T = y(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        $
      )
    ), H = y(
      () => Q(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        C,
        e.aemNoDecoration
      )
    ), U = y(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), i = (_) => {
      var R;
      let v = ((R = e.accessibility) == null ? void 0 : R.indicator) || "";
      const z = "{0}";
      return v = v.replace(z, (_ + 1).toString()), v;
    }, P = (_) => {
      var N;
      let v = ((N = e.accessibility) == null ? void 0 : N.slide) || "";
      const z = "{0}";
      v = v.replace(z, (_ + 1).toString());
      const R = "{1}";
      return v = v.replace(
        R,
        e.cqItemsOrder.length.toString()
      ), v;
    }, M = () => {
      h.value === e.cqItemsOrder.length - 1 ? h.value = 0 : h.value += 1;
    }, I = () => {
      h.value === 0 ? h.value = e.cqItemsOrder.length - 1 : h.value -= 1;
    }, Y = () => {
      !c.value || e.cqItemsOrder.length <= 1 || M();
    }, n = () => {
      p.value = setInterval(() => {
        Y();
      }, e.delay);
    }, d = () => {
      clearInterval(p.value);
    }, r = (_) => {
      c.value = _;
    }, O = (_) => {
      h.value !== _ && (h.value = _);
    }, K = () => {
      !e.autopauseDisabled && c.value && d();
    }, ie = () => {
      !e.autopauseDisabled && c.value && n();
    }, re = y(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    );
    return X(b, async (_, v) => {
      _ !== -1 && typeof _ < "u" && _ !== v && (h.value = _, c.value = !1);
    }), se(() => {
      n(), m.value && m.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        A
      );
    }), ae(() => {
      typeof p.value == "number" && p.value >= 0 && d(), m.value && m.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        A
      );
    }), (_, v) => {
      var z, R;
      return a(), u("div", {
        id: e.id,
        "aria-label": e.accessibilityLabel,
        class: s(H.value),
        "aria-roledescription": "carousel",
        "data-panelcontainer": "carousel",
        role: "group"
      }, [
        re.value ? q("", !0) : (a(), u("div", {
          key: 0,
          class: s(`${e.baseCssClass}__content`),
          onMouseenter: K,
          onMouseleave: ie
        }, [
          l("div", {
            class: s([{ [`${e.baseCssClass}__items`]: !f(C) }])
          }, [
            (a(!0), u(D, null, G(T.value, (N, L) => (a(), u("div", {
              key: `item-${L}`,
              "aria-label": P(L),
              class: s([
                `${e.baseCssClass}__item`,
                {
                  [`${e.baseCssClass}__item--active`]: L === h.value
                }
              ]),
              "data-cmp-hook-carousel": "item",
              role: "tabpanel"
            }, [
              (a(), g(B(N)))
            ], 10, Oe))), 128))
          ], 2),
          l("div", {
            class: s(`${e.baseCssClass}__actions`)
          }, [
            l("button", {
              "aria-label": e.accessibility.previous,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--previous`),
              type: "button",
              onClick: I
            }, [
              l("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, ke, 2),
              l("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, w(e.accessibility.previous), 3)
            ], 10, Pe),
            l("button", {
              "aria-label": e.accessibility.next,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: M
            }, [
              l("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Me, 2),
              l("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, w(e.accessibility.next), 3)
            ], 10, Se),
            ((z = f(o)) == null ? void 0 : z.autoplay) === !0 ? (a(), u(D, { key: 0 }, [
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
                onClick: v[0] || (v[0] = (N) => r(!1))
              }, [
                l("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, De, 2),
                l("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, w(e.accessibility.pause), 3)
              ], 10, Ne),
              l("button", {
                "aria-label": e.accessibility.play,
                class: s([
                  `${e.baseCssClass}__action`,
                  `${e.baseCssClass}__action--play`,
                  { [`${e.baseCssClass}__action--disabled`]: c.value }
                ]),
                type: "button",
                onClick: v[1] || (v[1] = (N) => r(!0))
              }, [
                l("span", {
                  class: s(`${e.baseCssClass}__action-icon`)
                }, Fe, 2),
                l("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, w(e.accessibility.play), 3)
              ], 10, Be)
            ], 64)) : q("", !0)
          ], 2),
          l("ol", {
            "aria-label": (R = e.accessibility) == null ? void 0 : R.indicators,
            class: s(`${e.baseCssClass}__indicators`),
            role: "tablist"
          }, [
            (a(!0), u(D, null, G(e.cqItemsOrder, (N, L) => (a(), u("li", {
              key: `item-${L}`,
              "aria-label": i(L),
              class: s([
                `${e.baseCssClass}__indicator`,
                {
                  [`${e.baseCssClass}__indicator--active`]: L === h.value
                }
              ]),
              role: "tab",
              onClick: (He) => O(L)
            }, w(e.cqItems[N]["cq:panelTitle"]), 11, je))), 128))
          ], 10, Ge)
        ], 34)),
        f(C) ? (a(), g(f(te), F(x({ key: 1 }, U.value)), null, 16)) : q("", !0)
      ], 10, Ee);
    };
  }
}), lt = /* @__PURE__ */ j({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, o) => (a(), g(_e, { "is-in-editor": !1 }));
  }
}), Te = ["id"], ze = ["aria-label"], Ve = ["tabIndex", "onClick"], ot = /* @__PURE__ */ j({
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
    ...V("cmp-tabs")
  },
  setup(t) {
    const e = t, o = typeof e.isInEditor < "u" ? e.isInEditor : k("isInEditor", W.isInEditor()), C = k("componentMapping", new J()), $ = E(-1), p = E(0), b = E(null);
    (() => {
      try {
        return typeof window < "u";
      } catch {
        return !1;
      }
    })() && window.Granite && // @ts-ignore
    window.Granite.author && // @ts-ignore
    window.Granite.author.MessageChannel && (b.value = new window.Granite.author.MessageChannel(
      "cqauthor",
      window
    ));
    const m = (i, P = e.cqPath) => {
      i.data && i.data.id === P && i.data.operation === "navigate" && ($.value = i.data.index);
    }, c = y(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        C
      )
    ), S = y(
      () => Q(
        e.baseCssClass,
        e.appliedCssClassNames,
        e.cssClassNames,
        e.containerProps,
        o,
        e.aemNoDecoration
      )
    ), A = y(
      () => !e.cqItemsOrder || (e == null ? void 0 : e.cqItemsOrder.length) === 0
    ), T = y(() => {
      const i = {
        class: "aem-container",
        "data-cmp-is": "tabs",
        "data-panelcontainer": "tabs"
      };
      return o && (i["data-cq-data-path"] = e.cqPath), i;
    }), H = y(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    })), U = (i) => {
      p.value !== i && (p.value = i);
    };
    return X($, async (i, P) => {
      i !== -1 && typeof i < "u" && i !== P && (p.value = i);
    }), se(() => {
      b.value && b.value.subscribeRequestMessage(
        "cmp.panelcontainer",
        m
      );
    }), ae(() => {
      b.value && b.value.unsubscribeRequestMessage(
        "cmp.panelcontainer",
        m
      );
    }), (i, P) => (a(), u("div", x({
      id: e.id,
      class: S.value
    }, T.value), [
      A.value ? q("", !0) : (a(), u("ol", {
        key: 0,
        "aria-label": e.accessibilityLabel,
        class: s(`${e.baseCssClass}__tablist`),
        "aria-multiselectable": "false",
        role: "tablist"
      }, [
        (a(!0), u(D, null, G(e.cqItemsOrder, (M, I) => (a(), u("li", {
          key: `tab-${I}`,
          class: s([
            `${e.baseCssClass}__tab`,
            {
              [`${e.baseCssClass}__tab--active`]: I === p.value
            }
          ]),
          tabIndex: I === p.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (Y) => U(I)
        }, w(e.cqItems[M]["cq:panelTitle"]), 11, Ve))), 128))
      ], 10, ze)),
      !A.value && f(o) ? (a(!0), u(D, { key: 1 }, G(c.value, (M, I) => (a(), u("div", {
        key: `tab-content-${I}`,
        class: s(`${e.baseCssClass}__author-tab-content`),
        style: ne({ display: p.value === I ? "block" : "none" })
      }, [
        (a(), g(B(M)))
      ], 6))), 128)) : A.value ? q("", !0) : (a(), g(B(c.value[p.value]), { key: 2 })),
      f(o) ? (a(), g(f(te), F(x({ key: 3 }, H.value)), null, 16)) : q("", !0)
    ], 16, Te));
  }
});
export {
  Je as AccordionEditConfig,
  Qe as CarouselEditConfig,
  We as ContainerEditConfig,
  Ye as ContentFragmentEditConfig,
  at as CoreAccordion,
  nt as CoreCarousel,
  _e as CoreContainer,
  st as CoreContentFragment,
  lt as CoreExperienceFragment,
  ot as CoreTabs,
  he as DefaultContentFragment,
  Ze as ExperienceFragmentEditConfig,
  tt as MapToContentFragmentModel,
  et as TabsEditConfig,
  be as getRenderer,
  Ce as mapRenderer
};
