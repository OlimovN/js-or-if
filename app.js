// let barchaRashodlar = 9732000
// let ism = prompt("ismingizni kirirting;")
// let sum = prompt("Hozirda sizda qancha pulingiz bor")

// if(barchaRashodlar <= sum){
//     alert( `Qadirli  ${ism}, Oq yol safaringiz behatar bolsin `)
// }else  {
// alert(`Qadirli ${ism}, ${barchaRashodlar-sum} sum pulingiz yetmayabdi,  Biroz ishlashingizga togri keladi  `)
// }
   

// let samalyotBileti = 6287500;
// let mehmonxonaTolovi = 3143750;
// let boshqajoylaruchun = 1626000;


// toq yoki juftligini aniqlovchi  programma

// let son = prompt("Sonni kirirting")
// if(son%2==0) {
//     alert(  `juft`)
// } else {
//     alert(  `Toq`)
// }





// let minus = 0 
// let plus = 0

//  let son1 = prompt("Birinchi sonni kiriting")
//  let son2 = prompt("Ikkinchi sonni kiriting")
//  let son3 = prompt("Uchinchi sonni kiriting")

//  if(son1>0){
//     alert(plus+1)
//  } else{
//     alert(minus+1)
//  }
//  if(son2>0){
//     alert(plus+1)
//  }
//  if(son1>0){
//     alert(plus+1)
//  }else{
//         `musbat sonlar & ${plus}, & ta`
//  }



//  tub sonlar 

// function showPrimes(n) {
//     for(let i = 2 ; i< n ; i++) {
//         if(isPrime(i)) continue
//         console.log(i)
//     }
// }

// function isPrime(n) {
//     for(let i = 2; i < n; i++) {
//         if(n % i == 0) return false;
//     }
//     return true;
//     }

//     showPrimes(15)


// let son = prompt"Birinchi sonni kiriting"
// let son2 = prompt"Ikkinchi sonni kiriting"

// for(son > 2; son2 <= 3;) {
// alert(son > 2)
// } else()


// for boshlanishi


// 2

// let a = Number(prompt("Son kiriting"));
// for (let i = a; i >= 1; i--) {
//   console.log(i);
// }


// 3
// let a = Number(prompt("Sonni kiriting"));
// let sum = 0;
// for ( i = 1; i <= a; i++) {
//     sum =+ i ; 
// }
// console.log(sum)


// 4


// let a = prompt("Son kiriting:");
// let sum = 0;
// for (i = 1; i <= a; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log("sum:", sum);

// 5-masala

// let a = prompt("Son kiriting!");
// let sum = 0;
// for (i = 1; i <= a; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log("sum", sum);

// 6-masala

// let a = prompt("Son kiriting");
// for (i = 1; i <= a; i++) {
//   if (a % i == 0) {
//     console.log(i);
//   }
// }

// 7-masala

// let a = prompt("Son kiriting");
// let sum = 0;
// let b = 0;
// for (i = 1; i <= a; i++) {
//   if (a % i == 0) {
//     sum += i;
//     b++;
//   }
// }
// console.log(`${b} ta boluvchi, yigindi: ${sum}`);




// boolean


// 1-masala

// let son = Number(prompt("Son kiriting"));
// if (son > 0) {
//   console.log("Bu musbat son");
// } else {
//   console.log("Bu musbat son emas");
// }

// 2-masala

// let son = Number(prompt("Son kiriting"));
// if (son % 2 == 1) {
//   console.log("Bu toq son");
// } else {
//   console.log("Bu toq son emas");
// }

// 3-masala

// let son = Number(prompt("Son kiriting"));
// if (son % 2 == 0) {
//   console.log("Bu juft son");
// } else {
//   console.log("Bu juft son emas");
// }

// 4-masala

// let a = Number(prompt("Son kiriting"));
// let b = Number(prompt("Son kiriting"));
// if (a > 2 && b <= 3) {
//   console.log("A 2 dan katta va B 3dan kichik yoki teng");
// } else {
//   console.log("A 2 dan katta emas va B 3dan kichik yoki teng emas");
// }

// 5-masala

// let a = Number(prompt("Son kiriting"));
// let b = Number(prompt("Son kiriting"));
// if (a >= 0 && b < -2) {
//   console.log("A 0 dan katta yoki teng va B -2 dan kichik ");
// } else {
//   console.log("A 0 dan katta yoki teng emas va B -2 dan kichik emas");
// }

// 6-masala

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if (a <= b && b <= c) {
//   console.log(true );
// } else {
//   console.log(false);
// }

// 7-masala

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if ((a < b && b < c) || (c < b && b < a)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 8-masala

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// if (a % 2 == 1 && b % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 9-masala

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// if (a % 2 == 1 || b % 2 == 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 10-masala

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// if ((a % 2 == 1 && b % 2 == 0) || (a % 2 == 0 && b % 2 == 1)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 11-masala

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// if ((a % 2 == 1 && b % 2 == 1) || (a % 2 == 0 && b % 2 == 0)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 12-masala

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if (a > 0 && b > 0 && c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 13-masala

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if (a > 0 || b > 0 || c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 14-masala

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if (
//   (a > 0 && b < 0 && c < 0) ||
//   (a < 0 && b > 0 && c < 0) ||
//   (a < 0 && b < 0 && c > 0)
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 15-masala

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if (
//   (a > 0 && b > 0 && c < 0) ||
//   (a < 0 && b > 0 && c > 0) ||
//   (a > 0 && b < 0 && c > 0)
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 16-masala

// let n = Number(prompt("n Son kiriting"));

// if (n % 2 == 0 && n > 9 && n < 100) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 17-masala

// let n = Number(prompt("n Son kiriting"));

// if (n % 2 == 1 && n > 99 && n < 1000) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 18-masala

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if (a == b || a == c || c == b) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 19-masala

// let a = Number(prompt("a Son kiriting"));
// let b = Number(prompt("b Son kiriting"));
// let c = Number(prompt("c Son kiriting"));
// if (a == -b || a == -c || c == -b) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 20-masala

// let n = Number(prompt("3 xonali son kiriting"));
// let a = n % 10;
// let b = ((n % 100) - (n % 10)) / 10;
// let c = (n - (n % 100)) / 100;
// if (a != b && a != c && c != b) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 21-masala

// let n = Number(prompt("3 xonali son kiriting"));
// let a = n % 10;
// let b = ((n % 100) - (n % 10)) / 10;
// let c = (n - (n % 100)) / 100;
// if (a > b && a > c && c < b) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 22-masala

// let n = Number(prompt("3 xonali son kiriting"));
// let a = n % 10;
// let b = ((n % 100) - (n % 10)) / 10;
// let c = (n - (n % 100)) / 100;
// if ((a > b && a > c && c < b) || (a < b && a < c && c > b)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 23-masala

// let n = Number(prompt("3 xonali son kiriting"));
// let a = n % 10;
// let b = ((n % 100) - (n % 10)) / 10;
// let c = (n - (n % 100)) / 100;
// if (a == c && n > 99 && n < 1000) {
//   console.log(true);
// } else {
//   console.log(false);
// }
