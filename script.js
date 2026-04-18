document.addEventListener('DOMContentLoaded', () => {
    // Color selector functionality
    const colorBtns = document.querySelectorAll('.color-btn');
    const mainImg = document.getElementById('currentColorImg');

    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            colorBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');
            
            // Apply a slight scale down and fade out effect
            mainImg.style.transform = 'scale(0.95)';
            mainImg.style.opacity = '0';
            
            setTimeout(() => {
                // Change image source based on data attribute
                const colorNum = btn.getAttribute('data-color');
                mainImg.src = `./컬러 0${colorNum}.png`;
                
                // Scale back up and fade in
                mainImg.style.transform = 'scale(1)';
                mainImg.style.opacity = '1';
            }, 300);
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = '0 4px 15px -1px rgba(0, 0, 0, 0.05)';
            navbar.style.padding = '1rem 5%';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.85)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1.2rem 5%';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
