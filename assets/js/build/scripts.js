/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+json+php+scss+twig&plugins=toolbar+show-language */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function () { var e = /\blang(?:uage)?-(\w+)\b/i, t = 0, n = _self.Prism = { manual: _self.Prism && _self.Prism.manual, util: { encode: function (e) { return e instanceof a ? new a(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ") }, type: function (e) { return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1] }, objId: function (e) { return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id }, clone: function (e) { var t = n.util.type(e); switch (t) { case "Object": var a = {}; for (var r in e) e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r])); return a; case "Array": return e.map(function (e) { return n.util.clone(e) }) }return e } }, languages: { extend: function (e, t) { var a = n.util.clone(n.languages[e]); for (var r in t) a[r] = t[r]; return a }, insertBefore: function (e, t, a, r) { r = r || n.languages; var i = r[e]; if (2 == arguments.length) { a = arguments[1]; for (var l in a) a.hasOwnProperty(l) && (i[l] = a[l]); return i } var o = {}; for (var s in i) if (i.hasOwnProperty(s)) { if (s == t) for (var l in a) a.hasOwnProperty(l) && (o[l] = a[l]); o[s] = i[s] } return n.languages.DFS(n.languages, function (t, n) { n === r[e] && t != e && (this[t] = o) }), r[e] = o }, DFS: function (e, t, a, r) { r = r || {}; for (var i in e) e.hasOwnProperty(i) && (t.call(e, i, e[i], a || i), "Object" !== n.util.type(e[i]) || r[n.util.objId(e[i])] ? "Array" !== n.util.type(e[i]) || r[n.util.objId(e[i])] || (r[n.util.objId(e[i])] = !0, n.languages.DFS(e[i], t, i, r)) : (r[n.util.objId(e[i])] = !0, n.languages.DFS(e[i], t, null, r))) } }, plugins: {}, highlightAll: function (e, t) { var a = { callback: t, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' }; n.hooks.run("before-highlightall", a); for (var r, i = a.elements || document.querySelectorAll(a.selector), l = 0; r = i[l++];)n.highlightElement(r, e === !0, a.callback) }, highlightElement: function (t, a, r) { for (var i, l, o = t; o && !e.test(o.className);)o = o.parentNode; o && (i = (o.className.match(e) || [, ""])[1].toLowerCase(), l = n.languages[i]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + i, o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + i); var s = t.textContent, u = { element: t, language: i, grammar: l, code: s }; if (n.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (n.hooks.run("before-highlight", u), u.element.textContent = u.code, n.hooks.run("after-highlight", u)), n.hooks.run("complete", u), void 0; if (n.hooks.run("before-highlight", u), a && _self.Worker) { var g = new Worker(n.filename); g.onmessage = function (e) { u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(u.element), n.hooks.run("after-highlight", u), n.hooks.run("complete", u) }, g.postMessage(JSON.stringify({ language: u.language, code: u.code, immediateClose: !0 })) } else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", u), n.hooks.run("complete", u) }, highlight: function (e, t, r) { var i = n.tokenize(e, t); return a.stringify(n.util.encode(i), r) }, matchGrammar: function (e, t, a, r, i, l, o) { var s = n.Token; for (var u in a) if (a.hasOwnProperty(u) && a[u]) { if (u == o) return; var g = a[u]; g = "Array" === n.util.type(g) ? g : [g]; for (var c = 0; c < g.length; ++c) { var h = g[c], f = h.inside, d = !!h.lookbehind, m = !!h.greedy, p = 0, y = h.alias; if (m && !h.pattern.global) { var v = h.pattern.toString().match(/[imuy]*$/)[0]; h.pattern = RegExp(h.pattern.source, v + "g") } h = h.pattern || h; for (var b = r, k = i; b < t.length; k += t[b].length, ++b) { var w = t[b]; if (t.length > e.length) return; if (!(w instanceof s)) { h.lastIndex = 0; var _ = h.exec(w), P = 1; if (!_ && m && b != t.length - 1) { if (h.lastIndex = k, _ = h.exec(e), !_) break; for (var A = _.index + (d ? _[1].length : 0), j = _.index + _[0].length, x = b, O = k, S = t.length; S > x && (j > O || !t[x].type && !t[x - 1].greedy); ++x)O += t[x].length, A >= O && (++b, k = O); if (t[b] instanceof s || t[x - 1].greedy) continue; P = x - b, w = e.slice(k, O), _.index -= k } if (_) { d && (p = _[1].length); var A = _.index + p, _ = _[0].slice(p), j = A + _.length, N = w.slice(0, A), C = w.slice(j), E = [b, P]; N && (++b, k += N.length, E.push(N)); var I = new s(u, f ? n.tokenize(_, f) : _, y, _, m); if (E.push(I), C && E.push(C), Array.prototype.splice.apply(t, E), 1 != P && n.matchGrammar(e, t, a, b, k, !0, u), l) break } else if (l) break } } } } }, tokenize: function (e, t) { var a = [e], r = t.rest; if (r) { for (var i in r) t[i] = r[i]; delete t.rest } return n.matchGrammar(e, a, t, 0, 0, !1), a }, hooks: { all: {}, add: function (e, t) { var a = n.hooks.all; a[e] = a[e] || [], a[e].push(t) }, run: function (e, t) { var a = n.hooks.all[e]; if (a && a.length) for (var r, i = 0; r = a[i++];)r(t) } } }, a = n.Token = function (e, t, n, a, r) { this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length, this.greedy = !!r }; if (a.stringify = function (e, t, r) { if ("string" == typeof e) return e; if ("Array" === n.util.type(e)) return e.map(function (n) { return a.stringify(n, t, e) }).join(""); var i = { type: e.type, content: a.stringify(e.content, t, r), tag: "span", classes: ["token", e.type], attributes: {}, language: t, parent: r }; if ("comment" == i.type && (i.attributes.spellcheck = "true"), e.alias) { var l = "Array" === n.util.type(e.alias) ? e.alias : [e.alias]; Array.prototype.push.apply(i.classes, l) } n.hooks.run("wrap", i); var o = Object.keys(i.attributes).map(function (e) { return e + '="' + (i.attributes[e] || "").replace(/"/g, "&quot;") + '"' }).join(" "); return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + i.content + "</" + i.tag + ">" }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function (e) { var t = JSON.parse(e.data), a = t.language, r = t.code, i = t.immediateClose; _self.postMessage(n.highlight(r, n.languages[a], a)), i && _self.close() }, !1), _self.Prism) : _self.Prism; var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop(); return r && (n.filename = r.src, n.manual || r.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism }(); "undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: /<!DOCTYPE[\s\S]+?>/i, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i, inside: { punctuation: /[=>"']/ } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) { "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&")) }), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
Prism.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: /url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i, selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/, string: { pattern: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, property: /(\b|\B)[\w-]+(?=\s*:)/i, important: /\B!important\b/i, "function": /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:]/ }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i, lookbehind: !0, inside: Prism.languages.css, alias: "language-css" } }), Prism.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|').*?\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } }, alias: "language-css" } }, Prism.languages.markup.tag));
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }], string: { pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i, lookbehind: !0, inside: { punctuation: /(\.|\\)/ } }, keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, "boolean": /\b(true|false)\b/, "function": /[a-z0-9_]+(?=\()/i, number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend("clike", { keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/, number: /\b-?(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/, "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ }), Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/, lookbehind: !0, greedy: !0 } }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\\\|\\?[^\\])*?`/, greedy: !0, inside: { interpolation: { pattern: /\$\{[^}]+\}/, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i, lookbehind: !0, inside: Prism.languages.javascript, alias: "language-javascript" } }), Prism.languages.js = Prism.languages.javascript;
Prism.languages.json = { property: /"(?:\\.|[^\\"])*"(?=\s*:)/gi, string: /"(?!:)(?:\\.|[^\\"])*"(?!:)/g, number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g, punctuation: /[{}[\]);,]/g, operator: /:/g, "boolean": /\b(true|false)\b/gi, "null": /\bnull\b/gi }, Prism.languages.jsonp = Prism.languages.json;
Prism.languages.php = Prism.languages.extend("clike", { keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i, constant: /\b[A-Z0-9_]{2,}\b/, comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 } }), Prism.languages.insertBefore("php", "class-name", { "shell-comment": { pattern: /(^|[^\\])#.*/, lookbehind: !0, alias: "comment" } }), Prism.languages.insertBefore("php", "keyword", { delimiter: { pattern: /\?>|<\?(?:php|=)?/i, alias: "important" }, variable: /\$\w+\b/i, "package": { pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: { punctuation: /\\/ } } }), Prism.languages.insertBefore("php", "operator", { property: { pattern: /(->)[\w]+/, lookbehind: !0 } }), Prism.languages.markup && (Prism.hooks.add("before-highlight", function (e) { "php" === e.language && /(?:<\?php|<\?)/gi.test(e.code) && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi, function (a) { for (var n = e.tokenStack.length; -1 !== e.backupCode.indexOf("___PHP" + n + "___");)++n; return e.tokenStack[n] = a, "___PHP" + n + "___" }), e.grammar = Prism.languages.markup) }), Prism.hooks.add("before-insert", function (e) { "php" === e.language && e.backupCode && (e.code = e.backupCode, delete e.backupCode) }), Prism.hooks.add("after-highlight", function (e) { if ("php" === e.language && e.tokenStack) { e.grammar = Prism.languages.php; for (var a = 0, n = Object.keys(e.tokenStack); a < n.length; ++a) { var t = n[a], r = e.tokenStack[t]; e.highlightedCode = e.highlightedCode.replace("___PHP" + t + "___", '<span class="token php language-php">' + Prism.highlight(r, e.grammar, "php").replace(/\$/g, "$$$$") + "</span>") } e.element.innerHTML = e.highlightedCode } }));
Prism.languages.scss = Prism.languages.extend("css", { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 }, atrule: { pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } }, url: /(?:[-a-z]+-)*url(?=\()/i, selector: { pattern: /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m, inside: { parent: { pattern: /&/, alias: "important" }, placeholder: /%[-_\w]+/, variable: /\$[-_\w]+|#\{\$[-_\w]+\}/ } } }), Prism.languages.insertBefore("scss", "atrule", { keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }] }), Prism.languages.scss.property = { pattern: /(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i, inside: { variable: /\$[-_\w]+|#\{\$[-_\w]+\}/ } }, Prism.languages.insertBefore("scss", "important", { variable: /\$[-_\w]+|#\{\$[-_\w]+\}/ }), Prism.languages.insertBefore("scss", "function", { placeholder: { pattern: /%[-_\w]+/, alias: "selector" }, statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" }, "boolean": /\b(?:true|false)\b/, "null": /\bnull\b/, operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 } }), Prism.languages.scss.atrule.inside.rest = Prism.util.clone(Prism.languages.scss);
Prism.languages.twig = { comment: /\{#[\s\S]*?#\}/, tag: { pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/, inside: { ld: { pattern: /^(?:\{\{\-?|\{%\-?\s*\w+)/, inside: { punctuation: /^(?:\{\{|\{%)\-?/, keyword: /\w+/ } }, rd: { pattern: /\-?(?:%\}|\}\})$/, inside: { punctuation: /.*/ } }, string: { pattern: /("|')(?:\\?.)*?\1/, inside: { punctuation: /^['"]|['"]$/ } }, keyword: /\b(?:even|if|odd)\b/, "boolean": /\b(?:true|false|null)\b/, number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+([Ee][-+]?\d+)?)\b/, operator: [{ pattern: /(\s)(?:and|b\-and|b\-xor|b\-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/, lookbehind: !0 }, /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/], property: /\b[a-zA-Z_][a-zA-Z0-9_]*\b/, punctuation: /[()\[\]{}:.,]/ } }, other: { pattern: /\S(?:[\s\S]*\S)?/, inside: Prism.languages.markup } };
!function () { if ("undefined" != typeof self && self.Prism && self.document) { var t = [], e = {}, n = function () { }; Prism.plugins.toolbar = {}; var a = Prism.plugins.toolbar.registerButton = function (n, a) { var o; o = "function" == typeof a ? a : function (t) { var e; return "function" == typeof a.onClick ? (e = document.createElement("button"), e.type = "button", e.addEventListener("click", function () { a.onClick.call(this, t) })) : "string" == typeof a.url ? (e = document.createElement("a"), e.href = a.url) : e = document.createElement("span"), e.textContent = a.text, e }, t.push(e[n] = o) }, o = Prism.plugins.toolbar.hook = function (a) { var o = a.element.parentNode; if (o && /pre/i.test(o.nodeName) && !o.classList.contains("code-toolbar")) { o.classList.add("code-toolbar"); var r = document.createElement("div"); r.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (t = document.body.getAttribute("data-toolbar-order").split(",").map(function (t) { return e[t] || n })), t.forEach(function (t) { var e = t(a); if (e) { var n = document.createElement("div"); n.classList.add("toolbar-item"), n.appendChild(e), r.appendChild(n) } }), o.appendChild(r) } }; a("label", function (t) { var e = t.element.parentNode; if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-label")) { var n, a, o = e.getAttribute("data-label"); try { a = document.querySelector("template#" + o) } catch (r) { } return a ? n = a.content : (e.hasAttribute("data-url") ? (n = document.createElement("a"), n.href = e.getAttribute("data-url")) : n = document.createElement("span"), n.textContent = o), n } }), Prism.hooks.add("complete", o) } }();
!function () { if ("undefined" != typeof self && self.Prism && self.document) { if (!Prism.plugins.toolbar) return console.warn("Show Languages plugin loaded before Toolbar plugin."), void 0; var e = { html: "HTML", xml: "XML", svg: "SVG", mathml: "MathML", css: "CSS", clike: "C-like", javascript: "JavaScript", abap: "ABAP", actionscript: "ActionScript", apacheconf: "Apache Configuration", apl: "APL", applescript: "AppleScript", asciidoc: "AsciiDoc", aspnet: "ASP.NET (C#)", autoit: "AutoIt", autohotkey: "AutoHotkey", basic: "BASIC", csharp: "C#", cpp: "C++", coffeescript: "CoffeeScript", "css-extras": "CSS Extras", django: "Django/Jinja2", fsharp: "F#", glsl: "GLSL", graphql: "GraphQL", http: "HTTP", inform7: "Inform 7", json: "JSON", latex: "LaTeX", livescript: "LiveScript", lolcode: "LOLCODE", matlab: "MATLAB", mel: "MEL", n4js: "N4JS", nasm: "NASM", nginx: "nginx", nsis: "NSIS", objectivec: "Objective-C", ocaml: "OCaml", opencl: "OpenCL", parigp: "PARI/GP", php: "PHP", "php-extras": "PHP Extras", powershell: "PowerShell", properties: ".properties", protobuf: "Protocol Buffers", jsx: "React JSX", renpy: "Ren'py", rest: "reST (reStructuredText)", sas: "SAS", sass: "Sass (Sass)", scss: "Sass (Scss)", sql: "SQL", typescript: "TypeScript", vbnet: "VB.Net", vhdl: "VHDL", vim: "vim", wiki: "Wiki markup", xojo: "Xojo (REALbasic)", yaml: "YAML" }; Prism.plugins.toolbar.registerButton("show-language", function (t) { var a = t.element.parentNode; if (a && /pre/i.test(a.nodeName)) { var s = a.getAttribute("data-language") || e[t.language] || t.language.substring(0, 1).toUpperCase() + t.language.substring(1), r = document.createElement("span"); return r.textContent = s, r } }) } }();




/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  jQuery.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('name')){
          var videoName = 'fitvid' + $.fn.fitVids._count;
          $this.attr('name', videoName);
          $.fn.fitVids._count++;
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };

  // Internal counter for unique video names.
  $.fn.fitVids._count = 0;

// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );



/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.4
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Typed=e():t.Typed=e()})(this,function(){return function(t){function e(n){if(s[n])return s[n].exports;var i=s[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),r=s(1),o=s(3),a=function(){function t(e,s){n(this,t),r.initializer.load(this,s,e),this.begin()}return i(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;return this.pause.status===!0?void this.setPauseStatus(t,e,!0):void(this.timeout=setTimeout(function(){e=o.htmlParser.typeHtmlChars(t,e,s);var n=0,r=t.substr(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var a=1;r=/\d+/.exec(r)[0],a+=r.length,n=parseInt(r),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+a),s.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););var u=t.substring(0,e),l=t.substring(u.length+1,e+i),c=t.substring(e+i+1);t=u+l+c,i--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e===t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},n)},n))}},{key:"keepTyping",value:function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=s;var n=t.substr(0,e);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var s=this;if(this.pause.status===!0)return void this.setPauseStatus(t,e,!0);if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=o.htmlParser.backSpaceHtmlChars(t,e,s);var n=t.substr(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];i&&n===i.substr(0,e)?s.stopNum=e:s.stopNum=0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},n)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){if(this.cursor&&!this.pause.status&&this.cursorBlinking!==t){this.cursorBlinking=t;var e=t?"infinite":0;this.cursor.style.animationIterationCount=e}}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e["default"]=a,t.exports=e["default"]},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},o=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),a=s(2),u=n(a),l=function(){function t(){i(this,t)}return o(t,[{key:"load",value:function(t,e,s){if("string"==typeof s?t.el=document.querySelector(s):t.el=s,t.options=r({},u["default"],e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),i=!0,o=!1,a=void 0;try{for(var l,c=n[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var p=l.value;t.strings.push(p.innerHTML.trim())}}catch(h){o=!0,a=h}finally{try{!i&&c["return"]&&c["return"]()}finally{if(o)throw a}}}t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1;for(var f in t.strings)t.sequence[f]=f;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){var e="";return e=t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){if(t.autoInsertCss&&t.showCursor&&t.fadeOut){var e=document.createElement("style");e.type="text/css";var s="";t.showCursor&&(s+="\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(s+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=s,document.head.appendChild(e))}}}]),t}();e["default"]=l;var c=new l;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e["default"]=s,t.exports=e["default"]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),i=function(){function t(){s(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var i="";for(i="<"===n?">":";";t.substr(e+1).charAt(0)!==i&&(e++,!(e+1>t.length)););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var i="";for(i=">"===n?"<":"&";t.substr(e-1).charAt(0)!==i&&(e--,!(e<0)););e--}return e}}]),t}();e["default"]=i;var r=new i;e.htmlParser=r}])});
//# sourceMappingURL=typed.min.js.map


!function (t, e) { "use strict"; var i = t(document); t.fn.typeIt = function (i) { return this.each(function () { var s = t(this), h = s.data("typeit"); h !== e && (clearTimeout(h.tTO), clearTimeout(h.dTO), s.removeData("typeit")), s.data("typeit", new t.typeIt(s, i)) }) }, t.typeIt = function (i, s) { this.d = { strings: [], speed: 100, deleteSpeed: e, lifeLike: !0, cursor: !0, cursorSpeed: 1e3, breakLines: !0, breakDelay: 750, deleteDelay: 750, startDelay: 250, startDelete: !1, loop: !1, loopDelay: 750, html: !0, autoStart: !0, callback: function () { } }, this.queue = [], this.queueIndex = 0, this.hasStarted = !1, this.inTag = !1, this.stringsToDelete = "", this.style = 'style="display:inline;position:relative;font:inherit;color:inherit;"', this.s = t.extend({}, this.d, s), this.el = i, this._init() }, t.typeIt.prototype = { _init: function () { this.el.find(".ti-container, .ti-cursor, .ti-placeholder").remove(), this._elCheck(), this.s.strings = this._toArray(this.s.strings), this.el.html('<i class="ti-placeholder" style="display:inline-block;line-height:0;visibility:hidden;overflow:hidden;">.</i><span ' + this.style + ' class="ti-container"></span>'), this.tel = this.el.find("span"), this.insert = function (t) { this.tel.append(t) }, this.s.startDelete && (this.tel.html(this.stringsToDelete), this.queue.push([this["delete"]])), this._generateQueue(), this._kickoff() }, _kickoff: function () { this._cursor(), this.s.autoStart ? this._startQueue() : this._isVisible() ? (this.hasStarted = !0, this._startQueue()) : i.on("scroll", function () { this._isVisible() && !this.hasStarted && (this.hasStarted = !0, this._startQueue()) }.bind(this)) }, _generateQueue: function () { for (var t = 0; t < this.s.strings.length; t++)if (this.queue.push([this.type, this.s.strings[t]]), t < this.s.strings.length - 1) { var e = this.queue.length, i = this.s.breakLines ? this.s.breakDelay : this.s.deleteDelay; this.queue.push([this.s.breakLines ? this["break"] : this["delete"]]), this.queue.splice(e, 0, [this.pause, i / 2]), this.queue.splice(e + 2, 0, [this.pause, i / 2]) } }, _startQueue: function () { this._to(function () { this._executeQueue() }.bind(this), this.s.startDelay) }, type: function (t, e) { e = "undefined" == typeof e || e, t = this._toArray(t), e && (t = this._rake(t), t = t[0]), this.tTO = setTimeout(function () { if (this._setPace(this), this.s.html && t[0].indexOf("<") !== -1 && t[0].indexOf("</") === -1 && !this.inTag) { for (var e = t.length - 1; e >= 0; e--)t[e].indexOf("</") !== -1 && (this.tagCount = 1, this.tagDuration = e); this._makeNode(t[0]) } else this._print(t[0]); t.splice(0, 1), t.length ? this.type(t, !1) : this._executeQueue() }.bind(this), this.typePace) }, pause: function (t) { t = t === e ? this.s.breakDelay : t, this._to(function () { this._executeQueue() }.bind(this), t) }, "break": function () { this.insert("<br>"), this._executeQueue() }, mergeSet: function (e) { this.s = t.extend({}, this.s, e), this._executeQueue() }, _print: function (e) { this.inTag ? (t(this.tag, this.el).last().append(e), this.tagCount < this.tagDuration ? this.tagCount++ : this.inTag = !1) : this.insert(e) }, empty: function () { this.tel.html(""), this._executeQueue() }, "delete": function (t) { this.deleteTimeout = setTimeout(function () { this._setPace(); for (var i = this.tel.html().split(""), s = t === e || null === t ? i.length - 1 : t + 1, h = i.length - 1; h > -1; h--) { if (">" !== i[h] && ";" !== i[h] || !this.s.html) { i.pop(); break } for (var n = h; n > -1; n--) { if ("<br>" === i.slice(n - 3, n + 1).join("")) { i.splice(n - 3, 4); break } if ("&" === i[n]) { i.splice(n, h - n + 1); break } if ("<" === i[n] && ">" !== i[n - 1]) { if (";" === i[n - 1]) for (var r = n - 1; r > -1; r--)if ("&" === i[r]) { i.splice(r, n - r); break } i.splice(n - 1, 1); break } } break } if (this.tel.html().indexOf("></") > -1) for (var u = this.tel.html().indexOf("></") - 2; u >= 0; u--)if ("<" === i[u]) { i.splice(u, i.length - u); break } this.tel.html(i.join("")), s > (t === e ? 0 : 2) ? this["delete"](t === e ? e : t - 1) : this._executeQueue() }.bind(this), this.deletePace) }, _isVisible: function () { var e = t(window), i = { top: e.scrollTop(), left: e.scrollLeft() }; i.right = i.left + e.width(), i.bottom = i.top + e.height(); var s = this.el.outerHeight(), h = this.el.outerWidth(); if (!h || !s) return !1; var n = this.el.offset(); n.right = n.left + h, n.bottom = n.top + s; var r = !(i.right < n.left || i.left > n.right || i.bottom < n.top || i.top > n.bottom); if (!r) return !1; var u = { top: Math.min(1, (n.bottom - i.top) / s), bottom: Math.min(1, (i.bottom - n.top) / s), left: Math.min(1, (n.right - i.left) / h), right: Math.min(1, (i.right - n.left) / h) }; return u.left * u.right >= 1 && u.top * u.bottom >= 1 }, _executeQueue: function () { if (this.queueIndex < this.queue.length) { var t = this.queue[this.queueIndex]; this.queueIndex++ , this.isLooping && 1 === this.queueIndex ? this._to(function () { t[0].bind(this)(t[1]) }.bind(this), this.s.loopDelay / 2) : t[0].bind(this)(t[1]) } else this.s.loop ? (this.queueIndex = 0, this.isLooping = !0, this._to(function () { this["delete"]() }.bind(this), this.s.loopDelay / 2)) : this.s.callback() }, _to: function (t, e) { setTimeout(function () { t() }.bind(this), e) }, _elCheck: function () { !this.s.startDelete && this.el.html().replace(/(\r\n|\n|\r)/gm, "").length > 0 ? this.s.strings = this.el.html().trim() : this.s.startDelete && (this.stringsToDelete = this.el.html()) }, _toArray: function (t) { return t.constructor === Array ? t.slice(0) : t.split("<br>") }, _cursor: function () { if (this.s.cursor) { this.el.append("<span " + this.style + 'class="ti-cursor">|</span>'); var t = this.s.cursorSpeed, e = this; !function i() { e.el.find(".ti-cursor").fadeTo(t / 2, 0).fadeTo(t / 2, 1), e._to(i, t) }() } }, _setPace: function () { var t = this.s.speed, i = this.s.deleteSpeed !== e ? this.s.deleteSpeed : this.s.speed / 3, s = t / 2, h = i / 2; this.typePace = this.s.lifeLike ? this._randomInRange(t, s) : t, this.deletePace = this.s.lifeLike ? this._randomInRange(i, h) : i }, _randomInRange: function (t, e) { return Math.abs(Math.random() * (t + e - (t - e)) + (t - e)) }, _rake: function (t) { for (var e = 0; e < t.length; e++)if (t[e] = t[e].split(""), this.s.html) { this.tPos = []; for (var i, s = this.tPos, h = !1, n = 0; n < t[e].length; n++)"<" !== t[e][n] && "&" !== t[e][n] || (s[0] = n, h = "&" === t[e][n]), (">" === t[e][n] || ";" === t[e][n] && h) && (s[1] = n, n = 0, i = t[e].slice(s[0], s[1] + 1).join(""), t[e].splice(s[0], s[1] - s[0] + 1, i), h = !1) } return t }, _makeNode: function (e) { this.tag = t(t.parseHTML(e)), this._print(this.tag), this.inTag = !0 } }, t.fn.tiType = function (s) { var h = t(this).data("typeit"); return h === e ? i : (h.queue.push([h.type, s]), this) }, t.fn.tiEmpty = function () { var s = t(this).data("typeit"); return s === e ? i : (s.queue.push([s.empty]), this) }, t.fn.tiDelete = function (s) { var h = t(this).data("typeit"); return h === e ? i : (h.queue.push([h["delete"], s]), this) }, t.fn.tiPause = function (s) { var h = t(this).data("typeit"); return h === e ? i : (h.queue.push([h.pause, s]), this) }, t.fn.tiBreak = function () { var s = t(this).data("typeit"); return s === e ? i : (s.queue.push([s["break"]]), this) }, t.fn.tiSettings = function (s) { var h = t(this).data("typeit"); return h === e ? i : (h.queue.push([h.mergeSet, s]), this) } }(jQuery);

; (function () {
  'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

  /*jslint browser:true, node:true*/
  /*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
  function FastClick(layer, options) {
    var oldOnClick;

    options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
    this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
    this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
    this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
    this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
    this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
    this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
    this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
    this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
    this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
    this.tapTimeout = options.tapTimeout || 700;

    if (FastClick.notNeeded(layer)) {
      return;
    }

    // Some old versions of Android don't have Function.prototype.bind
    function bind(method, context) {
      return function () { return method.apply(context, arguments); };
    }


    var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
    var context = this;
    for (var i = 0, l = methods.length; i < l; i++) {
      context[methods[i]] = bind(context[methods[i]], context);
    }

    // Set up event handlers as required
    if (deviceIsAndroid) {
      layer.addEventListener('mouseover', this.onMouse, true);
      layer.addEventListener('mousedown', this.onMouse, true);
      layer.addEventListener('mouseup', this.onMouse, true);
    }

    layer.addEventListener('click', this.onClick, true);
    layer.addEventListener('touchstart', this.onTouchStart, false);
    layer.addEventListener('touchmove', this.onTouchMove, false);
    layer.addEventListener('touchend', this.onTouchEnd, false);
    layer.addEventListener('touchcancel', this.onTouchCancel, false);

    // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
    // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
    // layer when they are cancelled.
    if (!Event.prototype.stopImmediatePropagation) {
      layer.removeEventListener = function (type, callback, capture) {
        var rmv = Node.prototype.removeEventListener;
        if (type === 'click') {
          rmv.call(layer, type, callback.hijacked || callback, capture);
        } else {
          rmv.call(layer, type, callback, capture);
        }
      };

      layer.addEventListener = function (type, callback, capture) {
        var adv = Node.prototype.addEventListener;
        if (type === 'click') {
          adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
            if (!event.propagationStopped) {
              callback(event);
            }
          }), capture);
        } else {
          adv.call(layer, type, callback, capture);
        }
      };
    }

    // If a handler is already declared in the element's onclick attribute, it will be fired before
    // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
    // adding it as listener.
    if (typeof layer.onclick === 'function') {

      // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
      // - the old one won't work if passed to addEventListener directly.
      oldOnClick = layer.onclick;
      layer.addEventListener('click', function (event) {
        oldOnClick(event);
      }, false);
      layer.onclick = null;
    }
  }

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
  var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
  var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
  var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
  var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
  var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
  var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
  FastClick.prototype.needsClick = function (target) {
    switch (target.nodeName.toLowerCase()) {

      // Don't send a synthetic click to disabled inputs (issue #62)
      case 'button':
      case 'select':
      case 'textarea':
        if (target.disabled) {
          return true;
        }

        break;
      case 'input':

        // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
        if ((deviceIsIOS && target.type === 'file') || target.disabled) {
          return true;
        }

        break;
      case 'label':
      case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
      case 'video':
        return true;
    }

    return (/\bneedsclick\b/).test(target.className);
  };


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
  FastClick.prototype.needsFocus = function (target) {
    switch (target.nodeName.toLowerCase()) {
      case 'textarea':
        return true;
      case 'select':
        return !deviceIsAndroid;
      case 'input':
        switch (target.type) {
          case 'button':
          case 'checkbox':
          case 'file':
          case 'image':
          case 'radio':
          case 'submit':
            return false;
        }

        // No point in attempting to focus disabled inputs
        return !target.disabled && !target.readOnly;
      default:
        return (/\bneedsfocus\b/).test(target.className);
    }
  };


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
  FastClick.prototype.sendClick = function (targetElement, event) {
    var clickEvent, touch;

    // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
    if (document.activeElement && document.activeElement !== targetElement) {
      document.activeElement.blur();
    }

    touch = event.changedTouches[0];

    // Synthesise a click event, with an extra attribute so it can be tracked
    clickEvent = document.createEvent('MouseEvents');
    clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
    clickEvent.forwardedTouchEvent = true;
    targetElement.dispatchEvent(clickEvent);
  };

  FastClick.prototype.determineEventType = function (targetElement) {

    //Issue #159: Android Chrome Select Box does not open with a synthetic click event
    if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
      return 'mousedown';
    }

    return 'click';
  };


	/**
	 * @param {EventTarget|Element} targetElement
	 */
  FastClick.prototype.focus = function (targetElement) {
    var length;

    // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
    if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
      length = targetElement.value.length;
      targetElement.setSelectionRange(length, length);
    } else {
      targetElement.focus();
    }
  };


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
  FastClick.prototype.updateScrollParent = function (targetElement) {
    var scrollParent, parentElement;

    scrollParent = targetElement.fastClickScrollParent;

    // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
    // target element was moved to another parent.
    if (!scrollParent || !scrollParent.contains(targetElement)) {
      parentElement = targetElement;
      do {
        if (parentElement.scrollHeight > parentElement.offsetHeight) {
          scrollParent = parentElement;
          targetElement.fastClickScrollParent = parentElement;
          break;
        }

        parentElement = parentElement.parentElement;
      } while (parentElement);
    }

    // Always update the scroll top tracker if possible.
    if (scrollParent) {
      scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
    }
  };


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
  FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {

    // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
    if (eventTarget.nodeType === Node.TEXT_NODE) {
      return eventTarget.parentNode;
    }

    return eventTarget;
  };


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
  FastClick.prototype.onTouchStart = function (event) {
    var targetElement, touch, selection;

    // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
    if (event.targetTouches.length > 1) {
      return true;
    }

    targetElement = this.getTargetElementFromEventTarget(event.target);
    touch = event.targetTouches[0];

    if (deviceIsIOS) {

      // Only trusted events will deselect text on iOS (issue #49)
      selection = window.getSelection();
      if (selection.rangeCount && !selection.isCollapsed) {
        return true;
      }

      if (!deviceIsIOS4) {

        // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
        // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
        // with the same identifier as the touch event that previously triggered the click that triggered the alert.
        // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
        // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
        // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
        // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
        // random integers, it's safe to to continue if the identifier is 0 here.
        if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
          event.preventDefault();
          return false;
        }

        this.lastTouchIdentifier = touch.identifier;

        // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
        // 1) the user does a fling scroll on the scrollable layer
        // 2) the user stops the fling scroll with another tap
        // then the event.target of the last 'touchend' event will be the element that was under the user's finger
        // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
        // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
        this.updateScrollParent(targetElement);
      }
    }

    this.trackingClick = true;
    this.trackingClickStart = event.timeStamp;
    this.targetElement = targetElement;

    this.touchStartX = touch.pageX;
    this.touchStartY = touch.pageY;

    // Prevent phantom clicks on fast double-tap (issue #36)
    if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
      event.preventDefault();
    }

    return true;
  };


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
  FastClick.prototype.touchHasMoved = function (event) {
    var touch = event.changedTouches[0], boundary = this.touchBoundary;

    if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
      return true;
    }

    return false;
  };


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
  FastClick.prototype.onTouchMove = function (event) {
    if (!this.trackingClick) {
      return true;
    }

    // If the touch has moved, cancel the click tracking
    if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
      this.trackingClick = false;
      this.targetElement = null;
    }

    return true;
  };


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
  FastClick.prototype.findControl = function (labelElement) {

    // Fast path for newer browsers supporting the HTML5 control attribute
    if (labelElement.control !== undefined) {
      return labelElement.control;
    }

    // All browsers under test that support touch events also support the HTML5 htmlFor attribute
    if (labelElement.htmlFor) {
      return document.getElementById(labelElement.htmlFor);
    }

    // If no for attribute exists, attempt to retrieve the first labellable descendant element
    // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
    return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
  };


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
  FastClick.prototype.onTouchEnd = function (event) {
    var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

    if (!this.trackingClick) {
      return true;
    }

    // Prevent phantom clicks on fast double-tap (issue #36)
    if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
      this.cancelNextClick = true;
      return true;
    }

    if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
      return true;
    }

    // Reset to prevent wrong click cancel on input (issue #156).
    this.cancelNextClick = false;

    this.lastClickTime = event.timeStamp;

    trackingClickStart = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0;

    // On some iOS devices, the targetElement supplied with the event is invalid if the layer
    // is performing a transition or scroll, and has to be re-detected manually. Note that
    // for this to function correctly, it must be called *after* the event target is checked!
    // See issue #57; also filed as rdar://13048589 .
    if (deviceIsIOSWithBadTarget) {
      touch = event.changedTouches[0];

      // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
      targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
      targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
    }

    targetTagName = targetElement.tagName.toLowerCase();
    if (targetTagName === 'label') {
      forElement = this.findControl(targetElement);
      if (forElement) {
        this.focus(targetElement);
        if (deviceIsAndroid) {
          return false;
        }

        targetElement = forElement;
      }
    } else if (this.needsFocus(targetElement)) {

      // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
      // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
      if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
        this.targetElement = null;
        return false;
      }

      this.focus(targetElement);
      this.sendClick(targetElement, event);

      // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
      // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
      if (!deviceIsIOS || targetTagName !== 'select') {
        this.targetElement = null;
        event.preventDefault();
      }

      return false;
    }

    if (deviceIsIOS && !deviceIsIOS4) {

      // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
      // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
      scrollParent = targetElement.fastClickScrollParent;
      if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
        return true;
      }
    }

    // Prevent the actual click from going though - unless the target node is marked as requiring
    // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
    if (!this.needsClick(targetElement)) {
      event.preventDefault();
      this.sendClick(targetElement, event);
    }

    return false;
  };


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
  FastClick.prototype.onTouchCancel = function () {
    this.trackingClick = false;
    this.targetElement = null;
  };


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
  FastClick.prototype.onMouse = function (event) {

    // If a target element was never set (because a touch event was never fired) allow the event
    if (!this.targetElement) {
      return true;
    }

    if (event.forwardedTouchEvent) {
      return true;
    }

    // Programmatically generated events targeting a specific element should be permitted
    if (!event.cancelable) {
      return true;
    }

    // Derive and check the target element to see whether the mouse event needs to be permitted;
    // unless explicitly enabled, prevent non-touch click events from triggering actions,
    // to prevent ghost/doubleclicks.
    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

      // Prevent any user-added listeners declared on FastClick element from being fired.
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      } else {

        // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        event.propagationStopped = true;
      }

      // Cancel the event
      event.stopPropagation();
      event.preventDefault();

      return false;
    }

    // If the mouse event is permitted, return true for the action to go through.
    return true;
  };


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
  FastClick.prototype.onClick = function (event) {
    var permitted;

    // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
    if (this.trackingClick) {
      this.targetElement = null;
      this.trackingClick = false;
      return true;
    }

    // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
    if (event.target.type === 'submit' && event.detail === 0) {
      return true;
    }

    permitted = this.onMouse(event);

    // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
    if (!permitted) {
      this.targetElement = null;
    }

    // If clicks are permitted, return true for the action to go through.
    return permitted;
  };


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
  FastClick.prototype.destroy = function () {
    var layer = this.layer;

    if (deviceIsAndroid) {
      layer.removeEventListener('mouseover', this.onMouse, true);
      layer.removeEventListener('mousedown', this.onMouse, true);
      layer.removeEventListener('mouseup', this.onMouse, true);
    }

    layer.removeEventListener('click', this.onClick, true);
    layer.removeEventListener('touchstart', this.onTouchStart, false);
    layer.removeEventListener('touchmove', this.onTouchMove, false);
    layer.removeEventListener('touchend', this.onTouchEnd, false);
    layer.removeEventListener('touchcancel', this.onTouchCancel, false);
  };


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
  FastClick.notNeeded = function (layer) {
    var metaViewport;
    var chromeVersion;
    var blackberryVersion;
    var firefoxVersion;

    // Devices that don't support touch don't need FastClick
    if (typeof window.ontouchstart === 'undefined') {
      return true;
    }

    // Chrome version - zero for other browsers
    chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

    if (chromeVersion) {

      if (deviceIsAndroid) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          }
          // Chrome 32 and above with width=device-width or less don't need FastClick
          if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }

        // Chrome desktop doesn't need FastClick (issue #15)
      } else {
        return true;
      }
    }

    if (deviceIsBlackBerry10) {
      blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

      // BlackBerry 10.3+ does not require Fastclick library.
      // https://github.com/ftlabs/fastclick/issues/251
      if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // user-scalable=no eliminates click delay.
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          }
          // width=device-width (or less than device-width) eliminates click delay.
          if (document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
    }

    // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
    if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    }

    // Firefox version - zero for other browsers
    firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

    if (firefoxVersion >= 27) {
      // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

      metaViewport = document.querySelector('meta[name=viewport]');
      if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
        return true;
      }
    }

    // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
    // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
    if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    }

    return false;
  };


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
  FastClick.attach = function (layer, options) {
    return new FastClick(layer, options);
  };


  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

    // AMD. Register as an anonymous module.
    define(function () {
      return FastClick;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = FastClick.attach;
    module.exports.FastClick = FastClick;
  } else {
    window.FastClick = FastClick;
  }
}());
'use strict';

// FastClick
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function () {
		FastClick.attach(document.body);
	}, false);
}

// var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// // Set any attributes as desired
// shape.setAttribute("cx", getRandomInt(20,100));
// shape.setAttribute("cy", getRandomInt(20, 300));
// shape.setAttribute("r", getRandomInt(1, 10));
// shape.setAttribute("fill", "green");

// document.querySelector('.blog-character').appendChild(shape);

// http://www.a11ymatters.com/pattern/mobile-nav/#use-a-semantic-element-for-the-toggle-button
var $toggle = document.querySelector('#toggle'),
    $menu = document.querySelector('#menu');

$toggle.addEventListener('click', function () {
	if ($menu.classList.contains('js-open')) {
		$menu.classList.remove('js-open');
		$toggle.classList.remove('js-open');
	} else {
		$menu.classList.add('js-open');
		$toggle.classList.add('js-open');
	}
});

var $ = jQuery;

jQuery(document).ready(function () {

	$('body').addClass('js');

	console.log('Check it: https://github.com/laras126/notlaura.com');

	// TODO move to typing.js
	// console.log('hi');

	// const TITLE_TEXT = document.querySelector('.type-title').innerHTML;

	// $('.type-it').typeIt({
	// 	speed: 100,
	// 	cursor: false,
	// 	lifeLike: false
	// })
	// 	.tiType(TITLE_TEXT);
	// .tiSettings({ speed: 100 })
	// .tiType('but now I am typing pretty fasst')
	// .tiDelete(2)
	// .tiType('t!')


	// Pocket request

	// $.ajax({
	// 	url: 'https://getpocket.com/v3/oauth/request',
	// 	data: {
	// 		'consumer_key': '70389-600b69f12a120f79b1312e67',
	// 		'redirect_uri': 'https://notlaura.com'
	// 	},
	// 	contentType: "application/json; charset=utf-8", // this
	// 	dataType: "json", // and this
	// }).done( function() {
	// 	alert('stuff');
	// });


	// ----
	// Animations (GreenSock)
	//----

	// Character 1, header
	// var mainBody = document.querySelectorAll(".main"),
	// 		eyes = document.querySelector(".eyes"),
	// 		pupils = document.querySelector(".pupils"),
	// 		characterArea = document.querySelector(".character-1");

	// 	var tl = new TimelineLite();

	// 	TweenLite.set(mainBody, { y: 150 });

	// // 	console.log(tl);

	// 	tl.set(document.querySelector(".main-header"), { backgroundColor: "green" });

	// 	characterArea.addEventListener("mouseover", () => {
	// 		tl.to(mainBody, 1, {
	// 			y: 0,
	// 			ease: Power1.easeOut
	// 		});
	// 	});

	// 	// function myFunction() {
	// 	setInterval( () => {
	// 		tl.fromTo(eyes, 1, { fill: '#1B75BC' }, { fill: 'white' })
	// 			.fromTo(pupils, 1, { fill: '#1B75BC' }, { fill: 'black' }, '-=1');
	// 	}, 3000);


	// tl.set(document.querySelector(".main-header"), { backgroundColor: "green" });


	/**
  * on scroll
  * if scroll position is same as menus position from top
  * scroll pos
  * menu pos
  *
  * fix menu
  *
  */

	// const RAIL = document.querySelector('.nav-rail'),
	// 			SECTION_NAV = document.querySelector('.section-nav');

	//  function offset(el) {
	// 	var rect = el.getBoundingClientRect(),
	// 		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	// 	return { offset: rect.top + scrollTop, scroll: scrollTop };
	// }

	// document.addEventListener('scroll', function() {
	// 	let position = offset(RAIL);
	// 	let sectionNavPos = position.offset;

	// 	if (position.scroll > sectionNavPos) {
	// 		SECTION_NAV.classList.add('fixed');
	// 		RAIL.style.paddingTop = sectionNavPos.toFixed(0) + "px";
	// 	} else {
	// 		SECTION_NAV.classList.remove('fixed');
	// 		RAIL.style.paddingTop = "0";
	// 	}
	// 	console.log(position);
	// });
	// var scrollPos = window.pageYOffset || document.documentElement.scrollTop,
	// menuPos =


	// ----
	// Smooth scrolling
	// ----

	// https://css-tricks.com/snippets/jquery/smooth-scrolling/

	$('a[href*="#"]').not('[href="#"]').not('[href="#menu"]').on('click', function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			var header_ht = $('.site-header').outerHeight();
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - header_ht
				}, 300, function () {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						// Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
				return false;
			}
		}
	});

	// Fit Vids
	$(".main-content").fitVids({ customSelector: 'iframe' });
});
"use strict";

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Blog Header Character
function runBubbleAnimation() {

	var $main = document.querySelectorAll(".bc-main"),
	    $text = document.querySelectorAll(".page-title"),
	    $bubbles = document.querySelectorAll(".bc-bubble"),
	    $body = document.querySelectorAll(".bc-body"),

	// $people = document.querySelectorAll(".people-list li a"),
	$mouth = document.querySelector(".bc-mouth");
	$innerMouth = document.querySelector(".bc-inner-mouth"), $eyeball = document.querySelector(".bc-eyeball");

	var tl = new TimelineLite();

	// Random colors for bubbles
	var COLORS = ["#FC625D", "#21A99C", "slategray", "#F7DE32"];

	// Randomly color bubbles
	for (var i = 0; i < $bubbles.length; i++) {
		var color = COLORS[Math.floor(Math.random() * COLORS.length)];

		$bubbles[i].style.opacity = 1;
		$bubbles[i].style.fill = color;
	}

	// // Randomly people list
	// for (var i = 0; i < $people.length; i++) {
	// 	let color = COLORS[Math.floor(Math.random() * COLORS.length)];

	// 	$bubbles[i].style.opacity = 1;
	// 	$people[i].style.fill = color;
	// }

	tl.to($main, 1, { left: 0, ease: Power2.easeOut });

	// Mouth In
	tl.to([$mouth, $innerMouth], 1, { x: -20, ease: SlowMo.ease.config(0.7, 0.7, false) });

	// Body inflate
	tl.to($body, 2, { scale: 1.1, ease: Power2.easeIn }, "-=1.0");

	// Mouth Out
	tl.to([$mouth, $innerMouth], 1, { x: 0, ease: Elastic.easeOut.config(1, 0.7), force3D: true });

	// Fill body
	tl.to($body, 0.25, { scale: 1, ease: Power2.easeIn }, "-=1.0");

	// Blow bubbles
	tl.staggerTo($bubbles, 2, { scale: 1, delay: 0.1, ease: Elastic.easeInOut, force3D: true, autoAlpha: 1 }, 0.1, "-=2.0");

	// Show blog text
	tl.to($text, 0.5, { ease: Power4.easeOut, autoAlpha: 1 }, "-=1");

	// Adjust viewport on small screens
	// TODO: maybe reverse.
	// Mobile: 0 0 318 190
	// Large: 0 0 618 190
	if (window.innerWidth <= 690) {
		document.querySelector(".blog-character").setAttribute("viewBox", "50 0 318 190");
	}
}

if (window.location.pathname == "/portfolio/") {
	runBubbleAnimation();
}

function runLaraWaveAnimation() {
	var $handLeft = document.querySelector('.ls-hand-left'),
	    $lara = document.querySelector('.lara-character');

	var tl = new TimelineLite();

	// Slide in from left
	tl.to($lara, 1, { x: 0, ease: Power2.easeInOut, autoAlpha: 1 }).to($handLeft, 0.25, { rotation: -20, transformOrigin: "50% 90%", ease: Power2.easeInOut, yoyo: true, repeatDelay: 0, repeat: 50 });
}

function runBlinkingAnimation() {
	var mainBody = document.querySelectorAll(".c1-main"),
	    eyes = document.querySelector(".c1-eyes"),
	    pupils = document.querySelector(".c1-pupils"),
	    characterTrigger = document.querySelector(".sticky");

	var characterVisible = false;
	var tl = new TimelineLite();

	// if( window.width > 600 ) {
	tl.set(mainBody, { y: 150 });
	// }

	characterTrigger.addEventListener("touchstart", function () {
		showCharacter();
	});

	characterTrigger.addEventListener("mouseover", function () {
		showCharacter();
	});

	if (characterVisible == true) {
		var moveEye = new TimelineMax({ delay: 2 });
		moveEye.add(TweenMax.to(pupils, 0.2, { x: 1, y: 2, rotation: 2, transformOrigin: "50% 100%" }));
	}

	// if( characterVisible == true ) {
	var blink = new TimelineMax({ delay: 0.5, repeat: 20, repeatDelay: 2 });

	blink.add(TweenMax.fromTo(eyes, 0.5, { fill: '#1B75BC' }, { fill: 'white' }));
	blink.add(TweenMax.fromTo(pupils, 0.5, { fill: '#1B75BC' }, { fill: '#000000' }), '-=0.5');

	function showCharacter() {
		tl.to(mainBody, 0.5, {
			y: 0,
			delay: 0.5,
			ease: Power3.easeOut
		});
		characterVisible = true;
	}
	// }
	// moveEye.add(TweenMax.to(pupils, 0.2, { x: 0 }));

	// moveEye.add(TweenMax.fromTo(pupils, 0.5, { fill: '#1B75BC' }, { fill: '#000000' }), '-=0.5');

	// blink.fromTo(pupils, 0.5, { fill: '#1B75BC' }, { fill: 'black', repeat: -1, yoyo: true }, '-=0.5');
	// tl.add(TweenMax.from('#img_skybox_dc', 0.5, { autoAlpha: 0 }));

	// var blink = new TimelineLite();
	// blink.
	// blink.delay(2);
}

if (document.querySelector('.character-1' !== null)) {
	// runLaraWaveAnimation();
	runBlinkingAnimation();
}

// const string = document.querySelector(".panel-title").textContent;

// const array = string.split("");

// var markup = "";

// array.forEach(function(element) {
// 	let span = `<span>${element}</span>`;
// 	markup += span;
// }, this);

// document.querySelector(".panel-title").innerHTML = markup;
// const spans = document.querySelectorAll('.panel-title span');

// const panelTitle = document.querySelector('.panel-title');

// var tl = new TimelineLite();

// TweenMax.from(".sig", 1, { autoAlpha: 0, scale: 0, rotation: 360, drawSVG: 0, ease: Power4.easeInOut }, 0.1);

// tl.from('.lara-name path', 1, { drawSVG: 0 } );

// tl.to(panelTitle, 1, { scale: 1.2, x: 0, ease: Elastic.easeInOut, rotation: -40, autoAlpha: 1});
'use strict';

// ----
// Typed.js
// ----


// Start the typing elements on pages with the story layout

if (document.querySelector('.page-template-page-story_layout')) {

	// Function to type next item in typedEls array
	var typeNextInArray = function typeNextInArray() {

		// Move through the array
		options.elIndex++;
		var newIndex = options.elIndex;
		var currentEl = TYPED_SRCS[newIndex];

		// Allow for data attributes to provide some settings
		var newTypeSpeed = "speed" in currentEl.dataset ? +currentEl.dataset.speed : TYPE_SPEED;

		// Callbacks must be defined below
		var callbackFunc = "callback" in currentEl.dataset ? window[currentEl.dataset.callback] : console.log;

		// New options set
		var newOptions = {
			elIndex: newIndex,
			startDelay: 500,
			strings: [TYPED_SRCS[newIndex].innerHTML],
			typeSpeed: newTypeSpeed,
			showCursor: SHOW_CURSOR,
			callback: callbackFunc(TYPED_SRCS[newIndex]),
			onComplete: function onComplete() {

				markPanelComplete(newIndex);

				if (newIndex <= TYPED_ELS.length) {

					if (panelClassesContain(newIndex, 'js-tabs')) {
						var nextBtnGroup = document.querySelectorAll('#panel-' + newIndex + '-btn .btn-next');

						showButtons(nextBtnGroup);

						// let tabs = document.querySelectorAll('.panel-tab');
					} else {
						var nextBtn = document.querySelector('#panel-' + newIndex + '-btn');
						showButtons(nextBtn);
						clickToNextSection(newIndex.toString(), nextBtn);
					}

					// return typeNextInArray();
				} else {
					console.log('done');
				}
			}
		};

		var typed = new Typed(TYPED_ELS[newIndex], newOptions);
	};

	var clickToNextSection = function clickToNextSection(index, btn) {
		console.log('#panel-' + (+index - 1) + '-btn');
		var panelId = '#panel-' + (+index - 1);

		// If it's a normal panel
		if (!panelClassesContain(index, 'js-tabs')) {
			btn.addEventListener('click', function (e) {
				return typeNextInArray();
			});
		}
	};

	var panelClassesContain = function panelClassesContain(i, c) {
		var elem = document.querySelector('#panel-' + i);
		return elem.classList.contains(c);
	};

	var markPanelComplete = function markPanelComplete(i) {
		var elem = document.querySelector('#panel-' + i);
		elem.classList.add('js-complete');
	};

	var showButtons = function showButtons(btn) {
		// Mark the stagger boolean true if selecting multiple buttons
		var tabbed = btn.length > 1;

		if (tabbed) {
			reveal(btn, true);
			btn.forEach(function (element) {
				toggleTabs(element);
			}, this);
		} else {
			reveal(btn);
		}
	};

	var toggleTabs = function toggleTabs(element) {
		var type = element.dataset.contentRef;
		var content = document.getElementById(type);
		var tabs = document.querySelectorAll('.panel-tab');
		var btns = document.querySelectorAll('.decision-btns > a');

		element.addEventListener('click', function (e) {

			btns.forEach(function (btn) {
				btn.classList.remove('js-selected');
			});

			element.classList.add('js-selected');

			tabs.forEach(function (tab) {
				tab.classList.add('js-hidden');

				if (tab.getAttribute('id') == type) {
					tab.classList.remove('js-hidden');
				}
			});
		});
	};

	// Specific callbacks

	// TODO user closest LATER


	var panel1Callback = function panel1Callback() {
		console.log('p1 is done');
		var toHide = document.querySelector('.js-hide');
		hide(toHide);
	};

	var panel2Callback = function panel2Callback() {
		console.log('p2 callback');
	};

	var panel3Callback = function panel3Callback() {
		console.log('p3 call back');
	};

	// Helpers

	var reveal = function reveal(el) {
		var stagger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		// Stagger aimation if more than one element comes in.
		if (stagger == true) {
			var tm = new TimelineMax();
			tm.staggerTo(el, .2, { delay: 0.5, transformOrigin: "50% 50%", scale: 1, ease: Power2.easeOut, autoAlpha: 1 }, 0.1);
			// tm.staggerTo(el, .2, { delay: 0.5, transformOrigin: "50% 50%", rotation: 30, ease: Power2.easeOut }, 0.1, "");
		} else {
			TweenLite.to(el, .2, { delay: 0.5, transformOrigin: "50% 50%", scale: 1, ease: Power2.easeOut, autoAlpha: 1 });
		}
	};

	var hide = function hide(el) {
		TweenLite.to(el, .2, { delay: 0.5, transformOrigin: "50% 50%", scale: 0, ease: Power2.easeOut, autoAlpha: 0 });
	};

	// Get an array of all elements to be typed.
	var TYPED_SRCS = document.querySelectorAll('.js-typed-src');
	var TYPED_ELS = document.querySelectorAll('.js-typed');
	var TYPE_SPEED = 3,
	    SHOW_CURSOR = false;

	var options = {
		elIndex: 0,
		strings: [TYPED_SRCS[0].innerHTML],
		typeSpeed: TYPE_SPEED,
		showCursor: SHOW_CURSOR,
		onComplete: function onComplete() {
			var nextBtn = document.querySelector('#panel-' + options.elIndex + '-btn');
			markPanelComplete(options.elIndex);
			showButtons(nextBtn);
			clickToNextSection(options.elIndex + 1, nextBtn);
		}
	};

	var typed = new Typed(TYPED_ELS[0], options);;
} // end if