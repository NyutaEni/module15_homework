document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn');
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    let isIcon1 = true;

    button.addEventListener('click', function() {
        if (isIcon1) {
            icon1.style.display = 'none';
            icon2.style.display = 'inline';
            isIcon1 = false;
        } else {
            icon1.style.display = 'inline';
            icon2.style.display = 'none';
            isIcon1 = true;
        }
    });
});
