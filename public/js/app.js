"use strict";var $burger=$(".navbar-burger"),$menu=$(".navbar-menu"),$form=$("form");$burger.on("click",function(){$burger.toggleClass("is-active"),$menu.toggleClass("is-active")}),$("form#register").validate({rules:{email:{email:!0,remote:"/checkemail"},username:{remote:"/checkusername"},passwordConfirmation:{equalTo:"[name=password]"}},messages:{email:{email:"Please enter a valid email address",remote:"This email is already registered"},username:{remote:"This username is already registered"},passwordConfirmation:{equalTo:"Passwords must match"}}}),$form.length>0&&$form.validate();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkYnVyZ2VyIiwiJCIsIiRtZW51IiwiJGZvcm0iLCJ0b2dnbGVDbGFzcyIsIm9uIiwidmFsaWRhdGUiLCJydWxlcyIsImVtYWlsIiwicmVtb3RlIiwicGFzc3dvcmRDb25maXJtYXRpb24iLCJtZXNzYWdlcyIsImVxdWFsVG8iXSwibWFwcGluZ3MiOiJhQUFBLElBQU1BLFFBQVVDLEVBQUUsa0JBQ1pDLE1BQVFELEVBQUUsZ0JBRFZELE1BQVVDLEVBQUUsUUFFbEJELFFBQU1HLEdBQUFBLFFBQVEsV0FHWkgsUUFBUUksWUFBWSxhQUR0QkosTUFBUUssWUFBWSxlQUduQkosRUFIRCxpQkFBQUssVUFNRUMsT0FEQUMsT0FBQUEsT0FBaUJGLEVBQUFBLE9BQVMsZUFDMUJDLFVBQU9FLE9BQUEsa0JBQ0xELHNCQUFzQkMsUUFBUSxvQkFFOUJDLFVBSndCRixPQUFBQSxNQUFBLHFDQUFBQyxPQUFBLG9DQU0xQkUsVUFBVUYsT0FBQSx1Q0FDUkQsc0JBQWdCSSxRQUFBLDJCQVFwQlQsTUFBR0EsT0FBQSxHQUFIQSxNQUFxQkEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgJGJ1cmdlciA9ICQoJy5uYXZiYXItYnVyZ2VyJyk7XG5jb25zdCAkbWVudSA9ICQoJy5uYXZiYXItbWVudScpO1xuY29uc3QgJGZvcm0gPSAkKCdmb3JtJyk7XG5cbiRidXJnZXIub24oJ2NsaWNrJywgKCkgPT4ge1xuICAkYnVyZ2VyLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgJG1lbnUudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xufSk7XG5cbiQoJ2Zvcm0jcmVnaXN0ZXInKS52YWxpZGF0ZSh7XG4gIHJ1bGVzOiB7XG4gICAgZW1haWw6IHsgZW1haWw6IHRydWUsIHJlbW90ZTogJy9jaGVja2VtYWlsJyB9LFxuICAgIHVzZXJuYW1lOiB7IHJlbW90ZTogJy9jaGVja3VzZXJuYW1lJyB9LFxuICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiB7IGVxdWFsVG86ICdbbmFtZT1wYXNzd29yZF0nIH1cbiAgfSxcbiAgbWVzc2FnZXM6IHtcbiAgICBlbWFpbDogeyBlbWFpbDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLCByZW1vdGU6ICdUaGlzIGVtYWlsIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCcgfSxcbiAgICB1c2VybmFtZTogeyByZW1vdGU6ICdUaGlzIHVzZXJuYW1lIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCcgfSxcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogeyBlcXVhbFRvOiAnUGFzc3dvcmRzIG11c3QgbWF0Y2gnIH1cbiAgfVxufSk7XG5cblxuXG5pZigkZm9ybS5sZW5ndGggPiAwKSAkZm9ybS52YWxpZGF0ZSgpO1xuIl19
