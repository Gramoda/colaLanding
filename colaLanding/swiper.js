function adaptNav(){
    const navMenu = document.querySelector('.adaptNavigation');
    const navigation = document.querySelector('.navigation');
    navMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}

    const adaptNavigate = document.querySelector('.adaptNavigation');
    adaptNavigate.addEventListener("click",adaptNav);
var swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      loop: true,
    });

