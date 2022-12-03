(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [998], {
        3161: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return l
                }
            });
            var r = n(2480),
                i = n(2164),
                o = n(9547),
                u = function(e) {
                    void 0 === e && (e = {});
                    var t = (0, i.B7)(),
                        n = e.defaultIndex,
                        u = void 0 === n ? 0 : n,
                        l = t.theme && t.theme.breakpoints || o.R1;
                    if ("number" !== typeof u) throw new TypeError("Default breakpoint index should be a number. Got: " + u + ", " + typeof u);
                    if (u < 0 || u > l.length - 1) throw new RangeError("Default breakpoint index out of range. Theme has " + l.length + " breakpoints, got index " + u);
                    var a = (0, r.useState)(u),
                        s = a[0],
                        c = a[1];
                    return (0, r.useEffect)((function() {
                        var e = function() {
                            var e = l.filter((function(e) {
                                return window.matchMedia("screen and (min-width: " + e + ")").matches
                            })).length;
                            s !== e && c(e)
                        };
                        return e(), window.addEventListener("resize", e),
                            function() {
                                return window.removeEventListener("resize", e)
                            }
                    }), [l, s]), s
                };

            function l(e, t) {
                void 0 === t && (t = {});
                var n = (0, i.B7)().theme,
                    r = "function" === typeof e ? e(n) : e,
                    o = u(t);
                return r[o >= r.length ? r.length - 1 : o]
            }
        },
        358: function(e) {
            "use strict";
            e.exports = function(e) {
                if (e) throw e
            }
        },
        6732: function(e, t) {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function i() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var o = typeof n;
                            if ("string" === o || "number" === o) e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var u = i.apply(null, n);
                                    u && e.push(u)
                                }
                            } else if ("object" === o)
                                if (n.toString === Object.prototype.toString)
                                    for (var l in n) r.call(n, l) && n[l] && e.push(l);
                                else e.push(n.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function() {
                    return i
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        7113: function(e, t) {
            "use strict";
            t.parse = function(e) {
                var t, n = [],
                    r = String(e || ""),
                    i = r.indexOf(","),
                    o = 0,
                    u = !1;
                for (; !u;) - 1 === i && (i = r.length, u = !0), !(t = r.slice(o, i).trim()) && u || n.push(t), o = i + 1, i = r.indexOf(",", o);
                return n
            }, t.stringify = function(e, t) {
                var n = t || {},
                    r = !1 === n.padLeft ? "" : " ",
                    i = n.padRight ? " " : "";
                "" === e[e.length - 1] && (e = e.concat(""));
                return e.join(i + "," + r).trim()
            }
        },
        2124: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = Object.prototype.toString,
                r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = function(e) {
                    return "function" === typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
                },
                u = function(e) {
                    if (!e || "[object Object]" !== n.call(e)) return !1;
                    var r, i = t.call(e, "constructor"),
                        o = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !i && !o) return !1;
                    for (r in e);
                    return "undefined" === typeof r || t.call(e, r)
                },
                l = function(e, t) {
                    r && "__proto__" === t.name ? r(e, t.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: t.newValue,
                        writable: !0
                    }) : e[t.name] = t.newValue
                },
                a = function(e, n) {
                    if ("__proto__" === n) {
                        if (!t.call(e, n)) return;
                        if (i) return i(e, n).value
                    }
                    return e[n]
                };
            e.exports = function e() {
                var t, n, r, i, s, c, f = arguments[0],
                    p = 1,
                    d = arguments.length,
                    h = !1;
                for ("boolean" === typeof f && (h = f, f = arguments[1] || {}, p = 2), (null == f || "object" !== typeof f && "function" !== typeof f) && (f = {}); p < d; ++p)
                    if (null != (t = arguments[p]))
                        for (n in t) r = a(f, n), f !== (i = a(t, n)) && (h && i && (u(i) || (s = o(i))) ? (s ? (s = !1, c = r && o(r) ? r : []) : c = r && u(r) ? r : {}, l(f, {
                            name: n,
                            newValue: e(h, c, i)
                        })) : "undefined" !== typeof i && l(f, {
                            name: n,
                            newValue: i
                        }));
                return f
            }
        },
        8937: function(e) {
            var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                n = /\n/g,
                r = /^\s*/,
                i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                o = /^:\s*/,
                u = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                l = /^[;\s]*/,
                a = /^\s+|\s+$/g,
                s = "";

            function c(e) {
                return e ? e.replace(a, s) : s
            }
            e.exports = function(e, a) {
                if ("string" !== typeof e) throw new TypeError("First argument must be a string");
                if (!e) return [];
                a = a || {};
                var f = 1,
                    p = 1;

                function d(e) {
                    var t = e.match(n);
                    t && (f += t.length);
                    var r = e.lastIndexOf("\n");
                    p = ~r ? e.length - r : p + e.length
                }

                function h() {
                    var e = {
                        line: f,
                        column: p
                    };
                    return function(t) {
                        return t.position = new m(e), b(), t
                    }
                }

                function m(e) {
                    this.start = e, this.end = {
                        line: f,
                        column: p
                    }, this.source = a.source
                }
                m.prototype.content = e;
                var v = [];

                function g(t) {
                    var n = new Error(a.source + ":" + f + ":" + p + ": " + t);
                    if (n.reason = t, n.filename = a.source, n.line = f, n.column = p, n.source = e, !a.silent) throw n;
                    v.push(n)
                }

                function y(t) {
                    var n = t.exec(e);
                    if (n) {
                        var r = n[0];
                        return d(r), e = e.slice(r.length), n
                    }
                }

                function b() {
                    y(r)
                }

                function x(e) {
                    var t;
                    for (e = e || []; t = w();) !1 !== t && e.push(t);
                    return e
                }

                function w() {
                    var t = h();
                    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                        for (var n = 2; s != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
                        if (n += 2, s === e.charAt(n - 1)) return g("End of comment missing");
                        var r = e.slice(2, n - 2);
                        return p += 2, d(r), e = e.slice(n), p += 2, t({
                            type: "comment",
                            comment: r
                        })
                    }
                }

                function k() {
                    var e = h(),
                        n = y(i);
                    if (n) {
                        if (w(), !y(o)) return g("property missing ':'");
                        var r = y(u),
                            a = e({
                                type: "declaration",
                                property: c(n[0].replace(t, s)),
                                value: r ? c(r[0].replace(t, s)) : s
                            });
                        return y(l), a
                    }
                }
                return b(),
                    function() {
                        var e, t = [];
                        for (x(t); e = k();) !1 !== e && (t.push(e), x(t));
                        return t
                    }()
            }
        },
        3508: function(e) {
            "use strict";
            e.exports = e => {
                if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                const t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
        },
        4378: function(e, t, n) {
            "use strict";
            var r = n(4349);
            e.exports = function(e, t) {
                return function(e) {
                    return t;

                    function t(t) {
                        var n = t && o(t);
                        return n && i.call(e, n) ? e[n] : null
                    }
                }(function(e) {
                    var t = {};
                    if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
                    return r(e, "definition", n), t;

                    function n(e) {
                        var n = o(e.identifier);
                        i.call(t, n) || (t[n] = e)
                    }
                }(e))
            };
            var i = {}.hasOwnProperty;

            function o(e) {
                return e.toUpperCase()
            }
        },
        6777: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n) {
                "string" !== typeof t && (n = t, t = void 0);
                return function(e) {
                    var t = e || {},
                        n = function(e, t) {
                            var n = -1;
                            for (; ++n < t.length;) d(e, t[n]);
                            return e
                        }({
                            transforms: [],
                            canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                            enter: {
                                autolink: g(pe),
                                autolinkProtocol: j,
                                autolinkEmail: j,
                                atxHeading: g(ae),
                                blockQuote: g(re),
                                characterEscape: j,
                                characterReference: j,
                                codeFenced: g(ie),
                                codeFencedFenceInfo: y,
                                codeFencedFenceMeta: y,
                                codeIndented: g(ie, y),
                                codeText: g(oe, y),
                                codeTextData: j,
                                data: j,
                                codeFlowValue: j,
                                definition: g(ue),
                                definitionDestinationString: y,
                                definitionLabelString: y,
                                definitionTitleString: y,
                                emphasis: g(le),
                                hardBreakEscape: g(se),
                                hardBreakTrailing: g(se),
                                htmlFlow: g(ce, y),
                                htmlFlowData: j,
                                htmlText: g(ce, y),
                                htmlTextData: j,
                                image: g(fe),
                                label: y,
                                link: g(pe),
                                listItem: g(he),
                                listItemValue: E,
                                listOrdered: g(de, S),
                                listUnordered: g(de),
                                paragraph: g(me),
                                reference: Z,
                                referenceString: y,
                                resourceDestinationString: y,
                                resourceTitleString: y,
                                setextHeading: g(ae),
                                strong: g(ve),
                                thematicBreak: g(ye)
                            },
                            exit: {
                                atxHeading: x(),
                                atxHeadingSequence: D,
                                autolink: x(),
                                autolinkEmail: ne,
                                autolinkProtocol: te,
                                blockQuote: x(),
                                characterEscapeValue: z,
                                characterReferenceMarkerHexadecimal: J,
                                characterReferenceMarkerNumeric: J,
                                characterReferenceValue: ee,
                                codeFenced: x(T),
                                codeFencedFence: C,
                                codeFencedFenceInfo: O,
                                codeFencedFenceMeta: P,
                                codeFlowValue: z,
                                codeIndented: x(I),
                                codeText: x(W),
                                codeTextData: z,
                                data: z,
                                definition: x(),
                                definitionDestinationString: _,
                                definitionLabelString: A,
                                definitionTitleString: M,
                                emphasis: x(),
                                hardBreakEscape: x(H),
                                hardBreakTrailing: x(H),
                                htmlFlow: x(N),
                                htmlFlowData: z,
                                htmlText: x(U),
                                htmlTextData: z,
                                image: x(V),
                                label: K,
                                labelText: $,
                                lineEnding: B,
                                link: x(q),
                                listItem: x(),
                                listOrdered: x(),
                                listUnordered: x(),
                                paragraph: x(),
                                referenceString: G,
                                resourceDestinationString: X,
                                resourceTitleString: Q,
                                resource: Y,
                                setextHeading: x(R),
                                setextHeadingLineSequence: F,
                                setextHeadingText: L,
                                strong: x(),
                                thematicBreak: x()
                            }
                        }, t.mdastExtensions || []),
                        a = {};
                    return s;

                    function s(e) {
                        for (var t, r = {
                                type: "root",
                                children: []
                            }, u = [], l = [], a = -1, s = {
                                stack: [r],
                                tokenStack: u,
                                config: n,
                                enter: b,
                                exit: w,
                                buffer: y,
                                resume: k,
                                setData: h,
                                getData: m
                            }; ++a < e.length;) "listOrdered" !== e[a][1].type && "listUnordered" !== e[a][1].type || ("enter" === e[a][0] ? l.push(a) : a = c(e, l.pop(a), a));
                        for (a = -1; ++a < e.length;) t = n[e[a][0]], o.call(t, e[a][1].type) && t[e[a][1].type].call(i({
                            sliceSerialize: e[a][2].sliceSerialize
                        }, s), e[a][1]);
                        if (u.length) throw new Error("Cannot close document, a token (`" + u[u.length - 1].type + "`, " + p({
                            start: u[u.length - 1].start,
                            end: u[u.length - 1].end
                        }) + ") is still open");
                        for (r.position = {
                                start: v(e.length ? e[0][1].start : {
                                    line: 1,
                                    column: 1,
                                    offset: 0
                                }),
                                end: v(e.length ? e[e.length - 2][1].end : {
                                    line: 1,
                                    column: 1,
                                    offset: 0
                                })
                            }, a = -1; ++a < n.transforms.length;) r = n.transforms[a](r) || r;
                        return r
                    }

                    function c(e, t, n) {
                        for (var r, i, o, u, l, a, s, c = t - 1, f = -1, p = !1; ++c <= n;)
                            if ("listUnordered" === (l = e[c])[1].type || "listOrdered" === l[1].type || "blockQuote" === l[1].type ? ("enter" === l[0] ? f++ : f--, s = void 0) : "lineEndingBlank" === l[1].type ? "enter" === l[0] && (!r || s || f || a || (a = c), s = void 0) : "linePrefix" === l[1].type || "listItemValue" === l[1].type || "listItemMarker" === l[1].type || "listItemPrefix" === l[1].type || "listItemPrefixWhitespace" === l[1].type || (s = void 0), !f && "enter" === l[0] && "listItemPrefix" === l[1].type || -1 === f && "exit" === l[0] && ("listUnordered" === l[1].type || "listOrdered" === l[1].type)) {
                                if (r) {
                                    for (i = c, o = void 0; i--;)
                                        if ("lineEnding" === (u = e[i])[1].type || "lineEndingBlank" === u[1].type) {
                                            if ("exit" === u[0]) continue;
                                            o && (e[o][1].type = "lineEndingBlank", p = !0), u[1].type = "lineEnding", o = i
                                        } else if ("linePrefix" !== u[1].type && "blockQuotePrefix" !== u[1].type && "blockQuotePrefixWhitespace" !== u[1].type && "blockQuoteMarker" !== u[1].type && "listItemIndent" !== u[1].type) break;
                                    a && (!o || a < o) && (r._spread = !0), r.end = v(o ? e[o][1].start : l[1].end), e.splice(o || c, 0, ["exit", r, l[2]]), c++, n++
                                }
                                "listItemPrefix" === l[1].type && (r = {
                                    type: "listItem",
                                    _spread: !1,
                                    start: v(l[1].start)
                                }, e.splice(c, 0, ["enter", r, l[2]]), c++, n++, a = void 0, s = !0)
                            }
                        return e[t][1]._spread = p, n
                    }

                    function h(e, t) {
                        a[e] = t
                    }

                    function m(e) {
                        return a[e]
                    }

                    function v(e) {
                        return {
                            line: e.line,
                            column: e.column,
                            offset: e.offset
                        }
                    }

                    function g(e, t) {
                        return n;

                        function n(n) {
                            b.call(this, e(n), n), t && t.call(this, n)
                        }
                    }

                    function y() {
                        this.stack.push({
                            type: "fragment",
                            children: []
                        })
                    }

                    function b(e, t) {
                        return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push(t), e.position = {
                            start: v(t.start)
                        }, e
                    }

                    function x(e) {
                        return t;

                        function t(t) {
                            e && e.call(this, t), w.call(this, t)
                        }
                    }

                    function w(e) {
                        var t = this.stack.pop(),
                            n = this.tokenStack.pop();
                        if (!n) throw new Error("Cannot close `" + e.type + "` (" + p({
                            start: e.start,
                            end: e.end
                        }) + "): it\u2019s not open");
                        if (n.type !== e.type) throw new Error("Cannot close `" + e.type + "` (" + p({
                            start: e.start,
                            end: e.end
                        }) + "): a different token (`" + n.type + "`, " + p({
                            start: n.start,
                            end: n.end
                        }) + ") is open");
                        return t.position.end = v(e.end), t
                    }

                    function k() {
                        return r(this.stack.pop())
                    }

                    function S() {
                        h("expectingFirstListItemValue", !0)
                    }

                    function E(e) {
                        m("expectingFirstListItemValue") && (this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(e), 10), h("expectingFirstListItemValue"))
                    }

                    function O() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].lang = e
                    }

                    function P() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].meta = e
                    }

                    function C() {
                        m("flowCodeInside") || (this.buffer(), h("flowCodeInside", !0))
                    }

                    function T() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), h("flowCodeInside")
                    }

                    function I() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function A(e) {
                        var t = this.resume();
                        this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = u(this.sliceSerialize(e)).toLowerCase()
                    }

                    function M() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].title = e
                    }

                    function _() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].url = e
                    }

                    function D(e) {
                        this.stack[this.stack.length - 1].depth || (this.stack[this.stack.length - 1].depth = this.sliceSerialize(e).length)
                    }

                    function L() {
                        h("setextHeadingSlurpLineEnding", !0)
                    }

                    function F(e) {
                        this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                    }

                    function R() {
                        h("setextHeadingSlurpLineEnding")
                    }

                    function j(e) {
                        var t = this.stack[this.stack.length - 1].children,
                            n = t[t.length - 1];
                        n && "text" === n.type || ((n = ge()).position = {
                            start: v(e.start)
                        }, this.stack[this.stack.length - 1].children.push(n)), this.stack.push(n)
                    }

                    function z(e) {
                        var t = this.stack.pop();
                        t.value += this.sliceSerialize(e), t.position.end = v(e.end)
                    }

                    function B(e) {
                        var t = this.stack[this.stack.length - 1];
                        if (m("atHardBreak")) return t.children[t.children.length - 1].position.end = v(e.end), void h("atHardBreak");
                        !m("setextHeadingSlurpLineEnding") && n.canContainEols.indexOf(t.type) > -1 && (j.call(this, e), z.call(this, e))
                    }

                    function H() {
                        h("atHardBreak", !0)
                    }

                    function N() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function U() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function W() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function q() {
                        var e = this.stack[this.stack.length - 1];
                        m("inReference") ? (e.type += "Reference", e.referenceType = m("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), h("referenceType")
                    }

                    function V() {
                        var e = this.stack[this.stack.length - 1];
                        m("inReference") ? (e.type += "Reference", e.referenceType = m("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), h("referenceType")
                    }

                    function $(e) {
                        this.stack[this.stack.length - 2].identifier = u(this.sliceSerialize(e)).toLowerCase()
                    }

                    function K() {
                        var e = this.stack[this.stack.length - 1],
                            t = this.resume();
                        this.stack[this.stack.length - 1].label = t, h("inReference", !0), "link" === this.stack[this.stack.length - 1].type ? this.stack[this.stack.length - 1].children = e.children : this.stack[this.stack.length - 1].alt = t
                    }

                    function X() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].url = e
                    }

                    function Q() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].title = e
                    }

                    function Y() {
                        h("inReference")
                    }

                    function Z() {
                        h("referenceType", "collapsed")
                    }

                    function G(e) {
                        var t = this.resume();
                        this.stack[this.stack.length - 1].label = t, this.stack[this.stack.length - 1].identifier = u(this.sliceSerialize(e)).toLowerCase(), h("referenceType", "full")
                    }

                    function J(e) {
                        h("characterReferenceType", e.type)
                    }

                    function ee(e) {
                        var t, n, r = this.sliceSerialize(e),
                            i = m("characterReferenceType");
                        i ? (t = l(r, "characterReferenceMarkerNumeric" === i ? 10 : 16), h("characterReferenceType")) : t = f(r), (n = this.stack.pop()).value += t, n.position.end = v(e.end)
                    }

                    function te(e) {
                        z.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                    }

                    function ne(e) {
                        z.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                    }

                    function re() {
                        return {
                            type: "blockquote",
                            children: []
                        }
                    }

                    function ie() {
                        return {
                            type: "code",
                            lang: null,
                            meta: null,
                            value: ""
                        }
                    }

                    function oe() {
                        return {
                            type: "inlineCode",
                            value: ""
                        }
                    }

                    function ue() {
                        return {
                            type: "definition",
                            identifier: "",
                            label: null,
                            title: null,
                            url: ""
                        }
                    }

                    function le() {
                        return {
                            type: "emphasis",
                            children: []
                        }
                    }

                    function ae() {
                        return {
                            type: "heading",
                            depth: void 0,
                            children: []
                        }
                    }

                    function se() {
                        return {
                            type: "break"
                        }
                    }

                    function ce() {
                        return {
                            type: "html",
                            value: ""
                        }
                    }

                    function fe() {
                        return {
                            type: "image",
                            title: null,
                            url: "",
                            alt: null
                        }
                    }

                    function pe() {
                        return {
                            type: "link",
                            title: null,
                            url: "",
                            children: []
                        }
                    }

                    function de(e) {
                        return {
                            type: "list",
                            ordered: "listOrdered" === e.type,
                            start: null,
                            spread: e._spread,
                            children: []
                        }
                    }

                    function he(e) {
                        return {
                            type: "listItem",
                            spread: e._spread,
                            checked: null,
                            children: []
                        }
                    }

                    function me() {
                        return {
                            type: "paragraph",
                            children: []
                        }
                    }

                    function ve() {
                        return {
                            type: "strong",
                            children: []
                        }
                    }

                    function ge() {
                        return {
                            type: "text",
                            value: ""
                        }
                    }

                    function ye() {
                        return {
                            type: "thematicBreak"
                        }
                    }
                }(n)(c(a(n).document().write(s()(e, t, !0))))
            };
            var r = n(7586),
                i = n(2282),
                o = n(4149),
                u = n(4432),
                l = n(3356),
                a = n(5517),
                s = n(7660),
                c = n(2286),
                f = n(6141),
                p = n(6694);

            function d(e, t) {
                var n, r;
                for (n in t) r = o.call(e, n) ? e[n] : e[n] = {}, "canContainEols" === n || "transforms" === n ? e[n] = [].concat(r, t[n]) : Object.assign(r, t[n])
            }
        },
        580: function(e, t, n) {
            "use strict";
            e.exports = n(6777)
        },
        1658: function(e, t, n) {
            "use strict";
            e.exports = n(4495)
        },
        4085: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, i, o = t.children || [],
                    u = o.length,
                    l = [],
                    a = -1;
                for (; ++a < u;)(n = r(e, o[a], t)) && (a && "break" === o[a - 1].type && (n.value && (n.value = n.value.replace(/^\s+/, "")), (i = n.children && n.children[0]) && i.value && (i.value = i.value.replace(/^\s+/, ""))), l = l.concat(n));
                return l
            };
            var r = n(5758)
        },
        824: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n, u, l, a = e.footnoteById,
                    s = e.footnoteOrder,
                    c = s.length,
                    f = -1,
                    p = [];
                for (; ++f < c;)(t = a[s[f].toUpperCase()]) && (u = t.children.concat(), l = u[u.length - 1], n = {
                    type: "link",
                    url: "#fnref-" + t.identifier,
                    data: {
                        hProperties: {
                            className: ["footnote-backref"]
                        }
                    },
                    children: [{
                        type: "text",
                        value: "\u21a9"
                    }]
                }, l && "paragraph" === l.type || (l = {
                    type: "paragraph",
                    children: []
                }, u.push(l)), l.children.push(n), p.push({
                    type: "listItem",
                    data: {
                        hProperties: {
                            id: "fn-" + t.identifier
                        }
                    },
                    children: u,
                    position: t.position
                }));
                if (0 === p.length) return null;
                return e(null, "div", {
                    className: ["footnotes"]
                }, o([r(e), i(e, {
                    type: "list",
                    ordered: !0,
                    children: p
                })], !0))
            };
            var r = n(4323),
                i = n(1626),
                o = n(5508)
        },
        1784: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "blockquote", r(i(e, t), !0))
            };
            var r = n(5508),
                i = n(4085)
        },
        9473: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return [e(t, "br"), r("text", "\n")]
            };
            var r = n(470)
        },
        9290: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, i = t.value ? t.value + "\n" : "",
                    o = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
                    u = {};
                o && (u.className = ["language-" + o]);
                n = e(t, "code", u, [r("text", i)]), t.meta && (n.data = {
                    meta: t.meta
                });
                return e(t.position, "pre", [n])
            };
            var r = n(470)
        },
        8965: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "del", r(e, t))
            };
            var r = n(4085)
        },
        7060: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "em", r(e, t))
            };
            var r = n(4085)
        },
        1397: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = e.footnoteOrder,
                    i = String(t.identifier); - 1 === n.indexOf(i) && n.push(i);
                return e(t.position, "sup", {
                    id: "fnref-" + i
                }, [e(t, "a", {
                    href: "#fn-" + i,
                    className: ["footnote-ref"]
                }, [r("text", t.label || i)])])
            };
            var r = n(470)
        },
        1257: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = e.footnoteById,
                    i = e.footnoteOrder,
                    o = 1;
                for (; o in n;) o++;
                return o = String(o), i.push(o), n[o] = {
                    type: "footnoteDefinition",
                    identifier: o,
                    children: [{
                        type: "paragraph",
                        children: t.children
                    }],
                    position: t.position
                }, r(e, {
                    type: "footnoteReference",
                    identifier: o,
                    position: t.position
                })
            };
            var r = n(1397)
        },
        9835: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "h" + t.depth, r(e, t))
            };
            var r = n(4085)
        },
        1753: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e.dangerous ? e.augment(t, r("raw", t.value)) : null
            };
            var r = n(470)
        },
        7509: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, o = e.definition(t.identifier);
                if (!o) return i(e, t);
                n = {
                    src: r(o.url || ""),
                    alt: t.alt
                }, null !== o.title && void 0 !== o.title && (n.title = o.title);
                return e(t, "img", n)
            };
            var r = n(2911),
                i = n(6249)
        },
        3852: function(e, t, n) {
            "use strict";
            var r = n(2911);
            e.exports = function(e, t) {
                var n = {
                    src: r(t.url),
                    alt: t.alt
                };
                null !== t.title && void 0 !== t.title && (n.title = t.title);
                return e(t, "img", n)
            }
        },
        9071: function(e, t, n) {
            "use strict";

            function r() {
                return null
            }
            e.exports = {
                blockquote: n(1784),
                break: n(9473),
                code: n(9290),
                delete: n(8965),
                emphasis: n(7060),
                footnoteReference: n(1397),
                footnote: n(1257),
                heading: n(9835),
                html: n(1753),
                imageReference: n(7509),
                image: n(3852),
                inlineCode: n(1829),
                linkReference: n(1513),
                link: n(2976),
                listItem: n(7199),
                list: n(1626),
                paragraph: n(5719),
                root: n(486),
                strong: n(6120),
                table: n(9332),
                text: n(7213),
                thematicBreak: n(4323),
                toml: r,
                yaml: r,
                definition: r,
                footnoteDefinition: r
            }
        },
        1829: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.value.replace(/\r?\n|\r/g, " ");
                return e(t, "code", [r("text", n)])
            };
            var r = n(470)
        },
        1513: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, u = e.definition(t.identifier);
                if (!u) return i(e, t);
                n = {
                    href: r(u.url || "")
                }, null !== u.title && void 0 !== u.title && (n.title = u.title);
                return e(t, "a", n, o(e, t))
            };
            var r = n(2911),
                i = n(6249),
                o = n(4085)
        },
        2976: function(e, t, n) {
            "use strict";
            var r = n(2911),
                i = n(4085);
            e.exports = function(e, t) {
                var n = {
                    href: r(t.url)
                };
                null !== t.title && void 0 !== t.title && (n.title = t.title);
                return e(t, "a", n, i(e, t))
            }
        },
        7199: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n) {
                var u, l, a, s = i(e, t),
                    c = s[0],
                    f = n ? function(e) {
                        var t = e.spread,
                            n = e.children,
                            r = n.length,
                            i = -1;
                        for (; !t && ++i < r;) t = o(n[i]);
                        return t
                    }(n) : o(t),
                    p = {},
                    d = [];
                "boolean" === typeof t.checked && (c && "p" === c.tagName || (c = e(null, "p", []), s.unshift(c)), c.children.length > 0 && c.children.unshift(r("text", " ")), c.children.unshift(e(null, "input", {
                    type: "checkbox",
                    checked: t.checked,
                    disabled: !0
                })), p.className = ["task-list-item"]);
                u = s.length, l = -1;
                for (; ++l < u;) a = s[l], (f || 0 !== l || "p" !== a.tagName) && d.push(r("text", "\n")), "p" !== a.tagName || f ? d.push(a) : d = d.concat(a.children);
                u && (f || "p" !== a.tagName) && d.push(r("text", "\n"));
                return e(t, "li", p, d)
            };
            var r = n(470),
                i = n(4085);

            function o(e) {
                var t = e.spread;
                return void 0 === t || null === t ? e.children.length > 1 : t
            }
        },
        1626: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, o, u = {},
                    l = t.ordered ? "ol" : "ul",
                    a = -1;
                "number" === typeof t.start && 1 !== t.start && (u.start = t.start);
                n = i(e, t), o = n.length;
                for (; ++a < o;)
                    if (n[a].properties.className && -1 !== n[a].properties.className.indexOf("task-list-item")) {
                        u.className = ["contains-task-list"];
                        break
                    }
                return e(t, l, u, r(n, !0))
            };
            var r = n(5508),
                i = n(4085)
        },
        5719: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "p", r(e, t))
            };
            var r = n(4085)
        },
        486: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e.augment(t, r("root", i(o(e, t))))
            };
            var r = n(470),
                i = n(5508),
                o = n(4085)
        },
        6120: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "strong", r(e, t))
            };
            var r = n(4085)
        },
        9332: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, u, l, a, s, c = t.children,
                    f = c.length,
                    p = t.align || [],
                    d = p.length,
                    h = [];
                for (; f--;) {
                    for (u = c[f].children, a = 0 === f ? "th" : "td", n = d || u.length, l = []; n--;) s = u[n], l[n] = e(s, a, {
                        align: p[n]
                    }, s ? o(e, s) : []);
                    h[f] = e(c[f], "tr", i(l, !0))
                }
                return e(t, "table", i([e(h[0].position, "thead", i([h[0]], !0))].concat(h[1] ? e({
                    start: r.start(h[1]),
                    end: r.end(h[h.length - 1])
                }, "tbody", i(h.slice(1), !0)) : []), !0))
            };
            var r = n(4977),
                i = n(5508),
                o = n(4085)
        },
        7213: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return e.augment(t, r("text", String(t.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")))
            };
            var r = n(470)
        },
        4323: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return e(t, "hr")
            }
        },
        4495: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = function(e, t) {
                        var n = t || {};
                        void 0 === n.allowDangerousHTML || p || (p = !0, console.warn("mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead"));
                        var r = n.allowDangerousHtml || n.allowDangerousHTML,
                            a = {};
                        return d.dangerous = r, d.definition = l(e), d.footnoteById = a, d.footnoteOrder = [], d.augment = s, d.handlers = Object.assign({}, c, n.handlers), d.unknownHandler = n.unknownHandler, d.passThrough = n.passThrough, i(e, "footnoteDefinition", h), d;

                        function s(e, t) {
                            var n, r;
                            return e && e.data && ((n = e.data).hName && ("element" !== t.type && (t = {
                                type: "element",
                                tagName: "",
                                properties: {},
                                children: []
                            }), t.tagName = n.hName), "element" === t.type && n.hProperties && (t.properties = Object.assign({}, t.properties, n.hProperties)), t.children && n.hChildren && (t.children = n.hChildren)), r = e && e.position ? e : {
                                position: e
                            }, u(r) || (t.position = {
                                start: o.start(r),
                                end: o.end(r)
                            }), t
                        }

                        function d(e, t, n, r) {
                            return void 0 !== r && null !== r || "object" !== typeof n || !("length" in n) || (r = n, n = {}), s(e, {
                                type: "element",
                                tagName: t,
                                properties: n || {},
                                children: r || []
                            })
                        }

                        function h(e) {
                            var t = String(e.identifier).toUpperCase();
                            f.call(a, t) || (a[t] = e)
                        }
                    }(e, t),
                    d = a(n, e),
                    h = s(n);
                h && (d.children = d.children.concat(r("text", "\n"), h));
                return d
            };
            var r = n(470),
                i = n(4349),
                o = n(4977),
                u = n(2809),
                l = n(4378),
                a = n(5758),
                s = n(824),
                c = n(9071),
                f = {}.hasOwnProperty,
                p = !1
        },
        5758: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n) {
                var r, i = t && t.type;
                if (!i) throw new Error("Expected node, got `" + t + "`");
                r = o.call(e.handlers, i) ? e.handlers[i] : e.passThrough && e.passThrough.indexOf(i) > -1 ? l : e.unknownHandler;
                return ("function" === typeof r ? r : u)(e, t, n)
            };
            var r = n(470),
                i = n(4085),
                o = {}.hasOwnProperty;

            function u(e, t) {
                return function(e) {
                    var t = e.data || {};
                    if (o.call(t, "hName") || o.call(t, "hProperties") || o.call(t, "hChildren")) return !1;
                    return "value" in e
                }(t) ? e.augment(t, r("text", t.value)) : e(t, "div", i(e, t))
            }

            function l(e, t) {
                var n;
                return t.children ? ((n = Object.assign({}, t)).children = i(e, t), n) : t
            }
        },
        6249: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n, o, u, l = t.referenceType,
                    a = "]";
                "collapsed" === l ? a += "[]" : "full" === l && (a += "[" + (t.label || t.identifier) + "]");
                if ("imageReference" === t.type) return r("text", "![" + t.alt + a);
                n = i(e, t), (o = n[0]) && "text" === o.type ? o.value = "[" + o.value : n.unshift(r("text", "["));
                (u = n[n.length - 1]) && "text" === u.type ? u.value += a : n.push(r("text", a));
                return n
            };
            var r = n(470),
                i = n(4085)
        },
        5508: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = [],
                    i = -1,
                    o = e.length;
                t && n.push(r("text", "\n"));
                for (; ++i < o;) i && n.push(r("text", "\n")), n.push(e[i]);
                t && e.length > 0 && n.push(r("text", "\n"));
                return n
            };
            var r = n(470)
        },
        7586: function(e) {
            "use strict";

            function t(e) {
                return e && (e.value || e.alt || e.title || "children" in e && n(e.children) || "length" in e && n(e)) || ""
            }

            function n(e) {
                for (var n = [], r = -1; ++r < e.length;) n[r] = t(e[r]);
                return n.join("")
            }
            e.exports = t
        },
        2911: function(e) {
            "use strict";
            var t = {};

            function n(e, r, i) {
                var o, u, l, a, s, c = "";
                for ("string" !== typeof r && (i = r, r = n.defaultChars), "undefined" === typeof i && (i = !0), s = function(e) {
                        var n, r, i = t[e];
                        if (i) return i;
                        for (i = t[e] = [], n = 0; n < 128; n++) r = String.fromCharCode(n), /^[0-9a-z]$/i.test(r) ? i.push(r) : i.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
                        for (n = 0; n < e.length; n++) i[e.charCodeAt(n)] = e[n];
                        return i
                    }(r), o = 0, u = e.length; o < u; o++)
                    if (l = e.charCodeAt(o), i && 37 === l && o + 2 < u && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) c += e.slice(o, o + 3), o += 2;
                    else if (l < 128) c += s[l];
                else if (l >= 55296 && l <= 57343) {
                    if (l >= 55296 && l <= 56319 && o + 1 < u && (a = e.charCodeAt(o + 1)) >= 56320 && a <= 57343) {
                        c += encodeURIComponent(e[o] + e[o + 1]), o++;
                        continue
                    }
                    c += "%EF%BF%BD"
                } else c += encodeURIComponent(e[o]);
                return c
            }
            n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", e.exports = n
        },
        271: function(e, t, n) {
            "use strict";
            var r = n(9006)(/[A-Za-z]/);
            e.exports = r
        },
        6916: function(e, t, n) {
            "use strict";
            var r = n(9006)(/[\dA-Za-z]/);
            e.exports = r
        },
        921: function(e, t, n) {
            "use strict";
            var r = n(9006)(/[#-'*+\--9=?A-Z^-~]/);
            e.exports = r
        },
        2456: function(e) {
            "use strict";
            e.exports = function(e) {
                return e < 32 || 127 === e
            }
        },
        9687: function(e, t, n) {
            "use strict";
            var r = n(9006)(/\d/);
            e.exports = r
        },
        6604: function(e, t, n) {
            "use strict";
            var r = n(9006)(/[\dA-Fa-f]/);
            e.exports = r
        },
        8117: function(e, t, n) {
            "use strict";
            var r = n(9006)(/[!-/:-@[-`{-~]/);
            e.exports = r
        },
        5008: function(e) {
            "use strict";
            e.exports = function(e) {
                return e < 0 || 32 === e
            }
        },
        7386: function(e) {
            "use strict";
            e.exports = function(e) {
                return e < -2
            }
        },
        2741: function(e) {
            "use strict";
            e.exports = function(e) {
                return -2 === e || -1 === e || 32 === e
            }
        },
        6690: function(e, t, n) {
            "use strict";
            var r = n(6988),
                i = n(9006)(r);
            e.exports = i
        },
        2937: function(e, t, n) {
            "use strict";
            var r = n(9006)(/\s/);
            e.exports = r
        },
        2282: function(e) {
            "use strict";
            var t = Object.assign;
            e.exports = t
        },
        8280: function(e) {
            "use strict";
            var t = String.fromCharCode;
            e.exports = t
        },
        4149: function(e) {
            "use strict";
            var t = {}.hasOwnProperty;
            e.exports = t
        },
        7462: function(e) {
            "use strict";
            e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
        },
        5410: function(e) {
            "use strict";
            e.exports = ["pre", "script", "style", "textarea"]
        },
        7945: function(e) {
            "use strict";
            var t = [].splice;
            e.exports = t
        },
        6988: function(e) {
            "use strict";
            e.exports = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        },
        130: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(7535),
                i = n(8742),
                o = n(2738),
                u = n(4364),
                l = n(5587),
                a = n(8334),
                s = n(3801),
                c = n(4973),
                f = n(3835),
                p = n(5696),
                d = n(2280),
                h = n(4356),
                m = n(140),
                v = n(3617),
                g = n(6525),
                y = n(8230),
                b = n(3190),
                x = n(5717),
                w = n(8953),
                k = n(9943),
                S = n(3871),
                E = {
                    42: w,
                    43: w,
                    45: w,
                    48: w,
                    49: w,
                    50: w,
                    51: w,
                    52: w,
                    53: w,
                    54: w,
                    55: w,
                    56: w,
                    57: w,
                    62: u
                },
                O = {
                    91: p
                },
                P = {
                    "-2": c,
                    "-1": c,
                    32: c
                },
                C = {
                    35: h,
                    42: S,
                    45: [k, S],
                    60: m,
                    61: k,
                    95: S,
                    96: s,
                    126: s
                },
                T = {
                    38: a,
                    92: l
                },
                I = {
                    "-5": x,
                    "-4": x,
                    "-3": x,
                    33: y,
                    38: a,
                    42: i,
                    60: [o, v],
                    91: b,
                    92: [d, l],
                    93: g,
                    95: i,
                    96: f
                },
                A = {
                    null: [i, r.resolver]
                };
            t.contentInitial = O, t.disable = {
                null: []
            }, t.document = E, t.flow = C, t.flowInitial = P, t.insideSpan = A, t.string = T, t.text = I
        },
        1225: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(7386),
                i = n(1499),
                o = function(e) {
                    var t, n = e.attempt(this.parser.constructs.contentInitial, (function(t) {
                        if (null === t) return void e.consume(t);
                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, n, "linePrefix")
                    }), (function(t) {
                        return e.enter("paragraph"), o(t)
                    }));
                    return n;

                    function o(n) {
                        var r = e.enter("chunkText", {
                            contentType: "text",
                            previous: t
                        });
                        return t && (t.next = r), t = r, u(n)
                    }

                    function u(t) {
                        return null === t ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t)) : r(t) ? (e.consume(t), e.exit("chunkText"), o) : (e.consume(t), u)
                    }
                };
            t.tokenize = o
        },
        6760: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(7386),
                i = n(1499),
                o = n(9653),
                u = function(e) {
                    var t, n, i, u = this,
                        s = [],
                        c = 0,
                        f = {
                            tokenize: function(e, r) {
                                var i = 0;
                                return t = {}, c;

                                function c(r) {
                                    return i < s.length ? (u.containerState = s[i][1], e.attempt(s[i][0].continuation, f, p)(r)) : n.currentConstruct && n.currentConstruct.concrete ? (t.flowContinue = !0, m(r)) : (u.interrupt = n.currentConstruct && n.currentConstruct.interruptible, u.containerState = {}, e.attempt(l, h, m)(r))
                                }

                                function f(e) {
                                    return i++, u.containerState._closeFlow ? h(e) : c(e)
                                }

                                function p(t) {
                                    return n.currentConstruct && n.currentConstruct.lazy ? (u.containerState = {}, e.attempt(l, h, e.attempt(a, h, e.check(o, h, d)))(t)) : h(t)
                                }

                                function d(e) {
                                    return i = s.length, t.lazy = !0, t.flowContinue = !0, m(e)
                                }

                                function h(e) {
                                    return t.flowEnd = !0, m(e)
                                }

                                function m(e) {
                                    return t.continued = i, u.interrupt = u.containerState = void 0, r(e)
                                }
                            },
                            partial: !0
                        };
                    return p;

                    function p(t) {
                        return c < s.length ? (u.containerState = s[c][1], e.attempt(s[c][0].continuation, d, h)(t)) : h(t)
                    }

                    function d(e) {
                        return c++, p(e)
                    }

                    function h(r) {
                        return t && t.flowContinue ? v(r) : (u.interrupt = n && n.currentConstruct && n.currentConstruct.interruptible, u.containerState = {}, e.attempt(l, m, v)(r))
                    }

                    function m(e) {
                        return s.push([u.currentConstruct, u.containerState]), u.containerState = void 0, h(e)
                    }

                    function v(t) {
                        return null === t ? (x(0, !0), void e.consume(t)) : (n = n || u.parser.flow(u.now()), e.enter("chunkFlow", {
                            contentType: "flow",
                            previous: i,
                            _tokenizer: n
                        }), g(t))
                    }

                    function g(t) {
                        return null === t ? (b(e.exit("chunkFlow")), v(t)) : r(t) ? (e.consume(t), b(e.exit("chunkFlow")), e.check(f, y)) : (e.consume(t), g)
                    }

                    function y(e) {
                        return x(t.continued, t && t.flowEnd), c = 0, p(e)
                    }

                    function b(e) {
                        i && (i.next = e), i = e, n.lazy = t && t.lazy, n.defineSkip(e.start), n.write(u.sliceStream(e))
                    }

                    function x(t, r) {
                        var o = s.length;
                        for (n && r && (n.write([null]), i = n = void 0); o-- > t;) u.containerState = s[o][1], s[o][0].exit.call(u, e);
                        s.length = t
                    }
                },
                l = {
                    tokenize: function(e, t, n) {
                        return i(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                    }
                },
                a = {
                    tokenize: function(e, t, n) {
                        return i(e, e.lazy(this.parser.constructs.flow, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                    }
                };
            t.tokenize = u
        },
        6907: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(6465),
                i = n(1499),
                o = n(9653),
                u = function(e) {
                    var t = this,
                        n = e.attempt(o, (function(r) {
                            if (null === r) return void e.consume(r);
                            return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
                        }), e.attempt(this.parser.constructs.flowInitial, u, i(e, e.attempt(this.parser.constructs.flow, u, e.attempt(r, u)), "linePrefix")));
                    return n;

                    function u(r) {
                        if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
                        e.consume(r)
                    }
                };
            t.tokenize = u
        },
        7535: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(2282),
                i = n(1545),
                o = a("text"),
                u = a("string"),
                l = {
                    resolveAll: s()
                };

            function a(e) {
                return {
                    tokenize: function(t) {
                        var n = this,
                            r = this.parser.constructs[e],
                            i = t.attempt(r, o, u);
                        return o;

                        function o(e) {
                            return a(e) ? i(e) : u(e)
                        }

                        function u(e) {
                            if (null !== e) return t.enter("data"), t.consume(e), l;
                            t.consume(e)
                        }

                        function l(e) {
                            return a(e) ? (t.exit("data"), i(e)) : (t.consume(e), l)
                        }

                        function a(e) {
                            var t = r[e],
                                i = -1;
                            if (null === e) return !0;
                            if (t)
                                for (; ++i < t.length;)
                                    if (!t[i].previous || t[i].previous.call(n, n.previous)) return !0
                        }
                    },
                    resolveAll: s("text" === e ? c : void 0)
                }
            }

            function s(e) {
                return function(t, n) {
                    var r, i = -1;
                    for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
                    return e ? e(t, n) : t
                }
            }

            function c(e, t) {
                for (var n, o, u, l, a, s, c, f, p = -1; ++p <= e.length;)
                    if ((p === e.length || "lineEnding" === e[p][1].type) && "data" === e[p - 1][1].type) {
                        for (o = e[p - 1][1], l = (n = t.sliceStream(o)).length, a = -1, s = 0, c = void 0; l--;)
                            if ("string" === typeof(u = n[l])) {
                                for (a = u.length; 32 === u.charCodeAt(a - 1);) s++, a--;
                                if (a) break;
                                a = -1
                            } else if (-2 === u) c = !0, s++;
                        else if (-1 !== u) {
                            l++;
                            break
                        }
                        s && (f = {
                            type: p === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
                            start: {
                                line: o.end.line,
                                column: o.end.column - s,
                                offset: o.end.offset - s,
                                _index: o.start._index + l,
                                _bufferIndex: l ? a : o.start._bufferIndex + a
                            },
                            end: i(o.end)
                        }, o.end = i(f.start), o.start.offset === o.end.offset ? r(o, f) : (e.splice(p, 0, ["enter", f, t], ["exit", f, t]), p += 2)), p++
                    }
                return e
            }
            t.resolver = l, t.string = u, t.text = o
        },
        5517: function(e, t, n) {
            "use strict";
            var r = n(1225),
                i = n(6760),
                o = n(6907),
                u = n(7535),
                l = n(3250),
                a = n(49),
                s = n(9667),
                c = n(130);
            e.exports = function(e) {
                var t = {
                    defined: [],
                    constructs: l([c].concat(s((e || {}).extensions))),
                    content: n(r),
                    document: n(i),
                    flow: n(o),
                    string: n(u.string),
                    text: n(u.text)
                };
                return t;

                function n(e) {
                    return function(n) {
                        return a(t, e, n)
                    }
                }
            }
        },
        2286: function(e, t, n) {
            "use strict";
            var r = n(6206);
            e.exports = function(e) {
                for (; !r(e););
                return e
            }
        },
        7660: function(e) {
            "use strict";
            var t = /[\0\t\n\r]/g;
            e.exports = function() {
                var e, n = !0,
                    r = 1,
                    i = "";
                return function(o, u, l) {
                    var a, s, c, f, p, d = [];
                    o = i + o.toString(u), c = 0, i = "", n && (65279 === o.charCodeAt(0) && c++, n = void 0);
                    for (; c < o.length;) {
                        if (t.lastIndex = c, a = t.exec(o), f = a ? a.index : o.length, p = o.charCodeAt(f), !a) {
                            i = o.slice(c);
                            break
                        }
                        if (10 === p && c === f && e) d.push(-3), e = void 0;
                        else if (e && (d.push(-5), e = void 0), c < f && (d.push(o.slice(c, f)), r += f - c), 0 === p) d.push(65533), r++;
                        else if (9 === p)
                            for (s = 4 * Math.ceil(r / 4), d.push(-2); r++ < s;) d.push(-1);
                        else 10 === p ? (d.push(-4), r = 1) : (e = !0, r = 1);
                        c = f + 1
                    }
                    l && (e && d.push(-5), i && d.push(i), d.push(null));
                    return d
                }
            }
        },
        8742: function(e, t, n) {
            "use strict";
            var r = n(2999),
                i = n(7331),
                o = n(9095),
                u = n(2425),
                l = n(1928),
                a = n(1545),
                s = {
                    name: "attention",
                    tokenize: function(e, t) {
                        var n, r = o(this.previous);
                        return function(t) {
                            return e.enter("attentionSequence"), n = t, i(t)
                        };

                        function i(u) {
                            var l, a, s, c;
                            return u === n ? (e.consume(u), i) : (l = e.exit("attentionSequence"), s = !(a = o(u)) || 2 === a && r, c = !r || 2 === r && a, l._open = 42 === n ? s : s && (r || !c), l._close = 42 === n ? c : c && (a || !s), t(u))
                        }
                    },
                    resolveAll: function(e, t) {
                        var n, o, s, c, f, p, d, h, m = -1;
                        for (; ++m < e.length;)
                            if ("enter" === e[m][0] && "attentionSequence" === e[m][1].type && e[m][1]._close)
                                for (n = m; n--;)
                                    if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[m][1]).charCodeAt(0)) {
                                        if ((e[n][1]._close || e[m][1]._open) && (e[m][1].end.offset - e[m][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[m][1].end.offset - e[m][1].start.offset) % 3)) continue;
                                        p = e[n][1].end.offset - e[n][1].start.offset > 1 && e[m][1].end.offset - e[m][1].start.offset > 1 ? 2 : 1, c = {
                                            type: p > 1 ? "strongSequence" : "emphasisSequence",
                                            start: u(a(e[n][1].end), -p),
                                            end: a(e[n][1].end)
                                        }, f = {
                                            type: p > 1 ? "strongSequence" : "emphasisSequence",
                                            start: a(e[m][1].start),
                                            end: u(a(e[m][1].start), p)
                                        }, s = {
                                            type: p > 1 ? "strongText" : "emphasisText",
                                            start: a(e[n][1].end),
                                            end: a(e[m][1].start)
                                        }, o = {
                                            type: p > 1 ? "strong" : "emphasis",
                                            start: a(c.start),
                                            end: a(f.end)
                                        }, e[n][1].end = a(c.start), e[m][1].start = a(f.end), d = [], e[n][1].end.offset - e[n][1].start.offset && (d = r(d, [
                                            ["enter", e[n][1], t],
                                            ["exit", e[n][1], t]
                                        ])), d = r(d, [
                                            ["enter", o, t],
                                            ["enter", c, t],
                                            ["exit", c, t],
                                            ["enter", s, t]
                                        ]), d = r(d, l(t.parser.constructs.insideSpan.null, e.slice(n + 1, m), t)), d = r(d, [
                                            ["exit", s, t],
                                            ["enter", f, t],
                                            ["exit", f, t],
                                            ["exit", o, t]
                                        ]), e[m][1].end.offset - e[m][1].start.offset ? (h = 2, d = r(d, [
                                            ["enter", e[m][1], t],
                                            ["exit", e[m][1], t]
                                        ])) : h = 0, i(e, n - 1, m - n + 3, d), m = n + d.length - h - 2;
                                        break
                                    }
                        m = -1;
                        for (; ++m < e.length;) "attentionSequence" === e[m][1].type && (e[m][1].type = "data");
                        return e
                    }
                };
            e.exports = s
        },
        2738: function(e, t, n) {
            "use strict";
            var r = n(271),
                i = n(6916),
                o = n(921),
                u = n(2456),
                l = {
                    name: "autolink",
                    tokenize: function(e, t, n) {
                        var l = 1;
                        return function(t) {
                            return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a
                        };

                        function a(t) {
                            return r(t) ? (e.consume(t), s) : o(t) ? p(t) : n(t)
                        }

                        function s(e) {
                            return 43 === e || 45 === e || 46 === e || i(e) ? c(e) : p(e)
                        }

                        function c(t) {
                            return 58 === t ? (e.consume(t), f) : (43 === t || 45 === t || 46 === t || i(t)) && l++ < 32 ? (e.consume(t), c) : p(t)
                        }

                        function f(t) {
                            return 62 === t ? (e.exit("autolinkProtocol"), v(t)) : 32 === t || 60 === t || u(t) ? n(t) : (e.consume(t), f)
                        }

                        function p(t) {
                            return 64 === t ? (e.consume(t), l = 0, d) : o(t) ? (e.consume(t), p) : n(t)
                        }

                        function d(e) {
                            return i(e) ? h(e) : n(e)
                        }

                        function h(t) {
                            return 46 === t ? (e.consume(t), l = 0, d) : 62 === t ? (e.exit("autolinkProtocol").type = "autolinkEmail", v(t)) : m(t)
                        }

                        function m(t) {
                            return (45 === t || i(t)) && l++ < 63 ? (e.consume(t), 45 === t ? m : h) : n(t)
                        }

                        function v(n) {
                            return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t
                        }
                    }
                };
            e.exports = l
        },
        4364: function(e, t, n) {
            "use strict";
            var r = n(2741),
                i = n(1499),
                o = {
                    name: "blockQuote",
                    tokenize: function(e, t, n) {
                        var i = this;
                        return function(t) {
                            if (62 === t) return i.containerState.open || (e.enter("blockQuote", {
                                _container: !0
                            }), i.containerState.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), o;
                            return n(t)
                        };

                        function o(n) {
                            return r(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            return i(e, e.attempt(o, t, n), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                        }
                    },
                    exit: function(e) {
                        e.exit("blockQuote")
                    }
                };
            e.exports = o
        },
        5587: function(e, t, n) {
            "use strict";
            var r = n(8117),
                i = {
                    name: "characterEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i
                        };

                        function i(i) {
                            return r(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i)
                        }
                    }
                };
            e.exports = i
        },
        8334: function(e, t, n) {
            "use strict";
            var r = n(6141),
                i = n(6916),
                o = n(9687),
                u = n(6604);

            function l(e) {
                return e && "object" === typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var a = l(r),
                s = {
                    name: "characterReference",
                    tokenize: function(e, t, n) {
                        var r, l, s = this,
                            c = 0;
                        return function(t) {
                            return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), f
                        };

                        function f(t) {
                            return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), p) : (e.enter("characterReferenceValue"), r = 31, l = i, d(t))
                        }

                        function p(t) {
                            return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, l = u, d) : (e.enter("characterReferenceValue"), r = 7, l = o, d(t))
                        }

                        function d(o) {
                            var u;
                            return 59 === o && c ? (u = e.exit("characterReferenceValue"), l !== i || a.default(s.sliceSerialize(u)) ? (e.enter("characterReferenceMarker"), e.consume(o), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(o)) : l(o) && c++ < r ? (e.consume(o), d) : n(o)
                        }
                    }
                };
            e.exports = s
        },
        3801: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = n(5008),
                o = n(2110),
                u = n(1499),
                l = {
                    name: "codeFenced",
                    tokenize: function(e, t, n) {
                        var l, a = this,
                            s = {
                                tokenize: function(e, t, n) {
                                    var i = 0;
                                    return u(e, o, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);

                                    function o(t) {
                                        return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), a(t)
                                    }

                                    function a(t) {
                                        return t === l ? (e.consume(t), i++, a) : i < f ? n(t) : (e.exit("codeFencedFenceSequence"), u(e, s, "whitespace")(t))
                                    }

                                    function s(i) {
                                        return null === i || r(i) ? (e.exit("codeFencedFence"), t(i)) : n(i)
                                    }
                                },
                                partial: !0
                            },
                            c = o(this.events, "linePrefix"),
                            f = 0;
                        return function(t) {
                            return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), l = t, p(t)
                        };

                        function p(t) {
                            return t === l ? (e.consume(t), f++, p) : (e.exit("codeFencedFenceSequence"), f < 3 ? n(t) : u(e, d, "whitespace")(t))
                        }

                        function d(t) {
                            return null === t || r(t) ? g(t) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                                contentType: "string"
                            }), h(t))
                        }

                        function h(t) {
                            return null === t || i(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(e, m, "whitespace")(t)) : 96 === t && t === l ? n(t) : (e.consume(t), h)
                        }

                        function m(t) {
                            return null === t || r(t) ? g(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), v(t))
                        }

                        function v(t) {
                            return null === t || r(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(t)) : 96 === t && t === l ? n(t) : (e.consume(t), v)
                        }

                        function g(n) {
                            return e.exit("codeFencedFence"), a.interrupt ? t(n) : y(n)
                        }

                        function y(t) {
                            return null === t ? x(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), e.attempt(s, x, c ? u(e, y, "linePrefix", c + 1) : y)) : (e.enter("codeFlowValue"), b(t))
                        }

                        function b(t) {
                            return null === t || r(t) ? (e.exit("codeFlowValue"), y(t)) : (e.consume(t), b)
                        }

                        function x(n) {
                            return e.exit("codeFenced"), t(n)
                        }
                    },
                    concrete: !0
                };
            e.exports = l
        },
        4973: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = n(7331),
                o = n(2110),
                u = n(1499),
                l = {
                    name: "codeIndented",
                    tokenize: function(e, t, n) {
                        return e.attempt(a, i, n);

                        function i(n) {
                            return null === n ? t(n) : r(n) ? e.attempt(a, i, t)(n) : (e.enter("codeFlowValue"), o(n))
                        }

                        function o(t) {
                            return null === t || r(t) ? (e.exit("codeFlowValue"), i(t)) : (e.consume(t), o)
                        }
                    },
                    resolve: function(e, t) {
                        var n = {
                            type: "codeIndented",
                            start: e[0][1].start,
                            end: e[e.length - 1][1].end
                        };
                        return i(e, 0, 0, [
                            ["enter", n, t]
                        ]), i(e, e.length, 0, [
                            ["exit", n, t]
                        ]), e
                    }
                },
                a = {
                    tokenize: function(e, t, n) {
                        var i = this;
                        return u(e, (function l(a) {
                            if (r(a)) return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), u(e, l, "linePrefix", 5);
                            return o(i.events, "linePrefix") < 4 ? n(a) : t(a)
                        }), "linePrefix", 5)
                    },
                    partial: !0
                };
            e.exports = l
        },
        3835: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = {
                    name: "codeText",
                    tokenize: function(e, t, n) {
                        var i, o, u = 0;
                        return function(t) {
                            return e.enter("codeText"), e.enter("codeTextSequence"), l(t)
                        };

                        function l(t) {
                            return 96 === t ? (e.consume(t), u++, l) : (e.exit("codeTextSequence"), a(t))
                        }

                        function a(t) {
                            return null === t ? n(t) : 96 === t ? (o = e.enter("codeTextSequence"), i = 0, c(t)) : 32 === t ? (e.enter("space"), e.consume(t), e.exit("space"), a) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : (e.enter("codeTextData"), s(t))
                        }

                        function s(t) {
                            return null === t || 32 === t || 96 === t || r(t) ? (e.exit("codeTextData"), a(t)) : (e.consume(t), s)
                        }

                        function c(n) {
                            return 96 === n ? (e.consume(n), i++, c) : i === u ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (o.type = "codeTextData", s(n))
                        }
                    },
                    resolve: function(e) {
                        var t, n, r = e.length - 4,
                            i = 3;
                        if (("lineEnding" === e[i][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type))
                            for (t = i; ++t < r;)
                                if ("codeTextData" === e[t][1].type) {
                                    e[r][1].type = e[i][1].type = "codeTextPadding", i += 2, r -= 2;
                                    break
                                }
                        t = i - 1, r++;
                        for (; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : t !== r && "lineEnding" !== e[t][1].type || (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
                        return e
                    },
                    previous: function(e) {
                        return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                    }
                };
            e.exports = i
        },
        6465: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = n(2110),
                o = n(6206),
                u = n(1499),
                l = {
                    tokenize: function(e, t) {
                        var n;
                        return function(t) {
                            return e.enter("content"), n = e.enter("chunkContent", {
                                contentType: "content"
                            }), i(t)
                        };

                        function i(t) {
                            return null === t ? o(t) : r(t) ? e.check(a, u, o)(t) : (e.consume(t), i)
                        }

                        function o(n) {
                            return e.exit("chunkContent"), e.exit("content"), t(n)
                        }

                        function u(t) {
                            return e.consume(t), e.exit("chunkContent"), n = n.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: n
                            }), i
                        }
                    },
                    resolve: function(e) {
                        return o(e), e
                    },
                    interruptible: !0,
                    lazy: !0
                },
                a = {
                    tokenize: function(e, t, n) {
                        var o = this;
                        return function(t) {
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), u(e, l, "linePrefix")
                        };

                        function l(u) {
                            return null === u || r(u) ? n(u) : o.parser.constructs.disable.null.indexOf("codeIndented") > -1 || i(o.events, "linePrefix") < 4 ? e.interrupt(o.parser.constructs.flow, n, t)(u) : t(u)
                        }
                    },
                    partial: !0
                };
            e.exports = l
        },
        5696: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = n(5008),
                o = n(4432),
                u = n(682),
                l = n(8031),
                a = n(1499),
                s = n(292),
                c = n(6708),
                f = {
                    name: "definition",
                    tokenize: function(e, t, n) {
                        var i, c = this;
                        return function(t) {
                            return e.enter("definition"), l.call(c, e, f, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
                        };

                        function f(t) {
                            return i = o(c.sliceSerialize(c.events[c.events.length - 1][1]).slice(1, -1)), 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), s(e, u(e, e.attempt(p, a(e, d, "whitespace"), a(e, d, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t)
                        }

                        function d(o) {
                            return null === o || r(o) ? (e.exit("definition"), c.parser.defined.indexOf(i) < 0 && c.parser.defined.push(i), t(o)) : n(o)
                        }
                    }
                },
                p = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return i(t) ? s(e, o)(t) : n(t)
                        };

                        function o(t) {
                            return 34 === t || 39 === t || 40 === t ? c(e, a(e, u, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t)
                        }

                        function u(e) {
                            return null === e || r(e) ? t(e) : n(e)
                        }
                    },
                    partial: !0
                };
            e.exports = f
        },
        682: function(e, t, n) {
            "use strict";
            var r = n(2456),
                i = n(5008),
                o = n(7386);
            e.exports = function(e, t, n, u, l, a, s, c, f) {
                var p = f || 1 / 0,
                    d = 0;
                return function(t) {
                    if (60 === t) return e.enter(u), e.enter(l), e.enter(a), e.consume(t), e.exit(a), h;
                    if (r(t) || 41 === t) return n(t);
                    return e.enter(u), e.enter(s), e.enter(c), e.enter("chunkString", {
                        contentType: "string"
                    }), g(t)
                };

                function h(n) {
                    return 62 === n ? (e.enter(a), e.consume(n), e.exit(a), e.exit(l), e.exit(u), t) : (e.enter(c), e.enter("chunkString", {
                        contentType: "string"
                    }), m(n))
                }

                function m(t) {
                    return 62 === t ? (e.exit("chunkString"), e.exit(c), h(t)) : null === t || 60 === t || o(t) ? n(t) : (e.consume(t), 92 === t ? v : m)
                }

                function v(t) {
                    return 60 === t || 62 === t || 92 === t ? (e.consume(t), m) : m(t)
                }

                function g(o) {
                    return 40 === o ? ++d > p ? n(o) : (e.consume(o), g) : 41 === o ? d-- ? (e.consume(o), g) : (e.exit("chunkString"), e.exit(c), e.exit(s), e.exit(u), t(o)) : null === o || i(o) ? d ? n(o) : (e.exit("chunkString"), e.exit(c), e.exit(s), e.exit(u), t(o)) : r(o) ? n(o) : (e.consume(o), 92 === o ? y : g)
                }

                function y(t) {
                    return 40 === t || 41 === t || 92 === t ? (e.consume(t), g) : g(t)
                }
            }
        },
        8031: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = n(2741);
            e.exports = function(e, t, n, o, u, l) {
                var a, s = this,
                    c = 0;
                return function(t) {
                    return e.enter(o), e.enter(u), e.consume(t), e.exit(u), e.enter(l), f
                };

                function f(i) {
                    return null === i || 91 === i || 93 === i && !a || 94 === i && !c && "_hiddenFootnoteSupport" in s.parser.constructs || c > 999 ? n(i) : 93 === i ? (e.exit(l), e.enter(u), e.consume(i), e.exit(u), e.exit(o), t) : r(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), f) : (e.enter("chunkString", {
                        contentType: "string"
                    }), p(i))
                }

                function p(t) {
                    return null === t || 91 === t || 93 === t || r(t) || c++ > 999 ? (e.exit("chunkString"), f(t)) : (e.consume(t), a = a || !i(t), 92 === t ? d : p)
                }

                function d(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), c++, p) : p(t)
                }
            }
        },
        1499: function(e, t, n) {
            "use strict";
            var r = n(2741);
            e.exports = function(e, t, n, i) {
                var o = i ? i - 1 : 1 / 0,
                    u = 0;
                return function(i) {
                    if (r(i)) return e.enter(n), l(i);
                    return t(i)
                };

                function l(i) {
                    return r(i) && u++ < o ? (e.consume(i), l) : (e.exit(n), t(i))
                }
            }
        },
        6708: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = n(1499);
            e.exports = function(e, t, n, o, u, l) {
                var a;
                return function(t) {
                    return e.enter(o), e.enter(u), e.consume(t), e.exit(u), a = 40 === t ? 41 : t, s
                };

                function s(n) {
                    return n === a ? (e.enter(u), e.consume(n), e.exit(u), e.exit(o), t) : (e.enter(l), c(n))
                }

                function c(t) {
                    return t === a ? (e.exit(l), s(a)) : null === t ? n(t) : r(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i(e, c, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), f(t))
                }

                function f(t) {
                    return t === a || null === t || r(t) ? (e.exit("chunkString"), c(t)) : (e.consume(t), 92 === t ? p : f)
                }

                function p(t) {
                    return t === a || 92 === t ? (e.consume(t), f) : f(t)
                }
            }
        },
        292: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = n(2741),
                o = n(1499);
            e.exports = function(e, t) {
                var n;
                return function u(l) {
                    if (r(l)) return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), n = !0, u;
                    if (i(l)) return o(e, u, n ? "linePrefix" : "lineSuffix")(l);
                    return t(l)
                }
            }
        },
        2280: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = {
                    name: "hardBreakEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(t), i
                        };

                        function i(i) {
                            return r(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(i)) : n(i)
                        }
                    }
                };
            e.exports = i
        },
        4356: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = n(5008),
                o = n(2741),
                u = n(7331),
                l = n(1499),
                a = {
                    name: "headingAtx",
                    tokenize: function(e, t, n) {
                        var u = this,
                            a = 0;
                        return function(t) {
                            return e.enter("atxHeading"), e.enter("atxHeadingSequence"), s(t)
                        };

                        function s(r) {
                            return 35 === r && a++ < 6 ? (e.consume(r), s) : null === r || i(r) ? (e.exit("atxHeadingSequence"), u.interrupt ? t(r) : c(r)) : n(r)
                        }

                        function c(n) {
                            return 35 === n ? (e.enter("atxHeadingSequence"), f(n)) : null === n || r(n) ? (e.exit("atxHeading"), t(n)) : o(n) ? l(e, c, "whitespace")(n) : (e.enter("atxHeadingText"), p(n))
                        }

                        function f(t) {
                            return 35 === t ? (e.consume(t), f) : (e.exit("atxHeadingSequence"), c(t))
                        }

                        function p(t) {
                            return null === t || 35 === t || i(t) ? (e.exit("atxHeadingText"), c(t)) : (e.consume(t), p)
                        }
                    },
                    resolve: function(e, t) {
                        var n, r, i = e.length - 2,
                            o = 3;
                        "whitespace" === e[o][1].type && (o += 2);
                        i - 2 > o && "whitespace" === e[i][1].type && (i -= 2);
                        "atxHeadingSequence" === e[i][1].type && (o === i - 1 || i - 4 > o && "whitespace" === e[i - 2][1].type) && (i -= o + 1 === i ? 2 : 4);
                        i > o && (n = {
                            type: "atxHeadingText",
                            start: e[o][1].start,
                            end: e[i][1].end
                        }, r = {
                            type: "chunkText",
                            start: e[o][1].start,
                            end: e[i][1].end,
                            contentType: "text"
                        }, u(e, o, i - o + 1, [
                            ["enter", n, t],
                            ["enter", r, t],
                            ["exit", r, t],
                            ["exit", n, t]
                        ]));
                        return e
                    }
                };
            e.exports = a
        },
        140: function(e, t, n) {
            "use strict";
            var r = n(271),
                i = n(6916),
                o = n(7386),
                u = n(5008),
                l = n(2741),
                a = n(8280),
                s = n(7462),
                c = n(5410),
                f = n(9653),
                p = {
                    name: "htmlFlow",
                    tokenize: function(e, t, n) {
                        var f, p, h, m, v, g = this;
                        return function(t) {
                            return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), y
                        };

                        function y(i) {
                            return 33 === i ? (e.consume(i), b) : 47 === i ? (e.consume(i), k) : 63 === i ? (e.consume(i), f = 3, g.interrupt ? t : U) : r(i) ? (e.consume(i), h = a(i), p = !0, S) : n(i)
                        }

                        function b(i) {
                            return 45 === i ? (e.consume(i), f = 2, x) : 91 === i ? (e.consume(i), f = 5, h = "CDATA[", m = 0, w) : r(i) ? (e.consume(i), f = 4, g.interrupt ? t : U) : n(i)
                        }

                        function x(r) {
                            return 45 === r ? (e.consume(r), g.interrupt ? t : U) : n(r)
                        }

                        function w(r) {
                            return r === h.charCodeAt(m++) ? (e.consume(r), m === h.length ? g.interrupt ? t : F : w) : n(r)
                        }

                        function k(t) {
                            return r(t) ? (e.consume(t), h = a(t), S) : n(t)
                        }

                        function S(r) {
                            return null === r || 47 === r || 62 === r || u(r) ? 47 !== r && p && c.indexOf(h.toLowerCase()) > -1 ? (f = 1, g.interrupt ? t(r) : F(r)) : s.indexOf(h.toLowerCase()) > -1 ? (f = 6, 47 === r ? (e.consume(r), E) : g.interrupt ? t(r) : F(r)) : (f = 7, g.interrupt ? n(r) : p ? P(r) : O(r)) : 45 === r || i(r) ? (e.consume(r), h += a(r), S) : n(r)
                        }

                        function E(r) {
                            return 62 === r ? (e.consume(r), g.interrupt ? t : F) : n(r)
                        }

                        function O(t) {
                            return l(t) ? (e.consume(t), O) : D(t)
                        }

                        function P(t) {
                            return 47 === t ? (e.consume(t), D) : 58 === t || 95 === t || r(t) ? (e.consume(t), C) : l(t) ? (e.consume(t), P) : D(t)
                        }

                        function C(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), C) : T(t)
                        }

                        function T(t) {
                            return 61 === t ? (e.consume(t), I) : l(t) ? (e.consume(t), T) : P(t)
                        }

                        function I(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), v = t, A) : l(t) ? (e.consume(t), I) : (v = void 0, M(t))
                        }

                        function A(t) {
                            return t === v ? (e.consume(t), _) : null === t || o(t) ? n(t) : (e.consume(t), A)
                        }

                        function M(t) {
                            return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t || u(t) ? T(t) : (e.consume(t), M)
                        }

                        function _(e) {
                            return 47 === e || 62 === e || l(e) ? P(e) : n(e)
                        }

                        function D(t) {
                            return 62 === t ? (e.consume(t), L) : n(t)
                        }

                        function L(t) {
                            return l(t) ? (e.consume(t), L) : null === t || o(t) ? F(t) : n(t)
                        }

                        function F(t) {
                            return 45 === t && 2 === f ? (e.consume(t), z) : 60 === t && 1 === f ? (e.consume(t), B) : 62 === t && 4 === f ? (e.consume(t), W) : 63 === t && 3 === f ? (e.consume(t), U) : 93 === t && 5 === f ? (e.consume(t), N) : !o(t) || 6 !== f && 7 !== f ? null === t || o(t) ? R(t) : (e.consume(t), F) : e.check(d, W, R)(t)
                        }

                        function R(t) {
                            return e.exit("htmlFlowData"), j(t)
                        }

                        function j(t) {
                            return null === t ? q(t) : o(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), j) : (e.enter("htmlFlowData"), F(t))
                        }

                        function z(t) {
                            return 45 === t ? (e.consume(t), U) : F(t)
                        }

                        function B(t) {
                            return 47 === t ? (e.consume(t), h = "", H) : F(t)
                        }

                        function H(t) {
                            return 62 === t && c.indexOf(h.toLowerCase()) > -1 ? (e.consume(t), W) : r(t) && h.length < 8 ? (e.consume(t), h += a(t), H) : F(t)
                        }

                        function N(t) {
                            return 93 === t ? (e.consume(t), U) : F(t)
                        }

                        function U(t) {
                            return 62 === t ? (e.consume(t), W) : F(t)
                        }

                        function W(t) {
                            return null === t || o(t) ? (e.exit("htmlFlowData"), q(t)) : (e.consume(t), W)
                        }

                        function q(n) {
                            return e.exit("htmlFlow"), t(n)
                        }
                    },
                    resolveTo: function(e) {
                        var t = e.length;
                        for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
                        t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2));
                        return e
                    },
                    concrete: !0
                },
                d = {
                    tokenize: function(e, t, n) {
                        return function(r) {
                            return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(f, t, n)
                        }
                    },
                    partial: !0
                };
            e.exports = p
        },
        3617: function(e, t, n) {
            "use strict";
            var r = n(271),
                i = n(6916),
                o = n(7386),
                u = n(5008),
                l = n(2741),
                a = n(1499),
                s = {
                    name: "htmlText",
                    tokenize: function(e, t, n) {
                        var s, c, f, p, d = this;
                        return function(t) {
                            return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), h
                        };

                        function h(t) {
                            return 33 === t ? (e.consume(t), m) : 47 === t ? (e.consume(t), T) : 63 === t ? (e.consume(t), P) : r(t) ? (e.consume(t), M) : n(t)
                        }

                        function m(t) {
                            return 45 === t ? (e.consume(t), v) : 91 === t ? (e.consume(t), c = "CDATA[", f = 0, w) : r(t) ? (e.consume(t), O) : n(t)
                        }

                        function v(t) {
                            return 45 === t ? (e.consume(t), g) : n(t)
                        }

                        function g(t) {
                            return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), y) : b(t)
                        }

                        function y(e) {
                            return null === e || 62 === e ? n(e) : b(e)
                        }

                        function b(t) {
                            return null === t ? n(t) : 45 === t ? (e.consume(t), x) : o(t) ? (p = b, B(t)) : (e.consume(t), b)
                        }

                        function x(t) {
                            return 45 === t ? (e.consume(t), N) : b(t)
                        }

                        function w(t) {
                            return t === c.charCodeAt(f++) ? (e.consume(t), f === c.length ? k : w) : n(t)
                        }

                        function k(t) {
                            return null === t ? n(t) : 93 === t ? (e.consume(t), S) : o(t) ? (p = k, B(t)) : (e.consume(t), k)
                        }

                        function S(t) {
                            return 93 === t ? (e.consume(t), E) : k(t)
                        }

                        function E(t) {
                            return 62 === t ? N(t) : 93 === t ? (e.consume(t), E) : k(t)
                        }

                        function O(t) {
                            return null === t || 62 === t ? N(t) : o(t) ? (p = O, B(t)) : (e.consume(t), O)
                        }

                        function P(t) {
                            return null === t ? n(t) : 63 === t ? (e.consume(t), C) : o(t) ? (p = P, B(t)) : (e.consume(t), P)
                        }

                        function C(e) {
                            return 62 === e ? N(e) : P(e)
                        }

                        function T(t) {
                            return r(t) ? (e.consume(t), I) : n(t)
                        }

                        function I(t) {
                            return 45 === t || i(t) ? (e.consume(t), I) : A(t)
                        }

                        function A(t) {
                            return o(t) ? (p = A, B(t)) : l(t) ? (e.consume(t), A) : N(t)
                        }

                        function M(t) {
                            return 45 === t || i(t) ? (e.consume(t), M) : 47 === t || 62 === t || u(t) ? _(t) : n(t)
                        }

                        function _(t) {
                            return 47 === t ? (e.consume(t), N) : 58 === t || 95 === t || r(t) ? (e.consume(t), D) : o(t) ? (p = _, B(t)) : l(t) ? (e.consume(t), _) : N(t)
                        }

                        function D(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || i(t) ? (e.consume(t), D) : L(t)
                        }

                        function L(t) {
                            return 61 === t ? (e.consume(t), F) : o(t) ? (p = L, B(t)) : l(t) ? (e.consume(t), L) : _(t)
                        }

                        function F(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), s = t, R) : o(t) ? (p = F, B(t)) : l(t) ? (e.consume(t), F) : (e.consume(t), s = void 0, z)
                        }

                        function R(t) {
                            return t === s ? (e.consume(t), j) : null === t ? n(t) : o(t) ? (p = R, B(t)) : (e.consume(t), R)
                        }

                        function j(e) {
                            return 62 === e || 47 === e || u(e) ? _(e) : n(e)
                        }

                        function z(t) {
                            return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || u(t) ? _(t) : (e.consume(t), z)
                        }

                        function B(t) {
                            return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a(e, H, "linePrefix", d.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                        }

                        function H(t) {
                            return e.enter("htmlTextData"), p(t)
                        }

                        function N(r) {
                            return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
                        }
                    }
                };
            e.exports = s
        },
        6525: function(e, t, n) {
            "use strict";
            var r = n(5008),
                i = n(2999),
                o = n(7331),
                u = n(4432),
                l = n(1928),
                a = n(1545),
                s = n(682),
                c = n(8031),
                f = n(6708),
                p = n(292),
                d = {
                    name: "labelEnd",
                    tokenize: function(e, t, n) {
                        var r, i, o = this,
                            l = o.events.length;
                        for (; l--;)
                            if (("labelImage" === o.events[l][1].type || "labelLink" === o.events[l][1].type) && !o.events[l][1]._balanced) {
                                r = o.events[l][1];
                                break
                            }
                        return function(t) {
                            if (!r) return n(t);
                            return r._inactive ? s(t) : (i = o.parser.defined.indexOf(u(o.sliceSerialize({
                                start: r.end,
                                end: o.now()
                            }))) > -1, e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), a)
                        };

                        function a(n) {
                            return 40 === n ? e.attempt(h, t, i ? t : s)(n) : 91 === n ? e.attempt(m, t, i ? e.attempt(v, t, s) : s)(n) : i ? t(n) : s(n)
                        }

                        function s(e) {
                            return r._balanced = !0, n(e)
                        }
                    },
                    resolveTo: function(e, t) {
                        var n, r, u, s, c, f, p, d = e.length,
                            h = 0;
                        for (; d--;)
                            if (s = e[d][1], c) {
                                if ("link" === s.type || "labelLink" === s.type && s._inactive) break;
                                "enter" === e[d][0] && "labelLink" === s.type && (s._inactive = !0)
                            } else if (f) {
                            if ("enter" === e[d][0] && ("labelImage" === s.type || "labelLink" === s.type) && !s._balanced && (c = d, "labelLink" !== s.type)) {
                                h = 2;
                                break
                            }
                        } else "labelEnd" === s.type && (f = d);
                        return n = {
                            type: "labelLink" === e[c][1].type ? "link" : "image",
                            start: a(e[c][1].start),
                            end: a(e[e.length - 1][1].end)
                        }, r = {
                            type: "label",
                            start: a(e[c][1].start),
                            end: a(e[f][1].end)
                        }, u = {
                            type: "labelText",
                            start: a(e[c + h + 2][1].end),
                            end: a(e[f - 2][1].start)
                        }, p = i(p = [
                            ["enter", n, t],
                            ["enter", r, t]
                        ], e.slice(c + 1, c + h + 3)), p = i(p, [
                            ["enter", u, t]
                        ]), p = i(p, l(t.parser.constructs.insideSpan.null, e.slice(c + h + 4, f - 3), t)), p = i(p, [
                            ["exit", u, t], e[f - 2], e[f - 1],
                            ["exit", r, t]
                        ]), p = i(p, e.slice(f + 1)), p = i(p, [
                            ["exit", n, t]
                        ]), o(e, c, e.length, p), e
                    },
                    resolveAll: function(e) {
                        var t, n = -1;
                        for (; ++n < e.length;)(t = e[n][1])._used || "labelImage" !== t.type && "labelLink" !== t.type && "labelEnd" !== t.type || (e.splice(n + 1, "labelImage" === t.type ? 4 : 2), t.type = "data", n++);
                        return e
                    }
                },
                h = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), p(e, i)
                        };

                        function i(t) {
                            return 41 === t ? l(t) : s(e, o, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(t)
                        }

                        function o(t) {
                            return r(t) ? p(e, u)(t) : l(t)
                        }

                        function u(t) {
                            return 34 === t || 39 === t || 40 === t ? f(e, p(e, l), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : l(t)
                        }

                        function l(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
                        }
                    }
                },
                m = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return function(t) {
                            return c.call(r, e, i, n, "reference", "referenceMarker", "referenceString")(t)
                        };

                        function i(e) {
                            return r.parser.defined.indexOf(u(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) < 0 ? n(e) : t(e)
                        }
                    }
                },
                v = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
                        }
                    }
                };
            e.exports = d
        },
        8230: function(e, t, n) {
            "use strict";
            var r = {
                name: "labelStartImage",
                tokenize: function(e, t, n) {
                    var r = this;
                    return function(t) {
                        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
                    };

                    function i(t) {
                        return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t)
                    }

                    function o(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                    }
                },
                resolveAll: n(6525).resolveAll
            };
            e.exports = r
        },
        3190: function(e, t, n) {
            "use strict";
            var r = {
                name: "labelStartLink",
                tokenize: function(e, t, n) {
                    var r = this;
                    return function(t) {
                        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
                    };

                    function i(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                    }
                },
                resolveAll: n(6525).resolveAll
            };
            e.exports = r
        },
        5717: function(e, t, n) {
            "use strict";
            var r = n(1499),
                i = {
                    name: "lineEnding",
                    tokenize: function(e, t) {
                        return function(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), r(e, t, "linePrefix")
                        }
                    }
                };
            e.exports = i
        },
        8953: function(e, t, n) {
            "use strict";
            var r = n(9687),
                i = n(2741),
                o = n(2110),
                u = n(312),
                l = n(1499),
                a = n(9653),
                s = n(3871),
                c = {
                    name: "list",
                    tokenize: function(e, t, n) {
                        var l = this,
                            c = o(l.events, "linePrefix"),
                            p = 0;
                        return function(t) {
                            var i = l.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === i ? !l.containerState.marker || t === l.containerState.marker : r(t)) {
                                if (l.containerState.type || (l.containerState.type = i, e.enter(i, {
                                        _container: !0
                                    })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(s, n, h)(t) : h(t);
                                if (!l.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), d(t)
                            }
                            return n(t)
                        };

                        function d(t) {
                            return r(t) && ++p < 10 ? (e.consume(t), d) : (!l.interrupt || p < 2) && (l.containerState.marker ? t === l.containerState.marker : 41 === t || 46 === t) ? (e.exit("listItemValue"), h(t)) : n(t)
                        }

                        function h(t) {
                            return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), l.containerState.marker = l.containerState.marker || t, e.check(a, l.interrupt ? n : m, e.attempt(f, g, v))
                        }

                        function m(e) {
                            return l.containerState.initialBlankLine = !0, c++, g(e)
                        }

                        function v(t) {
                            return i(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), g) : n(t)
                        }

                        function g(n) {
                            return l.containerState.size = c + u(l.sliceStream(e.exit("listItemPrefix"))), t(n)
                        }
                    },
                    continuation: {
                        tokenize: function(e, t, n) {
                            var r = this;
                            return r.containerState._closeFlow = void 0, e.check(a, (function(n) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, l(e, t, "listItemIndent", r.containerState.size + 1)(n)
                            }), (function(n) {
                                if (r.containerState.furtherBlankLines || !i(n)) return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, o(n);
                                return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, e.attempt(p, t, o)(n)
                            }));

                            function o(i) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, l(e, e.attempt(c, t, n), "linePrefix", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(i)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    }
                },
                f = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return l(e, (function(e) {
                            return i(e) || !o(r.events, "listItemPrefixWhitespace") ? n(e) : t(e)
                        }), "listItemPrefixWhitespace", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 5)
                    },
                    partial: !0
                },
                p = {
                    tokenize: function(e, t, n) {
                        var r = this;
                        return l(e, (function(e) {
                            return o(r.events, "listItemIndent") === r.containerState.size ? t(e) : n(e)
                        }), "listItemIndent", r.containerState.size + 1)
                    },
                    partial: !0
                };
            e.exports = c
        },
        9653: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = n(1499),
                o = {
                    tokenize: function(e, t, n) {
                        return i(e, (function(e) {
                            return null === e || r(e) ? t(e) : n(e)
                        }), "linePrefix")
                    },
                    partial: !0
                };
            e.exports = o
        },
        9943: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = n(1545),
                o = n(1499),
                u = {
                    name: "setextUnderline",
                    tokenize: function(e, t, n) {
                        var i, u, l = this,
                            a = l.events.length;
                        for (; a--;)
                            if ("lineEnding" !== l.events[a][1].type && "linePrefix" !== l.events[a][1].type && "content" !== l.events[a][1].type) {
                                u = "paragraph" === l.events[a][1].type;
                                break
                            }
                        return function(t) {
                            if (!l.lazy && (l.interrupt || u)) return e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), i = t, s(t);
                            return n(t)
                        };

                        function s(t) {
                            return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), o(e, c, "lineSuffix")(t))
                        }

                        function c(i) {
                            return null === i || r(i) ? (e.exit("setextHeadingLine"), t(i)) : n(i)
                        }
                    },
                    resolveTo: function(e, t) {
                        var n, r, o, u, l = e.length;
                        for (; l--;)
                            if ("enter" === e[l][0]) {
                                if ("content" === e[l][1].type) {
                                    n = l;
                                    break
                                }
                                "paragraph" === e[l][1].type && (r = l)
                            } else "content" === e[l][1].type && e.splice(l, 1), o || "definition" !== e[l][1].type || (o = l);
                        u = {
                            type: "setextHeading",
                            start: i(e[r][1].start),
                            end: i(e[e.length - 1][1].end)
                        }, e[r][1].type = "setextHeadingText", o ? (e.splice(r, 0, ["enter", u, t]), e.splice(o + 1, 0, ["exit", e[n][1], t]), e[n][1].end = i(e[o][1].end)) : e[n][1] = u;
                        return e.push(["exit", u, t]), e
                    }
                };
            e.exports = u
        },
        3871: function(e, t, n) {
            "use strict";
            var r = n(7386),
                i = n(2741),
                o = n(1499),
                u = {
                    name: "thematicBreak",
                    tokenize: function(e, t, n) {
                        var u, l = 0;
                        return function(t) {
                            return e.enter("thematicBreak"), u = t, a(t)
                        };

                        function a(c) {
                            return c === u ? (e.enter("thematicBreakSequence"), s(c)) : i(c) ? o(e, a, "whitespace")(c) : l < 3 || null !== c && !r(c) ? n(c) : (e.exit("thematicBreak"), t(c))
                        }

                        function s(t) {
                            return t === u ? (e.consume(t), l++, s) : (e.exit("thematicBreakSequence"), a(t))
                        }
                    }
                };
            e.exports = u
        },
        2999: function(e, t, n) {
            "use strict";
            var r = n(7331);
            e.exports = function(e, t) {
                return e.length ? (r(e, e.length, 0, t), e) : t
            }
        },
        7331: function(e, t, n) {
            "use strict";
            var r = n(7945);
            e.exports = function(e, t, n, i) {
                var o, u = e.length,
                    l = 0;
                if (t = t < 0 ? -t > u ? 0 : u + t : t > u ? u : t, n = n > 0 ? n : 0, i.length < 1e4)(o = Array.from(i)).unshift(t, n), r.apply(e, o);
                else
                    for (n && r.apply(e, [t, n]); l < i.length;)(o = i.slice(l, l + 1e4)).unshift(t, 0), r.apply(e, o), l += 1e4, t += 1e4
            }
        },
        9095: function(e, t, n) {
            "use strict";
            var r = n(5008),
                i = n(6690),
                o = n(2937);
            e.exports = function(e) {
                return null === e || r(e) || o(e) ? 1 : i(e) ? 2 : void 0
            }
        },
        3250: function(e, t, n) {
            "use strict";
            var r = n(4149),
                i = n(7331),
                o = n(9667);

            function u(e, t) {
                var n, i, u, a;
                for (n in t)
                    for (a in i = r.call(e, n) ? e[n] : e[n] = {}, u = t[n]) i[a] = l(o(u[a]), r.call(i, a) ? i[a] : [])
            }

            function l(e, t) {
                for (var n = -1, r = []; ++n < e.length;)("after" === e[n].add ? t : r).push(e[n]);
                return i(t, 0, 0, r), t
            }
            e.exports = function(e) {
                for (var t = {}, n = -1; ++n < e.length;) u(t, e[n]);
                return t
            }
        },
        49: function(e, t, n) {
            "use strict";
            var r = n(2282),
                i = n(7386),
                o = n(2999),
                u = n(7331),
                l = n(9667),
                a = n(1928),
                s = n(7999),
                c = n(1545),
                f = n(1239);
            e.exports = function(e, t, n) {
                var p = n ? c(n) : {
                        line: 1,
                        column: 1,
                        offset: 0
                    },
                    d = {},
                    h = [],
                    m = [],
                    v = [],
                    g = {
                        consume: function(e) {
                            i(e) ? (p.line++, p.column = 1, p.offset += -3 === e ? 2 : 1, C()) : -1 !== e && (p.column++, p.offset++);
                            p._bufferIndex < 0 ? p._index++ : (p._bufferIndex++, p._bufferIndex === m[p._index].length && (p._bufferIndex = -1, p._index++));
                            y.previous = e
                        },
                        enter: function(e, t) {
                            var n = t || {};
                            return n.type = e, n.start = w(), y.events.push(["enter", n, y]), v.push(n), n
                        },
                        exit: function(e) {
                            var t = v.pop();
                            return t.end = w(), y.events.push(["exit", t, y]), t
                        },
                        attempt: O((function(e, t) {
                            P(e, t.from)
                        })),
                        check: O(E),
                        interrupt: O(E, {
                            interrupt: !0
                        }),
                        lazy: O(E, {
                            lazy: !0
                        })
                    },
                    y = {
                        previous: null,
                        events: [],
                        parser: e,
                        sliceStream: x,
                        sliceSerialize: function(e) {
                            return s(x(e))
                        },
                        now: w,
                        defineSkip: function(e) {
                            d[e.line] = e.column, C()
                        },
                        write: function(e) {
                            if (m = o(m, e), k(), null !== m[m.length - 1]) return [];
                            return P(t, 0), y.events = a(h, y.events, y), y.events
                        }
                    },
                    b = t.tokenize.call(y, g);
                return t.resolveAll && h.push(t), p._index = 0, p._bufferIndex = -1, y;

                function x(e) {
                    return f(m, e)
                }

                function w() {
                    return c(p)
                }

                function k() {
                    for (var e, t; p._index < m.length;)
                        if ("string" === typeof(t = m[p._index]))
                            for (e = p._index, p._bufferIndex < 0 && (p._bufferIndex = 0); p._index === e && p._bufferIndex < t.length;) S(t.charCodeAt(p._bufferIndex));
                        else S(t)
                }

                function S(e) {
                    b = b(e)
                }

                function E(e, t) {
                    t.restore()
                }

                function O(e, t) {
                    return function(n, i, o) {
                        var u, a, s, c;
                        return n.tokenize || "length" in n ? f(l(n)) : function(e) {
                            if (e in n || null in n) return f(n.null ? l(n[e]).concat(l(n.null)) : n[e])(e);
                            return o(e)
                        };

                        function f(e) {
                            return u = e, d(e[a = 0])
                        }

                        function d(e) {
                            return function(n) {
                                c = function() {
                                    var e = w(),
                                        t = y.previous,
                                        n = y.currentConstruct,
                                        r = y.events.length,
                                        i = Array.from(v);
                                    return {
                                        restore: o,
                                        from: r
                                    };

                                    function o() {
                                        p = e, y.previous = t, y.currentConstruct = n, y.events.length = r, v = i, C()
                                    }
                                }(), s = e, e.partial || (y.currentConstruct = e);
                                if (e.name && y.parser.constructs.disable.null.indexOf(e.name) > -1) return m();
                                return e.tokenize.call(t ? r({}, y, t) : y, g, h, m)(n)
                            }
                        }

                        function h(t) {
                            return e(s, c), i
                        }

                        function m(e) {
                            return c.restore(), ++a < u.length ? d(u[a]) : o
                        }
                    }
                }

                function P(e, t) {
                    e.resolveAll && h.indexOf(e) < 0 && h.push(e), e.resolve && u(y.events, t, y.events.length - t, e.resolve(y.events.slice(t), y)), e.resolveTo && (y.events = e.resolveTo(y.events, y))
                }

                function C() {
                    p.line in d && p.column < 2 && (p.column = d[p.line], p.offset += d[p.line] - 1)
                }
            }
        },
        9667: function(e) {
            "use strict";
            e.exports = function(e) {
                return null === e || void 0 === e ? [] : "length" in e ? e : [e]
            }
        },
        2425: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return e.column += t, e.offset += t, e._bufferIndex += t, e
            }
        },
        4432: function(e) {
            "use strict";
            e.exports = function(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
        },
        2110: function(e, t, n) {
            "use strict";
            var r = n(312);
            e.exports = function(e, t) {
                var n = e[e.length - 1];
                return n && n[1].type === t ? r(n[2].sliceStream(n[1])) : 0
            }
        },
        9006: function(e, t, n) {
            "use strict";
            var r = n(8280);
            e.exports = function(e) {
                return function(t) {
                    return e.test(r(t))
                }
            }
        },
        1928: function(e) {
            "use strict";
            e.exports = function(e, t, n) {
                for (var r, i = [], o = -1; ++o < e.length;)(r = e[o].resolveAll) && i.indexOf(r) < 0 && (t = r(t, n), i.push(r));
                return t
            }
        },
        3356: function(e, t, n) {
            "use strict";
            var r = n(8280);
            e.exports = function(e, t) {
                var n = parseInt(e, t);
                return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || 65535 === (65535 & n) || 65534 === (65535 & n) || n > 1114111 ? "\ufffd" : r(n)
            }
        },
        7999: function(e, t, n) {
            "use strict";
            var r = n(8280);
            e.exports = function(e) {
                for (var t, n, i, o = -1, u = []; ++o < e.length;) {
                    if ("string" === typeof(t = e[o])) n = t;
                    else if (-5 === t) n = "\r";
                    else if (-4 === t) n = "\n";
                    else if (-3 === t) n = "\r\n";
                    else if (-2 === t) n = "\t";
                    else if (-1 === t) {
                        if (i) continue;
                        n = " "
                    } else n = r(t);
                    i = -2 === t, u.push(n)
                }
                return u.join("")
            }
        },
        1545: function(e, t, n) {
            "use strict";
            var r = n(2282);
            e.exports = function(e) {
                return r({}, e)
            }
        },
        312: function(e) {
            "use strict";
            e.exports = function(e) {
                for (var t = -1, n = 0; ++t < e.length;) n += "string" === typeof e[t] ? e[t].length : 1;
                return n
            }
        },
        1239: function(e) {
            "use strict";
            e.exports = function(e, t) {
                var n, r = t.start._index,
                    i = t.start._bufferIndex,
                    o = t.end._index,
                    u = t.end._bufferIndex;
                return r === o ? n = [e[r].slice(i, u)] : (n = e.slice(r, o), i > -1 && (n[0] = n[0].slice(i)), u > 0 && n.push(e[o].slice(0, u))), n
            }
        },
        6206: function(e, t, n) {
            "use strict";
            var r = n(2282),
                i = n(7331),
                o = n(1545);

            function u(e, t) {
                for (var n, r, o, u, l, a, s = e[t][1], c = e[t][2], f = t - 1, p = [], d = s._tokenizer || c.parser[s.contentType](s.start), h = d.events, m = [], v = {}; s;) {
                    for (; e[++f][1] !== s;);
                    p.push(f), s._tokenizer || (n = c.sliceStream(s), s.next || n.push(null), r && d.defineSkip(s.start), s.isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0), d.write(n), s.isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), r = s, s = s.next
                }
                for (s = r, o = h.length; o--;) "enter" === h[o][0] ? u = !0 : u && h[o][1].type === h[o - 1][1].type && h[o][1].start.line !== h[o][1].end.line && (g(h.slice(o + 1, l)), s._tokenizer = s.next = void 0, s = s.previous, l = o + 1);
                for (d.events = s._tokenizer = s.next = void 0, g(h.slice(0, l)), o = -1, a = 0; ++o < m.length;) v[a + m[o][0]] = a + m[o][1], a += m[o][1] - m[o][0] - 1;
                return v;

                function g(t) {
                    var n = p.pop();
                    m.unshift([n, n + t.length - 1]), i(e, n, 2, t)
                }
            }
            e.exports = function(e) {
                for (var t, n, l, a, s, c, f, p = {}, d = -1; ++d < e.length;) {
                    for (; d in p;) d = p[d];
                    if (t = e[d], d && "chunkFlow" === t[1].type && "listItemPrefix" === e[d - 1][1].type && ((l = 0) < (c = t[1]._tokenizer.events).length && "lineEndingBlank" === c[l][1].type && (l += 2), l < c.length && "content" === c[l][1].type))
                        for (; ++l < c.length && "content" !== c[l][1].type;) "chunkText" === c[l][1].type && (c[l][1].isInFirstContentOfListItem = !0, l++);
                    if ("enter" === t[0]) t[1].contentType && (r(p, u(e, d)), d = p[d], f = !0);
                    else if (t[1]._container || t[1]._movePreviousLineEndings) {
                        for (l = d, n = void 0; l-- && ("lineEnding" === (a = e[l])[1].type || "lineEndingBlank" === a[1].type);) "enter" === a[0] && (n && (e[n][1].type = "lineEndingBlank"), a[1].type = "lineEnding", n = l);
                        n && (t[1].end = o(e[n][1].start), (s = e.slice(n, d)).unshift(t), i(e, n, d - n + 1, s))
                    }
                }
                return !f
            }
        },
        1769: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.imageConfigDefault = t.VALID_LOADERS = void 0;
            t.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai", "custom"];
            t.imageConfigDefault = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                domains: [],
                disableStaticImages: !1,
                minimumCacheTTL: 60
            }
        },
        3036: function(e, t, n) {
            e.exports = n(5398)
        },
        3088: function(e, t, n) {
            e.exports = n(5789)
        },
        5588: function(e, t, n) {
            e.exports = n(7613)
        },
        2816: function(e, t, n) {
            e.exports = n(3221)
        },
        6141: function(e) {
            "use strict";
            var t;
            e.exports = function(e) {
                var n, r = "&" + e + ";";
                if ((t = t || document.createElement("i")).innerHTML = r, 59 === (n = t.textContent).charCodeAt(n.length - 1) && "semi" !== e) return !1;
                return n !== r && n
            }
        },
        5786: function(e, t, n) {
            "use strict";
            var r = n(1430),
                i = n(7850),
                o = n(265),
                u = "data";
            e.exports = function(e, t) {
                var n = r(t),
                    p = t,
                    d = o;
                if (n in e.normal) return e.property[e.normal[n]];
                n.length > 4 && n.slice(0, 4) === u && l.test(t) && ("-" === t.charAt(4) ? p = function(e) {
                    var t = e.slice(5).replace(a, f);
                    return u + t.charAt(0).toUpperCase() + t.slice(1)
                }(t) : t = function(e) {
                    var t = e.slice(4);
                    if (a.test(t)) return e;
                    "-" !== (t = t.replace(s, c)).charAt(0) && (t = "-" + t);
                    return u + t
                }(t), d = i);
                return new d(p, t)
            };
            var l = /^data[-\w.:]+$/i,
                a = /-[a-z]/g,
                s = /[A-Z]/g;

            function c(e) {
                return "-" + e.toLowerCase()
            }

            function f(e) {
                return e.charAt(1).toUpperCase()
            }
        },
        1819: function(e, t, n) {
            "use strict";
            var r = n(3680),
                i = n(1120),
                o = n(2612),
                u = n(2883),
                l = n(2450),
                a = n(4011);
            e.exports = r([o, i, u, l, a])
        },
        2450: function(e, t, n) {
            "use strict";
            var r = n(520),
                i = n(7796),
                o = r.booleanish,
                u = r.number,
                l = r.spaceSeparated;
            e.exports = i({
                transform: function(e, t) {
                    return "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
                },
                properties: {
                    ariaActiveDescendant: null,
                    ariaAtomic: o,
                    ariaAutoComplete: null,
                    ariaBusy: o,
                    ariaChecked: o,
                    ariaColCount: u,
                    ariaColIndex: u,
                    ariaColSpan: u,
                    ariaControls: l,
                    ariaCurrent: null,
                    ariaDescribedBy: l,
                    ariaDetails: null,
                    ariaDisabled: o,
                    ariaDropEffect: l,
                    ariaErrorMessage: null,
                    ariaExpanded: o,
                    ariaFlowTo: l,
                    ariaGrabbed: o,
                    ariaHasPopup: null,
                    ariaHidden: o,
                    ariaInvalid: null,
                    ariaKeyShortcuts: null,
                    ariaLabel: null,
                    ariaLabelledBy: l,
                    ariaLevel: u,
                    ariaLive: null,
                    ariaModal: o,
                    ariaMultiLine: o,
                    ariaMultiSelectable: o,
                    ariaOrientation: null,
                    ariaOwns: l,
                    ariaPlaceholder: null,
                    ariaPosInSet: u,
                    ariaPressed: o,
                    ariaReadOnly: o,
                    ariaRelevant: null,
                    ariaRequired: o,
                    ariaRoleDescription: l,
                    ariaRowCount: u,
                    ariaRowIndex: u,
                    ariaRowSpan: u,
                    ariaSelected: o,
                    ariaSetSize: u,
                    ariaSort: null,
                    ariaValueMax: u,
                    ariaValueMin: u,
                    ariaValueNow: u,
                    ariaValueText: null,
                    role: null
                }
            })
        },
        4011: function(e, t, n) {
            "use strict";
            var r = n(520),
                i = n(7796),
                o = n(2586),
                u = r.boolean,
                l = r.overloadedBoolean,
                a = r.booleanish,
                s = r.number,
                c = r.spaceSeparated,
                f = r.commaSeparated;
            e.exports = i({
                space: "html",
                attributes: {
                    acceptcharset: "accept-charset",
                    classname: "class",
                    htmlfor: "for",
                    httpequiv: "http-equiv"
                },
                transform: o,
                mustUseProperty: ["checked", "multiple", "muted", "selected"],
                properties: {
                    abbr: null,
                    accept: f,
                    acceptCharset: c,
                    accessKey: c,
                    action: null,
                    allow: null,
                    allowFullScreen: u,
                    allowPaymentRequest: u,
                    allowUserMedia: u,
                    alt: null,
                    as: null,
                    async: u,
                    autoCapitalize: null,
                    autoComplete: c,
                    autoFocus: u,
                    autoPlay: u,
                    capture: u,
                    charSet: null,
                    checked: u,
                    cite: null,
                    className: c,
                    cols: s,
                    colSpan: null,
                    content: null,
                    contentEditable: a,
                    controls: u,
                    controlsList: c,
                    coords: s | f,
                    crossOrigin: null,
                    data: null,
                    dateTime: null,
                    decoding: null,
                    default: u,
                    defer: u,
                    dir: null,
                    dirName: null,
                    disabled: u,
                    download: l,
                    draggable: a,
                    encType: null,
                    enterKeyHint: null,
                    form: null,
                    formAction: null,
                    formEncType: null,
                    formMethod: null,
                    formNoValidate: u,
                    formTarget: null,
                    headers: c,
                    height: s,
                    hidden: u,
                    high: s,
                    href: null,
                    hrefLang: null,
                    htmlFor: c,
                    httpEquiv: c,
                    id: null,
                    imageSizes: null,
                    imageSrcSet: f,
                    inputMode: null,
                    integrity: null,
                    is: null,
                    isMap: u,
                    itemId: null,
                    itemProp: c,
                    itemRef: c,
                    itemScope: u,
                    itemType: c,
                    kind: null,
                    label: null,
                    lang: null,
                    language: null,
                    list: null,
                    loading: null,
                    loop: u,
                    low: s,
                    manifest: null,
                    max: null,
                    maxLength: s,
                    media: null,
                    method: null,
                    min: null,
                    minLength: s,
                    multiple: u,
                    muted: u,
                    name: null,
                    nonce: null,
                    noModule: u,
                    noValidate: u,
                    onAbort: null,
                    onAfterPrint: null,
                    onAuxClick: null,
                    onBeforePrint: null,
                    onBeforeUnload: null,
                    onBlur: null,
                    onCancel: null,
                    onCanPlay: null,
                    onCanPlayThrough: null,
                    onChange: null,
                    onClick: null,
                    onClose: null,
                    onContextMenu: null,
                    onCopy: null,
                    onCueChange: null,
                    onCut: null,
                    onDblClick: null,
                    onDrag: null,
                    onDragEnd: null,
                    onDragEnter: null,
                    onDragExit: null,
                    onDragLeave: null,
                    onDragOver: null,
                    onDragStart: null,
                    onDrop: null,
                    onDurationChange: null,
                    onEmptied: null,
                    onEnded: null,
                    onError: null,
                    onFocus: null,
                    onFormData: null,
                    onHashChange: null,
                    onInput: null,
                    onInvalid: null,
                    onKeyDown: null,
                    onKeyPress: null,
                    onKeyUp: null,
                    onLanguageChange: null,
                    onLoad: null,
                    onLoadedData: null,
                    onLoadedMetadata: null,
                    onLoadEnd: null,
                    onLoadStart: null,
                    onMessage: null,
                    onMessageError: null,
                    onMouseDown: null,
                    onMouseEnter: null,
                    onMouseLeave: null,
                    onMouseMove: null,
                    onMouseOut: null,
                    onMouseOver: null,
                    onMouseUp: null,
                    onOffline: null,
                    onOnline: null,
                    onPageHide: null,
                    onPageShow: null,
                    onPaste: null,
                    onPause: null,
                    onPlay: null,
                    onPlaying: null,
                    onPopState: null,
                    onProgress: null,
                    onRateChange: null,
                    onRejectionHandled: null,
                    onReset: null,
                    onResize: null,
                    onScroll: null,
                    onSecurityPolicyViolation: null,
                    onSeeked: null,
                    onSeeking: null,
                    onSelect: null,
                    onSlotChange: null,
                    onStalled: null,
                    onStorage: null,
                    onSubmit: null,
                    onSuspend: null,
                    onTimeUpdate: null,
                    onToggle: null,
                    onUnhandledRejection: null,
                    onUnload: null,
                    onVolumeChange: null,
                    onWaiting: null,
                    onWheel: null,
                    open: u,
                    optimum: s,
                    pattern: null,
                    ping: c,
                    placeholder: null,
                    playsInline: u,
                    poster: null,
                    preload: null,
                    readOnly: u,
                    referrerPolicy: null,
                    rel: c,
                    required: u,
                    reversed: u,
                    rows: s,
                    rowSpan: s,
                    sandbox: c,
                    scope: null,
                    scoped: u,
                    seamless: u,
                    selected: u,
                    shape: null,
                    size: s,
                    sizes: null,
                    slot: null,
                    span: s,
                    spellCheck: a,
                    src: null,
                    srcDoc: null,
                    srcLang: null,
                    srcSet: f,
                    start: s,
                    step: null,
                    style: null,
                    tabIndex: s,
                    target: null,
                    title: null,
                    translate: null,
                    type: null,
                    typeMustMatch: u,
                    useMap: null,
                    value: a,
                    width: s,
                    wrap: null,
                    align: null,
                    aLink: null,
                    archive: c,
                    axis: null,
                    background: null,
                    bgColor: null,
                    border: s,
                    borderColor: null,
                    bottomMargin: s,
                    cellPadding: null,
                    cellSpacing: null,
                    char: null,
                    charOff: null,
                    classId: null,
                    clear: null,
                    code: null,
                    codeBase: null,
                    codeType: null,
                    color: null,
                    compact: u,
                    declare: u,
                    event: null,
                    face: null,
                    frame: null,
                    frameBorder: null,
                    hSpace: s,
                    leftMargin: s,
                    link: null,
                    longDesc: null,
                    lowSrc: null,
                    marginHeight: s,
                    marginWidth: s,
                    noResize: u,
                    noHref: u,
                    noShade: u,
                    noWrap: u,
                    object: null,
                    profile: null,
                    prompt: null,
                    rev: null,
                    rightMargin: s,
                    rules: null,
                    scheme: null,
                    scrolling: a,
                    standby: null,
                    summary: null,
                    text: null,
                    topMargin: s,
                    valueType: null,
                    version: null,
                    vAlign: null,
                    vLink: null,
                    vSpace: s,
                    allowTransparency: null,
                    autoCorrect: null,
                    autoSave: null,
                    disablePictureInPicture: u,
                    disableRemotePlayback: u,
                    prefix: null,
                    property: null,
                    results: s,
                    security: null,
                    unselectable: null
                }
            })
        },
        6308: function(e, t, n) {
            "use strict";
            var r = n(520),
                i = n(7796),
                o = n(4653),
                u = r.boolean,
                l = r.number,
                a = r.spaceSeparated,
                s = r.commaSeparated,
                c = r.commaOrSpaceSeparated;
            e.exports = i({
                space: "svg",
                attributes: {
                    accentHeight: "accent-height",
                    alignmentBaseline: "alignment-baseline",
                    arabicForm: "arabic-form",
                    baselineShift: "baseline-shift",
                    capHeight: "cap-height",
                    className: "class",
                    clipPath: "clip-path",
                    clipRule: "clip-rule",
                    colorInterpolation: "color-interpolation",
                    colorInterpolationFilters: "color-interpolation-filters",
                    colorProfile: "color-profile",
                    colorRendering: "color-rendering",
                    crossOrigin: "crossorigin",
                    dataType: "datatype",
                    dominantBaseline: "dominant-baseline",
                    enableBackground: "enable-background",
                    fillOpacity: "fill-opacity",
                    fillRule: "fill-rule",
                    floodColor: "flood-color",
                    floodOpacity: "flood-opacity",
                    fontFamily: "font-family",
                    fontSize: "font-size",
                    fontSizeAdjust: "font-size-adjust",
                    fontStretch: "font-stretch",
                    fontStyle: "font-style",
                    fontVariant: "font-variant",
                    fontWeight: "font-weight",
                    glyphName: "glyph-name",
                    glyphOrientationHorizontal: "glyph-orientation-horizontal",
                    glyphOrientationVertical: "glyph-orientation-vertical",
                    hrefLang: "hreflang",
                    horizAdvX: "horiz-adv-x",
                    horizOriginX: "horiz-origin-x",
                    horizOriginY: "horiz-origin-y",
                    imageRendering: "image-rendering",
                    letterSpacing: "letter-spacing",
                    lightingColor: "lighting-color",
                    markerEnd: "marker-end",
                    markerMid: "marker-mid",
                    markerStart: "marker-start",
                    navDown: "nav-down",
                    navDownLeft: "nav-down-left",
                    navDownRight: "nav-down-right",
                    navLeft: "nav-left",
                    navNext: "nav-next",
                    navPrev: "nav-prev",
                    navRight: "nav-right",
                    navUp: "nav-up",
                    navUpLeft: "nav-up-left",
                    navUpRight: "nav-up-right",
                    onAbort: "onabort",
                    onActivate: "onactivate",
                    onAfterPrint: "onafterprint",
                    onBeforePrint: "onbeforeprint",
                    onBegin: "onbegin",
                    onCancel: "oncancel",
                    onCanPlay: "oncanplay",
                    onCanPlayThrough: "oncanplaythrough",
                    onChange: "onchange",
                    onClick: "onclick",
                    onClose: "onclose",
                    onCopy: "oncopy",
                    onCueChange: "oncuechange",
                    onCut: "oncut",
                    onDblClick: "ondblclick",
                    onDrag: "ondrag",
                    onDragEnd: "ondragend",
                    onDragEnter: "ondragenter",
                    onDragExit: "ondragexit",
                    onDragLeave: "ondragleave",
                    onDragOver: "ondragover",
                    onDragStart: "ondragstart",
                    onDrop: "ondrop",
                    onDurationChange: "ondurationchange",
                    onEmptied: "onemptied",
                    onEnd: "onend",
                    onEnded: "onended",
                    onError: "onerror",
                    onFocus: "onfocus",
                    onFocusIn: "onfocusin",
                    onFocusOut: "onfocusout",
                    onHashChange: "onhashchange",
                    onInput: "oninput",
                    onInvalid: "oninvalid",
                    onKeyDown: "onkeydown",
                    onKeyPress: "onkeypress",
                    onKeyUp: "onkeyup",
                    onLoad: "onload",
                    onLoadedData: "onloadeddata",
                    onLoadedMetadata: "onloadedmetadata",
                    onLoadStart: "onloadstart",
                    onMessage: "onmessage",
                    onMouseDown: "onmousedown",
                    onMouseEnter: "onmouseenter",
                    onMouseLeave: "onmouseleave",
                    onMouseMove: "onmousemove",
                    onMouseOut: "onmouseout",
                    onMouseOver: "onmouseover",
                    onMouseUp: "onmouseup",
                    onMouseWheel: "onmousewheel",
                    onOffline: "onoffline",
                    onOnline: "ononline",
                    onPageHide: "onpagehide",
                    onPageShow: "onpageshow",
                    onPaste: "onpaste",
                    onPause: "onpause",
                    onPlay: "onplay",
                    onPlaying: "onplaying",
                    onPopState: "onpopstate",
                    onProgress: "onprogress",
                    onRateChange: "onratechange",
                    onRepeat: "onrepeat",
                    onReset: "onreset",
                    onResize: "onresize",
                    onScroll: "onscroll",
                    onSeeked: "onseeked",
                    onSeeking: "onseeking",
                    onSelect: "onselect",
                    onShow: "onshow",
                    onStalled: "onstalled",
                    onStorage: "onstorage",
                    onSubmit: "onsubmit",
                    onSuspend: "onsuspend",
                    onTimeUpdate: "ontimeupdate",
                    onToggle: "ontoggle",
                    onUnload: "onunload",
                    onVolumeChange: "onvolumechange",
                    onWaiting: "onwaiting",
                    onZoom: "onzoom",
                    overlinePosition: "overline-position",
                    overlineThickness: "overline-thickness",
                    paintOrder: "paint-order",
                    panose1: "panose-1",
                    pointerEvents: "pointer-events",
                    referrerPolicy: "referrerpolicy",
                    renderingIntent: "rendering-intent",
                    shapeRendering: "shape-rendering",
                    stopColor: "stop-color",
                    stopOpacity: "stop-opacity",
                    strikethroughPosition: "strikethrough-position",
                    strikethroughThickness: "strikethrough-thickness",
                    strokeDashArray: "stroke-dasharray",
                    strokeDashOffset: "stroke-dashoffset",
                    strokeLineCap: "stroke-linecap",
                    strokeLineJoin: "stroke-linejoin",
                    strokeMiterLimit: "stroke-miterlimit",
                    strokeOpacity: "stroke-opacity",
                    strokeWidth: "stroke-width",
                    tabIndex: "tabindex",
                    textAnchor: "text-anchor",
                    textDecoration: "text-decoration",
                    textRendering: "text-rendering",
                    typeOf: "typeof",
                    underlinePosition: "underline-position",
                    underlineThickness: "underline-thickness",
                    unicodeBidi: "unicode-bidi",
                    unicodeRange: "unicode-range",
                    unitsPerEm: "units-per-em",
                    vAlphabetic: "v-alphabetic",
                    vHanging: "v-hanging",
                    vIdeographic: "v-ideographic",
                    vMathematical: "v-mathematical",
                    vectorEffect: "vector-effect",
                    vertAdvY: "vert-adv-y",
                    vertOriginX: "vert-origin-x",
                    vertOriginY: "vert-origin-y",
                    wordSpacing: "word-spacing",
                    writingMode: "writing-mode",
                    xHeight: "x-height",
                    playbackOrder: "playbackorder",
                    timelineBegin: "timelinebegin"
                },
                transform: o,
                properties: {
                    about: c,
                    accentHeight: l,
                    accumulate: null,
                    additive: null,
                    alignmentBaseline: null,
                    alphabetic: l,
                    amplitude: l,
                    arabicForm: null,
                    ascent: l,
                    attributeName: null,
                    attributeType: null,
                    azimuth: l,
                    bandwidth: null,
                    baselineShift: null,
                    baseFrequency: null,
                    baseProfile: null,
                    bbox: null,
                    begin: null,
                    bias: l,
                    by: null,
                    calcMode: null,
                    capHeight: l,
                    className: a,
                    clip: null,
                    clipPath: null,
                    clipPathUnits: null,
                    clipRule: null,
                    color: null,
                    colorInterpolation: null,
                    colorInterpolationFilters: null,
                    colorProfile: null,
                    colorRendering: null,
                    content: null,
                    contentScriptType: null,
                    contentStyleType: null,
                    crossOrigin: null,
                    cursor: null,
                    cx: null,
                    cy: null,
                    d: null,
                    dataType: null,
                    defaultAction: null,
                    descent: l,
                    diffuseConstant: l,
                    direction: null,
                    display: null,
                    dur: null,
                    divisor: l,
                    dominantBaseline: null,
                    download: u,
                    dx: null,
                    dy: null,
                    edgeMode: null,
                    editable: null,
                    elevation: l,
                    enableBackground: null,
                    end: null,
                    event: null,
                    exponent: l,
                    externalResourcesRequired: null,
                    fill: null,
                    fillOpacity: l,
                    fillRule: null,
                    filter: null,
                    filterRes: null,
                    filterUnits: null,
                    floodColor: null,
                    floodOpacity: null,
                    focusable: null,
                    focusHighlight: null,
                    fontFamily: null,
                    fontSize: null,
                    fontSizeAdjust: null,
                    fontStretch: null,
                    fontStyle: null,
                    fontVariant: null,
                    fontWeight: null,
                    format: null,
                    fr: null,
                    from: null,
                    fx: null,
                    fy: null,
                    g1: s,
                    g2: s,
                    glyphName: s,
                    glyphOrientationHorizontal: null,
                    glyphOrientationVertical: null,
                    glyphRef: null,
                    gradientTransform: null,
                    gradientUnits: null,
                    handler: null,
                    hanging: l,
                    hatchContentUnits: null,
                    hatchUnits: null,
                    height: null,
                    href: null,
                    hrefLang: null,
                    horizAdvX: l,
                    horizOriginX: l,
                    horizOriginY: l,
                    id: null,
                    ideographic: l,
                    imageRendering: null,
                    initialVisibility: null,
                    in: null,
                    in2: null,
                    intercept: l,
                    k: l,
                    k1: l,
                    k2: l,
                    k3: l,
                    k4: l,
                    kernelMatrix: c,
                    kernelUnitLength: null,
                    keyPoints: null,
                    keySplines: null,
                    keyTimes: null,
                    kerning: null,
                    lang: null,
                    lengthAdjust: null,
                    letterSpacing: null,
                    lightingColor: null,
                    limitingConeAngle: l,
                    local: null,
                    markerEnd: null,
                    markerMid: null,
                    markerStart: null,
                    markerHeight: null,
                    markerUnits: null,
                    markerWidth: null,
                    mask: null,
                    maskContentUnits: null,
                    maskUnits: null,
                    mathematical: null,
                    max: null,
                    media: null,
                    mediaCharacterEncoding: null,
                    mediaContentEncodings: null,
                    mediaSize: l,
                    mediaTime: null,
                    method: null,
                    min: null,
                    mode: null,
                    name: null,
                    navDown: null,
                    navDownLeft: null,
                    navDownRight: null,
                    navLeft: null,
                    navNext: null,
                    navPrev: null,
                    navRight: null,
                    navUp: null,
                    navUpLeft: null,
                    navUpRight: null,
                    numOctaves: null,
                    observer: null,
                    offset: null,
                    onAbort: null,
                    onActivate: null,
                    onAfterPrint: null,
                    onBeforePrint: null,
                    onBegin: null,
                    onCancel: null,
                    onCanPlay: null,
                    onCanPlayThrough: null,
                    onChange: null,
                    onClick: null,
                    onClose: null,
                    onCopy: null,
                    onCueChange: null,
                    onCut: null,
                    onDblClick: null,
                    onDrag: null,
                    onDragEnd: null,
                    onDragEnter: null,
                    onDragExit: null,
                    onDragLeave: null,
                    onDragOver: null,
                    onDragStart: null,
                    onDrop: null,
                    onDurationChange: null,
                    onEmptied: null,
                    onEnd: null,
                    onEnded: null,
                    onError: null,
                    onFocus: null,
                    onFocusIn: null,
                    onFocusOut: null,
                    onHashChange: null,
                    onInput: null,
                    onInvalid: null,
                    onKeyDown: null,
                    onKeyPress: null,
                    onKeyUp: null,
                    onLoad: null,
                    onLoadedData: null,
                    onLoadedMetadata: null,
                    onLoadStart: null,
                    onMessage: null,
                    onMouseDown: null,
                    onMouseEnter: null,
                    onMouseLeave: null,
                    onMouseMove: null,
                    onMouseOut: null,
                    onMouseOver: null,
                    onMouseUp: null,
                    onMouseWheel: null,
                    onOffline: null,
                    onOnline: null,
                    onPageHide: null,
                    onPageShow: null,
                    onPaste: null,
                    onPause: null,
                    onPlay: null,
                    onPlaying: null,
                    onPopState: null,
                    onProgress: null,
                    onRateChange: null,
                    onRepeat: null,
                    onReset: null,
                    onResize: null,
                    onScroll: null,
                    onSeeked: null,
                    onSeeking: null,
                    onSelect: null,
                    onShow: null,
                    onStalled: null,
                    onStorage: null,
                    onSubmit: null,
                    onSuspend: null,
                    onTimeUpdate: null,
                    onToggle: null,
                    onUnload: null,
                    onVolumeChange: null,
                    onWaiting: null,
                    onZoom: null,
                    opacity: null,
                    operator: null,
                    order: null,
                    orient: null,
                    orientation: null,
                    origin: null,
                    overflow: null,
                    overlay: null,
                    overlinePosition: l,
                    overlineThickness: l,
                    paintOrder: null,
                    panose1: null,
                    path: null,
                    pathLength: l,
                    patternContentUnits: null,
                    patternTransform: null,
                    patternUnits: null,
                    phase: null,
                    ping: a,
                    pitch: null,
                    playbackOrder: null,
                    pointerEvents: null,
                    points: null,
                    pointsAtX: l,
                    pointsAtY: l,
                    pointsAtZ: l,
                    preserveAlpha: null,
                    preserveAspectRatio: null,
                    primitiveUnits: null,
                    propagate: null,
                    property: c,
                    r: null,
                    radius: null,
                    referrerPolicy: null,
                    refX: null,
                    refY: null,
                    rel: c,
                    rev: c,
                    renderingIntent: null,
                    repeatCount: null,
                    repeatDur: null,
                    requiredExtensions: c,
                    requiredFeatures: c,
                    requiredFonts: c,
                    requiredFormats: c,
                    resource: null,
                    restart: null,
                    result: null,
                    rotate: null,
                    rx: null,
                    ry: null,
                    scale: null,
                    seed: null,
                    shapeRendering: null,
                    side: null,
                    slope: null,
                    snapshotTime: null,
                    specularConstant: l,
                    specularExponent: l,
                    spreadMethod: null,
                    spacing: null,
                    startOffset: null,
                    stdDeviation: null,
                    stemh: null,
                    stemv: null,
                    stitchTiles: null,
                    stopColor: null,
                    stopOpacity: null,
                    strikethroughPosition: l,
                    strikethroughThickness: l,
                    string: null,
                    stroke: null,
                    strokeDashArray: c,
                    strokeDashOffset: null,
                    strokeLineCap: null,
                    strokeLineJoin: null,
                    strokeMiterLimit: l,
                    strokeOpacity: l,
                    strokeWidth: null,
                    style: null,
                    surfaceScale: l,
                    syncBehavior: null,
                    syncBehaviorDefault: null,
                    syncMaster: null,
                    syncTolerance: null,
                    syncToleranceDefault: null,
                    systemLanguage: c,
                    tabIndex: l,
                    tableValues: null,
                    target: null,
                    targetX: l,
                    targetY: l,
                    textAnchor: null,
                    textDecoration: null,
                    textRendering: null,
                    textLength: null,
                    timelineBegin: null,
                    title: null,
                    transformBehavior: null,
                    type: null,
                    typeOf: c,
                    to: null,
                    transform: null,
                    u1: null,
                    u2: null,
                    underlinePosition: l,
                    underlineThickness: l,
                    unicode: null,
                    unicodeBidi: null,
                    unicodeRange: null,
                    unitsPerEm: l,
                    values: null,
                    vAlphabetic: l,
                    vMathematical: l,
                    vectorEffect: null,
                    vHanging: l,
                    vIdeographic: l,
                    version: null,
                    vertAdvY: l,
                    vertOriginX: l,
                    vertOriginY: l,
                    viewBox: null,
                    viewTarget: null,
                    visibility: null,
                    width: null,
                    widths: null,
                    wordSpacing: null,
                    writingMode: null,
                    x: null,
                    x1: null,
                    x2: null,
                    xChannelSelector: null,
                    xHeight: l,
                    y: null,
                    y1: null,
                    y2: null,
                    yChannelSelector: null,
                    z: null,
                    zoomAndPan: null
                }
            })
        },
        2586: function(e, t, n) {
            "use strict";
            var r = n(4653);
            e.exports = function(e, t) {
                return r(e, t.toLowerCase())
            }
        },
        4653: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return t in e ? e[t] : t
            }
        },
        7796: function(e, t, n) {
            "use strict";
            var r = n(1430),
                i = n(9088),
                o = n(7850);
            e.exports = function(e) {
                var t, n, u = e.space,
                    l = e.mustUseProperty || [],
                    a = e.attributes || {},
                    s = e.properties,
                    c = e.transform,
                    f = {},
                    p = {};
                for (t in s) n = new o(t, c(a, t), s[t], u), -1 !== l.indexOf(t) && (n.mustUseProperty = !0), f[t] = n, p[r(t)] = t, p[r(n.attribute)] = t;
                return new i(f, p, u)
            }
        },
        7850: function(e, t, n) {
            "use strict";
            var r = n(265),
                i = n(520);
            e.exports = l, l.prototype = new r, l.prototype.defined = !0;
            var o = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"],
                u = o.length;

            function l(e, t, n, l) {
                var s, c = -1;
                for (a(this, "space", l), r.call(this, e, t); ++c < u;) a(this, s = o[c], (n & i[s]) === i[s])
            }

            function a(e, t, n) {
                n && (e[t] = n)
            }
        },
        265: function(e) {
            "use strict";
            e.exports = n;
            var t = n.prototype;

            function n(e, t) {
                this.property = e, this.attribute = t
            }
            t.space = null, t.attribute = null, t.property = null, t.boolean = !1, t.booleanish = !1, t.overloadedBoolean = !1, t.number = !1, t.commaSeparated = !1, t.spaceSeparated = !1, t.commaOrSpaceSeparated = !1, t.mustUseProperty = !1, t.defined = !1
        },
        3680: function(e, t, n) {
            "use strict";
            var r = n(3408),
                i = n(9088);
            e.exports = function(e) {
                var t, n, o = e.length,
                    u = [],
                    l = [],
                    a = -1;
                for (; ++a < o;) t = e[a], u.push(t.property), l.push(t.normal), n = t.space;
                return new i(r.apply(null, u), r.apply(null, l), n)
            }
        },
        9088: function(e) {
            "use strict";
            e.exports = n;
            var t = n.prototype;

            function n(e, t, n) {
                this.property = e, this.normal = t, n && (this.space = n)
            }
            t.space = null, t.normal = {}, t.property = {}
        },
        520: function(e, t) {
            "use strict";
            var n = 0;

            function r() {
                return Math.pow(2, ++n)
            }
            t.boolean = r(), t.booleanish = r(), t.overloadedBoolean = r(), t.number = r(), t.spaceSeparated = r(), t.commaSeparated = r(), t.commaOrSpaceSeparated = r()
        },
        1120: function(e, t, n) {
            "use strict";
            var r = n(7796);
            e.exports = r({
                space: "xlink",
                transform: function(e, t) {
                    return "xlink:" + t.slice(5).toLowerCase()
                },
                properties: {
                    xLinkActuate: null,
                    xLinkArcRole: null,
                    xLinkHref: null,
                    xLinkRole: null,
                    xLinkShow: null,
                    xLinkTitle: null,
                    xLinkType: null
                }
            })
        },
        2612: function(e, t, n) {
            "use strict";
            var r = n(7796);
            e.exports = r({
                space: "xml",
                transform: function(e, t) {
                    return "xml:" + t.slice(3).toLowerCase()
                },
                properties: {
                    xmlLang: null,
                    xmlBase: null,
                    xmlSpace: null
                }
            })
        },
        2883: function(e, t, n) {
            "use strict";
            var r = n(7796),
                i = n(2586);
            e.exports = r({
                space: "xmlns",
                attributes: {
                    xmlnsxlink: "xmlns:xlink"
                },
                transform: i,
                properties: {
                    xmlns: null,
                    xmlnsXLink: null
                }
            })
        },
        1430: function(e) {
            "use strict";
            e.exports = function(e) {
                return e.toLowerCase()
            }
        },
        3287: function(e, t, n) {
            "use strict";
            var r = n(3680),
                i = n(1120),
                o = n(2612),
                u = n(2883),
                l = n(2450),
                a = n(6308);
            e.exports = r([o, i, u, l, a])
        },
        3510: function(e, t, n) {
            var r, i, o;
            i = [t, n(8153)], void 0 === (o = "function" === typeof(r = function(e, t) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = r(t);

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                e.default = n.default
            }) ? r.apply(t, i) : r) || (e.exports = o)
        },
        8153: function(e, t, n) {
            var r, i, o;
            i = [t, n(2480), n(3467)], void 0 === (o = "function" === typeof(r = function(e, t, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.setHasSupportToCaptureOption = d;
                var r = o(t),
                    i = o(n);

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };

                function l(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                }

                function a(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();

                function c(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }

                function f(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }
                var p = !1;

                function d(e) {
                    p = e
                }
                try {
                    addEventListener("test", null, Object.defineProperty({}, "capture", {
                        get: function() {
                            d(!0)
                        }
                    }))
                } catch (g) {}

                function h() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        capture: !0
                    };
                    return p ? e : e.capture
                }

                function m(e) {
                    if ("touches" in e) {
                        var t = e.touches[0];
                        return {
                            x: t.pageX,
                            y: t.pageY
                        }
                    }
                    return {
                        x: e.screenX,
                        y: e.screenY
                    }
                }
                var v = function(e) {
                    function t() {
                        var e;
                        a(this, t);
                        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        var o = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r)));
                        return o._handleSwipeStart = o._handleSwipeStart.bind(o), o._handleSwipeMove = o._handleSwipeMove.bind(o), o._handleSwipeEnd = o._handleSwipeEnd.bind(o), o._onMouseDown = o._onMouseDown.bind(o), o._onMouseMove = o._onMouseMove.bind(o), o._onMouseUp = o._onMouseUp.bind(o), o._setSwiperRef = o._setSwiperRef.bind(o), o
                    }
                    return f(t, e), s(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, h({
                                capture: !0,
                                passive: !1
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, h({
                                capture: !0,
                                passive: !1
                            }))
                        }
                    }, {
                        key: "_onMouseDown",
                        value: function(e) {
                            this.props.allowMouseEvents && (this.mouseDown = !0, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(e))
                        }
                    }, {
                        key: "_onMouseMove",
                        value: function(e) {
                            this.mouseDown && this._handleSwipeMove(e)
                        }
                    }, {
                        key: "_onMouseUp",
                        value: function(e) {
                            this.mouseDown = !1, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(e)
                        }
                    }, {
                        key: "_handleSwipeStart",
                        value: function(e) {
                            var t = m(e),
                                n = t.x,
                                r = t.y;
                            this.moveStart = {
                                x: n,
                                y: r
                            }, this.props.onSwipeStart(e)
                        }
                    }, {
                        key: "_handleSwipeMove",
                        value: function(e) {
                            if (this.moveStart) {
                                var t = m(e),
                                    n = t.x,
                                    r = t.y,
                                    i = n - this.moveStart.x,
                                    o = r - this.moveStart.y;
                                this.moving = !0, this.props.onSwipeMove({
                                    x: i,
                                    y: o
                                }, e) && e.cancelable && e.preventDefault(), this.movePosition = {
                                    deltaX: i,
                                    deltaY: o
                                }
                            }
                        }
                    }, {
                        key: "_handleSwipeEnd",
                        value: function(e) {
                            this.props.onSwipeEnd(e);
                            var t = this.props.tolerance;
                            this.moving && this.movePosition && (this.movePosition.deltaX < -t ? this.props.onSwipeLeft(1, e) : this.movePosition.deltaX > t && this.props.onSwipeRight(1, e), this.movePosition.deltaY < -t ? this.props.onSwipeUp(1, e) : this.movePosition.deltaY > t && this.props.onSwipeDown(1, e)), this.moveStart = null, this.moving = !1, this.movePosition = null
                        }
                    }, {
                        key: "_setSwiperRef",
                        value: function(e) {
                            this.swiper = e, this.props.innerRef(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = (e.tagName, e.className),
                                n = e.style,
                                i = e.children,
                                o = (e.allowMouseEvents, e.onSwipeUp, e.onSwipeDown, e.onSwipeLeft, e.onSwipeRight, e.onSwipeStart, e.onSwipeMove, e.onSwipeEnd, e.innerRef, e.tolerance, l(e, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]));
                            return r.default.createElement(this.props.tagName, u({
                                ref: this._setSwiperRef,
                                onMouseDown: this._onMouseDown,
                                onTouchStart: this._handleSwipeStart,
                                onTouchEnd: this._handleSwipeEnd,
                                className: t,
                                style: n
                            }, o), i)
                        }
                    }]), t
                }(t.Component);
                v.displayName = "ReactSwipe", v.propTypes = {
                    tagName: i.default.string,
                    className: i.default.string,
                    style: i.default.object,
                    children: i.default.node,
                    allowMouseEvents: i.default.bool,
                    onSwipeUp: i.default.func,
                    onSwipeDown: i.default.func,
                    onSwipeLeft: i.default.func,
                    onSwipeRight: i.default.func,
                    onSwipeStart: i.default.func,
                    onSwipeMove: i.default.func,
                    onSwipeEnd: i.default.func,
                    innerRef: i.default.func,
                    tolerance: i.default.number.isRequired
                }, v.defaultProps = {
                    tagName: "div",
                    allowMouseEvents: !1,
                    onSwipeUp: function() {},
                    onSwipeDown: function() {},
                    onSwipeLeft: function() {},
                    onSwipeRight: function() {},
                    onSwipeStart: function() {},
                    onSwipeMove: function() {},
                    onSwipeEnd: function() {},
                    innerRef: function() {},
                    tolerance: 0
                }, e.default = v
            }) ? r.apply(t, i) : r) || (e.exports = o)
        },
        4580: function(e, t) {
            "use strict";
            var n = 60103,
                r = 60106,
                i = 60107,
                o = 60108,
                u = 60114,
                l = 60109,
                a = 60110,
                s = 60112,
                c = 60113,
                f = 60120,
                p = 60115,
                d = 60116,
                h = 60121,
                m = 60122,
                v = 60117,
                g = 60129,
                y = 60131;
            if ("function" === typeof Symbol && Symbol.for) {
                var b = Symbol.for;
                n = b("react.element"), r = b("react.portal"), i = b("react.fragment"), o = b("react.strict_mode"), u = b("react.profiler"), l = b("react.provider"), a = b("react.context"), s = b("react.forward_ref"), c = b("react.suspense"), f = b("react.suspense_list"), p = b("react.memo"), d = b("react.lazy"), h = b("react.block"), m = b("react.server.block"), v = b("react.fundamental"), g = b("react.debug_trace_mode"), y = b("react.legacy_hidden")
            }

            function x(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case i:
                                case u:
                                case o:
                                case c:
                                case f:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case a:
                                        case s:
                                        case d:
                                        case p:
                                        case l:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case r:
                            return t
                    }
                }
            }
            var w = l,
                k = n,
                S = s,
                E = i,
                O = d,
                P = p,
                C = r,
                T = u,
                I = o,
                A = c;
            t.ContextConsumer = a, t.ContextProvider = w, t.Element = k, t.ForwardRef = S, t.Fragment = E, t.Lazy = O, t.Memo = P, t.Portal = C, t.Profiler = T, t.StrictMode = I, t.Suspense = A, t.isAsyncMode = function() {
                return !1
            }, t.isConcurrentMode = function() {
                return !1
            }, t.isContextConsumer = function(e) {
                return x(e) === a
            }, t.isContextProvider = function(e) {
                return x(e) === l
            }, t.isElement = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }, t.isForwardRef = function(e) {
                return x(e) === s
            }, t.isFragment = function(e) {
                return x(e) === i
            }, t.isLazy = function(e) {
                return x(e) === d
            }, t.isMemo = function(e) {
                return x(e) === p
            }, t.isPortal = function(e) {
                return x(e) === r
            }, t.isProfiler = function(e) {
                return x(e) === u
            }, t.isStrictMode = function(e) {
                return x(e) === o
            }, t.isSuspense = function(e) {
                return x(e) === c
            }, t.isValidElementType = function(e) {
                return "string" === typeof e || "function" === typeof e || e === i || e === u || e === g || e === o || e === c || e === f || e === y || "object" === typeof e && null !== e && (e.$$typeof === d || e.$$typeof === p || e.$$typeof === l || e.$$typeof === a || e.$$typeof === s || e.$$typeof === v || e.$$typeof === h || e[0] === m)
            }, t.typeOf = x
        },
        9523: function(e, t, n) {
            "use strict";
            e.exports = n(4580)
        },
        3626: function(e) {
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        9137: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = this;
                this.Parser = function(n) {
                    return r(n, Object.assign({}, t.data("settings"), e, {
                        extensions: t.data("micromarkExtensions") || [],
                        mdastExtensions: t.data("fromMarkdownExtensions") || []
                    }))
                }
            };
            var r = n(580)
        },
        9219: function(e, t, n) {
            "use strict";
            var r = n(358),
                i = n(3626),
                o = n(2124),
                u = n(3508),
                l = n(6595),
                a = n(2758);
            e.exports = function e() {
                var t, n = [],
                    i = l(),
                    y = {},
                    b = -1;
                return x.data = function(e, n) {
                    if ("string" === typeof e) return 2 === arguments.length ? (m("data", t), y[e] = n, x) : c.call(y, e) && y[e] || null;
                    if (e) return m("data", t), y = e, x;
                    return y
                }, x.freeze = w, x.attachers = n, x.use = function(e) {
                    var r;
                    if (m("use", t), null === e || void 0 === e);
                    else if ("function" === typeof e) c.apply(null, arguments);
                    else {
                        if ("object" !== typeof e) throw new Error("Expected usable value, not `" + e + "`");
                        "length" in e ? a(e) : i(e)
                    }
                    r && (y.settings = o(y.settings || {}, r));
                    return x;

                    function i(e) {
                        a(e.plugins), e.settings && (r = o(r || {}, e.settings))
                    }

                    function l(e) {
                        if ("function" === typeof e) c(e);
                        else {
                            if ("object" !== typeof e) throw new Error("Expected usable value, not `" + e + "`");
                            "length" in e ? c.apply(null, e) : i(e)
                        }
                    }

                    function a(e) {
                        var t = -1;
                        if (null === e || void 0 === e);
                        else {
                            if ("object" !== typeof e || !("length" in e)) throw new Error("Expected a list of plugins, not `" + e + "`");
                            for (; ++t < e.length;) l(e[t])
                        }
                    }

                    function c(e, t) {
                        var r = k(e);
                        r ? (u(r[1]) && u(t) && (t = o(!0, r[1], t)), r[1] = t) : n.push(s.call(arguments))
                    }
                }, x.parse = function(e) {
                    var t, n = a(e);
                    if (w(), d("parse", t = x.Parser), p(t, "parse")) return new t(String(n), n).parse();
                    return t(String(n), n)
                }, x.stringify = function(e, t) {
                    var n, r = a(t);
                    if (w(), h("stringify", n = x.Compiler), v(e), p(n, "compile")) return new n(e, r).compile();
                    return n(e, r)
                }, x.run = S, x.runSync = function(e, t) {
                    var n, i;
                    return S(e, t, o), g("runSync", "run", i), n;

                    function o(e, t) {
                        i = !0, n = t, r(e)
                    }
                }, x.process = E, x.processSync = function(e) {
                    var t, n;
                    return w(), d("processSync", x.Parser), h("processSync", x.Compiler), E(t = a(e), i), g("processSync", "process", n), t;

                    function i(e) {
                        n = !0, r(e)
                    }
                }, x;

                function x() {
                    for (var t = e(), r = -1; ++r < n.length;) t.use.apply(null, n[r]);
                    return t.data(o(!0, {}, y)), t
                }

                function w() {
                    var e, r;
                    if (t) return x;
                    for (; ++b < n.length;) !1 !== (e = n[b])[1] && (!0 === e[1] && (e[1] = void 0), "function" === typeof(r = e[0].apply(x, e.slice(1))) && i.use(r));
                    return t = !0, b = 1 / 0, x
                }

                function k(e) {
                    for (var t = -1; ++t < n.length;)
                        if (n[t][0] === e) return n[t]
                }

                function S(e, t, n) {
                    if (v(e), w(), n || "function" !== typeof t || (n = t, t = null), !n) return new Promise(r);

                    function r(r, o) {
                        i.run(e, a(t), (function(t, i, u) {
                            i = i || e, t ? o(t) : r ? r(i) : n(null, i, u)
                        }))
                    }
                    r(null, n)
                }

                function E(e, t) {
                    if (w(), d("process", x.Parser), h("process", x.Compiler), !t) return new Promise(n);

                    function n(n, r) {
                        var i = a(e);
                        f.run(x, {
                            file: i
                        }, (function(e) {
                            e ? r(e) : n ? n(i) : t(null, i)
                        }))
                    }
                    n(null, t)
                }
            }().freeze();
            var s = [].slice,
                c = {}.hasOwnProperty,
                f = l().use((function(e, t) {
                    t.tree = e.parse(t.file)
                })).use((function(e, t, n) {
                    e.run(t.tree, t.file, (function(e, r, i) {
                        e ? n(e) : (t.tree = r, t.file = i, n())
                    }))
                })).use((function(e, t) {
                    var n = e.stringify(t.tree, t.file);
                    void 0 === n || null === n || ("string" === typeof n || i(n) ? ("value" in t.file && (t.file.value = n), t.file.contents = n) : t.file.result = n)
                }));

            function p(e, t) {
                return "function" === typeof e && e.prototype && (function(e) {
                    var t;
                    for (t in e) return !0;
                    return !1
                }(e.prototype) || t in e.prototype)
            }

            function d(e, t) {
                if ("function" !== typeof t) throw new Error("Cannot `" + e + "` without `Parser`")
            }

            function h(e, t) {
                if ("function" !== typeof t) throw new Error("Cannot `" + e + "` without `Compiler`")
            }

            function m(e, t) {
                if (t) throw new Error("Cannot invoke `" + e + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")
            }

            function v(e) {
                if (!e || "string" !== typeof e.type) throw new Error("Expected node, got `" + e + "`")
            }

            function g(e, t, n) {
                if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
            }
        },
        7946: function(e, t, n) {
            "use strict";
            const r = n(2480),
                i = n(9523),
                o = n(3287),
                u = n(5786),
                l = n(7185),
                a = n(2048),
                s = n(7113),
                c = n(7479);
            t.D = d;
            const f = {}.hasOwnProperty,
                p = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

            function d(e, t) {
                const n = [];
                let r, i = -1;
                for (; ++i < t.children.length;) r = t.children[i], "element" === r.type ? n.push(h(e, r, i, t)) : "text" === r.type ? "element" === t.type && p.has(t.tagName) && "\n" === r.value || n.push(r.value) : "raw" !== r.type || e.options.skipHtml || n.push(r.value);
                return n
            }

            function h(e, t, n, u) {
                const l = e.options,
                    a = e.schema,
                    s = t.tagName,
                    c = {};
                let p, h = a;
                if ("html" === a.space && "svg" === s && (h = o, e.schema = h), t.properties)
                    for (p in t.properties) f.call(t.properties, p) && v(c, p, t.properties[p], e);
                "ol" !== s && "ul" !== s || e.listDepth++;
                const g = d(e, t);
                "ol" !== s && "ul" !== s || e.listDepth--, e.schema = a;
                const y = t.position || {
                        start: {
                            line: null,
                            column: null,
                            offset: null
                        },
                        end: {
                            line: null,
                            column: null,
                            offset: null
                        }
                    },
                    b = l.components && f.call(l.components, s) ? l.components[s] : s,
                    x = "string" === typeof b || b === r.Fragment;
                if (!i.isValidElementType(b)) throw new TypeError(`Component for name \`${s}\` not defined or is not renderable`);
                if (c.key = [s, y.start.line, y.start.column, n].join("-"), "a" === s && l.linkTarget && (c.target = "function" === typeof l.linkTarget ? l.linkTarget(c.href, t.children, c.title) : l.linkTarget), "a" === s && l.transformLinkUri && (c.href = l.transformLinkUri(c.href, t.children, c.title)), x || "code" !== s || "element" !== u.type || "pre" === u.tagName || (c.inline = !0), x || "h1" !== s && "h2" !== s && "h3" !== s && "h4" !== s && "h5" !== s && "h6" !== s || (c.level = parseInt(s.charAt(1), 10)), "img" === s && l.transformImageUri && (c.src = l.transformImageUri(c.src, c.alt, c.title)), !x && "li" === s && "element" === u.type) {
                    const e = function(e) {
                        let t = -1;
                        for (; ++t < e.children.length;) {
                            const n = e.children[t];
                            if ("element" === n.type && "input" === n.tagName) return n
                        }
                        return null
                    }(t);
                    c.checked = e && e.properties ? Boolean(e.properties.checked) : null, c.index = m(u, t), c.ordered = "ol" === u.tagName
                }
                var w;
                return x || "ol" !== s && "ul" !== s || (c.ordered = "ol" === s, c.depth = e.listDepth), "td" !== s && "th" !== s || (c.align && (c.style || (c.style = {}), c.style.textAlign = c.align, delete c.align), x || (c.isHeader = "th" === s)), x || "tr" !== s || "element" !== u.type || (c.isHeader = Boolean("thead" === u.tagName)), l.sourcePos && (c["data-sourcepos"] = [(w = y).start.line, ":", w.start.column, "-", w.end.line, ":", w.end.column].map((e => String(e))).join("")), !x && l.rawSourcePos && (c.sourcePosition = t.position), !x && l.includeElementIndex && (c.index = m(u, t), c.siblingCount = m(u)), x || (c.node = t), g.length > 0 ? r.createElement(b, c, g) : r.createElement(b, c)
            }

            function m(e, t) {
                let n = -1,
                    r = 0;
                for (; ++n < e.children.length && e.children[n] !== t;) "element" === e.children[n].type && r++;
                return r
            }

            function v(e, t, n, r) {
                const i = u(r.schema, t);
                let o = n;
                null !== o && void 0 !== o && o === o && (o && "object" === typeof o && "length" in o && (o = (i.commaSeparated ? s : a).stringify(o)), "style" === i.property && "string" === typeof o && (o = function(e) {
                    const t = {};
                    try {
                        c(e, n)
                    } catch (r) {}
                    return t;

                    function n(e, n) {
                        const r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
                        t[r.replace(/-([a-z])/g, g)] = n
                    }
                }(o)), i.space && i.property ? e[f.call(l, i.property) ? l[i.property] : i.property] = o : i.attribute && (e[i.attribute] = o))
            }

            function g(e, t) {
                return t.toUpperCase()
            }
        },
        6590: function(e, t, n) {
            "use strict";
            const r = n(2480),
                i = n(2758),
                o = n(9219),
                u = n(9137),
                l = n(8624),
                a = n(3467),
                s = n(1819),
                c = n(7737),
                f = n(4930),
                p = n(7946).D;
            e.exports = m;
            const d = {}.hasOwnProperty,
                h = {
                    renderers: {
                        to: "components",
                        id: "change-renderers-to-components"
                    },
                    astPlugins: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    allowDangerousHtml: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    escapeHtml: {
                        id: "remove-buggy-html-in-markdown-parser"
                    },
                    source: {
                        to: "children",
                        id: "change-source-to-children"
                    },
                    allowNode: {
                        to: "allowElement",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    allowedTypes: {
                        to: "allowedElements",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    disallowedTypes: {
                        to: "disallowedElements",
                        id: "replace-allownode-allowedtypes-and-disallowedtypes"
                    },
                    includeNodeIndex: {
                        to: "includeElementIndex",
                        id: "change-includenodeindex-to-includeelementindex"
                    }
                };

            function m(e) {
                for (const r in h)
                    if (d.call(h, r) && d.call(e, r)) {
                        const e = h[r];
                        console.warn(`[react-markdown] Warning: please ${e.to?`use \`${e.to}\` instead of`:"remove"} \`${r}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${e.id}> for more info)`), delete h[r]
                    }
                const t = o().use(u).use(e.remarkPlugins || e.plugins || []).use(l, {
                    allowDangerousHtml: !0
                }).use(e.rehypePlugins || []).use(c, e);
                let n;
                "string" === typeof e.children ? n = i(e.children) : (void 0 !== e.children && null !== e.children && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`), n = i());
                const a = t.runSync(t.parse(n), n);
                if ("root" !== a.type) throw new TypeError("Expected a `root` node");
                let f = r.createElement(r.Fragment, {}, p({
                    options: e,
                    schema: s,
                    listDepth: 0
                }, a));
                return e.className && (f = r.createElement("div", {
                    className: e.className
                }, f)), f
            }
            m.defaultProps = {
                transformLinkUri: f
            }, m.propTypes = {
                children: a.string,
                className: a.string,
                allowElement: a.func,
                allowedElements: a.arrayOf(a.string),
                disallowedElements: a.arrayOf(a.string),
                unwrapDisallowed: a.bool,
                remarkPlugins: a.arrayOf(a.oneOfType([a.object, a.func, a.arrayOf(a.oneOfType([a.object, a.func]))])),
                rehypePlugins: a.arrayOf(a.oneOfType([a.object, a.func, a.arrayOf(a.oneOfType([a.object, a.func]))])),
                sourcePos: a.bool,
                rawSourcePos: a.bool,
                skipHtml: a.bool,
                includeElementIndex: a.bool,
                transformLinkUri: a.oneOfType([a.func, a.bool]),
                linkTarget: a.oneOfType([a.func, a.string]),
                transformImageUri: a.func,
                components: a.object
            }, m.uriTransformer = f
        },
        7737: function(e, t, n) {
            const r = n(4349);
            e.exports = function(e) {
                if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
                if (e.allowedElements || e.disallowedElements || e.allowElement) return e => {
                    r(e, "element", t)
                };

                function t(t, n, r) {
                    const i = t,
                        o = r;
                    let u;
                    if (e.allowedElements ? u = !e.allowedElements.includes(i.tagName) : e.disallowedElements && (u = e.disallowedElements.includes(i.tagName)), !u && e.allowElement && "number" === typeof n && (u = !e.allowElement(i, n, o)), u && "number" === typeof n) return e.unwrapDisallowed && i.children ? o.children.splice(n, 1, ...i.children) : o.children.splice(n, 1), n
                }
            }
        },
        4930: function(e) {
            const t = ["http", "https", "mailto", "tel"];
            e.exports = function(e) {
                const n = (e || "").trim(),
                    r = n.charAt(0);
                if ("#" === r || "/" === r) return n;
                const i = n.indexOf(":");
                if (-1 === i) return n;
                let o = -1;
                for (; ++o < t.length;) {
                    const e = t[o];
                    if (i === e.length && n.slice(0, e.length).toLowerCase() === e) return n
                }
                if (o = n.indexOf("?"), -1 !== o && i > o) return n;
                if (o = n.indexOf("#"), -1 !== o && i > o) return n;
                return "javascript:void(0)"
            }
        },
        2960: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = function(e, t, n) {
                var r = 0 === e ? e : e + t;
                return "translate3d" + ("(" + ("horizontal" === n ? [r, 0, 0] : [0, r, 0]).join(",") + ")")
            }
        },
        8090: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fadeAnimationHandler = t.slideStopSwipingHandler = t.slideSwipeAnimationHandler = t.slideAnimationHandler = void 0;
            var r, i = n(2480),
                o = (r = n(2960)) && r.__esModule ? r : {
                    default: r
                },
                u = n(9851);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        s(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            t.slideAnimationHandler = function(e, t) {
                var n = {},
                    r = t.selectedItem,
                    l = r,
                    s = i.Children.count(e.children) - 1;
                if (e.infiniteLoop && (r < 0 || r > s)) return l < 0 ? e.centerMode && e.centerSlidePercentage && "horizontal" === e.axis ? n.itemListStyle = (0, u.setPosition)(-(s + 2) * e.centerSlidePercentage - (100 - e.centerSlidePercentage) / 2, e.axis) : n.itemListStyle = (0, u.setPosition)(100 * -(s + 2), e.axis) : l > s && (n.itemListStyle = (0, u.setPosition)(0, e.axis)), n;
                var c = (0, u.getPosition)(r, e),
                    f = (0, o.default)(c, "%", e.axis),
                    p = e.transitionTime + "ms";
                return n.itemListStyle = {
                    WebkitTransform: f,
                    msTransform: f,
                    OTransform: f,
                    transform: f
                }, t.swiping || (n.itemListStyle = a(a({}, n.itemListStyle), {}, {
                    WebkitTransitionDuration: p,
                    MozTransitionDuration: p,
                    OTransitionDuration: p,
                    transitionDuration: p,
                    msTransitionDuration: p
                })), n
            };
            t.slideSwipeAnimationHandler = function(e, t, n, r) {
                var o = {},
                    l = "horizontal" === t.axis,
                    a = i.Children.count(t.children),
                    s = (0, u.getPosition)(n.selectedItem, t),
                    c = t.infiniteLoop ? (0, u.getPosition)(a - 1, t) - 100 : (0, u.getPosition)(a - 1, t),
                    f = l ? e.x : e.y,
                    p = f;
                0 === s && f > 0 && (p = 0), s === c && f < 0 && (p = 0);
                var d = s + 100 / (n.itemSize / p),
                    h = Math.abs(f) > t.swipeScrollTolerance;
                return t.infiniteLoop && h && (0 === n.selectedItem && d > -100 ? d -= 100 * a : n.selectedItem === a - 1 && d < 100 * -a && (d += 100 * a)), (!t.preventMovementUntilSwipeScrollTolerance || h || n.swipeMovementStarted) && (n.swipeMovementStarted || r({
                    swipeMovementStarted: !0
                }), o.itemListStyle = (0, u.setPosition)(d, t.axis)), h && !n.cancelClick && r({
                    cancelClick: !0
                }), o
            };
            t.slideStopSwipingHandler = function(e, t) {
                var n = (0, u.getPosition)(t.selectedItem, e);
                return {
                    itemListStyle: (0, u.setPosition)(n, e.axis)
                }
            };
            t.fadeAnimationHandler = function(e, t) {
                var n = e.transitionTime + "ms",
                    r = "ease-in-out",
                    i = {
                        position: "absolute",
                        display: "block",
                        zIndex: -2,
                        minHeight: "100%",
                        opacity: 0,
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        transitionTimingFunction: r,
                        msTransitionTimingFunction: r,
                        MozTransitionTimingFunction: r,
                        WebkitTransitionTimingFunction: r,
                        OTransitionTimingFunction: r
                    };
                return t.swiping || (i = a(a({}, i), {}, {
                    WebkitTransitionDuration: n,
                    MozTransitionDuration: n,
                    OTransitionDuration: n,
                    transitionDuration: n,
                    msTransitionDuration: n
                })), {
                    slideStyle: i,
                    selectedStyle: a(a({}, i), {}, {
                        opacity: 1,
                        position: "relative"
                    }),
                    prevStyle: a({}, i)
                }
            }
        },
        6235: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== d(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = p();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n(2480)),
                i = f(n(3510)),
                o = f(n(7887)),
                u = f(n(3483)),
                l = f(n(9840)),
                a = f(n(1308)),
                s = n(9851),
                c = n(8090);

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return p = function() {
                    return e
                }, e
            }

            function d(e) {
                return (d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h() {
                return (h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        S(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function g(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function b(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = k(e);
                    if (t) {
                        var i = k(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return x(this, n)
                }
            }

            function x(e, t) {
                return !t || "object" !== d(t) && "function" !== typeof t ? w(e) : t
            }

            function w(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function k(e) {
                return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function S(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && y(e, t)
                }(d, e);
                var t, n, f, p = b(d);

                function d(e) {
                    var t;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), S(w(t = p.call(this, e)), "thumbsRef", void 0), S(w(t), "carouselWrapperRef", void 0), S(w(t), "listRef", void 0), S(w(t), "itemsRef", void 0), S(w(t), "timer", void 0), S(w(t), "animationHandler", void 0), S(w(t), "setThumbsRef", (function(e) {
                        t.thumbsRef = e
                    })), S(w(t), "setCarouselWrapperRef", (function(e) {
                        t.carouselWrapperRef = e
                    })), S(w(t), "setListRef", (function(e) {
                        t.listRef = e
                    })), S(w(t), "setItemsRef", (function(e, n) {
                        t.itemsRef || (t.itemsRef = []), t.itemsRef[n] = e
                    })), S(w(t), "autoPlay", (function() {
                        r.Children.count(t.props.children) <= 1 || (t.clearAutoPlay(), t.props.autoPlay && (t.timer = setTimeout((function() {
                            t.increment()
                        }), t.props.interval)))
                    })), S(w(t), "clearAutoPlay", (function() {
                        t.timer && clearTimeout(t.timer)
                    })), S(w(t), "resetAutoPlay", (function() {
                        t.clearAutoPlay(), t.autoPlay()
                    })), S(w(t), "stopOnHover", (function() {
                        t.setState({
                            isMouseEntered: !0
                        }, t.clearAutoPlay)
                    })), S(w(t), "startOnLeave", (function() {
                        t.setState({
                            isMouseEntered: !1
                        }, t.autoPlay)
                    })), S(w(t), "isFocusWithinTheCarousel", (function() {
                        return !!t.carouselWrapperRef && !((0, l.default)().activeElement !== t.carouselWrapperRef && !t.carouselWrapperRef.contains((0, l.default)().activeElement))
                    })), S(w(t), "navigateWithKeyboard", (function(e) {
                        if (t.isFocusWithinTheCarousel()) {
                            var n = "horizontal" === t.props.axis,
                                r = n ? 37 : 38;
                            (n ? 39 : 40) === e.keyCode ? t.increment() : r === e.keyCode && t.decrement()
                        }
                    })), S(w(t), "updateSizes", (function() {
                        if (t.state.initialized && t.itemsRef && 0 !== t.itemsRef.length) {
                            var e = "horizontal" === t.props.axis,
                                n = t.itemsRef[0];
                            if (n) {
                                var r = e ? n.clientWidth : n.clientHeight;
                                t.setState({
                                    itemSize: r
                                }), t.thumbsRef && t.thumbsRef.updateSizes()
                            }
                        }
                    })), S(w(t), "setMountState", (function() {
                        t.setState({
                            hasMount: !0
                        }), t.updateSizes()
                    })), S(w(t), "handleClickItem", (function(e, n) {
                        0 !== r.Children.count(t.props.children) && (t.state.cancelClick ? t.setState({
                            cancelClick: !1
                        }) : (t.props.onClickItem(e, n), e !== t.state.selectedItem && t.setState({
                            selectedItem: e
                        })))
                    })), S(w(t), "handleOnChange", (function(e, n) {
                        r.Children.count(t.props.children) <= 1 || t.props.onChange(e, n)
                    })), S(w(t), "handleClickThumb", (function(e, n) {
                        t.props.onClickThumb(e, n), t.moveTo(e)
                    })), S(w(t), "onSwipeStart", (function(e) {
                        t.setState({
                            swiping: !0
                        }), t.props.onSwipeStart(e)
                    })), S(w(t), "onSwipeEnd", (function(e) {
                        t.setState({
                            swiping: !1,
                            cancelClick: !1,
                            swipeMovementStarted: !1
                        }), t.props.onSwipeEnd(e), t.clearAutoPlay(), t.state.autoPlay && t.autoPlay()
                    })), S(w(t), "onSwipeMove", (function(e, n) {
                        t.props.onSwipeMove(n);
                        var r = t.props.swipeAnimationHandler(e, t.props, t.state, t.setState.bind(w(t)));
                        return t.setState(v({}, r)), !!Object.keys(r).length
                    })), S(w(t), "decrement", (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        t.moveTo(t.state.selectedItem - ("number" === typeof e ? e : 1))
                    })), S(w(t), "increment", (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        t.moveTo(t.state.selectedItem + ("number" === typeof e ? e : 1))
                    })), S(w(t), "moveTo", (function(e) {
                        if ("number" === typeof e) {
                            var n = r.Children.count(t.props.children) - 1;
                            e < 0 && (e = t.props.infiniteLoop ? n : 0), e > n && (e = t.props.infiniteLoop ? 0 : n), t.selectItem({
                                selectedItem: e
                            }), t.state.autoPlay && !1 === t.state.isMouseEntered && t.resetAutoPlay()
                        }
                    })), S(w(t), "onClickNext", (function() {
                        t.increment(1)
                    })), S(w(t), "onClickPrev", (function() {
                        t.decrement(1)
                    })), S(w(t), "onSwipeForward", (function() {
                        t.increment(1), t.props.emulateTouch && t.setState({
                            cancelClick: !0
                        })
                    })), S(w(t), "onSwipeBackwards", (function() {
                        t.decrement(1), t.props.emulateTouch && t.setState({
                            cancelClick: !0
                        })
                    })), S(w(t), "changeItem", (function(e) {
                        return function(n) {
                            (0, s.isKeyboardEvent)(n) && "Enter" !== n.key || t.moveTo(e)
                        }
                    })), S(w(t), "selectItem", (function(e) {
                        t.setState(v({
                            previousItem: t.state.selectedItem
                        }, e), (function() {
                            t.setState(t.animationHandler(t.props, t.state))
                        })), t.handleOnChange(e.selectedItem, r.Children.toArray(t.props.children)[e.selectedItem])
                    })), S(w(t), "getInitialImage", (function() {
                        var e = t.props.selectedItem,
                            n = t.itemsRef && t.itemsRef[e];
                        return (n && n.getElementsByTagName("img") || [])[0]
                    })), S(w(t), "getVariableItemHeight", (function(e) {
                        var n = t.itemsRef && t.itemsRef[e];
                        if (t.state.hasMount && n && n.children.length) {
                            var r = n.children[0].getElementsByTagName("img") || [];
                            if (r.length > 0) {
                                var i = r[0];
                                if (!i.complete) {
                                    i.addEventListener("load", (function e() {
                                        t.forceUpdate(), i.removeEventListener("load", e)
                                    }))
                                }
                            }
                            var o = (r[0] || n.children[0]).clientHeight;
                            return o > 0 ? o : null
                        }
                        return null
                    }));
                    var n = {
                        initialized: !1,
                        previousItem: e.selectedItem,
                        selectedItem: e.selectedItem,
                        hasMount: !1,
                        isMouseEntered: !1,
                        autoPlay: e.autoPlay,
                        swiping: !1,
                        swipeMovementStarted: !1,
                        cancelClick: !1,
                        itemSize: 1,
                        itemListStyle: {},
                        slideStyle: {},
                        selectedStyle: {},
                        prevStyle: {}
                    };
                    return t.animationHandler = "function" === typeof e.animationHandler && e.animationHandler || "fade" === e.animationHandler && c.fadeAnimationHandler || c.slideAnimationHandler, t.state = v(v({}, n), t.animationHandler(e, n)), t
                }
                return t = d, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.children && this.setupCarousel()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        e.children || !this.props.children || this.state.initialized || this.setupCarousel(), !e.autoFocus && this.props.autoFocus && this.forceFocus(), t.swiping && !this.state.swiping && this.setState(v({}, this.props.stopSwipingHandler(this.props, this.state))), e.selectedItem === this.props.selectedItem && e.centerMode === this.props.centerMode || (this.updateSizes(), this.moveTo(this.props.selectedItem)), e.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
                            autoPlay: this.props.autoPlay
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.destroyCarousel()
                    }
                }, {
                    key: "setupCarousel",
                    value: function() {
                        var e = this;
                        this.bindEvents(), this.state.autoPlay && r.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
                            initialized: !0
                        }, (function() {
                            var t = e.getInitialImage();
                            t && !t.complete ? t.addEventListener("load", e.setMountState) : e.setMountState()
                        }))
                    }
                }, {
                    key: "destroyCarousel",
                    value: function() {
                        this.state.initialized && (this.unbindEvents(), this.destroyAutoPlay())
                    }
                }, {
                    key: "setupAutoPlay",
                    value: function() {
                        this.autoPlay();
                        var e = this.carouselWrapperRef;
                        this.props.stopOnHover && e && (e.addEventListener("mouseenter", this.stopOnHover), e.addEventListener("mouseleave", this.startOnLeave))
                    }
                }, {
                    key: "destroyAutoPlay",
                    value: function() {
                        this.clearAutoPlay();
                        var e = this.carouselWrapperRef;
                        this.props.stopOnHover && e && (e.removeEventListener("mouseenter", this.stopOnHover), e.removeEventListener("mouseleave", this.startOnLeave))
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        (0, a.default)().addEventListener("resize", this.updateSizes), (0, a.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.props.useKeyboardArrows && (0, l.default)().addEventListener("keydown", this.navigateWithKeyboard)
                    }
                }, {
                    key: "unbindEvents",
                    value: function() {
                        (0, a.default)().removeEventListener("resize", this.updateSizes), (0, a.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
                        var e = this.getInitialImage();
                        e && e.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, l.default)().removeEventListener("keydown", this.navigateWithKeyboard)
                    }
                }, {
                    key: "forceFocus",
                    value: function() {
                        var e;
                        null === (e = this.carouselWrapperRef) || void 0 === e || e.focus()
                    }
                }, {
                    key: "renderItems",
                    value: function(e) {
                        var t = this;
                        return this.props.children ? r.Children.map(this.props.children, (function(n, i) {
                            var u = i === t.state.selectedItem,
                                l = i === t.state.previousItem,
                                a = u && t.state.selectedStyle || l && t.state.prevStyle || t.state.slideStyle || {};
                            t.props.centerMode && "horizontal" === t.props.axis && (a = v(v({}, a), {}, {
                                minWidth: t.props.centerSlidePercentage + "%"
                            })), t.state.swiping && t.state.swipeMovementStarted && (a = v(v({}, a), {}, {
                                pointerEvents: "none"
                            }));
                            var s = {
                                ref: function(e) {
                                    return t.setItemsRef(e, i)
                                },
                                key: "itemKey" + i + (e ? "clone" : ""),
                                className: o.default.ITEM(!0, i === t.state.selectedItem, i === t.state.previousItem),
                                onClick: t.handleClickItem.bind(t, i, n),
                                style: a
                            };
                            return r.default.createElement("li", s, t.props.renderItem(n, {
                                isSelected: i === t.state.selectedItem,
                                isPrevious: i === t.state.previousItem
                            }))
                        })) : []
                    }
                }, {
                    key: "renderControls",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.showIndicators,
                            i = t.labels,
                            o = t.renderIndicator,
                            u = t.children;
                        return n ? r.default.createElement("ul", {
                            className: "control-dots"
                        }, r.Children.map(u, (function(t, n) {
                            return o && o(e.changeItem(n), n === e.state.selectedItem, n, i.item)
                        }))) : null
                    }
                }, {
                    key: "renderStatus",
                    value: function() {
                        return this.props.showStatus ? r.default.createElement("p", {
                            className: "carousel-status"
                        }, this.props.statusFormatter(this.state.selectedItem + 1, r.Children.count(this.props.children))) : null
                    }
                }, {
                    key: "renderThumbs",
                    value: function() {
                        return this.props.showThumbs && this.props.children && 0 !== r.Children.count(this.props.children) ? r.default.createElement(u.default, {
                            ref: this.setThumbsRef,
                            onSelectItem: this.handleClickThumb,
                            selectedItem: this.state.selectedItem,
                            transitionTime: this.props.transitionTime,
                            thumbWidth: this.props.thumbWidth,
                            labels: this.props.labels,
                            emulateTouch: this.props.emulateTouch
                        }, this.props.renderThumbs(this.props.children)) : null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        if (!this.props.children || 0 === r.Children.count(this.props.children)) return null;
                        var t = this.props.swipeable && r.Children.count(this.props.children) > 1,
                            n = "horizontal" === this.props.axis,
                            u = this.props.showArrows && r.Children.count(this.props.children) > 1,
                            l = u && (this.state.selectedItem > 0 || this.props.infiniteLoop) || !1,
                            a = u && (this.state.selectedItem < r.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || !1,
                            s = this.renderItems(!0),
                            c = s.shift(),
                            f = s.pop(),
                            p = {
                                className: o.default.SLIDER(!0, this.state.swiping),
                                onSwipeMove: this.onSwipeMove,
                                onSwipeStart: this.onSwipeStart,
                                onSwipeEnd: this.onSwipeEnd,
                                style: this.state.itemListStyle,
                                tolerance: this.props.swipeScrollTolerance
                            },
                            d = {};
                        if (n) {
                            if (p.onSwipeLeft = this.onSwipeForward, p.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
                                var m = this.getVariableItemHeight(this.state.selectedItem);
                                d.height = m || "auto"
                            }
                        } else p.onSwipeUp = "natural" === this.props.verticalSwipe ? this.onSwipeBackwards : this.onSwipeForward, p.onSwipeDown = "natural" === this.props.verticalSwipe ? this.onSwipeForward : this.onSwipeBackwards, p.style = v(v({}, p.style), {}, {
                            height: this.state.itemSize
                        }), d.height = this.state.itemSize;
                        return r.default.createElement("div", {
                            "aria-label": this.props.ariaLabel,
                            className: o.default.ROOT(this.props.className),
                            ref: this.setCarouselWrapperRef,
                            tabIndex: this.props.useKeyboardArrows ? 0 : void 0
                        }, r.default.createElement("div", {
                            className: o.default.CAROUSEL(!0),
                            style: {
                                width: this.props.width
                            }
                        }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, l, this.props.labels.leftArrow), r.default.createElement("div", {
                            className: o.default.WRAPPER(!0, this.props.axis),
                            style: d
                        }, t ? r.default.createElement(i.default, h({
                            tagName: "ul",
                            innerRef: this.setListRef
                        }, p, {
                            allowMouseEvents: this.props.emulateTouch
                        }), this.props.infiniteLoop && f, this.renderItems(), this.props.infiniteLoop && c) : r.default.createElement("ul", {
                            className: o.default.SLIDER(!0, this.state.swiping),
                            ref: function(t) {
                                return e.setListRef(t)
                            },
                            style: this.state.itemListStyle || {}
                        }, this.props.infiniteLoop && f, this.renderItems(), this.props.infiniteLoop && c)), this.props.renderArrowNext(this.onClickNext, a, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs())
                    }
                }]) && g(t.prototype, n), f && g(t, f), d
            }(r.default.Component);
            t.default = E, S(E, "displayName", "Carousel"), S(E, "defaultProps", {
                ariaLabel: void 0,
                axis: "horizontal",
                centerSlidePercentage: 80,
                interval: 3e3,
                labels: {
                    leftArrow: "previous slide / item",
                    rightArrow: "next slide / item",
                    item: "slide item"
                },
                onClickItem: s.noop,
                onClickThumb: s.noop,
                onChange: s.noop,
                onSwipeStart: function() {},
                onSwipeEnd: function() {},
                onSwipeMove: function() {
                    return !1
                },
                preventMovementUntilSwipeScrollTolerance: !1,
                renderArrowPrev: function(e, t, n) {
                    return r.default.createElement("button", {
                        type: "button",
                        "aria-label": n,
                        className: o.default.ARROW_PREV(!t),
                        onClick: e
                    })
                },
                renderArrowNext: function(e, t, n) {
                    return r.default.createElement("button", {
                        type: "button",
                        "aria-label": n,
                        className: o.default.ARROW_NEXT(!t),
                        onClick: e
                    })
                },
                renderIndicator: function(e, t, n, i) {
                    return r.default.createElement("li", {
                        className: o.default.DOT(t),
                        onClick: e,
                        onKeyDown: e,
                        value: n,
                        key: n,
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "".concat(i, " ").concat(n + 1)
                    })
                },
                renderItem: function(e) {
                    return e
                },
                renderThumbs: function(e) {
                    var t = r.Children.map(e, (function(e) {
                        var t = e;
                        if ("img" !== e.type && (t = r.Children.toArray(e.props.children).find((function(e) {
                                return "img" === e.type
                            }))), t) return t
                    }));
                    return 0 === t.filter((function(e) {
                        return e
                    })).length ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : t
                },
                statusFormatter: s.defaultStatusFormatter,
                selectedItem: 0,
                showArrows: !0,
                showIndicators: !0,
                showStatus: !0,
                showThumbs: !0,
                stopOnHover: !0,
                swipeScrollTolerance: 5,
                swipeable: !0,
                transitionTime: 350,
                verticalSwipe: "standard",
                width: "100%",
                animationHandler: "slide",
                swipeAnimationHandler: c.slideSwipeAnimationHandler,
                stopSwipingHandler: c.slideStopSwipingHandler
            })
        },
        1635: function() {},
        9851: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.setPosition = t.getPosition = t.isKeyboardEvent = t.defaultStatusFormatter = t.noop = void 0;
            var r, i = n(2480),
                o = (r = n(2960)) && r.__esModule ? r : {
                    default: r
                };
            t.noop = function() {};
            t.defaultStatusFormatter = function(e, t) {
                return "".concat(e, " of ").concat(t)
            };
            t.isKeyboardEvent = function(e) {
                return !!e && e.hasOwnProperty("key")
            };
            t.getPosition = function(e, t) {
                if (t.infiniteLoop && ++e, 0 === e) return 0;
                var n = i.Children.count(t.children);
                if (t.centerMode && "horizontal" === t.axis) {
                    var r = -e * t.centerSlidePercentage,
                        o = n - 1;
                    return e && (e !== o || t.infiniteLoop) ? r += (100 - t.centerSlidePercentage) / 2 : e === o && (r += 100 - t.centerSlidePercentage), r
                }
                return 100 * -e
            };
            t.setPosition = function(e, t) {
                var n = {};
                return ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach((function(r) {
                    n[r] = (0, o.default)(e, "%", t)
                })), n
            }
        },
        3483: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== f(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n(2480)),
                i = s(n(7887)),
                o = n(9769),
                u = s(n(2960)),
                l = s(n(3510)),
                a = s(n(1308));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function f(e) {
                return (f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function h(e, t) {
                return (h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function m(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }

            function v(e, t) {
                return !t || "object" !== f(t) && "function" !== typeof t ? g(e) : t
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var x = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && h(e, t)
                }(f, e);
                var t, n, s, c = m(f);

                function f(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, f), b(g(t = c.call(this, e)), "itemsWrapperRef", void 0), b(g(t), "itemsListRef", void 0), b(g(t), "thumbsRef", void 0), b(g(t), "setItemsWrapperRef", (function(e) {
                        t.itemsWrapperRef = e
                    })), b(g(t), "setItemsListRef", (function(e) {
                        t.itemsListRef = e
                    })), b(g(t), "setThumbsRef", (function(e, n) {
                        t.thumbsRef || (t.thumbsRef = []), t.thumbsRef[n] = e
                    })), b(g(t), "updateSizes", (function() {
                        if (t.props.children && t.itemsWrapperRef && t.thumbsRef) {
                            var e = r.Children.count(t.props.children),
                                n = t.itemsWrapperRef.clientWidth,
                                i = t.props.thumbWidth ? t.props.thumbWidth : (0, o.outerWidth)(t.thumbsRef[0]),
                                u = Math.floor(n / i),
                                l = u < e,
                                a = l ? e - u : 0;
                            t.setState((function(e, n) {
                                return {
                                    itemSize: i,
                                    visibleItems: u,
                                    firstItem: l ? t.getFirstItem(n.selectedItem) : 0,
                                    lastPosition: a,
                                    showArrows: l
                                }
                            }))
                        }
                    })), b(g(t), "handleClickItem", (function(e, n, r) {
                        if (! function(e) {
                                return e.hasOwnProperty("key")
                            }(r) || "Enter" === r.key) {
                            var i = t.props.onSelectItem;
                            "function" === typeof i && i(e, n)
                        }
                    })), b(g(t), "onSwipeStart", (function() {
                        t.setState({
                            swiping: !0
                        })
                    })), b(g(t), "onSwipeEnd", (function() {
                        t.setState({
                            swiping: !1
                        })
                    })), b(g(t), "onSwipeMove", (function(e) {
                        var n = e.x;
                        if (!t.state.itemSize || !t.itemsWrapperRef || !t.state.visibleItems) return !1;
                        var i = r.Children.count(t.props.children),
                            o = -100 * t.state.firstItem / t.state.visibleItems;
                        0 === o && n > 0 && (n = 0), o === 100 * -Math.max(i - t.state.visibleItems, 0) / t.state.visibleItems && n < 0 && (n = 0);
                        var l = o + 100 / (t.itemsWrapperRef.clientWidth / n);
                        return t.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach((function(e) {
                            t.itemsListRef.style[e] = (0, u.default)(l, "%", t.props.axis)
                        })), !0
                    })), b(g(t), "slideRight", (function(e) {
                        t.moveTo(t.state.firstItem - ("number" === typeof e ? e : 1))
                    })), b(g(t), "slideLeft", (function(e) {
                        t.moveTo(t.state.firstItem + ("number" === typeof e ? e : 1))
                    })), b(g(t), "moveTo", (function(e) {
                        e = (e = e < 0 ? 0 : e) >= t.state.lastPosition ? t.state.lastPosition : e, t.setState({
                            firstItem: e
                        })
                    })), t.state = {
                        selectedItem: e.selectedItem,
                        swiping: !1,
                        showArrows: !1,
                        firstItem: 0,
                        visibleItems: 0,
                        lastPosition: 0
                    }, t
                }
                return t = f, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.setupThumbs()
                    }
                }, {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function(e) {
                        e.selectedItem !== this.state.selectedItem && this.setState({
                            selectedItem: e.selectedItem,
                            firstItem: this.getFirstItem(e.selectedItem)
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.props.children !== e.children && this.updateSizes()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.destroyThumbs()
                    }
                }, {
                    key: "setupThumbs",
                    value: function() {
                        (0, a.default)().addEventListener("resize", this.updateSizes), (0, a.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.updateSizes()
                    }
                }, {
                    key: "destroyThumbs",
                    value: function() {
                        (0, a.default)().removeEventListener("resize", this.updateSizes), (0, a.default)().removeEventListener("DOMContentLoaded", this.updateSizes)
                    }
                }, {
                    key: "getFirstItem",
                    value: function(e) {
                        var t = e;
                        return e >= this.state.lastPosition && (t = this.state.lastPosition), e < this.state.firstItem + this.state.visibleItems && (t = this.state.firstItem), e < this.state.firstItem && (t = e), t
                    }
                }, {
                    key: "renderItems",
                    value: function() {
                        var e = this;
                        return this.props.children.map((function(t, n) {
                            var o = i.default.ITEM(!1, n === e.state.selectedItem),
                                u = {
                                    key: n,
                                    ref: function(t) {
                                        return e.setThumbsRef(t, n)
                                    },
                                    className: o,
                                    onClick: e.handleClickItem.bind(e, n, e.props.children[n]),
                                    onKeyDown: e.handleClickItem.bind(e, n, e.props.children[n]),
                                    "aria-label": "".concat(e.props.labels.item, " ").concat(n + 1),
                                    style: {
                                        width: e.props.thumbWidth
                                    }
                                };
                            return r.default.createElement("li", p({}, u, {
                                role: "button",
                                tabIndex: 0
                            }), t)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        if (!this.props.children) return null;
                        var t, n = r.Children.count(this.props.children) > 1,
                            o = this.state.showArrows && this.state.firstItem > 0,
                            a = this.state.showArrows && this.state.firstItem < this.state.lastPosition,
                            s = -this.state.firstItem * (this.state.itemSize || 0),
                            c = (0, u.default)(s, "px", this.props.axis),
                            f = this.props.transitionTime + "ms";
                        return t = {
                            WebkitTransform: c,
                            MozTransform: c,
                            MsTransform: c,
                            OTransform: c,
                            transform: c,
                            msTransform: c,
                            WebkitTransitionDuration: f,
                            MozTransitionDuration: f,
                            MsTransitionDuration: f,
                            OTransitionDuration: f,
                            transitionDuration: f,
                            msTransitionDuration: f
                        }, r.default.createElement("div", {
                            className: i.default.CAROUSEL(!1)
                        }, r.default.createElement("div", {
                            className: i.default.WRAPPER(!1),
                            ref: this.setItemsWrapperRef
                        }, r.default.createElement("button", {
                            type: "button",
                            className: i.default.ARROW_PREV(!o),
                            onClick: function() {
                                return e.slideRight()
                            },
                            "aria-label": this.props.labels.leftArrow
                        }), n ? r.default.createElement(l.default, {
                            tagName: "ul",
                            className: i.default.SLIDER(!1, this.state.swiping),
                            onSwipeLeft: this.slideLeft,
                            onSwipeRight: this.slideRight,
                            onSwipeMove: this.onSwipeMove,
                            onSwipeStart: this.onSwipeStart,
                            onSwipeEnd: this.onSwipeEnd,
                            style: t,
                            innerRef: this.setItemsListRef,
                            allowMouseEvents: this.props.emulateTouch
                        }, this.renderItems()) : r.default.createElement("ul", {
                            className: i.default.SLIDER(!1, this.state.swiping),
                            ref: function(t) {
                                return e.setItemsListRef(t)
                            },
                            style: t
                        }, this.renderItems()), r.default.createElement("button", {
                            type: "button",
                            className: i.default.ARROW_NEXT(!a),
                            onClick: function() {
                                return e.slideLeft()
                            },
                            "aria-label": this.props.labels.rightArrow
                        })))
                    }
                }]) && d(t.prototype, n), s && d(t, s), f
            }(r.Component);
            t.default = x, b(x, "displayName", "Thumbs"), b(x, "defaultProps", {
                axis: "horizontal",
                labels: {
                    leftArrow: "previous slide / item",
                    rightArrow: "next slide / item",
                    item: "slide item"
                },
                selectedItem: 0,
                thumbWidth: 80,
                transitionTime: 350
            })
        },
        7887: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(6732)) && r.__esModule ? r : {
                default: r
            };
            var o = {
                ROOT: function(e) {
                    return (0, i.default)(function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }({
                        "carousel-root": !0
                    }, e || "", !!e))
                },
                CAROUSEL: function(e) {
                    return (0, i.default)({
                        carousel: !0,
                        "carousel-slider": e
                    })
                },
                WRAPPER: function(e, t) {
                    return (0, i.default)({
                        "thumbs-wrapper": !e,
                        "slider-wrapper": e,
                        "axis-horizontal": "horizontal" === t,
                        "axis-vertical": "horizontal" !== t
                    })
                },
                SLIDER: function(e, t) {
                    return (0, i.default)({
                        thumbs: !e,
                        slider: e,
                        animated: !t
                    })
                },
                ITEM: function(e, t, n) {
                    return (0, i.default)({
                        thumb: !e,
                        slide: e,
                        selected: t,
                        previous: n
                    })
                },
                ARROW_PREV: function(e) {
                    return (0, i.default)({
                        "control-arrow control-prev": !0,
                        "control-disabled": e
                    })
                },
                ARROW_NEXT: function(e) {
                    return (0, i.default)({
                        "control-arrow control-next": !0,
                        "control-disabled": e
                    })
                },
                DOT: function(e) {
                    return (0, i.default)({
                        dot: !0,
                        selected: e
                    })
                }
            };
            t.default = o
        },
        9769: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.outerWidth = void 0;
            t.outerWidth = function(e) {
                var t = e.offsetWidth,
                    n = getComputedStyle(e);
                return t += parseInt(n.marginLeft) + parseInt(n.marginRight)
            }
        },
        2661: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "lr", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            });
            var r = u(n(6235)),
                i = n(1635),
                o = u(n(3483));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        9840: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = function() {
                return document
            }
        },
        1308: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = function() {
                return window
            }
        },
        8624: function(e, t, n) {
            "use strict";
            var r = n(1658);
            e.exports = function(e, t) {
                e && !e.process && (t = e, e = null);
                return e ? function(e, t) {
                    return n;

                    function n(n, i, o) {
                        function u(e) {
                            o(e)
                        }
                        e.run(r(n, t), i, u)
                    }
                }(e, t) : function(e) {
                    return t;

                    function t(t) {
                        return r(t, e)
                    }
                }(t)
            }
        },
        2048: function(e, t) {
            "use strict";
            t.parse = function(e) {
                var t = String(e || "").trim();
                return "" === t ? [] : t.split(n)
            }, t.stringify = function(e) {
                return e.join(" ").trim()
            };
            var n = /[ \t\n\r\f]+/g
        },
        7479: function(e, t, n) {
            var r = n(8937);
            e.exports = function(e, t) {
                var n, i = null;
                if (!e || "string" !== typeof e) return i;
                for (var o, u, l = r(e), a = "function" === typeof t, s = 0, c = l.length; s < c; s++) o = (n = l[s]).property, u = n.value, a ? t(o, u, n) : u && (i || (i = {}), i[o] = u);
                return i
            }
        },
        6595: function(e, t, n) {
            "use strict";
            var r = n(2109);
            e.exports = o, o.wrap = r;
            var i = [].slice;

            function o() {
                var e = [],
                    t = {
                        run: function() {
                            var t = -1,
                                n = i.call(arguments, 0, -1),
                                o = arguments[arguments.length - 1];
                            if ("function" !== typeof o) throw new Error("Expected function as last argument, not " + o);

                            function u(l) {
                                var a = e[++t],
                                    s = i.call(arguments, 0),
                                    c = s.slice(1),
                                    f = n.length,
                                    p = -1;
                                if (l) o(l);
                                else {
                                    for (; ++p < f;) null !== c[p] && void 0 !== c[p] || (c[p] = n[p]);
                                    n = c, a ? r(a, u).apply(null, n) : o.apply(null, [null].concat(n))
                                }
                            }
                            u.apply(null, [null].concat(n))
                        },
                        use: function(n) {
                            if ("function" !== typeof n) throw new Error("Expected `fn` to be a function, not " + n);
                            return e.push(n), t
                        }
                    };
                return t
            }
        },
        2109: function(e) {
            "use strict";
            var t = [].slice;
            e.exports = function(e, n) {
                var r;
                return function() {
                    var n, u = t.call(arguments, 0),
                        l = e.length > u.length;
                    l && u.push(i);
                    try {
                        n = e.apply(null, u)
                    } catch (a) {
                        if (l && r) throw a;
                        return i(a)
                    }
                    l || (n && "function" === typeof n.then ? n.then(o, i) : n instanceof Error ? i(n) : o(n))
                };

                function i() {
                    r || (r = !0, n.apply(null, arguments))
                }

                function o(e) {
                    i(null, e)
                }
            }
        },
        470: function(e) {
            "use strict";
            e.exports = function(e, t, n) {
                var r;
                null !== n && void 0 !== n || "object" === typeof t && !Array.isArray(t) || (n = t, t = {});
                r = Object.assign({
                    type: String(e)
                }, t), Array.isArray(n) ? r.children = n : null !== n && void 0 !== n && (r.value = String(n));
                return r
            }
        },
        2809: function(e) {
            "use strict";
            e.exports = function(e) {
                return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column
            }
        },
        1810: function(e) {
            "use strict";

            function t(e) {
                if (null == e) return n;
                if ("string" === typeof e) return function(e) {
                    return t;

                    function t(t) {
                        return Boolean(t && t.type === e)
                    }
                }(e);
                if ("object" === typeof e) return "length" in e ? function(e) {
                    var n = [],
                        r = -1;
                    for (; ++r < e.length;) n[r] = t(e[r]);
                    return i;

                    function i() {
                        for (var e = -1; ++e < n.length;)
                            if (n[e].apply(this, arguments)) return !0;
                        return !1
                    }
                }(e) : function(e) {
                    return t;

                    function t(t) {
                        var n;
                        for (n in e)
                            if (t[n] !== e[n]) return !1;
                        return !0
                    }
                }(e);
                if ("function" === typeof e) return e;
                throw new Error("Expected function, string, or object as test")
            }

            function n() {
                return !0
            }
            e.exports = t
        },
        4977: function(e) {
            "use strict";
            var t = i("start"),
                n = i("end");

            function r(e) {
                return {
                    start: t(e),
                    end: n(e)
                }
            }

            function i(e) {
                return t.displayName = e, t;

                function t(t) {
                    var n = t && t.position && t.position[e] || {};
                    return {
                        line: n.line || null,
                        column: n.column || null,
                        offset: isNaN(n.offset) ? null : n.offset
                    }
                }
            }
            e.exports = r, r.start = t, r.end = n
        },
        6694: function(e) {
            "use strict";
            var t = {}.hasOwnProperty;

            function n(e) {
                return e && "object" === typeof e || (e = {}), i(e.line) + ":" + i(e.column)
            }

            function r(e) {
                return e && "object" === typeof e || (e = {}), n(e.start) + "-" + n(e.end)
            }

            function i(e) {
                return e && "number" === typeof e ? e : 1
            }
            e.exports = function(e) {
                if (!e || "object" !== typeof e) return "";
                if (t.call(e, "position") || t.call(e, "type")) return r(e.position);
                if (t.call(e, "start") || t.call(e, "end")) return r(e);
                if (t.call(e, "line") || t.call(e, "column")) return n(e);
                return ""
            }
        },
        7561: function(e) {
            e.exports = function(e) {
                return e
            }
        },
        9374: function(e, t, n) {
            "use strict";
            e.exports = a;
            var r = n(1810),
                i = n(7561),
                o = !0,
                u = "skip",
                l = !1;

            function a(e, t, n, a) {
                var s, c;
                "function" === typeof t && "function" !== typeof n && (a = n, n = t, t = null), c = r(t), s = a ? -1 : 1,
                    function e(r, f, p) {
                        var d, h = "object" === typeof r && null !== r ? r : {};
                        "string" === typeof h.type && (d = "string" === typeof h.tagName ? h.tagName : "string" === typeof h.name ? h.name : void 0, m.displayName = "node (" + i(h.type + (d ? "<" + d + ">" : "")) + ")");
                        return m;

                        function m() {
                            var i, d, h = p.concat(r),
                                m = [];
                            if ((!t || c(r, f, p[p.length - 1] || null)) && (m = function(e) {
                                    if (null !== e && "object" === typeof e && "length" in e) return e;
                                    if ("number" === typeof e) return [o, e];
                                    return [e]
                                }(n(r, p)))[0] === l) return m;
                            if (r.children && m[0] !== u)
                                for (d = (a ? r.children.length : -1) + s; d > -1 && d < r.children.length;) {
                                    if ((i = e(r.children[d], d, h)())[0] === l) return i;
                                    d = "number" === typeof i[1] ? i[1] : d + s
                                }
                            return m
                        }
                    }(e, null, [])()
            }
            a.CONTINUE = true, a.SKIP = u, a.EXIT = l
        },
        4349: function(e, t, n) {
            "use strict";
            e.exports = l;
            var r = n(9374),
                i = r.CONTINUE,
                o = r.SKIP,
                u = r.EXIT;

            function l(e, t, n, i) {
                "function" === typeof t && "function" !== typeof n && (i = n, n = t, t = null), r(e, t, (function(e, t) {
                    var r = t[t.length - 1],
                        i = r ? r.children.indexOf(e) : null;
                    return n(e, i, r)
                }), i)
            }
            l.CONTINUE = i, l.SKIP = o, l.EXIT = u
        },
        8776: function(e, t, n) {
            "use strict";
            var r = n(6694);

            function i() {}
            e.exports = u, i.prototype = Error.prototype, u.prototype = new i;
            var o = u.prototype;

            function u(e, t, n) {
                var i, o, u;
                "string" === typeof t && (n = t, t = null), i = function(e) {
                    var t, n = [null, null];
                    "string" === typeof e && (-1 === (t = e.indexOf(":")) ? n[1] = e : (n[0] = e.slice(0, t), n[1] = e.slice(t + 1)));
                    return n
                }(n), o = r(t) || "1:1", u = {
                    start: {
                        line: null,
                        column: null
                    },
                    end: {
                        line: null,
                        column: null
                    }
                }, t && t.position && (t = t.position), t && (t.start ? (u = t, t = t.start) : u.start = t), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = o, this.reason = e, this.line = t ? t.line : null, this.column = t ? t.column : null, this.location = u, this.source = i[0], this.ruleId = i[1]
            }
            o.file = "", o.name = "", o.reason = "", o.message = "", o.stack = "", o.fatal = null, o.column = null, o.line = null
        },
        2758: function(e, t, n) {
            "use strict";
            e.exports = n(1981)
        },
        9053: function(e, t, n) {
            "use strict";
            var r = n(7380),
                i = n(7098),
                o = n(5150);
            e.exports = a;
            var u = {}.hasOwnProperty,
                l = ["history", "path", "basename", "stem", "extname", "dirname"];

            function a(e) {
                var t, n;
                if (e) {
                    if ("string" === typeof e || o(e)) e = {
                        contents: e
                    };
                    else if ("message" in e && "messages" in e) return e
                } else e = {};
                if (!(this instanceof a)) return new a(e);
                for (this.data = {}, this.messages = [], this.history = [], this.cwd = i.cwd(), n = -1; ++n < l.length;) t = l[n], u.call(e, t) && (this[t] = e[t]);
                for (t in e) l.indexOf(t) < 0 && (this[t] = e[t])
            }

            function s(e, t) {
                if (e && e.indexOf(r.sep) > -1) throw new Error("`" + t + "` cannot be a path: did not expect `" + r.sep + "`")
            }

            function c(e, t) {
                if (!e) throw new Error("`" + t + "` cannot be empty")
            }

            function f(e, t) {
                if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
            }
            a.prototype.toString = function(e) {
                return (this.contents || "").toString(e)
            }, Object.defineProperty(a.prototype, "path", {
                get: function() {
                    return this.history[this.history.length - 1]
                },
                set: function(e) {
                    c(e, "path"), this.path !== e && this.history.push(e)
                }
            }), Object.defineProperty(a.prototype, "dirname", {
                get: function() {
                    return "string" === typeof this.path ? r.dirname(this.path) : void 0
                },
                set: function(e) {
                    f(this.path, "dirname"), this.path = r.join(e || "", this.basename)
                }
            }), Object.defineProperty(a.prototype, "basename", {
                get: function() {
                    return "string" === typeof this.path ? r.basename(this.path) : void 0
                },
                set: function(e) {
                    c(e, "basename"), s(e, "basename"), this.path = r.join(this.dirname || "", e)
                }
            }), Object.defineProperty(a.prototype, "extname", {
                get: function() {
                    return "string" === typeof this.path ? r.extname(this.path) : void 0
                },
                set: function(e) {
                    if (s(e, "extname"), f(this.path, "extname"), e) {
                        if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
                        if (e.indexOf(".", 1) > -1) throw new Error("`extname` cannot contain multiple dots")
                    }
                    this.path = r.join(this.dirname, this.stem + (e || ""))
                }
            }), Object.defineProperty(a.prototype, "stem", {
                get: function() {
                    return "string" === typeof this.path ? r.basename(this.path, this.extname) : void 0
                },
                set: function(e) {
                    c(e, "stem"), s(e, "stem"), this.path = r.join(this.dirname || "", e + (this.extname || ""))
                }
            })
        },
        1981: function(e, t, n) {
            "use strict";
            var r = n(8776),
                i = n(9053);
            e.exports = i, i.prototype.message = function(e, t, n) {
                var i = new r(e, t, n);
                this.path && (i.name = this.path + ":" + i.name, i.file = this.path);
                return i.fatal = !1, this.messages.push(i), i
            }, i.prototype.info = function() {
                var e = this.message.apply(this, arguments);
                return e.fatal = null, e
            }, i.prototype.fail = function() {
                var e = this.message.apply(this, arguments);
                throw e.fatal = !0, e
            }
        },
        7380: function(e, t) {
            "use strict";

            function n(e) {
                var t, n;
                return r(e), t = 47 === e.charCodeAt(0), (n = function(e, t) {
                    var n, r, i = "",
                        o = 0,
                        u = -1,
                        l = 0,
                        a = -1;
                    for (; ++a <= e.length;) {
                        if (a < e.length) n = e.charCodeAt(a);
                        else {
                            if (47 === n) break;
                            n = 47
                        }
                        if (47 === n) {
                            if (u === a - 1 || 1 === l);
                            else if (u !== a - 1 && 2 === l) {
                                if (i.length < 2 || 2 !== o || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                                    if (i.length > 2) {
                                        if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                            r < 0 ? (i = "", o = 0) : o = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), u = a, l = 0;
                                            continue
                                        }
                                    } else if (i.length) {
                                    i = "", o = 0, u = a, l = 0;
                                    continue
                                }
                                t && (i = i.length ? i + "/.." : "..", o = 2)
                            } else i.length ? i += "/" + e.slice(u + 1, a) : i = e.slice(u + 1, a), o = a - u - 1;
                            u = a, l = 0
                        } else 46 === n && l > -1 ? l++ : l = -1
                    }
                    return i
                }(e, !t)).length || t || (n = "."), n.length && 47 === e.charCodeAt(e.length - 1) && (n += "/"), t ? "/" + n : n
            }

            function r(e) {
                if ("string" !== typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
            }
            t.basename = function(e, t) {
                var n, i, o, u, l = 0,
                    a = -1;
                if (void 0 !== t && "string" !== typeof t) throw new TypeError('"ext" argument must be a string');
                if (r(e), n = e.length, void 0 === t || !t.length || t.length > e.length) {
                    for (; n--;)
                        if (47 === e.charCodeAt(n)) {
                            if (o) {
                                l = n + 1;
                                break
                            }
                        } else a < 0 && (o = !0, a = n + 1);
                    return a < 0 ? "" : e.slice(l, a)
                }
                if (t === e) return "";
                i = -1, u = t.length - 1;
                for (; n--;)
                    if (47 === e.charCodeAt(n)) {
                        if (o) {
                            l = n + 1;
                            break
                        }
                    } else i < 0 && (o = !0, i = n + 1), u > -1 && (e.charCodeAt(n) === t.charCodeAt(u--) ? u < 0 && (a = n) : (u = -1, a = i));
                l === a ? a = i : a < 0 && (a = e.length);
                return e.slice(l, a)
            }, t.dirname = function(e) {
                var t, n, i;
                if (r(e), !e.length) return ".";
                t = -1, i = e.length;
                for (; --i;)
                    if (47 === e.charCodeAt(i)) {
                        if (n) {
                            t = i;
                            break
                        }
                    } else n || (n = !0);
                return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
            }, t.extname = function(e) {
                var t, n, i, o = -1,
                    u = 0,
                    l = -1,
                    a = 0;
                r(e), i = e.length;
                for (; i--;)
                    if (47 !== (n = e.charCodeAt(i))) l < 0 && (t = !0, l = i + 1), 46 === n ? o < 0 ? o = i : 1 !== a && (a = 1) : o > -1 && (a = -1);
                    else if (t) {
                    u = i + 1;
                    break
                }
                if (o < 0 || l < 0 || 0 === a || 1 === a && o === l - 1 && o === u + 1) return "";
                return e.slice(o, l)
            }, t.join = function() {
                var e, t = -1;
                for (; ++t < arguments.length;) r(arguments[t]), arguments[t] && (e = void 0 === e ? arguments[t] : e + "/" + arguments[t]);
                return void 0 === e ? "." : n(e)
            }, t.sep = "/"
        },
        7098: function(e, t) {
            "use strict";
            t.cwd = function() {
                return "/"
            }
        },
        5150: function(e) {
            e.exports = function(e) {
                return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
        },
        3408: function(e) {
            e.exports = function() {
                for (var e = {}, n = 0; n < arguments.length; n++) {
                    var r = arguments[n];
                    for (var i in r) t.call(r, i) && (e[i] = r[i])
                }
                return e
            };
            var t = Object.prototype.hasOwnProperty
        },
        7613: function(e, t, n) {
            "use strict";
            var r = n(2890),
                i = n(4885);
            t.default = function(e) {
                var t = e.src,
                    n = e.sizes,
                    i = e.unoptimized,
                    a = void 0 !== i && i,
                    c = e.priority,
                    f = void 0 !== c && c,
                    h = e.loading,
                    v = e.lazyBoundary,
                    g = void 0 === v ? "200px" : v,
                    y = e.className,
                    b = e.quality,
                    x = e.width,
                    w = e.height,
                    O = e.objectFit,
                    P = e.objectPosition,
                    C = e.onLoadingComplete,
                    T = e.loader,
                    I = void 0 === T ? E : T,
                    A = e.placeholder,
                    M = void 0 === A ? "empty" : A,
                    _ = e.blurDataURL,
                    D = function(e, t) {
                        if (null == e) return {};
                        var n, r, i = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                        }
                        return i
                    }(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]),
                    L = n ? "responsive" : "intrinsic";
                "layout" in D && (D.layout && (L = D.layout), delete D.layout);
                var F = "";
                if (function(e) {
                        return "object" === typeof e && (m(e) || function(e) {
                            return void 0 !== e.src
                        }(e))
                    }(t)) {
                    var R = m(t) ? t.default : t;
                    if (!R.src) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(R)));
                    if (_ = _ || R.blurDataURL, F = R.src, (!L || "fill" !== L) && (w = w || R.height, x = x || R.width, !R.height || !R.width)) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(R)))
                }
                t = "string" === typeof t ? t : F;
                var j = S(x),
                    z = S(w),
                    B = S(b),
                    H = !f && ("lazy" === h || "undefined" === typeof h);
                (t.startsWith("data:") || t.startsWith("blob:")) && (a = !0, H = !1);
                d.has(t) && (H = !1);
                0;
                var N, U, W, q = s.useIntersection({
                        rootMargin: g,
                        disabled: !H
                    }),
                    V = r(q, 2),
                    $ = V[0],
                    K = V[1],
                    X = !H || K,
                    Q = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: O,
                        objectPosition: P
                    },
                    Y = "blur" === M ? {
                        filter: "blur(20px)",
                        backgroundSize: O || "cover",
                        backgroundImage: 'url("'.concat(_, '")'),
                        backgroundPosition: P || "0% 0%"
                    } : {};
                if ("fill" === L) N = {
                    display: "block",
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    margin: 0
                };
                else if ("undefined" !== typeof j && "undefined" !== typeof z) {
                    var Z = z / j,
                        G = isNaN(Z) ? "100%" : "".concat(100 * Z, "%");
                    "responsive" === L ? (N = {
                        display: "block",
                        overflow: "hidden",
                        position: "relative",
                        boxSizing: "border-box",
                        margin: 0
                    }, U = {
                        display: "block",
                        boxSizing: "border-box",
                        paddingTop: G
                    }) : "intrinsic" === L ? (N = {
                        display: "inline-block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        position: "relative",
                        boxSizing: "border-box",
                        margin: 0
                    }, U = {
                        boxSizing: "border-box",
                        display: "block",
                        maxWidth: "100%"
                    }, W = '<svg width="'.concat(j, '" height="').concat(z, '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')) : "fixed" === L && (N = {
                        overflow: "hidden",
                        boxSizing: "border-box",
                        display: "inline-block",
                        position: "relative",
                        width: j,
                        height: z
                    })
                } else 0;
                var J = {
                    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                    srcSet: void 0,
                    sizes: void 0
                };
                X && (J = k({
                    src: t,
                    unoptimized: a,
                    layout: L,
                    width: j,
                    quality: B,
                    sizes: n,
                    loader: I
                }));
                var ee = t;
                return o.default.createElement("div", {
                    style: N
                }, U ? o.default.createElement("div", {
                    style: U
                }, W ? o.default.createElement("img", {
                    style: {
                        maxWidth: "100%",
                        display: "block",
                        margin: 0,
                        border: "none",
                        padding: 0
                    },
                    alt: "",
                    "aria-hidden": !0,
                    src: "data:image/svg+xml;base64,".concat(l.toBase64(W))
                }) : null) : null, o.default.createElement("img", Object.assign({}, D, J, {
                    decoding: "async",
                    "data-nimg": L,
                    className: y,
                    ref: function(e) {
                        $(e),
                            function(e, t, n, r, i) {
                                if (!e) return;
                                var o = function() {
                                    e.src.startsWith("data:") || ("decode" in e ? e.decode() : Promise.resolve()).catch((function() {})).then((function() {
                                        if ("blur" === r && (e.style.filter = "none", e.style.backgroundSize = "none", e.style.backgroundImage = "none"), d.add(t), i) {
                                            var n = e.naturalWidth,
                                                o = e.naturalHeight;
                                            i({
                                                naturalWidth: n,
                                                naturalHeight: o
                                            })
                                        }
                                    }))
                                };
                                e.complete ? o() : e.onload = o
                            }(e, ee, 0, M, C)
                    },
                    style: p({}, Q, Y)
                })), o.default.createElement("noscript", null, o.default.createElement("img", Object.assign({}, D, k({
                    src: t,
                    unoptimized: a,
                    layout: L,
                    width: j,
                    quality: B,
                    sizes: n,
                    loader: I
                }), {
                    decoding: "async",
                    "data-nimg": L,
                    style: Q,
                    className: y,
                    loading: h || "lazy"
                }))), f ? o.default.createElement(u.default, null, o.default.createElement("link", {
                    key: "__nimg-" + J.src + J.srcSet + J.sizes,
                    rel: "preload",
                    as: "image",
                    href: J.srcSet ? void 0 : J.src,
                    imagesrcset: J.srcSet,
                    imagesizes: J.sizes
                })) : null)
            };
            var o = f(n(2480)),
                u = f(n(5789)),
                l = n(667),
                a = n(1769),
                s = n(4258);

            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }
            var d = new Set;
            var h = new Map([
                ["default", function(e) {
                    var t = e.root,
                        n = e.src,
                        r = e.width,
                        i = e.quality;
                    0;
                    return "".concat(t, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(i || 75)
                }],
                ["imgix", function(e) {
                    var t = e.root,
                        n = e.src,
                        r = e.width,
                        i = e.quality,
                        o = new URL("".concat(t).concat(O(n))),
                        u = o.searchParams;
                    u.set("auto", u.get("auto") || "format"), u.set("fit", u.get("fit") || "max"), u.set("w", u.get("w") || r.toString()), i && u.set("q", i.toString());
                    return o.href
                }],
                ["cloudinary", function(e) {
                    var t = e.root,
                        n = e.src,
                        r = e.width,
                        i = e.quality,
                        o = ["f_auto", "c_limit", "w_" + r, "q_" + (i || "auto")].join(",") + "/";
                    return "".concat(t).concat(o).concat(O(n))
                }],
                ["akamai", function(e) {
                    var t = e.root,
                        n = e.src,
                        r = e.width;
                    return "".concat(t).concat(O(n), "?imwidth=").concat(r)
                }],
                ["custom", function(e) {
                    var t = e.src;
                    throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                }]
            ]);

            function m(e) {
                return void 0 !== e.default
            }
            var v = {
                    deviceSizes: [360, 680, 1200, 1680, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default"
                } || a.imageConfigDefault,
                g = v.deviceSizes,
                y = v.imageSizes,
                b = v.loader,
                x = v.path,
                w = (v.domains, [].concat(i(g), i(y)));

            function k(e) {
                var t = e.src,
                    n = e.unoptimized,
                    r = e.layout,
                    o = e.width,
                    u = e.quality,
                    l = e.sizes,
                    a = e.loader;
                if (n) return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                };
                var s = function(e, t, n) {
                        if (n && ("fill" === t || "responsive" === t)) {
                            for (var r, o = /(^|\s)(1?\d?\d)vw/g, u = []; r = o.exec(n); r) u.push(parseInt(r[2]));
                            if (u.length) {
                                var l = .01 * Math.min.apply(Math, u);
                                return {
                                    widths: w.filter((function(e) {
                                        return e >= g[0] * l
                                    })),
                                    kind: "w"
                                }
                            }
                            return {
                                widths: w,
                                kind: "w"
                            }
                        }
                        return "number" !== typeof e || "fill" === t || "responsive" === t ? {
                            widths: g,
                            kind: "w"
                        } : {
                            widths: i(new Set([e, 2 * e].map((function(e) {
                                return w.find((function(t) {
                                    return t >= e
                                })) || w[w.length - 1]
                            })))),
                            kind: "x"
                        }
                    }(o, r, l),
                    c = s.widths,
                    f = s.kind,
                    p = c.length - 1;
                return {
                    sizes: l || "w" !== f ? l : "100vw",
                    srcSet: c.map((function(e, n) {
                        return "".concat(a({
                            src: t,
                            quality: u,
                            width: e
                        }), " ").concat("w" === f ? e : n + 1).concat(f)
                    })).join(", "),
                    src: a({
                        src: t,
                        quality: u,
                        width: c[p]
                    })
                }
            }

            function S(e) {
                return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
            }

            function E(e) {
                var t = h.get(b);
                if (t) return t(p({
                    root: x
                }, e));
                throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(a.VALID_LOADERS.join(", "), ". Received: ").concat(b))
            }

            function O(e) {
                return "/" === e[0] ? e.slice(1) : e
            }
            g.sort((function(e, t) {
                return e - t
            })), w.sort((function(e, t) {
                return e - t
            }))
        },
        5398: function(e, t, n) {
            "use strict";
            var r = n(5858);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        r(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.default = function(e, t) {
                var n = u.default,
                    r = {
                        loading: function(e) {
                            e.error, e.isLoading;
                            return e.pastDelay, null
                        }
                    };
                e instanceof Promise ? r.loader = function() {
                    return e
                } : "function" === typeof e ? r.loader = e : "object" === typeof e && (r = o(o({}, r), e));
                var i = r = o(o({}, r), t);
                if (i.suspense) throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");
                if (i.suspense) return n(i);
                r.loadableGenerated && delete(r = o(o({}, r), r.loadableGenerated)).loadableGenerated;
                if ("boolean" === typeof r.ssr) {
                    if (!r.ssr) return delete r.ssr, a(n, r);
                    delete r.ssr
                }
                return n(r)
            };
            l(n(2480));
            var u = l(n(1654));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }
        },
        7749: function(e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LoadableContext = void 0;
            var i = ((r = n(2480)) && r.__esModule ? r : {
                default: r
            }).default.createContext(null);
            t.LoadableContext = i
        },
        1654: function(e, t, n) {
            "use strict";
            var r = n(6949),
                i = n(9535),
                o = n(5858);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        o(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function a(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, u = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return u = e.done, e
                    },
                    e: function(e) {
                        l = !0, o = e
                    },
                    f: function() {
                        try {
                            u || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var c, f = (c = n(2480)) && c.__esModule ? c : {
                    default: c
                },
                p = n(9005),
                d = n(7749);
            var h = [],
                m = [],
                v = !1;

            function g(e) {
                var t = e(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = t.then((function(e) {
                    return n.loading = !1, n.loaded = e, e
                })).catch((function(e) {
                    throw n.loading = !1, n.error = e, e
                })), n
            }
            var y = function() {
                function e(t, n) {
                    r(this, e), this._loadFn = t, this._opts = n, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return i(e, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var e = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var t = this._res,
                            n = this._opts;
                        t.loading && ("number" === typeof n.delay && (0 === n.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                            e._update({
                                pastDelay: !0
                            })
                        }), n.delay)), "number" === typeof n.timeout && (this._timeout = setTimeout((function() {
                            e._update({
                                timedOut: !0
                            })
                        }), n.timeout))), this._res.promise.then((function() {
                            e._update({}), e._clearTimeouts()
                        })).catch((function(t) {
                            e._update({}), e._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        this._state = l(l({}, this._state), {}, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, e), this._callbacks.forEach((function(e) {
                            return e()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(e) {
                        var t = this;
                        return this._callbacks.add(e),
                            function() {
                                t._callbacks.delete(e)
                            }
                    }
                }]), e
            }();

            function b(e) {
                return function(e, t) {
                    var n = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        webpack: null,
                        modules: null,
                        suspense: !1
                    }, t);
                    n.suspense && (n.lazy = f.default.lazy(n.loader));
                    var r = null;

                    function i() {
                        if (!r) {
                            var t = new y(e, n);
                            r = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return r.promise()
                    }
                    if (!v && "function" === typeof n.webpack && !n.suspense) {
                        var o = n.webpack();
                        m.push((function(e) {
                            var t, n = a(o);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value;
                                    if (-1 !== e.indexOf(r)) return i()
                                }
                            } catch (u) {
                                n.e(u)
                            } finally {
                                n.f()
                            }
                        }))
                    }
                    var u = n.suspense ? function(e, t) {
                        return f.default.createElement(n.lazy, l(l({}, e), {}, {
                            ref: t
                        }))
                    } : function(e, t) {
                        i();
                        var o = f.default.useContext(d.LoadableContext),
                            u = p.useSubscription(r);
                        return f.default.useImperativeHandle(t, (function() {
                            return {
                                retry: r.retry
                            }
                        }), []), o && Array.isArray(n.modules) && n.modules.forEach((function(e) {
                            o(e)
                        })), f.default.useMemo((function() {
                            return u.loading || u.error ? f.default.createElement(n.loading, {
                                isLoading: u.loading,
                                pastDelay: u.pastDelay,
                                timedOut: u.timedOut,
                                error: u.error,
                                retry: r.retry
                            }) : u.loaded ? f.default.createElement(function(e) {
                                return e && e.__esModule ? e.default : e
                            }(u.loaded), e) : null
                        }), [e, u])
                    };
                    return u.preload = function() {
                        return !n.suspense && i()
                    }, u.displayName = "LoadableComponent", f.default.forwardRef(u)
                }(g, e)
            }

            function x(e, t) {
                for (var n = []; e.length;) {
                    var r = e.pop();
                    n.push(r(t))
                }
                return Promise.all(n).then((function() {
                    if (e.length) return x(e, t)
                }))
            }
            b.preloadAll = function() {
                return new Promise((function(e, t) {
                    x(h).then(e, t)
                }))
            }, b.preloadReady = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(t) {
                    var n = function() {
                        return v = !0, t()
                    };
                    x(m, e).then(n, n)
                }))
            }, window.__NEXT_PRELOADREADY = b.preloadReady;
            var w = b;
            t.default = w
        },
        667: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toBase64 = function(e) {
                return window.btoa(e)
            }
        },
        4124: function() {},
        2203: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        7185: function(e) {
            "use strict";
            e.exports = JSON.parse('{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}')
        }
    }
]);
//# sourceMappingURL=998-bff30fa226700046a6c4.js.map