$(function() {
    $('.gnb > ul > li').on('mouseover', function() {
        $('.bgGnb').slideDown();
        $('.gnb .sub').fadeIn()
    })
    $('.gnb').on('mouseleave', function() {
        $('.bgGnb').slideUp(300);
        $('.gnb .sub').fadeOut(300)
    })
    var swiper = new Swiper(".mainSlide", {
      spaceBetween: 30,
      centeredSlides: true,
/*       autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },   */    
      pagination: {
        el: ".swiper-pagination",
        clickable: true,        
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper = new Swiper(".text1", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



});
