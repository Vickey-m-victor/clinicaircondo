<template>
    <!-- Navbar Start -->
    <div class="container-fluid px-0 sticky-top app-navbar-wrap">
        <div class="nav-bar">
            <nav class="navbar navbar-expand-lg bg-primary navbar-dark py-2 py-lg-0">
                <a href="/" class="navbar-brand d-lg-none text-white fw-bold ms-2">Clinicair</a>
                <button
                    type="button"
                    class="navbar-toggler border-0 ms-auto me-2"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse px-2 px-lg-4" id="navbarCollapse">
                    <div class="navbar-nav me-auto">
                        <a href="/" class="nav-item nav-link active text-white fw-bold">Home</a>
                        
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle text-white fw-bold" data-bs-toggle="dropdown">Our Services</a>
                            <div class="dropdown-menu bg-light m-0">
                                <a href="/fan-coil-heat-pump-maintenance" class="dropdown-item">Fan Coil & Heat Pump</a>
                                <a href="/dryer-washroom-exhaust-systems" class="dropdown-item">Dryer & Washroom Exhaust</a>
                                <a href="/ventilation-system-cleaning-balancing" class="dropdown-item">Ventilation Cleaning</a>
                            </div>
                        </div>

                        <a href="/exclusive-total-reporting" class="nav-item nav-link text-white fw-bold">Total Reporting</a>
                        <a href="/the-clinicair-condo-ventilation-team" class="nav-item nav-link text-white fw-bold">Our Team</a>
                        <a href="/contact-us" class="nav-item nav-link text-white fw-bold">Contact Us</a>
                    </div>
                    <div class="d-flex ms-lg-auto mt-3 mt-lg-0">
                        <a class="btn btn-dark fw-bold nav-cta-btn" href="/contact-us">Get Assessment</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar End -->
</template>

<style scoped>
.app-navbar-wrap {
    background: linear-gradient(90deg, #004d7a 0%, #051311 100%);
    top: 0;
    z-index: 1030;
}

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

.nav-cta-btn {
    padding: 10px 20px;
}

@media (max-width: 991.98px) {
    .navbar-collapse {
        padding-bottom: 1rem;
    }

    .navbar-nav {
        width: 100%;
    }

    .navbar .navbar-nav .nav-link {
        margin-right: 0 !important;
        padding: 0.65rem 0 !important;
    }

    .nav-cta-btn {
        width: 100%;
        text-align: center;
    }

    .dropdown-menu {
        border: 0;
        box-shadow: none;
        padding: 0.25rem 0 0.4rem;
        background: #ffffff !important;
        width: 100%;
    }

    .dropdown-item {
        color: var(--bs-dark);
        white-space: normal;
        line-height: 1.3;
    }

    .dropdown-item:hover {
        color: var(--bs-primary) !important;
        background: #f0f7ff;
    }
}
</style>
