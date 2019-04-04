// slideshow business
slideshowme();
var i; //controls when the slides disappear
var l = 0; //controls when the slides appear
function slideshowme() {
    var numberslide = document.getElementsByClassName('slides');//defines the slides
    
    for (let i = 0; i < i.length; i++) {
        numberslide[i].style.display = 'none';
    }//counts and causes the slides to DISAPPEAR!
    l++
    numberslide[l-1].style.display = 'block';

}