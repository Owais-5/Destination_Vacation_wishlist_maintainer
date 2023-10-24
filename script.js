(function(){

    "use strict";

    const formDetails = document.getElementById("wishList_form");

formDetails.addEventListener("submit" ,handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();

    const desName = event.target.elements['name'].value;
    const desLoc = event.target.elements['location'].value;
    const desImg = event.target.elements['image'].value;
    const desDesc = event.target.elements['description'].value;

    for(let i=0; i<formDetails.length; i++){
        formDetails.elements[i].value = "";
    }

    const destCard = createDestinationCard(desName ,desLoc ,desImg ,desDesc);

    const wishListContainer = document.getElementById("destination_container");

    if(wishListContainer.children.length === 0){
        document.getElementById("title").innerHTML = "My Wishlist"
    }

    document.querySelector("#destination_container").appendChild(destCard);
}

function createDestinationCard(name, location, imageURL, description){

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.setAttribute("alt", name);

    const constantImageURL ="images/signpost.jpg";

    if(imageURL.length === 0){
        img.setAttribute("src", constantImageURL);
    }
    else{
        img.setAttribute("src", imageURL);
    }

    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerHTML = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerHTML = location;
    cardBody.appendChild(cardSubtitle);

    if(description.length !== 0){
        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerHTML = description;
        cardBody.appendChild(cardText);
    }

    const cardDelBtn = document.createElement("button");
    cardDelBtn.innerHTML = "remove";

    cardDelBtn.addEventListener("click", remDest);
    cardBody.appendChild(cardDelBtn);

    card.appendChild(cardBody);

    return card;
}

function remDest(event){
    const card = event.target.parentElement.parentElement;
    card.remove();
}

})();

