"use strict";
var _PageHeight = document.documentElement.clientHeight;
var _LoadingHtml = '<div class="loading" style="height:'+ _PageHeight+ 'px;"><div class="spinner"></div></div>';
document.write(_LoadingHtml);

document.onreadystatechange = function () {
	if (document.readyState === "loading") {
		console.log('loading')
	}
	if (document.readyState === "interactive") {
		console.log('interactive')
	}
	if (document.readyState === "complete") {
		console.log('complete');
		document.getElementsByClassName('loading')[0].classList.add('remove-loading');
	}

}
console.log(document.readyState)