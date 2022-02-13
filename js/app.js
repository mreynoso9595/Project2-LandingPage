// Select the ul from within my Nav element and set it to a variable
const navbarList = document.getElementById('navbar__list');


// Use a loop to create an li element and set it to a variable that I can use to create 4 list items, which I can then append to the ul
navItems = ["Overview", "Things to do", "Hotels", "Dining"];

for (let i = 0; i < navItems.length; i++) {
    let listItem = document.createElement('li');
    let aTag = document.createElement('a');

    aTag.setAttribute('href',"#");
    aTag.innerHTML = navItems[i];
    listItem.appendChild(aTag);
    navbarList.append(listItem);
};










