(function (sttc) {
  /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  "use strict";
  var aa = {},
    n = this || self;
  function ba(a) {
    a = a.split(".");
    for (var b = n, c = 0; c < a.length; c++)
      if (((b = b[a[c]]), null == b)) return null;
    return b;
  }
  function ca(a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  }
  function da(a) {
    var b = ca(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }
  function ea(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function fa(a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, ha) && a[ha]) || (a[ha] = ++ia)
    );
  }
  var ha = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    ia = 0;
  function ja(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ka(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function la(a, b, c) {
    la =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? ja
        : ka;
    return la.apply(null, arguments);
  }
  function ma(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function na(a, b) {
    a = a.split(".");
    var c = n;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  function oa(a) {
    return a;
  }
  let pa = new Date().getTime();
  function qa(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  function ra(a, b) {
    let c = 0;
    a = qa(String(a)).split(".");
    b = qa(String(b)).split(".");
    const d = Math.max(a.length, b.length);
    for (let g = 0; 0 == c && g < d; g++) {
      var e = a[g] || "",
        f = b[g] || "";
      do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        if (0 == e[0].length && 0 == f[0].length) break;
        c =
          sa(
            0 == e[1].length ? 0 : parseInt(e[1], 10),
            0 == f[1].length ? 0 : parseInt(f[1], 10)
          ) ||
          sa(0 == e[2].length, 0 == f[2].length) ||
          sa(e[2], f[2]);
        e = e[3];
        f = f[3];
      } while (0 == c);
    }
    return c;
  }
  function sa(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var ua,
    va = ba("CLOSURE_FLAGS"),
    wa = va && va[610401301];
  ua = null != wa ? wa : !1;
  function xa() {
    var a = n.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var ya;
  const za = n.navigator;
  ya = za ? za.userAgentData || null : null;
  function Aa(a) {
    return ua
      ? ya
        ? ya.brands.some(({ brand: b }) => b && -1 != b.indexOf(a))
        : !1
      : !1;
  }
  function p(a) {
    return -1 != xa().indexOf(a);
  }
  function Da() {
    return ua ? !!ya && 0 < ya.brands.length : !1;
  }
  function Ea() {
    return Da() ? !1 : p("Trident") || p("MSIE");
  }
  function Fa() {
    return Da() ? Aa("Microsoft Edge") : p("Edg/");
  }
  function Ga() {
    !p("Safari") ||
      Ha() ||
      (Da() ? 0 : p("Coast")) ||
      (Da() ? 0 : p("Opera")) ||
      (Da() ? 0 : p("Edge")) ||
      Fa() ||
      (Da() && Aa("Opera"));
  }
  function Ha() {
    return Da()
      ? Aa("Chromium")
      : ((p("Chrome") || p("CriOS")) && !(Da() ? 0 : p("Edge"))) || p("Silk");
  }
  function Ia(a) {
    const b = {};
    a.forEach((c) => {
      b[c[0]] = c[1];
    });
    return (c) => b[c.find((d) => d in b)] || "";
  }
  function Ka() {
    var a = xa();
    if (Ea()) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) a = b[1];
      else {
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
          if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
            if (a && a[1])
              switch (a[1]) {
                case "4.0":
                  b = "8.0";
                  break;
                case "5.0":
                  b = "9.0";
                  break;
                case "6.0":
                  b = "10.0";
                  break;
                case "7.0":
                  b = "11.0";
              }
            else b = "7.0";
          else b = c[1];
        a = b;
      }
      return a;
    }
    c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
    b = [];
    let d;
    for (; (d = c.exec(a)); ) b.push([d[1], d[2], d[3] || void 0]);
    a = Ia(b);
    return (Da() ? 0 : p("Opera"))
      ? a(["Version", "Opera"])
      : (Da() ? 0 : p("Edge"))
      ? a(["Edge"])
      : Fa()
      ? a(["Edg"])
      : p("Silk")
      ? a(["Silk"])
      : Ha()
      ? a(["Chrome", "CriOS", "HeadlessChrome"])
      : ((a = b[2]) && a[1]) || "";
  }
  function La(a, b) {
    if ("string" === typeof a)
      return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (let c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function Ma(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }
  function Na(a, b) {
    const c = a.length,
      d = [];
    let e = 0;
    const f = "string" === typeof a ? a.split("") : a;
    for (let g = 0; g < c; g++)
      if (g in f) {
        const h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
    return d;
  }
  function Oa(a, b) {
    const c = a.length,
      d = Array(c),
      e = "string" === typeof a ? a.split("") : a;
    for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }
  function Pa(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function Qa(a, b) {
    a: {
      const c = a.length,
        d = "string" === typeof a ? a.split("") : a;
      for (let e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Ra(a, b) {
    a: {
      var c = a.length;
      const d = "string" === typeof a ? a.split("") : a;
      for (--c; 0 <= c; c--)
        if (c in d && b.call(void 0, d[c], c, a)) {
          b = c;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Sa(a, b) {
    return 0 <= La(a, b);
  }
  function Ta(a) {
    const b = a.length;
    if (0 < b) {
      const c = Array(b);
      for (let d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function Ua(a) {
    Ua[" "](a);
    return a;
  }
  Ua[" "] = function () {};
  var Va = Ea();
  !p("Android") || Ha();
  Ha();
  Ga();
  var Xa = null;
  function Ya(a) {
    var b = [];
    Za(a, function (c) {
      b.push(c);
    });
    return b;
  }
  function Za(a, b) {
    function c(k) {
      for (; d < a.length; ) {
        var m = a.charAt(d++),
          l = Xa[m];
        if (null != l) return l;
        if (!/^[\s\xa0]*$/.test(m))
          throw Error("Unknown base64 encoding at char: " + m);
      }
      return k;
    }
    $a();
    for (var d = 0; ; ) {
      var e = c(-1),
        f = c(0),
        g = c(64),
        h = c(64);
      if (64 === h && -1 === e) break;
      b((e << 2) | (f >> 4));
      64 != g &&
        (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
    }
  }
  function $a() {
    if (!Xa) {
      Xa = {};
      for (
        var a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
          b = ["+/=", "+/", "-_=", "-_.", "-_"],
          c = 0;
        5 > c;
        c++
      )
        for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
          var f = d[e];
          void 0 === Xa[f] && (Xa[f] = e);
        }
    }
  }
  function ab(a) {
    return Array.prototype.slice.call(a);
  }
  const r = Symbol();
  function bb(a) {
    const b = a[r] | 0;
    1 !== (b & 1) && (Object.isFrozen(a) && (a = ab(a)), (a[r] = b | 1));
  }
  function cb(a, b) {
    Object.isFrozen(a) && (a = ab(a));
    a[r] = b;
    return a;
  }
  function db(a) {
    a[r] |= 1;
    return a;
  }
  function eb(a) {
    a[r] |= 16;
    return a;
  }
  function fb(a, b) {
    b[r] = (a | 0) & -51;
  }
  function gb(a, b) {
    b[r] = (a | 18) & -41;
  }
  function hb(a) {
    a = (a >> 10) & 1023;
    return 0 === a ? 536870912 : a;
  }
  var ib = {};
  function jb(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  let kb;
  var lb;
  const mb = [];
  mb[r] = 23;
  lb = Object.freeze(mb);
  function nb(a) {
    if (a & 2) throw Error();
  }
  function ob(a) {
    if ("boolean" !== typeof a)
      throw Error(`Expected boolean but got ${ca(a)}: ${a}`);
    return !!a;
  }
  function pb(a) {
    if (null == a) return a;
    switch (typeof a) {
      case "string":
        return +a;
      case "number":
        return a;
    }
  }
  function t(a) {
    return null == a ? a : a;
  }
  function qb(a) {
    return null == a ? a : a;
  }
  function rb(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a;
  }
  function sb(a) {
    return null == a || "string" === typeof a ? a : void 0;
  }
  function tb(a, b, c, d) {
    var e = !1;
    if (
      null != a &&
      "object" === typeof a &&
      !(e = Array.isArray(a)) &&
      a.ka === ib
    )
      return a;
    if (!e)
      return (
        c
          ? d & 2
            ? (a = b[ub])
              ? (b = a)
              : ((a = new b()), (d = a.s), (d[r] |= 18), (b = b[ub] = a))
            : (b = new b())
          : (b = void 0),
        b
      );
    e = c = a[r] | 0;
    0 === e && (e |= d & 16);
    e |= d & 2;
    e !== c && (a[r] = e);
    return new b(a);
  }
  const ub = Symbol();
  function vb(a, b) {
    a = a.s;
    return wb(a, a[r], b);
  }
  function wb(a, b, c, d) {
    if (-1 === c) return null;
    if (c >= hb(b)) {
      if (b & 128) return a[a.length - 1][c];
    } else {
      var e = a.length;
      if (d && b & 128 && ((d = a[e - 1][c]), null != d)) return d;
      b = c + (((b >> 8) & 1) - 1);
      if (b < e) return a[b];
    }
  }
  function u(a, b, c) {
    const d = a.s,
      e = d[r];
    nb(e);
    y(d, e, b, c);
    return a;
  }
  function y(a, b, c, d, e) {
    var f = hb(b);
    if (c >= f || e) {
      e = b;
      if (b & 128) f = a[a.length - 1];
      else {
        if (null == d) return;
        f = a[f + (((b >> 8) & 1) - 1)] = {};
        e |= 128;
      }
      f[c] = d;
      e &= -513;
      e !== b && (a[r] = e);
    } else
      (a[c + (((b >> 8) & 1) - 1)] = d),
        b & 128 && ((d = a[a.length - 1]), c in d && delete d[c]),
        b & 512 && (a[r] = b & -513);
  }
  function xb(a, b, c) {
    var d = b & 2;
    a = wb(a, b, c);
    Array.isArray(a) || (a = lb);
    b = a[r] | 0;
    b & 1 || db(a);
    d ? b & 2 || (a[r] |= 18) : b & 16 && !(b & 2) && ((d = a), (d[r] &= -17));
    return a;
  }
  function yb(a, b) {
    a = vb(a, b);
    return null == a
      ? a
      : "boolean" === typeof a || "number" === typeof a
      ? !!a
      : void 0;
  }
  function zb(a, b, c) {
    a = a.s;
    const d = a[r],
      e = d & 2;
    let f = xb(a, d, b),
      g = f[r] | 0;
    if (!(g & 4)) {
      Object.isFrozen(f) && ((f = db(ab(f))), y(a, d, b, f));
      let h = 0,
        k = 0;
      for (; h < f.length; h++) {
        const m = c(f[h]);
        null != m && (f[k++] = m);
      }
      k < h && (f.length = k);
      g |= 5;
      e && (g |= 18);
      f[r] = g;
      g & 2 && Object.freeze(f);
    }
    !e &&
      (g & 2 || Object.isFrozen(f)) &&
      ((c = f = ab(f)), (c[r] |= 5), y(a, d, b, f));
    return f;
  }
  function Ab(a, b, c) {
    {
      const e = a.s,
        f = e[r];
      nb(f);
      if (null == c) y(e, f, b);
      else {
        var d = c[r] | 0;
        if (!(d & 4)) {
          if (d & 2 || Object.isFrozen(c)) c = ab(c);
          for (let g = 0; g < c.length; g++) c[g] = c[g];
          c[r] = d | 5;
        }
        y(e, f, b, c);
      }
    }
    return a;
  }
  function A(a, b, c, d) {
    const e = a.s,
      f = e[r];
    nb(f);
    y(e, f, b, c !== d ? c : void 0);
    return a;
  }
  function Bb(a, b) {
    var c = performance.now();
    if (null != c && "number" !== typeof c)
      throw Error(
        `Value of float/double field must be a number|null|undefined, found ${typeof c}: ${c}`
      );
    A(a, b, c, 0);
  }
  function Cb(a, b, c, d) {
    const e = a.s,
      f = e[r];
    nb(f);
    (c = Db(e, f, c)) && c !== b && null != d && y(e, f, c);
    y(e, f, b, d);
    return a;
  }
  function Eb(a, b, c) {
    a = a.s;
    return Db(a, a[r], b) === c ? c : -1;
  }
  function Fb(a, b) {
    a = a.s;
    return Db(a, a[r], b);
  }
  function Db(a, b, c) {
    let d = 0;
    for (let e = 0; e < c.length; e++) {
      const f = c[e];
      null != wb(a, b, f) && (0 !== d && y(a, b, d), (d = f));
    }
    return d;
  }
  function Gb(a) {
    var b = Hb;
    a = a.s;
    const c = a[r];
    nb(c);
    const d = wb(a, c, 3);
    b = Ib(tb(d, b, !0, c));
    d !== b && y(a, c, 3, b);
    return b;
  }
  function Jb(a, b, c, d) {
    a = a.s;
    const e = a[r],
      f = wb(a, e, c, d);
    b = tb(f, b, !1, e);
    b !== f && null != b && y(a, e, c, b, d);
    return b;
  }
  function B(a, b, c) {
    b = Jb(a, b, c, !1);
    if (null == b) return b;
    a = a.s;
    const d = a[r];
    if (!(d & 2)) {
      const e = Ib(b);
      e !== b && ((b = e), y(a, d, c, b, !1));
    }
    return b;
  }
  function Kb(a, b, c, d, e) {
    var f = !!(b & 2),
      g = xb(a, b, d);
    if (g === lb || !((g[r] | 0) & 4)) {
      var h = g;
      g = !!(b & 2);
      var k = !!((h[r] | 0) & 2);
      f = h;
      !g && k && (h = ab(h));
      var m = b | (k ? 2 : 0);
      k = k || void 0;
      let l = 0,
        q = 0;
      for (; l < h.length; l++) {
        const w = tb(h[l], c, !1, m);
        void 0 !== w && ((k = k || w.s[r] & 2), (h[q++] = w));
      }
      q < l && (h.length = q);
      c = h;
      h = c[r] | 0;
      m = h | 5;
      k = k ? m & -9 : m | 8;
      h != k && (c = cb(c, k));
      h = c;
      f !== h && y(a, b, d, h);
      ((g && 2 !== e) || 1 === e) && Object.freeze(h);
      return h;
    }
    if (3 === e) return g;
    f ||
      ((f = Object.isFrozen(g)),
      1 === e
        ? f || Object.freeze(g)
        : ((e = g[r] | 0),
          (c = e & -19),
          f && ((g = ab(g)), (e = 0), y(a, b, d, g)),
          e !== c && (g[r] = c)));
    return g;
  }
  function C(a, b, c) {
    var d = a.s;
    const e = d[r];
    a = !!(e & 2);
    b = Kb(d, e, b, c, a ? 1 : 2);
    if (!(a || (b[r] | 0) & 8)) {
      for (c = 0; c < b.length; c++)
        (a = b[c]), (d = Ib(a)), a !== d && (b[c] = d);
      b[r] |= 8;
    }
    return b;
  }
  function Lb(a, b, c) {
    null == c && (c = void 0);
    return u(a, b, c);
  }
  function Mb(a, b, c, d) {
    null == d && (d = void 0);
    return Cb(a, b, c, d);
  }
  function Nb(a, b, c) {
    const d = a.s,
      e = d[r];
    nb(e);
    if (null != c) {
      var f = !!c.length;
      for (var g = 0; g < c.length; g++) {
        var h = c[g];
        f = f && !((h.s[r] | 0) & 2);
      }
      g = c[r] | 0;
      h = g | 1;
      f = (f ? h | 8 : h & -9) | 4;
      f != g && (c = cb(c, f));
    }
    null == c && (c = void 0);
    y(d, e, b, c);
    return a;
  }
  function D(a, b) {
    return pb(vb(a, b));
  }
  function Ob(a, b) {
    a: if (((a = vb(a, b)), null != a)) {
      switch (typeof a) {
        case "string":
          a = +a;
          break a;
        case "number":
          break a;
      }
      a = void 0;
    }
    return a;
  }
  function Pb(a, b, c) {
    return u(a, b, null == c ? c : ob(c));
  }
  function E(a, b) {
    return sb(vb(a, b));
  }
  function F(a, b) {
    return qb(vb(a, b));
  }
  function G(a, b, c = !1) {
    return yb(a, b) ?? c;
  }
  function Qb(a, b) {
    a = a.s;
    const c = a[r],
      d = wb(a, c, b);
    var e =
      null == d
        ? d
        : "number" === typeof d ||
          "NaN" === d ||
          "Infinity" === d ||
          "-Infinity" === d
        ? Number(d)
        : void 0;
    null != e && e !== d && y(a, c, b, e);
    return e ?? 0;
  }
  function H(a, b) {
    return E(a, b) ?? "";
  }
  function I(a, b) {
    return F(a, b) ?? 0;
  }
  function Rb(a, b, c, d) {
    return B(a, b, Eb(a, d, c));
  }
  let Sb;
  function Tb(a, b) {
    Sb = b;
    a = new a(b);
    Sb = void 0;
    return a;
  }
  function Ub(a, b) {
    return Vb(b);
  }
  function Vb(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a && !Array.isArray(a) && null != a && a instanceof Uint8Array) {
          let b = "",
            c = 0;
          const d = a.length - 10240;
          for (; c < d; )
            b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
          b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
          return btoa(b);
        }
    }
    return a;
  }
  function Wb(a, b, c) {
    a = ab(a);
    var d = a.length;
    const e = b & 128 ? a[d - 1] : void 0;
    d += e ? -1 : 0;
    for (b = b & 256 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
    if (e) {
      b = a[b] = {};
      for (const f in e)
        Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]));
    }
    return a;
  }
  function Xb(a, b, c, d, e, f) {
    if (null != a) {
      if (Array.isArray(a))
        a =
          e && 0 == a.length && (a[r] | 0) & 1
            ? void 0
            : f && (a[r] | 0) & 2
            ? a
            : Yb(a, b, c, void 0 !== d, e, f);
      else if (jb(a)) {
        const g = {};
        for (let h in a)
          Object.prototype.hasOwnProperty.call(a, h) &&
            (g[h] = Xb(a[h], b, c, d, e, f));
        a = g;
      } else a = b(a, d);
      return a;
    }
  }
  function Yb(a, b, c, d, e, f) {
    const g = d || c ? a[r] | 0 : 0;
    d = d ? !!(g & 16) : void 0;
    a = ab(a);
    for (let h = 0; h < a.length; h++) a[h] = Xb(a[h], b, c, d, e, f);
    c && c(g, a);
    return a;
  }
  function Zb(a) {
    return a.ka === ib
      ? $b(a, Yb(a.s, Zb, void 0, void 0, !1, !1), !0)
      : null != a && a instanceof Uint8Array
      ? new Uint8Array(a)
      : a;
  }
  function ac(a) {
    return a.ka === ib ? a.toJSON() : Vb(a);
  }
  var bc =
    "undefined" != typeof structuredClone
      ? structuredClone
      : (a) => Yb(a, Zb, void 0, void 0, !1, !1);
  function cc(a, b, c = gb) {
    if (null != a) {
      if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const d = a[r] | 0;
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return (a[r] = d | 18), a;
        a = Yb(a, cc, d & 4 ? gb : c, !0, !1, !0);
        b = a[r] | 0;
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      a.ka === ib && ((b = a.s), (c = b[r]), (a = c & 2 ? a : dc(a, b, c, !0)));
      return a;
    }
  }
  function dc(a, b, c, d) {
    const e = d || c & 2 ? gb : fb,
      f = !!(c & 16);
    b = Wb(b, c, (g) => cc(g, f, e));
    b[r] = b[r] | 16 | (d ? 2 : 0);
    return Tb(a.constructor, b);
  }
  function Ib(a) {
    var b = a.s;
    const c = b[r];
    if (!(c & 2)) return a;
    b = dc(a, b, c, !1);
    b.l = a;
    a = b.s;
    a[r] |= 512;
    return b;
  }
  var J = class {
    constructor(a) {
      a: {
        null == a && (a = Sb);
        Sb = void 0;
        if (null == a) {
          var b = 48;
          a = [];
        } else {
          if (!Array.isArray(a)) throw Error();
          b = a[r] | 0;
          if (b & 32) break a;
          var c = a;
          b |= 32;
          var d = c.length;
          if (d) {
            var e = d - 1,
              f = c[e];
            if (jb(f)) {
              b |= 128;
              d = ((b >> 8) & 1) - 1;
              e -= d;
              if (1024 <= e) {
                e = 1023 + d;
                const g = c.length;
                for (let h = e; h < g; h++) {
                  const k = c[h];
                  null != k && k !== f && (f[h - d] = k);
                }
                c.length = e + 1;
                c[e] = f;
                e = 1023;
              }
              b = (b & -1047553) | ((e & 1023) << 10);
            }
          }
        }
        a[r] = b;
      }
      this.s = a;
    }
    toJSON() {
      if (kb) var a = $b(this, this.s, !1);
      else (a = Yb(this.s, ac, void 0, void 0, !1, !1)), (a = $b(this, a, !0));
      return a;
    }
  };
  J.prototype.ka = ib;
  function $b(a, b, c) {
    var d = a.constructor.u,
      e = hb((c ? a.s : b)[r]),
      f = !1;
    if (d) {
      if (!c) {
        b = ab(b);
        var g;
        if (b.length && jb((g = b[b.length - 1])))
          for (f = 0; f < d.length; f++)
            if (d[f] >= e) {
              Object.assign((b[b.length - 1] = {}), g);
              break;
            }
        f = !0;
      }
      e = b;
      c = !c;
      g = a.s[r];
      a = hb(g);
      g = ((g >> 8) & 1) - 1;
      var h;
      for (let z = 0; z < d.length; z++) {
        var k = d[z];
        if (k < a) {
          k += g;
          var m = e[k];
          null == m ? (e[k] = c ? lb : db([])) : c && m !== lb && bb(m);
        } else {
          if (!h) {
            var l = void 0;
            e.length && jb((l = e[e.length - 1])) ? (h = l) : e.push((h = {}));
          }
          m = h[k];
          null == h[k] ? (h[k] = c ? lb : db([])) : c && m !== lb && bb(m);
        }
      }
    }
    d = b.length;
    if (!d) return b;
    let q, w;
    if (jb((h = b[d - 1]))) {
      a: {
        var v = h;
        l = {};
        e = !1;
        for (let z in v)
          Object.prototype.hasOwnProperty.call(v, z) &&
            ((c = v[z]),
            Array.isArray(c) && c != c && (e = !0),
            null != c ? (l[z] = c) : (e = !0));
        if (e) {
          for (let z in l) {
            v = l;
            break a;
          }
          v = null;
        }
      }
      v != h && (q = !0);
      d--;
    }
    for (; 0 < d; d--) {
      h = b[d - 1];
      if (null != h) break;
      w = !0;
    }
    if (!q && !w) return b;
    var x;
    f ? (x = b) : (x = Array.prototype.slice.call(b, 0, d));
    b = x;
    f && (b.length = d);
    v && b.push(v);
    return b;
  }
  function ec(a, b) {
    if (null == b) return new a();
    if (!Array.isArray(b)) throw Error("must be an array");
    if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
      throw Error("arrays passed to jspb constructors must be mutable");
    b[r] |= 64;
    return Tb(a, eb(b));
  }
  function fc(a, b) {
    const c = gc;
    gc = void 0;
    if (!b(a)) throw ((b = c ? c() + "\n" : ""), Error(b + String(a)));
  }
  const hc = (a) => null !== a && void 0 !== a;
  let gc = void 0;
  function ic(a) {
    return (b) => {
      if (null == b || "" == b) b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        b = Tb(a, eb(b));
      }
      return b;
    };
  }
  var jc = class extends J {};
  var kc = class extends J {};
  kc.u = [2, 3, 4];
  function lc(a, b) {
    this.h = (a === mc && b) || "";
    this.g = oc;
  }
  var oc = {},
    mc = {};
  function pc(a) {
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function qc(a) {
    let b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  function rc(a) {
    let b = a;
    return function () {
      if (b) {
        const c = b;
        b = null;
        c();
      }
    };
  }
  function sc(a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  }
  function tc(a, b, c) {
    return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1;
  }
  function uc(a, b) {
    const c = {};
    for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function vc(a, b) {
    for (const c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function wc(a) {
    const b = [];
    let c = 0;
    for (const d in a) b[c++] = a[d];
    return b;
  }
  function xc(a) {
    const b = {};
    for (const c in a) b[c] = a[c];
    return b;
  }
  var yc;
  var zc = class {
    constructor(a) {
      this.h = a;
    }
    toString() {
      return this.h + "";
    }
  };
  function Ac(a, b) {
    a = Bc.exec(Cc(a).toString());
    var c = a[3] || "";
    return Dc(a[1] + Ec("?", a[2] || "", b) + Ec("#", c));
  }
  function Cc(a) {
    return a instanceof zc && a.constructor === zc
      ? a.h
      : "type_error:TrustedResourceUrl";
  }
  var Bc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    Fc = {};
  function Dc(a) {
    if (void 0 === yc) {
      var b = null;
      var c = n.trustedTypes;
      if (c && c.createPolicy) {
        try {
          b = c.createPolicy("goog#html", {
            createHTML: oa,
            createScript: oa,
            createScriptURL: oa,
          });
        } catch (d) {
          n.console && n.console.error(d.message);
        }
        yc = b;
      } else yc = b;
    }
    a = (b = yc) ? b.createScriptURL(a) : a;
    return new zc(a, Fc);
  }
  function Ec(a, b, c) {
    if (null == c) return b;
    if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
    for (var d in c)
      if (Object.prototype.hasOwnProperty.call(c, d)) {
        var e = c[d];
        e = Array.isArray(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          null != g &&
            (b || (b = a),
            (b +=
              (b.length > a.length ? "&" : "") +
              encodeURIComponent(d) +
              "=" +
              encodeURIComponent(String(g))));
        }
      }
    return b;
  }
  var Gc = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g.toString();
    }
  };
  function Hc(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function Ic(a, b, c) {
    function d(h) {
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = 1; e < c.length; e++) {
      var f = c[e];
      if (!da(f) || (ea(f) && 0 < f.nodeType)) d(f);
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (ea(f)) {
              var g = "function" == typeof f.item || "string" == typeof f.item;
              break a;
            }
            if ("function" === typeof f) {
              g = "function" == typeof f.item;
              break a;
            }
          }
          g = !1;
        }
        Ma(g ? Ta(f) : f, d);
      }
    }
  }
  function Jc(a) {
    this.g = a || n.document || document;
  }
  Jc.prototype.getElementsByTagName = function (a, b) {
    return (b || this.g).getElementsByTagName(String(a));
  };
  Jc.prototype.createElement = function (a) {
    var b = this.g;
    a = String(a);
    "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
    return b.createElement(a);
  };
  Jc.prototype.createTextNode = function (a) {
    return this.g.createTextNode(String(a));
  };
  Jc.prototype.append = function (a, b) {
    Ic(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments);
  };
  Jc.prototype.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  function Kc() {
    return ua && ya
      ? ya.mobile
      : !Lc() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"));
  }
  function Lc() {
    return ua && ya
      ? !ya.mobile && (p("iPad") || p("Android") || p("Silk"))
      : p("iPad") || (p("Android") && !p("Mobile")) || p("Silk");
  }
  var Mc = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    Nc = /#|$/;
  function Oc(a, b) {
    var c = a.search(Nc);
    a: {
      var d = 0;
      for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
        var f = a.charCodeAt(d - 1);
        if (38 == f || 63 == f)
          if (((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f))
            break a;
        d += e + 1;
      }
      d = -1;
    }
    if (0 > d) return null;
    e = a.indexOf("&", d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
  } /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
  const Pc =
    "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
      " "
    );
  function Qc(a) {
    try {
      var b;
      if ((b = !!a && null != a.location.href))
        a: {
          try {
            Ua(a.foo);
            b = !0;
            break a;
          } catch (c) {}
          b = !1;
        }
      return b;
    } catch {
      return !1;
    }
  }
  function Rc(a) {
    return Qc(a.top) ? a.top : null;
  }
  function Sc(a, b) {
    const c = Tc("SCRIPT", a);
    c.src = Cc(b);
    (void 0)?.Ub ||
      ((b = (b = (
        (c.ownerDocument && c.ownerDocument.defaultView) ||
        window
      ).document.querySelector?.("script[nonce]"))
        ? b.nonce || b.getAttribute("nonce") || ""
        : "") &&
        c.setAttribute("nonce", b));
    return (a = a.getElementsByTagName("script")[0]) && a.parentNode
      ? (a.parentNode.insertBefore(c, a), c)
      : null;
  }
  function Uc(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function Vc(a, b) {
    if (!Wc() && !Xc()) {
      let c = Math.random();
      if (c < b) return (c = Yc()), a[Math.floor(c * a.length)];
    }
    return null;
  }
  function Yc() {
    if (!globalThis.crypto) return Math.random();
    try {
      const a = new Uint32Array(1);
      globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch {
      return Math.random();
    }
  }
  function K(a, b) {
    if (a)
      for (const c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function Zc(a) {
    const b = a.length;
    if (0 == b) return 0;
    let c = 305419896;
    for (let d = 0; d < b; d++)
      c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return 0 < c ? c : 4294967296 + c;
  }
  var Xc = qc(
      () =>
        Pa(
          [
            "Google Web Preview",
            "Mediapartners-Google",
            "Google-Read-Aloud",
            "Google-Adwords",
          ],
          $c
        ) || 1e-4 > Math.random()
    ),
    Wc = qc(() => -1 != xa().indexOf("MSIE"));
  const $c = (a) => -1 != xa().indexOf(a);
  var ad = /^([0-9.]+)px$/,
    bd = /^(-?[0-9.]{1,30})$/;
  function cd(a) {
    if (!bd.test(a)) return null;
    a = Number(a);
    return isNaN(a) ? null : a;
  }
  function L(a) {
    return (a = ad.exec(a)) ? +a[1] : null;
  }
  var dd = (a, b) => {
      for (let e = 0; 50 > e; ++e) {
        try {
          var c = !(!a.frames || !a.frames[b]);
        } catch {
          c = !1;
        }
        if (c) return a;
        a: {
          try {
            const f = a.parent;
            if (f && f != a) {
              var d = f;
              break a;
            }
          } catch {}
          d = null;
        }
        if (!(a = d)) break;
      }
      return null;
    },
    ed = qc(() => (Kc() ? 2 : Lc() ? 1 : 0)),
    fd = (a, b) => {
      K(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    };
  let gd = [];
  const hd = () => {
    const a = gd;
    gd = [];
    for (const b of a)
      try {
        b();
      } catch {}
  };
  var id = () => {
      var a = Math.random;
      return Math.floor(a() * 2 ** 52);
    },
    jd = (a) => {
      if ("number" !== typeof a.goog_pvsid)
        try {
          Object.defineProperty(a, "goog_pvsid", {
            value: id(),
            configurable: !1,
          });
        } catch (b) {}
      return Number(a.goog_pvsid) || -1;
    },
    ld = (a) => {
      var b = kd;
      "complete" === b.readyState || "interactive" === b.readyState
        ? (gd.push(a),
          1 == gd.length &&
            (window.Promise
              ? Promise.resolve().then(hd)
              : window.setImmediate
              ? setImmediate(hd)
              : setTimeout(hd, 0)))
        : b.addEventListener("DOMContentLoaded", a);
    };
  function Tc(a, b = document) {
    return b.createElement(String(a).toLowerCase());
  }
  function md(a, b, c = null, d = !1, e = !1) {
    nd(a, b, c, d, e);
  }
  function nd(a, b, c, d, e = !1) {
    a.google_image_requests || (a.google_image_requests = []);
    const f = Tc("IMG", a.document);
    if (c || d) {
      const g = (h) => {
        c && c(h);
        if (d) {
          h = a.google_image_requests;
          const k = La(h, f);
          0 <= k && Array.prototype.splice.call(h, k, 1);
        }
        tc(f, "load", g);
        tc(f, "error", g);
      };
      sc(f, "load", g);
      sc(f, "error", g);
    }
    e && (f.attributionSrc = "");
    f.src = b;
    a.google_image_requests.push(f);
  }
  var pd = (a) => {
      let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      K(a, (c, d) => {
        if (c || 0 === c) b += `&${d}=${encodeURIComponent("" + c)}`;
      });
      od(b);
    },
    od = (a) => {
      var b = window;
      b.fetch
        ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          })
        : md(b, a, void 0, !1, !1);
    };
  let qd = null;
  var kd = document,
    M = window;
  let rd = null;
  var sd = (a, b = []) => {
    let c = !1;
    n.google_logging_queue || ((c = !0), (n.google_logging_queue = []));
    n.google_logging_queue.push([a, b]);
    if ((a = c)) {
      if (null == rd) {
        rd = !1;
        try {
          var d = Rc(n);
          d && -1 !== d.location.hash.indexOf("google_logging") && (rd = !0);
          n.localStorage.getItem("google_logging") && (rd = !0);
        } catch (e) {}
      }
      a = rd;
    }
    a &&
      ((d = n.document),
      (a = new lc(
        mc,
        "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"
      )),
      (a = Dc(
        a instanceof lc && a.constructor === lc && a.g === oc
          ? a.h
          : "type_error:Const"
      )),
      Sc(d, a));
  };
  function ud(a = n) {
    let b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch {}
    return b?.pageViewId && b?.canonicalUrl ? b : null;
  }
  function vd(a = ud()) {
    return a ? (Qc(a.master) ? a.master : null) : null;
  }
  function wd(a, ...b) {
    if (0 === b.length) return Dc(a[0]);
    let c = a[0];
    for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return Dc(c);
  }
  var xd = (a) => {
      a = vd(ud(a)) || a;
      a.google_unique_id = (a.google_unique_id || 0) + 1;
      return a.google_unique_id;
    },
    yd = (a) => {
      a = a.google_unique_id;
      return "number" === typeof a ? a : 0;
    },
    zd = () => {
      if (!M) return !1;
      try {
        return !(!M.navigator.standalone && !M.top.navigator.standalone);
      } catch (a) {
        return !1;
      }
    },
    Ad = (a) => {
      if (!a) return "";
      a = a.toLowerCase();
      "ca-" != a.substring(0, 3) && (a = "ca-" + a);
      return a;
    };
  class Bd {
    constructor(a, b) {
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = {};
    }
  }
  var Cd = (a) => !!(a.error && a.meta && a.id);
  const Dd = RegExp(
    "^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"
  );
  var Ed = class {
      constructor(a, b) {
        this.g = a;
        this.h = b;
      }
    },
    Fd = class {
      constructor(a, b, c) {
        this.url = a;
        this.m = b;
        this.Ka = !!c;
        this.depth = null;
      }
    };
  function Gd(a, b) {
    const c = {};
    c[a] = b;
    return [c];
  }
  function Hd(a, b, c, d, e) {
    const f = [];
    K(a, function (g, h) {
      (g = Id(g, b, c, d, e)) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function Id(a, b, c, d, e) {
    if (null == a) return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        const f = [];
        for (let g = 0; g < a.length; g++) f.push(Id(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent(Hd(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }
  function Jd(a) {
    let b = 1;
    for (const c in a.h) b = c.length > b ? c.length : b;
    return 3997 - b - a.i.length - 1;
  }
  function Kd(a, b) {
    let c = "https://pagead2.googlesyndication.com" + b,
      d = Jd(a) - b.length;
    if (0 > d) return "";
    a.g.sort(function (f, g) {
      return f - g;
    });
    b = null;
    let e = "";
    for (let f = 0; f < a.g.length; f++) {
      const g = a.g[f],
        h = a.h[g];
      for (let k = 0; k < h.length; k++) {
        if (!d) {
          b = null == b ? g : b;
          break;
        }
        let m = Hd(h[k], a.i, ",$");
        if (m) {
          m = e + m;
          if (d >= m.length) {
            d -= m.length;
            c += m;
            e = a.i;
            break;
          }
          b = null == b ? g : b;
        }
      }
    }
    a = "";
    null != b && (a = e + "trn=" + b);
    return c + a;
  }
  class Ld {
    constructor() {
      this.i = "&";
      this.h = {};
      this.j = 0;
      this.g = [];
    }
  }
  function Md(a, b) {
    0 <= b && 1 >= b && (a.g = b);
  }
  function Nd(a, b, c, d = !1, e) {
    if ((d ? a.g : Math.random()) < (e || 0.01))
      try {
        let f;
        c instanceof Ld
          ? (f = c)
          : ((f = new Ld()),
            K(c, (h, k) => {
              var m = f;
              const l = m.j++;
              h = Gd(k, h);
              m.g.push(l);
              m.h[l] = h;
            }));
        const g = Kd(f, "/pagead/gen_204?id=" + b + "&");
        g && md(n, g);
      } catch (f) {}
  }
  class Od {
    constructor() {
      this.g = Math.random();
    }
  }
  let Pd = null;
  function Qd() {
    if (null === Pd) {
      Pd = "";
      try {
        let a = "";
        try {
          a = n.top.location.hash;
        } catch (b) {
          a = n.location.hash;
        }
        if (a) {
          const b = a.match(/\bdeid=([\d,]+)/);
          Pd = b ? b[1] : "";
        }
      } catch (a) {}
    }
    return Pd;
  }
  function Rd() {
    const a = n.performance;
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Date.now();
  }
  function Sd() {
    const a = n.performance;
    return a && a.now ? a.now() : null;
  }
  class Td {
    constructor(a, b) {
      var c = Sd() || Rd();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.uniqueId = Math.random();
      this.taskId = this.slotId = void 0;
    }
  }
  const Ud = n.performance,
    Vd = !!(Ud && Ud.mark && Ud.measure && Ud.clearMarks),
    Wd = qc(() => {
      var a;
      if ((a = Vd)) (a = Qd()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
      return a;
    });
  function Xd(a) {
    a &&
      Ud &&
      Wd() &&
      (Ud.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
      Ud.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function Yd(a) {
    a.g = !1;
    a.h != a.i.google_js_reporting_queue &&
      (Wd() && Ma(a.h, Xd), (a.h.length = 0));
  }
  class Zd {
    constructor(a) {
      this.h = [];
      this.i = a || n;
      let b = null;
      a &&
        ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
        (this.h = a.google_js_reporting_queue),
        (b = a.google_measure_js_timing));
      this.g = Wd() || (null != b ? b : 1 > Math.random());
    }
    start(a, b) {
      if (!this.g) return null;
      a = new Td(a, b);
      b = `goog_${a.label}_${a.uniqueId}_start`;
      Ud && Wd() && Ud.mark(b);
      return a;
    }
    end(a) {
      if (this.g && "number" === typeof a.value) {
        a.duration = (Sd() || Rd()) - a.value;
        var b = `goog_${a.label}_${a.uniqueId}_end`;
        Ud && Wd() && Ud.mark(b);
        !this.g || 2048 < this.h.length || this.h.push(a);
      }
    }
  }
  function $d(a) {
    let b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
      a = a.stack;
      var c = b;
      try {
        -1 == a.indexOf(c) && (a = c + "\n" + a);
        let d;
        for (; a != d; )
          (d = a),
            (a = a.replace(
              RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),
              "$1"
            ));
        b = a.replace(RegExp("\n *", "g"), "\n");
      } catch (d) {
        b = c;
      }
    }
    return b;
  }
  class ae {
    constructor(a, b = null) {
      this.A = a;
      this.g = null;
      this.l = this.H;
      this.h = b;
      this.i = !1;
    }
    Pa(a) {
      this.l = a;
    }
    va(a) {
      this.g = a;
    }
    j(a) {
      this.i = a;
    }
    da(a, b, c) {
      let d, e;
      try {
        this.h && this.h.g
          ? ((e = this.h.start(a.toString(), 3)), (d = b()), this.h.end(e))
          : (d = b());
      } catch (f) {
        b = !0;
        try {
          Xd(e), (b = this.l(a, new Bd(f, { message: $d(f) }), void 0, c));
        } catch (g) {
          this.H(217, g);
        }
        if (b) window.console?.error?.(f);
        else throw f;
      }
      return d;
    }
    na(a, b) {
      return (...c) => this.da(a, () => b.apply(void 0, c));
    }
    H(a, b, c, d, e) {
      e = e || "jserror";
      let f;
      try {
        const Ja = new Ld();
        var g = Ja;
        g.g.push(1);
        g.h[1] = Gd("context", a);
        Cd(b) || (b = new Bd(b, { message: $d(b) }));
        if (b.msg) {
          g = Ja;
          var h = b.msg.substring(0, 512);
          g.g.push(2);
          g.h[2] = Gd("msg", h);
        }
        var k = b.meta || {};
        b = k;
        if (this.g)
          try {
            this.g(b);
          } catch (Wa) {}
        if (d)
          try {
            d(b);
          } catch (Wa) {}
        d = Ja;
        k = [k];
        d.g.push(3);
        d.h[3] = k;
        d = n;
        k = [];
        b = null;
        do {
          var m = d;
          if (Qc(m)) {
            var l = m.location.href;
            b = (m.document && m.document.referrer) || null;
          } else (l = b), (b = null);
          k.push(new Fd(l || "", m));
          try {
            d = m.parent;
          } catch (Wa) {
            d = null;
          }
        } while (d && m != d);
        for (let Wa = 0, Hf = k.length - 1; Wa <= Hf; ++Wa)
          k[Wa].depth = Hf - Wa;
        m = n;
        if (
          m.location &&
          m.location.ancestorOrigins &&
          m.location.ancestorOrigins.length == k.length - 1
        )
          for (l = 1; l < k.length; ++l) {
            var q = k[l];
            q.url ||
              ((q.url = m.location.ancestorOrigins[l - 1] || ""), (q.Ka = !0));
          }
        var w = k;
        let nc = new Fd(n.location.href, n, !1);
        m = null;
        const td = w.length - 1;
        for (q = td; 0 <= q; --q) {
          var v = w[q];
          !m && Dd.test(v.url) && (m = v);
          if (v.url && !v.Ka) {
            nc = v;
            break;
          }
        }
        v = null;
        const oj = w.length && w[td].url;
        0 != nc.depth && oj && (v = w[td]);
        f = new Ed(nc, v);
        if (f.h) {
          w = Ja;
          var x = f.h.url || "";
          w.g.push(4);
          w.h[4] = Gd("top", x);
        }
        var z = { url: f.g.url || "" };
        if (f.g.url) {
          var Ba = f.g.url.match(Mc),
            V = Ba[1],
            Ca = Ba[3],
            ta = Ba[4];
          x = "";
          V && (x += V + ":");
          Ca && ((x += "//"), (x += Ca), ta && (x += ":" + ta));
          var If = x;
        } else If = "";
        V = Ja;
        z = [z, { url: If }];
        V.g.push(5);
        V.h[5] = z;
        Nd(this.A, e, Ja, this.i, c);
      } catch (Ja) {
        try {
          Nd(
            this.A,
            e,
            { context: "ecmserr", rctx: a, msg: $d(Ja), url: f && f.g.url },
            this.i,
            c
          );
        } catch (nc) {}
      }
      return !0;
    }
    Z(a, b) {
      b.catch((c) => {
        c = c ? c : "unknown rejection";
        this.H(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0);
      });
    }
  }
  var be = (a) => "string" === typeof a,
    ce = (a) => void 0 === a;
  var de = class extends J {};
  de.u = [2, 8];
  var ee = [3, 4, 5],
    fe = [6, 7];
  function ge(a) {
    return null != a ? !a : a;
  }
  function he(a, b) {
    let c = !1;
    for (let d = 0; d < a.length; d++) {
      const e = a[d]();
      if (e === b) return e;
      null == e && (c = !0);
    }
    if (!c) return !b;
  }
  function ie(a, b) {
    var c = C(a, de, 2);
    if (!c.length) return je(a, b);
    a = I(a, 1);
    if (1 === a) return ge(ie(c[0], b));
    c = Oa(c, (d) => () => ie(d, b));
    switch (a) {
      case 2:
        return he(c, !1);
      case 3:
        return he(c, !0);
    }
  }
  function je(a, b) {
    const c = Fb(a, ee);
    a: {
      switch (c) {
        case 3:
          var d = I(a, Eb(a, ee, 3));
          break a;
        case 4:
          d = I(a, Eb(a, ee, 4));
          break a;
        case 5:
          d = I(a, Eb(a, ee, 5));
          break a;
      }
      d = void 0;
    }
    if (d && (b = (b = b[c]) && b[d])) {
      try {
        var e = b(...zb(a, 8, sb));
      } catch (f) {
        return;
      }
      b = I(a, 1);
      if (4 === b) return !!e;
      if (5 === b) return null != e;
      if (12 === b) a = H(a, Eb(a, fe, 7));
      else
        a: {
          switch (c) {
            case 4:
              a = Qb(a, Eb(a, fe, 6));
              break a;
            case 5:
              a = H(a, Eb(a, fe, 7));
              break a;
          }
          a = void 0;
        }
      if (null != a) {
        if (6 === b) return e === a;
        if (9 === b) return null != e && 0 === ra(String(e), a);
        if (null != e)
          switch (b) {
            case 7:
              return e < a;
            case 8:
              return e > a;
            case 12:
              return be(a) && be(e) && new RegExp(a).test(e);
            case 10:
              return null != e && -1 === ra(String(e), a);
            case 11:
              return null != e && 1 === ra(String(e), a);
          }
      }
    }
  }
  function ke(a, b) {
    return !a || !(!b || !ie(a, b));
  }
  var le = class extends J {};
  le.u = [4];
  var me = class extends J {
    getValue() {
      return B(this, le, 2);
    }
  };
  var ne = class extends J {},
    oe = ic(ne);
  ne.u = [5];
  var pe = [1, 2, 3, 6, 7];
  var qe = class extends J {
    constructor() {
      super();
    }
  };
  qe.u = [2];
  function re(a, b) {
    return u(a, 1, t(b));
  }
  var se = class extends J {
    constructor() {
      super();
    }
    getValue() {
      return I(this, 1);
    }
  };
  function te(a, b) {
    return A(a, 1, b, 0);
  }
  function ue(a, b) {
    return A(a, 2, b, 0);
  }
  var ve = class extends J {
    constructor() {
      super();
    }
    getWidth() {
      return vb(this, 1) ?? 0;
    }
    getHeight() {
      return vb(this, 2) ?? 0;
    }
  };
  function we(a, b) {
    return Lb(a, 1, b);
  }
  function xe(a, b) {
    return Lb(a, 2, b);
  }
  function ye(a, b) {
    Lb(a, 3, b);
  }
  function ze(a, b) {
    return A(a, 5, null == b ? b : ob(b), !1);
  }
  var Ae = class extends J {
    constructor() {
      super();
    }
    getContentUrl() {
      return H(this, 4);
    }
  };
  var Hb = class extends J {};
  var Be = class extends J {};
  var Ce = class extends J {
    constructor() {
      super();
    }
    getContentUrl() {
      return H(this, 1);
    }
  };
  function De(a, b) {
    return Mb(a, 4, Ee, b);
  }
  var Fe = class extends J {
      constructor() {
        super();
      }
    },
    Ee = [4, 5, 6, 8, 9, 10, 11];
  var Ge = class extends J {
    constructor() {
      super();
    }
  };
  function He(a, b) {
    return A(a, 1, t(b), 0);
  }
  function Ie(a, b) {
    return A(a, 2, t(b), 0);
  }
  var Je = class extends J {
    constructor() {
      super();
    }
  };
  var Ke = class extends J {
      constructor() {
        super();
      }
    },
    Le = [1, 2];
  function Me(a, b) {
    return Lb(a, 1, b);
  }
  function Ne(a, b) {
    return Nb(a, 2, b);
  }
  function Oe(a, b) {
    return Ab(a, 4, b);
  }
  function Pe(a, b) {
    return Nb(a, 5, b);
  }
  function Qe(a, b) {
    return A(a, 6, t(b), 0);
  }
  var Re = class extends J {
    constructor() {
      super();
    }
  };
  Re.u = [2, 4, 5];
  var Se = class extends J {
    constructor() {
      super();
    }
  };
  Se.u = [5];
  var Te = [1, 2, 3, 4];
  var Ue = class extends J {
    constructor() {
      super();
    }
  };
  Ue.u = [2, 3];
  function Ve(a, b) {
    return Mb(a, 4, We, b);
  }
  var Xe = class extends J {
      constructor() {
        super();
      }
      getTagSessionCorrelator() {
        return vb(this, 2) ?? 0;
      }
    },
    We = [4, 5, 7, 8];
  function Ye(a, ...b) {
    Ze(a, ...b.map((c) => ({ Sa: 4, Na: c.toJSON() })));
  }
  function $e(a, ...b) {
    Ze(a, ...b.map((c) => ({ Sa: 7, Na: c.toJSON() })));
  }
  function af(a) {
    return JSON.stringify([a.map((b) => [{ [b.Sa]: b.Na }])]);
  }
  var bf = (a, b) => {
    globalThis
      .fetch(a, {
        method: "POST",
        body: b,
        keepalive: 65536 > b.length,
        credentials: "omit",
        mode: "no-cors",
        redirect: "follow",
      })
      .catch(() => {});
  };
  function cf() {
    this.A = this.A;
    this.i = this.i;
  }
  cf.prototype.A = !1;
  function df(a) {
    a.A || ((a.A = !0), a.g());
  }
  function ef(a, b) {
    a.A ? b() : (a.i || (a.i = []), a.i.push(b));
  }
  cf.prototype.g = function () {
    if (this.i) for (; this.i.length; ) this.i.shift()();
  };
  function ff(a, b, c, d) {
    sc(b, c, d);
    ef(a, () => tc(b, c, d));
  }
  function gf(a, b) {
    1 !== a.h && ((a.h = 1), a.K && a.K(b));
  }
  function hf(a) {
    a.m.document.visibilityState
      ? ff(a, a.m.document, "visibilitychange", (b) => {
          "hidden" === a.m.document.visibilityState && gf(a, b);
          "visible" === a.m.document.visibilityState && (a.h = 0);
        })
      : "onpagehide" in a.m
      ? (ff(a, a.m, "pagehide", (b) => {
          gf(a, b);
        }),
        ff(a, a.m, "pageshow", () => {
          a.h = 0;
        }))
      : ff(a, a.m, "beforeunload", (b) => {
          gf(a, b);
        });
  }
  function jf(a, b) {
    a.K || hf(a);
    a.K = b;
  }
  var kf = class extends cf {
    constructor(a) {
      super();
      this.m = a;
      this.h = 0;
      this.K = null;
    }
  };
  function Ze(a, ...b) {
    a.A && 65536 <= af(a.g.concat(b)).length && lf(a);
    a.g.push(...b);
    a.g.length >= a.l && lf(a);
    a.g.length &&
      null === a.h &&
      (a.h = setTimeout(() => {
        lf(a);
      }, a.B));
  }
  function mf(a, b, c, d) {
    a.i ||
      ((a.i = new kf(b)),
      jf(a.i, () => {
        for (const e of a.j) e();
        c();
      }));
    d && 1 !== a.i.h && a.j.push(d);
  }
  function lf(a) {
    null !== a.h && (clearTimeout(a.h), (a.h = null));
    if (a.g.length) {
      var b = af(a.g);
      a.v("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.g = [];
    }
  }
  function nf(a, b, c) {
    mf(
      a,
      b,
      () => {
        lf(a);
      },
      c
    );
  }
  var of = class {
      constructor(a, b, c) {
        this.v = bf;
        this.B = a;
        this.l = b;
        this.A = c;
        this.j = [];
        this.g = [];
        this.h = null;
      }
    },
    pf = class extends of {
      constructor(a = 1e3, b = 100, c = !1) {
        super(a, b, c && !0);
      }
    };
  function qf(a, b) {
    b = A(b, 1, Date.now(), 0);
    var c = jd(window);
    b = A(b, 2, c, 0);
    return A(b, 6, a.l, 0);
  }
  function rf(a, b, c, d, e, f) {
    if (a.i) {
      var g = Ie(He(new Je(), b), c);
      b = Qe(Ne(Me(Pe(Oe(new Re(), d), e), g), a.g.slice()), f);
      b = Ve(new Xe(), b);
      Ye(a.h, qf(a, b));
      if (
        1 === f ||
        3 === f ||
        (4 === f && !a.g.some((h) => I(h, 1) === I(g, 1) && I(h, 2) === c))
      )
        a.g.push(g), 100 < a.g.length && a.g.shift();
    }
  }
  function sf(a, b, c, d) {
    if (a.i && a.j) {
      var e = new Ue();
      b = Nb(e, 2, b);
      c = Nb(b, 3, c);
      d && A(c, 1, d, 0);
      d = new Xe();
      d = Mb(d, 7, We, c);
      Ye(a.h, qf(a, d));
    }
  }
  var tf = class {
    constructor(a, b, c, d = new pf(b)) {
      this.l = a;
      this.j = c;
      this.h = d;
      this.g = [];
      this.i = 0 < a && Yc() < 1 / a;
    }
  };
  var N = (a) => {
    var b = "ta";
    if (a.ta && a.hasOwnProperty(b)) return a.ta;
    b = new a();
    return (a.ta = b);
  };
  var uf = class {
    constructor() {
      this.G = { [3]: {}, [4]: {}, [5]: {} };
    }
  };
  var vf = /^true$/.test("false");
  function wf(a, b) {
    switch (b) {
      case 1:
        return I(a, Eb(a, pe, 1));
      case 2:
        return I(a, Eb(a, pe, 2));
      case 3:
        return I(a, Eb(a, pe, 3));
      case 6:
        return I(a, Eb(a, pe, 6));
      default:
        return null;
    }
  }
  function xf(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return G(a, 1);
      case 7:
        return H(a, 3);
      case 2:
        return Qb(a, 2);
      case 3:
        return H(a, 3);
      case 6:
        return zb(a, 4, sb);
      default:
        return null;
    }
  }
  const yf = qc(() => {
    if (!vf) return {};
    try {
      const a =
        window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
      if (a) return JSON.parse(a);
    } catch {}
    return {};
  });
  function zf(a, b, c, d = 0) {
    N(Af).i[d] = N(Af).i[d]?.add(b) ?? new Set().add(b);
    const e = yf();
    if (null != e[b]) return e[b];
    b = Bf(d)[b];
    if (!b) return c;
    b = oe(JSON.stringify(b));
    b = Cf(b);
    a = xf(b, a);
    return null != a ? a : c;
  }
  function Cf(a) {
    const b = N(uf).G;
    if (b) {
      const c = Ra(C(a, me, 5), (d) => ke(B(d, de, 1), b));
      if (c) return c.getValue() ?? null;
    }
    return B(a, le, 4) ?? null;
  }
  class Af {
    constructor() {
      this.h = {};
      this.j = [];
      this.i = {};
      this.g = new Map();
    }
  }
  function Df(a, b = !1, c) {
    return !!zf(1, a, b, c);
  }
  function Ef(a, b = 0, c) {
    a = Number(zf(2, a, b, c));
    return isNaN(a) ? b : a;
  }
  function Ff(a, b = "", c) {
    a = zf(3, a, b, c);
    return "string" === typeof a ? a : b;
  }
  function Gf(a, b = [], c) {
    a = zf(6, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function Bf(a) {
    return N(Af).h[a] || (N(Af).h[a] = {});
  }
  function Jf(a, b) {
    const c = Bf(b);
    K(a, (d, e) => (c[e] = d));
  }
  function Kf(a, b, c, d, e = !1) {
    const f = [],
      g = [];
    Ma(b, (h) => {
      const k = Bf(h);
      Ma(a, (m) => {
        var l = Fb(m, pe);
        const q = wf(m, l);
        if (q) {
          var w = N(Af).g.get(h)?.get(q)?.slice(0) ?? [];
          a: {
            const v = new Se();
            switch (l) {
              case 1:
                Cb(v, 1, Te, t(q));
                break;
              case 2:
                Cb(v, 2, Te, t(q));
                break;
              case 3:
                Cb(v, 3, Te, t(q));
                break;
              case 6:
                Cb(v, 4, Te, t(q));
                break;
              default:
                l = void 0;
                break a;
            }
            Ab(v, 5, w);
            l = v;
          }
          if ((w = l)) w = !!N(Af).i[h]?.has(q);
          w && f.push(l);
          if ((w = l)) w = !!N(Af).g.get(h)?.has(q);
          w && g.push(l);
          e ||
            ((l = N(Af)),
            l.g.has(h) || l.g.set(h, new Map()),
            l.g.get(h).has(q) || l.g.get(h).set(q, []),
            d && l.g.get(h).get(q).push(d));
          k[q] = m.toJSON();
        }
      });
    });
    (f.length || g.length) && sf(c, f, g, d ?? void 0);
  }
  function Lf(a, b) {
    const c = Bf(b);
    Ma(a, (d) => {
      var e = oe(JSON.stringify(d));
      const f = Fb(e, pe);
      (e = wf(e, f)) && (c[e] || (c[e] = d));
    });
  }
  function Mf() {
    return Oa(Object.keys(N(Af).h), (a) => Number(a));
  }
  function Nf(a) {
    Sa(N(Af).j, a) || Jf(Bf(4), a);
  }
  function O(a, b, c) {
    c.hasOwnProperty(a) || Object.defineProperty(c, String(a), { value: b });
  }
  function Of(a, b, c) {
    return b[a] || c;
  }
  function Pf(a) {
    O(5, Df, a);
    O(6, Ef, a);
    O(7, Ff, a);
    O(8, Gf, a);
    O(13, Lf, a);
    O(15, Nf, a);
  }
  function Qf(a) {
    O(
      4,
      (b) => {
        N(uf).G = b;
      },
      a
    );
    O(
      9,
      (b, c) => {
        var d = N(uf);
        null == d.G[3][b] && (d.G[3][b] = c);
      },
      a
    );
    O(
      10,
      (b, c) => {
        var d = N(uf);
        null == d.G[4][b] && (d.G[4][b] = c);
      },
      a
    );
    O(
      11,
      (b, c) => {
        var d = N(uf);
        null == d.G[5][b] && (d.G[5][b] = c);
      },
      a
    );
    O(
      14,
      (b) => {
        var c = N(uf);
        for (const d of [3, 4, 5]) Object.assign(c.G[d], b[d]);
      },
      a
    );
  }
  function Rf(a) {
    a.hasOwnProperty("init-done") ||
      Object.defineProperty(a, "init-done", { value: !0 });
  }
  function Sf(a, b, c) {
    a.i = Of(1, b, () => {});
    a.j = (d, e) => Of(2, b, () => [])(d, c, e);
    a.g = () => Of(3, b, () => [])(c);
    a.h = (d) => {
      Of(16, b, () => {})(d, c);
    };
  }
  class Tf {
    i() {}
    h() {}
    j() {
      return [];
    }
    g() {
      return [];
    }
  }
  let Uf, Vf;
  const Wf = new Zd(window);
  ((a) => {
    Uf = a ?? new Od();
    "number" !== typeof window.google_srt &&
      (window.google_srt = Math.random());
    Md(Uf, window.google_srt);
    Vf = new ae(Uf, Wf);
    Vf.va(() => {});
    Vf.j(!0);
    "complete" == window.document.readyState
      ? window.google_measure_js_timing || Yd(Wf)
      : Wf.g &&
        sc(window, "load", () => {
          window.google_measure_js_timing || Yd(Wf);
        });
  })();
  var Xf = {
    Hb: 0,
    Gb: 1,
    Db: 2,
    yb: 3,
    Eb: 4,
    zb: 5,
    Fb: 6,
    Bb: 7,
    Cb: 8,
    xb: 9,
    Ab: 10,
  };
  var Yf = { Jb: 0, Kb: 1, Ib: 2 };
  function Zf(a) {
    if (0 != a.g) throw Error("Already resolved/rejected.");
  }
  var bg = class {
    constructor() {
      this.h = new $f(this);
      this.g = 0;
    }
    resolve(a) {
      Zf(this);
      this.g = 1;
      this.j = a;
      ag(this.h);
    }
  };
  function ag(a) {
    switch (a.g.g) {
      case 0:
        break;
      case 1:
        a.h && a.h(a.g.j);
        break;
      case 2:
        a.i && a.i(a.g.i);
        break;
      default:
        throw Error("Unhandled deferred state.");
    }
  }
  var $f = class {
    constructor(a) {
      this.g = a;
    }
    then(a, b) {
      if (this.h) throw Error("Then functions already set.");
      this.h = a;
      this.i = b;
      ag(this);
    }
  };
  const cg = class {
    constructor(a) {
      this.g = a.slice(0);
    }
    forEach(a) {
      this.g.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new cg(Na(this.g, a));
    }
    apply(a) {
      return new cg(a(this.g.slice(0)));
    }
    get(a) {
      return this.g[a];
    }
    add(a) {
      const b = this.g.slice(0);
      b.push(a);
      return new cg(b);
    }
  };
  function dg(a, b) {
    for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
    c.forEach(b, void 0);
  }
  const fg = class {
    constructor() {
      this.g = {};
      this.h = {};
    }
    set(a, b) {
      const c = eg(a);
      this.g[c] = b;
      this.h[c] = a;
    }
    get(a, b) {
      a = eg(a);
      return void 0 !== this.g[a] ? this.g[a] : b;
    }
    clear() {
      this.g = {};
      this.h = {};
    }
  };
  function eg(a) {
    return a instanceof Object ? String(fa(a)) : a + "";
  }
  function gg(a) {
    return new hg({ value: a }, null);
  }
  function ig(a) {
    return new hg(null, a);
  }
  function jg(a) {
    try {
      return gg(a());
    } catch (b) {
      return ig(b);
    }
  }
  function kg(a) {
    return null != a.g ? a.getValue() : null;
  }
  function lg(a, b) {
    null != a.g && b(a.getValue());
    return a;
  }
  function mg(a, b) {
    null != a.g || b(a.h);
    return a;
  }
  class hg {
    constructor(a, b) {
      this.g = a;
      this.h = b;
    }
    getValue() {
      return this.g.value;
    }
    map(a) {
      return null != this.g
        ? ((a = a(this.getValue())), a instanceof hg ? a : gg(a))
        : this;
    }
  }
  const ng = class {
    constructor(a) {
      this.g = new fg();
      if (a) for (var b = 0; b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.g.set(a, !0);
    }
    contains(a) {
      return void 0 !== this.g.g[eg(a)];
    }
  };
  class og {
    constructor() {
      this.g = new fg();
    }
    set(a, b) {
      let c = this.g.get(a);
      c || ((c = new ng()), this.g.set(a, c));
      c.add(b);
    }
  }
  var P = class extends J {
    getId() {
      return E(this, 3);
    }
  };
  P.u = [4];
  class pg {
    constructor({ Ua: a, Lb: b, Tb: c, ob: d }) {
      this.g = b;
      this.j = new cg(a || []);
      this.i = d;
      this.h = c;
    }
  }
  const rg = (a) => {
      const b = [],
        c = a.j;
      c && c.g.length && b.push({ W: "a", ca: qg(c) });
      null != a.g && b.push({ W: "as", ca: a.g });
      null != a.h && b.push({ W: "i", ca: String(a.h) });
      null != a.i && b.push({ W: "rp", ca: String(a.i) });
      b.sort(function (d, e) {
        return d.W.localeCompare(e.W);
      });
      b.unshift({ W: "t", ca: "aa" });
      return b;
    },
    qg = (a) => {
      a = a.g.slice(0).map(sg);
      a = JSON.stringify(a);
      return Zc(a);
    },
    sg = (a) => {
      const b = {};
      null != E(a, 7) && (b.q = E(a, 7));
      null != D(a, 2) && (b.o = D(a, 2));
      null != D(a, 5) && (b.p = D(a, 5));
      return b;
    };
  var tg = class extends J {
    setLocation(a) {
      return u(this, 1, t(a));
    }
  };
  function ug(a) {
    const b = [].slice.call(arguments).filter(pc((e) => null === e));
    if (!b.length) return null;
    let c = [],
      d = {};
    b.forEach((e) => {
      c = c.concat(e.Ja || []);
      d = Object.assign(d, e.Oa);
    });
    return new vg(c, d);
  }
  function wg(a) {
    switch (a) {
      case 1:
        return new vg(null, { google_ad_semantic_area: "mc" });
      case 2:
        return new vg(null, { google_ad_semantic_area: "h" });
      case 3:
        return new vg(null, { google_ad_semantic_area: "f" });
      case 4:
        return new vg(null, { google_ad_semantic_area: "s" });
      default:
        return null;
    }
  }
  function xg(a) {
    if (null == a) var b = null;
    else {
      var c = rg(a);
      a = [];
      for (b of c)
        (c = String(b.ca)),
          a.push(b.W + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
      b = new vg(null, { google_placement_id: a.join("~") });
    }
    return b;
  }
  class vg {
    constructor(a, b) {
      this.Ja = a;
      this.Oa = b;
    }
  }
  const yg = new vg(["google-auto-placed"], {
    google_reactive_ad_format: 40,
    google_tag_origin: "qs",
  });
  var zg = {
    overlays: 1,
    interstitials: 2,
    vignettes: 2,
    inserts: 3,
    immersives: 4,
    list_view: 5,
    full_page: 6,
    side_rails: 7,
  };
  function Ag(a) {
    a.google_reactive_ads_global_state
      ? (null ==
          a.google_reactive_ads_global_state.sideRailProcessedFixedElements &&
          (a.google_reactive_ads_global_state.sideRailProcessedFixedElements =
            new Set()),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace &&
          (a.google_reactive_ads_global_state.sideRailAvailableSpace =
            new Map()),
        null == a.google_reactive_ads_global_state.sideRailPlasParam &&
          (a.google_reactive_ads_global_state.sideRailPlasParam = new Map()))
      : (a.google_reactive_ads_global_state = new Bg());
    return a.google_reactive_ads_global_state;
  }
  class Bg {
    constructor() {
      this.wasPlaTagProcessed = !1;
      this.wasReactiveAdConfigReceived = {};
      this.adCount = {};
      this.wasReactiveAdVisible = {};
      this.stateForType = {};
      this.reactiveTypeEnabledInAsfe = {};
      this.wasReactiveTagRequestSent = !1;
      this.reactiveTypeDisabledByPublisher = {};
      this.tagSpecificState = {};
      this.messageValidationEnabled = !1;
      this.floatingAdsStacking = new Cg();
      this.sideRailProcessedFixedElements = new Set();
      this.sideRailAvailableSpace = new Map();
      this.sideRailPlasParam = new Map();
    }
  }
  var Cg = class {
    constructor() {
      this.maxZIndexRestrictions = {};
      this.nextRestrictionId = 0;
      this.maxZIndexListeners = [];
    }
  };
  var Q = (a) => {
    a = a.document;
    let b = {};
    a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
    return b || {};
  };
  var Dg = (a) => {
      a = a.getBoundingClientRect();
      return 0 < a.width && 0 < a.height;
    },
    Eg = (a) => {
      let b = 0;
      a.forEach((c) => (b = Math.max(b, c.getBoundingClientRect().width)));
      return (c) => c.getBoundingClientRect().width > 0.5 * b;
    },
    Fg = (a) => {
      const b = Q(a).clientHeight || 0;
      return (c) => c.getBoundingClientRect().height >= 0.75 * b;
    },
    Gg = (a, b) =>
      a.getBoundingClientRect().top - b.getBoundingClientRect().top;
  var Hg = class extends J {};
  var Ig = class extends J {
    constructor() {
      super();
    }
  };
  var Jg = class extends J {
    constructor() {
      super();
    }
  };
  Jg.u = [1];
  var Kg = class extends J {
    g() {
      return G(this, 2);
    }
  };
  var Lg = class extends J {};
  var Mg = class extends J {};
  var Ng = class extends J {
    g() {
      return C(this, Mg, 1);
    }
  };
  Ng.u = [1];
  var Og = class extends J {};
  var Pg = class extends J {};
  var Qg = class extends J {};
  Qg.u = [6, 7, 9, 10, 11];
  function Rg(a) {
    var b = [];
    dg(a.getElementsByTagName("p"), function (c) {
      100 <= Sg(c) && b.push(c);
    });
    return b;
  }
  function Sg(a) {
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = 0;
    dg(a.childNodes, function (c) {
      b += Sg(c);
    });
    return b;
  }
  function Tg(a) {
    return 0 == a.length || isNaN(a[0])
      ? a
      : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function Ug(a, b) {
    if (null == a.g) return b;
    switch (a.g) {
      case 1:
        return b.slice(1);
      case 2:
        return b.slice(0, b.length - 1);
      case 3:
        return b.slice(1, b.length - 1);
      case 0:
        return b;
      default:
        throw Error("Unknown ignore mode: " + a.g);
    }
  }
  const Vg = class {
    constructor(a, b, c, d) {
      this.j = a;
      this.h = b;
      this.i = c;
      this.g = d;
    }
    query(a) {
      var b = [];
      try {
        b = a.querySelectorAll(this.j);
      } catch (f) {}
      if (!b.length) return [];
      a = Ta(b);
      a = Ug(this, a);
      "number" === typeof this.h &&
        ((b = this.h),
        0 > b && (b += a.length),
        (a = 0 <= b && b < a.length ? [a[b]] : []));
      if ("number" === typeof this.i) {
        b = [];
        for (var c = 0; c < a.length; c++) {
          var d = Rg(a[c]),
            e = this.i;
          0 > e && (e += d.length);
          0 <= e && e < d.length && b.push(d[e]);
        }
        a = b;
      }
      return a;
    }
    toString() {
      return JSON.stringify({
        nativeQuery: this.j,
        occurrenceIndex: this.h,
        paragraphIndex: this.i,
        ignoreMode: this.g,
      });
    }
  };
  function Wg(a) {
    if (1 != a.nodeType) var b = !1;
    else if ((b = "INS" == a.tagName))
      a: {
        b = ["adsbygoogle-placeholder"];
        a = a.className ? a.className.split(/\s+/) : [];
        for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
        for (d = 0; d < b.length; ++d)
          if (!c[b[d]]) {
            b = !1;
            break a;
          }
        b = !0;
      }
    return b;
  }
  var R = class {
      constructor(a, b = !1) {
        this.g = a;
        this.defaultValue = b;
      }
    },
    Xg = class {
      constructor(a, b = 0) {
        this.g = a;
        this.defaultValue = b;
      }
    };
  var Yg = new R(1082, !0),
    Zg = new R(1271),
    $g = new Xg(1130, 100),
    ah = new (class {
      constructor(a, b = "") {
        this.g = a;
        this.defaultValue = b;
      }
    })(14),
    bh = new R(1247, !0),
    ch = new R(1272),
    dh = new R(316),
    eh = new R(1207, !0),
    fh = new R(313),
    gh = new R(369),
    hh = new R(1230),
    ih = new R(1229),
    jh = new R(1231),
    kh = new R(1171, !0),
    lh = new R(217),
    mh = new Xg(542281105, -1),
    nh = new R(534095582),
    oh = new R(1120),
    ph = new R(522099048),
    qh = new R(529362570),
    rh = new R(506914611),
    sh = new R(501545959, !0),
    th = new R(542187945),
    uh = new Xg(1079, 5),
    vh = new (class {
      constructor(a, b = []) {
        this.g = a;
        this.defaultValue = b;
      }
    })(1934, [
      "A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
      "A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
      "A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf/RP0paks+RoTYbXHxceT/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
      "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
      "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
    ]),
    wh = new R(203),
    xh = new R(84);
  var yh = class {
    constructor() {
      const a = {};
      this.g = (b, c) => (null != a[b] ? a[b] : c);
      this.h = (b, c) => (null != a[b] ? a[b] : c);
      this.i = (b, c) => (null != a[b] ? a[b] : c);
      this.j = (b, c) => (null != a[b] ? a[b] : c);
      this.l = () => {};
    }
  };
  function S(a) {
    return N(yh).g(a.g, a.defaultValue);
  }
  function zh(a) {
    return N(yh).h(a.g, a.defaultValue);
  }
  function Ah() {
    return N(yh).i(ah.g, ah.defaultValue);
  }
  function Bh(a, b, c) {
    switch (c) {
      case 0:
        b.parentNode && b.parentNode.insertBefore(a, b);
        break;
      case 3:
        if ((c = b.parentNode)) {
          var d = b.nextSibling;
          if (d && d.parentNode != c)
            for (; d && 8 == d.nodeType; ) d = d.nextSibling;
          c.insertBefore(a, d);
        }
        break;
      case 1:
        b.insertBefore(a, b.firstChild);
        break;
      case 2:
        b.appendChild(a);
    }
    Wg(b) &&
      (b.setAttribute("data-init-display", b.style.display),
      (b.style.display = "block"));
  }
  function Ch(a, b) {
    const c = (e) => {
        e = Dh(e);
        return null == e ? !1 : 0 < e;
      },
      d = (e) => {
        e = Dh(e);
        return null == e ? !1 : 0 > e;
      };
    switch (b) {
      case 0:
        return {
          init: Eh(a.previousSibling, c),
          ha: (e) => Eh(e.previousSibling, c),
          ma: 0,
        };
      case 2:
        return {
          init: Eh(a.lastChild, c),
          ha: (e) => Eh(e.previousSibling, c),
          ma: 0,
        };
      case 3:
        return {
          init: Eh(a.nextSibling, d),
          ha: (e) => Eh(e.nextSibling, d),
          ma: 3,
        };
      case 1:
        return {
          init: Eh(a.firstChild, d),
          ha: (e) => Eh(e.nextSibling, d),
          ma: 3,
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  function Dh(a) {
    return a.hasOwnProperty("google-ama-order-assurance")
      ? a["google-ama-order-assurance"]
      : null;
  }
  function Eh(a, b) {
    return a && b(a) ? a : null;
  }
  var Fh = { rectangle: 1, horizontal: 2, vertical: 4 };
  var Gh = (a) => {
    if (a == a.top) return 0;
    for (; a && a != a.top && Qc(a); a = a.parent) {
      if (a.sf_) return 2;
      if (a.$sf) return 3;
      if (a.inGptIF) return 4;
      if (a.inDapIF) return 5;
    }
    return 1;
  };
  var Hh = (a, b) => {
    do {
      const c = Uc(a, b);
      if (c && "fixed" == c.position) return !1;
    } while ((a = a.parentElement));
    return !0;
  };
  function Ih(a, b) {
    var c = ["width", "height"];
    for (let e = 0; e < c.length; e++) {
      const f = "google_ad_" + c[e];
      if (!b.hasOwnProperty(f)) {
        var d = L(a[c[e]]);
        d = null === d ? null : Math.round(d);
        null != d && (b[f] = d);
      }
    }
  }
  var Jh = (a, b) =>
      !(
        (bd.test(b.google_ad_width) || ad.test(a.style.width)) &&
        (bd.test(b.google_ad_height) || ad.test(a.style.height))
      ),
    Lh = (a, b) => ((a = Kh(a, b)) ? a.y : 0),
    Kh = (a, b) => {
      try {
        const c = b.document.documentElement.getBoundingClientRect(),
          d = a.getBoundingClientRect();
        return { x: d.left - c.left, y: d.top - c.top };
      } catch (c) {
        return null;
      }
    },
    Mh = (a) => {
      let b = 0;
      for (let c in Fh) -1 != a.indexOf(c) && (b |= Fh[c]);
      return b;
    },
    Nh = (a, b, c, d, e) => {
      if (a !== a.top) return Rc(a) ? 3 : 16;
      if (!(488 > Q(a).clientWidth)) return 4;
      if (!(a.innerHeight >= a.innerWidth)) return 5;
      const f = Q(a).clientWidth;
      if (!f || (f - c) / f > d) a = 6;
      else {
        if ((c = "true" != e.google_full_width_responsive))
          a: {
            c = b.parentElement;
            for (b = Q(a).clientWidth; c; c = c.parentElement)
              if (
                (d = Uc(c, a)) &&
                (e = L(d.width)) &&
                !(e >= b) &&
                "visible" != d.overflow
              ) {
                c = !0;
                break a;
              }
            c = !1;
          }
        a = c ? 7 : !0;
      }
      return a;
    },
    Oh = (a, b, c, d) => {
      const e = Nh(b, c, a, 0.3, d);
      !0 !== e
        ? (a = e)
        : "true" == d.google_full_width_responsive || Hh(c, b)
        ? ((b = Q(b).clientWidth),
          (a = b - a),
          (a = b && 0 <= a ? !0 : b ? (-10 > a ? 11 : 0 > a ? 14 : 12) : 10))
        : (a = 9);
      return a;
    },
    Ph = (a, b, c) => {
      a = a.style;
      "rtl" == b ? (a.marginRight = c) : (a.marginLeft = c);
    };
  const Qh = (a, b) => {
      if (3 == b.nodeType) return /\S/.test(b.data);
      if (1 == b.nodeType) {
        if (/^(script|style)$/i.test(b.nodeName)) return !1;
        let c;
        try {
          c = Uc(b, a);
        } catch (d) {}
        return (
          !c ||
          ("none" != c.display &&
            !(
              "absolute" == c.position &&
              ("hidden" == c.visibility || "collapse" == c.visibility)
            ))
        );
      }
      return !1;
    },
    Rh = (a, b, c) => {
      a = Kh(b, a);
      return "rtl" == c ? -a.x : a.x;
    };
  var Sh = (a, b) => {
    var c;
    c = (c = b.parentElement) ? ((c = Uc(c, a)) ? c.direction : "") : "";
    if (c) {
      b.style.border =
        b.style.borderStyle =
        b.style.outline =
        b.style.outlineStyle =
        b.style.transition =
          "none";
      b.style.borderSpacing = b.style.padding = "0";
      Ph(b, c, "0px");
      b.style.width = Q(a).clientWidth + "px";
      if (0 !== Rh(a, b, c)) {
        Ph(b, c, "0px");
        var d = Rh(a, b, c);
        Ph(b, c, -1 * d + "px");
        a = Rh(a, b, c);
        0 !== a && a !== d && Ph(b, c, (d / (a - d)) * d + "px");
      }
      b.style.zIndex = 30;
    }
  };
  var Th = class {
    constructor(a, b) {
      this.L = a;
      this.i = b;
    }
    height() {
      return this.i;
    }
    g(a) {
      return 300 < a && 300 < this.i ? this.L : Math.min(1200, Math.round(a));
    }
    h() {}
  };
  var Uh = (a, b, c, d = (e) => e) => {
      let e;
      return (
        (a.style && a.style[c] && d(a.style[c])) ||
        ((e = Uc(a, b)) && e[c] && d(e[c])) ||
        null
      );
    },
    Vh = (a) => (b) => b.L <= a,
    Yh = (a, b, c, d) => {
      const e = a && Wh(c, b),
        f = Xh(b, d);
      return (g) => !(e && g.height() >= f);
    },
    Zh = (a) => (b) => b.height() <= a,
    Wh = (a, b) => Lh(a, b) < Q(b).clientHeight - 100,
    $h = (a, b) => {
      var c = Uh(b, a, "height", L);
      if (c) return c;
      var d = b.style.height;
      b.style.height = "inherit";
      c = Uh(b, a, "height", L);
      b.style.height = d;
      if (c) return c;
      c = Infinity;
      do
        (d = b.style && L(b.style.height)) && (c = Math.min(c, d)),
          (d = Uh(b, a, "maxHeight", L)) && (c = Math.min(c, d));
      while ((b = b.parentElement) && "HTML" != b.tagName);
      return c;
    };
  const Xh = (a, b) => {
    const c = 0 == yd(a);
    return b && c ? Math.max(250, (2 * Q(a).clientHeight) / 3) : 250;
  };
  var ai = {
    google_ad_channel: !0,
    google_ad_client: !0,
    google_ad_host: !0,
    google_ad_host_channel: !0,
    google_adtest: !0,
    google_tag_for_child_directed_treatment: !0,
    google_tag_for_under_age_of_consent: !0,
    google_tag_partner: !0,
    google_restrict_data_processing: !0,
    google_page_url: !0,
    google_debug_params: !0,
    google_shadow_mode: !0,
    google_adbreak_test: !0,
    google_ad_frequency_hint: !0,
    google_admob_interstitial_slot: !0,
    google_admob_rewarded_slot: !0,
    google_admob_ads_only: !0,
    google_max_ad_content_rating: !0,
    google_traffic_source: !0,
  };
  const bi = RegExp("(^| )adsbygoogle($| )");
  function ci(a, b) {
    for (let c = 0; c < b.length; c++) {
      const d = b[c],
        e = Hc(d.Vb);
      a[e] = d.value;
    }
  }
  class di {
    constructor() {
      var a = wd`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
      this.g = null;
      this.i = !1;
      this.l = Math.random();
      this.h = this.H;
      this.A = a;
    }
    va(a) {
      this.g = a;
    }
    j(a) {
      this.i = a;
    }
    Pa(a) {
      this.h = a;
    }
    H(a, b, c = 0.01, d, e = "jserror") {
      if ((this.i ? this.l : Math.random()) > c) return !1;
      Cd(b) || (b = new Bd(b, { context: a, id: e }));
      if (d || this.g) (b.meta = {}), this.g && this.g(b.meta), d && d(b.meta);
      n.google_js_errors = n.google_js_errors || [];
      n.google_js_errors.push(b);
      n.error_rep_loaded || (Sc(n.document, this.A), (n.error_rep_loaded = !0));
      return !1;
    }
    da(a, b, c) {
      try {
        return b();
      } catch (d) {
        if (!this.h(a, d, 0.01, c, "jserror")) throw d;
      }
    }
    na(a, b) {
      return (...c) => this.da(a, () => b.apply(void 0, c));
    }
    Z(a, b) {
      b.catch((c) => {
        c = c ? c : "unknown rejection";
        this.H(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0);
      });
    }
  }
  const ei = (a, b) => {
    b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
    2048 > b.length && b.push(a);
  };
  var fi = (a, b, c, d, e = !1) => {
      const f = d || window,
        g = "undefined" !== typeof queueMicrotask;
      return function () {
        e &&
          g &&
          queueMicrotask(() => {
            f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
            f.google_rum_task_id_counter += 1;
          });
        const h = Sd();
        let k,
          m = 3;
        try {
          k = b.apply(this, arguments);
        } catch (l) {
          m = 13;
          if (!c) throw l;
          c(a, l);
        } finally {
          f.google_measure_js_timing &&
            h &&
            ei(
              {
                label: a.toString(),
                value: h,
                duration: (Sd() || 0) - h,
                type: m,
                ...(e &&
                  g && {
                    taskId: (f.google_rum_task_id_counter =
                      f.google_rum_task_id_counter || 1),
                  }),
              },
              f
            );
        }
        return k;
      };
    },
    gi = (a, b) =>
      fi(
        a,
        b,
        (c, d) => {
          new di().H(c, d);
        },
        void 0,
        !1
      );
  function hi(a, b, c) {
    return fi(a, b, void 0, c, !0).apply();
  }
  function ii(a) {
    if (!a) return null;
    var b = E(a, 7);
    if (E(a, 1) || a.getId() || 0 < zb(a, 4, sb).length) {
      b = zb(a, 4, sb);
      var c = E(a, 3),
        d = E(a, 1),
        e = "";
      d && (e += d);
      c && (e += "#" + Tg(c));
      if (b) for (c = 0; c < b.length; c++) e += "." + Tg(b[c]);
      a = (b = e) ? new Vg(b, D(a, 2), D(a, 5), ji(F(a, 6))) : null;
    } else a = b ? new Vg(b, D(a, 2), D(a, 5), ji(F(a, 6))) : null;
    return a;
  }
  var ki = { 1: 1, 2: 2, 3: 3, 0: 0 };
  function ji(a) {
    return null == a ? a : ki[a];
  }
  var li = { 1: 0, 2: 1, 3: 2, 4: 3 };
  function mi(a) {
    return (a.google_ama_state = a.google_ama_state || {});
  }
  function ni(a) {
    a = mi(a);
    return (a.optimization = a.optimization || {});
  }
  var oi = ic(class extends J {});
  var pi = (a) => {
    switch (F(a, 8)) {
      case 1:
      case 2:
        if (null == a) var b = null;
        else
          (b = B(a, P, 1)),
            null == b
              ? (b = null)
              : ((a = F(a, 2)),
                (b = null == a ? null : new pg({ Ua: [b], ob: a })));
        return null != b
          ? gg(b)
          : ig(Error("Missing dimension when creating placement id"));
      case 3:
        return ig(Error("Missing dimension when creating placement id"));
      default:
        return ig(Error("Invalid type: " + F(a, 8)));
    }
  };
  var qi = class extends J {};
  var ri = class extends J {};
  var si = class extends J {
    g() {
      return yb(this, 23);
    }
  };
  var ti = class extends J {};
  var ui = class extends J {};
  var vi = class extends J {};
  var wi = class extends J {};
  var xi = class extends J {};
  var yi = class extends J {
      getName() {
        return E(this, 4);
      }
    },
    zi = [1, 2, 3];
  var Ai = class extends J {};
  Ai.u = [2, 5, 6, 11];
  var Bi = class extends J {};
  var Di = class extends J {
      g() {
        return Rb(this, Bi, 2, Ci);
      }
    },
    Ci = [1, 2];
  var Ei = class extends J {
    g() {
      return B(this, Di, 3);
    }
  };
  Ei.u = [1, 4];
  var Fi = class extends J {},
    Gi = ic(Fi);
  Fi.u = [1, 2, 5, 7];
  var Hi = (a, b) => {
    const c = [];
    let d = a;
    for (
      a = () => {
        c.push({ anchor: d.anchor, position: d.position });
        return d.anchor == b.anchor && d.position == b.position;
      };
      d;

    ) {
      switch (d.position) {
        case 1:
          if (a()) return c;
          d.position = 2;
        case 2:
          if (a()) return c;
          if (d.anchor.firstChild) {
            d = { anchor: d.anchor.firstChild, position: 1 };
            continue;
          } else d.position = 3;
        case 3:
          if (a()) return c;
          d.position = 4;
        case 4:
          if (a()) return c;
      }
      for (
        ;
        d &&
        !d.anchor.nextSibling &&
        d.anchor.parentNode != d.anchor.ownerDocument.body;

      ) {
        d = { anchor: d.anchor.parentNode, position: 3 };
        if (a()) return c;
        d.position = 4;
        if (a()) return c;
      }
      d && d.anchor.nextSibling
        ? (d = { anchor: d.anchor.nextSibling, position: 1 })
        : (d = null);
    }
    return c;
  };
  function Ii(a, b) {
    const c = new og(),
      d = new ng();
    b.forEach((e) => {
      if (Rb(e, wi, 1, zi)) {
        e = Rb(e, wi, 1, zi);
        if (
          B(e, Og, 1) &&
          B(B(e, Og, 1), P, 1) &&
          B(e, Og, 2) &&
          B(B(e, Og, 2), P, 1)
        ) {
          const g = Ji(a, B(B(e, Og, 1), P, 1)),
            h = Ji(a, B(B(e, Og, 2), P, 1));
          if (g && h)
            for (var f of Hi(
              { anchor: g, position: F(B(e, Og, 1), 2) },
              { anchor: h, position: F(B(e, Og, 2), 2) }
            ))
              c.set(fa(f.anchor), f.position);
        }
        B(e, Og, 3) &&
          B(B(e, Og, 3), P, 1) &&
          (f = Ji(a, B(B(e, Og, 3), P, 1))) &&
          c.set(fa(f), F(B(e, Og, 3), 2));
      } else
        Rb(e, xi, 2, zi)
          ? Ki(a, Rb(e, xi, 2, zi), c)
          : Rb(e, vi, 3, zi) && Li(a, Rb(e, vi, 3, zi), d);
    });
    return new Mi(c, d);
  }
  class Mi {
    constructor(a, b) {
      this.h = a;
      this.g = b;
    }
  }
  const Ki = (a, b, c) => {
      B(b, Og, 2)
        ? ((b = B(b, Og, 2)), (a = Ji(a, B(b, P, 1))) && c.set(fa(a), F(b, 2)))
        : B(b, P, 1) &&
          (a = Ni(a, B(b, P, 1))) &&
          a.forEach((d) => {
            d = fa(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3);
          });
    },
    Li = (a, b, c) => {
      B(b, P, 1) &&
        (a = Ni(a, B(b, P, 1))) &&
        a.forEach((d) => {
          c.add(fa(d));
        });
    },
    Ji = (a, b) => ((a = Ni(a, b)) && 0 < a.length ? a[0] : null),
    Ni = (a, b) => ((b = ii(b)) ? b.query(a) : null);
  class T extends Error {
    constructor(a = "") {
      super();
      this.name = "TagError";
      this.message = a ? "adsbygoogle.push() error: " + a : "";
      Error.captureStackTrace
        ? Error.captureStackTrace(this, T)
        : (this.stack = Error().stack || "");
    }
  }
  let Oi, U;
  const Pi = new Zd(n);
  var Qi = (a) => {
    null != a && (n.google_measure_js_timing = a);
    n.google_measure_js_timing || Yd(Pi);
  };
  ((a) => {
    Oi = a || new Od();
    "number" !== typeof n.google_srt && (n.google_srt = Math.random());
    Md(Oi, n.google_srt);
    U = new ae(Oi, Pi);
    U.j(!0);
    "complete" == n.document.readyState
      ? Qi()
      : Pi.g &&
        sc(n, "load", () => {
          Qi();
        });
  })();
  var Ri = (a, b, c) => U.da(a, b, c),
    Si = (a, b, c) => {
      const d = N(Tf).g();
      !b.eid && d.length && (b.eid = d.toString());
      Nd(Oi, a, b, !0, c);
    },
    Ti = (a, b) => {
      U.Z(a, b);
    },
    Ui = (a, b, c, d) => {
      let e;
      Cd(b) ? (e = b.msg || $d(b.error)) : (e = $d(b));
      return 0 == e.indexOf("TagError")
        ? ((c = b instanceof Bd ? b.error : b),
          c.pbr || ((c.pbr = !0), U.H(a, b, 0.1, d, "puberror")),
          !1)
        : U.H(a, b, c, d);
    };
  var Vi = class {
    constructor() {
      this.g = id();
      this.h = 0;
    }
  };
  function Wi(a, b, c) {
    switch (c) {
      case 2:
      case 3:
        break;
      case 1:
      case 4:
        b = b.parentElement;
        break;
      default:
        throw Error("Unknown RelativePosition: " + c);
    }
    for (c = []; b; ) {
      if (Xi(b)) return !0;
      if (a.g.has(b)) break;
      c.push(b);
      b = b.parentElement;
    }
    c.forEach((d) => a.g.add(d));
    return !1;
  }
  function Yi(a) {
    a = Zi(a);
    return a.has("all") || a.has("after");
  }
  function $i(a) {
    a = Zi(a);
    return a.has("all") || a.has("before");
  }
  function Zi(a) {
    return (a = a && a.getAttribute("data-no-auto-ads"))
      ? new Set(a.split("|"))
      : new Set();
  }
  function Xi(a) {
    const b = Zi(a);
    return (
      a &&
      ("AUTO-ADS-EXCLUSION-AREA" === a.tagName ||
        b.has("inside") ||
        b.has("all"))
    );
  }
  var aj = class {
    constructor() {
      this.g = new Set();
      this.h = new Vi();
    }
  };
  function bj(a, b) {
    if (!a) return !1;
    a = Uc(a, b);
    if (!a) return !1;
    a = a.cssFloat || a.styleFloat;
    return "left" == a || "right" == a;
  }
  function cj(a) {
    for (a = a.previousSibling; a && 1 != a.nodeType; ) a = a.previousSibling;
    return a ? a : null;
  }
  function dj(a) {
    return !!a.nextSibling || (!!a.parentNode && dj(a.parentNode));
  }
  function ej(a, b) {
    if (!a) return !1;
    a = a.hash;
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = fj(b);
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
  }
  function fj(a) {
    let b = "";
    K(a.split("_"), (c) => {
      b += c.substr(0, 2);
    });
    return b;
  }
  function gj(a = null) {
    ({ googletag: a } = a ?? window);
    return a?.apiReady ? a : void 0;
  }
  const hj = (a) => {
    const b = gj(a);
    return b
      ? Na(
          Oa(b.pubads().getSlots(), (c) =>
            a.document.getElementById(c.getSlotElementId())
          ),
          (c) => null != c
        )
      : null;
  };
  var ij = (a) => {
    const b = [];
    for (const c of a) {
      a = !0;
      for (let d = 0; d < b.length; d++) {
        const e = b[d];
        if (e.contains(c)) {
          a = !1;
          break;
        }
        if (c.contains(e)) {
          a = !1;
          b[d] = c;
          break;
        }
      }
      a && b.push(c);
    }
    return b;
  };
  function jj(a, b) {
    if (a.j) return !0;
    a.j = !0;
    const c = C(a.h, Qg, 1);
    a.i = 0;
    const d = kj(a.B);
    if (ej(a.g.location, "google_audio_sense")) {
      var e = new Lg();
      e = u(e, 1, t(1));
      var f = new Kg();
      f = Pb(f, 2, !0);
      e = Lb(e, 2, f);
      f = new Jg();
      var g = new Hg(),
        h = u(g, 1, t(1));
      g = f.s;
      var k = g[r];
      nb(k);
      var m = Kb(g, k, Hg, 1, 2);
      h = null != h ? h : new Hg();
      m.push(h);
      (h.s[r] | 0) & 2 && (m[r] &= -9);
      k & 512 && (g[r] = k & -513);
      g = new Ig();
      g = Pb(g, 1, !0);
      f = Lb(f, 2, g);
      e = Lb(e, 3, f);
    } else e = B(a.h, Lg, 27);
    if ((f = e))
      if (
        ((g = B(a.h, Ng, 6)?.g() || []),
        (e = a.g),
        1 == I(f, 1) && B(f, Kg, 2)?.g() && 0 != g.length)
      ) {
        var l;
        f = [];
        for (l of g)
          if ((g = ii(B(l, P, 1) || null)))
            (g = g.query(e.document)), 0 < g.length && f.push(g[0]);
        f = f.filter(Dg).filter(Eg(f)).filter(Fg(e));
        f.sort(Gg);
        if ((l = f[0] || null))
          (f = e.document.createElement("div")),
            (f.id = "google-auto-placed-read-aloud-player-reserved"),
            fd(f, { width: "100%", height: "65px" }),
            l.insertBefore(f, l.firstChild),
            (mi(e).audioSenseSpaceReserved = !0);
      }
    l = a.g;
    var q;
    try {
      var w = (q = l.localStorage.getItem("google_ama_settings"))
        ? oi(q)
        : null;
    } catch (x) {
      w = null;
    }
    q = null !== w && G(w, 2, !1);
    w = mi(l);
    q && ((w.eatf = !0), sd(7, [!0, 0, !1]));
    b: {
      f = { eb: !1, fb: !1 };
      k = Ta(l.document.querySelectorAll(".google-auto-placed"));
      m = Ta(
        l.document.querySelectorAll(
          "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"
        )
      );
      h = Ta(
        l.document.querySelectorAll(
          "ins.adsbygoogle[data-ad-format=autorelaxed]"
        )
      );
      g = (
        hj(l) || Ta(l.document.querySelectorAll("div[id^=div-gpt-ad]"))
      ).concat(
        Ta(l.document.querySelectorAll("iframe[id^=google_ads_iframe]"))
      );
      const x = Ta(
          l.document.querySelectorAll(
            "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"
          )
        ),
        z = Ta(l.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
        Ba = Ta(l.document.querySelectorAll("div.googlepublisherpluginad")),
        V = Ta(l.document.querySelectorAll("html > ins.adsbygoogle"));
      e = [].concat(
        Ta(
          l.document.querySelectorAll(
            "iframe[id^=aswift_],iframe[id^=google_ads_frame]"
          )
        ),
        Ta(l.document.querySelectorAll("body ins.adsbygoogle"))
      );
      q = [];
      for (const [Ca, ta] of [
        [f.Ob, k],
        [f.eb, m],
        [f.Rb, h],
        [f.Pb, g],
        [f.Sb, x],
        [f.Nb, z],
        [f.Qb, Ba],
        [f.fb, V],
      ])
        (f = ta), !1 === Ca ? (q = q.concat(f)) : (e = e.concat(f));
      e = ij(e);
      q = ij(q);
      e = e.slice(0);
      for (v of q)
        for (q = 0; q < e.length; q++)
          (v.contains(e[q]) || e[q].contains(v)) && e.splice(q, 1);
      var v = e;
      q = Q(l).clientHeight;
      for (l = 0; l < v.length; l++)
        if (!(v[l].getBoundingClientRect().top > q)) {
          v = !0;
          break b;
        }
      v = !1;
    }
    v = v ? (w.eatfAbg = !0) : !1;
    if (v) return !0;
    v = new ng([2]);
    for (w = 0; w < c.length; w++) {
      q = a;
      e = c[w];
      l = w;
      f = b;
      g = d;
      k = v;
      if (
        B(e, tg, 4) &&
        k.contains(F(B(e, tg, 4), 1)) &&
        1 === F(e, 8) &&
        lj(e, g)
      ) {
        q.i++;
        if ((f = mj(q, e, f, g)))
          (g = mi(q.g)),
            g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0),
            B(e, P, 1) &&
              null != D(B(e, P, 1), 5) &&
              (g.numPostPlacementsPlaced
                ? g.numPostPlacementsPlaced++
                : (g.numPostPlacementsPlaced = 1)),
            null == g.placed && (g.placed = []),
            g.numAutoAdsPlaced++,
            g.placed.push({ index: l, element: f.ga }),
            sd(7, [!1, q.i, !0]);
        q = f;
      } else q = null;
      if (q) return !0;
    }
    sd(7, [!1, a.i, !1]);
    return !1;
  }
  function mj(a, b, c, d) {
    if (!lj(b, d) || 1 != F(b, 8)) return null;
    d = B(b, P, 1);
    if (!d) return null;
    d = ii(d);
    if (!d) return null;
    d = d.query(a.g.document);
    if (0 == d.length) return null;
    d = d[0];
    var e = li[F(b, 2)];
    e = void 0 === e ? null : e;
    var f;
    if (!(f = null == e)) {
      a: {
        f = a.g;
        switch (e) {
          case 0:
            f = bj(cj(d), f);
            break a;
          case 3:
            f = bj(d, f);
            break a;
          case 2:
            var g = d.lastChild;
            f = bj(g ? (1 == g.nodeType ? g : cj(g)) : null, f);
            break a;
        }
        f = !1;
      }
      if ((c = !f && !(!c && 2 == e && !dj(d))))
        (c = 1 == e || 2 == e ? d : d.parentNode),
          (c = !(c && !Wg(c) && 0 >= c.offsetWidth));
      f = !c;
    }
    if (!(c = f)) {
      c = a.A;
      f = F(b, 2);
      g = fa(d);
      g = c.h.g.get(g);
      if (!(g = g ? g.contains(f) : !1))
        a: {
          if (c.g.contains(fa(d)))
            switch (f) {
              case 2:
              case 3:
                g = !0;
                break a;
              default:
                g = !1;
                break a;
            }
          for (f = d.parentElement; f; ) {
            if (c.g.contains(fa(f))) {
              g = !0;
              break a;
            }
            f = f.parentElement;
          }
          g = !1;
        }
      c = g;
    }
    if (!c) {
      c = a.v;
      g = F(b, 2);
      a: switch (g) {
        case 1:
          f = Yi(d.previousElementSibling) || $i(d);
          break a;
        case 4:
          f = Yi(d) || $i(d.nextElementSibling);
          break a;
        case 2:
          f = $i(d.firstElementChild);
          break a;
        case 3:
          f = Yi(d.lastElementChild);
          break a;
        default:
          throw Error("Unknown RelativePosition: " + g);
      }
      g = Wi(c, d, g);
      c = c.h;
      Si(
        "ama_exclusion_zone",
        {
          typ: f ? (g ? "siuex" : "siex") : g ? "suex" : "noex",
          cor: c.g,
          num: c.h++,
          dvc: ed(),
        },
        0.1
      );
      c = f || g;
    }
    if (c) return null;
    f = B(b, Pg, 3);
    c = {};
    f && ((c.Ra = E(f, 1)), (c.Ia = E(f, 2)), (c.Xa = !!yb(f, 3)));
    f = B(b, tg, 4) && F(B(b, tg, 4), 2) ? F(B(b, tg, 4), 2) : null;
    f = wg(f);
    g = null != D(b, 12) ? D(b, 12) : null;
    g = null == g ? null : new vg(null, { google_ml_rank: g });
    b = nj(a, b);
    b = ug(a.l, f, g, b);
    f = a.g;
    a = a.F;
    var h = f.document,
      k = c.Xa || !1;
    g = new Jc(h).createElement("DIV");
    const m = g.style;
    m.width = "100%";
    m.height = "auto";
    m.clear = k ? "both" : "none";
    k = g.style;
    k.textAlign = "center";
    c.mb && ci(k, c.mb);
    h = new Jc(h).createElement("INS");
    k = h.style;
    k.display = "block";
    k.margin = "auto";
    k.backgroundColor = "transparent";
    c.Ra && (k.marginTop = c.Ra);
    c.Ia && (k.marginBottom = c.Ia);
    c.Ta && ci(k, c.Ta);
    g.appendChild(h);
    c = { ra: g, ga: h };
    c.ga.setAttribute("data-ad-format", "auto");
    g = [];
    if ((h = b && b.Ja)) c.ra.className = h.join(" ");
    h = c.ga;
    h.className = "adsbygoogle";
    h.setAttribute("data-ad-client", a);
    g.length && h.setAttribute("data-ad-channel", g.join("+"));
    a: {
      try {
        var l = c.ra;
        if (S(fh)) {
          {
            const z = Ch(d, e);
            if (z.init) {
              var q = z.init;
              for (d = q; (d = z.ha(d)); ) q = d;
              var w = { anchor: q, position: z.ma };
            } else w = { anchor: d, position: e };
          }
          l["google-ama-order-assurance"] = 0;
          Bh(l, w.anchor, w.position);
        } else Bh(l, d, e);
        b: {
          var v = c.ga;
          v.dataset.adsbygoogleStatus = "reserved";
          v.className += " adsbygoogle-noablate";
          l = { element: v };
          var x = b && b.Oa;
          if (v.hasAttribute("data-pub-vars")) {
            try {
              x = JSON.parse(v.getAttribute("data-pub-vars"));
            } catch (z) {
              break b;
            }
            v.removeAttribute("data-pub-vars");
          }
          x && (l.params = x);
          (f.adsbygoogle = f.adsbygoogle || []).push(l);
        }
      } catch (z) {
        (v = c.ra) &&
          v.parentNode &&
          ((x = v.parentNode),
          x.removeChild(v),
          Wg(x) &&
            (x.style.display = x.getAttribute("data-init-display") || "none"));
        v = !1;
        break a;
      }
      v = !0;
    }
    return v ? c : null;
  }
  function nj(a, b) {
    return kg(
      mg(pi(b).map(xg), (c) => {
        mi(a.g).exception = c;
      })
    );
  }
  const pj = class {
    constructor(a, b, c, d, e) {
      this.g = a;
      this.F = b;
      this.h = c;
      this.l = e || null;
      this.A = (this.B = d) ? Ii(a.document, C(d, yi, 5)) : Ii(a.document, []);
      this.v = new aj();
      this.i = 0;
      this.j = !1;
    }
  };
  function kj(a) {
    const b = {};
    a &&
      zb(a, 6, qb).forEach((c) => {
        b[c] = !0;
      });
    return b;
  }
  function lj(a, b) {
    return a && void 0 !== Jb(a, tg, 4, !1) && b[F(B(a, tg, 4), 2)] ? !1 : !0;
  }
  var qj = ic(class extends J {});
  function rj(a) {
    try {
      var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null;
    } catch (d) {
      b = null;
    }
    const c = b;
    return c ? jg(() => qj(c)) : gg(null);
  }
  function sj() {
    if (tj) return tj;
    const a = vd() || window,
      b = a.google_persistent_state_async;
    return null != b &&
      "object" == typeof b &&
      null != b.S &&
      "object" == typeof b.S
      ? (tj = b)
      : (a.google_persistent_state_async = tj = new uj());
  }
  function vj(a) {
    return wj[a] || "google_ps_" + a;
  }
  function xj(a, b, c) {
    b = vj(b);
    a = a.S;
    const d = a[b];
    return void 0 === d ? ((a[b] = c()), a[b]) : d;
  }
  function yj(a, b, c) {
    return xj(a, b, () => c);
  }
  class uj {
    constructor() {
      this.S = {};
    }
  }
  var tj = null;
  const wj = {
    [8]: "google_prev_ad_formats_by_region",
    [9]: "google_prev_ad_slotnames_by_region",
  };
  function zj(a) {
    this.g = a || { cookie: "" };
  }
  zj.prototype.set = function (a, b, c) {
    let d,
      e,
      f,
      g = !1,
      h;
    "object" === typeof c &&
      ((h = c.Wb),
      (g = c.Xb || !1),
      (f = c.domain || void 0),
      (e = c.path || void 0),
      (d = c.kb));
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.g.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (e ? ";path=" + e : "") +
      (0 > d
        ? ""
        : 0 == d
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + 1e3 * d).toUTCString()) +
      (g ? ";secure" : "") +
      (null != h ? ";samesite=" + h : "");
  };
  zj.prototype.get = function (a, b) {
    const c = a + "=",
      d = (this.g.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
      f = qa(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  zj.prototype.isEmpty = function () {
    return !this.g.cookie;
  };
  zj.prototype.clear = function () {
    var a = (this.g.cookie || "").split(";");
    const b = [];
    var c = [];
    let d, e;
    for (let f = 0; f < a.length; f++)
      (e = qa(a[f])),
        (d = e.indexOf("=")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (c = b.length - 1; 0 <= c; c--)
      (a = b[c]),
        this.get(a),
        this.set(a, "", { kb: 0, path: void 0, domain: void 0 });
  };
  function Aj(a, b = window) {
    if (G(a, 5))
      try {
        return b.localStorage;
      } catch {}
    return null;
  }
  function Bj(a) {
    var b = new Cj();
    return Pb(b, 5, a);
  }
  var Cj = class extends J {
    constructor() {
      super();
    }
  };
  Cj.u = [10];
  const Dj = (a) => {
    void 0 !== a.addtlConsent &&
      "string" !== typeof a.addtlConsent &&
      (a.addtlConsent = void 0);
    void 0 !== a.gdprApplies &&
      "boolean" !== typeof a.gdprApplies &&
      (a.gdprApplies = void 0);
    return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
      (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
      ? 2
      : a.cmpStatus && "error" !== a.cmpStatus
      ? 0
      : 3;
  };
  function Ej(a) {
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = Dj(a));
    return "error" === a.cmpStatus || 0 !== a.internalErrorState
      ? a.internalBlockOnErrors
        ? (pd({ e: String(a.internalErrorState) }), !1)
        : !0
      : "loaded" !== a.cmpStatus ||
        ("tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus)
      ? !1
      : !0;
  }
  function Fj(a) {
    if (a.h) return a.h;
    a.h = dd(a.j, "__tcfapiLocator");
    return a.h;
  }
  function Gj(a) {
    return "function" === typeof a.j.__tcfapi || null != Fj(a);
  }
  function Hj(a, b, c, d) {
    c || (c = () => {});
    if ("function" === typeof a.j.__tcfapi) (a = a.j.__tcfapi), a(b, 2, c, d);
    else if (Fj(a)) {
      Ij(a);
      const e = ++a.J;
      a.v[e] = c;
      a.h &&
        a.h.postMessage(
          { __tcfapiCall: { command: b, version: 2, callId: e, parameter: d } },
          "*"
        );
    } else c({}, !1);
  }
  function Ij(a) {
    a.l ||
      ((a.l = (b) => {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
            .__tcfapiReturn;
          a.v[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }),
      sc(a.j, "message", a.l));
  }
  class Jj extends cf {
    constructor(a) {
      var b = {};
      super();
      this.j = a;
      this.h = null;
      this.v = {};
      this.J = 0;
      this.F = b.Qa ?? 500;
      this.B = b.Mb ?? !1;
      this.l = null;
    }
    g() {
      this.v = {};
      this.l && (tc(this.j, "message", this.l), delete this.l);
      delete this.v;
      delete this.j;
      delete this.h;
      super.g();
    }
    addEventListener(a) {
      let b = { internalBlockOnErrors: this.B };
      const c = rc(() => a(b));
      let d = 0;
      -1 !== this.F &&
        (d = setTimeout(() => {
          b.tcString = "tcunavailable";
          b.internalErrorState = 1;
          c();
        }, this.F));
      const e = (f, g) => {
        clearTimeout(d);
        f
          ? ((b = f),
            (b.internalErrorState = Dj(b)),
            (b.internalBlockOnErrors = this.B),
            (g && 0 === b.internalErrorState) ||
              ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
          : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
        a(b);
      };
      try {
        Hj(this, "addEventListener", e);
      } catch (f) {
        (b.tcString = "tcunavailable"),
          (b.internalErrorState = 3),
          d && (clearTimeout(d), (d = 0)),
          c();
      }
    }
    removeEventListener(a) {
      a && a.listenerId && Hj(this, "removeEventListener", null, a.listenerId);
    }
  }
  var Oj = ({ m: a, U: b, Qa: c, K: d, ia: e = !1, ja: f = !1 }) => {
      b = Kj({ m: a, U: b, ia: e, ja: f });
      null != b.g || "tcunav" != b.h.message
        ? d(b)
        : Lj(a, c)
            .then((g) => g.map(Mj))
            .then((g) => g.map((h) => Nj(a, h)))
            .then(d);
    },
    Kj = ({ m: a, U: b, ia: c = !1, ja: d = !1 }) => {
      if (!Pj({ m: a, U: b, ia: c, ja: d })) return Nj(a, Bj(!0));
      b = sj();
      return (b = yj(b, 24)) ? Nj(a, Mj(b)) : ig(Error("tcunav"));
    };
  function Pj({ m: a, U: b, ia: c, ja: d }) {
    if (!(d = !d && Gj(new Jj(a)))) {
      if ((c = !c)) {
        if (b) {
          a = rj(a);
          if (null != a.g)
            if ((a = a.getValue()) && null != F(a, 1))
              b: switch (((a = F(a, 1)), a)) {
                case 1:
                  a = !0;
                  break b;
                default:
                  throw Error("Unhandled AutoGdprFeatureStatus: " + a);
              }
            else a = !1;
          else U.H(806, a.h, void 0, void 0), (a = !1);
          b = !a;
        }
        c = b;
      }
      d = c;
    }
    return d ? !0 : !1;
  }
  function Lj(a, b) {
    return Promise.race([Qj(), Rj(a, b)]);
  }
  function Qj() {
    return new Promise((a) => {
      var b = sj();
      a = { resolve: a };
      const c = yj(b, 25, []);
      c.push(a);
      b.S[vj(25)] = c;
    }).then(Sj);
  }
  function Rj(a, b) {
    return new Promise((c) => {
      a.setTimeout(c, b, ig(Error("tcto")));
    });
  }
  function Sj(a) {
    return a ? gg(a) : ig(Error("tcnull"));
  }
  function Mj(a) {
    if (Ej(a))
      if (
        !1 !== a.gdprApplies &&
        "tcunavailable" !== a.tcString &&
        void 0 !== a.gdprApplies &&
        "string" === typeof a.tcString &&
        a.tcString.length
      ) {
        b: {
          if (a.publisher && a.publisher.restrictions) {
            var b = a.publisher.restrictions["1"];
            if (void 0 !== b) {
              b = b["755"];
              break b;
            }
          }
          b = void 0;
        }
        0 === b
          ? (a = !1)
          : a.purpose && a.vendor
          ? ((b = a.vendor.consents),
            (b = !(!b || !b["755"])) &&
            a.purposeOneTreatment &&
            "CH" === a.publisherCC
              ? (a = !0)
              : (b && ((a = a.purpose.consents), (b = !(!a || !a["1"]))),
                (a = b)))
          : (a = !0);
      } else a = !0;
    else a = !1;
    return Bj(a);
  }
  function Nj(a, b) {
    return (a = Aj(b, a)) ? gg(a) : ig(Error("unav"));
  }
  var Tj = class extends J {};
  Tj.u = [1, 2, 3];
  var Uj = class extends J {};
  Uj.u = [1, 2, 3];
  var Vj = class extends J {
    g() {
      return B(this, Tj, 2);
    }
    h() {
      return B(this, Uj, 3);
    }
  };
  const Wj = class {
    constructor(a) {
      this.exception = a;
    }
  };
  function Xj(a, b) {
    try {
      var c = a.h,
        d = c.resolve,
        e = a.g;
      mi(e.g);
      C(e.h, Qg, 1);
      d.call(c, new Wj(b));
    } catch (f) {
      (a = a.h), (b = f), Zf(a), (a.g = 2), (a.i = b), ag(a.h);
    }
  }
  var Yj = class {
    constructor(a, b, c) {
      this.i = a;
      this.g = b;
      this.h = c;
    }
    start() {
      this.j();
    }
    j() {
      try {
        switch (this.i.document.readyState) {
          case "complete":
          case "interactive":
            jj(this.g, !0);
            Xj(this);
            break;
          default:
            jj(this.g, !1)
              ? Xj(this)
              : this.i.setTimeout(la(this.j, this), 100);
        }
      } catch (a) {
        Xj(this, a);
      }
    }
  };
  var Zj = "a".charCodeAt(),
    ak = wc(Xf),
    bk = wc(Yf);
  function W(a, b) {
    if (a.g + b > a.h.length)
      throw Error("Requested length " + b + " is past end of string.");
    const c = a.h.substring(a.g, a.g + b);
    a.g += b;
    return parseInt(c, 2);
  }
  function ck(a) {
    return (
      String.fromCharCode(Zj + W(a, 6)) + String.fromCharCode(Zj + W(a, 6))
    );
  }
  function dk(a) {
    let b = W(a, 12);
    const c = [];
    for (; b--; ) {
      var d = !0 === !!W(a, 1),
        e = W(a, 16);
      if (d) for (d = W(a, 16); e <= d; e++) c.push(e);
      else c.push(e);
    }
    c.sort((f, g) => f - g);
    return c;
  }
  function ek(a, b, c) {
    const d = [];
    for (let e = 0; e < b; e++)
      if (W(a, 1)) {
        const f = e + 1;
        if (c && -1 === c.indexOf(f))
          throw Error(`ID: ${f} is outside of allowed values!`);
        d.push(f);
      }
    return d;
  }
  function fk(a) {
    const b = W(a, 16);
    return !0 === !!W(a, 1)
      ? ((a = dk(a)),
        a.forEach((c) => {
          if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }),
        a)
      : ek(a, b);
  }
  class gk {
    constructor(a) {
      if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
      this.h = a;
      this.g = 0;
    }
  }
  var ik = (a, b) => {
    try {
      var c = Ya(a.split(".")[0])
        .map((e) => e.toString(2).padStart(8, "0"))
        .join("");
      const d = new gk(c);
      c = {};
      c.tcString = a;
      c.gdprApplies = !0;
      d.g += 78;
      c.cmpId = W(d, 12);
      c.cmpVersion = W(d, 12);
      d.g += 30;
      c.tcfPolicyVersion = W(d, 6);
      c.isServiceSpecific = !!W(d, 1);
      c.useNonStandardStacks = !!W(d, 1);
      c.specialFeatureOptins = hk(ek(d, 12, bk), bk);
      c.purpose = {
        consents: hk(ek(d, 24, ak), ak),
        legitimateInterests: hk(ek(d, 24, ak), ak),
      };
      c.purposeOneTreatment = !!W(d, 1);
      c.publisherCC = ck(d);
      c.vendor = { consents: hk(fk(d), b), legitimateInterests: hk(fk(d), b) };
      return c;
    } catch (d) {
      return null;
    }
  };
  const hk = (a, b) => {
    const c = {};
    if (Array.isArray(b) && 0 !== b.length)
      for (const d of b) c[d] = -1 !== a.indexOf(d);
    else for (const d of a) c[d] = !0;
    delete c[0];
    return c;
  };
  var jk = class extends J {};
  var kk = class extends J {};
  var lk = class extends J {},
    mk = ic(lk);
  lk.u = [7];
  function nk(a) {
    return (a = ok(a)) ? B(a, kk, 4) : null;
  }
  function ok(a) {
    if ((a = new zj(a).get("FCCDCF", "")))
      if (a.startsWith("%"))
        try {
          var b = decodeURIComponent(a);
        } catch (c) {
          b = null;
        }
      else b = a;
    else b = null;
    try {
      return b ? mk(b) : null;
    } catch (c) {
      return null;
    }
  }
  wc(Xf).map((a) => Number(a));
  wc(Yf).map((a) => Number(a));
  function pk(a) {
    a.__tcfapiPostMessageReady || qk(new rk(a));
  }
  function qk(a) {
    a.h = (b) => {
      const c = "string" == typeof b.data;
      let d;
      try {
        d = c ? JSON.parse(b.data) : b.data;
      } catch (f) {
        return;
      }
      const e = d.__tcfapiCall;
      !e ||
        ("ping" !== e.command &&
          "getTCData" !== e.command &&
          "addEventListener" !== e.command &&
          "removeEventListener" !== e.command) ||
        a.g.__tcfapi(
          e.command,
          e.version,
          (f, g) => {
            const h = {};
            h.__tcfapiReturn =
              "removeEventListener" === e.command
                ? { success: f, callId: e.callId }
                : { returnValue: f, success: g, callId: e.callId };
            f = c ? JSON.stringify(h) : h;
            b.source &&
              "function" === typeof b.source.postMessage &&
              b.source.postMessage(f, b.origin);
            return f;
          },
          e.parameter
        );
    };
    a.g.addEventListener("message", a.h);
    a.g.__tcfapiPostMessageReady = !0;
  }
  var rk = class {
    constructor(a) {
      this.g = a;
      this.h = null;
    }
  };
  var sk = (a, b) => {
    const c = a.document,
      d = () => {
        if (!a.frames[b])
          if (c.body) {
            const e = Tc("IFRAME", c);
            e.style.display = "none";
            e.style.width = "0px";
            e.style.height = "0px";
            e.style.border = "none";
            e.style.zIndex = "-1000";
            e.style.left = "-1000px";
            e.style.top = "-1000px";
            e.name = b;
            c.body.appendChild(e);
          } else a.setTimeout(d, 5);
      };
    d();
  };
  function tk() {
    var a = window,
      b = S(kh);
    a.__uspapi ||
      a.frames.__uspapiLocator ||
      ((a = new uk(a)), vk(a), b && wk(a));
  }
  function vk(a) {
    !a.j ||
      a.g.__uspapi ||
      a.g.frames.__uspapiLocator ||
      ((a.g.__uspapiManager = "fc"),
      sk(a.g, "__uspapiLocator"),
      na("__uspapi", (...b) => xk(a, ...b)));
  }
  function wk(a) {
    !a.h ||
      a.g.__tcfapi ||
      a.g.frames.__tcfapiLocator ||
      ((a.g.__tcfapiManager = "fc"),
      sk(a.g, "__tcfapiLocator"),
      (a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || []),
      na("__tcfapi", (...b) => yk(a, ...b)),
      pk(a.g));
  }
  function xk(a, b, c, d) {
    "function" === typeof d &&
      "getUSPData" === b &&
      d({ version: 1, uspString: a.j }, !0);
  }
  function yk(a, b, c, d, e = null) {
    if ("function" === typeof d)
      if (c && (2.1 < c || 1 >= c)) d(null, !1);
      else
        switch (((c = a.g.__tcfapiEventListeners), b)) {
          case "getTCData":
            !e || (Array.isArray(e) && e.every((f) => "number" === typeof f))
              ? d(zk(a, e, null), !0)
              : d(null, !1);
            break;
          case "ping":
            d({
              gdprApplies: !0,
              cmpLoaded: !0,
              cmpStatus: "loaded",
              displayStatus: "disabled",
              apiVersion: "2.1",
              cmpVersion: 2,
              cmpId: 300,
            });
            break;
          case "addEventListener":
            b = c.push(d);
            d(zk(a, null, b - 1), !0);
            break;
          case "removeEventListener":
            c[e] ? ((c[e] = null), d(!0)) : d(!1);
            break;
          case "getInAppTCData":
          case "getVendorList":
            d(null, !1);
        }
  }
  function zk(a, b, c) {
    if (!a.h) return null;
    b = ik(a.h, b);
    b.addtlConsent = null != a.i ? a.i : void 0;
    b.cmpStatus = "loaded";
    b.eventStatus = "tcloaded";
    null != c && (b.listenerId = c);
    return b;
  }
  class uk {
    constructor(a) {
      this.g = a;
      var b;
      this.j = (b = (b = ok(a.document)) ? B(b, jk, 5) || null : null)
        ? E(b, 2)
        : null;
      this.h = (b = nk(a.document)) && null != E(b, 1) ? E(b, 1) : null;
      this.i = (a = nk(a.document)) && null != E(a, 2) ? E(a, 2) : null;
    }
  }
  const Ak = { google_ad_channel: !0, google_ad_host: !0 };
  var Bk = (a, b) => {
      a.location.href &&
        a.location.href.substring &&
        (b.url = a.location.href.substring(0, 200));
      Si("ama", b, 0.01);
    },
    Ck = (a) => {
      const b = {};
      K(Ak, (c, d) => {
        d in a && (b[d] = a[d]);
      });
      return b;
    };
  const Dk = (a) => {
      const b = /[a-zA-Z0-9._~-]/,
        c = /%[89a-zA-Z]./;
      return a.replace(/(%[a-zA-Z0-9]{2})/g, function (d) {
        if (!d.match(c)) {
          const e = decodeURIComponent(d);
          if (e.match(b)) return e;
        }
        return d.toUpperCase();
      });
    },
    Ek = (a) => {
      let b = "";
      const c = /[/%?&=]/;
      for (let d = 0; d < a.length; ++d) {
        const e = a[d];
        b = e.match(c) ? b + e : b + encodeURIComponent(e);
      }
      return b;
    };
  var Fk = (a) => {
      a = zb(a, 2, qb);
      if (!a) return !1;
      for (let b = 0; b < a.length; b++) if (1 == a[b]) return !0;
      return !1;
    },
    Hk = (a, b) => {
      a = Ek(Dk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
      const c = Zc(a),
        d = Gk(a);
      return (
        b.find((e) => {
          const f = void 0 !== Jb(e, ui, 7, !1) ? Ob(B(e, ui, 7), 1) : Ob(e, 1);
          e = void 0 !== Jb(e, ui, 7, !1) ? F(B(e, ui, 7), 2) : 2;
          if ("number" !== typeof f) return !1;
          switch (e) {
            case 1:
              return f == c;
            case 2:
              return d[f] || !1;
          }
          return !1;
        }) || null
      );
    };
  const Gk = (a) => {
    const b = {};
    for (;;) {
      b[Zc(a)] = !0;
      if (!a) return b;
      a = a.substring(0, a.lastIndexOf("/"));
    }
  };
  var Ik = (a) => {
    a = B(a, ti, 3);
    return !a || vb(a, 1) <= Date.now() ? !1 : !0;
  };
  function Jk(a) {
    if (S(dh)) var b = null;
    else
      try {
        b = a.getItem("google_ama_config");
      } catch (d) {
        b = null;
      }
    try {
      var c = b ? Gi(b) : null;
    } catch (d) {
      c = null;
    }
    return c;
  }
  var Kk = class extends J {
    g() {
      return B(this, Vj, 2);
    }
    h() {
      return G(this, 3);
    }
  };
  var Lk = class extends J {
    g() {
      return zb(this, 1, sb);
    }
    h() {
      return B(this, Kk, 2);
    }
  };
  Lk.u = [1];
  var Mk = class extends J {
    getId() {
      return D(this, 1) ?? 0;
    }
  };
  Mk.u = [2];
  var Nk = class extends J {};
  Nk.u = [2];
  var Ok = class extends J {};
  Ok.u = [2];
  var Pk = class extends J {
    g() {
      return vb(this, 2) ?? 0;
    }
    h() {
      return vb(this, 4) ?? 0;
    }
    i() {
      return G(this, 3);
    }
  };
  var Qk = class extends J {};
  Qk.u = [1, 4, 2, 3];
  var Sk = class extends J {
    h() {
      return Rb(this, Kk, 13, Rk);
    }
    j() {
      return void 0 !== Jb(this, Kk, Eb(this, Rk, 13));
    }
    g() {
      return Rb(this, Lk, 14, Rk);
    }
    i() {
      return void 0 !== Jb(this, Lk, Eb(this, Rk, 14));
    }
  };
  Sk.u = [19];
  var Rk = [13, 14];
  let Tk = void 0;
  function X(a) {
    a.google_ad_modifications || (a.google_ad_modifications = {});
    return a.google_ad_modifications;
  }
  function Uk(a) {
    a = X(a);
    const b = a.space_collapsing || "none";
    return a.remove_ads_by_default
      ? { Ha: !0, tb: b, pa: a.ablation_viewport_offset }
      : null;
  }
  function Vk(a, b) {
    a = X(a);
    a.had_ads_ablation = !0;
    a.remove_ads_by_default = !0;
    a.space_collapsing = "slot";
    a.ablation_viewport_offset = b;
  }
  function Wk(a) {
    X(M).allow_second_reactive_tag = a;
  }
  function Xk() {
    const a = X(window);
    a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
    return a.afg_slotcar_vars;
  }
  function Yk(a) {
    return X(a)?.head_tag_slot_vars?.google_ad_host ?? Zk(a);
  }
  function Zk(a) {
    return (
      a.document
        ?.querySelector('meta[name="google-adsense-platform-account"]')
        ?.getAttribute("content") ?? null
    );
  }
  const $k = [2, 7, 1];
  var cl = (a, b, c = "", d = null) =>
      1 === b && al(c, d)
        ? !0
        : bl(a, c, (e) => Pa(C(e, jc, 2), (f) => F(f, 1) === b)),
    al = (a, b) =>
      b
        ? b.j()
          ? G(b.h(), 1)
          : b.i() && "" !== a && 1 === b.g().g().length && b.g().g()[0] === a
          ? G(b.g().h(), 1)
          : !1
        : !1,
    dl = (a, b) => {
      b = D(b, 18) ?? 0;
      -1 !== b && (a.tmod = b);
    },
    fl = (a) => {
      const b = Rc(M) || M;
      return el(b, a) ? !0 : bl(M, "", (c) => Pa(zb(c, 3, qb), (d) => d === a));
    };
  function el(a, b) {
    a =
      (a =
        (a = a.location && a.location.hash) &&
        a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
    return !!a && Sa(a.split(","), b.toString());
  }
  function bl(a, b, c) {
    a = Rc(a) || a;
    const d = gl(a);
    b && (b = Ad(String(b)));
    return vc(
      d,
      (e, f) =>
        Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
    );
  }
  function gl(a) {
    a = hl(a);
    const b = {};
    K(a, (c, d) => {
      try {
        const e = new kc(c);
        b[d] = e;
      } catch (e) {}
    });
    return b;
  }
  var hl = (a) =>
    S(Yg)
      ? (fc(Tk, hc),
        (a = Kj({ m: a, U: Tk })),
        null != a.g ? il(a.getValue()) : {})
      : il(a.localStorage);
  function il(a) {
    try {
      const b = a.getItem("google_adsense_settings");
      if (!b) return {};
      const c = JSON.parse(b);
      return c !== Object(c)
        ? {}
        : uc(
            c,
            (d, e) =>
              Object.prototype.hasOwnProperty.call(c, e) &&
              "string" === typeof e &&
              Array.isArray(d)
          );
    } catch (b) {
      return {};
    }
  }
  function jl(a) {
    Si("atf_ad_settings_from_ppabg", { p_s: a }, 0.01);
  }
  const kl = (a) =>
      !!a && (0 < C(a, Qg, 1).length || (S(eh) && 0 < C(a, Mg, 3).length)),
    ll = (a) => {
      Si("overlay_settings_from_ppabg", { p_s: a }, 0.01);
    },
    ml = (a) => {
      const b = C(a, Ai, 2);
      return Hk(n, b) ? [] : zb(a, 3, qb);
    },
    nl = (a, b) => {
      if (Yk(n)) return $k;
      if (b?.j()) {
        a = b?.h()?.g()?.h();
        if (!a) return $k;
        ll(!1);
        return ml(a);
      }
      if (b?.i()) {
        const c = b?.g()?.g();
        if (
          !c ||
          1 !== c.length ||
          !a ||
          c[0] !== a ||
          H(b, 17) != n.location.host
        )
          return $k;
        a = b?.g()?.h()?.g()?.h();
        if (!a) return $k;
        ll(!0);
        return ml(a);
      }
      return $k;
    };
  var ol = (a, b) => {
    const c = [];
    let d = $k;
    if (S(ih) || S(hh) || S(jh)) d = nl(a, b);
    S(ih) && !d.includes(1) && c.push(1);
    S(hh) && !d.includes(2) && c.push(2);
    S(jh) && !d.includes(7) && c.push(7);
    return c;
  };
  function pl(a, b, c, d) {
    ql(new rl(a, b, c, d));
  }
  function ql(a) {
    mg(
      lg(Kj({ m: a.m, U: G(a.h, 6) }), (b) => {
        sl(a, b, !0);
      }),
      () => {
        tl(a);
      }
    );
  }
  function sl(a, b, c) {
    mg(
      lg(ul(b), (d) => {
        vl("ok");
        a.g(d, { fromLocalStorage: !0 });
      }),
      () => {
        var d = a.m;
        try {
          b.removeItem("google_ama_config");
        } catch (e) {
          Bk(d, { lserr: 1 });
        }
        c ? tl(a) : a.g(null, null);
      }
    );
  }
  function tl(a) {
    mg(
      lg(wl(a), (b) => {
        a.g(b, { fromPABGSettings: !0 });
      }),
      () => {
        xl(a);
      }
    );
  }
  function ul(a) {
    return (a = (a = Jk(a)) ? (Ik(a) ? a : null) : null)
      ? gg(a)
      : ig(Error("invlocst"));
  }
  function wl(a) {
    if (Yk(a.m) && !G(a.h, 22)) return ig(Error("invtag"));
    a: {
      var b = a.m;
      var c = a.i;
      a = a.h;
      if (a?.j()) (b = a?.h()?.g()?.g()), kl(b) ? jl(!1) : (b = null);
      else {
        if (a?.i()) {
          const d = a?.g()?.g(),
            e = a?.g()?.h()?.g()?.g();
          if (
            d &&
            1 === d.length &&
            d[0] === c &&
            kl(e) &&
            H(a, 17) === b.location.host
          ) {
            jl(!0);
            b = e;
            break a;
          }
        }
        b = null;
      }
    }
    b
      ? ((c = new Fi()),
        (a = C(b, Qg, 1)),
        (c = Nb(c, 1, a)),
        (a = C(b, Ai, 2)),
        (c = Nb(c, 7, a)),
        S(eh) &&
          0 < C(b, Mg, 3).length &&
          ((a = new Ng()), (b = C(b, Mg, 3)), (b = Nb(a, 1, b)), Lb(c, 6, b)),
        (b = gg(c)))
      : (b = ig(Error("invtag")));
    return b;
  }
  function xl(a) {
    Oj({
      m: a.m,
      U: G(a.h, 6),
      Qa: 50,
      K: (b) => {
        yl(a, b);
      },
    });
  }
  function yl(a, b) {
    mg(
      lg(b, (c) => {
        sl(a, c, !1);
      }),
      (c) => {
        vl(c.message);
        a.g(null, null);
      }
    );
  }
  function vl(a) {
    Si(
      "abg::amalserr",
      { status: a, guarding: "true", timeout: 50, rate: 0.01 },
      0.01
    );
  }
  class rl {
    constructor(a, b, c, d) {
      this.m = a;
      this.h = b;
      this.i = c;
      this.g = d;
    }
  }
  var Bl = (a, b, c, d) => {
    try {
      const e = Hk(a, C(c, Ai, 7));
      if (e && Fk(e)) {
        E(e, 4) && (d = ug(d, new vg(null, { google_package: E(e, 4) })));
        const f = new pj(a, b, c, e, d);
        hi(
          1e3,
          () => {
            var g = new bg();
            new Yj(a, f, g).start();
            return g.h;
          },
          a
        ).then(ma(zl, a), ma(Al, a));
      }
    } catch (e) {
      Bk(a, { atf: -1 });
    }
  };
  const zl = (a) => {
      Bk(a, { atf: 1 });
    },
    Al = (a, b) => {
      (a.google_ama_state = a.google_ama_state || {}).exception = b;
      Bk(a, { atf: 0 });
    };
  function Cl(a) {
    S(oh) &&
      ((a.easpi = !0),
      (a.asntpc = 1e3),
      (a.asla = 0.4),
      (a.asaa = -1),
      (a.asro = S(rh)),
      0 <= zh(mh) && (a.asacml = zh(mh)),
      S(sh) || (a.asrc = !1),
      S(ph) && (a.easppi = !0),
      S(qh) && (a.asiscm = !0),
      S(nh) && (a.scsals = !0),
      S(th) && (a.srtr = !0));
  }
  Va || Ga();
  class Dl {
    constructor() {
      this.promise = new Promise((a) => {
        this.resolve = a;
      });
    }
  }
  function El() {
    const { promise: a, resolve: b } = new Dl();
    return { promise: a, resolve: b };
  }
  function Fl(a = () => {}) {
    n.google_llp || (n.google_llp = {});
    const b = n.google_llp;
    let c = b[7];
    if (c) return c;
    c = El();
    b[7] = c;
    a();
    return c;
  }
  function Gl(a) {
    return Fl(() => {
      Sc(n.document, a);
    }).promise;
  }
  var Hl = (a) => {
    if (n.google_apltlad || n !== n.top || !a.google_ad_client) return null;
    n.google_apltlad = !0;
    const b = {
        enable_page_level_ads: { pltais: !0 },
        google_ad_client: a.google_ad_client,
      },
      c = b.enable_page_level_ads;
    K(a, (d, e) => {
      ai[e] && "google_ad_client" !== e && (c[e] = d);
    });
    c.google_pgb_reactive = 7;
    Cl(c);
    if ("google_ad_section" in a || "google_ad_region" in a)
      c.google_ad_section = a.google_ad_section || a.google_ad_region;
    return b;
  };
  var Kl = (a, b) => {
    X(M).ama_ran_on_page || hi(1001, () => Il(new Jl(a, b)), n);
  };
  function Il(a) {
    pl(a.g, a.i, a.h.google_ad_client || "", (b, c) => {
      var d = a.g,
        e = a.h;
      X(M).ama_ran_on_page || (b && Ll(d, e, b, c));
    });
  }
  class Jl {
    constructor(a, b) {
      this.g = n;
      this.h = a;
      this.i = b;
    }
  }
  function Ll(a, b, c, d) {
    d && (mi(a).configSourceInAbg = d);
    void 0 !== Jb(c, Ei, 24, !1) &&
      ((d = ni(a)),
      (d.availableAbg = !0),
      (d.ablationFromStorage = !!B(c, Ei, 24)?.g()?.g()));
    if (
      ea(b.enable_page_level_ads) &&
      7 === b.enable_page_level_ads.google_pgb_reactive
    ) {
      d = Hk(a, C(c, Ai, 7));
      if (!d || !yb(d, 8)) {
        Si("amaait", { value: "true" });
        return;
      }
      Si("amaait", { value: "false" });
    }
    X(M).ama_ran_on_page = !0;
    B(c, si, 15)?.g() && (X(a).enable_overlap_observer = !0);
    var e = B(c, ri, 13);
    e && 1 === F(e, 1)
      ? ((d = 0), (e = B(e, qi, 6)) && D(e, 3) && (d = D(e, 3) || 0), Vk(a, d))
      : B(c, Ei, 24)?.g()?.g() && ((ni(a).ablatingThisPageview = !0), Vk(a, 1));
    sd(3, [c.toJSON()]);
    const f = b.google_ad_client || "";
    b = Ck(ea(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
    const g = ug(yg, new vg(null, b));
    Ri(782, () => {
      Bl(a, f, c, g);
    });
  }
  var Ml = {
    "120x90": !0,
    "160x90": !0,
    "180x90": !0,
    "200x90": !0,
    "468x15": !0,
    "728x15": !0,
  };
  function Nl(a, b) {
    if (15 == b) {
      if (728 <= a) return 728;
      if (468 <= a) return 468;
    } else if (90 == b) {
      if (200 <= a) return 200;
      if (180 <= a) return 180;
      if (160 <= a) return 160;
      if (120 <= a) return 120;
    }
    return null;
  }
  function Ol(a) {
    return (b) => !!(b.ea & a);
  }
  class Y extends Th {
    constructor(a, b, c, d = !1) {
      super(a, b);
      this.ea = c;
      this.hb = d;
    }
    oa() {
      return this.ea;
    }
    h(a, b, c) {
      b.google_ad_resize ||
        ((c.style.height = this.height() + "px"), (b.rpe = !0));
    }
  }
  const Pl = {
      image_stacked: 1 / 1.91,
      image_sidebyside: 1 / 3.82,
      mobile_banner_image_sidebyside: 1 / 3.82,
      pub_control_image_stacked: 1 / 1.91,
      pub_control_image_sidebyside: 1 / 3.82,
      pub_control_image_card_stacked: 1 / 1.91,
      pub_control_image_card_sidebyside: 1 / 3.74,
      pub_control_text: 0,
      pub_control_text_card: 0,
    },
    Ql = {
      image_stacked: 80,
      image_sidebyside: 0,
      mobile_banner_image_sidebyside: 0,
      pub_control_image_stacked: 80,
      pub_control_image_sidebyside: 0,
      pub_control_image_card_stacked: 85,
      pub_control_image_card_sidebyside: 0,
      pub_control_text: 80,
      pub_control_text_card: 80,
    },
    Rl = {
      pub_control_image_stacked: 100,
      pub_control_image_sidebyside: 200,
      pub_control_image_card_stacked: 150,
      pub_control_image_card_sidebyside: 250,
      pub_control_text: 100,
      pub_control_text_card: 150,
    };
  function Sl(a) {
    var b = 0;
    a.T && b++;
    a.M && b++;
    a.N && b++;
    if (3 > b)
      return {
        O: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.",
      };
    b = a.T.split(",");
    const c = a.N.split(",");
    a = a.M.split(",");
    if (b.length !== c.length || b.length !== a.length)
      return {
        O: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"',
      };
    if (2 < b.length)
      return {
        O:
          "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " +
          `you are providing ${
            b.length
          } parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`,
      };
    const d = [],
      e = [];
    for (let g = 0; g < b.length; g++) {
      var f = Number(c[g]);
      if (Number.isNaN(f) || 0 === f)
        return {
          O: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`,
        };
      d.push(f);
      f = Number(a[g]);
      if (Number.isNaN(f) || 0 === f)
        return {
          O: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`,
        };
      e.push(f);
    }
    return { N: d, M: e, Ma: b };
  }
  function Tl(a) {
    return 1200 <= a
      ? { width: 1200, height: 600 }
      : 850 <= a
      ? { width: a, height: Math.floor(0.5 * a) }
      : 550 <= a
      ? { width: a, height: Math.floor(0.6 * a) }
      : 468 <= a
      ? { width: a, height: Math.floor(0.7 * a) }
      : { width: a, height: Math.floor(3.44 * a) };
  }
  const Ul = Ua("script");
  function Vl(a, b, c) {
    null != a.ea && (c.google_responsive_formats = a.ea);
    null != a.R && (c.google_safe_for_responsive_override = a.R);
    null != a.h &&
      (!0 === a.h
        ? (c.google_full_width_responsive_allowed = !0)
        : ((c.google_full_width_responsive_allowed = !1), (c.gfwrnwer = a.h)));
    null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
    var d = a.l || c.google_ad_width;
    null != d && (c.google_resizing_width = d);
    d = a.j || c.google_ad_height;
    null != d && (c.google_resizing_height = d);
    d = a.size().g(b);
    const e = a.size().height();
    if (!c.google_ad_resize) {
      c.google_ad_width = d;
      c.google_ad_height = e;
      var f = a.size();
      b = f.g(b) + "x" + f.height();
      c.google_ad_format = b;
      c.google_responsive_auto_format = a.A;
      null != a.g && (c.armr = a.g);
      c.google_ad_resizable = !0;
      c.google_override_format = 1;
      c.google_loader_features_used = 128;
      !0 === a.h && (c.gfwrnh = a.size().height() + "px");
    }
    null != a.F && (c.gfwroml = a.F);
    null != a.J && (c.gfwromr = a.J);
    null != a.j && (c.gfwroh = a.j);
    null != a.l && (c.gfwrow = a.l);
    null != a.P && (c.gfwroz = a.P);
    null != a.v && (c.gml = a.v);
    null != a.B && (c.gmr = a.B);
    null != a.Y && (c.gzi = a.Y);
    b = Rc(window) || window;
    ej(b.location, "google_responsive_dummy_ad") &&
      (Sa([1, 2, 3, 4, 5, 6, 7, 8], a.A) || 1 === a.g) &&
      2 !== a.g &&
      ((a = JSON.stringify({
        googMsgType: "adpnt",
        key_value: [{ key: "qid", value: "DUMMY_AD" }],
      })),
      (c.dash = `<${Ul}>window.top.postMessage('${a}', '*'); 
          </${Ul}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`));
  }
  class Wl {
    constructor(
      a,
      b,
      c = null,
      d = null,
      e = null,
      f = null,
      g = null,
      h = null,
      k = null,
      m = null,
      l = null,
      q = null
    ) {
      this.A = a;
      this.fa = b;
      this.ea = c;
      this.g = d;
      this.R = e;
      this.h = f;
      this.i = g;
      this.F = h;
      this.J = k;
      this.j = m;
      this.l = l;
      this.P = q;
      this.Y = this.B = this.v = null;
    }
    size() {
      return this.fa;
    }
  }
  const Xl = [
    "google_content_recommendation_ui_type",
    "google_content_recommendation_columns_num",
    "google_content_recommendation_rows_num",
  ];
  var Yl = class extends Th {
      g(a) {
        return Math.min(1200, Math.max(this.L, Math.round(a)));
      }
    },
    am = (a, b) => {
      Zl(a, b);
      if ("pedestal" == b.google_content_recommendation_ui_type)
        return new Wl(9, new Yl(a, Math.floor(a * b.google_phwr)));
      var c = Kc();
      468 > a
        ? c
          ? ((c = a - 8 - 8),
            (c =
              Math.floor(c / 1.91 + 70) +
              Math.floor(
                11 *
                  (c * Pl.mobile_banner_image_sidebyside +
                    Ql.mobile_banner_image_sidebyside) +
                  96
              )),
            (a = {
              ba: a,
              aa: c,
              M: 1,
              N: 12,
              T: "mobile_banner_image_sidebyside",
            }))
          : ((a = Tl(a)),
            (a = {
              ba: a.width,
              aa: a.height,
              M: 1,
              N: 13,
              T: "image_sidebyside",
            }))
        : ((a = Tl(a)),
          (a = { ba: a.width, aa: a.height, M: 4, N: 2, T: "image_stacked" }));
      $l(b, a);
      return new Wl(9, new Yl(a.ba, a.aa));
    },
    bm = (a, b) => {
      Zl(a, b);
      var c = Sl({
        N: b.google_content_recommendation_rows_num,
        M: b.google_content_recommendation_columns_num,
        T: b.google_content_recommendation_ui_type,
      });
      if (c.O) a = { ba: 0, aa: 0, M: 0, N: 0, T: "image_stacked", O: c.O };
      else {
        var d = 2 === c.Ma.length && 468 <= a ? 1 : 0;
        var e = c.Ma[d];
        e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
        var f = Rl[e];
        let g = c.M[d];
        for (; a / g < f && 1 < g; ) g--;
        f = g;
        d = c.N[d];
        c = Math.floor((((a - 8 * f - 8) / f) * Pl[e] + Ql[e]) * d + 8 * d + 8);
        a =
          1500 < a
            ? {
                width: 0,
                height: 0,
                rb: "Calculated slot width is too large: " + a,
              }
            : 1500 < c
            ? {
                width: 0,
                height: 0,
                rb: "Calculated slot height is too large: " + c,
              }
            : { width: a, height: c };
        a = { ba: a.width, aa: a.height, M: f, N: d, T: e };
      }
      if (a.O) throw new T(a.O);
      $l(b, a);
      return new Wl(9, new Yl(a.ba, a.aa));
    };
  function Zl(a, b) {
    if (0 >= a)
      throw new T(
        "Invalid responsive width from Matched Content slot " +
          b.google_ad_slot +
          ": " +
          a +
          ". Please ensure to put this Matched Content slot into a non-zero width div container."
      );
  }
  function $l(a, b) {
    a.google_content_recommendation_ui_type = b.T;
    a.google_content_recommendation_columns_num = b.M;
    a.google_content_recommendation_rows_num = b.N;
  }
  class cm extends Th {
    g() {
      return this.L;
    }
    h(a, b, c) {
      Sh(a, c);
      b.google_ad_resize ||
        ((c.style.height = this.height() + "px"), (b.rpe = !0));
    }
  }
  const dm = {
    "image-top": (a) => (600 >= a ? 284 + 0.414 * (a - 250) : 429),
    "image-middle": (a) =>
      500 >= a ? 196 - 0.13 * (a - 250) : 164 + 0.2 * (a - 500),
    "image-side": (a) =>
      500 >= a ? 205 - 0.28 * (a - 250) : 134 + 0.21 * (a - 500),
    "text-only": (a) => (500 >= a ? 187 - 0.228 * (a - 250) : 130),
    "in-article": (a) =>
      420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200,
  };
  var em = class extends Th {
      g() {
        return Math.min(1200, this.L);
      }
    },
    fm = (a, b, c, d, e) => {
      var f = e.google_ad_layout || "image-top";
      if ("in-article" == f) {
        var g = a;
        if ("false" == e.google_full_width_responsive) a = g;
        else if (((a = Nh(b, c, g, 0.2, e)), !0 !== a))
          (e.gfwrnwer = a), (a = g);
        else if ((a = Q(b).clientWidth))
          if (
            ((e.google_full_width_responsive_allowed = !0), c.parentElement)
          ) {
            b: {
              g = c;
              for (let h = 0; 100 > h && g.parentElement; ++h) {
                const k = g.parentElement.childNodes;
                for (let m = 0; m < k.length; ++m) {
                  const l = k[m];
                  if (l != g && Qh(b, l)) break b;
                }
                g = g.parentElement;
                g.style.width = "100%";
                g.style.height = "auto";
              }
            }
            Sh(b, c);
          } else a = g;
        else a = g;
      }
      if (250 > a)
        throw new T(
          "Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a
        );
      a = Math.min(1200, Math.floor(a));
      if (d && "in-article" != f) {
        f = Math.ceil(d);
        if (50 > f)
          throw new T(
            "Fluid responsive ads must be at least 50px tall: height=" + f
          );
        return new Wl(11, new Th(a, f));
      }
      if ("in-article" != f && (d = e.google_ad_layout_key)) {
        f = "" + d;
        c = Math.pow(10, 3);
        if ((e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length))
          for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
        else b = null;
        if (!b) throw new T("Invalid data-ad-layout-key value: " + f);
        f = (a + -725) / 1e3;
        c = 0;
        d = 1;
        e = b.length;
        for (g = 0; g < e; g++) (c += b[g] * d), (d *= f);
        f = Math.ceil(1e3 * c - -725 + 10);
        if (isNaN(f)) throw new T("Invalid height: height=" + f);
        if (50 > f)
          throw new T(
            "Fluid responsive ads must be at least 50px tall: height=" + f
          );
        if (1200 < f)
          throw new T(
            "Fluid responsive ads must be at most 1200px tall: height=" + f
          );
        return new Wl(11, new Th(a, f));
      }
      d = dm[f];
      if (!d) throw new T("Invalid data-ad-layout value: " + f);
      c = Wh(c, b);
      b = Q(b).clientWidth;
      b =
        "in-article" !== f || c || a !== b
          ? Math.ceil(d(a))
          : Math.ceil(1.25 * d(a));
      return new Wl(11, "in-article" == f ? new em(a, b) : new Th(a, b));
    };
  var gm = (a) => (b) => {
      for (let c = a.length - 1; 0 <= c; --c) if (!a[c](b)) return !1;
      return !0;
    },
    im = (a, b) => {
      var c = hm.slice(0);
      const d = c.length;
      let e = null;
      for (let f = 0; f < d; ++f) {
        const g = c[f];
        if (a(g)) {
          if (!b || b(g)) return g;
          null === e && (e = g);
        }
      }
      return e;
    };
  var Z = [
      new Y(970, 90, 2),
      new Y(728, 90, 2),
      new Y(468, 60, 2),
      new Y(336, 280, 1),
      new Y(320, 100, 2),
      new Y(320, 50, 2),
      new Y(300, 600, 4),
      new Y(300, 250, 1),
      new Y(250, 250, 1),
      new Y(234, 60, 2),
      new Y(200, 200, 1),
      new Y(180, 150, 1),
      new Y(160, 600, 4),
      new Y(125, 125, 1),
      new Y(120, 600, 4),
      new Y(120, 240, 4),
      new Y(120, 120, 1, !0),
    ],
    hm = [
      Z[6],
      Z[12],
      Z[3],
      Z[0],
      Z[7],
      Z[14],
      Z[1],
      Z[8],
      Z[10],
      Z[4],
      Z[15],
      Z[2],
      Z[11],
      Z[5],
      Z[13],
      Z[9],
      Z[16],
    ];
  var km = (a, b, c, d, e) => {
      "false" == e.google_full_width_responsive
        ? (c = { C: a, D: 1 })
        : ("autorelaxed" == b && e.google_full_width_responsive) ||
          jm(b) ||
          e.google_ad_resize
        ? ((b = Oh(a, c, d, e)),
          (c = !0 !== b ? { C: a, D: b } : { C: Q(c).clientWidth || a, D: !0 }))
        : (c = { C: a, D: 2 });
      const { C: f, D: g } = c;
      return !0 !== g
        ? { C: a, D: g }
        : d.parentElement
        ? { C: f, D: g }
        : { C: a, D: g };
    },
    nm = (a, b, c, d, e) => {
      const { C: f, D: g } = Ri(247, () => km(a, b, c, d, e));
      var h = !0 === g;
      const k = L(d.style.width),
        m = L(d.style.height),
        { X: l, V: q, oa: w, La: v } = lm(f, b, c, d, e, h);
      h = mm(b, w);
      var x;
      const z = (x = Uh(d, c, "marginLeft", L)) ? x + "px" : "",
        Ba = (x = Uh(d, c, "marginRight", L)) ? x + "px" : "";
      x = Uh(d, c, "zIndex") || "";
      return new Wl(h, l, w, null, v, g, q, z, Ba, m, k, x);
    },
    jm = (a) =>
      "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a),
    lm = (a, b, c, d, e, f) => {
      b =
        "auto" == b
          ? 0.25 >= a / Math.min(1200, Q(c).clientWidth)
            ? 4
            : 3
          : Mh(b);
      let g;
      var h = !1;
      let k = !1;
      var m = 488 > Q(c).clientWidth;
      if (m) {
        g = Hh(d, c);
        var l = Wh(d, c);
        h = !l && g;
        k = l && g;
      }
      l = [Vh(a), Ol(b)];
      l.push(Yh(m, c, d, k));
      null != e.google_max_responsive_height &&
        l.push(Zh(e.google_max_responsive_height));
      m = [(x) => !x.hb];
      if (h || k) (h = $h(c, d)), m.push(Zh(h));
      let q = im(gm(l), gm(m));
      if (!q) throw new T("No slot size for availableWidth=" + a);
      const { X: w, V: v } = Ri(248, () => {
        var x;
        a: if (f) {
          if (e.gfwrnh && (x = L(e.gfwrnh))) {
            x = { X: new cm(a, x), V: !0 };
            break a;
          }
          x = a / 1.2;
          var z = Math;
          var Ba = z.min;
          if (
            e.google_resizing_allowed ||
            "true" == e.google_full_width_responsive
          )
            var V = Infinity;
          else {
            V = d;
            let ta = Infinity;
            do {
              var Ca = Uh(V, c, "height", L);
              Ca && (ta = Math.min(ta, Ca));
              (Ca = Uh(V, c, "maxHeight", L)) && (ta = Math.min(ta, Ca));
            } while ((V = V.parentElement) && "HTML" != V.tagName);
            V = ta;
          }
          z = Ba.call(z, x, V);
          if (z < 0.5 * x || 100 > z) z = x;
          x = { X: new cm(a, Math.floor(z)), V: z < x ? 102 : !0 };
        } else x = { X: q, V: 100 };
        return x;
      });
      return "in-article" === e.google_ad_layout &&
        c.location &&
        "#hffwroe2etoq" == c.location.hash
        ? { X: om(a, c, d, w, e), V: !1, oa: b, La: g }
        : { X: w, V: v, oa: b, La: g };
    };
  const mm = (a, b) => {
      if ("auto" == a) return 1;
      switch (b) {
        case 2:
          return 2;
        case 1:
          return 3;
        case 4:
          return 4;
        case 3:
          return 5;
        case 6:
          return 6;
        case 5:
          return 7;
        case 7:
          return 8;
      }
      throw Error("bad mask");
    },
    om = (a, b, c, d, e) => {
      const f = e.google_ad_height || Uh(c, b, "height", L);
      b = fm(a, b, c, f, e).size();
      return b.L * b.height() > a * d.height() ? new Y(b.L, b.height(), 1) : d;
    };
  var pm = (a, b, c, d, e) => {
    var f;
    (f = Q(b).clientWidth)
      ? 488 > Q(b).clientWidth
        ? b.innerHeight >= b.innerWidth
          ? ((e.google_full_width_responsive_allowed = !0),
            Sh(b, c),
            (f = { C: f, D: !0 }))
          : (f = { C: a, D: 5 })
        : (f = { C: a, D: 4 })
      : (f = { C: a, D: 10 });
    const { C: g, D: h } = f;
    if (!0 !== h || a == g)
      return new Wl(12, new Th(a, d), null, null, !0, h, 100);
    const { X: k, V: m, oa: l } = lm(g, "auto", b, c, e, !0);
    return new Wl(1, k, l, 2, !0, h, m);
  };
  var rm = (a, b) => {
      const c = b.google_ad_format;
      if ("autorelaxed" == c) {
        a: {
          if ("pedestal" != b.google_content_recommendation_ui_type)
            for (const d of Xl)
              if (null != b[d]) {
                a = !0;
                break a;
              }
          a = !1;
        }
        return a ? 9 : 5;
      }
      if (jm(c)) return 1;
      if ("link" === c) return 4;
      if ("fluid" == c)
        return "in-article" !== b.google_ad_layout ||
          !a.location ||
          ("#hffwroe2etop" != a.location.hash &&
            "#hffwroe2etoq" != a.location.hash)
          ? 8
          : (qm(b), 1);
      if (27 === b.google_reactive_ad_format) return qm(b), 1;
    },
    tm = (a, b, c, d, e = !1) => {
      e =
        b.offsetWidth ||
        ((c.google_ad_resize || e) && Uh(b, d, "width", L)) ||
        c.google_ad_width ||
        0;
      4 === a && ((c.google_ad_format = "auto"), (a = 1));
      var f = (f = sm(a, e, b, c, d)) ? f : nm(e, c.google_ad_format, d, b, c);
      f.size().h(d, c, b);
      Vl(f, e, c);
      1 != a && ((a = f.size().height()), (b.style.height = a + "px"));
    };
  const sm = (a, b, c, d, e) => {
      const f = d.google_ad_height || Uh(c, e, "height", L);
      switch (a) {
        case 5:
          const { C: g, D: h } = Ri(247, () =>
            km(b, d.google_ad_format, e, c, d)
          );
          !0 === h && b != g && Sh(e, c);
          !0 === h
            ? (d.google_full_width_responsive_allowed = !0)
            : ((d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = h));
          return am(g, d);
        case 9:
          return bm(b, d);
        case 8:
          return fm(b, e, c, f, d);
        case 10:
          return pm(b, e, c, f, d);
      }
    },
    qm = (a) => {
      a.google_ad_format = "auto";
      a.armr = 3;
    };
  function um(a, b) {
    var c = Rc(b);
    if (c) {
      c = Q(c).clientWidth;
      const d = Uc(a, b) || {},
        e = d.direction;
      if ("0px" === d.width && "none" !== d.cssFloat) return -1;
      if ("ltr" === e && c)
        return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
      if ("rtl" === e && c)
        return (
          (a =
            b.document.body.getBoundingClientRect().right -
            a.getBoundingClientRect().right),
          Math.floor(
            Math.min(
              1200,
              c - a - Math.floor((c - b.document.body.clientWidth) / 2)
            )
          )
        );
    }
    return -1;
  }
  var vm = {
      google_ad_modifications: !0,
      google_analytics_domain_name: !0,
      google_analytics_uacct: !0,
      google_pause_ad_requests: !0,
      google_user_agent_client_hint: !0,
    },
    wm = (a) =>
      (a = a.innerText || a.innerHTML) &&
      (a = a
        .replace(/^\s+/, "")
        .split(/\r?\n/, 1)[0]
        .match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) &&
      RegExp("google_ad_client").test(a[1])
        ? a[1]
        : null,
    xm = (a) => {
      if ((a = a.innerText || a.innerHTML))
        if (
          ((a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";")),
          (a =
            a.match(/^\x3c!--+(.*?)(?:--+>)?$/) ||
            a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) &&
            RegExp("google_ad_client").test(a[1]))
        )
          return a[1];
      return null;
    },
    ym = (a) => {
      switch (a) {
        case "true":
          return !0;
        case "false":
          return !1;
        case "null":
          return null;
        case "undefined":
          break;
        default:
          try {
            const b = a.match(/^(?:'(.*)'|"(.*)")$/);
            if (b) return b[1] || b[2] || "";
            if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
              const c = parseFloat(a);
              return c === c ? c : void 0;
            }
          } catch (b) {}
      }
    };
  function zm(a) {
    if (a.google_ad_client) var b = String(a.google_ad_client);
    else {
      if (
        null ==
        (b =
          X(a).head_tag_slot_vars?.google_ad_client ??
          a.document
            .querySelector(".adsbygoogle[data-ad-client]")
            ?.getAttribute("data-ad-client"))
      ) {
        b: {
          b = a.document.getElementsByTagName("script");
          a = (a.navigator && a.navigator.userAgent) || "";
          a =
            RegExp(
              "appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
              "i"
            ).test(a) ||
            (/i(phone|pad|pod)/i.test(a) &&
              /applewebkit/i.test(a) &&
              !/version|safari/i.test(a) &&
              !zd())
              ? wm
              : xm;
          for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c];
            if (
              !d.google_parsed_script_for_pub_code &&
              ((d.google_parsed_script_for_pub_code = !0), (d = a(d)))
            ) {
              b = d;
              break b;
            }
          }
          b = null;
        }
        if (b) {
          a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
          for (c = {}; (d = a.exec(b)); ) c[d[1]] = ym(d[2]);
          b = c;
          b = b.google_ad_client ? b.google_ad_client : "";
        } else b = "";
      }
      b = b ?? "";
    }
    return b;
  }
  async function Am(a, b) {
    var c = 10;
    return 0 >= c
      ? Promise.reject()
      : b()
      ? Promise.resolve()
      : new Promise((d, e) => {
          const f = a.setInterval(() => {
            --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e());
          }, 200);
        });
  }
  function Bm(a) {
    const b = a.g.pc;
    return null !== b && 0 !== b ? b : (a.g.pc = jd(a.m));
  }
  function Cm(a) {
    const b = a.g.wpc;
    return null !== b && "" !== b ? b : (a.g.wpc = zm(a.m));
  }
  function Dm(a, b) {
    var c = new Fe();
    var d = Bm(a);
    c = A(c, 1, d, 0);
    d = Cm(a);
    c = A(c, 2, rb(d), "");
    c = A(c, 3, a.g.sd, 0);
    return A(c, 7, Math.round(b || a.m.performance.now()), 0);
  }
  async function Em(a) {
    await Am(a.m, () => !(!Bm(a) || !Cm(a)));
  }
  function Fm(a) {
    var b = N(Gm);
    b.j &&
      Ri(1178, () => {
        const c = b.l;
        a(c);
        b.g.psi = c.toJSON();
      });
  }
  async function Hm(a, b) {
    if (a.j && !a.g.le.includes(1)) {
      a.g.le.push(1);
      var c = a.m.performance.now();
      await Em(a);
      b = we(
        xe(
          ze(new Ae(), b),
          ue(te(new ve(), Q(a.m).scrollWidth), Q(a.m).scrollHeight)
        ),
        ue(te(new ve(), Q(a.m).clientWidth), Q(a.m).clientHeight)
      );
      var d = new Ce();
      S(bh)
        ? (A(b, 4, rb(a.i), ""), A(d, 1, rb(a.i), ""))
        : (A(b, 4, rb(a.m?.document?.URL), ""),
          A(d, 1, rb(a.m?.document?.URL), ""));
      var e = Gh(a.m);
      0 !== e && ye(b, re(new se(), e));
      $e(a.h, De(Dm(a, c), b));
      nf(a.h, a.m, () => {
        try {
          if (null != a.g?.psi) {
            var f = ec(Be, bc(a.g.psi));
            Lb(d, 2, f);
          }
        } catch {}
        f = a.h;
        var g = Dm(a);
        g = Mb(g, 8, Ee, d);
        $e(f, g);
      });
    }
  }
  async function Im(a, b, c) {
    if (a.j && c.length && !a.g.lgdp.includes(Number(b))) {
      a.g.lgdp.push(Number(b));
      var d = a.m.performance.now();
      await Em(a);
      var e = a.h;
      a = Dm(a, d);
      d = new qe();
      b = A(d, 1, t(b), 0);
      c = Ab(b, 2, c);
      c = Mb(a, 9, Ee, c);
      $e(e, c);
    }
  }
  var Gm = class {
    constructor(a) {
      this.m = vd() || window;
      this.h = a ?? new pf(100, 100, !0);
      this.g = xj(sj(), 33, () => {
        const b = zh($g);
        return {
          sd: b,
          ssp: 0 < b && Yc() < 1 / b,
          pc: null,
          wpc: null,
          cu: null,
          le: [],
          lgdp: [],
          psi: null,
        };
      });
    }
    get j() {
      return this.g.ssp;
    }
    get i() {
      return this.g.cu;
    }
    set i(a) {
      this.g.cu = a;
    }
    get l() {
      return null === this.g.psi ? new Be() : ec(Be, bc(this.g.psi));
    }
  };
  function Jm() {
    var a = window;
    return "on" === n.google_adtest ||
      "on" === n.google_adbreak_test ||
      a.location.host.endsWith("h5games.usercontent.goog")
      ? a.document
          .querySelector('meta[name="h5-games-eids"]')
          ?.getAttribute("content")
          ?.split(",")
          .map((b) => Math.floor(Number(b)))
          .filter((b) => !isNaN(b) && 0 < b) || []
      : [];
  }
  function Km(a, b) {
    return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1;
  }
  function Lm(a) {
    var b = M.document;
    if (b.currentScript) return Km(b.currentScript, a);
    for (const c of b.scripts) if (0 === Km(c, a)) return 0;
    return 1;
  }
  function Mm(a, b) {
    return {
      [3]: {
        [55]: () => 0 === a,
        [23]: (c) => cl(M, Number(c)),
        [24]: (c) => fl(Number(c)),
        [61]: () => G(b, 6),
        [63]: () => G(b, 6) || ".google.ch" === H(b, 8),
      },
      [4]: {},
      [5]: { [6]: () => H(b, 15) },
    };
  }
  function Nm(a = n) {
    return a.ggeac || (a.ggeac = {});
  }
  function Om() {
    var a = N(yh).j(vh.g, vh.defaultValue),
      b = M.document;
    if (a.length && b.head)
      for (const d of a)
        if ((a = d) && b.head) {
          var c = Tc("META");
          b.head.appendChild(c);
          c.httpEquiv = "origin-trial";
          c.content = a;
        }
  }
  function Pm(a, b = document) {
    return !!b.featurePolicy?.features().includes(a);
  }
  function Qm(a, b = document) {
    return !!b.featurePolicy?.allowedFeatures().includes(a);
  }
  function Rm(a, b) {
    try {
      const d = a.split(".");
      a = n;
      let e = 0,
        f;
      for (; null != a && e < d.length; e++)
        (f = a), (a = a[d[e]]), "function" === typeof a && (a = f[d[e]]());
      var c = a;
      if (typeof c === b) return c;
    } catch {}
  }
  var Sm = {
    [3]: {
      [8]: (a) => {
        try {
          return null != ba(a);
        } catch {}
      },
      [9]: (a) => {
        try {
          var b = ba(a);
        } catch {
          return;
        }
        if ((a = "function" === typeof b))
          (b = b && b.toString && b.toString()),
            (a = "string" === typeof b && -1 != b.indexOf("[native code]"));
        return a;
      },
      [10]: () => window === window.top,
      [6]: (a) => Sa(N(Tf).g(), Number(a)),
      [27]: (a) => {
        a = Rm(a, "boolean");
        return void 0 !== a ? a : void 0;
      },
      [60]: (a) => {
        try {
          return !!n.document.querySelector(a);
        } catch {}
      },
      [69]: (a) => Pm(a, n.document),
      [70]: (a) => Qm(a, n.document),
    },
    [4]: {
      [3]: () => ed(),
      [6]: (a) => {
        a = Rm(a, "number");
        return void 0 !== a ? a : void 0;
      },
    },
    [5]: {
      [2]: () => window.location.href,
      [3]: () => {
        try {
          return window.top.location.hash;
        } catch {
          return "";
        }
      },
      [4]: (a) => {
        a = Rm(a, "string");
        return void 0 !== a ? a : void 0;
      },
    },
  };
  const Tm = [12, 13, 20];
  function Um(a, b, c, d) {
    const e = N(uf).G;
    if (!ke(B(b, de, 3), e)) return null;
    var f = C(b, Mk, 2),
      g = I(b, 6);
    if (g) {
      Cb(d, 1, Le, t(g));
      f = e[4];
      switch (c) {
        case 2:
          var h = f[8];
          break;
        case 1:
          h = f[7];
      }
      c = void 0;
      if (h)
        try {
          (c = h(g)), A(d, 3, c, 0);
        } catch (k) {}
      return (b = Vm(b, c)) ? Wm(a, [b], 1) : null;
    }
    if ((g = I(b, 10))) {
      Cb(d, 2, Le, t(g));
      h = null;
      switch (c) {
        case 1:
          h = e[4][9];
          break;
        case 2:
          h = e[4][10];
          break;
        default:
          return null;
      }
      c = h ? h(String(g)) : void 0;
      if (void 0 === c && 1 === I(b, 11)) return null;
      void 0 !== c && A(d, 3, c, 0);
      return (b = Vm(b, c)) ? Wm(a, [b], 1) : null;
    }
    d = e ? Na(f, (k) => ke(B(k, de, 3), e)) : f;
    if (!d.length) return null;
    c = d.length * (Ob(b, 1) ?? 0);
    return (b = I(b, 4)) ? Xm(a, b, c, d) : Wm(a, d, c / 1e3);
  }
  function Ym(a, b, c) {
    a.g[c] || (a.g[c] = []);
    a = a.g[c];
    Sa(a, b) || a.push(b);
  }
  function Zm(a, b, c) {
    const d = [],
      e = $m(a.j, b);
    var f;
    if ((f = 9 !== b)) a.l[b] ? (f = !0) : ((a.l[b] = !0), (f = !1));
    if (f) return rf(a.I, b, c, d, [], 4), d;
    if (!e.length) return rf(a.I, b, c, d, [], 3), d;
    const g = Sa(Tm, b),
      h = [];
    Ma(e, (k) => {
      var m = new Ke(),
        l = Um(a, k, c, m);
      if (l) {
        0 !== Fb(m, Le) && h.push(m);
        m = l.getId();
        d.push(m);
        Ym(a, m, g ? 4 : c);
        if (0 !== I(k, 13)) {
          var q = a.i[String(I(k, 13))] || void 0;
          if (void 0 !== q && q !== m) {
            q = a.I;
            var w = a.i[String(I(k, 13))];
            k = I(k, 13);
            if (q.i) {
              var v = new Ge();
              w = u(v, 1, w);
              w = u(w, 2, m);
              k = u(w, 3, t(k));
              w = new Xe();
              k = Mb(w, 8, We, k);
              Ye(q.h, qf(q, k));
            }
          } else a.i[String(I(k, 13))] = m;
        }
        (l = C(l, ne, 2)) && (g ? Kf(l, Mf(), a.I, m) : Kf(l, [c], a.I, m));
      }
    });
    rf(a.I, b, c, d, h, 1);
    return d;
  }
  function an(a, b) {
    a.j.push(
      ...Na(
        Oa(b, (c) => new Ok(c)),
        (c) => !Sa(Tm, I(c, 1))
      )
    );
  }
  function Wm(a, b, c) {
    const d = a.h,
      e = Qa(b, (f) => !!d[f.getId()]);
    return e ? e : a.sa ? null : Vc(b, c);
  }
  function Xm(a, b, c, d) {
    const e = null != a.la[b] ? a.la[b] : 1e3;
    if (0 >= e) return null;
    d = Wm(a, d, c / e);
    a.la[b] = d ? 0 : e - c;
    return d;
  }
  function bn(a, b) {
    O(
      1,
      (c) => {
        a.h[c] = !0;
      },
      b
    );
    O(2, (c, d) => Zm(a, c, d), b);
    O(3, (c) => (a.g[c] || []).concat(a.g[4]), b);
    O(12, (c) => void an(a, c), b);
    O(16, (c, d) => void Ym(a, c, d), b);
  }
  var cn = class {
    constructor(a, b, c, { sa: d = !1, Yb: e = [], la: f = {} } = {}) {
      this.I = c;
      this.j = a.slice();
      this.l = {};
      this.sa = d;
      this.la = f;
      this.g = { [b]: [], [4]: [] };
      this.h = {};
      this.i = {};
      (a = Qd()) &&
        Ma(a.split(",") || [], (g) => {
          (g = Number(g)) && (this.h[g] = !0);
        });
      Ma(e, (g) => {
        this.h[g] = !0;
      });
    }
  };
  function $m(a, b) {
    return ((a = Qa(a, (c) => I(c, 1) === b)) && C(a, Nk, 2)) || [];
  }
  function Vm(a, b) {
    var c = C(a, Mk, 2),
      d = c.length,
      e = Ob(a, 1) ?? 0;
    a = Ob(a, 8) ?? 0;
    switch (c[0].getId()) {
      case 44793253:
        e = 14;
        break;
      case 44793254:
        e = 14;
        break;
      case 44793255:
        e = 139;
        break;
      case 44793256:
        e = 14;
        break;
      case 44793257:
        e = 139;
        break;
      case 44792405:
        e = 139;
        break;
      default:
        e *= d;
    }
    b = void 0 !== b ? b : Math.floor(1e3 * Yc());
    if (b < a || b - a >= e) return null;
    c = c[(b - a) % d];
    d = N(uf).G;
    return !c || (d && !ke(B(c, de, 3), d)) ? null : c;
  }
  function dn(a, b) {
    a.g = Of(14, b, () => {});
  }
  class en {
    constructor() {
      this.g = () => {};
    }
  }
  function fn(a) {
    N(en).g(a);
  }
  function gn({
    ab: a,
    G: b,
    Ya: c,
    Va: d = Nm(),
    Wa: e = 0,
    I: f = new tf(
      B(a, Pk, 5)?.g() ?? 0,
      B(a, Pk, 5)?.h() ?? 0,
      B(a, Pk, 5)?.i() ?? !1
    ),
  }) {
    d.hasOwnProperty("init-done")
      ? (Of(12, d, () => {})(Oa(C(a, Ok, 2), (g) => g.toJSON())),
        Of(13, d, () => {})(
          Oa(C(a, ne, 1), (g) => g.toJSON()),
          e
        ),
        b && Of(14, d, () => {})(b),
        hn(e, d))
      : (bn(new cn(C(a, Ok, 2), e, f, c), d),
        Pf(d),
        Qf(d),
        Rf(d),
        hn(e, d),
        Kf(C(a, ne, 1), [e], f, void 0, !0),
        (vf = vf || !(!c || !c.gb)),
        fn(Sm),
        b && fn(b));
  }
  function hn(a, b = Nm()) {
    Sf(N(Tf), b, a);
    jn(b, a);
    dn(N(en), b);
    N(yh).l();
  }
  function jn(a, b) {
    const c = N(yh);
    c.g = (d, e) => Of(5, a, () => !1)(d, e, b);
    c.h = (d, e) => Of(6, a, () => 0)(d, e, b);
    c.i = (d, e) => Of(7, a, () => "")(d, e, b);
    c.j = (d, e) => Of(8, a, () => [])(d, e, b);
    c.l = () => {
      Of(15, a, () => {})(b);
    };
  }
  function kn(a = Yc()) {
    return (b) => Zc(`${a}.${b}`) % 1e3;
  }
  function ln(a, b) {
    b = { [0]: kn(jd(b).toString()) };
    b = N(Tf).j(a, b);
    Vf.Z(1085, Im(N(Gm), a, b));
  }
  var mn = (a, b, c) => {
    var d = X(a);
    if (d.plle) hn(1, Nm(a));
    else {
      d.plle = !0;
      d = B(b, Qk, 12);
      var e = G(b, 9);
      gn({
        ab: d,
        G: Mm(c, b),
        Ya: { sa: e && !!a.google_disable_experiments, gb: e },
        Va: Nm(a),
        Wa: 1,
      });
      if ((c = H(b, 15))) (c = Number(c)), N(Tf).i(c);
      for (const f of zb(b, 19, pb)) (b = f), N(Tf).h(b);
      ln(12, a);
      ln(10, a);
      a = Rc(a) || a;
      ej(a.location, "google_mc_lab") && N(Tf).h(44738307);
      ej(a.location, "google_auto_storify_swipeable") && N(Tf).h(44773747);
      ej(a.location, "google_auto_storify_scrollable") && N(Tf).h(44773746);
    }
  };
  function nn({ qa: a, ua: b }) {
    return a || ("dev" === b ? "dev" : "");
  }
  function on(a) {
    U.va((b) => {
      b.shv = String(a);
      b.mjsv = nn({ qa: "m202306260101", ua: a });
      const c = N(Tf).g();
      var d = X(n);
      d.eids || (d.eids = []);
      d = d.eids;
      const e = Jm();
      b.eid = c.concat(d).concat(e).join(",");
    });
  }
  function pn(a) {
    on(H(a, 2));
    a = G(a, 6);
    fc(Tk, ce);
    Tk = a;
  }
  var qn = "undefined" === typeof sttc ? void 0 : sttc;
  function rn(a) {
    var b = U;
    try {
      return fc(a, be), new Sk(JSON.parse(a));
    } catch (c) {
      b.H(838, c instanceof Error ? c : Error(String(c)), void 0, (d) => {
        d.jspb = String(a);
      });
    }
    return new Sk();
  }
  function sn(a, b) {
    return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`;
  }
  function tn(a, b) {
    return `&${a}=${b.toFixed(3)}`;
  }
  function un() {
    const a = new Set(),
      b = gj();
    try {
      if (!b) return a;
      const c = b.pubads();
      for (const d of c.getSlots()) a.add(d.getSlotId().getDomId());
    } catch {}
    return a;
  }
  function vn(a) {
    a = a.id;
    return (
      null != a &&
      (un().has(a) ||
        a.startsWith("google_ads_iframe_") ||
        a.startsWith("aswift"))
    );
  }
  function wn(a, b, c) {
    if (!a.sources) return !1;
    switch (xn(a)) {
      case 2:
        const d = yn(a);
        if (d) return c.some((f) => zn(d, f));
        break;
      case 1:
        const e = An(a);
        if (e) return b.some((f) => zn(e, f));
    }
    return !1;
  }
  function xn(a) {
    if (!a.sources) return 0;
    a = a.sources.filter((b) => b.previousRect && b.currentRect);
    if (1 <= a.length) {
      a = a[0];
      if (a.previousRect.top < a.currentRect.top) return 2;
      if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
  }
  function An(a) {
    return Bn(a, (b) => b.currentRect);
  }
  function yn(a) {
    return Bn(a, (b) => b.previousRect);
  }
  function Bn(a, b) {
    return a.sources.reduce((c, d) => {
      d = b(d);
      return c
        ? d && 0 !== d.width * d.height
          ? d.top < c.top
            ? d
            : c
          : c
        : d;
    }, null);
  }
  function zn(a, b) {
    const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return 0 >= c || 0 >= a
      ? !1
      : 50 <= (100 * c * a) / ((b.right - b.left) * (b.bottom - b.top));
  }
  function Cn() {
    const a = Array.from(document.getElementsByTagName("iframe")).filter(vn),
      b = [...un()]
        .map((c) => document.getElementById(c))
        .filter((c) => null !== c);
    Dn = window.scrollX;
    En = window.scrollY;
    return (Fn = [...a, ...b].map((c) => c.getBoundingClientRect()));
  }
  function Gn() {
    var a = new Hn();
    if (S(wh)) {
      var b = window;
      if (!b.google_plmetrics && window.PerformanceObserver) {
        b.google_plmetrics = !0;
        b = [
          "layout-shift",
          "largest-contentful-paint",
          "first-input",
          "longtask",
        ];
        for (const c of b) In(a).observe({ type: c, buffered: !0 });
        Jn(a);
      }
    }
  }
  function In(a) {
    a.I ||
      (a.I = new PerformanceObserver(
        gi(640, (b) => {
          const c = Dn !== window.scrollX || En !== window.scrollY ? [] : Fn,
            d = Cn();
          for (const h of b.getEntries())
            switch (h.entryType) {
              case "layout-shift":
                b = a;
                var e = h,
                  f = c,
                  g = d;
                if (!e.hadRecentInput) {
                  b.B += Number(e.value);
                  Number(e.value) > b.J && (b.J = Number(e.value));
                  b.P += 1;
                  if ((f = wn(e, f, g))) (b.l += e.value), b.Ba++;
                  if (5e3 < e.startTime - b.Aa || 1e3 < e.startTime - b.Da)
                    (b.Aa = e.startTime), (b.h = 0), (b.j = 0);
                  b.Da = e.startTime;
                  b.h += e.value;
                  f && (b.j += e.value);
                  b.h > b.Y &&
                    ((b.Y = b.h),
                    (b.Ga = b.j),
                    (b.Fa = e.startTime + e.duration));
                }
                break;
              case "largest-contentful-paint":
                b = h;
                a.za = Math.floor(b.renderTime || b.loadTime);
                a.ya = b.size;
                break;
              case "first-input":
                b = h;
                a.wa = Number((b.processingStart - b.startTime).toFixed(3));
                a.xa = !0;
                break;
              case "longtask":
                (b = Math.max(0, h.duration - 50)),
                  (a.v += b),
                  (a.F = Math.max(a.F, b)),
                  (a.R += 1);
            }
        })
      ));
    return a.I;
  }
  function Jn(a) {
    const b = gi(641, () => {
        var d = document;
        2 ===
          (d.prerendering
            ? 3
            : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                d.visibilityState ||
                  d.webkitVisibilityState ||
                  d.mozVisibilityState ||
                  ""
              ] || 0) && Kn(a);
      }),
      c = gi(641, () => void Kn(a));
    document.addEventListener("visibilitychange", b);
    document.addEventListener("pagehide", c);
    a.fa = () => {
      document.removeEventListener("visibilitychange", b);
      document.removeEventListener("pagehide", c);
      In(a).disconnect();
    };
  }
  function Kn(a) {
    if (!a.Ca) {
      a.Ca = !0;
      In(a).takeRecords();
      var b =
        "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
      window.LayoutShift &&
        ((b += tn("cls", a.B)),
        (b += tn("mls", a.J)),
        (b += sn("nls", a.P)),
        window.LayoutShiftAttribution &&
          ((b += tn("cas", a.l)),
          (b += sn("nas", a.Ba)),
          (b += tn("was", a.Ga))),
        (b += tn("wls", a.Y)),
        (b += tn("tls", a.Fa)));
      window.LargestContentfulPaint &&
        ((b += sn("lcp", a.za)), (b += sn("lcps", a.ya)));
      window.PerformanceEventTiming && a.xa && (b += sn("fid", a.wa));
      window.PerformanceLongTaskTiming &&
        ((b += sn("cbt", a.v)), (b += sn("mbt", a.F)), (b += sn("nlt", a.R)));
      let d = 0;
      for (var c of document.getElementsByTagName("iframe")) vn(c) && d++;
      b += sn("nif", d);
      b += sn("ifi", yd(window));
      c = N(Tf).g();
      b += `&${"eid"}=${encodeURIComponent(c.join())}`;
      b += `&${"top"}=${n === n.top ? 1 : 0}`;
      b += a.Ea ? `&${"qqid"}=${encodeURIComponent(a.Ea)}` : sn("pvsid", jd(n));
      window.googletag && (b += "&gpt=1");
      window.fetch(b, {
        keepalive: !0,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors",
      });
      df(a);
    }
  }
  var Hn = class extends cf {
      constructor() {
        super();
        this.j = this.h = this.P = this.J = this.B = 0;
        this.Da = this.Aa = Number.NEGATIVE_INFINITY;
        this.wa =
          this.ya =
          this.za =
          this.Ba =
          this.Ga =
          this.l =
          this.Fa =
          this.Y =
            0;
        this.xa = !1;
        this.R = this.F = this.v = 0;
        this.I = null;
        this.Ca = !1;
        this.fa = () => {};
        const a = document.querySelector("[data-google-query-id]");
        this.Ea = a ? a.getAttribute("data-google-query-id") : null;
      }
      g() {
        super.g();
        this.fa();
      }
    },
    Dn,
    En,
    Fn = [];
  var Ln = class extends J {
    constructor() {
      super();
    }
    getVersion() {
      return H(this, 2);
    }
  };
  function Mn(a, b) {
    return u(a, 2, rb(b));
  }
  function Nn(a, b) {
    return u(a, 3, rb(b));
  }
  function On(a, b) {
    return u(a, 4, rb(b));
  }
  function Pn(a, b) {
    return u(a, 5, rb(b));
  }
  function Qn(a, b) {
    return u(a, 9, rb(b));
  }
  function Rn(a, b) {
    return Nb(a, 10, b);
  }
  function Sn(a, b) {
    return Pb(a, 11, b);
  }
  function Tn(a, b) {
    return u(a, 1, rb(b));
  }
  function Un(a, b) {
    return Pb(a, 7, b);
  }
  var Vn = class extends J {
    constructor() {
      super();
    }
  };
  Vn.u = [10, 6];
  const Wn =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Xn() {
    if ("function" !== typeof M.navigator?.userAgentData?.getHighEntropyValues)
      return null;
    const a = M.google_tag_data ?? (M.google_tag_data = {});
    if (a.uach_promise) return a.uach_promise;
    const b = M.navigator.userAgentData.getHighEntropyValues(Wn).then((c) => {
      a.uach ?? (a.uach = c);
      return c;
    });
    return (a.uach_promise = b);
  }
  function Yn(a) {
    return Sn(
      Rn(
        Pn(
          Mn(
            Tn(
              On(
                Un(
                  Qn(Nn(new Vn(), a.architecture || ""), a.bitness || ""),
                  a.mobile || !1
                ),
                a.model || ""
              ),
              a.platform || ""
            ),
            a.platformVersion || ""
          ),
          a.uaFullVersion || ""
        ),
        a.fullVersionList?.map((b) => {
          var c = new Ln();
          c = u(c, 1, rb(b.brand));
          return u(c, 2, rb(b.version));
        }) || []
      ),
      a.wow64 || !1
    );
  }
  function Zn() {
    return Xn()?.then((a) => Yn(a)) ?? null;
  }
  function $n(a, b) {
    b.google_ad_host || ((a = Zk(a)) && (b.google_ad_host = a));
  }
  function ao(a, b, c = "") {
    M.google_sa_impl &&
      !M.document.getElementById("google_shimpl") &&
      (delete M.google_sa_queue, delete M.google_sa_impl);
    M.google_sa_queue ||
      ((M.google_sa_queue = []),
      (M.google_process_slots = U.na(215, () => bo(M.google_sa_queue))),
      (a = co(c, a, b)),
      (Sc(M.document, a).id = "google_shimpl"));
  }
  function bo(a) {
    const b = a.shift();
    "function" === typeof b && U.da(216, b);
    a.length &&
      n.setTimeout(
        U.na(215, () => bo(a)),
        0
      );
  }
  function eo(a, b, c) {
    a.google_sa_queue = a.google_sa_queue || [];
    a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
  }
  function co(a, b, c) {
    b = G(c, 4) ? b.pb : b.qb;
    const d = {};
    a: {
      if (G(c, 4)) {
        if ((a = a || zm(M))) {
          a = { client: a, plah: M.location.host };
          break a;
        }
        throw Error("PublisherCodeNotFoundForAma");
      }
      a = {};
    }
    fo(a, d);
    fo(Ah() ? { bust: Ah() } : {}, d);
    return Ac(b, d);
  }
  function fo(a, b) {
    K(a, (c, d) => {
      void 0 === b[d] && (b[d] = c);
    });
  }
  function go(a) {
    a: {
      var b = [n.top];
      var c = [];
      let e = 0,
        f;
      for (; (f = b[e++]); ) {
        c.push(f);
        try {
          if (f.frames)
            for (let g = 0; g < f.frames.length && 1024 > b.length; ++g)
              b.push(f.frames[g]);
        } catch {}
      }
      b = c;
      for (c = 0; c < b.length; c++)
        try {
          var d = b[c].frames.google_esf;
          if (d) {
            qd = d;
            break a;
          }
        } catch (g) {}
      qd = null;
    }
    if (qd) return null;
    d = Tc("IFRAME");
    d.id = "google_esf";
    d.name = "google_esf";
    d.src = Cc(a.wb).toString();
    d.style.display = "none";
    return d;
  }
  function ho(a, b, c, d, e) {
    const f = e.bb;
    io(a, c, b);
    c = pa;
    const g = new Date().getTime();
    b.google_lrv = nn({ qa: "m202306260101", ua: H(d, 2) });
    b.google_async_iframe_id = f;
    b.google_start_time = c;
    b.google_bpp = g > c ? g - c : 1;
    a.google_sv_map = a.google_sv_map || {};
    a.google_sv_map[f] = b;
    d = a.document.getElementById(f + "_host")
      ? (h) => h()
      : (h) => window.setTimeout(h, 0);
    eo(
      a,
      () => {
        var { vb: h } = e;
        if (!h || !h.isConnected)
          if (
            ((h = a.document.getElementById(
              String(b.google_async_iframe_id) + "_host"
            )),
            null == h)
          )
            throw Error("no_div");
        (h = a.google_sa_impl({ pubWin: a, vars: b, innerInsElement: h })) &&
          U.Z(911, h);
      },
      d
    );
  }
  function io(a, b, c) {
    var d = c.google_ad_output,
      e = c.google_ad_format,
      f = c.google_ad_width || 0,
      g = c.google_ad_height || 0;
    e || ("html" !== d && null != d) || (e = f + "x" + g);
    d =
      !c.google_ad_slot ||
      c.google_override_format ||
      (!Ml[c.google_ad_width + "x" + c.google_ad_height] &&
        "aa" === c.google_loader_used);
    e && d ? (e = e.toLowerCase()) : (e = "");
    c.google_ad_format = e;
    if (
      "number" !== typeof c.google_reactive_sra_index ||
      !c.google_ad_unit_key
    ) {
      e = [
        c.google_ad_slot,
        c.google_orig_ad_format || c.google_ad_format,
        c.google_ad_type,
        c.google_orig_ad_width || c.google_ad_width,
        c.google_orig_ad_height || c.google_ad_height,
      ];
      d = [];
      f = 0;
      for (g = b; g && 25 > f; g = g.parentNode, ++f)
        9 === g.nodeType ? d.push("") : d.push(g.id);
      (d = d.join()) && e.push(d);
      c.google_ad_unit_key = Zc(e.join(":")).toString();
      e = [];
      for (d = 0; b && 25 > d; ++d) {
        f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
        a: {
          if (b && b.nodeName && b.parentElement) {
            g = b.nodeName.toString().toLowerCase();
            const h = b.parentElement.childNodes;
            let k = 0;
            for (let m = 0; m < h.length; ++m) {
              const l = h[m];
              if (l.nodeName && l.nodeName.toString().toLowerCase() === g) {
                if (b === l) {
                  g = "." + k;
                  break a;
                }
                ++k;
              }
            }
          }
          g = "";
        }
        e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
        b = b.parentElement;
      }
      b = e.join() + ":";
      e = [];
      if (a)
        try {
          let h = a.parent;
          for (d = 0; h && h !== a && 25 > d; ++d) {
            const k = h.frames;
            for (f = 0; f < k.length; ++f)
              if (a === k[f]) {
                e.push(f);
                break;
              }
            a = h;
            h = a.parent;
          }
        } catch (h) {}
      c.google_ad_dom_fingerprint = Zc(b + e.join()).toString();
    }
  }
  function jo() {
    var a = Rc(n);
    a &&
      ((a = Ag(a)),
      a.tagSpecificState[1] ||
        (a.tagSpecificState[1] = { debugCard: null, debugCardRequested: !1 }));
  }
  function ko() {
    const a = Zn();
    null != a &&
      a.then((b) => {
        a: {
          kb = !0;
          try {
            var c = JSON.stringify(b.toJSON(), Ub);
            break a;
          } finally {
            kb = !1;
          }
          c = void 0;
        }
        M.google_user_agent_client_hint = c;
      });
    Om();
  }
  function lo(a, b) {
    switch (a) {
      case "google_reactive_ad_format":
        return (a = parseInt(b, 10)), isNaN(a) ? 0 : a;
      case "google_allow_expandable_ads":
        return /^true$/.test(b);
      default:
        return b;
    }
  }
  function mo(a, b) {
    if (a.getAttribute("src")) {
      var c = a.getAttribute("src") || "",
        d = Oc(c, "client");
      d && (b.google_ad_client = lo("google_ad_client", d));
      (c = Oc(c, "host")) && (b.google_ad_host = lo("google_ad_host", c));
    }
    a = a.attributes;
    c = a.length;
    for (d = 0; d < c; d++) {
      var e = a[d];
      if (/data-/.test(e.name)) {
        const f = qa(
          e.name
            .replace("data-matched-content", "google_content_recommendation")
            .replace("data", "google")
            .replace(/-/g, "_")
        );
        b.hasOwnProperty(f) || ((e = lo(f, e.value)), null !== e && (b[f] = e));
      }
    }
  }
  function no(a) {
    if ((a = ud(a)))
      switch (a.data && a.data.autoFormat) {
        case "rspv":
          return 13;
        case "mcrspv":
          return 15;
        default:
          return 14;
      }
    else return 12;
  }
  function oo(a, b, c, d) {
    mo(a, b);
    if (
      c.document &&
      c.document.body &&
      !rm(c, b) &&
      !b.google_reactive_ad_format
    ) {
      var e = parseInt(a.style.width, 10),
        f = um(a, c);
      if (0 < f && e > f) {
        var g = parseInt(a.style.height, 10);
        e = !!Ml[e + "x" + g];
        var h = f;
        if (e) {
          const k = Nl(f, g);
          if (k) (h = k), (b.google_ad_format = k + "x" + g + "_0ads_al");
          else throw new T("No slot size for availableWidth=" + f);
        }
        b.google_ad_resize = !0;
        b.google_ad_width = h;
        e || ((b.google_ad_format = null), (b.google_override_format = !0));
        f = h;
        a.style.width = `${f}px`;
        g = nm(f, "auto", c, a, b);
        h = f;
        g.size().h(c, b, a);
        Vl(g, h, b);
        g = g.size();
        b.google_responsive_formats = null;
        g.L > f &&
          !e &&
          ((b.google_ad_width = g.L), (a.style.width = `${g.L}px`));
      }
    }
    (e = a.offsetWidth) || (e = Uh(a, c, "width", L));
    e = e || b.google_ad_width || 0;
    if (488 > Q(c).clientWidth) {
      f = Rc(c) || c;
      g = b.google_ad_client;
      if (
        (d =
          ej(f.location, "google_responsive_slot_preview") ||
          S(lh) ||
          cl(f, 1, g, d))
      )
        b: if (
          b.google_reactive_ad_format ||
          b.google_ad_resize ||
          rm(c, b) ||
          Jh(a, b)
        )
          d = !1;
        else {
          for (d = a; d; d = d.parentElement) {
            f = Uc(d, c);
            if (!f) {
              b.gfwrnwer = 18;
              d = !1;
              break b;
            }
            if (!Sa(["static", "relative"], f.position)) {
              b.gfwrnwer = 17;
              d = !1;
              break b;
            }
          }
          d = Nh(c, a, e, 0.3, b);
          !0 !== d ? ((b.gfwrnwer = d), (d = !1)) : (d = c === c.top ? !0 : !1);
        }
      d
        ? ((b.google_resizing_allowed = !0),
          (b.ovlp = !0),
          (b.google_ad_format = "auto"),
          (b.iaaso = !0),
          (b.armr = 1),
          (d = !0))
        : (d = !1);
    } else d = !1;
    if ((e = rm(c, b))) tm(e, a, b, c, d);
    else {
      if (Jh(a, b)) {
        if ((d = Uc(a, c)))
          (a.style.width = d.width), (a.style.height = d.height), Ih(d, b);
        b.google_ad_width || (b.google_ad_width = a.offsetWidth);
        b.google_ad_height || (b.google_ad_height = a.offsetHeight);
        b.google_loader_features_used = 256;
        b.google_responsive_auto_format = no(c);
      } else Ih(a.style, b);
      (c.location && "#gfwmrp" == c.location.hash) ||
      (12 == b.google_responsive_auto_format &&
        "true" == b.google_full_width_responsive)
        ? tm(10, a, b, c, !1)
        : 0.01 > Math.random() &&
          12 === b.google_responsive_auto_format &&
          ((a = Oh(
            a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width,
            c,
            a,
            b
          )),
          !0 !== a ? ((b.efwr = !1), (b.gfwrnwer = a)) : (b.efwr = !0));
    }
  }
  function po(a) {
    if (a.h) return a.h;
    a.F && a.F(a.j) ? (a.h = a.j) : (a.h = dd(a.j, a.J));
    return a.h ?? null;
  }
  var qo = class extends cf {
    constructor(a, b, c) {
      super();
      this.J = a;
      this.F = b;
      this.P = c;
      this.B = new Map();
      this.v = new Map();
      this.R = new Map();
      this.l = void 0;
      this.j = M;
    }
    g() {
      delete this.h;
      this.B.clear();
      this.v.clear();
      this.R.clear();
      this.l && (tc(this.j, "message", this.l), delete this.l);
      delete this.j;
      delete this.P;
      super.g();
    }
  };
  const ro = (a, b) => {
      (0, a.__uspapi)("getUSPData", 1, (c, d) => {
        b.K({ consentData: c ?? void 0, Za: d ? void 0 : 2 });
      });
    },
    so = {
      ib: (a) => a.K,
      jb: (a, b) => ({
        __uspapiCall: { callId: b, command: "getUSPData", version: 1 },
      }),
      lb: (a, b) => {
        b = b.__uspapiReturn;
        a({ consentData: b.returnValue ?? void 0, Za: b.success ? void 0 : 2 });
      },
    };
  function to(a) {
    let b = {};
    "string" === typeof a.data ? (b = JSON.parse(a.data)) : (b = a.data);
    return { payload: b, nb: b.__uspapiReturn.callId };
  }
  var uo = class extends cf {
    constructor() {
      super();
      this.caller = new qo(
        "__uspapiLocator",
        (a) => "function" === typeof a.__uspapi,
        to
      );
      this.caller.B.set("getDataWithCallback", ro);
      this.caller.v.set("getDataWithCallback", so);
    }
    g() {
      df(this.caller);
      super.g();
    }
  };
  var vo = ic(class extends J {});
  const wo = (a, b) => {
      const c = {
        cb: (d) => {
          d = vo(d);
          b.K({ consentData: d });
        },
      };
      b.spsp && (c.spsp = b.spsp);
      a = a.googlefc || (a.googlefc = {});
      a.__fci = a.__fci || [];
      a.__fci.push(b.command, c);
    },
    xo = {
      ib: (a) => a.K,
      jb: (a, b) => ({
        __fciCall: { callId: b, command: a.command, spsp: a.spsp || void 0 },
      }),
      lb: (a, b) => {
        a({ consentData: b });
      },
    };
  function yo(a) {
    a = vo(a.data.__fciReturn);
    return { payload: a, nb: vb(a, 1) ?? 0 };
  }
  var zo = class extends cf {
    constructor() {
      super();
      this.h = this.j = !1;
      this.caller = new qo("googlefcPresent", void 0, yo);
      this.caller.B.set("getDataWithCallback", wo);
      this.caller.v.set("getDataWithCallback", xo);
    }
    g() {
      df(this.caller);
      super.g();
    }
  };
  var Ao = (a) => {
    sc(window, "message", (b) => {
      let c;
      try {
        c = JSON.parse(b.data);
      } catch (d) {
        return;
      }
      !c || "sc-cnf" !== c.googMsgType || a(c, b);
    });
  };
  let Bo = null;
  const Co = [],
    Do = new Map();
  let Eo = -1;
  function Fo(a) {
    return bi.test(a.className) && "done" !== a.dataset.adsbygoogleStatus;
  }
  function Go(a, b, c) {
    a.dataset.adsbygoogleStatus = "done";
    Ho(a, b, c);
  }
  function Ho(a, b, c) {
    var d = window;
    d.google_spfd || (d.google_spfd = oo);
    var e = b.google_reactive_ads_config;
    e || oo(a, b, d, c);
    $n(d, b);
    if (!Io(a, b, d)) {
      e || (d.google_lpabyc = Lh(a, d) + (Uh(a, d, "height", L) || 0));
      if (e) {
        e = e.page_level_pubvars || {};
        if (
          X(M).page_contains_reactive_tag &&
          !X(M).allow_second_reactive_tag
        ) {
          if (e.pltais) {
            Wk(!1);
            return;
          }
          throw new T("Only one 'enable_page_level_ads' allowed per page.");
        }
        X(M).page_contains_reactive_tag = !0;
        Wk(7 === e.google_pgb_reactive);
      }
      b.google_unique_id = xd(d);
      K(vm, (f, g) => {
        b[g] = b[g] || d[g];
      });
      "sd" !== b.google_loader_used && (b.google_loader_used = "aa");
      b.google_reactive_tag_first = 1 === (X(M).first_tag_on_page || 0);
      Ri(164, () => {
        var f = d.document;
        for (var g = void 0, h = 0; !g || f.getElementById(g + "_host"); )
          g = "aswift_" + h++;
        f = g;
        g = Number(b.google_ad_width || 0);
        h = Number(b.google_ad_height || 0);
        const k = Tc("DIV");
        k.id = f + "_host";
        const m = k.style;
        m.border = "none";
        m.height = `${h}px`;
        m.width = `${g}px`;
        m.margin = "0px";
        m.padding = "0px";
        m.position = "relative";
        m.visibility = "visible";
        m.backgroundColor = "transparent";
        k.style.display = "inline-block";
        a.appendChild(k);
        ho(d, b, a, c, { bb: f, vb: k });
      });
    }
  }
  function Io(a, b, c) {
    var d = b.google_reactive_ads_config,
      e =
        "string" === typeof a.className &&
        RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
      f = Uk(c);
    if (f && f.Ha && "on" !== b.google_adtest && !e) {
      e = Lh(a, c);
      const g = Q(c).clientHeight;
      e = 0 == g ? null : e / g;
      if (!f.pa || (f.pa && (e || 0) >= f.pa))
        return (
          (a.className += " adsbygoogle-ablated-ad-slot"),
          (c = c.google_sv_map = c.google_sv_map || {}),
          (d = fa(a)),
          (b.google_element_uid = d),
          (c[b.google_element_uid] = b),
          a.setAttribute("google_element_uid", String(d)),
          "slot" === f.tb &&
            (null !== cd(a.getAttribute("width")) && a.setAttribute("width", 0),
            null !== cd(a.getAttribute("height")) &&
              a.setAttribute("height", 0),
            (a.style.width = "0px"),
            (a.style.height = "0px")),
          !0
        );
    }
    if (
      (f = Uc(a, c)) &&
      "none" === f.display &&
      !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)
    )
      return (
        c.document.createComment &&
          a.appendChild(
            c.document.createComment(
              "No ad requested because of display:none on the adsbygoogle tag"
            )
          ),
        !0
      );
    a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
    return (1 !== b.google_reactive_ad_format &&
      8 !== b.google_reactive_ad_format) ||
      !a
      ? !1
      : (n.console &&
          n.console.warn(
            "Adsbygoogle tag with data-reactive-ad-format=" +
              String(b.google_reactive_ad_format) +
              " is deprecated. Check out page-level ads at https://www.google.com/adsense"
          ),
        !0);
  }
  function Jo(a) {
    var b = document.getElementsByTagName("INS");
    for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
      var c = e;
      if (
        Fo(c) &&
        "reserved" !== c.dataset.adsbygoogleStatus &&
        (!a || e.id === a)
      )
        return e;
    }
    return null;
  }
  function Ko(a, b, c) {
    if (a && "shift" in a) {
      Fm((e) => {
        Qb(Gb(e), 2) || ((e = Gb(e)), Bb(e, 2));
      });
      for (var d = 20; 0 < a.length && 0 < d; ) {
        try {
          Lo(a.shift(), b, c);
        } catch (e) {
          setTimeout(() => {
            throw e;
          });
        }
        --d;
      }
    }
  }
  function Mo() {
    const a = Tc("INS");
    a.className = "adsbygoogle";
    a.className += " adsbygoogle-noablate";
    fd(a, { display: "none" });
    return a;
  }
  function No(a, b) {
    const c = {},
      d = ol(a.google_ad_client, b);
    K(zg, (g, h) => {
      !1 === a.enable_page_level_ads
        ? (c[h] = !1)
        : a.hasOwnProperty(h)
        ? (c[h] = a[h])
        : d.includes(g) && (c[h] = !1);
    });
    ea(a.enable_page_level_ads) &&
      (c.page_level_pubvars = a.enable_page_level_ads);
    const e = Mo();
    kd.body.appendChild(e);
    const f = {
      google_reactive_ads_config: c,
      google_ad_client: a.google_ad_client,
    };
    f.google_pause_ad_requests = !!X(M).pause_ad_requests;
    Go(e, f, b);
    Fm((g) => {
      Qb(Gb(g), 6) || ((g = Gb(g)), Bb(g, 6));
    });
  }
  function Oo(a, b) {
    Ag(n).wasPlaTagProcessed = !0;
    const c = () => {
        No(a, b);
      },
      d = n.document;
    if (d.body || "complete" === d.readyState || "interactive" === d.readyState)
      No(a, b);
    else {
      const e = rc(U.na(191, c));
      sc(d, "DOMContentLoaded", e);
      new n.MutationObserver((f, g) => {
        d.body && (e(), g.disconnect());
      }).observe(d, { childList: !0, subtree: !0 });
    }
  }
  function Lo(a, b, c) {
    const d = {};
    Ri(
      165,
      () => Po(a, d, b, c),
      (e) => {
        e.client = e.client || d.google_ad_client || a.google_ad_client;
        e.slotname = e.slotname || d.google_ad_slot;
        e.tag_origin = e.tag_origin || d.google_tag_origin;
      }
    );
  }
  function Qo(a) {
    delete a.google_checked_head;
    K(a, (b, c) => {
      ai[c] ||
        (delete a[c],
        (b = c.replace("google", "data").replace(/_/g, "-")),
        n.console.warn(`AdSense head tag doesn't support ${b} attribute.`));
    });
  }
  function Ro(a, b) {
    var c =
      M.document.querySelector(
        'script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])'
      ) ||
      M.document.querySelector(
        'script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])'
      );
    if (c) {
      c.setAttribute("data-checked-head", "true");
      var d = X(window);
      if (d.head_tag_slot_vars) So(c);
      else {
        Fm((g) => {
          g = Gb(g);
          A(g, 7, ob(!0), !1);
        });
        var e = {};
        mo(c, e);
        Qo(e);
        var f = xc(e);
        d.head_tag_slot_vars = f;
        c = { google_ad_client: e.google_ad_client, enable_page_level_ads: e };
        M.adsbygoogle || (M.adsbygoogle = []);
        d = M.adsbygoogle;
        d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
        e.google_adbreak_test || b.h()?.h()
          ? To(f, a)
          : Ao(() => {
              To(f, a);
            });
      }
    }
  }
  function So(a) {
    const b = X(window).head_tag_slot_vars,
      c = a.getAttribute("src") || "";
    if (
      (a = Oc(c, "client") || a.getAttribute("data-ad-client") || "") &&
      a !== b.google_ad_client
    )
      throw new T(
        "Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " +
          a +
          ", " +
          b.google_ad_client
      );
  }
  function Uo(a) {
    if ("object" === typeof a && null != a) {
      if ("string" === typeof a.type) return 2;
      if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks)
        return 3;
    }
    return 0;
  }
  function Po(a, b, c, d) {
    if (null == a) throw new T("push() called with no parameters.");
    Fm((f) => {
      Qb(Gb(f), 3) || ((f = Gb(f)), Bb(f, 3));
    });
    d.i() && Vo(a, d.g().g(), H(d, 2));
    var e = Uo(a);
    if (0 !== e)
      if (
        ((d = Xk()),
        d.first_slotcar_request_processing_time ||
          ((d.first_slotcar_request_processing_time = Date.now()),
          (d.adsbygoogle_execution_start_time = pa)),
        null == Bo)
      )
        Wo(a), Co.push(a);
      else if (3 === e) {
        const f = Bo;
        Ri(787, () => {
          f.handleAdConfig(a);
        });
      } else Ti(730, Bo.handleAdBreak(a));
    else {
      pa = new Date().getTime();
      ao(c, d, Xo(a));
      Yo();
      a: {
        if (void 0 != a.enable_page_level_ads) {
          if ("string" === typeof a.google_ad_client) {
            e = !0;
            break a;
          }
          throw new T("'google_ad_client' is missing from the tag config.");
        }
        e = !1;
      }
      if (e)
        Fm((f) => {
          Qb(Gb(f), 4) || ((f = Gb(f)), Bb(f, 4));
        }),
          Zo(a, d);
      else if (
        ((e = a.params) &&
          K(e, (f, g) => {
            b[g] = f;
          }),
        "js" === b.google_ad_output)
      )
        console.warn(
          "Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads."
        );
      else {
        e = $o(a.element);
        mo(e, b);
        c = X(n).head_tag_slot_vars || {};
        K(c, (f, g) => {
          b.hasOwnProperty(g) || (b[g] = f);
        });
        if (e.hasAttribute("data-require-head") && !X(n).head_tag_slot_vars)
          throw new T(
            "AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com."
          );
        if (!b.google_ad_client)
          throw new T("Ad client is missing from the slot.");
        if ((c = 0 === (X(M).first_tag_on_page || 0) && Hl(b)))
          Fm((f) => {
            Qb(Gb(f), 5) || ((f = Gb(f)), Bb(f, 5));
          }),
            ap(c);
        0 === (X(M).first_tag_on_page || 0) && (X(M).first_tag_on_page = 2);
        b.google_pause_ad_requests = !!X(M).pause_ad_requests;
        Go(e, b, d);
      }
    }
  }
  let bp = !1;
  function Vo(a, b, c) {
    bp ||
      ((bp = !0),
      (a = Xo(a) || zm(M)),
      Si("predictive_abg", { a_c: a, p_c: b.join(), b_v: c }, 0.01));
  }
  function Xo(a) {
    return a.google_ad_client
      ? a.google_ad_client
      : (a = a.params) && a.google_ad_client
      ? a.google_ad_client
      : "";
  }
  function Yo() {
    if (S(gh)) {
      var a = Uk(M);
      if (!(a = a && a.Ha)) {
        try {
          var b = M.localStorage;
        } catch (c) {
          b = null;
        }
        b = b ? Jk(b) : null;
        a = !(b && Ik(b) && b);
      }
      a || Vk(M, 1);
    }
  }
  function ap(a) {
    ld(() => {
      Ag(n).wasPlaTagProcessed || (n.adsbygoogle && n.adsbygoogle.push(a));
    });
  }
  function Zo(a, b) {
    0 === (X(M).first_tag_on_page || 0) && (X(M).first_tag_on_page = 1);
    if (a.tag_partner) {
      var c = a.tag_partner;
      const d = X(n);
      d.tag_partners = d.tag_partners || [];
      d.tag_partners.push(c);
    }
    Kl(a, b);
    Oo(a, b);
  }
  function $o(a) {
    if (a) {
      if (!Fo(a) && (a.id ? (a = Jo(a.id)) : (a = null), !a))
        throw new T("'element' has already been filled.");
      if (!("innerHTML" in a))
        throw new T("'element' is not a good DOM element.");
    } else if (((a = Jo()), !a))
      throw new T(
        "All ins elements in the DOM with class=adsbygoogle already have ads in them."
      );
    return a;
  }
  function cp() {
    var a = new Jj(M),
      b = new uo();
    const c = new zo();
    var d = M.__cmp ? 1 : 0;
    a = Gj(a) ? 1 : 0;
    b = po(b.caller) ? 1 : 0;
    c.j || ((c.h = !!po(c.caller)), (c.j = !0));
    Si(
      "cmpMet",
      { tcfv1: d, tcfv2: a, usp: b, fc: c.h ? 1 : 0, ptt: 9 },
      0.001
    );
  }
  function dp(a) {
    sj().S[vj(26)] = !!Number(a);
  }
  function ep(a) {
    Number(a)
      ? (X(M).pause_ad_requests = !0)
      : ((X(M).pause_ad_requests = !1),
        (a = () => {
          if (!X(M).pause_ad_requests) {
            var b = {};
            let c;
            "function" === typeof window.CustomEvent
              ? (c = new CustomEvent(
                  "adsbygoogle-pub-unpause-ad-requests-event",
                  b
                ))
              : ((c = document.createEvent("CustomEvent")),
                c.initCustomEvent(
                  "adsbygoogle-pub-unpause-ad-requests-event",
                  !!b.bubbles,
                  !!b.cancelable,
                  b.detail
                ));
            M.dispatchEvent(c);
          }
        }),
        n.setTimeout(a, 0),
        n.setTimeout(a, 1e3));
  }
  function fp(a) {
    try {
      Object.defineProperty(a, "requestNonPersonalizedAds", { set: dp }),
        Object.defineProperty(a, "pauseAdRequests", { set: ep }),
        Object.defineProperty(a, "onload", { set: gp });
    } catch {}
  }
  function gp(a) {
    a && a.call && "function" === typeof a && window.setTimeout(a, 0);
  }
  function To(a, b) {
    b = Gl(Ac(b.sb, Ah() ? { bust: Ah() } : {})).then((c) => {
      null == Bo && (c.init(a), (Bo = c), hp(c));
    });
    U.Z(723, b);
    b.finally(() => {
      Co.length = 0;
      Si("slotcar", {
        event: "api_ld",
        time: Date.now() - pa,
        time_pr: Date.now() - Eo,
      });
    });
  }
  function hp(a) {
    for (const [c, d] of Do) {
      var b = c;
      const e = d;
      -1 !== e && (n.clearTimeout(e), Do.delete(b));
    }
    for (b = 0; b < Co.length; b++) {
      if (Do.has(b)) continue;
      const c = Co[b],
        d = Uo(c);
      Ri(723, () => {
        if (3 === d) a.handleAdConfig(c);
        else if (2 === d) {
          var e = a.handleAdBreakBeforeReady(c);
          U.Z(730, e);
        }
      });
    }
  }
  function Wo(a) {
    var b = Co.length;
    if (2 === Uo(a) && "preroll" === a.type && null != a.adBreakDone) {
      var c = a.adBreakDone;
      -1 === Eo && (Eo = Date.now());
      var d = n.setTimeout(() => {
        try {
          c({
            breakType: "preroll",
            breakName: a.name,
            breakFormat: "preroll",
            breakStatus: "timeout",
          }),
            Do.set(b, -1),
            Si("slotcar", { event: "pr_to", source: "adsbygoogle" });
        } catch (e) {
          console.error(
            "[Ad Placement API] adBreakDone callback threw an error:",
            e instanceof Error ? e : Error(String(e))
          );
        }
      }, 1e3 * zh(uh));
      Do.set(b, d);
    }
  }
  function ip() {
    var a = M.document,
      b = wd`https://googleads.g.doubleclick.net`;
    const c = a.createElement("LINK");
    c.crossOrigin = "";
    a: {
      if (b instanceof zc) c.href = Cc(b).toString();
      else {
        if (-1 === Pc.indexOf("preconnect"))
          throw Error(
            'TrustedResourceUrl href attribute required with rel="preconnect"'
          );
        if (b instanceof Gc)
          b =
            b instanceof Gc && b.constructor === Gc
              ? b.g
              : "type_error:SafeUrl";
        else {
          c: {
            try {
              var d = new URL(b);
            } catch (e) {
              d = "https:";
              break c;
            }
            d = d.protocol;
          }
          b = "javascript:" !== d ? b : void 0;
        }
        if (void 0 === b) break a;
        c.href = b;
      }
      c.rel = "preconnect";
    }
    a.head.appendChild(c);
  }
  (function (a, b, c, d = () => {}) {
    U.Pa(Ui);
    Ri(166, () => {
      const e = rn(b);
      pn(e);
      d();
      sd(16, [1, e.toJSON()]);
      var f = vd(ud(M)) || M;
      const g = c(nn({ qa: a, ua: H(e, 2) }), e);
      var h = null === M.document.currentScript ? 1 : Lm(g.ub);
      S(Zg) && ip();
      dl(f, e);
      mn(f, e, h);
      Fm((l) => {
        A(l, 1, (D(l, 1) ?? 0) + 1, 0);
        M.top === M && A(l, 2, (D(l, 2) ?? 0) + 1, 0);
        Qb(Gb(l), 1) || ((l = Gb(l)), Bb(l, 1));
      });
      Ti(1086, Hm(N(Gm), 0 === h));
      if (!Ea() || 0 <= ra(Ka(), 11)) {
        Qi(S(xh));
        ko();
        tk();
        try {
          Gn();
        } catch {}
        jo();
        Ro(g, e);
        f = window;
        h = f.adsbygoogle;
        if (!h || !h.loaded) {
          Si(
            "new_abg_tag",
            { value: `${G(e, 16)}`, host_v: `${G(e, 22)}`, frequency: 0.01 },
            0.01
          );
          cp();
          var k = {
            push: (l) => {
              Lo(l, g, e);
            },
            loaded: !0,
          };
          fp(k);
          if (h)
            for (var m of ["requestNonPersonalizedAds", "pauseAdRequests"])
              void 0 !== h[m] && (k[m] = h[m]);
          Ko(h, g, e);
          f.adsbygoogle = k;
          h && (k.onload = h.onload);
          S(ch) || ((m = go(g)) && document.documentElement.appendChild(m));
        }
      }
    });
  })("m202306260101", qn, function (a, b) {
    const c = 2012 < (D(b, 1) ?? 0) ? `_fy${D(b, 1) ?? 0}` : "";
    var d = H(b, 3);
    const e = H(b, 2);
    b = wd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`;
    d = wd`https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`;
    return {
      sb: b,
      qb: wd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${c}.js`,
      pb: wd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${c}.js`,
      Zb: wd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_instrumented${c}.js`,
      wb: d,
      ub: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/,
    };
  });
}).call(
  this,
  '[2021,"r20230627","r20190131",1,null,1,null,".google.pl",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[1270,null,null,[]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]],[1247,null,null,[1]],[1252,null,null,[1]],[1240,null,null,[1]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1223,null,null,[1]],[null,null,null,[null,null,null,["44786015","44786016"]],null,1261],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1276,null,null,[]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1198,null,null,[1]],[1206,null,null,[1]],[1190,null,null,[1]],[null,1245,null,[null,3600]],[null,542281105,null,[null,-1]],[null,506864295,null,[null,300]],[null,508040914,null,[null,100]],[538121421,null,null,[1]],[522099048,null,null,[1]],[null,524139171,null,[null,0.1]],[501545959,null,null,[1]],[538425635,null,null,[1]],[537288587,null,null,[1]],[null,469675170,null,[null,30000]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,["1","2"]],null,10003],[1086,null,null,[1]],[63682,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10007,null,null,[1]],[10005,null,null,[1]],[1033,null,null,[1]],[10006,null,null,[1]],[null,null,null,[null,null,null,["A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf/RP0paks+RoTYbXHxceT/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==","AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="]],null,1934],[1957,null,null,[1]],[null,1972,null,[]],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[200,[[44783616,null,[4,null,70,null,null,null,null,["attribution-reporting"]]],[44791426,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]],null,77],[200,[[44790623,null,[4,null,70,null,null,null,null,["attribution-reporting"]]],[44791427,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]],null,77]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776369],[44792510]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[10,[[31071258],[31071259]]],[1,[[31074771],[31074772,[[531007060,null,null,[1]],[531582260,null,null,[1]]]]]],[1000,[[31075572,[[null,null,14,[null,null,"31075572"]]],[6,null,null,null,6,null,"31075572"]],[31075573,[[null,null,14,[null,null,"31075573"]]],[6,null,null,null,6,null,"31075573"]]],[4,null,55],63],[1000,[[31075623,[[null,null,14,[null,null,"31075623"]]],[6,null,null,null,6,null,"31075623"]],[31075624,[[null,null,14,[null,null,"31075624"]]],[6,null,null,null,6,null,"31075624"]]],[4,null,55],63],[100,[[31075625],[31075626,[[1269,null,null,[1]]]]]],[50,[[31075641],[31075642,[[1229,null,null,[1]]]],[31075643,[[1230,null,null,[1]]]],[31075644,[[1231,null,null,[1]]]],[31075645,[[1230,null,null,[1]],[1229,null,null,[1]],[1231,null,null,[1]]]]],null,72],[1000,[[31075664,[[null,null,14,[null,null,"31075664"]]],[6,null,null,null,6,null,"31075664"]],[31075665,[[null,null,14,[null,null,"31075665"]]],[6,null,null,null,6,null,"31075665"]]],[4,null,55],63],[1000,[[31075720,[[null,null,14,[null,null,"31075720"]]],[6,null,null,null,6,null,"31075720"]],[31075721,[[null,null,14,[null,null,"31075721"]]],[6,null,null,null,6,null,"31075721"]]],[4,null,55],63],[1000,[[31075735,[[null,null,14,[null,null,"31075735"]]],[6,null,null,null,6,null,"31075735"]],[31075736,[[null,null,14,[null,null,"31075736"]]],[6,null,null,null,6,null,"31075736"]]],[4,null,55],63],[10,[[31075757],[31075758,[[540827546,null,null,[1]]]]]],[1000,[[31075779,[[null,null,14,[null,null,"31075779"]]],[6,null,null,null,6,null,"31075779"]],[31075780,[[null,null,14,[null,null,"31075780"]]],[6,null,null,null,6,null,"31075780"]]],[4,null,55],63],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[1,[[42532262],[42532263,[[null,1263,null,[null,16]]]],[42532264,[[null,1263,null,[null,4294967296]]]],[42532265,[[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532266,[[null,1263,null,[null,4294967296]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532267,[[null,1263,null,[null,16]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532268,[[1266,null,null,[1]]]]]],[10,[[42532314],[42532315,[[1267,null,null,[1]]]],[42532316,[[1268,null,null,[1]]]],[42532317,[[1267,null,null,[1]],[1268,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[50,[[44772268],[44772269,[[1185,null,null,[1]]]]],null,76],[10,[[44776368],[44779257],[44784478]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[10,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[10,[[44785294],[44785295]]],[null,[[44786918],[44788443,[[1147,null,null,[1]]]]],null,54],[500,[[44788441],[44788442,[[1147,null,null,[1]]]]],null,54],[10,[[44792012],[44792013,[[1233,null,null,[1]],[1185,null,null,[1]]]]],null,76],[null,[[44795909],[44795910,[[1271,null,null,[1]]]],[44795911,[[1272,null,null,[1]]]],[44795912,[[1271,null,null,[1]],[1272,null,null,[1]]]]]],[10,[[44795921],[44795922,[[1222,null,null,[1]]]]]]]],[17,[[10,[[31071260]]],[20,[[44788469,[[null,506871937,null,[null,44788469]]]],[44788470,[[1120,null,null,[1]],[501545959,null,null,[]],[null,506871937,null,[null,44788470]]]],[44788471,[[1120,null,null,[1]],[null,506871937,null,[null,44788471]]]]],[4,null,55],null,null,null,null,2,null,118,1],[10,[[44789815],[44789816],[44789817],[44789818]],null,null,null,null,22,null,null,101],[10,[[44789819],[44789820]],null,null,null,null,null,500,null,101],[1,[[44792954,[[506914611,null,null,[1]],[null,506871937,null,[null,44792954]]]],[44792955,[[1120,null,null,[1]],[506914611,null,null,[1]],[null,506871937,null,[null,44792955]]]]],[4,null,55],null,null,null,null,259,null,118,1],[14,[[44793253]],[2,[[4,null,55],[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]],[7,null,null,15,null,20230524]]],null,null,null,null,null,null,120,1],[14,[[44793254,[[null,1245,null,[null,60]]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]],[7,null,null,15,null,20230524]]],null,null,null,null,15,null,120,1],[139,[[44793255,[[null,1245,null,[null,60]]],[4,null,71,null,null,null,null,["120","14"]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]],[7,null,null,15,null,20230524]]],null,null,null,null,30,null,120,1],[14,[[44793256,[[null,1245,null,[null,600]]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]],[7,null,null,15,null,20230524]]],null,null,null,null,170,null,120,1],[139,[[44793257,[[null,1245,null,[null,600]]],[4,null,71,null,null,null,null,["120","14"]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]],[7,null,null,15,null,20230524]]],null,null,null,null,185,null,120,1],[10,[[44795238,[[1120,null,null,[1]],[null,506871937,null,[null,44795238]]]],[44795239,[[1120,null,null,[1]],[529362570,null,null,[1]],[null,506871937,null,[null,44795239]]]]],[4,null,55],null,null,null,null,536,null,118,1],[196,[[44795337,[[1120,null,null,[1]],[45401989,null,null,[1]],[null,506871937,null,[null,44795337]],[160889229,null,null,[1]]],[12,null,null,null,2,null,"smitmehta\\\\.com/"]]],[4,null,55],null,null,null,null,62,null,118,1],[1,[[44795667,[[1120,null,null,[1]],[null,506871937,null,[null,44795667]]]],[44795668,[[1120,null,null,[1]],[538540803,null,null,[1]],[null,506871937,null,[null,44795668]]]]],[4,null,55],null,null,null,null,556,null,118,1],[10,[[44795903,[[1120,null,null,[1]],[null,506871937,null,[null,44795903]]]],[44795904,[[1120,null,null,[1]],[45401989,null,null,[1]],[null,506871937,null,[null,44795904]]]]],[4,null,55],null,null,null,null,576,null,118,1],[9,[[44796027,[[1120,null,null,[1]],[null,506871937,null,[null,44796027]]]],[44796028,[[1120,null,null,[1]],[540248731,null,null,[1]],[null,506871937,null,[null,44796028]]]]],[4,null,55],null,null,null,null,596,null,118,1],[10,[[44796200,[[1120,null,null,[1]],[null,506871937,null,[null,44796200]]]],[44796201,[[534095582,null,null,[1]],[1120,null,null,[1]],[501545959,null,null,[]],[null,506871937,null,[null,44796201]]]],[44796202,[[534095582,null,null,[1]],[1120,null,null,[1]],[null,506871937,null,[null,44796202]]]]],[4,null,55],null,null,null,null,616,null,118,1]]]],null,null,[null,"1000",1,"1000"]],[1,[]],null,"31075720",1,null,478825371,[44759875,44759926,44759837]]'
);
