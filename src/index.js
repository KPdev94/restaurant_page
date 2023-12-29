import './style.css';
import Tatas from './taco_tatas.jpg';


let content = document.getElementById('content');

function createBase() {
    let headingDiv = document.createElement('div');

    let title = document.createElement('h1');
    title.innerHTML = "Tacos & Tatas!";
    
    let tatasPic = document.createElement('img');
    tatasPic.src = Tatas;
    

    let blurb = document.createElement('p');
    blurb.innerHTML = "Tacos, a staple of the hispanic community at large.\nAs well as Tatas, a staple of many amazing chefs.\nTogether they bring joy to multiple senses, especially a mouth-watering good meal!";
    
    headingDiv.appendChild(title);
    headingDiv.appendChild(tatasPic);
    headingDiv.appendChild(blurb);

    return headingDiv;
}
content.appendChild(createBase());