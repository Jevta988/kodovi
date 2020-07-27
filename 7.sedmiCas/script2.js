console.log(x);

let age;
console.log(age, age + 3);

age = null;
console.log(age, age + 3);

x = 5;
y = 7;
x = x + y;
console.log(x, y);

x *= 5; // x = x * 5;
y -= 2;
console.log(x, y);

x = 4.3;
y = -8;
x++; // x = x + 1;
y--; // y = y - 1;
console.log(x, y);

console.log(5 % 2); //ostatak 

console.log(75 % 6); // ostatak

console.log(y ** 2);

let datum = new Date();

let sati = datum.getHours();
let minuti = datum.getMinutes();
console.log(sati, minuti);
ukupnoMinuta = sati * 60 + minuti;
console.log(ukupnoMinuta)

let god = datum.getUTCFullYear();
let mes = datum.getUTCMonth() + 1;
let dan = datum.getDate();
let danUnedelji = datum.getDay();
console.log(god,mes, dan, danUnedelji);
console.log(`${god}.${mes}.${dan}`);
console.log(`${god}.${mes}.${dan}`);

n = 1 % 3;
console.log(n);