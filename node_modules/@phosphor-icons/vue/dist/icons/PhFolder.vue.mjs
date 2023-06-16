import { defineComponent as p, inject as n, computed as i, openBlock as t, createElementBlock as e, mergeProps as g, renderSlot as V, createCommentVNode as m, createElementVNode as o } from "vue";
const M = ["width", "height", "fill", "transform"], Z = { key: 0 }, v = /* @__PURE__ */ o("path", { d: "M216,68H133.39l-26-29.29a20,20,0,0,0-15-6.71H40A20,20,0,0,0,20,52V200.62A19.41,19.41,0,0,0,39.38,220H216.89A19.13,19.13,0,0,0,236,200.89V88A20,20,0,0,0,216,68ZM44,56H90.61l10.67,12H44ZM212,196H44V92H212Z" }, null, -1), y = [
  v
], f = { key: 1 }, w = /* @__PURE__ */ o("path", {
  d: "M128,80H32V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34Z",
  opacity: "0.2"
}, null, -1), k = /* @__PURE__ */ o("path", { d: "M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56ZM216,200H40V88H216Z" }, null, -1), x = [
  w,
  k
], L = { key: 2 }, S = /* @__PURE__ */ o("path", { d: "M216,72H131.31L104,44.69A15.88,15.88,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.41,15.41,0,0,0,39.39,216h177.5A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40Z" }, null, -1), z = [
  S
], C = { key: 3 }, B = /* @__PURE__ */ o("path", { d: "M216,74H130.49l-27.9-27.9a13.94,13.94,0,0,0-9.9-4.1H40A14,14,0,0,0,26,56V200.62A13.39,13.39,0,0,0,39.38,214H216.89A13.12,13.12,0,0,0,230,200.89V88A14,14,0,0,0,216,74ZM40,54H92.69a2,2,0,0,1,1.41.59L113.51,74H38V56A2,2,0,0,1,40,54ZM218,200.89a1.11,1.11,0,0,1-1.11,1.11H39.38A1.4,1.4,0,0,1,38,200.62V86H216a2,2,0,0,1,2,2Z" }, null, -1), N = [
  B
], b = { key: 4 }, E = /* @__PURE__ */ o("path", { d: "M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z" }, null, -1), P = [
  E
], W = { key: 5 }, $ = /* @__PURE__ */ o("path", { d: "M216,76H129.66L101.17,47.52A11.9,11.9,0,0,0,92.69,44H40A12,12,0,0,0,28,56V200.62A11.4,11.4,0,0,0,39.38,212H216.89A11.12,11.12,0,0,0,228,200.89V88A12,12,0,0,0,216,76ZM36,56a4,4,0,0,1,4-4H92.69a4,4,0,0,1,2.82,1.17L118.34,76H36ZM220,200.89a3.12,3.12,0,0,1-3.11,3.11H39.38A3.39,3.39,0,0,1,36,200.62V84H216a4,4,0,0,1,4,4Z" }, null, -1), j = [
  $
], F = {
  name: "PhFolder"
}, G = /* @__PURE__ */ p({
  ...F,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(a) {
    const l = a, c = n("weight", "regular"), _ = n("size", "1em"), h = n("color", "currentColor"), H = n("mirrored", !1), s = i(() => l.weight ?? c), r = i(() => l.size ?? _), A = i(() => l.color ?? h), u = i(() => l.mirrored !== void 0 ? l.mirrored ? "scale(-1, 1)" : void 0 : H ? "scale(-1, 1)" : void 0);
    return (d, q) => (t(), e("svg", g({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: r.value,
      height: r.value,
      fill: A.value,
      transform: u.value
    }, d.$attrs), [
      V(d.$slots, "default"),
      s.value === "bold" ? (t(), e("g", Z, y)) : s.value === "duotone" ? (t(), e("g", f, x)) : s.value === "fill" ? (t(), e("g", L, z)) : s.value === "light" ? (t(), e("g", C, N)) : s.value === "regular" ? (t(), e("g", b, P)) : s.value === "thin" ? (t(), e("g", W, j)) : m("", !0)
    ], 16, M));
  }
});
export {
  G as default
};
