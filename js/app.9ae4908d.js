(function (e) {
  function l(l) {
    for (
      var o, d, h = l[0], t = l[1], P = l[2], i = 0, s = [];
      i < h.length;
      i++
    )
      (d = h[i]),
        Object.prototype.hasOwnProperty.call(r, d) && r[d] && s.push(r[d][0]),
        (r[d] = 0);
    for (o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    n && n(l);
    while (s.length) s.shift()();
    return c.push.apply(c, P || []), a();
  }
  function a() {
    for (var e, l = 0; l < c.length; l++) {
      for (var a = c[l], o = !0, h = 1; h < a.length; h++) {
        var t = a[h];
        0 !== r[t] && (o = !1);
      }
      o && (c.splice(l--, 1), (e = d((d.s = a[0]))));
    }
    return e;
  }
  var o = {},
    r = { app: 0 },
    c = [];
  function d(l) {
    if (o[l]) return o[l].exports;
    var a = (o[l] = { i: l, l: !1, exports: {} });
    return e[l].call(a.exports, a, a.exports, d), (a.l = !0), a.exports;
  }
  (d.m = e),
    (d.c = o),
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
        for (var o in e)
          d.d(
            a,
            o,
            function (l) {
              return e[l];
            }.bind(null, o)
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
  var h = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    t = h.push.bind(h);
  (h.push = l), (h = h.slice());
  for (var P = 0; P < h.length; P++) l(h[P]);
  var n = t;
  c.push([0, "chunk-vendors"]), a();
})({
  0: function (e, l, a) {
    e.exports = a("56d7");
  },
  "188f": function (e, l, a) {},
  "56d7": function (e, l, a) {
    "use strict";
    a.r(l);
    var o = a("2b0e"),
      r = function () {
        var e = this,
          l = e.$createElement,
          a = e._self._c || l;
        return a("div", [a("router-view")], 1);
      },
      c = [],
      d = a("2877"),
      h = {},
      t = Object(d["a"])(h, r, c, !1, null, null, null),
      P = t.exports,
      n = a("8c4f"),
      i = function () {
        var e = this,
          l = e.$createElement,
          a = e._self._c || l;
        return a("div", { staticClass: "all" }, [
          e._m(0),
          a("div", { staticClass: "img" }, [
            a("img", {
              attrs: {
                src: "./assets/" + e.index + ".gif",
                alt: "fotka Radka Kučery s glitch efektem",
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
            a("span", { staticClass: "nickname" }, [
              e._v(e._s(e.details[e.index - 1].nName)),
            ]),
            a("p", { staticClass: "about" }, [
              e._v("“" + e._s(e.details[e.index - 1].about) + "”"),
            ]),
          ]),
        ]);
      },
      s = [
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
      u = {
        data() {
          return {
            index: 1,
            linkLeft: 0,
            linkRight: 0,
            details: [
              {
                fName: "Filip",
                lName: "Šourek",
                nName: "",
                about:
                  "Jeho oblíbenou kratochvílí je čekat ráno za dveřmi a bafnout na každého nově příchozího. Za pár týdnů ho už ale všchni ignorovali. I tak to ale dělá do dnes.",
              },
              {
                fName: "Radek",
                lName: "Kučera",
                nName: "",
                about: "",
              },
              {
                fName: "Marek",
                lName: "Dohnal",
                nName: "",
                about: "",
              },
              {
                fName: "Petr",
                lName: "Novák",
                nName: "",
                about: "",
              },
              {
                fName: "Jan",
                lName: "Košek",
                nName: "",
                about: "",
              },
              {
                fName: "Petr",
                lName: "Duda",
                nName: "",
                about: "",
              },
              {
                fName: "Martin",
                lName: "Bulíř",
                nName: "",
                about: "",
              },
              {
                fName: "Matěj",
                lName: "Pechout",
                nName: "",
                about: "",
              },
              {
                fName: "Martin",
                lName: "Soukup",
                nName: "",
                about: "",
              },
              {
                fName: "Pavel",
                lName: "Loubek",
                nName: "",
                about: "",
              },
              {
                fName: "Vojtěch",
                lName: "Frömmel",
                nName: "",
                about: "",
              },
              {
                fName: "Vladimír",
                lName: "Skřivánek",
                nName: "",
                about: "",
              },
              {
                fName: "Jan",
                lName: "Kočis",
                nName: "",
                about: "",
              },
              {
                fName: "Michal",
                lName: "Horák",
                nName: "",
                about: "",
              },
              {
                fName: "Matěj",
                lName: "Růža",
                nName: "",
                about: "",
              },
              {
                fName: "Dominik",
                lName: "Tulak",
                nName: "",
                about: "",
              },
              {
                fName: "Tomáš",
                lName: "Chabada",
                nName: "",
                about: "",
              },
              {
                fName: "Pavel",
                lName: "Zoreník",
                nName: "",
                about: "",
              },
              {
                fName: "Matěj",
                lName: "Najman",
                nName: "",
                about: "",
              },
              {
                fName: "Martin",
                lName: "Přívozník",
                nName: "",
                about: "",
              },
              {
                fName: "Onřej",
                lName: "Rethy",
                nName: "",
                about: "",
              },
              {
                fName: "ing. Marek",
                lName: "Pospíchal",
                nName: "",
                about: "",
              },
            ],
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
        },
        watch: {
          $route(e, l) {
            this.getIndex(), this.setLink();
          },
        },
        computed: {},
      },
      m = u,
      f = (a("5f6c"), Object(d["a"])(m, i, s, !1, null, null, null)),
      N = f.exports;
    o["a"].use(n["a"]);
    const p = [{ path: "/:id", name: "Detail", component: N }],
      b = new n["a"]({ mode: "history", base: "/", routes: p });
    var v = b;
    (o["a"].config.productionTip = !1),
      new o["a"]({
        router: v,
        render: function (e) {
          return e(P);
        },
      }).$mount("#app");
  },
  "5f6c": function (e, l, a) {
    "use strict";
    var o = a("188f"),
      r = a.n(o);
    r.a;
  },
});
//# sourceMappingURL=app.9ae4908d.js.map
