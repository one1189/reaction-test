function lightsOut() {
    let lightBoxes = document.getElementsByClassName("lights-container");
    
    for (let i = 0; i < lightBoxes.length; i++) {
        lightBoxes[i].getElementsByClassName('light-1')[0].style.backgroundColor = "#dc3545";
    };
    //start the lights sequence
}