
function ancho(){
  var items=5
  if(screen.width< 800){
      items =3;
  }
  return items
}

var items = 5;
if(screen.width< 800){
    items =3;
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: ancho(),
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });