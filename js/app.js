
// Navigation is built dynamically as an unordered list

const navbarList = document.getElementById('navbar__list');

navItemsArray = ["Overview", "Things to do", "Hotels", "Dining"];

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
const sectionWrap = document.querySelector('.main__wrapper')

function fixNav() {
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
    })
});

//Section Acitve State











