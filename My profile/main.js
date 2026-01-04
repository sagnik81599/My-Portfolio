/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction2() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";

        // Add event listeners to nav links to auto-close menu on click
        var navLinks = menuBtn.querySelectorAll("a");
        navLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                menuBtn.className = "nav-menu";
            });
        });
    } else {
        menuBtn.className = "nav-menu";
    }
}





/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["Designer","Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})



 /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-container',{delay: 100})
  // srLeft.reveal('.contact-info',{delay: 100})
  srLeft.reveal('.education-container',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-container',{delay: 100})
 
  


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

 /* -- PROJECT BOX -- */
  sr.reveal('.projects-container',{interval: 200})


   sr.reveal('.certificates-container',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})




const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)

function showMessage(event) {
  event.preventDefault(); // stops page from jumping to top
  alert('Website not hosted yet. You can check my GitHub repo for the project code.');
}

function showCVMessage(event) {
  event.preventDefault(); // stops link from reloading the page
  alert('My CV will be updated soon. I’m currently working on it!');
}


// Email send fuctions 

// Initialize EmailJS
