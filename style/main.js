! function(n) {
    var r = {};

    function o(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = n, o.c = r, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 0)
}([function(e, t) {
    function n() {
        return window.matchMedia(s).matches
    }

    function r() {
        u && u.classList.toggle("hidden", !n()), i && i.classList.toggle("hidden", n()), d && d.classList.toggle("hidden", !n())
    }
    var o = document.querySelector(".container"),
        i = document.querySelector(".menu"),
        u = document.querySelector(".menu-trigger"),
        c = (document.querySelector(".menu__inner--desktop"), document.querySelector(".menu__sub-inner-more-trigger")),
        d = document.querySelector(".menu__sub-inner-more"),
        s = getComputedStyle(document.body).getPropertyValue("--phoneWidth");
    i && i.addEventListener("click", function(e) {
        return e.stopPropagation()
    }), d && d.addEventListener("click", function(e) {
        return e.stopPropagation()
    }), r(), document.body.addEventListener("click", function() {
        n() || !d || d.classList.contains("hidden") ? n() && !i.classList.contains("hidden") && i.classList.add("hidden") : d.classList.add("hidden")
    }), window.addEventListener("resize", r), u && u.addEventListener("click", function(e) {
        e.stopPropagation(), i && i.classList.toggle("hidden")
    }), c && c.addEventListener("click", function(e) {
        e.stopPropagation(), d && d.classList.toggle("hidden"), d.getBoundingClientRect().right > o.getBoundingClientRect().right && (d.style.left = "auto", d.style.right = 0)
    })
}])