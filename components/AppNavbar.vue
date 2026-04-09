<template>
    <!-- Navbar Start -->
    <div class="container-fluid px-0 sticky-top" style="background: linear-gradient(90deg, #004D7A 0%, #051311 100%); z-index: 1020;">
        <div class="nav-bar">
            <nav class="navbar navbar-expand-lg bg-primary navbar-dark py-lg-0 px-3 px-lg-4">
                <h4 class="d-lg-none m-0 text-white">Menu</h4>
                <button type="button" class="navbar-toggler border-0 p-1 d-lg-none" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav me-auto">
                        <NuxtLink to="/" class="nav-item nav-link active text-white fw-bold">Home</NuxtLink>
                        
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle text-white fw-bold" data-bs-toggle="dropdown">Our Services</a>
                            <div class="dropdown-menu bg-light m-0">
                                <NuxtLink to="/fan-coil-heat-pump-maintenance" class="dropdown-item">Fan Coil & Heat Pump</NuxtLink>
                                <NuxtLink to="/dryer-washroom-exhaust-systems" class="dropdown-item">Dryer & Washroom Exhaust</NuxtLink>
                                <NuxtLink to="/ventilation-system-cleaning-balancing" class="dropdown-item">Ventilation Cleaning</NuxtLink>
                            </div>
                        </div>

                        <NuxtLink to="/exclusive-total-reporting" class="nav-item nav-link text-white fw-bold">Total Reporting</NuxtLink>
                        <NuxtLink to="/the-clinicair-condo-ventilation-team" class="nav-item nav-link text-white fw-bold">Our Team</NuxtLink>
                        <NuxtLink to="/contact-us" class="nav-item nav-link text-white fw-bold">Contact Us</NuxtLink>
                    </div>
                    <div class="d-none d-lg-flex ms-auto">
                        <NuxtLink class="btn btn-dark ms-2 fw-bold" to="/contact-us" style="padding: 10px 20px;">Get Assessment</NuxtLink>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar End -->
</template>

<style scoped>
.nav-link:hover {
    color: #7dd3ef !important;
}

/* Desktop: active link = white + bottom underline */
.nav-link.active {
    color: #ffffff !important;
    position: relative;
}

@media (min-width: 992px) {
    .nav-link.active::after {
        content: "";
        position: absolute;
        bottom: 12px;
        left: 0;
        right: 0;
        height: 3px;
        background-color: #ffffff;
        border-radius: 2px;
    }
}

/* Mobile: active link = white + left border accent instead of underline */
@media (max-width: 991.98px) {
    .nav-link.active {
        border-left: 4px solid #ffffff;
        padding-left: 10px !important;
    }
    .nav-link.active::after {
        display: none;
    }
}

.dropdown-item:hover {
    background: #f0f7ff;
    color: var(--bs-primary) !important;
}
</style>
