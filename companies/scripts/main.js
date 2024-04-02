document.addEventListener("DOMContentLoaded", function() {
    fetch("https://fakerapi.it/api/v1/companies?_quantity=20")
        .then(response => response.json())
        .then(data => {
            const companyContainer = document.getElementById("company-container");

            data.data.forEach(company => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${company.image}" alt="${company.name}">
                    <h2>${company.name}</h2>
                    <p><strong>Email:</strong> ${company.email}</p>
                    <p><strong>Phone:</strong> ${company.phone}</p>
                    <p><strong>Country:</strong> ${company.country}</p>
                    <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                `;

                companyContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
