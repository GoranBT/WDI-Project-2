const $burger = $('.navbar-burger');
const $menu = $('.navbar-menu');
const $favoriteForm = $('form.favorite');
const storedScrollTop = window.localStorage.getItem('scrollTop');

if(storedScrollTop) {
  $(window).scrollTop(storedScrollTop);
  window.localStorage.removeItem('scrollTop');
}


$burger.on('click', () => {
  $burger.toggleClass('is-active');
  $menu.toggleClass('is-active');
});

if($favoriteForm.length > 0) {
  $favoriteForm.on('submit', (e) => {
    e.preventDefault();
    // get window position
    window.localStorage.setItem('scrollTop', $(window).scrollTop());
    e.target.submit();
  });
}
