let oldFetch = fetch;

window.fetch = function () {
	let url = arguments[0];
	let body = arguments[1];
	
	let newUrl = url.replace('domain1.com', 'domain2.com');
	console.log(`${url} -> ${newUrl}`);
	
	return oldFetch(newUrl, body);
};