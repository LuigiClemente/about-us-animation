/* clarity-js v0.7.1: https://github.com/microsoft/clarity (License: MIT) */
!(function () {
  "use strict";
  var t = Object.freeze({
      __proto__: null,
      get start() {
        return Cn;
      },
      get stop() {
        return In;
      },
      get parse() {
        return zn;
      },
      get getId() {
        return Ln;
      },
      get add() {
        return An;
      },
      get update() {
        return Rn;
      },
      get sameorigin() {
        return Hn;
      },
      get iframe() {
        return Yn;
      },
      get hashText() {
        return qn;
      },
      get getNode() {
        return Pn;
      },
      get getValue() {
        return Un;
      },
      get get() {
        return Bn;
      },
      get lookup() {
        return Vn;
      },
      get has() {
        return Fn;
      },
      get updates() {
        return Jn;
      },
    }),
    e = Object.freeze({
      __proto__: null,
      get track() {
        return ka;
      },
      get start() {
        return Sa;
      },
      get queue() {
        return Na;
      },
      get stop() {
        return _a;
      },
    }),
    n = Object.freeze({
      __proto__: null,
      get data() {
        return Xa;
      },
      get keys() {
        return qa;
      },
      get fragments() {
        return Ba;
      },
      get start() {
        return Va;
      },
      get clone() {
        return Fa;
      },
      get compute() {
        return Ja;
      },
      get reset() {
        return Ga;
      },
      get update() {
        return Za;
      },
      get stop() {
        return Ka;
      },
    }),
    a = Object.freeze({
      __proto__: null,
      get data() {
        return Wa;
      },
      get start() {
        return nr;
      },
      get check() {
        return ar;
      },
      get trigger() {
        return rr;
      },
      get compute() {
        return ir;
      },
      get stop() {
        return or;
      },
    }),
    r = Object.freeze({
      __proto__: null,
      get data() {
        return ur;
      },
      get updates() {
        return cr;
      },
      get start() {
        return sr;
      },
      get stop() {
        return lr;
      },
      get log() {
        return dr;
      },
      get compute() {
        return fr;
      },
      get reset() {
        return hr;
      },
    }),
    i = Object.freeze({
      __proto__: null,
      get data() {
        return pr;
      },
      get callbacks() {
        return vr;
      },
      get start() {
        return mr;
      },
      get stop() {
        return br;
      },
      get metadata() {
        return yr;
      },
      get id() {
        return wr;
      },
      get consent() {
        return kr;
      },
      get clear() {
        return Er;
      },
      get save() {
        return Or;
      },
    }),
    o = Object.freeze({
      __proto__: null,
      get data() {
        return Ir;
      },
      get start() {
        return jr;
      },
      get stop() {
        return zr;
      },
      get envelope() {
        return Lr;
      },
    }),
    u = {
      projectId: null,
      delay: 1e3,
      lean: !1,
      track: !0,
      content: !0,
      drop: [],
      mask: [],
      unmask: [],
      regions: [],
      extract: [],
      cookies: [],
      fraud: !0,
      checksum: [],
      report: null,
      upload: null,
      fallback: null,
      upgrade: null,
      action: null,
    };
  function c(t) {
    return window.Zone && "__symbol__" in window.Zone
      ? window.Zone.__symbol__(t)
      : t;
  }
  var s = 0;
  function l(t) {
    void 0 === t && (t = null);
    var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now();
    return Math.max(Math.round(e - s), 0);
  }
  var d = "0.7.1";
  function f(t, e) {
    void 0 === e && (e = null);
    for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
      if (((a = ((a << 5) + a) ^ t.charCodeAt(i)), i + 1 < t.length))
        r = ((r << 5) + r) ^ t.charCodeAt(i + 1);
    }
    return (
      (n = Math.abs(a + 11579 * r)), (e ? n % Math.pow(2, e) : n).toString(36)
    );
  }
  var h = /\S/gi,
    p = !0,
    v = null,
    g = null,
    m = null;
  function b(t, e, n, a) {
    if ((void 0 === a && (a = !1), t))
      switch (n) {
        case 0:
          return t;
        case 1:
          switch (e) {
            case "*T":
            case "value":
            case "placeholder":
            case "click":
              return (function (t) {
                var e = -1,
                  n = 0,
                  a = !1,
                  r = !1,
                  i = !1,
                  o = null;
                if (p && null === v)
                  try {
                    (v = new RegExp("\\p{N}", "gu")),
                      (g = new RegExp("\\p{L}", "gu")),
                      (m = new RegExp("\\p{Sc}", "gu"));
                  } catch (t) {
                    p = !1;
                  }
                for (var u = 0; u < t.length; u++) {
                  var c = t.charCodeAt(u);
                  if (
                    ((a = a || (c >= 48 && c <= 57)),
                    (r = r || 64 === c),
                    (i = 9 === c || 10 === c || 13 === c || 32 === c),
                    0 === u || u === t.length - 1 || i)
                  ) {
                    if (a || r) {
                      null === o && (o = t.split(""));
                      var s = t.substring(e + 1, i ? u : u + 1);
                      (s =
                        p && null !== m
                          ? s.match(m)
                            ? s
                            : s.replace(g, "▪").replace(v, "▫")
                          : k(s)),
                        o.splice(e + 1 - n, s.length, s),
                        (n += s.length - 1);
                    }
                    i && ((a = !1), (r = !1), (e = u));
                  }
                }
                return o ? o.join("") : t;
              })(t);
            case "input":
            case "change":
              return E(t);
          }
          return t;
        case 2:
        case 3:
          switch (e) {
            case "*T":
              return a ? w(t) : k(t);
            case "src":
            case "srcset":
            case "title":
            case "alt":
              return 3 === n ? "" : t;
            case "value":
            case "click":
            case "input":
            case "change":
              return E(t);
            case "placeholder":
              return k(t);
          }
          break;
        case 4:
          switch (e) {
            case "*T":
              return a ? w(t) : k(t);
            case "value":
            case "input":
            case "click":
            case "change":
              return Array(5).join("•");
            case "checksum":
              return "";
          }
      }
    return t;
  }
  function y(t) {
    var e = u.drop;
    if (e && e.length > 0 && t && t.indexOf("?") > 0) {
      var n = t.split("?"),
        a = n[0],
        r = n[1];
      return (
        a +
        "?" +
        r
          .split("&")
          .map(function (t) {
            return e.some(function (e) {
              return 0 === t.indexOf("".concat(e, "="));
            })
              ? "".concat(t.split("=")[0], "=").concat("*na*")
              : t;
          })
          .join("&")
      );
    }
    return t;
  }
  function w(t) {
    var e = t.trim();
    if (e.length > 0) {
      var n = e[0],
        a = t.indexOf(n),
        r = t.substr(0, a),
        i = t.substr(a + e.length);
      return "".concat(r).concat(e.length.toString(36)).concat(i);
    }
    return t;
  }
  function k(t) {
    return t.replace(h, "•");
  }
  function E(t) {
    for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++)
      n += a > 0 && a % 5 == 0 ? " " : "•";
    return n;
  }
  var O = null,
    x = null,
    M = !1;
  function S() {
    M &&
      (O = {
        time: l(),
        event: 4,
        data: {
          visible: x.visible,
          docWidth: x.docWidth,
          docHeight: x.docHeight,
          screenWidth: x.screenWidth,
          screenHeight: x.screenHeight,
          scrollX: x.scrollX,
          scrollY: x.scrollY,
          pointerX: x.pointerX,
          pointerY: x.pointerY,
          activityTime: x.activityTime,
        },
      }),
      (x = x || {
        visible: 1,
        docWidth: 0,
        docHeight: 0,
        screenWidth: 0,
        screenHeight: 0,
        scrollX: 0,
        scrollY: 0,
        pointerX: 0,
        pointerY: 0,
        activityTime: 0,
      });
  }
  function N(t, e, n) {
    switch (t) {
      case 8:
        (x.docWidth = e), (x.docHeight = n);
        break;
      case 11:
        (x.screenWidth = e), (x.screenHeight = n);
        break;
      case 10:
        (x.scrollX = e), (x.scrollY = n);
        break;
      default:
        (x.pointerX = e), (x.pointerY = n);
    }
    M = !0;
  }
  function _(t) {
    x.activityTime = t;
  }
  function T(t, e) {
    (x.visible = "visible" === e ? 1 : 0), x.visible || _(t), (M = !0);
  }
  function D() {
    M && er(4);
  }
  var C = Object.freeze({
      __proto__: null,
      get state() {
        return O;
      },
      start: function () {
        (M = !1), S();
      },
      reset: S,
      track: N,
      activity: _,
      visibility: T,
      compute: D,
      stop: function () {
        S();
      },
    }),
    I = null;
  function j(t, e) {
    $r() &&
      t &&
      e &&
      "string" == typeof t &&
      "string" == typeof e &&
      t.length < 255 &&
      e.length < 255 &&
      ((I = { key: t, value: e }), er(24));
  }
  var z,
    L = null,
    A = null;
  function R(t) {
    t in L || (L[t] = 0), t in A || (A[t] = 0), L[t]++, A[t]++;
  }
  function H(t, e) {
    null !== e &&
      (t in L || (L[t] = 0), t in A || (A[t] = 0), (L[t] += e), (A[t] += e));
  }
  function Y(t, e) {
    null !== e &&
      !1 === isNaN(e) &&
      (t in L || (L[t] = 0),
      (e > L[t] || 0 === L[t]) && ((A[t] = e), (L[t] = e)));
  }
  function W(t, e, n) {
    return window.setTimeout(Hr(t), e, n);
  }
  function X(t) {
    return window.clearTimeout(t);
  }
  var q = 0,
    P = 0,
    U = null;
  function B() {
    U && X(U), (U = W(V, P)), (q = l());
  }
  function V() {
    var t = l();
    (z = { gap: t - q }),
      er(25),
      z.gap < 3e5
        ? (U = W(V, P))
        : Zr &&
          (j("clarity", "suspend"),
          vi(),
          ["mousemove", "touchstart"].forEach(function (t) {
            return Wr(document, t, ei);
          }),
          ["resize", "scroll", "pageshow"].forEach(function (t) {
            return Wr(window, t, ei);
          }));
  }
  var F = Object.freeze({
      __proto__: null,
      get data() {
        return z;
      },
      start: function () {
        (P = 6e4), (q = 0);
      },
      reset: B,
      stop: function () {
        X(U), (q = 0), (P = 0);
      },
    }),
    J = null;
  function G(t, e) {
    if (t in J) {
      var n = J[t],
        a = n[n.length - 1];
      e - a[0] > 100 ? J[t].push([e, 0]) : (a[1] = e - a[0]);
    } else J[t] = [[e, 0]];
  }
  function Z() {
    er(36);
  }
  function K() {
    J = {};
  }
  var Q = Object.freeze({
      __proto__: null,
      get data() {
        return J;
      },
      start: function () {
        J = {};
      },
      stop: function () {
        J = {};
      },
      track: G,
      compute: Z,
      reset: K,
    }),
    $ = null;
  function tt(t) {
    $r() &&
      u.lean &&
      ((u.lean = !1), ($ = { key: t }), Or(), u.upgrade && u.upgrade(t), er(3));
  }
  var et = Object.freeze({
      __proto__: null,
      get data() {
        return $;
      },
      start: function () {
        !u.lean && u.upgrade && u.upgrade("Config"), ($ = null);
      },
      upgrade: tt,
      stop: function () {
        $ = null;
      },
    }),
    nt = null;
  function at(t, e) {
    it(t, "string" == typeof e ? [e] : e);
  }
  function rt(t, e, n) {
    void 0 === e && (e = null),
      void 0 === n && (n = null),
      it("userId", [t]),
      it("sessionId", [e]),
      it("pageId", [n]);
  }
  function it(t, e) {
    if ($r() && t && e && "string" == typeof t && t.length < 255) {
      for (var n = (t in nt) ? nt[t] : [], a = 0; a < e.length; a++)
        "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
      nt[t] = n;
    }
  }
  function ot() {
    er(34);
  }
  function ut() {
    nt = {};
  }
  function ct(t, e, n, a) {
    return new (n || (n = Promise))(function (r, i) {
      function o(t) {
        try {
          c(a.next(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        try {
          c(a.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function c(t) {
        var e;
        t.done
          ? r(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(o, u);
      }
      c((a = a.apply(t, e || [])).next());
    });
  }
  function st(t, e) {
    var n,
      a,
      r,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: u(0), throw: u(1), return: u(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function u(i) {
      return function (u) {
        return (function (i) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o; )
            try {
              if (
                ((n = 1),
                a &&
                  (r =
                    2 & i[0]
                      ? a.return
                      : i[0]
                      ? a.throw || ((r = a.return) && r.call(a), 0)
                      : a.next) &&
                  !(r = r.call(a, i[1])).done)
              )
                return r;
              switch (((a = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                case 0:
                case 1:
                  r = i;
                  break;
                case 4:
                  return o.label++, { value: i[1], done: !1 };
                case 5:
                  o.label++, (a = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !((r = o.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                    o.label = i[1];
                    break;
                  }
                  if (6 === i[0] && o.label < r[1]) {
                    (o.label = r[1]), (r = i);
                    break;
                  }
                  if (r && o.label < r[2]) {
                    (o.label = r[2]), o.ops.push(i);
                    break;
                  }
                  r[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              i = e.call(t, o);
            } catch (t) {
              (i = [6, t]), (a = 0);
            } finally {
              n = r = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, u]);
      };
    }
  }
  var lt = "CompressionStream" in window;
  function dt(t) {
    return ct(this, void 0, void 0, function () {
      var e, n;
      return st(this, function (a) {
        switch (a.label) {
          case 0:
            return (
              a.trys.push([0, 3, , 4]),
              lt
                ? ((e = new ReadableStream({
                    start: function (e) {
                      return ct(this, void 0, void 0, function () {
                        return st(this, function (n) {
                          return e.enqueue(t), e.close(), [2];
                        });
                      });
                    },
                  })
                    .pipeThrough(new TextEncoderStream())
                    .pipeThrough(new window.CompressionStream("gzip"))),
                  (n = Uint8Array.bind),
                  [4, ft(e)])
                : [3, 2]
            );
          case 1:
            return [2, new (n.apply(Uint8Array, [void 0, a.sent()]))()];
          case 2:
            return [3, 4];
          case 3:
            return a.sent(), [3, 4];
          case 4:
            return [2, null];
        }
      });
    });
  }
  function ft(t) {
    return ct(this, void 0, void 0, function () {
      var e, n, a, r, i;
      return st(this, function (o) {
        switch (o.label) {
          case 0:
            (e = t.getReader()), (n = []), (a = !1), (r = []), (o.label = 1);
          case 1:
            return a ? [3, 3] : [4, e.read()];
          case 2:
            return (
              (i = o.sent()),
              (a = i.done),
              (r = i.value),
              a ? [2, n] : (n.push.apply(n, r), [3, 1])
            );
          case 3:
            return [2, n];
        }
      });
    });
  }
  var ht = [
    C,
    r,
    Object.freeze({
      __proto__: null,
      get data() {
        return nt;
      },
      start: function () {
        ut();
      },
      set: at,
      identify: rt,
      compute: ot,
      reset: ut,
      stop: function () {
        ut();
      },
    }),
    a,
    Q,
    i,
    o,
    e,
    F,
    et,
    n,
  ];
  function pt() {
    (L = {}),
      (A = {}),
      R(5),
      ht.forEach(function (t) {
        return Hr(t.start)();
      });
  }
  function vt() {
    ht
      .slice()
      .reverse()
      .forEach(function (t) {
        return Hr(t.stop)();
      }),
      (L = {}),
      (A = {});
  }
  function gt() {
    ot(), D(), fr(), er(0), Z(), ir(), Ja();
  }
  var mt,
    bt = [];
  function yt(t, e, n) {
    u.fraud &&
      null !== t &&
      n &&
      n.length >= 5 &&
      ((mt = { id: t, target: e, checksum: f(n, 24) }),
      bt.indexOf(mt.checksum) < 0 && (bt.push(mt.checksum), Aa(41)));
  }
  var wt = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
    kt = {};
  function Et(t, e) {
    var n = t.attributes,
      a = t.prefix ? t.prefix[e] : null,
      r =
        0 === e
          ? "".concat("~").concat(t.position - 1)
          : ":nth-of-type(".concat(t.position, ")");
    switch (t.tag) {
      case "STYLE":
      case "TITLE":
      case "LINK":
      case "META":
      case "*T":
      case "*D":
        return "";
      case "HTML":
        return "HTML";
      default:
        if (null === a) return "";
        (a = "".concat(a).concat(">")),
          (t.tag =
            0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag);
        var i = "".concat(a).concat(t.tag).concat(r),
          o = "id" in n && n.id.length > 0 ? n.id : null,
          u =
            "BODY" !== t.tag && "class" in n && n.class.length > 0
              ? n.class
                  .trim()
                  .split(/\s+/)
                  .filter(function (t) {
                    return Ot(t);
                  })
                  .join(".")
              : null;
        if (u && u.length > 0)
          if (0 === e) {
            var c = ""
              .concat(
                (function (t) {
                  for (var e = t.split(">"), n = 0; n < e.length; n++) {
                    var a = e[n].indexOf("~"),
                      r = e[n].indexOf(".");
                    e[n] = e[n].substring(
                      0,
                      r > 0 ? r : a > 0 ? a : e[n].length
                    );
                  }
                  return e.join(">");
                })(a)
              )
              .concat(t.tag)
              .concat(".")
              .concat(u);
            c in kt || (kt[c] = []),
              kt[c].indexOf(t.id) < 0 && kt[c].push(t.id),
              (i = "".concat(c).concat("~").concat(kt[c].indexOf(t.id)));
          } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
        return (
          (i =
            o && Ot(o)
              ? ""
                  .concat(
                    (function (t) {
                      var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                      if (a < 0) return "";
                      return t.substring(0, t.indexOf(">", a) + 1);
                    })(a)
                  )
                  .concat("#")
                  .concat(o)
              : i),
          i
        );
    }
  }
  function Ot(t) {
    if (!t) return !1;
    if (
      wt.some(function (e) {
        return t.toLowerCase().indexOf(e) >= 0;
      })
    )
      return !1;
    for (var e = 0; e < t.length; e++) {
      var n = t.charCodeAt(e);
      if (n >= 48 && n <= 57) return !1;
    }
    return !0;
  }
  var xt = {},
    Mt = [],
    St = null,
    Nt = null,
    _t = null;
  function Tt() {
    (xt = {}), (Mt = []), (St = null), (Nt = null);
  }
  function Dt(t, e) {
    return (
      void 0 === e && (e = 0),
      ct(this, void 0, void 0, function () {
        var n, a, r;
        return st(this, function (i) {
          for (n = 0, a = Mt; n < a.length; n++)
            if (a[n].task === t) return [2];
          return (
            (r = new Promise(function (n) {
              Mt[1 === e ? "unshift" : "push"]({
                task: t,
                resolve: n,
                id: wr(),
              });
            })),
            null === St && null === Nt && Ct(),
            [2, r]
          );
        });
      })
    );
  }
  function Ct() {
    var t = Mt.shift();
    t &&
      ((St = t),
      t
        .task()
        .then(function () {
          t.id === wr() && (t.resolve(), (St = null), Ct());
        })
        .catch(function (e) {
          t.id === wr() &&
            (e && Ya(0, 1, e.name, e.message, e.stack), (St = null), Ct());
        }));
  }
  function It(t) {
    var e = At(t);
    return e in xt
      ? performance.now() - xt[e].start > xt[e].yield
        ? 0
        : 1
      : 2;
  }
  function jt(t) {
    xt[At(t)] = { start: performance.now(), calls: 0, yield: 30 };
  }
  function zt(t) {
    var e = performance.now(),
      n = At(t),
      a = e - xt[n].start;
    H(t.cost, a), R(5), xt[n].calls > 0 && H(4, a);
  }
  function Lt(t) {
    return ct(this, void 0, void 0, function () {
      var e, n;
      return st(this, function (a) {
        switch (a.label) {
          case 0:
            return (e = At(t)) in xt ? (zt(t), (n = xt[e]), [4, Rt()]) : [3, 2];
          case 1:
            (n.yield = a.sent().timeRemaining()),
              (function (t) {
                var e = At(t);
                if (xt && xt[e]) {
                  var n = xt[e].calls,
                    a = xt[e].yield;
                  jt(t), (xt[e].calls = n + 1), (xt[e].yield = a);
                }
              })(t),
              (a.label = 2);
          case 2:
            return [2, e in xt ? 1 : 2];
        }
      });
    });
  }
  function At(t) {
    return "".concat(t.id, ".").concat(t.cost);
  }
  function Rt() {
    return ct(this, void 0, void 0, function () {
      return st(this, function (t) {
        switch (t.label) {
          case 0:
            return Nt ? [4, Nt] : [3, 2];
          case 1:
            t.sent(), (t.label = 2);
          case 2:
            return [
              2,
              new Promise(function (t) {
                Yt(t, { timeout: 5e3 });
              }),
            ];
        }
      });
    });
  }
  var Ht,
    Yt =
      window.requestIdleCallback ||
      function (t, e) {
        var n = performance.now(),
          a = new MessageChannel(),
          r = a.port1,
          i = a.port2;
        (r.onmessage = function (a) {
          var r = performance.now(),
            o = r - n,
            u = r - a.data;
          if (u > 30 && o < e.timeout)
            requestAnimationFrame(function () {
              i.postMessage(r);
            });
          else {
            var c = o > e.timeout;
            t({
              didTimeout: c,
              timeRemaining: function () {
                return c ? 30 : Math.max(0, 30 - u);
              },
            });
          }
        }),
          requestAnimationFrame(function () {
            i.postMessage(performance.now());
          });
      };
  function Wt(t, e, n) {
    return (
      void 0 === e && (e = null),
      void 0 === n && (n = null),
      ct(this, void 0, void 0, function () {
        var a, r, i, o, c, s, d, f, h, p, v, g, m, y, w, k, E, O, x, M, S, T;
        return st(this, function (D) {
          switch (D.label) {
            case 0:
              switch (((a = n || l()), (r = [a, t]), t)) {
                case 8:
                  return [3, 1];
                case 7:
                  return [3, 2];
                case 5:
                case 6:
                  return [3, 3];
              }
              return [3, 10];
            case 1:
              return (
                (i = Ht),
                r.push(i.width),
                r.push(i.height),
                N(t, i.width, i.height),
                Na(r),
                [3, 10]
              );
            case 2:
              for (o = 0, c = Kn; o < c.length; o++)
                (s = c[o]),
                  (r = [s.time, 7]).push(s.data.id),
                  r.push(s.data.interaction),
                  r.push(s.data.visibility),
                  r.push(s.data.name),
                  Na(r);
              return sa(), [3, 10];
            case 3:
              if (2 === It(e)) return [3, 10];
              if (!((d = Jn()).length > 0)) return [3, 9];
              (f = 0), (h = d), (D.label = 4);
            case 4:
              return f < h.length
                ? ((p = h[f]), 0 !== (v = It(e)) ? [3, 6] : [4, Lt(e)])
                : [3, 8];
            case 5:
              (v = D.sent()), (D.label = 6);
            case 6:
              if (2 === v) return [3, 8];
              for (
                g = p.data,
                  m = p.metadata.active,
                  y = p.metadata.suspend,
                  w = p.metadata.privacy,
                  k = (function (t) {
                    var e = t.metadata.privacy;
                    return "*T" === t.data.tag && !(0 === e || 1 === e);
                  })(p),
                  E = 0,
                  O = m ? ["tag", "attributes", "value"] : ["tag"];
                E < O.length;
                E++
              )
                if (g[(x = O[E])])
                  switch (x) {
                    case "tag":
                      (M = Xt(p)),
                        (S = k ? -1 : 1),
                        r.push(p.id * S),
                        p.parent && m && r.push(p.parent),
                        p.previous && m && r.push(p.previous),
                        r.push(y ? "*M" : g[x]),
                        M &&
                          2 === M.length &&
                          r.push(
                            ""
                              .concat("#")
                              .concat(qt(M[0]), ".")
                              .concat(qt(M[1]))
                          );
                      break;
                    case "attributes":
                      for (T in g[x])
                        void 0 !== g[x][T] && r.push(Pt(T, g[x][T], w));
                      break;
                    case "value":
                      yt(p.metadata.fraud, p.id, g[x]),
                        r.push(b(g[x], g.tag, w, k));
                  }
              D.label = 7;
            case 7:
              return f++, [3, 4];
            case 8:
              6 === t && _(a),
                Na(
                  (function (t) {
                    for (
                      var e = [], n = {}, a = 0, r = null, i = 0;
                      i < t.length;
                      i++
                    )
                      if ("string" == typeof t[i]) {
                        var o = t[i],
                          u = n[o] || -1;
                        u >= 0
                          ? r
                            ? r.push(u)
                            : ((r = [u]), e.push(r), a++)
                          : ((r = null), e.push(o), (n[o] = a++));
                      } else (r = null), e.push(t[i]), a++;
                    return e;
                  })(r),
                  !u.lean
                ),
                (D.label = 9);
            case 9:
              return [3, 10];
            case 10:
              return [2];
          }
        });
      })
    );
  }
  function Xt(t) {
    if (null !== t.metadata.size && 0 === t.metadata.size.length) {
      var e = Pn(t.id);
      if (e)
        return [
          Math.floor(100 * e.offsetWidth),
          Math.floor(100 * e.offsetHeight),
        ];
    }
    return t.metadata.size;
  }
  function qt(t) {
    return t.toString(36);
  }
  function Pt(t, e, n) {
    return "".concat(t, "=").concat(b(e, t, n));
  }
  function Ut() {
    Ht = null;
  }
  function Bt() {
    var t = document.body,
      e = document.documentElement,
      n = t ? t.clientWidth : null,
      a = t ? t.scrollWidth : null,
      r = t ? t.offsetWidth : null,
      i = e ? e.clientWidth : null,
      o = e ? e.scrollWidth : null,
      u = e ? e.offsetWidth : null,
      c = Math.max(n, a, r, i, o, u),
      s = t ? t.clientHeight : null,
      l = t ? t.scrollHeight : null,
      d = t ? t.offsetHeight : null,
      f = e ? e.clientHeight : null,
      h = e ? e.scrollHeight : null,
      p = e ? e.offsetHeight : null,
      v = Math.max(s, l, d, f, h, p);
    (null !== Ht && c === Ht.width && v === Ht.height) ||
      null === c ||
      null === v ||
      ((Ht = { width: c, height: v }), Wt(8));
  }
  var Vt = [];
  function Ft(t) {
    var e = la(t);
    if (e) {
      var n = e.value,
        a = n && n.length >= 5 && u.fraud ? f(n, 24) : "";
      Vt.push({
        time: l(t),
        event: 42,
        data: { target: la(t), type: e.type, value: n, checksum: a },
      }),
        Dt(fa.bind(this, 42));
    }
  }
  function Jt() {
    Vt = [];
  }
  function Gt(t) {
    var e = { x: 0, y: 0 };
    if (t && t.offsetParent)
      do {
        var n = t.offsetParent,
          a = null === n ? Yn(t.ownerDocument) : null;
        (e.x += t.offsetLeft), (e.y += t.offsetTop), (t = a || n);
      } while (t);
    return e;
  }
  var Zt = ["input", "textarea", "radio", "button", "canvas"],
    Kt = [];
  function Qt(t) {
    Wr(t, "click", $t.bind(this, 9, t), !0);
  }
  function $t(t, e, n) {
    var a = Yn(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i =
        "pageX" in n
          ? Math.round(n.pageX)
          : "clientX" in n
          ? Math.round(n.clientX + r.scrollLeft)
          : null,
      o =
        "pageY" in n
          ? Math.round(n.pageY)
          : "clientY" in n
          ? Math.round(n.clientY + r.scrollTop)
          : null;
    if (a) {
      var u = Gt(a);
      (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
    }
    var c = la(n),
      s = (function (t) {
        for (; t && t !== document; ) {
          if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t;
            if ("A" === e.tagName) return e;
          }
          t = t.parentNode;
        }
        return null;
      })(c),
      d = (function (t) {
        var e = null,
          n = document.documentElement;
        if ("function" == typeof t.getBoundingClientRect) {
          var a = t.getBoundingClientRect();
          a &&
            a.width > 0 &&
            a.height > 0 &&
            (e = {
              x: Math.floor(
                a.left +
                  ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)
              ),
              y: Math.floor(
                a.top +
                  ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)
              ),
              w: Math.floor(a.width),
              h: Math.floor(a.height),
            });
        }
        return e;
      })(c);
    0 === n.detail &&
      d &&
      ((i = Math.round(d.x + d.w / 2)), (o = Math.round(d.y + d.h / 2)));
    var f = d ? Math.max(Math.floor(((i - d.x) / d.w) * 32767), 0) : 0,
      h = d ? Math.max(Math.floor(((o - d.y) / d.h) * 32767), 0) : 0;
    null !== i &&
      null !== o &&
      (Kt.push({
        time: l(n),
        event: t,
        data: {
          target: c,
          x: i,
          y: o,
          eX: f,
          eY: h,
          button: n.button,
          reaction: ee(c),
          context: ne(s),
          text: te(c),
          link: s ? s.href : null,
          hash: null,
          trust: n.isTrusted ? 1 : 0,
        },
      }),
      Dt(fa.bind(this, t)));
  }
  function te(t) {
    var e = null;
    if (t) {
      var n = t.textContent || t.value || t.alt;
      n && (e = n.trim().replace(/\s+/g, " ").substr(0, 25));
    }
    return e;
  }
  function ee(t) {
    if (t.nodeType === Node.ELEMENT_NODE) {
      var e = t.tagName.toLowerCase();
      if (Zt.indexOf(e) >= 0) return 0;
    }
    return 1;
  }
  function ne(t) {
    if (t && t.hasAttribute("target"))
      switch (t.getAttribute("target")) {
        case "_blank":
          return 1;
        case "_parent":
          return 2;
        case "_top":
          return 3;
      }
    return 0;
  }
  function ae() {
    Kt = [];
  }
  var re = [];
  function ie(t, e) {
    re.push({ time: l(e), event: 38, data: { target: la(e), action: t } }),
      Dt(fa.bind(this, 38));
  }
  function oe() {
    re = [];
  }
  var ue = null,
    ce = [];
  function se(t) {
    var e = la(t),
      n = Bn(e);
    if (e && e.type && n) {
      var a = e.value;
      switch (e.type) {
        case "radio":
        case "checkbox":
          a = e.checked ? "true" : "false";
      }
      var r = { target: e, value: a };
      ce.length > 0 && ce[ce.length - 1].data.target === r.target && ce.pop(),
        ce.push({ time: l(t), event: 27, data: r }),
        X(ue),
        (ue = W(le, 1e3, 27));
    }
  }
  function le(t) {
    Dt(fa.bind(this, t));
  }
  function de() {
    ce = [];
  }
  var fe,
    he = [],
    pe = null;
  function ve(t, e, n) {
    var a = Yn(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i =
        "pageX" in n
          ? Math.round(n.pageX)
          : "clientX" in n
          ? Math.round(n.clientX + r.scrollLeft)
          : null,
      o =
        "pageY" in n
          ? Math.round(n.pageY)
          : "clientY" in n
          ? Math.round(n.clientY + r.scrollTop)
          : null;
    if (a) {
      var u = Gt(a);
      (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
    }
    null !== i &&
      null !== o &&
      me({ time: l(n), event: t, data: { target: la(n), x: i, y: o } });
  }
  function ge(t, e, n) {
    var a = Yn(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i = n.changedTouches,
      o = l(n);
    if (i)
      for (var u = 0; u < i.length; u++) {
        var c = i[u],
          s = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
          d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
        (s = s && a ? s + Math.round(a.offsetLeft) : s),
          (d = d && a ? d + Math.round(a.offsetTop) : d),
          null !== s &&
            null !== d &&
            me({ time: o, event: t, data: { target: la(n), x: s, y: d } });
      }
  }
  function me(t) {
    switch (t.event) {
      case 12:
      case 15:
      case 19:
        var e = he.length,
          n = e > 1 ? he[e - 2] : null;
        n &&
          (function (t, e) {
            var n = t.data.x - e.data.x,
              a = t.data.y - e.data.y,
              r = Math.sqrt(n * n + a * a),
              i = e.time - t.time,
              o = e.data.target === t.data.target;
            return e.event === t.event && o && r < 20 && i < 25;
          })(n, t) &&
          he.pop(),
          he.push(t),
          X(pe),
          (pe = W(be, 500, t.event));
        break;
      default:
        he.push(t), be(t.event);
    }
  }
  function be(t) {
    Dt(fa.bind(this, t));
  }
  function ye() {
    he = [];
  }
  function we() {
    var t = document.documentElement;
    (fe = {
      width:
        t && "clientWidth" in t
          ? Math.min(t.clientWidth, window.innerWidth)
          : window.innerWidth,
      height:
        t && "clientHeight" in t
          ? Math.min(t.clientHeight, window.innerHeight)
          : window.innerHeight,
    }),
      fa(11);
  }
  function ke() {
    fe = null;
  }
  var Ee = [],
    Oe = null;
  function xe(t) {
    void 0 === t && (t = null);
    var e = window,
      n = document.documentElement,
      a = t ? la(t) : n;
    if (a && a.nodeType === Node.DOCUMENT_NODE) {
      var r = Yn(a);
      (e = r ? r.contentWindow : e), (a = n = a.documentElement);
    }
    var i =
        a === n && "pageXOffset" in e
          ? Math.round(e.pageXOffset)
          : Math.round(a.scrollLeft),
      o =
        a === n && "pageYOffset" in e
          ? Math.round(e.pageYOffset)
          : Math.round(a.scrollTop),
      u = { time: l(t), event: 10, data: { target: a, x: i, y: o } };
    if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
      var c = Ee.length,
        s = c > 1 ? Ee[c - 2] : null;
      s &&
        (function (t, e) {
          var n = t.data.x - e.data.x,
            a = t.data.y - e.data.y;
          return n * n + a * a < 400 && e.time - t.time < 25;
        })(s, u) &&
        Ee.pop(),
        Ee.push(u),
        X(Oe),
        (Oe = W(Me, 500, 10));
    }
  }
  function Me(t) {
    Dt(fa.bind(this, t));
  }
  var Se = null,
    Ne = null,
    _e = null;
  function Te(t) {
    var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
    if (
      null !== e &&
      !(
        (null === e.anchorNode && null === e.focusNode) ||
        (e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)
      )
    ) {
      var n = Se.start ? Se.start : null;
      null !== Ne && null !== Se.start && n !== e.anchorNode && (X(_e), De(21)),
        (Se = {
          start: e.anchorNode,
          startOffset: e.anchorOffset,
          end: e.focusNode,
          endOffset: e.focusOffset,
        }),
        (Ne = e),
        X(_e),
        (_e = W(De, 500, 21));
    }
  }
  function De(t) {
    Dt(fa.bind(this, t));
  }
  function Ce() {
    (Ne = null), (Se = { start: 0, startOffset: 0, end: 0, endOffset: 0 });
  }
  var Ie,
    je,
    ze = [];
  function Le(t) {
    ze.push({ time: l(t), event: 39, data: { target: la(t) } }),
      Dt(fa.bind(this, 39));
  }
  function Ae() {
    ze = [];
  }
  function Re(t) {
    (Ie = { name: t.type }), fa(26, l(t)), vi();
  }
  function He() {
    Ie = null;
  }
  function Ye(t) {
    void 0 === t && (t = null),
      (je = {
        visible:
          "visibilityState" in document ? document.visibilityState : "default",
      }),
      fa(28, l(t));
  }
  function We() {
    je = null;
  }
  function Xe(t) {
    !(function (t) {
      var e = Yn(t);
      Wr(e ? e.contentWindow : t === document ? window : t, "scroll", xe, !0);
    })(t),
      t.nodeType === Node.DOCUMENT_NODE &&
        (Qt(t),
        (function (t) {
          Wr(t, "cut", ie.bind(this, 0), !0),
            Wr(t, "copy", ie.bind(this, 1), !0),
            Wr(t, "paste", ie.bind(this, 2), !0);
        })(t),
        (function (t) {
          Wr(t, "mousedown", ve.bind(this, 13, t), !0),
            Wr(t, "mouseup", ve.bind(this, 14, t), !0),
            Wr(t, "mousemove", ve.bind(this, 12, t), !0),
            Wr(t, "wheel", ve.bind(this, 15, t), !0),
            Wr(t, "dblclick", ve.bind(this, 16, t), !0),
            Wr(t, "touchstart", ge.bind(this, 17, t), !0),
            Wr(t, "touchend", ge.bind(this, 18, t), !0),
            Wr(t, "touchmove", ge.bind(this, 19, t), !0),
            Wr(t, "touchcancel", ge.bind(this, 20, t), !0);
        })(t),
        (function (t) {
          Wr(t, "input", se, !0);
        })(t),
        (function (t) {
          Wr(t, "selectstart", Te.bind(this, t), !0),
            Wr(t, "selectionchange", Te.bind(this, t), !0);
        })(t),
        (function (t) {
          Wr(t, "change", Ft, !0);
        })(t),
        (function (t) {
          Wr(t, "submit", Le, !0);
        })(t));
  }
  var qe = Object.freeze({
      __proto__: null,
      start: function () {
        (ha = []),
          va(),
          ae(),
          oe(),
          ye(),
          de(),
          Wr(window, "resize", we),
          we(),
          Wr(document, "visibilitychange", Ye),
          Ye(),
          (Ee = []),
          xe(),
          Ce(),
          Jt(),
          Ae(),
          Wr(window, "pagehide", Re);
      },
      stop: function () {
        (ha = []),
          va(),
          ae(),
          oe(),
          X(pe),
          he.length > 0 && be(he[he.length - 1].event),
          X(ue),
          de(),
          ke(),
          We(),
          X(Oe),
          (Ee = []),
          Ce(),
          X(_e),
          Jt(),
          Ae(),
          He();
      },
      observe: Xe,
    }),
    Pe = /[^0-9\.]/g;
  function Ue(t) {
    for (var e = 0, n = Object.keys(t); e < n.length; e++) {
      var a = n[e],
        r = t[a];
      if ("@type" === a && "string" == typeof r)
        switch (
          (r =
            (r = r.toLowerCase()).indexOf("article") >= 0 ||
            r.indexOf("posting") >= 0
              ? "article"
              : r)
        ) {
          case "article":
          case "recipe":
            dr(5, t[a]), dr(8, t.creator), dr(18, t.headline);
            break;
          case "product":
            dr(5, t[a]),
              dr(10, t.name),
              dr(12, t.sku),
              t.brand && dr(6, t.brand.name);
            break;
          case "aggregaterating":
            t.ratingValue &&
              (Y(11, Be(t.ratingValue, 100)),
              Y(18, Be(t.bestRating)),
              Y(19, Be(t.worstRating))),
              Y(12, Be(t.ratingCount)),
              Y(17, Be(t.reviewCount));
            break;
          case "person":
            dr(8, t.name);
            break;
          case "offer":
            dr(7, t.availability),
              dr(14, t.itemCondition),
              dr(13, t.priceCurrency),
              dr(12, t.sku),
              Y(13, Be(t.price));
            break;
          case "brand":
            dr(6, t.name);
        }
      null !== r && "object" == typeof r && Ue(r);
    }
  }
  function Be(t, e) {
    if ((void 0 === e && (e = 1), null !== t))
      switch (typeof t) {
        case "number":
          return Math.round(t * e);
        case "string":
          return Math.round(parseFloat(t.replace(Pe, "")) * e);
      }
    return null;
  }
  var Ve = [
      "title",
      "alt",
      "onload",
      "onfocus",
      "onerror",
      "data-drupal-form-submit-last",
    ],
    Fe = /[\r\n]+/g;
  function Je(e, n) {
    var a,
      r = null;
    if (2 === n && !1 === Fn(e)) return r;
    0 !== n &&
      e.nodeType === Node.TEXT_NODE &&
      e.parentElement &&
      "STYLE" === e.parentElement.tagName &&
      (e = e.parentNode);
    var i = !1 === Fn(e) ? "add" : "update",
      o = e.parentElement ? e.parentElement : null,
      u = e.ownerDocument !== document;
    switch (e.nodeType) {
      case Node.DOCUMENT_TYPE_NODE:
        o = u && e.parentNode ? Yn(e.parentNode) : o;
        var c = e,
          s = {
            tag: (u ? "iframe:" : "") + "*D",
            attributes: {
              name: c.name,
              publicId: c.publicId,
              systemId: c.systemId,
            },
          };
        t[i](e, o, s, n);
        break;
      case Node.DOCUMENT_NODE:
        e === document && zn(document), Ge(e);
        break;
      case Node.DOCUMENT_FRAGMENT_NODE:
        var l = e;
        if (l.host)
          if (
            (zn(l),
            "function" === typeof l.constructor &&
              l.constructor.toString().indexOf("[native code]") >= 0)
          ) {
            Ge(l);
            for (
              var d = "",
                f = 0,
                h = ("adoptedStyleSheets" in l) ? l.adoptedStyleSheets : [];
              f < h.length;
              f++
            ) {
              d += Ke(h[f]);
            }
            var p = { tag: "*S", attributes: { style: d } };
            t[i](e, l.host, p, n);
          } else t[i](e, l.host, { tag: "*P", attributes: {} }, n);
        break;
      case Node.TEXT_NODE:
        if (
          ((o = o || e.parentNode),
          "update" === i || (o && Fn(o) && "STYLE" !== o.tagName))
        ) {
          var v = { tag: "*T", value: e.nodeValue };
          t[i](e, o, v, n);
        }
        break;
      case Node.ELEMENT_NODE:
        var g = e,
          m = g.tagName,
          b = (function (t) {
            var e = {},
              n = t.attributes;
            if (n && n.length > 0)
              for (var a = 0; a < n.length; a++) {
                var r = n[a].name;
                Ve.indexOf(r) < 0 && (e[r] = n[a].value);
              }
            "INPUT" === t.tagName &&
              !("value" in e) &&
              t.value &&
              (e.value = t.value);
            return e;
          })(g);
        switch (
          ((o = e.parentElement
            ? e.parentElement
            : e.parentNode
            ? e.parentNode
            : null),
          "http://www.w3.org/2000/svg" === g.namespaceURI && (m = "svg:" + m),
          m)
        ) {
          case "HTML":
            o = u && o ? Yn(o) : null;
            var y = { tag: (u ? "iframe:" : "") + m, attributes: b };
            t[i](e, o, y, n);
            break;
          case "SCRIPT":
            if ("type" in b && "application/ld+json" === b.type)
              try {
                Ue(JSON.parse(g.text.replace(Fe, "")));
              } catch (t) {}
            break;
          case "NOSCRIPT":
            break;
          case "META":
            var w = "property" in b ? "property" : "name" in b ? "name" : null;
            if (w && "content" in b) {
              var k = b.content;
              switch (b[w]) {
                case "og:title":
                  dr(20, k);
                  break;
                case "og:type":
                  dr(19, k);
                  break;
                case "generator":
                  dr(21, k);
              }
            }
            break;
          case "HEAD":
            var E = { tag: m, attributes: b },
              O =
                u &&
                (null === (a = e.ownerDocument) || void 0 === a
                  ? void 0
                  : a.location)
                  ? e.ownerDocument.location
                  : location;
            (E.attributes["*B"] = O.protocol + "//" + O.hostname + O.pathname),
              t[i](e, o, E, n);
            break;
          case "BASE":
            var x = Bn(e.parentElement);
            if (x) {
              var M = document.createElement("a");
              (M.href = b.href),
                (x.data.attributes["*B"] =
                  M.protocol + "//" + M.hostname + M.pathname);
            }
            break;
          case "STYLE":
            var S = { tag: m, attributes: b, value: Ze(g) };
            t[i](e, o, S, n);
            break;
          case "IFRAME":
            var N = e,
              _ = { tag: m, attributes: b };
            Hn(N) &&
              (!(function (t) {
                !1 === Fn(t) &&
                  Wr(t, "load", pn.bind(this, t, "childList"), !0);
              })(N),
              (_.attributes["*O"] = "true"),
              N.contentDocument &&
                N.contentWindow &&
                "loading" !== N.contentDocument.readyState &&
                (r = N.contentDocument)),
              t[i](e, o, _, n);
            break;
          default:
            var T = { tag: m, attributes: b };
            g.shadowRoot && (r = g.shadowRoot), t[i](e, o, T, n);
        }
    }
    return r;
  }
  function Ge(t) {
    Fn(t) ||
      (!(function (t) {
        try {
          var e = c("MutationObserver"),
            n = e in window ? new window[e](Hr(sn)) : null;
          n &&
            (n.observe(t, {
              attributes: !0,
              childList: !0,
              characterData: !0,
              subtree: !0,
            }),
            $e.push(n));
        } catch (t) {
          Ya(2, 0, t ? t.name : null);
        }
      })(t),
      Xe(t));
  }
  function Ze(t) {
    var e = t.textContent ? t.textContent.trim() : "",
      n = t.dataset ? Object.keys(t.dataset).length : 0;
    return (0 === e.length || n > 0) && (e = Ke(t.sheet)), e;
  }
  function Ke(t) {
    var e = "",
      n = null;
    try {
      n = t ? t.cssRules : [];
    } catch (t) {
      if ((Ya(1, 1, t ? t.name : null), t && "SecurityError" !== t.name))
        throw t;
    }
    if (null !== n) for (var a = 0; a < n.length; a++) e += n[a].cssText;
    return e;
  }
  function Qe(t, e, n) {
    return ct(this, void 0, void 0, function () {
      var a, r, i, o, u;
      return st(this, function (c) {
        switch (c.label) {
          case 0:
            (a = [t]), (c.label = 1);
          case 1:
            if (!(a.length > 0)) return [3, 4];
            for (r = a.shift(), i = r.firstChild; i; )
              a.push(i), (i = i.nextSibling);
            return 0 !== (o = It(e)) ? [3, 3] : [4, Lt(e)];
          case 2:
            (o = c.sent()), (c.label = 3);
          case 3:
            return 2 === o ? [3, 4] : ((u = Je(r, n)) && a.push(u), [3, 1]);
          case 4:
            return [2];
        }
      });
    });
  }
  var $e = [],
    tn = [],
    en = null,
    nn = null,
    an = null,
    rn = [],
    on = null,
    un = null,
    cn = {};
  function sn(t) {
    var e = l();
    G(6, e),
      tn.push({ time: e, mutations: t }),
      Dt(ln, 1).then(function () {
        W(Bt), Hr(ia)();
      });
  }
  function ln() {
    return ct(this, void 0, void 0, function () {
      var t, e, n, a, r, i, o, u, c;
      return st(this, function (s) {
        switch (s.label) {
          case 0:
            jt((t = { id: wr(), cost: 3 })), (s.label = 1);
          case 1:
            if (!(tn.length > 0)) return [3, 8];
            (e = tn.shift()), (n = 0), (a = e.mutations), (s.label = 2);
          case 2:
            return n < a.length
              ? ((r = a[n]), 0 !== (i = It(t)) ? [3, 4] : [4, Lt(t)])
              : [3, 6];
          case 3:
            (i = s.sent()), (s.label = 4);
          case 4:
            if (2 === i) return [3, 6];
            switch (
              ((o = r.target),
              (u = (function (t, e) {
                var n = t.target ? Bn(t.target.parentNode) : null;
                if (n && "HTML" !== n.data.tag) {
                  var a = l() > un,
                    r = Bn(t.target),
                    i = r && r.selector ? r.selector.join() : t.target.nodeName,
                    o = [
                      n.selector ? n.selector.join() : "",
                      i,
                      t.attributeName,
                      dn(t.addedNodes),
                      dn(t.removedNodes),
                    ].join();
                  cn[o] = o in cn ? cn[o] : [0];
                  var u = cn[o];
                  if (
                    (!1 === a && u[0] >= 10 && fn(u[1], 2, e),
                    (u[0] = a ? u[0] + 1 : 1),
                    10 === u[0])
                  )
                    return (u[1] = t.removedNodes), "suspend";
                  if (u[0] > 10) return "";
                }
                return t.type;
              })(r, t)),
              u && o && o.ownerDocument && zn(o.ownerDocument),
              u &&
                o &&
                o.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
                o.host &&
                zn(o),
              u)
            ) {
              case "attributes":
                Je(o, 3);
                break;
              case "characterData":
                Je(o, 4);
                break;
              case "childList":
                fn(r.addedNodes, 1, t), fn(r.removedNodes, 2, t);
                break;
              case "suspend":
                (c = Bn(o)) && (c.metadata.suspend = !0);
            }
            s.label = 5;
          case 5:
            return n++, [3, 2];
          case 6:
            return [4, Wt(6, t, e.time)];
          case 7:
            return s.sent(), [3, 1];
          case 8:
            return zt(t), [2];
        }
      });
    });
  }
  function dn(t) {
    for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
    return e.join();
  }
  function fn(t, e, n) {
    return ct(this, void 0, void 0, function () {
      var a, r, i;
      return st(this, function (o) {
        switch (o.label) {
          case 0:
            (a = t ? t.length : 0), (r = 0), (o.label = 1);
          case 1:
            return r < a
              ? 1 !== e
                ? [3, 2]
                : (Qe(t[r], n, e), [3, 5])
              : [3, 6];
          case 2:
            return 0 !== (i = It(n)) ? [3, 4] : [4, Lt(n)];
          case 3:
            (i = o.sent()), (o.label = 4);
          case 4:
            if (2 === i) return [3, 6];
            Je(t[r], e), (o.label = 5);
          case 5:
            return r++, [3, 1];
          case 6:
            return [2];
        }
      });
    });
  }
  function hn(t, e) {
    return (
      void 0 === e && (e = !1),
      rn.indexOf(t) < 0 && rn.push(t),
      on && X(on),
      (on = W(function () {
        !(function (t) {
          for (var e = 0, n = rn; e < n.length; e++) {
            var a = n[e];
            if (a) {
              var r = a.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
              if (r && Fn(a)) continue;
              pn(a, r || t ? "childList" : "characterData");
            }
          }
          rn = [];
        })(e);
      }, 33)),
      t
    );
  }
  function pn(t, e) {
    Hr(sn)([
      {
        addedNodes: [t],
        attributeName: null,
        attributeNamespace: null,
        nextSibling: null,
        oldValue: null,
        previousSibling: null,
        removedNodes: [],
        target: t,
        type: e,
      },
    ]);
  }
  var vn = 1,
    gn = [],
    mn = [],
    bn = [],
    yn = {},
    wn = [],
    kn = [],
    En = {},
    On = [],
    xn = [],
    Mn = [],
    Sn = [],
    Nn = null,
    _n = null,
    Tn = null,
    Dn = null;
  function Cn() {
    jn(), zn(document, !0);
  }
  function In() {
    jn();
  }
  function jn() {
    (vn = 1),
      (gn = []),
      (mn = []),
      (bn = []),
      (yn = {}),
      (wn = []),
      (kn = []),
      (On = "address,password,contact".split(",")),
      (xn = "password,secret,pass,social,ssn,code,hidden".split(",")),
      (Mn = "radio,checkbox,range,button,reset,submit".split(",")),
      (Sn = "INPUT,SELECT,TEXTAREA".split(",")),
      (Nn = new WeakMap()),
      (_n = new WeakMap()),
      (Tn = new WeakMap()),
      (Dn = new WeakMap()),
      (kt = {});
  }
  function zn(t, e) {
    void 0 === e && (e = !1);
    try {
      e &&
        u.unmask.forEach(function (t) {
          return t.indexOf("!") < 0 ? kn.push(t) : wn.push(t.substr(1));
        }),
        "querySelectorAll" in t &&
          (u.regions.forEach(function (e) {
            return t.querySelectorAll(e[1]).forEach(function (t) {
              return aa(t, "".concat(e[0]));
            });
          }),
          u.mask.forEach(function (e) {
            return t.querySelectorAll(e).forEach(function (t) {
              return Tn.set(t, 3);
            });
          }),
          u.checksum.forEach(function (e) {
            return t.querySelectorAll(e[1]).forEach(function (t) {
              return Dn.set(t, e[0]);
            });
          }),
          kn.forEach(function (e) {
            return t.querySelectorAll(e).forEach(function (t) {
              return Tn.set(t, 0);
            });
          }));
    } catch (t) {
      Ya(5, 1, t ? t.name : null);
    }
  }
  function Ln(t, e) {
    if ((void 0 === e && (e = !1), null === t)) return null;
    var n = Nn.get(t);
    return !n && e && ((n = vn++), Nn.set(t, n)), n || null;
  }
  function An(t, e, n, a) {
    var r,
      i = Ln(t, !0),
      o = e ? Ln(e) : null,
      c = Gn(t),
      s = null,
      l = ra(t) ? i : null,
      d = null,
      f = Dn.has(t) ? Dn.get(t) : null,
      h = u.content ? 1 : 3;
    o >= 0 &&
      mn[o] &&
      ((s = mn[o]).children.push(i),
      (l = null === l ? s.region : l),
      (d = s.fragment),
      (f = null === f ? s.metadata.fraud : f),
      (h = s.metadata.privacy)),
      n.attributes &&
        "data-clarity-region" in n.attributes &&
        (aa(t, n.attributes["data-clarity-region"]), (l = i)),
      (gn[i] = t),
      (mn[i] = {
        id: i,
        parent: o,
        previous: c,
        children: [],
        data: n,
        selector: null,
        hash: null,
        region: l,
        metadata: {
          active: !0,
          suspend: !1,
          privacy: h,
          position: null,
          fraud: f,
          size: null,
        },
        fragment: d,
      }),
      (function (t, e, n) {
        var a = e.data,
          r = e.metadata,
          i = r.privacy,
          o = a.attributes || {},
          u = a.tag.toUpperCase();
        switch (!0) {
          case Sn.indexOf(u) >= 0:
            var c = o.type,
              s = "";
            Object.keys(o).forEach(function (t) {
              return (s += o[t].toLowerCase());
            });
            var l = xn.some(function (t) {
              return s.indexOf(t) >= 0;
            });
            r.privacy = "INPUT" === u && Mn.indexOf(c) >= 0 ? i : l ? 4 : 2;
            break;
          case "data-clarity-mask" in o:
            r.privacy = 3;
            break;
          case "data-clarity-unmask" in o:
            r.privacy = 0;
            break;
          case Tn.has(t):
            r.privacy = Tn.get(t);
            break;
          case Dn.has(t):
            r.privacy = 2;
            break;
          case "*T" === u:
            var d = n && n.data ? n.data.tag : "",
              f = n && n.selector ? n.selector[1] : "",
              h = ["STYLE", "TITLE", "svg:style"];
            r.privacy =
              h.includes(d) ||
              wn.some(function (t) {
                return f.indexOf(t) >= 0;
              })
                ? 0
                : i;
            break;
          case 1 === i:
            r.privacy = (function (t, e, n) {
              if (
                t &&
                e.some(function (e) {
                  return t.indexOf(e) >= 0;
                })
              )
                return 2;
              return n.privacy;
            })(o.class, On, r);
        }
      })(t, mn[i], s),
      Xn(mn[i]),
      "IMG" === (r = mn[i]).data.tag &&
        3 === r.metadata.privacy &&
        (r.metadata.size = []),
      Zn(i, a, mn[i].fragment);
  }
  function Rn(t, e, n, a) {
    var r = Ln(t),
      i = e ? Ln(e) : null,
      o = Gn(t),
      u = !1,
      c = !1;
    if (r in mn) {
      var s = mn[r];
      if (
        ((s.metadata.active = !0),
        s.previous !== o && ((u = !0), (s.previous = o)),
        s.parent !== i)
      ) {
        u = !0;
        var l = s.parent;
        if (((s.parent = i), null !== i && i >= 0)) {
          var d = null === o ? 0 : mn[i].children.indexOf(o) + 1;
          mn[i].children.splice(d, 0, r), (s.region = ra(t) ? r : mn[i].region);
        } else
          !(function (t, e) {
            if (t in mn) {
              var n = mn[t];
              (n.metadata.active = !1), (n.parent = null), Zn(t, e);
            }
          })(r, a);
        if (null !== l && l >= 0) {
          var f = mn[l].children.indexOf(r);
          f >= 0 && mn[l].children.splice(f, 1);
        }
        c = !0;
      }
      for (var h in n) Wn(s.data, n, h) && ((u = !0), (s.data[h] = n[h]));
      s.fragment && En[s.fragment] && (u = !0),
        Xn(s),
        Zn(r, a, mn[r].fragment, u, c);
    }
  }
  function Hn(t) {
    var e = !1;
    if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
      var n = t;
      try {
        n.contentDocument && (_n.set(n.contentDocument, n), (e = !0));
      } catch (t) {}
    }
    return e;
  }
  function Yn(t) {
    var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
    return e && _n.has(e) ? _n.get(e) : null;
  }
  function Wn(t, e, n) {
    if ("object" == typeof t[n] && "object" == typeof e[n]) {
      for (var a in t[n]) if (t[n][a] !== e[n][a]) return !0;
      for (var a in e[n]) if (e[n][a] !== t[n][a]) return !0;
      return !1;
    }
    return t[n] !== e[n];
  }
  function Xn(t) {
    var e = t.parent && t.parent in mn ? mn[t.parent] : null,
      n = e ? e.selector : null,
      a = t.data,
      r = (function (t, e) {
        e.metadata.position = 1;
        for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0; ) {
          var a = mn[t.children[n]];
          if (e.data.tag === a.data.tag) {
            e.metadata.position = a.metadata.position + 1;
            break;
          }
        }
        return e.metadata.position;
      })(e, t),
      i = {
        id: t.id,
        tag: a.tag,
        prefix: n,
        position: r,
        attributes: a.attributes,
      };
    (t.selector = [Et(i, 0), Et(i, 1)]),
      (t.hash = t.selector.map(function (t) {
        return t ? f(t) : null;
      })),
      t.hash.forEach(function (e) {
        return (yn[e] = t.id);
      }),
      t.hash.some(function (t) {
        return -1 !== Ba.indexOf(t);
      }) && (t.fragment = t.id);
  }
  function qn(t) {
    var e = Pn(Vn(t));
    return null !== e && null !== e.textContent
      ? e.textContent.substr(0, 25)
      : "";
  }
  function Pn(t) {
    return t in gn ? gn[t] : null;
  }
  function Un(t) {
    return t in mn ? mn[t] : null;
  }
  function Bn(t) {
    var e = Ln(t);
    return e in mn ? mn[e] : null;
  }
  function Vn(t) {
    return t in yn ? yn[t] : null;
  }
  function Fn(t) {
    return Ln(t) in gn;
  }
  function Jn() {
    for (var t = [], e = 0, n = bn; e < n.length; e++) {
      (a = n[e]) in mn && t.push(mn[a]);
    }
    for (var a in ((bn = []), En)) Za(En[a], a, !0);
    return (En = {}), t;
  }
  function Gn(t) {
    for (var e = null; null === e && t.previousSibling; )
      (e = Ln(t.previousSibling)), (t = t.previousSibling);
    return e;
  }
  function Zn(t, e, n, a, r) {
    if (
      (void 0 === n && (n = null),
      void 0 === a && (a = !0),
      void 0 === r && (r = !1),
      n && !En[n])
    ) {
      var i = Pn(n),
        o = Un(n);
      i &&
        o &&
        (hn(i, !0),
        o.hash.forEach(function (t) {
          -1 !== Ba.indexOf(t) && (En[n] = t);
        }));
    }
    var u = bn.indexOf(t);
    u >= 0 && 1 === e && r
      ? (bn.splice(u, 1), bn.push(t))
      : -1 === u && a && bn.push(t);
  }
  var Kn = [],
    Qn = null,
    $n = {},
    ta = [],
    ea = !1,
    na = null;
  function aa(t, e) {
    !1 === Qn.has(t) &&
      (Qn.set(t, e),
      (na =
        null === na && ea
          ? new IntersectionObserver(oa, {
              threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
            })
          : na) &&
        t &&
        t.nodeType === Node.ELEMENT_NODE &&
        na.observe(t));
  }
  function ra(t) {
    return Qn && Qn.has(t);
  }
  function ia() {
    for (var t = [], e = 0, n = ta; e < n.length; e++) {
      var a = n[e],
        r = Ln(a.node);
      r in $n ||
        (r
          ? ((a.data.id = r), ($n[r] = a.data), Kn.push(ca(a.data)))
          : t.push(a));
    }
    (ta = t), Kn.length > 0 && Wt(7);
  }
  function oa(t) {
    for (var e = 0, n = t; e < n.length; e++) {
      var a = n[e],
        r = a.target,
        i = a.boundingClientRect,
        o = a.intersectionRect,
        u = a.rootBounds;
      if (Qn.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
        var c = r ? Ln(r) : null,
          s =
            c in $n
              ? $n[c]
              : { id: c, name: Qn.get(r), interaction: 16, visibility: 0 },
          l =
            (o ? (o.width * o.height * 1) / (u.width * u.height) : 0) > 0.05 ||
            a.intersectionRatio > 0.8,
          d =
            (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
        ua(r, s, s.interaction, d ? 13 : l ? 10 : 0),
          s.visibility >= 13 && na && na.unobserve(r);
      }
    }
    Kn.length > 0 && Wt(7);
  }
  function ua(t, e, n, a) {
    var r = n > e.interaction || a > e.visibility;
    (e.interaction = n > e.interaction ? n : e.interaction),
      (e.visibility = a > e.visibility ? a : e.visibility),
      e.id
        ? ((e.id in $n && r) || !(e.id in $n)) &&
          (($n[e.id] = e), Kn.push(ca(e)))
        : ta.push({ node: t, data: e });
  }
  function ca(t) {
    return {
      time: l(),
      data: {
        id: t.id,
        interaction: t.interaction,
        visibility: t.visibility,
        name: t.name,
      },
    };
  }
  function sa() {
    Kn = [];
  }
  function la(t) {
    var e = t.composed && t.composedPath ? t.composedPath() : null,
      n = e && e.length > 0 ? e[0] : t.target;
    return (
      (un = l() + 3e3),
      n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    );
  }
  function da(t, e, n) {
    void 0 === n && (n = null);
    var a = { id: 0, hash: null, privacy: 2, node: t };
    if (t) {
      var r = Bn(t);
      if (null !== r) {
        var i = r.metadata;
        (a.id = r.id),
          (a.hash = r.hash),
          (a.privacy = i.privacy),
          r.region &&
            (function (t, e) {
              var n = Pn(t),
                a =
                  t in $n
                    ? $n[t]
                    : {
                        id: t,
                        visibility: 0,
                        interaction: 16,
                        name: Qn.get(n),
                      },
                r = 16;
              switch (e) {
                case 9:
                  r = 20;
                  break;
                case 27:
                  r = 30;
              }
              ua(n, a, r, a.visibility);
            })(r.region, e),
          i.fraud && yt(i.fraud, r.id, n || r.data.value);
      }
    }
    return a;
  }
  function fa(t, e) {
    return (
      void 0 === e && (e = null),
      ct(this, void 0, void 0, function () {
        var n,
          a,
          r,
          i,
          o,
          u,
          c,
          s,
          d,
          f,
          h,
          p,
          v,
          g,
          m,
          w,
          k,
          E,
          O,
          x,
          M,
          S,
          _,
          D,
          C,
          I,
          j,
          z,
          L,
          A,
          R;
        return st(this, function (H) {
          switch (((n = e || l()), (a = [n, t]), t)) {
            case 13:
            case 14:
            case 12:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
              for (r = 0, i = he; r < i.length; r++)
                (A = i[r]),
                  (o = da(A.data.target, A.event)).id > 0 &&
                    ((a = [A.time, A.event]).push(o.id),
                    a.push(A.data.x),
                    a.push(A.data.y),
                    Na(a),
                    N(A.event, A.data.x, A.data.y));
              ye();
              break;
            case 9:
              for (u = 0, c = Kt; u < c.length; u++)
                (A = c[u]),
                  (s = da(A.data.target, A.event, A.data.text)),
                  (a = [A.time, A.event]),
                  (d = s.hash.join(".")),
                  a.push(s.id),
                  a.push(A.data.x),
                  a.push(A.data.y),
                  a.push(A.data.eX),
                  a.push(A.data.eY),
                  a.push(A.data.button),
                  a.push(A.data.reaction),
                  a.push(A.data.context),
                  a.push(b(A.data.text, "click", s.privacy)),
                  a.push(y(A.data.link)),
                  a.push(d),
                  a.push(A.data.trust),
                  Na(a),
                  ga(
                    A.time,
                    A.event,
                    d,
                    A.data.x,
                    A.data.y,
                    A.data.reaction,
                    A.data.context
                  );
              ae();
              break;
            case 38:
              for (f = 0, h = re; f < h.length; f++)
                (A = h[f]),
                  (a = [A.time, A.event]),
                  (j = da(A.data.target, A.event)).id > 0 &&
                    (a.push(j.id), a.push(A.data.action), Na(a));
              oe();
              break;
            case 11:
              (p = fe),
                a.push(p.width),
                a.push(p.height),
                N(t, p.width, p.height),
                ke(),
                Na(a);
              break;
            case 26:
              (v = Ie), a.push(v.name), He(), Na(a);
              break;
            case 27:
              for (g = 0, m = ce; g < m.length; g++)
                (A = m[g]),
                  (w = da(A.data.target, A.event, A.data.value)),
                  (a = [A.time, A.event]).push(w.id),
                  a.push(b(A.data.value, "input", w.privacy)),
                  Na(a);
              de();
              break;
            case 21:
              (k = Se) &&
                ((E = da(k.start, t)),
                (O = da(k.end, t)),
                a.push(E.id),
                a.push(k.startOffset),
                a.push(O.id),
                a.push(k.endOffset),
                Ce(),
                Na(a));
              break;
            case 10:
              for (x = 0, M = Ee; x < M.length; x++)
                (A = M[x]),
                  (S = da(A.data.target, A.event)).id > 0 &&
                    ((a = [A.time, A.event]).push(S.id),
                    a.push(A.data.x),
                    a.push(A.data.y),
                    Na(a),
                    N(A.event, A.data.x, A.data.y));
              Ee = [];
              break;
            case 42:
              for (_ = 0, D = Vt; _ < D.length; _++)
                (A = D[_]),
                  (a = [A.time, A.event]),
                  (j = da(A.data.target, A.event)).id > 0 &&
                    ((a = [A.time, A.event]).push(j.id),
                    a.push(A.data.type),
                    a.push(b(A.data.value, "change", j.privacy)),
                    a.push(b(A.data.checksum, "checksum", j.privacy)),
                    Na(a));
              Jt();
              break;
            case 39:
              for (C = 0, I = ze; C < I.length; C++)
                (A = I[C]),
                  (a = [A.time, A.event]),
                  (j = da(A.data.target, A.event)).id > 0 &&
                    (a.push(j.id), Na(a));
              Ae();
              break;
            case 22:
              for (z = 0, L = pa; z < L.length; z++)
                (A = L[z]),
                  (a = [A.time, A.event]).push(A.data.type),
                  a.push(A.data.hash),
                  a.push(A.data.x),
                  a.push(A.data.y),
                  a.push(A.data.reaction),
                  a.push(A.data.context),
                  Na(a, !1);
              va();
              break;
            case 28:
              (R = je), a.push(R.visible), Na(a), T(n, R.visible), We();
          }
          return [2];
        });
      })
    );
  }
  var ha = [],
    pa = [];
  function va() {
    pa = [];
  }
  function ga(t, e, n, a, r, i, o) {
    void 0 === i && (i = 1),
      void 0 === o && (o = 0),
      ha.push({
        time: t,
        event: 22,
        data: { type: e, hash: n, x: a, y: r, reaction: i, context: o },
      }),
      N(e, a, r);
  }
  var ma,
    ba,
    ya,
    wa,
    ka,
    Ea = 0,
    Oa = 0,
    xa = null,
    Ma = 0;
  function Sa() {
    (wa = !0),
      (Ea = 0),
      (Oa = 0),
      (Ma = 0),
      (ma = []),
      (ba = []),
      (ya = {}),
      (ka = null);
  }
  function Na(t, e) {
    if ((void 0 === e && (e = !0), wa)) {
      var n = l(),
        a = t.length > 1 ? t[1] : null,
        r = JSON.stringify(t);
      switch (a) {
        case 5:
          Ea += r.length;
        case 37:
        case 6:
          (Oa += r.length), ma.push(r);
          break;
        default:
          ba.push(r);
      }
      R(25);
      var i = (function () {
        var t = !1 === u.lean && Ea > 0 ? 100 : Ir.sequence * u.delay;
        return "string" == typeof u.upload
          ? Math.max(Math.min(t, 3e4), 100)
          : u.delay;
      })();
      n - Ma > 2 * i && (X(xa), (xa = null)),
        e &&
          null === xa &&
          (25 !== a && B(), (xa = W(Ta, i)), (Ma = n), ar(Oa));
    }
  }
  function _a() {
    X(xa),
      Ta(!0),
      (Ea = 0),
      (Oa = 0),
      (Ma = 0),
      (ma = []),
      (ba = []),
      (ya = {}),
      (ka = null),
      (wa = !1);
  }
  function Ta(t) {
    return (
      void 0 === t && (t = !1),
      ct(this, void 0, void 0, function () {
        var e, n, a, r, i, o, c, s;
        return st(this, function (l) {
          switch (l.label) {
            case 0:
              return (
                (xa = null),
                (e =
                  !1 === u.lean &&
                  Oa > 0 &&
                  (Oa < 1048576 || Ir.sequence > 0)) && Y(1, 1),
                ia(),
                (function () {
                  var t = [];
                  pa = [];
                  for (
                    var e = Ir.start + Ir.duration,
                      n = Math.max(e - 2e3, 0),
                      a = 0,
                      r = ha;
                    a < r.length;
                    a++
                  ) {
                    var i = r[a];
                    i.time >= n && (i.time <= e && pa.push(i), t.push(i));
                  }
                  (ha = t), fa(22);
                })(),
                gt(),
                (n = !0 === t),
                (a = JSON.stringify(Lr(n))),
                (r = "[".concat(ba.join(), "]")),
                (i = e ? "[".concat(ma.join(), "]") : ""),
                (o = (function (t) {
                  return t.p.length > 0
                    ? '{"e":'
                        .concat(t.e, ',"a":')
                        .concat(t.a, ',"p":')
                        .concat(t.p, "}")
                    : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}");
                })({ e: a, a: r, p: i })),
                n ? ((s = null), [3, 3]) : [3, 1]
              );
            case 1:
              return [4, dt(o)];
            case 2:
              (s = l.sent()), (l.label = 3);
            case 3:
              return (
                H(2, (c = s) ? c.length : o.length),
                Da(o, c, Ir.sequence, n),
                (ba = []),
                e && ((ma = []), (Oa = 0), (Ea = 0)),
                [2]
              );
          }
        });
      })
    );
  }
  function Da(t, e, n, a) {
    if ((void 0 === a && (a = !1), "string" == typeof u.upload)) {
      var r = u.upload,
        i = !1;
      if (a && "sendBeacon" in navigator)
        try {
          (i = navigator.sendBeacon.bind(navigator)(r, t)) && Ia(n);
        } catch (t) {}
      if (!1 === i) {
        n in ya ? ya[n].attempts++ : (ya[n] = { data: t, attempts: 1 });
        var o = new XMLHttpRequest();
        o.open("POST", r),
          null !== n &&
            (o.onreadystatechange = function () {
              Hr(Ca)(o, n);
            }),
          (o.withCredentials = !0),
          e
            ? (o.setRequestHeader("Accept", "application/x-clarity-gzip"),
              o.send(e))
            : o.send(t);
      }
    } else if (u.upload) {
      (0, u.upload)(t), Ia(n);
    }
  }
  function Ca(t, e) {
    var n = ya[e];
    t &&
      4 === t.readyState &&
      n &&
      ((t.status < 200 || t.status > 208) && n.attempts <= 1
        ? t.status >= 400 && t.status < 500
          ? rr(6)
          : (0 === t.status && (u.upload = u.fallback ? u.fallback : u.upload),
            Da(n.data, null, e))
        : ((ka = { sequence: e, attempts: n.attempts, status: t.status }),
          n.attempts > 1 && er(2),
          200 === t.status &&
            t.responseText &&
            (function (t) {
              var e = t && t.length > 0 ? t.split(" ") : [""];
              switch (e[0]) {
                case "END":
                  rr(6);
                  break;
                case "UPGRADE":
                  tt("Auto");
                  break;
                case "ACTION":
                  u.action && e.length > 1 && u.action(e[1]);
              }
            })(t.responseText),
          0 === t.status && (Da(n.data, null, e, !0), rr(3)),
          t.status >= 200 && t.status <= 208 && Ia(e),
          delete ya[e]));
  }
  function Ia(t) {
    1 === t && Or();
  }
  var ja,
    za = {};
  function La(t) {
    var e = t.error || t;
    return (
      e.message in za || (za[e.message] = 0),
      za[e.message]++ >= 5 ||
        (e &&
          e.message &&
          ((ja = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename,
          }),
          Aa(31))),
      !0
    );
  }
  function Aa(t) {
    return ct(this, void 0, void 0, function () {
      var e;
      return st(this, function (n) {
        switch (((e = [l(), t]), t)) {
          case 31:
            e.push(ja.message),
              e.push(ja.line),
              e.push(ja.column),
              e.push(ja.stack),
              e.push(y(ja.source)),
              Na(e);
            break;
          case 33:
            Ra &&
              (e.push(Ra.code),
              e.push(Ra.name),
              e.push(Ra.message),
              e.push(Ra.stack),
              e.push(Ra.severity),
              Na(e, !1));
            break;
          case 41:
            mt &&
              (e.push(mt.id),
              e.push(mt.target),
              e.push(mt.checksum),
              Na(e, !1));
        }
        return [2];
      });
    });
  }
  var Ra,
    Ha = {};
  function Ya(t, e, n, a, r) {
    void 0 === n && (n = null),
      void 0 === a && (a = null),
      void 0 === r && (r = null);
    var i = n ? "".concat(n, "|").concat(a) : "";
    (t in Ha && Ha[t].indexOf(i) >= 0) ||
      ((Ra = { code: t, name: n, message: a, stack: r, severity: e }),
      t in Ha ? Ha[t].push(i) : (Ha[t] = [i]),
      Aa(33));
  }
  var Wa,
    Xa = {},
    qa = [],
    Pa = {},
    Ua = {},
    Ba = [];
  function Va() {
    try {
      var t = u.extract;
      if (!t) return;
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e],
          a = t[e + 1];
        switch (n) {
          case 0:
            var r = t[e + 2];
            Pa[a] = Qa(r);
            break;
          case 1:
            break;
          case 2:
            var i = t[e + 2];
            Ua[a] = i;
            break;
          case 3:
            Ba = t[e + 2];
        }
      }
    } catch (t) {
      Ya(8, 1, t ? t.name : null);
    }
  }
  function Fa(t) {
    return JSON.parse(JSON.stringify(t));
  }
  function Ja() {
    try {
      for (var t in Pa) {
        var e = (r = $a(Fa(Pa[t]))) ? JSON.stringify(r).substring(0, 1e4) : r;
        e && Za(t, e);
      }
      for (var n in Ua) {
        var a = document.querySelector(Ua[n]);
        a && Za(n, a.innerText);
      }
    } catch (t) {
      Ya(5, 1, t ? t.name : null);
    }
    var r;
    er(40);
  }
  function Ga() {
    qa = [];
  }
  function Za(t, e, n) {
    void 0 === n && (n = !1),
      (!(t in Xa) || (t in Xa && Xa[t] !== e) || n) &&
        ((Xa[t] = e), qa.push(t));
  }
  function Ka() {
    (Xa = {}), (qa = []), (Pa = {}), (Ua = {});
  }
  function Qa(t) {
    for (var e = [], n = t.split("."); n.length > 0; ) {
      var a = n.shift(),
        r = a.indexOf("["),
        i = a.indexOf("{"),
        o = a.indexOf("}");
      e.push({
        name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
        type: r > 0 ? 1 : i > 0 ? 2 : 3,
        condition: i > 0 ? a.substring(i + 1, o) : null,
      });
    }
    return e;
  }
  function $a(t, e) {
    if ((void 0 === e && (e = window), 0 == t.length)) return e;
    var n,
      a = t.shift();
    if (e && e[a.name]) {
      var r = e[a.name];
      if (1 !== a.type && tr(r, a.condition)) n = $a(t, r);
      else if (Array.isArray(r)) {
        for (var i = [], o = 0, u = r; o < u.length; o++) {
          var c = u[o];
          if (tr(c, a.condition)) {
            var s = $a(t, c);
            s && i.push(s);
          }
        }
        n = i;
      }
      return n;
    }
    return null;
  }
  function tr(t, e) {
    if (e) {
      var n = e.split(":");
      return n.length > 1 ? t[n[0]] == n[1] : t[n[0]];
    }
    return !0;
  }
  function er(t) {
    var e = [l(), t];
    switch (t) {
      case 4:
        var n = O;
        n &&
          ((e = [n.time, n.event]).push(n.data.visible),
          e.push(n.data.docWidth),
          e.push(n.data.docHeight),
          e.push(n.data.screenWidth),
          e.push(n.data.screenHeight),
          e.push(n.data.scrollX),
          e.push(n.data.scrollY),
          e.push(n.data.pointerX),
          e.push(n.data.pointerY),
          e.push(n.data.activityTime),
          Na(e, !1)),
          S();
        break;
      case 25:
        e.push(z.gap), Na(e);
        break;
      case 35:
        e.push(Wa.check), Na(e, !1);
        break;
      case 3:
        e.push($.key), Na(e);
        break;
      case 2:
        e.push(ka.sequence), e.push(ka.attempts), e.push(ka.status), Na(e, !1);
        break;
      case 24:
        e.push(I.key), e.push(I.value), Na(e);
        break;
      case 34:
        var a = Object.keys(nt);
        if (a.length > 0) {
          for (var r = 0, i = a; r < i.length; r++) {
            var o = i[r];
            e.push(o), e.push(nt[o]);
          }
          ut(), Na(e, !1);
        }
        break;
      case 0:
        var u = Object.keys(A);
        if (u.length > 0) {
          for (var c = 0, s = u; c < s.length; c++) {
            var d = s[c],
              f = parseInt(d, 10);
            e.push(f), e.push(Math.round(A[d]));
          }
          (A = {}), Na(e, !1);
        }
        break;
      case 1:
        var h = Object.keys(cr);
        if (h.length > 0) {
          for (var p = 0, v = h; p < v.length; p++) {
            var g = v[p];
            f = parseInt(g, 10);
            e.push(f), e.push(cr[g]);
          }
          hr(), Na(e, !1);
        }
        break;
      case 36:
        var m = Object.keys(J);
        if (m.length > 0) {
          for (var b = 0, y = m; b < y.length; b++) {
            var w = y[b];
            f = parseInt(w, 10);
            e.push(f), e.push([].concat.apply([], J[w]));
          }
          K(), Na(e, !1);
        }
        break;
      case 40:
        for (var k = 0, E = qa; k < E.length; k++) {
          w = E[k];
          e.push(w), e.push(Xa[w]);
        }
        Ga(), Na(e, !1);
    }
  }
  function nr() {
    Wa = { check: 0 };
  }
  function ar(t) {
    if (0 === Wa.check) {
      var e = Wa.check;
      (e = Ir.sequence >= 128 ? 1 : e),
        (e = l() > 72e5 ? 2 : e),
        (e = t > 10485760 ? 2 : e) !== Wa.check && rr(e);
    }
  }
  function rr(t) {
    (Wa.check = t), Er(), vi();
  }
  function ir() {
    0 !== Wa.check && er(35);
  }
  function or() {
    Wa = null;
  }
  var ur = null,
    cr = null;
  function sr() {
    (ur = {}), (cr = {});
  }
  function lr() {
    (ur = {}), (cr = {});
  }
  function dr(t, e) {
    e &&
      ((e = "".concat(e)),
      t in ur || (ur[t] = []),
      ur[t].indexOf(e) < 0 &&
        (ur[t].push(e),
        t in cr || (cr[t] = []),
        cr[t].push(e),
        ur[t].length > 128 && rr(5)));
  }
  function fr() {
    er(1);
  }
  function hr() {
    cr = {};
  }
  var pr = null,
    vr = [],
    gr = null;
  function mr() {
    gr = null;
    var t,
      e = navigator && "userAgent" in navigator ? navigator.userAgent : "",
      n = document && document.title ? document.title : "",
      a = (function () {
        var t = {
            session: Sr(),
            ts: Math.round(Date.now()),
            count: 1,
            upgrade: null,
            upload: "",
          },
          e = Tr("_clsk");
        if (e) {
          var n = e.split("|");
          n.length >= 5 &&
            t.ts - Nr(n[1]) < 18e5 &&
            ((t.session = n[0]),
            (t.count = Nr(n[2]) + 1),
            (t.upgrade = Nr(n[3])),
            (t.upload =
              n.length >= 6
                ? "".concat("https://").concat(n[5], "/").concat(n[4])
                : "".concat("https://").concat(n[4])));
        }
        return t;
      })(),
      r = _r(),
      i = u.projectId || f(location.host);
    (pr = {
      projectId: i,
      userId: r.id,
      sessionId: a.session,
      pageNum: a.count,
    }),
      (u.lean = u.track && null !== a.upgrade ? 0 === a.upgrade : u.lean),
      (u.upload =
        u.track &&
        "string" == typeof u.upload &&
        a.upload &&
        a.upload.length > "https://".length
          ? a.upload
          : u.upload),
      dr(0, e),
      dr(3, n),
      dr(1, y(location.href)),
      dr(2, document.referrer),
      dr(
        15,
        (function () {
          var t = Sr();
          if (u.track && xr(window, "sessionStorage")) {
            var e = sessionStorage.getItem("_cltk");
            (t = e || t), sessionStorage.setItem("_cltk", t);
          }
          return t;
        })()
      ),
      dr(16, document.documentElement.lang),
      dr(17, document.dir),
      dr(26, "".concat(window.devicePixelRatio)),
      Y(0, a.ts),
      Y(1, 0),
      navigator &&
        (dr(9, navigator.language),
        Y(33, navigator.hardwareConcurrency),
        Y(32, navigator.maxTouchPoints),
        Y(34, Math.round(navigator.deviceMemory)),
        (t = navigator.userAgentData) && t.getHighEntropyValues
          ? t
              .getHighEntropyValues([
                "model",
                "platform",
                "platformVersion",
                "uaFullVersion",
              ])
              .then(function (t) {
                var e;
                dr(22, t.platform),
                  dr(23, t.platformVersion),
                  null === (e = t.brands) ||
                    void 0 === e ||
                    e.forEach(function (t) {
                      dr(24, t.name + "~" + t.version);
                    }),
                  dr(25, t.model),
                  Y(27, t.mobile ? 1 : 0);
              })
          : dr(22, navigator.platform)),
      screen &&
        (Y(14, Math.round(screen.width)),
        Y(15, Math.round(screen.height)),
        Y(16, Math.round(screen.colorDepth)));
    for (var o = 0, c = u.cookies; o < c.length; o++) {
      var s = c[o],
        l = Tr(s);
      l && at(s, l);
    }
    Mr(r);
  }
  function br() {
    (gr = null), (pr = null);
  }
  function yr(t, e) {
    void 0 === e && (e = !0),
      pr && !1 === e && t(pr, !u.lean),
      vr.push({ callback: t, wait: e });
  }
  function wr() {
    return pr ? [pr.userId, pr.sessionId, pr.pageNum].join(".") : "";
  }
  function kr() {
    $r() && ((u.track = !0), Mr(_r(), 1));
  }
  function Er() {
    Dr("_clsk", "", 0);
  }
  function Or() {
    var t = Math.round(Date.now()),
      e =
        u.upload && "string" == typeof u.upload
          ? u.upload.replace("https://", "")
          : "",
      n = u.lean ? 0 : 1;
    !(function (t) {
      vr.length > 0 &&
        vr.forEach(function (e) {
          !e.callback || (e.wait && !t) || e.callback(pr, !u.lean);
        });
    })(n),
      Dr("_clsk", [pr.sessionId, t, pr.pageNum, n, e].join("|"), 1);
  }
  function xr(t, e) {
    try {
      return !!t[e];
    } catch (t) {
      return !1;
    }
  }
  function Mr(t, e) {
    void 0 === e && (e = null), (e = null === e ? t.consent : e);
    var n = Math.ceil((Date.now() + 31536e6) / 864e5);
    (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e) &&
      Dr("_clck", [pr.userId, 1, n.toString(36), e].join("|"), 365);
  }
  function Sr() {
    var t = Math.floor(Math.random() * Math.pow(2, 32));
    return (
      window &&
        window.crypto &&
        window.crypto.getRandomValues &&
        Uint32Array &&
        (t = window.crypto.getRandomValues(new Uint32Array(1))[0]),
      t.toString(36)
    );
  }
  function Nr(t, e) {
    return void 0 === e && (e = 10), parseInt(t, e);
  }
  function _r() {
    var t = { id: Sr(), expiry: null, consent: 0 },
      e = Tr("_clck");
    if (e && e.length > 0) {
      for (
        var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";");
        r < i.length;
        r++
      ) {
        a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0;
      }
      if (1 === n.length || a > 1) {
        var o = ""
          .concat(";")
          .concat("expires=")
          .concat(new Date(0).toUTCString())
          .concat(";path=/");
        (document.cookie = "".concat("_clck", "=").concat(o)),
          (document.cookie = "".concat("_clsk", "=").concat(o));
      }
      n.length > 2 && (t.expiry = Nr(n[2], 36)),
        n.length > 3 && 1 === Nr(n[3]) && (t.consent = 1),
        (u.track = u.track || 1 === t.consent),
        (t.id = u.track ? n[0] : t.id);
    }
    return t;
  }
  function Tr(t) {
    if (xr(document, "cookie")) {
      var e = document.cookie.split(";");
      if (e)
        for (var n = 0; n < e.length; n++) {
          var a = e[n].split("=");
          if (a.length > 1 && a[0] && a[0].trim() === t) return a[1];
        }
    }
    return null;
  }
  function Dr(t, e, n) {
    if (
      u.track &&
      ((navigator && navigator.cookieEnabled) || xr(document, "cookie"))
    ) {
      var a = new Date();
      a.setDate(a.getDate() + n);
      var r = a ? "expires=" + a.toUTCString() : "",
        i = "".concat(t, "=").concat(e).concat(";").concat(r).concat(";path=/");
      try {
        if (null === gr) {
          for (
            var o = location.hostname ? location.hostname.split(".") : [],
              c = o.length - 1;
            c >= 0;
            c--
          )
            if (
              ((gr = ".".concat(o[c]).concat(gr || "")),
              c < o.length - 1 &&
                ((document.cookie = ""
                  .concat(i)
                  .concat(";")
                  .concat("domain=")
                  .concat(gr)),
                Tr(t) === e))
            )
              return;
          gr = "";
        }
      } catch (t) {
        gr = "";
      }
      document.cookie = gr
        ? "".concat(i).concat(";").concat("domain=").concat(gr)
        : i;
    }
  }
  var Cr,
    Ir = null;
  function jr() {
    var t = pr;
    Ir = {
      version: d,
      sequence: 0,
      start: 0,
      duration: 0,
      projectId: t.projectId,
      userId: t.userId,
      sessionId: t.sessionId,
      pageNum: t.pageNum,
      upload: 0,
      end: 0,
    };
  }
  function zr() {
    Ir = null;
  }
  function Lr(t) {
    return (
      (Ir.start = Ir.start + Ir.duration),
      (Ir.duration = l() - Ir.start),
      Ir.sequence++,
      (Ir.upload = t && "sendBeacon" in navigator ? 1 : 0),
      (Ir.end = t ? 1 : 0),
      [
        Ir.version,
        Ir.sequence,
        Ir.start,
        Ir.duration,
        Ir.projectId,
        Ir.userId,
        Ir.sessionId,
        Ir.pageNum,
        Ir.upload,
        Ir.end,
      ]
    );
  }
  function Ar() {
    Cr = [];
  }
  function Rr(t) {
    if (Cr && -1 === Cr.indexOf(t.message)) {
      var e = u.report;
      if (e && e.length > 0) {
        var n = {
          v: Ir.version,
          p: Ir.projectId,
          u: Ir.userId,
          s: Ir.sessionId,
          n: Ir.pageNum,
        };
        t.message && (n.m = t.message), t.stack && (n.e = t.stack);
        var a = new XMLHttpRequest();
        a.open("POST", e), a.send(JSON.stringify(n)), Cr.push(t.message);
      }
    }
    return t;
  }
  function Hr(t) {
    return function () {
      var e = performance.now();
      try {
        t.apply(this, arguments);
      } catch (t) {
        throw Rr(t);
      }
      var n = performance.now() - e;
      H(4, n), n > 30 && (R(7), Y(6, n));
    };
  }
  var Yr = [];
  function Wr(t, e, n, a) {
    void 0 === a && (a = !1), (n = Hr(n));
    try {
      t[c("addEventListener")](e, n, a),
        Yr.push({ event: e, target: t, listener: n, capture: a });
    } catch (t) {}
  }
  function Xr() {
    for (var t = 0, e = Yr; t < e.length; t++) {
      var n = e[t];
      try {
        n.target[c("removeEventListener")](n.event, n.listener, n.capture);
      } catch (t) {}
    }
    Yr = [];
  }
  var qr = null,
    Pr = null,
    Ur = null,
    Br = 0;
  function Vr() {
    return !(Br++ > 20) || (Ya(4, 0), !1);
  }
  function Fr() {
    (Br = 0), Ur !== Gr() && (vi(), window.setTimeout(Jr, 250));
  }
  function Jr() {
    pi(), Y(29, 1);
  }
  function Gr() {
    return location.href
      ? location.href.replace(location.hash, "")
      : location.href;
  }
  var Zr = !1;
  function Kr() {
    (Zr = !0),
      (s = performance.now()),
      Tt(),
      Xr(),
      Ar(),
      (Ur = Gr()),
      (Br = 0),
      Wr(window, "popstate", Fr),
      null === qr &&
        ((qr = history.pushState),
        (history.pushState = function () {
          qr.apply(this, arguments), $r() && Vr() && Fr();
        })),
      null === Pr &&
        ((Pr = history.replaceState),
        (history.replaceState = function () {
          Pr.apply(this, arguments), $r() && Vr() && Fr();
        }));
  }
  function Qr() {
    (Ur = null), (Br = 0), Ar(), Xr(), Tt(), (s = 0), (Zr = !1);
  }
  function $r() {
    return Zr;
  }
  function ti(t) {
    if (null === t || Zr) return !1;
    for (var e in t) e in u && (u[e] = t[e]);
    return !0;
  }
  function ei() {
    pi(), j("clarity", "restart");
  }
  var ni = Object.freeze({
    __proto__: null,
    start: function () {
      !(function () {
        (bt = []), Y(26, navigator.webdriver ? 1 : 0);
        try {
          Y(31, window.top == window.self ? 1 : 2);
        } catch (t) {
          Y(31, 0);
        }
      })(),
        Wr(window, "error", La),
        (za = {}),
        (Ha = {});
    },
    stop: function () {
      Ha = {};
    },
  });
  function ai() {
    return ct(this, void 0, void 0, function () {
      var t, e;
      return st(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = l()),
              jt((e = { id: wr(), cost: 3 })),
              [4, Qe(document, e, 0)]
            );
          case 1:
            return n.sent(), [4, Wt(5, e, t)];
          case 2:
            return n.sent(), zt(e), [2];
        }
      });
    });
  }
  var ri = Object.freeze({
    __proto__: null,
    start: function () {
      Ut(),
        Bt(),
        sa(),
        (na = null),
        (Qn = new WeakMap()),
        ($n = {}),
        (ta = []),
        (ea = !!window.IntersectionObserver),
        Cn(),
        (function () {
          if (
            (($e = []),
            (rn = []),
            (on = null),
            (un = 0),
            (cn = {}),
            null === en &&
              ((en = CSSStyleSheet.prototype.insertRule),
              (CSSStyleSheet.prototype.insertRule = function () {
                return $r() && hn(this.ownerNode), en.apply(this, arguments);
              })),
            null === nn &&
              ((nn = CSSStyleSheet.prototype.deleteRule),
              (CSSStyleSheet.prototype.deleteRule = function () {
                return $r() && hn(this.ownerNode), nn.apply(this, arguments);
              })),
            null === an)
          ) {
            an = Element.prototype.attachShadow;
            try {
              Element.prototype.attachShadow = function () {
                return $r()
                  ? hn(an.apply(this, arguments))
                  : an.apply(this, arguments);
              };
            } catch (t) {
              an = null;
            }
          }
        })(),
        Dt(ai, 1).then(function () {
          Hr(Bt)(), Hr(ia)();
        });
    },
    stop: function () {
      sa(),
        (Qn = null),
        ($n = {}),
        (ta = []),
        na && (na.disconnect(), (na = null)),
        (ea = !1),
        In(),
        (function () {
          for (var t = 0, e = $e; t < e.length; t++) {
            var n = e[t];
            n && n.disconnect();
          }
          ($e = []), (cn = {}), (tn = []), (rn = []), (un = 0), (on = null);
        })(),
        Ut();
    },
    hashText: qn,
  });
  var ii,
    oi = null;
  function ui() {
    oi = null;
  }
  function ci(t) {
    (oi = {
      fetchStart: Math.round(t.fetchStart),
      connectStart: Math.round(t.connectStart),
      connectEnd: Math.round(t.connectEnd),
      requestStart: Math.round(t.requestStart),
      responseStart: Math.round(t.responseStart),
      responseEnd: Math.round(t.responseEnd),
      domInteractive: Math.round(t.domInteractive),
      domComplete: Math.round(t.domComplete),
      loadEventStart: Math.round(t.loadEventStart),
      loadEventEnd: Math.round(t.loadEventEnd),
      redirectCount: Math.round(t.redirectCount),
      size: t.transferSize ? t.transferSize : 0,
      type: t.type,
      protocol: t.nextHopProtocol,
      encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
      decodedSize: t.decodedBodySize ? t.decodedBodySize : 0,
    }),
      (function (t) {
        ct(this, void 0, void 0, function () {
          var e, n;
          return st(this, function (a) {
            return (
              (e = l()),
              (n = [e, t]),
              29 === t &&
                (n.push(oi.fetchStart),
                n.push(oi.connectStart),
                n.push(oi.connectEnd),
                n.push(oi.requestStart),
                n.push(oi.responseStart),
                n.push(oi.responseEnd),
                n.push(oi.domInteractive),
                n.push(oi.domComplete),
                n.push(oi.loadEventStart),
                n.push(oi.loadEventEnd),
                n.push(oi.redirectCount),
                n.push(oi.size),
                n.push(oi.type),
                n.push(oi.protocol),
                n.push(oi.encodedSize),
                n.push(oi.decodedSize),
                ui(),
                Na(n, !1)),
              [2]
            );
          });
        });
      })(29);
  }
  var si = [
    "navigation",
    "resource",
    "longtask",
    "first-input",
    "layout-shift",
    "largest-contentful-paint",
  ];
  function li() {
    try {
      ii && ii.disconnect(), (ii = new PerformanceObserver(Hr(di)));
      for (var t = 0, e = si; t < e.length; t++) {
        var n = e[t];
        PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 &&
          ("layout-shift" === n && H(9, 0),
          ii.observe({ type: n, buffered: !0 }));
      }
    } catch (t) {
      Ya(3, 1);
    }
  }
  function di(t) {
    !(function (t) {
      for (
        var e =
            !("visibilityState" in document) ||
            "visible" === document.visibilityState,
          n = 0;
        n < t.length;
        n++
      ) {
        var a = t[n];
        switch (a.entryType) {
          case "navigation":
            ci(a);
            break;
          case "resource":
            var r = a.name;
            dr(4, fi(r)),
              (r !== u.upload && r !== u.fallback) || Y(28, a.duration);
            break;
          case "longtask":
            R(7);
            break;
          case "first-input":
            e && Y(10, a.processingStart - a.startTime);
            break;
          case "layout-shift":
            e && !a.hadRecentInput && H(9, 1e3 * a.value);
            break;
          case "largest-contentful-paint":
            e && Y(8, a.startTime);
        }
      }
      performance &&
        "memory" in performance &&
        performance.memory.usedJSHeapSize &&
        Y(30, Math.abs(performance.memory.usedJSHeapSize / 1048576));
    })(t.getEntries());
  }
  function fi(t) {
    var e = document.createElement("a");
    return (e.href = t), e.hostname;
  }
  var hi = [
    ni,
    ri,
    qe,
    Object.freeze({
      __proto__: null,
      start: function () {
        ui(),
          (function () {
            navigator &&
              "connection" in navigator &&
              dr(27, navigator.connection.effectiveType),
              window.PerformanceObserver &&
              PerformanceObserver.supportedEntryTypes
                ? "complete" !== document.readyState
                  ? Wr(window, "load", W.bind(this, li, 0))
                  : li()
                : Ya(3, 0);
          })();
      },
      stop: function () {
        ii && ii.disconnect(), (ii = null), ui();
      },
    }),
  ];
  function pi(t) {
    void 0 === t && (t = null),
      (function () {
        try {
          return (
            !1 === Zr &&
            "undefined" != typeof Promise &&
            window.MutationObserver &&
            document.createTreeWalker &&
            "now" in Date &&
            "now" in performance &&
            "undefined" != typeof WeakMap
          );
        } catch (t) {
          return !1;
        }
      })() &&
        (ti(t),
        Kr(),
        pt(),
        hi.forEach(function (t) {
          return Hr(t.start)();
        }));
  }
  function vi() {
    $r() &&
      (hi
        .slice()
        .reverse()
        .forEach(function (t) {
          return Hr(t.stop)();
        }),
      vt(),
      Qr());
  }
  var gi = Object.freeze({
    __proto__: null,
    version: d,
    start: pi,
    pause: function () {
      $r() &&
        (j("clarity", "pause"),
        null === Nt &&
          (Nt = new Promise(function (t) {
            _t = t;
          })));
    },
    resume: function () {
      $r() &&
        (Nt && (_t(), (Nt = null), null === St && Ct()),
        j("clarity", "resume"));
    },
    stop: vi,
    consent: kr,
    event: j,
    identify: rt,
    set: at,
    upgrade: tt,
    metadata: yr,
    hashText: qn,
  });
  !(function () {
    if ("undefined" != typeof window) {
      var t = window,
        e = "clarity";
      if (t[e] && t[e].v)
        return console.warn("Error CL001: Multiple Clarity tags detected.");
      var n = (t[e] && t[e].q) || [];
      for (
        t[e] = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          return gi[t].apply(gi, e);
        },
          t[e].v = d;
        n.length > 0;

      )
        t[e].apply(t, n.shift());
    }
  })();
})();
