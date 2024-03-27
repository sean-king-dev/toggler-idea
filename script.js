document.addEventListener('DOMContentLoaded', function() {
    const dropper = document.getElementById('angle-toggler');
    const fakeSelect = document.getElementById('fake_enquiry_type');
    const dropdown = document.querySelector('.dropdown');
    const angleDown = dropper.querySelector('.fa-angle-down');
    const angleUp = dropper.querySelector('.fa-angle-up');
    const select = document.querySelector('.hidden.initial');

    // Function to toggle dropdown and fake select's active class
    function toggleDropdown() {
        // Toggle dropdown visibility
        dropdown.style.overflowY = dropdown.style.overflowY === 'hidden' ? 'auto' : 'hidden';
        dropdown.style.height = dropdown.style.height === '0px' ? '0px' : '0px';

        // Toggle angle icon visibility
        angleDown.style.display = angleDown.style.display === 'none' ? 'inline-block' : 'none';
        angleUp.style.display = angleUp.style.display === 'inline-block' ? 'none' : 'inline-block';

        // Toggle active class on fake select based on dropdown visibility
        if (dropdown.style.height === 'auto') {
            fakeSelect.classList.add('active');
        } else {
            fakeSelect.classList.remove('active');
        }
    }

    // Event listener for dropper click
    dropper.addEventListener('click', toggleDropdown);

    // Event listener for select click
    select.addEventListener('click', toggleDropdown);
});