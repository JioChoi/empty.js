function isEmpty(str) {
	return str.match(/(^[\s\u0020\u3000\u200B\u115F\u1160\u3164\uFFA0\u2800]+$|^$)/) != null;
}