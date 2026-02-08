// NAVIGATION SCROLL
const navLinks = document.querySelectorAll('.link a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Update active class
        document.querySelector('.link.active')?.classList.remove('active');
        link.parentElement.classList.add('active');
    });
});


const ruBtn = document.getElementById('ru-btn');
const enBtn = document.getElementById('en-btn');

const textContent = {
    ru: {
        home: "Привет! Я - MarkVRKS",
        projects: "Мои проекты",
        about: "Навыки",
        contact: "Связаться",
        project1Title: "Веб-платформа",
        project1Info: "Созданная на React + JS",
        project2Title: "QuizZapp - онлайн тест",
        project2Info: "Здесь я использовал ТОЛЬКО HMTL, CSS, JS",
        project3Title: "Веб Афиша",
        project3Info: "Сервис, который помогает управлять событиями и категориями"
    },
    en: {
        home: "Hello World! I'm MarkVRKS",
        projects: "My Projects",
        about: "Skills",
        contact: "Contact",
        project1Title: "Web_Platform",
        project1Info: "Platform on React + Js",
        project2Title: "QuizZapp - quiz app",
        project2Info: "Here, I used ONLY HTML, CSS, JS",
        project3Title: "Web_Afisha",
        project3Info: "Service, which help to manage events and categories"
    }
};

const homeHeading = document.querySelector(".hero-heading");
const projectHeading = document.querySelector(".project-heading");
const aboutHeading = document.querySelector(".about-section h1");
const project1Title = document.querySelectorAll(".project-title")[0];
const project1Info = document.querySelectorAll(".project-info")[0];
const project2Title = document.querySelectorAll(".project-title")[1];
const project2Info = document.querySelectorAll(".project-info")[1];
const project3Info = document.querySelectorAll(".project-info")[2];
const project3Title = document.querySelectorAll(".project-title")[2];

function setLanguage(lang) {
    if (lang =="ru") {
         ruBtn.classList.add('active');
         enBtn.classList.remove('active')
    } else {
        ruBtn.classList.remove('active');
        enBtn.classList.add('active');
    }

    homeHeading.textContent = textContent[lang].home;
    projectHeading.textContent = textContent[lang].projects;
    aboutHeading.textContent = textContent[lang].about;
    project1Title.textContent = textContent[lang].project1Title;
    project1Info.textContent = textContent[lang].project1Info;
    project2Title.textContent = textContent[lang].project2Title;
    project2Info.textContent = textContent[lang].project2Info;
    const project3Info = textContent[lang].project3Info;
    const project3Title = textContent[lang].project3Title;
}

ruBtn.addEventListener("click", ()=> setLanguage('ru'));
enBtn.addEventListener("click", ()=> setLanguage('en'));