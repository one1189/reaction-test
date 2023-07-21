function lightsOut() {
    const lights = document.getElementsByClassName("light");
    const delayBetweenLights = 1000; // milliseconds) delay between lights
  
    for (let i = 0; i < lights.length; i++) {
      setTimeout(() => {
        lights[i].style.backgroundColor = "#dc3545";
      }, i * delayBetweenLights);
    }
  }

  // After all lights are on, switch off and start timer after 0.2 to 3 seconds 

function resetGame(){
    document.getElementById('seconds').innerHTML="00";
    document.getElementById('tens').innerHTML="00";
    //Resets times
}

function stopGame(){
    //pauses the timer
    //a message to congratulate
}