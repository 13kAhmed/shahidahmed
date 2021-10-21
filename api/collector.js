function gbrv() {
    if (navigator.brave) {
        navigator.brave.isBrave().then(function (t) {
            return t ? 1 : 0;
        }).catch(function (t) {
            return 0;
        });
    } else {
        return 0;
    }
};

function _bd() {
    var t = [],
        a = window.callPhantom ? 1 : 0;
    t.push(',cpen:' + a);
    var e = 0;
    window.ActiveXObject && 'ActiveXObject' in window && (e = 1),
        t.push('i1:' + e);
    var n = 'number' == typeof document.documentMode ? 1 : 0;
    t.push('dm:' + n);
    var o = window.chrome && window.chrome.webstore ? 1 : 0;
    t.push('cwen:' + o);
    var m = navigator.onLine ? 1 : 0;
    t.push('non:' + m);
    var r = window.opera ? 1 : 0;
    t.push('opc:' + r);
    var i = 'undefined' != typeof InstallTrigger ? 1 : 0;
    t.push('fc:' + i);
    var c = window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 ? 1 : 0;
    t.push('sc:' + c);
    var b = 'function' == typeof window.RTCPeerConnection || 'function' == typeof window.mozRTCPeerConnection || 'function' == typeof window.webkitRTCPeerConnection ? 1 : 0;
    t.push('wrc:' + b);
    var d = 'mozInnerScreenY' in window ? window.mozInnerScreenY : 0;
    t.push('isc:' + d);
    var k = 'function' == typeof navigator.vibrate ? 1 : 0;
    t.push('vib:' + k);
    var s = 'function' == typeof navigator.getBattery ? 1 : 0;
    t.push('bat:' + s);
    var l = Array.prototype.forEach ? 0 : 1;
    t.push('x11:' + l);
    var u = 'FileReader' in window ? 1 : 0;
    return t.push('x12:' + u),
        t.join(',')
};

async function np() {
    let _np = {};
    var t = [],
        a = ['geolocation', 'notifications', 'push', 'midi', 'camera', 'microphone', 'speaker', 'device-info', 'background-sync', 'bluetooth', 'persistent-storage', 'ambient-light-sensor', 'accelerometer', 'gyroscope', 'magnetometer', 'clipboard', 'accessibility-events', 'clipboard-read', 'clipboard-write', 'payment-handler'];
    try {
        if (!navigator.permissions) {
              _np.np = 6;
              return _np.np;
        }
        _np.np = 8;
        var e = function (a, e) {
                return navigator.permissions.query({
                    name: a
                }).then(function (a) {
                    switch (a.state) {
                        case 'prompt':
                            t[e] = 1;
                            break;
                        case 'granted':
                            t[e] = 2;
                            break;
                        case 'denied':
                            t[e] = 0;
                            break;
                        default:
                            t[e] = 5
                    }
                }).catch(function (a) {
                    t[e] = -1 !== a.message.indexOf('is not a valid enum value of type PermissionName') ? 4 : 3
                })
            },
            n = a.map(function (t, a) {
                return e(t, a)
            });
        const __np = await Promise.all(n).then(function () {
            _np.np = t.join("");
            return _np.np;
        })
        return __np;
    } catch (t) {
        _np.np = 7;
        return _np.np;
    }
}

function get_cf_date() {
    return Date.now ? Date.now() : +new Date
}

function fps() {
    let cfps = [];
    for(var h = 0; h < 1001; h++){
        var i = document.createElement('canvas');
        i.width = 16,
            i.height = 16;
        var c = i.getContext('2d');
        c.font = '6pt Arial',
            c.fillText(h, 1, 12);
        for (var b = i.toDataURL(), d = 0, k = 0; k < b.length; k++) {
            d = (d << 5) - d + b.charCodeAt(k),
                d &= d
        }
        cfps.push(d.toString());
    }
    return cfps;
}

function fp(t) {
    var a = {};
    t.fpcf = a,
        a.sf4 = function () {
            var t = window.navigator.userAgent.replace(/\\|"/g, "");
            return !(!~t.indexOf('Version/4.0') || !(~t.indexOf('iPad;') || ~t.indexOf('iPhone') || ~t.indexOf('Mac OS X 10_5')))
        },
        a.fpValstr = '-1',
        a.fpValCalculated = !1,
        a.rVal = '-1',
        a.rCFP = '-1',
        a.cache = {},
        a.td = -999999,
        a.CFPs = [], // For all FPs
        a.clearCache = function () {
            a.cache = {}
        },
        a.fpVal = function () {
            a.fpValCalculated = !0;
            try {
                var t = 0;
                t = Date.now ? Date.now() : +new Date;
                var e = a.data();
                a.fpValstr = e.replace(/\"/g, '\\\\"');
                var n = 0;
                n = Date.now ? Date.now() : +new Date,
                    a.td = n - t
            } catch (t) {}
        },
        a.timezoneOffsetKey = function () {
            return (new Date).getTimezoneOffset()
        },
        a.data = function () {
            var t = screen.colorDepth ? screen.colorDepth : -1,
                e = screen.pixelDepth ? screen.pixelDepth : -1,
                n = navigator.cookieEnabled ? navigator.cookieEnabled : -1,
                o = navigator.javaEnabled ? navigator.javaEnabled() : -1,
                m = navigator.doNotTrack ? navigator.doNotTrack : -1,
                r = 'default';
            r = !-1 ? !-1 ? a.fonts_optm() : a.fonts() : 'dis';
            return [a.canvas('<@nv45. F1n63r,Pr1n71n6!'), a.canvas('m,Ev!xV67BaU> eh2m<f3AG3@'), r, a.pluginInfo(), a.sessionStorageKey(), a.localStorageKey(), a.indexedDbKey(), a.timezoneOffsetKey(), a.webrtcKey(), t, e, n, o, m].join(';')
        },
        a.PLUGINS = ['WebEx64 General Plugin Container', 'YouTube Plug-in', 'Java Applet Plug-in', 'Shockwave Flash', 'iPhotoPhotocast', 'SharePoint Browser Plug-in', 'Chrome Remote Desktop Viewer', 'Chrome PDF Viewer', 'Native Client', 'Unity Player', 'WebKit-integrierte PDF', 'QuickTime Plug-in', 'RealPlayer Version Plugin', 'RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)', 'Mozilla Default Plug-in', 'Adobe Acrobat', 'AdobeAAMDetect', 'Google Earth Plug-in', 'Java Plug-in 2 for NPAPI Browsers', 'Widevine Content Decryption Module', 'Microsoft Office Live Plug-in', 'Windows Media Player Plug-in Dynamic Link Library', 'Google Talk Plugin Video Renderer', 'Edge PDF Viewer', 'Shockwave for Director', 'Default Browser Helper', 'Silverlight Plug-In'],
        a.pluginInfo = function () {
            if (void 0 === navigator.plugins)
                return null;
            for (var t = a.PLUGINS.length, e = '', n = 0; n < t; n++) {
                var o = a.PLUGINS[n];
                void 0 !== navigator.plugins[o] && (e = e + ',' + n)
            }
            return e
        },
        a.canvas = function (t) {
            try {
                if (void 0 !== a.cache.canvas)
                    return a.cache.canvas;
                var e = -1;
                if (!a.sf4()) {
                    var n = document.createElement('canvas');
                    if (n.width = 280,
                        n.height = 60,
                        n.style.display = 'none',
                        'function' == typeof n.getContext) {
                        var o = n.getContext('2d');
                        o.fillStyle = 'rgb(102, 204, 0)',
                            o.fillRect(100, 5, 80, 50),
                            o.fillStyle = '#f60',
                            o.font = '16pt Arial',
                            o.fillText(t, 10, 40),
                            o.strokeStyle = 'rgb(120, 186, 176)',
                            o.arc(80, 10, 20, 0, Math.PI, !1),
                            o.stroke();
                        var m = n.toDataURL();
                        e = 0;
                        for (var r = 0; r < m.length; r++) {
                            e = (e << 5) - e + m.charCodeAt(r),
                                e &= e
                        }
                        e = e.toString();
                    }
                }
                return e
            } catch (t) {
                return 'exception'
            }
        },
        a.fonts_optm = function () {
            var t = 200,
                e = get_cf_date(),
                n = [];
            if (!a.sf4() && document.body) {
                var o = ['sans-serif', 'monospace'],
                    m = [0, 0],
                    r = [0, 0],
                    i = document.createElement('div');
                i.style.cssText = 'position: relative; left: -9999px; visibility: hidden; display: block !important';
                var c;
                for (c = 0; c < o.length; c++) {
                    var b = document.createElement('span');
                    b.innerHTML = 'abcdefhijklmnopqrstuvxyz1234567890;+-.',
                        b.style.fontSize = '90px',
                        b.style.fontFamily = o[c],
                        i.appendChild(b)
                }
                for (document.body.appendChild(i),
                    c = 0; c < i.childNodes.length; c++)
                    b = i.childNodes[c],
                    m[c] = b.offsetWidth,
                    r[c] = b.offsetHeight;
                if (document.body.removeChild(i),
                    get_cf_date() - e > t)
                    return '';
                var d = ['Geneva', 'Lobster', 'New York', 'Century', 'Apple Gothic', 'Minion Pro', 'Apple LiGothic', 'Century Gothic', 'Monaco', 'Lato', 'Fantasque Sans Mono', 'Adobe Braille', 'Cambria', 'Futura', 'Bell MT', 'Courier', 'Courier New', 'Calibri', 'Avenir Next', 'Birch Std', 'Palatino', 'Ubuntu Regular', 'Oswald', 'Batang', 'Ubuntu Medium', 'Cantarell', 'Droid Serif', 'Roboto', 'Helvetica Neue', 'Corsiva Hebrew', 'Adobe Hebrew', 'TI-Nspire', 'Comic Neue', 'Noto', 'AlNile', 'Palatino-Bold', 'ArialHebrew-Light', 'Avenir', 'Papyrus', 'Open Sans', 'Times', 'Quicksand', 'Source Sans Pro', 'Damascus', 'Microsoft Sans Serif'],
                    k = document.createElement('div');
                k.style.cssText = 'position: relative; left: -9999px; visibility: hidden; display: block !important';
                for (var s = [], l = 0; l < d.length; l++) {
                    var u = document.createElement('div');
                    for (c = 0; c < o.length; c++) {
                        var b = document.createElement('span');
                        b.innerHTML = 'abcdefhijklmnopqrstuvxyz1234567890;+-.',
                            b.style.fontSize = '90px',
                            b.style.fontFamily = d[l] + ',' + o[c],
                            u.appendChild(b)
                    }
                    k.appendChild(u)
                }
                if (get_cf_date() - e > t)
                    return '';
                document.body.appendChild(k);
                for (var l = 0; l < k.childNodes.length; l++) {
                    var _ = !1,
                        u = k.childNodes[l];
                    for (c = 0; c < u.childNodes.length; c++) {
                        var b = u.childNodes[c];
                        if (b.offsetWidth !== m[c] || b.offsetHeight !== r[c]) {
                            _ = !0;
                            break
                        }
                    }
                    if (_ && s.push(l),
                        get_cf_date() - e > t)
                        break
                }
                document.body.removeChild(k),
                    n = s.sort()
            }
            return n.join(',')
        },
        a.fonts = function () {
            var t = [];
            if (!a.sf4() && document.body) {
                var e = ['serif', 'sans-serif', 'monospace'],
                    n = [0, 0, 0],
                    o = [0, 0, 0],
                    m = document.createElement('span');
                m.innerHTML = 'abcdefhijklmnopqrstuvxyz1234567890;+-.',
                    m.style.fontSize = '90px';
                var r;
                for (r = 0; r < e.length; r++)
                    m.style.fontFamily = e[r],
                    document.body.appendChild(m),
                    n[r] = m.offsetWidth,
                    o[r] = m.offsetHeight,
                    document.body.removeChild(m);
                for (var i = ['Geneva', 'Lobster', 'New York', 'Century', 'Apple Gothic', 'Minion Pro', 'Apple LiGothic', 'Century Gothic', 'Monaco', 'Lato', 'Fantasque Sans Mono', 'Adobe Braille', 'Cambria', 'Futura', 'Bell MT', 'Courier', 'Courier New', 'Calibri', 'Avenir Next', 'Birch Std', 'Palatino', 'Ubuntu Regular', 'Oswald', 'Batang', 'Ubuntu Medium', 'Cantarell', 'Droid Serif', 'Roboto', 'Helvetica Neue', 'Corsiva Hebrew', 'Adobe Hebrew', 'TI-Nspire', 'Comic Neue', 'Noto', 'AlNile', 'Palatino-Bold', 'ArialHebrew-Light', 'Avenir', 'Papyrus', 'Open Sans', 'Times', 'Quicksand', 'Source Sans Pro', 'Damascus', 'Microsoft Sans Serif'], c = [], b = 0; b < i.length; b++) {
                    var d = !1;
                    for (r = 0; r < e.length; r++)
                        if (m.style.fontFamily = i[b] + ',' + e[r],
                            document.body.appendChild(m),
                            m.offsetWidth === n[r] && m.offsetHeight === o[r] || (d = !0),
                            document.body.removeChild(m),
                            d) {
                            c.push(b);
                            break
                        }
                }
                t = c.sort()
            }
            return t.join(',')
        },
        a.webrtcKey = function () {
            return 'function' == typeof window.RTCPeerConnection || 'function' == typeof window.mozRTCPeerConnection || 'function' == typeof window.webkitRTCPeerConnection
        },
        a.indexedDbKey = function () {
            return !!a.hasIndexedDB()
        },
        a.sessionStorageKey = function () {
            return !!a.hasSessionStorage()
        },
        a.localStorageKey = function () {
            return !!a.hasLocalStorage()
        },
        a.hasSessionStorage = function () {
            try {
                return !!window.sessionStorage
            } catch (t) {
                return !1
            }
        },
        a.hasLocalStorage = function () {
            try {
                return !!window.localStorage
            } catch (t) {
                return !1
            }
        },
        a.hasIndexedDB = function () {
            return !!window.indexedDB
        }
}

function fas() {
    try {
        return Boolean(navigator.credentials) + (Boolean(navigator.appMinorVersion) << 1) + (Boolean(navigator.bluetooth) << 2) + (Boolean(navigator.storage) << 3) + (Boolean(Math.imul) << 4) + (Boolean(navigator.getGamepads) << 5) + (Boolean(navigator.getStorageUpdates) << 6) + (Boolean(navigator.hardwareConcurrency) << 7) + (Boolean(navigator.mediaDevices) << 8) + (Boolean(navigator.mozAlarms) << 9) + (Boolean(navigator.mozConnection) << 10) + (Boolean(navigator.mozIsLocallyAvailable) << 11) + (Boolean(navigator.mozPhoneNumberService) << 12) + (Boolean(navigator.msManipulationViewsEnabled) << 13) + (Boolean(navigator.permissions) << 14) + (Boolean(navigator.registerProtocolHandler) << 15) + (Boolean(navigator.requestMediaKeySystemAccess) << 16) + (Boolean(navigator.requestWakeLock) << 17) + (Boolean(navigator.sendBeacon) << 18) + (Boolean(navigator.serviceWorker) << 19) + (Boolean(navigator.storeWebWideTrackingException) << 20) + (Boolean(navigator.webkitGetGamepads) << 21) + (Boolean(navigator.webkitTemporaryStorage) << 22) + (Boolean(Number.parseInt) << 23) + (Boolean(Math.hypot) << 24)
    } catch (t) {
        return 0
    }
}

function ats(t) {
    for (var a = '', e = 0; e < t.length; e++)
        a += 2 == t[e].toString(16).length ? t[e].toString(16) : '0' + t[e].toString(16);
    return a
}
function encode_utf8(t) {
    return unescape(encodeURIComponent(t))
}

function rotate_right (t, a) {
    return t >>> a | t << 32 - a
}

function mn_s(t) {
    var a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        e = 1779033703,
        n = 3144134277,
        o = 1013904242,
        m = 2773480762,
        r = 1359893119,
        i = 2600822924,
        c = 528734635,
        b = 1541459225,
        d = encode_utf8(t),
        k = 8 * d.length;
    d += String.fromCharCode(128);
    for (var s = d.length / 4 + 2, l = Math.ceil(s / 16), u = new Array(l), _ = 0; _ < l; _++) {
        u[_] = new Array(16);
        for (var f = 0; f < 16; f++)
            u[_][f] = d.charCodeAt(64 * _ + 4 * f) << 24 | d.charCodeAt(64 * _ + 4 * f + 1) << 16 | d.charCodeAt(64 * _ + 4 * f + 2) << 8 | d.charCodeAt(64 * _ + 4 * f + 3) << 0
    }
    var p = k / Math.pow(2, 32);
    u[l - 1][14] = Math.floor(p),
        u[l - 1][15] = k;
    for (var h = 0; h < l; h++) {
        for (var v, g = new Array(64), w = e, y = n, E = o, S = m, C = r, v = i, M = c, x = b, _ = 0; _ < 64; _++) {
            var j, A, L, P, T, D;
            _ < 16 ? g[_] = u[h][_] : (j = rotate_right(g[_ - 15], 7) ^ rotate_right(g[_ - 15], 18) ^ g[_ - 15] >>> 3,
                    A = rotate_right(g[_ - 2], 17) ^ rotate_right(g[_ - 2], 19) ^ g[_ - 2] >>> 10,
                    g[_] = g[_ - 16] + j + g[_ - 7] + A),
                A = rotate_right(C, 6) ^ rotate_right(C, 11) ^ rotate_right(C, 25),
                L = C & v ^ ~C & M,
                P = x + A + L + a[_] + g[_],
                j = rotate_right(w, 2) ^ rotate_right(w, 13) ^ rotate_right(w, 22),
                T = w & y ^ w & E ^ y & E,
                D = j + T,
                x = M,
                M = v,
                v = C,
                C = S + P >>> 0,
                S = E,
                E = y,
                y = w,
                w = P + D >>> 0
        }
        e += w,
            n += y,
            o += E,
            m += S,
            r += C,
            i += v,
            c += M,
            b += x
    }
    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, 255 & m, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, 255 & b]
}

async function csh() {
    let ssh;
    if (window.speechSynthesis) {
        var t = window.speechSynthesis.getVoices();
        await new Promise((resolve) => setTimeout(resolve, 3000));
        t = window.speechSynthesis.getVoices();
        if (t.length > 0) {
            for (var a = '', e = 0; e < t.length; e++)
                a += t[e].voiceURI + '_' + t[e].lang;
            ssh = ats(mn_s(a));
        } else {
            ssh = '0';
        }
    } else {
        ssh = 'n';
    }
    return ssh;
}

function fm() {
    let fmh;
    var t = ['Monospace', 'Wingdings 2', 'ITC Bodoni 72 Bold', 'Menlo', 'Gill Sans MT', 'Lucida Sans', 'Bodoni 72', 'Serif', 'Shree Devanagari 714', 'Microsoft Tai Le', 'Nimbus Roman No 9 L', 'Candara', 'Press Start 2P', 'Waseem'],
        a = document.createElement('span');
    a.innerHTML = 'mmmmmmmmlli',
        a.style.fontSize = '192px';
    var e = '',
        n = document.getElementsByTagName('body')[0];
    if (n) {
        for (var o in t)
            a.style.fontFamily = t[o],
            n.appendChild(a),
            e += t[o] + ':' + a.offsetWidth + ',' + a.offsetHeight + ';',
            n.removeChild(a);
        fmh = ats(mn_s(e))
    } else {
        fmh = '';
    }
    fmz = 'devicePixelRatio' in window && void 0 !== window.devicePixelRatio ? window.devicePixelRatio : -1;
    return {fmh, fmz}
}

function wgl() {
    let wgl = {};
    try {
        var t = document.createElement('canvas'),
            a = t.getContext('webgl');
        wgl.wv = 'n',
            wgl.wr = 'n',
            wgl.weh = 'n',
            wgl.wl = 0,
            a && (wgl.wv = 'b',
                wgl.wr = 'b',
                wgl.weh = 'b',
                a.getSupportedExtensions() && (wgl.weh = ats(mn_s(JSON.stringify(a.getSupportedExtensions().sort()))),
                    wgl.wl = a.getSupportedExtensions().length,
                    a.getSupportedExtensions().indexOf('WEBGL_debug_renderer_info') >= 0 && (wgl.wv = a.getParameter(a.getExtension('WEBGL_debug_renderer_info').UNMASKED_VENDOR_WEBGL),
                        wgl.wr = a.getParameter(a.getExtension('WEBGL_debug_renderer_info').UNMASKED_RENDERER_WEBGL))))
    } catch (t) {
        wgl.wv = 'e',
            wgl.wr = 'e',
            wgl.weh = 'e',
            wgl.wl = 0
    }
    return wgl;
}

async function digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

function genCV() {
    var n = window.document.createElement("canvas"),
      a = n.getContext("2d");
    (a.fillStyle = "rgba(255,153,153, 0.5)"),
      (a.font = "18pt Tahoma"),
      (a.textBaseline = "top"),
      a.fillText("Soft Ruddy Foothold 2", 2, 2),
      (a.fillStyle = "#0000FF"),
      a.fillRect(100, 25, 30, 10),
      (a.fillStyle = "#E0E0E0"),
      a.fillRect(100, 25, 20, 30),
      (a.fillStyle = "#FF3333"),
      a.fillRect(100, 25, 10, 15),
      a.fillText("!H71JCaj)]# 1@#", 4, 8);
    var r = n.toDataURL();
    return r;
}

function fonts() {
    function I(e) {
      function t(e) {
        return (
          '<b style="position: absolute; display:inline !important; width:auto !important; font:normal 10px/1 ' +
          e +
          ' !important">wi wi</b>'
        );
      }

      function n(e) {
        return "<div>" + t([e, "monospace"]) + t([e, "sans-serif"]) + "</div>";
      }

      function a(e, t) {
        var n = e.childNodes[0].offsetWidth;
        return n !== t || n === e.childNodes[1].offsetWidth;
      }

      function r(e, t, r, i, o) {
        for (
          var s = "RYelrZVIUa", c = [], l = e.length, f = "", u = 0;
          u < l;
          u++
        )
          f += n(t[e[u]]);

        if ((o && (f += n(s)), (r.innerHTML = f), o && a(r.childNodes[l], i)))
          return null;

        for (u = 0; u < l; u++) a(r.childNodes[u], i) && c.push(e[u]);

        return c;
      }

      const h = [
        "Party LET",
        "Academy Engraved LET",
        "David",
        "Palatino Linotype",
        "Microsoft Sans Serif",
        "Segoe UI",
        "Malgun Gothic",
        "Nirmala UI",
        "Segoe Pseudo",
        "Gadugi",
        "Leelawadee UI Bold",
        "Sitka Subheading Italic",
        "Yu Gothic UI Light",
        "Bahnschrift",
        "Trattatello",
        "Skia",
        "Muna",
        "PingFang",
        "San Francisco UI",
        "San Francisco Mono",
        "Monotype LingWai Medium",
        "American Typewriter",
        "Rockwell",
        "Al Nile",
        "Roboto",
        "Noto",
        "Ubuntu",
        "Century Schoolbook L",
        "URW Chancery L",
        "URW Gothic L",
        "URW Bookman L",
        "Nimbus Mono L",
        "FreeMono",
        "FreeSans",
        "FreeSerif",
        "Bitstream Vera Sans",
        "Bitstream Charter",
        "Liberation Sans",
        "Liberation Serif",
        "Liberation Mono",
        "Luxi",
        "Nimbus Mono",
        "Nimbus Sans L",
        "Nimbus Roman No 9 L",
        "DejaVu Sans",
        "MONO",
        "DB LCD Temp",
        "Oriya Sangam MN",
        "Sinhala Sangam MN",
        "Apple Color Emoji",
        "Chalkboard",
        "Andale Mono",
        "Sitka Banner",
        "Segoe UI Emoji",
        "Leelawadee UI",
        "Vijaya",
        "Utsaah",
        "Shonar Bangla",
        "Aparajita",
        "Khmer UI",
        "Franklin Gothic",
        "MV Boli",
        "Corbel",
        "Cambria",
        "Segoe UI Light",
        "MS Gothic",
      ];
      var l = [],
        f = [],
        d = !0,
        b = !1,
        p = new Date().valueOf(),
        v = h.length,
        g = [],
        m = [],
        O = window.document.body,
        S = window.document.createElement("div"),
        A = window.document.createElement("div"),
        j = window.document.createElement("div");
      (S.style.cssText =
        "position: relative; left: -9999px; visibility: hidden; display: block !important"),
        (A.innerHTML = t(["monospace"])),
        S.appendChild(A),
        S.appendChild(j),
        O.insertBefore(S, O.firstChild);
      var w = A.childNodes[0].offsetWidth;
      0 === w && (b = !0);

      for (var y = 0; y < v; y++) y % 7 == 0 ? g.push(y) : m.push(y);
      (l = r(g, h, j, w, !0)),
        null === l
          ? (b = !0)
          : new Date().valueOf() - p > 100
          ? (d = !1)
          : (f = r(m, h, j, w, !1)),
        O.removeChild(S),
        b;
      var R = l.concat(f);
      R.sort(function (e, t) {
        return e - t;
      }),
        (R += "");
      return R;
    }
    return I("fonts");
}

async function collect() {
    const availWidth = window.screen.availWidth;
    const availHeight = window.screen.availHeight;
    const width = window.screen.width;
    const height = window.screen.height;
    const innerHeight = window.innerHeight || document.body.clientHeight;
    const innerWidth = window.innerWidth || document.body.clientWidth;
    const outerWidth = window.outerWidth || document.body.outerWidth;
    const outerHeight = window.outerHeight;
    const userAgent = window.navigator.userAgent.replace(/\\|"/g, "");
    const productSub = navigator.productSub;
    const language = navigator.language;
    const product = navigator.product;
    const pluginsLength = navigator.plugins.length;
    const isBrave = gbrv();

    const hasAddEventListener = window.addEventListener ? 1 : 0;
    const hasXMLHttpRequest = window.XMLHttpRequest ? 1 : 0;
    const hasXDomainRequest = window.XDomainRequest ? 1 : 0;
    const hasEmit = window.emit ? 1 : 0;
    const hasDeviceOrientationEvent = window.DeviceOrientationEvent ? 1 : 0;
    const hasDeviceMotionEvent = window.DeviceMotionEvent ? 1 : 0;
    const hasTouchEvent = window.TouchEvent ? 1 : 0;
    const hasSpawn = window.spawn ? 1 : 0;
    const hasChrome = window.chrome ? 1 : 0;
    const hasBind = Function.prototype.bind ? 1 : 0;
    const hasBuffer = window.Buffer ? 1 : 0;
    const hasPointerEvent = window.PointerEvent ? 1 : 0;
    const hasInnerWidth = window.innerWidth ? 1 : 0;
    const hasOuterWidth = window.outerWidth ? 1 : 0;

    const hasPhantom = window._phantom ? 1 : 0;
    const hasWebDriver = window.webdriver ? 1 : 0;
    const hasAutomation = window.domAutomation ? 1 : 0;

    const deviceOrientationEvent = window.DeviceOrientationEvent ? 'do_en' : 'do_dis';
    const deviceMotionEvent = window.DeviceMotionEvent ? 'dm_en' : 'dm_dis';
    const deviceTouchEvent = window.TouchEvent ? 't_en' : 't_dis';
    const deviceEvents = deviceOrientationEvent + ',' + deviceMotionEvent + ',' + deviceTouchEvent;

    const bd = _bd();

    const _np = await np();

    const _fas = fas();

    const ssh = await csh();

    const _fm = fm();

    const _wgl = wgl();

    const cv = await digestMessage(genCV());

    const chrome = {"window.chrome": window.chrome || "-not-existent"};
    const crc = JSON.stringify(chrome);

    const fnts = fonts();

    let f = {};
    fp(f);
    f.fpcf.fpVal();
    const fpValstr = f.fpcf.fpValstr;
    const fpcf = {
      fpValstr: f.fpcf.fpValstr,
      fps: fps()
    };

    const fingerprint = {
      availWidth,
      availHeight,
      width,
      height,
      innerWidth,
      innerHeight,
      outerWidth,
      outerHeight,
      userAgent,
      productSub,
      language,
      product,
      pluginsLength,
      isBrave,
      hasAddEventListener,
      hasXMLHttpRequest,
      hasXDomainRequest,
      hasEmit,
      hasDeviceOrientationEvent,
      hasDeviceMotionEvent,
      hasTouchEvent,
      hasSpawn,
      hasChrome,
      hasBind,
      hasBuffer,
      hasPointerEvent,
      hasInnerWidth,
      hasOuterWidth,
      hasPhantom,
      hasWebDriver,
      hasAutomation,
      bd,
      deviceEvents,
      np: _np,
      fas: _fas,
      ssh,
      fmh: _fm.fmh,
      fmz: _fm.fmz,
      wgl: _wgl,
      cv: cv,
      crc: crc,
      fonts: fnts,
      fpcf,
    };

    await post("https://collector.flarebots.net/collector", fingerprint);
    return fingerprint;
}

window.post = async (url, data) => {
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  });
}

(async () => {
    const fingerprint = await collect();
    console.log("Thank you!")
})();