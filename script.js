const form = document.getElementById('proxyForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const url = document.getElementById('urlInput').value;
    
    // ← REPLACE THIS with your LunarSync backend URL
    const backendURL = 'https://YOUR-LUNARSYNC-BACKEND/';

    window.location.href = backendURL + encodeURIComponent(url);
});
