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

// Array
let hoby = ['Code', 'Bola', 123, 'catur', 'nonton'];
let age = [3, 32, 33, 34];
let myData = ['dicky', 34, true, { street: 'jkrta', no: 79 }];
let dataMahasiswa = [
  {
    nama: 'dicky',
    nim: 2003015118,
  },
  {
    nama: 'oktv',
    nim: 1234,
  },
];

// hoby.push('game'); // menambahkan variabel
hoby.unshift('game'); //ini jadi pertama gamenya

console.info(myData);

// console.info(hoby[3]);
// console.info(hoby[1]);
