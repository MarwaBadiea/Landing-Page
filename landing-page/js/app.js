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
 * Define Global Variables
 * 
*/
const sec = document.querySelectorAll('section');
const myUl = document.getElementById('navbar__list');
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

sec.forEach(element=> {
    
    const myLi = document.createElement('li');
    const myA = document.createElement('a');
    myA.textContent = element.getAttribute('data-nav');
    myLi.appendChild(myA);
    myUl.appendChild(myLi);
    // scroll to section when click on link in nav bar
    myA.addEventListener('click', () => {
        element.scrollIntoView({'behavior': 'smooth'});
    })
    
})

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', function() {
    
    sec.forEach( active => {
        const rect = active.getBoundingClientRect();
        if ( rect.top > 0 && rect.top <= 200) {
            
            sec.forEach( act => {
                 
                //removing the active class from all sections
                act.classList.remove('your-active-class'); 
            } )
            
                //adding the active class to the active section
                active.classList.add('your-active-class');

        }

    } )
    
})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


