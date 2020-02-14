const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto/";
const apiUrl2 = "https://randomuser.me/api/";
const apiUrl3 = "https://www.metaweather.com/api/";

const wrapperDiv = document.querySelector(".wrapper");

fetch(apiUrl2)
    .then(function (response) {
        if (response.status === 200) {
            return response.json();
        } else {
            console.log("oppppssssiiiii")
        }
    })
    .then(function (json) {
        const results = json.results;
        console.log(results);
        // pass in results array into function as an argument
        getNames(results);
        getImage(results);
    })
    .catch(function (error) {
        console.log(error)
    })

// resultArray is a prameter, waiting for
// and arrat to be passed in.
function getNames(resultsArray) {
    console.log("it works:", resultsArray);
    for (let i = 0; i < resultsArray.length; i++) {
        let userLastName = resultsArray[i].name.last;
        let userFirstName = resultsArray[i].name.first;

        returnHTML += `${userFirstName} ${userLastName}`;

        let heading = document.createElement("h1");
        let addNameToFigure = wrapperDiv.appendChild(heading);
        addNameToFigure.innerHTML = returnHTML;


    }
}

function getImage(imageArray) {
    for (let i = 0; i < imageArray.length; i++) {
        let returnHTML = ``;
        let photo = imageArray[i].picture.large;
        console.log(photo);

        returnHTML += `<img src="${photo}"/>`;

        let photoDiv = document.createElement("figure");
        let addPhotoToDiv = wrapperDiv.appendChild(photoDiv);
        addPhotoToDiv.innerHTML = returnHTML;
    }

}