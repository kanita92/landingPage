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
*/

const sections = document.getElementsByTagName('section');
const ulEl= document.getElementById("navbar__list");

/**
 * End Global Variables
*/



/**
 * Build the nav as unordered list
 * Use appenChild to dynamically build nav
 */


for (section of sections){
    let sectionAttr = section.getAttribute('data-nav');
    let sectionId = section.getAttribute('id');
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.setAttribute('href','#'+ sectionId);
    anchor.textContent = sectionAttr;
    listItem.appendChild(anchor);
    ulEl.appendChild(listItem);

}

/**
 * Listen to click event
 * Stop default event from occuring 
 * Scroll to section on link click
 * Add class 'active' to section when near top of viewport
 * Set sections as active
 */


const listAnchors = document.querySelectorAll('a') 

for (listAnchor of listAnchors){
    listAnchor.addEventListener('click', function(evt) {
        evt.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        })
        const current = document.getElementsByClassName("active-class");
        console.log(current.length);
        if(current.length > 0) {
            current[0].classList.remove("active-class");
    
        }
        
        const section = document.getElementById(href.substring(1));
        section.classList.add('active-class');
    });
}





