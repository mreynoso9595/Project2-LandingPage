// Navigation is built dynamically as an unordered list
const navbarList = document.getElementById('navbar__list');

navItems = ["Overview", "Things to do", "Hotels", "Dining"];

for (let i = 0; i < navItems.length; i++) {
    let listItem = document.createElement('li');
    let aTag = document.createElement('a');

    aTag.setAttribute('href',"#");
    aTag.innerHTML = navItems[i];

    listItem.appendChild(aTag);
    navbarList.append(listItem);
};


// Event listeners for navigation on scroll
const navBar = document.querySelector("nav");
const navA = document.querySelectorAll('.navbar__menu>ul>li>a');

window.addEventListener("scroll", () => {
    navBar.classList.toggle("sticky", window.scrollY > navBar.offsetTop);
})

navA.forEach(item => {
    window.addEventListener("scroll", () => {
        item.classList.toggle("sticky__a", window.scrollY > navBar.offsetTop);
    })
});








//Section Acitve State











