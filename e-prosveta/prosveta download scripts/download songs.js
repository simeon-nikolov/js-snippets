function createLink(pageUrl, filename) {
    const tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = pageUrl;
    tempLink.setAttribute('download', filename);
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(pageUrl);
}

function downloadFile(url, filename) {
	fetch(url, {
      method: 'GET',
    })
      .then(response => response.arrayBuffer())
      .then(
        data => {
          const blob = new Blob([data]);
          createLink(window.URL.createObjectURL(blob), filename);
        },
        error => {
          console.error(error);
        }
      );
}

let baseUrl2 = 'https://web.e-prosveta.bg/publication/376/resource/eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzX2lkIjoyMzQxNCwiaWF0IjoxNTk5OTEyMjE4LCJleHAiOjE1OTk5MjMwMTgsInN1YiI6IjU3MzUwIn0.ZcTi9sJ1mHFpbeYt7uq87Acn-GaGAbhvenhFrulEbQk0TsFhfsQ1PVol854lsilU2OIFTdbT72HoaVX1MhDjVh7H6zQzbqPrI0M3Ux2PidUgevcVDTe3EsqsO-ZJgZojsSIys0FPLV2wZ5UcUl6zIN7bsS6qccC15n_fGFGkdf9cSllQIWnRparWHT61GPvbl2rCRRoQ6I6gw0z8LMw4q0Gjme4DO4wmMPcZG2JJXAgBVNCftG8d61maLuFZ33UEKZBnqqqnGEEpuoygWUHzAs7p1Ejx7t9xrE04vUYvlNNk0qsKTHpWRs1PY_RR488_Y1jslNPJmzAJ59otyd3CxgSMRzlb_Rc2TT7FYDZe-05P0jTzU2Q3beCNubv1zJTClzwfNQmG3nkUTBKQB9riAXhk_4HdclWXXpfS9W-pxmpGvk6hgJNgB8mdZQdDxS21dph28vi8_Q2FXv2L0eyN2vjHCsuFwtv3L72Pdvg0PM-El2iMt6T9Cl4y73LsTOSw73HTRO-xMMldZ9eXAwhLEWKXJgTrwwdqaRcOdSix9w2Mw1C3LjaFto8N6hP9tlhRJD_1a3UU9XsdKnRWTSp9euBLWbQVT7vuBy7W4REl4SSaYggoa3KylsZWwoPaMQhnr9t0oof_1_sU_zh9qt7UMm5kHZlXznUahd9uqOXo9Z0/';
let songIndex = 0;
let interval = setInterval(downloadSong, 5000);

function downloadSong() {
	if (songIndex >= songs.length) {
		clearInterval(interval);
		return;
	}
	
	const { filename, title } = songs[songIndex];
	const url = baseUrl2 + filename;
	downloadFile(url, filename);
	
	songIndex++;
}