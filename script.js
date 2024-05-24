window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('mouseover', function() {
        link.style.color = '#FFD700';
    });
    link.addEventListener('mouseout', function() {
        link.style.color = 'white';
    });
});
