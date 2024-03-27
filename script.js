document.addEventListener('DOMContentLoaded', function() {
    const dropper = document.getElementById('angke-toggler');
    const dropdown = document.querySelector('.dopdown');
    const angleDown = dropper.querySelector('.fa-angle-down');
    const angleUp = dropper.querySelector('.fa-angle-up');

    dropper.addEventListener('click', function() {
        dropdown.style.overflowY === 'hidden' ?  'auto' : 'hidden';
        dropdown.style.height = dropdown.style.height === '0px' ? 'auto' : '0px';

        angleDown.style.display = angleDown.style.display === 'none' ? 'inline-block' : 'none';
        angleUp.style.display = angleUp.style.display === 'none' ? 'inline-block' : 'none';
    })
})