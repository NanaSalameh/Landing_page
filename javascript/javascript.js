/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let navbar;
let navbarLinks = document.querySelectorAll('nav');
let  links;
let header;
let targetId ;
let targetSection;
let navLinks;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav



  document.addEventListener("DOMContentLoaded", function() {
   navbar = document.getElementById("navbar");
  // Array of Navbar links
   navLinks = [
    { name: "Section 1", link: "#section1" },
    { name: "Section 2", link: "#section2" },
    { name: "Section 3", link: "#section3" },
    { name: "Section 4", link: "#section4" },
  ];

  // Create Navbar links dynamically
  navLinks.forEach(link => {
    const navLink = document.createElement("a");
    navLink.textContent = link.name;
    navLink.setAttribute("href", link.link);
    navbar.appendChild(navLink);
  });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Add a click event listener to each link


  navbarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
     targetId = event.target.getAttribute('href');
    
    event.preventDefault();
     // Scroll to the target section using smooth scrolling
     targetSection = document.querySelector(targetId);
   targetSection.scrollIntoView({
    behavior: 'smooth'
   });
   
   
  });
});


//the color of the link changes when you click on it

document.addEventListener("DOMContentLoaded", function() {
   links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function(event) {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
      event.preventDefault();
    });
  });
});



// Set navbar as active

document.addEventListener('scroll',()=>{
 header=document.querySelector('nav');
if(window.scrollY>0){
  header.classList.add('scrolled');

}else{
header.classList.remove('scrolled');

}

})

