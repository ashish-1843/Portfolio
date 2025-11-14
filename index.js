
const navbar = document.getElementById('about-heading');
const about_detail = document.getElementById('about-detail');
const aboutme = document.getElementById('aboutme');
const home = document.getElementById('home');
const skills = document.getElementById('skills');
const project = document.getElementById('projects');
const skill1 = document.getElementById('skill-1');
const skill2 = document.getElementById('skill-2');
const skill3 = document.getElementById('skill-3');
const skill4 = document.getElementById('skill-4');
const skill5 = document.getElementById('skill-5');
const skill6 = document.getElementById('skill-6');
const skill7 = document.getElementById('skill-7');
const skill8 = document.getElementById('skill-8');
const contact = document.getElementById('contactme');
const project1 = document.getElementById('project-1');
const project2 = document.getElementById('project-2');
const project3 = document.getElementById('project-3');
const contactme = document.getElementById('contact');
const homescroll = 0;
const aboutscroll = 500;
const skillanima = 800;
const skillscroll = 1000;
const projectanima = 1600;
const projectscroll = 1700;
const aaboutanimation = 20;
const contactanima = 2400;
const contactscroll = 2700;

window.addEventListener('scroll', () => {

    if (window.scrollY > aaboutanimation) {
        navbar.classList.add('scrolled');
        about_detail.classList.add('scrolled');
    }

    if (window.scrollY > aboutscroll) {
        aboutme.classList.add('scrolled');
        home.classList.add('scrolled');
    }

    else {
        aboutme.classList.remove('scrolled');
        home.classList.remove('scrolled');
    }

    if (window.scrollY > skillscroll) {
        skills.classList.add('scrolled');
        aboutme.classList.remove('scrolled');
    }

    else {
        skills.classList.remove('scrolled');

    }

    if(window.scrollY > skillanima)
    {
        skill1.classList.add('scrolled');
        skill2.classList.add('scrolled');
        skill3.classList.add('scrolled');
        skill4.classList.add('scrolled');
        skill5.classList.add('scrolled');
        skill6.classList.add('scrolled');
        skill7.classList.add('scrolled');
        skill8.classList.add('scrolled');
        
    }

    if (window.scrollY > projectscroll) {
        project.classList.add('scrolled');
        skills.classList.remove('scrolled');
    }
    else {
        project.classList.remove('scrolled');
    }

    if(window.scrollY > projectanima)
    {
        project1.classList.add('scrolled')
        project2.classList.add('scrolled')
        project3.classList.add('scrolled')
    }

    if (window.scrollY > contactscroll) {
        contact.classList.add('scrolled');
        project.classList.remove('scrolled');
    }
    else {
        contact.classList.remove('scrolled');
    }

    if(window.scrollY > contactanima)
    {
        contactme.classList.add('scrolled');
    }
})

const words = ["Web Developer.", "Full Stack Developer.", "Gamer."];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    const speed = 150; // typing speed
    const eraseSpeed = 80; // deleting speed
    const delayBetween = 1000; // pause after word is typed

    function type() {
      currentWord = words[i];
      const typingElement = document.getElementById("typing");

      if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, j + 1);
        j++;

        if (j === currentWord.length) {
          isDeleting = true;
          setTimeout(type, delayBetween);
          return;
        }
      } else {
        typingElement.textContent = currentWord.substring(0, j - 1);
        j--;

        if (j === 0) {
          isDeleting = false;
          i = (i + 1) % words.length;
        }
      }

      setTimeout(type, isDeleting ? eraseSpeed : speed);
    }

    type();

    function showToast(message, type="success") {
  const toastEl = document.getElementById("liveToast");
  const toastMsg = document.getElementById("toastMessage");

  toastMsg.innerText = message;

  // Built-in Bootstrap colors
  if(type === "error"){
    toastEl.classList.remove("bg-success");
    toastEl.classList.add("bg-danger");
  } else {
    toastEl.classList.remove("bg-danger");
    toastEl.classList.add("bg-success");
  }

  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}

document.getElementById('contactform').addEventListener("submit" , async function(e){
    
    e.preventDefault();


const data = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    msg : document.getElementById("message").value
};

const res = await fetch("http://localhost:5000/index", {
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
});

const result = await res.json();
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("message").value=""
    alert.showToast("Message Sent Successfully!");
});