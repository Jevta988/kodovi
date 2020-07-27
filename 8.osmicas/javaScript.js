console.log("test");

if (3 < 5){
    console.log("tri je manje od pet");
}

if (3 < -5){
    console.log("tri je manje od - pet");
}

let a = 10;
let b = 50;
if(a<b){
    console.log(`${a} je manje od ${b}`);
}
console.log("proba");

let x = 5;
let y = "5";
if(x==y){
    console.log(`${x} i ${y} su jednake vrednosti`)
}

if(x===y){
    console.log(`${x} i ${y} su jednaki po tipu i po vrednosti vrednosti`)
}

// IF-ELSE

if(a<=b){
    console.log(`${a} je manje ili jednako od ${b}`);
}
else{
    console.log(`${a} nije manje od ${b}`);
}

// zadatak: da li su dve vrednosti jednake

let v1 = 5;
let v2 = 6;

//1. nacin
if(v1==v2){
    console.log("jednake su");
}
else{
    console.log("nisu jednake");
}

//2. nacin
if(v1!=v2){
    console.log("nisu jednake");
}
else{
    console.log("jednake su");
}

//zadatak1
let br1 = 7;
let br2 = 10;
if(br1<br2){
    console.log(`${br1} je manji od ${br2}`);
}
else{
    console.log(`${br1} je veci od ${br2}`)
}

//zadatak2
let temp = 15;
if(temp>=0){
    console.log("temperatura je u plusu");
}
else{
    console.log("temperatura je u minusu");
}

//zadatak3
let divPol = document.getElementById('pol');
let pol = "m";
if(pol== "m"){
    divPol.innerHTML = ' <img src="female.png"> ';
}
else{
    divPol.innerHTML = ' <img src=""> ';
}

//zadatak 4
let sat = new Date();
let jutro = sat.getHours();
if(jutro<=10){
    console.log("dobro jutro");
}
else{
    console.log("dobar dan");
}

//zadatak5

let datum = new Date();
let godina = datum.getUTCFullYear();
let rodjenje = document.getElementById("godinaRodj");
let razlika = godina - rodjenje.value;

if(razlika <= 18){
    console.log("jos si mlad za glasanje");
}
else{
    console.log("cestitamooo");
}
//tacan zadatak, proveri kako se preuzima iz html-a

// primer else if
let br = 25;
if(br<=10){
    console.log("broj je u prvoj desetici");
}
else if (br<=20){
    console.log("broj je u drugoj desetici");
}
else {
    console.log("broj je veci od trideset");
}
console.log("if-else if- else je zavrsen");
    
//zadatk 6
let prvi = 5;
let drugi = 6;
let tri = 7;

//pretpostavka
let najveci = prvi;
if(tri>najveci){
    najveci = tri;
}
if(drugi>najveci){
    najveci = drugi;
}
console.log(`najveci je ${najveci}`);

//zadat 7
let brojPoena = 73;
if(brojPoena<=50){
    console.log("pao si");
}
else if(brojPoena<=60) {
    console.log("sestica");
}
else if(brojPoena<=70) {
    console.log("sedmica");
}
else if(brojPoena<=80) {
    console.log("osmica");
}
else if(brojPoena<=90) {
    console.log("devetka");
}
else if(brojPoena<=100) {
    console.log("desetka");
}
else{
    console.log("nevalidan broj poena");
}

//zadatak 8
let dan = sat.getDay();

if(dan == 0){
    console.log("vikend");
}
else if(dan == 6){
    console.log("vikend");
}
else {
    console.log("radni dan");
}

// zadatak 9

let trenutno = new Date();
let vreme = trenutno.getHours();
if(vreme < 12){
    console.log("dobro jutro");
}
else if(vreme<18){
    console.log("dobar dan");
}
else{
    console.log("dobro vece");
}

// zadatak 10
let d1 = 13;
let m1 = 11;
let g1 = 2020;
let d2 = 14;
let m2 = 11;
let g2 = 2020;

if (g1<g2){
    console.log("prvi datum");
}else if (g2<g1){
    console.log("drugi datum");
}else{
    if(m1<m2){
        console.log("prvi datum");
    }else if(m2<m1){
        console.log("drugi datum");
    }else {
        if(d1<d2){
            console.log("prvi datum");
        }else if(d2<d1){
            console.log("drugi datum");
        }else {
            console.log("isti datumi");
        }
    }
}