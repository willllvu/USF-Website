// slideshow business
var l = 0;
function homepageslideshow() {
    editslides = document.getElementsByClassName('slides');

    // for (let i = 0; i < editslides.length; i++) {
    //     editslides.style.display = 'none';
    // }
    // l++;
    // if (l > editslides.length) {
    //     l = 0;
    // }
    // editslides[l - 1].style.display = 'block';
    // setTimeout(homepageslideshow, 2000);
        for (let i = 0; i < editslides.length; i++) {
            if (i === l) editslides[l].style.display = 'block';
            else editslides[i].style.display = 'none';
            console.log(i + " " + editslides[i]);
        }
        l++;
        if (l === editslides.length) l = 0;
        setTimeout(homepageslideshow, 8000);
}
homepageslideshow();