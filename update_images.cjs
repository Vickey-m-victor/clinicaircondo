const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const pagesDir = path.join(__dirname, 'pages');

// 1. Update style.css
const cssPath = path.join(publicDir, 'css', 'style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent = cssContent.replace(/url\(\.\.\/img\/bg\.jpg\)/g, 'url(../img/rendering-1.jpg)');
fs.writeFileSync(cssPath, cssContent);
console.log('Updated style.css');

// 2. Update service single images
const serviceMap = {
    'fan-coil-heat-pump-maintenance.vue': '/img/pg2_rend2.png',
    'dryer-washroom-exhaust-systems.vue': '/img/pg5_rend2.png',
    'ventilation-system-cleaning-balancing.vue': '/img/pg3_rend_2.png'
};

for (const [file, img] of Object.entries(serviceMap)) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/\/img\/about\.jpg/g, img);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
}

// 3. Update Team
const teamPath = path.join(pagesDir, 'the-clinicair-condo-ventilation-team.vue');
let teamContent = fs.readFileSync(teamPath, 'utf8');
teamContent = teamContent.replace(/<img class="img-fluid mb-4" src="\/img\/team-1\.jpg" alt="">[\s\S]*?<h3>Craig/g, '<img class="img-fluid mb-4" src="/img/customer satisfaction - Craig Jobber.jpg" alt="">\n                            <h3>Craig');
teamContent = teamContent.replace(/<img class="img-fluid mb-4" src="\/img\/team-2\.jpg" alt="">[\s\S]*?<h3>Colin/g, '<img class="img-fluid mb-4" src="/img/operation - Collin Smith.jpg" alt="">\n                            <h3>Colin');
teamContent = teamContent.replace(/<img class="img-fluid mb-4" src="\/img\/team-3\.jpg" alt="">[\s\S]*?<h3>Rholson/g, '<img class="img-fluid mb-4" src="/img/Teamlead- Rholson Roberts.jpg" alt="">\n                            <h3>Rholson');
teamContent = teamContent.replace(/<img class="img-fluid mb-4" src="\/img\/team-1\.jpg" alt="">[\s\S]*?<h3>Jerrome/g, '<img class="img-fluid mb-4" src="/img/Team-lead -jeromme lozano.jpg" alt="">\n                            <h3>Jerrome');
teamContent = teamContent.replace(/<img class="img-fluid mb-4" src="\/img\/team-2\.jpg" alt="">[\s\S]*?<h3>Renato/g, '<img class="img-fluid mb-4" src="/img/Team lead - renato de camargo.jpg" alt="">\n                            <h3>Renato');
fs.writeFileSync(teamPath, teamContent);
console.log('Updated team.vue');

// 4. Rebuild Exclusive Total Reporting with the Gallery
const reportingPath = path.join(pagesDir, 'exclusive-total-reporting.vue');
let repContent = fs.readFileSync(reportingPath, 'utf8');
repContent = repContent.replace(/<img class="img-fluid w-100" src="\/img\/about\.jpg" alt="Image">/, '<img class="img-fluid w-100" src="/img/pg6_rend3-1.jpg" alt="Exclusive Total Reporting">');

const galleryHtml = `
    <!-- Reporting Gallery Start -->
    <div class="container-fluid py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style="max-width: 500px;">
                <p class="section-title bg-white text-center text-primary px-3">Visual Reporting</p>
                <h1 class="display-6 mb-5">Examples of Our Suite-by-Suite Reports</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                    <img class="img-fluid rounded w-100" src="/img/pg6_rend2_1.jpg" alt="Fan coil before with dirty filter">
                    <h5 class="mt-3 text-center">Before - Dirty Filter</h5>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                    <img class="img-fluid rounded w-100" src="/img/pg6_rend2_2.jpg" alt="Fan coil after with new filter">
                    <h5 class="mt-3 text-center">After - New Filter</h5>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                    <img class="img-fluid rounded w-100" src="/img/pg6_rend2_3.jpg" alt="Fan coil Inaccessible">
                    <h5 class="mt-3 text-center">Inaccessible Fan Coil</h5>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                    <img class="img-fluid rounded w-100" src="/img/pg6_rend2_4.jpg" alt="Refused entry Notice">
                    <h5 class="mt-3 text-center">Refused Entry Notice</h5>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                    <img class="img-fluid rounded w-100" src="/img/pg6_rend2_5.jpg" alt="Pre-existing Damage">
                    <h5 class="mt-3 text-center">Pre-existing Damage Identified</h5>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                    <img class="img-fluid rounded w-100" src="/img/pg6_rend4.jpg" alt="Reporting Template">
                    <h5 class="mt-3 text-center">Digital Reporting System</h5>
                </div>
            </div>
        </div>
    </div>
    <!-- Reporting Gallery End -->
`;

// Inject the gallery right before the closing </div></template>
repContent = repContent.replace(/<\/div>\s*<\/template>/, galleryHtml + '\n  </div>\n</template>');
fs.writeFileSync(reportingPath, repContent);
console.log('Updated exclusive-total-reporting.vue');
