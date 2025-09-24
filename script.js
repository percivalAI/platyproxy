const form = document.getElementById('proxyForm');
const iframe = document.getElementById('proxyFrame');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let url = document.getElementById('urlInput').value;

    // Ensure the URL has https:// at the start
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    // Your LunarSync backend URL (with trailing slash!)
    const backendURL = 'https://YOUR-LUNARSYNC-BACKEND/';

    // Load the site inside the iframe
    iframe.src = backendURL + encodeURIComponent(url) + '/';
});
