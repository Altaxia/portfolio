function openModal(projectId) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var captionText = document.getElementById("modal-caption");
    var projectLink = document.getElementById("project-link");

    // Set the content dynamically based on the project ID
    if (projectId === "project1") {
        modalImg.src = "image1.jpg";
        captionText.innerHTML = "Description du projet 1";
        projectLink.href = "project1.html";
    } else if (projectId === "project2") {
        modalImg.src = "image2.jpg";
        captionText.innerHTML = "Description du projet 2";
        projectLink.href = "project2.html";
    } else if (projectId === "project3") {
        modalImg.src = "image3.jpg";
        captionText.innerHTML = "Description du projet 3";
        projectLink.href = "project3.html";
    } else if (projectId === "project4") {
        modalImg.src = "image4.jpg";
        captionText.innerHTML = "Description du projet 4";
        projectLink.href = "project4.html";
    }

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
