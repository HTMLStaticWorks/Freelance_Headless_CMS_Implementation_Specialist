/* 
    Freelance Headless CMS Implementation Specialist
    Core UI Logic - main.js
*/

document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.75rem 0';
            navbar.style.background = 'var(--glass)';
        } else {
            navbar.style.padding = '1.25rem 0';
        }
    });



    // Form Handling (UI Only)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted successfully (Demo only)');
        });
    });

    // RTL Toggle
    const rtlToggle = document.getElementById('rtl-toggle');
    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            if (isRTL) {
                document.documentElement.removeAttribute('dir');
                rtlToggle.innerText = 'RTL';
            } else {
                document.documentElement.setAttribute('dir', 'rtl');
                rtlToggle.innerText = 'LTR';
            }
        });
    }

    // Mobile Menu & Actions Relocation
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');
    const navbarContainer = document.querySelector('.navbar .container');

    if (navbarContainer && navLinks && navActions) {
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileBtn) {
            // Toggle menu
            mobileBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                const icon = mobileBtn.querySelector('i');
                if(navLinks.classList.contains('active')){
                    icon.className = 'ri-close-line';
                } else {
                    icon.className = 'ri-menu-line';
                }
            });

            // Relocate actions based on viewport
            const relocateActions = () => {
                if (window.innerWidth <= 1024) {
                    if (!navLinks.contains(navActions)) {
                        // Move into menu
                        navActions.classList.add('mt-2', 'w-100', 'justify-content-center');
                        navLinks.appendChild(navActions);
                    }
                } else {
                    if (navLinks.contains(navActions)) {
                        // Move back to header
                        navActions.classList.remove('mt-2', 'w-100', 'justify-content-center');
                        navbarContainer.insertBefore(navActions, mobileBtn);
                        navLinks.classList.remove('active');
                        mobileBtn.querySelector('i').className = 'ri-menu-line';
                    }
                }
            };

            window.addEventListener('resize', relocateActions);
            relocateActions(); // Initial check

            // Mobile Dropdown Toggle
            const dropdownLinks = navLinks.querySelectorAll('.nav-dropdown > a');
            dropdownLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 1024) {
                        e.preventDefault();
                        e.stopPropagation();
                        const dropdownMenu = link.nextElementSibling;
                        if (dropdownMenu) {
                            const isVisible = dropdownMenu.style.display === 'block';
                            // Close other dropdowns
                            navLinks.querySelectorAll('.dropdown-menu').forEach(menu => {
                                menu.style.display = 'none';
                            });
                            dropdownMenu.style.display = isVisible ? 'none' : 'block';
                        }
                    }
                });
            });
        }
    }
});

