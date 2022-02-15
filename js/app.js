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










