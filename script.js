const mediaQueryCheck = document.getElementById("mobilecheck")  //element that is only styled in media query
let mobile = false;
onMobileDevice();
function onMobileDevice() {  //checks if css currently using screen width media query
    if (getComputedStyle(mediaQueryCheck).display == "none") mobile = true;
    else mobile = false
}
/* ----variables for navbar---- */
const navContainer = document.getElementById("navbarcontainer");
const mainPage = document.getElementById("mainpage");  //all scrolling is done on main not window so need to add event listenr to main
const pastPage = document.getElementById("pastpage");
const futurePage = document.getElementById("futurepage");
const formPage = document.getElementById("contactpage");
const navbarItems = document.getElementsByClassName("navbarliitem");
const burgerMenu = document.getElementById("burgermenuicon");
let viewportHeight = window.innerHeight - window.innerHeight/2.5; //gets viewport height minus 10% of viewrport height
/* ----event listeners for navbar---- */
addEventListener("orientationchange",e => { //resizes navbar when orientation changed & corrects value of viewport height
    resizeNavBar();
    updateViewportHeight();
    onMobileDevice()
}); 
addEventListener("resize",e => {    //resizes navbar when window is resized & corrects value of viewport height
    resizeNavBar();
    updateViewportHeight();
    onMobileDevice()
});  
resizeNavBar();
function resizeNavBar() {  //makes navbar same width as main to avoid overlapping scroll bar
    navContainer.style.width = (pastPage.getBoundingClientRect().width + "px");
}
function updateViewportHeight() {
    viewportHeight = window.innerHeight - window.innerHeight/2.5;
}
[...navbarItems].forEach((item,i)=> item.addEventListener("click", e => mainPage.scroll(0,window.innerHeight*(i+1))));  //add event listener to each anchor in navbar. when clicked sets main page scroll to that pages y coord. Need to do this way instead of scrollTo as we are scrolling main to make snap scroll work
/* think event listener scroll is very resource intensive. should maybe change to set interval or some other method instead? */
mainPage.addEventListener("scroll", e => {  //Hide navbar when on landing page otherwise shows and changes colour depending on page position
    if (mainPage.scrollTop>=viewportHeight || mobile) navContainer.classList.remove("hidden"); //shows navbar once you scroll to bottom of landing page or  always on mobile
    else navContainer.classList.add("hidden"); //hides navbar when on landing page and not on mobile
    /* handles background colour of navbar should restructure */
    if (formPage.getBoundingClientRect().top < viewportHeight) navContainer.classList.add("landingpagecolour"); //checks if formpage is in view
    else if (futurePage.getBoundingClientRect().top < viewportHeight) { //checks if future page is in view
        navContainer.classList.remove("landingpagecolour");
        navContainer.style.backgroundColor = "var(--futurecolour)"; 
    }
    else if (pastPage.getBoundingClientRect().top < viewportHeight) { //checks if past page is in view
        navContainer.classList.remove("landingpagecolour");
        navContainer.style.backgroundColor = "var(--pastcolour)";
    }
    else navContainer.classList.add("landingpagecolour");
})
burgerMenu.addEventListener("click", e => {
    navContainer.children[1].classList.toggle("burgermenuexpanded");  //expands burgermenu
    burgerMenu.ariaExpanded = !burgerMenu.ariaExpanded; //toggles aria expanded on burger menu
})
/* ----variables for landing page---- */
const landingPast = document.getElementById("landingpast");
const landingFuture = document.getElementById("landingfuture");
const landingContainer = document.getElementById("landingpagecontainer")
const rewindSymbol = document.getElementById("rewind");
const ffwdSymbol = document.getElementById("ffwd");
const pastButton = document.getElementById("pastbutton");
const futureButton = document.getElementById("futurebutton");
const whenTo = document.getElementById("whentotitle");
const webDescriptionToggle = document.getElementById("when2btn");
const webDescription = document.getElementById("web-description");
/* ----Event listeners for landing page---- */
positionTimeSymbols();
function positionTimeSymbols() {  // positions rewind and ffwd symbols based on size of whento
    // console.log(ffwdSymbol.getBoundingClientRect())
    ffwdSymbol.style.left = (whenTo.getBoundingClientRect().width)*-1 + "px"  //moves ffwdsymbol left by width of whento
    rewindSymbol.style.left = (whenTo.getBoundingClientRect().width) + "px" //moves rewindsymbol right by width of whento
    ffwdSymbol.style.top = (whenTo.getBoundingClientRect().height + (whenTo.getBoundingClientRect().height)/2) + "px"   //moves ffwd top by height of whento
    rewindSymbol.style.top = (whenTo.getBoundingClientRect().height + (whenTo.getBoundingClientRect().height)/2)*-1 + "px" //moves rewind bottom by height of whento
}
whenTo.addEventListener("mouseover", e => { //shows web-description on hover
    if (!webDescription.className.includes("whentotexttoggled")) webDescription.style.color = "rgba(255, 255, 255, 1)"; //exits event listener if button toggled otherwise continue with intedned func
})
whenTo.addEventListener("mouseleave", e => { //hides web-description when mouse leaves
    if (!webDescription.className.includes("whentotexttoggled")) webDescription.style.color = "rgba(255, 255, 255, 0)";
})
webDescriptionToggle.addEventListener("click", e => { //toggles web-description being visible. overides event listeners above
    webDescription.classList.toggle("whentotexttoggled");
})
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
pastButton.addEventListener("click", e => document.getElementById("pastpage").scrollIntoView(true))  //scrolls page to element with id "pastpage"
futureButton.addEventListener("click", e => document.getElementById("futurepage").scrollIntoView(true))

function pastClick(){
    document.getElementById(`your-expert-j`).style.display=`none`;
    document.getElementById(`your-expert-t`).style.display=`block`;
    document.getElementById(`future-year`).style.display=`none`;
    document.getElementById(`past-year`).style.display=`block`;
    document.getElementById(`expert-t`).checked=true;
    document.getElementById(`expert-j`).checked=false;      
}

function futureClick(){
    document.getElementById(`your-expert-j`).style.display=`block`;
    document.getElementById(`your-expert-t`).style.display=`none`;
    document.getElementById(`future-year`).style.display=`block`;
    document.getElementById(`past-year`).style.display=`none`;
    document.getElementById(`expert-t`).checked=false;
    document.getElementById(`expert-j`).checked=true;    
}
