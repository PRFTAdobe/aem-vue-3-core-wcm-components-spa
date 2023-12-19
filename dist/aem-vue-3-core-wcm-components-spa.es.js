import { MapTo as re, ComponentMapping as Q, componentProperties as U, componentClassNames as W, AllowedComponentsContainer as de, ResponsiveGrid as ue, Container as pe, Utils as Z, ContainerPlaceholder as te } from "aem-vue-3-editable-components";
import { defineComponent as z, useAttrs as ee, inject as M, computed as C, openBlock as a, createBlock as v, unref as b, normalizeProps as N, mergeProps as S, resolveDynamicComponent as D, normalizeClass as s, normalizeStyle as le, withCtx as oe, createElementBlock as u, createElementVNode as n, toDisplayString as I, createCommentVNode as q, Fragment as R, renderList as T, ref as E, watch as J, onMounted as se, onUnmounted as ae, nextTick as me, guardReactiveProps as Ce } from "vue";
import { AuthoringUtils as Y } from "@adobe/aem-spa-page-model-manager";
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
}, be = "ContentFragment-", ie = (t) => be + t, _e = (t, e) => {
  t && e && (typeof t == "string" ? [t] : t).forEach((p) => {
    re(ie(p))(e);
  });
}, ye = (t) => {
  const e = ie(t);
  return Q.get(e);
}, at = (t) => (e) => _e(t, e), ve = /* @__PURE__ */ z({
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
    const e = t, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), $ = C(
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
        var h;
        return p && (l == null ? void 0 : l.allowedComponents) && ((h = l == null ? void 0 : l.allowedComponents) == null ? void 0 : h.applicable);
      }
    );
    return (h, i) => d.value ? (a(), v(b(de), N(S({ key: 0 }, { ...e, ...b(l) })), null, 16)) : (a(), v(D(e.styleSystemElement || "div"), {
      key: 1,
      id: e.id,
      "aria-label": e.accessibilityLabel,
      class: s($.value),
      role: e.roleAttribute,
      style: le(e.backgroundStyle)
    }, {
      default: oe(() => [
        t.layout === "RESPONSIVE_GRID" ? (a(), v(b(ue), N(S({ key: 0 }, {
          ...e,
          ...b(l),
          allowedComponents: { applicable: !1, components: [] },
          title: ""
        })), null, 16)) : (a(), v(b(pe), N(S({ key: 1 }, { ...e, ...b(l) })), null, 16))
      ]),
      _: 1
    }, 8, ["id", "aria-label", "class", "role", "style"]));
  }
}), he = ["id"], fe = ["innerHTML"], ge = /* @__PURE__ */ z({
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
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), p = M("componentMapping", new Q()), $ = C(
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
    return (h, i) => {
      var O;
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
        (O = e.elementsOrder) != null && O.length ? (a(), u("div", {
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
            }, null, 10, fe),
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
        (a(!0), u(R, null, T(d.value, (c) => (a(), v(D(c), {
          key: c.toString()
        }))), 128))
      ], 10, he);
    };
  }
}), nt = /* @__PURE__ */ z({
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
    ), $ = C(() => {
      const d = ye(e.model);
      return d || ge;
    });
    return (d, h) => p.value ? q("", !0) : (a(), v(D($.value), N(S({ key: 0 }, { ...e, ...b(l) })), null, 16));
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
}, Ie = ["id", "data-cmp-single-expansion"], qe = ["id", "data-cmp-expanded"], $e = ["id", "aria-controls", "data-cmp-button-id", "onClick", "onKeydown"], Ee = /* @__PURE__ */ n("svg", {
  fill: "var(--accordion-heading-color)",
  height: "18",
  viewBox: "0 0 24 24",
  width: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" })
], -1), we = [
  Ee
], Oe = ["id", "aria-labelledby"], lt = /* @__PURE__ */ z({
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
    const e = t, l = ee(), p = M("isInEditor", Y.isInEditor()), $ = M("componentMapping", new Q()), d = E(w.initMessageChannel()), h = E(-1), i = E(e.expandedItems), O = E(null), c = C(() => (l == null ? void 0 : l.singleExpansion) === !0), F = C(() => {
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
        $
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
          m.preventDefault(), _(o, m), k(r);
          break;
      }
    }, g = (o) => i.value.indexOf(o) > -1, P = C(() => ({
      cqPath: e.cqPath,
      placeholderClassNames: ["new", "section"].join(" ")
    }));
    J(c, async (o, m) => {
      o !== m && (i.value = e.expandedItems);
    }), J(e.expandedItems, async (o, m) => {
      o !== m && (i.value = o);
    }), J(h, async (o, m) => {
      o !== -1 && typeof o < "u" && o !== m && e.cqItemsOrder && (i.value = [e.cqItemsOrder[o]]);
    });
    const G = w.createCallbackListener(
      e.cqPath,
      h
    );
    return se(() => {
      w.subscribeRequestMessage(d.value, G);
    }), ae(() => {
      w.unsubscribeRequestMessage(d.value, G);
    }), (o, m) => (a(), u("div", S({
      id: e.id,
      ref_key: "accordion",
      ref: O,
      class: K.value,
      "data-cmp-single-expansion": c.value === !0 ? !0 : void 0
    }, F.value), [
      e.cqItemsOrder && (e == null ? void 0 : e.cqItemsOrder.length) > 0 && e.cqItems ? (a(!0), u(R, { key: 0 }, T(e.cqItemsOrder, (r, x) => (a(), u("div", {
        id: `accordion-${e.cqItems[r].id}`,
        key: `accordion-index-${x}`,
        class: s(`${e.baseCssClass}__item`),
        "data-cmp-expanded": g(r) ? !0 : void 0
      }, [
        (a(), v(D(e.headingElement), {
          class: s(`${e.baseCssClass}__heading`)
        }, {
          default: oe(() => [
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
              onClick: (X) => _(r, X),
              onKeydown: (X) => B(r, X, x)
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__title`)
              }, I(e.cqItems[r]["cq:panelTitle"]), 3),
              n("span", {
                class: s(`${e.baseCssClass}__icon`)
              }, we, 2)
            ], 42, $e)
          ]),
          _: 2
        }, 1032, ["class"])),
        b(p) || g(r) ? (a(), u("div", {
          key: 0,
          id: `accordion-${e.cqItems[r].id}-panel`,
          "aria-labelledby": `accordion-${e.cqItems[r].id}-button`,
          class: s(`${e.baseCssClass}__panel ${g(r) ? " " + e.baseCssClass + "__panel--expanded" : " " + e.baseCssClass + "__panel--hidden"}`),
          role: "region"
        }, [
          e.cqItemsOrder ? (a(), v(D(H.value[t.cqItemsOrder.indexOf(r)]), { key: 0 })) : q("", !0)
        ], 10, Oe)) : q("", !0)
      ], 10, qe))), 128)) : q("", !0),
      b(p) ? (a(), v(b(te), N(S({ key: 1 }, P.value)), null, 16)) : q("", !0)
    ], 16, Ie));
  }
}), Pe = ["id", "aria-label"], ke = ["aria-label"], xe = ["aria-label"], Se = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
], -1), Me = [
  Se
], Ae = ["aria-label"], Le = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
], -1), Ne = [
  Le
], Re = ["aria-label"], De = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
], -1), Fe = [
  De
], Be = ["aria-label"], je = /* @__PURE__ */ n("svg", {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ n("path", { d: "M8 5v14l11-7z" })
], -1), Te = [
  je
], ze = ["aria-label"], Ge = ["aria-label", "onClick"], ot = /* @__PURE__ */ z({
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
    const e = t, l = ee(), p = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), $ = M("componentMapping", new Q()), d = E(-1), h = E(-1), i = E(0), O = E(w.initMessageChannel()), c = E((l == null ? void 0 : l.autoplay) === !0 && !p), F = C(
      () => Z.getChildComponents(
        e.cqPath,
        e.cqItems,
        e.cqItemsOrder,
        !0,
        () => ({}),
        !1,
        $
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
    }, _ = (f) => {
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
      !c.value || e.cqItemsOrder.length <= 1 || B();
    }, G = () => {
      d.value = setInterval(() => {
        P();
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
    J(h, async (f, y) => {
      f !== -1 && typeof f < "u" && f !== y && (i.value = f, c.value = !1);
    });
    const ne = w.createCallbackListener(
      e.cqPath,
      h
    );
    return se(() => {
      G(), w.subscribeRequestMessage(O.value, ne);
    }), ae(() => {
      typeof d.value == "number" && d.value >= 0 && o(), w.unsubscribeRequestMessage(O.value, ne);
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
              (a(), v(D(A)))
            ], 10, ke))), 128))
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
              }, Me, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.previous), 3)
            ], 10, xe),
            n("button", {
              "aria-label": e.accessibility.next,
              class: s(`${e.baseCssClass}__action ${e.baseCssClass}__action--next`),
              type: "button",
              onClick: B
            }, [
              n("span", {
                class: s(`${e.baseCssClass}__action-icon`)
              }, Ne, 2),
              n("span", {
                class: s(`${e.baseCssClass}__action-text`)
              }, I(e.accessibility.next), 3)
            ], 10, Ae),
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
                }, Fe, 2),
                n("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, I(e.accessibility.pause), 3)
              ], 10, Re),
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
                }, Te, 2),
                n("span", {
                  class: s(`${e.baseCssClass}__action-text`)
                }, I(e.accessibility.play), 3)
              ], 10, Be)
            ], 64)) : q("", !0)
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
              onClick: (Ke) => r(L)
            }, I(e.cqItems[A]["cq:panelTitle"]), 11, Ge))), 128))
          ], 10, ze)
        ], 34)),
        b(p) ? (a(), v(b(te), N(S({ key: 1 }, K.value)), null, 16)) : q("", !0)
      ], 10, Pe);
    };
  }
}), it = /* @__PURE__ */ z({
  __name: "CoreExperienceFragment",
  setup(t) {
    return (e, l) => (a(), v(ve, { "is-in-editor": !1 }));
  }
}), Ve = ["id"], Ue = ["aria-label"], He = ["tabIndex", "onClick"], ct = /* @__PURE__ */ z({
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
    const e = t, l = typeof e.isInEditor < "u" ? e.isInEditor : M("isInEditor", Y.isInEditor()), p = M("componentMapping", new Q()), $ = E(-1), d = E(0), h = E(w.initMessageChannel()), i = C(
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
    J($, async (_, B) => {
      if (_ !== -1 && typeof _ < "u" && _ !== B) {
        d.value = _, await me();
        const g = parent.document.getElementById("ContentFrame");
        g && g.dispatchEvent(new Event("load"));
      }
    });
    const k = w.createCallbackListener(
      e.cqPath,
      $
    );
    return se(() => {
      w.subscribeRequestMessage(h.value, k);
    }), ae(() => {
      w.unsubscribeRequestMessage(h.value, k);
    }), (_, B) => (a(), u("div", S({
      id: e.id,
      class: O.value
    }, F.value), [
      c.value ? q("", !0) : (a(), u("ol", {
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
              [`${e.baseCssClass}__tab--active`]: P === d.value
            }
          ]),
          tabIndex: P === d.value ? 0 : -1,
          "data-cmp-hook-tabs": "tab",
          role: "tab",
          onClick: (G) => K(P)
        }, I(e.cqItems[g]["cq:panelTitle"]), 11, He))), 128))
      ], 10, Ue)),
      !c.value && b(l) ? (a(!0), u(R, { key: 1 }, T(i.value, (g, P) => (a(), u("div", {
        key: `tab-content-${P}`,
        class: s(`${e.baseCssClass}__author-tab-content`),
        style: le({ display: d.value === P ? "block" : "none" })
      }, [
        (a(), v(D(g), N(Ce({ isInEditor: !1 })), null, 16))
      ], 6))), 128)) : c.value ? q("", !0) : (a(), v(D(i.value[d.value]), { key: 2 })),
      b(l) ? (a(), v(b(te), N(S({ key: 3 }, H.value)), null, 16)) : q("", !0)
    ], 16, Ve));
  }
});
export {
  We as AccordionEditConfig,
  Ye as CarouselEditConfig,
  Ze as ContainerEditConfig,
  et as ContentFragmentEditConfig,
  lt as CoreAccordion,
  ot as CoreCarousel,
  ve as CoreContainer,
  nt as CoreContentFragment,
  it as CoreExperienceFragment,
  ct as CoreTabs,
  ge as DefaultContentFragment,
  tt as ExperienceFragmentEditConfig,
  at as MapToContentFragmentModel,
  w as SpaUtils,
  st as TabsEditConfig,
  ye as getRenderer,
  _e as mapRenderer
};
