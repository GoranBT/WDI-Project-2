const $burger = $('.navbar-burger');
const $menu = $('.navbar-menu');
const $form = $('form');

$burger.on('click', () => {
  $burger.toggleClass('is-active');
  $menu.toggleClass('is-active');
});

if($form.length > 0) $form.validate();
