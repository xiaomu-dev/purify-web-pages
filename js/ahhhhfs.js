const url = window.location.href;
console.log(url);
const hasGV = url.includes('#google_vignette');
if (hasGV) {
	console.log('包含 #google_vignette');
	const dismissButton = document.getElementById('dismiss-button');
	if (dismissButton) {
		console.log(dismissButton);
	} else {
		console.log('未找到 dismiss-button 元素');
	}
}
const elements = document.getElementsByClassName('.adsbygoogle.adsbygoogle-noablate');
if (elements.length > 0) {
	console.log(elements);
	elements.remove();
} else {
	console.log('未找到指定的元素');
}
