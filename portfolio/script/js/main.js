/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 





// Sample skills data (this should ideally come from a database)
let skills = [
    { name: 'DOCKER', percentage: 70 },
    { name: 'LINUX', percentage: 85 },
    { name: 'PYTHON', percentage: 65 },
    { name: 'CyberSec', percentage: 85 },
];

// Function to render skills to the DOM
function renderSkills() {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = ''; // Clear existing skills

    // Iterate through the skills array and display each skill
    skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skills__data');
        skillItem.innerHTML = `
            <div class="skills__names">
                <i class='fab fa-${skill.name.toLowerCase() === 'docker' ? 'docker' : skill.name.toLowerCase() === 'linux' ? 'linux' : 'python'} skills__icon'></i>
                <span class="skills__name">${skill.name}</span>
            </div>
            <div class="skills__bar" style="width: ${skill.percentage}%;"></div>
            <div>
                <span class="skills__percentage">${skill.percentage}%</span>
                <button onclick="editSkill(${index})">Edit</button>
                <button onclick="deleteSkill(${index})">Delete</button>
            </div>
        `;
        skillsList.appendChild(skillItem);
    });
}

// Function to add a new skill
document.getElementById('skill-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const skillName = document.getElementById('skill-name').value;
    const skillPercentage = document.getElementById('skill-percentage').value;

    // Add new skill to the array
    skills.push({ name: skillName.toUpperCase(), percentage: Number(skillPercentage) });
    renderSkills(); // Re-render skills
    e.target.reset(); // Reset the form
});

// Function to edit a skill
function editSkill(index) {
    const skill = skills[index];
    document.getElementById('skill-name').value = skill.name;
    document.getElementById('skill-percentage').value = skill.percentage;

    // Update existing skill on form submit
    document.getElementById('skill-form').onsubmit = (e) => {
        e.preventDefault();
        skill.name = document.getElementById('skill-name').value.toUpperCase();
        skill.percentage = Number(document.getElementById('skill-percentage').value);
        renderSkills(); // Re-render skills with updated values
        e.target.reset(); // Reset the form
        document.getElementById('skill-form').onsubmit = null; // Reset event handler
    };
}

// Function to delete a skill
function deleteSkill(index) {
    skills.splice(index, 1); // Remove skill from the array
    renderSkills(); // Re-render skills after deletion
}

// Initial render to display current skills when the page loads
renderSkills();





document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profilePic').src = e.target.result; // Change the profile picture
        };
        reader.readAsDataURL(file); // Convert the file to a base64 URL
    }
});


function previewImage(event) {
    const file = event.target.files[0]; // Get the selected file
    const imgElement = document.getElementById('profile-pic'); // Get the profile picture element

    if (file) {
        const reader = new FileReader(); // Create a FileReader to read the file
        reader.onload = function(e) {
            imgElement.src = e.target.result; // Update the src attribute of the img element
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }
}
