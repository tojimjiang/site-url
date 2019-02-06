$(document).ready( function() {
	let copyText = document.getElementByID("copyText");
	copyText.style.display = "none";
});

function copyTo() {
	copyText.select();
	document.execCommand('copy');
}