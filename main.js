document.addEventListener('DOMContentLoaded', () => {
    // Book data for search and modal
    const books = [
        {
            id: 1,
            title: "Tech - Book",
            description: "Dive into the latest tech trends and innovations.",
            content: "This book covers emerging technologies, including cloud computing, IoT, and blockchain, with practical examples to stay ahead in the tech world."
        },
        {
            id: 2,
            title: "Programming Languages",
            description: "Master the art of coding with this comprehensive guide.",
            content: "Learn the fundamentals of programming languages like C++, Java, and Python, with hands-on projects to build your skills."
        },
        {
            id: 3,
            title: "Artificial Intelligence",
            description: "Explore the future of AI and its applications.",
            content: "Understand machine learning, neural networks, and AI ethics through real-world case studies and beginner-friendly explanations."
        },
        {
            id: 4,
            title: "Java",
            description: "Learn Java programming from basics to advanced.",
            content: "Master Java with topics like object-oriented programming, JavaFX, and Spring framework, including coding exercises."
        },
        {
            id: 5,
            title: "Python",
            description: "Discover Python's power for web, AI, and more.",
            content: "Get started with Python for web development, data science, and automation, with practical projects like building a web scraper."
        },
        {
            id: 6,
            title: "PHP",
            description: "Build dynamic websites with PHP.",
            content: "Create dynamic web applications using PHP, covering databases, Laravel, and secure coding practices."
        },
        {
            id: 7,
            title: "Cyber Security",
            description: "Protect digital assets with cyber security techniques.",
            content: "This premium content is unavailable for free reading. Subscribe to access advanced cyber security strategies."
        },
        {
            id: 8,
            title: "Hacking & Cracking",
            description: "Understand ethical hacking and security testing.",
            content: "This premium content is unavailable for free reading. Subscribe to learn ethical hacking techniques."
        },
        {
            id: 9,
            title: "Crypto & Forex-Trading",
            description: "Navigate the world of crypto and forex markets.",
            content: "This premium content is unavailable for free reading. Subscribe to master crypto and forex trading strategies."
        }
    ];

    // Hamburger Menu Toggle
    const menuIcon = document.getElementById('menuIcon');
    const nav = document.querySelector('nav');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('closeIcon');

    if (menuIcon && nav && hamburgerIcon && closeIcon) {
        menuIcon.addEventListener('click', () => {
            nav.classList.toggle('active');
            const isActive = nav.classList.contains('active');
            hamburgerIcon.style.display = isActive ? 'none' : 'block';
            closeIcon.style.display = isActive ? 'block' : 'none';
            menuIcon.setAttribute('aria-expanded', isActive);
        });
    } else {
        console.warn('Navigation elements not found. Ensure #menuIcon, nav, #hamburgerIcon, and #closeIcon exist in the DOM.');
    }

    // Dark Mode Toggle with localStorage
    const darkModeButton = document.querySelector('.dark-mode');
    const applyDarkMode = (isDark) => {
        // Use both .dark and .dark-theme for compatibility
        document.body.classList.toggle('dark', isDark);
        document.body.classList.toggle('dark-theme', isDark);
        if (darkModeButton) {
            darkModeButton.querySelector('i').className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    };

    // Check localStorage for dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyDarkMode(true);
    }

    if (darkModeButton) {
        darkModeButton.addEventListener('click', () => {
            const isDark = !document.body.classList.contains('dark');
            applyDarkMode(isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    } else {
        console.warn('Dark mode button not found. Ensure .dark-mode exists in the DOM.');
    }

    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    const cards = document.querySelectorAll('.card');

    if (searchInput && cards.length > 0) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            cards.forEach(card => {
                const title = card.querySelector('p')?.textContent.toLowerCase() || '';
                card.classList.toggle('hidden', !title.includes(query));
            });
        });
    } else {
        console.warn('Search input or cards not found. Ensure .search-input and .card elements exist in the DOM.');
    }

    // Modal for Book Details
    const modal = document.getElementById('bookModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalContent = document.getElementById('modalContent');
    const modalButton = document.getElementById('modalButton');
    const closeModal = document.querySelector('.close-modal');

    if (modal && modalTitle && modalDescription && modalContent && modalButton && closeModal) {
        cards.forEach(card => {
            const readButton = card.querySelector('.free');
            if (readButton) {
                readButton.addEventListener('click', () => {
                    const bookId = parseInt(card.dataset.id);
                    const book = books.find(b => b.id === bookId);
                    if (book) {
                        modalTitle.textContent = book.title;
                        modalDescription.textContent = book.description;
                        modalContent.textContent = book.content;
                        modalButton.textContent = 'Continue Reading';
                        modal.style.display = 'flex';
                    }
                });
            }
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    } else {
        console.warn('Modal elements not found. Ensure #bookModal, #modalTitle, #modalDescription, #modalContent, #modalButton, and .close-modal exist in the DOM.');
    }

    // ScrollReveal Animations
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.scroll-reveal', {
            distance: '50px',
            duration: 1000,
            origin: 'bottom',
            delay: 200,
            interval: 100
        });
    } else {
        console.warn('ScrollReveal library not loaded.');
    }
});