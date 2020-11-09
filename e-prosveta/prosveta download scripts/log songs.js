let songs = [];
console.logs.forEach(log => {
	if (log[0] === 'get::data') {
		const resources = log[1]?.resources;
		resources?.forEach(resource => {
			const song = {
				filename: resource?.resourceData?.filename,
				title: resource?.title
			};
			songs.push(song);
		});
	}
});