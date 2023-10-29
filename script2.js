(() => {
  async function yI(e) {
    return new Promise(async function (t, r) {
      try {
        0 === u1(bP) && (bP = await yD()),
          void 0 === bP[e] && console.log('store undefined', e, bP),
          t(bP[e]);
      } catch (t) {
        u0(t, { storeId: e }, 'getStoreNameById');
      }
    });
  }

  function z(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function t_(e) {
    return e && String(e).trim().toLowerCase();
  }
  function tm(e) {
    return !1 === e || null == e ? e : eb.isArray(e) ? e.map(tm) : String(e);
  }

  function tD(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new tx(null, e);
  }

  function tI(e) {
    tD(e),
      (e.headers = tb.from(e.headers)),
      (e.data = tw.call(e, e.transformRequest)),
      -1 !== ['post', 'put', 'patch'].indexOf(e.method) &&
        e.headers.setContentType('application/x-www-form-urlencoded', !1);
    let t = tO.getAdapter(e.adapter || td.adapter);
    return t(e).then(
      function (t) {
        return (
          tD(e),
          (t.data = tw.call(e, e.transformResponse, t)),
          (t.headers = tb.from(t.headers)),
          t
        );
      },
      function (t) {
        return (
          !ty(t) &&
            (tD(e),
            t &&
              t.response &&
              ((t.response.data = tw.call(e, e.transformResponse, t.response)),
              (t.response.headers = tb.from(t.response.headers)))),
          Promise.reject(t)
        );
      }
    );
  }

  // let el =
  //     'undefined' != typeof globalThis
  //       ? globalThis
  //       : 'undefined' != typeof self
  //       ? self
  //       : 'undefined' != typeof window
  //       ? window
  //       : P,
  //   ec = (e) => !G(e) && e !== el,
  //   ed = q('HTMLFormElement'),
  //   eu = (
  //     ({ hasOwnProperty: e }) =>
  //     (t, r) =>
  //       e.call(t, r)
  //   )(Object.prototype),
  //   ep = q('RegExp'),
  //   ef = (e, t) => {
  //     let r = Object.getOwnPropertyDescriptors(e),
  //       i = {};
  //     en(r, (r, a) => {
  //       !1 !== t(r, a, e) && (i[a] = r);
  //     }),
  //       Object.defineProperties(e, i);
  //   },
  //   e_ = 'abcdefghijklmnopqrstuvwxyz',
  //   em = '0123456789',
  //   eg = { DIGIT: em, ALPHA: e_, ALPHA_DIGIT: e_ + e_.toUpperCase() + em },
  //   ev = q('AsyncFunction');

  let { toString: W } = Object.prototype,
    { getPrototypeOf: H } = Object,
    U =
      ((b = Object.create(null)),
      (e) => {
        let t = W.call(e);
        return b[t] || (b[t] = t.slice(8, -1).toLowerCase());
      }),
    eh =
      ((w = 'undefined' != typeof Uint8Array && H(Uint8Array)),
      (e) => w && e instanceof w),
    q = (e) => ((e = e.toLowerCase()), (t) => U(t) === e),
    V = (e) => (t) => typeof t === e,
    { isArray: Y } = Array,
    G = V('undefined'),
    X = q('ArrayBuffer'),
    K = V('string'),
    J = V('function'),
    Q = V('number'),
    Z = (e) => null !== e && 'object' == typeof e,
    ee = (e) => {
      if ('object' !== U(e)) return !1;
      let t = H(e);
      return (
        (null === t ||
          t === Object.prototype ||
          null === Object.getPrototypeOf(t)) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    et = q('Date'),
    er = q('File'),
    ei = q('Blob'),
    ea = q('FileList'),
    es = q('URLSearchParams');

  let el =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
        ? window
        : P,
    ec = (e) => !G(e) && e !== el,
    ed = q('HTMLFormElement'),
    eu = (
      ({ hasOwnProperty: e }) =>
      (t, r) =>
        e.call(t, r)
    )(Object.prototype),
    ep = q('RegExp'),
    ef = (e, t) => {
      let r = Object.getOwnPropertyDescriptors(e),
        i = {};
      en(r, (r, a) => {
        !1 !== t(r, a, e) && (i[a] = r);
      }),
        Object.defineProperties(e, i);
    },
    e_ = 'abcdefghijklmnopqrstuvwxyz',
    em = '0123456789',
    eg = { DIGIT: em, ALPHA: e_, ALPHA_DIGIT: e_ + e_.toUpperCase() + em },
    ev = q('AsyncFunction');

  function en(e, t, { allOwnKeys: r = !1 } = {}) {
    let i, a;
    if (null != e) {
      if (('object' != typeof e && (e = [e]), Y(e)))
        for (i = 0, a = e.length; i < a; i++) t.call(null, e[i], i, e);
      else {
        let a;
        let s = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
          o = s.length;
        for (i = 0; i < o; i++) (a = s[i]), t.call(null, e[a], a, e);
      }
    }
  }

  function tw(e, t) {
    let r = this || td,
      i = t || r,
      a = tb.from(i.headers),
      s = i.data;
    return (
      eb.forEach(e, function (e) {
        s = e.call(r, s, a.normalize(), t ? t.status : void 0);
      }),
      a.normalize(),
      s
    );
  }

  function eo(e, t) {
    let r;
    t = t.toLowerCase();
    let i = Object.keys(e),
      a = i.length;
    for (; a-- > 0; ) if (t === (r = i[a]).toLowerCase()) return r;
    return null;
  }

  let tR = (e) => (e instanceof tb ? e.toJSON() : e);

  class tb {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, r) {
      let i = this;
      function a(e, t, r) {
        let a = t_(t);
        if (!a) throw Error('header name must be a non-empty string');
        let s = eb.findKey(i, a);
        (s && void 0 !== i[s] && !0 !== r && (void 0 !== r || !1 === i[s])) ||
          (i[s || t] = tm(e));
      }
      let s = (e, t) => eb.forEach(e, (e, r) => a(e, r, t));
      return (
        eb.isPlainObject(e) || e instanceof this.constructor
          ? s(e, t)
          : eb.isString(e) && (e = e.trim()) && !tg(e)
          ? s(tp(e), t)
          : null != e && a(t, e, r),
        this
      );
    }
    get(e, t) {
      if ((e = t_(e))) {
        let r = eb.findKey(this, e);
        if (r) {
          let e = this[r];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              let t;
              let r = Object.create(null),
                i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              for (; (t = i.exec(e)); ) r[t[1]] = t[2];
              return r;
            })(e);
          if (eb.isFunction(t)) return t.call(this, e, r);
          if (eb.isRegExp(t)) return t.exec(e);
          throw TypeError('parser must be boolean|regexp|function');
        }
      }
    }
    has(e, t) {
      if ((e = t_(e))) {
        let r = eb.findKey(this, e);
        return !!(r && void 0 !== this[r] && (!t || tv(this, this[r], r, t)));
      }
      return !1;
    }
    delete(e, t) {
      let r = this,
        i = !1;
      function a(e) {
        if ((e = t_(e))) {
          let a = eb.findKey(r, e);
          a && (!t || tv(r, r[a], a, t)) && (delete r[a], (i = !0));
        }
      }
      return eb.isArray(e) ? e.forEach(a) : a(e), i;
    }
    clear(e) {
      let t = Object.keys(this),
        r = t.length,
        i = !1;
      for (; r--; ) {
        let a = t[r];
        (!e || tv(this, this[a], a, e, !0)) && (delete this[a], (i = !0));
      }
      return i;
    }
    normalize(e) {
      let t = this,
        r = {};
      return (
        eb.forEach(this, (i, a) => {
          let s = eb.findKey(r, a);
          if (s) {
            (t[s] = tm(i)), delete t[a];
            return;
          }
          let o = e
            ? a
                .trim()
                .toLowerCase()
                .replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r)
            : String(a).trim();
          o !== a && delete t[a], (t[o] = tm(i)), (r[o] = !0);
        }),
        this
      );
    }
    concat(...e) {
      return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
      let t = Object.create(null);
      return (
        eb.forEach(this, (r, i) => {
          null != r &&
            !1 !== r &&
            (t[i] = e && eb.isArray(r) ? r.join(', ') : r);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map(([e, t]) => e + ': ' + t)
        .join('\n');
    }
    get [Symbol.toStringTag]() {
      return 'AxiosHeaders';
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e, ...t) {
      let r = new this(e);
      return t.forEach((e) => r.set(e)), r;
    }
    static accessor(e) {
      let t = (this[tf] = this[tf] = { accessors: {} }),
        r = t.accessors,
        i = this.prototype;
      function a(e) {
        let t = t_(e);
        r[t] ||
          (!(function (e, t) {
            let r = eb.toCamelCase(' ' + t);
            ['get', 'set', 'has'].forEach((i) => {
              Object.defineProperty(e, i + r, {
                value: function (e, r, a) {
                  return this[i].call(this, t, e, r, a);
                },
                configurable: !0,
              });
            });
          })(i, e),
          (r[t] = !0));
      }
      return eb.isArray(e) ? e.forEach(a) : a(e), this;
    }
  }

  var eb = {
    isArray: Y,
    isArrayBuffer: X,
    isBuffer: function (e) {
      return (
        null !== e &&
        !G(e) &&
        null !== e.constructor &&
        !G(e.constructor) &&
        J(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
      );
    },
    isFormData: (e) => {
      let t;
      return (
        e &&
        (('function' == typeof FormData && e instanceof FormData) ||
          (J(e.append) &&
            ('formdata' === (t = U(e)) ||
              ('object' === t &&
                J(e.toString) &&
                '[object FormData]' === e.toString()))))
      );
    },
    isArrayBufferView: function (e) {
      return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && X(e.buffer);
    },
    isString: K,
    isNumber: Q,
    isBoolean: (e) => !0 === e || !1 === e,
    isObject: Z,
    isPlainObject: ee,
    isUndefined: G,
    isDate: et,
    isFile: er,
    isBlob: ei,
    isRegExp: ep,
    isFunction: J,
    isStream: (e) => Z(e) && J(e.pipe),
    isURLSearchParams: es,
    isTypedArray: eh,
    isFileList: ea,
    forEach: en,
    merge: function e() {
      let { caseless: t } = (ec(this) && this) || {},
        r = {},
        i = (i, a) => {
          let s = (t && eo(r, a)) || a;
          ee(r[s]) && ee(i)
            ? (r[s] = e(r[s], i))
            : ee(i)
            ? (r[s] = e({}, i))
            : Y(i)
            ? (r[s] = i.slice())
            : (r[s] = i);
        };
      for (let e = 0, t = arguments.length; e < t; e++)
        arguments[e] && en(arguments[e], i);
      return r;
    },
    extend: (e, t, r, { allOwnKeys: i } = {}) => (
      en(
        t,
        (t, i) => {
          r && J(t) ? (e[i] = z(t, r)) : (e[i] = t);
        },
        { allOwnKeys: i }
      ),
      e
    ),
    trim: (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''),
    stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
    inherits: (e, t, r, i) => {
      (e.prototype = Object.create(t.prototype, i)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, 'super', { value: t.prototype }),
        r && Object.assign(e.prototype, r);
    },
    toFlatObject: (e, t, r, i) => {
      let a, s, o;
      let l = {};
      if (((t = t || {}), null == e)) return t;
      do {
        for (s = (a = Object.getOwnPropertyNames(e)).length; s-- > 0; )
          (o = a[s]),
            (!i || i(o, e, t)) && !l[o] && ((t[o] = e[o]), (l[o] = !0));
        e = !1 !== r && H(e);
      } while (e && (!r || r(e, t)) && e !== Object.prototype);
      return t;
    },
    kindOf: U,
    kindOfTest: q,
    endsWith: (e, t, r) => {
      (e = String(e)),
        (void 0 === r || r > e.length) && (r = e.length),
        (r -= t.length);
      let i = e.indexOf(t, r);
      return -1 !== i && i === r;
    },
    toArray: (e) => {
      if (!e) return null;
      if (Y(e)) return e;
      let t = e.length;
      if (!Q(t)) return null;
      let r = Array(t);
      for (; t-- > 0; ) r[t] = e[t];
      return r;
    },
    forEachEntry: (e, t) => {
      let r;
      let i = e && e[Symbol.iterator],
        a = i.call(e);
      for (; (r = a.next()) && !r.done; ) {
        let i = r.value;
        t.call(e, i[0], i[1]);
      }
    },
    matchAll: (e, t) => {
      let r;
      let i = [];
      for (; null !== (r = e.exec(t)); ) i.push(r);
      return i;
    },
    isHTMLForm: ed,
    hasOwnProperty: eu,
    hasOwnProp: eu,
    reduceDescriptors: ef,
    freezeMethods: (e) => {
      ef(e, (t, r) => {
        if (J(e) && -1 !== ['arguments', 'caller', 'callee'].indexOf(r))
          return !1;
        let i = e[r];
        if (J(i)) {
          if (((t.enumerable = !1), 'writable' in t)) {
            t.writable = !1;
            return;
          }
          t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + r + "'");
            });
        }
      });
    },
    toObjectSet: (e, t) => {
      let r = {};
      return (
        ((e) => {
          e.forEach((e) => {
            r[e] = !0;
          });
        })(Y(e) ? e : String(e).split(t)),
        r
      );
    },
    toCamelCase: (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
        return t.toUpperCase() + r;
      }),
    noop: () => {},
    toFiniteNumber: (e, t) => (Number.isFinite((e = +e)) ? e : t),
    findKey: eo,
    global: el,
    isContextDefined: ec,
    ALPHABET: eg,
    generateString: (e = 16, t = eg.ALPHA_DIGIT) => {
      let r = '',
        { length: i } = t;
      for (; e--; ) r += t[(Math.random() * i) | 0];
      return r;
    },
    isSpecCompliantForm: function (e) {
      return !!(
        e &&
        J(e.append) &&
        'FormData' === e[Symbol.toStringTag] &&
        e[Symbol.iterator]
      );
    },
    toJSONObject: (e) => {
      let t = Array(10),
        r = (e, i) => {
          if (Z(e)) {
            if (t.indexOf(e) >= 0) return;
            if (!('toJSON' in e)) {
              t[i] = e;
              let a = Y(e) ? [] : {};
              return (
                en(e, (e, t) => {
                  let s = r(e, i + 1);
                  G(s) || (a[t] = s);
                }),
                (t[i] = void 0),
                a
              );
            }
          }
          return e;
        };
      return r(e, 0);
    },
    isAsyncFn: ev,
    isThenable: (e) => e && (Z(e) || J(e)) && J(e.then) && J(e.catch),
  };

  function tP(e, t) {
    t = t || {};
    let r = {};
    function i(e, t, r) {
      return eb.isPlainObject(e) && eb.isPlainObject(t)
        ? eb.merge.call({ caseless: r }, e, t)
        : eb.isPlainObject(t)
        ? eb.merge({}, t)
        : eb.isArray(t)
        ? t.slice()
        : t;
    }
    function a(e, t, r) {
      return eb.isUndefined(t)
        ? eb.isUndefined(e)
          ? void 0
          : i(void 0, e, r)
        : i(e, t, r);
    }
    function s(e, t) {
      if (!eb.isUndefined(t)) return i(void 0, t);
    }
    function o(e, t) {
      return eb.isUndefined(t)
        ? eb.isUndefined(e)
          ? void 0
          : i(void 0, e)
        : i(void 0, t);
    }
    function l(r, a, s) {
      return s in t ? i(r, a) : s in e ? i(void 0, r) : void 0;
    }
    let c = {
      url: s,
      method: s,
      data: s,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: l,
      headers: (e, t) => a(tR(e), tR(t), !0),
    };
    return (
      eb.forEach(Object.keys(Object.assign({}, e, t)), function (i) {
        let s = c[i] || a,
          o = s(e[i], t[i], i);
        (eb.isUndefined(o) && s !== l) || (r[i] = o);
      }),
      r
    );
  }

  let tn =
      ('undefined' == typeof navigator ||
        ('ReactNative' !== (_ = navigator.product) &&
          'NativeScript' !== _ &&
          'NS' !== _)) &&
      'undefined' != typeof window &&
      'undefined' != typeof document,
    to =
      'undefined' != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      'function' == typeof self.importScripts;

  var tl = {
    classes: { URLSearchParams: ti, FormData: ta, Blob: ts },
    isStandardBrowserEnv: tn,
    isStandardBrowserWebWorkerEnv: to,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };

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

  var tt = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, r) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!r && r.synchronous,
            runWhen: r ? r.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        eb.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    tr = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    ti = 'undefined' != typeof URLSearchParams ? URLSearchParams : e6,
    ta = 'undefined' != typeof FormData ? FormData : null,
    ts = 'undefined' != typeof Blob ? Blob : null;

  class tz {
    constructor(e) {
      (this.defaults = e),
        (this.interceptors = { request: new tt(), response: new tt() });
    }
    request(e, t) {
      let r, i, a;
      'string' == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = tP(this.defaults, t));
      let { transitional: s, paramsSerializer: o, headers: l } = t;
      void 0 !== s &&
        tB.assertOptions(
          s,
          {
            silentJSONParsing: tF.transitional(tF.boolean),
            forcedJSONParsing: tF.transitional(tF.boolean),
            clarifyTimeoutError: tF.transitional(tF.boolean),
          },
          !1
        ),
        null != o &&
          (eb.isFunction(o)
            ? (t.paramsSerializer = { serialize: o })
            : tB.assertOptions(
                o,
                { encode: tF.function, serialize: tF.function },
                !0
              )),
        (t.method = (t.method || this.defaults.method || 'get').toLowerCase()),
        (r = l && eb.merge(l.common, l[t.method])) &&
          eb.forEach(
            ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
            (e) => {
              delete l[e];
            }
          ),
        (t.headers = tb.concat(r, l));
      let c = [],
        h = !0;
      this.interceptors.request.forEach(function (e) {
        ('function' != typeof e.runWhen || !1 !== e.runWhen(t)) &&
          ((h = h && e.synchronous), c.unshift(e.fulfilled, e.rejected));
      });
      let d = [];
      this.interceptors.response.forEach(function (e) {
        d.push(e.fulfilled, e.rejected);
      });
      let u = 0;
      if (!h) {
        let e = [tI.bind(this), void 0];
        for (
          e.unshift.apply(e, c),
            e.push.apply(e, d),
            a = e.length,
            i = Promise.resolve(t);
          u < a;

        )
          i = i.then(e[u++], e[u++]);
        return i;
      }
      a = c.length;
      let p = t;
      for (u = 0; u < a; ) {
        let e = c[u++],
          t = c[u++];
        try {
          p = e(p);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        i = tI.call(this, p);
      } catch (e) {
        return Promise.reject(e);
      }
      for (u = 0, a = d.length; u < a; ) i = i.then(d[u++], d[u++]);
      return i;
    }
    getUri(e) {
      e = tP(this.defaults, e);
      let t = tA(e.baseURL, e.url);
      return te(t, e.params, e.paramsSerializer);
    }
  }

  let tU = (function e(t) {
    let r = new tz(t),
      i = z(tz.prototype.request, r);
    return (
      // eb.extend(i, tz.prototype, r, { allOwnKeys: !0 }),
      // eb.extend(i, r, null, { allOwnKeys: !0 }),
      (i.create = function (r) {
        return e(tP(t, r));
      }),
      i
    );
  })(td);

  let by = tU.create();

  let bD;
  let bH = () => {
    try {
      let e,
        t = localStorage.getItem('wbx___basketMgrt'),
        r = 'geo-data-v1-0';
      t && (r = `geo-data-v1-${t}`),
        null != (e = JSON.parse(localStorage.getItem(r))) &&
          void 0 !== e.data &&
          (bD = e.data.xinfo);
      // ,
      // await chrome.storage.sync.get(
      //   // { enable_plugin: !0, enable_fix: !0 },
      //   // (e) => {
      //   //   (bN = e.enable_plugin), (bB = e.enable_fix);
      //   // }
      // )
      // ,
      // // (bz = await uZ.get('evirma_show_bids_client', bz)),
      // // (bF = await uZ.get('evirma_show_all_rekl_stat', bF)),
      // // (bW = await ph()),
      // // M(rf).set('evirmaExtClientID', bW, { expires: 7 }),
      // await chrome.storage.sync.get(
      //   // {
      //   //   [`apiWBkeyRekl_${bL}`]: null,
      //   //   [`apiWBkeyStat_${bL}`]: null,
      //   //   [`apiWBkeyContent_${bL}`]: null,
      //   // }
      //   // async function (e) {
      //   //   (l = e[`apiWBkeyRekl_${bL}`]),
      //   //     (c = e[`apiWBkeyStat_${bL}`]),
      //   //     (h = e[`apiWBkeyContent_${bL}`]);
      //   // }
      // );
    } catch (e) {
      // u0(e, null, 'restoreOptions');
      console.log('no bH');
    }
  };

  bH();

  async function wK() {
    let e = window.location.href;
    e = e.substring(e.indexOf('/catalog/') + 9, e.lastIndexOf('/detail.aspx'));
    try {
      // await wG(e);
      console.log(e, bD);

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
            `;
        // s = await u6('.product-page .product-page__price-block .price-block');
        // M(r_)(s).after(a),
        // M(r_)('.product-page__price-block--aside').length &&
        // M(r_)('.product-page__price-block--aside').after(a);
        // let o = await u6('.j-price-block');
        // M(r_)('.product-page__price-block--aside').length ||
        //   M(r_)(o).after(
        //     `<div class="product-page__seller-wrap section-border">${a}</div>`
        //   );
      }
      // if (r.sizes) {
      //   let e = r.sizes,
      //     t = {};
      //   for (let r of e)
      //     for (let e of r.stocks)
      //       void 0 === t[e.wh]
      //         ? (t[e.wh] = {
      //             qty: e.qty,
      //             name: await yI(e.wh),
      //             time: e.time1 + e.time2,
      //           })
      //         : (t[e.wh].qty = t[e.wh].qty + e.qty);
      //   let i = '';
      //   for (let e of Object.keys(t)) {
      //     let r = t[e];
      //     i += `
      //         <span>${r.name}:</span> <span class="grid grid-cols-2"><b>${r.time} ч.</b>  <span>${r.qty} шт.</span></span>
      //     `;
      //   }
      //   let a = { id: r.wh, name: await yI(r.wh), time: r.time1 + r.time2 },
      //     s = `
      //         <div class="product-page__seller-wrap section-border __evirma_inject_block">
      //             <div class="seller-info__content">
      //                 <div class="seller-info__header">
      //                     <div class="seller-info__wrap" style="font-weight: bold; color: #555;">
      //                         <img class="inline-flex w-5 h-5 align-middle" alt="" src="${pn}"> Раскладка по складам
      //                     </div>

      //                     <div class="text-sm ml-6 mt-2">
      //                         <p style="font-weight: bold">
      //                             ${a.name}: ${a.time} час.
      //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
      //                               <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      //                             </svg>
      //                         </p>
      //                     </div>

      //                     <div class="ml-6 pt-2 mt-2 grid grid-cols-2 gap-2 text-sm" style="color: #555; border-top: 1px solid #ccc;">
      //                         ${i}
      //                     </div>

      //                 </div>
      //             </div>
      //         </div>
      //         `,
      //     o = await u6('.j-price-block');
      //   M(r_)(o).after(s);
      // }

      console.log(a);
    } catch (t) {
      // u0(t, { checkUrl: e, xinfo: bD }, 'cardPage');
      console.log('no wK');
    }
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
          console.log('no wX r=', r);
          // u0(r, { nmID: e, xinfo: t }, 'getWBProductDetailData'), i(r);
        }
      })
    );
  }

  wK();
})();
