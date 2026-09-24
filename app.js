// CampusLink Application Logic & State

let state = {
    user: {
        name: "Brian Oteno",
        phone: "0712345678",
        package: "Premium",
        campus: "University of Nairobi",
        refCode: "COM12345",
        totalEarnings: 8450,
        availableBalance: 6200
    },
    selectedPackage: null
};

// Switch Active View
function switchView(viewName) {
    const views = ['home', 'dashboard', 'tasks', 'leaderboard'];

    views.forEach(v => {
        const el = document.getElementById(`view-${v}`);
        if (el) {
            if (v === viewName) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }

        // Highlight active bottom nav button
        const navBtn = document.getElementById(`nav-btn-${v}`);
        if (navBtn) {
            if (v === viewName) {
                navBtn.classList.add('active');
            } else {
                navBtn.classList.remove('active');
            }
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll To ID
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

// Toggle Mobile Navigation Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Modal Controllers
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// Package Selection
function selectPackage(name, price) {
    state.selectedPackage = { name, price };
    document.getElementById('pkgModalName').innerText = name;
    document.getElementById('pkgModalPrice').innerText = `KSh ${price}`;
    openModal('paymentModal');
}

// Copy to Clipboard
function copyToClipboard(elementId) {
    const input = document.getElementById(elementId);
    if (input) {
        input.select();
        navigator.clipboard.writeText(input.value);
        showToast("Copied to clipboard! 📋");
    }
}

// Share to WhatsApp
function shareOnWhatsApp() {
    const text = `Join CampusLink, refer comrades, and earn together! Register here: https://campuslink.co/register?ref=${state.user.refCode}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// Download Flyer Mock
function downloadFlyer(flyerName) {
    showToast(`Downloading ${flyerName} graphic... 📲`);
}

// Toast Notifications
function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${message}`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Form Submission Handlers
function handleRegister(e) {
    e.preventDefault();
    closeModal('registerModal');
    showToast("Account created successfully! Redirecting to Dashboard...");
    setTimeout(() => {
        switchView('dashboard');
    }, 1000);
}

function handleLogin(e) {
    e.preventDefault();
    closeModal('loginModal');
    showToast("Welcome back! Redirecting to Dashboard...");
    setTimeout(() => {
        switchView('dashboard');
    }, 1000);
}

function handlePaymentSubmit(e) {
    e.preventDefault();
    closeModal('paymentModal');
    showToast("M-Pesa STK push prompt sent to your phone! Complete PIN entry to activate.");
}

function handleProofSubmit(e) {
    e.preventDefault();
    closeModal('submitProofModal');
    showToast("Screenshot proof submitted! Under review by admin ⏳");

    // Add row to table
    const tableBody = document.getElementById('submissionsTableBody');
    if (tableBody) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td class="p-3 font-bold">Uploaded Status Proof</td>
            <td class="p-3">Reported Views</td>
            <td class="p-3 font-bold text-amber-400">Pending</td>
            <td class="p-3"><span class="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold">UNDER REVIEW ⏳</span></td>
            <td class="p-3 text-xs text-slate-400">Just Now</td>
        `;
        tableBody.prepend(newRow);
    }
}

function handleWithdraw(e) {
    e.preventDefault();
    closeModal('withdrawModal');
    showToast("Withdrawal request submitted! M-Pesa transfer processing...");
}
