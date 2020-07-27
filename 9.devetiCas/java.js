//13 zadatak
let broj = 15;
if(broj%2 == 0){
    console.log("broj je paran");
} else {
    console.log("broj je neparan");
}
//18 zadatak
let testbroj = 17.2;
console.log(testbroj, Math.trunc(testbroj));
if(testbroj == Math.trunc(testbroj)){
    console.log("ceo broj");
} else {
    console.log("decimalni broj");
}

//19 zadatak
// nadji najveci i najmanji i ondaa srednji je kad saberes sva tri pa oduzmes najveci i najmanji

//21 zadatak najveci od tri uneta broja

let broj1 = 13;
let broj2 = 13;
let broj3 = 13;

if (broj1 ==broj2 && broj2 == broj3){
    console.log("svi su isti");
}else if(broj1 == broj2){
    console.log("brojevi 1 i 2 su isti");
}else if( broj2 == broj3){
    console.log("broj 2 i 3 su isti");
}else {
    console.log("svi su razliciti");
}

if(broj1>=broj2 && broj1>=broj3){
    console.log("broj 1 je najveci");
} else if(broj2>=broj1 && broj2>=broj3){
    console.log("broj 2 je najveci");
}
else {
    console.log("broj 3 je najveci");
}

//23
let god = 2000;
if (( god%4==0 && god%100!=0) ||  god%400==0){
    console.log("prestupna godina");
} else {
    console.log("prosta godina");
}
 // zadata vrednost u minutima, prevesti je u sate i minute

 let minuti = 69;
 let sati = Math.trunc(minuti/60);
 let minn = minuti%60;
 console.log(`${sati} : ${minn}`);

 //25 zadatak

 let dan = 0;
 let sat = 9;
 let min = 58;
 if (dan == 0 || dan==6){
     //vikend od 10 do 18
     if( sat>= 10 && sat < 18){
         console.log("vikend otvoreno");
     } else{
         console.log("vikend zatvoreno");
     }
 } else {

     // od 9 do 20
    if( sat>=9 && sat>20){
        console.log("radni dan otvoreno");
    } else {
        console.log("radni dan zatvoreno");
    }
}
