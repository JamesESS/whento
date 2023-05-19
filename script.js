const landingPast = document.getElementById("landingpast");
const landingFuture = document.getElementById("landingfuture");
const landingContainer = document.getElementById("landingpagecontainer")
const rewindSymbol = document.getElementById("rewind");
const ffwdSymbol = document.getElementById("ffwd");

/* Event listeners for landin page */
landingPast.addEventListener("mouseover",e => {     //makes rewind image and background gradient move left on hover
    rewindSymbol.style.animation = "rewindpastanim 1s forwards";
    landingContainer.style.animation = "gradientscrollleft 1s forwards"
})
landingPast.addEventListener("mouseleave",e => {    //resets rewind image and backkground gradient to original positions
    rewindSymbol.style.animation = "none";
    landingContainer.style.animation = "none"
})

landingFuture.addEventListener("mouseenter",e => {  //makes rewind image and background gradient move left on hover
    ffwdSymbol.style.animation = "ffwdfutureanim 1s forwards";
    landingContainer.style.animation = "gradientscrollright 1s forwards"    
})
landingFuture.addEventListener("mouseleave",e => {  //resets rewind image and backkground gradient to original positions
    ffwdSymbol.style.animation = "none";
    landingContainer.style.animation = "none"
})

