/**
 * Define Global Variables
 */
 const sections = document.getElementsByTagName('section');
 const ulEl = document.getElementById('navbar__list');
  
 /**
  * Build the nav as unordered list
  * Use appenChild to dynamically build nav
  */
 
 
 for (section of sections) {
     let sectionAttr = section.getAttribute('data-nav');
     let sectionId = section.getAttribute('id');
     const listItem = document.createElement('li');
     const anchor = document.createElement('a');
     anchor.classList.add('menu__link');
     anchor.setAttribute('href', '#' + sectionId);
     anchor.textContent = sectionAttr;
     listItem.appendChild(anchor);
     ulEl.appendChild(listItem);
 
 }
 
 /**
  * Listen to click event
  * Stop default event from occuring 
  * Add class 'active-item' to nav list item following click event
  * Scroll to section on link click
  */
 
 
 const listAnchors = document.querySelectorAll('a')
 
 for (listAnchor of listAnchors) {
     listAnchor.addEventListener('click', function(evt) {
         evt.preventDefault();
         const href = this.getAttribute('href');
         const offsetTop = document.querySelector(href).offsetTop;
         scroll({
             top: offsetTop,
             behavior: "smooth"
         })
 
     })
 
 }
 
 /**
  * Add class 'active-class' to section when near top of viewport
  * Set and remove sections as 'active-class'
  * Add class 'active-listitem' to nav list item following scroll event
  * Set and remove nav list items as 'active-listitem'
  */
 
 window.addEventListener('scroll', function(event) {
     for (section of sections) {
         const sectionTop = section.getBoundingClientRect().top + 300;
         const windowHeight = this.innerHeight;
 
         if (sectionTop < innerHeight) {
             const current = document.getElementsByClassName('active-class');
 
 
             if (current.length > 0) {
                 current[0].classList.remove('active-class');
             }
             section.classList.add('active-class');
 
             const sectionId = section.getAttribute('id');
             const activeAnchor = document.querySelectorAll(`a[href='#${sectionId}']`);
             const currentAnchor = document.getElementsByClassName('active-listitem')
             if (currentAnchor.length > 0) {
                 currentAnchor[0].classList.remove('active-listitem')
             }
             activeAnchor[0].classList.add('active-listitem')
 
         }
 
 
 
     }
 })