const portofolioData = [
    { title: "project 1", description: "description project 1."},
    { title: "project 2", description: "description project 2."},
    { title: "project 3", description: "description project 3."}
];

const portofolioContainer = document.getElementById("portofolioContainer");

    portofolioData.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.className = "item";
        projectItem.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        `;
        portofolioContainer.appendChild(projectItem)
    });

    //section form
    const from = document.querySelector("form");
    const items = document.querySelectorAll(".item");

    from.addEventListener("submit", function (e) {
        e.preventDefault();

        const searchTeam = from.seach.value.toLowerCase();

            items.forEach(item => {
            const projectTitle = item.querySelector("h2").textContent.toLowerCase();
            const projectDescription = item.querySelector("p").textContent.toLocaleLowerCase();

            if (projectTitle.includes(searchTeam) || projectDescription.includes(searchTeam)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

    });

  
