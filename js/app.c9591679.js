(function (e) {
  function l(l) {
    for (
      var r, d, t = l[0], h = l[1], n = l[2], i = 0, s = [];
      i < t.length;
      i++
    )
      (d = t[i]),
        Object.prototype.hasOwnProperty.call(o, d) && o[d] && s.push(o[d][0]),
        (o[d] = 0);
    for (r in h) Object.prototype.hasOwnProperty.call(h, r) && (e[r] = h[r]);
    P && P(l);
    while (s.length) s.shift()();
    return c.push.apply(c, n || []), a();
  }
  function a() {
    for (var e, l = 0; l < c.length; l++) {
      for (var a = c[l], r = !0, t = 1; t < a.length; t++) {
        var h = a[t];
        0 !== o[h] && (r = !1);
      }
      r && (c.splice(l--, 1), (e = d((d.s = a[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    c = [];
  function d(l) {
    if (r[l]) return r[l].exports;
    var a = (r[l] = { i: l, l: !1, exports: {} });
    return e[l].call(a.exports, a, a.exports, d), (a.l = !0), a.exports;
  }
  (d.m = e),
    (d.c = r),
    (d.d = function (e, l, a) {
      d.o(e, l) || Object.defineProperty(e, l, { enumerable: !0, get: a });
    }),
    (d.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (d.t = function (e, l) {
      if ((1 & l && (e = d(e)), 8 & l)) return e;
      if (4 & l && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (d.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & l && "string" != typeof e)
      )
        for (var r in e)
          d.d(
            a,
            r,
            function (l) {
              return e[l];
            }.bind(null, r)
          );
      return a;
    }),
    (d.n = function (e) {
      var l =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return d.d(l, "a", l), l;
    }),
    (d.o = function (e, l) {
      return Object.prototype.hasOwnProperty.call(e, l);
    }),
    (d.p = "/");
  var t = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    h = t.push.bind(t);
  (t.push = l), (t = t.slice());
  for (var n = 0; n < t.length; n++) l(t[n]);
  var P = h;
  c.push([0, "chunk-vendors"]), a();
})({
  0: function (e, l, a) {
    e.exports = a("56d7");
  },
  "188f": function (e, l, a) {},
  "56d7": function (e, l, a) {
    "use strict";
    a.r(l);
    var r = a("2b0e"),
      o = function () {
        var e = this,
          l = e.$createElement,
          a = e._self._c || l;
        return a("div", [a("router-view")], 1);
      },
      c = [],
      d = a("2877"),
      t = {},
      h = Object(d["a"])(t, o, c, !1, null, null, null),
      n = h.exports,
      P = a("8c4f"),
      i = function () {
        var e = this,
          l = e.$createElement,
          a = e._self._c || l;
        return a("div", { staticClass: "all list" }, [
          a(
            "ul",
            e._l(e.details, function (l, r) {
              return a(
                "li",
                { key: l.nName },
                [
                  a("routerLink", { attrs: { to: "/" + (r + 1) } }, [
                    a("span", { attrs: { name: l.fName + " " + l.lName } }, [
                      e._v(e._s(l.fName + " " + l.lName)),
                    ]),
                  ]),
                ],
                1
              );
            }),
            0
          ),
        ]);
      },
      s = [],
      u = a("69f4"),
      m = {
        data() {
          return { details: u };
        },
      },
      f = m,
      N = Object(d["a"])(f, i, s, !1, null, null, null),
      p = N.exports,
      v = function () {
        var e = this,
          l = e.$createElement,
          a = e._self._c || l;
        return a(
          "div",
          { staticClass: "all" },
          [
            e._m(0),
            a("div", { staticClass: "img" }, [
              a("img", {
                attrs: {
                  src: "./assets/" + this.index + ".gif",
                  alt: "fotka s glitch efektem",
                },
              }),
            ]),
            a(
              "div",
              { staticClass: "arrows" },
              [
                a(
                  "router-link",
                  { staticClass: "left", attrs: { to: "/" + e.linkLeft } },
                  [a("div"), a("div"), a("div")]
                ),
                a(
                  "router-link",
                  { staticClass: "right", attrs: { to: "/" + e.linkRight } },
                  [a("div"), a("div"), a("div")]
                ),
              ],
              1
            ),
            a("div", { staticClass: "info" }, [
              a("span", { staticClass: "name" }, [
                a(
                  "span",
                  {
                    staticClass: "glitch gl1",
                    attrs: { name: e.details[e.index - 1].fName },
                  },
                  [e._v(e._s(e.details[e.index - 1].fName))]
                ),
                a(
                  "span",
                  {
                    staticClass: "glitch gl2",
                    attrs: { name: e.details[e.index - 1].lName },
                  },
                  [e._v(e._s(e.details[e.index - 1].lName))]
                ),
              ]),
            ]),
            a("router-link", { staticClass: "back", attrs: { to: "/" } }, [
              a("div", { staticClass: "arrow-back" }, [a("div"), a("div")]),
              a("div", { staticClass: "arrow-back" }, [a("div"), a("div")]),
              a("span", [e._v("celá třída")]),
            ]),
          ],
          1
        );
      },
      b = [
        function () {
          var e = this,
            l = e.$createElement,
            a = e._self._c || l;
          return a("div", { staticClass: "class" }, [
            a("span", [e._v("2016 — 2020")]),
            a("span", [e._v("obor informační technologe")]),
          ]);
        },
      ],
      k = {
        data() {
          return {
            index: 1,
            linkLeft: 0,
            linkRight: 0,
            details: u,
            prevImg: {},
            nextImage: {},
          };
        },
        methods: {
          getIndex() {
            this.index = Number(this.$route.params.id);
          },
          setLink() {
            this.index + 1 < 23
              ? (this.linkRight = this.index + 1)
              : (this.linkRight = 1),
              this.index - 1 > 0
                ? (this.linkLeft = this.index - 1)
                : (this.linkLeft = 22);
          },
        },
        mounted() {
          this.getIndex(), this.setLink();
          let e = new Image(),
            l = new Image();
          (e.src = "./assets/" + (this.index - 1) + ".gif"),
            (l.src = "./assets/" + (this.index + 1) + ".gif"),
            (this.prevImg = e),
            (this.nextImg = l);
        },
        watch: {
          $route(e, l) {
            this.getIndex(),
              this.setLink(),
              (this.prevImg.src = "./assets/" + (this.index - 1) + ".gif"),
              (this.nextImg.src = "./assets/" + (this.index + 1) + ".gif");
          },
        },
        computed: {},
      },
      g = k,
      x = (a("5f6c"), Object(d["a"])(g, v, b, !1, null, null, null)),
      _ = x.exports;
    r["a"].use(P["a"]);
    const H = [
        { path: "/", name: "Home", component: p },
        { path: "/:id", name: "Detail", component: _ },
      ],
      y = new P["a"]({ mode: "history", base: "/", routes: H });
    var j = y;
    (r["a"].config.productionTip = !1),
      new r["a"]({
        router: j,
        render: function (e) {
          return e(n);
        },
      }).$mount("#app");
  },
  "5f6c": function (e, l, a) {
    "use strict";
    var r = a("188f"),
      o = a.n(r);
    o.a;
  },
  "69f4": function (e) {
    e.exports = JSON.parse(
      '[{"fName":"Filip","lName":"Šourek","nName":"","about":"Jeho oblíbenou kratochvílí je čekat ráno za dveřmi a bafnout na každého nově příchozího. Za pár týdnů ho už ale všchni ignorovali. I tak to ale dělá do dnes."},{"fName":"Radek","lName":"Kučera","nName":"","about":""},{"fName":"Marek","lName":"Dohnal","nName":"","about":""},{"fName":"Petr","lName":"Novák","nName":"","about":""},{"fName":"Jan","lName":"Košek","nName":"","about":""},{"fName":"Petr","lName":"Duda","nName":"","about":""},{"fName":"Martin","lName":"Bulíř","nName":"","about":""},{"fName":"Matěj","lName":"Pechout","nName":"","about":""},{"fName":"Martin","lName":"Soukup","nName":"","about":""},{"fName":"Pavel","lName":"Loubek","nName":"","about":""},{"fName":"Vojtěch","lName":"Frömmel","nName":"","about":""},{"fName":"Vladimír","lName":"Skřivánek","nName":"","about":""},{"fName":"Jan","lName":"Kočis","nName":"","about":""},{"fName":"Michal","lName":"Horák","nName":"","about":""},{"fName":"Matěj","lName":"Růža","nName":"","about":""},{"fName":"Dominik","lName":"Tulak","nName":"","about":""},{"fName":"Tomáš","lName":"Chabada","nName":"","about":""},{"fName":"Pavel","lName":"Zoreník","nName":"","about":""},{"fName":"Matěj","lName":"Najman","nName":"","about":""},{"fName":"Martin","lName":"Přívozník","nName":"","about":""},{"fName":"ing. Marek","lName":"Pospíchal","nName":"","about":""},{"fName":"Onřej","lName":"Rethy","nName":"","about":""}]'
    );
  },
});
//# sourceMappingURL=app.c9591679.js.map
