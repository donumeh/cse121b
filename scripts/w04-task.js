/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Emeka Umeh MacDonald",
    photo: "images/me.jpg",
    favoriteFoods: [
        "Rice",
        "Bread & Eggs",
        "Spaghetti",
        "Chicken",
        "Bananas"
    ],
    hobbies: [
        "Reading",
        "Watching Movies",
        "Coding",
        "Dancing in secret"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Heritage City, IB",
        length: "4 years"
    },
    {
        place: "Isokan, IB",
        length: "19 years"
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = `${myProfile.name}`;

/* Photo with attributes */
imgDom = document.querySelector("img");
imgDom.setAttribute("src", myProfile.photo);
imgDom.setAttribute("alt", `Profile picture of ${myProfile.name}`);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');

    dt.textContent = place.place;
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
