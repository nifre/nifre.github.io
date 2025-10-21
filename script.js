document.addEventListener('DOMContentLoaded', function() {
    const privacyBanner = document.getElementById('privacyBanner');
    privacyBanner.style.display = 'flex';
    
    const acceptCookiesButton = document.getElementById('acceptCookies');
    acceptCookiesButton.addEventListener('click', function() {
        privacyBanner.style.display = 'none';
        alert('Grazie per aver accettato i cookie!');
    });
});