const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'charitize-nuxt', 'pages', 'the-clinicair-condo-ventilation-team.vue');
let content = fs.readFileSync(targetFile, 'utf8');

// Replace the Page Header Title
content = content.replace(
    /<h1 class="display-3 text-white mb-3 animated slideInDown">[\s\S]*?<\/h1>/,
    `<h1 class="display-3 text-white mb-3 animated slideInDown">Our Team</h1>`
);
content = content.replace(
    /<li class="breadcrumb-item text-white active" aria-current="page">[\s\S]*?<\/li>/,
    `<li class="breadcrumb-item text-white active" aria-current="page">The Clinicair Condo Ventilation Team</li>`
);

// Replace Team Section
const teamData = [
    { name: "Craig Jobber", role: "Customer Satisfaction", img: "/img/team-1.jpg" },
    { name: "Colin Smith", role: "Operations", img: "/img/team-2.jpg" },
    { name: "Rholson Roberts", role: "Team Lead", img: "/img/team-3.jpg" },
    { name: "Jerrome Lozano", role: "Team Lead", img: "/img/team-1.jpg" },
    { name: "Renato de Camargo", role: "Team Lead", img: "/img/team-2.jpg" }
];

let teamHtml = '';
teamData.forEach((member, index) => {
    let delay = 0.1 + (0.2 * (index % 3));
    teamHtml += `
                <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="${delay}s">
                    <div class="team-item d-flex h-100 p-4">
                        <div class="team-detail pe-4">
                            <img class="img-fluid mb-4" src="${member.img}" alt="">
                            <h3>${member.name}</h3>
                            <span>${member.role}</span>
                        </div>
                        <div class="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                            <a class="btn btn-square btn-primary my-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square btn-primary my-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>`;
});

content = content.replace(
    /<div class="text-center mx-auto wow fadeIn"[\s\S]*?<\/div>[\s\S]*?<div class="row g-4">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
    `<div class="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style="max-width: 800px;">
                <p class="section-title bg-white text-center text-primary px-3">Our Team</p>
                <h1 class="display-6 mb-4">The Clinicair Condo Ventilation Team</h1>
                <p class="mb-4">Our Team is highly professional and very well trained in the art of great customer service. Your clients will enjoy our Team’s Concierge Level Service as they carry out their work in a clean, pleasant and, above all, safe fashion.</p>
                <p class="mb-5">If you don’t get 10 times as many compliments about our crew as you get complaints, we will reduce our invoice by 5%.</p>
            </div>
            <div class="row g-4">
${teamHtml}
            </div>
        </div>
    </div>`
);

fs.writeFileSync(targetFile, content);
console.log("Replaced Team content");
