// apa itu objek
// simbol object { obj_key : obj_value,}

let userDEtail = {
  ussername: 'dicky',
  email: 'dicky@gmail',
  phone: 081427208,
  age: 22,
  married: false,
};

// ini untuk pemanggilan object
//console.info(userDEtail);

// ini merubah value pada property object
userDEtail.ussername = 'okatv';
userDEtail.age = '23';
userDEtail.age = '24';

// menambahkan property baru pada object
userDEtail.address = 'jakarta';

// console.info(userDEtail.age + ' ' + userDEtail.email);
console.info(userDEtail.age);

// ambil value pada property email diobject userdetail tanpa mengunakan titik (.)

// console.info(userDEtail['email']);

//object destuct
let { ussername, email } = userDEtail;

// console.info(ussername, email);
console.info('ussername: ', ussername);
console.info(userDEtail.ussername);
