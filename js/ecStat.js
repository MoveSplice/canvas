!function (r, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.ecStat = n() : r.ecStat = n()
}(this, function () {
    return function (r) {
        function n(e) {
            if (t[e]) return t[e].exports;
            var o = t[e] = {exports: {}, id: e, loaded: !1};
            return r[e].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
        }

        var t = {};
        return n.m = r, n.c = t, n.p = "", n(0)
    }([function (r, n, t) {
        r.exports = t(12)
    }, function (r, n, t) {
        var e;
        e = function (r) {
            function n(r) {
                return r = null === r ? NaN : +r, "number" == typeof r && !isNaN(r)
            }

            function t(r) {
                return isFinite(r) && r === Math.round(r)
            }

            return {isNumber: n, isInteger: t}
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            return function (r, n) {
                var t = r.length;
                if (!t) return 0;
                if (n <= 0 || t < 2) return r[0];
                if (n >= 1) return r[t - 1];
                var e = (t - 1) * n, o = Math.floor(e), a = r[o], u = r[o + 1];
                return a + (u - a) * (e - o)
            }
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            function n(r) {
                for (var n = []; t(r);) n.push(r.length), r = r[0];
                return n
            }

            function t(r) {
                return "[object Array]" === l.call(r)
            }

            function e(r, n) {
                for (var t = [], e = 0; e < r; e++) {
                    t[e] = [];
                    for (var o = 0; o < n; o++) t[e][o] = 0
                }
                return t
            }

            function o(r) {
                for (var n = 0, t = 0; t < r.length; t++) n += r[t];
                return n
            }

            function a(r, n) {
                for (var t = 0, e = 0; e < r.length; e++) t += r[e][n];
                return t
            }

            function u(r, n) {
                return r > n ? 1 : r < n ? -1 : r === n ? 0 : NaN
            }

            function i(r, n, t, e) {
                for (null == t && (t = 0), null == e && (e = r.length); t < e;) {
                    var o = Math.floor((t + e) / 2), a = u(r[o], n);
                    if (a > 0) e = o; else {
                        if (!(a < 0)) return o + 1;
                        t = o + 1
                    }
                }
                return t
            }

            function f(r, n, t) {
                if (r && n) {
                    if (r.map && r.map === h) return r.map(n, t);
                    for (var e = [], o = 0, a = r.length; o < a; o++) e.push(n.call(t, r[o], o, r));
                    return e
                }
            }

            var l = Object.prototype.toString, s = Array.prototype, h = s.map;
            return {size: n, isArray: t, zeros: e, sum: o, sumOfColumn: a, ascending: u, bisect: i, map: f}
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            function n(r) {
                if (!o(r)) throw new Error("Invalid data type, you should input an array");
                var n = [], t = a(r);
                if (1 === t.length) for (var e = 0; e < t[0]; e++) i(r[e]) && n.push(r[e]); else if (2 === t.length) for (var e = 0; e < t[0]; e++) {
                    for (var u = !0, f = 0; f < t[1]; f++) i(r[e][f]) || (u = !1);
                    u && n.push(r[e])
                }
                return n
            }

            var e = t(3), o = e.isArray, a = e.size, u = t(1), i = u.isNumber;
            return n
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            var n = t(9);
            return function (r) {
                var t = n(r);
                return t ? Math.sqrt(t) : t
            }
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            function n(r) {
                for (var n = -(1 / 0), t = 0; t < r.length; t++) o(r[t]) && r[t] > n && (n = r[t]);
                return n
            }

            var e = t(1), o = e.isNumber;
            return n
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            function n(r) {
                var n = r.length;
                return n ? e(r) / r.length : 0
            }

            var e = t(10);
            return n
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            function n(r) {
                for (var n = 1 / 0, t = 0; t < r.length; t++) o(r[t]) && r[t] < n && (n = r[t]);
                return n
            }

            var e = t(1), o = e.isNumber;
            return n
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            function n(r) {
                var n = r.length;
                if (!n || n < 2) return 0;
                if (r.length >= 2) {
                    for (var t, e = a(r), u = 0, i = 0; i < r.length; i++) o(r[i]) && (t = r[i] - e, u += t * t);
                    return u / r.length - 1
                }
            }

            var e = t(1), o = e.isNumber, a = t(7);
            return n
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            function n(r) {
                var n = r.length;
                if (!n) return 0;
                for (var t = 0, e = 0; e < n; e++) o(r[e]) && (t += r[e]);
                return t
            }

            var e = t(1), o = e.isNumber;
            return n
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            function n(r, n) {
                for (var t, o, i, f, s = l(r), h = c(s[0], 2), v = a(r, n), p = !0; p;) {
                    p = !1;
                    for (var d = 0; d < s[0]; d++) {
                        t = 1 / 0, o = -1;
                        for (var M = 0; M < n; M++) i = u(r[d], v[M]), i < t && (t = i, o = M);
                        h[d][0] !== o && (p = !0), h[d][0] = o, h[d][1] = g(t, 2)
                    }
                    for (var d = 0; d < n; d++) {
                        f = [];
                        for (var M = 0; M < h.length; M++) h[M][0] === d && f.push(r[M]);
                        v[d] = e(f)
                    }
                }
                var x = {centroids: v, clusterAssigned: h};
                return x
            }

            function e(r) {
                for (var n, t, e = l(r), o = [], a = 0; a < e[1]; a++) {
                    n = 0;
                    for (var u = 0; u < e[0]; u++) n += r[u][a];
                    t = n / e[0], o.push(t)
                }
                return o
            }

            function o(r, t, o) {
                function a() {
                    if (E < t) {
                        y = 1 / 0;
                        for (var r, e, o, a = 0; a < x.length; a++) {
                            b = [], w = [];
                            for (var u = 0; u < d.length; u++) d[u][0] === a ? b.push(v[u]) : w.push(d[u][1]);
                            N = n(b, 2), A = s(N.clusterAssigned, 1), q = h(w), A + q < y && (y = q + A, r = a, e = N.centroids, o = N.clusterAssigned)
                        }
                        for (var u = 0; u < o.length; u++) 0 === o[u][0] ? o[u][0] = r : 1 === o[u][0] && (o[u][0] = x.length);
                        for (x[r] = e[0], x.push(e[1]), u = 0, a = 0; u < d.length && a < o.length; u++) d[u][0] === r && (d[u][0] = o[a][0], d[u][1] = o[a++][1]);
                        for (var i = [], u = 0; u < x.length; u++) {
                            i[u] = [];
                            for (var a = 0; a < d.length; a++) d[a][0] === u && i[u].push(v[a])
                        }
                        j.clusterAssment = d, j.centroids = x, j.pointsInCluster = i, E++
                    } else j.isEnd = !0;
                    return j
                }

                for (var f, v = i(r), p = l(v), d = c(p[0], 2), M = e(v), x = [M], m = 0; m < p[0]; m++) f = u(v[m], M), d[m][1] = g(f, 2);
                var y, b, w, N, A, q, E = 1, j = {isEnd: !1}, z = {next: a};
                if (o) return z;
                for (var j; !(j = z.next()).isEnd;) ;
                return j
            }

            function a(r, n) {
                for (var t, e, o, a = l(r), u = c(n, a[1]), i = 0; i < a[1]; i++) {
                    t = r[0][i], e = r[0][i];
                    for (var f = 1; f < a[0]; f++) r[f][i] < t && (t = r[f][i]), r[f][i] > e && (e = r[f][i]);
                    o = e - t;
                    for (var f = 0; f < n; f++) u[f][i] = t + o * Math.random()
                }
                return u
            }

            function u(r, n) {
                if (!v(r) && !v(n)) return p(g(r - n, 2));
                for (var t = 0, e = 0; e < r.length; e++) t += g(r[e] - n[e], 2);
                return p(t)
            }

            var i = t(4), f = t(3), l = f.size, s = f.sumOfColumn, h = f.sum, c = f.zeros, v = f.isArray, p = Math.sqrt,
                g = Math.pow;
            return {kMeans: n, hierarchicalKMeans: o}
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            return {clustering: t(11), regression: t(14), statistics: t(15), histogram: t(13)}
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            function n(r, n) {
                n = null == n ? p.squareRoot : p[n];
                for (var t = i(r), a = e(t), u = o(t), f = n(t, u, a), l = v(u, a, f), g = h(Math.ceil(u / l) * l, Math.floor(a / l) * l, l), d = g.length, M = new Array(d + 1), x = 0; x <= d; x++) M[x] = {}, M[x].sample = [], M[x].x0 = x > 0 ? g[x - 1] : g[x] - u === l ? u : g[x] - l, M[x].x1 = x < d ? g[x] : a - g[x - 1] === l ? a : g[x - 1] + l;
                for (var x = 0; x < t.length; x++) u <= t[x] && t[x] <= a && M[c(g, t[x], 0, d)].sample.push(t[x]);
                var r = s(M, function (r) {
                    return [(r.x0 + r.x1) / 2, r.sample.length]
                });
                return {bins: M, data: r}
            }

            var e = t(6), o = t(8), a = t(2), u = t(5), i = t(4), f = t(3), l = f.ascending, s = f.map, h = t(17),
                c = f.bisect, v = t(18), p = {
                    squareRoot: function (r) {
                        var n = Math.ceil(Math.sqrt(r.length));
                        return n > 50 ? 50 : n
                    }, scott: function (r, n, t) {
                        return Math.ceil((t - n) / (3.5 * u(r) * Math.pow(r.length, -1 / 3)))
                    }, freedmanDiaconis: function (r, n, t) {
                        return r.sort(l), Math.ceil((t - n) / (2 * (a(r, .75) - a(r, .25)) * Math.pow(r.length, -1 / 3)))
                    }, sturges: function (r) {
                        return Math.ceil(Math.log(r.length) / Math.LN2) + 1
                    }
                };
            return n
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            function n(r, n) {
                for (var t = 0; t < r.length - 1; t++) {
                    for (var e = t, o = t + 1; o < r.length - 1; o++) Math.abs(r[t][o]) > Math.abs(r[t][e]) && (e = o);
                    for (var a = t; a < r.length; a++) {
                        var u = r[a][t];
                        r[a][t] = r[a][e], r[a][e] = u
                    }
                    for (var i = t + 1; i < r.length - 1; i++) for (var f = r.length - 1; f >= t; f--) r[f][i] -= r[f][t] / r[t][t] * r[t][i]
                }
                for (var l = new Array(n), s = r.length - 1, o = r.length - 2; o >= 0; o--) {
                    for (var u = 0, t = o + 1; t < r.length - 1; t++) u += r[t][o] * l[t];
                    l[o] = (r[s][o] - u) / r[o][o]
                }
                return l
            }

            var e = t(4), o = {
                linear: function (r) {
                    for (var n = e(r), t = 0, o = 0, a = 0, u = 0, i = n.length, f = 0; f < i; f++) t += n[f][0], o += n[f][1], a += n[f][0] * n[f][1], u += n[f][0] * n[f][0];
                    for (var l = (i * a - t * o) / (i * u - t * t), s = o / i - l * t / i, h = [], c = 0; c < n.length; c++) {
                        var v = [n[c][0], l * n[c][0] + s];
                        h.push(v)
                    }
                    var p = "y = " + Math.round(100 * l) / 100 + "x + " + Math.round(100 * s) / 100;
                    return {points: h, parameter: {gradient: l, intercept: s}, expression: p}
                }, linearThroughOrigin: function (r) {
                    for (var n = e(r), t = 0, o = 0, a = 0; a < n.length; a++) t += n[a][0] * n[a][0], o += n[a][0] * n[a][1];
                    for (var u = o / t, i = [], f = 0; f < n.length; f++) {
                        var l = [n[f][0], n[f][0] * u];
                        i.push(l)
                    }
                    var s = "y = " + Math.round(100 * u) / 100 + "x";
                    return {points: i, parameter: {gradient: u}, expression: s}
                }, exponential: function (r) {
                    for (var n = e(r), t = 0, o = 0, a = 0, u = 0, i = 0, f = 0, l = 0; l < n.length; l++) t += n[l][0], o += n[l][1], f += n[l][0] * n[l][1], a += n[l][0] * n[l][0] * n[l][1], u += n[l][1] * Math.log(n[l][1]), i += n[l][0] * n[l][1] * Math.log(n[l][1]);
                    for (var s = o * a - f * f, h = Math.pow(Math.E, (a * u - f * i) / s), c = (o * i - f * u) / s, v = [], p = 0; p < n.length; p++) {
                        var g = [n[p][0], h * Math.pow(Math.E, c * n[p][0])];
                        v.push(g)
                    }
                    var d = "y = " + Math.round(100 * h) / 100 + "e^(" + Math.round(100 * c) / 100 + "x)";
                    return {points: v, parameter: {coefficient: h, index: c}, expression: d}
                }, logarithmic: function (r) {
                    for (var n = e(r), t = 0, o = 0, a = 0, u = 0, i = 0; i < n.length; i++) t += Math.log(n[i][0]), o += n[i][1] * Math.log(n[i][0]), a += n[i][1], u += Math.pow(Math.log(n[i][0]), 2);
                    for (var f = (i * o - a * t) / (i * u - t * t), l = (a - f * t) / i, s = [], h = 0; h < n.length; h++) {
                        var c = [n[h][0], f * Math.log(n[h][0]) + l];
                        s.push(c)
                    }
                    var v = "y = " + Math.round(100 * l) / 100 + " + " + Math.round(100 * f) / 100 + "ln(x)";
                    return {points: s, parameter: {gradient: f, intercept: l}, expression: v}
                }, polynomial: function (r, t) {
                    var o = e(r);
                    "undefined" == typeof t && (t = 2);
                    for (var a = [], u = [], i = t + 1, f = 0; f < i; f++) {
                        for (var l = 0, s = 0; s < o.length; s++) l += o[s][1] * Math.pow(o[s][0], f);
                        u.push(l);
                        for (var h = [], c = 0; c < i; c++) {
                            for (var v = 0, p = 0; p < o.length; p++) v += Math.pow(o[p][0], f + c);
                            h.push(v)
                        }
                        a.push(h)
                    }
                    a.push(u);
                    for (var g = n(a, i), d = [], f = 0; f < o.length; f++) {
                        for (var M = 0, s = 0; s < g.length; s++) M += g[s] * Math.pow(o[f][0], s);
                        d.push([o[f][0], M])
                    }
                    for (var x = "y = ", f = g.length - 1; f >= 0; f--) x += f > 1 ? Math.round(g[f] * Math.pow(10, f + 1)) / Math.pow(10, f + 1) + "x^" + f + " + " : 1 === f ? Math.round(100 * g[f]) / 100 + "x + " : Math.round(100 * g[f]) / 100;
                    return {points: d, parameter: g, expression: x}
                }
            }, a = function (r, n, t) {
                return o[r](n, t)
            };
            return a
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            var n = {};
            return n.max = t(6), n.deviation = t(5), n.mean = t(7), n.median = t(16), n.min = t(8), n.max = t(2), n.max = t(9), n.sum = t(10), n
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            function n(r) {
                return e(r, .5)
            }

            var e = t(2);
            return n
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            return function (r, n, t) {
                var e = arguments.length;
                e < 2 ? (n = r, r = 0, t = 1) : t = e < 3 ? 1 : +t;
                for (var o = Math.ceil((n - r) / t), a = new Array(o + 1), u = 0; u < o + 1; u++) a[u] = r + u * t;
                return a
            }
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }, function (r, n, t) {
        var e;
        e = function (r) {
            return function (r, n, t) {
                var e = Math.abs(n - r) / t, o = Math.pow(10, Math.floor(Math.log(e) / Math.LN10)), a = e / o;
                return a >= Math.sqrt(50) ? o *= 10 : a >= Math.sqrt(10) ? o *= 5 : a >= Math.sqrt(2) && (o *= 2), n >= r ? o : -o
            }
        }.call(n, t, n, r), !(void 0 !== e && (r.exports = e))
    }])
});