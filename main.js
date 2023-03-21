$('.tmoni-carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
	autoplay:true,
    responsive:{
        600:{
            items:1
        }
    }
});

function showNav(){
    document.querySelector(".nav-ul").style.display = "flex";
    document.querySelector(".nav-ul").style.flexDirection = "column";
    document.querySelector(".bar").style.display = "none";
    document.querySelector(".logo").style.display = "none";
}

function hideNav(){
    document.querySelector(".nav-ul").style.display = "none";
    document.querySelector(".bar").style.display = "block";
    document.querySelector(".quote").style.display = "block";
    document.querySelector(".logo").style.display = "block";
};