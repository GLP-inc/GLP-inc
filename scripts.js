document.addEventListener('mousemove', function(e) {
    const title = document.querySelector('.website-title');
    const topBar = document.querySelector('.top-bar');

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Chrome shifting effect for top bar
    topBar.style.background = `linear-gradient(${145 + (x * 40)}deg, #b1bcc6, #7f8c99)`;

    // Shimmer effect for the title
    title.style.textShadow = `${x * 50}px ${y * 50}px 30px #93d5ff`;
});
