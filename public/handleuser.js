// tangkap element form dengan id user_form
let user_form = document.getElementById('user_form');

// array
let dataSiswa = [];

// function yang akan selalu berjalan ketika page reload
window.onload = function () {
  // kita akan chek apakah ada loca; stroage dengan nama dataSiswa
  let stroageData = localStorage.getItem('dataSiswa');

  if (!stroageData) {
    localStorage.setItem('dataSiswa', '[]');
    return;
  }

  dataSiswa = JSON.parse(stroageData);
};

// tambahkan event listenernya
user_form.addEventListener('submit', function (event) {
  // stop form dari reload
  event.preventDefault();

  // buat sebuah object sebagai wadah
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

  //push data ke array
  dataSiswa.push(userData);

  // console.info(dataSiswa);

  //input data ke local stroage
  localStorage.setItem('dataSiswa', JSON.stringify(dataSiswa));
});
