
// Navigation is built dynamically as an unordered list

const navbarList = document.getElementById('navbar__list');

const navItemsArray = ["Overview", "Things to do", "Hotels", "Dining"];

for (let i = 0; i < navItemsArray.length; i++) {
    let listItem = document.createElement('li');
    let aTag = document.createElement('a');

    aTag.setAttribute('href',"#");
    aTag.innerHTML = navItemsArray[i];

    listItem.appendChild(aTag);
    navbarList.append(listItem);
};

// Event listeners for navigation on scroll

const navBar = document.querySelector('.navbar__menu');
const topOfNav = navBar.offsetTop;
const navItems = document.querySelectorAll('.navbar__menu>ul>li>a');
const sectionWrap = document.querySelector('.main__wrapper');

const fixNav = () => {
    if (window.scrollY >= topOfNav) {
        sectionWrap.style.paddingTop = navBar.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        sectionWrap.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
};

window.addEventListener('scroll', fixNav);

navItems.forEach(item => {
    window.addEventListener("scroll", () => {
        item.classList.toggle("sticky__a", window.scrollY > navBar.offsetTop);
    });
});

//Section acitve state + scroll to anchor

const overview = navItems[0];
const thingsToDo = navItems[1];
const hotels = navItems[2];
const dining = navItems[3];
const sections = document.querySelectorAll('section');
const headerImg = document.querySelector('.header__wrapper');
const section1 = document.querySelector('#section1');

for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.add('section' + (i + 1));
}

overview.setAttribute('href','#section1');
overview.classList.add('active');
thingsToDo.setAttribute('href', '#section2');
hotels.setAttribute('href', '#section3');
dining.setAttribute('href', '#section4');

window.addEventListener("scroll", () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    
    navItems.forEach(item => {
        item.classList.remove('active');

        if (item.classList.contains(current)) {
            item.classList.add('active');
        }
    })

    if (scrollY >= headerImg.offsetTop && scrollY <= section1.offsetTop) {
        overview.classList.add('active');
    }
});



let idleTimer = null;
let idleState = false;

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












