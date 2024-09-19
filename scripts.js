document.querySelector('.dropdown-menu').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    
    // Toggle dropdown visibility
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});