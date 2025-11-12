

function slide() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
  });
}
slide();

function menu() {
  let menu = document.querySelector("#menu");
  let nav = document.querySelector(".nav1");

  menu.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
}
menu();


let loader = document.querySelector(".loader")
setTimeout(function(){
    loader.style.top = "-100%" 
}, 1000)


function locomotiveScroll(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});
}
locomotiveScroll();