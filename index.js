// ==UserScript==
// @name         网页净化
// @namespace    Scripts
// @version      0.1
// @description  净化平时用到的网页, 去除广告, 布局调整
// @author       xiaomu-dev
// @match        *://*/*
// @run-at document-start
// @license GPL
// ==/UserScript==

(function () {
	'use strict';

	// 获取url
	var hostname = window.location.hostname;
	console.log(hostname);

	// 匹配url
	switch (hostname) {
		case 'www.123pan.com':
		case '123pan.com':
			purify_123pan();
			break;

		default:
			break;
	}

	// 打印
	function log(log) {
		const info = '\n'.concat(' %c ', '小木').concat(' %c ', log, '  \n');
		const css1 = 'background: #000000; padding:5px 0; border-radius: 3px 0 0 3px; color: #fff';
		const css2 = 'background: #f7971d; padding:5px 0; border-radius: 0 3px 3px 0; color: #000';
		console.log(info, css1, css2);
	}

	// 网页净化
	function purify_123pan() {
		// 123网盘
		let style = document.createElement('style');
		style.innerHTML = `
			.baidu-banner-container { display: none !important; }
			.baidu-banner-container + div { display: none !important; }
		`;
		document.head.appendChild(style);
		log('已净化123网盘');
	}
})();