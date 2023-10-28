(() => {
  var th = { 'Content-Type': void 0 },
    td = {
      transitional: tr,
      adapter: ['xhr', 'http'],
      transformRequest: [
        function (e, t) {
          let r;
          let i = t.getContentType() || '',
            a = i.indexOf('application/json') > -1,
            s = eb.isObject(e);
          s && eb.isHTMLForm(e) && (e = new FormData(e));
          let o = eb.isFormData(e);
          if (o) return a && a ? JSON.stringify(tc(e)) : e;
          if (
            eb.isArrayBuffer(e) ||
            eb.isBuffer(e) ||
            eb.isStream(e) ||
            eb.isFile(e) ||
            eb.isBlob(e)
          )
            return e;
          if (eb.isArrayBufferView(e)) return e.buffer;
          if (eb.isURLSearchParams(e))
            return (
              t.setContentType(
                'application/x-www-form-urlencoded;charset=utf-8',
                !1
              ),
              e.toString()
            );
          if (s) {
            if (i.indexOf('application/x-www-form-urlencoded') > -1) {
              var l, c;
              return ((l = e),
              (c = this.formSerializer),
              e3(
                l,
                new tl.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (e, t, r, i) {
                      return tl.isNode && eb.isBuffer(e)
                        ? (this.append(t, e.toString('base64')), !1)
                        : i.defaultVisitor.apply(this, arguments);
                    },
                  },
                  c
                )
              )).toString();
            }
            if (
              (r = eb.isFileList(e)) ||
              i.indexOf('multipart/form-data') > -1
            ) {
              let t = this.env && this.env.FormData;
              return e3(
                r ? { 'files[]': e } : e,
                t && new t(),
                this.formSerializer
              );
            }
          }
          return s || a
            ? (t.setContentType('application/json', !1),
              (function (e, t, r) {
                if (eb.isString(e))
                  try {
                    return (0, JSON.parse)(e), eb.trim(e);
                  } catch (e) {
                    if ('SyntaxError' !== e.name) throw e;
                  }
                return (0, JSON.stringify)(e);
              })(e))
            : e;
        },
      ],
      transformResponse: [
        function (e) {
          let t = this.transitional || td.transitional,
            r = t && t.forcedJSONParsing,
            i = 'json' === this.responseType;
          if (e && eb.isString(e) && ((r && !this.responseType) || i)) {
            let r = t && t.silentJSONParsing;
            try {
              return JSON.parse(e);
            } catch (e) {
              if (!r && i) {
                if ('SyntaxError' === e.name)
                  throw ew.from(
                    e,
                    ew.ERR_BAD_RESPONSE,
                    this,
                    null,
                    this.response
                  );
                throw e;
              }
            }
          }
          return e;
        },
      ],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: tl.classes.FormData, Blob: tl.classes.Blob },
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: { common: { Accept: 'application/json, text/plain, */*' } },
    };

  let tU = (function e(t) {
    let r = new tz(t),
      i = z(tz.prototype.request, r);
    return (
      eb.extend(i, tz.prototype, r, { allOwnKeys: !0 }),
      eb.extend(i, r, null, { allOwnKeys: !0 }),
      (i.create = function (r) {
        return e(tP(t, r));
      }),
      i
    );
  })(td);

  let by = tU.create();

  var b,
    w,
    y,
    x,
    k,
    A,
    j,
    S,
    C,
    T,
    E,
    O,
    D,
    I,
    R,
    P =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : {},
    B = P.parcelRequire9a23;

  var L = {},
    N = {},
    B = P.parcelRequire9a23;
  null == B &&
    (((B = function (e) {
      if (e in L) return L[e].exports;
      if (e in N) {
        var t = N[e];
        delete N[e];
        var r = { id: e, exports: {} };
        return (L[e] = r), t.call(r.exports, r, r.exports), r.exports;
      }
      var i = Error("Cannot find module '" + e + "'");
      throw ((i.code = 'MODULE_NOT_FOUND'), i);
    }).register = function (e, t) {
      N[e] = t;
    }),
    (P.parcelRequire9a23 = B)),
    B.register('iUSsr', function (e, t) {
      var r, i;
      (r = 'undefined' != typeof window ? window : e.exports),
        (i = function (e, t) {
          var r,
            i = [],
            a = Object.getPrototypeOf,
            s = i.slice,
            o = i.flat
              ? function (e) {
                  return i.flat.call(e);
                }
              : function (e) {
                  return i.concat.apply([], e);
                },
            l = i.push,
            c = i.indexOf,
            h = {},
            d = h.toString,
            u = h.hasOwnProperty,
            p = u.toString,
            f = p.call(Object),
            _ = {},
            m = function (e) {
              return (
                'function' == typeof e &&
                'number' != typeof e.nodeType &&
                'function' != typeof e.item
              );
            },
            g = function (e) {
              return null != e && e === e.window;
            },
            v = e.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, r) {
            var i,
              a,
              s = (r = r || v).createElement('script');
            if (((s.text = e), t))
              for (i in b)
                (a = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  s.setAttribute(i, a);
            r.head.appendChild(s).parentNode.removeChild(s);
          }
          function y(e) {
            return null == e
              ? e + ''
              : 'object' == typeof e || 'function' == typeof e
              ? h[d.call(e)] || 'object'
              : typeof e;
          }
          var x = '3.7.0',
            k = /HTML$/i,
            A = function (e, t) {
              return new A.fn.init(e, t);
            };
          function j(e) {
            var t = !!e && 'length' in e && e.length,
              r = y(e);
            return (
              !(m(e) || g(e)) &&
              ('array' === r ||
                0 === t ||
                ('number' == typeof t && t > 0 && t - 1 in e))
            );
          }
          function S(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          (A.fn = A.prototype =
            {
              jquery: x,
              constructor: A,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = A.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return A.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  A.map(this, function (t, r) {
                    return e.call(t, r, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  A.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  A.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  r = +e + (e < 0 ? t : 0);
                return this.pushStack(r >= 0 && r < t ? [this[r]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: l,
              sort: i.sort,
              splice: i.splice,
            }),
            (A.extend = A.fn.extend =
              function () {
                var e,
                  t,
                  r,
                  i,
                  a,
                  s,
                  o = arguments[0] || {},
                  l = 1,
                  c = arguments.length,
                  h = !1;
                for (
                  'boolean' == typeof o &&
                    ((h = o), (o = arguments[l] || {}), l++),
                    'object' == typeof o || m(o) || (o = {}),
                    l === c && ((o = this), l--);
                  l < c;
                  l++
                )
                  if (null != (e = arguments[l]))
                    for (t in e)
                      (i = e[t]),
                        '__proto__' !== t &&
                          o !== i &&
                          (h &&
                          i &&
                          (A.isPlainObject(i) || (a = Array.isArray(i)))
                            ? ((r = o[t]),
                              (s =
                                a && !Array.isArray(r)
                                  ? []
                                  : a || A.isPlainObject(r)
                                  ? r
                                  : {}),
                              (a = !1),
                              (o[t] = A.extend(h, s, i)))
                            : void 0 !== i && (o[t] = i));
                return o;
              }),
            A.extend({
              expando: 'jQuery' + (x + Math.random()).replace(/\D/g, ''),
              isReady: !0,
              error: function (e) {
                throw Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, r;
                return (
                  !!e &&
                  '[object Object]' === d.call(e) &&
                  (!(t = a(e)) ||
                    ('function' ==
                      typeof (r = u.call(t, 'constructor') && t.constructor) &&
                      p.call(r) === f))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, r) {
                w(e, { nonce: t && t.nonce }, r);
              },
              each: function (e, t) {
                var r,
                  i = 0;
                if (j(e))
                  for (
                    r = e.length;
                    i < r && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              text: function (e) {
                var t,
                  r = '',
                  i = 0,
                  a = e.nodeType;
                if (a) {
                  if (1 === a || 9 === a || 11 === a) return e.textContent;
                  if (3 === a || 4 === a) return e.nodeValue;
                } else for (; (t = e[i++]); ) r += A.text(t);
                return r;
              },
              makeArray: function (e, t) {
                var r = t || [];
                return (
                  null != e &&
                    (j(Object(e))
                      ? A.merge(r, 'string' == typeof e ? [e] : e)
                      : l.call(r, e)),
                  r
                );
              },
              inArray: function (e, t, r) {
                return null == t ? -1 : c.call(t, e, r);
              },
              isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                  r = e && (e.ownerDocument || e).documentElement;
                return !k.test(t || (r && r.nodeName) || 'HTML');
              },
              merge: function (e, t) {
                for (var r = +t.length, i = 0, a = e.length; i < r; i++)
                  e[a++] = t[i];
                return (e.length = a), e;
              },
              grep: function (e, t, r) {
                for (var i = [], a = 0, s = e.length, o = !r; a < s; a++)
                  !t(e[a], a) !== o && i.push(e[a]);
                return i;
              },
              map: function (e, t, r) {
                var i,
                  a,
                  s = 0,
                  l = [];
                if (j(e))
                  for (i = e.length; s < i; s++)
                    null != (a = t(e[s], s, r)) && l.push(a);
                else for (s in e) null != (a = t(e[s], s, r)) && l.push(a);
                return o(l);
              },
              guid: 1,
              support: _,
            }),
            'function' == typeof Symbol &&
              (A.fn[Symbol.iterator] = i[Symbol.iterator]),
            A.each(
              'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                ' '
              ),
              function (e, t) {
                h['[object ' + t + ']'] = t.toLowerCase();
              }
            );
          var C = i.pop,
            T = i.sort,
            E = i.splice,
            O = '[\\x20\\t\\r\\n\\f]',
            D = RegExp('^' + O + '+|((?:^|[^\\\\])(?:\\\\.)*)' + O + '+$', 'g');
          A.contains = function (e, t) {
            var r = t && t.parentNode;
            return (
              e === r ||
              !!(
                r &&
                1 === r.nodeType &&
                (e.contains
                  ? e.contains(r)
                  : e.compareDocumentPosition &&
                    16 & e.compareDocumentPosition(r))
              )
            );
          };
          var I = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function R(e, t) {
            return t
              ? '\x00' === e
                ? '�'
                : e.slice(0, -1) +
                  '\\' +
                  e.charCodeAt(e.length - 1).toString(16) +
                  ' '
              : '\\' + e;
          }
          (A.escapeSelector = function (e) {
            return (e + '').replace(I, R);
          }),
            (function () {
              var t,
                r,
                a,
                o,
                h,
                d,
                p,
                f,
                m,
                g,
                b = l,
                w = A.expando,
                y = 0,
                x = 0,
                k = er(),
                j = er(),
                I = er(),
                R = er(),
                P = function (e, t) {
                  return e === t && (h = !0), 0;
                },
                M =
                  'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                L =
                  '(?:\\\\[\\da-fA-F]{1,6}' +
                  O +
                  '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+',
                N =
                  '\\[' +
                  O +
                  '*(' +
                  L +
                  ')(?:' +
                  O +
                  '*([*^$|!~]?=)' +
                  O +
                  '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                  L +
                  '))|)' +
                  O +
                  '*\\]',
                B =
                  ':(' +
                  L +
                  ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                  N +
                  ')*)|.*)\\)|)',
                F = RegExp(O + '+', 'g'),
                z = RegExp('^' + O + '*,' + O + '*'),
                W = RegExp('^' + O + '*([>+~]|' + O + ')' + O + '*'),
                H = RegExp(O + '|>'),
                U = new RegExp(B),
                q = RegExp('^' + L + '$'),
                V = {
                  ID: RegExp('^#(' + L + ')'),
                  CLASS: RegExp('^\\.(' + L + ')'),
                  TAG: RegExp('^(' + L + '|[*])'),
                  ATTR: RegExp('^' + N),
                  PSEUDO: RegExp('^' + B),
                  CHILD: RegExp(
                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                      O +
                      '*(even|odd|(([+-]|)(\\d*)n|)' +
                      O +
                      '*(?:([+-]|)' +
                      O +
                      '*(\\d+)|))' +
                      O +
                      '*\\)|)',
                    'i'
                  ),
                  bool: RegExp('^(?:' + M + ')$', 'i'),
                  needsContext: RegExp(
                    '^' +
                      O +
                      '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                      O +
                      '*((?:-\\d)?\\d*)' +
                      O +
                      '*\\)|)(?=[^-]|$)',
                    'i'
                  ),
                },
                Y = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /[+~]/,
                J = RegExp(
                  '\\\\[\\da-fA-F]{1,6}' + O + '?|\\\\([^\\r\\n\\f])',
                  'g'
                ),
                Q = function (e, t) {
                  var r = '0x' + e.slice(1) - 65536;
                  return (
                    t ||
                    (r < 0
                      ? String.fromCharCode(r + 65536)
                      : String.fromCharCode(
                          (r >> 10) | 55296,
                          (1023 & r) | 56320
                        ))
                  );
                },
                Z = function () {
                  el();
                },
                ee = eu(
                  function (e) {
                    return !0 === e.disabled && S(e, 'fieldset');
                  },
                  { dir: 'parentNode', next: 'legend' }
                );
              try {
                b.apply((i = s.call(v.childNodes)), v.childNodes),
                  i[v.childNodes.length].nodeType;
              } catch (e) {
                b = {
                  apply: function (e, t) {
                    l.apply(e, s.call(t));
                  },
                  call: function (e) {
                    l.apply(e, s.call(arguments, 1));
                  },
                };
              }
              function et(e, t, r, i) {
                var a,
                  s,
                  o,
                  l,
                  c,
                  h,
                  u,
                  p = t && t.ownerDocument,
                  g = t ? t.nodeType : 9;
                if (
                  ((r = r || []),
                  'string' != typeof e ||
                    !e ||
                    (1 !== g && 9 !== g && 11 !== g))
                )
                  return r;
                if (!i && (el(t), (t = t || d), f)) {
                  if (11 !== g && (c = X.exec(e))) {
                    if ((a = c[1])) {
                      if (9 === g) {
                        if (!(o = t.getElementById(a))) return r;
                        if (o.id === a) return b.call(r, o), r;
                      } else if (
                        p &&
                        (o = p.getElementById(a)) &&
                        et.contains(t, o) &&
                        o.id === a
                      )
                        return b.call(r, o), r;
                    } else if (c[2])
                      return b.apply(r, t.getElementsByTagName(e)), r;
                    else if ((a = c[3]) && t.getElementsByClassName)
                      return b.apply(r, t.getElementsByClassName(a)), r;
                  }
                  if (!R[e + ' '] && (!m || !m.test(e))) {
                    if (
                      ((u = e), (p = t), 1 === g && (H.test(e) || W.test(e)))
                    ) {
                      for (
                        ((p = (K.test(e) && eo(t.parentNode)) || t) == t &&
                          _.scope) ||
                          ((l = t.getAttribute('id'))
                            ? (l = A.escapeSelector(l))
                            : t.setAttribute('id', (l = w))),
                          s = (h = eh(e)).length;
                        s--;

                      )
                        h[s] = (l ? '#' + l : ':scope') + ' ' + ed(h[s]);
                      u = h.join(',');
                    }
                    try {
                      return b.apply(r, p.querySelectorAll(u)), r;
                    } catch (t) {
                      R(e, !0);
                    } finally {
                      l === w && t.removeAttribute('id');
                    }
                  }
                }
                return em(e.replace(D, '$1'), t, r, i);
              }
              function er() {
                var e = [];
                function t(i, a) {
                  return (
                    e.push(i + ' ') > r.cacheLength && delete t[e.shift()],
                    (t[i + ' '] = a)
                  );
                }
                return t;
              }
              function ei(e) {
                return (e[w] = !0), e;
              }
              function ea(e) {
                var t = d.createElement('fieldset');
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function es(e) {
                return function (t) {
                  if ('form' in t)
                    return t.parentNode && !1 === t.disabled
                      ? 'label' in t
                        ? 'label' in t.parentNode
                          ? t.parentNode.disabled === e
                          : t.disabled === e
                        : t.isDisabled === e ||
                          (!e !== t.isDisabled && ee(t) === e)
                      : t.disabled === e;
                  return 'label' in t && t.disabled === e;
                };
              }
              function en(e) {
                return ei(function (t) {
                  return (
                    (t = +t),
                    ei(function (r, i) {
                      for (var a, s = e([], r.length, t), o = s.length; o--; )
                        r[(a = s[o])] && (r[a] = !(i[a] = r[a]));
                    })
                  );
                });
              }
              function eo(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              function el(e) {
                var t,
                  i = e ? e.ownerDocument || e : v;
                return (
                  i != d &&
                    9 === i.nodeType &&
                    i.documentElement &&
                    ((p = (d = i).documentElement),
                    (f = !A.isXMLDoc(d)),
                    (g =
                      p.matches ||
                      p.webkitMatchesSelector ||
                      p.msMatchesSelector),
                    v != d &&
                      (t = d.defaultView) &&
                      t.top !== t &&
                      t.addEventListener('unload', Z),
                    (_.getById = ea(function (e) {
                      return (
                        (p.appendChild(e).id = A.expando),
                        !d.getElementsByName ||
                          !d.getElementsByName(A.expando).length
                      );
                    })),
                    (_.disconnectedMatch = ea(function (e) {
                      return g.call(e, '*');
                    })),
                    (_.scope = ea(function () {
                      return d.querySelectorAll(':scope');
                    })),
                    (_.cssHas = ea(function () {
                      try {
                        return d.querySelector(':has(*,:jqfake)'), !1;
                      } catch (e) {
                        return !0;
                      }
                    })),
                    _.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(J, Q);
                          return function (e) {
                            return e.getAttribute('id') === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && f) {
                            var r = t.getElementById(e);
                            return r ? [r] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(J, Q);
                          return function (e) {
                            var r =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode('id');
                            return r && r.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && f) {
                            var r,
                              i,
                              a,
                              s = t.getElementById(e);
                            if (s) {
                              if (
                                (r = s.getAttributeNode('id')) &&
                                r.value === e
                              )
                                return [s];
                              for (
                                a = t.getElementsByName(e), i = 0;
                                (s = a[i++]);

                              )
                                if (
                                  (r = s.getAttributeNode('id')) &&
                                  r.value === e
                                )
                                  return [s];
                            }
                            return [];
                          }
                        })),
                    (r.find.TAG = function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : t.querySelectorAll(e);
                    }),
                    (r.find.CLASS = function (e, t) {
                      if (void 0 !== t.getElementsByClassName && f)
                        return t.getElementsByClassName(e);
                    }),
                    (m = []),
                    ea(function (e) {
                      var t;
                      (p.appendChild(e).innerHTML =
                        "<a id='" +
                        w +
                        "' href='' disabled='disabled'></a><select id='" +
                        w +
                        "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                        e.querySelectorAll('[selected]').length ||
                          m.push('\\[' + O + '*(?:value|' + M + ')'),
                        e.querySelectorAll('[id~=' + w + '-]').length ||
                          m.push('~='),
                        e.querySelectorAll('a#' + w + '+*').length ||
                          m.push('.#.+[+~]'),
                        e.querySelectorAll(':checked').length ||
                          m.push(':checked'),
                        (t = d.createElement('input')).setAttribute(
                          'type',
                          'hidden'
                        ),
                        e.appendChild(t).setAttribute('name', 'D'),
                        (p.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(':disabled').length &&
                          m.push(':enabled', ':disabled'),
                        (t = d.createElement('input')).setAttribute('name', ''),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          m.push(
                            '\\[' + O + '*name' + O + '*=' + O + '*(?:\'\'|"")'
                          );
                    }),
                    _.cssHas || m.push(':has'),
                    (m = m.length && new RegExp(m.join('|'))),
                    (P = function (e, t) {
                      if (e === t) return (h = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!_.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e === d ||
                            (e.ownerDocument == v && et.contains(v, e))
                            ? -1
                            : t === d ||
                              (t.ownerDocument == v && et.contains(v, t))
                            ? 1
                            : o
                            ? c.call(o, e) - c.call(o, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    })),
                  d
                );
              }
              for (t in ((et.matches = function (e, t) {
                return et(e, null, null, t);
              }),
              (et.matchesSelector = function (e, t) {
                if ((el(e), f && !R[t + ' '] && (!m || !m.test(t))))
                  try {
                    var r = g.call(e, t);
                    if (
                      r ||
                      _.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return r;
                  } catch (e) {
                    R(t, !0);
                  }
                return et(t, d, null, [e]).length > 0;
              }),
              (et.contains = function (e, t) {
                return (e.ownerDocument || e) != d && el(e), A.contains(e, t);
              }),
              (et.attr = function (e, t) {
                (e.ownerDocument || e) != d && el(e);
                var i = r.attrHandle[t.toLowerCase()],
                  a =
                    i && u.call(r.attrHandle, t.toLowerCase())
                      ? i(e, t, !f)
                      : void 0;
                return void 0 !== a ? a : e.getAttribute(t);
              }),
              (et.error = function (e) {
                throw Error('Syntax error, unrecognized expression: ' + e);
              }),
              (A.uniqueSort = function (e) {
                var t,
                  r = [],
                  i = 0,
                  a = 0;
                if (
                  ((h = !_.sortStable),
                  (o = !_.sortStable && s.call(e, 0)),
                  T.call(e, P),
                  h)
                ) {
                  for (; (t = e[a++]); ) t === e[a] && (i = r.push(a));
                  for (; i--; ) E.call(e, r[i], 1);
                }
                return (o = null), e;
              }),
              (A.fn.uniqueSort = function () {
                return this.pushStack(A.uniqueSort(s.apply(this)));
              }),
              ((r = A.expr =
                {
                  cacheLength: 50,
                  createPseudo: ei,
                  match: V,
                  attrHandle: {},
                  find: {},
                  relative: {
                    '>': { dir: 'parentNode', first: !0 },
                    ' ': { dir: 'parentNode' },
                    '+': { dir: 'previousSibling', first: !0 },
                    '~': { dir: 'previousSibling' },
                  },
                  preFilter: {
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(J, Q)),
                        (e[3] = (e[3] || e[4] || e[5] || '').replace(J, Q)),
                        '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        'nth' === e[1].slice(0, 3)
                          ? (e[3] || et.error(e[0]),
                            (e[4] = +(e[4]
                              ? e[5] + (e[6] || 1)
                              : 2 * ('even' === e[3] || 'odd' === e[3]))),
                            (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                          : e[3] && et.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        r = !e[6] && e[2];
                      return V.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || '')
                            : r &&
                              U.test(r) &&
                              (t = eh(r, !0)) &&
                              (t = r.indexOf(')', r.length - t) - r.length) &&
                              ((e[0] = e[0].slice(0, t)),
                              (e[2] = r.slice(0, t))),
                          e.slice(0, 3));
                    },
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(J, Q).toLowerCase();
                      return '*' === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return S(e, t);
                          };
                    },
                    CLASS: function (e) {
                      var t = k[e + ' '];
                      return (
                        t ||
                        ((t = RegExp('(^|' + O + ')' + e + '(' + O + '|$)')),
                        k(e, function (e) {
                          return t.test(
                            ('string' == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute('class')) ||
                              ''
                          );
                        }))
                      );
                    },
                    ATTR: function (e, t, r) {
                      return function (i) {
                        var a = et.attr(i, e);
                        return null == a
                          ? '!=' === t
                          : !t ||
                              (((a += ''), '=' === t)
                                ? a === r
                                : '!=' === t
                                ? a !== r
                                : '^=' === t
                                ? r && 0 === a.indexOf(r)
                                : '*=' === t
                                ? r && a.indexOf(r) > -1
                                : '$=' === t
                                ? r && a.slice(-r.length) === r
                                : '~=' === t
                                ? (' ' + a.replace(F, ' ') + ' ').indexOf(r) >
                                  -1
                                : '|=' === t &&
                                  (a === r ||
                                    a.slice(0, r.length + 1) === r + '-'));
                      };
                    },
                    CHILD: function (e, t, r, i, a) {
                      var s = 'nth' !== e.slice(0, 3),
                        o = 'last' !== e.slice(-4),
                        l = 'of-type' === t;
                      return 1 === i && 0 === a
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (t, r, c) {
                            var h,
                              d,
                              u,
                              p,
                              f,
                              _ = s !== o ? 'nextSibling' : 'previousSibling',
                              m = t.parentNode,
                              g = l && t.nodeName.toLowerCase(),
                              v = !c && !l,
                              b = !1;
                            if (m) {
                              if (s) {
                                for (; _; ) {
                                  for (u = t; (u = u[_]); )
                                    if (l ? S(u, g) : 1 === u.nodeType)
                                      return !1;
                                  f = _ = 'only' === e && !f && 'nextSibling';
                                }
                                return !0;
                              }
                              if (
                                ((f = [o ? m.firstChild : m.lastChild]), o && v)
                              ) {
                                for (
                                  b =
                                    (p =
                                      (h =
                                        (d = m[w] || (m[w] = {}))[e] ||
                                        [])[0] === y && h[1]) && h[2],
                                    u = p && m.childNodes[p];
                                  (u =
                                    (++p && u && u[_]) ||
                                    (b = p = 0) ||
                                    f.pop());

                                )
                                  if (1 === u.nodeType && ++b && u === t) {
                                    d[e] = [y, p, b];
                                    break;
                                  }
                              } else if (
                                (v &&
                                  (b = p =
                                    (h =
                                      (d = t[w] || (t[w] = {}))[e] || [])[0] ===
                                      y && h[1]),
                                !1 === b)
                              )
                                for (
                                  ;
                                  (u =
                                    (++p && u && u[_]) ||
                                    (b = p = 0) ||
                                    f.pop()) &&
                                  (!((l ? S(u, g) : 1 === u.nodeType) && ++b) ||
                                    (v &&
                                      ((d = u[w] || (u[w] = {}))[e] = [y, b]),
                                    u !== t));

                                );
                              return (
                                (b -= a) === i || (b % i == 0 && b / i >= 0)
                              );
                            }
                          };
                    },
                    PSEUDO: function (e, t) {
                      var i,
                        a =
                          r.pseudos[e] ||
                          r.setFilters[e.toLowerCase()] ||
                          et.error('unsupported pseudo: ' + e);
                      return a[w]
                        ? a(t)
                        : a.length > 1
                        ? ((i = [e, e, '', t]),
                          r.setFilters.hasOwnProperty(e.toLowerCase())
                            ? ei(function (e, r) {
                                for (var i, s = a(e, t), o = s.length; o--; )
                                  (i = c.call(e, s[o])),
                                    (e[i] = !(r[i] = s[o]));
                              })
                            : function (e) {
                                return a(e, 0, i);
                              })
                        : a;
                    },
                  },
                  pseudos: {
                    not: ei(function (e) {
                      var t = [],
                        r = [],
                        i = e_(e.replace(D, '$1'));
                      return i[w]
                        ? ei(function (e, t, r, a) {
                            for (
                              var s, o = i(e, null, a, []), l = e.length;
                              l--;

                            )
                              (s = o[l]) && (e[l] = !(t[l] = s));
                          })
                        : function (e, a, s) {
                            return (
                              (t[0] = e),
                              i(t, null, s, r),
                              (t[0] = null),
                              !r.pop()
                            );
                          };
                    }),
                    has: ei(function (e) {
                      return function (t) {
                        return et(e, t).length > 0;
                      };
                    }),
                    contains: ei(function (e) {
                      return (
                        (e = e.replace(J, Q)),
                        function (t) {
                          return (t.textContent || A.text(t)).indexOf(e) > -1;
                        }
                      );
                    }),
                    lang: ei(function (e) {
                      return (
                        q.test(e || '') || et.error('unsupported lang: ' + e),
                        (e = e.replace(J, Q).toLowerCase()),
                        function (t) {
                          var r;
                          do
                            if (
                              (r = f
                                ? t.lang
                                : t.getAttribute('xml:lang') ||
                                  t.getAttribute('lang'))
                            )
                              return (
                                (r = r.toLowerCase()) === e ||
                                0 === r.indexOf(e + '-')
                              );
                          while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (t) {
                      var r = e.location && e.location.hash;
                      return r && r.slice(1) === t.id;
                    },
                    root: function (e) {
                      return e === p;
                    },
                    focus: function (e) {
                      return (
                        e ===
                          (function () {
                            try {
                              return d.activeElement;
                            } catch (e) {}
                          })() &&
                        d.hasFocus() &&
                        !!(e.type || e.href || ~e.tabIndex)
                      );
                    },
                    enabled: es(!1),
                    disabled: es(!0),
                    checked: function (e) {
                      return (
                        (S(e, 'input') && !!e.checked) ||
                        (S(e, 'option') && !!e.selected)
                      );
                    },
                    selected: function (e) {
                      return (
                        e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                      );
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !r.pseudos.empty(e);
                    },
                    header: function (e) {
                      return G.test(e.nodeName);
                    },
                    input: function (e) {
                      return Y.test(e.nodeName);
                    },
                    button: function (e) {
                      return (
                        (S(e, 'input') && 'button' === e.type) || S(e, 'button')
                      );
                    },
                    text: function (e) {
                      var t;
                      return (
                        S(e, 'input') &&
                        'text' === e.type &&
                        (null == (t = e.getAttribute('type')) ||
                          'text' === t.toLowerCase())
                      );
                    },
                    first: en(function () {
                      return [0];
                    }),
                    last: en(function (e, t) {
                      return [t - 1];
                    }),
                    eq: en(function (e, t, r) {
                      return [r < 0 ? r + t : r];
                    }),
                    even: en(function (e, t) {
                      for (var r = 0; r < t; r += 2) e.push(r);
                      return e;
                    }),
                    odd: en(function (e, t) {
                      for (var r = 1; r < t; r += 2) e.push(r);
                      return e;
                    }),
                    lt: en(function (e, t, r) {
                      var i;
                      for (i = r < 0 ? r + t : r > t ? t : r; --i >= 0; )
                        e.push(i);
                      return e;
                    }),
                    gt: en(function (e, t, r) {
                      for (var i = r < 0 ? r + t : r; ++i < t; ) e.push(i);
                      return e;
                    }),
                  },
                }).pseudos.nth = r.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                r.pseudos[t] = (function (e) {
                  return function (t) {
                    return S(t, 'input') && t.type === e;
                  };
                })(t);
              for (t in { submit: !0, reset: !0 })
                r.pseudos[t] = (function (e) {
                  return function (t) {
                    return (S(t, 'input') || S(t, 'button')) && t.type === e;
                  };
                })(t);
              function ec() {}
              function eh(e, t) {
                var i,
                  a,
                  s,
                  o,
                  l,
                  c,
                  h,
                  d = j[e + ' '];
                if (d) return t ? 0 : d.slice(0);
                for (l = e, c = [], h = r.preFilter; l; ) {
                  for (o in ((!i || (a = z.exec(l))) &&
                    (a && (l = l.slice(a[0].length) || l), c.push((s = []))),
                  (i = !1),
                  (a = W.exec(l)) &&
                    ((i = a.shift()),
                    s.push({ value: i, type: a[0].replace(D, ' ') }),
                    (l = l.slice(i.length))),
                  r.filter))
                    (a = V[o].exec(l)) &&
                      (!h[o] || (a = h[o](a))) &&
                      ((i = a.shift()),
                      s.push({ value: i, type: o, matches: a }),
                      (l = l.slice(i.length)));
                  if (!i) break;
                }
                return t ? l.length : l ? et.error(e) : j(e, c).slice(0);
              }
              function ed(e) {
                for (var t = 0, r = e.length, i = ''; t < r; t++)
                  i += e[t].value;
                return i;
              }
              function eu(e, t, r) {
                var i = t.dir,
                  a = t.next,
                  s = a || i,
                  o = r && 'parentNode' === s,
                  l = x++;
                return t.first
                  ? function (t, r, a) {
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || o) return e(t, r, a);
                      return !1;
                    }
                  : function (t, r, c) {
                      var h,
                        d,
                        u = [y, l];
                      if (c) {
                        for (; (t = t[i]); )
                          if ((1 === t.nodeType || o) && e(t, r, c)) return !0;
                      } else
                        for (; (t = t[i]); )
                          if (1 === t.nodeType || o) {
                            if (((d = t[w] || (t[w] = {})), a && S(t, a)))
                              t = t[i] || t;
                            else {
                              if ((h = d[s]) && h[0] === y && h[1] === l)
                                return (u[2] = h[2]);
                              if (((d[s] = u), (u[2] = e(t, r, c)))) return !0;
                            }
                          }
                      return !1;
                    };
              }
              function ep(e) {
                return e.length > 1
                  ? function (t, r, i) {
                      for (var a = e.length; a--; )
                        if (!e[a](t, r, i)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function ef(e, t, r, i, a) {
                for (
                  var s, o = [], l = 0, c = e.length, h = null != t;
                  l < c;
                  l++
                )
                  (s = e[l]) &&
                    (!r || r(s, i, a)) &&
                    (o.push(s), h && t.push(l));
                return o;
              }
              function e_(e, t) {
                var i,
                  s,
                  o,
                  l,
                  h = [],
                  u = [],
                  p = I[e + ' '];
                if (!p) {
                  for (t || (t = eh(e)), l = t.length; l--; )
                    (p = (function e(t) {
                      for (
                        var i,
                          s,
                          o,
                          l = t.length,
                          h = r.relative[t[0].type],
                          d = h || r.relative[' '],
                          u = h ? 1 : 0,
                          p = eu(
                            function (e) {
                              return e === i;
                            },
                            d,
                            !0
                          ),
                          f = eu(
                            function (e) {
                              return c.call(i, e) > -1;
                            },
                            d,
                            !0
                          ),
                          _ = [
                            function (e, t, r) {
                              var s =
                                (!h && (r || t != a)) ||
                                ((i = t).nodeType ? p(e, t, r) : f(e, t, r));
                              return (i = null), s;
                            },
                          ];
                        u < l;
                        u++
                      )
                        if ((s = r.relative[t[u].type])) _ = [eu(ep(_), s)];
                        else {
                          if (
                            (s = r.filter[t[u].type].apply(null, t[u].matches))[
                              w
                            ]
                          ) {
                            for (o = ++u; o < l && !r.relative[t[o].type]; o++);
                            return (function e(t, r, i, a, s, o) {
                              return (
                                a && !a[w] && (a = e(a)),
                                s && !s[w] && (s = e(s, o)),
                                ei(function (e, o, l, h) {
                                  var d,
                                    u,
                                    p,
                                    f,
                                    _ = [],
                                    m = [],
                                    g = o.length,
                                    v =
                                      e ||
                                      (function (e, t, r) {
                                        for (
                                          var i = 0, a = t.length;
                                          i < a;
                                          i++
                                        )
                                          et(e, t[i], r);
                                        return r;
                                      })(r || '*', l.nodeType ? [l] : l, []),
                                    w = t && (e || !r) ? ef(v, _, t, l, h) : v;
                                  if (
                                    (i
                                      ? i(
                                          w,
                                          (f = s || (e ? t : g || a) ? [] : o),
                                          l,
                                          h
                                        )
                                      : (f = w),
                                    a)
                                  )
                                    for (
                                      d = ef(f, m),
                                        a(d, [], l, h),
                                        u = d.length;
                                      u--;

                                    )
                                      (p = d[u]) && (f[m[u]] = !(w[m[u]] = p));
                                  if (e) {
                                    if (s || t) {
                                      if (s) {
                                        for (d = [], u = f.length; u--; )
                                          (p = f[u]) && d.push((w[u] = p));
                                        s(null, (f = []), d, h);
                                      }
                                      for (u = f.length; u--; )
                                        (p = f[u]) &&
                                          (d = s ? c.call(e, p) : _[u]) > -1 &&
                                          (e[d] = !(o[d] = p));
                                    }
                                  } else (f = ef(f === o ? f.splice(g, f.length) : f)), s ? s(null, o, f, h) : b.apply(o, f);
                                })
                              );
                            })(
                              u > 1 && ep(_),
                              u > 1 &&
                                ed(
                                  t.slice(0, u - 1).concat({
                                    value: ' ' === t[u - 2].type ? '*' : '',
                                  })
                                ).replace(D, '$1'),
                              s,
                              u < o && e(t.slice(u, o)),
                              o < l && e((t = t.slice(o))),
                              o < l && ed(t)
                            );
                          }
                          _.push(s);
                        }
                      return ep(_);
                    })(t[l]))[w]
                      ? h.push(p)
                      : u.push(p);
                  (p = I(
                    e,
                    ((i = h.length > 0),
                    (s = u.length > 0),
                    (o = function (e, t, o, l, c) {
                      var p,
                        _,
                        m,
                        g = 0,
                        v = '0',
                        w = e && [],
                        x = [],
                        k = a,
                        j = e || (s && r.find.TAG('*', c)),
                        S = (y += null == k ? 1 : Math.random() || 0.1),
                        T = j.length;
                      for (
                        c && (a = t == d || t || c);
                        v !== T && null != (p = j[v]);
                        v++
                      ) {
                        if (s && p) {
                          for (
                            _ = 0,
                              t || p.ownerDocument == d || (el(p), (o = !f));
                            (m = u[_++]);

                          )
                            if (m(p, t || d, o)) {
                              b.call(l, p);
                              break;
                            }
                          c && (y = S);
                        }
                        i && ((p = !m && p) && g--, e && w.push(p));
                      }
                      if (((g += v), i && v !== g)) {
                        for (_ = 0; (m = h[_++]); ) m(w, x, t, o);
                        if (e) {
                          if (g > 0)
                            for (; v--; ) w[v] || x[v] || (x[v] = C.call(l));
                          x = ef(x);
                        }
                        b.apply(l, x),
                          c &&
                            !e &&
                            x.length > 0 &&
                            g + h.length > 1 &&
                            A.uniqueSort(l);
                      }
                      return c && ((y = S), (a = k)), w;
                    }),
                    i ? ei(o) : o)
                  )).selector = e;
                }
                return p;
              }
              function em(e, t, i, a) {
                var s,
                  o,
                  l,
                  c,
                  h,
                  d = 'function' == typeof e && e,
                  u = !a && eh((e = d.selector || e));
                if (((i = i || []), 1 === u.length)) {
                  if (
                    (o = u[0] = u[0].slice(0)).length > 2 &&
                    'ID' === (l = o[0]).type &&
                    9 === t.nodeType &&
                    f &&
                    r.relative[o[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(l.matches[0].replace(J, Q), t) || [])[0])
                    )
                      return i;
                    d && (t = t.parentNode),
                      (e = e.slice(o.shift().value.length));
                  }
                  for (
                    s = V.needsContext.test(e) ? 0 : o.length;
                    s-- && ((l = o[s]), !r.relative[(c = l.type)]);

                  )
                    if (
                      (h = r.find[c]) &&
                      (a = h(
                        l.matches[0].replace(J, Q),
                        (K.test(o[0].type) && eo(t.parentNode)) || t
                      ))
                    ) {
                      if ((o.splice(s, 1), !(e = a.length && ed(o))))
                        return b.apply(i, a), i;
                      break;
                    }
                }
                return (
                  (d || e_(e, u))(
                    a,
                    t,
                    !f,
                    i,
                    !t || (K.test(e) && eo(t.parentNode)) || t
                  ),
                  i
                );
              }
              (ec.prototype = r.filters = r.pseudos),
                (r.setFilters = new ec()),
                (_.sortStable = w.split('').sort(P).join('') === w),
                el(),
                (_.sortDetached = ea(function (e) {
                  return (
                    1 & e.compareDocumentPosition(d.createElement('fieldset'))
                  );
                })),
                (A.find = et),
                (A.expr[':'] = A.expr.pseudos),
                (A.unique = A.uniqueSort),
                (et.compile = e_),
                (et.select = em),
                (et.setDocument = el),
                (et.escape = A.escapeSelector),
                (et.getText = A.text),
                (et.isXML = A.isXMLDoc),
                (et.selectors = A.expr),
                (et.support = A.support),
                (et.uniqueSort = A.uniqueSort);
            })();
          var P = function (e, t, r) {
              for (
                var i = [], a = void 0 !== r;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (a && A(e).is(r)) break;
                  i.push(e);
                }
              return i;
            },
            M = function (e, t) {
              for (var r = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && r.push(e);
              return r;
            },
            L = A.expr.match.needsContext,
            N =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function B(e, t, r) {
            return m(t)
              ? A.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== r;
                })
              : t.nodeType
              ? A.grep(e, function (e) {
                  return (e === t) !== r;
                })
              : 'string' != typeof t
              ? A.grep(e, function (e) {
                  return c.call(t, e) > -1 !== r;
                })
              : A.filter(t, e, r);
          }
          (A.filter = function (e, t, r) {
            var i = t[0];
            return (r && (e = ':not(' + e + ')'),
            1 === t.length && 1 === i.nodeType)
              ? A.find.matchesSelector(i, e)
                ? [i]
                : []
              : A.find.matches(
                  e,
                  A.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                );
          }),
            A.fn.extend({
              find: function (e) {
                var t,
                  r,
                  i = this.length,
                  a = this;
                if ('string' != typeof e)
                  return this.pushStack(
                    A(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (A.contains(a[t], this)) return !0;
                    })
                  );
                for (t = 0, r = this.pushStack([]); t < i; t++)
                  A.find(e, a[t], r);
                return i > 1 ? A.uniqueSort(r) : r;
              },
              filter: function (e) {
                return this.pushStack(B(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(B(this, e || [], !0));
              },
              is: function (e) {
                return !!B(
                  this,
                  'string' == typeof e && L.test(e) ? A(e) : e || [],
                  !1
                ).length;
              },
            });
          var F,
            z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((A.fn.init = function (e, t, r) {
            var i, a;
            if (!e) return this;
            if (((r = r || F), 'string' == typeof e)) {
              if (
                (i =
                  '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : z.exec(e)) &&
                (i[1] || !t)
              ) {
                if (!i[1])
                  return (
                    (a = v.getElementById(i[2])) &&
                      ((this[0] = a), (this.length = 1)),
                    this
                  );
                if (
                  ((t = t instanceof A ? t[0] : t),
                  A.merge(
                    this,
                    A.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : v,
                      !0
                    )
                  ),
                  N.test(i[1]) && A.isPlainObject(t))
                )
                  for (i in t) m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return !t || t.jquery
                ? (t || r).find(e)
                : this.constructor(t).find(e);
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : m(e)
              ? void 0 !== r.ready
                ? r.ready(e)
                : e(A)
              : A.makeArray(e, this);
          }).prototype = A.fn),
            (F = A(v));
          var W = /^(?:parents|prev(?:Until|All))/,
            H = { children: !0, contents: !0, next: !0, prev: !0 };
          function U(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          A.fn.extend({
            has: function (e) {
              var t = A(e, this),
                r = t.length;
              return this.filter(function () {
                for (var e = 0; e < r; e++)
                  if (A.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var r,
                i = 0,
                a = this.length,
                s = [],
                o = 'string' != typeof e && A(e);
              if (!L.test(e)) {
                for (; i < a; i++)
                  for (r = this[i]; r && r !== t; r = r.parentNode)
                    if (
                      r.nodeType < 11 &&
                      (o
                        ? o.index(r) > -1
                        : 1 === r.nodeType && A.find.matchesSelector(r, e))
                    ) {
                      s.push(r);
                      break;
                    }
              }
              return this.pushStack(s.length > 1 ? A.uniqueSort(s) : s);
            },
            index: function (e) {
              return e
                ? 'string' == typeof e
                  ? c.call(A(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(A.uniqueSort(A.merge(this.get(), A(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            A.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return P(e, 'parentNode');
                },
                parentsUntil: function (e, t, r) {
                  return P(e, 'parentNode', r);
                },
                next: function (e) {
                  return U(e, 'nextSibling');
                },
                prev: function (e) {
                  return U(e, 'previousSibling');
                },
                nextAll: function (e) {
                  return P(e, 'nextSibling');
                },
                prevAll: function (e) {
                  return P(e, 'previousSibling');
                },
                nextUntil: function (e, t, r) {
                  return P(e, 'nextSibling', r);
                },
                prevUntil: function (e, t, r) {
                  return P(e, 'previousSibling', r);
                },
                siblings: function (e) {
                  return M((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return M(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (S(e, 'template') && (e = e.content || e),
                      A.merge([], e.childNodes));
                },
              },
              function (e, t) {
                A.fn[e] = function (r, i) {
                  var a = A.map(this, t, r);
                  return (
                    'Until' !== e.slice(-5) && (i = r),
                    i && 'string' == typeof i && (a = A.filter(i, a)),
                    this.length > 1 &&
                      (H[e] || A.uniqueSort(a), W.test(e) && a.reverse()),
                    this.pushStack(a)
                  );
                };
              }
            );
          var q = /[^\x20\t\r\n\f]+/g;
          function V(e) {
            return e;
          }
          function Y(e) {
            throw e;
          }
          function G(e, t, r, i) {
            var a;
            try {
              e && m((a = e.promise))
                ? a.call(e).done(t).fail(r)
                : e && m((a = e.then))
                ? a.call(e, t, r)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              r.apply(void 0, [e]);
            }
          }
          (A.Callbacks = function (e) {
            e =
              'string' == typeof e
                ? ((t = e),
                  (r = {}),
                  A.each(t.match(q) || [], function (e, t) {
                    r[t] = !0;
                  }),
                  r)
                : A.extend({}, e);
            var t,
              r,
              i,
              a,
              s,
              o,
              l = [],
              c = [],
              h = -1,
              d = function () {
                for (o = o || e.once, s = i = !0; c.length; h = -1)
                  for (a = c.shift(); ++h < l.length; )
                    !1 === l[h].apply(a[0], a[1]) &&
                      e.stopOnFalse &&
                      ((h = l.length), (a = !1));
                e.memory || (a = !1), (i = !1), o && (l = a ? [] : '');
              },
              u = {
                add: function () {
                  return (
                    l &&
                      (a && !i && ((h = l.length - 1), c.push(a)),
                      (function t(r) {
                        A.each(r, function (r, i) {
                          m(i)
                            ? (e.unique && u.has(i)) || l.push(i)
                            : i && i.length && 'string' !== y(i) && t(i);
                        });
                      })(arguments),
                      a && !i && d()),
                    this
                  );
                },
                remove: function () {
                  return (
                    A.each(arguments, function (e, t) {
                      for (var r; (r = A.inArray(t, l, r)) > -1; )
                        l.splice(r, 1), r <= h && h--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? A.inArray(e, l) > -1 : l.length > 0;
                },
                empty: function () {
                  return l && (l = []), this;
                },
                disable: function () {
                  return (o = c = []), (l = a = ''), this;
                },
                disabled: function () {
                  return !l;
                },
                lock: function () {
                  return (o = c = []), a || i || (l = a = ''), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (e, t) {
                  return (
                    o ||
                      ((t = t || []),
                      (t = [e, t.slice ? t.slice() : t]),
                      c.push(t),
                      i || d()),
                    this
                  );
                },
                fire: function () {
                  return u.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!s;
                },
              };
            return u;
          }),
            A.extend({
              Deferred: function (t) {
                var r = [
                    [
                      'notify',
                      'progress',
                      A.Callbacks('memory'),
                      A.Callbacks('memory'),
                      2,
                    ],
                    [
                      'resolve',
                      'done',
                      A.Callbacks('once memory'),
                      A.Callbacks('once memory'),
                      0,
                      'resolved',
                    ],
                    [
                      'reject',
                      'fail',
                      A.Callbacks('once memory'),
                      A.Callbacks('once memory'),
                      1,
                      'rejected',
                    ],
                  ],
                  i = 'pending',
                  a = {
                    state: function () {
                      return i;
                    },
                    always: function () {
                      return s.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return a.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return A.Deferred(function (t) {
                        A.each(r, function (r, i) {
                          var a = m(e[i[4]]) && e[i[4]];
                          s[i[1]](function () {
                            var e = a && a.apply(this, arguments);
                            e && m(e.promise)
                              ? e
                                  .promise()
                                  .progress(t.notify)
                                  .done(t.resolve)
                                  .fail(t.reject)
                              : t[i[0] + 'With'](this, a ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (t, i, a) {
                      var s = 0;
                      function o(t, r, i, a) {
                        return function () {
                          var l = this,
                            c = arguments,
                            h = function () {
                              var e, h;
                              if (!(t < s)) {
                                if ((e = i.apply(l, c)) === r.promise())
                                  throw TypeError('Thenable self-resolution');
                                m(
                                  (h =
                                    e &&
                                    ('object' == typeof e ||
                                      'function' == typeof e) &&
                                    e.then)
                                )
                                  ? a
                                    ? h.call(e, o(s, r, V, a), o(s, r, Y, a))
                                    : (s++,
                                      h.call(
                                        e,
                                        o(s, r, V, a),
                                        o(s, r, Y, a),
                                        o(s, r, V, r.notifyWith)
                                      ))
                                  : (i !== V && ((l = void 0), (c = [e])),
                                    (a || r.resolveWith)(l, c));
                              }
                            },
                            d = a
                              ? h
                              : function () {
                                  try {
                                    h();
                                  } catch (e) {
                                    A.Deferred.exceptionHook &&
                                      A.Deferred.exceptionHook(e, d.error),
                                      t + 1 >= s &&
                                        (i !== Y && ((l = void 0), (c = [e])),
                                        r.rejectWith(l, c));
                                  }
                                };
                          t
                            ? d()
                            : (A.Deferred.getErrorHook
                                ? (d.error = A.Deferred.getErrorHook())
                                : A.Deferred.getStackHook &&
                                  (d.error = A.Deferred.getStackHook()),
                              e.setTimeout(d));
                        };
                      }
                      return A.Deferred(function (e) {
                        r[0][3].add(o(0, e, m(a) ? a : V, e.notifyWith)),
                          r[1][3].add(o(0, e, m(t) ? t : V)),
                          r[2][3].add(o(0, e, m(i) ? i : Y));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? A.extend(e, a) : a;
                    },
                  },
                  s = {};
                return (
                  A.each(r, function (e, t) {
                    var o = t[2],
                      l = t[5];
                    (a[t[1]] = o.add),
                      l &&
                        o.add(
                          function () {
                            i = l;
                          },
                          r[3 - e][2].disable,
                          r[3 - e][3].disable,
                          r[0][2].lock,
                          r[0][3].lock
                        ),
                      o.add(t[3].fire),
                      (s[t[0]] = function () {
                        return (
                          s[t[0] + 'With'](
                            this === s ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (s[t[0] + 'With'] = o.fireWith);
                  }),
                  a.promise(s),
                  t && t.call(s, s),
                  s
                );
              },
              when: function (e) {
                var t = arguments.length,
                  r = t,
                  i = Array(r),
                  a = s.call(arguments),
                  o = A.Deferred(),
                  l = function (e) {
                    return function (r) {
                      (i[e] = this),
                        (a[e] = arguments.length > 1 ? s.call(arguments) : r),
                        --t || o.resolveWith(i, a);
                    };
                  };
                if (
                  t <= 1 &&
                  (G(e, o.done(l(r)).resolve, o.reject, !t),
                  'pending' === o.state() || m(a[r] && a[r].then))
                )
                  return o.then();
                for (; r--; ) G(a[r], l(r), o.reject);
                return o.promise();
              },
            });
          var X = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (A.Deferred.exceptionHook = function (t, r) {
            e.console &&
              e.console.warn &&
              t &&
              X.test(t.name) &&
              e.console.warn(
                'jQuery.Deferred exception: ' + t.message,
                t.stack,
                r
              );
          }),
            (A.readyException = function (t) {
              e.setTimeout(function () {
                throw t;
              });
            });
          var K = A.Deferred();
          function J() {
            v.removeEventListener('DOMContentLoaded', J),
              e.removeEventListener('load', J),
              A.ready();
          }
          (A.fn.ready = function (e) {
            return (
              K.then(e).catch(function (e) {
                A.readyException(e);
              }),
              this
            );
          }),
            A.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                !(!0 === e ? --A.readyWait : A.isReady) &&
                  ((A.isReady = !0),
                  (!0 !== e && --A.readyWait > 0) || K.resolveWith(v, [A]));
              },
            }),
            (A.ready.then = K.then),
            'complete' !== v.readyState &&
            ('loading' === v.readyState || v.documentElement.doScroll)
              ? (v.addEventListener('DOMContentLoaded', J),
                e.addEventListener('load', J))
              : e.setTimeout(A.ready);
          var Q = function (e, t, r, i, a, s, o) {
              var l = 0,
                c = e.length,
                h = null == r;
              if ('object' === y(r))
                for (l in ((a = !0), r)) Q(e, t, l, r[l], !0, s, o);
              else if (
                void 0 !== i &&
                ((a = !0),
                m(i) || (o = !0),
                h &&
                  (o
                    ? (t.call(e, i), (t = null))
                    : ((h = t),
                      (t = function (e, t, r) {
                        return h.call(A(e), r);
                      }))),
                t)
              )
                for (; l < c; l++)
                  t(e[l], r, o ? i : i.call(e[l], l, t(e[l], r)));
              return a ? e : h ? t.call(e) : c ? t(e[0], r) : s;
            },
            Z = /^-ms-/,
            ee = /-([a-z])/g;
          function et(e, t) {
            return t.toUpperCase();
          }
          function er(e) {
            return e.replace(Z, 'ms-').replace(ee, et);
          }
          var ei = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function ea() {
            this.expando = A.expando + ea.uid++;
          }
          (ea.uid = 1),
            (ea.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  !t &&
                    ((t = {}),
                    ei(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, r) {
                var i,
                  a = this.cache(e);
                if ('string' == typeof t) a[er(t)] = r;
                else for (i in t) a[er(i)] = t[i];
                return a;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][er(t)];
              },
              access: function (e, t, r) {
                return void 0 === t ||
                  (t && 'string' == typeof t && void 0 === r)
                  ? this.get(e, t)
                  : (this.set(e, t, r), void 0 !== r ? r : t);
              },
              remove: function (e, t) {
                var r,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t)
                    for (
                      r = (t = Array.isArray(t)
                        ? t.map(er)
                        : ((t = er(t)) in i)
                        ? [t]
                        : t.match(q) || []).length;
                      r--;

                    )
                      delete i[t[r]];
                  (void 0 === t || A.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !A.isEmptyObject(t);
              },
            });
          var es = new ea(),
            en = new ea(),
            eo = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            el = /[A-Z]/g;
          function ec(e, t, r) {
            var i, a;
            if (void 0 === r && 1 === e.nodeType) {
              if (
                ((i = 'data-' + t.replace(el, '-$&').toLowerCase()),
                'string' == typeof (r = e.getAttribute(i)))
              ) {
                try {
                  (a = r),
                    (r =
                      'true' === a ||
                      ('false' !== a &&
                        ('null' === a
                          ? null
                          : a === +a + ''
                          ? +a
                          : eo.test(a)
                          ? JSON.parse(a)
                          : a)));
                } catch (e) {}
                en.set(e, t, r);
              } else r = void 0;
            }
            return r;
          }
          A.extend({
            hasData: function (e) {
              return en.hasData(e) || es.hasData(e);
            },
            data: function (e, t, r) {
              return en.access(e, t, r);
            },
            removeData: function (e, t) {
              en.remove(e, t);
            },
            _data: function (e, t, r) {
              return es.access(e, t, r);
            },
            _removeData: function (e, t) {
              es.remove(e, t);
            },
          }),
            A.fn.extend({
              data: function (e, t) {
                var r,
                  i,
                  a,
                  s = this[0],
                  o = s && s.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((a = en.get(s)),
                    1 === s.nodeType && !es.get(s, 'hasDataAttrs'))
                  ) {
                    for (r = o.length; r--; )
                      o[r] &&
                        0 === (i = o[r].name).indexOf('data-') &&
                        ec(s, (i = er(i.slice(5))), a[i]);
                    es.set(s, 'hasDataAttrs', !0);
                  }
                  return a;
                }
                return 'object' == typeof e
                  ? this.each(function () {
                      en.set(this, e);
                    })
                  : Q(
                      this,
                      function (t) {
                        var r;
                        if (s && void 0 === t)
                          return void 0 !== (r = en.get(s, e)) ||
                            void 0 !== (r = ec(s, e))
                            ? r
                            : void 0;
                        this.each(function () {
                          en.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  en.remove(this, e);
                });
              },
            }),
            A.extend({
              queue: function (e, t, r) {
                var i;
                if (e)
                  return (
                    (t = (t || 'fx') + 'queue'),
                    (i = es.get(e, t)),
                    r &&
                      (!i || Array.isArray(r)
                        ? (i = es.access(e, t, A.makeArray(r)))
                        : i.push(r)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || 'fx';
                var r = A.queue(e, t),
                  i = r.length,
                  a = r.shift(),
                  s = A._queueHooks(e, t);
                'inprogress' === a && ((a = r.shift()), i--),
                  a &&
                    ('fx' === t && r.unshift('inprogress'),
                    delete s.stop,
                    a.call(
                      e,
                      function () {
                        A.dequeue(e, t);
                      },
                      s
                    )),
                  !i && s && s.empty.fire();
              },
              _queueHooks: function (e, t) {
                var r = t + 'queueHooks';
                return (
                  es.get(e, r) ||
                  es.access(e, r, {
                    empty: A.Callbacks('once memory').add(function () {
                      es.remove(e, [t + 'queue', r]);
                    }),
                  })
                );
              },
            }),
            A.fn.extend({
              queue: function (e, t) {
                var r = 2;
                return ('string' != typeof e && ((t = e), (e = 'fx'), r--),
                arguments.length < r)
                  ? A.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var r = A.queue(this, e, t);
                      A._queueHooks(this, e),
                        'fx' === e &&
                          'inprogress' !== r[0] &&
                          A.dequeue(this, e);
                    });
              },
              dequeue: function (e) {
                return this.each(function () {
                  A.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || 'fx', []);
              },
              promise: function (e, t) {
                var r,
                  i = 1,
                  a = A.Deferred(),
                  s = this,
                  o = this.length,
                  l = function () {
                    --i || a.resolveWith(s, [s]);
                  };
                for (
                  'string' != typeof e && ((t = e), (e = void 0)),
                    e = e || 'fx';
                  o--;

                )
                  (r = es.get(s[o], e + 'queueHooks')) &&
                    r.empty &&
                    (i++, r.empty.add(l));
                return l(), a.promise(t);
              },
            });
          var eh = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ed = RegExp('^(?:([+-])=|)(' + eh + ')([a-z%]*)$', 'i'),
            eu = ['Top', 'Right', 'Bottom', 'Left'],
            ep = v.documentElement,
            ef = function (e) {
              return A.contains(e.ownerDocument, e);
            },
            e_ = { composed: !0 };
          ep.getRootNode &&
            (ef = function (e) {
              return (
                A.contains(e.ownerDocument, e) ||
                e.getRootNode(e_) === e.ownerDocument
              );
            });
          var em = function (e, t) {
            return (
              'none' === (e = t || e).style.display ||
              ('' === e.style.display &&
                ef(e) &&
                'none' === A.css(e, 'display'))
            );
          };
          function eg(e, t, r, i) {
            var a,
              s,
              o = 20,
              l = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return A.css(e, t, '');
                  },
              c = l(),
              h = (r && r[3]) || (A.cssNumber[t] ? '' : 'px'),
              d =
                e.nodeType &&
                (A.cssNumber[t] || ('px' !== h && +c)) &&
                ed.exec(A.css(e, t));
            if (d && d[3] !== h) {
              for (c /= 2, h = h || d[3], d = +c || 1; o--; )
                A.style(e, t, d + h),
                  (1 - s) * (1 - (s = l() / c || 0.5)) <= 0 && (o = 0),
                  (d /= s);
              (d *= 2), A.style(e, t, d + h), (r = r || []);
            }
            return (
              r &&
                ((d = +d || +c || 0),
                (a = r[1] ? d + (r[1] + 1) * r[2] : +r[2]),
                i && ((i.unit = h), (i.start = d), (i.end = a))),
              a
            );
          }
          var ev = {};
          function eb(e, t) {
            for (var r, i, a = [], s = 0, o = e.length; s < o; s++)
              (i = e[s]).style &&
                ((r = i.style.display),
                t
                  ? ('none' !== r ||
                      ((a[s] = es.get(i, 'display') || null),
                      a[s] || (i.style.display = '')),
                    '' === i.style.display &&
                      em(i) &&
                      (a[s] = (function (e) {
                        var t,
                          r = e.ownerDocument,
                          i = e.nodeName,
                          a = ev[i];
                        return (
                          a ||
                            ((t = r.body.appendChild(r.createElement(i))),
                            (a = A.css(t, 'display')),
                            t.parentNode.removeChild(t),
                            'none' === a && (a = 'block'),
                            (ev[i] = a)),
                          a
                        );
                      })(i)))
                  : 'none' !== r && ((a[s] = 'none'), es.set(i, 'display', r)));
            for (s = 0; s < o; s++) null != a[s] && (e[s].style.display = a[s]);
            return e;
          }
          A.fn.extend({
            show: function () {
              return eb(this, !0);
            },
            hide: function () {
              return eb(this);
            },
            toggle: function (e) {
              return 'boolean' == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    em(this) ? A(this).show() : A(this).hide();
                  });
            },
          });
          var ew = /^(?:checkbox|radio)$/i,
            ey = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ex = /^$|^module$|\/(?:java|ecma)script/i;
          (e4 = v.createDocumentFragment().appendChild(v.createElement('div'))),
            (e6 = v.createElement('input')).setAttribute('type', 'radio'),
            e6.setAttribute('checked', 'checked'),
            e6.setAttribute('name', 't'),
            e4.appendChild(e6),
            (_.checkClone = e4.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e4.innerHTML = '<textarea>x</textarea>'),
            (_.noCloneChecked = !!e4.cloneNode(!0).lastChild.defaultValue),
            (e4.innerHTML = '<option></option>'),
            (_.option = !!e4.lastChild);
          var ek = {
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', ''],
          };
          function eA(e, t) {
            var r;
            return ((r =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || '*')
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || '*')
                : []),
            void 0 === t || (t && S(e, t)))
              ? A.merge([e], r)
              : r;
          }
          function e$(e, t) {
            for (var r = 0, i = e.length; r < i; r++)
              es.set(e[r], 'globalEval', !t || es.get(t[r], 'globalEval'));
          }
          (ek.tbody = ek.tfoot = ek.colgroup = ek.caption = ek.thead),
            (ek.th = ek.td),
            _.option ||
              (ek.optgroup = ek.option =
                [1, "<select multiple='multiple'>", '</select>']);
          var ej = /<|&#?\w+;/;
          function eS(e, t, r, i, a) {
            for (
              var s,
                o,
                l,
                c,
                h,
                d = t.createDocumentFragment(),
                u = [],
                p = 0,
                f = e.length;
              p < f;
              p++
            )
              if ((s = e[p]) || 0 === s) {
                if ('object' === y(s)) A.merge(u, s.nodeType ? [s] : s);
                else if (ej.test(s)) {
                  for (
                    o = o || d.appendChild(t.createElement('div')),
                      l =
                        ek[(ey.exec(s) || ['', ''])[1].toLowerCase()] ||
                        ek._default,
                      o.innerHTML = l[1] + A.htmlPrefilter(s) + l[2],
                      h = l[0];
                    h--;

                  )
                    o = o.lastChild;
                  A.merge(u, o.childNodes),
                    ((o = d.firstChild).textContent = '');
                } else u.push(t.createTextNode(s));
              }
            for (d.textContent = '', p = 0; (s = u[p++]); ) {
              if (i && A.inArray(s, i) > -1) {
                a && a.push(s);
                continue;
              }
              if (
                ((c = ef(s)),
                (o = eA(d.appendChild(s), 'script')),
                c && e$(o),
                r)
              )
                for (h = 0; (s = o[h++]); ) ex.test(s.type || '') && r.push(s);
            }
            return d;
          }
          var eC = /^([^.]*)(?:\.(.+)|)/;
          function eT() {
            return !0;
          }
          function eE() {
            return !1;
          }
          function eO(e, t, r, i, a, s) {
            var o, l;
            if ('object' == typeof t) {
              for (l in ('string' != typeof r && ((i = i || r), (r = void 0)),
              t))
                eO(e, l, r, i, t[l], s);
              return e;
            }
            if (
              (null == i && null == a
                ? ((a = r), (i = r = void 0))
                : null == a &&
                  ('string' == typeof r
                    ? ((a = i), (i = void 0))
                    : ((a = i), (i = r), (r = void 0))),
              !1 === a)
            )
              a = eE;
            else if (!a) return e;
            return (
              1 === s &&
                ((o = a),
                ((a = function (e) {
                  return A().off(e), o.apply(this, arguments);
                }).guid = o.guid || (o.guid = A.guid++))),
              e.each(function () {
                A.event.add(this, t, a, i, r);
              })
            );
          }
          function eD(e, t, r) {
            if (!r) {
              void 0 === es.get(e, t) && A.event.add(e, t, eT);
              return;
            }
            es.set(e, t, !1),
              A.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var r,
                    i = es.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (i)
                      (A.event.special[t] || {}).delegateType &&
                        e.stopPropagation();
                    else if (
                      ((i = s.call(arguments)),
                      es.set(this, t, i),
                      this[t](),
                      (r = es.get(this, t)),
                      es.set(this, t, !1),
                      i !== r)
                    )
                      return (
                        e.stopImmediatePropagation(), e.preventDefault(), r
                      );
                  } else
                    i &&
                      (es.set(this, t, A.event.trigger(i[0], i.slice(1), this)),
                      e.stopPropagation(),
                      (e.isImmediatePropagationStopped = eT));
                },
              });
          }
          (A.event = {
            global: {},
            add: function (e, t, r, i, a) {
              var s,
                o,
                l,
                c,
                h,
                d,
                u,
                p,
                f,
                _,
                m,
                g = es.get(e);
              if (ei(e))
                for (
                  r.handler && ((r = (s = r).handler), (a = s.selector)),
                    a && A.find.matchesSelector(ep, a),
                    r.guid || (r.guid = A.guid++),
                    (c = g.events) || (c = g.events = Object.create(null)),
                    (o = g.handle) ||
                      (o = g.handle =
                        function (t) {
                          return A.event.triggered !== t.type
                            ? A.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    h = (t = (t || '').match(q) || ['']).length;
                  h--;

                )
                  (f = m = (l = eC.exec(t[h]) || [])[1]),
                    (_ = (l[2] || '').split('.').sort()),
                    f &&
                      ((u = A.event.special[f] || {}),
                      (f = (a ? u.delegateType : u.bindType) || f),
                      (u = A.event.special[f] || {}),
                      (d = A.extend(
                        {
                          type: f,
                          origType: m,
                          data: i,
                          handler: r,
                          guid: r.guid,
                          selector: a,
                          needsContext: a && A.expr.match.needsContext.test(a),
                          namespace: _.join('.'),
                        },
                        s
                      )),
                      (p = c[f]) ||
                        (((p = c[f] = []).delegateCount = 0),
                        (!u.setup || !1 === u.setup.call(e, i, _, o)) &&
                          e.addEventListener &&
                          e.addEventListener(f, o)),
                      u.add &&
                        (u.add.call(e, d),
                        d.handler.guid || (d.handler.guid = r.guid)),
                      a ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                      (A.event.global[f] = !0));
            },
            remove: function (e, t, r, i, a) {
              var s,
                o,
                l,
                c,
                h,
                d,
                u,
                p,
                f,
                _,
                m,
                g = es.hasData(e) && es.get(e);
              if (g && (c = g.events)) {
                for (h = (t = (t || '').match(q) || ['']).length; h--; ) {
                  if (
                    ((f = m = (l = eC.exec(t[h]) || [])[1]),
                    (_ = (l[2] || '').split('.').sort()),
                    !f)
                  ) {
                    for (f in c) A.event.remove(e, f + t[h], r, i, !0);
                    continue;
                  }
                  for (
                    u = A.event.special[f] || {},
                      p = c[(f = (i ? u.delegateType : u.bindType) || f)] || [],
                      l =
                        l[2] &&
                        RegExp('(^|\\.)' + _.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                      o = s = p.length;
                    s--;

                  )
                    (d = p[s]),
                      (a || m === d.origType) &&
                        (!r || r.guid === d.guid) &&
                        (!l || l.test(d.namespace)) &&
                        (!i ||
                          i === d.selector ||
                          ('**' === i && d.selector)) &&
                        (p.splice(s, 1),
                        d.selector && p.delegateCount--,
                        u.remove && u.remove.call(e, d));
                  o &&
                    !p.length &&
                    ((u.teardown && !1 !== u.teardown.call(e, _, g.handle)) ||
                      A.removeEvent(e, f, g.handle),
                    delete c[f]);
                }
                A.isEmptyObject(c) && es.remove(e, 'handle events');
              }
            },
            dispatch: function (e) {
              var t,
                r,
                i,
                a,
                s,
                o,
                l = Array(arguments.length),
                c = A.event.fix(e),
                h =
                  (es.get(this, 'events') || Object.create(null))[c.type] || [],
                d = A.event.special[c.type] || {};
              for (t = 1, l[0] = c; t < arguments.length; t++)
                l[t] = arguments[t];
              if (
                ((c.delegateTarget = this),
                !d.preDispatch || !1 !== d.preDispatch.call(this, c))
              ) {
                for (
                  o = A.event.handlers.call(this, c, h), t = 0;
                  (a = o[t++]) && !c.isPropagationStopped();

                )
                  for (
                    c.currentTarget = a.elem, r = 0;
                    (s = a.handlers[r++]) && !c.isImmediatePropagationStopped();

                  )
                    (!c.rnamespace ||
                      !1 === s.namespace ||
                      c.rnamespace.test(s.namespace)) &&
                      ((c.handleObj = s),
                      (c.data = s.data),
                      void 0 !==
                        (i = (
                          (A.event.special[s.origType] || {}).handle ||
                          s.handler
                        ).apply(a.elem, l)) &&
                        !1 === (c.result = i) &&
                        (c.preventDefault(), c.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, c), c.result;
              }
            },
            handlers: function (e, t) {
              var r,
                i,
                a,
                s,
                o,
                l = [],
                c = t.delegateCount,
                h = e.target;
              if (c && h.nodeType && !('click' === e.type && e.button >= 1)) {
                for (; h !== this; h = h.parentNode || this)
                  if (
                    1 === h.nodeType &&
                    !('click' === e.type && !0 === h.disabled)
                  ) {
                    for (r = 0, s = [], o = {}; r < c; r++)
                      void 0 === o[(a = (i = t[r]).selector + ' ')] &&
                        (o[a] = i.needsContext
                          ? A(a, this).index(h) > -1
                          : A.find(a, this, null, [h]).length),
                        o[a] && s.push(i);
                    s.length && l.push({ elem: h, handlers: s });
                  }
              }
              return (
                (h = this),
                c < t.length && l.push({ elem: h, handlers: t.slice(c) }),
                l
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(A.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[A.expando] ? e : new A.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ew.test(t.type) &&
                      t.click &&
                      S(t, 'input') &&
                      eD(t, 'click', !0),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ew.test(t.type) &&
                      t.click &&
                      S(t, 'input') &&
                      eD(t, 'click'),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ew.test(t.type) &&
                      t.click &&
                      S(t, 'input') &&
                      es.get(t, 'click')) ||
                    S(t, 'a')
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (A.removeEvent = function (e, t, r) {
              e.removeEventListener && e.removeEventListener(t, r);
            }),
            (A.Event = function (e, t) {
              if (!(this instanceof A.Event)) return new A.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? eT
                      : eE),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && A.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[A.expando] = !0);
            }),
            (A.Event.prototype = {
              constructor: A.Event,
              isDefaultPrevented: eE,
              isPropagationStopped: eE,
              isImmediatePropagationStopped: eE,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = eT),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = eT),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = eT),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            A.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              A.event.addProp
            ),
            A.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
              function r(e) {
                if (v.documentMode) {
                  var r = es.get(this, 'handle'),
                    i = A.event.fix(e);
                  (i.type = 'focusin' === e.type ? 'focus' : 'blur'),
                    (i.isSimulated = !0),
                    r(e),
                    i.target === i.currentTarget && r(i);
                } else A.event.simulate(t, e.target, A.event.fix(e));
              }
              (A.event.special[e] = {
                setup: function () {
                  var i;
                  if ((eD(this, e, !0), !v.documentMode)) return !1;
                  (i = es.get(this, t)) || this.addEventListener(t, r),
                    es.set(this, t, (i || 0) + 1);
                },
                trigger: function () {
                  return eD(this, e), !0;
                },
                teardown: function () {
                  var e;
                  if (!v.documentMode) return !1;
                  (e = es.get(this, t) - 1)
                    ? es.set(this, t, e)
                    : (this.removeEventListener(t, r), es.remove(this, t));
                },
                _default: function (t) {
                  return es.get(t.target, e);
                },
                delegateType: t,
              }),
                (A.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      a = v.documentMode ? this : i,
                      s = es.get(a, t);
                    s ||
                      (v.documentMode
                        ? this.addEventListener(t, r)
                        : i.addEventListener(e, r, !0)),
                      es.set(a, t, (s || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      a = v.documentMode ? this : i,
                      s = es.get(a, t) - 1;
                    s
                      ? es.set(a, t, s)
                      : (v.documentMode
                          ? this.removeEventListener(t, r)
                          : i.removeEventListener(e, r, !0),
                        es.remove(a, t));
                  },
                });
            }),
            A.each(
              {
                mouseenter: 'mouseover',
                mouseleave: 'mouseout',
                pointerenter: 'pointerover',
                pointerleave: 'pointerout',
              },
              function (e, t) {
                A.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var r,
                      i = e.relatedTarget,
                      a = e.handleObj;
                    return (
                      (i && (i === this || A.contains(this, i))) ||
                        ((e.type = a.origType),
                        (r = a.handler.apply(this, arguments)),
                        (e.type = t)),
                      r
                    );
                  },
                };
              }
            ),
            A.fn.extend({
              on: function (e, t, r, i) {
                return eO(this, e, t, r, i);
              },
              one: function (e, t, r, i) {
                return eO(this, e, t, r, i, 1);
              },
              off: function (e, t, r) {
                var i, a;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    A(e.delegateTarget).off(
                      i.namespace ? i.origType + '.' + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ('object' == typeof e) {
                  for (a in e) this.off(a, t, e[a]);
                  return this;
                }
                return (
                  (!1 === t || 'function' == typeof t) &&
                    ((r = t), (t = void 0)),
                  !1 === r && (r = eE),
                  this.each(function () {
                    A.event.remove(this, e, r, t);
                  })
                );
              },
            });
          var eI = /<script|<style|<link/i,
            eR = /checked\s*(?:[^=]|=\s*.checked.)/i,
            eP = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function eM(e, t) {
            return (
              (S(e, 'table') &&
                S(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
                A(e).children('tbody')[0]) ||
              e
            );
          }
          function eL(e) {
            return (
              (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
            );
          }
          function eN(e) {
            return (
              'true/' === (e.type || '').slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute('type'),
              e
            );
          }
          function eB(e, t) {
            var r, i, a, s, o, l;
            if (1 === t.nodeType) {
              if (es.hasData(e) && (l = es.get(e).events))
                for (a in (es.remove(t, 'handle events'), l))
                  for (r = 0, i = l[a].length; r < i; r++)
                    A.event.add(t, a, l[a][r]);
              en.hasData(e) &&
                ((s = en.access(e)), (o = A.extend({}, s)), en.set(t, o));
            }
          }
          function eF(e, t, r, i) {
            t = o(t);
            var a,
              s,
              l,
              c,
              h,
              d,
              u = 0,
              p = e.length,
              f = p - 1,
              g = t[0],
              v = m(g);
            if (
              v ||
              (p > 1 && 'string' == typeof g && !_.checkClone && eR.test(g))
            )
              return e.each(function (a) {
                var s = e.eq(a);
                v && (t[0] = g.call(this, a, s.html())), eF(s, t, r, i);
              });
            if (
              p &&
              ((s = (a = eS(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === a.childNodes.length && (a = s),
              s || i)
            ) {
              for (c = (l = A.map(eA(a, 'script'), eL)).length; u < p; u++)
                (h = a),
                  u !== f &&
                    ((h = A.clone(h, !0, !0)),
                    c && A.merge(l, eA(h, 'script'))),
                  r.call(e[u], h, u);
              if (c)
                for (
                  d = l[l.length - 1].ownerDocument, A.map(l, eN), u = 0;
                  u < c;
                  u++
                )
                  (h = l[u]),
                    ex.test(h.type || '') &&
                      !es.access(h, 'globalEval') &&
                      A.contains(d, h) &&
                      (h.src && 'module' !== (h.type || '').toLowerCase()
                        ? A._evalUrl &&
                          !h.noModule &&
                          A._evalUrl(
                            h.src,
                            { nonce: h.nonce || h.getAttribute('nonce') },
                            d
                          )
                        : w(h.textContent.replace(eP, ''), h, d));
            }
            return e;
          }
          function ez(e, t, r) {
            for (
              var i, a = t ? A.filter(t, e) : e, s = 0;
              null != (i = a[s]);
              s++
            )
              r || 1 !== i.nodeType || A.cleanData(eA(i)),
                i.parentNode &&
                  (r && ef(i) && e$(eA(i, 'script')),
                  i.parentNode.removeChild(i));
            return e;
          }
          A.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, r) {
              var i,
                a,
                s,
                o,
                l = e.cloneNode(!0),
                c = ef(e);
              if (
                !_.noCloneChecked &&
                (1 === e.nodeType || 11 === e.nodeType) &&
                !A.isXMLDoc(e)
              )
                for (i = 0, o = eA(l), a = (s = eA(e)).length; i < a; i++)
                  !(function (e, t) {
                    var r = t.nodeName.toLowerCase();
                    'input' === r && ew.test(e.type)
                      ? (t.checked = e.checked)
                      : ('input' === r || 'textarea' === r) &&
                        (t.defaultValue = e.defaultValue);
                  })(s[i], o[i]);
              if (t) {
                if (r)
                  for (
                    i = 0, s = s || eA(e), o = o || eA(l), a = s.length;
                    i < a;
                    i++
                  )
                    eB(s[i], o[i]);
                else eB(e, l);
              }
              return (
                (o = eA(l, 'script')).length > 0 &&
                  e$(o, !c && eA(e, 'script')),
                l
              );
            },
            cleanData: function (e) {
              for (
                var t, r, i, a = A.event.special, s = 0;
                void 0 !== (r = e[s]);
                s++
              )
                if (ei(r)) {
                  if ((t = r[es.expando])) {
                    if (t.events)
                      for (i in t.events)
                        a[i]
                          ? A.event.remove(r, i)
                          : A.removeEvent(r, i, t.handle);
                    r[es.expando] = void 0;
                  }
                  r[en.expando] && (r[en.expando] = void 0);
                }
            },
          }),
            A.fn.extend({
              detach: function (e) {
                return ez(this, e, !0);
              },
              remove: function (e) {
                return ez(this, e);
              },
              text: function (e) {
                return Q(
                  this,
                  function (e) {
                    return void 0 === e
                      ? A.text(this)
                      : this.empty().each(function () {
                          (1 === this.nodeType ||
                            11 === this.nodeType ||
                            9 === this.nodeType) &&
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return eF(this, arguments, function (e) {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    eM(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return eF(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = eM(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return eF(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return eF(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (A.cleanData(eA(e, !1)), (e.textContent = ''));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return A.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return Q(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      r = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      'string' == typeof e &&
                      !eI.test(e) &&
                      !ek[(ey.exec(e) || ['', ''])[1].toLowerCase()]
                    ) {
                      e = A.htmlPrefilter(e);
                      try {
                        for (; r < i; r++)
                          (t = this[r] || {}),
                            1 === t.nodeType &&
                              (A.cleanData(eA(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return eF(
                  this,
                  arguments,
                  function (t) {
                    var r = this.parentNode;
                    0 > A.inArray(this, e) &&
                      (A.cleanData(eA(this)), r && r.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            A.each(
              {
                appendTo: 'append',
                prependTo: 'prepend',
                insertBefore: 'before',
                insertAfter: 'after',
                replaceAll: 'replaceWith',
              },
              function (e, t) {
                A.fn[e] = function (e) {
                  for (
                    var r, i = [], a = A(e), s = a.length - 1, o = 0;
                    o <= s;
                    o++
                  )
                    (r = o === s ? this : this.clone(!0)),
                      A(a[o])[t](r),
                      l.apply(i, r.get());
                  return this.pushStack(i);
                };
              }
            );
          var eW = RegExp('^(' + eh + ')(?!px)[a-z%]+$', 'i'),
            eH = /^--/,
            eU = function (t) {
              var r = t.ownerDocument.defaultView;
              return (r && r.opener) || (r = e), r.getComputedStyle(t);
            },
            eq = function (e, t, r) {
              var i,
                a,
                s = {};
              for (a in t) (s[a] = e.style[a]), (e.style[a] = t[a]);
              for (a in ((i = r.call(e)), t)) e.style[a] = s[a];
              return i;
            },
            eV = RegExp(eu.join('|'), 'i');
          function eY(e, t, r) {
            var i,
              a,
              s,
              o,
              l = eH.test(t),
              c = e.style;
            return (
              (r = r || eU(e)) &&
                ((o = r.getPropertyValue(t) || r[t]),
                l && o && (o = o.replace(D, '$1') || void 0),
                '' !== o || ef(e) || (o = A.style(e, t)),
                !_.pixelBoxStyles() &&
                  eW.test(o) &&
                  eV.test(t) &&
                  ((i = c.width),
                  (a = c.minWidth),
                  (s = c.maxWidth),
                  (c.minWidth = c.maxWidth = c.width = o),
                  (o = r.width),
                  (c.width = i),
                  (c.minWidth = a),
                  (c.maxWidth = s))),
              void 0 !== o ? o + '' : o
            );
          }
          function eG(e, t) {
            return {
              get: function () {
                if (e()) {
                  delete this.get;
                  return;
                }
                return (this.get = t).apply(this, arguments);
              },
            };
          }
          !(function () {
            function t() {
              if (d) {
                (h.style.cssText =
                  'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                  (d.style.cssText =
                    'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                  ep.appendChild(h).appendChild(d);
                var t = e.getComputedStyle(d);
                (i = '1%' !== t.top),
                  (c = 12 === r(t.marginLeft)),
                  (d.style.right = '60%'),
                  (o = 36 === r(t.right)),
                  (a = 36 === r(t.width)),
                  (d.style.position = 'absolute'),
                  (s = 12 === r(d.offsetWidth / 3)),
                  ep.removeChild(h),
                  (d = null);
              }
            }
            function r(e) {
              return Math.round(parseFloat(e));
            }
            var i,
              a,
              s,
              o,
              l,
              c,
              h = v.createElement('div'),
              d = v.createElement('div');
            d.style &&
              ((d.style.backgroundClip = 'content-box'),
              (d.cloneNode(!0).style.backgroundClip = ''),
              (_.clearCloneStyle = 'content-box' === d.style.backgroundClip),
              A.extend(_, {
                boxSizingReliable: function () {
                  return t(), a;
                },
                pixelBoxStyles: function () {
                  return t(), o;
                },
                pixelPosition: function () {
                  return t(), i;
                },
                reliableMarginLeft: function () {
                  return t(), c;
                },
                scrollboxSize: function () {
                  return t(), s;
                },
                reliableTrDimensions: function () {
                  var t, r, i, a;
                  return (
                    null == l &&
                      ((t = v.createElement('table')),
                      (r = v.createElement('tr')),
                      (i = v.createElement('div')),
                      (t.style.cssText =
                        'position:absolute;left:-11111px;border-collapse:separate'),
                      (r.style.cssText = 'border:1px solid'),
                      (r.style.height = '1px'),
                      (i.style.height = '9px'),
                      (i.style.display = 'block'),
                      ep.appendChild(t).appendChild(r).appendChild(i),
                      (l =
                        parseInt((a = e.getComputedStyle(r)).height, 10) +
                          parseInt(a.borderTopWidth, 10) +
                          parseInt(a.borderBottomWidth, 10) ===
                        r.offsetHeight),
                      ep.removeChild(t)),
                    l
                  );
                },
              }));
          })();
          var eX = ['Webkit', 'Moz', 'ms'],
            eK = v.createElement('div').style,
            eJ = {};
          function eQ(e) {
            return (
              A.cssProps[e] ||
              eJ[e] ||
              (e in eK
                ? e
                : (eJ[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), r = eX.length;
                        r--;

                      )
                        if ((e = eX[r] + t) in eK) return e;
                    })(e) || e))
            );
          }
          var eZ = /^(none|table(?!-c[ea]).+)/,
            e0 = {
              position: 'absolute',
              visibility: 'hidden',
              display: 'block',
            },
            e1 = { letterSpacing: '0', fontWeight: '400' };
          function e2(e, t, r) {
            var i = ed.exec(t);
            return i ? Math.max(0, i[2] - (r || 0)) + (i[3] || 'px') : t;
          }
          function e8(e, t, r, i, a, s) {
            var o = 'width' === t ? 1 : 0,
              l = 0,
              c = 0,
              h = 0;
            if (r === (i ? 'border' : 'content')) return 0;
            for (; o < 4; o += 2)
              'margin' === r && (h += A.css(e, r + eu[o], !0, a)),
                i
                  ? ('content' === r &&
                      (c -= A.css(e, 'padding' + eu[o], !0, a)),
                    'margin' !== r &&
                      (c -= A.css(e, 'border' + eu[o] + 'Width', !0, a)))
                  : ((c += A.css(e, 'padding' + eu[o], !0, a)),
                    'padding' !== r
                      ? (c += A.css(e, 'border' + eu[o] + 'Width', !0, a))
                      : (l += A.css(e, 'border' + eu[o] + 'Width', !0, a)));
            return (
              !i &&
                s >= 0 &&
                (c +=
                  Math.max(
                    0,
                    Math.ceil(
                      e['offset' + t[0].toUpperCase() + t.slice(1)] -
                        s -
                        c -
                        l -
                        0.5
                    )
                  ) || 0),
              c + h
            );
          }
          function e5(e, t, r) {
            var i = eU(e),
              a =
                (!_.boxSizingReliable() || r) &&
                'border-box' === A.css(e, 'boxSizing', !1, i),
              s = a,
              o = eY(e, t, i),
              l = 'offset' + t[0].toUpperCase() + t.slice(1);
            if (eW.test(o)) {
              if (!r) return o;
              o = 'auto';
            }
            return (
              ((!_.boxSizingReliable() && a) ||
                (!_.reliableTrDimensions() && S(e, 'tr')) ||
                'auto' === o ||
                (!parseFloat(o) && 'inline' === A.css(e, 'display', !1, i))) &&
                e.getClientRects().length &&
                ((a = 'border-box' === A.css(e, 'boxSizing', !1, i)),
                (s = l in e) && (o = e[l])),
              (o = parseFloat(o) || 0) +
                e8(e, t, r || (a ? 'border' : 'content'), s, i, o) +
                'px'
            );
          }
          function e3(e, t, r, i, a) {
            return new e3.prototype.init(e, t, r, i, a);
          }
          A.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var r = eY(e, 'opacity');
                    return '' === r ? '1' : r;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageSlice: !0,
              columnCount: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              scale: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
            },
            cssProps: {},
            style: function (e, t, r, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a,
                  s,
                  o,
                  l = er(t),
                  c = eH.test(t),
                  h = e.style;
                if (
                  (c || (t = eQ(l)),
                  (o = A.cssHooks[t] || A.cssHooks[l]),
                  void 0 === r)
                )
                  return o && 'get' in o && void 0 !== (a = o.get(e, !1, i))
                    ? a
                    : h[t];
                'string' == (s = typeof r) &&
                  (a = ed.exec(r)) &&
                  a[1] &&
                  ((r = eg(e, t, a)), (s = 'number')),
                  null != r &&
                    r == r &&
                    ('number' !== s ||
                      c ||
                      (r += (a && a[3]) || (A.cssNumber[l] ? '' : 'px')),
                    _.clearCloneStyle ||
                      '' !== r ||
                      0 !== t.indexOf('background') ||
                      (h[t] = 'inherit'),
                    (o && 'set' in o && void 0 === (r = o.set(e, r, i))) ||
                      (c ? h.setProperty(t, r) : (h[t] = r)));
              }
            },
            css: function (e, t, r, i) {
              var a,
                s,
                o,
                l = er(t);
              return (eH.test(t) || (t = eQ(l)),
              (o = A.cssHooks[t] || A.cssHooks[l]) &&
                'get' in o &&
                (a = o.get(e, !0, r)),
              void 0 === a && (a = eY(e, t, i)),
              'normal' === a && t in e1 && (a = e1[t]),
              '' === r || r)
                ? ((s = parseFloat(a)), !0 === r || isFinite(s) ? s || 0 : a)
                : a;
            },
          }),
            A.each(['height', 'width'], function (e, t) {
              A.cssHooks[t] = {
                get: function (e, r, i) {
                  if (r)
                    return !eZ.test(A.css(e, 'display')) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? e5(e, t, i)
                      : eq(e, e0, function () {
                          return e5(e, t, i);
                        });
                },
                set: function (e, r, i) {
                  var a,
                    s = eU(e),
                    o = !_.scrollboxSize() && 'absolute' === s.position,
                    l =
                      (o || i) && 'border-box' === A.css(e, 'boxSizing', !1, s),
                    c = i ? e8(e, t, i, l, s) : 0;
                  return (
                    l &&
                      o &&
                      (c -= Math.ceil(
                        e['offset' + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(s[t]) -
                          e8(e, t, 'border', !1, s) -
                          0.5
                      )),
                    c &&
                      (a = ed.exec(r)) &&
                      'px' !== (a[3] || 'px') &&
                      ((e.style[t] = r), (r = A.css(e, t))),
                    e2(e, r, c)
                  );
                },
              };
            }),
            (A.cssHooks.marginLeft = eG(_.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(eY(e, 'marginLeft')) ||
                    e.getBoundingClientRect().left -
                      eq(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + 'px'
                );
            })),
            A.each(
              { margin: '', padding: '', border: 'Width' },
              function (e, t) {
                (A.cssHooks[e + t] = {
                  expand: function (r) {
                    for (
                      var i = 0,
                        a = {},
                        s = 'string' == typeof r ? r.split(' ') : [r];
                      i < 4;
                      i++
                    )
                      a[e + eu[i] + t] = s[i] || s[i - 2] || s[0];
                    return a;
                  },
                }),
                  'margin' !== e && (A.cssHooks[e + t].set = e2);
              }
            ),
            A.fn.extend({
              css: function (e, t) {
                return Q(
                  this,
                  function (e, t, r) {
                    var i,
                      a,
                      s = {},
                      o = 0;
                    if (Array.isArray(t)) {
                      for (i = eU(e), a = t.length; o < a; o++)
                        s[t[o]] = A.css(e, t[o], !1, i);
                      return s;
                    }
                    return void 0 !== r ? A.style(e, t, r) : A.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (A.Tween = e3),
            (e3.prototype = {
              constructor: e3,
              init: function (e, t, r, i, a, s) {
                (this.elem = e),
                  (this.prop = r),
                  (this.easing = a || A.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = s || (A.cssNumber[r] ? '' : 'px'));
              },
              cur: function () {
                var e = e3.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : e3.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  r = e3.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        A.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  r && r.set ? r.set(this) : e3.propHooks._default.set(this),
                  this
                );
              },
            }),
            (e3.prototype.init.prototype = e3.prototype),
            (e3.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = A.css(e.elem, e.prop, '')) && 'auto' !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  A.fx.step[e.prop]
                    ? A.fx.step[e.prop](e)
                    : 1 === e.elem.nodeType &&
                      (A.cssHooks[e.prop] || null != e.elem.style[eQ(e.prop)])
                    ? A.style(e.elem, e.prop, e.now + e.unit)
                    : (e.elem[e.prop] = e.now);
                },
              },
            }),
            (e3.propHooks.scrollTop = e3.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (A.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: 'swing',
            }),
            (A.fx = e3.prototype.init),
            (A.fx.step = {});
          var e4,
            e6,
            e7,
            e9,
            te = /^(?:toggle|show|hide)$/,
            tt = /queueHooks$/;
          function tr() {
            return (
              e.setTimeout(function () {
                e7 = void 0;
              }),
              (e7 = Date.now())
            );
          }
          function ti(e, t) {
            var r,
              i = 0,
              a = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              a['margin' + (r = eu[i])] = a['padding' + r] = e;
            return t && (a.opacity = a.width = e), a;
          }
          function ta(e, t, r) {
            for (
              var i,
                a = (ts.tweeners[t] || []).concat(ts.tweeners['*']),
                s = 0,
                o = a.length;
              s < o;
              s++
            )
              if ((i = a[s].call(r, t, e))) return i;
          }
          function ts(e, t, r) {
            var i,
              a,
              s = 0,
              o = ts.prefilters.length,
              l = A.Deferred().always(function () {
                delete c.elem;
              }),
              c = function () {
                if (a) return !1;
                for (
                  var t = e7 || tr(),
                    r = Math.max(0, h.startTime + h.duration - t),
                    i = 1 - (r / h.duration || 0),
                    s = 0,
                    o = h.tweens.length;
                  s < o;
                  s++
                )
                  h.tweens[s].run(i);
                return (l.notifyWith(e, [h, i, r]), i < 1 && o)
                  ? r
                  : (o || l.notifyWith(e, [h, 1, 0]),
                    l.resolveWith(e, [h]),
                    !1);
              },
              h = l.promise({
                elem: e,
                props: A.extend({}, t),
                opts: A.extend(
                  !0,
                  { specialEasing: {}, easing: A.easing._default },
                  r
                ),
                originalProperties: t,
                originalOptions: r,
                startTime: e7 || tr(),
                duration: r.duration,
                tweens: [],
                createTween: function (t, r) {
                  var i = A.Tween(
                    e,
                    h.opts,
                    t,
                    r,
                    h.opts.specialEasing[t] || h.opts.easing
                  );
                  return h.tweens.push(i), i;
                },
                stop: function (t) {
                  var r = 0,
                    i = t ? h.tweens.length : 0;
                  if (a) return this;
                  for (a = !0; r < i; r++) h.tweens[r].run(1);
                  return (
                    t
                      ? (l.notifyWith(e, [h, 1, 0]), l.resolveWith(e, [h, t]))
                      : l.rejectWith(e, [h, t]),
                    this
                  );
                },
              }),
              d = h.props;
            for (
              (function (e, t) {
                var r, i, a, s, o;
                for (r in e)
                  if (
                    ((a = t[(i = er(r))]),
                    Array.isArray((s = e[r])) &&
                      ((a = s[1]), (s = e[r] = s[0])),
                    r !== i && ((e[i] = s), delete e[r]),
                    (o = A.cssHooks[i]) && ('expand' in o))
                  )
                    for (r in ((s = o.expand(s)), delete e[i], s))
                      (r in e) || ((e[r] = s[r]), (t[r] = a));
                  else t[i] = a;
              })(d, h.opts.specialEasing);
              s < o;
              s++
            )
              if ((i = ts.prefilters[s].call(h, e, d, h.opts)))
                return (
                  m(i.stop) &&
                    (A._queueHooks(h.elem, h.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              A.map(d, ta, h),
              m(h.opts.start) && h.opts.start.call(e, h),
              h
                .progress(h.opts.progress)
                .done(h.opts.done, h.opts.complete)
                .fail(h.opts.fail)
                .always(h.opts.always),
              A.fx.timer(
                A.extend(c, { elem: e, anim: h, queue: h.opts.queue })
              ),
              h
            );
          }
          (A.Animation = A.extend(ts, {
            tweeners: {
              '*': [
                function (e, t) {
                  var r = this.createTween(e, t);
                  return eg(r.elem, e, ed.exec(t), r), r;
                },
              ],
            },
            tweener: function (e, t) {
              m(e) ? ((t = e), (e = ['*'])) : (e = e.match(q));
              for (var r, i = 0, a = e.length; i < a; i++)
                (r = e[i]),
                  (ts.tweeners[r] = ts.tweeners[r] || []),
                  ts.tweeners[r].unshift(t);
            },
            prefilters: [
              function (e, t, r) {
                var i,
                  a,
                  s,
                  o,
                  l,
                  c,
                  h,
                  d,
                  u = 'width' in t || 'height' in t,
                  p = this,
                  f = {},
                  _ = e.style,
                  m = e.nodeType && em(e),
                  g = es.get(e, 'fxshow');
                for (i in (r.queue ||
                  (null == (o = A._queueHooks(e, 'fx')).unqueued &&
                    ((o.unqueued = 0),
                    (l = o.empty.fire),
                    (o.empty.fire = function () {
                      o.unqueued || l();
                    })),
                  o.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      o.unqueued--, A.queue(e, 'fx').length || o.empty.fire();
                    });
                  })),
                t))
                  if (((a = t[i]), te.test(a))) {
                    if (
                      (delete t[i],
                      (s = s || 'toggle' === a),
                      a === (m ? 'hide' : 'show'))
                    ) {
                      if ('show' !== a || !g || void 0 === g[i]) continue;
                      m = !0;
                    }
                    f[i] = (g && g[i]) || A.style(e, i);
                  }
                if (!(!(c = !A.isEmptyObject(t)) && A.isEmptyObject(f)))
                  for (i in (u &&
                    1 === e.nodeType &&
                    ((r.overflow = [_.overflow, _.overflowX, _.overflowY]),
                    null == (h = g && g.display) && (h = es.get(e, 'display')),
                    'none' === (d = A.css(e, 'display')) &&
                      (h
                        ? (d = h)
                        : (eb([e], !0),
                          (h = e.style.display || h),
                          (d = A.css(e, 'display')),
                          eb([e]))),
                    ('inline' === d || ('inline-block' === d && null != h)) &&
                      'none' === A.css(e, 'float') &&
                      (c ||
                        (p.done(function () {
                          _.display = h;
                        }),
                        null != h || (h = 'none' === (d = _.display) ? '' : d)),
                      (_.display = 'inline-block'))),
                  r.overflow &&
                    ((_.overflow = 'hidden'),
                    p.always(function () {
                      (_.overflow = r.overflow[0]),
                        (_.overflowX = r.overflow[1]),
                        (_.overflowY = r.overflow[2]);
                    })),
                  (c = !1),
                  f))
                    c ||
                      (g
                        ? 'hidden' in g && (m = g.hidden)
                        : (g = es.access(e, 'fxshow', { display: h })),
                      s && (g.hidden = !m),
                      m && eb([e], !0),
                      p.done(function () {
                        for (i in (m || eb([e]), es.remove(e, 'fxshow'), f))
                          A.style(e, i, f[i]);
                      })),
                      (c = ta(m ? g[i] : 0, i, p)),
                      i in g ||
                        ((g[i] = c.start),
                        m && ((c.end = c.start), (c.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ts.prefilters.unshift(e) : ts.prefilters.push(e);
            },
          })),
            (A.speed = function (e, t, r) {
              var i =
                e && 'object' == typeof e
                  ? A.extend({}, e)
                  : {
                      complete: r || (!r && t) || (m(e) && e),
                      duration: e,
                      easing: (r && t) || (t && !m(t) && t),
                    };
              return (
                A.fx.off
                  ? (i.duration = 0)
                  : 'number' != typeof i.duration &&
                    (i.duration in A.fx.speeds
                      ? (i.duration = A.fx.speeds[i.duration])
                      : (i.duration = A.fx.speeds._default)),
                (null == i.queue || !0 === i.queue) && (i.queue = 'fx'),
                (i.old = i.complete),
                (i.complete = function () {
                  m(i.old) && i.old.call(this),
                    i.queue && A.dequeue(this, i.queue);
                }),
                i
              );
            }),
            A.fn.extend({
              fadeTo: function (e, t, r, i) {
                return this.filter(em)
                  .css('opacity', 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, r, i);
              },
              animate: function (e, t, r, i) {
                var a = A.isEmptyObject(e),
                  s = A.speed(t, r, i),
                  o = function () {
                    var t = ts(this, A.extend({}, e), s);
                    (a || es.get(this, 'finish')) && t.stop(!0);
                  };
                return (
                  (o.finish = o),
                  a || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                );
              },
              stop: function (e, t, r) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(r);
                };
                return (
                  'string' != typeof e && ((r = t), (t = e), (e = void 0)),
                  t && this.queue(e || 'fx', []),
                  this.each(function () {
                    var t = !0,
                      a = null != e && e + 'queueHooks',
                      s = A.timers,
                      o = es.get(this);
                    if (a) o[a] && o[a].stop && i(o[a]);
                    else
                      for (a in o) o[a] && o[a].stop && tt.test(a) && i(o[a]);
                    for (a = s.length; a--; )
                      s[a].elem === this &&
                        (null == e || s[a].queue === e) &&
                        (s[a].anim.stop(r), (t = !1), s.splice(a, 1));
                    (t || !r) && A.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || 'fx'),
                  this.each(function () {
                    var t,
                      r = es.get(this),
                      i = r[e + 'queue'],
                      a = r[e + 'queueHooks'],
                      s = A.timers,
                      o = i ? i.length : 0;
                    for (
                      r.finish = !0,
                        A.queue(this, e, []),
                        a && a.stop && a.stop.call(this, !0),
                        t = s.length;
                      t--;

                    )
                      s[t].elem === this &&
                        s[t].queue === e &&
                        (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete r.finish;
                  })
                );
              },
            }),
            A.each(['toggle', 'show', 'hide'], function (e, t) {
              var r = A.fn[t];
              A.fn[t] = function (e, i, a) {
                return null == e || 'boolean' == typeof e
                  ? r.apply(this, arguments)
                  : this.animate(ti(t, !0), e, i, a);
              };
            }),
            A.each(
              {
                slideDown: ti('show'),
                slideUp: ti('hide'),
                slideToggle: ti('toggle'),
                fadeIn: { opacity: 'show' },
                fadeOut: { opacity: 'hide' },
                fadeToggle: { opacity: 'toggle' },
              },
              function (e, t) {
                A.fn[e] = function (e, r, i) {
                  return this.animate(t, e, r, i);
                };
              }
            ),
            (A.timers = []),
            (A.fx.tick = function () {
              var e,
                t = 0,
                r = A.timers;
              for (e7 = Date.now(); t < r.length; t++)
                (e = r[t])() || r[t] !== e || r.splice(t--, 1);
              r.length || A.fx.stop(), (e7 = void 0);
            }),
            (A.fx.timer = function (e) {
              A.timers.push(e), A.fx.start();
            }),
            (A.fx.interval = 13),
            (A.fx.start = function () {
              e9 ||
                ((e9 = !0),
                (function t() {
                  e9 &&
                    (!1 === v.hidden && e.requestAnimationFrame
                      ? e.requestAnimationFrame(t)
                      : e.setTimeout(t, A.fx.interval),
                    A.fx.tick());
                })());
            }),
            (A.fx.stop = function () {
              e9 = null;
            }),
            (A.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (A.fn.delay = function (t, r) {
              return (
                (t = (A.fx && A.fx.speeds[t]) || t),
                (r = r || 'fx'),
                this.queue(r, function (r, i) {
                  var a = e.setTimeout(r, t);
                  i.stop = function () {
                    e.clearTimeout(a);
                  };
                })
              );
            }),
            (tn = v.createElement('input')),
            (to = v
              .createElement('select')
              .appendChild(v.createElement('option'))),
            (tn.type = 'checkbox'),
            (_.checkOn = '' !== tn.value),
            (_.optSelected = to.selected),
            ((tn = v.createElement('input')).value = 't'),
            (tn.type = 'radio'),
            (_.radioValue = 't' === tn.value);
          var tn,
            to,
            tl,
            tc = A.expr.attrHandle;
          A.fn.extend({
            attr: function (e, t) {
              return Q(this, A.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                A.removeAttr(this, e);
              });
            },
          }),
            A.extend({
              attr: function (e, t, r) {
                var i,
                  a,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) {
                  if (void 0 === e.getAttribute) return A.prop(e, t, r);
                  if (
                    ((1 === s && A.isXMLDoc(e)) ||
                      (a =
                        A.attrHooks[t.toLowerCase()] ||
                        (A.expr.match.bool.test(t) ? tl : void 0)),
                    void 0 !== r)
                  ) {
                    if (null === r) {
                      A.removeAttr(e, t);
                      return;
                    }
                    return a && 'set' in a && void 0 !== (i = a.set(e, r, t))
                      ? i
                      : (e.setAttribute(t, r + ''), r);
                  }
                  return a && 'get' in a && null !== (i = a.get(e, t))
                    ? i
                    : null == (i = A.find.attr(e, t))
                    ? void 0
                    : i;
                }
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!_.radioValue && 'radio' === t && S(e, 'input')) {
                      var r = e.value;
                      return e.setAttribute('type', t), r && (e.value = r), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var r,
                  i = 0,
                  a = t && t.match(q);
                if (a && 1 === e.nodeType)
                  for (; (r = a[i++]); ) e.removeAttribute(r);
              },
            }),
            (tl = {
              set: function (e, t, r) {
                return !1 === t ? A.removeAttr(e, r) : e.setAttribute(r, r), r;
              },
            }),
            A.each(A.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var r = tc[t] || A.find.attr;
              tc[t] = function (e, t, i) {
                var a,
                  s,
                  o = t.toLowerCase();
                return (
                  i ||
                    ((s = tc[o]),
                    (tc[o] = a),
                    (a = null != r(e, t, i) ? o : null),
                    (tc[o] = s)),
                  a
                );
              };
            });
          var th = /^(?:input|select|textarea|button)$/i,
            td = /^(?:a|area)$/i;
          function tu(e) {
            return (e.match(q) || []).join(' ');
          }
          function tp(e) {
            return (e.getAttribute && e.getAttribute('class')) || '';
          }
          function tf(e) {
            return Array.isArray(e)
              ? e
              : ('string' == typeof e && e.match(q)) || [];
          }
          A.fn.extend({
            prop: function (e, t) {
              return Q(this, A.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[A.propFix[e] || e];
              });
            },
          }),
            A.extend({
              prop: function (e, t, r) {
                var i,
                  a,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return ((1 === s && A.isXMLDoc(e)) ||
                    ((t = A.propFix[t] || t), (a = A.propHooks[t])),
                  void 0 !== r)
                    ? a && 'set' in a && void 0 !== (i = a.set(e, r, t))
                      ? i
                      : (e[t] = r)
                    : a && 'get' in a && null !== (i = a.get(e, t))
                    ? i
                    : e[t];
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = A.find.attr(e, 'tabindex');
                    return t
                      ? parseInt(t, 10)
                      : th.test(e.nodeName) || (td.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: 'htmlFor', class: 'className' },
            }),
            _.optSelected ||
              (A.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            A.each(
              [
                'tabIndex',
                'readOnly',
                'maxLength',
                'cellSpacing',
                'cellPadding',
                'rowSpan',
                'colSpan',
                'useMap',
                'frameBorder',
                'contentEditable',
              ],
              function () {
                A.propFix[this.toLowerCase()] = this;
              }
            ),
            A.fn.extend({
              addClass: function (e) {
                var t, r, i, a, s, o;
                return m(e)
                  ? this.each(function (t) {
                      A(this).addClass(e.call(this, t, tp(this)));
                    })
                  : (t = tf(e)).length
                  ? this.each(function () {
                      if (
                        ((i = tp(this)),
                        (r = 1 === this.nodeType && ' ' + tu(i) + ' '))
                      ) {
                        for (s = 0; s < t.length; s++)
                          (a = t[s]),
                            0 > r.indexOf(' ' + a + ' ') && (r += a + ' ');
                        (o = tu(r)), i !== o && this.setAttribute('class', o);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, r, i, a, s, o;
                return m(e)
                  ? this.each(function (t) {
                      A(this).removeClass(e.call(this, t, tp(this)));
                    })
                  : arguments.length
                  ? (t = tf(e)).length
                    ? this.each(function () {
                        if (
                          ((i = tp(this)),
                          (r = 1 === this.nodeType && ' ' + tu(i) + ' '))
                        ) {
                          for (s = 0; s < t.length; s++)
                            for (a = t[s]; r.indexOf(' ' + a + ' ') > -1; )
                              r = r.replace(' ' + a + ' ', ' ');
                          (o = tu(r)), i !== o && this.setAttribute('class', o);
                        }
                      })
                    : this
                  : this.attr('class', '');
              },
              toggleClass: function (e, t) {
                var r,
                  i,
                  a,
                  s,
                  o = typeof e,
                  l = 'string' === o || Array.isArray(e);
                return m(e)
                  ? this.each(function (r) {
                      A(this).toggleClass(e.call(this, r, tp(this), t), t);
                    })
                  : 'boolean' == typeof t && l
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((r = tf(e)),
                    this.each(function () {
                      if (l)
                        for (a = 0, s = A(this); a < r.length; a++)
                          (i = r[a]),
                            s.hasClass(i) ? s.removeClass(i) : s.addClass(i);
                      else
                        (void 0 === e || 'boolean' === o) &&
                          ((i = tp(this)) && es.set(this, '__className__', i),
                          this.setAttribute &&
                            this.setAttribute(
                              'class',
                              i || !1 === e
                                ? ''
                                : es.get(this, '__className__') || ''
                            ));
                    }));
              },
              hasClass: function (e) {
                var t,
                  r,
                  i = 0;
                for (t = ' ' + e + ' '; (r = this[i++]); )
                  if (
                    1 === r.nodeType &&
                    (' ' + tu(tp(r)) + ' ').indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var t_ = /\r/g;
          A.fn.extend({
            val: function (e) {
              var t,
                r,
                i,
                a = this[0];
              return arguments.length
                ? ((i = m(e)),
                  this.each(function (r) {
                    var a;
                    1 !== this.nodeType ||
                      (null == (a = i ? e.call(this, r, A(this).val()) : e)
                        ? (a = '')
                        : 'number' == typeof a
                        ? (a += '')
                        : Array.isArray(a) &&
                          (a = A.map(a, function (e) {
                            return null == e ? '' : e + '';
                          })),
                      ((t =
                        A.valHooks[this.type] ||
                        A.valHooks[this.nodeName.toLowerCase()]) &&
                        'set' in t &&
                        void 0 !== t.set(this, a, 'value')) ||
                        (this.value = a));
                  }))
                : a
                ? (t =
                    A.valHooks[a.type] ||
                    A.valHooks[a.nodeName.toLowerCase()]) &&
                  'get' in t &&
                  void 0 !== (r = t.get(a, 'value'))
                  ? r
                  : 'string' == typeof (r = a.value)
                  ? r.replace(t_, '')
                  : null == r
                  ? ''
                  : r
                : void 0;
            },
          }),
            A.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = A.find.attr(e, 'value');
                    return null != t ? t : tu(A.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      r,
                      i,
                      a = e.options,
                      s = e.selectedIndex,
                      o = 'select-one' === e.type,
                      l = o ? null : [],
                      c = o ? s + 1 : a.length;
                    for (i = s < 0 ? c : o ? s : 0; i < c; i++)
                      if (
                        ((r = a[i]).selected || i === s) &&
                        !r.disabled &&
                        (!r.parentNode.disabled || !S(r.parentNode, 'optgroup'))
                      ) {
                        if (((t = A(r).val()), o)) return t;
                        l.push(t);
                      }
                    return l;
                  },
                  set: function (e, t) {
                    for (
                      var r, i, a = e.options, s = A.makeArray(t), o = a.length;
                      o--;

                    )
                      ((i = a[o]).selected =
                        A.inArray(A.valHooks.option.get(i), s) > -1) &&
                        (r = !0);
                    return r || (e.selectedIndex = -1), s;
                  },
                },
              },
            }),
            A.each(['radio', 'checkbox'], function () {
              (A.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = A.inArray(A(e).val(), t) > -1);
                },
              }),
                _.checkOn ||
                  (A.valHooks[this].get = function (e) {
                    return null === e.getAttribute('value') ? 'on' : e.value;
                  });
            });
          var tm = e.location,
            tg = { guid: Date.now() },
            tv = /\?/;
          A.parseXML = function (t) {
            var r, i;
            if (!t || 'string' != typeof t) return null;
            try {
              r = new e.DOMParser().parseFromString(t, 'text/xml');
            } catch (e) {}
            return (
              (i = r && r.getElementsByTagName('parsererror')[0]),
              (!r || i) &&
                A.error(
                  'Invalid XML: ' +
                    (i
                      ? A.map(i.childNodes, function (e) {
                          return e.textContent;
                        }).join('\n')
                      : t)
                ),
              r
            );
          };
          var tb = /^(?:focusinfocus|focusoutblur)$/,
            tw = function (e) {
              e.stopPropagation();
            };
          A.extend(A.event, {
            trigger: function (t, r, i, a) {
              var s,
                o,
                l,
                c,
                h,
                d,
                p,
                f,
                _ = [i || v],
                b = u.call(t, 'type') ? t.type : t,
                w = u.call(t, 'namespace') ? t.namespace.split('.') : [];
              if (
                ((o = f = l = i = i || v),
                !(
                  3 === i.nodeType ||
                  8 === i.nodeType ||
                  tb.test(b + A.event.triggered)
                ) &&
                  (b.indexOf('.') > -1 &&
                    ((b = (w = b.split('.')).shift()), w.sort()),
                  (h = 0 > b.indexOf(':') && 'on' + b),
                  ((t = t[A.expando]
                    ? t
                    : new A.Event(b, 'object' == typeof t && t)).isTrigger = a
                    ? 2
                    : 3),
                  (t.namespace = w.join('.')),
                  (t.rnamespace = t.namespace
                    ? RegExp('(^|\\.)' + w.join('\\.(?:.*\\.|)') + '(\\.|$)')
                    : null),
                  (t.result = void 0),
                  t.target || (t.target = i),
                  (r = null == r ? [t] : A.makeArray(r, [t])),
                  (p = A.event.special[b] || {}),
                  a || !p.trigger || !1 !== p.trigger.apply(i, r)))
              ) {
                if (!a && !p.noBubble && !g(i)) {
                  for (
                    c = p.delegateType || b,
                      tb.test(c + b) || (o = o.parentNode);
                    o;
                    o = o.parentNode
                  )
                    _.push(o), (l = o);
                  l === (i.ownerDocument || v) &&
                    _.push(l.defaultView || l.parentWindow || e);
                }
                for (s = 0; (o = _[s++]) && !t.isPropagationStopped(); )
                  (f = o),
                    (t.type = s > 1 ? c : p.bindType || b),
                    (d =
                      (es.get(o, 'events') || Object.create(null))[t.type] &&
                      es.get(o, 'handle')) && d.apply(o, r),
                    (d = h && o[h]) &&
                      d.apply &&
                      ei(o) &&
                      ((t.result = d.apply(o, r)),
                      !1 === t.result && t.preventDefault());
                return (
                  (t.type = b),
                  !a &&
                    !t.isDefaultPrevented() &&
                    (!p._default || !1 === p._default.apply(_.pop(), r)) &&
                    ei(i) &&
                    h &&
                    m(i[b]) &&
                    !g(i) &&
                    ((l = i[h]) && (i[h] = null),
                    (A.event.triggered = b),
                    t.isPropagationStopped() && f.addEventListener(b, tw),
                    i[b](),
                    t.isPropagationStopped() && f.removeEventListener(b, tw),
                    (A.event.triggered = void 0),
                    l && (i[h] = l)),
                  t.result
                );
              }
            },
            simulate: function (e, t, r) {
              var i = A.extend(new A.Event(), r, { type: e, isSimulated: !0 });
              A.event.trigger(i, null, t);
            },
          }),
            A.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  A.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var r = this[0];
                if (r) return A.event.trigger(e, t, r, !0);
              },
            });
          var ty = /\[\]$/,
            tx = /\r?\n/g,
            tk = /^(?:submit|button|image|reset|file)$/i,
            tA = /^(?:input|select|textarea|keygen)/i;
          (A.param = function (e, t) {
            var r,
              i = [],
              a = function (e, t) {
                var r = m(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  '=' +
                  encodeURIComponent(null == r ? '' : r);
              };
            if (null == e) return '';
            if (Array.isArray(e) || (e.jquery && !A.isPlainObject(e)))
              A.each(e, function () {
                a(this.name, this.value);
              });
            else
              for (r in e)
                !(function e(t, r, i, a) {
                  var s;
                  if (Array.isArray(r))
                    A.each(r, function (r, s) {
                      i || ty.test(t)
                        ? a(t, s)
                        : e(
                            t +
                              '[' +
                              ('object' == typeof s && null != s ? r : '') +
                              ']',
                            s,
                            i,
                            a
                          );
                    });
                  else if (i || 'object' !== y(r)) a(t, r);
                  else for (s in r) e(t + '[' + s + ']', r[s], i, a);
                })(r, e[r], t, a);
            return i.join('&');
          }),
            A.fn.extend({
              serialize: function () {
                return A.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = A.prop(this, 'elements');
                  return e ? A.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !A(this).is(':disabled') &&
                      tA.test(this.nodeName) &&
                      !tk.test(e) &&
                      (this.checked || !ew.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var r = A(this).val();
                    return null == r
                      ? null
                      : Array.isArray(r)
                      ? A.map(r, function (e) {
                          return { name: t.name, value: e.replace(tx, '\r\n') };
                        })
                      : { name: t.name, value: r.replace(tx, '\r\n') };
                  })
                  .get();
              },
            });
          var t$ = /%20/g,
            tj = /#.*$/,
            tS = /([?&])_=[^&]*/,
            tC = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            tT = /^(?:GET|HEAD)$/,
            tE = /^\/\//,
            tO = {},
            tD = {},
            tI = '*/'.concat('*'),
            tR = v.createElement('a');
          function tP(e) {
            return function (t, r) {
              'string' != typeof t && ((r = t), (t = '*'));
              var i,
                a = 0,
                s = t.toLowerCase().match(q) || [];
              if (m(r))
                for (; (i = s[a++]); )
                  '+' === i[0]
                    ? (e[(i = i.slice(1) || '*')] = e[i] || []).unshift(r)
                    : (e[i] = e[i] || []).push(r);
            };
          }
          function tM(e, t, r, i) {
            var a = {},
              s = e === tD;
            function o(l) {
              var c;
              return (
                (a[l] = !0),
                A.each(e[l] || [], function (e, l) {
                  var h = l(t, r, i);
                  return 'string' != typeof h || s || a[h]
                    ? s
                      ? !(c = h)
                      : void 0
                    : (t.dataTypes.unshift(h), o(h), !1);
                }),
                c
              );
            }
            return o(t.dataTypes[0]) || (!a['*'] && o('*'));
          }
          function tL(e, t) {
            var r,
              i,
              a = A.ajaxSettings.flatOptions || {};
            for (r in t)
              void 0 !== t[r] && ((a[r] ? e : i || (i = {}))[r] = t[r]);
            return i && A.extend(!0, e, i), e;
          }
          (tR.href = tm.href),
            A.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: tm.href,
                type: 'GET',
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    tm.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                accepts: {
                  '*': tI,
                  text: 'text/plain',
                  html: 'text/html',
                  xml: 'application/xml, text/xml',
                  json: 'application/json, text/javascript',
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: 'responseXML',
                  text: 'responseText',
                  json: 'responseJSON',
                },
                converters: {
                  '* text': String,
                  'text html': !0,
                  'text json': JSON.parse,
                  'text xml': A.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? tL(tL(e, A.ajaxSettings), t) : tL(A.ajaxSettings, e);
              },
              ajaxPrefilter: tP(tO),
              ajaxTransport: tP(tD),
              ajax: function (t, r) {
                'object' == typeof t && ((r = t), (t = void 0)), (r = r || {});
                var i,
                  a,
                  s,
                  o,
                  l,
                  c,
                  h,
                  d,
                  u,
                  p,
                  f = A.ajaxSetup({}, r),
                  _ = f.context || f,
                  m = f.context && (_.nodeType || _.jquery) ? A(_) : A.event,
                  g = A.Deferred(),
                  b = A.Callbacks('once memory'),
                  w = f.statusCode || {},
                  y = {},
                  x = {},
                  k = 'canceled',
                  j = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (h) {
                        if (!o)
                          for (o = {}; (t = tC.exec(s)); )
                            o[t[1].toLowerCase() + ' '] = (
                              o[t[1].toLowerCase() + ' '] || []
                            ).concat(t[2]);
                        t = o[e.toLowerCase() + ' '];
                      }
                      return null == t ? null : t.join(', ');
                    },
                    getAllResponseHeaders: function () {
                      return h ? s : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == h &&
                          (y[
                            (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e)
                          ] = t),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == h && (f.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e) {
                        if (h) j.always(e[j.status]);
                        else for (t in e) w[t] = [w[t], e[t]];
                      }
                      return this;
                    },
                    abort: function (e) {
                      var t = e || k;
                      return i && i.abort(t), S(0, t), this;
                    },
                  };
                if (
                  (g.promise(j),
                  (f.url = ((t || f.url || tm.href) + '').replace(
                    tE,
                    tm.protocol + '//'
                  )),
                  (f.type = r.method || r.type || f.method || f.type),
                  (f.dataTypes = (f.dataType || '*').toLowerCase().match(q) || [
                    '',
                  ]),
                  null == f.crossDomain)
                ) {
                  c = v.createElement('a');
                  try {
                    (c.href = f.url),
                      (c.href = c.href),
                      (f.crossDomain =
                        tR.protocol + '//' + tR.host !=
                        c.protocol + '//' + c.host);
                  } catch (e) {
                    f.crossDomain = !0;
                  }
                }
                if (
                  (f.data &&
                    f.processData &&
                    'string' != typeof f.data &&
                    (f.data = A.param(f.data, f.traditional)),
                  tM(tO, f, r, j),
                  h)
                )
                  return j;
                for (u in ((d = A.event && f.global) &&
                  0 == A.active++ &&
                  A.event.trigger('ajaxStart'),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !tT.test(f.type)),
                (a = f.url.replace(tj, '')),
                f.hasContent
                  ? f.data &&
                    f.processData &&
                    0 ===
                      (f.contentType || '').indexOf(
                        'application/x-www-form-urlencoded'
                      ) &&
                    (f.data = f.data.replace(t$, '+'))
                  : ((p = f.url.slice(a.length)),
                    f.data &&
                      (f.processData || 'string' == typeof f.data) &&
                      ((a += (tv.test(a) ? '&' : '?') + f.data), delete f.data),
                    !1 === f.cache &&
                      ((a = a.replace(tS, '$1')),
                      (p = (tv.test(a) ? '&' : '?') + '_=' + tg.guid++ + p)),
                    (f.url = a + p)),
                f.ifModified &&
                  (A.lastModified[a] &&
                    j.setRequestHeader('If-Modified-Since', A.lastModified[a]),
                  A.etag[a] && j.setRequestHeader('If-None-Match', A.etag[a])),
                ((f.data && f.hasContent && !1 !== f.contentType) ||
                  r.contentType) &&
                  j.setRequestHeader('Content-Type', f.contentType),
                j.setRequestHeader(
                  'Accept',
                  f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                    ? f.accepts[f.dataTypes[0]] +
                        ('*' !== f.dataTypes[0] ? ', ' + tI + '; q=0.01' : '')
                    : f.accepts['*']
                ),
                f.headers))
                  j.setRequestHeader(u, f.headers[u]);
                if (f.beforeSend && (!1 === f.beforeSend.call(_, j, f) || h))
                  return j.abort();
                if (
                  ((k = 'abort'),
                  b.add(f.complete),
                  j.done(f.success),
                  j.fail(f.error),
                  (i = tM(tD, f, r, j)))
                ) {
                  if (
                    ((j.readyState = 1), d && m.trigger('ajaxSend', [j, f]), h)
                  )
                    return j;
                  f.async &&
                    f.timeout > 0 &&
                    (l = e.setTimeout(function () {
                      j.abort('timeout');
                    }, f.timeout));
                  try {
                    (h = !1), i.send(y, S);
                  } catch (e) {
                    if (h) throw e;
                    S(-1, e);
                  }
                } else S(-1, 'No Transport');
                function S(t, r, o, c) {
                  var u,
                    p,
                    v,
                    y,
                    x,
                    k = r;
                  h ||
                    ((h = !0),
                    l && e.clearTimeout(l),
                    (i = void 0),
                    (s = c || ''),
                    (j.readyState = t > 0 ? 4 : 0),
                    (u = (t >= 200 && t < 300) || 304 === t),
                    o &&
                      (y = (function (e, t, r) {
                        for (
                          var i, a, s, o, l = e.contents, c = e.dataTypes;
                          '*' === c[0];

                        )
                          c.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader('Content-Type'));
                        if (i) {
                          for (a in l)
                            if (l[a] && l[a].test(i)) {
                              c.unshift(a);
                              break;
                            }
                        }
                        if (c[0] in r) s = c[0];
                        else {
                          for (a in r) {
                            if (!c[0] || e.converters[a + ' ' + c[0]]) {
                              s = a;
                              break;
                            }
                            o || (o = a);
                          }
                          s = s || o;
                        }
                        if (s) return s !== c[0] && c.unshift(s), r[s];
                      })(f, j, o)),
                    !u &&
                      A.inArray('script', f.dataTypes) > -1 &&
                      0 > A.inArray('json', f.dataTypes) &&
                      (f.converters['text script'] = function () {}),
                    (y = (function (e, t, r, i) {
                      var a,
                        s,
                        o,
                        l,
                        c,
                        h = {},
                        d = e.dataTypes.slice();
                      if (d[1])
                        for (o in e.converters)
                          h[o.toLowerCase()] = e.converters[o];
                      for (s = d.shift(); s; )
                        if (
                          (e.responseFields[s] && (r[e.responseFields[s]] = t),
                          !c &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (c = s),
                          (s = d.shift()))
                        ) {
                          if ('*' === s) s = c;
                          else if ('*' !== c && c !== s) {
                            if (!(o = h[c + ' ' + s] || h['* ' + s])) {
                              for (a in h)
                                if (
                                  (l = a.split(' '))[1] === s &&
                                  (o = h[c + ' ' + l[0]] || h['* ' + l[0]])
                                ) {
                                  !0 === o
                                    ? (o = h[a])
                                    : !0 !== h[a] &&
                                      ((s = l[0]), d.unshift(l[1]));
                                  break;
                                }
                            }
                            if (!0 !== o) {
                              if (o && e.throws) t = o(t);
                              else
                                try {
                                  t = o(t);
                                } catch (e) {
                                  return {
                                    state: 'parsererror',
                                    error: o
                                      ? e
                                      : 'No conversion from ' + c + ' to ' + s,
                                  };
                                }
                            }
                          }
                        }
                      return { state: 'success', data: t };
                    })(f, y, j, u)),
                    u
                      ? (f.ifModified &&
                          ((x = j.getResponseHeader('Last-Modified')) &&
                            (A.lastModified[a] = x),
                          (x = j.getResponseHeader('etag')) && (A.etag[a] = x)),
                        204 === t || 'HEAD' === f.type
                          ? (k = 'nocontent')
                          : 304 === t
                          ? (k = 'notmodified')
                          : ((k = y.state), (p = y.data), (u = !(v = y.error))))
                      : ((v = k),
                        (t || !k) && ((k = 'error'), t < 0 && (t = 0))),
                    (j.status = t),
                    (j.statusText = (r || k) + ''),
                    u
                      ? g.resolveWith(_, [p, k, j])
                      : g.rejectWith(_, [j, k, v]),
                    j.statusCode(w),
                    (w = void 0),
                    d &&
                      m.trigger(u ? 'ajaxSuccess' : 'ajaxError', [
                        j,
                        f,
                        u ? p : v,
                      ]),
                    b.fireWith(_, [j, k]),
                    !d ||
                      (m.trigger('ajaxComplete', [j, f]),
                      --A.active || A.event.trigger('ajaxStop')));
                }
                return j;
              },
              getJSON: function (e, t, r) {
                return A.get(e, t, r, 'json');
              },
              getScript: function (e, t) {
                return A.get(e, void 0, t, 'script');
              },
            }),
            A.each(['get', 'post'], function (e, t) {
              A[t] = function (e, r, i, a) {
                return (
                  m(r) && ((a = a || i), (i = r), (r = void 0)),
                  A.ajax(
                    A.extend(
                      { url: e, type: t, dataType: a, data: r, success: i },
                      A.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            A.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                'content-type' === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || '');
            }),
            (A._evalUrl = function (e, t, r) {
              return A.ajax({
                url: e,
                type: 'GET',
                dataType: 'script',
                cache: !0,
                async: !1,
                global: !1,
                converters: { 'text script': function () {} },
                dataFilter: function (e) {
                  A.globalEval(e, t, r);
                },
              });
            }),
            A.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (m(e) && (e = e.call(this[0])),
                    (t = A(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return m(e)
                  ? this.each(function (t) {
                      A(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = A(this),
                        r = t.contents();
                      r.length ? r.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = m(e);
                return this.each(function (r) {
                  A(this).wrapAll(t ? e.call(this, r) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not('body')
                    .each(function () {
                      A(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (A.expr.pseudos.hidden = function (e) {
              return !A.expr.pseudos.visible(e);
            }),
            (A.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (A.ajaxSettings.xhr = function () {
              try {
                return new e.XMLHttpRequest();
              } catch (e) {}
            });
          var tN = { 0: 200, 1223: 204 },
            tB = A.ajaxSettings.xhr();
          (_.cors = !!tB && 'withCredentials' in tB),
            (_.ajax = tB = !!tB),
            A.ajaxTransport(function (t) {
              var r, i;
              if (_.cors || (tB && !t.crossDomain))
                return {
                  send: function (a, s) {
                    var o,
                      l = t.xhr();
                    if (
                      (l.open(t.type, t.url, t.async, t.username, t.password),
                      t.xhrFields)
                    )
                      for (o in t.xhrFields) l[o] = t.xhrFields[o];
                    for (o in (t.mimeType &&
                      l.overrideMimeType &&
                      l.overrideMimeType(t.mimeType),
                    t.crossDomain ||
                      a['X-Requested-With'] ||
                      (a['X-Requested-With'] = 'XMLHttpRequest'),
                    a))
                      l.setRequestHeader(o, a[o]);
                    (r = function (e) {
                      return function () {
                        r &&
                          ((r =
                            i =
                            l.onload =
                            l.onerror =
                            l.onabort =
                            l.ontimeout =
                            l.onreadystatechange =
                              null),
                          'abort' === e
                            ? l.abort()
                            : 'error' === e
                            ? 'number' != typeof l.status
                              ? s(0, 'error')
                              : s(l.status, l.statusText)
                            : s(
                                tN[l.status] || l.status,
                                l.statusText,
                                'text' !== (l.responseType || 'text') ||
                                  'string' != typeof l.responseText
                                  ? { binary: l.response }
                                  : { text: l.responseText },
                                l.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (l.onload = r()),
                      (i = l.onerror = l.ontimeout = r('error')),
                      void 0 !== l.onabort
                        ? (l.onabort = i)
                        : (l.onreadystatechange = function () {
                            4 === l.readyState &&
                              e.setTimeout(function () {
                                r && i();
                              });
                          }),
                      (r = r('abort'));
                    try {
                      l.send((t.hasContent && t.data) || null);
                    } catch (e) {
                      if (r) throw e;
                    }
                  },
                  abort: function () {
                    r && r();
                  },
                };
            }),
            A.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            A.ajaxSetup({
              accepts: {
                script:
                  'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                'text script': function (e) {
                  return A.globalEval(e), e;
                },
              },
            }),
            A.ajaxPrefilter('script', function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = 'GET');
            }),
            A.ajaxTransport('script', function (e) {
              if (e.crossDomain || e.scriptAttrs) {
                var t, r;
                return {
                  send: function (i, a) {
                    (t = A('<script>')
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        'load error',
                        (r = function (e) {
                          t.remove(),
                            (r = null),
                            e && a('error' === e.type ? 404 : 200, e.type);
                        })
                      )),
                      v.head.appendChild(t[0]);
                  },
                  abort: function () {
                    r && r();
                  },
                };
              }
            });
          var tF = [],
            tz = /(=)\?(?=&|$)|\?\?/;
          A.ajaxSetup({
            jsonp: 'callback',
            jsonpCallback: function () {
              var e = tF.pop() || A.expando + '_' + tg.guid++;
              return (this[e] = !0), e;
            },
          }),
            A.ajaxPrefilter('json jsonp', function (t, r, i) {
              var a,
                s,
                o,
                l =
                  !1 !== t.jsonp &&
                  (tz.test(t.url)
                    ? 'url'
                    : 'string' == typeof t.data &&
                      0 ===
                        (t.contentType || '').indexOf(
                          'application/x-www-form-urlencoded'
                        ) &&
                      tz.test(t.data) &&
                      'data');
              if (l || 'jsonp' === t.dataTypes[0])
                return (
                  (a = t.jsonpCallback =
                    m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                  l
                    ? (t[l] = t[l].replace(tz, '$1' + a))
                    : !1 !== t.jsonp &&
                      (t.url +=
                        (tv.test(t.url) ? '&' : '?') + t.jsonp + '=' + a),
                  (t.converters['script json'] = function () {
                    return o || A.error(a + ' was not called'), o[0];
                  }),
                  (t.dataTypes[0] = 'json'),
                  (s = e[a]),
                  (e[a] = function () {
                    o = arguments;
                  }),
                  i.always(function () {
                    void 0 === s ? A(e).removeProp(a) : (e[a] = s),
                      t[a] && ((t.jsonpCallback = r.jsonpCallback), tF.push(a)),
                      o && m(s) && s(o[0]),
                      (o = s = void 0);
                  }),
                  'script'
                );
            }),
            (_.createHTMLDocument =
              (((r = v.implementation.createHTMLDocument('').body).innerHTML =
                '<form></form><form></form>'),
              2 === r.childNodes.length)),
            (A.parseHTML = function (e, t, r) {
              var i, a, s;
              return 'string' != typeof e
                ? []
                : ('boolean' == typeof t && ((r = t), (t = !1)),
                  t ||
                    (_.createHTMLDocument
                      ? (((i = (t =
                          v.implementation.createHTMLDocument(
                            ''
                          )).createElement('base')).href = v.location.href),
                        t.head.appendChild(i))
                      : (t = v)),
                  (a = N.exec(e)),
                  (s = !r && []),
                  a)
                ? [t.createElement(a[1])]
                : ((a = eS([e], t, s)),
                  s && s.length && A(s).remove(),
                  A.merge([], a.childNodes));
            }),
            (A.fn.load = function (e, t, r) {
              var i,
                a,
                s,
                o = this,
                l = e.indexOf(' ');
              return (
                l > -1 && ((i = tu(e.slice(l))), (e = e.slice(0, l))),
                m(t)
                  ? ((r = t), (t = void 0))
                  : t && 'object' == typeof t && (a = 'POST'),
                o.length > 0 &&
                  A.ajax({
                    url: e,
                    type: a || 'GET',
                    dataType: 'html',
                    data: t,
                  })
                    .done(function (e) {
                      (s = arguments),
                        o.html(
                          i ? A('<div>').append(A.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      r &&
                        function (e, t) {
                          o.each(function () {
                            r.apply(this, s || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (A.expr.pseudos.animated = function (e) {
              return A.grep(A.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (A.offset = {
              setOffset: function (e, t, r) {
                var i,
                  a,
                  s,
                  o,
                  l,
                  c,
                  h = A.css(e, 'position'),
                  d = A(e),
                  u = {};
                'static' === h && (e.style.position = 'relative'),
                  (l = d.offset()),
                  (s = A.css(e, 'top')),
                  (c = A.css(e, 'left')),
                  ('absolute' === h || 'fixed' === h) &&
                  (s + c).indexOf('auto') > -1
                    ? ((o = (i = d.position()).top), (a = i.left))
                    : ((o = parseFloat(s) || 0), (a = parseFloat(c) || 0)),
                  m(t) && (t = t.call(e, r, A.extend({}, l))),
                  null != t.top && (u.top = t.top - l.top + o),
                  null != t.left && (u.left = t.left - l.left + a),
                  'using' in t ? t.using.call(e, u) : d.css(u);
              },
            }),
            A.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        A.offset.setOffset(this, e, t);
                      });
                var t,
                  r,
                  i = this[0];
                if (i)
                  return i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (r = i.ownerDocument.defaultView),
                      {
                        top: t.top + r.pageYOffset,
                        left: t.left + r.pageXOffset,
                      })
                    : { top: 0, left: 0 };
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    r,
                    i = this[0],
                    a = { top: 0, left: 0 };
                  if ('fixed' === A.css(i, 'position'))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        r = i.ownerDocument,
                        e = i.offsetParent || r.documentElement;
                      e &&
                      (e === r.body || e === r.documentElement) &&
                      'static' === A.css(e, 'position');

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      ((a = A(e).offset()),
                      (a.top += A.css(e, 'borderTopWidth', !0)),
                      (a.left += A.css(e, 'borderLeftWidth', !0)));
                  }
                  return {
                    top: t.top - a.top - A.css(i, 'marginTop', !0),
                    left: t.left - a.left - A.css(i, 'marginLeft', !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && 'static' === A.css(e, 'position');

                  )
                    e = e.offsetParent;
                  return e || ep;
                });
              },
            }),
            A.each(
              { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
              function (e, t) {
                var r = 'pageYOffset' === t;
                A.fn[e] = function (i) {
                  return Q(
                    this,
                    function (e, i, a) {
                      var s;
                      if (
                        (g(e)
                          ? (s = e)
                          : 9 === e.nodeType && (s = e.defaultView),
                        void 0 === a)
                      )
                        return s ? s[t] : e[i];
                      s
                        ? s.scrollTo(
                            r ? s.pageXOffset : a,
                            r ? a : s.pageYOffset
                          )
                        : (e[i] = a);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            A.each(['top', 'left'], function (e, t) {
              A.cssHooks[t] = eG(_.pixelPosition, function (e, r) {
                if (r)
                  return (
                    (r = eY(e, t)), eW.test(r) ? A(e).position()[t] + 'px' : r
                  );
              });
            }),
            A.each({ Height: 'height', Width: 'width' }, function (e, t) {
              A.each(
                { padding: 'inner' + e, content: t, '': 'outer' + e },
                function (r, i) {
                  A.fn[i] = function (a, s) {
                    var o = arguments.length && (r || 'boolean' != typeof a),
                      l = r || (!0 === a || !0 === s ? 'margin' : 'border');
                    return Q(
                      this,
                      function (t, r, a) {
                        var s;
                        return g(t)
                          ? 0 === i.indexOf('outer')
                            ? t['inner' + e]
                            : t.document.documentElement['client' + e]
                          : 9 === t.nodeType
                          ? ((s = t.documentElement),
                            Math.max(
                              t.body['scroll' + e],
                              s['scroll' + e],
                              t.body['offset' + e],
                              s['offset' + e],
                              s['client' + e]
                            ))
                          : void 0 === a
                          ? A.css(t, r, l)
                          : A.style(t, r, a, l);
                      },
                      t,
                      o ? a : void 0,
                      o
                    );
                  };
                }
              );
            }),
            A.each(
              [
                'ajaxStart',
                'ajaxStop',
                'ajaxComplete',
                'ajaxError',
                'ajaxSuccess',
                'ajaxSend',
              ],
              function (e, t) {
                A.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            A.fn.extend({
              bind: function (e, t, r) {
                return this.on(e, null, t, r);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, r, i) {
                return this.on(t, e, r, i);
              },
              undelegate: function (e, t, r) {
                return 1 == arguments.length
                  ? this.off(e, '**')
                  : this.off(t, e || '**', r);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            A.each(
              'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                ' '
              ),
              function (e, t) {
                A.fn[t] = function (e, r) {
                  return arguments.length > 0
                    ? this.on(t, null, e, r)
                    : this.trigger(t);
                };
              }
            );
          var tW = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (A.proxy = function (e, t) {
            var r, i, a;
            if (('string' == typeof t && ((r = e[t]), (t = e), (e = r)), m(e)))
              return (
                (i = s.call(arguments, 2)),
                ((a = function () {
                  return e.apply(t || this, i.concat(s.call(arguments)));
                }).guid = e.guid =
                  e.guid || A.guid++),
                a
              );
          }),
            (A.holdReady = function (e) {
              e ? A.readyWait++ : A.ready(!0);
            }),
            (A.isArray = Array.isArray),
            (A.parseJSON = JSON.parse),
            (A.nodeName = S),
            (A.isFunction = m),
            (A.isWindow = g),
            (A.camelCase = er),
            (A.type = y),
            (A.now = Date.now),
            (A.isNumeric = function (e) {
              var t = A.type(e);
              return (
                ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (A.trim = function (e) {
              return null == e ? '' : (e + '').replace(tW, '$1');
            }),
            'function' == typeof define &&
              define.amd &&
              define('jquery', [], function () {
                return A;
              });
          var tH = e.jQuery,
            tU = e.$;
          return (
            (A.noConflict = function (t) {
              return (
                e.$ === A && (e.$ = tU),
                t && e.jQuery === A && (e.jQuery = tH),
                A
              );
            }),
            void 0 === t && (e.jQuery = e.$ = A),
            A
          );
        }),
        'object' == typeof e.exports
          ? (e.exports = r.document
              ? i(r, !0)
              : function (e) {
                  if (!e.document)
                    throw Error('jQuery requires a window with a document');
                  return i(e);
                })
          : i(r);
    });

  let bH = async () => {
    try {
      let e,
        t = await localStorage.getItem('wbx___basketMgrt'),
        r = 'geo-data-v1-0';
      t && (r = `geo-data-v1-${t}`),
        null != (e = JSON.parse(localStorage.getItem(r))) &&
          void 0 !== e.data &&
          (bD = e.data.xinfo),
        await chrome.storage.sync.get(
          { enable_plugin: !0, enable_fix: !0 },
          (e) => {
            (bN = e.enable_plugin), (bB = e.enable_fix);
          }
        ),
        (bz = await uZ.get('evirma_show_bids_client', bz)),
        (bF = await uZ.get('evirma_show_all_rekl_stat', bF)),
        (bW = await ph()),
        M(rf).set('evirmaExtClientID', bW, { expires: 7 }),
        await chrome.storage.sync.get(
          {
            [`apiWBkeyRekl_${bL}`]: null,
            [`apiWBkeyStat_${bL}`]: null,
            [`apiWBkeyContent_${bL}`]: null,
          },
          async function (e) {
            (l = e[`apiWBkeyRekl_${bL}`]),
              (c = e[`apiWBkeyStat_${bL}`]),
              (h = e[`apiWBkeyContent_${bL}`]);
          }
        );
    } catch (e) {
      u0(e, null, 'restoreOptions');
    }
  };

  bH();

  // var r_ = B('iUSsr');
  var r_ = (B('iUSsr'), B('iUSsr'));

  var F = {};

  async function wG(e, t = 'addBlockscardPage') {
    return new Promise(async function (r, i) {
      wv = await by({
        method: 'POST',
        url: 'https://evirma.ru/api/v1/advt/article-bids',
        headers: { 'Content-Type': 'application/json' },
        data: { article: e, xinfo: bD, debug: bU, uuid: bW },
      })
        .then((e) => {
          wQ(e.data, t), r(!0);
        })
        .catch((r) => {
          u0(r, { cardID: e, nextFunc: t }, 'dataCardPage'), i(!1);
        });
    });
  }

  async function wX(e, t) {
    return (
      Array.isArray(e) && (e = e.join(';')),
      new Promise(async function (r, i) {
        let a = `https://card.wb.ru/cards/detail?appType=1&curr=rub&${t}&nm=${e}`;
        try {
          let e = await by({ method: 'get', url: a }),
            t = e.data.data.products,
            i = {};
          for (let e of t) {
            for (let t of (void 0 !== e.extended &&
              (void 0 === e.extended.clientSale && (e.extended.clientSale = 0),
              void 0 === e.extended.basicPriceU &&
                (e.extended.basicPriceU = e.priceU)),
            (e.qty = 0),
            e.sizes))
              for (let r of t.stocks) e.qty += r.qty;
            (e.delivery_hours = e.time1 + e.time2),
              void 0 !== e.wh ? (e.whName = await yI(e.wh)) : (e.whName = '?'),
              (i[e.id] = e);
          }
          r(i);
        } catch (r) {
          u0(r, { nmID: e, xinfo: t }, 'getWBProductDetailData'), i(r);
        }
      })
    );
  }

  async function wK() {
    let e = window.location.href;
    e = e.substring(e.indexOf('/catalog/') + 9, e.lastIndexOf('/detail.aspx'));
    try {
      await wG(e);
      let t = await wX(e, bD),
        r = t[e];
      if (!r)
        return (
          u0(
            'card page no product',
            { productID: e, products: JSON.stringify(t) },
            'cardPage'
          ),
          !1
        );
      if (r.extended) {
        let e = r.extended;
        void 0 == e.basicPriceU &&
          void 0 !== r.priceU &&
          (e.basicPriceU = r.priceU);
        let t = e.basicPriceU / 100,
          i = 0;
        void 0 !== e.clientSale && (i = e.clientSale);
        // let a= '',
        let a = `
                <div class="__evirma_inject_block">
                    <div class="mb-4 text-sm rounded-lg bg-neutral-50 px-4 py-4 text-base text-xl text-neutral-900">
                        <img class="inline-flex w-5 h-5 align-middle" alt="" src="${pn}"> 
                        <b><span class="text-sm text-gray-500">СПП:</span> ${i}%</b> <span class="text-gray-500"> <span class="text-sm ml-3">До СПП:</span> ${(+t).toLocaleString()}₽</span>
                    </div>
                </div>
            `,
          s = await u6('.product-page .product-page__price-block .price-block');
        M(r_)(s).after(a),
          M(r_)('.product-page__price-block--aside').length &&
            M(r_)('.product-page__price-block--aside').after(a);
        let o = await u6('.j-price-block');
        M(r_)('.product-page__price-block--aside').length ||
          M(r_)(o).after(
            `<div class="product-page__seller-wrap section-border">${a}</div>`
          );
      }
      if (r.sizes) {
        let e = r.sizes,
          t = {};
        for (let r of e)
          for (let e of r.stocks)
            void 0 === t[e.wh]
              ? (t[e.wh] = {
                  qty: e.qty,
                  name: await yI(e.wh),
                  time: e.time1 + e.time2,
                })
              : (t[e.wh].qty = t[e.wh].qty + e.qty);
        let i = '';
        for (let e of Object.keys(t)) {
          let r = t[e];
          i += `
            <span>${r.name}:</span> <span class="grid grid-cols-2"><b>${r.time} ч.</b>  <span>${r.qty} шт.</span></span>
        `;
        }
        let a = { id: r.wh, name: await yI(r.wh), time: r.time1 + r.time2 },
          s = `
            <div class="product-page__seller-wrap section-border __evirma_inject_block">
                <div class="seller-info__content">
                    <div class="seller-info__header">
                        <div class="seller-info__wrap" style="font-weight: bold; color: #555;">
                            <img class="inline-flex w-5 h-5 align-middle" alt="" src="${pn}"> Раскладка по складам
                        </div>
                        
                        <div class="text-sm ml-6 mt-2">
                            <p style="font-weight: bold">
                                ${a.name}: ${a.time} час.
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </p>
                        </div>
                        
                        <div class="ml-6 pt-2 mt-2 grid grid-cols-2 gap-2 text-sm" style="color: #555; border-top: 1px solid #ccc;">
                            ${i}
                        </div>
                       
                    </div>
                </div>
            </div>
            `,
          o = await u6('.j-price-block');
        M(r_)(o).after(s);
      }
    } catch (t) {
      u0(t, { checkUrl: e, xinfo: bD }, 'cardPage');
    }
  }

  function u0(e, t, r) {
    return console.warn('captureException', e, t, r), !0;
  }

  async function b6(e = !1) {
    try {
      (u = 0),
        (bY = {}),
        (bk = {}),
        (bA = 'none'),
        (b$ = ''),
        (bj = ''),
        (bS = []),
        (bC = {}),
        (a = []),
        (s = ''),
        (o = ''),
        (bT = {}),
        (bE = ''),
        (bO = []),
        (bI = {}),
        (bq = 0),
        M(r_)('html > head').append(`<style>${M(F)}</style>`),
        M(r_)('.__evirma_inject_block').length &&
          M(r_)('.__evirma_inject_block').remove();
      let e = window.location.href,
        t = new URL(window.location.href);
      if (
        ((bq =
          ((bV = t.searchParams.get('page')
            ? parseInt(t.searchParams.get('page'))
            : 1) -
            1) *
          100),
        e.includes('/search.aspx?search=') || e.includes('&search='))
      ) {
        let e = new URL(window.location.href);
        bj = M(r_).trim(e.searchParams.get('search')).toLowerCase();
        try {
          wc(bj, bV, 3);
        } catch (e) {
          u0(
            e,
            { queryText: bj, findPageNumber: bV },
            '__wb_search_page startFuncPage'
          );
        }
        try {
          setTimeout(function () {
            wY(bj);
          }, 500);
        } catch (e) {
          u0(e, { queryText: bj }, 'searchPage startFuncPage');
        }
        try {
          wu();
        } catch (e) {
          u0(e, null, 'addADVdataToCatalogData startFuncPage');
        }
      } else if (e.includes('.ru/catalog/') && !e.includes('/detail.aspx')) {
        try {
          await w1();
        } catch (e) {
          u0(e, null, 'updateCategories startFuncPage');
        }
        try {
          wu();
        } catch (e) {
          u0(e, null, 'addADVdataToCatalogData2 startFuncPage');
        }
      } else if (e.includes('/catalog/') && e.includes('/detail.aspx')) {
        try {
          wK();
        } catch (e) {
          u0(e, null, 'cardPage startFuncPage');
        }
        try {
          wp();
        } catch (e) {
          u0(e, null, 'addADVdataToCatalogData3 startFuncPage');
        }
      } else if (
        'cmp-new.wildberries.ru' === t.host &&
        e.includes('campaigns/edit')
      ) {
        let t;
        if (((u = await pI()), await pB(), (t = e.match(/edit\/(\d+)/)))) {
          o = t[1];
          let e = await pP(o);
          if (8 == e.type)
            try {
              wa(), b7();
            } catch (e) {
              u0(
                e,
                null,
                'insertAutoSettingsKWPositionasd213123 startFuncPage'
              );
            }
          setTimeout(function () {
            w_(o);
          }, 1500);
        }
      } else if (e.includes('/edit/search/')) {
        let t;
        if ((t = e.match(/search\/(\d+)/))) {
          o = t[1];
          try {
            wm(o);
          } catch (e) {
            u0(e, { compID: o }, 'getStatCompany startFuncPage');
          }
          try {
            w_(o);
          } catch (e) {
            u0(e, { compID: o }, 'getFullStatCompany startFuncPage');
          }
          try {
            yf();
          } catch (e) {
            u0(e, null, 'insertGeneratorMinusPhrase startFuncPage');
          }
          try {
            wN();
          } catch (e) {
            u0(e, null, 'insertBlockAddToFixPhrase startFuncPage');
          }
        }
      } else if (e.includes('/edit/carousel-auction/')) {
        let t;
        if ((t = e.match(/carousel-auction\/(\d+)/))) {
          o = t[1];
          try {
            wy(o);
          } catch (e) {
            u0(e, { compID: o }, 'blockSettingsCardData startFuncPage');
          }
          try {
            w_(o);
          } catch (e) {
            u0(e, { compID: o }, 'getFullStatCompany121212 startFuncPage');
          }
        }
      } else if (e.includes('edit/catalog')) {
        let t;
        if ((t = e.match(/catalog\/(\d+)/i))) {
          o = t[1];
          try {
            await w1('catalogAdvInSettings');
          } catch (e) {
            u0(
              e,
              { nextfunct: 'catalogAdvInSettings' },
              'updateCategoriessdfadsa startFuncPage'
            );
          }
          try {
            w_(o);
          } catch (e) {
            u0(e, { compID: o }, 'getFullStatCompany32323 startFuncPage');
          }
        }
      } else if (e.includes('edit/auto')) {
        let t;
        if ((t = e.match(/auto\/(\d+)/))) {
          o = t[1];
          try {
            w_(o);
          } catch (e) {
            u0(e, { compID: o }, 'getFullStatCompany4344 startFuncPage');
          }
          try {
            wa();
          } catch (e) {
            u0(e, null, 'insertAutoSettingsKWPositionasd213123 startFuncPage');
          }
        }
      } else if (e.includes('campaigns') && !e.includes('edit')) {
        if (
          (document.getElementById('StatAllCompanyInjectTemp') ||
            (await u6('.header-row'), M(r_)('.header-row').before(pA)),
          e.includes('/campaigns/list/active') && !u1(yL))
        )
          try {
            yN();
          } catch (e) {
            u0(e, null, 'getBudgetCompanies startFuncPage');
          }
      } else if (
        e.includes('statistics') &&
        null === e.match(/statistics\/\d+/i)
      ) {
        if (!document.getElementById('StatAllCompanyInject'))
          try {
            yP();
          } catch (e) {
            u0(e, null, 'getReqAllCompanyStatqassa424324 startFuncPage');
          }
      } else console.log('empty');
      return !0;
    } catch (t) {
      u0(t, { hash: e }, 'startFuncPage');
    }
  }

  M(r_)(document).ready(async function () {
    try {
      await b6(),
        M(r_)('div.wrapper').append(
          '<div class="__evirma_inject_block">&nbsp;</div>'
        );
    } catch (e) {
      u0(e, null, 'document ready');
    }
  });

  function M(e) {
    return e && e.__esModule ? e.default : e;
  }
})();
