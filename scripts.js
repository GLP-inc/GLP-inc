document.addEventListener('mousemove', function(e) {
    const title = document.querySelector('.website-title');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    title.style.textShadow = `${x * 50}px ${y * 50}px 30px #93d5ff`;
});
