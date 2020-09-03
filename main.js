var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 1000,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

$(function(){
  $("button").click(function(){
   if($('.hnav').hasClass("open")){
      $('.hnav').removeClass("open");
      $('.navshadow').css("display","none");
      $('span').removeClass("open");
   } else {
    $('.hnav').addClass("open");
    $('.navshadow').css("display","block");
    $('span').addClass("open");
   }
  });
});
