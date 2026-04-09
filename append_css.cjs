const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'public', 'css', 'style.css');

const premiumCss = `

/*** Premium Design Overrides: Gradients & Shadows ***/

/* Dynamically glowing buttons */
.btn-primary, .btn-secondary {
    border: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary {
    background: linear-gradient(135deg, var(--bs-primary) 0%, #007bb5 100%);
}

.btn-primary:hover {
    background: linear-gradient(135deg, #007bb5 0%, var(--bs-primary) 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0, 163, 225, 0.3);
}

.btn-secondary {
    background: linear-gradient(135deg, var(--bs-secondary) 0%, #002d4a 100%);
}

.btn-secondary:hover {
    background: linear-gradient(135deg, #002d4a 0%, var(--bs-secondary) 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0, 77, 122, 0.3);
}

/* Service Card Depth & Lift */
.service-item {
    background: #ffffff;
    border-radius: 8px; /* matching var(--bs-border-radius-lg) or custom */
    padding: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.service-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    background: #FAFAFA;
}

/* Layout Softness */
.page-header {
    background: linear-gradient(rgba(0, 77, 122, 0.9), rgba(0, 77, 122, 0.9)), url(../img/bg.jpg) center center no-repeat;
}

.top-bar {
    background: linear-gradient(90deg, #004D7A 0%, #051311 100%) !important;
}
`;

fs.appendFileSync(cssPath, premiumCss);
console.log("Appended premium CSS overrides successfully.");
