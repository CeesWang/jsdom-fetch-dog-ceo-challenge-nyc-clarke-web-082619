console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    addImagesToPage();
    addBreedsToPage();
    changeColorOfDogOnClick();
    filterDogs();

});

function filterDogs() {
    let dropdown = document.getElementById("breed-dropdown").addEventListener("change", function(event){
        const breedUrl = 'https://dog.ceo/api/breeds/list/all';
        document.getElementById("dog-breeds").innerHTML = "";
        fetch(breedUrl)
            .then(response => response.json())
            .then (data => {
                let keys = Object.keys(data.message);
                let values = Object.values(data.message);
                let breedList = document.getElementById("dog-breeds");
                for (let i = 0; i < keys.length; ++i) { 
                    if (values[i].length > 0) {
                        for (let j = 0; j < values[i].length; ++j) {
                            if (keys[i].charAt(0) === event.target.value) {
                                let breedListItem = document.createElement("li");
                                let breedText = `${keys[i]} ${values[i][j]}`;
                                breedListItem.classList = "dog-breed";
                                breedListItem.innerText = breedText;
                                breedList.appendChild(breedListItem);
                            }
                        }
                    }
                    else {
                        if (keys[i].charAt(0) === event.target.value) {
                            let breedListItem = document.createElement("li");
                            let breedText = keys[i];
                            breedListItem.innerText = breedText;
                            breedListItem.className = "dog-breed";
                            breedList.appendChild(breedListItem);
                        }
                    }
                }
            });
        });
}
    //     document.getElementById("dog-breeds").innerHTML = "";
    //     addBreedsToPage()
    //     let dogListContainer = document.getElementById("dog-breeds")
    //     let dogArrayFiltered = Array.from(document.querySelectorAll(".dog-breed")).filter(dog => dog.innerText.charAt(0) === event.target.value);
    //     dogListContainer.innerHTML = "";
    //     for (let i = 0; i < dogArrayFiltered.length; ++i) {
    //         dogListContainer.appendChild(dogArrayFiltered[i]);
    //     }
    // });


function changeColorOfDogOnClick() {
    document.getElementById("dog-breeds").addEventListener ("click", function(event) {
        event.target.style.color = "goldenrod";
    });
}

function addImagesToPage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(image => {
                let imageTag = document.createElement("img");
                let container = document.getElementById("dog-image-container");
                imageTag.src = image;
                container.appendChild(imageTag);                                                                
            });
        });        
}

function addBreedsToPage() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    
    fetch(breedUrl)
        .then(response => response.json())
        .then (data => {
            let keys = Object.keys(data.message);
            let values = Object.values(data.message);
            let breedList = document.getElementById("dog-breeds");
            for (let i = 0; i < keys.length; ++i) { 
                if (values[i].length > 0) {
                    for (let j = 0; j < values[i].length; ++j) {
                        let breedListItem = document.createElement("li");
                        let breedText = `${keys[i]} ${values[i][j]}`;
                        breedListItem.classList = "dog-breed";
                        breedListItem.innerText = breedText;
                        breedList.appendChild(breedListItem);
                    }
                }
                else {
                    let breedListItem = document.createElement("li");
                    let breedText = keys[i];
                    breedListItem.innerText = breedText;
                    breedListItem.className = "dog-breed";
                    breedList.appendChild(breedListItem);
                }
            }
        });
}

