var cites = document.querySelectorAll('#cites .cite');
var citeInterval = setInterval(nextCite,2000);
var currentCite = 0;


function nextCite() {
    cites[currentCite].className = 'cite';
    currentCite = (currentCite+1)%slides.length;
    cites[currentCite].className = 'cite showing';
}

/*
function showCites() {
    var i;
    var cite = document.getElementsByClassName('cite');
    var dots= document.getElementsByClassName('dot');
    
    if (n > cite.length) {
        currentCite = 1
    }
    
    if (n < cite.length) {
        currentCite = cite.length
    }
    
    for (i=0, i < cite.length; i++) {
        cite[i].style.display = "none"
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","")
    }
    cite[currentCite-1].style.display = "inline-flex";
    dots[currentCite-1].className+= " active";
}*/
