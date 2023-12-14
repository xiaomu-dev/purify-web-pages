// ==UserScript==
// @name         网页净化
// @namespace    Scripts
// @version      0.1.6
// @description  净化平时用到的网页, 去除广告, 布局调整, 支持多个网站净化
// @author       xiaomu-dev
// @match        *://www.123pan.com/*
// @match        *://*.runoob.com/*
// @match        *://remeins.com/*
// @match        *://*.ahhhhfs.com/*
// @match        *://*.speedtest.cn/*
// @run-at document-start
// @license Apache-2.0
// ==/UserScript==

(function () {
	'use strict';

	// 获取url
	var hostname = window.location.hostname;
	console.log('hostname', hostname);

	// 匹配url
	switch (hostname) {
		case 'www.123pan.com':
		case '123pan.com':
			purify_123pan();
			break;

		case 'c.runoob.com':
			purify_runoob();
			break;

		case 'remeins.com':
			purify_remeins();
			break;

		case 'www.ahhhhfs.com':
		case 'ahhhhfs.com':
			purify_ahhhhfs();
			break;

		case 'www.speedtest.cn':
		case '5g.speedtest.cn':
		case 'speedtest.cn':
			purify_speedtest();
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
	// 插入样式
	function insertStyle(css) {
		let style = document.createElement('style');
		style.innerHTML = css;
		document.head.appendChild(style);
	}
	// 插入js
	function insertJS(js) {
		const script = document.createElement('script');
		script.text = 'window.addEventListener("load", (event) => {';
		script.text += js;
		script.text += '});';
		document.head.appendChild(script);
	}

	// 网页净化
	function purify_123pan() {
		const css = `
			.baidu-banner-container{display:none !important}.baidu-banner-container + div{display:none !important}.site-layout-background{padding:20px !important}.ant-table-body{max-height:calc(100vh - 220px) !important}.banner-container-pc{display:none !important}.contentBorder{height:calc(100vh - 100px) !important}
		`;
		insertStyle(css);
		log('已净化123网盘');
	}
	function purify_runoob() {
		const css = `
			.runoob-page-content ~ div.row{display:none !important}
		`;
		insertStyle(css);
		log('已净化菜鸟工具');
	}
	function purify_remeins() {
		const css = `
			.toolslove,.baseinfo,.google-auto-placed,.qpage > div.start.p0.vmxform:first-of-type,.wwads-cn.wwads-horizontal{display:none !important}
		`;
		insertStyle(css);
		log('已净化记灵工具');
	}
	function purify_ahhhhfs() {
		const js = `
			const url=window.location.href;console.log(url);const hasGV=url.includes('#google_vignette');if(hasGV){console.log('包含 #google_vignette');const dismissButton=document.getElementById('dismiss-button');if(dismissButton){console.log(dismissButton)}else{console.log('未找到 dismiss-button 元素')}}const elements=document.getElementsByClassName('.adsbygoogle.adsbygoogle-noablate');if(elements.length>0){console.log(elements);elements.remove()}else{console.log('未找到指定的元素')}
		`;
		insertJS(js);

		const css = `
			.adsbygoogle.adsbygoogle-noablate,#ri_home_slider_widget-2,.site-addswarp{display:none !important;z-index:-9999 !important}.rollbar .actions li:nth-last-child(2),.rollbar .actions li:last-child{display:none !important}
		`;
		insertStyle(css);
		log('已净化A姐分享站');
	}
	function purify_speedtest() {
		const css = `
			.speed-twoads481-wrap.speed-twoads481-wrap-index,.speed-home-content .vertisingSpace,.speed-home-content .speed-bottom-ads,#speedApp,#Video,#Video + .swiper-view,#Network,.contentMinHeight.section_wrap .container,.contentMinHeight.section_wrap .speed-twoads-wrap,footer,.sus-window,.nav-item.jiasu2_nav,.nav-item.mall_nav{display:none !important}.pingContainer .tool-content-left,.pingContainer .tool-content-right{display:none !important}.speed-twoads481-wrap,.tools .tools-content-box .right-ads,.tools .more-tools-list-index,.tools .download{display:none !important}.header .box .tab,.rank.rank-5g .ad-w300-h250-index,.rank.rank-5g .ad-w300-h250-other,#Information,#Information + .wgcard,#Information + .wgcard + a,#Equipment,#Equipment + .equipment-content{display:none !important}
		`;
		insertStyle(css);
		log('已净化测速网');
	}
})();
