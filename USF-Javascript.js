// slideshow business
var i;
var l = 0;
function homepageslideshow() {
     editslides = document.getElementsByClassName('slides');
    
     for (let i = 0; i < editslides.length; i++) {
        editslides.style.display = 'none';
    }
    l++;
    if (l > editslides) {
        l = 0;
    }
    editslides[l-1].style.display = 'block';
}
homepageslideshow();