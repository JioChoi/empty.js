function isEmpty(str) {
	return str.match(/(^[\s\u0020\u3000\u200B\u115F\u1160\u3164\uFFA0\u2800\u00A0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u205F\u3000\u1680\u202F\u180E\u200C\u200D\u2060\uFEFF\u]+$|^$)/) != null;
}