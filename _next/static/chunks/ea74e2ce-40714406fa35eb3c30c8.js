"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [205], {
        1364: function(n, t, e) {
            e.d(t, {
                Iv: function() {
                    return wn
                },
                ZP: function() {
                    return Sp
                }
            });
            var r = e(2480),
                o = e(444),
                i = e.n(o),
                a = e(9955),
                u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof e.g ? e.g : "undefined" != typeof self ? self : {},
                s = {
                    exports: {}
                },
                c = {
                    exports: {}
                },
                l = {},
                f = "function" == typeof Symbol && Symbol.for,
                p = f ? Symbol.for("react.element") : 60103,
                d = f ? Symbol.for("react.portal") : 60106,
                h = f ? Symbol.for("react.fragment") : 60107,
                m = f ? Symbol.for("react.strict_mode") : 60108,
                v = f ? Symbol.for("react.profiler") : 60114,
                g = f ? Symbol.for("react.provider") : 60109,
                y = f ? Symbol.for("react.context") : 60110,
                b = f ? Symbol.for("react.async_mode") : 60111,
                w = f ? Symbol.for("react.concurrent_mode") : 60111,
                x = f ? Symbol.for("react.forward_ref") : 60112,
                S = f ? Symbol.for("react.suspense") : 60113,
                E = f ? Symbol.for("react.suspense_list") : 60120,
                _ = f ? Symbol.for("react.memo") : 60115,
                C = f ? Symbol.for("react.lazy") : 60116,
                T = f ? Symbol.for("react.block") : 60121,
                P = f ? Symbol.for("react.fundamental") : 60117,
                A = f ? Symbol.for("react.responder") : 60118,
                L = f ? Symbol.for("react.scope") : 60119;

            function O(n) {
                if ("object" == typeof n && null !== n) {
                    var t = n.$$typeof;
                    switch (t) {
                        case p:
                            switch (n = n.type) {
                                case b:
                                case w:
                                case h:
                                case v:
                                case m:
                                case S:
                                    return n;
                                default:
                                    switch (n = n && n.$$typeof) {
                                        case y:
                                        case x:
                                        case C:
                                        case _:
                                        case g:
                                            return n;
                                        default:
                                            return t
                                    }
                            }
                        case d:
                            return t
                    }
                }
            }

            function k(n) {
                return O(n) === w
            }
            l.AsyncMode = b, l.ConcurrentMode = w, l.ContextConsumer = y, l.ContextProvider = g, l.Element = p, l.ForwardRef = x, l.Fragment = h, l.Lazy = C, l.Memo = _, l.Portal = d, l.Profiler = v, l.StrictMode = m, l.Suspense = S, l.isAsyncMode = function(n) {
                return k(n) || O(n) === b
            }, l.isConcurrentMode = k, l.isContextConsumer = function(n) {
                return O(n) === y
            }, l.isContextProvider = function(n) {
                return O(n) === g
            }, l.isElement = function(n) {
                return "object" == typeof n && null !== n && n.$$typeof === p
            }, l.isForwardRef = function(n) {
                return O(n) === x
            }, l.isFragment = function(n) {
                return O(n) === h
            }, l.isLazy = function(n) {
                return O(n) === C
            }, l.isMemo = function(n) {
                return O(n) === _
            }, l.isPortal = function(n) {
                return O(n) === d
            }, l.isProfiler = function(n) {
                return O(n) === v
            }, l.isStrictMode = function(n) {
                return O(n) === m
            }, l.isSuspense = function(n) {
                return O(n) === S
            }, l.isValidElementType = function(n) {
                return "string" == typeof n || "function" == typeof n || n === h || n === w || n === v || n === m || n === S || n === E || "object" == typeof n && null !== n && (n.$$typeof === C || n.$$typeof === _ || n.$$typeof === g || n.$$typeof === y || n.$$typeof === x || n.$$typeof === P || n.$$typeof === A || n.$$typeof === L || n.$$typeof === T)
            }, l.typeOf = O;
            var R = {};
            "production" !== i().env.NODE_ENV && function() {
                var n = "function" == typeof Symbol && Symbol.for,
                    t = n ? Symbol.for("react.element") : 60103,
                    e = n ? Symbol.for("react.portal") : 60106,
                    r = n ? Symbol.for("react.fragment") : 60107,
                    o = n ? Symbol.for("react.strict_mode") : 60108,
                    i = n ? Symbol.for("react.profiler") : 60114,
                    a = n ? Symbol.for("react.provider") : 60109,
                    u = n ? Symbol.for("react.context") : 60110,
                    s = n ? Symbol.for("react.async_mode") : 60111,
                    c = n ? Symbol.for("react.concurrent_mode") : 60111,
                    l = n ? Symbol.for("react.forward_ref") : 60112,
                    f = n ? Symbol.for("react.suspense") : 60113,
                    p = n ? Symbol.for("react.suspense_list") : 60120,
                    d = n ? Symbol.for("react.memo") : 60115,
                    h = n ? Symbol.for("react.lazy") : 60116,
                    m = n ? Symbol.for("react.block") : 60121,
                    v = n ? Symbol.for("react.fundamental") : 60117,
                    g = n ? Symbol.for("react.responder") : 60118,
                    y = n ? Symbol.for("react.scope") : 60119;

                function b(n) {
                    if ("object" == typeof n && null !== n) {
                        var p = n.$$typeof;
                        switch (p) {
                            case t:
                                var m = n.type;
                                switch (m) {
                                    case s:
                                    case c:
                                    case r:
                                    case i:
                                    case o:
                                    case f:
                                        return m;
                                    default:
                                        var v = m && m.$$typeof;
                                        switch (v) {
                                            case u:
                                            case l:
                                            case h:
                                            case d:
                                            case a:
                                                return v;
                                            default:
                                                return p
                                        }
                                }
                            case e:
                                return p
                        }
                    }
                }
                var w = s,
                    x = c,
                    S = u,
                    E = a,
                    _ = t,
                    C = l,
                    T = r,
                    P = h,
                    A = d,
                    L = e,
                    O = i,
                    k = o,
                    N = f,
                    z = !1;

                function I(n) {
                    return b(n) === c
                }
                R.AsyncMode = w, R.ConcurrentMode = x, R.ContextConsumer = S, R.ContextProvider = E, R.Element = _, R.ForwardRef = C, R.Fragment = T, R.Lazy = P, R.Memo = A, R.Portal = L, R.Profiler = O, R.StrictMode = k, R.Suspense = N, R.isAsyncMode = function(n) {
                    return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(n) || b(n) === s
                }, R.isConcurrentMode = I, R.isContextConsumer = function(n) {
                    return b(n) === u
                }, R.isContextProvider = function(n) {
                    return b(n) === a
                }, R.isElement = function(n) {
                    return "object" == typeof n && null !== n && n.$$typeof === t
                }, R.isForwardRef = function(n) {
                    return b(n) === l
                }, R.isFragment = function(n) {
                    return b(n) === r
                }, R.isLazy = function(n) {
                    return b(n) === h
                }, R.isMemo = function(n) {
                    return b(n) === d
                }, R.isPortal = function(n) {
                    return b(n) === e
                }, R.isProfiler = function(n) {
                    return b(n) === i
                }, R.isStrictMode = function(n) {
                    return b(n) === o
                }, R.isSuspense = function(n) {
                    return b(n) === f
                }, R.isValidElementType = function(n) {
                    return "string" == typeof n || "function" == typeof n || n === r || n === c || n === i || n === o || n === f || n === p || "object" == typeof n && null !== n && (n.$$typeof === h || n.$$typeof === d || n.$$typeof === a || n.$$typeof === u || n.$$typeof === l || n.$$typeof === v || n.$$typeof === g || n.$$typeof === y || n.$$typeof === m)
                }, R.typeOf = b
            }(), "production" === i().env.NODE_ENV ? c.exports = l : c.exports = R;
            var N = Object.getOwnPropertySymbols,
                z = Object.prototype.hasOwnProperty,
                I = Object.prototype.propertyIsEnumerable;

            function D(n) {
                if (null == n) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(n)
            }
            var M = function() {
                    try {
                        if (!Object.assign) return !1;
                        var n = new String("abc");
                        if (n[5] = "de", "5" === Object.getOwnPropertyNames(n)[0]) return !1;
                        for (var t = {}, e = 0; e < 10; e++) t["_" + String.fromCharCode(e)] = e;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(n) {
                                return t[n]
                            })).join("")) return !1;
                        var r = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(n) {
                            r[n] = n
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    } catch (n) {
                        return !1
                    }
                }() ? Object.assign : function(n, t) {
                    for (var e, r, o = D(n), i = 1; i < arguments.length; i++) {
                        for (var a in e = Object(arguments[i])) z.call(e, a) && (o[a] = e[a]);
                        if (N) {
                            r = N(e);
                            for (var u = 0; u < r.length; u++) I.call(e, r[u]) && (o[r[u]] = e[r[u]])
                        }
                    }
                    return o
                },
                j = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
                B = function() {};
            if ("production" !== i().env.NODE_ENV) {
                var V = j,
                    F = {},
                    W = Function.call.bind(Object.prototype.hasOwnProperty);
                B = function(n) {
                    var t = "Warning: " + n;
                    "undefined" != typeof console && console.error(t);
                    try {
                        throw new Error(t)
                    } catch (n) {}
                }
            }

            function Y(n, t, e, r, o) {
                if ("production" !== i().env.NODE_ENV)
                    for (var a in n)
                        if (W(n, a)) {
                            var u;
                            try {
                                if ("function" != typeof n[a]) {
                                    var s = Error((r || "React class") + ": " + e + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[a] + "`.");
                                    throw s.name = "Invariant Violation", s
                                }
                                u = n[a](t, a, r, e, null, V)
                            } catch (n) {
                                u = n
                            }
                            if (!u || u instanceof Error || B((r || "React class") + ": type specification of " + e + " `" + a + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in F)) {
                                F[u.message] = !0;
                                var c = o ? o() : "";
                                B("Failed " + e + " type: " + u.message + (null != c ? c : ""))
                            }
                        }
            }
            Y.resetWarningCache = function() {
                "production" !== i().env.NODE_ENV && (F = {})
            };
            var H = Y,
                U = c.exports,
                $ = M,
                X = j,
                q = H,
                G = Function.call.bind(Object.prototype.hasOwnProperty),
                K = function() {};

            function Z() {
                return null
            }

            function J() {}

            function Q() {}
            if ("production" !== i().env.NODE_ENV && (K = function(n) {
                    var t = "Warning: " + n;
                    "undefined" != typeof console && console.error(t);
                    try {
                        throw new Error(t)
                    } catch (n) {}
                }), Q.resetWarningCache = J, "production" !== i().env.NODE_ENV) {
                var nn = c.exports;
                s.exports = function(n, t) {
                    var e = "function" == typeof Symbol && Symbol.iterator,
                        r = "<<anonymous>>",
                        o = {
                            array: c("array"),
                            bool: c("boolean"),
                            func: c("function"),
                            number: c("number"),
                            object: c("object"),
                            string: c("string"),
                            symbol: c("symbol"),
                            any: s(Z),
                            arrayOf: function(n) {
                                return s((function(t, e, r, o, i) {
                                    if ("function" != typeof n) return new u("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                                    var a = t[e];
                                    if (!Array.isArray(a)) return new u("Invalid " + o + " `" + i + "` of type `" + f(a) + "` supplied to `" + r + "`, expected an array.");
                                    for (var s = 0; s < a.length; s++) {
                                        var c = n(a, s, r, o, i + "[" + s + "]", X);
                                        if (c instanceof Error) return c
                                    }
                                    return null
                                }))
                            },
                            element: s((function(t, e, r, o, i) {
                                var a = t[e];
                                return n(a) ? null : new u("Invalid " + o + " `" + i + "` of type `" + f(a) + "` supplied to `" + r + "`, expected a single ReactElement.")
                            })),
                            elementType: s((function(n, t, e, r, o) {
                                var i = n[t];
                                return U.isValidElementType(i) ? null : new u("Invalid " + r + " `" + o + "` of type `" + f(i) + "` supplied to `" + e + "`, expected a single ReactElement type.")
                            })),
                            instanceOf: function(n) {
                                return s((function(t, e, o, i, a) {
                                    if (!(t[e] instanceof n)) {
                                        var s = n.name || r;
                                        return new u("Invalid " + i + " `" + a + "` of type `" + ((c = t[e]).constructor && c.constructor.name ? c.constructor.name : r) + "` supplied to `" + o + "`, expected instance of `" + s + "`.")
                                    }
                                    var c;
                                    return null
                                }))
                            },
                            node: s((function(n, t, e, r, o) {
                                return l(n[t]) ? null : new u("Invalid " + r + " `" + o + "` supplied to `" + e + "`, expected a ReactNode.")
                            })),
                            objectOf: function(n) {
                                return s((function(t, e, r, o, i) {
                                    if ("function" != typeof n) return new u("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                                    var a = t[e],
                                        s = f(a);
                                    if ("object" !== s) return new u("Invalid " + o + " `" + i + "` of type `" + s + "` supplied to `" + r + "`, expected an object.");
                                    for (var c in a)
                                        if (G(a, c)) {
                                            var l = n(a, c, r, o, i + "." + c, X);
                                            if (l instanceof Error) return l
                                        }
                                    return null
                                }))
                            },
                            oneOf: function(n) {
                                if (!Array.isArray(n)) return "production" !== i().env.NODE_ENV && K(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), Z;

                                function t(t, e, r, o, i) {
                                    for (var s = t[e], c = 0; c < n.length; c++)
                                        if (a(s, n[c])) return null;
                                    var l = JSON.stringify(n, (function(n, t) {
                                        return "symbol" === p(t) ? String(t) : t
                                    }));
                                    return new u("Invalid " + o + " `" + i + "` of value `" + String(s) + "` supplied to `" + r + "`, expected one of " + l + ".")
                                }
                                return s(t)
                            },
                            oneOfType: function(n) {
                                if (!Array.isArray(n)) return "production" !== i().env.NODE_ENV && K("Invalid argument supplied to oneOfType, expected an instance of array."), Z;
                                for (var t = 0; t < n.length; t++) {
                                    var e = n[t];
                                    if ("function" != typeof e) return K("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + d(e) + " at index " + t + "."), Z
                                }
                                return s((function(t, e, r, o, i) {
                                    for (var a = 0; a < n.length; a++)
                                        if (null == (0, n[a])(t, e, r, o, i, X)) return null;
                                    return new u("Invalid " + o + " `" + i + "` supplied to `" + r + "`.")
                                }))
                            },
                            shape: function(n) {
                                return s((function(t, e, r, o, i) {
                                    var a = t[e],
                                        s = f(a);
                                    if ("object" !== s) return new u("Invalid " + o + " `" + i + "` of type `" + s + "` supplied to `" + r + "`, expected `object`.");
                                    for (var c in n) {
                                        var l = n[c];
                                        if (l) {
                                            var p = l(a, c, r, o, i + "." + c, X);
                                            if (p) return p
                                        }
                                    }
                                    return null
                                }))
                            },
                            exact: function(n) {
                                return s((function(t, e, r, o, i) {
                                    var a = t[e],
                                        s = f(a);
                                    if ("object" !== s) return new u("Invalid " + o + " `" + i + "` of type `" + s + "` supplied to `" + r + "`, expected `object`.");
                                    var c = $({}, t[e], n);
                                    for (var l in c) {
                                        var p = n[l];
                                        if (!p) return new u("Invalid " + o + " `" + i + "` key `" + l + "` supplied to `" + r + "`.\nBad object: " + JSON.stringify(t[e], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(n), null, "  "));
                                        var d = p(a, l, r, o, i + "." + l, X);
                                        if (d) return d
                                    }
                                    return null
                                }))
                            }
                        };

                    function a(n, t) {
                        return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t
                    }

                    function u(n) {
                        this.message = n, this.stack = ""
                    }

                    function s(n) {
                        if ("production" !== i().env.NODE_ENV);

                        function t(t, e, o, i, a, s, c) {
                            if (i = i || r, s = s || o, c !== X) {
                                var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                                throw l.name = "Invariant Violation", l
                            }
                            return null == e[o] ? t ? null === e[o] ? new u("The " + a + " `" + s + "` is marked as required in `" + i + "`, but its value is `null`.") : new u("The " + a + " `" + s + "` is marked as required in `" + i + "`, but its value is `undefined`.") : null : n(e, o, i, a, s)
                        }
                        var e = t.bind(null, !1);
                        return e.isRequired = t.bind(null, !0), e
                    }

                    function c(n) {
                        return s((function(t, e, r, o, i, a) {
                            var s = t[e];
                            return f(s) !== n ? new u("Invalid " + o + " `" + i + "` of type `" + p(s) + "` supplied to `" + r + "`, expected `" + n + "`.") : null
                        }))
                    }

                    function l(t) {
                        switch (typeof t) {
                            case "number":
                            case "string":
                            case "undefined":
                                return !0;
                            case "boolean":
                                return !t;
                            case "object":
                                if (Array.isArray(t)) return t.every(l);
                                if (null === t || n(t)) return !0;
                                var r = function(n) {
                                    var t = n && (e && n[e] || n["@@iterator"]);
                                    if ("function" == typeof t) return t
                                }(t);
                                if (!r) return !1;
                                var o, i = r.call(t);
                                if (r !== t.entries) {
                                    for (; !(o = i.next()).done;)
                                        if (!l(o.value)) return !1
                                } else
                                    for (; !(o = i.next()).done;) {
                                        var a = o.value;
                                        if (a && !l(a[1])) return !1
                                    }
                                return !0;
                            default:
                                return !1
                        }
                    }

                    function f(n) {
                        var t = typeof n;
                        return Array.isArray(n) ? "array" : n instanceof RegExp ? "object" : function(n, t) {
                            return "symbol" === n || !!t && ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
                        }(t, n) ? "symbol" : t
                    }

                    function p(n) {
                        if (null == n) return "" + n;
                        var t = f(n);
                        if ("object" === t) {
                            if (n instanceof Date) return "date";
                            if (n instanceof RegExp) return "regexp"
                        }
                        return t
                    }

                    function d(n) {
                        var t = p(n);
                        switch (t) {
                            case "array":
                            case "object":
                                return "an " + t;
                            case "boolean":
                            case "date":
                            case "regexp":
                                return "a " + t;
                            default:
                                return t
                        }
                    }
                    return u.prototype = Error.prototype, o.checkPropTypes = q, o.resetWarningCache = q.resetWarningCache, o.PropTypes = o, o
                }(nn.isElement)
            } else s.exports = function() {
                function n(n, t, e, r, o, i) {
                    if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== i) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return n
                }
                n.isRequired = n;
                var e = {
                    array: n,
                    bool: n,
                    func: n,
                    number: n,
                    object: n,
                    string: n,
                    symbol: n,
                    any: n,
                    arrayOf: t,
                    element: n,
                    elementType: n,
                    instanceOf: t,
                    node: n,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: Q,
                    resetWarningCache: J
                };
                return e.PropTypes = e, e
            }();
            var tn = s.exports;

            function en(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
                return r
            }

            function rn(n, t) {
                if (n) {
                    if ("string" == typeof n) return en(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    return "Object" === e && n.constructor && (e = n.constructor.name), "Map" === e || "Set" === e ? Array.from(n) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? en(n, t) : void 0
                }
            }

            function on(n, t) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, t) {
                    var e = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != e) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (e = e.call(n); !(a = (r = e.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                        } catch (n) {
                            u = !0, o = n
                        } finally {
                            try {
                                a || null == e.return || e.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(n, t) || rn(n, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function an(n, t, e) {
                return t in n ? Object.defineProperty(n, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = e, n
            }

            function un(n, t) {
                var e = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function sn(n) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? un(Object(e), !0).forEach((function(t) {
                        an(n, t, e[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : un(Object(e)).forEach((function(t) {
                        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                    }))
                }
                return n
            }
            var cn = {
                    elements: [],
                    isOpened: !1,
                    isLoaded: !1,
                    options: {
                        buttons: {
                            backgroundColor: "rgba(30,30,36,0.8)",
                            iconColor: "rgba(255, 255, 255, 0.8)",
                            iconPadding: "10px",
                            showAutoplayButton: !0,
                            showCloseButton: !0,
                            showDownloadButton: !0,
                            showFullscreenButton: !0,
                            showNextButton: !0,
                            showPrevButton: !0,
                            size: "40px"
                        },
                        settings: {
                            autoplaySpeed: 3e3,
                            boxShadow: "none",
                            disableKeyboardControls: !1,
                            disablePanzoom: !1,
                            disableWheelControls: !1,
                            downloadedFileName: "SRL-image",
                            hideControlsAfter: !1,
                            lightboxTransitionSpeed: .3,
                            lightboxTransitionTimingFunction: "linear",
                            overlayColor: "rgba(30, 30, 30, 0.9)",
                            slideAnimationType: "fade",
                            slideSpringValues: [300, 50],
                            slideTransitionSpeed: .6,
                            slideTransitionTimingFunction: "linear",
                            usingPreact: !1
                        },
                        caption: {
                            captionAlignment: "start",
                            captionColor: "#FFFFFF",
                            captionFontFamily: "inherit",
                            captionFontSize: "inherit",
                            captionFontStyle: "inherit",
                            captionFontWeight: "inherit",
                            captionContainerPadding: "20px 0 30px 0",
                            captionTextTransform: "inherit",
                            showCaption: !0
                        },
                        thumbnails: {
                            showThumbnails: !0,
                            thumbnailsAlignment: "center",
                            thumbnailsContainerPadding: "0",
                            thumbnailsContainerBackgroundColor: "transparent",
                            thumbnailsGap: "0 1px",
                            thumbnailsIconColor: "#ffffff",
                            thumbnailsPosition: "bottom",
                            thumbnailsOpacity: .4,
                            thumbnailsSize: ["100px", "80px"]
                        },
                        progressBar: {
                            backgroundColor: "#f2f2f2",
                            fillColor: "#000000",
                            height: "3px",
                            showProgressBar: !0
                        }
                    },
                    selectedElement: {
                        caption: "",
                        height: 0,
                        id: 0,
                        source: "",
                        thumbnail: "",
                        width: 0
                    },
                    callbacks: {
                        onCountSlides: function() {},
                        onSlideChange: function() {},
                        onLightboxClosed: function() {},
                        onLightboxOpened: function() {}
                    }
                },
                ln = r.createContext(cn),
                fn = function(n) {
                    var t = on((0, r.useReducer)((function(n, t) {
                            switch (t.type) {
                                case "READY_LIGHTBOX":
                                    return sn(sn(sn({}, n), t.mergedSettings), {}, {
                                        elements: t.elements,
                                        isLoaded: !0
                                    });
                                case "RESET_LIGHTBOX":
                                    return sn({}, cn);
                                case "HANDLE_ELEMENT":
                                    return sn(sn({}, n), {}, {
                                        isOpened: !0,
                                        selectedElement: sn({}, t.element)
                                    });
                                case "OPEN_AT_INDEX":
                                    return sn(sn({}, n), {}, {
                                        isOpened: !0,
                                        selectedElement: sn({}, n.elements[t.index])
                                    });
                                case "CLOSE_LIGHTBOX":
                                    return sn(sn({}, n), {}, {
                                        isOpened: !1
                                    });
                                default:
                                    return n
                            }
                        }), cn), 2),
                        e = t[0],
                        o = t[1];
                    return r.createElement(ln.Provider, {
                        value: sn(sn({}, e), {}, {
                            dispatch: o
                        })
                    }, n.children)
                };

            function pn(n) {
                return function(n) {
                    if (Array.isArray(n)) return en(n)
                }(n) || function(n) {
                    if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || rn(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function dn(n, t, e) {
                n.addEventListener("click", (function() {
                    if (e) return e(t)
                }))
            }

            function hn(n) {
                console.error(n), console.warn("An error as occurred with Simple React Lightbox. Make sure you wrapped your App with the <SimpleReactLightbox> component and then use the <SRLWrapper> component.")
            }
            fn.propTypes = {
                children: tn.oneOfType([tn.arrayOf(tn.node), tn.node]).isRequired
            };
            var mn, vn, gn = {
                exports: {}
            };

            function yn(n, t) {
                var e = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function bn(n) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? yn(Object(e), !0).forEach((function(t) {
                        an(n, t, e[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : yn(Object(e)).forEach((function(t) {
                        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                    }))
                }
                return n
            }
            mn = gn, vn = gn.exports,
                function() {
                    var n, t = "Expected a function",
                        e = "__lodash_hash_undefined__",
                        r = "__lodash_placeholder__",
                        o = 32,
                        i = 128,
                        a = 1 / 0,
                        s = 9007199254740991,
                        c = NaN,
                        l = 4294967295,
                        f = [
                            ["ary", i],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", o],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        p = "[object Arguments]",
                        d = "[object Array]",
                        h = "[object Boolean]",
                        m = "[object Date]",
                        v = "[object Error]",
                        g = "[object Function]",
                        y = "[object GeneratorFunction]",
                        b = "[object Map]",
                        w = "[object Number]",
                        x = "[object Object]",
                        S = "[object Promise]",
                        E = "[object RegExp]",
                        _ = "[object Set]",
                        C = "[object String]",
                        T = "[object Symbol]",
                        P = "[object WeakMap]",
                        A = "[object ArrayBuffer]",
                        L = "[object DataView]",
                        O = "[object Float32Array]",
                        k = "[object Float64Array]",
                        R = "[object Int8Array]",
                        N = "[object Int16Array]",
                        z = "[object Int32Array]",
                        I = "[object Uint8Array]",
                        D = "[object Uint8ClampedArray]",
                        M = "[object Uint16Array]",
                        j = "[object Uint32Array]",
                        B = /\b__p \+= '';/g,
                        V = /\b(__p \+=) '' \+/g,
                        F = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        W = /&(?:amp|lt|gt|quot|#39);/g,
                        Y = /[&<>"']/g,
                        H = RegExp(W.source),
                        U = RegExp(Y.source),
                        $ = /<%-([\s\S]+?)%>/g,
                        X = /<%([\s\S]+?)%>/g,
                        q = /<%=([\s\S]+?)%>/g,
                        G = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        K = /^\w*$/,
                        Z = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        J = /[\\^$.*+?()[\]{}|]/g,
                        Q = RegExp(J.source),
                        nn = /^\s+/,
                        tn = /\s/,
                        en = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        rn = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        on = /,? & /,
                        an = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        un = /[()=,{}\[\]\/\s]/,
                        sn = /\\(\\)?/g,
                        cn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        ln = /\w*$/,
                        fn = /^[-+]0x[0-9a-f]+$/i,
                        pn = /^0b[01]+$/i,
                        dn = /^\[object .+?Constructor\]$/,
                        hn = /^0o[0-7]+$/i,
                        gn = /^(?:0|[1-9]\d*)$/,
                        yn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        bn = /($^)/,
                        wn = /['\n\r\u2028\u2029\\]/g,
                        xn = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        Sn = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        En = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        _n = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        Cn = "[" + _n + "]",
                        Tn = "[" + xn + "]",
                        Pn = "\\d+",
                        An = "[" + Sn + "]",
                        Ln = "[^\\ud800-\\udfff" + _n + Pn + "\\u2700-\\u27bf" + Sn + En + "]",
                        On = "\\ud83c[\\udffb-\\udfff]",
                        kn = "[^\\ud800-\\udfff]",
                        Rn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        Nn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        zn = "[" + En + "]",
                        In = "(?:" + An + "|" + Ln + ")",
                        Dn = "(?:" + zn + "|" + Ln + ")",
                        Mn = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        jn = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        Bn = "(?:" + Tn + "|" + On + ")?",
                        Vn = "[\\ufe0e\\ufe0f]?",
                        Fn = Vn + Bn + "(?:\\u200d(?:" + [kn, Rn, Nn].join("|") + ")" + Vn + Bn + ")*",
                        Wn = "(?:" + ["[\\u2700-\\u27bf]", Rn, Nn].join("|") + ")" + Fn,
                        Yn = "(?:" + [kn + Tn + "?", Tn, Rn, Nn, "[\\ud800-\\udfff]"].join("|") + ")",
                        Hn = RegExp("['\u2019]", "g"),
                        Un = RegExp(Tn, "g"),
                        $n = RegExp(On + "(?=" + On + ")|" + Yn + Fn, "g"),
                        Xn = RegExp([zn + "?" + An + "+" + Mn + "(?=" + [Cn, zn, "$"].join("|") + ")", Dn + "+" + jn + "(?=" + [Cn, zn + In, "$"].join("|") + ")", zn + "?" + In + "+" + Mn, zn + "+" + jn, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Pn, Wn].join("|"), "g"),
                        qn = RegExp("[\\u200d\\ud800-\\udfff" + xn + "\\ufe0e\\ufe0f]"),
                        Gn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        Kn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        Zn = -1,
                        Jn = {};
                    Jn[O] = Jn[k] = Jn[R] = Jn[N] = Jn[z] = Jn[I] = Jn[D] = Jn[M] = Jn[j] = !0, Jn[p] = Jn[d] = Jn[A] = Jn[h] = Jn[L] = Jn[m] = Jn[v] = Jn[g] = Jn[b] = Jn[w] = Jn[x] = Jn[E] = Jn[_] = Jn[C] = Jn[P] = !1;
                    var Qn = {};
                    Qn[p] = Qn[d] = Qn[A] = Qn[L] = Qn[h] = Qn[m] = Qn[O] = Qn[k] = Qn[R] = Qn[N] = Qn[z] = Qn[b] = Qn[w] = Qn[x] = Qn[E] = Qn[_] = Qn[C] = Qn[T] = Qn[I] = Qn[D] = Qn[M] = Qn[j] = !0, Qn[v] = Qn[g] = Qn[P] = !1;
                    var nt = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        tt = parseFloat,
                        et = parseInt,
                        rt = "object" == typeof u && u && u.Object === Object && u,
                        ot = "object" == typeof self && self && self.Object === Object && self,
                        it = rt || ot || Function("return this")(),
                        at = vn && !vn.nodeType && vn,
                        ut = at && mn && !mn.nodeType && mn,
                        st = ut && ut.exports === at,
                        ct = st && rt.process,
                        lt = function() {
                            try {
                                return ut && ut.require && ut.require("util").types || ct && ct.binding && ct.binding("util")
                            } catch (n) {}
                        }(),
                        ft = lt && lt.isArrayBuffer,
                        pt = lt && lt.isDate,
                        dt = lt && lt.isMap,
                        ht = lt && lt.isRegExp,
                        mt = lt && lt.isSet,
                        vt = lt && lt.isTypedArray;

                    function gt(n, t, e) {
                        switch (e.length) {
                            case 0:
                                return n.call(t);
                            case 1:
                                return n.call(t, e[0]);
                            case 2:
                                return n.call(t, e[0], e[1]);
                            case 3:
                                return n.call(t, e[0], e[1], e[2])
                        }
                        return n.apply(t, e)
                    }

                    function yt(n, t, e, r) {
                        for (var o = -1, i = null == n ? 0 : n.length; ++o < i;) {
                            var a = n[o];
                            t(r, a, e(a), n)
                        }
                        return r
                    }

                    function bt(n, t) {
                        for (var e = -1, r = null == n ? 0 : n.length; ++e < r && !1 !== t(n[e], e, n););
                        return n
                    }

                    function wt(n, t) {
                        for (var e = null == n ? 0 : n.length; e-- && !1 !== t(n[e], e, n););
                        return n
                    }

                    function xt(n, t) {
                        for (var e = -1, r = null == n ? 0 : n.length; ++e < r;)
                            if (!t(n[e], e, n)) return !1;
                        return !0
                    }

                    function St(n, t) {
                        for (var e = -1, r = null == n ? 0 : n.length, o = 0, i = []; ++e < r;) {
                            var a = n[e];
                            t(a, e, n) && (i[o++] = a)
                        }
                        return i
                    }

                    function Et(n, t) {
                        return !(null == n || !n.length) && Nt(n, t, 0) > -1
                    }

                    function _t(n, t, e) {
                        for (var r = -1, o = null == n ? 0 : n.length; ++r < o;)
                            if (e(t, n[r])) return !0;
                        return !1
                    }

                    function Ct(n, t) {
                        for (var e = -1, r = null == n ? 0 : n.length, o = Array(r); ++e < r;) o[e] = t(n[e], e, n);
                        return o
                    }

                    function Tt(n, t) {
                        for (var e = -1, r = t.length, o = n.length; ++e < r;) n[o + e] = t[e];
                        return n
                    }

                    function Pt(n, t, e, r) {
                        var o = -1,
                            i = null == n ? 0 : n.length;
                        for (r && i && (e = n[++o]); ++o < i;) e = t(e, n[o], o, n);
                        return e
                    }

                    function At(n, t, e, r) {
                        var o = null == n ? 0 : n.length;
                        for (r && o && (e = n[--o]); o--;) e = t(e, n[o], o, n);
                        return e
                    }

                    function Lt(n, t) {
                        for (var e = -1, r = null == n ? 0 : n.length; ++e < r;)
                            if (t(n[e], e, n)) return !0;
                        return !1
                    }
                    var Ot = Mt("length");

                    function kt(n, t, e) {
                        var r;
                        return e(n, (function(n, e, o) {
                            if (t(n, e, o)) return r = e, !1
                        })), r
                    }

                    function Rt(n, t, e, r) {
                        for (var o = n.length, i = e + (r ? 1 : -1); r ? i-- : ++i < o;)
                            if (t(n[i], i, n)) return i;
                        return -1
                    }

                    function Nt(n, t, e) {
                        return t == t ? function(n, t, e) {
                            for (var r = e - 1, o = n.length; ++r < o;)
                                if (n[r] === t) return r;
                            return -1
                        }(n, t, e) : Rt(n, It, e)
                    }

                    function zt(n, t, e, r) {
                        for (var o = e - 1, i = n.length; ++o < i;)
                            if (r(n[o], t)) return o;
                        return -1
                    }

                    function It(n) {
                        return n != n
                    }

                    function Dt(n, t) {
                        var e = null == n ? 0 : n.length;
                        return e ? Vt(n, t) / e : c
                    }

                    function Mt(t) {
                        return function(e) {
                            return null == e ? n : e[t]
                        }
                    }

                    function jt(t) {
                        return function(e) {
                            return null == t ? n : t[e]
                        }
                    }

                    function Bt(n, t, e, r, o) {
                        return o(n, (function(n, o, i) {
                            e = r ? (r = !1, n) : t(e, n, o, i)
                        })), e
                    }

                    function Vt(t, e) {
                        for (var r, o = -1, i = t.length; ++o < i;) {
                            var a = e(t[o]);
                            a !== n && (r = r === n ? a : r + a)
                        }
                        return r
                    }

                    function Ft(n, t) {
                        for (var e = -1, r = Array(n); ++e < n;) r[e] = t(e);
                        return r
                    }

                    function Wt(n) {
                        return n ? n.slice(0, ie(n) + 1).replace(nn, "") : n
                    }

                    function Yt(n) {
                        return function(t) {
                            return n(t)
                        }
                    }

                    function Ht(n, t) {
                        return Ct(t, (function(t) {
                            return n[t]
                        }))
                    }

                    function Ut(n, t) {
                        return n.has(t)
                    }

                    function $t(n, t) {
                        for (var e = -1, r = n.length; ++e < r && Nt(t, n[e], 0) > -1;);
                        return e
                    }

                    function Xt(n, t) {
                        for (var e = n.length; e-- && Nt(t, n[e], 0) > -1;);
                        return e
                    }

                    function qt(n, t) {
                        for (var e = n.length, r = 0; e--;) n[e] === t && ++r;
                        return r
                    }
                    var Gt = jt({
                            "\xc0": "A",
                            "\xc1": "A",
                            "\xc2": "A",
                            "\xc3": "A",
                            "\xc4": "A",
                            "\xc5": "A",
                            "\xe0": "a",
                            "\xe1": "a",
                            "\xe2": "a",
                            "\xe3": "a",
                            "\xe4": "a",
                            "\xe5": "a",
                            "\xc7": "C",
                            "\xe7": "c",
                            "\xd0": "D",
                            "\xf0": "d",
                            "\xc8": "E",
                            "\xc9": "E",
                            "\xca": "E",
                            "\xcb": "E",
                            "\xe8": "e",
                            "\xe9": "e",
                            "\xea": "e",
                            "\xeb": "e",
                            "\xcc": "I",
                            "\xcd": "I",
                            "\xce": "I",
                            "\xcf": "I",
                            "\xec": "i",
                            "\xed": "i",
                            "\xee": "i",
                            "\xef": "i",
                            "\xd1": "N",
                            "\xf1": "n",
                            "\xd2": "O",
                            "\xd3": "O",
                            "\xd4": "O",
                            "\xd5": "O",
                            "\xd6": "O",
                            "\xd8": "O",
                            "\xf2": "o",
                            "\xf3": "o",
                            "\xf4": "o",
                            "\xf5": "o",
                            "\xf6": "o",
                            "\xf8": "o",
                            "\xd9": "U",
                            "\xda": "U",
                            "\xdb": "U",
                            "\xdc": "U",
                            "\xf9": "u",
                            "\xfa": "u",
                            "\xfb": "u",
                            "\xfc": "u",
                            "\xdd": "Y",
                            "\xfd": "y",
                            "\xff": "y",
                            "\xc6": "Ae",
                            "\xe6": "ae",
                            "\xde": "Th",
                            "\xfe": "th",
                            "\xdf": "ss",
                            "\u0100": "A",
                            "\u0102": "A",
                            "\u0104": "A",
                            "\u0101": "a",
                            "\u0103": "a",
                            "\u0105": "a",
                            "\u0106": "C",
                            "\u0108": "C",
                            "\u010a": "C",
                            "\u010c": "C",
                            "\u0107": "c",
                            "\u0109": "c",
                            "\u010b": "c",
                            "\u010d": "c",
                            "\u010e": "D",
                            "\u0110": "D",
                            "\u010f": "d",
                            "\u0111": "d",
                            "\u0112": "E",
                            "\u0114": "E",
                            "\u0116": "E",
                            "\u0118": "E",
                            "\u011a": "E",
                            "\u0113": "e",
                            "\u0115": "e",
                            "\u0117": "e",
                            "\u0119": "e",
                            "\u011b": "e",
                            "\u011c": "G",
                            "\u011e": "G",
                            "\u0120": "G",
                            "\u0122": "G",
                            "\u011d": "g",
                            "\u011f": "g",
                            "\u0121": "g",
                            "\u0123": "g",
                            "\u0124": "H",
                            "\u0126": "H",
                            "\u0125": "h",
                            "\u0127": "h",
                            "\u0128": "I",
                            "\u012a": "I",
                            "\u012c": "I",
                            "\u012e": "I",
                            "\u0130": "I",
                            "\u0129": "i",
                            "\u012b": "i",
                            "\u012d": "i",
                            "\u012f": "i",
                            "\u0131": "i",
                            "\u0134": "J",
                            "\u0135": "j",
                            "\u0136": "K",
                            "\u0137": "k",
                            "\u0138": "k",
                            "\u0139": "L",
                            "\u013b": "L",
                            "\u013d": "L",
                            "\u013f": "L",
                            "\u0141": "L",
                            "\u013a": "l",
                            "\u013c": "l",
                            "\u013e": "l",
                            "\u0140": "l",
                            "\u0142": "l",
                            "\u0143": "N",
                            "\u0145": "N",
                            "\u0147": "N",
                            "\u014a": "N",
                            "\u0144": "n",
                            "\u0146": "n",
                            "\u0148": "n",
                            "\u014b": "n",
                            "\u014c": "O",
                            "\u014e": "O",
                            "\u0150": "O",
                            "\u014d": "o",
                            "\u014f": "o",
                            "\u0151": "o",
                            "\u0154": "R",
                            "\u0156": "R",
                            "\u0158": "R",
                            "\u0155": "r",
                            "\u0157": "r",
                            "\u0159": "r",
                            "\u015a": "S",
                            "\u015c": "S",
                            "\u015e": "S",
                            "\u0160": "S",
                            "\u015b": "s",
                            "\u015d": "s",
                            "\u015f": "s",
                            "\u0161": "s",
                            "\u0162": "T",
                            "\u0164": "T",
                            "\u0166": "T",
                            "\u0163": "t",
                            "\u0165": "t",
                            "\u0167": "t",
                            "\u0168": "U",
                            "\u016a": "U",
                            "\u016c": "U",
                            "\u016e": "U",
                            "\u0170": "U",
                            "\u0172": "U",
                            "\u0169": "u",
                            "\u016b": "u",
                            "\u016d": "u",
                            "\u016f": "u",
                            "\u0171": "u",
                            "\u0173": "u",
                            "\u0174": "W",
                            "\u0175": "w",
                            "\u0176": "Y",
                            "\u0177": "y",
                            "\u0178": "Y",
                            "\u0179": "Z",
                            "\u017b": "Z",
                            "\u017d": "Z",
                            "\u017a": "z",
                            "\u017c": "z",
                            "\u017e": "z",
                            "\u0132": "IJ",
                            "\u0133": "ij",
                            "\u0152": "Oe",
                            "\u0153": "oe",
                            "\u0149": "'n",
                            "\u017f": "s"
                        }),
                        Kt = jt({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function Zt(n) {
                        return "\\" + nt[n]
                    }

                    function Jt(n) {
                        return qn.test(n)
                    }

                    function Qt(n) {
                        var t = -1,
                            e = Array(n.size);
                        return n.forEach((function(n, r) {
                            e[++t] = [r, n]
                        })), e
                    }

                    function ne(n, t) {
                        return function(e) {
                            return n(t(e))
                        }
                    }

                    function te(n, t) {
                        for (var e = -1, o = n.length, i = 0, a = []; ++e < o;) {
                            var u = n[e];
                            u !== t && u !== r || (n[e] = r, a[i++] = e)
                        }
                        return a
                    }

                    function ee(n) {
                        var t = -1,
                            e = Array(n.size);
                        return n.forEach((function(n) {
                            e[++t] = n
                        })), e
                    }

                    function re(n) {
                        return Jt(n) ? function(n) {
                            for (var t = $n.lastIndex = 0; $n.test(n);) ++t;
                            return t
                        }(n) : Ot(n)
                    }

                    function oe(n) {
                        return Jt(n) ? function(n) {
                            return n.match($n) || []
                        }(n) : function(n) {
                            return n.split("")
                        }(n)
                    }

                    function ie(n) {
                        for (var t = n.length; t-- && tn.test(n.charAt(t)););
                        return t
                    }
                    var ae = jt({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        ue = function u(tn) {
                            var mn, vn = (tn = null == tn ? it : ue.defaults(it.Object(), tn, ue.pick(it, Kn))).Array,
                                xn = tn.Date,
                                Sn = tn.Error,
                                En = tn.Function,
                                _n = tn.Math,
                                Cn = tn.Object,
                                Tn = tn.RegExp,
                                Pn = tn.String,
                                An = tn.TypeError,
                                Ln = vn.prototype,
                                On = En.prototype,
                                kn = Cn.prototype,
                                Rn = tn["__core-js_shared__"],
                                Nn = On.toString,
                                zn = kn.hasOwnProperty,
                                In = 0,
                                Dn = (mn = /[^.]+$/.exec(Rn && Rn.keys && Rn.keys.IE_PROTO || "")) ? "Symbol(src)_1." + mn : "",
                                Mn = kn.toString,
                                jn = Nn.call(Cn),
                                Bn = it._,
                                Vn = Tn("^" + Nn.call(zn).replace(J, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                Fn = st ? tn.Buffer : n,
                                Wn = tn.Symbol,
                                Yn = tn.Uint8Array,
                                $n = Fn ? Fn.allocUnsafe : n,
                                qn = ne(Cn.getPrototypeOf, Cn),
                                nt = Cn.create,
                                rt = kn.propertyIsEnumerable,
                                ot = Ln.splice,
                                at = Wn ? Wn.isConcatSpreadable : n,
                                ut = Wn ? Wn.iterator : n,
                                ct = Wn ? Wn.toStringTag : n,
                                lt = function() {
                                    try {
                                        var n = ci(Cn, "defineProperty");
                                        return n({}, "", {}), n
                                    } catch (n) {}
                                }(),
                                Ot = tn.clearTimeout !== it.clearTimeout && tn.clearTimeout,
                                jt = xn && xn.now !== it.Date.now && xn.now,
                                se = tn.setTimeout !== it.setTimeout && tn.setTimeout,
                                ce = _n.ceil,
                                le = _n.floor,
                                fe = Cn.getOwnPropertySymbols,
                                pe = Fn ? Fn.isBuffer : n,
                                de = tn.isFinite,
                                he = Ln.join,
                                me = ne(Cn.keys, Cn),
                                ve = _n.max,
                                ge = _n.min,
                                ye = xn.now,
                                be = tn.parseInt,
                                we = _n.random,
                                xe = Ln.reverse,
                                Se = ci(tn, "DataView"),
                                Ee = ci(tn, "Map"),
                                _e = ci(tn, "Promise"),
                                Ce = ci(tn, "Set"),
                                Te = ci(tn, "WeakMap"),
                                Pe = ci(Cn, "create"),
                                Ae = Te && new Te,
                                Le = {},
                                Oe = Di(Se),
                                ke = Di(Ee),
                                Re = Di(_e),
                                Ne = Di(Ce),
                                ze = Di(Te),
                                Ie = Wn ? Wn.prototype : n,
                                De = Ie ? Ie.valueOf : n,
                                Me = Ie ? Ie.toString : n;

                            function je(n) {
                                if (Qa(n) && !Wa(n) && !(n instanceof We)) {
                                    if (n instanceof Fe) return n;
                                    if (zn.call(n, "__wrapped__")) return Mi(n)
                                }
                                return new Fe(n)
                            }
                            var Be = function() {
                                function t() {}
                                return function(e) {
                                    if (!Ja(e)) return {};
                                    if (nt) return nt(e);
                                    t.prototype = e;
                                    var r = new t;
                                    return t.prototype = n, r
                                }
                            }();

                            function Ve() {}

                            function Fe(t, e) {
                                this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = n
                            }

                            function We(n) {
                                this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = l, this.__views__ = []
                            }

                            function Ye(n) {
                                var t = -1,
                                    e = null == n ? 0 : n.length;
                                for (this.clear(); ++t < e;) {
                                    var r = n[t];
                                    this.set(r[0], r[1])
                                }
                            }

                            function He(n) {
                                var t = -1,
                                    e = null == n ? 0 : n.length;
                                for (this.clear(); ++t < e;) {
                                    var r = n[t];
                                    this.set(r[0], r[1])
                                }
                            }

                            function Ue(n) {
                                var t = -1,
                                    e = null == n ? 0 : n.length;
                                for (this.clear(); ++t < e;) {
                                    var r = n[t];
                                    this.set(r[0], r[1])
                                }
                            }

                            function $e(n) {
                                var t = -1,
                                    e = null == n ? 0 : n.length;
                                for (this.__data__ = new Ue; ++t < e;) this.add(n[t])
                            }

                            function Xe(n) {
                                var t = this.__data__ = new He(n);
                                this.size = t.size
                            }

                            function qe(n, t) {
                                var e = Wa(n),
                                    r = !e && Fa(n),
                                    o = !e && !r && $a(n),
                                    i = !e && !r && !o && uu(n),
                                    a = e || r || o || i,
                                    u = a ? Ft(n.length, Pn) : [],
                                    s = u.length;
                                for (var c in n) !t && !zn.call(n, c) || a && ("length" == c || o && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || vi(c, s)) || u.push(c);
                                return u
                            }

                            function Ge(t) {
                                var e = t.length;
                                return e ? t[Ur(0, e - 1)] : n
                            }

                            function Ke(n, t) {
                                return Ni(Po(n), ir(t, 0, n.length))
                            }

                            function Ze(n) {
                                return Ni(Po(n))
                            }

                            function Je(t, e, r) {
                                (r !== n && !ja(t[e], r) || r === n && !(e in t)) && rr(t, e, r)
                            }

                            function Qe(t, e, r) {
                                var o = t[e];
                                zn.call(t, e) && ja(o, r) && (r !== n || e in t) || rr(t, e, r)
                            }

                            function nr(n, t) {
                                for (var e = n.length; e--;)
                                    if (ja(n[e][0], t)) return e;
                                return -1
                            }

                            function tr(n, t, e, r) {
                                return lr(n, (function(n, o, i) {
                                    t(r, n, e(n), i)
                                })), r
                            }

                            function er(n, t) {
                                return n && Ao(t, Lu(t), n)
                            }

                            function rr(n, t, e) {
                                "__proto__" == t && lt ? lt(n, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: e,
                                    writable: !0
                                }) : n[t] = e
                            }

                            function or(t, e) {
                                for (var r = -1, o = e.length, i = vn(o), a = null == t; ++r < o;) i[r] = a ? n : _u(t, e[r]);
                                return i
                            }

                            function ir(t, e, r) {
                                return t == t && (r !== n && (t = t <= r ? t : r), e !== n && (t = t >= e ? t : e)), t
                            }

                            function ar(t, e, r, o, i, a) {
                                var u, s = 1 & e,
                                    c = 2 & e,
                                    l = 4 & e;
                                if (r && (u = i ? r(t, o, i, a) : r(t)), u !== n) return u;
                                if (!Ja(t)) return t;
                                var f = Wa(t);
                                if (f) {
                                    if (u = function(n) {
                                            var t = n.length,
                                                e = new n.constructor(t);
                                            return t && "string" == typeof n[0] && zn.call(n, "index") && (e.index = n.index, e.input = n.input), e
                                        }(t), !s) return Po(t, u)
                                } else {
                                    var d = pi(t),
                                        v = d == g || d == y;
                                    if ($a(t)) return xo(t, s);
                                    if (d == x || d == p || v && !i) {
                                        if (u = c || v ? {} : hi(t), !s) return c ? function(n, t) {
                                            return Ao(n, fi(n), t)
                                        }(t, function(n, t) {
                                            return n && Ao(t, Ou(t), n)
                                        }(u, t)) : function(n, t) {
                                            return Ao(n, li(n), t)
                                        }(t, er(u, t))
                                    } else {
                                        if (!Qn[d]) return i ? t : {};
                                        u = function(n, t, e) {
                                            var r, o = n.constructor;
                                            switch (t) {
                                                case A:
                                                    return So(n);
                                                case h:
                                                case m:
                                                    return new o(+n);
                                                case L:
                                                    return function(n, t) {
                                                        var e = t ? So(n.buffer) : n.buffer;
                                                        return new n.constructor(e, n.byteOffset, n.byteLength)
                                                    }(n, e);
                                                case O:
                                                case k:
                                                case R:
                                                case N:
                                                case z:
                                                case I:
                                                case D:
                                                case M:
                                                case j:
                                                    return Eo(n, e);
                                                case b:
                                                    return new o;
                                                case w:
                                                case C:
                                                    return new o(n);
                                                case E:
                                                    return function(n) {
                                                        var t = new n.constructor(n.source, ln.exec(n));
                                                        return t.lastIndex = n.lastIndex, t
                                                    }(n);
                                                case _:
                                                    return new o;
                                                case T:
                                                    return r = n, De ? Cn(De.call(r)) : {}
                                            }
                                        }(t, d, s)
                                    }
                                }
                                a || (a = new Xe);
                                var S = a.get(t);
                                if (S) return S;
                                a.set(t, u), ou(t) ? t.forEach((function(n) {
                                    u.add(ar(n, e, r, n, t, a))
                                })) : nu(t) && t.forEach((function(n, o) {
                                    u.set(o, ar(n, e, r, o, t, a))
                                }));
                                var P = f ? n : (l ? c ? ei : ti : c ? Ou : Lu)(t);
                                return bt(P || t, (function(n, o) {
                                    P && (n = t[o = n]), Qe(u, o, ar(n, e, r, o, t, a))
                                })), u
                            }

                            function ur(t, e, r) {
                                var o = r.length;
                                if (null == t) return !o;
                                for (t = Cn(t); o--;) {
                                    var i = r[o],
                                        a = e[i],
                                        u = t[i];
                                    if (u === n && !(i in t) || !a(u)) return !1
                                }
                                return !0
                            }

                            function sr(e, r, o) {
                                if ("function" != typeof e) throw new An(t);
                                return Li((function() {
                                    e.apply(n, o)
                                }), r)
                            }

                            function cr(n, t, e, r) {
                                var o = -1,
                                    i = Et,
                                    a = !0,
                                    u = n.length,
                                    s = [],
                                    c = t.length;
                                if (!u) return s;
                                e && (t = Ct(t, Yt(e))), r ? (i = _t, a = !1) : t.length >= 200 && (i = Ut, a = !1, t = new $e(t));
                                n: for (; ++o < u;) {
                                    var l = n[o],
                                        f = null == e ? l : e(l);
                                    if (l = r || 0 !== l ? l : 0, a && f == f) {
                                        for (var p = c; p--;)
                                            if (t[p] === f) continue n;
                                        s.push(l)
                                    } else i(t, f, r) || s.push(l)
                                }
                                return s
                            }
                            je.templateSettings = {
                                escape: $,
                                evaluate: X,
                                interpolate: q,
                                variable: "",
                                imports: {
                                    _: je
                                }
                            }, je.prototype = Ve.prototype, je.prototype.constructor = je, Fe.prototype = Be(Ve.prototype), Fe.prototype.constructor = Fe, We.prototype = Be(Ve.prototype), We.prototype.constructor = We, Ye.prototype.clear = function() {
                                this.__data__ = Pe ? Pe(null) : {}, this.size = 0
                            }, Ye.prototype.delete = function(n) {
                                var t = this.has(n) && delete this.__data__[n];
                                return this.size -= t ? 1 : 0, t
                            }, Ye.prototype.get = function(t) {
                                var r = this.__data__;
                                if (Pe) {
                                    var o = r[t];
                                    return o === e ? n : o
                                }
                                return zn.call(r, t) ? r[t] : n
                            }, Ye.prototype.has = function(t) {
                                var e = this.__data__;
                                return Pe ? e[t] !== n : zn.call(e, t)
                            }, Ye.prototype.set = function(t, r) {
                                var o = this.__data__;
                                return this.size += this.has(t) ? 0 : 1, o[t] = Pe && r === n ? e : r, this
                            }, He.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, He.prototype.delete = function(n) {
                                var t = this.__data__,
                                    e = nr(t, n);
                                return !(e < 0 || (e == t.length - 1 ? t.pop() : ot.call(t, e, 1), --this.size, 0))
                            }, He.prototype.get = function(t) {
                                var e = this.__data__,
                                    r = nr(e, t);
                                return r < 0 ? n : e[r][1]
                            }, He.prototype.has = function(n) {
                                return nr(this.__data__, n) > -1
                            }, He.prototype.set = function(n, t) {
                                var e = this.__data__,
                                    r = nr(e, n);
                                return r < 0 ? (++this.size, e.push([n, t])) : e[r][1] = t, this
                            }, Ue.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new Ye,
                                    map: new(Ee || He),
                                    string: new Ye
                                }
                            }, Ue.prototype.delete = function(n) {
                                var t = ui(this, n).delete(n);
                                return this.size -= t ? 1 : 0, t
                            }, Ue.prototype.get = function(n) {
                                return ui(this, n).get(n)
                            }, Ue.prototype.has = function(n) {
                                return ui(this, n).has(n)
                            }, Ue.prototype.set = function(n, t) {
                                var e = ui(this, n),
                                    r = e.size;
                                return e.set(n, t), this.size += e.size == r ? 0 : 1, this
                            }, $e.prototype.add = $e.prototype.push = function(n) {
                                return this.__data__.set(n, e), this
                            }, $e.prototype.has = function(n) {
                                return this.__data__.has(n)
                            }, Xe.prototype.clear = function() {
                                this.__data__ = new He, this.size = 0
                            }, Xe.prototype.delete = function(n) {
                                var t = this.__data__,
                                    e = t.delete(n);
                                return this.size = t.size, e
                            }, Xe.prototype.get = function(n) {
                                return this.__data__.get(n)
                            }, Xe.prototype.has = function(n) {
                                return this.__data__.has(n)
                            }, Xe.prototype.set = function(n, t) {
                                var e = this.__data__;
                                if (e instanceof He) {
                                    var r = e.__data__;
                                    if (!Ee || r.length < 199) return r.push([n, t]), this.size = ++e.size, this;
                                    e = this.__data__ = new Ue(r)
                                }
                                return e.set(n, t), this.size = e.size, this
                            };
                            var lr = ko(yr),
                                fr = ko(br, !0);

                            function pr(n, t) {
                                var e = !0;
                                return lr(n, (function(n, r, o) {
                                    return e = !!t(n, r, o)
                                })), e
                            }

                            function dr(t, e, r) {
                                for (var o = -1, i = t.length; ++o < i;) {
                                    var a = t[o],
                                        u = e(a);
                                    if (null != u && (s === n ? u == u && !au(u) : r(u, s))) var s = u,
                                        c = a
                                }
                                return c
                            }

                            function hr(n, t) {
                                var e = [];
                                return lr(n, (function(n, r, o) {
                                    t(n, r, o) && e.push(n)
                                })), e
                            }

                            function mr(n, t, e, r, o) {
                                var i = -1,
                                    a = n.length;
                                for (e || (e = mi), o || (o = []); ++i < a;) {
                                    var u = n[i];
                                    t > 0 && e(u) ? t > 1 ? mr(u, t - 1, e, r, o) : Tt(o, u) : r || (o[o.length] = u)
                                }
                                return o
                            }
                            var vr = Ro(),
                                gr = Ro(!0);

                            function yr(n, t) {
                                return n && vr(n, t, Lu)
                            }

                            function br(n, t) {
                                return n && gr(n, t, Lu)
                            }

                            function wr(n, t) {
                                return St(t, (function(t) {
                                    return Ga(n[t])
                                }))
                            }

                            function xr(t, e) {
                                for (var r = 0, o = (e = go(e, t)).length; null != t && r < o;) t = t[Ii(e[r++])];
                                return r && r == o ? t : n
                            }

                            function Sr(n, t, e) {
                                var r = t(n);
                                return Wa(n) ? r : Tt(r, e(n))
                            }

                            function Er(t) {
                                return null == t ? t === n ? "[object Undefined]" : "[object Null]" : ct && ct in Cn(t) ? function(t) {
                                    var e = zn.call(t, ct),
                                        r = t[ct];
                                    try {
                                        t[ct] = n;
                                        var o = !0
                                    } catch (n) {}
                                    var i = Mn.call(t);
                                    return o && (e ? t[ct] = r : delete t[ct]), i
                                }(t) : function(n) {
                                    return Mn.call(n)
                                }(t)
                            }

                            function _r(n, t) {
                                return n > t
                            }

                            function Cr(n, t) {
                                return null != n && zn.call(n, t)
                            }

                            function Tr(n, t) {
                                return null != n && t in Cn(n)
                            }

                            function Pr(t, e, r) {
                                for (var o = r ? _t : Et, i = t[0].length, a = t.length, u = a, s = vn(a), c = 1 / 0, l = []; u--;) {
                                    var f = t[u];
                                    u && e && (f = Ct(f, Yt(e))), c = ge(f.length, c), s[u] = !r && (e || i >= 120 && f.length >= 120) ? new $e(u && f) : n
                                }
                                f = t[0];
                                var p = -1,
                                    d = s[0];
                                n: for (; ++p < i && l.length < c;) {
                                    var h = f[p],
                                        m = e ? e(h) : h;
                                    if (h = r || 0 !== h ? h : 0, !(d ? Ut(d, m) : o(l, m, r))) {
                                        for (u = a; --u;) {
                                            var v = s[u];
                                            if (!(v ? Ut(v, m) : o(t[u], m, r))) continue n
                                        }
                                        d && d.push(m), l.push(h)
                                    }
                                }
                                return l
                            }

                            function Ar(t, e, r) {
                                var o = null == (t = Ci(t, e = go(e, t))) ? t : t[Ii(qi(e))];
                                return null == o ? n : gt(o, t, r)
                            }

                            function Lr(n) {
                                return Qa(n) && Er(n) == p
                            }

                            function Or(t, e, r, o, i) {
                                return t === e || (null == t || null == e || !Qa(t) && !Qa(e) ? t != t && e != e : function(t, e, r, o, i, a) {
                                    var u = Wa(t),
                                        s = Wa(e),
                                        c = u ? d : pi(t),
                                        l = s ? d : pi(e),
                                        f = (c = c == p ? x : c) == x,
                                        g = (l = l == p ? x : l) == x,
                                        y = c == l;
                                    if (y && $a(t)) {
                                        if (!$a(e)) return !1;
                                        u = !0, f = !1
                                    }
                                    if (y && !f) return a || (a = new Xe), u || uu(t) ? Qo(t, e, r, o, i, a) : function(n, t, e, r, o, i, a) {
                                        switch (e) {
                                            case L:
                                                if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) return !1;
                                                n = n.buffer, t = t.buffer;
                                            case A:
                                                return !(n.byteLength != t.byteLength || !i(new Yn(n), new Yn(t)));
                                            case h:
                                            case m:
                                            case w:
                                                return ja(+n, +t);
                                            case v:
                                                return n.name == t.name && n.message == t.message;
                                            case E:
                                            case C:
                                                return n == t + "";
                                            case b:
                                                var u = Qt;
                                            case _:
                                                var s = 1 & r;
                                                if (u || (u = ee), n.size != t.size && !s) return !1;
                                                var c = a.get(n);
                                                if (c) return c == t;
                                                r |= 2, a.set(n, t);
                                                var l = Qo(u(n), u(t), r, o, i, a);
                                                return a.delete(n), l;
                                            case T:
                                                if (De) return De.call(n) == De.call(t)
                                        }
                                        return !1
                                    }(t, e, c, r, o, i, a);
                                    if (!(1 & r)) {
                                        var S = f && zn.call(t, "__wrapped__"),
                                            P = g && zn.call(e, "__wrapped__");
                                        if (S || P) {
                                            var O = S ? t.value() : t,
                                                k = P ? e.value() : e;
                                            return a || (a = new Xe), i(O, k, r, o, a)
                                        }
                                    }
                                    return !!y && (a || (a = new Xe), function(t, e, r, o, i, a) {
                                        var u = 1 & r,
                                            s = ti(t),
                                            c = s.length;
                                        if (c != ti(e).length && !u) return !1;
                                        for (var l = c; l--;) {
                                            var f = s[l];
                                            if (!(u ? f in e : zn.call(e, f))) return !1
                                        }
                                        var p = a.get(t),
                                            d = a.get(e);
                                        if (p && d) return p == e && d == t;
                                        var h = !0;
                                        a.set(t, e), a.set(e, t);
                                        for (var m = u; ++l < c;) {
                                            var v = t[f = s[l]],
                                                g = e[f];
                                            if (o) var y = u ? o(g, v, f, e, t, a) : o(v, g, f, t, e, a);
                                            if (!(y === n ? v === g || i(v, g, r, o, a) : y)) {
                                                h = !1;
                                                break
                                            }
                                            m || (m = "constructor" == f)
                                        }
                                        if (h && !m) {
                                            var b = t.constructor,
                                                w = e.constructor;
                                            b == w || !("constructor" in t) || !("constructor" in e) || "function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w || (h = !1)
                                        }
                                        return a.delete(t), a.delete(e), h
                                    }(t, e, r, o, i, a))
                                }(t, e, r, o, Or, i))
                            }

                            function kr(t, e, r, o) {
                                var i = r.length,
                                    a = i,
                                    u = !o;
                                if (null == t) return !a;
                                for (t = Cn(t); i--;) {
                                    var s = r[i];
                                    if (u && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
                                }
                                for (; ++i < a;) {
                                    var c = (s = r[i])[0],
                                        l = t[c],
                                        f = s[1];
                                    if (u && s[2]) {
                                        if (l === n && !(c in t)) return !1
                                    } else {
                                        var p = new Xe;
                                        if (o) var d = o(l, f, c, t, e, p);
                                        if (!(d === n ? Or(f, l, 3, o, p) : d)) return !1
                                    }
                                }
                                return !0
                            }

                            function Rr(n) {
                                return !(!Ja(n) || (t = n, Dn && Dn in t)) && (Ga(n) ? Vn : dn).test(Di(n));
                                var t
                            }

                            function Nr(n) {
                                return "function" == typeof n ? n : null == n ? ts : "object" == typeof n ? Wa(n) ? jr(n[0], n[1]) : Mr(n) : ls(n)
                            }

                            function zr(n) {
                                if (!xi(n)) return me(n);
                                var t = [];
                                for (var e in Cn(n)) zn.call(n, e) && "constructor" != e && t.push(e);
                                return t
                            }

                            function Ir(n, t) {
                                return n < t
                            }

                            function Dr(n, t) {
                                var e = -1,
                                    r = Ha(n) ? vn(n.length) : [];
                                return lr(n, (function(n, o, i) {
                                    r[++e] = t(n, o, i)
                                })), r
                            }

                            function Mr(n) {
                                var t = si(n);
                                return 1 == t.length && t[0][2] ? Ei(t[0][0], t[0][1]) : function(e) {
                                    return e === n || kr(e, n, t)
                                }
                            }

                            function jr(t, e) {
                                return yi(t) && Si(e) ? Ei(Ii(t), e) : function(r) {
                                    var o = _u(r, t);
                                    return o === n && o === e ? Cu(r, t) : Or(e, o, 3)
                                }
                            }

                            function Br(t, e, r, o, i) {
                                t !== e && vr(e, (function(a, u) {
                                    if (i || (i = new Xe), Ja(a)) ! function(t, e, r, o, i, a, u) {
                                        var s = Pi(t, r),
                                            c = Pi(e, r),
                                            l = u.get(c);
                                        if (l) Je(t, r, l);
                                        else {
                                            var f = a ? a(s, c, r + "", t, e, u) : n,
                                                p = f === n;
                                            if (p) {
                                                var d = Wa(c),
                                                    h = !d && $a(c),
                                                    m = !d && !h && uu(c);
                                                f = c, d || h || m ? Wa(s) ? f = s : Ua(s) ? f = Po(s) : h ? (p = !1, f = xo(c, !0)) : m ? (p = !1, f = Eo(c, !0)) : f = [] : eu(c) || Fa(c) ? (f = s, Fa(s) ? f = mu(s) : Ja(s) && !Ga(s) || (f = hi(c))) : p = !1
                                            }
                                            p && (u.set(c, f), i(f, c, o, a, u), u.delete(c)), Je(t, r, f)
                                        }
                                    }(t, e, u, r, Br, o, i);
                                    else {
                                        var s = o ? o(Pi(t, u), a, u + "", t, e, i) : n;
                                        s === n && (s = a), Je(t, u, s)
                                    }
                                }), Ou)
                            }

                            function Vr(t, e) {
                                var r = t.length;
                                if (r) return vi(e += e < 0 ? r : 0, r) ? t[e] : n
                            }

                            function Fr(n, t, e) {
                                t = t.length ? Ct(t, (function(n) {
                                    return Wa(n) ? function(t) {
                                        return xr(t, 1 === n.length ? n[0] : n)
                                    } : n
                                })) : [ts];
                                var r = -1;
                                return t = Ct(t, Yt(ai())),
                                    function(n, t) {
                                        var e = n.length;
                                        for (n.sort(t); e--;) n[e] = n[e].value;
                                        return n
                                    }(Dr(n, (function(n, e, o) {
                                        return {
                                            criteria: Ct(t, (function(t) {
                                                return t(n)
                                            })),
                                            index: ++r,
                                            value: n
                                        }
                                    })), (function(n, t) {
                                        return function(n, t, e) {
                                            for (var r = -1, o = n.criteria, i = t.criteria, a = o.length, u = e.length; ++r < a;) {
                                                var s = _o(o[r], i[r]);
                                                if (s) return r >= u ? s : s * ("desc" == e[r] ? -1 : 1)
                                            }
                                            return n.index - t.index
                                        }(n, t, e)
                                    }))
                            }

                            function Wr(n, t, e) {
                                for (var r = -1, o = t.length, i = {}; ++r < o;) {
                                    var a = t[r],
                                        u = xr(n, a);
                                    e(u, a) && Kr(i, go(a, n), u)
                                }
                                return i
                            }

                            function Yr(n, t, e, r) {
                                var o = r ? zt : Nt,
                                    i = -1,
                                    a = t.length,
                                    u = n;
                                for (n === t && (t = Po(t)), e && (u = Ct(n, Yt(e))); ++i < a;)
                                    for (var s = 0, c = t[i], l = e ? e(c) : c;
                                        (s = o(u, l, s, r)) > -1;) u !== n && ot.call(u, s, 1), ot.call(n, s, 1);
                                return n
                            }

                            function Hr(n, t) {
                                for (var e = n ? t.length : 0, r = e - 1; e--;) {
                                    var o = t[e];
                                    if (e == r || o !== i) {
                                        var i = o;
                                        vi(o) ? ot.call(n, o, 1) : so(n, o)
                                    }
                                }
                                return n
                            }

                            function Ur(n, t) {
                                return n + le(we() * (t - n + 1))
                            }

                            function $r(n, t) {
                                var e = "";
                                if (!n || t < 1 || t > s) return e;
                                do {
                                    t % 2 && (e += n), (t = le(t / 2)) && (n += n)
                                } while (t);
                                return e
                            }

                            function Xr(n, t) {
                                return Oi(_i(n, t, ts), n + "")
                            }

                            function qr(n) {
                                return Ge(ju(n))
                            }

                            function Gr(n, t) {
                                var e = ju(n);
                                return Ni(e, ir(t, 0, e.length))
                            }

                            function Kr(t, e, r, o) {
                                if (!Ja(t)) return t;
                                for (var i = -1, a = (e = go(e, t)).length, u = a - 1, s = t; null != s && ++i < a;) {
                                    var c = Ii(e[i]),
                                        l = r;
                                    if ("__proto__" === c || "constructor" === c || "prototype" === c) return t;
                                    if (i != u) {
                                        var f = s[c];
                                        (l = o ? o(f, c, s) : n) === n && (l = Ja(f) ? f : vi(e[i + 1]) ? [] : {})
                                    }
                                    Qe(s, c, l), s = s[c]
                                }
                                return t
                            }
                            var Zr = Ae ? function(n, t) {
                                    return Ae.set(n, t), n
                                } : ts,
                                Jr = lt ? function(n, t) {
                                    return lt(n, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: Ju(t),
                                        writable: !0
                                    })
                                } : ts;

                            function Qr(n) {
                                return Ni(ju(n))
                            }

                            function no(n, t, e) {
                                var r = -1,
                                    o = n.length;
                                t < 0 && (t = -t > o ? 0 : o + t), (e = e > o ? o : e) < 0 && (e += o), o = t > e ? 0 : e - t >>> 0, t >>>= 0;
                                for (var i = vn(o); ++r < o;) i[r] = n[r + t];
                                return i
                            }

                            function to(n, t) {
                                var e;
                                return lr(n, (function(n, r, o) {
                                    return !(e = t(n, r, o))
                                })), !!e
                            }

                            function eo(n, t, e) {
                                var r = 0,
                                    o = null == n ? r : n.length;
                                if ("number" == typeof t && t == t && o <= 2147483647) {
                                    for (; r < o;) {
                                        var i = r + o >>> 1,
                                            a = n[i];
                                        null !== a && !au(a) && (e ? a <= t : a < t) ? r = i + 1 : o = i
                                    }
                                    return o
                                }
                                return ro(n, t, ts, e)
                            }

                            function ro(t, e, r, o) {
                                var i = 0,
                                    a = null == t ? 0 : t.length;
                                if (0 === a) return 0;
                                for (var u = (e = r(e)) != e, s = null === e, c = au(e), l = e === n; i < a;) {
                                    var f = le((i + a) / 2),
                                        p = r(t[f]),
                                        d = p !== n,
                                        h = null === p,
                                        m = p == p,
                                        v = au(p);
                                    if (u) var g = o || m;
                                    else g = l ? m && (o || d) : s ? m && d && (o || !h) : c ? m && d && !h && (o || !v) : !h && !v && (o ? p <= e : p < e);
                                    g ? i = f + 1 : a = f
                                }
                                return ge(a, 4294967294)
                            }

                            function oo(n, t) {
                                for (var e = -1, r = n.length, o = 0, i = []; ++e < r;) {
                                    var a = n[e],
                                        u = t ? t(a) : a;
                                    if (!e || !ja(u, s)) {
                                        var s = u;
                                        i[o++] = 0 === a ? 0 : a
                                    }
                                }
                                return i
                            }

                            function io(n) {
                                return "number" == typeof n ? n : au(n) ? c : +n
                            }

                            function ao(n) {
                                if ("string" == typeof n) return n;
                                if (Wa(n)) return Ct(n, ao) + "";
                                if (au(n)) return Me ? Me.call(n) : "";
                                var t = n + "";
                                return "0" == t && 1 / n == -1 / 0 ? "-0" : t
                            }

                            function uo(n, t, e) {
                                var r = -1,
                                    o = Et,
                                    i = n.length,
                                    a = !0,
                                    u = [],
                                    s = u;
                                if (e) a = !1, o = _t;
                                else if (i >= 200) {
                                    var c = t ? null : Xo(n);
                                    if (c) return ee(c);
                                    a = !1, o = Ut, s = new $e
                                } else s = t ? [] : u;
                                n: for (; ++r < i;) {
                                    var l = n[r],
                                        f = t ? t(l) : l;
                                    if (l = e || 0 !== l ? l : 0, a && f == f) {
                                        for (var p = s.length; p--;)
                                            if (s[p] === f) continue n;
                                        t && s.push(f), u.push(l)
                                    } else o(s, f, e) || (s !== u && s.push(f), u.push(l))
                                }
                                return u
                            }

                            function so(n, t) {
                                return null == (n = Ci(n, t = go(t, n))) || delete n[Ii(qi(t))]
                            }

                            function co(n, t, e, r) {
                                return Kr(n, t, e(xr(n, t)), r)
                            }

                            function lo(n, t, e, r) {
                                for (var o = n.length, i = r ? o : -1;
                                    (r ? i-- : ++i < o) && t(n[i], i, n););
                                return e ? no(n, r ? 0 : i, r ? i + 1 : o) : no(n, r ? i + 1 : 0, r ? o : i)
                            }

                            function fo(n, t) {
                                var e = n;
                                return e instanceof We && (e = e.value()), Pt(t, (function(n, t) {
                                    return t.func.apply(t.thisArg, Tt([n], t.args))
                                }), e)
                            }

                            function po(n, t, e) {
                                var r = n.length;
                                if (r < 2) return r ? uo(n[0]) : [];
                                for (var o = -1, i = vn(r); ++o < r;)
                                    for (var a = n[o], u = -1; ++u < r;) u != o && (i[o] = cr(i[o] || a, n[u], t, e));
                                return uo(mr(i, 1), t, e)
                            }

                            function ho(t, e, r) {
                                for (var o = -1, i = t.length, a = e.length, u = {}; ++o < i;) {
                                    var s = o < a ? e[o] : n;
                                    r(u, t[o], s)
                                }
                                return u
                            }

                            function mo(n) {
                                return Ua(n) ? n : []
                            }

                            function vo(n) {
                                return "function" == typeof n ? n : ts
                            }

                            function go(n, t) {
                                return Wa(n) ? n : yi(n, t) ? [n] : zi(vu(n))
                            }
                            var yo = Xr;

                            function bo(t, e, r) {
                                var o = t.length;
                                return r = r === n ? o : r, !e && r >= o ? t : no(t, e, r)
                            }
                            var wo = Ot || function(n) {
                                return it.clearTimeout(n)
                            };

                            function xo(n, t) {
                                if (t) return n.slice();
                                var e = n.length,
                                    r = $n ? $n(e) : new n.constructor(e);
                                return n.copy(r), r
                            }

                            function So(n) {
                                var t = new n.constructor(n.byteLength);
                                return new Yn(t).set(new Yn(n)), t
                            }

                            function Eo(n, t) {
                                var e = t ? So(n.buffer) : n.buffer;
                                return new n.constructor(e, n.byteOffset, n.length)
                            }

                            function _o(t, e) {
                                if (t !== e) {
                                    var r = t !== n,
                                        o = null === t,
                                        i = t == t,
                                        a = au(t),
                                        u = e !== n,
                                        s = null === e,
                                        c = e == e,
                                        l = au(e);
                                    if (!s && !l && !a && t > e || a && u && c && !s && !l || o && u && c || !r && c || !i) return 1;
                                    if (!o && !a && !l && t < e || l && r && i && !o && !a || s && r && i || !u && i || !c) return -1
                                }
                                return 0
                            }

                            function Co(n, t, e, r) {
                                for (var o = -1, i = n.length, a = e.length, u = -1, s = t.length, c = ve(i - a, 0), l = vn(s + c), f = !r; ++u < s;) l[u] = t[u];
                                for (; ++o < a;)(f || o < i) && (l[e[o]] = n[o]);
                                for (; c--;) l[u++] = n[o++];
                                return l
                            }

                            function To(n, t, e, r) {
                                for (var o = -1, i = n.length, a = -1, u = e.length, s = -1, c = t.length, l = ve(i - u, 0), f = vn(l + c), p = !r; ++o < l;) f[o] = n[o];
                                for (var d = o; ++s < c;) f[d + s] = t[s];
                                for (; ++a < u;)(p || o < i) && (f[d + e[a]] = n[o++]);
                                return f
                            }

                            function Po(n, t) {
                                var e = -1,
                                    r = n.length;
                                for (t || (t = vn(r)); ++e < r;) t[e] = n[e];
                                return t
                            }

                            function Ao(t, e, r, o) {
                                var i = !r;
                                r || (r = {});
                                for (var a = -1, u = e.length; ++a < u;) {
                                    var s = e[a],
                                        c = o ? o(r[s], t[s], s, r, t) : n;
                                    c === n && (c = t[s]), i ? rr(r, s, c) : Qe(r, s, c)
                                }
                                return r
                            }

                            function Lo(n, t) {
                                return function(e, r) {
                                    var o = Wa(e) ? yt : tr,
                                        i = t ? t() : {};
                                    return o(e, n, ai(r, 2), i)
                                }
                            }

                            function Oo(t) {
                                return Xr((function(e, r) {
                                    var o = -1,
                                        i = r.length,
                                        a = i > 1 ? r[i - 1] : n,
                                        u = i > 2 ? r[2] : n;
                                    for (a = t.length > 3 && "function" == typeof a ? (i--, a) : n, u && gi(r[0], r[1], u) && (a = i < 3 ? n : a, i = 1), e = Cn(e); ++o < i;) {
                                        var s = r[o];
                                        s && t(e, s, o, a)
                                    }
                                    return e
                                }))
                            }

                            function ko(n, t) {
                                return function(e, r) {
                                    if (null == e) return e;
                                    if (!Ha(e)) return n(e, r);
                                    for (var o = e.length, i = t ? o : -1, a = Cn(e);
                                        (t ? i-- : ++i < o) && !1 !== r(a[i], i, a););
                                    return e
                                }
                            }

                            function Ro(n) {
                                return function(t, e, r) {
                                    for (var o = -1, i = Cn(t), a = r(t), u = a.length; u--;) {
                                        var s = a[n ? u : ++o];
                                        if (!1 === e(i[s], s, i)) break
                                    }
                                    return t
                                }
                            }

                            function No(t) {
                                return function(e) {
                                    var r = Jt(e = vu(e)) ? oe(e) : n,
                                        o = r ? r[0] : e.charAt(0),
                                        i = r ? bo(r, 1).join("") : e.slice(1);
                                    return o[t]() + i
                                }
                            }

                            function zo(n) {
                                return function(t) {
                                    return Pt(Gu(Fu(t).replace(Hn, "")), n, "")
                                }
                            }

                            function Io(n) {
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return new n;
                                        case 1:
                                            return new n(t[0]);
                                        case 2:
                                            return new n(t[0], t[1]);
                                        case 3:
                                            return new n(t[0], t[1], t[2]);
                                        case 4:
                                            return new n(t[0], t[1], t[2], t[3]);
                                        case 5:
                                            return new n(t[0], t[1], t[2], t[3], t[4]);
                                        case 6:
                                            return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 7:
                                            return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                    }
                                    var e = Be(n.prototype),
                                        r = n.apply(e, t);
                                    return Ja(r) ? r : e
                                }
                            }

                            function Do(t) {
                                return function(e, r, o) {
                                    var i = Cn(e);
                                    if (!Ha(e)) {
                                        var a = ai(r, 3);
                                        e = Lu(e), r = function(n) {
                                            return a(i[n], n, i)
                                        }
                                    }
                                    var u = t(e, r, o);
                                    return u > -1 ? i[a ? e[u] : u] : n
                                }
                            }

                            function Mo(e) {
                                return ni((function(r) {
                                    var o = r.length,
                                        i = o,
                                        a = Fe.prototype.thru;
                                    for (e && r.reverse(); i--;) {
                                        var u = r[i];
                                        if ("function" != typeof u) throw new An(t);
                                        if (a && !s && "wrapper" == oi(u)) var s = new Fe([], !0)
                                    }
                                    for (i = s ? i : o; ++i < o;) {
                                        var c = oi(u = r[i]),
                                            l = "wrapper" == c ? ri(u) : n;
                                        s = l && bi(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? s[oi(l[0])].apply(s, l[3]) : 1 == u.length && bi(u) ? s[c]() : s.thru(u)
                                    }
                                    return function() {
                                        var n = arguments,
                                            t = n[0];
                                        if (s && 1 == n.length && Wa(t)) return s.plant(t).value();
                                        for (var e = 0, i = o ? r[e].apply(this, n) : t; ++e < o;) i = r[e].call(this, i);
                                        return i
                                    }
                                }))
                            }

                            function jo(t, e, r, o, a, u, s, c, l, f) {
                                var p = e & i,
                                    d = 1 & e,
                                    h = 2 & e,
                                    m = 24 & e,
                                    v = 512 & e,
                                    g = h ? n : Io(t);
                                return function n() {
                                    for (var i = arguments.length, y = vn(i), b = i; b--;) y[b] = arguments[b];
                                    if (m) var w = ii(n),
                                        x = qt(y, w);
                                    if (o && (y = Co(y, o, a, m)), u && (y = To(y, u, s, m)), i -= x, m && i < f) {
                                        var S = te(y, w);
                                        return Uo(t, e, jo, n.placeholder, r, y, S, c, l, f - i)
                                    }
                                    var E = d ? r : this,
                                        _ = h ? E[t] : t;
                                    return i = y.length, c ? y = Ti(y, c) : v && i > 1 && y.reverse(), p && l < i && (y.length = l), this && this !== it && this instanceof n && (_ = g || Io(_)), _.apply(E, y)
                                }
                            }

                            function Bo(n, t) {
                                return function(e, r) {
                                    return function(n, t, e, r) {
                                        return yr(n, (function(n, o, i) {
                                            t(r, e(n), o, i)
                                        })), r
                                    }(e, n, t(r), {})
                                }
                            }

                            function Vo(t, e) {
                                return function(r, o) {
                                    var i;
                                    if (r === n && o === n) return e;
                                    if (r !== n && (i = r), o !== n) {
                                        if (i === n) return o;
                                        "string" == typeof r || "string" == typeof o ? (r = ao(r), o = ao(o)) : (r = io(r), o = io(o)), i = t(r, o)
                                    }
                                    return i
                                }
                            }

                            function Fo(n) {
                                return ni((function(t) {
                                    return t = Ct(t, Yt(ai())), Xr((function(e) {
                                        var r = this;
                                        return n(t, (function(n) {
                                            return gt(n, r, e)
                                        }))
                                    }))
                                }))
                            }

                            function Wo(t, e) {
                                var r = (e = e === n ? " " : ao(e)).length;
                                if (r < 2) return r ? $r(e, t) : e;
                                var o = $r(e, ce(t / re(e)));
                                return Jt(e) ? bo(oe(o), 0, t).join("") : o.slice(0, t)
                            }

                            function Yo(t) {
                                return function(e, r, o) {
                                    return o && "number" != typeof o && gi(e, r, o) && (r = o = n), e = fu(e), r === n ? (r = e, e = 0) : r = fu(r),
                                        function(n, t, e, r) {
                                            for (var o = -1, i = ve(ce((t - n) / (e || 1)), 0), a = vn(i); i--;) a[r ? i : ++o] = n, n += e;
                                            return a
                                        }(e, r, o = o === n ? e < r ? 1 : -1 : fu(o), t)
                                }
                            }

                            function Ho(n) {
                                return function(t, e) {
                                    return "string" == typeof t && "string" == typeof e || (t = hu(t), e = hu(e)), n(t, e)
                                }
                            }

                            function Uo(t, e, r, i, a, u, s, c, l, f) {
                                var p = 8 & e;
                                e |= p ? o : 64, 4 & (e &= ~(p ? 64 : o)) || (e &= -4);
                                var d = [t, e, a, p ? u : n, p ? s : n, p ? n : u, p ? n : s, c, l, f],
                                    h = r.apply(n, d);
                                return bi(t) && Ai(h, d), h.placeholder = i, ki(h, t, e)
                            }

                            function $o(n) {
                                var t = _n[n];
                                return function(n, e) {
                                    if (n = hu(n), (e = null == e ? 0 : ge(pu(e), 292)) && de(n)) {
                                        var r = (vu(n) + "e").split("e");
                                        return +((r = (vu(t(r[0] + "e" + (+r[1] + e))) + "e").split("e"))[0] + "e" + (+r[1] - e))
                                    }
                                    return t(n)
                                }
                            }
                            var Xo = Ce && 1 / ee(new Ce([, -0]))[1] == a ? function(n) {
                                return new Ce(n)
                            } : as;

                            function qo(n) {
                                return function(t) {
                                    var e = pi(t);
                                    return e == b ? Qt(t) : e == _ ? function(n) {
                                        var t = -1,
                                            e = Array(n.size);
                                        return n.forEach((function(n) {
                                            e[++t] = [n, n]
                                        })), e
                                    }(t) : function(n, t) {
                                        return Ct(t, (function(t) {
                                            return [t, n[t]]
                                        }))
                                    }(t, n(t))
                                }
                            }

                            function Go(e, a, u, s, c, l, f, p) {
                                var d = 2 & a;
                                if (!d && "function" != typeof e) throw new An(t);
                                var h = s ? s.length : 0;
                                if (h || (a &= -97, s = c = n), f = f === n ? f : ve(pu(f), 0), p = p === n ? p : pu(p), h -= c ? c.length : 0, 64 & a) {
                                    var m = s,
                                        v = c;
                                    s = c = n
                                }
                                var g = d ? n : ri(e),
                                    y = [e, a, u, s, c, m, v, l, f, p];
                                if (g && function(n, t) {
                                        var e = n[1],
                                            o = t[1],
                                            a = e | o,
                                            u = a < 131,
                                            s = o == i && 8 == e || o == i && 256 == e && n[7].length <= t[8] || 384 == o && t[7].length <= t[8] && 8 == e;
                                        if (!u && !s) return n;
                                        1 & o && (n[2] = t[2], a |= 1 & e ? 0 : 4);
                                        var c = t[3];
                                        if (c) {
                                            var l = n[3];
                                            n[3] = l ? Co(l, c, t[4]) : c, n[4] = l ? te(n[3], r) : t[4]
                                        }(c = t[5]) && (l = n[5], n[5] = l ? To(l, c, t[6]) : c, n[6] = l ? te(n[5], r) : t[6]), (c = t[7]) && (n[7] = c), o & i && (n[8] = null == n[8] ? t[8] : ge(n[8], t[8])), null == n[9] && (n[9] = t[9]), n[0] = t[0], n[1] = a
                                    }(y, g), e = y[0], a = y[1], u = y[2], s = y[3], c = y[4], !(p = y[9] = y[9] === n ? d ? 0 : e.length : ve(y[9] - h, 0)) && 24 & a && (a &= -25), a && 1 != a) b = 8 == a || 16 == a ? function(t, e, r) {
                                    var o = Io(t);
                                    return function i() {
                                        for (var a = arguments.length, u = vn(a), s = a, c = ii(i); s--;) u[s] = arguments[s];
                                        var l = a < 3 && u[0] !== c && u[a - 1] !== c ? [] : te(u, c);
                                        return (a -= l.length) < r ? Uo(t, e, jo, i.placeholder, n, u, l, n, n, r - a) : gt(this && this !== it && this instanceof i ? o : t, this, u)
                                    }
                                }(e, a, p) : a != o && 33 != a || c.length ? jo.apply(n, y) : function(n, t, e, r) {
                                    var o = 1 & t,
                                        i = Io(n);
                                    return function t() {
                                        for (var a = -1, u = arguments.length, s = -1, c = r.length, l = vn(c + u), f = this && this !== it && this instanceof t ? i : n; ++s < c;) l[s] = r[s];
                                        for (; u--;) l[s++] = arguments[++a];
                                        return gt(f, o ? e : this, l)
                                    }
                                }(e, a, u, s);
                                else var b = function(n, t, e) {
                                    var r = 1 & t,
                                        o = Io(n);
                                    return function t() {
                                        return (this && this !== it && this instanceof t ? o : n).apply(r ? e : this, arguments)
                                    }
                                }(e, a, u);
                                return ki((g ? Zr : Ai)(b, y), e, a)
                            }

                            function Ko(t, e, r, o) {
                                return t === n || ja(t, kn[r]) && !zn.call(o, r) ? e : t
                            }

                            function Zo(t, e, r, o, i, a) {
                                return Ja(t) && Ja(e) && (a.set(e, t), Br(t, e, n, Zo, a), a.delete(e)), t
                            }

                            function Jo(t) {
                                return eu(t) ? n : t
                            }

                            function Qo(t, e, r, o, i, a) {
                                var u = 1 & r,
                                    s = t.length,
                                    c = e.length;
                                if (s != c && !(u && c > s)) return !1;
                                var l = a.get(t),
                                    f = a.get(e);
                                if (l && f) return l == e && f == t;
                                var p = -1,
                                    d = !0,
                                    h = 2 & r ? new $e : n;
                                for (a.set(t, e), a.set(e, t); ++p < s;) {
                                    var m = t[p],
                                        v = e[p];
                                    if (o) var g = u ? o(v, m, p, e, t, a) : o(m, v, p, t, e, a);
                                    if (g !== n) {
                                        if (g) continue;
                                        d = !1;
                                        break
                                    }
                                    if (h) {
                                        if (!Lt(e, (function(n, t) {
                                                if (!Ut(h, t) && (m === n || i(m, n, r, o, a))) return h.push(t)
                                            }))) {
                                            d = !1;
                                            break
                                        }
                                    } else if (m !== v && !i(m, v, r, o, a)) {
                                        d = !1;
                                        break
                                    }
                                }
                                return a.delete(t), a.delete(e), d
                            }

                            function ni(t) {
                                return Oi(_i(t, n, Yi), t + "")
                            }

                            function ti(n) {
                                return Sr(n, Lu, li)
                            }

                            function ei(n) {
                                return Sr(n, Ou, fi)
                            }
                            var ri = Ae ? function(n) {
                                return Ae.get(n)
                            } : as;

                            function oi(n) {
                                for (var t = n.name + "", e = Le[t], r = zn.call(Le, t) ? e.length : 0; r--;) {
                                    var o = e[r],
                                        i = o.func;
                                    if (null == i || i == n) return o.name
                                }
                                return t
                            }

                            function ii(n) {
                                return (zn.call(je, "placeholder") ? je : n).placeholder
                            }

                            function ai() {
                                var n = je.iteratee || es;
                                return n = n === es ? Nr : n, arguments.length ? n(arguments[0], arguments[1]) : n
                            }

                            function ui(n, t) {
                                var e, r, o = n.__data__;
                                return ("string" == (r = typeof(e = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== e : null === e) ? o["string" == typeof t ? "string" : "hash"] : o.map
                            }

                            function si(n) {
                                for (var t = Lu(n), e = t.length; e--;) {
                                    var r = t[e],
                                        o = n[r];
                                    t[e] = [r, o, Si(o)]
                                }
                                return t
                            }

                            function ci(t, e) {
                                var r = function(t, e) {
                                    return null == t ? n : t[e]
                                }(t, e);
                                return Rr(r) ? r : n
                            }
                            var li = fe ? function(n) {
                                    return null == n ? [] : (n = Cn(n), St(fe(n), (function(t) {
                                        return rt.call(n, t)
                                    })))
                                } : ds,
                                fi = fe ? function(n) {
                                    for (var t = []; n;) Tt(t, li(n)), n = qn(n);
                                    return t
                                } : ds,
                                pi = Er;

                            function di(n, t, e) {
                                for (var r = -1, o = (t = go(t, n)).length, i = !1; ++r < o;) {
                                    var a = Ii(t[r]);
                                    if (!(i = null != n && e(n, a))) break;
                                    n = n[a]
                                }
                                return i || ++r != o ? i : !!(o = null == n ? 0 : n.length) && Za(o) && vi(a, o) && (Wa(n) || Fa(n))
                            }

                            function hi(n) {
                                return "function" != typeof n.constructor || xi(n) ? {} : Be(qn(n))
                            }

                            function mi(n) {
                                return Wa(n) || Fa(n) || !!(at && n && n[at])
                            }

                            function vi(n, t) {
                                var e = typeof n;
                                return !!(t = null == t ? s : t) && ("number" == e || "symbol" != e && gn.test(n)) && n > -1 && n % 1 == 0 && n < t
                            }

                            function gi(n, t, e) {
                                if (!Ja(e)) return !1;
                                var r = typeof t;
                                return !!("number" == r ? Ha(e) && vi(t, e.length) : "string" == r && t in e) && ja(e[t], n)
                            }

                            function yi(n, t) {
                                if (Wa(n)) return !1;
                                var e = typeof n;
                                return !("number" != e && "symbol" != e && "boolean" != e && null != n && !au(n)) || K.test(n) || !G.test(n) || null != t && n in Cn(t)
                            }

                            function bi(n) {
                                var t = oi(n),
                                    e = je[t];
                                if ("function" != typeof e || !(t in We.prototype)) return !1;
                                if (n === e) return !0;
                                var r = ri(e);
                                return !!r && n === r[0]
                            }(Se && pi(new Se(new ArrayBuffer(1))) != L || Ee && pi(new Ee) != b || _e && pi(_e.resolve()) != S || Ce && pi(new Ce) != _ || Te && pi(new Te) != P) && (pi = function(t) {
                                var e = Er(t),
                                    r = e == x ? t.constructor : n,
                                    o = r ? Di(r) : "";
                                if (o) switch (o) {
                                    case Oe:
                                        return L;
                                    case ke:
                                        return b;
                                    case Re:
                                        return S;
                                    case Ne:
                                        return _;
                                    case ze:
                                        return P
                                }
                                return e
                            });
                            var wi = Rn ? Ga : hs;

                            function xi(n) {
                                var t = n && n.constructor;
                                return n === ("function" == typeof t && t.prototype || kn)
                            }

                            function Si(n) {
                                return n == n && !Ja(n)
                            }

                            function Ei(t, e) {
                                return function(r) {
                                    return null != r && r[t] === e && (e !== n || t in Cn(r))
                                }
                            }

                            function _i(t, e, r) {
                                return e = ve(e === n ? t.length - 1 : e, 0),
                                    function() {
                                        for (var n = arguments, o = -1, i = ve(n.length - e, 0), a = vn(i); ++o < i;) a[o] = n[e + o];
                                        o = -1;
                                        for (var u = vn(e + 1); ++o < e;) u[o] = n[o];
                                        return u[e] = r(a), gt(t, this, u)
                                    }
                            }

                            function Ci(n, t) {
                                return t.length < 2 ? n : xr(n, no(t, 0, -1))
                            }

                            function Ti(t, e) {
                                for (var r = t.length, o = ge(e.length, r), i = Po(t); o--;) {
                                    var a = e[o];
                                    t[o] = vi(a, r) ? i[a] : n
                                }
                                return t
                            }

                            function Pi(n, t) {
                                if (("constructor" !== t || "function" != typeof n[t]) && "__proto__" != t) return n[t]
                            }
                            var Ai = Ri(Zr),
                                Li = se || function(n, t) {
                                    return it.setTimeout(n, t)
                                },
                                Oi = Ri(Jr);

                            function ki(n, t, e) {
                                var r = t + "";
                                return Oi(n, function(n, t) {
                                    var e = t.length;
                                    if (!e) return n;
                                    var r = e - 1;
                                    return t[r] = (e > 1 ? "& " : "") + t[r], t = t.join(e > 2 ? ", " : " "), n.replace(en, "{\n/* [wrapped with " + t + "] */\n")
                                }(r, function(n, t) {
                                    return bt(f, (function(e) {
                                        var r = "_." + e[0];
                                        t & e[1] && !Et(n, r) && n.push(r)
                                    })), n.sort()
                                }(function(n) {
                                    var t = n.match(rn);
                                    return t ? t[1].split(on) : []
                                }(r), e)))
                            }

                            function Ri(t) {
                                var e = 0,
                                    r = 0;
                                return function() {
                                    var o = ye(),
                                        i = 16 - (o - r);
                                    if (r = o, i > 0) {
                                        if (++e >= 800) return arguments[0]
                                    } else e = 0;
                                    return t.apply(n, arguments)
                                }
                            }

                            function Ni(t, e) {
                                var r = -1,
                                    o = t.length,
                                    i = o - 1;
                                for (e = e === n ? o : e; ++r < e;) {
                                    var a = Ur(r, i),
                                        u = t[a];
                                    t[a] = t[r], t[r] = u
                                }
                                return t.length = e, t
                            }
                            var zi = function(n) {
                                var t = Ra((function(n) {
                                        var t = [];
                                        return 46 === n.charCodeAt(0) && t.push(""), n.replace(Z, (function(n, e, r, o) {
                                            t.push(r ? o.replace(sn, "$1") : e || n)
                                        })), t
                                    }), (function(n) {
                                        return 500 === e.size && e.clear(), n
                                    })),
                                    e = t.cache;
                                return t
                            }();

                            function Ii(n) {
                                if ("string" == typeof n || au(n)) return n;
                                var t = n + "";
                                return "0" == t && 1 / n == -1 / 0 ? "-0" : t
                            }

                            function Di(n) {
                                if (null != n) {
                                    try {
                                        return Nn.call(n)
                                    } catch (n) {}
                                    try {
                                        return n + ""
                                    } catch (n) {}
                                }
                                return ""
                            }

                            function Mi(n) {
                                if (n instanceof We) return n.clone();
                                var t = new Fe(n.__wrapped__, n.__chain__);
                                return t.__actions__ = Po(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t
                            }
                            var ji = Xr((function(n, t) {
                                    return Ua(n) ? cr(n, mr(t, 1, Ua, !0)) : []
                                })),
                                Bi = Xr((function(t, e) {
                                    var r = qi(e);
                                    return Ua(r) && (r = n), Ua(t) ? cr(t, mr(e, 1, Ua, !0), ai(r, 2)) : []
                                })),
                                Vi = Xr((function(t, e) {
                                    var r = qi(e);
                                    return Ua(r) && (r = n), Ua(t) ? cr(t, mr(e, 1, Ua, !0), n, r) : []
                                }));

                            function Fi(n, t, e) {
                                var r = null == n ? 0 : n.length;
                                if (!r) return -1;
                                var o = null == e ? 0 : pu(e);
                                return o < 0 && (o = ve(r + o, 0)), Rt(n, ai(t, 3), o)
                            }

                            function Wi(t, e, r) {
                                var o = null == t ? 0 : t.length;
                                if (!o) return -1;
                                var i = o - 1;
                                return r !== n && (i = pu(r), i = r < 0 ? ve(o + i, 0) : ge(i, o - 1)), Rt(t, ai(e, 3), i, !0)
                            }

                            function Yi(n) {
                                return null != n && n.length ? mr(n, 1) : []
                            }

                            function Hi(t) {
                                return t && t.length ? t[0] : n
                            }
                            var Ui = Xr((function(n) {
                                    var t = Ct(n, mo);
                                    return t.length && t[0] === n[0] ? Pr(t) : []
                                })),
                                $i = Xr((function(t) {
                                    var e = qi(t),
                                        r = Ct(t, mo);
                                    return e === qi(r) ? e = n : r.pop(), r.length && r[0] === t[0] ? Pr(r, ai(e, 2)) : []
                                })),
                                Xi = Xr((function(t) {
                                    var e = qi(t),
                                        r = Ct(t, mo);
                                    return (e = "function" == typeof e ? e : n) && r.pop(), r.length && r[0] === t[0] ? Pr(r, n, e) : []
                                }));

                            function qi(t) {
                                var e = null == t ? 0 : t.length;
                                return e ? t[e - 1] : n
                            }
                            var Gi = Xr(Ki);

                            function Ki(n, t) {
                                return n && n.length && t && t.length ? Yr(n, t) : n
                            }
                            var Zi = ni((function(n, t) {
                                var e = null == n ? 0 : n.length,
                                    r = or(n, t);
                                return Hr(n, Ct(t, (function(n) {
                                    return vi(n, e) ? +n : n
                                })).sort(_o)), r
                            }));

                            function Ji(n) {
                                return null == n ? n : xe.call(n)
                            }
                            var Qi = Xr((function(n) {
                                    return uo(mr(n, 1, Ua, !0))
                                })),
                                na = Xr((function(t) {
                                    var e = qi(t);
                                    return Ua(e) && (e = n), uo(mr(t, 1, Ua, !0), ai(e, 2))
                                })),
                                ta = Xr((function(t) {
                                    var e = qi(t);
                                    return e = "function" == typeof e ? e : n, uo(mr(t, 1, Ua, !0), n, e)
                                }));

                            function ea(n) {
                                if (!n || !n.length) return [];
                                var t = 0;
                                return n = St(n, (function(n) {
                                    if (Ua(n)) return t = ve(n.length, t), !0
                                })), Ft(t, (function(t) {
                                    return Ct(n, Mt(t))
                                }))
                            }

                            function ra(t, e) {
                                if (!t || !t.length) return [];
                                var r = ea(t);
                                return null == e ? r : Ct(r, (function(t) {
                                    return gt(e, n, t)
                                }))
                            }
                            var oa = Xr((function(n, t) {
                                    return Ua(n) ? cr(n, t) : []
                                })),
                                ia = Xr((function(n) {
                                    return po(St(n, Ua))
                                })),
                                aa = Xr((function(t) {
                                    var e = qi(t);
                                    return Ua(e) && (e = n), po(St(t, Ua), ai(e, 2))
                                })),
                                ua = Xr((function(t) {
                                    var e = qi(t);
                                    return e = "function" == typeof e ? e : n, po(St(t, Ua), n, e)
                                })),
                                sa = Xr(ea),
                                ca = Xr((function(t) {
                                    var e = t.length,
                                        r = e > 1 ? t[e - 1] : n;
                                    return r = "function" == typeof r ? (t.pop(), r) : n, ra(t, r)
                                }));

                            function la(n) {
                                var t = je(n);
                                return t.__chain__ = !0, t
                            }

                            function fa(n, t) {
                                return t(n)
                            }
                            var pa = ni((function(t) {
                                    var e = t.length,
                                        r = e ? t[0] : 0,
                                        o = this.__wrapped__,
                                        i = function(n) {
                                            return or(n, t)
                                        };
                                    return !(e > 1 || this.__actions__.length) && o instanceof We && vi(r) ? ((o = o.slice(r, +r + (e ? 1 : 0))).__actions__.push({
                                        func: fa,
                                        args: [i],
                                        thisArg: n
                                    }), new Fe(o, this.__chain__).thru((function(t) {
                                        return e && !t.length && t.push(n), t
                                    }))) : this.thru(i)
                                })),
                                da = Lo((function(n, t, e) {
                                    zn.call(n, e) ? ++n[e] : rr(n, e, 1)
                                })),
                                ha = Do(Fi),
                                ma = Do(Wi);

                            function va(n, t) {
                                return (Wa(n) ? bt : lr)(n, ai(t, 3))
                            }

                            function ga(n, t) {
                                return (Wa(n) ? wt : fr)(n, ai(t, 3))
                            }
                            var ya = Lo((function(n, t, e) {
                                    zn.call(n, e) ? n[e].push(t) : rr(n, e, [t])
                                })),
                                ba = Xr((function(n, t, e) {
                                    var r = -1,
                                        o = "function" == typeof t,
                                        i = Ha(n) ? vn(n.length) : [];
                                    return lr(n, (function(n) {
                                        i[++r] = o ? gt(t, n, e) : Ar(n, t, e)
                                    })), i
                                })),
                                wa = Lo((function(n, t, e) {
                                    rr(n, e, t)
                                }));

                            function xa(n, t) {
                                return (Wa(n) ? Ct : Dr)(n, ai(t, 3))
                            }
                            var Sa = Lo((function(n, t, e) {
                                    n[e ? 0 : 1].push(t)
                                }), (function() {
                                    return [
                                        [],
                                        []
                                    ]
                                })),
                                Ea = Xr((function(n, t) {
                                    if (null == n) return [];
                                    var e = t.length;
                                    return e > 1 && gi(n, t[0], t[1]) ? t = [] : e > 2 && gi(t[0], t[1], t[2]) && (t = [t[0]]), Fr(n, mr(t, 1), [])
                                })),
                                _a = jt || function() {
                                    return it.Date.now()
                                };

                            function Ca(t, e, r) {
                                return e = r ? n : e, e = t && null == e ? t.length : e, Go(t, i, n, n, n, n, e)
                            }

                            function Ta(e, r) {
                                var o;
                                if ("function" != typeof r) throw new An(t);
                                return e = pu(e),
                                    function() {
                                        return --e > 0 && (o = r.apply(this, arguments)), e <= 1 && (r = n), o
                                    }
                            }
                            var Pa = Xr((function(n, t, e) {
                                    var r = 1;
                                    if (e.length) {
                                        var i = te(e, ii(Pa));
                                        r |= o
                                    }
                                    return Go(n, r, t, e, i)
                                })),
                                Aa = Xr((function(n, t, e) {
                                    var r = 3;
                                    if (e.length) {
                                        var i = te(e, ii(Aa));
                                        r |= o
                                    }
                                    return Go(t, r, n, e, i)
                                }));

                            function La(e, r, o) {
                                var i, a, u, s, c, l, f = 0,
                                    p = !1,
                                    d = !1,
                                    h = !0;
                                if ("function" != typeof e) throw new An(t);

                                function m(t) {
                                    var r = i,
                                        o = a;
                                    return i = a = n, f = t, s = e.apply(o, r)
                                }

                                function v(n) {
                                    return f = n, c = Li(y, r), p ? m(n) : s
                                }

                                function g(t) {
                                    var e = t - l;
                                    return l === n || e >= r || e < 0 || d && t - f >= u
                                }

                                function y() {
                                    var n = _a();
                                    if (g(n)) return b(n);
                                    c = Li(y, function(n) {
                                        var t = r - (n - l);
                                        return d ? ge(t, u - (n - f)) : t
                                    }(n))
                                }

                                function b(t) {
                                    return c = n, h && i ? m(t) : (i = a = n, s)
                                }

                                function w() {
                                    var t = _a(),
                                        e = g(t);
                                    if (i = arguments, a = this, l = t, e) {
                                        if (c === n) return v(l);
                                        if (d) return wo(c), c = Li(y, r), m(l)
                                    }
                                    return c === n && (c = Li(y, r)), s
                                }
                                return r = hu(r) || 0, Ja(o) && (p = !!o.leading, u = (d = "maxWait" in o) ? ve(hu(o.maxWait) || 0, r) : u, h = "trailing" in o ? !!o.trailing : h), w.cancel = function() {
                                    c !== n && wo(c), f = 0, i = l = a = c = n
                                }, w.flush = function() {
                                    return c === n ? s : b(_a())
                                }, w
                            }
                            var Oa = Xr((function(n, t) {
                                    return sr(n, 1, t)
                                })),
                                ka = Xr((function(n, t, e) {
                                    return sr(n, hu(t) || 0, e)
                                }));

                            function Ra(n, e) {
                                if ("function" != typeof n || null != e && "function" != typeof e) throw new An(t);
                                var r = function() {
                                    var t = arguments,
                                        o = e ? e.apply(this, t) : t[0],
                                        i = r.cache;
                                    if (i.has(o)) return i.get(o);
                                    var a = n.apply(this, t);
                                    return r.cache = i.set(o, a) || i, a
                                };
                                return r.cache = new(Ra.Cache || Ue), r
                            }

                            function Na(n) {
                                if ("function" != typeof n) throw new An(t);
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return !n.call(this);
                                        case 1:
                                            return !n.call(this, t[0]);
                                        case 2:
                                            return !n.call(this, t[0], t[1]);
                                        case 3:
                                            return !n.call(this, t[0], t[1], t[2])
                                    }
                                    return !n.apply(this, t)
                                }
                            }
                            Ra.Cache = Ue;
                            var za = yo((function(n, t) {
                                    var e = (t = 1 == t.length && Wa(t[0]) ? Ct(t[0], Yt(ai())) : Ct(mr(t, 1), Yt(ai()))).length;
                                    return Xr((function(r) {
                                        for (var o = -1, i = ge(r.length, e); ++o < i;) r[o] = t[o].call(this, r[o]);
                                        return gt(n, this, r)
                                    }))
                                })),
                                Ia = Xr((function(t, e) {
                                    var r = te(e, ii(Ia));
                                    return Go(t, o, n, e, r)
                                })),
                                Da = Xr((function(t, e) {
                                    var r = te(e, ii(Da));
                                    return Go(t, 64, n, e, r)
                                })),
                                Ma = ni((function(t, e) {
                                    return Go(t, 256, n, n, n, e)
                                }));

                            function ja(n, t) {
                                return n === t || n != n && t != t
                            }
                            var Ba = Ho(_r),
                                Va = Ho((function(n, t) {
                                    return n >= t
                                })),
                                Fa = Lr(function() {
                                    return arguments
                                }()) ? Lr : function(n) {
                                    return Qa(n) && zn.call(n, "callee") && !rt.call(n, "callee")
                                },
                                Wa = vn.isArray,
                                Ya = ft ? Yt(ft) : function(n) {
                                    return Qa(n) && Er(n) == A
                                };

                            function Ha(n) {
                                return null != n && Za(n.length) && !Ga(n)
                            }

                            function Ua(n) {
                                return Qa(n) && Ha(n)
                            }
                            var $a = pe || hs,
                                Xa = pt ? Yt(pt) : function(n) {
                                    return Qa(n) && Er(n) == m
                                };

                            function qa(n) {
                                if (!Qa(n)) return !1;
                                var t = Er(n);
                                return t == v || "[object DOMException]" == t || "string" == typeof n.message && "string" == typeof n.name && !eu(n)
                            }

                            function Ga(n) {
                                if (!Ja(n)) return !1;
                                var t = Er(n);
                                return t == g || t == y || "[object AsyncFunction]" == t || "[object Proxy]" == t
                            }

                            function Ka(n) {
                                return "number" == typeof n && n == pu(n)
                            }

                            function Za(n) {
                                return "number" == typeof n && n > -1 && n % 1 == 0 && n <= s
                            }

                            function Ja(n) {
                                var t = typeof n;
                                return null != n && ("object" == t || "function" == t)
                            }

                            function Qa(n) {
                                return null != n && "object" == typeof n
                            }
                            var nu = dt ? Yt(dt) : function(n) {
                                return Qa(n) && pi(n) == b
                            };

                            function tu(n) {
                                return "number" == typeof n || Qa(n) && Er(n) == w
                            }

                            function eu(n) {
                                if (!Qa(n) || Er(n) != x) return !1;
                                var t = qn(n);
                                if (null === t) return !0;
                                var e = zn.call(t, "constructor") && t.constructor;
                                return "function" == typeof e && e instanceof e && Nn.call(e) == jn
                            }
                            var ru = ht ? Yt(ht) : function(n) {
                                    return Qa(n) && Er(n) == E
                                },
                                ou = mt ? Yt(mt) : function(n) {
                                    return Qa(n) && pi(n) == _
                                };

                            function iu(n) {
                                return "string" == typeof n || !Wa(n) && Qa(n) && Er(n) == C
                            }

                            function au(n) {
                                return "symbol" == typeof n || Qa(n) && Er(n) == T
                            }
                            var uu = vt ? Yt(vt) : function(n) {
                                    return Qa(n) && Za(n.length) && !!Jn[Er(n)]
                                },
                                su = Ho(Ir),
                                cu = Ho((function(n, t) {
                                    return n <= t
                                }));

                            function lu(n) {
                                if (!n) return [];
                                if (Ha(n)) return iu(n) ? oe(n) : Po(n);
                                if (ut && n[ut]) return function(n) {
                                    for (var t, e = []; !(t = n.next()).done;) e.push(t.value);
                                    return e
                                }(n[ut]());
                                var t = pi(n);
                                return (t == b ? Qt : t == _ ? ee : ju)(n)
                            }

                            function fu(n) {
                                return n ? (n = hu(n)) === a || n === -1 / 0 ? 17976931348623157e292 * (n < 0 ? -1 : 1) : n == n ? n : 0 : 0 === n ? n : 0
                            }

                            function pu(n) {
                                var t = fu(n),
                                    e = t % 1;
                                return t == t ? e ? t - e : t : 0
                            }

                            function du(n) {
                                return n ? ir(pu(n), 0, l) : 0
                            }

                            function hu(n) {
                                if ("number" == typeof n) return n;
                                if (au(n)) return c;
                                if (Ja(n)) {
                                    var t = "function" == typeof n.valueOf ? n.valueOf() : n;
                                    n = Ja(t) ? t + "" : t
                                }
                                if ("string" != typeof n) return 0 === n ? n : +n;
                                n = Wt(n);
                                var e = pn.test(n);
                                return e || hn.test(n) ? et(n.slice(2), e ? 2 : 8) : fn.test(n) ? c : +n
                            }

                            function mu(n) {
                                return Ao(n, Ou(n))
                            }

                            function vu(n) {
                                return null == n ? "" : ao(n)
                            }
                            var gu = Oo((function(n, t) {
                                    if (xi(t) || Ha(t)) Ao(t, Lu(t), n);
                                    else
                                        for (var e in t) zn.call(t, e) && Qe(n, e, t[e])
                                })),
                                yu = Oo((function(n, t) {
                                    Ao(t, Ou(t), n)
                                })),
                                bu = Oo((function(n, t, e, r) {
                                    Ao(t, Ou(t), n, r)
                                })),
                                wu = Oo((function(n, t, e, r) {
                                    Ao(t, Lu(t), n, r)
                                })),
                                xu = ni(or),
                                Su = Xr((function(t, e) {
                                    t = Cn(t);
                                    var r = -1,
                                        o = e.length,
                                        i = o > 2 ? e[2] : n;
                                    for (i && gi(e[0], e[1], i) && (o = 1); ++r < o;)
                                        for (var a = e[r], u = Ou(a), s = -1, c = u.length; ++s < c;) {
                                            var l = u[s],
                                                f = t[l];
                                            (f === n || ja(f, kn[l]) && !zn.call(t, l)) && (t[l] = a[l])
                                        }
                                    return t
                                })),
                                Eu = Xr((function(t) {
                                    return t.push(n, Zo), gt(Ru, n, t)
                                }));

                            function _u(t, e, r) {
                                var o = null == t ? n : xr(t, e);
                                return o === n ? r : o
                            }

                            function Cu(n, t) {
                                return null != n && di(n, t, Tr)
                            }
                            var Tu = Bo((function(n, t, e) {
                                    null != t && "function" != typeof t.toString && (t = Mn.call(t)), n[t] = e
                                }), Ju(ts)),
                                Pu = Bo((function(n, t, e) {
                                    null != t && "function" != typeof t.toString && (t = Mn.call(t)), zn.call(n, t) ? n[t].push(e) : n[t] = [e]
                                }), ai),
                                Au = Xr(Ar);

                            function Lu(n) {
                                return Ha(n) ? qe(n) : zr(n)
                            }

                            function Ou(n) {
                                return Ha(n) ? qe(n, !0) : function(n) {
                                    if (!Ja(n)) return function(n) {
                                        var t = [];
                                        if (null != n)
                                            for (var e in Cn(n)) t.push(e);
                                        return t
                                    }(n);
                                    var t = xi(n),
                                        e = [];
                                    for (var r in n)("constructor" != r || !t && zn.call(n, r)) && e.push(r);
                                    return e
                                }(n)
                            }
                            var ku = Oo((function(n, t, e) {
                                    Br(n, t, e)
                                })),
                                Ru = Oo((function(n, t, e, r) {
                                    Br(n, t, e, r)
                                })),
                                Nu = ni((function(n, t) {
                                    var e = {};
                                    if (null == n) return e;
                                    var r = !1;
                                    t = Ct(t, (function(t) {
                                        return t = go(t, n), r || (r = t.length > 1), t
                                    })), Ao(n, ei(n), e), r && (e = ar(e, 7, Jo));
                                    for (var o = t.length; o--;) so(e, t[o]);
                                    return e
                                })),
                                zu = ni((function(n, t) {
                                    return null == n ? {} : function(n, t) {
                                        return Wr(n, t, (function(t, e) {
                                            return Cu(n, e)
                                        }))
                                    }(n, t)
                                }));

                            function Iu(n, t) {
                                if (null == n) return {};
                                var e = Ct(ei(n), (function(n) {
                                    return [n]
                                }));
                                return t = ai(t), Wr(n, e, (function(n, e) {
                                    return t(n, e[0])
                                }))
                            }
                            var Du = qo(Lu),
                                Mu = qo(Ou);

                            function ju(n) {
                                return null == n ? [] : Ht(n, Lu(n))
                            }
                            var Bu = zo((function(n, t, e) {
                                return t = t.toLowerCase(), n + (e ? Vu(t) : t)
                            }));

                            function Vu(n) {
                                return qu(vu(n).toLowerCase())
                            }

                            function Fu(n) {
                                return (n = vu(n)) && n.replace(yn, Gt).replace(Un, "")
                            }
                            var Wu = zo((function(n, t, e) {
                                    return n + (e ? "-" : "") + t.toLowerCase()
                                })),
                                Yu = zo((function(n, t, e) {
                                    return n + (e ? " " : "") + t.toLowerCase()
                                })),
                                Hu = No("toLowerCase"),
                                Uu = zo((function(n, t, e) {
                                    return n + (e ? "_" : "") + t.toLowerCase()
                                })),
                                $u = zo((function(n, t, e) {
                                    return n + (e ? " " : "") + qu(t)
                                })),
                                Xu = zo((function(n, t, e) {
                                    return n + (e ? " " : "") + t.toUpperCase()
                                })),
                                qu = No("toUpperCase");

                            function Gu(t, e, r) {
                                return t = vu(t), (e = r ? n : e) === n ? function(n) {
                                    return Gn.test(n)
                                }(t) ? function(n) {
                                    return n.match(Xn) || []
                                }(t) : function(n) {
                                    return n.match(an) || []
                                }(t) : t.match(e) || []
                            }
                            var Ku = Xr((function(t, e) {
                                    try {
                                        return gt(t, n, e)
                                    } catch (n) {
                                        return qa(n) ? n : new Sn(n)
                                    }
                                })),
                                Zu = ni((function(n, t) {
                                    return bt(t, (function(t) {
                                        t = Ii(t), rr(n, t, Pa(n[t], n))
                                    })), n
                                }));

                            function Ju(n) {
                                return function() {
                                    return n
                                }
                            }
                            var Qu = Mo(),
                                ns = Mo(!0);

                            function ts(n) {
                                return n
                            }

                            function es(n) {
                                return Nr("function" == typeof n ? n : ar(n, 1))
                            }
                            var rs = Xr((function(n, t) {
                                    return function(e) {
                                        return Ar(e, n, t)
                                    }
                                })),
                                os = Xr((function(n, t) {
                                    return function(e) {
                                        return Ar(n, e, t)
                                    }
                                }));

                            function is(n, t, e) {
                                var r = Lu(t),
                                    o = wr(t, r);
                                null != e || Ja(t) && (o.length || !r.length) || (e = t, t = n, n = this, o = wr(t, Lu(t)));
                                var i = !(Ja(e) && "chain" in e && !e.chain),
                                    a = Ga(n);
                                return bt(o, (function(e) {
                                    var r = t[e];
                                    n[e] = r, a && (n.prototype[e] = function() {
                                        var t = this.__chain__;
                                        if (i || t) {
                                            var e = n(this.__wrapped__),
                                                o = e.__actions__ = Po(this.__actions__);
                                            return o.push({
                                                func: r,
                                                args: arguments,
                                                thisArg: n
                                            }), e.__chain__ = t, e
                                        }
                                        return r.apply(n, Tt([this.value()], arguments))
                                    })
                                })), n
                            }

                            function as() {}
                            var us = Fo(Ct),
                                ss = Fo(xt),
                                cs = Fo(Lt);

                            function ls(n) {
                                return yi(n) ? Mt(Ii(n)) : function(n) {
                                    return function(t) {
                                        return xr(t, n)
                                    }
                                }(n)
                            }
                            var fs = Yo(),
                                ps = Yo(!0);

                            function ds() {
                                return []
                            }

                            function hs() {
                                return !1
                            }
                            var ms, vs = Vo((function(n, t) {
                                    return n + t
                                }), 0),
                                gs = $o("ceil"),
                                ys = Vo((function(n, t) {
                                    return n / t
                                }), 1),
                                bs = $o("floor"),
                                ws = Vo((function(n, t) {
                                    return n * t
                                }), 1),
                                xs = $o("round"),
                                Ss = Vo((function(n, t) {
                                    return n - t
                                }), 0);
                            return je.after = function(n, e) {
                                if ("function" != typeof e) throw new An(t);
                                return n = pu(n),
                                    function() {
                                        if (--n < 1) return e.apply(this, arguments)
                                    }
                            }, je.ary = Ca, je.assign = gu, je.assignIn = yu, je.assignInWith = bu, je.assignWith = wu, je.at = xu, je.before = Ta, je.bind = Pa, je.bindAll = Zu, je.bindKey = Aa, je.castArray = function() {
                                if (!arguments.length) return [];
                                var n = arguments[0];
                                return Wa(n) ? n : [n]
                            }, je.chain = la, je.chunk = function(t, e, r) {
                                e = (r ? gi(t, e, r) : e === n) ? 1 : ve(pu(e), 0);
                                var o = null == t ? 0 : t.length;
                                if (!o || e < 1) return [];
                                for (var i = 0, a = 0, u = vn(ce(o / e)); i < o;) u[a++] = no(t, i, i += e);
                                return u
                            }, je.compact = function(n) {
                                for (var t = -1, e = null == n ? 0 : n.length, r = 0, o = []; ++t < e;) {
                                    var i = n[t];
                                    i && (o[r++] = i)
                                }
                                return o
                            }, je.concat = function() {
                                var n = arguments.length;
                                if (!n) return [];
                                for (var t = vn(n - 1), e = arguments[0], r = n; r--;) t[r - 1] = arguments[r];
                                return Tt(Wa(e) ? Po(e) : [e], mr(t, 1))
                            }, je.cond = function(n) {
                                var e = null == n ? 0 : n.length,
                                    r = ai();
                                return n = e ? Ct(n, (function(n) {
                                    if ("function" != typeof n[1]) throw new An(t);
                                    return [r(n[0]), n[1]]
                                })) : [], Xr((function(t) {
                                    for (var r = -1; ++r < e;) {
                                        var o = n[r];
                                        if (gt(o[0], this, t)) return gt(o[1], this, t)
                                    }
                                }))
                            }, je.conforms = function(n) {
                                return function(n) {
                                    var t = Lu(n);
                                    return function(e) {
                                        return ur(e, n, t)
                                    }
                                }(ar(n, 1))
                            }, je.constant = Ju, je.countBy = da, je.create = function(n, t) {
                                var e = Be(n);
                                return null == t ? e : er(e, t)
                            }, je.curry = function t(e, r, o) {
                                var i = Go(e, 8, n, n, n, n, n, r = o ? n : r);
                                return i.placeholder = t.placeholder, i
                            }, je.curryRight = function t(e, r, o) {
                                var i = Go(e, 16, n, n, n, n, n, r = o ? n : r);
                                return i.placeholder = t.placeholder, i
                            }, je.debounce = La, je.defaults = Su, je.defaultsDeep = Eu, je.defer = Oa, je.delay = ka, je.difference = ji, je.differenceBy = Bi, je.differenceWith = Vi, je.drop = function(t, e, r) {
                                var o = null == t ? 0 : t.length;
                                return o ? no(t, (e = r || e === n ? 1 : pu(e)) < 0 ? 0 : e, o) : []
                            }, je.dropRight = function(t, e, r) {
                                var o = null == t ? 0 : t.length;
                                return o ? no(t, 0, (e = o - (e = r || e === n ? 1 : pu(e))) < 0 ? 0 : e) : []
                            }, je.dropRightWhile = function(n, t) {
                                return n && n.length ? lo(n, ai(t, 3), !0, !0) : []
                            }, je.dropWhile = function(n, t) {
                                return n && n.length ? lo(n, ai(t, 3), !0) : []
                            }, je.fill = function(t, e, r, o) {
                                var i = null == t ? 0 : t.length;
                                return i ? (r && "number" != typeof r && gi(t, e, r) && (r = 0, o = i), function(t, e, r, o) {
                                    var i = t.length;
                                    for ((r = pu(r)) < 0 && (r = -r > i ? 0 : i + r), (o = o === n || o > i ? i : pu(o)) < 0 && (o += i), o = r > o ? 0 : du(o); r < o;) t[r++] = e;
                                    return t
                                }(t, e, r, o)) : []
                            }, je.filter = function(n, t) {
                                return (Wa(n) ? St : hr)(n, ai(t, 3))
                            }, je.flatMap = function(n, t) {
                                return mr(xa(n, t), 1)
                            }, je.flatMapDeep = function(n, t) {
                                return mr(xa(n, t), a)
                            }, je.flatMapDepth = function(t, e, r) {
                                return r = r === n ? 1 : pu(r), mr(xa(t, e), r)
                            }, je.flatten = Yi, je.flattenDeep = function(n) {
                                return null != n && n.length ? mr(n, a) : []
                            }, je.flattenDepth = function(t, e) {
                                return null != t && t.length ? mr(t, e = e === n ? 1 : pu(e)) : []
                            }, je.flip = function(n) {
                                return Go(n, 512)
                            }, je.flow = Qu, je.flowRight = ns, je.fromPairs = function(n) {
                                for (var t = -1, e = null == n ? 0 : n.length, r = {}; ++t < e;) {
                                    var o = n[t];
                                    r[o[0]] = o[1]
                                }
                                return r
                            }, je.functions = function(n) {
                                return null == n ? [] : wr(n, Lu(n))
                            }, je.functionsIn = function(n) {
                                return null == n ? [] : wr(n, Ou(n))
                            }, je.groupBy = ya, je.initial = function(n) {
                                return null != n && n.length ? no(n, 0, -1) : []
                            }, je.intersection = Ui, je.intersectionBy = $i, je.intersectionWith = Xi, je.invert = Tu, je.invertBy = Pu, je.invokeMap = ba, je.iteratee = es, je.keyBy = wa, je.keys = Lu, je.keysIn = Ou, je.map = xa, je.mapKeys = function(n, t) {
                                var e = {};
                                return t = ai(t, 3), yr(n, (function(n, r, o) {
                                    rr(e, t(n, r, o), n)
                                })), e
                            }, je.mapValues = function(n, t) {
                                var e = {};
                                return t = ai(t, 3), yr(n, (function(n, r, o) {
                                    rr(e, r, t(n, r, o))
                                })), e
                            }, je.matches = function(n) {
                                return Mr(ar(n, 1))
                            }, je.matchesProperty = function(n, t) {
                                return jr(n, ar(t, 1))
                            }, je.memoize = Ra, je.merge = ku, je.mergeWith = Ru, je.method = rs, je.methodOf = os, je.mixin = is, je.negate = Na, je.nthArg = function(n) {
                                return n = pu(n), Xr((function(t) {
                                    return Vr(t, n)
                                }))
                            }, je.omit = Nu, je.omitBy = function(n, t) {
                                return Iu(n, Na(ai(t)))
                            }, je.once = function(n) {
                                return Ta(2, n)
                            }, je.orderBy = function(t, e, r, o) {
                                return null == t ? [] : (Wa(e) || (e = null == e ? [] : [e]), Wa(r = o ? n : r) || (r = null == r ? [] : [r]), Fr(t, e, r))
                            }, je.over = us, je.overArgs = za, je.overEvery = ss, je.overSome = cs, je.partial = Ia, je.partialRight = Da, je.partition = Sa, je.pick = zu, je.pickBy = Iu, je.property = ls, je.propertyOf = function(t) {
                                return function(e) {
                                    return null == t ? n : xr(t, e)
                                }
                            }, je.pull = Gi, je.pullAll = Ki, je.pullAllBy = function(n, t, e) {
                                return n && n.length && t && t.length ? Yr(n, t, ai(e, 2)) : n
                            }, je.pullAllWith = function(t, e, r) {
                                return t && t.length && e && e.length ? Yr(t, e, n, r) : t
                            }, je.pullAt = Zi, je.range = fs, je.rangeRight = ps, je.rearg = Ma, je.reject = function(n, t) {
                                return (Wa(n) ? St : hr)(n, Na(ai(t, 3)))
                            }, je.remove = function(n, t) {
                                var e = [];
                                if (!n || !n.length) return e;
                                var r = -1,
                                    o = [],
                                    i = n.length;
                                for (t = ai(t, 3); ++r < i;) {
                                    var a = n[r];
                                    t(a, r, n) && (e.push(a), o.push(r))
                                }
                                return Hr(n, o), e
                            }, je.rest = function(e, r) {
                                if ("function" != typeof e) throw new An(t);
                                return Xr(e, r = r === n ? r : pu(r))
                            }, je.reverse = Ji, je.sampleSize = function(t, e, r) {
                                return e = (r ? gi(t, e, r) : e === n) ? 1 : pu(e), (Wa(t) ? Ke : Gr)(t, e)
                            }, je.set = function(n, t, e) {
                                return null == n ? n : Kr(n, t, e)
                            }, je.setWith = function(t, e, r, o) {
                                return o = "function" == typeof o ? o : n, null == t ? t : Kr(t, e, r, o)
                            }, je.shuffle = function(n) {
                                return (Wa(n) ? Ze : Qr)(n)
                            }, je.slice = function(t, e, r) {
                                var o = null == t ? 0 : t.length;
                                return o ? (r && "number" != typeof r && gi(t, e, r) ? (e = 0, r = o) : (e = null == e ? 0 : pu(e), r = r === n ? o : pu(r)), no(t, e, r)) : []
                            }, je.sortBy = Ea, je.sortedUniq = function(n) {
                                return n && n.length ? oo(n) : []
                            }, je.sortedUniqBy = function(n, t) {
                                return n && n.length ? oo(n, ai(t, 2)) : []
                            }, je.split = function(t, e, r) {
                                return r && "number" != typeof r && gi(t, e, r) && (e = r = n), (r = r === n ? l : r >>> 0) ? (t = vu(t)) && ("string" == typeof e || null != e && !ru(e)) && !(e = ao(e)) && Jt(t) ? bo(oe(t), 0, r) : t.split(e, r) : []
                            }, je.spread = function(n, e) {
                                if ("function" != typeof n) throw new An(t);
                                return e = null == e ? 0 : ve(pu(e), 0), Xr((function(t) {
                                    var r = t[e],
                                        o = bo(t, 0, e);
                                    return r && Tt(o, r), gt(n, this, o)
                                }))
                            }, je.tail = function(n) {
                                var t = null == n ? 0 : n.length;
                                return t ? no(n, 1, t) : []
                            }, je.take = function(t, e, r) {
                                return t && t.length ? no(t, 0, (e = r || e === n ? 1 : pu(e)) < 0 ? 0 : e) : []
                            }, je.takeRight = function(t, e, r) {
                                var o = null == t ? 0 : t.length;
                                return o ? no(t, (e = o - (e = r || e === n ? 1 : pu(e))) < 0 ? 0 : e, o) : []
                            }, je.takeRightWhile = function(n, t) {
                                return n && n.length ? lo(n, ai(t, 3), !1, !0) : []
                            }, je.takeWhile = function(n, t) {
                                return n && n.length ? lo(n, ai(t, 3)) : []
                            }, je.tap = function(n, t) {
                                return t(n), n
                            }, je.throttle = function(n, e, r) {
                                var o = !0,
                                    i = !0;
                                if ("function" != typeof n) throw new An(t);
                                return Ja(r) && (o = "leading" in r ? !!r.leading : o, i = "trailing" in r ? !!r.trailing : i), La(n, e, {
                                    leading: o,
                                    maxWait: e,
                                    trailing: i
                                })
                            }, je.thru = fa, je.toArray = lu, je.toPairs = Du, je.toPairsIn = Mu, je.toPath = function(n) {
                                return Wa(n) ? Ct(n, Ii) : au(n) ? [n] : Po(zi(vu(n)))
                            }, je.toPlainObject = mu, je.transform = function(n, t, e) {
                                var r = Wa(n),
                                    o = r || $a(n) || uu(n);
                                if (t = ai(t, 4), null == e) {
                                    var i = n && n.constructor;
                                    e = o ? r ? new i : [] : Ja(n) && Ga(i) ? Be(qn(n)) : {}
                                }
                                return (o ? bt : yr)(n, (function(n, r, o) {
                                    return t(e, n, r, o)
                                })), e
                            }, je.unary = function(n) {
                                return Ca(n, 1)
                            }, je.union = Qi, je.unionBy = na, je.unionWith = ta, je.uniq = function(n) {
                                return n && n.length ? uo(n) : []
                            }, je.uniqBy = function(n, t) {
                                return n && n.length ? uo(n, ai(t, 2)) : []
                            }, je.uniqWith = function(t, e) {
                                return e = "function" == typeof e ? e : n, t && t.length ? uo(t, n, e) : []
                            }, je.unset = function(n, t) {
                                return null == n || so(n, t)
                            }, je.unzip = ea, je.unzipWith = ra, je.update = function(n, t, e) {
                                return null == n ? n : co(n, t, vo(e))
                            }, je.updateWith = function(t, e, r, o) {
                                return o = "function" == typeof o ? o : n, null == t ? t : co(t, e, vo(r), o)
                            }, je.values = ju, je.valuesIn = function(n) {
                                return null == n ? [] : Ht(n, Ou(n))
                            }, je.without = oa, je.words = Gu, je.wrap = function(n, t) {
                                return Ia(vo(t), n)
                            }, je.xor = ia, je.xorBy = aa, je.xorWith = ua, je.zip = sa, je.zipObject = function(n, t) {
                                return ho(n || [], t || [], Qe)
                            }, je.zipObjectDeep = function(n, t) {
                                return ho(n || [], t || [], Kr)
                            }, je.zipWith = ca, je.entries = Du, je.entriesIn = Mu, je.extend = yu, je.extendWith = bu, is(je, je), je.add = vs, je.attempt = Ku, je.camelCase = Bu, je.capitalize = Vu, je.ceil = gs, je.clamp = function(t, e, r) {
                                return r === n && (r = e, e = n), r !== n && (r = (r = hu(r)) == r ? r : 0), e !== n && (e = (e = hu(e)) == e ? e : 0), ir(hu(t), e, r)
                            }, je.clone = function(n) {
                                return ar(n, 4)
                            }, je.cloneDeep = function(n) {
                                return ar(n, 5)
                            }, je.cloneDeepWith = function(t, e) {
                                return ar(t, 5, e = "function" == typeof e ? e : n)
                            }, je.cloneWith = function(t, e) {
                                return ar(t, 4, e = "function" == typeof e ? e : n)
                            }, je.conformsTo = function(n, t) {
                                return null == t || ur(n, t, Lu(t))
                            }, je.deburr = Fu, je.defaultTo = function(n, t) {
                                return null == n || n != n ? t : n
                            }, je.divide = ys, je.endsWith = function(t, e, r) {
                                t = vu(t), e = ao(e);
                                var o = t.length,
                                    i = r = r === n ? o : ir(pu(r), 0, o);
                                return (r -= e.length) >= 0 && t.slice(r, i) == e
                            }, je.eq = ja, je.escape = function(n) {
                                return (n = vu(n)) && U.test(n) ? n.replace(Y, Kt) : n
                            }, je.escapeRegExp = function(n) {
                                return (n = vu(n)) && Q.test(n) ? n.replace(J, "\\$&") : n
                            }, je.every = function(t, e, r) {
                                var o = Wa(t) ? xt : pr;
                                return r && gi(t, e, r) && (e = n), o(t, ai(e, 3))
                            }, je.find = ha, je.findIndex = Fi, je.findKey = function(n, t) {
                                return kt(n, ai(t, 3), yr)
                            }, je.findLast = ma, je.findLastIndex = Wi, je.findLastKey = function(n, t) {
                                return kt(n, ai(t, 3), br)
                            }, je.floor = bs, je.forEach = va, je.forEachRight = ga, je.forIn = function(n, t) {
                                return null == n ? n : vr(n, ai(t, 3), Ou)
                            }, je.forInRight = function(n, t) {
                                return null == n ? n : gr(n, ai(t, 3), Ou)
                            }, je.forOwn = function(n, t) {
                                return n && yr(n, ai(t, 3))
                            }, je.forOwnRight = function(n, t) {
                                return n && br(n, ai(t, 3))
                            }, je.get = _u, je.gt = Ba, je.gte = Va, je.has = function(n, t) {
                                return null != n && di(n, t, Cr)
                            }, je.hasIn = Cu, je.head = Hi, je.identity = ts, je.includes = function(n, t, e, r) {
                                n = Ha(n) ? n : ju(n), e = e && !r ? pu(e) : 0;
                                var o = n.length;
                                return e < 0 && (e = ve(o + e, 0)), iu(n) ? e <= o && n.indexOf(t, e) > -1 : !!o && Nt(n, t, e) > -1
                            }, je.indexOf = function(n, t, e) {
                                var r = null == n ? 0 : n.length;
                                if (!r) return -1;
                                var o = null == e ? 0 : pu(e);
                                return o < 0 && (o = ve(r + o, 0)), Nt(n, t, o)
                            }, je.inRange = function(t, e, r) {
                                return e = fu(e), r === n ? (r = e, e = 0) : r = fu(r),
                                    function(n, t, e) {
                                        return n >= ge(t, e) && n < ve(t, e)
                                    }(t = hu(t), e, r)
                            }, je.invoke = Au, je.isArguments = Fa, je.isArray = Wa, je.isArrayBuffer = Ya, je.isArrayLike = Ha, je.isArrayLikeObject = Ua, je.isBoolean = function(n) {
                                return !0 === n || !1 === n || Qa(n) && Er(n) == h
                            }, je.isBuffer = $a, je.isDate = Xa, je.isElement = function(n) {
                                return Qa(n) && 1 === n.nodeType && !eu(n)
                            }, je.isEmpty = function(n) {
                                if (null == n) return !0;
                                if (Ha(n) && (Wa(n) || "string" == typeof n || "function" == typeof n.splice || $a(n) || uu(n) || Fa(n))) return !n.length;
                                var t = pi(n);
                                if (t == b || t == _) return !n.size;
                                if (xi(n)) return !zr(n).length;
                                for (var e in n)
                                    if (zn.call(n, e)) return !1;
                                return !0
                            }, je.isEqual = function(n, t) {
                                return Or(n, t)
                            }, je.isEqualWith = function(t, e, r) {
                                var o = (r = "function" == typeof r ? r : n) ? r(t, e) : n;
                                return o === n ? Or(t, e, n, r) : !!o
                            }, je.isError = qa, je.isFinite = function(n) {
                                return "number" == typeof n && de(n)
                            }, je.isFunction = Ga, je.isInteger = Ka, je.isLength = Za, je.isMap = nu, je.isMatch = function(n, t) {
                                return n === t || kr(n, t, si(t))
                            }, je.isMatchWith = function(t, e, r) {
                                return r = "function" == typeof r ? r : n, kr(t, e, si(e), r)
                            }, je.isNaN = function(n) {
                                return tu(n) && n != +n
                            }, je.isNative = function(n) {
                                if (wi(n)) throw new Sn("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return Rr(n)
                            }, je.isNil = function(n) {
                                return null == n
                            }, je.isNull = function(n) {
                                return null === n
                            }, je.isNumber = tu, je.isObject = Ja, je.isObjectLike = Qa, je.isPlainObject = eu, je.isRegExp = ru, je.isSafeInteger = function(n) {
                                return Ka(n) && n >= -9007199254740991 && n <= s
                            }, je.isSet = ou, je.isString = iu, je.isSymbol = au, je.isTypedArray = uu, je.isUndefined = function(t) {
                                return t === n
                            }, je.isWeakMap = function(n) {
                                return Qa(n) && pi(n) == P
                            }, je.isWeakSet = function(n) {
                                return Qa(n) && "[object WeakSet]" == Er(n)
                            }, je.join = function(n, t) {
                                return null == n ? "" : he.call(n, t)
                            }, je.kebabCase = Wu, je.last = qi, je.lastIndexOf = function(t, e, r) {
                                var o = null == t ? 0 : t.length;
                                if (!o) return -1;
                                var i = o;
                                return r !== n && (i = (i = pu(r)) < 0 ? ve(o + i, 0) : ge(i, o - 1)), e == e ? function(n, t, e) {
                                    for (var r = e + 1; r--;)
                                        if (n[r] === t) return r;
                                    return r
                                }(t, e, i) : Rt(t, It, i, !0)
                            }, je.lowerCase = Yu, je.lowerFirst = Hu, je.lt = su, je.lte = cu, je.max = function(t) {
                                return t && t.length ? dr(t, ts, _r) : n
                            }, je.maxBy = function(t, e) {
                                return t && t.length ? dr(t, ai(e, 2), _r) : n
                            }, je.mean = function(n) {
                                return Dt(n, ts)
                            }, je.meanBy = function(n, t) {
                                return Dt(n, ai(t, 2))
                            }, je.min = function(t) {
                                return t && t.length ? dr(t, ts, Ir) : n
                            }, je.minBy = function(t, e) {
                                return t && t.length ? dr(t, ai(e, 2), Ir) : n
                            }, je.stubArray = ds, je.stubFalse = hs, je.stubObject = function() {
                                return {}
                            }, je.stubString = function() {
                                return ""
                            }, je.stubTrue = function() {
                                return !0
                            }, je.multiply = ws, je.nth = function(t, e) {
                                return t && t.length ? Vr(t, pu(e)) : n
                            }, je.noConflict = function() {
                                return it._ === this && (it._ = Bn), this
                            }, je.noop = as, je.now = _a, je.pad = function(n, t, e) {
                                n = vu(n);
                                var r = (t = pu(t)) ? re(n) : 0;
                                if (!t || r >= t) return n;
                                var o = (t - r) / 2;
                                return Wo(le(o), e) + n + Wo(ce(o), e)
                            }, je.padEnd = function(n, t, e) {
                                n = vu(n);
                                var r = (t = pu(t)) ? re(n) : 0;
                                return t && r < t ? n + Wo(t - r, e) : n
                            }, je.padStart = function(n, t, e) {
                                n = vu(n);
                                var r = (t = pu(t)) ? re(n) : 0;
                                return t && r < t ? Wo(t - r, e) + n : n
                            }, je.parseInt = function(n, t, e) {
                                return e || null == t ? t = 0 : t && (t = +t), be(vu(n).replace(nn, ""), t || 0)
                            }, je.random = function(t, e, r) {
                                if (r && "boolean" != typeof r && gi(t, e, r) && (e = r = n), r === n && ("boolean" == typeof e ? (r = e, e = n) : "boolean" == typeof t && (r = t, t = n)), t === n && e === n ? (t = 0, e = 1) : (t = fu(t), e === n ? (e = t, t = 0) : e = fu(e)), t > e) {
                                    var o = t;
                                    t = e, e = o
                                }
                                if (r || t % 1 || e % 1) {
                                    var i = we();
                                    return ge(t + i * (e - t + tt("1e-" + ((i + "").length - 1))), e)
                                }
                                return Ur(t, e)
                            }, je.reduce = function(n, t, e) {
                                var r = Wa(n) ? Pt : Bt,
                                    o = arguments.length < 3;
                                return r(n, ai(t, 4), e, o, lr)
                            }, je.reduceRight = function(n, t, e) {
                                var r = Wa(n) ? At : Bt,
                                    o = arguments.length < 3;
                                return r(n, ai(t, 4), e, o, fr)
                            }, je.repeat = function(t, e, r) {
                                return e = (r ? gi(t, e, r) : e === n) ? 1 : pu(e), $r(vu(t), e)
                            }, je.replace = function() {
                                var n = arguments,
                                    t = vu(n[0]);
                                return n.length < 3 ? t : t.replace(n[1], n[2])
                            }, je.result = function(t, e, r) {
                                var o = -1,
                                    i = (e = go(e, t)).length;
                                for (i || (i = 1, t = n); ++o < i;) {
                                    var a = null == t ? n : t[Ii(e[o])];
                                    a === n && (o = i, a = r), t = Ga(a) ? a.call(t) : a
                                }
                                return t
                            }, je.round = xs, je.runInContext = u, je.sample = function(n) {
                                return (Wa(n) ? Ge : qr)(n)
                            }, je.size = function(n) {
                                if (null == n) return 0;
                                if (Ha(n)) return iu(n) ? re(n) : n.length;
                                var t = pi(n);
                                return t == b || t == _ ? n.size : zr(n).length
                            }, je.snakeCase = Uu, je.some = function(t, e, r) {
                                var o = Wa(t) ? Lt : to;
                                return r && gi(t, e, r) && (e = n), o(t, ai(e, 3))
                            }, je.sortedIndex = function(n, t) {
                                return eo(n, t)
                            }, je.sortedIndexBy = function(n, t, e) {
                                return ro(n, t, ai(e, 2))
                            }, je.sortedIndexOf = function(n, t) {
                                var e = null == n ? 0 : n.length;
                                if (e) {
                                    var r = eo(n, t);
                                    if (r < e && ja(n[r], t)) return r
                                }
                                return -1
                            }, je.sortedLastIndex = function(n, t) {
                                return eo(n, t, !0)
                            }, je.sortedLastIndexBy = function(n, t, e) {
                                return ro(n, t, ai(e, 2), !0)
                            }, je.sortedLastIndexOf = function(n, t) {
                                if (null != n && n.length) {
                                    var e = eo(n, t, !0) - 1;
                                    if (ja(n[e], t)) return e
                                }
                                return -1
                            }, je.startCase = $u, je.startsWith = function(n, t, e) {
                                return n = vu(n), e = null == e ? 0 : ir(pu(e), 0, n.length), t = ao(t), n.slice(e, e + t.length) == t
                            }, je.subtract = Ss, je.sum = function(n) {
                                return n && n.length ? Vt(n, ts) : 0
                            }, je.sumBy = function(n, t) {
                                return n && n.length ? Vt(n, ai(t, 2)) : 0
                            }, je.template = function(t, e, r) {
                                var o = je.templateSettings;
                                r && gi(t, e, r) && (e = n), t = vu(t), e = bu({}, e, o, Ko);
                                var i, a, u = bu({}, e.imports, o.imports, Ko),
                                    s = Lu(u),
                                    c = Ht(u, s),
                                    l = 0,
                                    f = e.interpolate || bn,
                                    p = "__p += '",
                                    d = Tn((e.escape || bn).source + "|" + f.source + "|" + (f === q ? cn : bn).source + "|" + (e.evaluate || bn).source + "|$", "g"),
                                    h = "//# sourceURL=" + (zn.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Zn + "]") + "\n";
                                t.replace(d, (function(n, e, r, o, u, s) {
                                    return r || (r = o), p += t.slice(l, s).replace(wn, Zt), e && (i = !0, p += "' +\n__e(" + e + ") +\n'"), u && (a = !0, p += "';\n" + u + ";\n__p += '"), r && (p += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = s + n.length, n
                                })), p += "';\n";
                                var m = zn.call(e, "variable") && e.variable;
                                if (m) {
                                    if (un.test(m)) throw new Sn("Invalid `variable` option passed into `_.template`")
                                } else p = "with (obj) {\n" + p + "\n}\n";
                                p = (a ? p.replace(B, "") : p).replace(V, "$1").replace(F, "$1;"), p = "function(" + (m || "obj") + ") {\n" + (m ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                                var v = Ku((function() {
                                    return En(s, h + "return " + p).apply(n, c)
                                }));
                                if (v.source = p, qa(v)) throw v;
                                return v
                            }, je.times = function(n, t) {
                                if ((n = pu(n)) < 1 || n > s) return [];
                                var e = l,
                                    r = ge(n, l);
                                t = ai(t), n -= l;
                                for (var o = Ft(r, t); ++e < n;) t(e);
                                return o
                            }, je.toFinite = fu, je.toInteger = pu, je.toLength = du, je.toLower = function(n) {
                                return vu(n).toLowerCase()
                            }, je.toNumber = hu, je.toSafeInteger = function(n) {
                                return n ? ir(pu(n), -9007199254740991, s) : 0 === n ? n : 0
                            }, je.toString = vu, je.toUpper = function(n) {
                                return vu(n).toUpperCase()
                            }, je.trim = function(t, e, r) {
                                if ((t = vu(t)) && (r || e === n)) return Wt(t);
                                if (!t || !(e = ao(e))) return t;
                                var o = oe(t),
                                    i = oe(e);
                                return bo(o, $t(o, i), Xt(o, i) + 1).join("")
                            }, je.trimEnd = function(t, e, r) {
                                if ((t = vu(t)) && (r || e === n)) return t.slice(0, ie(t) + 1);
                                if (!t || !(e = ao(e))) return t;
                                var o = oe(t);
                                return bo(o, 0, Xt(o, oe(e)) + 1).join("")
                            }, je.trimStart = function(t, e, r) {
                                if ((t = vu(t)) && (r || e === n)) return t.replace(nn, "");
                                if (!t || !(e = ao(e))) return t;
                                var o = oe(t);
                                return bo(o, $t(o, oe(e))).join("")
                            }, je.truncate = function(t, e) {
                                var r = 30,
                                    o = "...";
                                if (Ja(e)) {
                                    var i = "separator" in e ? e.separator : i;
                                    r = "length" in e ? pu(e.length) : r, o = "omission" in e ? ao(e.omission) : o
                                }
                                var a = (t = vu(t)).length;
                                if (Jt(t)) {
                                    var u = oe(t);
                                    a = u.length
                                }
                                if (r >= a) return t;
                                var s = r - re(o);
                                if (s < 1) return o;
                                var c = u ? bo(u, 0, s).join("") : t.slice(0, s);
                                if (i === n) return c + o;
                                if (u && (s += c.length - s), ru(i)) {
                                    if (t.slice(s).search(i)) {
                                        var l, f = c;
                                        for (i.global || (i = Tn(i.source, vu(ln.exec(i)) + "g")), i.lastIndex = 0; l = i.exec(f);) var p = l.index;
                                        c = c.slice(0, p === n ? s : p)
                                    }
                                } else if (t.indexOf(ao(i), s) != s) {
                                    var d = c.lastIndexOf(i);
                                    d > -1 && (c = c.slice(0, d))
                                }
                                return c + o
                            }, je.unescape = function(n) {
                                return (n = vu(n)) && H.test(n) ? n.replace(W, ae) : n
                            }, je.uniqueId = function(n) {
                                var t = ++In;
                                return vu(n) + t
                            }, je.upperCase = Xu, je.upperFirst = qu, je.each = va, je.eachRight = ga, je.first = Hi, is(je, (ms = {}, yr(je, (function(n, t) {
                                zn.call(je.prototype, t) || (ms[t] = n)
                            })), ms), {
                                chain: !1
                            }), je.VERSION = "4.17.21", bt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(n) {
                                je[n].placeholder = je
                            })), bt(["drop", "take"], (function(t, e) {
                                We.prototype[t] = function(r) {
                                    r = r === n ? 1 : ve(pu(r), 0);
                                    var o = this.__filtered__ && !e ? new We(this) : this.clone();
                                    return o.__filtered__ ? o.__takeCount__ = ge(r, o.__takeCount__) : o.__views__.push({
                                        size: ge(r, l),
                                        type: t + (o.__dir__ < 0 ? "Right" : "")
                                    }), o
                                }, We.prototype[t + "Right"] = function(n) {
                                    return this.reverse()[t](n).reverse()
                                }
                            })), bt(["filter", "map", "takeWhile"], (function(n, t) {
                                var e = t + 1,
                                    r = 1 == e || 3 == e;
                                We.prototype[n] = function(n) {
                                    var t = this.clone();
                                    return t.__iteratees__.push({
                                        iteratee: ai(n, 3),
                                        type: e
                                    }), t.__filtered__ = t.__filtered__ || r, t
                                }
                            })), bt(["head", "last"], (function(n, t) {
                                var e = "take" + (t ? "Right" : "");
                                We.prototype[n] = function() {
                                    return this[e](1).value()[0]
                                }
                            })), bt(["initial", "tail"], (function(n, t) {
                                var e = "drop" + (t ? "" : "Right");
                                We.prototype[n] = function() {
                                    return this.__filtered__ ? new We(this) : this[e](1)
                                }
                            })), We.prototype.compact = function() {
                                return this.filter(ts)
                            }, We.prototype.find = function(n) {
                                return this.filter(n).head()
                            }, We.prototype.findLast = function(n) {
                                return this.reverse().find(n)
                            }, We.prototype.invokeMap = Xr((function(n, t) {
                                return "function" == typeof n ? new We(this) : this.map((function(e) {
                                    return Ar(e, n, t)
                                }))
                            })), We.prototype.reject = function(n) {
                                return this.filter(Na(ai(n)))
                            }, We.prototype.slice = function(t, e) {
                                t = pu(t);
                                var r = this;
                                return r.__filtered__ && (t > 0 || e < 0) ? new We(r) : (t < 0 ? r = r.takeRight(-t) : t && (r = r.drop(t)), e !== n && (r = (e = pu(e)) < 0 ? r.dropRight(-e) : r.take(e - t)), r)
                            }, We.prototype.takeRightWhile = function(n) {
                                return this.reverse().takeWhile(n).reverse()
                            }, We.prototype.toArray = function() {
                                return this.take(l)
                            }, yr(We.prototype, (function(t, e) {
                                var r = /^(?:filter|find|map|reject)|While$/.test(e),
                                    o = /^(?:head|last)$/.test(e),
                                    i = je[o ? "take" + ("last" == e ? "Right" : "") : e],
                                    a = o || /^find/.test(e);
                                i && (je.prototype[e] = function() {
                                    var e = this.__wrapped__,
                                        u = o ? [1] : arguments,
                                        s = e instanceof We,
                                        c = u[0],
                                        l = s || Wa(e),
                                        f = function(n) {
                                            var t = i.apply(je, Tt([n], u));
                                            return o && p ? t[0] : t
                                        };
                                    l && r && "function" == typeof c && 1 != c.length && (s = l = !1);
                                    var p = this.__chain__,
                                        d = !!this.__actions__.length,
                                        h = a && !p,
                                        m = s && !d;
                                    if (!a && l) {
                                        e = m ? e : new We(this);
                                        var v = t.apply(e, u);
                                        return v.__actions__.push({
                                            func: fa,
                                            args: [f],
                                            thisArg: n
                                        }), new Fe(v, p)
                                    }
                                    return h && m ? t.apply(this, u) : (v = this.thru(f), h ? o ? v.value()[0] : v.value() : v)
                                })
                            })), bt(["pop", "push", "shift", "sort", "splice", "unshift"], (function(n) {
                                var t = Ln[n],
                                    e = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                                    r = /^(?:pop|shift)$/.test(n);
                                je.prototype[n] = function() {
                                    var n = arguments;
                                    if (r && !this.__chain__) {
                                        var o = this.value();
                                        return t.apply(Wa(o) ? o : [], n)
                                    }
                                    return this[e]((function(e) {
                                        return t.apply(Wa(e) ? e : [], n)
                                    }))
                                }
                            })), yr(We.prototype, (function(n, t) {
                                var e = je[t];
                                if (e) {
                                    var r = e.name + "";
                                    zn.call(Le, r) || (Le[r] = []), Le[r].push({
                                        name: t,
                                        func: e
                                    })
                                }
                            })), Le[jo(n, 2).name] = [{
                                name: "wrapper",
                                func: n
                            }], We.prototype.clone = function() {
                                var n = new We(this.__wrapped__);
                                return n.__actions__ = Po(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Po(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Po(this.__views__), n
                            }, We.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var n = new We(this);
                                    n.__dir__ = -1, n.__filtered__ = !0
                                } else(n = this.clone()).__dir__ *= -1;
                                return n
                            }, We.prototype.value = function() {
                                var n = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    e = Wa(n),
                                    r = t < 0,
                                    o = e ? n.length : 0,
                                    i = function(n, t, e) {
                                        for (var r = -1, o = e.length; ++r < o;) {
                                            var i = e[r],
                                                a = i.size;
                                            switch (i.type) {
                                                case "drop":
                                                    n += a;
                                                    break;
                                                case "dropRight":
                                                    t -= a;
                                                    break;
                                                case "take":
                                                    t = ge(t, n + a);
                                                    break;
                                                case "takeRight":
                                                    n = ve(n, t - a)
                                            }
                                        }
                                        return {
                                            start: n,
                                            end: t
                                        }
                                    }(0, o, this.__views__),
                                    a = i.start,
                                    u = i.end,
                                    s = u - a,
                                    c = r ? u : a - 1,
                                    l = this.__iteratees__,
                                    f = l.length,
                                    p = 0,
                                    d = ge(s, this.__takeCount__);
                                if (!e || !r && o == s && d == s) return fo(n, this.__actions__);
                                var h = [];
                                n: for (; s-- && p < d;) {
                                    for (var m = -1, v = n[c += t]; ++m < f;) {
                                        var g = l[m],
                                            y = g.iteratee,
                                            b = g.type,
                                            w = y(v);
                                        if (2 == b) v = w;
                                        else if (!w) {
                                            if (1 == b) continue n;
                                            break n
                                        }
                                    }
                                    h[p++] = v
                                }
                                return h
                            }, je.prototype.at = pa, je.prototype.chain = function() {
                                return la(this)
                            }, je.prototype.commit = function() {
                                return new Fe(this.value(), this.__chain__)
                            }, je.prototype.next = function() {
                                this.__values__ === n && (this.__values__ = lu(this.value()));
                                var t = this.__index__ >= this.__values__.length;
                                return {
                                    done: t,
                                    value: t ? n : this.__values__[this.__index__++]
                                }
                            }, je.prototype.plant = function(t) {
                                for (var e, r = this; r instanceof Ve;) {
                                    var o = Mi(r);
                                    o.__index__ = 0, o.__values__ = n, e ? i.__wrapped__ = o : e = o;
                                    var i = o;
                                    r = r.__wrapped__
                                }
                                return i.__wrapped__ = t, e
                            }, je.prototype.reverse = function() {
                                var t = this.__wrapped__;
                                if (t instanceof We) {
                                    var e = t;
                                    return this.__actions__.length && (e = new We(this)), (e = e.reverse()).__actions__.push({
                                        func: fa,
                                        args: [Ji],
                                        thisArg: n
                                    }), new Fe(e, this.__chain__)
                                }
                                return this.thru(Ji)
                            }, je.prototype.toJSON = je.prototype.valueOf = je.prototype.value = function() {
                                return fo(this.__wrapped__, this.__actions__)
                            }, je.prototype.first = je.prototype.head, ut && (je.prototype[ut] = function() {
                                return this
                            }), je
                        }();
                    ut ? ((ut.exports = ue)._ = ue, at._ = ue) : it._ = ue
                }.call(u);
            var wn = function(n) {
                var t = n.options,
                    e = n.callbacks,
                    o = n.elements,
                    i = n.children,
                    a = n.defaultOptions,
                    u = n.defaultCallbacks,
                    s = (0, r.useContext)(ln),
                    c = (0, r.useRef)(null),
                    l = (0, r.useRef)(),
                    f = (0, r.useRef)(!0);
                return (0, r.useEffect)((function() {
                    try {
                        s.dispatch({
                            type: "RESET_LIGHTBOX"
                        })
                    } catch (n) {
                        hn(n.message = "SRL - ERROR WHEN RESETTING THE LIGHTBOX STATUS")
                    }
                    return function() {
                        f.current = !1
                    }
                }), []), (0, r.useEffect)((function() {
                    function n(n) {
                        if (n) {
                            var t = n.querySelectorAll("img");
                            t.length > 0 ? s.isLoaded || (function(n) {
                                var t = [].map.call(n, (function(n) {
                                    return (t = n, e = new Promise((function(n, e) {
                                        function r() {
                                            "lazy" === t.loading || 0 !== t.naturalWidth ? n(t) : e(void 0), t.removeEventListener("load", r), t.removeEventListener("error", r)
                                        }
                                        "lazy" === t.loading || 0 !== t.naturalWidth ? n(t) : t.complete ? e(void 0) : (t.addEventListener("load", r), t.addEventListener("error", r))
                                    })), Object.assign(e, {
                                        image: t
                                    })).catch((function(n) {
                                        return n
                                    }));
                                    var t, e
                                }));
                                return Promise.all(t).then((function(n) {
                                    return Promise.resolve(n.filter((function(n) {
                                        return n
                                    })))
                                }))
                            }(t).then((function(n) {
                                return f.current ? function(n) {
                                    var t, e = [];
                                    n.forEach((function(n) {
                                        e = function(n) {
                                            var t, e, r, o;
                                            return n.getAttribute("srl_gallery_image") || "IMG" === n.nodeName && ("A" === (null === (t = n.offsetParent) || void 0 === t ? void 0 : t.nodeName) || "A" === (null === (e = n.parentNode) || void 0 === e ? void 0 : e.nodeName)) || "IMG" === n.nodeName && "PICTURE" === n.parentNode.nodeName && "A" === (null === (r = n.offsetParent) || void 0 === r ? void 0 : r.nodeName) || "A" === (null === (o = n.parentNode) || void 0 === o ? void 0 : o.nodeName)
                                        }(n) || function(n) {
                                            return "IMG" === n.nodeName && "PICTURE" === n.parentNode.nodeName && n.parentNode.parentNode.className.includes("gatsby-image-wrapper") && "A" === n.parentNode.parentNode.parentNode.nodeName
                                        }(n) ? [].concat(pn(e), [{
                                            type: "GALLERY IMAGE",
                                            element: n
                                        }]) : function(n) {
                                            var t;
                                            return "IMG" === n.nodeName && "A" !== (null === (t = n.parentNode) || void 0 === t ? void 0 : t.nodeName)
                                        }(n) ? [].concat(pn(e), [{
                                            type: "IMAGE",
                                            element: n
                                        }]) : pn(e)
                                    })), t = 0, i(e.map((function(n) {
                                        var e, o, i, a, u, s, c = n.element,
                                            l = n.type;
                                        if (!c.ariaHidden) {
                                            c.setAttribute("srl_elementid", t);
                                            var f = null === (e = c.src) || void 0 === e ? void 0 : e.includes("base64"),
                                                p = null === (o = c.src) || void 0 === o ? void 0 : o.includes("svg+xml"),
                                                d = null === (i = c.offsetParent) || void 0 === i ? void 0 : i.className.includes("gatsby-image-wrapper"),
                                                h = "picture" !== (null === (a = c.parentNode) || void 0 === a ? void 0 : a.localName),
                                                m = "presentation" === c.getAttribute("role"),
                                                v = (null === (u = c.src) || void 0 === u ? void 0 : u.includes("data:image/gif")) || (null === (s = c.src) || void 0 === s ? void 0 : s.includes("data:image/svg+xml;base64"));
                                            if (!(d && (f || p) && h || m || v)) switch (t++, l) {
                                                case "IMAGE":
                                                    var g = {
                                                        id: c.getAttribute("srl_elementid"),
                                                        source: c.src || c.currentSrc,
                                                        caption: c.alt,
                                                        thumbnail: c.src || c.currentSrc,
                                                        width: c.naturalWidth,
                                                        height: c.naturalHeight,
                                                        type: "image"
                                                    };
                                                    return dn(c, g, r), g;
                                                case "GALLERY IMAGE":
                                                    var y = {
                                                        id: c.getAttribute("srl_elementid"),
                                                        source: c.parentElement.href || c.offsetParent.parentElement.href || c.offsetParent.href || c.parentElement.parentElement.parentElement.href || c.src || c.currentSrc || null,
                                                        caption: c.alt || c.textContent,
                                                        thumbnail: c.parentElement.href || c.offsetParent.parentElement.href || c.offsetParent.href || c.parentElement.parentElement.parentElement.href || c.src || c.currentSrc,
                                                        width: null,
                                                        height: null,
                                                        type: "gallery_image"
                                                    };
                                                    return dn(c, y, r), y;
                                                default:
                                                    return
                                            }
                                        }
                                    })).filter((function(n) {
                                        return void 0 !== n
                                    })))
                                }(n) : null
                            })), Array.from(t).map((function(n) {
                                return n.addEventListener("click", (function(n) {
                                    n.preventDefault()
                                }))
                            }))) : o && function(n) {
                                i(n.map((function(n, t) {
                                    return function(n) {
                                        return n.src
                                    }(n) ? {
                                        id: t + "",
                                        source: n.src || null,
                                        caption: n.caption || null,
                                        thumbnail: n.thumbnail || n.src || null,
                                        type: "image"
                                    } : void 0
                                })).filter((function(n) {
                                    return n && !n.src
                                })))
                            }(o)
                        }
                    }
                    var r = function(n) {
                        if (!gn.exports.isEqual(n, s.selectedElement)) try {
                            s.dispatch({
                                type: "HANDLE_ELEMENT",
                                element: n
                            })
                        } catch (n) {
                            hn(n.message = "SRL - ERROR WHEN HANDLING THE ELEMENT")
                        }
                    };

                    function i(n) {
                        return function(n, t, e) {
                            var r, o;
                            r = gn.exports.isEmpty(n) ? bn(bn({}, a), {}, {
                                buttons: bn({}, a.buttons),
                                settings: bn({}, a.settings),
                                caption: bn({}, a.caption),
                                thumbnails: bn({}, a.thumbnails),
                                progressBar: bn({}, a.progressBar)
                            }) : bn(bn(bn({}, a), n), {}, {
                                buttons: bn(bn({}, a.buttons), n.buttons),
                                settings: bn(bn({}, a.settings), n.settings),
                                caption: bn(bn({}, a.caption), n.caption),
                                thumbnails: bn(bn({}, a.thumbnails), n.thumbnails),
                                progressBar: bn(bn({}, a.progressBar), n.progressBar)
                            }), o = gn.exports.isEmpty(t) ? bn({}, u) : bn(bn({}, u), t);
                            var i = {
                                options: bn({}, r),
                                callbacks: bn({}, o)
                            };
                            if (!gn.exports.isEqual(i.options, s.options) || !gn.exports.isEqual(i.callbacks, s.callbacks) || !gn.exports.isEqual(e, s.elements)) try {
                                s.dispatch({
                                    type: "READY_LIGHTBOX",
                                    mergedSettings: i,
                                    elements: e
                                })
                            } catch (n) {
                                hn(n.message = "SRL - ERROR GRABBING SETTINGS AND ELEMENTS")
                            }
                        }(t, e, n)
                    }
                    l.current = new MutationObserver((function() {
                        n(c.current)
                    })), l.current.observe(c.current, {
                        childList: !0,
                        subtree: !0,
                        attributeFilter: ["href", "src"]
                    }), n(c.current)
                }), [s, u, a, t, e, o]), r.createElement("div", {
                    ref: c
                }, i)
            };

            function xn() {
                return (xn = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }).apply(this, arguments)
            }

            function Sn(n, t) {
                return t || (t = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function En(n) {
                var t = Object.create(null);
                return function(e) {
                    return void 0 === t[e] && (t[e] = n(e)), t[e]
                }
            }
            wn.propTypes = {
                defaultOptions: tn.shape({
                    settings: tn.shape({
                        autoplaySpeed: tn.number,
                        boxShadow: tn.string,
                        disableKeyboardControls: tn.bool,
                        disablePanzoom: tn.bool,
                        disableWheelControls: tn.bool,
                        downloadedFileName: tn.string,
                        hideControlsAfter: tn.oneOfType([tn.number, tn.bool]),
                        lightboxTransitionSpeed: tn.number,
                        lightboxTransitionTimingFunction: tn.oneOfType([tn.string, tn.array]),
                        overlayColor: tn.string,
                        slideAnimationType: tn.string,
                        slideSpringValues: tn.array,
                        slideTransitionSpeed: tn.number,
                        slideTransitionTimingFunction: tn.oneOfType([tn.string, tn.array]),
                        usingPreact: tn.bool
                    }),
                    buttons: tn.shape({
                        backgroundColor: tn.string,
                        iconColor: tn.string,
                        iconPadding: tn.string,
                        showAutoplayButton: tn.bool,
                        showCloseButton: tn.bool,
                        showDownloadButton: tn.bool,
                        showFullscreenButton: tn.bool,
                        showNextButton: tn.bool,
                        showPrevButton: tn.bool,
                        showThumbnailsButton: tn.bool,
                        size: tn.string
                    }),
                    caption: tn.shape({
                        captionColor: tn.string,
                        captionAlignment: tn.string,
                        captionFontFamily: tn.string,
                        captionFontSize: tn.string,
                        captionFontStyle: tn.string,
                        captionFontWeight: tn.oneOfType([tn.number, tn.string]),
                        captionContainerPadding: tn.string,
                        captionTextTransform: tn.string,
                        showCaption: tn.bool
                    }),
                    thumbnails: tn.shape({
                        showThumbnails: tn.bool,
                        thumbnailsAlignment: tn.string,
                        thumbnailsContainerPadding: tn.string,
                        thumbnailsContainerBackgroundColor: tn.string,
                        thumbnailsGap: tn.string,
                        thumbnailsIconColor: tn.string,
                        thumbnailsOpacity: tn.number,
                        thumbnailsPosition: tn.string,
                        thumbnailsSize: tn.array
                    }),
                    progressBar: tn.shape({
                        backgroundColor: tn.string,
                        fillColor: tn.string,
                        height: tn.string,
                        showProgressBar: tn.bool
                    })
                }),
                defaultCallbacks: tn.shape({
                    onCountSlides: tn.func,
                    onLightboxClosed: tn.func,
                    onLightboxOpened: tn.func,
                    onSlideChange: tn.func
                }),
                children: tn.oneOfType([tn.arrayOf(tn.node), tn.node]),
                options: tn.object,
                callbacks: tn.object,
                elements: tn.array
            }, wn.defaultProps = {
                defaultOptions: {
                    settings: {
                        autoplaySpeed: 3e3,
                        boxShadow: "none",
                        disableKeyboardControls: !1,
                        disablePanzoom: !1,
                        disableWheelControls: !1,
                        downloadedFileName: "SRL-image",
                        hideControlsAfter: !1,
                        lightboxTransitionSpeed: .3,
                        lightboxTransitionTimingFunction: "linear",
                        overlayColor: "rgba(30, 30, 30, 0.9)",
                        slideAnimationType: "fade",
                        slideSpringValues: [300, 50],
                        slideTransitionSpeed: .6,
                        slideTransitionTimingFunction: "linear",
                        usingPreact: !1
                    },
                    buttons: {
                        backgroundColor: "rgba(30,30,36,0.8)",
                        iconColor: "rgba(255, 255, 255, 0.8)",
                        iconPadding: "10px",
                        showAutoplayButton: !0,
                        showCloseButton: !0,
                        showDownloadButton: !0,
                        showFullscreenButton: !0,
                        showNextButton: !0,
                        showPrevButton: !0,
                        showThumbnailsButton: !0,
                        size: "40px"
                    },
                    caption: {
                        captionAlignment: "start",
                        captionColor: "#FFFFFF",
                        captionContainerPadding: "20px 0 30px 0",
                        captionFontFamily: "inherit",
                        captionFontSize: "inherit",
                        captionFontStyle: "inherit",
                        captionFontWeight: "inherit",
                        captionTextTransform: "inherit",
                        showCaption: !0
                    },
                    thumbnails: {
                        showThumbnails: !0,
                        thumbnailsAlignment: "center",
                        thumbnailsContainerBackgroundColor: "transparent",
                        thumbnailsContainerPadding: "0",
                        thumbnailsGap: "0 1px",
                        thumbnailsIconColor: "#ffffff",
                        thumbnailsOpacity: .4,
                        thumbnailsPosition: "bottom",
                        thumbnailsSize: ["100px", "80px"]
                    },
                    progressBar: {
                        backgroundColor: "#f2f2f2",
                        fillColor: "#000000",
                        height: "3px",
                        showProgressBar: !0
                    }
                },
                defaultCallbacks: {
                    onCountSlides: function() {},
                    onSlideChange: function() {},
                    onLightboxClosed: function() {},
                    onLightboxOpened: function() {}
                }
            };
            var _n = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                Cn = En((function(n) {
                    return _n.test(n) || 111 === n.charCodeAt(0) && 110 === n.charCodeAt(1) && n.charCodeAt(2) < 91
                })),
                Tn = "undefined" != typeof e.g ? e.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
                Pn = function() {
                    function n(n) {
                        var t = this;
                        this._insertTag = function(n) {
                            var e;
                            e = 0 === t.tags.length ? t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(n, e), t.tags.push(n)
                        }, this.isSpeedy = void 0 === n.speedy ? "production" === i().env.NODE_ENV : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.before = null
                    }
                    var t = n.prototype;
                    return t.hydrate = function(n) {
                        n.forEach(this._insertTag)
                    }, t.insert = function(n) {
                        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(n) {
                            var t = document.createElement("style");
                            return t.setAttribute("data-emotion", n.key), void 0 !== n.nonce && t.setAttribute("nonce", n.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
                        }(this));
                        var t = this.tags[this.tags.length - 1];
                        if ("production" !== i().env.NODE_ENV) {
                            var e = 64 === n.charCodeAt(0) && 105 === n.charCodeAt(1);
                            e && this._alreadyInsertedOrderInsensitiveRule && console.error("You're attempting to insert the following rule:\n" + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !e
                        }
                        if (this.isSpeedy) {
                            var r = function(n) {
                                if (n.sheet) return n.sheet;
                                for (var t = 0; t < document.styleSheets.length; t++)
                                    if (document.styleSheets[t].ownerNode === n) return document.styleSheets[t]
                            }(t);
                            try {
                                r.insertRule(n, r.cssRules.length)
                            } catch (t) {
                                "production" === i().env.NODE_ENV || /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(n) || console.error('There was a problem inserting the following rule: "' + n + '"', t)
                            }
                        } else t.appendChild(document.createTextNode(n));
                        this.ctr++
                    }, t.flush = function() {
                        this.tags.forEach((function(n) {
                            return n.parentNode.removeChild(n)
                        })), this.tags = [], this.ctr = 0, "production" !== i().env.NODE_ENV && (this._alreadyInsertedOrderInsensitiveRule = !1)
                    }, n
                }(),
                An = "-ms-",
                Ln = "-moz-",
                On = "-webkit-",
                kn = Math.abs,
                Rn = String.fromCharCode;

            function Nn(n) {
                return n.trim()
            }

            function zn(n, t, e) {
                return n.replace(t, e)
            }

            function In(n, t) {
                return n.indexOf(t)
            }

            function Dn(n, t) {
                return 0 | n.charCodeAt(t)
            }

            function Mn(n, t, e) {
                return n.slice(t, e)
            }

            function jn(n) {
                return n.length
            }

            function Bn(n) {
                return n.length
            }

            function Vn(n, t) {
                return t.push(n), n
            }
            var Fn = 1,
                Wn = 1,
                Yn = 0,
                Hn = 0,
                Un = 0,
                $n = "";

            function Xn(n, t, e, r, o, i, a) {
                return {
                    value: n,
                    root: t,
                    parent: e,
                    type: r,
                    props: o,
                    children: i,
                    line: Fn,
                    column: Wn,
                    length: a,
                    return: ""
                }
            }

            function qn(n, t, e) {
                return Xn(n, t.root, t.parent, e, t.props, t.children, 0)
            }

            function Gn() {
                return Un = Hn < Yn ? Dn($n, Hn++) : 0, Wn++, 10 === Un && (Wn = 1, Fn++), Un
            }

            function Kn() {
                return Dn($n, Hn)
            }

            function Zn() {
                return Hn
            }

            function Jn(n, t) {
                return Mn($n, n, t)
            }

            function Qn(n) {
                switch (n) {
                    case 0:
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        return 5;
                    case 33:
                    case 43:
                    case 44:
                    case 47:
                    case 62:
                    case 64:
                    case 126:
                    case 59:
                    case 123:
                    case 125:
                        return 4;
                    case 58:
                        return 3;
                    case 34:
                    case 39:
                    case 40:
                    case 91:
                        return 2;
                    case 41:
                    case 93:
                        return 1
                }
                return 0
            }

            function nt(n) {
                return Fn = Wn = 1, Yn = jn($n = n), Hn = 0, []
            }

            function tt(n) {
                return $n = "", n
            }

            function et(n) {
                return Nn(Jn(Hn - 1, it(91 === n ? n + 2 : 40 === n ? n + 1 : n)))
            }

            function rt(n) {
                for (;
                    (Un = Kn()) && Un < 33;) Gn();
                return Qn(n) > 2 || Qn(Un) > 3 ? "" : " "
            }

            function ot(n, t) {
                for (; --t && Gn() && !(Un < 48 || Un > 102 || Un > 57 && Un < 65 || Un > 70 && Un < 97););
                return Jn(n, Zn() + (t < 6 && 32 == Kn() && 32 == Gn()))
            }

            function it(n) {
                for (; Gn();) switch (Un) {
                    case n:
                        return Hn;
                    case 34:
                    case 39:
                        return it(34 === n || 39 === n ? n : Un);
                    case 40:
                        41 === n && it(n);
                        break;
                    case 92:
                        Gn()
                }
                return Hn
            }

            function at(n, t) {
                for (; Gn() && n + Un !== 57 && (n + Un !== 84 || 47 !== Kn()););
                return "/*" + Jn(t, Hn - 1) + "*" + Rn(47 === n ? n : Gn())
            }

            function ut(n) {
                for (; !Qn(Kn());) Gn();
                return Jn(n, Hn)
            }

            function st(n) {
                return tt(ct("", null, null, null, [""], n = nt(n), 0, [0], n))
            }

            function ct(n, t, e, r, o, i, a, u, s) {
                for (var c = 0, l = 0, f = a, p = 0, d = 0, h = 0, m = 1, v = 1, g = 1, y = 0, b = "", w = o, x = i, S = r, E = b; v;) switch (h = y, y = Gn()) {
                    case 34:
                    case 39:
                    case 91:
                    case 40:
                        E += et(y);
                        break;
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        E += rt(h);
                        break;
                    case 92:
                        E += ot(Zn() - 1, 7);
                        continue;
                    case 47:
                        switch (Kn()) {
                            case 42:
                            case 47:
                                Vn(ft(at(Gn(), Zn()), t, e), s);
                                break;
                            default:
                                E += "/"
                        }
                        break;
                    case 123 * m:
                        u[c++] = jn(E) * g;
                    case 125 * m:
                    case 59:
                    case 0:
                        switch (y) {
                            case 0:
                            case 125:
                                v = 0;
                            case 59 + l:
                                d > 0 && jn(E) - f && Vn(d > 32 ? pt(E + ";", r, e, f - 1) : pt(zn(E, " ", "") + ";", r, e, f - 2), s);
                                break;
                            case 59:
                                E += ";";
                            default:
                                if (Vn(S = lt(E, t, e, c, l, o, u, b, w = [], x = [], f), i), 123 === y)
                                    if (0 === l) ct(E, t, S, S, w, i, f, u, x);
                                    else switch (p) {
                                        case 100:
                                        case 109:
                                        case 115:
                                            ct(n, S, S, r && Vn(lt(n, S, S, 0, 0, o, u, b, o, w = [], f), x), o, x, f, u, r ? w : x);
                                            break;
                                        default:
                                            ct(E, S, S, S, [""], x, f, u, x)
                                    }
                        }
                        c = l = d = 0, m = g = 1, b = E = "", f = a;
                        break;
                    case 58:
                        f = 1 + jn(E), d = h;
                    default:
                        if (m < 1)
                            if (123 == y) --m;
                            else if (125 == y && 0 == m++ && 125 == (Un = Hn > 0 ? Dn($n, --Hn) : 0, Wn--, 10 === Un && (Wn = 1, Fn--), Un)) continue;
                        switch (E += Rn(y), y * m) {
                            case 38:
                                g = l > 0 ? 1 : (E += "\f", -1);
                                break;
                            case 44:
                                u[c++] = (jn(E) - 1) * g, g = 1;
                                break;
                            case 64:
                                45 === Kn() && (E += et(Gn())), p = Kn(), l = jn(b = E += ut(Zn())), y++;
                                break;
                            case 45:
                                45 === h && 2 == jn(E) && (m = 0)
                        }
                }
                return i
            }

            function lt(n, t, e, r, o, i, a, u, s, c, l) {
                for (var f = o - 1, p = 0 === o ? i : [""], d = Bn(p), h = 0, m = 0, v = 0; h < r; ++h)
                    for (var g = 0, y = Mn(n, f + 1, f = kn(m = a[h])), b = n; g < d; ++g)(b = Nn(m > 0 ? p[g] + " " + y : zn(y, /&\f/g, p[g]))) && (s[v++] = b);
                return Xn(n, t, e, 0 === o ? "rule" : u, s, c, l)
            }

            function ft(n, t, e) {
                return Xn(n, t, e, "comm", Rn(Un), Mn(n, 2, -2), 0)
            }

            function pt(n, t, e, r) {
                return Xn(n, t, e, "decl", Mn(n, 0, r), Mn(n, r + 1, -1), r)
            }

            function dt(n, t) {
                switch (function(n, t) {
                    return (((t << 2 ^ Dn(n, 0)) << 2 ^ Dn(n, 1)) << 2 ^ Dn(n, 2)) << 2 ^ Dn(n, 3)
                }(n, t)) {
                    case 5103:
                        return On + "print-" + n + n;
                    case 5737:
                    case 4201:
                    case 3177:
                    case 3433:
                    case 1641:
                    case 4457:
                    case 2921:
                    case 5572:
                    case 6356:
                    case 5844:
                    case 3191:
                    case 6645:
                    case 3005:
                    case 6391:
                    case 5879:
                    case 5623:
                    case 6135:
                    case 4599:
                    case 4855:
                    case 4215:
                    case 6389:
                    case 5109:
                    case 5365:
                    case 5621:
                    case 3829:
                        return On + n + n;
                    case 5349:
                    case 4246:
                    case 4810:
                    case 6968:
                    case 2756:
                        return On + n + Ln + n + An + n + n;
                    case 6828:
                    case 4268:
                        return On + n + An + n + n;
                    case 6165:
                        return On + n + An + "flex-" + n + n;
                    case 5187:
                        return On + n + zn(n, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") + n;
                    case 5443:
                        return On + n + An + "flex-item-" + zn(n, /flex-|-self/, "") + n;
                    case 4675:
                        return On + n + An + "flex-line-pack" + zn(n, /align-content|flex-|-self/, "") + n;
                    case 5548:
                        return On + n + An + zn(n, "shrink", "negative") + n;
                    case 5292:
                        return On + n + An + zn(n, "basis", "preferred-size") + n;
                    case 6060:
                        return On + "box-" + zn(n, "-grow", "") + On + n + An + zn(n, "grow", "positive") + n;
                    case 4554:
                        return On + zn(n, /([^-])(transform)/g, "$1-webkit-$2") + n;
                    case 6187:
                        return zn(zn(zn(n, /(zoom-|grab)/, On + "$1"), /(image-set)/, On + "$1"), n, "") + n;
                    case 5495:
                    case 3959:
                        return zn(n, /(image-set\([^]*)/, On + "$1$`$1");
                    case 4968:
                        return zn(zn(n, /(.+:)(flex-)?(.*)/, "-webkit-box-pack:$3-ms-flex-pack:$3"), /s.+-b[^;]+/, "justify") + On + n + n;
                    case 4095:
                    case 3583:
                    case 4068:
                    case 2532:
                        return zn(n, /(.+)-inline(.+)/, On + "$1$2") + n;
                    case 8116:
                    case 7059:
                    case 5753:
                    case 5535:
                    case 5445:
                    case 5701:
                    case 4933:
                    case 4677:
                    case 5533:
                    case 5789:
                    case 5021:
                    case 4765:
                        if (jn(n) - 1 - t > 6) switch (Dn(n, t + 1)) {
                            case 109:
                                if (45 !== Dn(n, t + 4)) break;
                            case 102:
                                return zn(n, /(.+:)(.+)-([^]+)/, "$1-webkit-$2-$3$1" + Ln + (108 == Dn(n, t + 3) ? "$3" : "$2-$3")) + n;
                            case 115:
                                return ~In(n, "stretch") ? dt(zn(n, "stretch", "fill-available"), t) + n : n
                        }
                        break;
                    case 4949:
                        if (115 !== Dn(n, t + 1)) break;
                    case 6444:
                        switch (Dn(n, jn(n) - 3 - (~In(n, "!important") && 10))) {
                            case 107:
                                return zn(n, ":", ":" + On) + n;
                            case 101:
                                return zn(n, /(.+:)([^;!]+)(;|!.+)?/, "$1" + On + (45 === Dn(n, 14) ? "inline-" : "") + "box$3$1" + On + "$2$3$1" + An + "$2box$3") + n
                        }
                        break;
                    case 5936:
                        switch (Dn(n, t + 11)) {
                            case 114:
                                return On + n + An + zn(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
                            case 108:
                                return On + n + An + zn(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
                            case 45:
                                return On + n + An + zn(n, /[svh]\w+-[tblr]{2}/, "lr") + n
                        }
                        return On + n + An + n + n
                }
                return n
            }

            function ht(n, t) {
                for (var e = "", r = Bn(n), o = 0; o < r; o++) e += t(n[o], o, n, t) || "";
                return e
            }

            function mt(n, t, e, r) {
                switch (n.type) {
                    case "@import":
                    case "decl":
                        return n.return = n.return || n.value;
                    case "comm":
                        return "";
                    case "rule":
                        n.value = n.props.join(",")
                }
                return jn(e = ht(n.children, r)) ? n.return = n.value + "{" + e + "}" : ""
            }

            function vt(n) {
                var t = Bn(n);
                return function(e, r, o, i) {
                    for (var a = "", u = 0; u < t; u++) a += n[u](e, r, o, i) || "";
                    return a
                }
            }
            var gt, yt, bt = new WeakMap,
                wt = function(n) {
                    if ("rule" === n.type && n.parent && n.length) {
                        for (var t = n.value, e = n.parent, r = n.column === e.column && n.line === e.line;
                            "rule" !== e.type;)
                            if (!(e = e.parent)) return;
                        if ((1 !== n.props.length || 58 === t.charCodeAt(0) || bt.get(e)) && !r) {
                            bt.set(n, !0);
                            for (var o = [], i = function(n, t) {
                                    return tt(function(n, t) {
                                        var e = -1,
                                            r = 44;
                                        do {
                                            switch (Qn(r)) {
                                                case 0:
                                                    38 === r && 12 === Kn() && (t[e] = 1), n[e] += ut(Hn - 1);
                                                    break;
                                                case 2:
                                                    n[e] += et(r);
                                                    break;
                                                case 4:
                                                    if (44 === r) {
                                                        n[++e] = 58 === Kn() ? "&\f" : "", t[e] = n[e].length;
                                                        break
                                                    }
                                                default:
                                                    n[e] += Rn(r)
                                            }
                                        } while (r = Gn());
                                        return n
                                    }(nt(n), t))
                                }(t, o), a = e.props, u = 0, s = 0; u < i.length; u++)
                                for (var c = 0; c < a.length; c++, s++) n.props[s] = o[u] ? i[u].replace(/&\f/g, a[c]) : a[c] + " " + i[u]
                        }
                    }
                },
                xt = function(n) {
                    if ("decl" === n.type) {
                        var t = n.value;
                        108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (n.return = "", n.value = "")
                    }
                },
                St = function(n) {
                    return 105 === n.type.charCodeAt(1) && 64 === n.type.charCodeAt(0)
                },
                Et = function(n) {
                    n.type = "", n.value = "", n.return = "", n.children = "", n.props = ""
                },
                _t = function(n, t, e) {
                    St(n) && (n.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Et(n)) : function(n, t) {
                        for (var e = n - 1; e >= 0; e--)
                            if (!St(t[e])) return !0;
                        return !1
                    }(t, e) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Et(n)))
                },
                Ct = "undefined" != typeof document,
                Tt = Ct ? void 0 : (gt = function() {
                    return En((function() {
                        var n = {};
                        return function(t) {
                            return n[t]
                        }
                    }))
                }, yt = new WeakMap, function(n) {
                    if (yt.has(n)) return yt.get(n);
                    var t = gt();
                    return yt.set(n, t), t
                }),
                Pt = [function(n, t, e, r) {
                    if (!n.return) switch (n.type) {
                        case "decl":
                            n.return = dt(n.value, n.length);
                            break;
                        case "@keyframes":
                            return ht([qn(zn(n.value, "@", "@" + On), n, "")], r);
                        case "rule":
                            if (n.length) return function(n, t) {
                                return n.map(t).join("")
                            }(n.props, (function(t) {
                                switch (function(n, t) {
                                    return (n = /(::plac\w+|:read-\w+)/.exec(n)) ? n[0] : n
                                }(t)) {
                                    case ":read-only":
                                    case ":read-write":
                                        return ht([qn(zn(t, /:(read-\w+)/, ":-moz-$1"), n, "")], r);
                                    case "::placeholder":
                                        return ht([qn(zn(t, /:(plac\w+)/, ":-webkit-input-$1"), n, ""), qn(zn(t, /:(plac\w+)/, ":-moz-$1"), n, ""), qn(zn(t, /:(plac\w+)/, An + "input-$1"), n, "")], r)
                                }
                                return ""
                            }))
                    }
                }],
                At = function(n) {
                    var t = n.key;
                    if ("production" !== i().env.NODE_ENV && !t) throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
                    if (Ct && "css" === t) {
                        var e = document.querySelectorAll("style[data-emotion]:not([data-s])");
                        Array.prototype.forEach.call(e, (function(n) {
                            -1 !== n.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(n), n.setAttribute("data-s", ""))
                        }))
                    }
                    var r = n.stylisPlugins || Pt;
                    if ("production" !== i().env.NODE_ENV && /[^a-z-]/.test(t)) throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
                    var o, a, u = {},
                        s = [];
                    Ct && (o = n.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(n) {
                        for (var t = n.getAttribute("data-emotion").split(" "), e = 1; e < t.length; e++) u[t[e]] = !0;
                        s.push(n)
                    })));
                    var c, l = [wt, xt];
                    if ("production" !== i().env.NODE_ENV && l.push(function(n) {
                            return function(t, e, r) {
                                if ("rule" === t.type) {
                                    var o, i = t.value.match(/(:first|:nth|:nth-last)-child/g);
                                    if (i && !0 !== n.compat) {
                                        var a = e > 0 ? r[e - 1] : null;
                                        if (a && function(n) {
                                                return !!n && "comm" === n.type && n.children.indexOf("emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason") > -1
                                            }((o = a.children).length ? o[o.length - 1] : null)) return;
                                        i.forEach((function(n) {
                                            console.error('The pseudo class "' + n + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + n.split("-child")[0] + '-of-type".')
                                        }))
                                    }
                                }
                            }
                        }({
                            get compat() {
                                return g.compat
                            }
                        }), _t), Ct) {
                        var f, p = [mt, "production" !== i().env.NODE_ENV ? function(n) {
                                n.root || (n.return ? f.insert(n.return) : n.value && "comm" !== n.type && f.insert(n.value + "{}"))
                            } : (c = function(n) {
                                f.insert(n)
                            }, function(n) {
                                n.root || (n = n.return) && c(n)
                            })],
                            d = vt(l.concat(r, p));
                        a = function(n, t, e, r) {
                            f = e, "production" !== i().env.NODE_ENV && void 0 !== t.map && (f = {
                                    insert: function(n) {
                                        e.insert(n + t.map)
                                    }
                                }),
                                function(n) {
                                    ht(st(n), d)
                                }(n ? n + "{" + t.styles + "}" : t.styles), r && (g.inserted[t.name] = !0)
                        }
                    } else {
                        var h = [mt],
                            m = vt(l.concat(r, h)),
                            v = Tt(r)(t);
                        a = function(n, t, e, r) {
                            var o = t.name,
                                a = function(n, t) {
                                    var e = t.name;
                                    return void 0 === v[e] && (v[e] = function(n) {
                                        return ht(st(n), m)
                                    }(n ? n + "{" + t.styles + "}" : t.styles)), v[e]
                                }(n, t);
                            return void 0 === g.compat ? (r && (g.inserted[o] = !0), "development" === i().env.NODE_ENV && void 0 !== t.map ? a + t.map : a) : r ? void(g.inserted[o] = a) : a
                        }
                    }
                    var g = {
                        key: t,
                        sheet: new Pn({
                            key: t,
                            container: o,
                            nonce: n.nonce,
                            speedy: n.speedy,
                            prepend: n.prepend
                        }),
                        nonce: n.nonce,
                        inserted: u,
                        registered: {},
                        insert: a
                    };
                    return g.sheet.hydrate(s), g
                },
                Lt = c.exports,
                Ot = {};
            Ot[Lt.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, Ot[Lt.Memo] = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            };
            var kt = "undefined" != typeof document;

            function Rt(n, t, e) {
                var r = "";
                return e.split(" ").forEach((function(e) {
                    void 0 !== n[e] ? t.push(n[e] + ";") : r += e + " "
                })), r
            }
            var Nt = function(n, t, e) {
                    var r = n.key + "-" + t.name;
                    if ((!1 === e || !1 === kt && void 0 !== n.compat) && void 0 === n.registered[r] && (n.registered[r] = t.styles), void 0 === n.inserted[t.name]) {
                        var o = "",
                            i = t;
                        do {
                            var a = n.insert(t === i ? "." + r : "", i, n.sheet, !0);
                            kt || void 0 === a || (o += a), i = i.next
                        } while (void 0 !== i);
                        if (!kt && 0 !== o.length) return o
                    }
                },
                zt = {
                    animationIterationCount: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                },
                It = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",
                Dt = /[A-Z]|^ms/g,
                Mt = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                jt = function(n) {
                    return 45 === n.charCodeAt(1)
                },
                Bt = function(n) {
                    return null != n && "boolean" != typeof n
                },
                Vt = En((function(n) {
                    return jt(n) ? n : n.replace(Dt, "-$&").toLowerCase()
                })),
                Ft = function(n, t) {
                    switch (n) {
                        case "animation":
                        case "animationName":
                            if ("string" == typeof t) return t.replace(Mt, (function(n, t, e) {
                                return Kt = {
                                    name: t,
                                    styles: e,
                                    next: Kt
                                }, t
                            }))
                    }
                    return 1 === zt[n] || jt(n) || "number" != typeof t || 0 === t ? t : t + "px"
                };
            if ("production" !== i().env.NODE_ENV) {
                var Wt = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,
                    Yt = ["normal", "none", "initial", "inherit", "unset"],
                    Ht = Ft,
                    Ut = /^-ms-/,
                    $t = /-(.)/g,
                    Xt = {};
                Ft = function(n, t) {
                    if ("content" === n && ("string" != typeof t || -1 === Yt.indexOf(t) && !Wt.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || '"' !== t.charAt(0) && "'" !== t.charAt(0)))) throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
                    var e = Ht(n, t);
                    return "" === e || jt(n) || -1 === n.indexOf("-") || void 0 !== Xt[n] || (Xt[n] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + n.replace(Ut, "ms-").replace($t, (function(n, t) {
                        return t.toUpperCase()
                    })) + "?")), e
                }
            }

            function qt(n, t, e) {
                if (null == e) return "";
                if (void 0 !== e.__emotion_styles) {
                    if ("production" !== i().env.NODE_ENV && "NO_COMPONENT_SELECTOR" === e.toString()) throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
                    return e
                }
                switch (typeof e) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === e.anim) return Kt = {
                            name: e.name,
                            styles: e.styles,
                            next: Kt
                        }, e.name;
                        if (void 0 !== e.styles) {
                            var r = e.next;
                            if (void 0 !== r)
                                for (; void 0 !== r;) Kt = {
                                    name: r.name,
                                    styles: r.styles,
                                    next: Kt
                                }, r = r.next;
                            var o = e.styles + ";";
                            return "production" !== i().env.NODE_ENV && void 0 !== e.map && (o += e.map), o
                        }
                        return function(n, t, e) {
                            var r = "";
                            if (Array.isArray(e))
                                for (var o = 0; o < e.length; o++) r += qt(n, t, e[o]) + ";";
                            else
                                for (var a in e) {
                                    var u = e[a];
                                    if ("object" != typeof u) null != t && void 0 !== t[u] ? r += a + "{" + t[u] + "}" : Bt(u) && (r += Vt(a) + ":" + Ft(a, u) + ";");
                                    else {
                                        if ("NO_COMPONENT_SELECTOR" === a && "production" !== i().env.NODE_ENV) throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
                                        if (!Array.isArray(u) || "string" != typeof u[0] || null != t && void 0 !== t[u[0]]) {
                                            var s = qt(n, t, u);
                                            switch (a) {
                                                case "animation":
                                                case "animationName":
                                                    r += Vt(a) + ":" + s + ";";
                                                    break;
                                                default:
                                                    "production" !== i().env.NODE_ENV && "undefined" === a && console.error("You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key)."), r += a + "{" + s + "}"
                                            }
                                        } else
                                            for (var c = 0; c < u.length; c++) Bt(u[c]) && (r += Vt(a) + ":" + Ft(a, u[c]) + ";")
                                    }
                                }
                            return r
                        }(n, t, e);
                    case "function":
                        if (void 0 !== n) {
                            var a = Kt,
                                u = e(n);
                            return Kt = a, qt(n, t, u)
                        }
                        "production" !== i().env.NODE_ENV && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
                        break;
                    case "string":
                        if ("production" !== i().env.NODE_ENV) {
                            var s = [],
                                c = e.replace(Mt, (function(n, t, e) {
                                    var r = "animation" + s.length;
                                    return s.push("const " + r + " = keyframes`" + e.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + r + "}"
                                }));
                            s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + c + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\ncss`" + c + "`")
                        }
                }
                if (null == t) return e;
                var l = t[e];
                return void 0 !== l ? l : e
            }
            var Gt, Kt, Zt = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
            "production" !== i().env.NODE_ENV && (Gt = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
            var Jt = function(n, t, e) {
                    if (1 === n.length && "object" == typeof n[0] && null !== n[0] && void 0 !== n[0].styles) return n[0];
                    var r = !0,
                        o = "";
                    Kt = void 0;
                    var a, u = n[0];
                    null == u || void 0 === u.raw ? (r = !1, o += qt(e, t, u)) : ("production" !== i().env.NODE_ENV && void 0 === u[0] && console.error(It), o += u[0]);
                    for (var s = 1; s < n.length; s++) o += qt(e, t, n[s]), r && ("production" !== i().env.NODE_ENV && void 0 === u[s] && console.error(It), o += u[s]);
                    "production" !== i().env.NODE_ENV && (o = o.replace(Gt, (function(n) {
                        return a = n, ""
                    }))), Zt.lastIndex = 0;
                    for (var c, l = ""; null !== (c = Zt.exec(o));) l += "-" + c[1];
                    var f = function(n) {
                        for (var t, e = 0, r = 0, o = n.length; o >= 4; ++r, o -= 4) t = 1540483477 * (65535 & (t = 255 & n.charCodeAt(r) | (255 & n.charCodeAt(++r)) << 8 | (255 & n.charCodeAt(++r)) << 16 | (255 & n.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), e = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & e) + (59797 * (e >>> 16) << 16);
                        switch (o) {
                            case 3:
                                e ^= (255 & n.charCodeAt(r + 2)) << 16;
                            case 2:
                                e ^= (255 & n.charCodeAt(r + 1)) << 8;
                            case 1:
                                e = 1540483477 * (65535 & (e ^= 255 & n.charCodeAt(r))) + (59797 * (e >>> 16) << 16)
                        }
                        return (((e = 1540483477 * (65535 & (e ^= e >>> 13)) + (59797 * (e >>> 16) << 16)) ^ e >>> 15) >>> 0).toString(36)
                    }(o) + l;
                    return "production" !== i().env.NODE_ENV ? {
                        name: f,
                        styles: o,
                        map: a,
                        next: Kt,
                        toString: function() {
                            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."
                        }
                    } : {
                        name: f,
                        styles: o,
                        next: Kt
                    }
                },
                Qt = "undefined" != typeof document,
                ne = Object.prototype.hasOwnProperty,
                te = (0, r.createContext)("undefined" != typeof HTMLElement ? At({
                    key: "css"
                }) : null);
            "production" !== i().env.NODE_ENV && (te.displayName = "EmotionCacheContext"), te.Provider;
            var ee = function(n) {
                return (0, r.forwardRef)((function(t, e) {
                    var o = (0, r.useContext)(te);
                    return n(t, o, e)
                }))
            };
            Qt || (ee = function(n) {
                return function(t) {
                    var e = (0, r.useContext)(te);
                    return null === e ? (e = At({
                        key: "css"
                    }), (0, r.createElement)(te.Provider, {
                        value: e
                    }, n(t, e))) : n(t, e)
                }
            });
            var re = (0, r.createContext)({});
            "production" !== i().env.NODE_ENV && (re.displayName = "EmotionThemeContext");
            var oe = ee((function(n, t, e) {
                var o = n.css;
                "string" == typeof o && void 0 !== t.registered[o] && (o = t.registered[o]);
                var a = n.__EMOTION_TYPE_PLEASE_DO_NOT_USE__,
                    u = [o],
                    s = "";
                "string" == typeof n.className ? s = Rt(t.registered, u, n.className) : null != n.className && (s = n.className + " ");
                var c = Jt(u, void 0, (0, r.useContext)(re));
                if ("production" !== i().env.NODE_ENV && -1 === c.name.indexOf("-")) {
                    var l = n.__EMOTION_LABEL_PLEASE_DO_NOT_USE__;
                    l && (c = Jt([c, "label:" + l + ";"]))
                }
                var f = Nt(t, c, "string" == typeof a);
                s += t.key + "-" + c.name;
                var p = {};
                for (var d in n) !ne.call(n, d) || "css" === d || "__EMOTION_TYPE_PLEASE_DO_NOT_USE__" === d || "production" !== i().env.NODE_ENV && "__EMOTION_LABEL_PLEASE_DO_NOT_USE__" === d || (p[d] = n[d]);
                p.ref = e, p.className = s;
                var h = (0, r.createElement)(a, p);
                if (!Qt && void 0 !== f) {
                    for (var m, v = c.name, g = c.next; void 0 !== g;) v += " " + g.name, g = g.next;
                    return (0, r.createElement)(r.Fragment, null, (0, r.createElement)("style", ((m = {})["data-emotion"] = t.key + " " + v, m.dangerouslySetInnerHTML = {
                        __html: f
                    }, m.nonce = t.sheet.nonce, m)), h)
                }
                return h
            }));
            "production" !== i().env.NODE_ENV && (oe.displayName = "EmotionCssPropInternal");
            var ie = !1,
                ae = ee((function(n, t) {
                    "production" === i().env.NODE_ENV || ie || !n.className && !n.css || (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), ie = !0);
                    var e = n.styles,
                        o = Jt([e], void 0, (0, r.useContext)(re));
                    if (!Qt) {
                        for (var a, u = o.name, s = o.styles, c = o.next; void 0 !== c;) u += " " + c.name, s += c.styles, c = c.next;
                        var l = !0 === t.compat,
                            f = t.insert("", {
                                name: u,
                                styles: s
                            }, t.sheet, l);
                        return l ? null : (0, r.createElement)("style", ((a = {})["data-emotion"] = t.key + "-global " + u, a.dangerouslySetInnerHTML = {
                            __html: f
                        }, a.nonce = t.sheet.nonce, a))
                    }
                    var p = (0, r.useRef)();
                    return (0, r.useLayoutEffect)((function() {
                        var n = t.key + "-global",
                            e = new Pn({
                                key: n,
                                nonce: t.sheet.nonce,
                                container: t.sheet.container,
                                speedy: t.sheet.isSpeedy
                            }),
                            r = !1,
                            i = document.querySelector('style[data-emotion="' + n + " " + o.name + '"]');
                        return t.sheet.tags.length && (e.before = t.sheet.tags[0]), null !== i && (r = !0, i.setAttribute("data-emotion", n), e.hydrate([i])), p.current = [e, r],
                            function() {
                                e.flush()
                            }
                    }), [t]), (0, r.useLayoutEffect)((function() {
                        var n = p.current,
                            e = n[0];
                        if (n[1]) n[1] = !1;
                        else {
                            if (void 0 !== o.next && Nt(t, o.next, !0), e.tags.length) {
                                var r = e.tags[e.tags.length - 1].nextElementSibling;
                                e.before = r, e.flush()
                            }
                            t.insert("", o, e, !1)
                        }
                    }), [t, o.name]), null
                }));

            function ue() {
                for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
                return Jt(t)
            }
            "production" !== i().env.NODE_ENV && (ae.displayName = "EmotionGlobal");
            var se = function n(t) {
                for (var e = t.length, r = 0, o = ""; r < e; r++) {
                    var a = t[r];
                    if (null != a) {
                        var u = void 0;
                        switch (typeof a) {
                            case "boolean":
                                break;
                            case "object":
                                if (Array.isArray(a)) u = n(a);
                                else
                                    for (var s in "production" !== i().env.NODE_ENV && void 0 !== a.styles && void 0 !== a.name && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), u = "", a) a[s] && s && (u && (u += " "), u += s);
                                break;
                            default:
                                u = a
                        }
                        u && (o && (o += " "), o += u)
                    }
                }
                return o
            };

            function ce(n, t, e) {
                var r = [],
                    o = Rt(n, r, e);
                return r.length < 2 ? e : o + t(r)
            }
            var le = ee((function(n, t) {
                var e, o = "",
                    a = "",
                    u = !1,
                    s = function() {
                        if (u && "production" !== i().env.NODE_ENV) throw new Error("css can only be used during render");
                        for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                        var s = Jt(e, t.registered);
                        if (Qt) Nt(t, s, !1);
                        else {
                            var c = Nt(t, s, !1);
                            void 0 !== c && (o += c)
                        }
                        return Qt || (a += " " + s.name), t.key + "-" + s.name
                    },
                    c = {
                        css: s,
                        cx: function() {
                            if (u && "production" !== i().env.NODE_ENV) throw new Error("cx can only be used during render");
                            for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                            return ce(t.registered, s, se(e))
                        },
                        theme: (0, r.useContext)(re)
                    },
                    l = n.children(c);
                return u = !0, Qt || 0 === o.length ? l : (0, r.createElement)(r.Fragment, null, (0, r.createElement)("style", ((e = {})["data-emotion"] = t.key + " " + a.substring(1), e.dangerouslySetInnerHTML = {
                    __html: o
                }, e.nonce = t.sheet.nonce, e)), l)
            }));
            if ("production" !== i().env.NODE_ENV && (le.displayName = "EmotionClassNames"), "production" !== i().env.NODE_ENV) {
                var fe = "undefined" != typeof document,
                    pe = "undefined" != typeof jest;
                if (fe && !pe) {
                    var de = fe ? window : Tn,
                        he = "__EMOTION_REACT_" + "11.4.1".split(".")[0] + "__";
                    de[he] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), de[he] = !0
                }
            }
            var me = Cn,
                ve = function(n) {
                    return "theme" !== n
                },
                ge = function(n) {
                    return "string" == typeof n && n.charCodeAt(0) > 96 ? me : ve
                },
                ye = function(n, t, e) {
                    var r;
                    if (t) {
                        var o = t.shouldForwardProp;
                        r = n.__emotion_forwardProp && o ? function(t) {
                            return n.__emotion_forwardProp(t) && o(t)
                        } : o
                    }
                    return "function" != typeof r && e && (r = n.__emotion_forwardProp), r
                },
                be = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",
                we = "undefined" != typeof document,
                xe = function n(t, e) {
                    if ("production" !== i().env.NODE_ENV && void 0 === t) throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
                    var o, a, u = t.__emotion_real === t,
                        s = u && t.__emotion_base || t;
                    void 0 !== e && (o = e.label, a = e.target);
                    var c = ye(t, e, u),
                        l = c || ge(s),
                        f = !l("as");
                    return function() {
                        var p = arguments,
                            d = u && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
                        if (void 0 !== o && d.push("label:" + o + ";"), null == p[0] || void 0 === p[0].raw) d.push.apply(d, p);
                        else {
                            "production" !== i().env.NODE_ENV && void 0 === p[0][0] && console.error(be), d.push(p[0][0]);
                            for (var h = p.length, m = 1; m < h; m++) "production" !== i().env.NODE_ENV && void 0 === p[0][m] && console.error(be), d.push(p[m], p[0][m])
                        }
                        var v = ee((function(n, t, e) {
                            var o = f && n.as || s,
                                i = "",
                                u = [],
                                p = n;
                            if (null == n.theme) {
                                for (var h in p = {}, n) p[h] = n[h];
                                p.theme = (0, r.useContext)(re)
                            }
                            "string" == typeof n.className ? i = Rt(t.registered, u, n.className) : null != n.className && (i = n.className + " ");
                            var m = Jt(d.concat(u), t.registered, p),
                                v = Nt(t, m, "string" == typeof o);
                            i += t.key + "-" + m.name, void 0 !== a && (i += " " + a);
                            var g = f && void 0 === c ? ge(o) : l,
                                y = {};
                            for (var b in n) f && "as" === b || g(b) && (y[b] = n[b]);
                            y.className = i, y.ref = e;
                            var w = (0, r.createElement)(o, y);
                            if (!we && void 0 !== v) {
                                for (var x, S = m.name, E = m.next; void 0 !== E;) S += " " + E.name, E = E.next;
                                return (0, r.createElement)(r.Fragment, null, (0, r.createElement)("style", ((x = {})["data-emotion"] = t.key + " " + S, x.dangerouslySetInnerHTML = {
                                    __html: v
                                }, x.nonce = t.sheet.nonce, x)), w)
                            }
                            return w
                        }));
                        return v.displayName = void 0 !== o ? o : "Styled(" + ("string" == typeof s ? s : s.displayName || s.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = s, v.__emotion_styles = d, v.__emotion_forwardProp = c, Object.defineProperty(v, "toString", {
                            value: function() {
                                return void 0 === a && "production" !== i().env.NODE_ENV ? "NO_COMPONENT_SELECTOR" : "." + a
                            }
                        }), v.withComponent = function(t, r) {
                            return n(t, xn({}, e, r, {
                                shouldForwardProp: ye(v, r, !0)
                            })).apply(void 0, d)
                        }, v
                    }
                }.bind();
            ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function(n) {
                xe[n] = xe(n)
            }));
            var Se = function(n, t) {
                return (Se = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(n, t) {
                        n.__proto__ = t
                    } || function(n, t) {
                        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e])
                    })(n, t)
            };

            function Ee(n, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function e() {
                    this.constructor = n
                }
                Se(n, t), n.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e)
            }
            var _e = function() {
                return (_e = Object.assign || function(n) {
                    for (var t, e = 1, r = arguments.length; e < r; e++)
                        for (var o in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
                    return n
                }).apply(this, arguments)
            };

            function Ce(n, t) {
                var e = {};
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
                if (null != n && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(n); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]])
                }
                return e
            }

            function Te(n, t) {
                var e = "function" == typeof Symbol && n[Symbol.iterator];
                if (!e) return n;
                var r, o, i = e.call(n),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (n) {
                    o = {
                        error: n
                    }
                } finally {
                    try {
                        r && !r.done && (e = i.return) && e.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function Pe(n, t, e) {
                if (e || 2 === arguments.length)
                    for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                return n.concat(r || Array.prototype.slice.call(t))
            }
            var Ae = function(n) {
                    return {
                        isEnabled: function(t) {
                            return n.some((function(n) {
                                return !!t[n]
                            }))
                        }
                    }
                },
                Le = {
                    measureLayout: Ae(["layout", "layoutId", "drag", "_layoutResetTransform"]),
                    animation: Ae(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag"]),
                    exit: Ae(["exit"]),
                    drag: Ae(["drag", "dragControls"]),
                    focus: Ae(["whileFocus"]),
                    hover: Ae(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: Ae(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: Ae(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    layoutAnimation: Ae(["layout", "layoutId"])
                },
                Oe = function() {},
                ke = function() {};
            "production" !== i().env.NODE_ENV && (Oe = function(n, t) {
                n || "undefined" == typeof console || console.warn(t)
            }, ke = function(n, t) {
                if (!n) throw new Error(t)
            });
            var Re = (0, r.createContext)({
                    strict: !1
                }),
                Ne = Object.keys(Le),
                ze = Ne.length,
                Ie = (0, r.createContext)({
                    transformPagePoint: function(n) {
                        return n
                    },
                    isStatic: !1
                }),
                De = (0, r.createContext)({}),
                Me = (0, r.createContext)(null);

            function je(n) {
                var t = (0, r.useRef)(null);
                return null === t.current && (t.current = n()), t.current
            }

            function Be() {
                var n = (0, r.useContext)(Me);
                if (null === n) return [!0, null];
                var t = n.isPresent,
                    e = n.onExitComplete,
                    o = n.register,
                    i = We();
                return (0, r.useEffect)((function() {
                    return o(i)
                }), []), !t && e ? [!1, function() {
                    return null == e ? void 0 : e(i)
                }] : [!0]
            }
            var Ve = 0,
                Fe = function() {
                    return Ve++
                },
                We = function() {
                    return je(Fe)
                },
                Ye = (0, r.createContext)(null),
                He = "undefined" != typeof window,
                Ue = He ? r.useLayoutEffect : r.useEffect;

            function $e(n) {
                return "object" == typeof n && Object.prototype.hasOwnProperty.call(n, "current")
            }

            function Xe(n) {
                return Array.isArray(n)
            }

            function qe(n) {
                return "string" == typeof n || Xe(n)
            }

            function Ge(n, t, e, r, o) {
                var i;
                return void 0 === r && (r = {}), void 0 === o && (o = {}), "string" == typeof t && (t = null === (i = n.variants) || void 0 === i ? void 0 : i[t]), "function" == typeof t ? t(null != e ? e : n.custom, r, o) : t
            }

            function Ke(n, t, e) {
                var r = n.getProps();
                return Ge(r, t, null != e ? e : r.custom, function(n) {
                    var t = {};
                    return n.forEachValue((function(n, e) {
                        return t[e] = n.get()
                    })), t
                }(n), function(n) {
                    var t = {};
                    return n.forEachValue((function(n, e) {
                        return t[e] = n.getVelocity()
                    })), t
                }(n))
            }

            function Ze(n) {
                var t;
                return "function" == typeof(null === (t = n.animate) || void 0 === t ? void 0 : t.start) || qe(n.initial) || qe(n.animate) || qe(n.whileHover) || qe(n.whileDrag) || qe(n.whileTap) || qe(n.whileFocus) || qe(n.exit)
            }

            function Je(n) {
                return Boolean(Ze(n) || n.variants)
            }

            function Qe(n) {
                return Array.isArray(n) ? n.join(" ") : n
            }

            function nr(n) {
                var t = n.preloadedFeatures,
                    e = n.createVisualElement,
                    o = n.useRender,
                    a = n.useVisualState,
                    u = n.Component;
                return t && function(n) {
                    for (var t in n) {
                        var e = n[t];
                        null !== e && (Le[t].Component = e)
                    }
                }(t), (0, r.forwardRef)((function(n, s) {
                    var c = (0, r.useContext)(Ie).isStatic,
                        l = null,
                        f = function(n, t) {
                            var e = function(n, t) {
                                    if (Ze(n)) {
                                        var e = n.initial,
                                            r = n.animate;
                                        return {
                                            initial: !1 === e || qe(e) ? e : void 0,
                                            animate: qe(r) ? r : void 0
                                        }
                                    }
                                    return !1 !== n.inherit ? t : {}
                                }(n, (0, r.useContext)(De)),
                                o = e.initial,
                                i = e.animate;
                            return (0, r.useMemo)((function() {
                                return {
                                    initial: o,
                                    animate: i
                                }
                            }), t ? [Qe(o), Qe(i)] : [])
                        }(n, c),
                        p = a(n, c);
                    return !c && He && (f.visualElement = function(n, t, e, o) {
                        var i = (0, r.useContext)(Ie),
                            a = (0, r.useContext)(Re),
                            u = (0, r.useContext)(De).visualElement,
                            s = (0, r.useContext)(Me),
                            c = function(n) {
                                var t = n.layoutId,
                                    e = (0, r.useContext)(Ye);
                                return e && void 0 !== t ? e + "-" + t : t
                            }(e),
                            l = (0, r.useRef)(void 0);
                        o || (o = a.renderer), !l.current && o && (l.current = o(n, {
                            visualState: t,
                            parent: u,
                            props: _e(_e({}, e), {
                                layoutId: c
                            }),
                            presenceId: null == s ? void 0 : s.id,
                            blockInitialAnimation: !1 === (null == s ? void 0 : s.initial)
                        }));
                        var f = l.current;
                        return Ue((function() {
                            var n;
                            f && (f.setProps(_e(_e(_e({}, i), e), {
                                layoutId: c
                            })), f.isPresent = null === (n = s) || n.isPresent, f.isPresenceRoot = !u || u.presenceId !== (null == s ? void 0 : s.id), f.syncRender())
                        })), (0, r.useEffect)((function() {
                            var n;
                            f && (null === (n = f.animationState) || void 0 === n || n.animateChanges())
                        })), Ue((function() {
                            return function() {
                                return null == f ? void 0 : f.notifyUnmount()
                            }
                        }), []), f
                    }(u, p, n, e), l = function(n, t, e) {
                        var o = [],
                            a = (0, r.useContext)(Re);
                        if (!t) return null;
                        "production" !== i().env.NODE_ENV && e && a.strict && ke(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                        for (var u = 0; u < ze; u++) {
                            var s = Ne[u],
                                c = Le[s],
                                l = c.isEnabled,
                                f = c.Component;
                            l(n) && f && o.push(r.createElement(f, _e({
                                key: s
                            }, n, {
                                visualElement: t
                            })))
                        }
                        return o
                    }(n, f.visualElement, t)), r.createElement(r.Fragment, null, r.createElement(De.Provider, {
                        value: f
                    }, o(u, n, function(n, t, e) {
                        return (0, r.useCallback)((function(r) {
                            var o;
                            r && (null === (o = n.mount) || void 0 === o || o.call(n, r)), t && (r ? t.mount(r) : t.unmount()), e && ("function" == typeof e ? e(r) : $e(e) && (e.current = r))
                        }), [t])
                    }(p, f.visualElement, s), p, c)), l)
                }))
            }
            var tr = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

            function er(n) {
                return "string" == typeof n && !n.includes("-") && !!(tr.indexOf(n) > -1 || /[A-Z]/.test(n))
            }
            var rr = {},
                or = ["", "X", "Y", "Z"],
                ir = ["transformPerspective", "x", "y", "z"];

            function ar(n, t) {
                return ir.indexOf(n) - ir.indexOf(t)
            }["translate", "scale", "rotate", "skew"].forEach((function(n) {
                return or.forEach((function(t) {
                    return ir.push(n + t)
                }))
            }));
            var ur = new Set(ir);

            function sr(n) {
                return ur.has(n)
            }
            var cr = new Set(["originX", "originY", "originZ"]);

            function lr(n) {
                return cr.has(n)
            }

            function fr(n, t) {
                var e = t.layout,
                    r = t.layoutId;
                return sr(n) || lr(n) || (e || void 0 !== r) && (!!rr[n] || "opacity" === n)
            }
            var pr = function(n) {
                    return null !== n && "object" == typeof n && n.getVelocity
                },
                dr = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                };

            function hr(n) {
                return n.startsWith("--")
            }
            var mr = function(n, t) {
                    return t && "number" == typeof n ? t.transform(n) : n
                },
                vr = function(n, t) {
                    return function(e) {
                        return Math.max(Math.min(e, t), n)
                    }
                },
                gr = function(n) {
                    return n % 1 ? Number(n.toFixed(5)) : n
                },
                yr = /(-)?([\d]*\.?[\d])+/g,
                br = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
                wr = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

            function xr(n) {
                return "string" == typeof n
            }
            var Sr = {
                    test: function(n) {
                        return "number" == typeof n
                    },
                    parse: parseFloat,
                    transform: function(n) {
                        return n
                    }
                },
                Er = _e(_e({}, Sr), {
                    transform: vr(0, 1)
                }),
                _r = _e(_e({}, Sr), {
                    default: 1
                }),
                Cr = function(n) {
                    return {
                        test: function(t) {
                            return xr(t) && t.endsWith(n) && 1 === t.split(" ").length
                        },
                        parse: parseFloat,
                        transform: function(t) {
                            return "" + t + n
                        }
                    }
                },
                Tr = Cr("deg"),
                Pr = Cr("%"),
                Ar = Cr("px"),
                Lr = Cr("vh"),
                Or = Cr("vw"),
                kr = _e(_e({}, Pr), {
                    parse: function(n) {
                        return Pr.parse(n) / 100
                    },
                    transform: function(n) {
                        return Pr.transform(100 * n)
                    }
                }),
                Rr = function(n, t) {
                    return function(e) {
                        return Boolean(xr(e) && wr.test(e) && e.startsWith(n) || t && Object.prototype.hasOwnProperty.call(e, t))
                    }
                },
                Nr = function(n, t, e) {
                    return function(r) {
                        var o;
                        if (!xr(r)) return r;
                        var i = r.match(yr),
                            a = i[0],
                            u = i[1],
                            s = i[2],
                            c = i[3];
                        return (o = {})[n] = parseFloat(a), o[t] = parseFloat(u), o[e] = parseFloat(s), o.alpha = void 0 !== c ? parseFloat(c) : 1, o
                    }
                },
                zr = {
                    test: Rr("hsl", "hue"),
                    parse: Nr("hue", "saturation", "lightness"),
                    transform: function(n) {
                        var t = n.hue,
                            e = n.saturation,
                            r = n.lightness,
                            o = n.alpha,
                            i = void 0 === o ? 1 : o;
                        return "hsla(" + Math.round(t) + ", " + Pr.transform(gr(e)) + ", " + Pr.transform(gr(r)) + ", " + gr(Er.transform(i)) + ")"
                    }
                },
                Ir = vr(0, 255),
                Dr = _e(_e({}, Sr), {
                    transform: function(n) {
                        return Math.round(Ir(n))
                    }
                }),
                Mr = {
                    test: Rr("rgb", "red"),
                    parse: Nr("red", "green", "blue"),
                    transform: function(n) {
                        var t = n.red,
                            e = n.green,
                            r = n.blue,
                            o = n.alpha,
                            i = void 0 === o ? 1 : o;
                        return "rgba(" + Dr.transform(t) + ", " + Dr.transform(e) + ", " + Dr.transform(r) + ", " + gr(Er.transform(i)) + ")"
                    }
                },
                jr = {
                    test: Rr("#"),
                    parse: function(n) {
                        var t = "",
                            e = "",
                            r = "",
                            o = "";
                        return n.length > 5 ? (t = n.substr(1, 2), e = n.substr(3, 2), r = n.substr(5, 2), o = n.substr(7, 2)) : (t = n.substr(1, 1), e = n.substr(2, 1), r = n.substr(3, 1), o = n.substr(4, 1), t += t, e += e, r += r, o += o), {
                            red: parseInt(t, 16),
                            green: parseInt(e, 16),
                            blue: parseInt(r, 16),
                            alpha: o ? parseInt(o, 16) / 255 : 1
                        }
                    },
                    transform: Mr.transform
                },
                Br = {
                    test: function(n) {
                        return Mr.test(n) || jr.test(n) || zr.test(n)
                    },
                    parse: function(n) {
                        return Mr.test(n) ? Mr.parse(n) : zr.test(n) ? zr.parse(n) : jr.parse(n)
                    },
                    transform: function(n) {
                        return xr(n) ? n : n.hasOwnProperty("red") ? Mr.transform(n) : zr.transform(n)
                    }
                };

            function Vr(n) {
                var t = [],
                    e = 0,
                    r = n.match(br);
                r && (e = r.length, n = n.replace(br, "${c}"), t.push.apply(t, r.map(Br.parse)));
                var o = n.match(yr);
                return o && (n = n.replace(yr, "${n}"), t.push.apply(t, o.map(Sr.parse))), {
                    values: t,
                    numColors: e,
                    tokenised: n
                }
            }

            function Fr(n) {
                return Vr(n).values
            }

            function Wr(n) {
                var t = Vr(n),
                    e = t.values,
                    r = t.numColors,
                    o = t.tokenised,
                    i = e.length;
                return function(n) {
                    for (var t = o, e = 0; e < i; e++) t = t.replace(e < r ? "${c}" : "${n}", e < r ? Br.transform(n[e]) : gr(n[e]));
                    return t
                }
            }
            var Yr = function(n) {
                    return "number" == typeof n ? 0 : n
                },
                Hr = {
                    test: function(n) {
                        var t, e, r, o;
                        return isNaN(n) && xr(n) && (null !== (e = null === (t = n.match(yr)) || void 0 === t ? void 0 : t.length) && void 0 !== e ? e : 0) + (null !== (o = null === (r = n.match(br)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
                    },
                    parse: Fr,
                    createTransformer: Wr,
                    getAnimatableNone: function(n) {
                        var t = Fr(n);
                        return Wr(n)(t.map(Yr))
                    }
                },
                Ur = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function $r(n) {
                var t = n.slice(0, -1).split("("),
                    e = t[0],
                    r = t[1];
                if ("drop-shadow" === e) return n;
                var o = (r.match(yr) || [])[0];
                if (!o) return n;
                var i = r.replace(o, ""),
                    a = Ur.has(e) ? 1 : 0;
                return o !== r && (a *= 100), e + "(" + a + i + ")"
            }
            var Xr = /([a-z-]*)\(.*?\)/g,
                qr = _e(_e({}, Hr), {
                    getAnimatableNone: function(n) {
                        var t = n.match(Xr);
                        return t ? t.map($r).join(" ") : n
                    }
                }),
                Gr = _e(_e({}, Sr), {
                    transform: Math.round
                }),
                Kr = {
                    borderWidth: Ar,
                    borderTopWidth: Ar,
                    borderRightWidth: Ar,
                    borderBottomWidth: Ar,
                    borderLeftWidth: Ar,
                    borderRadius: Ar,
                    radius: Ar,
                    borderTopLeftRadius: Ar,
                    borderTopRightRadius: Ar,
                    borderBottomRightRadius: Ar,
                    borderBottomLeftRadius: Ar,
                    width: Ar,
                    maxWidth: Ar,
                    height: Ar,
                    maxHeight: Ar,
                    size: Ar,
                    top: Ar,
                    right: Ar,
                    bottom: Ar,
                    left: Ar,
                    padding: Ar,
                    paddingTop: Ar,
                    paddingRight: Ar,
                    paddingBottom: Ar,
                    paddingLeft: Ar,
                    margin: Ar,
                    marginTop: Ar,
                    marginRight: Ar,
                    marginBottom: Ar,
                    marginLeft: Ar,
                    rotate: Tr,
                    rotateX: Tr,
                    rotateY: Tr,
                    rotateZ: Tr,
                    scale: _r,
                    scaleX: _r,
                    scaleY: _r,
                    scaleZ: _r,
                    skew: Tr,
                    skewX: Tr,
                    skewY: Tr,
                    distance: Ar,
                    translateX: Ar,
                    translateY: Ar,
                    translateZ: Ar,
                    x: Ar,
                    y: Ar,
                    z: Ar,
                    perspective: Ar,
                    transformPerspective: Ar,
                    opacity: Er,
                    originX: kr,
                    originY: kr,
                    originZ: Ar,
                    zIndex: Gr,
                    fillOpacity: Er,
                    strokeOpacity: Er,
                    numOctaves: Gr
                };

            function Zr(n, t, e, r, o, i, a, u) {
                var s, c = n.style,
                    l = n.vars,
                    f = n.transform,
                    p = n.transformKeys,
                    d = n.transformOrigin;
                p.length = 0;
                var h = !1,
                    m = !1,
                    v = !0;
                for (var g in t) {
                    var y = t[g];
                    if (hr(g)) l[g] = y;
                    else {
                        var b = Kr[g],
                            w = mr(y, b);
                        if (sr(g)) {
                            if (h = !0, f[g] = w, p.push(g), !v) continue;
                            y !== (null !== (s = b.default) && void 0 !== s ? s : 0) && (v = !1)
                        } else if (lr(g)) d[g] = w, m = !0;
                        else if ((null == e ? void 0 : e.isHydrated) && (null == r ? void 0 : r.isHydrated) && rr[g]) {
                            var x = rr[g].process(y, r, e),
                                S = rr[g].applyTo;
                            if (S)
                                for (var E = S.length, _ = 0; _ < E; _++) c[S[_]] = x;
                            else c[g] = x
                        } else c[g] = w
                    }
                }
                r && e && a && u ? (c.transform = a(r.deltaFinal, r.treeScale, h ? f : void 0), i && (c.transform = i(f, c.transform)), c.transformOrigin = u(r)) : (h && (c.transform = function(n, t, e, r) {
                    var o = n.transform,
                        i = n.transformKeys,
                        a = t.enableHardwareAcceleration,
                        u = void 0 === a || a,
                        s = t.allowTransformNone,
                        c = void 0 === s || s,
                        l = "";
                    i.sort(ar);
                    for (var f = !1, p = i.length, d = 0; d < p; d++) {
                        var h = i[d];
                        l += (dr[h] || h) + "(" + o[h] + ") ", "z" === h && (f = !0)
                    }
                    return !f && u ? l += "translateZ(0)" : l = l.trim(), r ? l = r(o, e ? "" : l) : c && e && (l = "none"), l
                }(n, o, v, i)), m && (c.transformOrigin = function(n) {
                    var t = n.originX,
                        e = void 0 === t ? "50%" : t,
                        r = n.originY,
                        o = void 0 === r ? "50%" : r,
                        i = n.originZ;
                    return e + " " + o + " " + (void 0 === i ? 0 : i)
                }(d)))
            }

            function Jr(n, t, e) {
                for (var r in t) pr(t[r]) || fr(r, e) || (n[r] = t[r])
            }

            function Qr(n, t, e) {
                var o = {},
                    i = function(n, t, e) {
                        var o = {};
                        return Jr(o, n.style || {}, n), Object.assign(o, function(n, t, e) {
                            var o = n.transformTemplate;
                            return (0, r.useMemo)((function() {
                                var n = {
                                    style: {},
                                    transform: {},
                                    transformKeys: [],
                                    transformOrigin: {},
                                    vars: {}
                                };
                                Zr(n, t, void 0, void 0, {
                                    enableHardwareAcceleration: !e
                                }, o);
                                var r = n.style;
                                return _e(_e({}, n.vars), r)
                            }), [t])
                        }(n, t, e)), n.transformValues && (o = n.transformValues(o)), o
                    }(n, t, e);
                return Boolean(n.drag) && (o.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === n.drag ? "none" : "pan-" + ("x" === n.drag ? "y" : "x")), o.style = i, o
            }
            var no = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "_layoutResetTransform", "onLayoutAnimationComplete", "onViewportBoxUpdate", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover"]);

            function to(n) {
                return no.has(n)
            }
            var eo = function(n) {
                return !to(n)
            };
            try {
                var ro = e(6816).Z;
                eo = function(n) {
                    return n.startsWith("on") ? !to(n) : ro(n)
                }
            } catch (Ao) {}

            function oo(n, t, e) {
                return "string" == typeof n ? n : Ar.transform(t + e * n)
            }
            var io = function(n, t) {
                    return Ar.transform(n * t)
                },
                ao = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                uo = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function so(n, t, e, r, o, i, a, u) {
                var s = t.attrX,
                    c = t.attrY,
                    l = t.originX,
                    f = t.originY,
                    p = t.pathLength,
                    d = t.pathSpacing,
                    h = void 0 === d ? 1 : d,
                    m = t.pathOffset,
                    v = void 0 === m ? 0 : m;
                Zr(n, Ce(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), e, r, o, i, a, u), n.attrs = n.style, n.style = {};
                var g = n.attrs,
                    y = n.style,
                    b = n.dimensions,
                    w = n.totalPathLength;
                g.transform && (b && (y.transform = g.transform), delete g.transform), b && (void 0 !== l || void 0 !== f || y.transform) && (y.transformOrigin = function(n, t, e) {
                    return oo(t, n.x, n.width) + " " + oo(e, n.y, n.height)
                }(b, void 0 !== l ? l : .5, void 0 !== f ? f : .5)), void 0 !== s && (g.x = s), void 0 !== c && (g.y = c), void 0 !== w && void 0 !== p && function(n, t, e, r, o, i) {
                    void 0 === r && (r = 1), void 0 === o && (o = 0), void 0 === i && (i = !0);
                    var a = i ? ao : uo;
                    n[a.offset] = io(-o, t);
                    var u = io(e, t),
                        s = io(r, t);
                    n[a.array] = u + " " + s
                }(g, w, p, h, v, !1)
            }
            var co = function() {
                return _e(_e({}, {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                }), {
                    attrs: {}
                })
            };

            function lo(n, t) {
                var e = (0, r.useMemo)((function() {
                    var e = co();
                    return so(e, t, void 0, void 0, {
                        enableHardwareAcceleration: !1
                    }, n.transformTemplate), _e(_e({}, e.attrs), {
                        style: _e({}, e.style)
                    })
                }), [t]);
                if (n.style) {
                    var o = {};
                    Jr(o, n.style, n), e.style = _e(_e({}, o), e.style)
                }
                return e
            }

            function fo(n) {
                return void 0 === n && (n = !1),
                    function(t, e, o, i, a) {
                        var u = i.latestValues,
                            s = (er(t) ? lo : Qr)(e, u, a),
                            c = function(n, t, e) {
                                var r = {};
                                for (var o in n)(eo(o) || !0 === e && to(o) || !t && !to(o)) && (r[o] = n[o]);
                                return r
                            }(e, "string" == typeof t, n),
                            l = _e(_e(_e({}, c), s), {
                                ref: o
                            });
                        return (0, r.createElement)(t, l)
                    }
            }
            var po = /([a-z])([A-Z])/g,
                ho = function(n) {
                    return n.replace(po, "$1-$2").toLowerCase()
                };

            function mo(n, t) {
                var e = t.style,
                    r = t.vars;
                for (var o in Object.assign(n.style, e), r) n.style.setProperty(o, r[o])
            }
            var vo = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform"]);

            function go(n, t) {
                for (var e in mo(n, t), t.attrs) n.setAttribute(vo.has(e) ? e : ho(e), t.attrs[e])
            }

            function yo(n) {
                var t = n.style,
                    e = {};
                for (var r in t)(pr(t[r]) || fr(r, n)) && (e[r] = t[r]);
                return e
            }

            function bo(n) {
                var t = yo(n);
                for (var e in n) pr(n[e]) && (t["x" === e || "y" === e ? "attr" + e.toUpperCase() : e] = n[e]);
                return t
            }

            function wo(n) {
                return "object" == typeof n && "function" == typeof n.start
            }
            var xo = function(n) {
                    return Array.isArray(n)
                },
                So = function(n) {
                    return xo(n) ? n[n.length - 1] || 0 : n
                };

            function Eo(n) {
                var t = pr(n) ? n.get() : n;
                return function(n) {
                    return Boolean(n && "object" == typeof n && n.mix && n.toValue)
                }(t) ? t.toValue() : t
            }

            function _o(n, t, e, r) {
                var o = n.scrapeMotionValuesFromProps,
                    i = n.createRenderState,
                    a = n.onMount,
                    u = {
                        latestValues: To(t, e, r, o),
                        renderState: i()
                    };
                return a && (u.mount = function(n) {
                    return a(t, n, u)
                }), u
            }
            var Co = function(n) {
                return function(t, e) {
                    var o = (0, r.useContext)(De),
                        i = (0, r.useContext)(Me);
                    return e ? _o(n, t, o, i) : je((function() {
                        return _o(n, t, o, i)
                    }))
                }
            };

            function To(n, t, e, r) {
                var o = {},
                    i = !1 === (null == e ? void 0 : e.initial),
                    a = r(n);
                for (var u in a) o[u] = Eo(a[u]);
                var s = n.initial,
                    c = n.animate,
                    l = Ze(n),
                    f = Je(n);
                t && f && !l && !1 !== n.inherit && (null != s || (s = t.initial), null != c || (c = t.animate));
                var p = i || !1 === s ? c : s;
                return p && "boolean" != typeof p && !wo(p) && (Array.isArray(p) ? p : [p]).forEach((function(t) {
                    var e = Ge(n, t);
                    if (e) {
                        var r = e.transitionEnd;
                        e.transition;
                        var i = Ce(e, ["transitionEnd", "transition"]);
                        for (var a in i) o[a] = i[a];
                        for (var a in r) o[a] = r[a]
                    }
                })), o
            }
            var Po, Ao, Lo = {
                    useVisualState: Co({
                        scrapeMotionValuesFromProps: bo,
                        createRenderState: co,
                        onMount: function(n, t, e) {
                            var r = e.renderState,
                                o = e.latestValues;
                            try {
                                r.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                            } catch (n) {
                                r.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            "path" === t.tagName && (r.totalPathLength = t.getTotalLength()), so(r, o, void 0, void 0, {
                                enableHardwareAcceleration: !1
                            }, n.transformTemplate), go(t, r)
                        }
                    })
                },
                Oo = {
                    useVisualState: Co({
                        scrapeMotionValuesFromProps: yo,
                        createRenderState: function() {
                            return {
                                style: {},
                                transform: {},
                                transformKeys: [],
                                transformOrigin: {},
                                vars: {}
                            }
                        }
                    })
                };

            function ko(n, t, e, r) {
                return n.addEventListener(t, e, r),
                    function() {
                        return n.removeEventListener(t, e, r)
                    }
            }

            function Ro(n, t, e, o) {
                (0, r.useEffect)((function() {
                    var r = n.current;
                    if (e && r) return ko(r, t, e, o)
                }), [n, t, e, o])
            }

            function No(n) {
                return "undefined" != typeof PointerEvent && n instanceof PointerEvent ? !("mouse" !== n.pointerType) : n instanceof MouseEvent
            }

            function zo(n) {
                return !!n.touches
            }(Ao = Po || (Po = {})).Animate = "animate", Ao.Hover = "whileHover", Ao.Tap = "whileTap", Ao.Drag = "whileDrag", Ao.Focus = "whileFocus", Ao.Exit = "exit";
            var Io = {
                pageX: 0,
                pageY: 0
            };

            function Do(n, t) {
                void 0 === t && (t = "page");
                var e = n.touches[0] || n.changedTouches[0] || Io;
                return {
                    x: e[t + "X"],
                    y: e[t + "Y"]
                }
            }

            function Mo(n, t) {
                return void 0 === t && (t = "page"), {
                    x: n[t + "X"],
                    y: n[t + "Y"]
                }
            }

            function jo(n, t) {
                return void 0 === t && (t = "page"), {
                    point: zo(n) ? Do(n, t) : Mo(n, t)
                }
            }
            var Bo = function(n, t) {
                    void 0 === t && (t = !1);
                    var e, r = function(t) {
                        return n(t, jo(t))
                    };
                    return t ? (e = r, function(n) {
                        var t = n instanceof MouseEvent;
                        (!t || t && 0 === n.button) && e(n)
                    }) : r
                },
                Vo = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                Fo = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function Wo(n) {
                return He && null === window.onpointerdown ? n : He && null === window.ontouchstart ? Fo[n] : He && null === window.onmousedown ? Vo[n] : n
            }

            function Yo(n, t, e, r) {
                return ko(n, Wo(t), Bo(e, "pointerdown" === t), r)
            }

            function Ho(n, t, e, r) {
                return Ro(n, Wo(t), e && Bo(e, "pointerdown" === t), r)
            }

            function Uo(n) {
                var t = null;
                return function() {
                    return null === t && (t = n, function() {
                        t = null
                    })
                }
            }
            var $o = Uo("dragHorizontal"),
                Xo = Uo("dragVertical");

            function qo(n) {
                var t = !1;
                if ("y" === n) t = Xo();
                else if ("x" === n) t = $o();
                else {
                    var e = $o(),
                        r = Xo();
                    e && r ? t = function() {
                        e(), r()
                    } : (e && e(), r && r())
                }
                return t
            }

            function Go() {
                var n = qo(!0);
                return !n || (n(), !1)
            }

            function Ko(n, t, e) {
                return function(r, o) {
                    var i;
                    No(r) && !Go() && (null == e || e(r, o), null === (i = n.animationState) || void 0 === i || i.setActive(Po.Hover, t))
                }
            }
            var Zo = function(n, t) {
                return !!t && (n === t || Zo(n, t.parentElement))
            };

            function Jo(n) {
                return (0, r.useEffect)((function() {
                    return function() {
                        return n()
                    }
                }), [])
            }
            var Qo = function(n, t, e) {
                return Math.min(Math.max(e, n), t)
            };

            function ni(n, t) {
                return n * Math.sqrt(1 - t * t)
            }
            var ti = ["duration", "bounce"],
                ei = ["stiffness", "damping", "mass"];

            function ri(n, t) {
                return t.some((function(t) {
                    return void 0 !== n[t]
                }))
            }

            function oi(n) {
                var t = n.from,
                    e = void 0 === t ? 0 : t,
                    r = n.to,
                    o = void 0 === r ? 1 : r,
                    i = n.restSpeed,
                    a = void 0 === i ? 2 : i,
                    u = n.restDelta,
                    s = Ce(n, ["from", "to", "restSpeed", "restDelta"]),
                    c = {
                        done: !1,
                        value: e
                    },
                    l = function(n) {
                        var t = _e({
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1
                        }, n);
                        if (!ri(n, ei) && ri(n, ti)) {
                            var e = function(n) {
                                var t, e, r = n.duration,
                                    o = void 0 === r ? 800 : r,
                                    i = n.bounce,
                                    a = void 0 === i ? .25 : i,
                                    u = n.velocity,
                                    s = void 0 === u ? 0 : u,
                                    c = n.mass,
                                    l = void 0 === c ? 1 : c;
                                Oe(o <= 1e4, "Spring duration must be 10 seconds or less");
                                var f = 1 - a;
                                f = Qo(.05, 1, f), o = Qo(.01, 10, o / 1e3), f < 1 ? (t = function(n) {
                                    var t = n * f,
                                        e = t * o;
                                    return .001 - (t - s) / ni(n, f) * Math.exp(-e)
                                }, e = function(n) {
                                    var e = n * f * o,
                                        r = e * s + s,
                                        i = Math.pow(f, 2) * Math.pow(n, 2) * o,
                                        a = Math.exp(-e),
                                        u = ni(Math.pow(n, 2), f);
                                    return (.001 - t(n) > 0 ? -1 : 1) * ((r - i) * a) / u
                                }) : (t = function(n) {
                                    return Math.exp(-n * o) * ((n - s) * o + 1) - .001
                                }, e = function(n) {
                                    return Math.exp(-n * o) * (o * o * (s - n))
                                });
                                var p = function(n, t, e) {
                                    for (var r = e, o = 1; o < 12; o++) r -= n(r) / t(r);
                                    return r
                                }(t, e, 5 / o);
                                if (o *= 1e3, isNaN(p)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: o
                                };
                                var d = Math.pow(p, 2) * l;
                                return {
                                    stiffness: d,
                                    damping: 2 * f * Math.sqrt(l * d),
                                    duration: o
                                }
                            }(n);
                            (t = _e(_e(_e({}, t), e), {
                                velocity: 0,
                                mass: 1
                            })).isResolvedFromDuration = !0
                        }
                        return t
                    }(s),
                    f = l.stiffness,
                    p = l.damping,
                    d = l.mass,
                    h = l.velocity,
                    m = l.duration,
                    v = l.isResolvedFromDuration,
                    g = ii,
                    y = ii;

                function b() {
                    var n = h ? -h / 1e3 : 0,
                        t = o - e,
                        r = p / (2 * Math.sqrt(f * d)),
                        i = Math.sqrt(f / d) / 1e3;
                    if (null != u || (u = Math.abs(o - e) <= 1 ? .01 : .4), r < 1) {
                        var a = ni(i, r);
                        g = function(e) {
                            var u = Math.exp(-r * i * e);
                            return o - u * ((n + r * i * t) / a * Math.sin(a * e) + t * Math.cos(a * e))
                        }, y = function(e) {
                            var o = Math.exp(-r * i * e);
                            return r * i * o * (Math.sin(a * e) * (n + r * i * t) / a + t * Math.cos(a * e)) - o * (Math.cos(a * e) * (n + r * i * t) - a * t * Math.sin(a * e))
                        }
                    } else if (1 === r) g = function(e) {
                        return o - Math.exp(-i * e) * (t + (n + i * t) * e)
                    };
                    else {
                        var s = i * Math.sqrt(r * r - 1);
                        g = function(e) {
                            var a = Math.exp(-r * i * e),
                                u = Math.min(s * e, 300);
                            return o - a * ((n + r * i * t) * Math.sinh(u) + s * t * Math.cosh(u)) / s
                        }
                    }
                }
                return b(), {
                    next: function(n) {
                        var t = g(n);
                        if (v) c.done = n >= m;
                        else {
                            var e = 1e3 * y(n),
                                r = Math.abs(e) <= a,
                                i = Math.abs(o - t) <= u;
                            c.done = r && i
                        }
                        return c.value = c.done ? o : t, c
                    },
                    flipTarget: function() {
                        var n;
                        h = -h, e = (n = [o, e])[0], o = n[1], b()
                    }
                }
            }
            oi.needsInterpolation = function(n, t) {
                return "string" == typeof n || "string" == typeof t
            };
            var ii = function(n) {
                    return 0
                },
                ai = function(n, t, e) {
                    var r = t - n;
                    return 0 === r ? 1 : (e - n) / r
                },
                ui = function(n, t, e) {
                    return -e * n + e * t + n
                },
                si = function(n, t, e) {
                    var r = n * n,
                        o = t * t;
                    return Math.sqrt(Math.max(0, e * (o - r) + r))
                },
                ci = [jr, Mr, zr],
                li = function(n) {
                    return ci.find((function(t) {
                        return t.test(n)
                    }))
                },
                fi = function(n) {
                    return "'" + n + "' is not an animatable color. Use the equivalent color code instead."
                },
                pi = function(n, t) {
                    var e = li(n),
                        r = li(t);
                    ke(!!e, fi(n)), ke(!!r, fi(t)), ke(e.transform === r.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
                    var o = e.parse(n),
                        i = r.parse(t),
                        a = _e({}, o),
                        u = e === zr ? ui : si;
                    return function(n) {
                        for (var t in a) "alpha" !== t && (a[t] = u(o[t], i[t], n));
                        return a.alpha = ui(o.alpha, i.alpha, n), e.transform(a)
                    }
                },
                di = function(n) {
                    return "number" == typeof n
                },
                hi = function(n, t) {
                    return function(e) {
                        return t(n(e))
                    }
                },
                mi = function() {
                    for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                    return n.reduce(hi)
                };

            function vi(n, t) {
                return di(n) ? function(e) {
                    return ui(n, t, e)
                } : Br.test(n) ? pi(n, t) : wi(n, t)
            }
            var gi = function(n, t) {
                    var e = Pe([], n),
                        r = e.length,
                        o = n.map((function(n, e) {
                            return vi(n, t[e])
                        }));
                    return function(n) {
                        for (var t = 0; t < r; t++) e[t] = o[t](n);
                        return e
                    }
                },
                yi = function(n, t) {
                    var e = _e(_e({}, n), t),
                        r = {};
                    for (var o in e) void 0 !== n[o] && void 0 !== t[o] && (r[o] = vi(n[o], t[o]));
                    return function(n) {
                        for (var t in r) e[t] = r[t](n);
                        return e
                    }
                };

            function bi(n) {
                for (var t = Hr.parse(n), e = t.length, r = 0, o = 0, i = 0, a = 0; a < e; a++) r || "number" == typeof t[a] ? r++ : void 0 !== t[a].hue ? i++ : o++;
                return {
                    parsed: t,
                    numNumbers: r,
                    numRGB: o,
                    numHSL: i
                }
            }
            var wi = function(n, t) {
                    var e = Hr.createTransformer(t),
                        r = bi(n),
                        o = bi(t);
                    return ke(r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers, "Complex values '" + n + "' and '" + t + "' too different to mix. Ensure all colors are of the same type."), mi(gi(r.parsed, o.parsed), e)
                },
                xi = function(n, t) {
                    return function(e) {
                        return ui(n, t, e)
                    }
                };

            function Si(n, t, e) {
                var r = void 0 === e ? {} : e,
                    o = r.clamp,
                    i = void 0 === o || o,
                    a = r.ease,
                    u = r.mixer,
                    s = n.length;
                ke(s === t.length, "Both input and output ranges must be the same length"), ke(!a || !Array.isArray(a) || a.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), n[0] > n[s - 1] && (n = [].concat(n), t = [].concat(t), n.reverse(), t.reverse());
                var c = function(n, t, e) {
                        for (var r = [], o = e || function(n) {
                                return "number" == typeof n ? xi : "string" == typeof n ? Br.test(n) ? pi : wi : Array.isArray(n) ? gi : "object" == typeof n ? yi : void 0
                            }(n[0]), i = n.length - 1, a = 0; a < i; a++) {
                            var u = o(n[a], n[a + 1]);
                            if (t) {
                                var s = Array.isArray(t) ? t[a] : t;
                                u = mi(s, u)
                            }
                            r.push(u)
                        }
                        return r
                    }(t, a, u),
                    l = 2 === s ? function(n, t) {
                        var e = n[0],
                            r = n[1],
                            o = t[0];
                        return function(n) {
                            return o(ai(e, r, n))
                        }
                    }(n, c) : function(n, t) {
                        var e = n.length,
                            r = e - 1;
                        return function(o) {
                            var i = 0,
                                a = !1;
                            if (o <= n[0] ? a = !0 : o >= n[r] && (i = r - 1, a = !0), !a) {
                                for (var u = 1; u < e && !(n[u] > o || u === r); u++);
                                i = u - 1
                            }
                            var s = ai(n[i], n[i + 1], o);
                            return t[i](s)
                        }
                    }(n, c);
                return i ? function(t) {
                    return l(Qo(n[0], n[s - 1], t))
                } : l
            }
            var Ei = function(n) {
                    return function(t) {
                        return 1 - n(1 - t)
                    }
                },
                _i = function(n) {
                    return function(t) {
                        return t <= .5 ? n(2 * t) / 2 : (2 - n(2 * (1 - t))) / 2
                    }
                },
                Ci = function(n) {
                    return function(t) {
                        return t * t * ((n + 1) * t - n)
                    }
                },
                Ti = function(n) {
                    return n
                },
                Pi = (2, function(n) {
                    return Math.pow(n, 2)
                }),
                Ai = Ei(Pi),
                Li = _i(Pi),
                Oi = function(n) {
                    return 1 - Math.sin(Math.acos(n))
                },
                ki = Ei(Oi),
                Ri = _i(ki),
                Ni = Ci(1.525),
                zi = Ei(Ni),
                Ii = _i(Ni),
                Di = function(n) {
                    var t = Ci(1.525);
                    return function(n) {
                        return (n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
                    }
                }(),
                Mi = function(n) {
                    if (1 === n || 0 === n) return n;
                    var t = n * n;
                    return n < .36363636363636365 ? 7.5625 * t : n < .7272727272727273 ? 9.075 * t - 9.9 * n + 3.4 : n < .9 ? 12.066481994459833 * t - 19.63545706371191 * n + 8.898060941828255 : 10.8 * n * n - 20.52 * n + 10.72
                },
                ji = Ei(Mi);

            function Bi(n, t) {
                return n.map((function() {
                    return t || Li
                })).splice(0, n.length - 1)
            }

            function Vi(n) {
                var t = n.from,
                    e = void 0 === t ? 0 : t,
                    r = n.to,
                    o = void 0 === r ? 1 : r,
                    i = n.ease,
                    a = n.offset,
                    u = n.duration,
                    s = void 0 === u ? 300 : u,
                    c = {
                        done: !1,
                        value: e
                    },
                    l = Array.isArray(o) ? o : [e, o],
                    f = function(n, t) {
                        return n.map((function(n) {
                            return n * t
                        }))
                    }(a && a.length === l.length ? a : function(n) {
                        var t = n.length;
                        return n.map((function(n, e) {
                            return 0 !== e ? e / (t - 1) : 0
                        }))
                    }(l), s);

                function p() {
                    return Si(f, l, {
                        ease: Array.isArray(i) ? i : Bi(l, i)
                    })
                }
                var d = p();
                return {
                    next: function(n) {
                        return c.value = d(n), c.done = n >= s, c
                    },
                    flipTarget: function() {
                        l.reverse(), d = p()
                    }
                }
            }
            var Fi = {
                    keyframes: Vi,
                    spring: oi,
                    decay: function(n) {
                        var t = n.velocity,
                            e = void 0 === t ? 0 : t,
                            r = n.from,
                            o = void 0 === r ? 0 : r,
                            i = n.power,
                            a = void 0 === i ? .8 : i,
                            u = n.timeConstant,
                            s = void 0 === u ? 350 : u,
                            c = n.restDelta,
                            l = void 0 === c ? .5 : c,
                            f = n.modifyTarget,
                            p = {
                                done: !1,
                                value: o
                            },
                            d = a * e,
                            h = o + d,
                            m = void 0 === f ? h : f(h);
                        return m !== h && (d = m - o), {
                            next: function(n) {
                                var t = -d * Math.exp(-n / s);
                                return p.done = !(t > l || t < -l), p.value = p.done ? m : m + t, p
                            },
                            flipTarget: function() {}
                        }
                    }
                },
                Wi = "undefined" != typeof performance ? function() {
                    return performance.now()
                } : function() {
                    return Date.now()
                },
                Yi = "undefined" != typeof window ? function(n) {
                    return window.requestAnimationFrame(n)
                } : function(n) {
                    return setTimeout((function() {
                        return n(Wi())
                    }), 16.666666666666668)
                },
                Hi = !0,
                Ui = !1,
                $i = !1,
                Xi = {
                    delta: 0,
                    timestamp: 0
                },
                qi = ["read", "update", "preRender", "render", "postRender"],
                Gi = qi.reduce((function(n, t) {
                    return n[t] = function(n) {
                        var t = [],
                            e = [],
                            r = 0,
                            o = !1,
                            i = new WeakSet,
                            a = {
                                schedule: function(n, a, u) {
                                    void 0 === a && (a = !1), void 0 === u && (u = !1);
                                    var s = u && o,
                                        c = s ? t : e;
                                    return a && i.add(n), -1 === c.indexOf(n) && (c.push(n), s && o && (r = t.length)), n
                                },
                                cancel: function(n) {
                                    var t = e.indexOf(n); - 1 !== t && e.splice(t, 1), i.delete(n)
                                },
                                process: function(n) {
                                    var u;
                                    if (o = !0, t = (u = [e, t])[0], (e = u[1]).length = 0, r = t.length)
                                        for (var s = 0; s < r; s++) {
                                            var c = t[s];
                                            c(n), i.has(c) && (a.schedule(c), Ui = !0)
                                        }
                                    o = !1
                                }
                            };
                        return a
                    }(), n
                }), {}),
                Ki = qi.reduce((function(n, t) {
                    var e = Gi[t];
                    return n[t] = function(n, t, r) {
                        return void 0 === t && (t = !1), void 0 === r && (r = !1), Ui || ta(), e.schedule(n, t, r)
                    }, n
                }), {}),
                Zi = qi.reduce((function(n, t) {
                    return n[t] = Gi[t].cancel, n
                }), {}),
                Ji = qi.reduce((function(n, t) {
                    return n[t] = function() {
                        return Gi[t].process(Xi)
                    }, n
                }), {}),
                Qi = function(n) {
                    return Gi[n].process(Xi)
                },
                na = function(n) {
                    Ui = !1, Xi.delta = Hi ? 16.666666666666668 : Math.max(Math.min(n - Xi.timestamp, 40), 1), Xi.timestamp = n, $i = !0, qi.forEach(Qi), $i = !1, Ui && (Hi = !1, Yi(na))
                },
                ta = function() {
                    Ui = !0, Hi = !0, $i || Yi(na)
                },
                ea = function() {
                    return Xi
                };

            function ra(n, t, e) {
                return void 0 === e && (e = 0), n - t - e
            }
            var oa = function(n) {
                var t = function(t) {
                    var e = t.delta;
                    return n(e)
                };
                return {
                    start: function() {
                        return Ki.update(t, !0)
                    },
                    stop: function() {
                        return Zi.update(t)
                    }
                }
            };

            function ia(n) {
                var t, e, r, o, i, a = n.from,
                    u = n.autoplay,
                    s = void 0 === u || u,
                    c = n.driver,
                    l = void 0 === c ? oa : c,
                    f = n.elapsed,
                    p = void 0 === f ? 0 : f,
                    d = n.repeat,
                    h = void 0 === d ? 0 : d,
                    m = n.repeatType,
                    v = void 0 === m ? "loop" : m,
                    g = n.repeatDelay,
                    y = void 0 === g ? 0 : g,
                    b = n.onPlay,
                    w = n.onStop,
                    x = n.onComplete,
                    S = n.onRepeat,
                    E = n.onUpdate,
                    _ = Ce(n, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]),
                    C = _.to,
                    T = 0,
                    P = _.duration,
                    A = !1,
                    L = !0,
                    O = function(n) {
                        if (Array.isArray(n.to)) return Vi;
                        if (Fi[n.type]) return Fi[n.type];
                        var t = new Set(Object.keys(n));
                        return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? Vi : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? oi : Vi
                    }(_);
                (null === (e = (t = O).needsInterpolation) || void 0 === e ? void 0 : e.call(t, a, C)) && (i = Si([0, 100], [a, C], {
                    clamp: !1
                }), a = 0, C = 100);
                var k = O(_e(_e({}, _), {
                    from: a,
                    to: C
                }));
                return s && (null == b || b(), (r = l((function(n) {
                    if (L || (n = -n), p += n, !A) {
                        var t = k.next(Math.max(0, p));
                        o = t.value, i && (o = i(o)), A = L ? t.done : p <= 0
                    }
                    null == E || E(o), A && (0 === T && (null != P || (P = p)), T < h ? function(n, t, e, r) {
                        return r ? n >= t + e : n <= -e
                    }(p, P, y, L) && (T++, "reverse" === v ? p = function(n, t, e, r) {
                        return void 0 === e && (e = 0), void 0 === r && (r = !0), r ? ra(t + -n, t, e) : t - (n - t) + e
                    }(p, P, y, L = T % 2 == 0) : (p = ra(p, P, y), "mirror" === v && k.flipTarget()), A = !1, S && S()) : (r.stop(), x && x()))
                }))).start()), {
                    stop: function() {
                        null == w || w(), r.stop()
                    }
                }
            }

            function aa(n, t) {
                return t ? n * (1e3 / t) : 0
            }
            var ua = function(n) {
                    return n.hasOwnProperty("x") && n.hasOwnProperty("y")
                },
                sa = function(n) {
                    return ua(n) && n.hasOwnProperty("z")
                },
                ca = function(n, t) {
                    return Math.abs(n - t)
                };

            function la(n, t) {
                if (di(n) && di(t)) return ca(n, t);
                if (ua(n) && ua(t)) {
                    var e = ca(n.x, t.x),
                        r = ca(n.y, t.y),
                        o = sa(n) && sa(t) ? ca(n.z, t.z) : 0;
                    return Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2) + Math.pow(o, 2))
                }
            }
            var fa = function(n, t) {
                    return 1 - 3 * t + 3 * n
                },
                pa = function(n, t) {
                    return 3 * t - 6 * n
                },
                da = function(n) {
                    return 3 * n
                },
                ha = function(n, t, e) {
                    return ((fa(t, e) * n + pa(t, e)) * n + da(t)) * n
                },
                ma = function(n, t, e) {
                    return 3 * fa(t, e) * n * n + 2 * pa(t, e) * n + da(t)
                };
            var va = function(n) {
                    return function(t) {
                        return n(t), null
                    }
                },
                ga = {
                    tap: va((function(n) {
                        var t = n.onTap,
                            e = n.onTapStart,
                            o = n.onTapCancel,
                            i = n.whileTap,
                            a = n.visualElement,
                            u = t || e || o || i,
                            s = (0, r.useRef)(!1),
                            c = (0, r.useRef)(null);

                        function l() {
                            var n;
                            null === (n = c.current) || void 0 === n || n.call(c), c.current = null
                        }

                        function f() {
                            var n;
                            return l(), s.current = !1, null === (n = a.animationState) || void 0 === n || n.setActive(Po.Tap, !1), !Go()
                        }

                        function p(n, e) {
                            f() && (Zo(a.getInstance(), n.target) ? null == t || t(n, e) : null == o || o(n, e))
                        }

                        function d(n, t) {
                            f() && (null == o || o(n, t))
                        }
                        Ho(a, "pointerdown", u ? function(n, t) {
                            var r;
                            l(), s.current || (s.current = !0, c.current = mi(Yo(window, "pointerup", p), Yo(window, "pointercancel", d)), null == e || e(n, t), null === (r = a.animationState) || void 0 === r || r.setActive(Po.Tap, !0))
                        } : void 0), Jo(l)
                    })),
                    focus: va((function(n) {
                        var t = n.whileFocus,
                            e = n.visualElement;
                        Ro(e, "focus", t ? function() {
                            var n;
                            null === (n = e.animationState) || void 0 === n || n.setActive(Po.Focus, !0)
                        } : void 0), Ro(e, "blur", t ? function() {
                            var n;
                            null === (n = e.animationState) || void 0 === n || n.setActive(Po.Focus, !1)
                        } : void 0)
                    })),
                    hover: va((function(n) {
                        var t = n.onHoverStart,
                            e = n.onHoverEnd,
                            r = n.whileHover,
                            o = n.visualElement;
                        Ho(o, "pointerenter", t || r ? Ko(o, !0, t) : void 0), Ho(o, "pointerleave", e || r ? Ko(o, !1, e) : void 0)
                    }))
                };

            function ya(n, t) {
                if (!Array.isArray(t)) return !1;
                var e = t.length;
                if (e !== n.length) return !1;
                for (var r = 0; r < e; r++)
                    if (t[r] !== n[r]) return !1;
                return !0
            }
            var ba = function(n) {
                    return 1e3 * n
                },
                wa = {
                    linear: Ti,
                    easeIn: Pi,
                    easeInOut: Li,
                    easeOut: Ai,
                    circIn: Oi,
                    circInOut: Ri,
                    circOut: ki,
                    backIn: Ni,
                    backInOut: Ii,
                    backOut: zi,
                    anticipate: Di,
                    bounceIn: ji,
                    bounceInOut: function(n) {
                        return n < .5 ? .5 * (1 - Mi(1 - 2 * n)) : .5 * Mi(2 * n - 1) + .5
                    },
                    bounceOut: Mi
                },
                xa = function(n) {
                    if (Array.isArray(n)) {
                        ke(4 === n.length, "Cubic bezier arrays must contain four numerical values.");
                        var t = Te(n, 4);
                        return function(n, t, e, r) {
                            if (n === t && e === r) return Ti;
                            for (var o = new Float32Array(11), i = 0; i < 11; ++i) o[i] = ha(.1 * i, n, e);

                            function a(t) {
                                for (var r = 0, i = 1; 10 !== i && o[i] <= t; ++i) r += .1;
                                --i;
                                var a = r + (t - o[i]) / (o[i + 1] - o[i]) * .1,
                                    u = ma(a, n, e);
                                return u >= .001 ? function(n, t, e, r) {
                                    for (var o = 0; o < 8; ++o) {
                                        var i = ma(t, e, r);
                                        if (0 === i) return t;
                                        t -= (ha(t, e, r) - n) / i
                                    }
                                    return t
                                }(t, a, n, e) : 0 === u ? a : function(n, t, e, r, o) {
                                    var i, a, u = 0;
                                    do {
                                        (i = ha(a = t + (e - t) / 2, r, o) - n) > 0 ? e = a : t = a
                                    } while (Math.abs(i) > 1e-7 && ++u < 10);
                                    return a
                                }(t, r, r + .1, n, e)
                            }
                            return function(n) {
                                return 0 === n || 1 === n ? n : ha(a(n), t, r)
                            }
                        }(t[0], t[1], t[2], t[3])
                    }
                    return "string" == typeof n ? (ke(void 0 !== wa[n], "Invalid easing type '" + n + "'"), wa[n]) : n
                },
                Sa = function(n, t) {
                    return "zIndex" !== n && (!("number" != typeof t && !Array.isArray(t)) || !("string" != typeof t || !Hr.test(t) || t.startsWith("url(")))
                },
                Ea = function() {
                    return {
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        restDelta: .5,
                        restSpeed: 10
                    }
                },
                _a = function(n) {
                    return {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === n ? 2 * Math.sqrt(550) : 30,
                        restDelta: .01,
                        restSpeed: 10
                    }
                },
                Ca = function() {
                    return {
                        type: "keyframes",
                        ease: "linear",
                        duration: .3
                    }
                },
                Ta = function(n) {
                    return {
                        type: "keyframes",
                        duration: .8,
                        values: n
                    }
                },
                Pa = {
                    x: Ea,
                    y: Ea,
                    z: Ea,
                    rotate: Ea,
                    rotateX: Ea,
                    rotateY: Ea,
                    rotateZ: Ea,
                    scaleX: _a,
                    scaleY: _a,
                    scale: _a,
                    opacity: Ca,
                    backgroundColor: Ca,
                    color: Ca,
                    default: _a
                },
                Aa = _e(_e({}, Kr), {
                    color: Br,
                    backgroundColor: Br,
                    outlineColor: Br,
                    fill: Br,
                    stroke: Br,
                    borderColor: Br,
                    borderTopColor: Br,
                    borderRightColor: Br,
                    borderBottomColor: Br,
                    borderLeftColor: Br,
                    filter: qr,
                    WebkitFilter: qr
                }),
                La = function(n) {
                    return Aa[n]
                };

            function Oa(n, t) {
                var e, r = La(n);
                return r !== qr && (r = Hr), null === (e = r.getAnimatableNone) || void 0 === e ? void 0 : e.call(r, t)
            }
            var ka = !1;

            function Ra(n, t, e) {
                var r, o, i, a;
                return Array.isArray(t.to) && (null !== (r = n.duration) && void 0 !== r || (n.duration = .8)),
                    function(n) {
                        Array.isArray(n.to) && null === n.to[0] && (n.to = Pe([], Te(n.to)), n.to[0] = n.from)
                    }(t),
                    function(n) {
                        n.when, n.delay, n.delayChildren, n.staggerChildren, n.staggerDirection, n.repeat, n.repeatType, n.repeatDelay, n.from;
                        var t = Ce(n, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
                        return !!Object.keys(t).length
                    }(n) || (n = _e(_e({}, n), (o = e, i = t.to, a = xo(i) ? Ta : Pa[o] || Pa.default, _e({
                        to: i
                    }, a(i))))), _e(_e({}, t), function(n) {
                        var t = n.ease,
                            e = n.times,
                            r = n.yoyo,
                            o = n.flip,
                            i = n.loop,
                            a = Ce(n, ["ease", "times", "yoyo", "flip", "loop"]),
                            u = _e({}, a);
                        return e && (u.offset = e), a.duration && (u.duration = ba(a.duration)), a.repeatDelay && (u.repeatDelay = ba(a.repeatDelay)), t && (u.ease = function(n) {
                            return Array.isArray(n) && "number" != typeof n[0]
                        }(t) ? t.map(xa) : xa(t)), "tween" === a.type && (u.type = "keyframes"), (r || i || o) && (Oe(!ka, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), ka = !0, r ? u.repeatType = "reverse" : i ? u.repeatType = "loop" : o && (u.repeatType = "mirror"), u.repeat = i || r || o || a.repeat), "spring" !== a.type && (u.type = "keyframes"), u
                    }(n))
            }

            function Na(n) {
                return 0 === n || "string" == typeof n && 0 === parseFloat(n) && -1 === n.indexOf(" ")
            }

            function za(n) {
                return "number" == typeof n ? 0 : Oa("", n)
            }

            function Ia(n, t) {
                return n[t] || n.default || n
            }

            function Da(n, t, e, r) {
                return void 0 === r && (r = {}), t.start((function(o) {
                    var i, a, u = function(n, t, e, r, o) {
                            var i, a = Ia(r, n),
                                u = null !== (i = a.from) && void 0 !== i ? i : t.get(),
                                s = Sa(n, e);
                            "none" === u && s && "string" == typeof e ? u = Oa(n, e) : Na(u) && "string" == typeof e ? u = za(e) : !Array.isArray(e) && Na(e) && "string" == typeof u && (e = za(u));
                            var c = Sa(n, u);
                            return Oe(c === s, "You are trying to animate " + n + ' from "' + u + '" to "' + e + '". ' + u + " is not an animatable value - to enable this animation set " + u + " to a value animatable to " + e + " via the `style` property."), c && s && !1 !== a.type ? function() {
                                var r = {
                                    from: u,
                                    to: e,
                                    velocity: t.getVelocity(),
                                    onComplete: o,
                                    onUpdate: function(n) {
                                        return t.set(n)
                                    }
                                };
                                return "inertia" === a.type || "decay" === a.type ? function(n) {
                                    var t, e = n.from,
                                        r = void 0 === e ? 0 : e,
                                        o = n.velocity,
                                        i = void 0 === o ? 0 : o,
                                        a = n.min,
                                        u = n.max,
                                        s = n.power,
                                        c = void 0 === s ? .8 : s,
                                        l = n.timeConstant,
                                        f = void 0 === l ? 750 : l,
                                        p = n.bounceStiffness,
                                        d = void 0 === p ? 500 : p,
                                        h = n.bounceDamping,
                                        m = void 0 === h ? 10 : h,
                                        v = n.restDelta,
                                        g = void 0 === v ? 1 : v,
                                        y = n.modifyTarget,
                                        b = n.driver,
                                        w = n.onUpdate,
                                        x = n.onComplete;

                                    function S(n) {
                                        return void 0 !== a && n < a || void 0 !== u && n > u
                                    }

                                    function E(n) {
                                        return void 0 === a ? u : void 0 === u || Math.abs(a - n) < Math.abs(u - n) ? a : u
                                    }

                                    function _(n) {
                                        null == t || t.stop(), t = ia(_e(_e({}, n), {
                                            driver: b,
                                            onUpdate: function(t) {
                                                var e;
                                                null == w || w(t), null === (e = n.onUpdate) || void 0 === e || e.call(n, t)
                                            },
                                            onComplete: x
                                        }))
                                    }

                                    function C(n) {
                                        _(_e({
                                            type: "spring",
                                            stiffness: d,
                                            damping: m,
                                            restDelta: g
                                        }, n))
                                    }
                                    if (S(r)) C({
                                        from: r,
                                        velocity: i,
                                        to: E(r)
                                    });
                                    else {
                                        var T = c * i + r;
                                        void 0 !== y && (T = y(T));
                                        var P, A, L = E(T),
                                            O = L === a ? -1 : 1;
                                        _({
                                            type: "decay",
                                            from: r,
                                            velocity: i,
                                            timeConstant: f,
                                            power: c,
                                            restDelta: g,
                                            modifyTarget: y,
                                            onUpdate: S(T) ? function(n) {
                                                P = A, A = n, i = aa(n - P, ea().delta), (1 === O && n > L || -1 === O && n < L) && C({
                                                    from: n,
                                                    to: L,
                                                    velocity: i
                                                })
                                            } : void 0
                                        })
                                    }
                                    return {
                                        stop: function() {
                                            return null == t ? void 0 : t.stop()
                                        }
                                    }
                                }(_e(_e({}, r), a)) : ia(_e(_e({}, Ra(a, r, n)), {
                                    onUpdate: function(n) {
                                        var t;
                                        r.onUpdate(n), null === (t = a.onUpdate) || void 0 === t || t.call(a, n)
                                    },
                                    onComplete: function() {
                                        var n;
                                        r.onComplete(), null === (n = a.onComplete) || void 0 === n || n.call(a)
                                    }
                                }))
                            } : function() {
                                var n;
                                return t.set(e), o(), null === (n = null == a ? void 0 : a.onComplete) || void 0 === n || n.call(a), {
                                    stop: function() {}
                                }
                            }
                        }(n, t, e, r, o),
                        s = function(n, t) {
                            var e;
                            return null !== (e = (Ia(n, t) || {}).delay) && void 0 !== e ? e : 0
                        }(r, n),
                        c = function() {
                            return a = u()
                        };
                    return s ? i = setTimeout(c, ba(s)) : c(),
                        function() {
                            clearTimeout(i), null == a || a.stop()
                        }
                }))
            }
            var Ma = function(n) {
                return /^\-?\d*\.?\d+$/.test(n)
            };

            function ja(n, t) {
                -1 === n.indexOf(t) && n.push(t)
            }

            function Ba(n, t) {
                var e = n.indexOf(t);
                e > -1 && n.splice(e, 1)
            }
            var Va = function() {
                    function n() {
                        this.subscriptions = []
                    }
                    return n.prototype.add = function(n) {
                        var t = this;
                        return ja(this.subscriptions, n),
                            function() {
                                return Ba(t.subscriptions, n)
                            }
                    }, n.prototype.notify = function(n, t, e) {
                        var r = this.subscriptions.length;
                        if (r)
                            if (1 === r) this.subscriptions[0](n, t, e);
                            else
                                for (var o = 0; o < r; o++) {
                                    var i = this.subscriptions[o];
                                    i && i(n, t, e)
                                }
                    }, n.prototype.getSize = function() {
                        return this.subscriptions.length
                    }, n.prototype.clear = function() {
                        this.subscriptions.length = 0
                    }, n
                }(),
                Fa = function() {
                    function n(n) {
                        var t, e = this;
                        this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new Va, this.velocityUpdateSubscribers = new Va, this.renderSubscribers = new Va, this.canTrackVelocity = !1, this.updateAndNotify = function(n, t) {
                            void 0 === t && (t = !0), e.prev = e.current, e.current = n;
                            var r = ea(),
                                o = r.delta,
                                i = r.timestamp;
                            e.lastUpdated !== i && (e.timeDelta = o, e.lastUpdated = i, Ki.postRender(e.scheduleVelocityCheck)), e.prev !== e.current && e.updateSubscribers.notify(e.current), e.velocityUpdateSubscribers.getSize() && e.velocityUpdateSubscribers.notify(e.getVelocity()), t && e.renderSubscribers.notify(e.current)
                        }, this.scheduleVelocityCheck = function() {
                            return Ki.postRender(e.velocityCheck)
                        }, this.velocityCheck = function(n) {
                            n.timestamp !== e.lastUpdated && (e.prev = e.current, e.velocityUpdateSubscribers.notify(e.getVelocity()))
                        }, this.hasAnimated = !1, this.prev = this.current = n, this.canTrackVelocity = (t = this.current, !isNaN(parseFloat(t)))
                    }
                    return n.prototype.onChange = function(n) {
                        return this.updateSubscribers.add(n)
                    }, n.prototype.clearListeners = function() {
                        this.updateSubscribers.clear()
                    }, n.prototype.onRenderRequest = function(n) {
                        return n(this.get()), this.renderSubscribers.add(n)
                    }, n.prototype.attach = function(n) {
                        this.passiveEffect = n
                    }, n.prototype.set = function(n, t) {
                        void 0 === t && (t = !0), t && this.passiveEffect ? this.passiveEffect(n, this.updateAndNotify) : this.updateAndNotify(n, t)
                    }, n.prototype.get = function() {
                        return this.current
                    }, n.prototype.getPrevious = function() {
                        return this.prev
                    }, n.prototype.getVelocity = function() {
                        return this.canTrackVelocity ? aa(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                    }, n.prototype.start = function(n) {
                        var t = this;
                        return this.stop(), new Promise((function(e) {
                            t.hasAnimated = !0, t.stopAnimation = n(e)
                        })).then((function() {
                            return t.clearAnimation()
                        }))
                    }, n.prototype.stop = function() {
                        this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                    }, n.prototype.isAnimating = function() {
                        return !!this.stopAnimation
                    }, n.prototype.clearAnimation = function() {
                        this.stopAnimation = null
                    }, n.prototype.destroy = function() {
                        this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                    }, n
                }();

            function Wa(n) {
                return new Fa(n)
            }
            var Ya = function(n) {
                    return function(t) {
                        return t.test(n)
                    }
                },
                Ha = [Sr, Ar, Pr, Tr, Or, Lr, {
                    test: function(n) {
                        return "auto" === n
                    },
                    parse: function(n) {
                        return n
                    }
                }],
                Ua = function(n) {
                    return Ha.find(Ya(n))
                },
                $a = Pe(Pe([], Te(Ha)), [Br, Hr]),
                Xa = function(n) {
                    return $a.find(Ya(n))
                };

            function qa(n, t, e) {
                n.hasValue(t) ? n.getValue(t).set(e) : n.addValue(t, Wa(e))
            }

            function Ga(n, t) {
                if (t) return (t[n] || t.default || t).from
            }

            function Ka(n, t, e) {
                var r;
                void 0 === e && (e = {});
                var o = Ke(n, t, e.custom),
                    i = (o || {}).transition,
                    a = void 0 === i ? n.getDefaultTransition() || {} : i;
                e.transitionOverride && (a = e.transitionOverride);
                var u = o ? function() {
                        return Za(n, o, e)
                    } : function() {
                        return Promise.resolve()
                    },
                    s = (null === (r = n.variantChildren) || void 0 === r ? void 0 : r.size) ? function(r) {
                        void 0 === r && (r = 0);
                        var o = a.delayChildren,
                            i = void 0 === o ? 0 : o,
                            u = a.staggerChildren,
                            s = a.staggerDirection;
                        return function(n, t, e, r, o, i) {
                            void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === o && (o = 1);
                            var a = [],
                                u = (n.variantChildren.size - 1) * r,
                                s = 1 === o ? function(n) {
                                    return void 0 === n && (n = 0), n * r
                                } : function(n) {
                                    return void 0 === n && (n = 0), u - n * r
                                };
                            return Array.from(n.variantChildren).sort(Ja).forEach((function(n, r) {
                                a.push(Ka(n, t, _e(_e({}, i), {
                                    delay: e + s(r)
                                })).then((function() {
                                    return n.notifyAnimationComplete(t)
                                })))
                            })), Promise.all(a)
                        }(n, t, i + r, u, s, e)
                    } : function() {
                        return Promise.resolve()
                    },
                    c = a.when;
                if (c) {
                    var l = Te("beforeChildren" === c ? [u, s] : [s, u], 2),
                        f = l[0],
                        p = l[1];
                    return f().then(p)
                }
                return Promise.all([u(), s(e.delay)])
            }

            function Za(n, t, e) {
                var r, o = void 0 === e ? {} : e,
                    i = o.delay,
                    a = void 0 === i ? 0 : i,
                    u = o.transitionOverride,
                    s = o.type,
                    c = n.makeTargetAnimatable(t),
                    l = c.transition,
                    f = void 0 === l ? n.getDefaultTransition() : l,
                    p = c.transitionEnd,
                    d = Ce(c, ["transition", "transitionEnd"]);
                u && (f = u);
                var h = [],
                    m = s && (null === (r = n.animationState) || void 0 === r ? void 0 : r.getState()[s]);
                for (var v in d) {
                    var g = n.getValue(v),
                        y = d[v];
                    if (!(!g || void 0 === y || m && Qa(m, v))) {
                        var b = Da(v, g, y, _e({
                            delay: a
                        }, f));
                        h.push(b)
                    }
                }
                return Promise.all(h).then((function() {
                    p && function(n, t) {
                        var e = Ke(n, t),
                            r = e ? n.makeTargetAnimatable(e, !1) : {},
                            o = r.transitionEnd,
                            i = void 0 === o ? {} : o;
                        r.transition;
                        var a = Ce(r, ["transitionEnd", "transition"]);
                        for (var u in a = _e(_e({}, a), i)) qa(n, u, So(a[u]))
                    }(n, p)
                }))
            }

            function Ja(n, t) {
                return n.sortNodePosition(t)
            }

            function Qa(n, t) {
                var e = n.protectedKeys,
                    r = n.needsAnimating,
                    o = e.hasOwnProperty(t) && !0 !== r[t];
                return r[t] = !1, o
            }
            var nu = [Po.Animate, Po.Hover, Po.Tap, Po.Drag, Po.Focus, Po.Exit],
                tu = Pe([], Te(nu)).reverse(),
                eu = nu.length;

            function ru(n) {
                var t, e = function(n) {
                        return function(t) {
                            return Promise.all(t.map((function(t) {
                                var e = t.animation,
                                    r = t.options;
                                return function(n, t, e) {
                                    var r;
                                    if (void 0 === e && (e = {}), n.notifyAnimationStart(), Array.isArray(t)) {
                                        var o = t.map((function(t) {
                                            return Ka(n, t, e)
                                        }));
                                        r = Promise.all(o)
                                    } else if ("string" == typeof t) r = Ka(n, t, e);
                                    else {
                                        var i = "function" == typeof t ? Ke(n, t, e.custom) : t;
                                        r = Za(n, i, e)
                                    }
                                    return r.then((function() {
                                        return n.notifyAnimationComplete(t)
                                    }))
                                }(n, e, r)
                            })))
                        }
                    }(n),
                    r = ((t = {})[Po.Animate] = ou(!0), t[Po.Hover] = ou(), t[Po.Tap] = ou(), t[Po.Drag] = ou(), t[Po.Focus] = ou(), t[Po.Exit] = ou(), t),
                    o = {},
                    i = !0,
                    a = function(t, e) {
                        var r = Ke(n, e);
                        if (r) {
                            r.transition;
                            var o = r.transitionEnd,
                                i = Ce(r, ["transition", "transitionEnd"]);
                            t = _e(_e(_e({}, t), i), o)
                        }
                        return t
                    };

                function u(t, u) {
                    for (var s, c = n.getProps(), l = n.getVariantContext(!0) || {}, f = [], p = new Set, d = {}, h = 1 / 0, m = function(e) {
                            var o = tu[e],
                                m = r[o],
                                v = null !== (s = c[o]) && void 0 !== s ? s : l[o],
                                g = qe(v),
                                y = o === u ? m.isActive : null;
                            !1 === y && (h = e);
                            var b = v === l[o] && v !== c[o] && g;
                            if (b && i && n.manuallyAnimateOnMount && (b = !1), m.protectedKeys = _e({}, d), !m.isActive && null === y || !v && !m.prevProp || wo(v) || "boolean" == typeof v) return "continue";
                            var w = function(n, t) {
                                    return "string" == typeof t ? t !== n : !!Xe(t) && !ya(t, n)
                                }(m.prevProp, v) || o === u && m.isActive && !b && g || e > h && g,
                                x = Array.isArray(v) ? v : [v],
                                S = x.reduce(a, {});
                            !1 === y && (S = {});
                            var E = m.prevResolvedValues,
                                _ = void 0 === E ? {} : E,
                                C = _e(_e({}, _), S),
                                T = function(n) {
                                    w = !0, p.delete(n), m.needsAnimating[n] = !0
                                };
                            for (var P in C) {
                                var A = S[P],
                                    L = _[P];
                                d.hasOwnProperty(P) || (A !== L ? xo(A) && xo(L) ? ya(A, L) ? m.protectedKeys[P] = !0 : T(P) : void 0 !== A ? T(P) : p.add(P) : void 0 !== A && p.has(P) ? T(P) : m.protectedKeys[P] = !0)
                            }
                            m.prevProp = v, m.prevResolvedValues = S, m.isActive && (d = _e(_e({}, d), S)), i && n.blockInitialAnimation && (w = !1), w && !b && f.push.apply(f, Pe([], Te(x.map((function(n) {
                                return {
                                    animation: n,
                                    options: _e({
                                        type: o
                                    }, t)
                                }
                            })))))
                        }, v = 0; v < eu; v++) m(v);
                    if (o = _e({}, d), p.size) {
                        var g = {};
                        p.forEach((function(t) {
                            var e = n.getBaseTarget(t);
                            void 0 !== e && (g[t] = e)
                        })), f.push({
                            animation: g
                        })
                    }
                    var y = Boolean(f.length);
                    return i && !1 === c.initial && !n.manuallyAnimateOnMount && (y = !1), i = !1, y ? e(f) : Promise.resolve()
                }
                return {
                    isAnimated: function(n) {
                        return void 0 !== o[n]
                    },
                    animateChanges: u,
                    setActive: function(t, e, o) {
                        var i;
                        return r[t].isActive === e ? Promise.resolve() : (null === (i = n.variantChildren) || void 0 === i || i.forEach((function(n) {
                            var r;
                            return null === (r = n.animationState) || void 0 === r ? void 0 : r.setActive(t, e)
                        })), r[t].isActive = e, u(o, t))
                    },
                    setAnimateFunction: function(t) {
                        e = t(n)
                    },
                    getState: function() {
                        return r
                    }
                }
            }

            function ou(n) {
                return void 0 === n && (n = !1), {
                    isActive: n,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            var iu = {
                    animation: va((function(n) {
                        var t = n.visualElement,
                            e = n.animate;
                        t.animationState || (t.animationState = ru(t)), wo(e) && (0, r.useEffect)((function() {
                            return e.subscribe(t)
                        }), [e])
                    })),
                    exit: va((function(n) {
                        var t = n.custom,
                            e = n.visualElement,
                            o = Te(Be(), 2),
                            i = o[0],
                            a = o[1],
                            u = (0, r.useContext)(Me);
                        (0, r.useEffect)((function() {
                            var n, r, o = null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(Po.Exit, !i, {
                                custom: null !== (r = null == u ? void 0 : u.custom) && void 0 !== r ? r : t
                            });
                            !i && (null == o || o.then(a))
                        }), [i])
                    }))
                },
                au = function() {
                    function n(n, t, e) {
                        var r = this,
                            o = (void 0 === e ? {} : e).transformPagePoint;
                        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
                                if (r.lastMoveEvent && r.lastMoveEventInfo) {
                                    var n = cu(r.lastMoveEventInfo, r.history),
                                        t = null !== r.startEvent,
                                        e = la(n.offset, {
                                            x: 0,
                                            y: 0
                                        }) >= 3;
                                    if (t || e) {
                                        var o = n.point,
                                            i = ea().timestamp;
                                        r.history.push(_e(_e({}, o), {
                                            timestamp: i
                                        }));
                                        var a = r.handlers,
                                            u = a.onStart,
                                            s = a.onMove;
                                        t || (u && u(r.lastMoveEvent, n), r.startEvent = r.lastMoveEvent), s && s(r.lastMoveEvent, n)
                                    }
                                }
                            }, this.handlePointerMove = function(n, t) {
                                r.lastMoveEvent = n, r.lastMoveEventInfo = uu(t, r.transformPagePoint), No(n) && 0 === n.buttons ? r.handlePointerUp(n, t) : Ki.update(r.updatePoint, !0)
                            }, this.handlePointerUp = function(n, t) {
                                r.end();
                                var e = r.handlers,
                                    o = e.onEnd,
                                    i = e.onSessionEnd,
                                    a = cu(uu(t, r.transformPagePoint), r.history);
                                r.startEvent && o && o(n, a), i && i(n, a)
                            }, !(zo(n) && n.touches.length > 1)) {
                            this.handlers = t, this.transformPagePoint = o;
                            var i = uu(jo(n), this.transformPagePoint),
                                a = i.point,
                                u = ea().timestamp;
                            this.history = [_e(_e({}, a), {
                                timestamp: u
                            })];
                            var s = t.onSessionStart;
                            s && s(n, cu(i, this.history)), this.removeListeners = mi(Yo(window, "pointermove", this.handlePointerMove), Yo(window, "pointerup", this.handlePointerUp), Yo(window, "pointercancel", this.handlePointerUp))
                        }
                    }
                    return n.prototype.updateHandlers = function(n) {
                        this.handlers = n
                    }, n.prototype.end = function() {
                        this.removeListeners && this.removeListeners(), Zi.update(this.updatePoint)
                    }, n
                }();

            function uu(n, t) {
                return t ? {
                    point: t(n.point)
                } : n
            }

            function su(n, t) {
                return {
                    x: n.x - t.x,
                    y: n.y - t.y
                }
            }

            function cu(n, t) {
                var e = n.point;
                return {
                    point: e,
                    delta: su(e, fu(t)),
                    offset: su(e, lu(t)),
                    velocity: pu(t, .1)
                }
            }

            function lu(n) {
                return n[0]
            }

            function fu(n) {
                return n[n.length - 1]
            }

            function pu(n, t) {
                if (n.length < 2) return {
                    x: 0,
                    y: 0
                };
                for (var e = n.length - 1, r = null, o = fu(n); e >= 0 && (r = n[e], !(o.timestamp - r.timestamp > ba(t)));) e--;
                if (!r) return {
                    x: 0,
                    y: 0
                };
                var i = (o.timestamp - r.timestamp) / 1e3;
                if (0 === i) return {
                    x: 0,
                    y: 0
                };
                var a = {
                    x: (o.x - r.x) / i,
                    y: (o.y - r.y) / i
                };
                return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
            }

            function du(n) {
                return n
            }

            function hu(n) {
                var t = n.top;
                return {
                    x: {
                        min: n.left,
                        max: n.right
                    },
                    y: {
                        min: t,
                        max: n.bottom
                    }
                }
            }
            var mu = {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            };

            function vu() {
                return {
                    x: _e({}, mu),
                    y: _e({}, mu)
                }
            }

            function gu(n) {
                return [n("x"), n("y")]
            }

            function yu(n, t, e) {
                var r = t.min,
                    o = t.max;
                return void 0 !== r && n < r ? n = e ? ui(r, n, e.min) : Math.max(n, r) : void 0 !== o && n > o && (n = e ? ui(o, n, e.max) : Math.min(n, o)), n
            }

            function bu(n, t, e) {
                return {
                    min: void 0 !== t ? n.min + t : void 0,
                    max: void 0 !== e ? n.max + e - (n.max - n.min) : void 0
                }
            }

            function wu(n, t) {
                var e, r = t.min - n.min,
                    o = t.max - n.max;
                return t.max - t.min < n.max - n.min && (r = (e = Te([o, r], 2))[0], o = e[1]), {
                    min: n.min + r,
                    max: n.min + o
                }
            }

            function xu(n, t, e) {
                return {
                    min: Su(n, t),
                    max: Su(n, e)
                }
            }

            function Su(n, t) {
                var e;
                return "number" == typeof n ? n : null !== (e = n[t]) && void 0 !== e ? e : 0
            }

            function Eu(n, t) {
                return hu(function(n, t) {
                    var e = n.top,
                        r = n.left,
                        o = n.bottom,
                        i = n.right;
                    void 0 === t && (t = du);
                    var a = t({
                            x: r,
                            y: e
                        }),
                        u = t({
                            x: i,
                            y: o
                        });
                    return {
                        top: a.y,
                        left: a.x,
                        bottom: u.y,
                        right: u.x
                    }
                }(n.getBoundingClientRect(), t))
            }

            function _u(n, t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = .01), la(n, t) < e
            }

            function Cu(n) {
                return n.max - n.min
            }

            function Tu(n, t, e, r) {
                void 0 === r && (r = .5), n.origin = r, n.originPoint = ui(t.min, t.max, n.origin), n.scale = Cu(e) / Cu(t), _u(n.scale, 1, 1e-4) && (n.scale = 1), n.translate = ui(e.min, e.max, n.origin) - n.originPoint, _u(n.translate) && (n.translate = 0)
            }

            function Pu(n, t, e, r) {
                Tu(n.x, t.x, e.x, Au(r.originX)), Tu(n.y, t.y, e.y, Au(r.originY))
            }

            function Au(n) {
                return "number" == typeof n ? n : .5
            }

            function Lu(n, t, e) {
                n.min = e.min + t.min, n.max = n.min + Cu(t)
            }
            var Ou = function(n, t) {
                return n.depth - t.depth
            };

            function ku(n) {
                return n.projection.isEnabled || n.shouldResetTransform()
            }

            function Ru(n, t) {
                void 0 === t && (t = []);
                var e = n.parent;
                return e && Ru(e, t), ku(n) && t.push(n), t
            }

            function Nu(n) {
                if (!n.shouldResetTransform()) {
                    var t, e = n.getLayoutState();
                    n.notifyBeforeLayoutMeasure(e.layout), e.isHydrated = !0, e.layout = n.measureViewportBox(), e.layoutCorrected = (t = e.layout, {
                        x: _e({}, t.x),
                        y: _e({}, t.y)
                    }), n.notifyLayoutMeasure(e.layout, n.prevViewportBox || e.layout), Ki.update((function() {
                        return n.rebaseProjectionTarget()
                    }))
                }
            }

            function zu(n, t) {
                return {
                    min: t.min - n.min,
                    max: t.max - n.min
                }
            }

            function Iu(n, t) {
                return {
                    x: zu(n.x, t.x),
                    y: zu(n.y, t.y)
                }
            }

            function Du(n, t) {
                var e = n.getLayoutId(),
                    r = t.getLayoutId();
                return e !== r || void 0 === r && n !== t
            }

            function Mu(n) {
                var t = n.getProps(),
                    e = t.drag,
                    r = t._dragX;
                return e && !r
            }

            function ju(n, t) {
                n.min = t.min, n.max = t.max
            }

            function Bu(n, t, e) {
                return e + t * (n - e)
            }

            function Vu(n, t, e, r, o) {
                return void 0 !== o && (n = Bu(n, o, r)), Bu(n, e, r) + t
            }

            function Fu(n, t, e, r, o) {
                void 0 === t && (t = 0), void 0 === e && (e = 1), n.min = Vu(n.min, t, e, r, o), n.max = Vu(n.max, t, e, r, o)
            }

            function Wu(n, t) {
                var e = t.x,
                    r = t.y;
                Fu(n.x, e.translate, e.scale, e.originPoint), Fu(n.y, r.translate, r.scale, r.originPoint)
            }

            function Yu(n, t, e, r) {
                var o = Te(r, 3),
                    i = o[0],
                    a = o[1],
                    u = o[2];
                n.min = t.min, n.max = t.max;
                var s = void 0 !== e[u] ? e[u] : .5,
                    c = ui(t.min, t.max, s);
                Fu(n, e[i], e[a], c, e.scale)
            }
            var Hu = ["x", "scaleX", "originX"],
                Uu = ["y", "scaleY", "originY"];

            function $u(n, t, e) {
                Yu(n.x, t.x, e, Hu), Yu(n.y, t.y, e, Uu)
            }

            function Xu(n, t, e, r, o) {
                return n = Bu(n -= t, 1 / e, r), void 0 !== o && (n = Bu(n, 1 / o, r)), n
            }

            function qu(n, t, e) {
                var r = Te(e, 3),
                    o = r[0],
                    i = r[1],
                    a = r[2];
                ! function(n, t, e, r, o) {
                    void 0 === t && (t = 0), void 0 === e && (e = 1), void 0 === r && (r = .5);
                    var i = ui(n.min, n.max, r) - t;
                    n.min = Xu(n.min, t, e, i, o), n.max = Xu(n.max, t, e, i, o)
                }(n, t[o], t[i], t[a], t.scale)
            }

            function Gu(n, t) {
                qu(n.x, t, Hu), qu(n.y, t, Uu)
            }
            var Ku = new Set;

            function Zu(n, t, e) {
                n[e] || (n[e] = []), n[e].push(t)
            }

            function Ju(n) {
                return Ku.add(n),
                    function() {
                        return Ku.delete(n)
                    }
            }

            function Qu() {
                if (Ku.size) {
                    var n = 0,
                        t = [
                            []
                        ],
                        e = [],
                        r = function(e) {
                            return Zu(t, e, n)
                        },
                        o = function(t) {
                            Zu(e, t, n), n++
                        };
                    Ku.forEach((function(t) {
                        t(r, o), n = 0
                    })), Ku.clear();
                    for (var i = e.length, a = 0; a <= i; a++) t[a] && t[a].forEach(ts), e[a] && e[a].forEach(ts)
                }
            }
            var ns, ts = function(n) {
                    return n()
                },
                es = new WeakMap,
                rs = function() {
                    function n(n) {
                        var t = n.visualElement;
                        this.isDragging = !1, this.currentDirection = null, this.constraints = !1, this.elastic = {
                            x: {
                                min: 0,
                                max: 1
                            },
                            y: {
                                min: 0,
                                max: 1
                            }
                        }, this.props = {}, this.hasMutatedConstraints = !1, this.cursorProgress = {
                            x: .5,
                            y: .5
                        }, this.originPoint = {}, this.openGlobalLock = null, this.panSession = null, this.visualElement = t, this.visualElement.enableLayoutProjection(), es.set(t, this)
                    }
                    return n.prototype.start = function(n, t) {
                        var e = this,
                            r = void 0 === t ? {} : t,
                            o = r.snapToCursor,
                            i = void 0 !== o && o,
                            a = r.cursorProgress,
                            u = this.props.transformPagePoint;
                        this.panSession = new au(n, {
                            onSessionStart: function(n) {
                                var t;
                                e.stopMotion();
                                var r = function(n) {
                                    return jo(n, "client")
                                }(n).point;
                                null === (t = e.cancelLayout) || void 0 === t || t.call(e), e.cancelLayout = Ju((function(n, t) {
                                    var o = Ru(e.visualElement),
                                        u = function(n) {
                                            var t = [],
                                                e = function(n) {
                                                    ku(n) && t.push(n), n.children.forEach(e)
                                                };
                                            return n.children.forEach(e), t.sort(Ou)
                                        }(e.visualElement),
                                        s = Pe(Pe([], Te(o)), Te(u)),
                                        c = !1;
                                    e.isLayoutDrag() && e.visualElement.lockProjectionTarget(), t((function() {
                                        s.forEach((function(n) {
                                            return n.resetTransform()
                                        }))
                                    })), n((function() {
                                        Nu(e.visualElement), u.forEach(Nu)
                                    })), t((function() {
                                        s.forEach((function(n) {
                                            return n.restoreTransform()
                                        })), i && (c = e.snapToCursor(r))
                                    })), n((function() {
                                        Boolean(e.getAxisMotionValue("x") && !e.isExternalDrag()) || e.visualElement.rebaseProjectionTarget(!0, e.visualElement.measureViewportBox(!1)), e.visualElement.scheduleUpdateLayoutProjection();
                                        var n = e.visualElement.projection;
                                        gu((function(t) {
                                            if (!c) {
                                                var o = n.target[t],
                                                    i = o.min,
                                                    u = o.max;
                                                e.cursorProgress[t] = a ? a[t] : ai(i, u, r[t])
                                            }
                                            var s = e.getAxisMotionValue(t);
                                            s && (e.originPoint[t] = s.get())
                                        }))
                                    })), t((function() {
                                        Ji.update(), Ji.preRender(), Ji.render(), Ji.postRender()
                                    })), n((function() {
                                        return e.resolveDragConstraints()
                                    }))
                                }))
                            },
                            onStart: function(n, t) {
                                var r, o, i, a = e.props,
                                    u = a.drag,
                                    s = a.dragPropagation;
                                (!u || s || (e.openGlobalLock && e.openGlobalLock(), e.openGlobalLock = qo(u), e.openGlobalLock)) && (Qu(), e.isDragging = !0, e.currentDirection = null, null === (o = (r = e.props).onDragStart) || void 0 === o || o.call(r, n, t), null === (i = e.visualElement.animationState) || void 0 === i || i.setActive(Po.Drag, !0))
                            },
                            onMove: function(n, t) {
                                var r, o, i, a, u = e.props,
                                    s = u.dragPropagation,
                                    c = u.dragDirectionLock;
                                if (s || e.openGlobalLock) {
                                    var l = t.offset;
                                    if (c && null === e.currentDirection) return e.currentDirection = function(n, t) {
                                        void 0 === t && (t = 10);
                                        var e = null;
                                        return Math.abs(n.y) > t ? e = "y" : Math.abs(n.x) > t && (e = "x"), e
                                    }(l), void(null !== e.currentDirection && (null === (o = (r = e.props).onDirectionLock) || void 0 === o || o.call(r, e.currentDirection)));
                                    e.updateAxis("x", t.point, l), e.updateAxis("y", t.point, l), null === (a = (i = e.props).onDrag) || void 0 === a || a.call(i, n, t), ns = n
                                }
                            },
                            onSessionEnd: function(n, t) {
                                return e.stop(n, t)
                            }
                        }, {
                            transformPagePoint: u
                        })
                    }, n.prototype.resolveDragConstraints = function() {
                        var n = this,
                            t = this.props,
                            e = t.dragConstraints,
                            r = t.dragElastic,
                            o = this.visualElement.getLayoutState().layoutCorrected;
                        this.constraints = !!e && ($e(e) ? this.resolveRefConstraints(o, e) : function(n, t) {
                            var e = t.top,
                                r = t.left,
                                o = t.bottom,
                                i = t.right;
                            return {
                                x: bu(n.x, r, i),
                                y: bu(n.y, e, o)
                            }
                        }(o, e)), this.elastic = function(n) {
                            return !1 === n ? n = 0 : !0 === n && (n = .35), {
                                x: xu(n, "left", "right"),
                                y: xu(n, "top", "bottom")
                            }
                        }(r), this.constraints && !this.hasMutatedConstraints && gu((function(t) {
                            n.getAxisMotionValue(t) && (n.constraints[t] = function(n, t) {
                                var e = {};
                                return void 0 !== t.min && (e.min = t.min - n.min), void 0 !== t.max && (e.max = t.max - n.min), e
                            }(o[t], n.constraints[t]))
                        }))
                    }, n.prototype.resolveRefConstraints = function(n, t) {
                        var e = this.props,
                            r = e.onMeasureDragConstraints,
                            o = e.transformPagePoint,
                            i = t.current;
                        ke(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."), this.constraintsBox = Eu(i, o);
                        var a = function(n, t) {
                            return {
                                x: wu(n.x, t.x),
                                y: wu(n.y, t.y)
                            }
                        }(n, this.constraintsBox);
                        if (r) {
                            var u = r(function(n) {
                                var t = n.x,
                                    e = n.y;
                                return {
                                    top: e.min,
                                    bottom: e.max,
                                    left: t.min,
                                    right: t.max
                                }
                            }(a));
                            this.hasMutatedConstraints = !!u, u && (a = hu(u))
                        }
                        return a
                    }, n.prototype.cancelDrag = function() {
                        var n, t;
                        this.visualElement.unlockProjectionTarget(), null === (n = this.cancelLayout) || void 0 === n || n.call(this), this.isDragging = !1, this.panSession && this.panSession.end(), this.panSession = null, !this.props.dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(Po.Drag, !1)
                    }, n.prototype.stop = function(n, t) {
                        var e, r, o;
                        null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = null;
                        var i = this.isDragging;
                        if (this.cancelDrag(), i) {
                            var a = t.velocity;
                            this.animateDragEnd(a), null === (o = (r = this.props).onDragEnd) || void 0 === o || o.call(r, n, t)
                        }
                    }, n.prototype.snapToCursor = function(n) {
                        var t = this;
                        return gu((function(e) {
                            if (os(e, t.props.drag, t.currentDirection)) {
                                var r = t.getAxisMotionValue(e);
                                if (!r) return t.cursorProgress[e] = .5, !0;
                                var o = t.visualElement.getLayoutState().layout,
                                    i = o[e].max - o[e].min,
                                    a = o[e].min + i / 2,
                                    u = n[e] - a;
                                t.originPoint[e] = n[e], r.set(u)
                            }
                        })).includes(!0)
                    }, n.prototype.updateAxis = function(n, t, e) {
                        if (os(n, this.props.drag, this.currentDirection)) return this.getAxisMotionValue(n) ? this.updateAxisMotionValue(n, e) : this.updateVisualElementAxis(n, t)
                    }, n.prototype.updateAxisMotionValue = function(n, t) {
                        var e = this.getAxisMotionValue(n);
                        if (t && e) {
                            var r = this.originPoint[n] + t[n],
                                o = this.constraints ? yu(r, this.constraints[n], this.elastic[n]) : r;
                            e.set(o)
                        }
                    }, n.prototype.updateVisualElementAxis = function(n, t) {
                        var e, r = this.visualElement.getLayoutState().layout[n],
                            o = r.max - r.min,
                            i = this.cursorProgress[n],
                            a = function(n, t, e, r, o) {
                                var i = n - t * e;
                                return r ? yu(i, r, o) : i
                            }(t[n], o, i, null === (e = this.constraints) || void 0 === e ? void 0 : e[n], this.elastic[n]);
                        this.visualElement.setProjectionTargetAxis(n, a, a + o)
                    }, n.prototype.setProps = function(n) {
                        var t = n.drag,
                            e = void 0 !== t && t,
                            r = n.dragDirectionLock,
                            o = void 0 !== r && r,
                            i = n.dragPropagation,
                            a = void 0 !== i && i,
                            u = n.dragConstraints,
                            s = void 0 !== u && u,
                            c = n.dragElastic,
                            l = void 0 === c ? .35 : c,
                            f = n.dragMomentum,
                            p = void 0 === f || f,
                            d = Ce(n, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
                        this.props = _e({
                            drag: e,
                            dragDirectionLock: o,
                            dragPropagation: a,
                            dragConstraints: s,
                            dragElastic: l,
                            dragMomentum: p
                        }, d)
                    }, n.prototype.getAxisMotionValue = function(n) {
                        var t = this.props,
                            e = t.layout,
                            r = t.layoutId,
                            o = "_drag" + n.toUpperCase();
                        return this.props[o] ? this.props[o] : e || void 0 !== r ? void 0 : this.visualElement.getValue(n, 0)
                    }, n.prototype.isLayoutDrag = function() {
                        return !this.getAxisMotionValue("x")
                    }, n.prototype.isExternalDrag = function() {
                        var n = this.props,
                            t = n._dragX,
                            e = n._dragY;
                        return t || e
                    }, n.prototype.animateDragEnd = function(n) {
                        var t = this,
                            e = this.props,
                            r = e.drag,
                            o = e.dragMomentum,
                            i = e.dragElastic,
                            a = e.dragTransition,
                            u = function(n, t) {
                                void 0 === t && (t = !0);
                                var e, r = n.getProjectionParent();
                                return !!r && (t ? Gu(e = Iu(r.projection.target, n.projection.target), r.getLatestValues()) : e = Iu(r.getLayoutState().layout, n.getLayoutState().layout), gu((function(t) {
                                    return n.setProjectionTargetAxis(t, e[t].min, e[t].max, !0)
                                })), !0)
                            }(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag()),
                            s = this.constraints || {};
                        if (u && Object.keys(s).length && this.isLayoutDrag()) {
                            var c = this.visualElement.getProjectionParent();
                            if (c) {
                                var l = Iu(c.projection.targetFinal, s);
                                gu((function(n) {
                                    var t = l[n],
                                        e = t.min,
                                        r = t.max;
                                    s[n] = {
                                        min: isNaN(e) ? void 0 : e,
                                        max: isNaN(r) ? void 0 : r
                                    }
                                }))
                            }
                        }
                        var f = gu((function(e) {
                            var c;
                            if (os(e, r, t.currentDirection)) {
                                var l = null !== (c = null == s ? void 0 : s[e]) && void 0 !== c ? c : {},
                                    f = i ? 200 : 1e6,
                                    p = i ? 40 : 1e7,
                                    d = _e(_e({
                                        type: "inertia",
                                        velocity: o ? n[e] : 0,
                                        bounceStiffness: f,
                                        bounceDamping: p,
                                        timeConstant: 750,
                                        restDelta: 1,
                                        restSpeed: 10
                                    }, a), l);
                                return t.getAxisMotionValue(e) ? t.startAxisValueAnimation(e, d) : t.visualElement.startLayoutAnimation(e, d, u)
                            }
                        }));
                        return Promise.all(f).then((function() {
                            var n, e;
                            null === (e = (n = t.props).onDragTransitionEnd) || void 0 === e || e.call(n)
                        }))
                    }, n.prototype.stopMotion = function() {
                        var n = this;
                        gu((function(t) {
                            var e = n.getAxisMotionValue(t);
                            e ? e.stop() : n.visualElement.stopLayoutAnimation()
                        }))
                    }, n.prototype.startAxisValueAnimation = function(n, t) {
                        var e = this.getAxisMotionValue(n);
                        if (e) {
                            var r = e.get();
                            return e.set(r), e.set(r), Da(n, e, 0, t)
                        }
                    }, n.prototype.scalePoint = function() {
                        var n = this,
                            t = this.props,
                            e = t.drag;
                        if ($e(t.dragConstraints) && this.constraintsBox) {
                            this.stopMotion();
                            var r = {
                                x: 0,
                                y: 0
                            };
                            gu((function(t) {
                                r[t] = function(n, t) {
                                    var e = .5,
                                        r = Cu(n),
                                        o = Cu(t);
                                    return o > r ? e = ai(t.min, t.max - r, n.min) : r > o && (e = ai(n.min, n.max - o, t.min)),
                                        function(n) {
                                            return Qo(0, 1, n)
                                        }(e)
                                }(n.visualElement.projection.target[t], n.constraintsBox[t])
                            })), this.updateConstraints((function() {
                                gu((function(t) {
                                    if (os(t, e, null)) {
                                        var o = function(n, t, e) {
                                                var r = n.max - n.min,
                                                    o = ui(t.min, t.max - r, e);
                                                return {
                                                    min: o,
                                                    max: o + r
                                                }
                                            }(n.visualElement.projection.target[t], n.constraintsBox[t], r[t]),
                                            i = o.min,
                                            a = o.max;
                                        n.visualElement.setProjectionTargetAxis(t, i, a)
                                    }
                                }))
                            })), setTimeout(Qu, 1)
                        }
                    }, n.prototype.updateConstraints = function(n) {
                        var t = this;
                        this.cancelLayout = Ju((function(e, r) {
                            var o = Ru(t.visualElement);
                            r((function() {
                                return o.forEach((function(n) {
                                    return n.resetTransform()
                                }))
                            })), e((function() {
                                return Nu(t.visualElement)
                            })), r((function() {
                                return o.forEach((function(n) {
                                    return n.restoreTransform()
                                }))
                            })), e((function() {
                                t.resolveDragConstraints()
                            })), n && r(n)
                        }))
                    }, n.prototype.mount = function(n) {
                        var t = this,
                            e = Yo(n.getInstance(), "pointerdown", (function(n) {
                                var e = t.props,
                                    r = e.drag,
                                    o = e.dragListener;
                                r && (void 0 === o || o) && t.start(n)
                            })),
                            r = ko(window, "resize", (function() {
                                t.scalePoint()
                            })),
                            o = n.onLayoutUpdate((function() {
                                t.isDragging && t.resolveDragConstraints()
                            })),
                            i = n.prevDragCursor;
                        return i && this.start(ns, {
                                cursorProgress: i
                            }),
                            function() {
                                null == e || e(), null == r || r(), null == o || o(), t.cancelDrag()
                            }
                    }, n
                }();

            function os(n, t, e) {
                return !(!0 !== t && t !== n || null !== e && e !== n)
            }
            var is, as, us = {
                pan: va((function(n) {
                    var t = n.onPan,
                        e = n.onPanStart,
                        o = n.onPanEnd,
                        i = n.onPanSessionStart,
                        a = n.visualElement,
                        u = t || e || o || i,
                        s = (0, r.useRef)(null),
                        c = (0, r.useContext)(Ie).transformPagePoint,
                        l = {
                            onSessionStart: i,
                            onStart: e,
                            onMove: t,
                            onEnd: function(n, t) {
                                s.current = null, o && o(n, t)
                            }
                        };
                    (0, r.useEffect)((function() {
                        null !== s.current && s.current.updateHandlers(l)
                    })), Ho(a, "pointerdown", u && function(n) {
                        s.current = new au(n, l, {
                            transformPagePoint: c
                        })
                    }), Jo((function() {
                        return s.current && s.current.end()
                    }))
                })),
                drag: va((function(n) {
                    var t = n.dragControls,
                        e = n.visualElement,
                        o = (0, r.useContext)(Ie).transformPagePoint,
                        i = je((function() {
                            return new rs({
                                visualElement: e
                            })
                        }));
                    i.setProps(_e(_e({}, n), {
                        transformPagePoint: o
                    })), (0, r.useEffect)((function() {
                        return t && t.subscribe(i)
                    }), [i]), (0, r.useEffect)((function() {
                        return i.mount(e)
                    }), [])
                }))
            };

            function ss(n) {
                return "string" == typeof n && n.startsWith("var(--")
            }! function(n) {
                n[n.Entering = 0] = "Entering", n[n.Present = 1] = "Present", n[n.Exiting = 2] = "Exiting"
            }(is || (is = {})),
            function(n) {
                n[n.Hide = 0] = "Hide", n[n.Show = 1] = "Show"
            }(as || (as = {}));
            var cs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function ls(n, t, e) {
                void 0 === e && (e = 1), ke(e <= 4, 'Max CSS variable fallback depth detected in property "' + n + '". This may indicate a circular fallback dependency.');
                var r = Te(function(n) {
                        var t = cs.exec(n);
                        if (!t) return [, ];
                        var e = Te(t, 3);
                        return [e[1], e[2]]
                    }(n), 2),
                    o = r[0],
                    i = r[1];
                if (o) {
                    var a = window.getComputedStyle(t).getPropertyValue(o);
                    return a ? a.trim() : ss(i) ? ls(i, t, e + 1) : i
                }
            }

            function fs(n, t) {
                return n / (t.max - t.min) * 100
            }
            var ps = {
                    process: function(n, t, e) {
                        var r = e.target;
                        if ("string" == typeof n) {
                            if (!Ar.test(n)) return n;
                            n = parseFloat(n)
                        }
                        return fs(n, r.x) + "% " + fs(n, r.y) + "%"
                    }
                },
                ds = {
                    borderRadius: _e(_e({}, ps), {
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    }),
                    borderTopLeftRadius: ps,
                    borderTopRightRadius: ps,
                    borderBottomLeftRadius: ps,
                    borderBottomRightRadius: ps,
                    boxShadow: {
                        process: function(n, t) {
                            var e = t.delta,
                                r = t.treeScale,
                                o = n,
                                i = n.includes("var("),
                                a = [];
                            i && (n = n.replace(cs, (function(n) {
                                return a.push(n), "_$css"
                            })));
                            var u = Hr.parse(n);
                            if (u.length > 5) return o;
                            var s = Hr.createTransformer(n),
                                c = "number" != typeof u[0] ? 1 : 0,
                                l = e.x.scale * r.x,
                                f = e.y.scale * r.y;
                            u[0 + c] /= l, u[1 + c] /= f;
                            var p = ui(l, f, .5);
                            "number" == typeof u[2 + c] && (u[2 + c] /= p), "number" == typeof u[3 + c] && (u[3 + c] /= p);
                            var d = s(u);
                            if (i) {
                                var h = 0;
                                d = d.replace("_$css", (function() {
                                    var n = a[h];
                                    return h++, n
                                }))
                            }
                            return d
                        }
                    }
                },
                hs = function(n) {
                    function t() {
                        var t = null !== n && n.apply(this, arguments) || this;
                        return t.frameTarget = {
                            x: {
                                min: 0,
                                max: 1
                            },
                            y: {
                                min: 0,
                                max: 1
                            }
                        }, t.currentAnimationTarget = {
                            x: {
                                min: 0,
                                max: 1
                            },
                            y: {
                                min: 0,
                                max: 1
                            }
                        }, t.isAnimating = {
                            x: !1,
                            y: !1
                        }, t.stopAxisAnimation = {
                            x: void 0,
                            y: void 0
                        }, t.isAnimatingTree = !1, t.animate = function(n, e, r) {
                            void 0 === r && (r = {});
                            var o = r.originBox,
                                i = r.targetBox,
                                a = r.visibilityAction,
                                u = r.shouldStackAnimate,
                                s = r.onComplete,
                                c = r.prevParent,
                                l = Ce(r, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate", "onComplete", "prevParent"]),
                                f = t.props,
                                p = f.visualElement,
                                d = f.layout;
                            if (!1 === u) return t.isAnimatingTree = !1, t.safeToRemove();
                            if (!t.isAnimatingTree || !0 === u) {
                                u && (t.isAnimatingTree = !0), e = o || e, n = i || n;
                                var h = !1,
                                    m = p.getProjectionParent();
                                if (m) {
                                    var v = m.prevViewportBox,
                                        g = m.getLayoutState().layout;
                                    c && (i && (g = c.getLayoutState().layout), o && !Du(c, m) && c.prevViewportBox && (v = c.prevViewportBox)), v && ws(c, o, i) && (h = !0, e = Iu(v, e), n = Iu(g, n))
                                }
                                var y = ms(e, n),
                                    b = gu((function(r) {
                                        var o, i;
                                        if ("position" === d) {
                                            var u = n[r].max - n[r].min;
                                            e[r].max = e[r].min + u
                                        }
                                        if (!p.projection.isTargetLocked) return void 0 === a ? y ? t.animateAxis(r, n[r], e[r], _e(_e({}, l), {
                                            isRelative: h
                                        })) : (null === (i = (o = t.stopAxisAnimation)[r]) || void 0 === i || i.call(o), p.setProjectionTargetAxis(r, n[r].min, n[r].max, h)) : void p.setVisibility(a === as.Show)
                                    }));
                                return p.syncRender(), Promise.all(b).then((function() {
                                    t.isAnimatingTree = !1, s && s(), p.notifyLayoutAnimationComplete()
                                }))
                            }
                        }, t
                    }
                    return Ee(t, n), t.prototype.componentDidMount = function() {
                        var n = this,
                            t = this.props.visualElement;
                        t.animateMotionValue = Da, t.enableLayoutProjection(), this.unsubLayoutReady = t.onLayoutUpdate(this.animate), t.layoutSafeToRemove = function() {
                                return n.safeToRemove()
                            },
                            function(n) {
                                for (var t in n) rr[t] = n[t]
                            }(ds)
                    }, t.prototype.componentWillUnmount = function() {
                        var n = this;
                        this.unsubLayoutReady(), gu((function(t) {
                            var e, r;
                            return null === (r = (e = n.stopAxisAnimation)[t]) || void 0 === r ? void 0 : r.call(e)
                        }))
                    }, t.prototype.animateAxis = function(n, t, e, r) {
                        var o, i, a = this,
                            u = void 0 === r ? {} : r,
                            s = u.transition,
                            c = u.isRelative;
                        if (!this.isAnimating[n] || !ys(t, this.currentAnimationTarget[n])) {
                            null === (i = (o = this.stopAxisAnimation)[n]) || void 0 === i || i.call(o), this.isAnimating[n] = !0;
                            var l = this.props.visualElement,
                                f = this.frameTarget[n],
                                p = l.getProjectionAnimationProgress()[n];
                            p.clearListeners(), p.set(0), p.set(0);
                            var d = function() {
                                var r = p.get() / 1e3;
                                ! function(n, t, e, r) {
                                    n.min = ui(t.min, e.min, r), n.max = ui(t.max, e.max, r)
                                }(f, e, t, r), l.setProjectionTargetAxis(n, f.min, f.max, c)
                            };
                            d();
                            var h = p.onChange(d);
                            this.stopAxisAnimation[n] = function() {
                                a.isAnimating[n] = !1, p.stop(), h()
                            }, this.currentAnimationTarget[n] = t;
                            var m = s || l.getDefaultTransition() || bs;
                            return Da("x" === n ? "layoutX" : "layoutY", p, 1e3, m && Ia(m, "layout")).then(this.stopAxisAnimation[n])
                        }
                    }, t.prototype.safeToRemove = function() {
                        var n, t;
                        null === (t = (n = this.props).safeToRemove) || void 0 === t || t.call(n)
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(r.Component);

            function ms(n, t) {
                return !(gs(n) || gs(t) || ys(n.x, t.x) && ys(n.y, t.y))
            }
            var vs = {
                min: 0,
                max: 0
            };

            function gs(n) {
                return ys(n.x, vs) && ys(n.y, vs)
            }

            function ys(n, t) {
                return n.min === t.min && n.max === t.max
            }
            var bs = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function ws(n, t, e) {
                return n || !n && !(t || e)
            }
            var xs = {
                layoutReady: function(n) {
                    return n.notifyLayoutReady()
                }
            };

            function Ss() {
                var n = new Set;
                return {
                    add: function(t) {
                        return n.add(t)
                    },
                    flush: function(t) {
                        var e = void 0 === t ? xs : t,
                            r = e.layoutReady,
                            o = e.parent;
                        Ju((function(t, e) {
                            var i = Array.from(n).sort(Ou),
                                a = o ? Ru(o) : [];
                            e((function() {
                                Pe(Pe([], Te(a)), Te(i)).forEach((function(n) {
                                    return n.resetTransform()
                                }))
                            })), t((function() {
                                i.forEach(Nu)
                            })), e((function() {
                                a.forEach((function(n) {
                                    return n.restoreTransform()
                                })), i.forEach(r)
                            })), t((function() {
                                i.forEach((function(n) {
                                    n.isPresent && (n.presence = is.Present)
                                }))
                            })), e((function() {
                                Ji.preRender(), Ji.render()
                            })), t((function() {
                                Ki.postRender((function() {
                                    return i.forEach(Es)
                                })), n.clear()
                            }))
                        })), Qu()
                    }
                }
            }

            function Es(n) {
                n.prevViewportBox = n.projection.target
            }
            var _s = (0, r.createContext)(Ss()),
                Cs = (0, r.createContext)(Ss());

            function Ts(n) {
                return !!n.forceUpdate
            }
            var Ps = function(n) {
                    function t() {
                        return null !== n && n.apply(this, arguments) || this
                    }
                    return Ee(t, n), t.prototype.componentDidMount = function() {
                        var n = this.props,
                            t = n.syncLayout,
                            e = n.framerSyncLayout,
                            r = n.visualElement;
                        Ts(t) && t.register(r), Ts(e) && e.register(r), r.onUnmount((function() {
                            Ts(t) && t.remove(r), Ts(e) && e.remove(r)
                        }))
                    }, t.prototype.getSnapshotBeforeUpdate = function() {
                        var n = this.props,
                            t = n.syncLayout,
                            e = n.visualElement;
                        return Ts(t) ? t.syncUpdate() : (function(n) {
                            n.shouldResetTransform() || (n.prevViewportBox = n.measureViewportBox(!1), n.rebaseProjectionTarget(!1, n.prevViewportBox))
                        }(e), t.add(e)), null
                    }, t.prototype.componentDidUpdate = function() {
                        var n = this.props.syncLayout;
                        Ts(n) || n.flush()
                    }, t.prototype.render = function() {
                        return null
                    }, t
                }(r.Component),
                As = {
                    measureLayout: function(n) {
                        var t = (0, r.useContext)(_s),
                            e = (0, r.useContext)(Cs);
                        return r.createElement(Ps, _e({}, n, {
                            syncLayout: t,
                            framerSyncLayout: e
                        }))
                    },
                    layoutAnimation: function(n) {
                        var t = Te(Be(), 2)[1];
                        return r.createElement(hs, _e({}, n, {
                            safeToRemove: t
                        }))
                    }
                };

            function Ls() {
                return {
                    isHydrated: !1,
                    layout: {
                        x: {
                            min: 0,
                            max: 1
                        },
                        y: {
                            min: 0,
                            max: 1
                        }
                    },
                    layoutCorrected: {
                        x: {
                            min: 0,
                            max: 1
                        },
                        y: {
                            min: 0,
                            max: 1
                        }
                    },
                    treeScale: {
                        x: 1,
                        y: 1
                    },
                    delta: vu(),
                    deltaFinal: vu(),
                    deltaTransform: ""
                }
            }
            var Os = Ls();

            function ks(n, t, e) {
                var r = n.x,
                    o = n.y,
                    i = "translate3d(" + r.translate / t.x + "px, " + o.translate / t.y + "px, 0) ";
                if (e) {
                    var a = e.rotate,
                        u = e.rotateX,
                        s = e.rotateY;
                    a && (i += "rotate(" + a + ") "), u && (i += "rotateX(" + u + ") "), s && (i += "rotateY(" + s + ") ")
                }
                return i += "scale(" + r.scale + ", " + o.scale + ")", e || i !== Ns ? i : ""
            }

            function Rs(n) {
                var t = n.deltaFinal;
                return 100 * t.x.origin + "% " + 100 * t.y.origin + "% 0"
            }
            var Ns = ks(Os.delta, Os.treeScale, {
                    x: 1,
                    y: 1
                }),
                zs = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"];
            var Is = function() {
                    function n() {
                        this.children = [], this.isDirty = !1
                    }
                    return n.prototype.add = function(n) {
                        ja(this.children, n), this.isDirty = !0
                    }, n.prototype.remove = function(n) {
                        Ba(this.children, n), this.isDirty = !0
                    }, n.prototype.forEach = function(n) {
                        this.isDirty && this.children.sort(Ou), this.isDirty = !1, this.children.forEach(n)
                    }, n
                }(),
                Ds = function(n) {
                    var t = n.treeType,
                        e = void 0 === t ? "" : t,
                        r = n.build,
                        o = n.getBaseTarget,
                        i = n.makeTargetAnimatable,
                        a = n.measureViewportBox,
                        u = n.render,
                        s = n.readValueFromInstance,
                        c = n.resetTransform,
                        l = n.restoreTransform,
                        f = n.removeValueFromRenderState,
                        p = n.sortNodePosition,
                        d = n.scrapeMotionValuesFromProps;
                    return function(n, t) {
                        var h = n.parent,
                            m = n.props,
                            v = n.presenceId,
                            g = n.blockInitialAnimation,
                            y = n.visualState;
                        void 0 === t && (t = {});
                        var b, w, x, S, E, _, C = y.latestValues,
                            T = y.renderState,
                            P = function() {
                                var n = zs.map((function() {
                                        return new Va
                                    })),
                                    t = {},
                                    e = {
                                        clearAllListeners: function() {
                                            return n.forEach((function(n) {
                                                return n.clear()
                                            }))
                                        },
                                        updatePropListeners: function(n) {
                                            return zs.forEach((function(r) {
                                                var o;
                                                null === (o = t[r]) || void 0 === o || o.call(t);
                                                var i = "on" + r,
                                                    a = n[i];
                                                a && (t[r] = e[i](a))
                                            }))
                                        }
                                    };
                                return n.forEach((function(n, t) {
                                    e["on" + zs[t]] = function(t) {
                                        return n.add(t)
                                    }, e["notify" + zs[t]] = function() {
                                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                        return n.notify.apply(n, Pe([], Te(t)))
                                    }
                                })), e
                            }(),
                            A = {
                                isEnabled: !1,
                                isHydrated: !1,
                                isTargetLocked: !1,
                                target: {
                                    x: {
                                        min: 0,
                                        max: 1
                                    },
                                    y: {
                                        min: 0,
                                        max: 1
                                    }
                                },
                                targetFinal: {
                                    x: {
                                        min: 0,
                                        max: 1
                                    },
                                    y: {
                                        min: 0,
                                        max: 1
                                    }
                                }
                            },
                            L = A,
                            O = C,
                            k = Ls(),
                            R = !1,
                            N = new Map,
                            z = new Map,
                            I = {},
                            D = _e({}, C);

                        function M() {
                            b && ($.isProjectionReady() && ($u(L.targetFinal, L.target, O), Pu(k.deltaFinal, k.layoutCorrected, L.targetFinal, C)), j(), u(b, T))
                        }

                        function j() {
                            var n = C;
                            if (S && S.isActive()) {
                                var e = S.getCrossfadeState($);
                                e && (n = e)
                            }
                            r($, T, n, L, k, t, m)
                        }

                        function B() {
                            P.notifyUpdate(C)
                        }

                        function V() {
                            $.layoutTree.forEach(js)
                        }
                        var F = d(m);
                        for (var W in F) {
                            var Y = F[W];
                            void 0 !== C[W] && pr(Y) && Y.set(C[W], !1)
                        }
                        var H = Ze(m),
                            U = Je(m),
                            $ = _e(_e({
                                treeType: e,
                                current: null,
                                depth: h ? h.depth + 1 : 0,
                                parent: h,
                                children: new Set,
                                path: h ? Pe(Pe([], Te(h.path)), [h]) : [],
                                layoutTree: h ? h.layoutTree : new Is,
                                presenceId: v,
                                projection: A,
                                variantChildren: U ? new Set : void 0,
                                isVisible: void 0,
                                manuallyAnimateOnMount: Boolean(null == h ? void 0 : h.isMounted()),
                                blockInitialAnimation: g,
                                isMounted: function() {
                                    return Boolean(b)
                                },
                                mount: function(n) {
                                    b = $.current = n, $.pointTo($), U && h && !H && (_ = null == h ? void 0 : h.addVariantChild($)), null == h || h.children.add($)
                                },
                                unmount: function() {
                                    Zi.update(B), Zi.render(M), Zi.preRender($.updateLayoutProjection), z.forEach((function(n) {
                                        return n()
                                    })), $.stopLayoutAnimation(), $.layoutTree.remove($), null == _ || _(), null == h || h.children.delete($), null == x || x(), P.clearAllListeners()
                                },
                                addVariantChild: function(n) {
                                    var t, e = $.getClosestVariantNode();
                                    if (e) return null === (t = e.variantChildren) || void 0 === t || t.add(n),
                                        function() {
                                            return e.variantChildren.delete(n)
                                        }
                                },
                                sortNodePosition: function(n) {
                                    return p && e === n.treeType ? p($.getInstance(), n.getInstance()) : 0
                                },
                                getClosestVariantNode: function() {
                                    return U ? $ : null == h ? void 0 : h.getClosestVariantNode()
                                },
                                scheduleUpdateLayoutProjection: h ? h.scheduleUpdateLayoutProjection : function() {
                                    return Ki.preRender($.updateTreeLayoutProjection, !1, !0)
                                },
                                getLayoutId: function() {
                                    return m.layoutId
                                },
                                getInstance: function() {
                                    return b
                                },
                                getStaticValue: function(n) {
                                    return C[n]
                                },
                                setStaticValue: function(n, t) {
                                    return C[n] = t
                                },
                                getLatestValues: function() {
                                    return C
                                },
                                setVisibility: function(n) {
                                    $.isVisible !== n && ($.isVisible = n, $.scheduleRender())
                                },
                                makeTargetAnimatable: function(n, t) {
                                    return void 0 === t && (t = !0), i($, n, m, t)
                                },
                                addValue: function(n, t) {
                                    $.hasValue(n) && $.removeValue(n), N.set(n, t), C[n] = t.get(),
                                        function(n, t) {
                                            var e = t.onChange((function(t) {
                                                    C[n] = t, m.onUpdate && Ki.update(B, !1, !0)
                                                })),
                                                r = t.onRenderRequest($.scheduleRender);
                                            z.set(n, (function() {
                                                e(), r()
                                            }))
                                        }(n, t)
                                },
                                removeValue: function(n) {
                                    var t;
                                    N.delete(n), null === (t = z.get(n)) || void 0 === t || t(), z.delete(n), delete C[n], f(n, T)
                                },
                                hasValue: function(n) {
                                    return N.has(n)
                                },
                                getValue: function(n, t) {
                                    var e = N.get(n);
                                    return void 0 === e && void 0 !== t && (e = Wa(t), $.addValue(n, e)), e
                                },
                                forEachValue: function(n) {
                                    return N.forEach(n)
                                },
                                readValue: function(n) {
                                    var e;
                                    return null !== (e = C[n]) && void 0 !== e ? e : s(b, n, t)
                                },
                                setBaseTarget: function(n, t) {
                                    D[n] = t
                                },
                                getBaseTarget: function(n) {
                                    if (o) {
                                        var t = o(m, n);
                                        if (void 0 !== t && !pr(t)) return t
                                    }
                                    return D[n]
                                }
                            }, P), {
                                build: function() {
                                    return j(), T
                                },
                                scheduleRender: function() {
                                    Ki.render(M, !1, !0)
                                },
                                syncRender: M,
                                setProps: function(n) {
                                    m = n, P.updatePropListeners(n), I = function(n, t, e) {
                                        var r;
                                        for (var o in t) {
                                            var i = t[o],
                                                a = e[o];
                                            if (pr(i)) n.addValue(o, i);
                                            else if (pr(a)) n.addValue(o, Wa(i));
                                            else if (a !== i)
                                                if (n.hasValue(o)) {
                                                    var u = n.getValue(o);
                                                    !u.hasAnimated && u.set(i)
                                                } else n.addValue(o, Wa(null !== (r = n.getStaticValue(o)) && void 0 !== r ? r : i))
                                        }
                                        for (var o in e) void 0 === t[o] && n.removeValue(o);
                                        return t
                                    }($, d(m), I)
                                },
                                getProps: function() {
                                    return m
                                },
                                getVariant: function(n) {
                                    var t;
                                    return null === (t = m.variants) || void 0 === t ? void 0 : t[n]
                                },
                                getDefaultTransition: function() {
                                    return m.transition
                                },
                                getVariantContext: function(n) {
                                    if (void 0 === n && (n = !1), n) return null == h ? void 0 : h.getVariantContext();
                                    if (!H) {
                                        var t = (null == h ? void 0 : h.getVariantContext()) || {};
                                        return void 0 !== m.initial && (t.initial = m.initial), t
                                    }
                                    for (var e = {}, r = 0; r < Fs; r++) {
                                        var o = Vs[r],
                                            i = m[o];
                                        (qe(i) || !1 === i) && (e[o] = i)
                                    }
                                    return e
                                },
                                enableLayoutProjection: function() {
                                    A.isEnabled = !0, $.layoutTree.add($)
                                },
                                lockProjectionTarget: function() {
                                    A.isTargetLocked = !0
                                },
                                unlockProjectionTarget: function() {
                                    $.stopLayoutAnimation(), A.isTargetLocked = !1
                                },
                                getLayoutState: function() {
                                    return k
                                },
                                setCrossfader: function(n) {
                                    S = n
                                },
                                isProjectionReady: function() {
                                    return A.isEnabled && A.isHydrated && k.isHydrated
                                },
                                startLayoutAnimation: function(n, t, e) {
                                    void 0 === e && (e = !1);
                                    var r = $.getProjectionAnimationProgress()[n],
                                        o = e ? A.relativeTarget[n] : A.target[n],
                                        i = o.min,
                                        a = o.max - i;
                                    return r.clearListeners(), r.set(i), r.set(i), r.onChange((function(t) {
                                        $.setProjectionTargetAxis(n, t, t + a, e)
                                    })), $.animateMotionValue(n, r, 0, t)
                                },
                                stopLayoutAnimation: function() {
                                    gu((function(n) {
                                        return $.getProjectionAnimationProgress()[n].stop()
                                    }))
                                },
                                measureViewportBox: function(n) {
                                    void 0 === n && (n = !0);
                                    var e = a(b, t);
                                    return n || Gu(e, C), e
                                },
                                getProjectionAnimationProgress: function() {
                                    return E || (E = {
                                        x: Wa(0),
                                        y: Wa(0)
                                    }), E
                                },
                                setProjectionTargetAxis: function(n, t, e, r) {
                                    var o;
                                    void 0 === r && (r = !1), r ? (A.relativeTarget || (A.relativeTarget = {
                                        x: {
                                            min: 0,
                                            max: 1
                                        },
                                        y: {
                                            min: 0,
                                            max: 1
                                        }
                                    }), o = A.relativeTarget[n]) : (A.relativeTarget = void 0, o = A.target[n]), A.isHydrated = !0, o.min = t, o.max = e, R = !0, P.notifySetAxisTarget()
                                },
                                rebaseProjectionTarget: function(n, t) {
                                    void 0 === t && (t = k.layout);
                                    var e = $.getProjectionAnimationProgress(),
                                        r = e.x,
                                        o = e.y,
                                        i = !(A.relativeTarget || A.isTargetLocked || r.isAnimating() || o.isAnimating());
                                    (n || i) && gu((function(n) {
                                        var e = t[n],
                                            r = e.min,
                                            o = e.max;
                                        $.setProjectionTargetAxis(n, r, o)
                                    }))
                                },
                                notifyLayoutReady: function(n) {
                                    ! function(n) {
                                        var t = n.getProjectionParent();
                                        if (t) {
                                            var e = Iu(t.getLayoutState().layout, n.getLayoutState().layout);
                                            gu((function(t) {
                                                n.setProjectionTargetAxis(t, e[t].min, e[t].max, !0)
                                            }))
                                        } else n.rebaseProjectionTarget()
                                    }($), $.notifyLayoutUpdate(k.layout, $.prevViewportBox || k.layout, n)
                                },
                                resetTransform: function() {
                                    return c($, b, m)
                                },
                                restoreTransform: function() {
                                    return l(b, T)
                                },
                                updateLayoutProjection: function() {
                                    if ($.isProjectionReady()) {
                                        var n = k.delta,
                                            t = k.treeScale,
                                            e = t.x,
                                            r = t.y,
                                            o = k.deltaTransform;
                                        (function(n, t, e, r) {
                                            var o, i, a = n.delta,
                                                u = n.layout,
                                                s = n.layoutCorrected,
                                                c = n.treeScale,
                                                l = t.target;
                                            i = u, ju((o = s).x, i.x), ju(o.y, i.y),
                                                function(n, t, e) {
                                                    var r = e.length;
                                                    if (r) {
                                                        var o, i;
                                                        t.x = t.y = 1;
                                                        for (var a = 0; a < r; a++) i = (o = e[a]).getLayoutState().delta, t.x *= i.x.scale, t.y *= i.y.scale, Wu(n, i), Mu(o) && $u(n, n, o.getLatestValues())
                                                    }
                                                }(s, c, e), Pu(a, s, l, r)
                                        })(k, L, $.path, C), R && $.notifyViewportBoxUpdate(L.target, n), R = !1;
                                        var i = ks(n, t);
                                        i === o && e === t.x && r === t.y || $.scheduleRender(), k.deltaTransform = i
                                    }
                                },
                                updateTreeLayoutProjection: function() {
                                    $.layoutTree.forEach(Ms), Ki.preRender(V, !1, !0)
                                },
                                getProjectionParent: function() {
                                    if (void 0 === w) {
                                        for (var n = !1, t = $.path.length - 1; t >= 0; t--) {
                                            var e = $.path[t];
                                            if (e.projection.isEnabled) {
                                                n = e;
                                                break
                                            }
                                        }
                                        w = n
                                    }
                                    return w
                                },
                                resolveRelativeTargetBox: function() {
                                    var n = $.getProjectionParent();
                                    if (A.relativeTarget && n && (function(n, t) {
                                            Lu(n.target.x, n.relativeTarget.x, t.target.x), Lu(n.target.y, n.relativeTarget.y, t.target.y)
                                        }(A, n.projection), Mu(n))) {
                                        var t = A.target;
                                        $u(t, t, n.getLatestValues())
                                    }
                                },
                                shouldResetTransform: function() {
                                    return Boolean(m._layoutResetTransform)
                                },
                                pointTo: function(n) {
                                    L = n.projection, O = n.getLatestValues(), null == x || x(), x = mi(n.onSetAxisTarget($.scheduleUpdateLayoutProjection), n.onLayoutAnimationComplete((function() {
                                        var n;
                                        $.isPresent ? $.presence = is.Present : null === (n = $.layoutSafeToRemove) || void 0 === n || n.call($)
                                    })))
                                },
                                isPresent: !0,
                                presence: is.Entering
                            });
                        return $
                    }
                };

            function Ms(n) {
                n.resolveRelativeTargetBox()
            }

            function js(n) {
                n.updateLayoutProjection()
            }
            var Bs, Vs = Pe(["initial"], Te(nu)),
                Fs = Vs.length,
                Ws = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                Ys = function(n) {
                    return Ws.has(n)
                },
                Hs = function(n, t) {
                    n.set(t, !1), n.set(t)
                },
                Us = function(n) {
                    return n === Sr || n === Ar
                };
            ! function(n) {
                n.width = "width", n.height = "height", n.left = "left", n.right = "right", n.top = "top", n.bottom = "bottom"
            }(Bs || (Bs = {}));
            var $s = function(n, t) {
                    return parseFloat(n.split(", ")[t])
                },
                Xs = function(n, t) {
                    return function(e, r) {
                        var o = r.transform;
                        if ("none" === o || !o) return 0;
                        var i = o.match(/^matrix3d\((.+)\)$/);
                        if (i) return $s(i[1], t);
                        var a = o.match(/^matrix\((.+)\)$/);
                        return a ? $s(a[1], n) : 0
                    }
                },
                qs = new Set(["x", "y", "z"]),
                Gs = ir.filter((function(n) {
                    return !qs.has(n)
                })),
                Ks = {
                    width: function(n) {
                        var t = n.x;
                        return t.max - t.min
                    },
                    height: function(n) {
                        var t = n.y;
                        return t.max - t.min
                    },
                    top: function(n, t) {
                        var e = t.top;
                        return parseFloat(e)
                    },
                    left: function(n, t) {
                        var e = t.left;
                        return parseFloat(e)
                    },
                    bottom: function(n, t) {
                        var e = n.y,
                            r = t.top;
                        return parseFloat(r) + (e.max - e.min)
                    },
                    right: function(n, t) {
                        var e = n.x,
                            r = t.left;
                        return parseFloat(r) + (e.max - e.min)
                    },
                    x: Xs(4, 13),
                    y: Xs(5, 14)
                };

            function Zs(n, t, e, r) {
                return function(n) {
                    return Object.keys(n).some(Ys)
                }(t) ? function(n, t, e, r) {
                    void 0 === e && (e = {}), void 0 === r && (r = {}), t = _e({}, t), r = _e({}, r);
                    var o = Object.keys(t).filter(Ys),
                        i = [],
                        a = !1,
                        u = [];
                    if (o.forEach((function(o) {
                            var s = n.getValue(o);
                            if (n.hasValue(o)) {
                                var c, l = e[o],
                                    f = t[o],
                                    p = Ua(l);
                                if (xo(f))
                                    for (var d = f.length, h = null === f[0] ? 1 : 0; h < d; h++) c ? ke(Ua(f[h]) === c, "All keyframes must be of the same type") : (c = Ua(f[h]), ke(c === p || Us(p) && Us(c), "Keyframes must be of the same dimension as the current value"));
                                else c = Ua(f);
                                if (p !== c)
                                    if (Us(p) && Us(c)) {
                                        var m = s.get();
                                        "string" == typeof m && s.set(parseFloat(m)), "string" == typeof f ? t[o] = parseFloat(f) : Array.isArray(f) && c === Ar && (t[o] = f.map(parseFloat))
                                    } else(null == p ? void 0 : p.transform) && (null == c ? void 0 : c.transform) && (0 === l || 0 === f) ? 0 === l ? s.set(c.transform(l)) : t[o] = p.transform(f) : (a || (i = function(n) {
                                        var t = [];
                                        return Gs.forEach((function(e) {
                                            var r = n.getValue(e);
                                            void 0 !== r && (t.push([e, r.get()]), r.set(e.startsWith("scale") ? 1 : 0))
                                        })), t.length && n.syncRender(), t
                                    }(n), a = !0), u.push(o), r[o] = void 0 !== r[o] ? r[o] : t[o], Hs(s, f))
                            }
                        })), u.length) {
                        var s = function(n, t, e) {
                            var r = t.measureViewportBox(),
                                o = t.getInstance(),
                                i = getComputedStyle(o),
                                a = i.display,
                                u = {
                                    top: i.top,
                                    left: i.left,
                                    bottom: i.bottom,
                                    right: i.right,
                                    transform: i.transform
                                };
                            "none" === a && t.setStaticValue("display", n.display || "block"), t.syncRender();
                            var s = t.measureViewportBox();
                            return e.forEach((function(e) {
                                var o = t.getValue(e);
                                Hs(o, Ks[e](r, u)), n[e] = Ks[e](s, i)
                            })), n
                        }(t, n, u);
                        return i.length && i.forEach((function(t) {
                            var e = Te(t, 2),
                                r = e[0],
                                o = e[1];
                            n.getValue(r).set(o)
                        })), n.syncRender(), {
                            target: s,
                            transitionEnd: r
                        }
                    }
                    return {
                        target: t,
                        transitionEnd: r
                    }
                }(n, t, e, r) : {
                    target: t,
                    transitionEnd: r
                }
            }
            var Js = {
                    treeType: "dom",
                    readValueFromInstance: function(n, t) {
                        if (sr(t)) {
                            var e = La(t);
                            return e && e.default || 0
                        }
                        var r, o = (r = n, window.getComputedStyle(r));
                        return (hr(t) ? o.getPropertyValue(t) : o[t]) || 0
                    },
                    sortNodePosition: function(n, t) {
                        return 2 & n.compareDocumentPosition(t) ? 1 : -1
                    },
                    getBaseTarget: function(n, t) {
                        var e;
                        return null === (e = n.style) || void 0 === e ? void 0 : e[t]
                    },
                    measureViewportBox: function(n, t) {
                        return Eu(n, t.transformPagePoint)
                    },
                    resetTransform: function(n, t, e) {
                        var r = e.transformTemplate;
                        t.style.transform = r ? r({}, "") : "none", n.scheduleRender()
                    },
                    restoreTransform: function(n, t) {
                        n.style.transform = t.style.transform
                    },
                    removeValueFromRenderState: function(n, t) {
                        var e = t.vars,
                            r = t.style;
                        delete e[n], delete r[n]
                    },
                    makeTargetAnimatable: function(n, t, e, r) {
                        var o = e.transformValues;
                        void 0 === r && (r = !0);
                        var i = t.transition,
                            a = t.transitionEnd,
                            u = Ce(t, ["transition", "transitionEnd"]),
                            s = function(n, t, e) {
                                var r, o, i = {};
                                for (var a in n) i[a] = null !== (r = Ga(a, t)) && void 0 !== r ? r : null === (o = e.getValue(a)) || void 0 === o ? void 0 : o.get();
                                return i
                            }(u, i || {}, n);
                        if (o && (a && (a = o(a)), u && (u = o(u)), s && (s = o(s))), r) {
                            ! function(n, t, e) {
                                var r, o, i, a, u = Object.keys(t).filter((function(t) {
                                        return !n.hasValue(t)
                                    })),
                                    s = u.length;
                                if (s)
                                    for (var c = 0; c < s; c++) {
                                        var l = u[c],
                                            f = t[l],
                                            p = null;
                                        Array.isArray(f) && (p = f[0]), null === p && (p = null !== (o = null !== (r = e[l]) && void 0 !== r ? r : n.readValue(l)) && void 0 !== o ? o : t[l]), null != p && ("string" == typeof p && Ma(p) ? p = parseFloat(p) : !Xa(p) && Hr.test(f) && (p = Oa(l, f)), n.addValue(l, Wa(p)), null !== (i = (a = e)[l]) && void 0 !== i || (a[l] = p), n.setBaseTarget(l, p))
                                    }
                            }(n, u, s);
                            var c = function(n, t, e, r) {
                                var o = function(n, t, e) {
                                    var r, o = Ce(t, []),
                                        i = n.getInstance();
                                    if (!(i instanceof HTMLElement)) return {
                                        target: o,
                                        transitionEnd: e
                                    };
                                    for (var a in e && (e = _e({}, e)), n.forEachValue((function(n) {
                                            var t = n.get();
                                            if (ss(t)) {
                                                var e = ls(t, i);
                                                e && n.set(e)
                                            }
                                        })), o) {
                                        var u = o[a];
                                        if (ss(u)) {
                                            var s = ls(u, i);
                                            s && (o[a] = s, e && (null !== (r = e[a]) && void 0 !== r || (e[a] = u)))
                                        }
                                    }
                                    return {
                                        target: o,
                                        transitionEnd: e
                                    }
                                }(n, t, r);
                                return Zs(n, t = o.target, e, r = o.transitionEnd)
                            }(n, u, s, a);
                            a = c.transitionEnd, u = c.target
                        }
                        return _e({
                            transition: i,
                            transitionEnd: a
                        }, u)
                    },
                    scrapeMotionValuesFromProps: yo,
                    build: function(n, t, e, r, o, i, a) {
                        void 0 !== n.isVisible && (t.style.visibility = n.isVisible ? "visible" : "hidden");
                        var u = r.isEnabled && o.isHydrated;
                        Zr(t, e, r, o, i, a.transformTemplate, u ? ks : void 0, u ? Rs : void 0)
                    },
                    render: mo
                },
                Qs = Ds(Js),
                nc = Ds(_e(_e({}, Js), {
                    getBaseTarget: function(n, t) {
                        return n[t]
                    },
                    readValueFromInstance: function(n, t) {
                        var e;
                        return sr(t) ? (null === (e = La(t)) || void 0 === e ? void 0 : e.default) || 0 : (t = vo.has(t) ? t : ho(t), n.getAttribute(t))
                    },
                    scrapeMotionValuesFromProps: bo,
                    build: function(n, t, e, r, o, i, a) {
                        var u = r.isEnabled && o.isHydrated;
                        so(t, e, r, o, i, a.transformTemplate, u ? ks : void 0, u ? Rs : void 0)
                    },
                    render: go
                })),
                tc = function(n, t) {
                    return er(n) ? nc(t, {
                        enableHardwareAcceleration: !1
                    }) : Qs(t, {
                        enableHardwareAcceleration: !0
                    })
                },
                ec = _e(_e(_e(_e({}, iu), ga), us), As),
                rc = function(n) {
                    function t(t, e) {
                        return void 0 === e && (e = {}), nr(n(t, e))
                    }
                    var e = new Map;
                    return new Proxy(t, {
                        get: function(n, r) {
                            return e.has(r) || e.set(r, t(r)), e.get(r)
                        }
                    })
                }((function(n, t) {
                    return function(n, t, e, r) {
                        var o = t.forwardMotionProps,
                            i = void 0 !== o && o,
                            a = er(n) ? Lo : Oo;
                        return _e(_e({}, a), {
                            preloadedFeatures: e,
                            useRender: fo(i),
                            createVisualElement: r,
                            Component: n
                        })
                    }(n, t, ec, tc)
                })),
                oc = 0;

            function ic() {
                var n = oc;
                return oc++, n
            }
            var ac = function(n) {
                var t = n.children,
                    e = n.initial,
                    o = n.isPresent,
                    i = n.onExitComplete,
                    a = n.custom,
                    u = n.presenceAffectsLayout,
                    s = je(uc),
                    c = je(ic),
                    l = (0, r.useMemo)((function() {
                        return {
                            id: c,
                            initial: e,
                            isPresent: o,
                            custom: a,
                            onExitComplete: function(n) {
                                s.set(n, !0);
                                var t = !0;
                                s.forEach((function(n) {
                                    n || (t = !1)
                                })), t && (null == i || i())
                            },
                            register: function(n) {
                                return s.set(n, !1),
                                    function() {
                                        return s.delete(n)
                                    }
                            }
                        }
                    }), u ? void 0 : [o]);
                return (0, r.useMemo)((function() {
                    s.forEach((function(n, t) {
                        return s.set(t, !1)
                    }))
                }), [o]), r.useEffect((function() {
                    !o && !s.size && (null == i || i())
                }), [o]), r.createElement(Me.Provider, {
                    value: l
                }, t)
            };

            function uc() {
                return new Map
            }

            function sc(n) {
                return n.key || ""
            }
            var cc, lc, fc, pc, dc, hc, mc, vc, gc, yc, bc = function(n) {
                    var t = n.children,
                        e = n.custom,
                        o = n.initial,
                        a = void 0 === o || o,
                        u = n.onExitComplete,
                        s = n.exitBeforeEnter,
                        c = n.presenceAffectsLayout,
                        l = void 0 === c || c,
                        f = function() {
                            var n = (0, r.useRef)(!1),
                                t = Te((0, r.useState)(0), 2),
                                e = t[0],
                                o = t[1];
                            return Jo((function() {
                                return n.current = !0
                            })), (0, r.useCallback)((function() {
                                !n.current && o(e + 1)
                            }), [e])
                        }(),
                        p = (0, r.useContext)(_s);
                    Ts(p) && (f = p.forceUpdate);
                    var d = (0, r.useRef)(!0),
                        h = function(n) {
                            var t = [];
                            return r.Children.forEach(n, (function(n) {
                                (0, r.isValidElement)(n) && t.push(n)
                            })), t
                        }(t),
                        m = (0, r.useRef)(h),
                        v = (0, r.useRef)(new Map).current,
                        g = (0, r.useRef)(new Set).current;
                    if (function(n, t) {
                            var e = "production" !== i().env.NODE_ENV ? new Set : null;
                            n.forEach((function(n) {
                                var r = sc(n);
                                "production" !== i().env.NODE_ENV && e && (e.has(r) && console.warn('Children of AnimatePresence require unique keys. "' + r + '" is a duplicate.'), e.add(r)), t.set(r, n)
                            }))
                        }(h, v), d.current) return d.current = !1, r.createElement(r.Fragment, null, h.map((function(n) {
                        return r.createElement(ac, {
                            key: sc(n),
                            isPresent: !0,
                            initial: !!a && void 0,
                            presenceAffectsLayout: l
                        }, n)
                    })));
                    for (var y = Pe([], Te(h)), b = m.current.map(sc), w = h.map(sc), x = b.length, S = 0; S < x; S++) {
                        var E = b[S]; - 1 === w.indexOf(E) ? g.add(E) : g.delete(E)
                    }
                    return s && g.size && (y = []), g.forEach((function(n) {
                        if (-1 === w.indexOf(n)) {
                            var t = v.get(n);
                            if (t) {
                                var o = b.indexOf(n);
                                y.splice(o, 0, r.createElement(ac, {
                                    key: sc(t),
                                    isPresent: !1,
                                    onExitComplete: function() {
                                        v.delete(n), g.delete(n);
                                        var t = m.current.findIndex((function(t) {
                                            return t.key === n
                                        }));
                                        m.current.splice(t, 1), g.size || (m.current = h, f(), u && u())
                                    },
                                    custom: e,
                                    presenceAffectsLayout: l
                                }, t))
                            }
                        }
                    })), y = y.map((function(n) {
                        var t = n.key;
                        return g.has(t) ? n : r.createElement(ac, {
                            key: sc(n),
                            isPresent: !0,
                            presenceAffectsLayout: l
                        }, n)
                    })), m.current = y, "production" !== i().env.NODE_ENV && s && y.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), r.createElement(r.Fragment, null, g.size ? y : y.map((function(n) {
                        return (0, r.cloneElement)(n)
                    })))
                },
                wc = xe(rc.div)(cc || (cc = Sn(["\n  background-color: ", ";\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  height: calc(var(--vh, 1vh) * 100);\n  top: 0;\n  left: 0;\n  z-index: 9999;\n"])), (function(n) {
                    return n.overlayColor
                })),
                xc = {
                    visible: {
                        opacity: 1
                    },
                    hidden: {
                        opacity: 0
                    }
                },
                Sc = function(n) {
                    var t = n.isOpened,
                        e = n.children,
                        o = n.className,
                        i = (0, r.useContext)(ln).options,
                        u = r.createElement(wc, {
                            id: "SRLLightbox",
                            initial: "hidden",
                            animate: "visible",
                            exit: "hidden",
                            variants: xc,
                            overlayColor: i.settings.overlayColor,
                            transition: {
                                duration: i.settings.lightboxTransitionSpeed,
                                ease: i.settings.lightboxTransitionTimingFunction
                            },
                            className: o
                        }, e);
                    return t && "undefined" != typeof window ? a.createPortal(u, document.body) : null
                };

            function Ec(n) {
                return (Ec = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                    return typeof n
                } : function(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                })(n)
            }
            Sc.propTypes = {
                selector: tn.string,
                isOpened: tn.bool,
                children: tn.oneOfType([tn.arrayOf(tn.node), tn.node]).isRequired
            };
            var _c = function(n) {
                    return ue(lc || (lc = Sn(["\n  flex-direction: column;\n  -ms-grid-column: 2;\n  grid-column-start: 2;\n  -ms-grid-row: 1;\n  grid-row-start: 1;\n  -ms-grid-row-span: 2;\n  grid-row-end: 3;\n  height: 100%;\n  width: auto;\n\n  /* SAFARI HACK */\n  @media not all and (min-resolution: 0.001dpcm) {\n    @media {\n      height: 100vh;\n    }\n  }\n\n  /* IE 11 HACK **/\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    height: 100vh;\n  }\n"])))
                },
                Cc = function(n) {
                    return ue(fc || (fc = Sn(["\n  flex-direction: column;\n  -ms-grid-column: 1;\n  grid-column-start: 1;\n  -ms-grid-row: 1;\n  grid-row-start: 1;\n  -ms-grid-row-span: 2;\n  grid-row-end: 3;\n  height: 100%;\n  width: auto;\n\n  /* SAFARI HACK */\n  @media not all and (min-resolution: 0.001dpcm) {\n    @media {\n      height: 100vh;\n    }\n  }\n\n  /* IE 11 HACK **/\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    height: 100vh;\n  }\n"])))
                },
                Tc = xe.div(pc || (pc = Sn(["\n  display: flex;\n  color: white;\n  height: auto;\n  width: 100vw;\n  justify-content: center;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n  opacity: 1;\n  transition: 0.3s ease;\n  will-change: transform, opacity;\n  position: relative;\n  z-index: 9997;\n  cursor: pointer;\n  padding: ", ";\n  background-color: ", ";\n\n  /* Thumbnails alignment */\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  /* Thumbnails aligned to the right */\n  ", ";\n\n  /* Thumbnails aligned to the left */\n  ", ";\n\n  /* if the body has a class of SRLIdle */\n  .SRLIdle & {\n    opacity: 0;\n  }\n\n  /* if the thumbnails are draggable */\n  &.SRLDraggable {\n    cursor: grabbing;\n  }\n\n  @media (max-width: 768px) {\n    justify-content: start;\n    overflow: scroll !important;\n    flex-direction: row;\n    width: 100vw !important;\n    height: auto;\n    grid-column: auto;\n    grid-row: auto;\n  }\n"])), (function(n) {
                    return n.thumbnailsContainerPadding ? n.thumbnailsContainerPadding : "0"
                }), (function(n) {
                    return n.thumbnailsContainerBackgroundColor ? n.thumbnailsContainerBackgroundColor : "transparent"
                }), (function(n) {
                    return "start" === n.thumbnailsAlignment && ue(dc || (dc = Sn(["\n      justify-content: flex-start;\n    "])))
                }), (function(n) {
                    return "end" === n.thumbnailsAlignment && ue(hc || (hc = Sn(["\n      justify-content: flex-end;\n    "])))
                }), (function(n) {
                    return "space-between" === n.thumbnailsAlignment && ue(mc || (mc = Sn(["\n      justify-content: space-between;\n    "])))
                }), (function(n) {
                    return "space-evenly" === n.thumbnailsAlignment && ue(vc || (vc = Sn(["\n      justify-content: space-evenly;\n    "])))
                }), (function(n) {
                    return "right" === n.thumbnailsPosition && _c
                }), (function(n) {
                    return "left" === n.thumbnailsPosition && Cc
                })),
                Pc = xe.a(gc || (gc = Sn(["\n  width: ", ";\n  height: ", ";\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: ", ";\n  opacity: ", ";\n  transition: 0.3s ease;\n  will-change: opacity;\n  display: block;\n  cursor: draggable;\n  flex: 0 0 auto;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &.SRLThumbnailSelected {\n    opacity: 1;\n  }\n\n  @media (max-width: 768px) {\n    height: 60px;\n    width: 80px;\n  }\n"])), (function(n) {
                    return n.thumbnailsSize ? n.thumbnailsSize[0] : "80px"
                }), (function(n) {
                    return n.thumbnailsSize ? n.thumbnailsSize[1] : "80px"
                }), (function(n) {
                    return n.thumbnailsGap ? n.thumbnailsGap : "1px"
                }), (function(n) {
                    return n.thumbnailsOpacity ? n.thumbnailsOpacity : "0.4"
                })),
                Ac = xe.svg(yc || (yc = Sn(["\n  width: ", ";\n  height: ", ";\n  opacity: ", ";\n"])), (function(n) {
                    return n.thumbnailsSize ? n.thumbnailsSize[0] / 2 : "40px"
                }), (function(n) {
                    return n.thumbnailsSize ? n.thumbnailsSize[1] / 2 : "40px"
                }), (function(n) {
                    return n.thumbnailsOpacity ? n.thumbnailsOpacity : "0.4"
                }));

            function Lc(n) {
                var t = n.thumbnailsIconColor;
                return r.createElement(Ac, {
                    "aria-hidden": "true",
                    "data-prefix": "fas",
                    "data-icon": "play-circle",
                    className: "SRLThumbIcon",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512"
                }, r.createElement("path", {
                    fill: t,
                    className: "SRLThumbIcon",
                    d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
                }))
            }
            Lc.propTypes = {
                thumbnailsIconColor: tn.string
            };
            var Oc, kc, Rc, Nc = function(n) {
                var t = n.elements,
                    e = n.currentId,
                    o = n.handleCurrentElement,
                    i = n.thumbnails,
                    a = n.SRLThumbnailsRef,
                    u = i.thumbnailsOpacity,
                    s = i.thumbnailsSize,
                    c = i.thumbnailsPosition,
                    l = i.thumbnailsAlignment,
                    f = i.thumbnailsContainerBackgroundColor,
                    p = i.thumbnailsContainerPadding,
                    d = i.thumbnailsGap,
                    h = i.thumbnailsIconColor,
                    m = (0, r.useRef)(0),
                    v = (0, r.useRef)(0),
                    g = (0, r.useRef)(0),
                    y = (0, r.useRef)(0),
                    b = (0, r.useRef)(0),
                    w = (0, r.useRef)();
                return (0, r.useEffect)((function() {
                    var n = a.current,
                        t = document.querySelector(".SRLThumb".concat(e));
                    if (t) {
                        var r = t.getBoundingClientRect();
                        n.scrollWidth > n.offsetWidth || n.scrollHeight > n.offsetHeight ? n.style.justifyContent = "start" : n.style.justifyContent = l || "center", n.scrollWidth > n.offsetWidth ? "scrollBehavior" in document.documentElement.style ? n.scrollBy({
                            top: 0,
                            left: r.left,
                            behavior: "smooth"
                        }) : n.scrollLeft = 80 * parseInt(e) : n.scrollHeight > n.offsetHeight && ("scrollBehavior" in document.documentElement.style ? n.scrollBy({
                            top: r.top,
                            left: 0,
                            behavior: "smooth"
                        }) : n.scrollTop = r.top)
                    }

                    function i(t, e) {
                        n.scrollWidth > n.offsetWidth ? (m.current = !0, v.current = t - n.offsetLeft, y.current = n.scrollLeft, n.classList.add("SRLDraggable")) : n.scrollHeight > n.offsetHeight && (m.current = !0, g.current = e - n.offsetTop, b.current = n.scrollTop, n.classList.add("SRLDraggable"))
                    }

                    function u() {
                        m.current = !1, n.classList.remove("SRLDraggable")
                    }

                    function s(t, e) {
                        if (m.current)
                            if (n.scrollHeight > n.offsetHeight) {
                                var r = e - n.offsetTop - g.current;
                                n.scrollTop = b.current - r
                            } else {
                                var o = t - n.offsetLeft - v.current;
                                n.scrollLeft = y.current - o
                            }
                    }
                    return w.current = function(t, r, i) {
                            (n.scrollWidth > n.offsetWidth || n.scrollHeight > n.offsetHeight) && Math.trunc(t) !== Math.trunc(v.current) && Math.trunc(r) !== Math.trunc(g.current) || o(i, e)
                        }, n.addEventListener("mousedown", (function(n) {
                            return i(n.pageX, n.pageY)
                        })), n.addEventListener("mouseleave", (function() {
                            return u()
                        })), n.addEventListener("mouseup", (function() {
                            return u()
                        })), n.addEventListener("mousemove", (function(n) {
                            return s(n.pageX, n.pageY)
                        })),
                        function() {
                            n.removeEventListener("mousedown", (function(n) {
                                return i(n.pageX)
                            })), n.removeEventListener("mouseleave", (function() {
                                return u()
                            })), n.removeEventListener("mouseup", (function() {
                                return u()
                            })), n.removeEventListener("mousemove", (function(n) {
                                return s(n)
                            }))
                        }
                }), [e, o, a, l]), r.createElement(Tc, {
                    ref: a,
                    thumbnailsPosition: c,
                    thumbnailsSize: s,
                    thumbnailsAlignment: l,
                    thumbnailsContainerBackgroundColor: f,
                    thumbnailsContainerPadding: p,
                    className: "SRLThumbnailsContainer"
                }, t.map((function(n) {
                    return r.createElement(Pc, {
                        onClick: function(t) {
                            return w.current(t.pageX, t.pageY, n.id)
                        },
                        thumbnailsOpacity: u,
                        thumbnailsSize: s,
                        thumbnailsGap: d,
                        key: n.id,
                        id: n.id,
                        className: "SRLThumb SRLThumb".concat(n.id, " ").concat(e === n.id ? "SRLThumbnailSelected" : ""),
                        style: {
                            backgroundImage: "url('".concat(n.thumbnail, "')")
                        }
                    }, ("video" === n.type || "embed_video" === n.type) && r.createElement(Lc, {
                        thumbnailsIconColor: h
                    }))
                })))
            };
            Nc.propTypes = {
                elements: tn.array,
                handleCurrentElement: tn.func,
                currentId: tn.string,
                SRLThumbnailsRef: tn.object,
                thumbnails: tn.shape({
                    thumbnailsAlignment: tn.string,
                    thumbnailsContainerBackgroundColor: tn.string,
                    thumbnailsContainerPadding: tn.string,
                    thumbnailsGap: tn.string,
                    thumbnailsIconColor: tn.string,
                    thumbnailsOpacity: tn.number,
                    thumbnailsPosition: tn.string,
                    thumbnailsSize: tn.array
                })
            };
            var zc = xe.div(Oc || (Oc = Sn(["\n  color: white;\n  font-family: inherit;\n  outline: none;\n  border: 0;\n  position: relative;\n  z-index: 9996;\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    width: 100vw;\n  }\n  width: 100%;\n  min-height: 50px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-content: ", ";\n  padding: ", ";\n\n  ", ";\n\n  /* Thumbnails aligned to the left */\n  ", ";\n\n  @media (max-width: 768px) {\n    grid-column: auto;\n  }\n\n  /* Paragraph inside the caption container */\n  p {\n    margin: 0;\n    text-align: center;\n    font-weight: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    color: ", ";\n    font-style: ", ";\n    text-transform: ", ";\n\n    @media (max-width: 768px) {\n      font-size: 14px;\n      padding: 0 15px;\n    }\n  }\n"])), (function(n) {
                    return n.captionAlignment
                }), (function(n) {
                    return n.captionStyle.captionContainerPadding ? n.captionStyle.captionContainerPadding : "20px 0 30px 0"
                }), (function(n) {
                    return "right" === n.thumbnailsPosition && ue(kc || (kc = Sn(["\n      grid-column: 1/2;\n      -ms-grid-column: 1;\n      -ms-grid-column-span: 1;\n      align-items: start;\n    "])))
                }), (function(n) {
                    return "left" === n.thumbnailsPosition && ue(Rc || (Rc = Sn(["\n      grid-column: 2/2;\n      -ms-grid-column: 2;\n      align-items: start;\n    "])))
                }), (function(n) {
                    return n.captionStyle.captionFontWeight ? n.captionStyle.captionFontWeight : "inherit"
                }), (function(n) {
                    return n.captionStyle.captionFontSize ? n.captionStyle.captionFontSize : "inherit"
                }), (function(n) {
                    return n.captionStyle.captionColor ? n.captionStyle.captionFontFamily : "inherit"
                }), (function(n) {
                    return n.captionStyle.captionColor ? n.captionStyle.captionColor : "white"
                }), (function(n) {
                    return n.captionStyle.captionFontStyle ? n.captionStyle.captionFontStyle : "inherit"
                }), (function(n) {
                    return n.captionStyle.captionTextTransform ? n.captionStyle.captionTextTransform : "inherit"
                })),
                Ic = function(n) {
                    var t = n.captionOptions,
                        e = n.caption,
                        o = n.thumbnailsPosition,
                        i = n.SRLCaptionRef;
                    return r.createElement(zc, {
                        captionStyle: t,
                        thumbnailsPosition: o,
                        className: "SRLCaptionContainer",
                        ref: i
                    }, r.createElement("p", {
                        className: "SRLCaptionText"
                    }, e))
                };

            function Dc() {
                return (Dc = Object.assign || function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }).apply(this, arguments)
            }
            Ic.propTypes = {
                captionOptions: tn.shape({
                    showCaption: tn.bool,
                    captionColor: tn.string,
                    captionFontFamily: tn.string,
                    captionFontSize: tn.string,
                    captionFontStyle: tn.string,
                    captionFontWeight: tn.oneOfType([tn.number, tn.string]),
                    captionTextTransform: tn.string
                }),
                SRLCaptionRef: tn.object,
                thumbnailsPosition: tn.string,
                caption: tn.string
            };
            var Mc = {
                    delta: 10,
                    preventDefaultTouchmoveEvent: !1,
                    rotationAngle: 0,
                    trackMouse: !1,
                    trackTouch: !0
                },
                jc = {
                    first: !0,
                    initial: [0, 0],
                    start: 0,
                    swiping: !1,
                    xy: [0, 0]
                };

            function Bc(n, t) {
                if (0 === t) return n;
                var e = Math.PI / 180 * t;
                return [n[0] * Math.cos(e) + n[1] * Math.sin(e), n[1] * Math.cos(e) - n[0] * Math.sin(e)]
            }

            function Vc(n) {
                var t = n.trackMouse,
                    e = r.useRef(Dc({}, jc)),
                    o = r.useRef(Dc({}, Mc));
                o.current = Dc({}, Mc, n);
                var i = r.useMemo((function() {
                        return function(n, t) {
                            var e = function(t) {
                                    t && "touches" in t && t.touches.length > 1 || n((function(n, e) {
                                        e.trackMouse && (document.addEventListener("mousemove", r), document.addEventListener("mouseup", i));
                                        var o = "touches" in t ? t.touches[0] : t,
                                            a = Bc([o.clientX, o.clientY], e.rotationAngle);
                                        return Dc({}, n, jc, {
                                            initial: [].concat(a),
                                            xy: a,
                                            start: t.timeStamp || 0
                                        })
                                    }))
                                },
                                r = function(t) {
                                    n((function(n, e) {
                                        if ("touches" in t && t.touches.length > 1) return n;
                                        var r = "touches" in t ? t.touches[0] : t,
                                            o = Bc([r.clientX, r.clientY], e.rotationAngle),
                                            i = o[0],
                                            a = o[1],
                                            u = i - n.xy[0],
                                            s = a - n.xy[1],
                                            c = Math.abs(u),
                                            l = Math.abs(s),
                                            f = (t.timeStamp || 0) - n.start,
                                            p = Math.sqrt(c * c + l * l) / (f || 1),
                                            d = [u / (f || 1), s / (f || 1)],
                                            h = function(n, t, e, r) {
                                                return n > t ? e > 0 ? "Right" : "Left" : r > 0 ? "Down" : "Up"
                                            }(c, l, u, s),
                                            m = "number" == typeof e.delta ? e.delta : e.delta[h.toLowerCase()] || Mc.delta;
                                        if (c < m && l < m && !n.swiping) return n;
                                        var v = {
                                            absX: c,
                                            absY: l,
                                            deltaX: u,
                                            deltaY: s,
                                            dir: h,
                                            event: t,
                                            first: n.first,
                                            initial: n.initial,
                                            velocity: p,
                                            vxvy: d
                                        };
                                        v.first && e.onSwipeStart && e.onSwipeStart(v), e.onSwiping && e.onSwiping(v);
                                        var g = !1;
                                        return (e.onSwiping || e.onSwiped || "onSwiped" + h in e) && (g = !0), g && e.preventDefaultTouchmoveEvent && e.trackTouch && t.cancelable && t.preventDefault(), Dc({}, n, {
                                            first: !1,
                                            eventData: v,
                                            swiping: !0
                                        })
                                    }))
                                },
                                o = function(t) {
                                    n((function(n, e) {
                                        var r;
                                        if (n.swiping && n.eventData) {
                                            r = Dc({}, n.eventData, {
                                                event: t
                                            }), e.onSwiped && e.onSwiped(r);
                                            var o = e["onSwiped" + r.dir];
                                            o && o(r)
                                        } else e.onTap && e.onTap({
                                            event: t
                                        });
                                        return Dc({}, n, jc, {
                                            eventData: r
                                        })
                                    }))
                                },
                                i = function(n) {
                                    document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", i), o(n)
                                },
                                a = function(n, t) {
                                    var i = function() {};
                                    if (n && n.addEventListener) {
                                        var a = [
                                            ["touchstart", e],
                                            ["touchmove", r],
                                            ["touchend", o]
                                        ];
                                        a.forEach((function(e) {
                                            var r = e[0],
                                                o = e[1];
                                            return n.addEventListener(r, o, {
                                                passive: t
                                            })
                                        })), i = function() {
                                            return a.forEach((function(t) {
                                                var e = t[0],
                                                    r = t[1];
                                                return n.removeEventListener(e, r)
                                            }))
                                        }
                                    }
                                    return i
                                },
                                u = {
                                    ref: function(t) {
                                        null !== t && n((function(n, e) {
                                            if (n.el === t) return n;
                                            var r = {};
                                            return n.el && n.el !== t && n.cleanUpTouch && (n.cleanUpTouch(), r.cleanUpTouch = void 0), e.trackTouch && t && (r.cleanUpTouch = a(t, !e.preventDefaultTouchmoveEvent)), Dc({}, n, {
                                                el: t
                                            }, r)
                                        }))
                                    }
                                };
                            return t.trackMouse && (u.onMouseDown = e), [u, a]
                        }((function(n) {
                            return e.current = n(e.current, o.current)
                        }), {
                            trackMouse: t
                        })
                    }), [t]),
                    a = i[0],
                    u = i[1];
                return e.current = function(n, t, e) {
                    var r = {};
                    return !t.trackTouch && n.cleanUpTouch ? (n.cleanUpTouch(), r.cleanUpTouch = void 0) : t.trackTouch && !n.cleanUpTouch && n.el && (r.cleanUpTouch = e(n.el, !t.preventDefaultTouchmoveEvent)), Dc({}, n, r)
                }(e.current, o.current, u), a
            }

            function Fc(n, t, e) {
                var o = this,
                    i = (0, r.useRef)(null),
                    a = (0, r.useRef)(0),
                    u = (0, r.useRef)(null),
                    s = (0, r.useRef)([]),
                    c = (0, r.useRef)(),
                    l = (0, r.useRef)(),
                    f = (0, r.useRef)(n),
                    p = (0, r.useRef)(!0);
                f.current = n;
                var d = !t && 0 !== t && "undefined" != typeof window;
                if ("function" != typeof n) throw new TypeError("Expected a function");
                t = +t || 0;
                var h = !!(e = e || {}).leading,
                    m = !("trailing" in e) || !!e.trailing,
                    v = "maxWait" in e,
                    g = v ? Math.max(+e.maxWait || 0, t) : null;
                return (0, r.useEffect)((function() {
                    return p.current = !0,
                        function() {
                            p.current = !1
                        }
                }), []), (0, r.useMemo)((function() {
                    var n = function(n) {
                            var t = s.current,
                                e = c.current;
                            return s.current = c.current = null, a.current = n, l.current = f.current.apply(e, t)
                        },
                        e = function(n, t) {
                            d && cancelAnimationFrame(u.current), u.current = d ? requestAnimationFrame(n) : setTimeout(n, t)
                        },
                        r = function(n) {
                            if (!p.current) return !1;
                            var e = n - i.current,
                                r = n - a.current;
                            return !i.current || e >= t || e < 0 || v && r >= g
                        },
                        y = function(t) {
                            return u.current = null, m && s.current ? n(t) : (s.current = c.current = null, l.current)
                        },
                        b = function() {
                            var n = Date.now();
                            if (r(n)) return y(n);
                            if (p.current) {
                                var o = n - i.current,
                                    u = n - a.current,
                                    s = t - o,
                                    c = v ? Math.min(s, g - u) : s;
                                e(b, c)
                            }
                        },
                        w = function() {
                            for (var f = [], d = 0; d < arguments.length; d++) f[d] = arguments[d];
                            var m = Date.now(),
                                g = r(m);
                            if (s.current = f, c.current = o, i.current = m, g) {
                                if (!u.current && p.current) return a.current = i.current, e(b, t), h ? n(i.current) : l.current;
                                if (v) return e(b, t), n(i.current)
                            }
                            return u.current || e(b, t), l.current
                        };
                    return w.cancel = function() {
                        u.current && (d ? cancelAnimationFrame(u.current) : clearTimeout(u.current)), a.current = 0, s.current = i.current = c.current = u.current = null
                    }, w.isPending = function() {
                        return !!u.current
                    }, w.flush = function() {
                        return u.current ? y(Date.now()) : l.current
                    }, w
                }), [h, v, t, g, m, d])
            }
            var Wc = {
                exports: {}
            };
            ! function(n, t) {
                ! function() {
                    function t(n, t, e, r) {
                        var o = "removeEventListener",
                            i = function() {
                                n[o](t, e)
                            };
                        return n.addEventListener ? (n.addEventListener(t, e, r), i) : n.attachEvent ? (t = "on" + t, n.attachEvent(t, e), o = "detachEvent", i) : n.on ? (n.on(t, e), o = "off", i) : void 0
                    }
                    t.define = function(n, t) {
                        return function(e, r, o, i) {
                            return e[n](r, o, i),
                                function() {
                                    e[t](r, o)
                                }
                        }
                    }, n.exports = t
                }()
            }(Wc);
            var Yc, Hc, Uc, $c, Xc, qc, Gc, Kc = Wc.exports;

            function Zc(n, t, e) {
                var o = (0, r.useRef)();
                (0, r.useEffect)((function() {
                    o.current = n
                }), [n, e]), (0, r.useEffect)((function() {
                    if (null !== t) {
                        var n = setInterval((function() {
                            o.current()
                        }), t);
                        return function() {
                            return clearInterval(n)
                        }
                    }
                }), [t, e])
            }

            function Jc(n) {
                var t = on((0, r.useState)({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        scrollHeight: 0,
                        scrollWidth: 0
                    }), 2),
                    e = t[0],
                    o = t[1],
                    i = "object" === ("undefined" == typeof window ? "undefined" : Ec(window));
                return (0, r.useEffect)((function() {
                    if (n.current || i) return n.current && o(t()), window.addEventListener("resize", e),
                        function() {
                            return window.removeEventListener("resize", e)
                        };

                    function t() {
                        var t = n.current.getBoundingClientRect(),
                            e = t.x,
                            r = t.y,
                            o = t.width,
                            i = t.height,
                            a = t.top,
                            u = t.left,
                            s = t.bottom,
                            c = t.right;
                        return {
                            width: o,
                            height: i,
                            scrollWidth: n.current.scrollWidth,
                            scrollHeight: n.current.scrollHeight,
                            x: e,
                            y: r,
                            top: a,
                            left: u,
                            bottom: s,
                            right: c
                        }
                    }

                    function e() {
                        n.current && o(t())
                    }
                }), [n, i]), [e]
            }
            var Qc = function(n) {
                    return ue(Yc || (Yc = Sn(["\n  grid-column: 1/2;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 1;\n  width: 100%;\n  height: calc(100vh - ", "px);\n"])), n.captionDivSizes.height)
                },
                nl = function(n) {
                    return ue(Hc || (Hc = Sn(["\n  grid-column: 2/2;\n  -ms-grid-column: 2;\n  width: 100%;\n  height: calc(100vh - ", "px);\n"])), n.captionDivSizes.height)
                },
                tl = xe.div(Uc || (Uc = Sn(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  width: 100vw;\n  height: ", ";\n\n  /* Thumbnails aligned to the right.\n  We need to exclude the height of the div containing the thumbnails this time */\n  ", ";\n\n  /* Thumbnails aligned to the left.\n    We need to exclude the height of the div containing the thumbnails this time */\n  ", ";\n  /* Thumbnails hidden */\n  ", ";\n\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {\n    grid-column: auto;\n    width: 100vw;\n    height: ", ";\n  }\n\n  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {\n    grid-column: auto;\n    width: 100vw;\n    height: ", ";\n  }\n\n  @media (max-width: 768px) {\n    grid-column: auto;\n    width: 100vw;\n    height: ", ";\n  }\n"])), (function(n) {
                    return n ? "calc(100vh - ".concat(n.captionDivSizes.height + n.thumbnailsDivSizes.height, "px)") : "100%"
                }), (function(n) {
                    return "right" === n.thumbnailsPosition && Qc
                }), (function(n) {
                    return "left" === n.thumbnailsPosition && nl
                }), (function(n) {
                    return n.hideThumbnails && "bottom" === n.thumbnailsPosition && ue($c || ($c = Sn(["\n      height: calc(100vh - ", "px);\n    "])), n.thumbnailsDivSizes.height)
                }), (function(n) {
                    return n ? "calc((var(--vh, 1vh) * 100) - ".concat(n.captionDivSizes.height + n.thumbnailsDivSizes.height, "px)") : "100%"
                }), (function(n) {
                    return n ? "calc((var(--vh, 1vh) * 100) - ".concat(n.captionDivSizes.height + n.thumbnailsDivSizes.height, "px)") : "100%"
                }), (function(n) {
                    return n ? "calc((var(--vh, 1vh) * 100) - ".concat(n.captionDivSizes.height + n.thumbnailsDivSizes.height, "px)") : "100%"
                })),
                el = xe(rc.div)(Xc || (Xc = Sn(["\n  width: 100%;\n  height: 90%;\n  position: absolute;\n  /* IE 11 HACK **/\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    top: 5%;\n    left: 0;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  border: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  .SRLLoadingIndicator {\n    animation: spin 1.2s linear infinite;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n\n  /* react-zoom-pan-pinch library styles overrides*/\n  .react-transform-component {\n    width: fit-content;\n    width: auto;\n    height: fit-content;\n    height: auto;\n    z-index: 9997;\n    overflow: inherit;\n    cursor: grab;\n  }\n  .react-transform-element {\n    width: fit-content;\n    width: auto;\n    height: fit-content;\n    height: auto;\n    top: 0;\n    left: 0;\n    position: relative;\n\n    z-index: 9997;\n    display: block;\n    max-width: 100%;\n    max-height: 100%;\n    width: auto;\n    height: auto;\n  }\n"]))),
                rl = xe(rc.img)(qc || (qc = Sn(["\n  background: transparent;\n  border: 0;\n  position: relative;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n  outline: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  transition: all 200ms ease;\n  opacity: 1;\n  margin: auto;\n  z-index: 9997;\n  box-shadow: ", ";\n  cursor: ", ";\n"])), (function(n) {
                    return n.boxShadow
                }), (function(n) {
                    return n.disablePanzoom ? "auto" : "zoom-in"
                })),
                ol = xe(rc.img)(Gc || (Gc = Sn(["\n  top: 0;\n  left: 0;\n  position: relative;\n  z-index: 9997;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n"])));

            function il() {
                return r.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "50px",
                    height: "50px",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "xMidYMid",
                    className: "SRLLoadingIndicator"
                }, r.createElement("circle", {
                    cx: "50",
                    cy: "50",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "10",
                    r: "35",
                    strokeDasharray: "164.93361431346415 56.97787143782138"
                }))
            }
            var al = function(n, t) {
                    return (al = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(n, t) {
                            n.__proto__ = t
                        } || function(n, t) {
                            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e])
                        })(n, t)
                },
                ul = function() {
                    return (ul = Object.assign || function(n) {
                        for (var t, e = 1, r = arguments.length; e < r; e++)
                            for (var o in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
                        return n
                    }).apply(this, arguments)
                };

            function sl(n, t, e) {
                if (e || 2 === arguments.length)
                    for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                return n.concat(r || t)
            }
            var cl = function(n, t) {
                    return Number(n.toFixed(t))
                },
                ll = function(n, t, e) {
                    e && "function" == typeof e && e(n, t)
                },
                fl = {
                    easeOut: function(n) {
                        return -Math.cos(n * Math.PI) / 2 + .5
                    },
                    linear: function(n) {
                        return n
                    },
                    easeInQuad: function(n) {
                        return n * n
                    },
                    easeOutQuad: function(n) {
                        return n * (2 - n)
                    },
                    easeInOutQuad: function(n) {
                        return n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1
                    },
                    easeInCubic: function(n) {
                        return n * n * n
                    },
                    easeOutCubic: function(n) {
                        return --n * n * n + 1
                    },
                    easeInOutCubic: function(n) {
                        return n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1
                    },
                    easeInQuart: function(n) {
                        return n * n * n * n
                    },
                    easeOutQuart: function(n) {
                        return 1 - --n * n * n * n
                    },
                    easeInOutQuart: function(n) {
                        return n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n
                    },
                    easeInQuint: function(n) {
                        return n * n * n * n * n
                    },
                    easeOutQuint: function(n) {
                        return 1 + --n * n * n * n * n
                    },
                    easeInOutQuint: function(n) {
                        return n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n
                    }
                },
                pl = function(n) {
                    "number" == typeof n && cancelAnimationFrame(n)
                },
                dl = function(n) {
                    n.mounted && (pl(n.animation), n.animate = !1, n.animation = null, n.velocity = null)
                };

            function hl(n, t, e, r) {
                if (n.mounted) {
                    var o = (new Date).getTime();
                    dl(n), n.animation = function() {
                        if (!n.mounted) return pl(n.animation);
                        var i = (new Date).getTime() - o,
                            a = (0, fl[t])(i / e);
                        i >= e ? (r(1), n.animation = null) : n.animation && (r(a), requestAnimationFrame(n.animation))
                    }, requestAnimationFrame(n.animation)
                }
            }

            function ml(n, t, e, r) {
                var o = function(n) {
                    var t = n.scale,
                        e = n.positionX,
                        r = n.positionY;
                    return !(isNaN(t) || isNaN(e) || isNaN(r))
                }(t);
                if (n.mounted && o) {
                    var i = n.setTransformState,
                        a = n.transformState,
                        u = a.scale,
                        s = a.positionX,
                        c = a.positionY,
                        l = t.scale - u,
                        f = t.positionX - s,
                        p = t.positionY - c;
                    0 === e ? i(t.scale, t.positionX, t.positionY) : hl(n, r, e, (function(n) {
                        i(u + l * n, s + f * n, c + p * n)
                    }))
                }
            }
            var vl = function(n, t) {
                    var e = n.wrapperComponent,
                        r = n.contentComponent,
                        o = n.setup.centerZoomedOut;
                    if (!e || !r) throw new Error("Components are not mounted");
                    var i = function(n, t, e) {
                            var r = n.offsetWidth,
                                o = n.offsetHeight,
                                i = t.offsetWidth * e,
                                a = t.offsetHeight * e;
                            return {
                                wrapperWidth: r,
                                wrapperHeight: o,
                                newContentWidth: i,
                                newDiffWidth: r - i,
                                newContentHeight: a,
                                newDiffHeight: o - a
                            }
                        }(e, r, t),
                        a = i.wrapperWidth,
                        u = i.wrapperHeight;
                    return function(n, t, e, r, o, i, a) {
                        var u = n > t ? e * (a ? 1 : .5) : 0,
                            s = r > o ? i * (a ? 1 : .5) : 0;
                        return {
                            minPositionX: n - t - u,
                            maxPositionX: u,
                            minPositionY: r - o - s,
                            maxPositionY: s
                        }
                    }(a, i.newContentWidth, i.newDiffWidth, u, i.newContentHeight, i.newDiffHeight, Boolean(o))
                },
                gl = function(n, t) {
                    var e = vl(n, t);
                    return n.bounds = e, e
                };

            function yl(n, t, e, r, o, i, a) {
                var u = e.minPositionX,
                    s = e.minPositionY,
                    c = e.maxPositionX,
                    l = e.maxPositionY,
                    f = 0,
                    p = 0;
                return a && (f = o, p = i), {
                    x: bl(n, u - f, c + f, r),
                    y: bl(t, s - p, l + p, r)
                }
            }
            var bl = function(n, t, e, r) {
                return cl(r ? n < t ? t : n > e ? e : n : n, 2)
            };

            function wl(n, t, e, r, o, i) {
                var a = n.transformState,
                    u = a.scale,
                    s = a.positionX,
                    c = a.positionY,
                    l = r - u;
                return "number" != typeof t || "number" != typeof e ? (console.error("Mouse X and Y position were not provided!"), {
                    x: s,
                    y: c
                }) : yl(s - t * l, c - e * l, o, i, 0, 0, null)
            }

            function xl(n, t, e, r, o) {
                var i = t - (o ? r : 0);
                return !isNaN(e) && n >= e ? e : !isNaN(t) && n <= i ? i : n
            }
            var Sl = function(n, t) {
                    var e = n.setup.panning.excluded,
                        r = n.isInitialized,
                        o = n.wrapperComponent,
                        i = t.target,
                        a = null == o ? void 0 : o.contains(i);
                    return !!(r && i && a) && !ql(i, e)
                },
                El = function(n) {
                    var t = n.isInitialized,
                        e = n.isPanning,
                        r = n.setup.panning.disabled;
                    return !(!t || !e || r)
                },
                _l = function(n, t) {
                    var e = n.setup,
                        r = n.transformState.scale,
                        o = e.minScale;
                    return t > 0 && r >= o ? t : 0
                };

            function Cl(n, t, e, r, o, i, a, u, s, c) {
                if (o) {
                    var l;
                    if (t > a && e > a) return (l = a + (n - a) * c) > s ? s : l < a ? a : l;
                    if (t < i && e < i) return (l = i + (n - i) * c) < u ? u : l > i ? i : l
                }
                return r ? t : bl(n, i, a, o)
            }

            function Tl(n, t) {
                var e = n.transformState.scale;
                dl(n), gl(n, e), t.touches ? function(n, t) {
                    var e = t.touches,
                        r = n.transformState,
                        o = r.positionX,
                        i = r.positionY;
                    if (n.isPanning = !0, 1 === e.length) {
                        var a = e[0].clientX,
                            u = e[0].clientY;
                        n.startCoords = {
                            x: a - o,
                            y: u - i
                        }
                    }
                }(n, t) : function(n, t) {
                    var e = n.transformState,
                        r = e.positionX,
                        o = e.positionY;
                    n.isPanning = !0;
                    var i = t.clientX,
                        a = t.clientY;
                    n.startCoords = {
                        x: i - r,
                        y: a - o
                    }
                }(n, t)
            }

            function Pl(n, t, e) {
                var r = n.startCoords,
                    o = n.setup.alignmentAnimation,
                    i = o.sizeX,
                    a = o.sizeY;
                if (r) {
                    var u = function(n, t, e) {
                            var r = n.startCoords,
                                o = n.transformState,
                                i = n.setup.panning,
                                a = i.lockAxisX,
                                u = i.lockAxisY,
                                s = o.positionX,
                                c = o.positionY;
                            if (!r) return {
                                x: s,
                                y: c
                            };
                            var l = t - r.x,
                                f = e - r.y;
                            return {
                                x: a ? s : l,
                                y: u ? c : f
                            }
                        }(n, t, e),
                        s = u.x,
                        c = u.y,
                        l = _l(n, i),
                        f = _l(n, a);
                    (function(n, t) {
                        if (function(n) {
                                var t = n.mounted,
                                    e = n.setup,
                                    r = e.disabled,
                                    o = e.velocityAnimation,
                                    i = n.transformState.scale;
                                return !(o.disabled && !(i > 1) && r && !t)
                            }(n)) {
                            var e = n.lastMousePosition,
                                r = n.velocityTime,
                                o = n.setup,
                                i = n.wrapperComponent,
                                a = o.velocityAnimation.equalToMove,
                                u = Date.now();
                            if (e && r && i) {
                                var s = function(n, t) {
                                        return t ? Math.min(1, n.offsetWidth / window.innerWidth) : 1
                                    }(i, a),
                                    c = t.x - e.x,
                                    l = t.y - e.y,
                                    f = c / s,
                                    p = l / s,
                                    d = u - r,
                                    h = c * c + l * l,
                                    m = Math.sqrt(h) / d;
                                n.velocity = {
                                    velocityX: f,
                                    velocityY: p,
                                    total: m
                                }
                            }
                            n.lastMousePosition = t, n.velocityTime = u
                        }
                    })(n, {
                        x: s,
                        y: c
                    }),
                    function(n, t, e, r, o) {
                        var i = n.setup.limitToBounds,
                            a = n.wrapperComponent,
                            u = n.bounds,
                            s = n.transformState,
                            c = s.scale,
                            l = s.positionX,
                            f = s.positionY;
                        if (a && t !== l && e !== f && u) {
                            var p = yl(t, e, u, i, r, o, a),
                                d = p.x,
                                h = p.y;
                            n.setTransformState(c, d, h)
                        }
                    }(n, s, c, l, f)
                }
            }

            function Al(n) {
                if (n.isPanning) {
                    var t = n.setup.panning.velocityDisabled,
                        e = n.velocity,
                        r = n.wrapperComponent,
                        o = n.contentComponent;
                    n.isPanning = !1, n.animate = !1, n.animation = null;
                    var i = null == r ? void 0 : r.getBoundingClientRect(),
                        a = null == o ? void 0 : o.getBoundingClientRect(),
                        u = (null == i ? void 0 : i.width) || 0,
                        s = (null == i ? void 0 : i.height) || 0,
                        c = (null == a ? void 0 : a.width) || 0,
                        l = (null == a ? void 0 : a.height) || 0,
                        f = u < c || s < l;
                    !t && e && (null == e ? void 0 : e.total) > .1 && f ? function(n) {
                        var t = n.velocity,
                            e = n.bounds,
                            r = n.setup,
                            o = n.wrapperComponent;
                        if (function(n) {
                                var t = n.mounted,
                                    e = n.velocity,
                                    r = n.bounds,
                                    o = n.setup,
                                    i = o.disabled,
                                    a = o.velocityAnimation,
                                    u = n.transformState.scale;
                                return !(a.disabled && !(u > 1) && i && !t || !e || !r)
                            }(n) && t && e && o) {
                            var i = t.velocityX,
                                a = t.velocityY,
                                u = t.total,
                                s = e.maxPositionX,
                                c = e.minPositionX,
                                l = e.maxPositionY,
                                f = e.minPositionY,
                                p = r.limitToBounds,
                                d = r.alignmentAnimation,
                                h = r.zoomAnimation,
                                m = r.panning,
                                v = m.lockAxisY,
                                g = m.lockAxisX,
                                y = h.animationType,
                                b = d.sizeX,
                                w = d.sizeY,
                                x = d.velocityAlignmentTime,
                                S = function(n, t) {
                                    var e = n.setup.velocityAnimation,
                                        r = e.equalToMove,
                                        o = e.animationTime,
                                        i = e.sensitivity;
                                    return r ? o * t * i : o
                                }(n, u),
                                E = Math.max(S, x),
                                _ = _l(n, b),
                                C = _l(n, w),
                                T = _ * o.offsetWidth / 100,
                                P = C * o.offsetHeight / 100,
                                A = s + T,
                                L = c - T,
                                O = l + P,
                                k = f - P,
                                R = n.transformState,
                                N = (new Date).getTime();
                            hl(n, y, E, (function(t) {
                                var e = n.transformState,
                                    r = e.scale,
                                    o = e.positionX,
                                    u = e.positionY,
                                    h = ((new Date).getTime() - N) / x,
                                    m = 1 - (0, fl[d.animationType])(Math.min(1, h)),
                                    y = 1 - t,
                                    b = o + i * y,
                                    w = u + a * y,
                                    S = Cl(b, R.positionX, o, g, p, c, s, L, A, m),
                                    E = Cl(w, R.positionY, u, v, p, f, l, k, O, m);
                                o === b && u === w || n.setTransformState(r, S, E)
                            }))
                        }
                    }(n) : Ll(n)
                }
            }

            function Ll(n) {
                var t = n.transformState.scale,
                    e = n.setup,
                    r = e.minScale,
                    o = e.alignmentAnimation,
                    i = o.disabled,
                    a = o.sizeX,
                    u = o.sizeY,
                    s = o.animationTime,
                    c = o.animationType;
                if (!(i || t < r || !a && !u)) {
                    var l = function(n) {
                        var t = n.transformState,
                            e = t.positionX,
                            r = t.positionY,
                            o = t.scale,
                            i = n.setup,
                            a = i.disabled,
                            u = i.limitToBounds,
                            s = i.centerZoomedOut,
                            c = n.wrapperComponent;
                        if (!a && c && n.bounds) {
                            var l = n.bounds,
                                f = l.maxPositionX,
                                p = l.minPositionX,
                                d = l.maxPositionY,
                                h = l.minPositionY,
                                m = e > f || e < p,
                                v = r > d || r < h,
                                g = wl(n, e > f ? c.offsetWidth : n.setup.minPositionX || 0, r > d ? c.offsetHeight : n.setup.minPositionY || 0, o, n.bounds, u || s),
                                y = g.x,
                                b = g.y;
                            return {
                                scale: o,
                                positionX: m ? y : e,
                                positionY: v ? b : r
                            }
                        }
                    }(n);
                    l && ml(n, l, s, c)
                }
            }

            function Ol(n, t, e) {
                var r = n.transformState.scale,
                    o = n.wrapperComponent,
                    i = n.setup,
                    a = i.minScale,
                    u = i.limitToBounds,
                    s = i.zoomAnimation,
                    c = s.disabled,
                    l = s.animationTime,
                    f = s.animationType,
                    p = c || r >= a;
                if ((r >= 1 || u) && Ll(n), !p && o && n.mounted) {
                    var d = kl(n, a, t || o.offsetWidth / 2, e || o.offsetHeight / 2);
                    d && ml(n, d, l, f)
                }
            }

            function kl(n, t, e, r) {
                var o = n.setup,
                    i = o.minScale,
                    a = o.maxScale,
                    u = o.limitToBounds,
                    s = xl(cl(t, 2), i, a, 0, !1),
                    c = wl(n, e, r, s, gl(n, s), u);
                return {
                    scale: s,
                    positionX: c.x,
                    positionY: c.y
                }
            }
            var Rl = {
                    previousScale: 1,
                    scale: 1,
                    positionX: 0,
                    positionY: 0
                },
                Nl = ul(ul({}, Rl), {
                    setComponents: function() {},
                    contextInstance: null
                }),
                zl = {
                    disabled: !1,
                    minPositionX: null,
                    maxPositionX: null,
                    minPositionY: null,
                    maxPositionY: null,
                    minScale: 1,
                    maxScale: 8,
                    limitToBounds: !0,
                    centerZoomedOut: !1,
                    centerOnInit: !1,
                    wheel: {
                        step: .2,
                        disabled: !1,
                        wheelDisabled: !1,
                        touchPadDisabled: !1,
                        activationKeys: [],
                        excluded: []
                    },
                    panning: {
                        disabled: !1,
                        velocityDisabled: !1,
                        lockAxisX: !1,
                        lockAxisY: !1,
                        activationKeys: [],
                        excluded: []
                    },
                    pinch: {
                        step: 5,
                        disabled: !1,
                        excluded: []
                    },
                    doubleClick: {
                        disabled: !1,
                        step: .7,
                        mode: "zoomIn",
                        animationType: "easeOut",
                        animationTime: 200,
                        excluded: []
                    },
                    zoomAnimation: {
                        disabled: !1,
                        size: .4,
                        animationTime: 200,
                        animationType: "easeOut"
                    },
                    alignmentAnimation: {
                        disabled: !1,
                        sizeX: 100,
                        sizeY: 100,
                        animationTime: 200,
                        velocityAlignmentTime: 400,
                        animationType: "easeOut"
                    },
                    velocityAnimation: {
                        disabled: !1,
                        sensitivity: 1,
                        animationTime: 400,
                        animationType: "easeOut",
                        equalToMove: !0
                    }
                },
                Il = function(n) {
                    var t, e, r, o;
                    return {
                        previousScale: null !== (t = n.initialScale) && void 0 !== t ? t : Rl.scale,
                        scale: null !== (e = n.initialScale) && void 0 !== e ? e : Rl.scale,
                        positionX: null !== (r = n.initialPositionX) && void 0 !== r ? r : Rl.positionX,
                        positionY: null !== (o = n.initialPositionY) && void 0 !== o ? o : Rl.positionY
                    }
                },
                Dl = function(n) {
                    var t = ul({}, zl);
                    return Object.keys(n).forEach((function(e) {
                        var r = void 0 !== n[e];
                        if (void 0 !== zl[e] && r) {
                            var o = Object.prototype.toString.call(zl[e]),
                                i = "[object Object]" === o,
                                a = "[object Array]" === o;
                            t[e] = i ? ul(ul({}, zl[e]), n[e]) : a ? sl(sl([], zl[e]), n[e]) : n[e]
                        }
                    })), t
                },
                Ml = function(n, t, e) {
                    var r = n.transformState.scale,
                        o = n.wrapperComponent,
                        i = n.setup,
                        a = i.maxScale,
                        u = i.minScale,
                        s = i.zoomAnimation.size;
                    if (!o) throw new Error("Wrapper is not mounted");
                    var c = r * Math.exp(t * e);
                    return xl(cl(c, 3), u, a, s, !1)
                };

            function jl(n, t, e, r, o) {
                var i = n.wrapperComponent,
                    a = n.transformState,
                    u = a.scale,
                    s = a.positionX,
                    c = a.positionY;
                if (!i) return console.error("No WrapperComponent found");
                var l = (i.offsetWidth / 2 - s) / u,
                    f = (i.offsetHeight / 2 - c) / u,
                    p = kl(n, Ml(n, t, e), l, f);
                if (!p) return console.error("Error during zoom event. New transformation state was not calculated.");
                ml(n, p, r, o)
            }

            function Bl(n, t, e) {
                var r = n.setup,
                    o = n.wrapperComponent,
                    i = r.limitToBounds,
                    a = Il(n.props),
                    u = n.transformState,
                    s = u.scale,
                    c = u.positionX,
                    l = u.positionY;
                if (o) {
                    var f = vl(n, a.scale),
                        p = yl(a.positionX, a.positionY, f, i, 0, 0, o),
                        d = {
                            scale: a.scale,
                            positionX: p.x,
                            positionY: p.y
                        };
                    s === a.scale && c === a.positionX && l === a.positionY || ml(n, d, t, e)
                }
            }
            var Vl = function(n) {
                    return function(t, e, r) {
                        void 0 === t && (t = .5), void 0 === e && (e = 300), void 0 === r && (r = "easeOut"), jl(n, 1, t, e, r)
                    }
                },
                Fl = function(n) {
                    return function(t, e, r) {
                        void 0 === t && (t = .5), void 0 === e && (e = 300), void 0 === r && (r = "easeOut"), jl(n, -1, t, e, r)
                    }
                },
                Wl = function(n) {
                    return function(t, e, r, o, i) {
                        void 0 === o && (o = 300), void 0 === i && (i = "easeOut");
                        var a = n.transformState,
                            u = a.positionX,
                            s = a.positionY,
                            c = a.scale,
                            l = n.wrapperComponent,
                            f = n.contentComponent;
                        if (!n.setup.disabled && l && f) {
                            var p = {
                                positionX: isNaN(t) ? u : t,
                                positionY: isNaN(e) ? s : e,
                                scale: isNaN(r) ? c : r
                            };
                            ml(n, p, o, i)
                        }
                    }
                },
                Yl = function(n) {
                    return function(t, e) {
                        void 0 === t && (t = 200), void 0 === e && (e = "easeOut"), Bl(n, t, e)
                    }
                },
                Hl = function(n) {
                    return function(t, e, r) {
                        void 0 === e && (e = 200), void 0 === r && (r = "easeOut");
                        var o = n.transformState,
                            i = n.wrapperComponent,
                            a = n.contentComponent;
                        if (i && a) {
                            var u = Zl(t || o.scale, i, a);
                            ml(n, u, e, r)
                        }
                    }
                },
                Ul = function(n) {
                    return function(t, e, r, o) {
                        void 0 === r && (r = 600), void 0 === o && (o = "easeOut"), dl(n);
                        var i = n.wrapperComponent,
                            a = "string" == typeof t ? document.getElementById(t) : t;
                        if (i && function(n) {
                                return n ? void 0 !== (null == n ? void 0 : n.offsetWidth) && void 0 !== (null == n ? void 0 : n.offsetHeight) || (console.error("Zoom node is not valid - it must contain offsetWidth and offsetHeight"), !1) : (console.error("Zoom node not found"), !1)
                            }(a) && a && i.contains(a)) {
                            var u = function(n, t, e) {
                                var r = n.wrapperComponent,
                                    o = n.setup,
                                    i = o.limitToBounds,
                                    a = o.minScale,
                                    u = o.maxScale;
                                if (!r) return Rl;
                                var s = r.getBoundingClientRect(),
                                    c = function(n) {
                                        for (var t = n, e = 0, r = 0; t;) e += t.offsetLeft, r += t.offsetTop, t = t.offsetParent;
                                        return {
                                            x: e,
                                            y: r
                                        }
                                    }(t),
                                    l = c.x,
                                    f = c.y,
                                    p = t.offsetWidth,
                                    d = t.offsetHeight,
                                    h = r.offsetWidth / p,
                                    m = r.offsetHeight / d,
                                    v = xl(e || Math.min(h, m), a, u, 0, !1),
                                    g = (s.width - p * v) / 2,
                                    y = (s.height - d * v) / 2,
                                    b = yl((s.left - l) * v + g, (s.top - f) * v + y, vl(n, v), i, 0, 0, r);
                                return {
                                    positionX: b.x,
                                    positionY: b.y,
                                    scale: v
                                }
                            }(n, a, e);
                            ml(n, u, r, o)
                        }
                    }
                },
                $l = function(n) {
                    return {
                        instance: n,
                        state: n.transformState,
                        zoomIn: Vl(n),
                        zoomOut: Fl(n),
                        setTransform: Wl(n),
                        resetTransform: Yl(n),
                        centerView: Hl(n),
                        zoomToElement: Ul(n)
                    }
                };

            function Xl() {
                try {
                    return {
                        get passive() {
                            return !1
                        }
                    }
                } catch (Ao) {
                    return !1
                }
            }
            var ql = function(n, t) {
                    var e = n.tagName.toUpperCase();
                    return !!t.find((function(n) {
                        return n.toUpperCase() === e
                    })) || !!t.find((function(t) {
                        return n.classList.contains(t)
                    }))
                },
                Gl = function(n) {
                    n && clearTimeout(n)
                },
                Kl = function(n, t, e) {
                    return "translate3d(" + n + "px, " + t + "px, 0) scale(" + e + ")"
                },
                Zl = function(n, t, e) {
                    var r = e.offsetWidth * n,
                        o = e.offsetHeight * n;
                    return {
                        scale: n,
                        positionX: (t.offsetWidth - r) / 2,
                        positionY: (t.offsetHeight - o) / 2
                    }
                },
                Jl = function(n, t) {
                    var e = n.setup.wheel,
                        r = e.disabled,
                        o = e.wheelDisabled,
                        i = e.touchPadDisabled,
                        a = e.excluded,
                        u = n.isInitialized,
                        s = n.isPanning,
                        c = t.target;
                    return !(!u || s || r || !c) && !(o && !t.ctrlKey) && (!i || !t.ctrlKey) && !ql(c, a)
                };

            function Ql(n, t, e) {
                var r = t.getBoundingClientRect(),
                    o = 0,
                    i = 0;
                if ("clientX" in n) o = (n.clientX - r.left) / e, i = (n.clientY - r.top) / e;
                else {
                    var a = n.touches[0];
                    o = (a.clientX - r.left) / e, i = (a.clientY - r.top) / e
                }
                return (isNaN(o) || isNaN(i)) && console.error("No mouse or touch offset found"), {
                    x: o,
                    y: i
                }
            }
            var nf = function(n, t) {
                    var e = n.setup.pinch,
                        r = e.disabled,
                        o = e.excluded,
                        i = n.isInitialized,
                        a = t.target;
                    return !(!i || r || !a) && !ql(a, o)
                },
                tf = function(n) {
                    var t = n.setup.pinch.disabled,
                        e = n.isInitialized,
                        r = n.pinchStartDistance;
                    return !(!e || t || !r)
                },
                ef = function(n) {
                    return Math.sqrt(Math.pow(n.touches[0].pageX - n.touches[1].pageX, 2) + Math.pow(n.touches[0].pageY - n.touches[1].pageY, 2))
                },
                rf = function(n, t) {
                    var e = n.props,
                        r = e.onWheelStart,
                        o = e.onZoomStart;
                    n.wheelStopEventTimer || (dl(n), ll($l(n), t, r), ll($l(n), t, o))
                },
                of = function(n, t) {
                    var e = n.props,
                        r = e.onWheel,
                        o = e.onZoom,
                        i = n.contentComponent,
                        a = n.setup,
                        u = n.transformState.scale,
                        s = a.limitToBounds,
                        c = a.centerZoomedOut,
                        l = a.zoomAnimation,
                        f = a.wheel,
                        p = l.size,
                        d = l.disabled,
                        h = f.step;
                    if (!i) throw new Error("Component not mounted");
                    t.preventDefault(), t.stopPropagation();
                    var m = function(n, t, e, r, o) {
                        var i = n.transformState.scale,
                            a = n.wrapperComponent,
                            u = n.setup,
                            s = u.maxScale,
                            c = u.minScale,
                            l = u.zoomAnimation,
                            f = l.size,
                            p = l.disabled;
                        if (!a) throw new Error("Wrapper is not mounted");
                        var d = i + t * (i - i * e) * e;
                        var h = !r && !p;
                        return xl(cl(d, 3), c, s, f, h)
                    }(n, function(n, t) {
                        var e = n ? n.deltaY < 0 ? 1 : -1 : 0;
                        return "number" == typeof null ? null : e
                    }(t), h, !t.ctrlKey);
                    if (u !== m) {
                        var v = gl(n, m),
                            g = Ql(t, i, u),
                            y = s && (d || 0 === p || c),
                            b = wl(n, g.x, g.y, m, v, y),
                            w = b.x,
                            x = b.y;
                        n.previousWheelEvent = t, n.setTransformState(m, w, x), ll($l(n), t, r), ll($l(n), t, o)
                    }
                },
                af = function(n, t) {
                    var e = n.props,
                        r = e.onWheelStop,
                        o = e.onZoomStop;
                    Gl(n.wheelAnimationTimer), n.wheelAnimationTimer = setTimeout((function() {
                            n.mounted && (Ol(n, t.x, t.y), n.wheelAnimationTimer = null)
                        }), 100),
                        function(n, t) {
                            var e = n.previousWheelEvent,
                                r = n.transformState.scale,
                                o = n.setup,
                                i = o.maxScale,
                                a = o.minScale;
                            return !!e && (r < i || r > a || Math.sign(e.deltaY) !== Math.sign(t.deltaY) || e.deltaY > 0 && e.deltaY < t.deltaY || e.deltaY < 0 && e.deltaY > t.deltaY || Math.sign(e.deltaY) !== Math.sign(t.deltaY))
                        }(n, t) && (Gl(n.wheelStopEventTimer), n.wheelStopEventTimer = setTimeout((function() {
                            n.mounted && (n.wheelStopEventTimer = null, ll($l(n), t, r), ll($l(n), t, o))
                        }), 160))
                },
                uf = function(n, t) {
                    var e = ef(t);
                    n.pinchStartDistance = e, n.lastDistance = e, n.pinchStartScale = n.transformState.scale, n.isPanning = !1, dl(n)
                },
                sf = function(n, t) {
                    var e = n.contentComponent,
                        r = n.pinchStartDistance,
                        o = n.transformState.scale,
                        i = n.setup,
                        a = i.limitToBounds,
                        u = i.centerZoomedOut,
                        s = i.zoomAnimation,
                        c = s.disabled,
                        l = s.size;
                    if (null !== r && e) {
                        var f = function(n, t, e) {
                            var r = e.getBoundingClientRect(),
                                o = n.touches,
                                i = cl(o[0].clientX - r.left, 5),
                                a = cl(o[0].clientY - r.top, 5);
                            return {
                                x: (i + cl(o[1].clientX - r.left, 5)) / 2 / t,
                                y: (a + cl(o[1].clientY - r.top, 5)) / 2 / t
                            }
                        }(t, o, e);
                        if (isFinite(f.x) && isFinite(f.y)) {
                            var p = ef(t),
                                d = function(n, t) {
                                    var e = n.pinchStartScale,
                                        r = n.pinchStartDistance,
                                        o = n.setup,
                                        i = o.maxScale,
                                        a = o.minScale,
                                        u = o.zoomAnimation,
                                        s = u.size,
                                        c = u.disabled;
                                    if (!e || null === r || !t) throw new Error("Pinch touches distance was not provided");
                                    return t < 0 ? n.transformState.scale : xl(cl(t / r * e, 2), a, i, s, !c)
                                }(n, p);
                            if (d !== o) {
                                var h = gl(n, d),
                                    m = a && (c || 0 === l || u),
                                    v = wl(n, f.x, f.y, d, h, m),
                                    g = v.x,
                                    y = v.y;
                                n.pinchMidpoint = f, n.lastDistance = p, n.setTransformState(d, g, y)
                            }
                        }
                    }
                },
                cf = function(n) {
                    var t = n.pinchMidpoint;
                    n.velocity = null, n.lastDistance = null, n.pinchMidpoint = null, n.pinchStartScale = null, n.pinchStartDistance = null, Ol(n, null == t ? void 0 : t.x, null == t ? void 0 : t.y)
                };

            function lf(n, t) {
                var e = n.setup.doubleClick,
                    r = e.disabled,
                    o = e.mode,
                    i = e.step,
                    a = e.animationTime,
                    u = e.animationType;
                if (!r) {
                    if ("reset" === o) return Bl(n, a, u);
                    var s = n.transformState.scale,
                        c = n.contentComponent;
                    if (!c) return console.error("No ContentComponent found");
                    var l = Ml(n, "zoomOut" === o ? -1 : 1, i),
                        f = Ql(t, c, s),
                        p = kl(n, l, f.x, f.y);
                    if (!p) return console.error("Error during zoom event. New transformation state was not calculated.");
                    ml(n, p, a, u)
                }
            }
            var ff = function(n, t) {
                    var e = n.isInitialized,
                        r = n.setup,
                        o = n.wrapperComponent,
                        i = r.doubleClick,
                        a = i.disabled,
                        u = i.excluded,
                        s = t.target,
                        c = null == o ? void 0 : o.contains(s),
                        l = e && s && c && !a;
                    return !!l && !ql(s, u) && !!l
                },
                pf = r.createContext(Nl),
                df = function(n) {
                    function t() {
                        var t = null !== n && n.apply(this, arguments) || this;
                        return t.mounted = !0, t.transformState = Il(t.props), t.setup = Dl(t.props), t.wrapperComponent = null, t.contentComponent = null, t.isInitialized = !1, t.bounds = null, t.previousWheelEvent = null, t.wheelStopEventTimer = null, t.wheelAnimationTimer = null, t.isPanning = !1, t.startCoords = null, t.lastTouch = null, t.distance = null, t.lastDistance = null, t.pinchStartDistance = null, t.pinchStartScale = null, t.pinchMidpoint = null, t.velocity = null, t.velocityTime = null, t.lastMousePosition = null, t.animate = !1, t.animation = null, t.maxBounds = null, t.pressedKeys = {}, t.handleInitializeWrapperEvents = function(n) {
                            var e = Xl();
                            n.addEventListener("wheel", t.onWheelZoom, e), n.addEventListener("dblclick", t.onDoubleClick, e), n.addEventListener("touchstart", t.onTouchPanningStart, e), n.addEventListener("touchmove", t.onTouchPanning, e), n.addEventListener("touchend", t.onTouchPanningStop, e)
                        }, t.handleInitialize = function() {
                            var n = t.setup.centerOnInit;
                            t.applyTransformation(), t.forceUpdate(), n && (setTimeout((function() {
                                t.mounted && t.setCenter()
                            }), 50), setTimeout((function() {
                                t.mounted && t.setCenter()
                            }), 100), setTimeout((function() {
                                t.mounted && t.setCenter()
                            }), 200))
                        }, t.onWheelZoom = function(n) {
                            t.setup.disabled || Jl(t, n) && t.isPressingKeys(t.setup.wheel.activationKeys) && (rf(t, n), of (t, n), af(t, n))
                        }, t.onPanningStart = function(n) {
                            var e = t.setup.disabled,
                                r = t.props.onPanningStart;
                            e || Sl(t, n) && t.isPressingKeys(t.setup.panning.activationKeys) && (n.preventDefault(), n.stopPropagation(), dl(t), Tl(t, n), ll($l(t), n, r))
                        }, t.onPanning = function(n) {
                            var e = t.setup.disabled,
                                r = t.props.onPanning;
                            e || El(t) && t.isPressingKeys(t.setup.panning.activationKeys) && (n.preventDefault(), n.stopPropagation(), Pl(t, n.clientX, n.clientY), ll($l(t), n, r))
                        }, t.onPanningStop = function(n) {
                            var e = t.props.onPanningStop;
                            t.isPanning && (Al(t), ll($l(t), n, e))
                        }, t.onPinchStart = function(n) {
                            var e = t.setup.disabled,
                                r = t.props,
                                o = r.onPinchingStart,
                                i = r.onZoomStart;
                            e || nf(t, n) && (uf(t, n), dl(t), ll($l(t), n, o), ll($l(t), n, i))
                        }, t.onPinch = function(n) {
                            var e = t.setup.disabled,
                                r = t.props,
                                o = r.onPinching,
                                i = r.onZoom;
                            e || tf(t) && (n.preventDefault(), n.stopPropagation(), sf(t, n), ll($l(t), n, o), ll($l(t), n, i))
                        }, t.onPinchStop = function(n) {
                            var e = t.props,
                                r = e.onPinchingStop,
                                o = e.onZoomStop;
                            t.pinchStartScale && (cf(t), ll($l(t), n, r), ll($l(t), n, o))
                        }, t.onTouchPanningStart = function(n) {
                            var e = t.setup.disabled,
                                r = t.props.onPanningStart;
                            if (!e && Sl(t, n))
                                if (t.lastTouch && +new Date - t.lastTouch < 200 && 1 === n.touches.length) t.onDoubleClick(n);
                                else {
                                    t.lastTouch = +new Date, dl(t);
                                    var o = n.touches,
                                        i = 1 === o.length,
                                        a = 2 === o.length;
                                    i && (dl(t), Tl(t, n), ll($l(t), n, r)), a && t.onPinchStart(n)
                                }
                        }, t.onTouchPanning = function(n) {
                            var e = t.setup.disabled,
                                r = t.props.onPanning;
                            if (t.isPanning && 1 === n.touches.length) {
                                if (e) return;
                                if (!El(t)) return;
                                n.preventDefault(), n.stopPropagation();
                                var o = n.touches[0];
                                Pl(t, o.clientX, o.clientY), ll($l(t), n, r)
                            } else n.touches.length > 1 && t.onPinch(n)
                        }, t.onTouchPanningStop = function(n) {
                            t.onPanningStop(n), t.onPinchStop(n)
                        }, t.onDoubleClick = function(n) {
                            t.setup.disabled || ff(t, n) && lf(t, n)
                        }, t.clearPanning = function(n) {
                            t.isPanning && t.onPanningStop(n)
                        }, t.setKeyPressed = function(n) {
                            t.pressedKeys[n.key] = !0
                        }, t.setKeyUnPressed = function(n) {
                            t.pressedKeys[n.key] = !1
                        }, t.isPressingKeys = function(n) {
                            return !n.length || Boolean(n.find((function(n) {
                                return t.pressedKeys[n]
                            })))
                        }, t.setComponents = function(n, e) {
                            t.wrapperComponent = n, t.contentComponent = e, gl(t, t.transformState.scale), t.handleInitializeWrapperEvents(n), t.handleInitialize(), t.handleRef(), t.isInitialized = !0, ll($l(t), void 0, t.props.onInit)
                        }, t.setTransformState = function(n, e, r) {
                            isNaN(n) || isNaN(e) || isNaN(r) ? console.error("Detected NaN set state values") : (n !== t.transformState.scale && (t.transformState.previousScale = t.transformState.scale, t.transformState.scale = n), t.transformState.positionX = e, t.transformState.positionY = r, t.applyTransformation())
                        }, t.setCenter = function() {
                            if (t.wrapperComponent && t.contentComponent) {
                                var n = Zl(t.transformState.scale, t.wrapperComponent, t.contentComponent);
                                t.setTransformState(n.scale, n.positionX, n.positionY)
                            }
                        }, t.applyTransformation = function() {
                            if (t.mounted && t.contentComponent) {
                                var n = t.transformState,
                                    e = n.scale,
                                    r = n.positionX,
                                    o = n.positionY,
                                    i = Kl(r, o, e);
                                t.contentComponent.style.transform = i, t.handleRef()
                            }
                        }, t.handleRef = function() {
                            t.props.setRef($l(t))
                        }, t
                    }
                    return function(n, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function e() {
                            this.constructor = n
                        }
                        al(n, t), n.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e)
                    }(t, n), t.prototype.componentDidMount = function() {
                        var n = Xl();
                        window.addEventListener("mousedown", this.onPanningStart, n), window.addEventListener("mousemove", this.onPanning, n), window.addEventListener("mouseup", this.onPanningStop, n), document.addEventListener("mouseleave", this.clearPanning, n), window.addEventListener("keyup", this.setKeyUnPressed, n), window.addEventListener("keydown", this.setKeyPressed, n), this.handleRef()
                    }, t.prototype.componentWillUnmount = function() {
                        var n = Xl();
                        window.removeEventListener("mousedown", this.onPanningStart, n), window.removeEventListener("mousemove", this.onPanning, n), window.removeEventListener("mouseup", this.onPanningStop, n), window.removeEventListener("keyup", this.setKeyUnPressed, n), window.removeEventListener("keydown", this.setKeyPressed, n), dl(this)
                    }, t.prototype.componentDidUpdate = function(n) {
                        n !== this.props && (gl(this, this.transformState.scale), this.setup = Dl(this.props))
                    }, t.prototype.render = function() {
                        var n = $l(this),
                            t = this.props.children,
                            e = "function" == typeof t ? t(n) : t;
                        return r.createElement(pf.Provider, {
                            value: ul(ul({}, this.transformState), {
                                setComponents: this.setComponents,
                                contextInstance: this
                            })
                        }, e)
                    }, t
                }(r.Component),
                hf = r.forwardRef((function(n, t) {
                    var e = (0, r.useState)(null),
                        o = e[0],
                        i = e[1];
                    return (0, r.useImperativeHandle)(t, (function() {
                        return o
                    }), [o]), r.createElement(df, ul({}, n, {
                        setRef: i
                    }))
                }));
            ! function(n, t) {
                void 0 === t && (t = {});
                var e = t.insertAt;
                if ("undefined" != typeof document) {
                    var r = document.head || document.getElementsByTagName("head")[0],
                        o = document.createElement("style");
                    o.type = "text/css", "top" === e && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n))
                }
            }(".transform-component-module_wrapper__1_Fgj {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__2jYgh {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__2jYgh img {\n  pointer-events: none;\n}\n");
            var mf, vf, gf, yf, bf, wf = function(n) {
                    var t = n.children,
                        e = n.wrapperClass,
                        o = void 0 === e ? "" : e,
                        i = n.contentClass,
                        a = void 0 === i ? "" : i,
                        u = n.wrapperStyle,
                        s = n.contentStyle,
                        c = (0, r.useContext)(pf).setComponents,
                        l = (0, r.useRef)(null),
                        f = (0, r.useRef)(null);
                    return (0, r.useEffect)((function() {
                        var n = l.current,
                            t = f.current;
                        null !== n && null !== t && c && c(n, t)
                    }), []), r.createElement("div", {
                        ref: l,
                        className: "react-transform-wrapper transform-component-module_wrapper__1_Fgj " + o,
                        style: u
                    }, r.createElement("div", {
                        ref: f,
                        className: "react-transform-component transform-component-module_content__2jYgh " + a,
                        style: s
                    }, t))
                },
                xf = r.memo((function(n) {
                    var t = n.src,
                        e = n.caption,
                        o = n.disablePanzoom,
                        i = n.handlePanzoom,
                        a = n.panzoomEnabled,
                        u = n.boxShadow,
                        s = n.imgHeight,
                        c = n.imgWidth,
                        l = on((0, r.useState)(!0), 2),
                        f = l[0],
                        p = l[1];

                    function d(n) {
                        n.touches.length > 1 && !a && n.cancelable && (n.preventDefault(), i(!0))
                    }(0, r.useEffect)((function() {
                        var n = new Image;
                        n.src = t, n.onload = function() {
                            p(!1)
                        }
                    }), [t]), (0, r.useEffect)((function() {
                        return document.addEventListener("touchstart", d, {
                                passive: !1
                            }),
                            function() {
                                document.addEventListener("touchstart", d, {
                                    passive: !1
                                })
                            }
                    }), []);
                    var h = f ? r.createElement(il, null) : a ? r.createElement(hf, {
                        maxScale: 6,
                        minScale: .5,
                        wheel: {
                            step: .5
                        },
                        zoomAnimation: {
                            animationType: "easeInOutQuad"
                        }
                    }, r.createElement(wf, null, r.createElement(ol, {
                        src: t,
                        className: "SRLImage SRLImageZoomed",
                        alt: e,
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            ease: "easeInOut"
                        }
                    }))) : r.createElement(rl, {
                        src: t,
                        className: "SRLImage",
                        disablePanzoom: o,
                        onClick: function() {
                            return i(!0)
                        },
                        alt: e,
                        boxShadow: u,
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            ease: "easeInOut"
                        },
                        width: c,
                        height: s
                    });
                    return r.createElement(bc, null, h)
                }));
            xf.displayName = "ImageLoad", xf.propTypes = {
                handlePanzoom: tn.func,
                src: tn.string,
                caption: tn.string,
                disablePanzoom: tn.bool,
                boxShadow: tn.string,
                panzoomEnabled: tn.bool,
                containerRef: tn.any,
                imgWidth: tn.number,
                imgHeight: tn.number
            };
            var Sf, Ef, _f, Cf, Tf, Pf, Af, Lf, Of, kf, Rf, Nf, zf, If, Df, Mf, jf, Bf, Vf, Ff = ue(mf || (mf = Sn(["\n  -ms-grid-columns: 1fr auto;\n  grid-template-columns: 1fr auto;\n  -ms-grid-rows: 90% auto;\n  grid-template-rows: 90% auto;\n\n  > *:nth-of-type(1) {\n    -ms-grid-row: 1;\n  }\n\n  > *:nth-of-type(2) {\n    -ms-grid-row: 2;\n  }\n\n  > *:nth-of-type(3) {\n    -ms-grid-row: 1;\n  }\n"]))),
                Wf = ue(vf || (vf = Sn(["\n  -ms-grid-columns: auto 1fr;\n  grid-template-columns: auto 1fr;\n  -ms-grid-rows: 90% auto;\n  grid-template-rows: 90% auto;\n\n  > *:nth-of-type(1) {\n    -ms-grid-row: 1;\n  }\n\n  > *:nth-of-type(2) {\n    -ms-grid-row: 2;\n  }\n\n  > *:nth-of-type(3) {\n    -ms-grid-row: 1;\n  }\n"]))),
                Yf = xe.div(gf || (gf = Sn(["\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  display: grid;\n  display: -ms-grid;\n  -ms-grid-rows: auto;\n  grid-template-rows: auto;\n  align-items: center;\n  justify-content: center;\n  justify-items: center;\n  width: 100vw;\n  height: 100vh;\n  height: calc(var(--vh, 1vh) * 100);\n\n  > *:nth-of-type(1) {\n    -ms-grid-row: 1;\n  }\n\n  > *:nth-of-type(2) {\n    -ms-grid-row: 2;\n  }\n\n  > *:nth-of-type(3) {\n    -ms-grid-row: 3;\n  }\n\n  /* Thumbnails aligned to the right */\n  ", ";\n\n  /* Thumbnails aligned to the left */\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  @media (max-width: 768px) {\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n  }\n"])), (function(n) {
                    return "right" === n.thumbnailsPosition && Ff
                }), (function(n) {
                    return "left" === n.thumbnailsPosition && Wf
                }), (function(n) {
                    return n.hideThumbnails && ue(yf || (yf = Sn(["\n      -ms-grid-rows: 90% auto;\n      grid-template-rows: 90% auto;\n    "])))
                }), (function(n) {
                    return !n.showCaption && ue(bf || (bf = Sn(["\n      -ms-grid-rows: auto;\n      grid-template-rows: auto;\n    "])))
                }));

            function Hf(n) {
                var t, e, o = n.caption,
                    i = n.direction,
                    a = n.elements,
                    u = n.handleCurrentElement,
                    s = n.handleCloseLightbox,
                    c = n.handleNextElement,
                    l = n.handlePanzoom,
                    f = n.handlePrevElement,
                    p = n.height,
                    d = n.hideThumbnails,
                    h = n.id,
                    m = n.options,
                    v = n.panzoomEnabled,
                    g = n.source,
                    y = n.SRLThumbnailsRef,
                    b = n.SRLCaptionRef,
                    w = n.width,
                    x = m.settings,
                    S = m.thumbnails,
                    E = m.caption,
                    _ = on(Jc(b), 1)[0],
                    C = on(Jc(y), 1)[0],
                    T = (0, r.useRef)(),
                    P = !!window.MSInputMethodContext && !!document.documentMode,
                    A = P ? 1e3 : "100%",
                    L = P ? -1e3 : "-100%",
                    O = {
                        slideIn: function(n) {
                            return {
                                x: void 0 === n ? 0 : "next" === n ? A : L,
                                transition: {
                                    ease: x.slideTransitionTimingFunction
                                }
                            }
                        },
                        slideOut: function(n) {
                            return {
                                x: "previous" === n ? A : L,
                                transition: {
                                    ease: x.slideTransitionTimingFunction
                                }
                            }
                        },
                        fadeIn: {
                            opacity: 0,
                            transition: {
                                ease: x.slideTransitionTimingFunction
                            }
                        },
                        fadeOut: {
                            opacity: 0,
                            transition: {
                                ease: x.slideTransitionTimingFunction
                            }
                        },
                        bothIn: function(n) {
                            return {
                                opacity: 1,
                                x: void 0 === n ? "0" : "next" === n ? 1e3 : -1e3,
                                transition: {
                                    ease: x.slideTransitionTimingFunction
                                }
                            }
                        },
                        bothOut: function(n) {
                            return {
                                opacity: 0,
                                x: "previous" === n ? 1e3 : -1e3,
                                transition: {
                                    ease: x.slideTransitionTimingFunction
                                }
                            }
                        },
                        center: {
                            x: 0,
                            opacity: 1
                        }
                    },
                    k = Vc({
                        onSwipedLeft: function() {
                            return c(h)
                        },
                        onSwipedRight: function() {
                            return f(h)
                        },
                        delta: v ? 500 : 90,
                        preventDefaultTouchmoveEvent: !0,
                        trackTouch: !0,
                        trackMouse: !1
                    }),
                    R = Fc((function(n) {
                        n > 0 ? c(h) : n < 0 && f(h)
                    }), 150);
                (0, r.useEffect)((function() {
                    if (!v && !x.disableWheelControls) {
                        var n = Kc(document, "wheel", (function(n) {
                            return R(n.deltaY)
                        }));
                        return function() {
                            n()
                        }
                    }
                }), [R, v, x.disableWheelControls]), (0, r.useEffect)((function() {
                    var n = function(n) {
                        !t.current || n.target.classList.contains("SRLImage") || n.target.classList.contains("SRLPanzoomImage") || n.target.classList.contains("SRLNextButton") || n.target.classList.contains("SRLPrevButton") || n.target.classList.contains("SRLCloseButton") || n.target.classList.contains("SRLAutoplayButton") || n.target.classList.contains("SRLExpandButton") || n.target.classList.contains("SRLZoomOutButton") || n.target.classList.contains("SRLDownloadButton") || n.target.classList.contains("SRLThumbnailsButton") || n.target.classList.contains("SRLCaptionContainer") || n.target.classList.contains("SRLCaptionText") || n.target.classList.contains("SRLCustomCaption") || n.target.classList.contains("SRLThumbnails") || n.target.classList.contains("SRLThumb") || n.target.classList.contains("SRLCaption") || n.target.classList.contains("react-transform-component") || n.target.classList.contains("react-transform-element") || "touchstart" === n.type || 0 !== n.button || e(n)
                    };
                    return "undefined" != typeof window && (document.addEventListener("mousedown", n), document.addEventListener("touchstart", n)),
                        function() {
                            "undefined" != typeof window && (document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n))
                        }
                }), [t = T, e = function() {
                    return s()
                }]);
                var N = {
                    captionAlignment: m.caption.captionAlignment,
                    captionColor: m.caption.captionColor,
                    captionContainerPadding: m.caption.captionContainerPadding,
                    captionFontFamily: m.caption.captionFontFamily,
                    captionFontSize: m.caption.captionFontSize,
                    captionFontStyle: m.caption.captionFontStyle,
                    captionFontWeight: m.caption.captionFontWeight,
                    captionTextTransform: m.caption.captionTextTransform
                };
                return r.createElement(Yf, {
                    className: "SRLContainer",
                    ref: T,
                    thumbnailsPosition: S.thumbnailsPosition,
                    showCaption: E.showCaption,
                    hideThumbnails: d
                }, r.createElement(tl, xn({
                    thumbnailsPosition: S.thumbnailsPosition,
                    showThumbnails: S.showThumbnails,
                    hideThumbnails: d,
                    showCaption: E.showCaption,
                    className: "SRLElementContainer",
                    captionDivSizes: _,
                    thumbnailsDivSizes: C
                }, k), r.createElement(bc, {
                    className: "SRLAnimatePresence",
                    custom: i
                }, r.createElement(el, {
                    variants: O,
                    custom: i,
                    initial: "slide" === x.slideAnimationType ? "slideIn" : "both" === x.slideAnimationType ? "bothIn" : "fadeIn",
                    animate: "center",
                    exit: "slide" === x.slideAnimationType ? "slideOut" : "both" === x.slideAnimationType ? "bothOut" : "fadeOut",
                    className: "SRLElementWrapper",
                    key: h || 0,
                    transition: {
                        x: {
                            type: "spring",
                            stiffness: x.slideSpringValues[0],
                            damping: x.slideSpringValues[1]
                        },
                        opacity: {
                            duration: x.slideTransitionSpeed
                        }
                    }
                }, r.createElement(xf, {
                    disablePanzoom: x.disablePanzoom,
                    panzoomEnabled: v,
                    handlePanzoom: l,
                    containerRef: T,
                    imgHeight: p,
                    imgWidth: w,
                    src: g,
                    caption: o,
                    boxShadow: x.boxShadow
                })))), E.showCaption && r.createElement(Ic, {
                    id: h,
                    thumbnailsPosition: S.thumbnailsPosition,
                    captionOptions: N,
                    caption: o,
                    SRLCaptionRef: b
                }), S.showThumbnails && !d && r.createElement(Nc, {
                    handleCurrentElement: u,
                    thumbnails: S,
                    currentId: h,
                    elements: a || [],
                    SRLThumbnailsRef: y
                }))
            }
            Hf.propTypes = {
                caption: tn.string,
                direction: tn.string,
                elements: tn.array,
                handleCloseLightbox: tn.func,
                handleCurrentElement: tn.func,
                handleNextElement: tn.func,
                handlePanzoom: tn.func,
                handlePrevElement: tn.func,
                height: tn.oneOfType([tn.number, tn.string]),
                hideThumbnails: tn.bool,
                id: tn.string,
                options: tn.shape({
                    settings: tn.shape({
                        boxShadow: tn.string,
                        disablePanzoom: tn.bool,
                        disableWheelControls: tn.bool,
                        slideAnimationType: tn.string,
                        slideSpringValues: tn.array,
                        slideTransitionSpeed: tn.number,
                        slideTransitionTimingFunction: tn.oneOfType([tn.string, tn.array])
                    }),
                    caption: tn.shape({
                        captionAlignment: tn.string,
                        captionColor: tn.string,
                        captionFontFamily: tn.string,
                        captionFontSize: tn.string,
                        captionFontStyle: tn.string,
                        captionFontWeight: tn.oneOfType([tn.number, tn.string]),
                        captionContainerPadding: tn.string,
                        captionTextTransform: tn.string,
                        showCaption: tn.bool
                    }),
                    thumbnails: tn.shape({
                        showThumbnails: tn.bool,
                        thumbnailsOpacity: tn.number,
                        thumbnailsPosition: tn.string,
                        thumbnailsSize: tn.array
                    })
                }),
                panzoomEnabled: tn.bool,
                showControls: tn.bool,
                source: tn.oneOfType([tn.string, tn.object]),
                SRLCaptionRef: tn.object,
                SRLThumbnailsRef: tn.object,
                thumbnailsOpacity: tn.number,
                type: tn.string,
                width: tn.oneOfType([tn.number, tn.string])
            };
            var Uf, $f, Xf = xe.button(Sf || (Sf = Sn(["\n  position: absolute;\n  height: ", ";\n  width: ", ";\n  transition: color 0.3s ease;\n  background-color: ", ";\n  border: 0;\n  border-radius: 0;\n  box-shadow: none;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  visibility: inherit;\n  z-index: 9998;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n\n  .SRLIdle & {\n    opacity: 0;\n\n    @media (max-width: 768px) {\n      opacity: 1;\n    }\n\n    @media (max-width: 360px) {\n      opacity: 1;\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  @media (max-width: 768px) {\n    height: ", ";\n    width: ", ";\n\n    .SRLIdle & {\n      opacity: 1;\n    }\n  }\n\n  div {\n    height: ", ";\n    width: ", ";\n    padding: ", ";\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n\n    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {\n      padding: 10px;\n      height: ", ";\n      width: ", ";\n    }\n\n    @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {\n      padding: 10px;\n      height: ", ";\n      width: ", ";\n    }\n\n    @media (max-width: 768px) {\n      padding: 10px;\n      height: ", ";\n      width: ", ";\n\n      .SRLIdle & {\n        opacity: 1;\n      }\n    }\n\n    svg {\n      display: block;\n      height: 100%;\n      width: 100%;\n      overflow: visible;\n      position: relative;\n      path {\n        transition: fill 0.3s ease;\n        fill: ", ";\n      }\n    }\n    &:hover {\n      svg path {\n        fill: ", ";\n      }\n    }\n  }\n"])), (function(n) {
                    return n.buttonsSize ? n.buttonsSize : "30px"
                }), (function(n) {
                    return n.buttonsSize ? n.buttonsSize : "30px"
                }), (function(n) {
                    return n.buttonsBackgroundColor ? n.buttonsBackgroundColor : "rgba(30, 30, 36, 0.8)"
                }), (function(n) {
                    return n.buttonsSize ? Math.round(parseInt(n.buttonsSize, 10) / 1.2) + "px" : "30px"
                }), (function(n) {
                    return n.buttonsSize ? Math.round(parseInt(n.buttonsSize, 10) / 1.2) + "px" : "30px"
                }), (function(n) {
                    return n.buttonsSize ? n.buttonsSize : "30px"
                }), (function(n) {
                    return n.buttonsSize ? n.buttonsSize : "30px"
                }), (function(n) {
                    return n.buttonsIconPadding ? n.buttonsIconPadding : "5px"
                }), (function(n) {
                    return n.buttonsSize ? Math.round(parseInt(n.buttonsSize, 10) / 1) + "px" : "30px"
                }), (function(n) {
                    return n.buttonsSize ? Math.round(parseInt(n.buttonsSize, 10) / 1) + "px" : "30px"
                }), (function(n) {
                    return n.buttonsSize ? Math.round(parseInt(n.buttonsSize, 10) / 1) + "px" : "30px"
                }), (function(n) {
                    return n.buttonsSize ? Math.round(parseInt(n.buttonsSize, 10) / 1) + "px" : "30px"
                }), (function(n) {
                    return n.buttonsSize ? Math.round(parseInt(n.buttonsSize, 10) / 1.1) + "px" : "30px"
                }), (function(n) {
                    return n.buttonsSize ? Math.round(parseInt(n.buttonsSize, 10) / 1.1) + "px" : "30px"
                }), (function(n) {
                    return n.buttonsIconColor ? n.buttonsIconColor : "rgba(255, 255, 255, 0.8)"
                }), (function(n) {
                    return n.buttonsIconColor && n.buttonsIconColor.replace(/[\d\.]+\)$/g, "1)")
                })),
                qf = xe.div(Ef || (Ef = Sn(['\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  top: calc(env(safe-area-inset-top) + 5px);\n  right: calc(env(safe-area-inset-right) + 5px);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  transition: 0.3s ease;\n  will-change: right;\n\n  /* Offset the buttons if the progress bar is active and the autoplay is "playing" */\n  ', ";\n\n  /* Offset the buttons if the thumbnails are on the right */\n  ", ";\n\n  /* Thumbnails on right are closed so we need to reset the position */\n  ", ";\n\n  @media (max-width: 768px) {\n    right: 5px;\n    right: calc(env(safe-area-inset-right) + 5px) !important;\n  }\n"])), (function(n) {
                    return n.showProgressBar && n.autoplay && ue(_f || (_f = Sn(["\n      top: ", "px;\n      top: calc(\n        env(safe-area-inset-top) +\n          ", "px\n      );\n    "])), 2 * Math.round(parseInt(n.buttonsOffsetFromProgressBar, 10)), 2 * Math.round(parseInt(n.buttonsOffsetFromProgressBar, 10)))
                }), (function(n) {
                    return "right" === n.thumbnailsPosition && ue(Cf || (Cf = Sn(["\n      right: ", "px;\n      right: calc(\n        env(safe-area-inset-top) + ", "px\n      );\n    "])), n.thumbnailsDivSizes.width + 5, n.thumbnailsDivSizes.width + 5)
                }), (function(n) {
                    return n.hideThumbnails && "right" === n.thumbnailsPosition && ue(Tf || (Tf = Sn(["\n      right: 5px;\n      right: calc(env(safe-area-inset-right) + 5px);\n    "])))
                })),
                Gf = xe(Xf)(Pf || (Pf = Sn(["\n  position: relative;\n"]))),
                Kf = xe(Xf)(Af || (Af = Sn(["\n  position: relative;\n  margin-right: 5px;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),
                Zf = xe(Xf)(Lf || (Lf = Sn(["\n  position: relative;\n  margin-right: 5px;\n"]))),
                Jf = xe(Xf)(Of || (Of = Sn(["\n  position: relative;\n  margin-right: 5px;\n  display: ", ";\n"])), (function(n) {
                    return 0 === n.autoplaySpeed ? "none" : "flex"
                })),
                Qf = xe(Xf)(kf || (kf = Sn(["\n  position: relative;\n  margin-right: 5px;\n\n  ", "\n\n  ", "\n\n  @media (max-width: 768px) {\n    svg {\n      transform: rotate(0) !important;\n    }\n  }\n"])), (function(n) {
                    return "right" === n.thumbnailsPosition && ue(Rf || (Rf = Sn(["\n      svg {\n        transform: rotate(-90deg);\n      }\n    "])))
                }), (function(n) {
                    return "left" === n.thumbnailsPosition && ue(Nf || (Nf = Sn(["\n      svg {\n        transform: rotate(90deg);\n      }\n    "])))
                })),
                np = xe(Xf)(zf || (zf = Sn(["\n  position: relative;\n  margin-right: 5px;\n"]))),
                tp = xe(Xf)(If || (If = Sn(["\n  top: calc(50% - 50px);\n  right: 5px;\n  right: calc(env(safe-area-inset-right) + 5px);\n  transition: 0.3s ease;\n  will-change: right;\n\n  /* Offset the thumbnails with the width of the div of the thumbnails */\n  ", ";\n\n  /* Thumbnails on right are closed so we need to reset the position */\n  ", ";\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"])), (function(n) {
                    return "right" === n.thumbnailsPosition && ue(Df || (Df = Sn(["\n      right: ", "px;\n      right: calc(\n        env(safe-area-inset-right) + ", "px\n      );\n    "])), n.thumbnailsDivSizes.width + 5, n.thumbnailsDivSizes.width + 5)
                }), (function(n) {
                    return n.hideThumbnails && "right" === n.thumbnailsPosition && ue(Mf || (Mf = Sn(["\n      right: 5px;\n      right: calc(env(safe-area-inset-right) + 5px);\n    "])))
                })),
                ep = xe(Xf)(jf || (jf = Sn(["\n  top: calc(50% - 50px);\n  left: 5px;\n  left: calc(env(safe-area-inset-left) + 5px);\n  transition: 0.3s ease;\n  will-change: left;\n\n  /* Offset the thumbnails with the width of the div of the thumbnails */\n  ", ";\n\n  /* Thumbnails on left are closed so we need to reset the position */\n  ", ";\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"])), (function(n) {
                    return "left" === n.thumbnailsPosition && ue(Bf || (Bf = Sn(["\n      left: ", "px;\n      left: calc(\n        env(safe-area-inset-right) + ", "px\n      );\n    "])), n.thumbnailsDivSizes.width + 5, n.thumbnailsDivSizes.width + 5)
                }), (function(n) {
                    return n.hideThumbnails && "left" === n.thumbnailsPosition && ue(Vf || (Vf = Sn(["\n      left: 5px;\n      left: calc(env(safe-area-inset-right) + 5px);\n    "])))
                })),
                rp = function(n) {
                    var t = n.autoplay,
                        e = n.buttons,
                        o = n.buttonsOffsetFromProgressBar,
                        i = n.currentElementID,
                        a = n.handleCloseLightbox,
                        u = n.handleFullScreen,
                        s = n.handleImageDownload,
                        c = n.handleNextElement,
                        l = n.handlePanzoom,
                        f = n.handlePrevElement,
                        p = n.handleThumbnails,
                        d = n.hideThumbnails,
                        h = n.panzoomEnabled,
                        m = n.setAutoplay,
                        v = n.settings,
                        g = n.showProgressBar,
                        y = n.showThumbnails,
                        b = n.SRLThumbnailsRef,
                        w = n.thumbnailsPosition,
                        x = n.thumbnailsSize,
                        S = on(Jc(b), 1)[0];
                    return r.createElement(r.Fragment, null, r.createElement(qf, {
                        className: "SRLControls",
                        autoplay: t,
                        showProgressBar: g,
                        buttonsOffsetFromProgressBar: o,
                        thumbnailsPosition: w,
                        thumbnailsDivSizes: S,
                        thumbnailsSize: x,
                        hideThumbnails: d
                    }, e.showAutoplayButton && r.createElement(Jf, {
                        buttonsBackgroundColor: e.backgroundColor,
                        buttonsIconColor: e.iconColor,
                        buttonsSize: e.size,
                        buttonsIconPadding: e.iconPadding,
                        autoplaySpeed: v.autoplaySpeed,
                        title: t ? "Pause" : "Play",
                        className: "SRLAutoplayButton",
                        onClick: function() {
                            return m(!t)
                        }
                    }, r.createElement("div", {
                        className: "SRLAutoplayButton"
                    }, t ? r.createElement("svg", {
                        className: "SRLAutoplayButton",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "11 11 30 30"
                    }, r.createElement("path", {
                        className: "SRLAutoplayButton",
                        d: "M14.2 38.7h5.9c1.6 0 2.9-1.3 2.9-2.9V14.2c0-1.6-1.3-2.9-2.9-2.9h-5.9c-1.6 0-2.9 1.3-2.9 2.9v21.6c0 1.6 1.3 2.9 2.9 2.9zm-1-24.5c0-.5.4-1 1-1h5.9c.5 0 1 .4 1 1v21.6c0 .5-.4 1-1 1h-5.9c-.5 0-1-.4-1-1V14.2zm16.7 24.5h5.9c1.6 0 2.9-1.3 2.9-2.9V14.2c0-1.6-1.3-2.9-2.9-2.9h-5.9c-1.6 0-2.9 1.3-2.9 2.9v21.6c0 1.6 1.3 2.9 2.9 2.9zm-1-24.5c0-.5.4-1 1-1h5.9c.5 0 1 .4 1 1v21.6c0 .5-.4 1-1 1h-5.9c-.5 0-1-.4-1-1V14.2z"
                    })) : r.createElement("svg", {
                        className: "SRLAutoplayButton",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "11 11 30 30"
                    }, r.createElement("path", {
                        className: "SRLAutoplayButton",
                        d: "M35.7 22.8L16.9 11.6c-1.5-.9-3.9 0-3.9 2.2v22.3c0 2 2.2 3.2 3.9 2.2l18.9-11.1c1.6-1 1.6-3.4-.1-4.4zm-.8 2.9L16 36.9c-.6.3-1.3-.1-1.3-.7V13.8c0-.9.9-1 1.3-.7l18.9 11.1c.5.4.5 1.2 0 1.5z"
                    })))), e.showThumbnailsButton && y && r.createElement(Qf, {
                        buttonsBackgroundColor: e.backgroundColor,
                        buttonsIconColor: e.iconColor,
                        buttonsSize: e.size,
                        buttonsIconPadding: e.iconPadding,
                        thumbnailsPosition: w,
                        onClick: p,
                        title: d ? "Show Thumbnails" : "Hide Thumbnails",
                        className: "SRLThumbnailsButton"
                    }, r.createElement("div", {
                        className: "SRLThumbnailsButton"
                    }, r.createElement("svg", {
                        className: "SRLThumbnailsButton",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "11 11 30 30"
                    }, r.createElement("g", {
                        fill: "#fff",
                        className: "SRLThumbnailsButton"
                    }, r.createElement("path", {
                        className: "SRLThumbnailsButton",
                        d: "M15.4 27.4h-4.8c-1.3 0-2.4 1.1-2.4 2.4v4.8c0 1.3 1.1 2.4 2.4 2.4h4.8c1.3 0 2.4-1.1 2.4-2.4v-4.8c0-1.3-1.1-2.4-2.4-2.4zm12 0h-4.8c-1.3 0-2.4 1.1-2.4 2.4v4.8c0 1.3 1.1 2.4 2.4 2.4h4.8c1.3 0 2.4-1.1 2.4-2.4v-4.8c0-1.3-1.1-2.4-2.4-2.4zm12 0h-4.8c-1.3 0-2.4 1.1-2.4 2.4v4.8c0 1.3 1.1 2.4 2.4 2.4h4.8c1.3 0 2.4-1.1 2.4-2.4v-4.8c0-1.3-1.1-2.4-2.4-2.4z",
                        opacity: ".4"
                    }), r.createElement("path", {
                        className: "SRLThumbnailsButton",
                        d: "M39.4 13h-4.8c-1.3 0-2.4 1.1-2.4 2.4v4.8c0 1.3 1.1 2.4 2.4 2.4h4.8c1.3 0 2.4-1.1 2.4-2.4v-4.8c0-1.3-1.1-2.4-2.4-2.4zm-24 0h-4.8c-1.3 0-2.4 1.1-2.4 2.4v4.8c0 1.3 1.1 2.4 2.4 2.4h4.8c1.3 0 2.4-1.1 2.4-2.4v-4.8c0-1.3-1.1-2.4-2.4-2.4zm12 0h-4.8c-1.3 0-2.4 1.1-2.4 2.4v4.8c0 1.3 1.1 2.4 2.4 2.4h4.8c1.3 0 2.4-1.1 2.4-2.4v-4.8c0-1.3-1.1-2.4-2.4-2.4z"
                    }))))), e.showDownloadButton && r.createElement(np, {
                        buttonsBackgroundColor: e.backgroundColor,
                        buttonsIconColor: e.iconColor,
                        buttonsSize: e.size,
                        buttonsIconPadding: e.iconPadding,
                        title: "Download image",
                        className: "SRLDownloadButton",
                        onClick: s
                    }, r.createElement("div", {
                        className: "SRLDownloadButton"
                    }, r.createElement("svg", {
                        className: "SRLDownloadButton",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "11 11 30 30"
                    }, r.createElement("path", {
                        className: "SRLDownloadButton",
                        d: "M35.7 34.1c0 .6-.5 1-1.1 1-.6 0-1.1-.5-1.1-1s.5-1 1.1-1c.6 0 1.1.5 1.1 1zm-4.6-1c-.6 0-1.1.5-1.1 1s.5 1 1.1 1c.6 0 1.1-.5 1.1-1s-.5-1-1.1-1zm7.8-2.5V36c0 1.3-1.1 2.3-2.4 2.3h-23c-1.3 0-2.4-1-2.4-2.3v-5.4c0-1.3 1.1-2.3 2.4-2.3h5.4l-3.1-2.9c-1.4-1.3-.4-3.5 1.5-3.5h2.9v-8.1c0-1.1 1-2.1 2.2-2.1h5.2c1.2 0 2.2.9 2.2 2.1v8.1h2.9c1.9 0 2.9 2.2 1.5 3.5l-3.1 2.9h5.4c1.3 0 2.4 1 2.4 2.3zm-14.2.9c.2.2.4.2.6 0l7.6-7.3c.3-.3.1-.7-.3-.7H28v-9.7c0-.2-.2-.4-.4-.4h-5.2c-.2 0-.4.2-.4.4v9.7h-4.6c-.4 0-.6.4-.3.7l7.6 7.3zm12.5-.9c0-.3-.3-.6-.7-.6h-7.1l-2.8 2.7c-.8.8-2.2.8-3.1 0L20.6 30h-7.1c-.4 0-.7.3-.7.6V36c0 .3.3.6.7.6h23c.4 0 .7-.3.7-.6v-5.4z"
                    })))), h ? r.createElement(Zf, {
                        buttonsBackgroundColor: e.backgroundColor,
                        buttonsIconColor: e.iconColor,
                        buttonsSize: e.size,
                        buttonsIconPadding: e.iconPadding,
                        title: "Zoom out",
                        className: "SRLZoomOutButton",
                        onClick: function() {
                            return l(!1)
                        }
                    }, r.createElement("div", {
                        className: "SRLZoomOutButton"
                    }, r.createElement("svg", {
                        className: "SRLZoomOutButton",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "11 11 30 30"
                    }, r.createElement("path", {
                        className: "SRLZoomOutButton",
                        d: "M27.9 21.6v1.3c0 .4-.3.7-.7.7h-10c-.4 0-.7-.3-.7-.7v-1.3c0-.4.3-.7.7-.7h10c.4 0 .7.3.7.7zm10.7 15.8l-1.2 1.2c-.3.3-.7.3-.9 0L29.9 32c-.1-.1-.2-.3-.2-.5v-.7c-2 1.7-4.6 2.8-7.4 2.8C16 33.6 11 28.5 11 22.3s5-11.4 11.3-11.4S33.6 16 33.6 22.3c0 2.8-1 5.4-2.8 7.4h.7c.2 0 .3.1.5.2l6.6 6.6c.3.2.3.6 0 .9zM31 22.3c0-4.8-3.9-8.7-8.7-8.7s-8.7 3.9-8.7 8.7 3.9 8.7 8.7 8.7 8.7-3.9 8.7-8.7z"
                    })))) : "", e.showFullscreenButton && r.createElement(Kf, {
                        buttonsBackgroundColor: e.backgroundColor,
                        buttonsIconColor: e.iconColor,
                        buttonsSize: e.size,
                        buttonsIconPadding: e.iconPadding,
                        title: "Enter fullscreen",
                        className: "SRLExpandButton",
                        onClick: u
                    }, r.createElement("div", {
                        className: "SRLExpandButton"
                    }, r.createElement("svg", {
                        className: "SRLExpandButton",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "11 11 30 30"
                    }, r.createElement("path", {
                        className: "SRLExpandButton",
                        d: "M11.22 20.66v-7.91a1.52 1.52 0 011.53-1.53h7.91a.76.76 0 01.76.76v1.53a.77.77 0 01-.76.77h-6.38v6.38a.77.77 0 01-.77.76H12a.76.76 0 01-.78-.76zM29.58 12v1.53a.78.78 0 00.77.77h6.38v6.38a.76.76 0 00.76.76H39a.77.77 0 00.77-.76v-7.93a1.52 1.52 0 00-1.53-1.53h-7.89a.77.77 0 00-.77.78zM39 29.58h-1.51a.77.77 0 00-.76.77v6.38h-6.38a.77.77 0 00-.77.76V39a.78.78 0 00.77.77h7.91a1.52 1.52 0 001.53-1.53v-7.89a.78.78 0 00-.79-.77zM21.42 39v-1.51a.76.76 0 00-.76-.76h-6.38v-6.38a.78.78 0 00-.77-.77H12a.77.77 0 00-.76.77v7.91a1.52 1.52 0 001.53 1.53h7.91a.77.77 0 00.74-.79z"
                    })))), e.showCloseButton && r.createElement(Gf, {
                        buttonsBackgroundColor: e.backgroundColor,
                        buttonsIconColor: e.iconColor,
                        buttonsSize: e.size,
                        buttonsIconPadding: e.iconPadding,
                        title: "Close",
                        className: "SRLCloseButton",
                        onClick: function() {
                            return a()
                        }
                    }, r.createElement("div", {
                        className: "SRLCloseButton"
                    }, r.createElement("svg", {
                        className: "SRLCloseButton",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "11 11 30 30"
                    }, r.createElement("path", {
                        className: "SRLCloseButton",
                        d: "M27.92 25l8.84-8.84 1.82-1.82c.27-.27.27-.71 0-.97l-1.95-1.95a.682.682 0 0 0-.97 0L25 22.08 14.34 11.42a.682.682 0 0 0-.97 0l-1.95 1.95c-.27.27-.27.71 0 .97L22.08 25 11.42 35.66c-.27.27-.27.71 0 .97l1.95 1.95c.27.27.71.27.97 0L25 27.92l8.84 8.84 1.82 1.82c.27.27.71.27.97 0l1.95-1.95c.27-.27.27-.71 0-.97L27.92 25z"
                    }))))), e.showNextButton && r.createElement(tp, {
                        buttonsBackgroundColor: e.backgroundColor,
                        buttonsIconColor: e.iconColor,
                        buttonsSize: e.size,
                        buttonsIconPadding: e.iconPadding,
                        thumbnailsPosition: w,
                        thumbnailsDivSizes: S,
                        thumbnailsSize: x,
                        hideThumbnails: d,
                        title: "Next",
                        className: "SRLNextButton",
                        onClick: function() {
                            return c(i)
                        }
                    }, r.createElement("div", {
                        className: "SRLNextButton"
                    }, r.createElement("svg", {
                        className: "SRLNextButton",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "11 11 30 30"
                    }, r.createElement("path", {
                        className: "SRLPrevButton",
                        d: "M24.53 11.36l-.44.44c-.29.29-.29.76 0 1.05l11.09 11.09H11.83c-.41 0-.75.33-.75.75v.62c0 .41.33.75.75.75h23.35L24.09 37.14c-.29.29-.29.76 0 1.05l.44.44c.29.29.76.29 1.05 0l13.11-13.11c.29-.29.29-.76 0-1.05l-13.1-13.11a.754.754 0 0 0-1.06 0z"
                    })))), e.showPrevButton && r.createElement(ep, {
                        buttonsBackgroundColor: e.backgroundColor,
                        buttonsIconColor: e.iconColor,
                        buttonsSize: e.size,
                        buttonsIconPadding: e.iconPadding,
                        title: "Previous",
                        className: "SRLPrevButton",
                        thumbnailsPosition: w,
                        thumbnailsDivSizes: S,
                        thumbnailsSize: x,
                        hideThumbnails: d,
                        onClick: function() {
                            return f(i)
                        }
                    }, r.createElement("div", {
                        className: "SRLPrevButton"
                    }, r.createElement("svg", {
                        className: "SRLPrevButton",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "11 11 30 30"
                    }, r.createElement("path", {
                        className: "SRLPrevButton",
                        d: "M25.47 38.64l.44-.44c.29-.29.29-.76 0-1.05L14.82 26.06h23.35c.41 0 .75-.33.75-.75v-.62c0-.41-.33-.75-.75-.75H14.82l11.09-11.09c.29-.29.29-.76 0-1.05l-.44-.44a.742.742 0 0 0-1.05 0L11.31 24.47c-.29.29-.29.76 0 1.05l13.11 13.11c.29.3.76.3 1.05.01z"
                    })))))
                };
            rp.propTypes = {
                autoplay: tn.bool,
                buttons: tn.shape({
                    backgroundColor: tn.string,
                    iconColor: tn.string,
                    iconPadding: tn.string,
                    showAutoplayButton: tn.bool,
                    showCloseButton: tn.bool,
                    showDownloadButton: tn.bool,
                    showFullscreenButton: tn.bool,
                    showNextButton: tn.bool,
                    showPrevButton: tn.bool,
                    showThumbnailsButton: tn.bool,
                    size: tn.string
                }),
                hideThumbnails: tn.bool,
                buttonsOffsetFromProgressBar: tn.string,
                currentElementID: tn.string,
                handleCloseLightbox: tn.func,
                handleFullScreen: tn.func,
                handleImageDownload: tn.func,
                handleNextElement: tn.func,
                handlePanzoom: tn.func,
                handlePrevElement: tn.func,
                handleThumbnails: tn.func,
                panzoomEnabled: tn.bool,
                setAutoplay: tn.func,
                settings: tn.shape({
                    autoplaySpeed: tn.number
                }),
                showProgressBar: tn.bool,
                showThumbnails: tn.bool,
                thumbnailsPosition: tn.string,
                SRLThumbnailsRef: tn.object,
                thumbnailsSize: tn.array
            };
            var op = xe.div(Uf || (Uf = Sn(["\n  width: 100%;\n  height: ", ";\n  background-color: ", ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n"])), (function(n) {
                    return n.barHeight
                }), (function(n) {
                    return n.backgroundColor
                })),
                ip = xe.div($f || ($f = Sn(["\n  height: ", ";\n  width: 100%;\n  background-color: ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: scaleX(0);\n  transform-origin: 0;\n"])), (function(n) {
                    return n.barHeight
                }), (function(n) {
                    return n.fillColor
                })),
                ap = function(n) {
                    var t = n.autoplay,
                        e = n.autoplaySpeed,
                        o = n.progressBar,
                        i = n.currentElementID,
                        a = on((0, r.useState)(!1), 2),
                        u = a[0],
                        s = a[1];
                    return (0, r.useEffect)((function() {
                        s(!1)
                    }), [i]), Zc((function() {
                        s(!0)
                    }), t ? e / 100 : null, i), r.createElement(op, {
                        barHeight: o.height,
                        backgroundColor: o.backgroundColor,
                        className: "SRLProgressBar"
                    }, r.createElement(ip, {
                        barHeight: o.height,
                        fillColor: o.fillColor,
                        style: {
                            transform: "scaleX(".concat(u ? 1 : 0, ")"),
                            transitionDuration: "".concat(u ? e + "ms" : "0ms")
                        }
                    }))
                };

            function up(n) {
                for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
                n && n.addEventListener && n.addEventListener.apply(n, t)
            }

            function sp(n) {
                for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
                n && n.removeEventListener && n.removeEventListener.apply(n, t)
            }
            ap.propTypes = {
                autoplay: tn.bool,
                autoplaySpeed: tn.number,
                currentElementID: tn.string,
                progressBar: tn.shape({
                    backgroundColor: tn.string,
                    fillColor: tn.string,
                    height: tn.string
                })
            };
            var cp = ["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"],
                lp = !1;
            if ("undefined" != typeof window) {
                var fp = {
                    get passive() {
                        lp = !0
                    }
                };
                window.addEventListener("testPassive", null, fp), window.removeEventListener("testPassive", null, fp)
            }
            var pp = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1),
                dp = [],
                hp = !1,
                mp = -1,
                vp = void 0,
                gp = void 0,
                yp = function(n) {
                    return dp.some((function(t) {
                        return !(!t.options.allowTouchMove || !t.options.allowTouchMove(n))
                    }))
                },
                bp = function(n) {
                    var t = n || window.event;
                    return !!yp(t.target) || t.touches.length > 1 || (t.preventDefault && t.preventDefault(), !1)
                },
                wp = function(n) {
                    var t = n.options,
                        e = n.callbacks,
                        o = n.selectedElement,
                        i = n.elements,
                        a = n.dispatch,
                        u = n.compensateForScrollbar,
                        s = (0, r.useContext)(ln),
                        c = (0, r.useRef)(),
                        l = (0, r.useRef)(),
                        f = (0, r.useRef)(),
                        p = (0, r.useRef)(),
                        d = t.buttons,
                        h = t.settings,
                        m = t.progressBar,
                        v = t.thumbnails,
                        g = e.onCountSlides,
                        y = e.onSlideChange,
                        b = e.onLightboxClosed,
                        w = e.onLightboxOpened,
                        x = (0, r.useCallback)((function(n) {
                            if ("function" == typeof y) return s.callbacks.onSlideChange(n);
                            console.error('Simple React Lightbox error: you are not passing a function in your "onSlideChange" callback! You are passing a '.concat(Ec(y), "."))
                        }), [s.callbacks, y]),
                        S = (0, r.useCallback)((function(n) {
                            "function" == typeof w ? s.callbacks.onLightboxOpened(n) : console.error('Simple React Lightbox error: you are not passing a function in your "onLightboxOpened" callback! You are passing a '.concat(Ec(w), "."))
                        }), [s.callbacks, w]),
                        E = (0, r.useCallback)((function(n) {
                            "function" == typeof b ? s.callbacks.onLightboxClosed(n) : console.error('Simple React Lightbox error: you are not passing a function in your "onLightboxClosed" callback! You are passing a '.concat(Ec(b), "."))
                        }), [s.callbacks, b]),
                        _ = (0, r.useCallback)((function(n) {
                            "function" == typeof g ? s.callbacks.onCountSlides(n) : console.error('Simple React Lightbox error: you are not passing a function in your "onCountSlides" callback! You are passing a '.concat(Ec(g), "."))
                        }), [s.callbacks, g]),
                        C = on((0, r.useState)(!1), 2),
                        T = C[0],
                        P = C[1],
                        A = on((0, r.useState)(!1), 2),
                        L = A[0],
                        O = A[1],
                        k = on((0, r.useState)(), 2),
                        R = k[0],
                        N = k[1],
                        z = on((0, r.useState)(!1), 2),
                        I = z[0],
                        D = z[1],
                        M = function(n, t, e) {
                            void 0 === n && (n = 6e4), void 0 === t && (t = !1), void 0 === e && (e = cp);
                            var o = (0, r.useState)(t),
                                i = o[0],
                                a = o[1];
                            return (0, r.useEffect)((function() {
                                for (var t, r = !0, o = i, u = function(n) {
                                        r && (o = n, a(n))
                                    }, s = function(n, t, e, r) {
                                        var o, i = !1,
                                            a = 0;

                                        function u() {
                                            o && clearTimeout(o)
                                        }

                                        function s() {
                                            for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l];
                                            var f = this,
                                                p = Date.now() - a;

                                            function d() {
                                                a = Date.now(), e.apply(f, c)
                                            }

                                            function h() {
                                                o = void 0
                                            }
                                            i || (r && !o && d(), u(), void 0 === r && p > n ? d() : !0 !== t && (o = setTimeout(r ? h : d, void 0 === r ? n - p : n)))
                                        }
                                        return "boolean" != typeof t && (r = e, e = t, t = void 0), s.cancel = function() {
                                            u(), i = !0
                                        }, s
                                    }(50, (function() {
                                        o && u(!1), clearTimeout(t), t = setTimeout((function() {
                                            return u(!0)
                                        }), n)
                                    })), c = function() {
                                        document.hidden || s()
                                    }, l = 0; l < e.length; l++) up(window, e[l], s);
                                return up(document, "visibilitychange", c), t = setTimeout((function() {
                                        return u(!0)
                                    }), n),
                                    function() {
                                        r = !1;
                                        for (var n = 0; n < e.length; n++) sp(window, e[n], s);
                                        sp(document, "visibilitychange", c)
                                    }
                            }), [n, e]), i
                        }(h.hideControlsAfter < 1e3 ? 9999999 : h.hideControlsAfter),
                        j = (0, r.useCallback)((function(n) {
                            return gn.exports.findIndex(i, (function(t) {
                                return t.id === n
                            }))
                        }), [i]),
                        B = (0, r.useCallback)((function(n, t, e) {
                            N(e ? "next" === e ? "next" : "previous" === e ? "previous" : void 0 : n > t ? "next" : n < t ? "previous" : void 0)
                        }), []),
                        V = (0, r.useCallback)((function() {
                            D(!I)
                        }), [I]),
                        F = (0, r.useCallback)((function(n) {
                            h.disablePanzoom || O(n)
                        }), [h.disablePanzoom]),
                        W = (0, r.useCallback)((function(n, t, e, r) {
                            F(!1), B(n, t, r), a({
                                type: "HANDLE_ELEMENT",
                                element: e
                            })
                        }), [B, F, a]),
                        Y = (0, r.useCallback)((function(n, t) {
                            var e = j(n),
                                r = i[e];
                            W(n, t, r), x({
                                action: "selected",
                                slides: {
                                    previous: i[e - 1],
                                    current: r,
                                    next: i[e + 1]
                                },
                                index: e
                            })
                        }), [i, j, x, W]),
                        H = (0, r.useCallback)((function(n) {
                            var t = j(n),
                                e = i[t - 1] || i[i.length - 1];
                            W(n, null, e, "previous");
                            var r = t - 1 == -1 ? i.length - 1 : t - 1;
                            x({
                                action: "left",
                                slides: {
                                    previous: i[r - 1],
                                    current: e,
                                    next: i[r + 1]
                                },
                                index: r
                            })
                        }), [i, j, x, W]),
                        U = (0, r.useCallback)((function(n) {
                            var t = j(n),
                                e = i[t + 1] || i[0];
                            W(n, null, e, "next");
                            var r = t + 1 === i.length ? 0 : t + 1;
                            x({
                                action: "right",
                                slides: {
                                    previous: i[r - 1],
                                    current: e,
                                    next: i[r + 1]
                                },
                                index: r
                            })
                        }), [i, j, x, W]),
                        $ = (0, r.useCallback)((function() {
                            a({
                                type: "CLOSE_LIGHTBOX"
                            }), E({
                                opened: !1,
                                currentSlide: s.selectedElement
                            })
                        }), [a, E, s.selectedElement]);
                    Zc((function() {
                        return U(o.id)
                    }), T ? h.autoplaySpeed : null, o.id);
                    var X = Fc((function(n) {
                        "ArrowRight" !== n && "ArrowUp" !== n || U(o.id), "ArrowLeft" !== n && "ArrowDown" !== n || H(o.id), "Escape" === n && $()
                    }), 300);
                    (0, r.useEffect)((function() {
                        return S({
                                opened: !0,
                                currentSlide: s.selectedElement
                            }), _({
                                totalSlide: s.elements.length
                            }), "undefined" != typeof window && (document.body.classList.add("SRLOpened"), document.body.style.marginRight = u + "px", function(n, t) {
                                if (n) {
                                    if (!dp.some((function(t) {
                                            return t.targetElement === n
                                        }))) {
                                        var e = {
                                            targetElement: n,
                                            options: t || {}
                                        };
                                        dp = [].concat(function(n) {
                                            if (Array.isArray(n)) {
                                                for (var t = 0, e = Array(n.length); t < n.length; t++) e[t] = n[t];
                                                return e
                                            }
                                            return Array.from(n)
                                        }(dp), [e]), pp ? (n.ontouchstart = function(n) {
                                            1 === n.targetTouches.length && (mp = n.targetTouches[0].clientY)
                                        }, n.ontouchmove = function(t) {
                                            1 === t.targetTouches.length && function(n, t) {
                                                var e = n.targetTouches[0].clientY - mp;
                                                !yp(n.target) && (t && 0 === t.scrollTop && e > 0 || function(n) {
                                                    return !!n && n.scrollHeight - n.scrollTop <= n.clientHeight
                                                }(t) && e < 0 ? bp(n) : n.stopPropagation())
                                            }(t, n)
                                        }, hp || (document.addEventListener("touchmove", bp, lp ? {
                                            passive: !1
                                        } : void 0), hp = !0)) : function(n) {
                                            if (void 0 === gp) {
                                                var t = !!n && !0 === n.reserveScrollBarGap,
                                                    e = window.innerWidth - document.documentElement.clientWidth;
                                                t && e > 0 && (gp = document.body.style.paddingRight, document.body.style.paddingRight = e + "px")
                                            }
                                            void 0 === vp && (vp = document.body.style.overflow, document.body.style.overflow = "hidden")
                                        }(t)
                                    }
                                } else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")
                            }(document.getElementsByClassName(".SRLOpened"), {
                                allowTouchMove: function(n) {
                                    return n.className.includes("SRLThumbnailsContainer") || n.className.includes("SRLThumb")
                                }
                            })),
                            function() {
                                document.body.classList.remove("SRLOpened"), document.body.style.marginRight = "0", pp ? (dp.forEach((function(n) {
                                    n.targetElement.ontouchstart = null, n.targetElement.ontouchmove = null
                                })), hp && (document.removeEventListener("touchmove", bp, lp ? {
                                    passive: !1
                                } : void 0), hp = !1), mp = -1) : (void 0 !== gp && (document.body.style.paddingRight = gp, gp = void 0), void 0 !== vp && (document.body.style.overflow = vp, vp = void 0)), dp = []
                            }
                    }), []), (0, r.useEffect)((function() {
                        return 0 === h.hideControlsAfter && h.hideControlsAfter || (M ? null !== f.current && void 0 !== f.current && f.current.classList.add("SRLIdle") : null !== f.current && void 0 !== f.current && f.current.classList.contains("SRLIdle") && f.current.classList.remove("SRLIdle")), void 0 === o.id && a({
                                type: "HANDLE_ELEMENT",
                                element: {
                                    source: i[0].source,
                                    caption: i[0].caption,
                                    id: i[0].id,
                                    width: i[0].width,
                                    height: i[0].height,
                                    type: i[0].type,
                                    showControls: i[0].showControls,
                                    videoAutoplay: i[0].videoAutoplay,
                                    muted: i[0].muted
                                }
                            }), h.disableKeyboardControls || (p.current = Kc(document, "keydown", (function(n) {
                                return X(n.key)
                            }), !1)),
                            function() {
                                h.disableKeyboardControls || p.current()
                            }
                    }), [o.id, i, h.disablePanzoom, h.disableKeyboardControls, L, h.hideControlsAfter, M, X, R, s, a, o]);
                    var q = {
                            autoplay: T,
                            buttons: d,
                            currentElementID: o.id,
                            direction: R,
                            handleCloseLightbox: $,
                            handleCurrentElement: Y,
                            handleFullScreen: function() {
                                var n = "";
                                if ("undefined" != typeof window && (n = document.querySelector("#SRLLightbox")), document.fullscreenElement) document.exitFullscreen();
                                else if (P(!1), null !== n) try {
                                    -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") ? n.webkitRequestFullScreen() : n.requestFullscreen()
                                } catch (n) {
                                    ! function(n) {
                                        console.error(n), console.warn("Sorry, your browser doesn't support this functionality!")
                                    }(n.message = "SRL - ERROR WHEN USING FULLSCREEN API")
                                }
                            },
                            handleImageDownload: function() {
                                var n;
                                (n = o.source, fetch(n).then((function(n) {
                                    return n.blob()
                                })).then((function(n) {
                                    return new Promise((function(t, e) {
                                        var r = new FileReader;
                                        r.onloadend = function() {
                                            return t(r.result)
                                        }, r.onerror = e, r.readAsDataURL(n)
                                    }))
                                }))).then((function(n) {
                                    var t = document.createElement("a");
                                    t.href = n, t.download = "".concat(s.options.settings.downloadedFileName, "-").concat(o.id), t.click()
                                }))
                            },
                            handleNextElement: U,
                            handlePanzoom: F,
                            handlePrevElement: H,
                            handleThumbnails: V,
                            hideThumbnails: I,
                            panzoomEnabled: L,
                            setAutoplay: P,
                            settings: h,
                            SRLThumbnailsRef: c,
                            SRLCaptionRef: l
                        },
                        G = {
                            buttonsBackgroundColor: d.backgroundColor,
                            buttonsIconColor: d.iconColor,
                            buttonsSize: d.size,
                            buttonsIconPadding: d.iconPadding,
                            buttonsOffsetFromProgressBar: m.height,
                            showProgressBar: m.showProgressBar,
                            translations: s.options.translations,
                            icons: s.options.icons
                        };
                    return r.createElement("div", {
                        ref: f,
                        className: "SRLStage"
                    }, m.showProgressBar && T && r.createElement(ap, {
                        autoplay: T,
                        autoplaySpeed: h.autoplaySpeed,
                        progressBar: m,
                        currentElementID: o.id
                    }), r.createElement(rp, xn({}, G, q, {
                        thumbnailsPosition: v.thumbnailsPosition,
                        thumbnailsSize: v.thumbnailsSize,
                        thumbnailsContainerPadding: v.thumbnailsContainerPadding,
                        showThumbnails: v.showThumbnails,
                        SRLThumbnailsRef: c
                    })), r.createElement(Hf, xn({}, o, q, {
                        elements: i,
                        options: t
                    })))
                };

            function xp() {
                var n = (0, r.useContext)(ln),
                    t = n.isOpened,
                    e = n.options.settings.usingPreact,
                    o = on((0, r.useState)(0), 2),
                    i = o[0],
                    a = o[1],
                    u = (0, r.useRef)();
                return (0, r.useEffect)((function() {
                    function n() {
                        "undefined" != typeof window && (u.current = .01 * window.innerHeight, document.documentElement.style.setProperty("--vh", "".concat(u.current, "px")))
                    }
                    return n(), window.addEventListener("resize", n),
                        function() {
                            return window.removeEventListener("resize", n)
                        }
                }), []), (0, r.useEffect)((function() {
                    "undefined" != typeof window && document.body.scrollHeight > window.innerHeight && a(window.innerWidth - document.documentElement.clientWidth)
                })), e ? r.createElement(Sc, {
                    selector: "SRLLightbox",
                    isOpened: t
                }, r.createElement(wp, xn({}, n, {
                    compensateForScrollbar: i
                }))) : r.createElement(bc, null, t && r.createElement(Sc, {
                    selector: "SRLLightbox",
                    isOpened: t
                }, r.createElement(wp, xn({}, n, {
                    compensateForScrollbar: i
                }))))
            }
            wp.propTypes = {
                callbacks: tn.object,
                compensateForScrollbar: tn.number,
                elements: tn.array,
                isOpened: tn.bool,
                dispatch: tn.func,
                selectedElement: tn.object,
                options: tn.shape({
                    thumbnails: tn.shape({
                        thumbnailsContainerPadding: tn.string,
                        thumbnailsPosition: tn.string,
                        thumbnailsSize: tn.array,
                        showThumbnails: tn.bool
                    }),
                    settings: tn.shape({
                        overlayColor: tn.string,
                        autoplaySpeed: tn.number,
                        disableKeyboardControls: tn.bool,
                        disablePanzoom: tn.bool,
                        hideControlsAfter: tn.oneOfType([tn.number, tn.bool])
                    }),
                    buttons: tn.shape({
                        backgroundColor: tn.string,
                        iconColor: tn.string,
                        iconPadding: tn.string,
                        size: tn.string
                    }),
                    progressBar: tn.shape({
                        showProgressBar: tn.bool,
                        background: tn.string,
                        height: tn.string
                    })
                })
            }, xp.propTypes = {
                context: tn.object
            };
            var Sp = function(n) {
                var t = n.children;
                return r.createElement(fn, null, t, r.createElement(xp, null))
            };
            Sp.propTypes = {
                children: tn.oneOfType([tn.arrayOf(tn.node), tn.node]).isRequired
            }
        }
    }
]);
//# sourceMappingURL=ea74e2ce-40714406fa35eb3c30c8.js.map