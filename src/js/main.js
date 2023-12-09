// FOR OPEN MOBILE MENU

function openMenu(){
    document.getElementById("mobileNav").classList.toggle("active");
}

// FOR SIDER

$('.custom-slider').slick({
    dots: false,
    arrows:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll : 1,
  });