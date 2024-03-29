/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {

    /**
     * Go through each temple obj and append them
     * to an article html tag
     */
    temples.forEach(temple => {
        article = document.createElement("article");
        
        h3 = document.createElement("h3");
        h3.textContent = `${temple.templeName}`;

        img = document.createElement("img");
        img.setAttribute("src", `${temple.imageUrl}`);
        img.setAttribute("alt", `${temple.location}`);

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();

    displayTemples(templeList);
};

/* reset Function */

const reset = () => {
    templesElement.innerHTML = "";
};

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();

    let filter = document.getElementById("filtered").value;

    switch(filter)
    {
        case "utah":
            displayTemples(temples.filter(temp => temp.location.includes("Utah")));
            break;

        case "notutah":
            displayTemples(temples.filter(temp => !temp.location.includes("Utah")));
            break;

        case "older":
            displayTemples(temples.filter(temp => new Date(temp.dedicated) < new Date(1950, 0, 1)));
            break;

        case "all":
            displayTemples(temples);
            break;
    }
};

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList)
});