<template>
    <!-- Navbar Start -->
    <div class="container-fluid px-0 wow fadeIn sticky-top" data-wow-delay="0.1s" style="background: linear-gradient(90deg, #004D7A 0%, #051311 100%); z-index: 1020;">
        <div class="nav-bar">
            <nav class="navbar navbar-expand-lg bg-primary navbar-dark py-lg-0">
                <div class="d-flex d-lg-none w-100 align-items-center justify-content-between px-3 py-2">
                    <h4 class="m-0 text-white">Menu</h4>
                    <button type="button" class="navbar-toggler border-0 p-1" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-expanded="false">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse px-4" id="navbarCollapse">
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
                    <div class="d-none d-lg-flex ms-auto">
                        <a class="btn btn-dark ms-2 fw-bold" href="/contact-us" style="padding: 10px 20px;">Get Assessment</a>
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
