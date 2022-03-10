// builds the nav dynamically
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

// defines global variables
const navBar = document.querySelector('.navbar__menu');
const topOfNav = navBar.offsetTop;
const navItems = document.querySelectorAll('.navbar__menu>ul>li>a');
const sections = document.querySelectorAll('section');
const section1 = document.querySelector('#section1');
let current = '';
let idleTimer = null;
let idleState = false;

// fixes nav on scroll
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

// toggles style for nav items when nav is fixed
navItems.forEach(item => {
    window.addEventListener("scroll", () => {
        item.classList.toggle("sticky__a", window.scrollY > navBar.offsetTop);
    });
});

// adds corresponding section to each nav item as a class
for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.add('section' + (i + 1));
}


// allows the link to scroll to the appropriate section when clicking on any item from the nav
navItems[0].classList.add('active');

navItems[0].addEventListener("click", (event) => {
    event.preventDefault()
    section1.scrollIntoView({behavior: "smooth", block: "start"});
})

navItems[1].addEventListener("click", (event) => {
    const section2 = document.querySelector('#section2');

    event.preventDefault()
    section2.scrollIntoView({ behavior: "smooth", block: "start" });
})

navItems[2].addEventListener("click", (event) => {
    const section3 = document.querySelector('#section3');

    event.preventDefault()
    section3.scrollIntoView({ behavior: "smooth", block: "start" });
})

navItems[3].addEventListener("click", (event) => {
    const section4 = document.querySelector('#section4');

    event.preventDefault()
    section4.scrollIntoView({ behavior: "smooth", block: "start" });
})

// tells us which section is in the window view
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
});

// toggles the active class on the section in the window view
window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        sec.classList.remove('active-class');

        if (sec.id == current) {
            sec.classList.add('active-class');
        }
    })
});

// highlights the active section in the nav
window.addEventListener("scroll", () => {
    navItems.forEach(item => {
        item.classList.remove('active');

        if (item.classList.contains(current)) {
            item.classList.add('active');
        }
    })
});

// highlights the first section in the nav when the page first loads
window.addEventListener("scroll", () => {
    const headerImg = document.querySelector('.header__wrapper');

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
