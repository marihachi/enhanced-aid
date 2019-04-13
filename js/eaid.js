/**
 * @param {number} time
 * @param {number} randomLength
 * @param {() => number} randFunc
 * @returns {string}
*/
function generateEAID(time, randomLength, randFunc) {
	const timestamp = time.toString(36).padStart(9, '0');

	let random = '';
	for (let i = 0; i < randomLength; i++) {
		random += Math.floor(randFunc() * 36).toString(36);
	}

	return timestamp + random;
}
/**
 * @returns {string}
*/
function generateEAID12() {
	return generateEAID(Date.now(), 3, Math.random);
}
/**
 * @returns {string}
*/
function generateEAID16() {
	return generateEAID(Date.now(), 7, Math.random);
}
/**
 * @returns {string}
*/
function generateEAID24() {
	return generateEAID(Date.now(), 15, Math.random);
}
/**
 * @returns {string}
*/
function generateEAID32() {
	return generateEAID(Date.now(), 23, Math.random);
}
