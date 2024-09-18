document.addEventListener('DOMContentLoaded', function() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown visibility on click
    dropdownMenu.addEventListener('click', function() {
        const isVisible = dropdownContent.style.display === 'block';
        dropdownContent.style.display = isVisible ? 'none' : 'block';
    });

    // Close the dropdown if the user clicks outside of it
    document.addEventListener('click', function(event) {
        if (!dropdownMenu.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});
