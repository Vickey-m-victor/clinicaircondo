const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');

const templateHero = (title, breadcrumb) => `
    <!-- Page Header Start -->
    <div class="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center py-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">${title}</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">${breadcrumb}</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Page Header End -->`;

const templateContent = (title, desc, items, img = "/img/about.jpg") => `
    <div class="container-fluid py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
                    <div class="about-img">
                        <img class="img-fluid w-100" src="${img}" alt="Image">
                    </div>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-6 mb-4 wow fadeIn" data-wow-delay="0.2s">${title}</h1>
                    <p class="mb-4 wow fadeIn" data-wow-delay="0.3s">${desc}</p>
                    <div class="row g-4 pt-2">
                        <div class="col-sm-12 wow fadeIn" data-wow-delay="0.4s">
                            <div class="h-100">
                                <h3>Our Process</h3>
                                ${items.map(item => `<p class="text-dark"><i class="fa fa-check text-primary me-2"></i><strong>${item.split(':')[0]}:</strong>${item.split(':').slice(1).join(':') || item}</p>`).join('\n')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

const pages = [
  {
    file: 'fan-coil-heat-pump-maintenance.vue',
    title: 'Fan Coil & Heat Pump Maintenance',
    desc: 'Clinicair Fan Coil Semi-Annual Maintenance is based on the accepted ventilation industry’s manufacturers’ recommendations and specifications. To properly maintain the units in the best possible state, we will inspect and clean units every 6 MONTHS to create maximum energy efficiency, thereby reducing costs, maximizing air ventilation, and minimizing the risks of floods.',
    items: [
      'EXCLUSIVE TOTAL REPORTING: Suite-by-suite report with before/after photos and fault identification.',
      'SANITIZE SYSTEM: Spray the entire system with Benefect Decon 30.',
      'CHANGE AIR FILTER: Supply and install a new air filter.',
      'CLEAN CONDENSATE DRAIN PAN & HOSE: Vacuum drain pan, remove scale, check for leaks.',
      'CLEAN COILS: Vacuum clean the coils to maintain optimal performance.',
      'INSPECT COIL TUBING: Inspect all connections and report faults.',
      'INSPECT & TEST VALVES & THERMOSTATS: Full operational testing.'
    ]
  },
  {
    file: 'dryer-washroom-exhaust-systems.vue',
    title: 'Dryer & Washroom Exhaust Systems',
    desc: 'Clinicair Condo Ventilation Dryer Vent Maintenance is based on the accepted ventilation industry’s manufacturers’ recommendations and specifications. To properly maintain the units in the best possible state we will inspect and clean units to ensure maximum air ventilation and energy efficiency, reduced costs and minimizing fire risks.',
    items: [
      'EXCLUSIVE TOTAL REPORTING: Digital suite-by-suite tracking and reporting.',
      'DRYER VENT: Clean the vent from the dryer to the lint-trap using high-pressure air snakes.',
      'LINT TRAP: Thoroughly vacuum the screen and the body of the unit.',
      'BOOSTER FAN: Drop the booster fan and thoroughly clean the housing and ductwork.',
      'WASHROOM FAN & DUCTWORK: Clean the fan with high-pressure air and vacuums.'
    ]
  },
  {
    file: 'ventilation-system-cleaning-balancing.vue',
    title: 'Ventilation System Cleaning & Balancing',
    desc: 'Ventilation is a key component of excellent air quality. Increasing ventilation rates in condos allows for more fresh air into owner suites and exhausts more contaminated air outside. The fresh air system should be cleaned every 5 years to maintain clean air and proper ventilation rates throughout the building.',
    items: [
      'Ductwork and registers thoroughly cleaned on a regular basis.',
      'Balancing air flow for lower levels to ensure fair share of fresh air.',
      'Minimizing the spread of contaminants across shared spaces.'
    ]
  },
  {
    file: 'exclusive-total-reporting.vue',
    title: 'Exclusive Total Reporting',
    desc: 'Using the latest in digital reporting technology, Clinicair Condo Ventilation will provide the Property Management with a daily comprehensive suite-by-suite report. Reports include details of work performed, before and after photos, crucial fault identification, and relevant comments.',
    items: [
      'Daily comprehensive suite-by-suite breakdown.',
      'Before and after photos attached to reports.',
      'Identification of structural or mechanical faults.'
    ]
  }
];

pages.forEach(p => {
  const content = `<template>
  <div>
${templateHero(p.title, p.title)}
${templateContent(p.title, p.desc, p.items)}
  </div>
</template>
`;
  fs.writeFileSync(path.join(pagesDir, p.file), content);
  console.log('Updated ' + p.file);
});

// Update Contact Us page
const contactContent = `<template>
  <div>
${templateHero('Contact Us', 'Contact Us')}
    <div class="container-fluid py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style="max-width: 500px;">
                <p class="section-title bg-white text-center text-primary px-3">Contact Us</p>
                <h1 class="display-6 mb-5">If You Have Any Query, Please Contact Us</h1>
            </div>
            <div class="row g-5">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <h3 class="mb-4">Get In Touch</h3>
                    <p class="mb-4">Clinicair Condo Ventilation has decades of experience in condo HVAC duct cleaning. Our unique small, lightweight, portable and powerful equipment will effectively clean HVAC ducts and improve in-suite ventilation and air quality.</p>
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-square bg-primary me-3">
                            <i class="fa fa-envelope-open text-white"></i>
                        </div>
                        <span>info@clinicaircondo.com</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>`;
fs.writeFileSync(path.join(pagesDir, 'contact-us.vue'), contactContent);
console.log('Updated contact-us.vue');
