import './style.css';
import Bros from './brospic.png';
import Hburger from './menu-items/hamburger.jpg';
import Cburger from './menu-items/cheeseburger.jpg';
import Chicken from './menu-items/chicken.jpg';
import Fries from './menu-items/fries.jpg';
import Mac from './menu-items/maccheese.jpeg';
import Pop from './menu-items/soda.jpeg';

let content = document.getElementById('content');


class menuItem{
    constructor(itemName, itemPic, itemDesc, itemToppings, itemPrice){
        this.name = itemName;
        this.description = itemDesc;
        this.toppings = itemToppings
        this.price = itemPrice;
        this.pic = itemPic;
    }
}
let MENU = [
    new menuItem('Hamburger', Hburger,'Savor the perfection of our gourmet burger, a juicy beef patty on a toasted brioche bun, crisp lettuce, ripe tomatoes, and a secret zesty sauce. A mouthwatering symphony of flavors in every bite, this burger is a delectable treat for your senses.','Ketchup, Mustard, Pickles, Jalapenos, Cheese (Add $0.99), Bacon','$8.99'),
    new menuItem('Cheeseburger', Cburger,'Indulge in the irresistible pleasure of our cheeseburger, a succulent beef patty embraced by a toasted bun, adorned with melted cheese, crisp lettuce, and juicy tomatoes. Every bite is a symphony of flavors, making this cheeseburger a delicious delight for your taste buds.','Ketchup, Mustard, Pickles, Jalapenos, Bacon, Secret Sauce','$9.99'),
    new menuItem('Chicken sandwhich', Chicken,'Satisfy your cravings with our delectable chicken sandwich featuring a perfectly seasoned and grilled chicken breast, nestled within a soft, toasted bun. Topped with fresh lettuce, ripe tomatoes, and a savory mayo, this sandwich is a mouthwatering blend of succulence and flavor that will leave you craving more.','Ketchup, Mustard, Honey Mustard, Chipotle, Pickles, Jalapenos, Cheese, Bacon, Secret Sauce','$11.99'),
    new menuItem('Fries', Fries,'Delight in the crispy perfection of our golden fries, each bite offers a satisfying crunch on the outside and a fluffy, tender interior. Expertly seasoned for an irresistible flavor, these fries are the ideal companion to any meal, ensuring a delicious and satisfying experience.','Ketchup, Mustard, Honey Mustard, BBQ Sauce, Gravy, Cheese','$3.99'),
    new menuItem('Mac and Cheese', Mac,'Indulge in the creamy decadence of our mac and cheese, where al\-dente pasta is generously coated in a velvety blend of cheddar and mozzarella. Baked to golden perfection, each forkful delivers a rich and comforting symphony of cheesy goodness that\'s bound to satisfy your cravings.','Peas','$8.99'),
    new menuItem('Pop', Pop,'Quench your thirst with the effervescent joy of our pop, a symphony of fizzy delight that dances on your taste buds with a perfect balance of sweetness and refreshment. Every sip is a burst of crisp and satisfying flavor, making this pop a delightful and thirst-quenching companion for any occasion.','Dr. Pepper, Mr. Pibb, Seltzer Water','$0.99')
]

function createHome() {

    let homeDiv = document.createElement('div');
    homeDiv.setAttribute('id', 'home');

    let BrosPic = document.createElement('img');
    BrosPic.src = Bros;

    let blurb = document.createElement('p');
    blurb.textContent = "Bros. The ones you can depend on. The ones you smile for when they're thriving. The ones you love. Bros. Started in 1969, by brothers Br and Os established the first really good burger place ever. Before them people didnt really understand what being bros was, or what burgers were. They did it all from bun to bun, side by side, bro and bro.";

    content.appendChild(homeDiv);
    homeDiv.appendChild(BrosPic);
    homeDiv.appendChild(blurb);

    return homeDiv;
}

function createMenu() {
    let menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu');

    let menuList = document.createElement('div');
    menuList.setAttribute('id', 'menu-list');

    content.appendChild(menuDiv);
    menuDiv.appendChild(menuList);

    MENU.forEach((item) => {
        let menuItems = `
        <div class='menuItem'>
            <div class='Pic'>
                <img id='${item.name}-pic' src=''>
            </div>
            <div class='nameSummaryPriceTops'>
                <p><b>${item.name}</b></p>
                <p>${item.description}</p>
                <p><u>Toppings</u>
                <br>
                ${item.toppings}</p>
                <p>${item.price}</p>
            </div>
        </div>         
        `

        menuList.insertAdjacentHTML('beforeend', menuItems);

        let currItem = document.getElementById(`${item.name}-pic`)
        currItem.src = item.pic;
    });

    return menuDiv;
}

function createTheme() {
    let heading = document.createElement('heading');
    heading.setAttribute('id', 'heading');

    let title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.innerHTML = `<red>Br</red><yellow>Os</yellow> <brown>Burgers</brown>`;

    let navBar = document.createElement('navBar');
    navBar.setAttribute('id', 'navBar');

    let homeButton = document.createElement('button');;
    homeButton.setAttribute('id', 'homeBtn');
    homeButton.textContent = 'HOME';
    homeButton.classList.add('selected');

    let menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menuBtn');
    menuButton.textContent = 'MENU';

    let contactButton = document.createElement('button')
    contactButton.setAttribute('id', 'contactBtn');
    contactButton.textContent = 'CONTACT';
    
    content.appendChild(heading);
    heading.appendChild(title);
    heading.appendChild(navBar);
    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);

    homeButton.addEventListener('click', () => {
        content.removeChild(content.lastChild);
        menuButton.classList.remove("selected");
        contactButton.classList.remove("selected");
        homeButton.classList.add("selected");
        content.appendChild(createHome());
    });

    menuButton.addEventListener('click',  () => {
        content.removeChild(content.lastChild);
        homeButton.classList.remove("selected");
        contactButton.classList.remove("selected");
        menuButton.classList.add("selected");
        content.appendChild(createMenu());
    });
    /*
    contactButton.addEventListener('click',  () => {
        content.removeChild(content.lastChild);
        homeButton.classList.remove("selected");
        menuButton.classList.remove("selected");
        contactButton.classList.add("selected");
        content.appendChild(createContact());
    });
    */

    return navBar;
}
content.appendChild(createTheme());
content.appendChild(createHome());