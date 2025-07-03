
        // Get the current year for the footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Mobile menu functionality
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        // Renamed closeMobileMenu to closeMobileMenuElement to avoid conflict with the function
        const closeMobileMenuElement = document.getElementById('close-mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        function openMobileMenu() {
            mobileMenu.classList.add('open');
            mobileMenuOverlay.style.display = 'block';
        }

        function closeMobileMenu() {
            mobileMenu.classList.remove('open');
            mobileMenuOverlay.style.display = 'none';
        }

        mobileMenuButton.addEventListener('click', openMobileMenu);
        // Use the renamed element variable here
        closeMobileMenuElement.addEventListener('click', closeMobileMenu);
        mobileMenuOverlay.addEventListener('click', closeMobileMenu); // Close when clicking outside

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (mobileMenu.classList.contains('open')) {
                    closeMobileMenu();
                }
            });
        });
