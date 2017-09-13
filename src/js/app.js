const $burger = $('.navbar-burger');
const $menu = $('.navbar-menu');
const $form = $('form');

$burger.on('click', () => {
  $burger.toggleClass('is-active');
  $menu.toggleClass('is-active');
});

$('form#register').validate({
  rules: {
    email: { email: true, remote: '/checkemail' },
    username: { remote: '/checkusername' },
    passwordConfirmation: { equalTo: '[name=password]' }
  },
  messages: {
    email: { email: 'Please enter a valid email address', remote: 'This email is already registered' },
    username: { remote: 'This username is already registered' },
    passwordConfirmation: { equalTo: 'Passwords must match' }
  }
});



if($form.length > 0) $form.validate();
