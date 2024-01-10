import './style.css';
import Tatas from './taco_tatas.jpg';


let content = document.getElementById('content');

function createHome() {
    let homeDiv = document.createElement('div');
    homeDiv.setAttribute('id', 'heading');

    let tatasPic = document.createElement('img');
    tatasPic.src = Tatas;
    

    let blurb = document.createElement('p');
    blurb.textContent = "Tacos, a staple of the hispanic community at large. As well as Tatas, a staple of many amazing chefs. Together they bring joy to multiple senses, especially a mouth-watering good meal!";
    
    homeDiv.appendChild(tatasPic);
    homeDiv.appendChild(blurb);

    return homeDiv;
}

function createTheme() {
    let heading = document.createElement('heading');
    heading.setAttribute('id', 'heading');

    let title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.textContent = 'TACOS AND TATAS';

    let navBar = document.createElement('navBar');
    navBar.setAttribute('id', 'navBar');

    let homeButton = document.createElement('button');;
    homeButton.setAttribute('id', 'home');
    homeButton.textContent = 'HOME';

    let menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu');
    menuButton.textContent = 'MENU';

    let contactButton = document.createElement('button')
    contactButton.setAttribute('id', 'contact');
    contactButton.textContent = 'CONTACT';
    
    content.appendChild(heading);
    heading.appendChild(title);
    heading.appendChild(navBar);
    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);

    return navBar;
}
content.appendChild(createTheme());