function lightsOut() {
    let lightBox = document.getElementsByClassName("lights-container");
    
    for (let i = 0; i < lightBox.length; i++) {
        lightBox[i].getElementsByClassName('light-1')[0].style.backgroundColor = "#dc3545";
    };
    //currently only changes the first light. Needs to cycle through 4 more.
    //on the fifth light, a duration of 0.2 to 3 seconds is required before the timer starts
}

function resetGame(){
    document.getElementById('seconds').innerHTML="00";
    document.getElementById('tens').innerHTML="00";
    //Resets times, and lights
}

function stopGame(){
    //pauses the timer
    //a message to congratulate
}