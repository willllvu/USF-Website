// slideshow business
var l = 0; //controls when the slides appear
slideshowme();
var numberslide = document.getElementsByClassName("slides");//defines the slides
function slideshowme() {
    var i; //controls when the slides disappear
    for (i = 0; i < numberslide.length; i++) {
        numberslide[i].style.display = 'none';
    }//counts and causes the slides to DISAPPEAR!
    l++
    if (l > numberslide.length) {
        l = 1;
    }
    numberslide[l - 1].style.display = "block";
    setTimeout(slideshowme, 1000);
}