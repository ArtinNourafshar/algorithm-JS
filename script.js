// q1

let a = 10;
let b = 5;
let c = 3;
let d = 2;
let x = 4;

calculate(a , b , c , d , x);

function calculate(a , b , c ,d ,x){
    if (a > (c + d )){

        console.log(a * x);

    } else{
        console.log(b * d);
    }
    
}


// p2
for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
//   p3


let sum = 0;
for (let i = 9; i <= 900; i += 9) {
  console.log(i);
  sum += i;
}
console.log( "9ta900" , sum);

// q4

const income = 120000;

let tax = 0;

if (income < 50000) {
  tax = 0;
} else if (income <= 100000) {
  tax = (income - 50000) * 0.10;
} else {
  tax = (income - 100000) * 0.15 + 5000;
}

console.log( "maliat shoma ==>" , tax );

// روش دوم  آسان تر 

const incomes = [50000, 100000, 120000, 150000, 200000];

for (let income of incomes) {
  let tax = 0;

  if (income < 50000) {
    tax = 0;
  } else if (income <= 100000) {
    tax = (income - 50000) * 0.10;
  } else {
    tax = (income - 100000) * 0.15 + 5000;
  }

  console.log("daramad" , income , "maliat" , tax);
}

// q5

const numbers = [12, 24, 36, 48, 60 , 17 , 34 , 876 , 13];

for (let num of numbers)

  if (num % 3 === 0) {
    console.log("bakhsh pazir ast " ,  num);
  } else {
    console.log("bakhsh pazir nist" , num
    );
  }

  // q6
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of number) {
  if (num % 3 === 0) {
    console.log(`bakhs pazir ast ${num}`);
  } else {
    console.log(`bakhs pazir nist ${num}`);
  }
}

// q7
const M = 10;
const N = 20;

for (let i = M; i <= N; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// q8 


for (let i = 10; i < 100; i++) {
  let a = Math.floor(i / 10);
  let b = i % 10;
  // ^
  // |
  // |
  // | 
  // | 
  

  if (a == b) { 
      console.log(i);
  }
}

// q9
for (let i = 1; i <= 100; i++) {
  let reverse = 0;
  let original = i;
  while (i!= 0) {
    reverse = reverse * 10 + i % 10;
    i = Math.floor(i / 10);
  }
  if (original == reverse) {
    console.log(original);
  }
  i = original;
}

// 10

function printPrimeNumbers() {
  for (let i = 3; i < 1000; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

// q11
function numberMoshabeh() {
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
// q12
const n = 12;
let i = 1;
let count = 0;

while (i <= n) {
  if (n % i === 0 && i % 4 === 0) {
    console.log(i);
    count++;
  }
  i++;
}

console.log(`maqsom alaih haye 4 : ${count}`);
// q13
const random = Math.floor(Math.random() * 1000) + 1;
console.log(` inam az adad random ====>  : ${random}`)
// q14
const person = [{




  name: "AhmadReza",
  hg: 80000 ,
  bank: 5,
  bankC: 8,
  sod:70000,
  naghlOenteghal:20000 ,




}]


// _________
person.map(item => {
  let get = item.bank * item.sod;
  let out = item.bankC * item.naghlOenteghal;
  let cash = (get - out)+item.hg;
  console.log(cash);
  
  
})



// ______________________________________________________________________________________________
// qesmat Jadid 03/08/28

//  Q15 

let     ii     = 0;
while (ii <= 2) {
  let j = 0;
  while (j <= 5) {
    let k = 0;
    while (k <= 10) {
      if (ii * 20 + j * 10 + k * 5 === 50) {
        console.log(ii , j , k);
      }
      k++;
    }
    j++;
  }
  ii++;
}

// Q16
for (let i = 100; i <= 999; i++) {
  let ones = i % 10;
  let hundreds = Math.floor(i / 100);
  if (ones === hundreds && (i % 100) % 2 === 0) {
    console.log(i);
  }
}

// Q17 
// print ===> adad mosalasin 
let jam  = 0;
for (let i = 1; i <= 10; i++) {
  jam  += i;
  console.log(jam );
}
// Q18    fibonachi 

let anum = 0;
let bnum = 1;
for (let i = 0; i < 10; i++) {
  console.log(anum);
  let temp = anum;
  anum = bnum;
  bnum = temp + bnum;
}

// Q19

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    let num = i * 10 + j;
    if (num % 2 === 0 && i % 2!== 0 && j % 2!== 0) {
      console.log(num);
    }
  }
}

// Q20
const randomDay = Math.floor(Math.random()) +random ;
if(let = i , i = 1 , i<=365 ){
  console.log(`random day ${randomDay}`)
}
