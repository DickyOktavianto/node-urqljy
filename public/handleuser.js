// tangkap element form dengan id user form
let user_form = document.getElementById('user_form');

// tambahkan eventlistener
user_form.addEventListener('submit', function (event) {
  // stop form dari reload
  event.preventDefault();

  // buat sebagai object sebagai wadah
  let userData = {
    ussername: '',
    email: '',
    password: '',
    phone: '',
    married: '',
    addres: '',
  };

  userData.ussername = event.target.ussername.value;
  userData.email = event.target.email.value;
  userData.password = event.target.password.value;
  userData.phone = event.target.phone.value;
  userData.married = event.target.married.value;
  userData.addres = event.target.addres.value;

  console.info(userData);
});
