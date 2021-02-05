// ==UserScript==
// @name	HackerNewsDarkTheme
// @namespace	github.com/DarkThemeHub/HackerNewsDarkTheme
// @version	1.0.2
// @description	HackerNewsDarkTheme
// @author	DarkThemeHub
// @homepage	https://github.com/DarkThemeHub/HackerNewsDarkTheme
// @supportURL	https://github.com/DarkThemeHub/HackerNewsDarkTheme/issues
// @updateURL   https://raw.githubusercontent.com/DarkThemeHub/HackerNewsDarkTheme/master/Generated/github.user.js
// @run-at	document-start
// ==/UserScript==
(function() {var css = "";
if (false || (new RegExp("^https?:\/\/news\.ycombinator\.com.*")).test(document.location.href))
	css += [
		"html {",
		"  background-color: #222 !important; }",
		"",
		"body {",
		"  color: white;",
		"  background: transparent !important; }",
		"",
		"#hnmain,",
		"td[bgcolor=\"#fafaf0\"] {",
		"  background: #25272a !important; }",
		"",
		"a,",
		".title a,",
		".comment a {",
		"  color: #4299fc !important; }",
		"",
		".pagetop a,",
		".pagetop a:visited,",
		".commtext,",
		".default,",
		"b {",
		"  color: white !important; }",
		"",
		".comhead,",
		".age a,",
		".togg,",
		".subtext,",
		".subtext a:link,",
		"td {",
		"  color: #bbb !important; }",
		"",
		".hnuser {",
		"  color: #ff6600 !important; }",
		"",
		".title a:visited,",
		"a:visited {",
		"  color: #b5b5b5 !important; }",
		"",
		"textarea,",
		"input[type=\"text\"] {",
		"  background: #222 !important;",
		"  color: white !important;",
		"  border: 1px solid #444 !important; }",
		"",
		"input[type=\"submit\"] {",
		"  color: white !important;",
		"  background-color: #333 !important;",
		"  border: 1px solid #444 !important; }",
		"",
		"span[id^=\"unv\"] a[id^=\"un\"] {",
		"  color: #ff6600 !important; }",

	].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
