$('.slider-wrapper').slick({
  prevArrow: $('.arrow-left'),
  nextArrow: $('.arrow-right')
});
$(function() {
    let header = $('.header');
    let iconImage = $('.fixed-logo');
    let mainLogo = $('.logo');
    let menuItem = $('.item');
    let mobilelogo = $('.mobile-fixed');
    let mobile = $('.mobile');
    let burgerWrapper = $('.burger-wrapper');
    $(window).scroll(function() {
      if($(this).scrollTop() > 0) {
        mobilelogo.addClass('active')
       header.addClass('fixed');
       iconImage.addClass('on');
       mainLogo.addClass('logo-off');
       menuItem.addClass('item-fixed');
        mobile.addClass('off');
        burgerWrapper.addClass('fixed');
      } else {
        mobilelogo.removeClass('active')
       header.removeClass('fixed');
       iconImage.removeClass('on');
       mainLogo.removeClass('logo-off');
       menuItem.removeClass('item-fixed');
       mobile.removeClass('off');
       burgerWrapper.removeClass('fixed');
      }
    });
});

const burgerWrapper = document.querySelector('.burger-wrapper');
const popupContent = document.querySelector('.popup-content');
burgerWrapper.onclick = ()=>{
  if(burgerWrapper.classList.contains('active')){
    burgerWrapper.classList.remove('active')
    popupContent.classList.remove('active');
    document.body.setAttribute('style', '');
  } else {
    burgerWrapper.classList.add('active');
    popupContent.classList.add('active');
    document.body.setAttribute('style', 'overflow:hidden;');
  }
  // burgerWrapper.classList.toggle('active');
  //   popupContent.classList.add('active');
  //   document.body.setAttribute('style', 'overflow:hidden;');
}
// burgerWrapper.onclick = ()=>{
//     popupContent.classList.remove('active');
//     document.body.setAttribute('style', '');
// }