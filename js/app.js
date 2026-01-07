// 長野県空き家ポータル - Main Application

// State
let currentPage = 'home';
let currentParam = null;

// Router
function navigateTo(page, param = null) {
    // Destroy any existing map
    destroyMap();

    currentPage = page;
    currentParam = param;

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Render page
    switch (page) {
        case 'home':
            renderHomePage();
            break;
        case 'list':
            renderPropertyListPage();
            break;
        case 'detail':
            renderPropertyDetailPage(param);
            break;
        case 'regions':
            renderRegionsPage(param);
            break;
        case 'about':
            renderAboutPage();
            break;
        default:
            renderHomePage();
    }

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
}

// Initialize navigation
function initNavigation() {
    // Desktop nav links
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateTo(page);
        });
    });

    // Mobile menu button
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            toggleMobileMenu();
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Mobile menu
function toggleMobileMenu() {
    let mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenu) {
        // Create mobile menu
        mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.className = 'mobile-menu';
        mobileMenu.innerHTML = `
            <button class="mobile-menu-close" onclick="toggleMobileMenu()">
                <i data-lucide="x"></i>
            </button>
            <nav class="mobile-menu-nav">
                <a href="#" class="mobile-nav-link ${currentPage === 'home' ? 'active' : ''}" data-page="home">トップ</a>
                <a href="#" class="mobile-nav-link ${currentPage === 'list' ? 'active' : ''}" data-page="list">空き家一覧</a>
                <a href="#" class="mobile-nav-link ${currentPage === 'regions' ? 'active' : ''}" data-page="regions">エリア紹介</a>
                <a href="#" class="mobile-nav-link ${currentPage === 'about' ? 'active' : ''}" data-page="about">ウェルビーイングとは</a>
            </nav>
        `;
        document.body.appendChild(mobileMenu);

        // Add event listeners
        mobileMenu.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo(link.dataset.page);
            });
        });

        lucide.createIcons();

        // Show with animation
        requestAnimationFrame(() => {
            mobileMenu.classList.add('active');
        });
    } else {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            setTimeout(() => {
                mobileMenu.remove();
            }, 300);
        } else {
            mobileMenu.classList.add('active');
        }
    }
}

// Initialize app
function initApp() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize navigation
    initNavigation();

    // Render initial page
    navigateTo('home');

    console.log('長野県空き家ポータル initialized');
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Export for debugging
window.navigateTo = navigateTo;
window.toggleMobileMenu = toggleMobileMenu;
