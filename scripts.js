document.addEventListener('mousemove', function(e) {
    const topBar = document.querySelector('.top-bar');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Chrome shifting effect for the top bar
    const shiftX = (x * 100) - 50; // -50 to +50 range for more effect
    const shiftY = (y * 100) - 50;

    topBar.style.backgroundPosition = `${shiftX}% ${shiftY}%`;
});
