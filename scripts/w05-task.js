/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.createElement("div");
let templeList = [];

/* async displayTemples Function */
const displayTemples = temples => {

    /**
     * Go through each temple obj and append them
     * to an article html tag
     */
    temples.forEach(temple => {
        article = document.createElement("article");
        
        h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);

    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const reponse = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await reponse.json();

    displayTemples(templeList);
};

/* reset Function */



/* filterTemples Function */


getTemples();

/* Event Listener */
