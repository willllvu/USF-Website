// slideshow business
var i; //controls when the slides disappear
var l = 0; //controls when the slides appear
slideshowme();
function slideshowme() {
    var numberslide = document.getElementsByClassName('slides');//defines the slides
    
    for (let i = 0; i < i.length; i++) {
        numberslide[i].style.display = 'none';
    }//counts and causes the slides to DISAPPEAR!
    l++
    if (l > numberslide.length) {
        l = 1;
    }
    numberslide[l - 1].style.display = 'block';
setTimeout(slideshowme, 3000);

}