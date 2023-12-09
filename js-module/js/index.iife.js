!(function (e) {
  'use strict';
  function r(e) {
    return (
      null != e && 'object' == typeof e && !0 === e['@@functional/placeholder']
    );
  }
  function n(e) {
    return function n(t) {
      return 0 === arguments.length || r(t) ? n : e.apply(this, arguments);
    };
  }
  function t(e) {
    return function t(i, a) {
      switch (arguments.length) {
        case 0:
          return t;
        case 1:
          return r(i)
            ? t
            : n(function (r) {
                return e(i, r);
              });
        default:
          return r(i) && r(a)
            ? t
            : r(i)
            ? n(function (r) {
                return e(r, a);
              })
            : r(a)
            ? n(function (r) {
                return e(i, r);
              })
            : e(i, a);
      }
    };
  }
  function i(e, r) {
    switch (e) {
      case 0:
        return function () {
          return r.apply(this, arguments);
        };
      case 1:
        return function (e) {
          return r.apply(this, arguments);
        };
      case 2:
        return function (e, n) {
          return r.apply(this, arguments);
        };
      case 3:
        return function (e, n, t) {
          return r.apply(this, arguments);
        };
      case 4:
        return function (e, n, t, i) {
          return r.apply(this, arguments);
        };
      case 5:
        return function (e, n, t, i, a) {
          return r.apply(this, arguments);
        };
      case 6:
        return function (e, n, t, i, a, o) {
          return r.apply(this, arguments);
        };
      case 7:
        return function (e, n, t, i, a, o, u) {
          return r.apply(this, arguments);
        };
      case 8:
        return function (e, n, t, i, a, o, u, l) {
          return r.apply(this, arguments);
        };
      case 9:
        return function (e, n, t, i, a, o, u, l, s) {
          return r.apply(this, arguments);
        };
      case 10:
        return function (e, n, t, i, a, o, u, l, s, c) {
          return r.apply(this, arguments);
        };
      default:
        throw new Error(
          'First argument to _arity must be a non-negative integer no greater than ten'
        );
    }
  }
  function a(e, n, t) {
    return function () {
      for (
        var o = [], u = 0, l = e, s = 0;
        s < n.length || u < arguments.length;

      ) {
        var c;
        s < n.length && (!r(n[s]) || u >= arguments.length)
          ? (c = n[s])
          : ((c = arguments[u]), (u += 1)),
          (o[s] = c),
          r(c) || (l -= 1),
          (s += 1);
      }
      return l <= 0 ? t.apply(this, o) : i(l, a(e, o, t));
    };
  }
  var o = t(function (e, r) {
      return 1 === e ? n(r) : i(e, a(e, [], r));
    }),
    u = n(function (e) {
      return o(e.length, function () {
        var r = 0,
          n = arguments[0],
          t = arguments[arguments.length - 1],
          i = Array.prototype.slice.call(arguments, 0);
        return (
          (i[0] = function () {
            var e = n.apply(
              this,
              (function (e, r) {
                var n;
                r = r || [];
                var t = (e = e || []).length,
                  i = r.length,
                  a = [];
                for (n = 0; n < t; ) (a[a.length] = e[n]), (n += 1);
                for (n = 0; n < i; ) (a[a.length] = r[n]), (n += 1);
                return a;
              })(arguments, [r, t])
            );
            return (r += 1), e;
          }),
          e.apply(this, i)
        );
      });
    }),
    l =
      Array.isArray ||
      function (e) {
        return (
          null != e &&
          e.length >= 0 &&
          '[object Array]' === Object.prototype.toString.call(e)
        );
      };
  function s(e, r, n) {
    return function () {
      if (0 === arguments.length) return n();
      var t = arguments[arguments.length - 1];
      if (!l(t)) {
        for (var i = 0; i < e.length; ) {
          if ('function' == typeof t[e[i]])
            return t[e[i]].apply(
              t,
              Array.prototype.slice.call(arguments, 0, -1)
            );
          i += 1;
        }
        if (
          (function (e) {
            return null != e && 'function' == typeof e['@@transducer/step'];
          })(t)
        )
          return r.apply(null, Array.prototype.slice.call(arguments, 0, -1))(t);
      }
      return n.apply(this, arguments);
    };
  }
  var c = function () {
      return this.xf['@@transducer/init']();
    },
    p = function (e) {
      return this.xf['@@transducer/result'](e);
    };
  var g = n(function (e) {
      return (
        !!l(e) ||
        (!!e &&
          'object' == typeof e &&
          !(function (e) {
            return '[object String]' === Object.prototype.toString.call(e);
          })(e) &&
          (0 === e.length ||
            (e.length > 0 &&
              e.hasOwnProperty(0) &&
              e.hasOwnProperty(e.length - 1))))
      );
    }),
    f = (function () {
      function e(e) {
        this.f = e;
      }
      return (
        (e.prototype['@@transducer/init'] = function () {
          throw new Error('init not implemented on XWrap');
        }),
        (e.prototype['@@transducer/result'] = function (e) {
          return e;
        }),
        (e.prototype['@@transducer/step'] = function (e, r) {
          return this.f(e, r);
        }),
        e
      );
    })();
  var d = t(function (e, r) {
    return i(e.length, function () {
      return e.apply(r, arguments);
    });
  });
  function S(e, r, n) {
    for (var t = n.next(); !t.done; ) {
      if (
        (r = e['@@transducer/step'](r, t.value)) &&
        r['@@transducer/reduced']
      ) {
        r = r['@@transducer/value'];
        break;
      }
      t = n.next();
    }
    return e['@@transducer/result'](r);
  }
  function h(e, r, n, t) {
    return e['@@transducer/result'](n[t](d(e['@@transducer/step'], e), r));
  }
  var v = 'undefined' != typeof Symbol ? Symbol.iterator : '@@iterator';
  function m(e, r, n) {
    if (
      ('function' == typeof e &&
        (e = (function (e) {
          return new f(e);
        })(e)),
      g(n))
    )
      return (function (e, r, n) {
        for (var t = 0, i = n.length; t < i; ) {
          if (
            (r = e['@@transducer/step'](r, n[t])) &&
            r['@@transducer/reduced']
          ) {
            r = r['@@transducer/value'];
            break;
          }
          t += 1;
        }
        return e['@@transducer/result'](r);
      })(e, r, n);
    if ('function' == typeof n['fantasy-land/reduce'])
      return h(e, r, n, 'fantasy-land/reduce');
    if (null != n[v]) return S(e, r, n[v]());
    if ('function' == typeof n.next) return S(e, r, n);
    if ('function' == typeof n.reduce) return h(e, r, n, 'reduce');
    throw new TypeError('reduce: list must be array or iterable');
  }
  var b = (function () {
      function e(e, r) {
        (this.xf = r), (this.f = e);
      }
      return (
        (e.prototype['@@transducer/init'] = c),
        (e.prototype['@@transducer/result'] = p),
        (e.prototype['@@transducer/step'] = function (e, r) {
          return this.xf['@@transducer/step'](e, this.f(r));
        }),
        e
      );
    })(),
    P = t(function (e, r) {
      return new b(e, r);
    });
  function y(e, r) {
    return Object.prototype.hasOwnProperty.call(r, e);
  }
  var C = Object.prototype.toString,
    _ = (function () {
      return '[object Arguments]' === C.call(arguments)
        ? function (e) {
            return '[object Arguments]' === C.call(e);
          }
        : function (e) {
            return y('callee', e);
          };
    })(),
    V = !{ toString: null }.propertyIsEnumerable('toString'),
    H = [
      'constructor',
      'valueOf',
      'isPrototypeOf',
      'toString',
      'propertyIsEnumerable',
      'hasOwnProperty',
      'toLocaleString',
    ],
    L = (function () {
      return arguments.propertyIsEnumerable('length');
    })(),
    T = function (e, r) {
      for (var n = 0; n < e.length; ) {
        if (e[n] === r) return !0;
        n += 1;
      }
      return !1;
    },
    B =
      'function' != typeof Object.keys || L
        ? n(function (e) {
            if (Object(e) !== e) return [];
            var r,
              n,
              t = [],
              i = L && _(e);
            for (r in e) !y(r, e) || (i && 'length' === r) || (t[t.length] = r);
            if (V)
              for (n = H.length - 1; n >= 0; )
                y((r = H[n]), e) && !T(t, r) && (t[t.length] = r), (n -= 1);
            return t;
          })
        : n(function (e) {
            return Object(e) !== e ? [] : Object.keys(e);
          }),
    I = t(
      s(['fantasy-land/map', 'map'], P, function (e, r) {
        switch (Object.prototype.toString.call(r)) {
          case '[object Function]':
            return o(r.length, function () {
              return e.call(this, r.apply(this, arguments));
            });
          case '[object Object]':
            return m(
              function (n, t) {
                return (n[t] = e(r[t])), n;
              },
              {},
              B(r)
            );
          default:
            return (function (e, r) {
              for (var n = 0, t = r.length, i = Array(t); n < t; )
                (i[n] = e(r[n])), (n += 1);
              return i;
            })(e, r);
        }
      })
    ),
    A = (function () {
      function e(e, r) {
        (this.xf = r), (this.f = e), (this.any = !1);
      }
      return (
        (e.prototype['@@transducer/init'] = c),
        (e.prototype['@@transducer/result'] = function (e) {
          return (
            this.any || (e = this.xf['@@transducer/step'](e, !1)),
            this.xf['@@transducer/result'](e)
          );
        }),
        (e.prototype['@@transducer/step'] = function (e, r) {
          var n;
          return (
            this.f(r) &&
              ((this.any = !0),
              (e =
                (n = this.xf['@@transducer/step'](e, !0)) &&
                n['@@transducer/reduced']
                  ? n
                  : { '@@transducer/value': n, '@@transducer/reduced': !0 })),
            e
          );
        }),
        e
      );
    })(),
    R = t(
      s(
        ['any'],
        t(function (e, r) {
          return new A(e, r);
        }),
        function (e, r) {
          for (var n = 0; n < r.length; ) {
            if (e(r[n])) return !0;
            n += 1;
          }
          return !1;
        }
      )
    ),
    W = n(function (e) {
      return null === e
        ? 'Null'
        : void 0 === e
        ? 'Undefined'
        : Object.prototype.toString.call(e).slice(8, -1);
    });
  function w(e) {
    return e;
  }
  var D = n(w);
  function X(e) {
    for (var r, n = []; !(r = e.next()).done; ) n.push(r.value);
    return n;
  }
  function k(e, r, n) {
    for (var t = 0, i = n.length; t < i; ) {
      if (e(r, n[t])) return !0;
      t += 1;
    }
    return !1;
  }
  var F =
    'function' == typeof Object.is
      ? Object.is
      : function (e, r) {
          return e === r ? 0 !== e || 1 / e == 1 / r : e != e && r != r;
        };
  function M(e, r, n, t) {
    var i = X(e);
    function a(e, r) {
      return O(e, r, n.slice(), t.slice());
    }
    return !k(
      function (e, r) {
        return !k(a, r, e);
      },
      X(r),
      i
    );
  }
  function O(e, r, n, t) {
    if (F(e, r)) return !0;
    var i,
      a,
      o = W(e);
    if (o !== W(r)) return !1;
    if (
      'function' == typeof e['fantasy-land/equals'] ||
      'function' == typeof r['fantasy-land/equals']
    )
      return (
        'function' == typeof e['fantasy-land/equals'] &&
        e['fantasy-land/equals'](r) &&
        'function' == typeof r['fantasy-land/equals'] &&
        r['fantasy-land/equals'](e)
      );
    if ('function' == typeof e.equals || 'function' == typeof r.equals)
      return (
        'function' == typeof e.equals &&
        e.equals(r) &&
        'function' == typeof r.equals &&
        r.equals(e)
      );
    switch (o) {
      case 'Arguments':
      case 'Array':
      case 'Object':
        if (
          'function' == typeof e.constructor &&
          'Promise' ===
            ((i = e.constructor),
            null == (a = String(i).match(/^function (\w*)/)) ? '' : a[1])
        )
          return e === r;
        break;
      case 'Boolean':
      case 'Number':
      case 'String':
        if (typeof e != typeof r || !F(e.valueOf(), r.valueOf())) return !1;
        break;
      case 'Date':
        if (!F(e.valueOf(), r.valueOf())) return !1;
        break;
      case 'Error':
        return e.name === r.name && e.message === r.message;
      case 'RegExp':
        if (
          e.source !== r.source ||
          e.global !== r.global ||
          e.ignoreCase !== r.ignoreCase ||
          e.multiline !== r.multiline ||
          e.sticky !== r.sticky ||
          e.unicode !== r.unicode
        )
          return !1;
    }
    for (var u = n.length - 1; u >= 0; ) {
      if (n[u] === e) return t[u] === r;
      u -= 1;
    }
    switch (o) {
      case 'Map':
        return (
          e.size === r.size &&
          M(e.entries(), r.entries(), n.concat([e]), t.concat([r]))
        );
      case 'Set':
        return (
          e.size === r.size &&
          M(e.values(), r.values(), n.concat([e]), t.concat([r]))
        );
      case 'Arguments':
      case 'Array':
      case 'Object':
      case 'Boolean':
      case 'Number':
      case 'String':
      case 'Date':
      case 'Error':
      case 'RegExp':
      case 'Int8Array':
      case 'Uint8Array':
      case 'Uint8ClampedArray':
      case 'Int16Array':
      case 'Uint16Array':
      case 'Int32Array':
      case 'Uint32Array':
      case 'Float32Array':
      case 'Float64Array':
      case 'ArrayBuffer':
        break;
      default:
        return !1;
    }
    var l = B(e);
    if (l.length !== B(r).length) return !1;
    var s = n.concat([e]),
      c = t.concat([r]);
    for (u = l.length - 1; u >= 0; ) {
      var p = l[u];
      if (!y(p, r) || !O(r[p], e[p], s, c)) return !1;
      u -= 1;
    }
    return !0;
  }
  var x = t(function (e, r) {
    return O(e, r, [], []);
  });
  function j(e, r) {
    return (
      (function (e, r, n) {
        var t, i;
        if ('function' == typeof e.indexOf)
          switch (typeof r) {
            case 'number':
              if (0 === r) {
                for (t = 1 / r; n < e.length; ) {
                  if (0 === (i = e[n]) && 1 / i === t) return n;
                  n += 1;
                }
                return -1;
              }
              if (r != r) {
                for (; n < e.length; ) {
                  if ('number' == typeof (i = e[n]) && i != i) return n;
                  n += 1;
                }
                return -1;
              }
              return e.indexOf(r, n);
            case 'string':
            case 'boolean':
            case 'function':
            case 'undefined':
              return e.indexOf(r, n);
            case 'object':
              if (null === r) return e.indexOf(r, n);
          }
        for (; n < e.length; ) {
          if (x(e[n], r)) return n;
          n += 1;
        }
        return -1;
      })(r, e, 0) >= 0
    );
  }
  var U = (function () {
      function e(e, r) {
        (this.xf = r), (this.f = e);
      }
      return (
        (e.prototype['@@transducer/init'] = c),
        (e.prototype['@@transducer/result'] = p),
        (e.prototype['@@transducer/step'] = function (e, r) {
          return this.f(r) ? this.xf['@@transducer/step'](e, r) : e;
        }),
        e
      );
    })(),
    G = t(
      s(
        ['fantasy-land/filter', 'filter'],
        t(function (e, r) {
          return new U(e, r);
        }),
        function (e, r) {
          return (
            (n = r),
            '[object Object]' === Object.prototype.toString.call(n)
              ? m(
                  function (n, t) {
                    return e(r[t]) && (n[t] = r[t]), n;
                  },
                  {},
                  B(r)
                )
              : (function (e, r) {
                  for (var n = 0, t = r.length, i = []; n < t; )
                    e(r[n]) && (i[i.length] = r[n]), (n += 1);
                  return i;
                })(e, r)
          );
          var n;
        }
      )
    ),
    z = (function () {
      function e() {
        (this._nativeSet = 'function' == typeof Set ? new Set() : null),
          (this._items = {});
      }
      return (
        (e.prototype.add = function (e) {
          return !E(e, !0, this);
        }),
        (e.prototype.has = function (e) {
          return E(e, !1, this);
        }),
        e
      );
    })();
  function E(e, r, n) {
    var t,
      i = typeof e;
    switch (i) {
      case 'string':
      case 'number':
        return 0 === e && 1 / e == -1 / 0
          ? !!n._items['-0'] || (r && (n._items['-0'] = !0), !1)
          : null !== n._nativeSet
          ? r
            ? ((t = n._nativeSet.size),
              n._nativeSet.add(e),
              n._nativeSet.size === t)
            : n._nativeSet.has(e)
          : i in n._items
          ? e in n._items[i] || (r && (n._items[i][e] = !0), !1)
          : (r && ((n._items[i] = {}), (n._items[i][e] = !0)), !1);
      case 'boolean':
        if (i in n._items) {
          var a = e ? 1 : 0;
          return !!n._items[i][a] || (r && (n._items[i][a] = !0), !1);
        }
        return r && (n._items[i] = e ? [!1, !0] : [!0, !1]), !1;
      case 'function':
        return null !== n._nativeSet
          ? r
            ? ((t = n._nativeSet.size),
              n._nativeSet.add(e),
              n._nativeSet.size === t)
            : n._nativeSet.has(e)
          : i in n._items
          ? !!j(e, n._items[i]) || (r && n._items[i].push(e), !1)
          : (r && (n._items[i] = [e]), !1);
      case 'undefined':
        return !!n._items[i] || (r && (n._items[i] = !0), !1);
      case 'object':
        if (null === e)
          return !!n._items.null || (r && (n._items.null = !0), !1);
      default:
        return (i = Object.prototype.toString.call(e)) in n._items
          ? !!j(e, n._items[i]) || (r && n._items[i].push(e), !1)
          : (r && (n._items[i] = [e]), !1);
    }
  }
  var q,
    N = (function () {
      function e(e, r) {
        (this.xf = r), (this.f = e), (this.set = new z());
      }
      return (
        (e.prototype['@@transducer/init'] = c),
        (e.prototype['@@transducer/result'] = p),
        (e.prototype['@@transducer/step'] = function (e, r) {
          return this.set.add(this.f(r))
            ? this.xf['@@transducer/step'](e, r)
            : e;
        }),
        e
      );
    })(),
    K = t(
      s(
        [],
        t(function (e, r) {
          return new N(e, r);
        }),
        function (e, r) {
          for (var n, t, i = new z(), a = [], o = 0; o < r.length; )
            (n = e((t = r[o]))), i.add(n) && a.push(t), (o += 1);
          return a;
        }
      )
    )(D);
  !(function (e) {
    (e[(e.None = 0)] = 'None'),
      (e[(e.Conductor = 1)] = 'Conductor'),
      (e[(e.SecondConductor = 2)] = 'SecondConductor'),
      (e[(e.SurfaceCasing = 3)] = 'SurfaceCasing'),
      (e[(e.IntermediateCasing = 4)] = 'IntermediateCasing'),
      (e[(e.DrillingLiner = 5)] = 'DrillingLiner'),
      (e[(e.ProductionCasing = 6)] = 'ProductionCasing'),
      (e[(e.ProductionLiner = 7)] = 'ProductionLiner'),
      (e[(e.Tieback = 12)] = 'Tieback'),
      (e[(e.Liner = 13)] = 'Liner'),
      (e[(e.OpenHole = 9)] = 'OpenHole');
  })(q || (q = {}));
  const J = {
    0: 'To be selected',
    1: 'Conductor',
    2: '2nd conductor',
    3: 'Surface casing',
    4: 'Intermediate casing',
    5: 'Drilling liner',
    10: 'Drilling tieback',
    6: 'Production casing',
    7: 'Production liner',
    11: 'Production tieback',
    9: 'Open hole',
    12: 'Tie-back',
    13: 'Liner',
  };
  var Q, $;
  !(function (e) {
    (e[(e.NewWell = 0)] = 'NewWell'),
      (e[(e.Illustration = 1)] = 'Illustration'),
      (e[(e.Qualification = 2)] = 'Qualification'),
      (e[(e.WellBarrierSchematic = 3)] = 'WellBarrierSchematic'),
      (e[(e.WellSchematic = 4)] = 'WellSchematic'),
      (e[(e.Trajectory = 5)] = 'Trajectory'),
      (e[(e.PressurePlot = 6)] = 'PressurePlot'),
      (e[(e.Perforation = 7)] = 'Perforation'),
      (e[(e.WellControlAction = 8)] = 'WellControlAction'),
      (e[(e.SequenceDiagram = 9)] = 'SequenceDiagram'),
      (e[(e.RiskAssessment = 10)] = 'RiskAssessment'),
      (e[(e.Verification = 11)] = 'Verification'),
      (e[(e.Maasp = 12)] = 'Maasp'),
      (e[(e.Monitoring = 13)] = 'Monitoring'),
      (e[(e.CompletionDiagram = 14)] = 'CompletionDiagram'),
      (e[(e.AssemblyDrawing = 15)] = 'AssemblyDrawing'),
      (e[(e.InterventionStackup = 16)] = 'InterventionStackup'),
      (e[(e.CementQualification = 17)] = 'CementQualification'),
      (e[(e.AutoIllustration = 18)] = 'AutoIllustration'),
      (e[(e.DesignCompletionString = 19)] = 'DesignCompletionString'),
      (e[(e.WellAttachment = 20)] = 'WellAttachment');
  })(Q || (Q = {})),
    (function (e) {
      (e[(e.GroupSandControl = -104)] = 'GroupSandControl'),
        (e[(e.GroupSubseaLightBop = -103)] = 'GroupSubseaLightBop'),
        (e[(e.GroupInterventionBop = -102)] = 'GroupInterventionBop'),
        (e[(e.GroupSurfaceXmasTree = -101)] = 'GroupSurfaceXmasTree'),
        (e[(e.GroupSubseaXmasTree = -100)] = 'GroupSubseaXmasTree'),
        (e[(e.WcaComment = -9)] = 'WcaComment'),
        (e[(e.WcaQuadrilateral = -8)] = 'WcaQuadrilateral'),
        (e[(e.WcaRoundRectangle = -7)] = 'WcaRoundRectangle'),
        (e[(e.WcaConnector = -6)] = 'WcaConnector'),
        (e[(e.WcaRectangle = -5)] = 'WcaRectangle'),
        (e[(e.CommentBox = -4)] = 'CommentBox'),
        (e[(e.HolePadding = -3)] = 'HolePadding'),
        (e[(e.EmptyPrimary = -2)] = 'EmptyPrimary'),
        (e[(e.EmptySecondary = -1)] = 'EmptySecondary'),
        (e[(e.Casing = 0)] = 'Casing'),
        (e[(e.TieBack = 1)] = 'TieBack'),
        (e[(e.Packer = 2)] = 'Packer'),
        (e[(e.CasingPlug = 3)] = 'CasingPlug'),
        (e[(e.Perforation = 4)] = 'Perforation'),
        (e[(e.DrillingBop = 5)] = 'DrillingBop'),
        (e[(e.SlottedLiner = 6)] = 'SlottedLiner'),
        (e[(e.Screen = 7)] = 'Screen'),
        (e[(e.DownholeSafetyValve = 8)] = 'DownholeSafetyValve'),
        (e[(e.Tubing = 9)] = 'Tubing'),
        (e[(e.CementPlug = 10)] = 'CementPlug'),
        (e[(e.GasLiftValve = 11)] = 'GasLiftValve'),
        (e[(e.ReservoirSection = 12)] = 'ReservoirSection'),
        (e[(e.FormationStrengthPoint = 13)] = 'FormationStrengthPoint'),
        (e[(e.CasingHanger = 14)] = 'CasingHanger'),
        (e[(e.WellheadAccess = 15)] = 'WellheadAccess'),
        (e[(e.Spear = 16)] = 'Spear'),
        (e[(e.TubularCut = 17)] = 'TubularCut'),
        (e[(e.GravelPackedScreen = 18)] = 'GravelPackedScreen'),
        (e[(e.CasingPerforation = 19)] = 'CasingPerforation'),
        (e[(e.TubingHanger = 20)] = 'TubingHanger'),
        (e[(e.MultilateralBranch = 21)] = 'MultilateralBranch'),
        (e[(e.Cement = 23)] = 'Cement'),
        (e[(e.Wellhead = 24)] = 'Wellhead'),
        (e[(e.LandUnihead = 24001)] = 'LandUnihead'),
        (e[(e.PlatformUnihead = 24002)] = 'PlatformUnihead'),
        (e[(e.SubseaHxtUnihead = 24003)] = 'SubseaHxtUnihead'),
        (e[(e.ShallowUnihead = 24004)] = 'ShallowUnihead'),
        (e[(e.SubseaVxtUnihead = 24005)] = 'SubseaVxtUnihead'),
        (e[(e.SubseaMudlineSuspensionUnihead = 24006)] =
          'SubseaMudlineSuspensionUnihead'),
        (e[(e.PlatformXmas = 25)] = 'PlatformXmas'),
        (e[(e.VerticalXmas = 26)] = 'VerticalXmas'),
        (e[(e.HorizontalXmas = 27)] = 'HorizontalXmas'),
        (e[(e.PerforatingGun = 28)] = 'PerforatingGun'),
        (e[(e.DrillPipe = 29)] = 'DrillPipe'),
        (e[(e.CasingRunningAssembly = 30)] = 'CasingRunningAssembly'),
        (e[(e.DrillPipeCollar = 31)] = 'DrillPipeCollar'),
        (e[(e.FluidWater = 32)] = 'FluidWater'),
        (e[(e.Formation = 33)] = 'Formation'),
        (e[(e.AnnulusSafetyValve = 34)] = 'AnnulusSafetyValve'),
        (e[(e.PerforatedJoint = 35)] = 'PerforatedJoint'),
        (e[(e.ExpansionJoint = 36)] = 'ExpansionJoint'),
        (e[(e.InlineESP = 37)] = 'InlineESP'),
        (e[(e.ESPwithBypass = 38)] = 'ESPwithBypass'),
        (e[(e.SuckerRodPump = 39)] = 'SuckerRodPump'),
        (e[(e.PBR = 40)] = 'PBR'),
        (e[(e.SuckerRodXmasTree = 41)] = 'SuckerRodXmasTree'),
        (e[(e.DownHoleIsolationValve = 42)] = 'DownHoleIsolationValve'),
        (e[(e.ZoneControlAssembly = 43)] = 'ZoneControlAssembly'),
        (e[(e.Straddle = 44)] = 'Straddle'),
        (e[(e.ScabLiner = 45)] = 'ScabLiner'),
        (e[(e.CasingBarrier = 46)] = 'CasingBarrier'),
        (e[(e.RuptureDisk = 47)] = 'RuptureDisk'),
        (e[(e.StageCollar = 48)] = 'StageCollar'),
        (e[(e.DownholeTesterValve = 49)] = 'DownholeTesterValve'),
        (e[(e.SurfaceTestTree = 50)] = 'SurfaceTestTree'),
        (e[(e.TubingBreak = 51)] = 'TubingBreak'),
        (e[(e.WirelineString = 52)] = 'WirelineString'),
        (e[(e.SnubbingString = 53)] = 'SnubbingString'),
        (e[(e.ProductionTreeIsolationTool = 54)] =
          'ProductionTreeIsolationTool'),
        (e[(e.WirelineBop = 55)] = 'WirelineBop'),
        (e[(e.SnubbingBop = 56)] = 'SnubbingBop'),
        (e[(e.HighPressureRiser = 57)] = 'HighPressureRiser'),
        (e[(e.TubingPlug = 58)] = 'TubingPlug'),
        (e[(e.LandingString = 60)] = 'LandingString'),
        (e[(e.WirelineDeploymentBop = 61)] = 'WirelineDeploymentBop'),
        (e[(e.CoiledTubingBop = 62)] = 'CoiledTubingBop'),
        (e[(e.CoiledTubingString = 63)] = 'CoiledTubingString'),
        (e[(e.RiserlessMudRecovery = 64)] = 'RiserlessMudRecovery'),
        (e[(e.SubseaTestTree = 65)] = 'SubseaTestTree'),
        (e[(e.FlutedHanger = 66)] = 'FlutedHanger'),
        (e[(e.LubricatorValve = 67)] = 'LubricatorValve'),
        (e[(e.StabInSafetyValve = 69)] = 'StabInSafetyValve'),
        (e[(e.TubingHangerPlug = 70)] = 'TubingHangerPlug'),
        (e[(e.CrownPlug = 71)] = 'CrownPlug'),
        (e[(e.RotatingControl = 72)] = 'RotatingControl'),
        (e[(e.HXTBarrierLine = 73)] = 'HXTBarrierLine'),
        (e[(e.RetainerValve = 74)] = 'RetainerValve'),
        (e[(e.SnubbingCheckValve = 75)] = 'SnubbingCheckValve'),
        (e[(e.CoiledTubingStringCheckValve = 76)] =
          'CoiledTubingStringCheckValve'),
        (e[(e.WirelineSafetyHead = 77)] = 'WirelineSafetyHead'),
        (e[(e.NoneReturnValve = 78)] = 'NoneReturnValve'),
        (e[(e.SubseaLightInterventionBop = 79)] = 'SubseaLightInterventionBop'),
        (e[(e.GreaseInjectionHead = 80)] = 'GreaseInjectionHead'),
        (e[(e.WirelineLubricator = 81)] = 'WirelineLubricator'),
        (e[(e.CoiledTubingStripper = 82)] = 'CoiledTubingStripper'),
        (e[(e.CoiledTubingSafetyHead = 83)] = 'CoiledTubingSafetyHead'),
        (e[(e.SnubbingStripperBop = 84)] = 'SnubbingStripperBop'),
        (e[(e.SnubbingSafetyHead = 85)] = 'SnubbingSafetyHead'),
        (e[(e.SnubbingStripper = 86)] = 'SnubbingStripper'),
        (e[(e.DualXmas_PWV_AMV = 87)] = 'DualXmas_PWV_AMV'),
        (e[(e.DualXmas_PWV = 88)] = 'DualXmas_PWV'),
        (e[(e.DualXmas_PMV = 89)] = 'DualXmas_PMV'),
        (e[(e.DualXmas_PWV_PSV_AMV = 90)] = 'DualXmas_PWV_PSV_AMV'),
        (e[(e.DualXmas_PWV_PSV_AwV = 91)] = 'DualXmas_PWV_PSV_AwV'),
        (e[(e.DualXmas_XOV = 92)] = 'DualXmas_XOV'),
        (e[(e.DualXmas_PSV_PWV = 93)] = 'DualXmas_PSV_PWV'),
        (e[(e.IsolationPacker = 94)] = 'IsolationPacker'),
        (e[(e.AnnulusFluidColumn = 95)] = 'AnnulusFluidColumn'),
        (e[(e.DualboreLowerRiser = 96)] = 'DualboreLowerRiser'),
        (e[(e.DualboreLowerRiser_XOV_BPV = 97)] = 'DualboreLowerRiser_XOV_BPV'),
        (e[(e.DualboreWorkoverRiser = 98)] = 'DualboreWorkoverRiser'),
        (e[(e.DualboreSurfaceTestTree = 99)] = 'DualboreSurfaceTestTree'),
        (e[(e.HoleCasing = 100)] = 'HoleCasing'),
        (e[(e.SimplifiedXmasTree = 101)] = 'SimplifiedXmasTree'),
        (e[(e.WellheadSurface = 102)] = 'WellheadSurface'),
        (e[(e.DualboreSurfaceXmas = 103)] = 'DualboreSurfaceXmas'),
        (e[(e.Hanger = 104)] = 'Hanger'),
        (e[(e.DualboreProductionPacker = 105)] = 'DualboreProductionPacker'),
        (e[(e.CasingFloatValve = 106)] = 'CasingFloatValve'),
        (e[(e.AnnularCement = 107)] = 'AnnularCement'),
        (e[(e.SubseaLightBopII = 108)] = 'SubseaLightBopII'),
        (e[(e.SubseaLightBopII_AAV = 109)] = 'SubseaLightBopII_AAV'),
        (e[(e.SubseaLightBopII_SSV_FSXV_KLAV = 110)] =
          'SubseaLightBopII_SSV_FSXV_KLAV'),
        (e[(e.SubseaLightBopII_KLAV_FSXV_FSV2_FSHV = 111)] =
          'SubseaLightBopII_KLAV_FSXV_FSV2_FSHV'),
        (e[(e.SubseaLightBopII_FRHV_UMHV = 112)] =
          'SubseaLightBopII_FRHV_UMHV'),
        (e[(e.SubseaLightBopII_GreaseInjection = 113)] =
          'SubseaLightBopII_GreaseInjection'),
        (e[(e.SubseaLightBopII_KLAV_FSXV_FSV2_LTV = 114)] =
          'SubseaLightBopII_KLAV_FSXV_FSV2_LTV'),
        (e[(e.SubseaLightBopII_AMHV = 115)] = 'SubseaLightBopII_AMHV'),
        (e[(e.SubseaLightBopII_SSV = 116)] = 'SubseaLightBopII_SSV'),
        (e[(e.SubseaLightBopII_KLAV_LM1HV_LM2HV = 117)] =
          'SubseaLightBopII_KLAV_LM1HV_LM2HV'),
        (e[(e.SubseaLightBopII_FSHV_FRHV_UMHV = 118)] =
          'SubseaLightBopII_FSHV_FRHV_UMHV'),
        (e[(e.SubseaLightBopII_KLAV_LM1HV_LM2HV_UTV = 119)] =
          'SubseaLightBopII_KLAV_LM1HV_LM2HV_UTV'),
        (e[(e.GateValve = 120)] = 'GateValve'),
        (e[(e.RiserSpool = 121)] = 'RiserSpool'),
        (e[(e.SafetyHead = 122)] = 'SafetyHead'),
        (e[(e.VelocityString = 123)] = 'VelocityString'),
        (e[(e.ToolJoint = 124)] = 'ToolJoint'),
        (e[(e.WhipStock = 125)] = 'WhipStock'),
        (e[(e.CasingCollapse = 126)] = 'CasingCollapse'),
        (e[(e.MultilateralCompletion = 127)] = 'MultilateralCompletion'),
        (e[(e.SectionMill = 128)] = 'SectionMill'),
        (e[(e.LowerCompletion = 129)] = 'LowerCompletion'),
        (e[(e.SurfaceXmasSpool = 130)] = 'SurfaceXmasSpool'),
        (e[(e.ProductionPacker = 131)] = 'ProductionPacker'),
        (e[(e.LinerTopPacker = 132)] = 'LinerTopPacker'),
        (e[(e.TieBackPacker = 133)] = 'TieBackPacker'),
        (e[(e.WellTestPacker = 134)] = 'WellTestPacker'),
        (e[(e.WellControlPackage = 135)] = 'WellControlPackage'),
        (e[(e.SlidingSleeve = 137)] = 'SlidingSleeve'),
        (e[(e.ChemicalInjectionValve = 138)] = 'ChemicalInjectionValve'),
        (e[(e.TubingHangerRunningTool = 139)] = 'TubingHangerRunningTool'),
        (e[(e.ShortTubingHanger = 140)] = 'ShortTubingHanger'),
        (e[(e.InternalTreeCap = 141)] = 'InternalTreeCap'),
        (e[(e.CasingBarrierTop = 142)] = 'CasingBarrierTop'),
        (e[(e.CasingBarrierBottom = 143)] = 'CasingBarrierBottom'),
        (e[(e.WellComment = 144)] = 'WellComment'),
        (e[(e.CasingBarrierMiddle = 145)] = 'CasingBarrierMiddle'),
        (e[(e.InsertCasing = 146)] = 'InsertCasing'),
        (e[(e.InsertCasingBarrierUpper = 147)] = 'InsertCasingBarrierUpper'),
        (e[(e.InsertCasingBarrierMiddle = 148)] = 'InsertCasingBarrierMiddle'),
        (e[(e.InsertCasingBarrierLower = 149)] = 'InsertCasingBarrierLower'),
        (e[(e.LeftUpperTubingBarrier = 150)] = 'LeftUpperTubingBarrier'),
        (e[(e.LeftLowerTubingBarrier = 151)] = 'LeftLowerTubingBarrier'),
        (e[(e.RightUpperTubingBarrier = 152)] = 'RightUpperTubingBarrier'),
        (e[(e.RightLowerTubingBarrier = 153)] = 'RightLowerTubingBarrier'),
        (e[(e.DualXmas_Psv_Asv = 154)] = 'DualXmas_Psv_Asv'),
        (e[(e.DualXmas_Psv_Xov_Asv_Awv = 155)] = 'DualXmas_Psv_Xov_Asv_Awv'),
        (e[(e.DualXmas_wPwv_Amv_Xov = 156)] = 'DualXmas_wPwv_Amv_Xov'),
        (e[(e.DualXmas_wPwv_Psv_Xov_Amv = 157)] = 'DualXmas_wPwv_Psv_Xov_Amv'),
        (e[(e.DualXmas_wPsv_Xov_Asv = 158)] = 'DualXmas_wPsv_Xov_Asv'),
        (e[(e.PressurePlot_HorizontalLine = 159)] =
          'PressurePlot_HorizontalLine'),
        (e[(e.CementBarrierTop = 160)] = 'CementBarrierTop'),
        (e[(e.CementBarrierMiddle = 161)] = 'CementBarrierMiddle'),
        (e[(e.PressurePlot_FormationStrengthPointLine = 162)] =
          'PressurePlot_FormationStrengthPointLine'),
        (e[(e.PressurePlot_GradientLine = 163)] = 'PressurePlot_GradientLine'),
        (e[(e.DualXmas_wPmv_Awv = 164)] = 'DualXmas_wPmv_Awv'),
        (e[(e.PressurePlot_VerticalLine = 165)] = 'PressurePlot_VerticalLine'),
        (e[(e.SubseaLightBopII_AXV_RCV_UTV = 166)] =
          'SubseaLightBopII_AXV_RCV_UTV'),
        (e[(e.DualboreLowerRiser_XOV_PSSR = 167)] =
          'DualboreLowerRiser_XOV_PSSR'),
        (e[(e.DualboreLowerRiser_With_KillHose = 168)] =
          'DualboreLowerRiser_With_KillHose'),
        (e[(e.WellInterventionBlock = 169)] = 'WellInterventionBlock'),
        (e[(e.ConcentricGasLiftSpool = 170)] = 'ConcentricGasLiftSpool'),
        (e[(e.ControlLine = 171)] = 'ControlLine'),
        (e[(e.PBRSlipOver = 172)] = 'PBRSlipOver'),
        (e[(e.ConcentricGasLiftSpool_Plug = 173)] =
          'ConcentricGasLiftSpool_Plug'),
        (e[(e.SpoolWellhead = 174)] = 'SpoolWellhead'),
        (e[(e.PlatformSpoolWellHead = 17402)] = 'PlatformSpoolWellHead'),
        (e[(e.LandSpoolWellHead = 17401)] = 'LandSpoolWellHead'),
        (e[(e.ProgressiveCavityPump = 175)] = 'ProgressiveCavityPump'),
        (e[(e.RodLockXmas = 176)] = 'RodLockXmas'),
        (e[(e.TubingHangerBackPressure = 177)] = 'TubingHangerBackPressure'),
        (e[(e.ProgressiveCavityPumpDrivehead = 178)] =
          'ProgressiveCavityPumpDrivehead'),
        (e[(e.SpoolWellheadA = 179)] = 'SpoolWellheadA'),
        (e[(e.SpoolWellheadB = 180)] = 'SpoolWellheadB'),
        (e[(e.SpoolWellheadC = 181)] = 'SpoolWellheadC'),
        (e[(e.SpoolWellheadHangerA = 182)] = 'SpoolWellheadHangerA'),
        (e[(e.SpoolWellheadHangerB = 183)] = 'SpoolWellheadHangerB'),
        (e[(e.SpoolWellheadHangerC = 184)] = 'SpoolWellheadHangerC'),
        (e[(e.FracValve = 185)] = 'FracValve'),
        (e[(e.WellboreFluid = 186)] = 'WellboreFluid'),
        (e[(e.AnnulusFluid = 187)] = 'AnnulusFluid'),
        (e[(e.TubingFluid = 188)] = 'TubingFluid'),
        (e[(e.CasingOpenHoleFluid = 189)] = 'CasingOpenHoleFluid'),
        (e[(e.HPRiserWithSurface = 190)] = 'HPRiserWithSurface'),
        (e[(e.HPRiserRiserSpoolOnWellHeadSurface = 200)] =
          'HPRiserRiserSpoolOnWellHeadSurface'),
        (e[(e.HPRiserRiserSpoolOnHXT = 201)] = 'HPRiserRiserSpoolOnHXT'),
        (e[(e.HPRiserRiserSpoolOnSpoolXmas = 201)] =
          'HPRiserRiserSpoolOnSpoolXmas'),
        (e[(e.LowerPressureRiser = 191)] = 'LowerPressureRiser'),
        (e[(e.Cavity = 192)] = 'Cavity'),
        (e[(e.ArtificialLiftTree = 193)] = 'ArtificialLiftTree'),
        (e[(e.PlungerLift = 194)] = 'PlungerLift'),
        (e[(e.RodRam = 195)] = 'RodRam'),
        (e[(e.SuspensionXmas = 196)] = 'SuspensionXmas'),
        (e[(e.CementBarrierFourth = 197)] = 'CementBarrierFourth'),
        (e[(e.CementBarrierFifth = 198)] = 'CementBarrierFifth'),
        (e[(e.CementBarrierSixTh = 199)] = 'CementBarrierSixTh'),
        (e[(e.RCDLowPressureRiser = 202)] = 'RCDLowPressureRiser'),
        (e[(e.TubularCutInline = 203)] = 'TubularCutInline'),
        (e[(e.Fish = 210)] = 'Fish'),
        (e[(e.WireFish = 211)] = 'WireFish'),
        (e[(e.PipeFish = 212)] = 'PipeFish'),
        (e[(e.ScreenFish = 213)] = 'ScreenFish'),
        (e[(e.WirelineToolFish = 214)] = 'WirelineToolFish'),
        (e[(e.RadioactiveSourceFish = 215)] = 'RadioactiveSourceFish'),
        (e[(e.RemedialAnnularMaterial = 216)] = 'RemedialAnnularMaterial'),
        (e[(e.MaterialPlug = 217)] = 'MaterialPlug'),
        (e[(e.ControlLineExit = 219)] = 'ControlLineExit'),
        (e[(e.ShootingNipple = 220)] = 'ShootingNipple'),
        (e[(e.DrillingBopRamBarrier = 221)] = 'DrillingBopRamBarrier'),
        (e[(e.Capillary = 222)] = 'Capillary'),
        (e[(e.SubseaTubingHangerSpool = 226)] = 'SubseaTubingHangerSpool'),
        (e[(e.ConcentricVerticalXmas = 227)] = 'ConcentricVerticalXmas'),
        (e[(e.StormChoke = 228)] = 'StormChoke'),
        (e[(e.UnderReamed = 229)] = 'UnderReamed'),
        (e[(e.TiebackString = 230)] = 'TiebackString'),
        (e[(e.CrossoverDown = 231)] = 'CrossoverDown'),
        (e[(e.CrossoverUp = 232)] = 'CrossoverUp'),
        (e[(e.LandingNipple = 233)] = 'LandingNipple'),
        (e[(e.BullPlug = 237)] = 'BullPlug'),
        (e[(e.DownholeGauge = 240)] = 'DownholeGauge'),
        (e[(e.InductiveCoupling = 238)] = 'InductiveCoupling'),
        (e[(e.WirelineEntryGuide = 241)] = 'WirelineEntryGuide'),
        (e[(e.TubingHangerDualBore = 243)] = 'TubingHangerDualBore'),
        (e[(e.Patch = 257)] = 'Patch'),
        (e[(e.CollapsedShale = 266)] = 'CollapsedShale'),
        (e[(e.HighPressureCap = 267)] = 'HighPressureCap'),
        (e[(e.Crossover = 316)] = 'Crossover'),
        (e[(e.SealAssembly = 325)] = 'SealAssembly'),
        (e[(e.LockSub = 327)] = 'LockSub'),
        (e[(e.BallShearSub = 328)] = 'BallShearSub'),
        (e[(e.SealboreExtension = 329)] = 'SealboreExtension'),
        (e[(e.TubingEndAssembly = 342)] = 'TubingEndAssembly'),
        (e[(e.MuleShoe = 326)] = 'MuleShoe'),
        (e[(e.TubingConveyedPerforation = 242)] = 'TubingConveyedPerforation'),
        (e[(e.SumpPacker = 343)] = 'SumpPacker'),
        (e[(e.GravelPackPacker = 344)] = 'GravelPackPacker'),
        (e[(e.TubingHangerAnnulusAccess = 349)] = 'TubingHangerAnnulusAccess'),
        (e[(e.MudlineHanger = 351)] = 'MudlineHanger'),
        (e[(e.VRProfile = 368)] = 'VRProfile');
    })($ || ($ = {}));
  const Z = (e) => u(I)((e, r) => ({ index: r, value: e }))(e || []),
    Y = (e) => 'number' == typeof e,
    ee = [
      (e) => {
        const r = Z(e.HoleCasings),
          n = G((e) => {
            var r;
            return !(null === (r = e.value.PipeType) || void 0 === r
              ? void 0
              : r.value);
          })(r);
        return I((e) => ({
          path: ['HoleCasings', e.index, 'PipeType', 'Value'],
          messages: ['Pipe type is required'],
        }))(n);
      },
      (e) => {
        const r = Z(e.HoleCasings),
          n = G((e) => {
            var r;
            return (
              !!(null === (r = e.value.PipeType) || void 0 === r
                ? void 0
                : r.value) &&
              [1, 2, 3, 4, 5, 6, 7, 12, 13, 9].indexOf(
                e.value.PipeType.value || 0
              ) < 0
            );
          })(r);
        return I((e) => ({
          path: ['HoleCasings', e.index, 'PipeType', 'Value'],
          messages: ['Pipe type is invalid'],
        }))(n);
      },
      (e) => {
        const r = Z(e.HoleCasings),
          n = G((e) => {
            var r, n;
            return (
              !(null === (r = null == e ? void 0 : e.value) || void 0 === r
                ? void 0
                : r.HoleSize) ||
              !Y(
                null === (n = null == e ? void 0 : e.value.HoleSize) ||
                  void 0 === n
                  ? void 0
                  : n.value
              )
            );
          })(r);
        return I((e) => ({
          path: ['HoleCasings', e.index, 'HoleSize', 'Value'],
          messages: ['Hole size is required'],
        }))(n);
      },
      (e) => {
        const r = Z(e.HoleCasings),
          n = e.WellDesignUnits || {},
          t = G((e) => {
            var r, n, t;
            return (
              Y(
                null === (r = e.value.HoleSize) || void 0 === r
                  ? void 0
                  : r.value
              ) &&
              (null !==
                (t =
                  null === (n = e.value.HoleSize) || void 0 === n
                    ? void 0
                    : n.value) && void 0 !== t
                ? t
                : 0) <= 0
            );
          })(r);
        return I((e) => {
          var r, t, i;
          return {
            path: ['HoleCasings', e.index, 'HoleSize', 'Value'],
            messages: [
              `Hole size ${
                J[
                  null !==
                    (t =
                      null === (r = e.value.PipeType) || void 0 === r
                        ? void 0
                        : r.value) && void 0 !== t
                    ? t
                    : 0
                ]
              }(${
                null === (i = e.value.HoleSize) || void 0 === i
                  ? void 0
                  : i.value
              }${n.diameter_unit}) must be a positive number`,
            ],
          };
        })(t);
      },
      (e) => {
        const r = Z(e.HoleCasings),
          n = e.WellDesignUnits || {},
          t = G((e) => {
            var r, n, t;
            const i =
              null !==
                (n =
                  null === (r = e.value.HoleSize) || void 0 === r
                    ? void 0
                    : r.value) && void 0 !== n
                ? n
                : 0;
            return (
              Y(
                null === (t = e.value.HoleSize) || void 0 === t
                  ? void 0
                  : t.value
              ) &&
              (i < 2 || i > 53)
            );
          })(r);
        return I((e) => {
          var r, t, i;
          return {
            path: ['HoleCasings', e.index, 'HoleSize', 'Value'],
            messages: [
              `Hole size ${
                J[
                  null !==
                    (t =
                      null === (r = e.value.PipeType) || void 0 === r
                        ? void 0
                        : r.value) && void 0 !== t
                    ? t
                    : 0
                ]
              }(${
                null === (i = e.value.HoleSize) || void 0 === i
                  ? void 0
                  : i.value
              }${n.diameter_unit}) must between 2 and 53 (sample purpose)`,
            ],
            dependenciesPaths: [['HoleCasings', e.index, 'HoleSize', 'Value']],
          };
        })(t);
      },
      (e) =>
        R((e) => {
          var r;
          return (
            3 === (null === (r = e.PipeType) || void 0 === r ? void 0 : r.value)
          );
        })(e.HoleCasings)
          ? [
              {
                path: ['HoleCasings'],
                messages: ['A well must have a surface casing'],
              },
            ]
          : [],
    ],
    re = [
      (e) => {
        const r = Z(e.HoleCasings);
        return I((e) => {
          const r = Z(e.value.Sizes),
            n = G((e) => !e.value.Burst)(r);
          return I((r) => ({
            path: ['HoleCasings', e.index, 'Sizes', r.index, 'Burst', 'Value'],
            messages: ['Burst is required'],
          }))(n);
        })(r).reduce((e, r) => ([].push.apply(e, r), e), []);
      },
      (e) => {
        const r = e.TrajectoryExisted
            ? 'Casing Start MD is required for MAASP calculation'
            : 'Casing Start MD is required',
          n = Z(e.HoleCasings);
        return I((e) => {
          const n = Z(e.value.Sizes),
            t = G((e) => !e.value.Burst)(n);
          return I((n) => ({
            path: [
              'HoleCasings',
              e.index,
              'Sizes',
              n.index,
              'StartMD',
              'Value',
            ],
            messages: [r],
          }))(t);
        })(n).reduce((e, r) => ([].push.apply(e, r), e), []);
      },
    ],
    ne = (e) => {
      if (e) return [...ee];
      throw new Error('NotImplementedException');
    },
    te = (e) => {
      switch (e.Purpose) {
        case 12:
          return ((e) => [...ne(e.IsProportional), ...re])(e);
        case 1:
          return ((e) => ne(e.IsProportional))(e);
        default:
          return [];
      }
    };
  e.ValidateCompletedModel = (e, r) => {
    const n = te(e),
      t = K(n);
    return I((e) => e(r))(t).reduce((e, r) => ([].push.apply(e, r), e), []);
  };
})({});

