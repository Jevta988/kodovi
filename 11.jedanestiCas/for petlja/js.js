let i;
for( i = 0; i <= 10; i++){
    console.log(i);
}
//dvostruka vrednost 5 zadatak
for ( i=5; i<15; i++) {
    console.log( 2 * i);
}

//suma brojeva od 1 do 20
let suma = 0;
for(i=1; i <= 20; i++){
    suma+= i;
}
console.log(suma);

//suma parnih
suma=0;
for(i=2; i <=20; i+=2){
    suma +=i;
}
console.log(suma);

//suma parnih  brojeva od n do m
let n  = 5;
let m = 25;
suma = 0;
for(i=n; i<=m; i++){
    if(i%2 == 0){
        suma += i;
    }
}
console.log(suma);

//suma kvadrata od n do m
 n = 2;
 m = 5;
suma = 0;
for(i=n; i<=m; i++){
    suma += i**2;
}
console.log(suma);
/*
//zadatak 10
let divSlike = document.getElementById("slike");
for(i=1; i<=3; i++){
    divSlike.innerHTML += `<img src="slike/${i}.png">`
}
//bonus
for(i = 1; i<= 10; i++){
    if(i%3==1){
        divSlike.innerHTML += `<img src="slike/1.png">`;
    }else if (i%3 ==2 ){
        divSlike.innerHTML += `<img src="slike/2.jpg">`;
    }else{
        divSlike.innerHTML += `<img src="slike/3.png">`;
    }
    divSlike.innerHTML += `<br>`;
}

*/
//zadatak 12
let broj1 = 20;
let broj2 = 100;
 suma = 1;
for(i=broj1; i<100; i++){
    if(i%11== 0){
        suma *= i;
    }
}
console.log(suma);


//zadatak13
let broj3 = 5;
let broj4 = 150;
suma = 1;
for (i=broj3; i<150; i++){
    if(i%13== 0){
        suma++;
    }
}
console.log(suma);

//zadatak15
let broj5 = -5;
let broj6 = 5;
let suma1 = 0;
let suma2 = 0;
for (i=broj5; i<=broj6; i++){
    if(i<0){
        suma1++;
        
    }else {
        suma2++;
        
    }
}
console.log(suma1);
console.log(suma2);

//zadatak16
let broj7 = 5;
let broj8 = 50;
let suma3 = 0;
for(i=broj7; i<=broj8; i++){
    if(i%3 == 0 || i%5 == 0){
        suma3++;
    }
}
console.log(suma3);

//zadatak14 aritmeticka sredina brojeva aritmeticka = suma brojeva / broj brojeva

n = 10;
m = 20;
suma = 0;
let brojBrojeva = 0;
for(i=n; i<=m; i++){
    suma += i;
    brojBrojeva += 1;
}
let aritmeticka = suma / brojBrojeva;
console.log(aritmeticka);
 //17 zadatak Prebrojati i izračunati sumu brojeva od n do m
 // kojima je poslednja cifra 4 i parni su.
 suma = 0;
 brojBrojeva = 0;
 n =100;
 m = 150;

// %10 vraca poslednju cigru bilo kog broja
 //4, 14, 24, 34,44
 for(i=n; i<=m; i++){
     if(i%10 == 4){
         suma += i;
         brojBrojeva++;
     }
 }
 console.log(suma, brojBrojeva);



//dolazak do prve cifre/sve cifre nekog broja

 broj = 41256;
 while(Math.floor(broj/10)>0){
     console.log(broj%10);//koj broj otklanjamo
    broj = Math.floor(broj/10);
    console.log(broj);//broj koji ostaje
 }
 //zadatak 21
 n=5;
 m=10;
 a=3;
 summa=1;
 for(i=n; i<=m; i++){
     if(i%a==0){
        summa *= i;
     }
 }
 console.log(summa);

 //zadatak18
 n=5;
 m=10;
 a=3;
 summa=1;
 for(i=n; i<=m; i++){
     if(i%a==0){
        console.log(i);
     }
 }
 //zadatk19
 n=5;
 m=10;
 a=3;
 summa=1;
 for(i=n; i<=m; i++){
     if(i%a!=0){
        console.log(i);
     }
 }
 //zadtak20
 n=5;
 m=10;
 a=3;
 summa=0;
 for(i=n; i<=m; i++){
     if(i%a!=0){
        summa += i;
     }
 }
 console.log(summa);