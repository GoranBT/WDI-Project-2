const $burger = $('.navbar-burger');
const $menu = $('.navbar-menu');
const $form = $('form');

$burger.on('click', () => {
  $burger.toggleClass('is-active');
  $menu.toggleClass('is-active');
});

$('form#register').validate({
  rules: {
    email: { required: true, email: true, remote: '/checkemail'}
  },
  messages: {
    email: {required: 'Please enter a valid email address', email: 'Please enter a valid email address', remote: 'This email is already registered' }
  }
});



if($form.length > 0) $form.validate();
