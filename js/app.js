// build nav dynamically
const navItemsArray = ["Overview", "Things to do", "Hotels", "Dining"];

for (let i = 0; i < navItemsArray.length; i++) {
    const navbarList = document.getElementById('navbar__list'); 
    const listItem = document.createElement('li');
    const aTag = document.createElement('a');

    aTag.setAttribute('href',"#");
    aTag.innerHTML = navItemsArray[i];

    listItem.appendChild(aTag);
    navbarList.append(listItem);
};

// define global variables
const navBar = document.querySelector('.navbar__menu');
const topOfNav = navBar.offsetTop;
const navItems = document.querySelectorAll('.navbar__menu>ul>li>a');
let idleTimer = null;
let idleState = false;

// fix nav on scroll
const fixNav = () => {
    const sectionWrap = document.querySelector('.main__wrapper');

    if (window.scrollY >= topOfNav) {
        sectionWrap.style.paddingTop = navBar.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        sectionWrap.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
};

window.addEventListener('scroll', fixNav);

// toggle style for nav items when nav is fixed
navItems.forEach(item => {
    window.addEventListener("scroll", () => {
        item.classList.toggle("sticky__a", window.scrollY > navBar.offsetTop);
    });
});

/**
 * add href attr. to each nav link, 
 * that will scroll to the appropriate section when clicked 
*/
navItems[0].setAttribute('href', '#section1');
navItems[0].classList.add('active');
navItems[1].setAttribute('href', '#section2');
navItems[2].setAttribute('href', '#section3');
navItems[3].setAttribute('href', '#section4');


for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.add('section' + (i + 1));
}

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll('section');
    const headerImg = document.querySelector('.header__wrapper');
    const section1 = document.querySelector('#section1');
    let current = '';
    
    // current = which section is being viewed while scolling through the page
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    
    // highlights the active section in the nav
    navItems.forEach(item => {
        item.classList.remove('active');

        if (item.classList.contains(current)) {
            item.classList.add('active');
        }
    })

    // highlights the first section in the nav when the page first load
    if (scrollY >= headerImg.offsetTop && scrollY <= section1.offsetTop) {
        navItems[0].classList.add('active');
    }
});

// hides fixed nav after 2 secs of not scrolling
const showNav = (time) => {
    clearTimeout(idleTimer);
    if (idleState == true) {
        navBar.classList.remove('inactive');
    }
    idleState = false;
    idleTimer = setTimeout(() => {
        if (document.body.classList.contains('fixed-nav')) {
            navBar.classList.add('inactive');
            idleState = true;
        }
    }, time)
};

showNav(2000);

window.addEventListener("scroll", () => {
    showNav(2000);
});
