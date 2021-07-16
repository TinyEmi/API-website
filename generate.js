function getPersonData(data) {
    var personDataDetails = data.results[0]

    document.getElementById("personName").textContent = personDataDetails.name.first + " " + personDataDetails.name.last
    document.getElementById("personLocation").textContent = personDataDetails.location.city + ", " + personDataDetails.location.country
    document.getElementById("personEmail").textContent = personDataDetails.email
    document.getElementById("personNumber").textContent = personDataDetails.cell

    document.getElementById("personPic").src = personDataDetails.picture.large

}

function getNewPerson() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => getPersonData(data))
}


getNewPerson()

//document.getElementById("createPersonButton").addEventListener('click', function () {
//    getNewPerson()
//})