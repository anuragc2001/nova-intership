function mainfunc(){
    document.getElementById("hamburger").addEventListener('click',function(){
      $("nav.menu").toggleClass("menu_show");
    });
    document.getElementById("cross").addEventListener('click',function(){
      $("nav.menu").toggleClass("menu_show");
    });
    $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover:false,
      responsive: [{
          breakpoint: 768,
          setting: {
              slidesToShow:8
          }
      }, {
          breakpoint: 520,
          setting: {
              slidesToShow: 9
          }
      }]
  });
}