document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar'); // Your existing sidebar
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Dark mode toggle
    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = this.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
    
    // Language selector functionality
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', function() {
        console.log('Language changed to:', this.value);
        // Add your language change logic here
    });
});

// sidebar-toggle.js

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('collapsed');
        });
    }
});



// for sidebar close and content adjustement milk collection
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const body = document.body;

    menuToggle.addEventListener('click', () => {
        body.classList.toggle('sidebar-hidden');
    });
});





// Set active module in sidebar based on current page
function setActiveModule() {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop();
    
    // Remove active class from all navigation items
    const navItems = document.querySelectorAll('#sidebar li');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to the current module
    if (currentPage === 'dashb.html' || currentPage === '' || currentPage === 'index.html') {
        const dashboardNav = document.querySelector('.dashboard-nav');
        if (dashboardNav) dashboardNav.classList.add('active');
    } else if (currentPage === 'farmer.html') {
        const farmerNav = document.querySelector('.farmer-nav');
        if (farmerNav) farmerNav.classList.add('active');
    } else if (currentPage === 'collection.html') {
        const collectionNav = document.querySelector('.collection-nav');
        if (collectionNav) collectionNav.classList.add('active');
    } else if (currentPage === 'chilling.html') {
        const chillingNav = document.querySelector('.chilling-nav');
        if (chillingNav) chillingNav.classList.add('active');
    } else if (currentPage === 'plant.html') {
        const processingNav = document.querySelector('.processing-nav');
        if (processingNav) processingNav.classList.add('active');
    } else if (currentPage === 'qualitydemo.html') {
        const qualityNav = document.querySelector('.quality-nav');
        if (qualityNav) qualityNav.classList.add('active');
    } else if (currentPage === 'product.html') {
        const inventoryNav = document.querySelector('.inventory-nav');
        if (inventoryNav) inventoryNav.classList.add('active');
    } else if (currentPage === 'distubtion.html') {
        const logisticsNav = document.querySelector('.logistics-nav');
        if (logisticsNav) logisticsNav.classList.add('active');
    } else if (currentPage === 'crmdemo.html') {
        const crmNav = document.querySelector('.crm-nav');
        if (crmNav) crmNav.classList.add('active');
    }
}

// Call the function to set active module
setActiveModule();

// Dark mode toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Language selector functionality
const languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', function() {
    console.log('Language changed to:', this.value);
    // Add your language change logic here
});