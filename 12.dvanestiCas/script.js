//prazna funkcija, ne prosledjuje joj se vrednost

function mojaFunkcija(){
    console.log("moja funkcija");
}
mojaFunkcija();
//funkcija kojoj se prosladjuje jedna vrednost
function ispisiText(tekst){
    console.log(tekst);
}

ispisiText("blavlada");

function ispisiKorisnika(ime){
    console.log(`ulogovani korisnik je ${ime}`);
}

ispisiKorisnika("vlada");

// funkcija sa dva prosledjena parametra

function korisnik(ime, prezime, god){
    console.log(`korisnik je: ${ime} ${prezime} ima ${god} godina`);

}
korisnik("vlada", "jevtic",32);
let a = "ugljesa";
let b ="ugljesic";
korisnik(a,b);

// funkcija koja odredjuje zbir dva broja
function zbir(br1, br2){
    let rez = br1 + br2;
    console.log(rez);
}

zbir (2,3 );
zbir (-21,-5);

let x =9;
let y = 32;
zbir(x,y);

// funkcija koja vraca rezultat
function zbir3(br1,br2,br3){
    let rez = br1 + br2 + br3;
    return rez;
}

let z = zbir3(1,2,5);
console.log( "rezultat je: " + z);
console.log("zbir je: " + zbir3(4,5,6));

let i = zbir3(1,1,1);// 3
let j = zbir3(2,2,2);// 6
let k = zbir3(3,3,3);//9
console.log(i,j,k);
let t = zbir3(i,j,k);
console.log(t);
console.log(zbir3(1,1,1),zbir3(2,2,2),zbir3(3,3,3));
console.log(zbir3(zbir3(1,1,1),zbir3(2,2,2),zbir3(3,3,3)));

zbir(i,j);// u funkciji ima console.log, ne treba return

//kada funkcija ispisuje, samo je pozovemo
//kada funkcija vraca ( return), onda sacuvamo njenu vrednost negde pa tek onda ispisujemo

//zadatak3
function neparan(n){
    if(n%2 != 0){
        return true;
    }else{
        return false;
    }
}
// vraca funkcija, kad se pozove nista ne ispisuje

console.log(neparan(3));//pozvana funkcija se ispisuje u consoli


let nb = neparan(5);// funkcija postavljena u promenljivoj

console.log(nb);//pozvana promenlljiva u kojoj je funkcija

if(nb == true){
    console.log(`prosledjeni broj je neparan`);
}else {
    console.log("prosledjeni broj je paran");
}

for(let i = 0; i<10; i++){
    let pomocna = neparan(i);
    if(pomocna == true){
        console.log(`broj ${i} je neparan`);
    }else {
        console.log(`broj ${i} je paran`);
    }
}

//zadatak4

function max2 (broj1,broj2){
    if(broj1>broj2){
        return `broj ${broj1} je veci od ${broj2}`;
    }else{
        return `broj ${broj2} je veci od ${broj1}`;
    }
}

console.log(max2(5,6));
console.log(max2(7,4));

function max4 (a,b,c,d){
    let najveci = b;
    if (a>b && a>c && a>d){
        return najveci = a;
    } else if (c>b && c>a && c>d)
    {
        return najveci = c;
    }
    else if (d>b && d>c && d>a)
    {
    return najveci = d;
    }else
    {
    return najveci;
    }
}
console.log(max4(5,9,10,3));

//zadatak5 napraviti funkciju koja prikazuje sliku za prosledjenu adresu
function prikaziSliku(url){
    let divSlika= document.getElementById("slika");
    divSlika.innerHTML /*+*/=`<img src= "${url}">`; 
}
prikaziSliku("data:image/jpeg;base64,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");


//zadatak6
function boja(color){
    let text = document.getElementById("para");
    text.style.color= color;
}
boja("red");

//zadatak7
function velicinaFonta(unesiBroj){
    let text = document.getElementById("para");
    text.style.fontSize= unesiBroj + "px";
}
velicinaFonta(25);

//zadatak8 recenica vise puta a velicina fonta recenica treba da bude jednaka iteratora
function putaPet(recenica){
    let d= document.getElementById("para2");
    for(let i = 10; i<=30;i+=5/*uvecava za 5,*/ ){
        d.innerHTML += `<p style="font-size: ${i}px"> ${recenica} </p>`;
        //return ispis += recenica;
    }
}
putaPet("neki tekst");

//zadatak10
function deljivSaTri(n,m){
     
    let brojevi=0;
    for (let i=n;i<=m;i++){
        if(i%3==0){
             console.log(i);
            brojevi++;
        } 
        
    }
    console.log(`broj takvih je ${brojevi}`);
}
deljivSaTri(1,9);

//zadatak11
function sumiraj(n,m){
    let suma = 0;
        for(let i=n;i<=m;i++){
            suma += i;
        }
        //console.log(suma);
        return suma;
}
let sm = sumiraj(1,6);
console.log("suma je: "+ sm);

//zadatak12
function mnozi(n,m){
    let suma = 1;
        for(let i=n;i<m;i++){
            suma *= i;
        }
        console.log(suma);
}
mnozi(2,5);

//zadatak13 aritmeticka sredina brojeva
/*
let number1=5;
let number2= 10;
let ari ;
let suma = 0;
for(let i=number1; i<number2;i++){
   suma += i;
   ari = suma/suma++;

}
console.log(ari);
*/
function aritmetickaSredina(n,m){
    let s = sumiraj(n,m);

    let br = 0;
    for( let i=n; i<=m; i++){
        br++;
    }
    let arsr = s/br;
    return arsr;
}
console.log(aritmetickaSredina(1,6));

//drugi nacin
function aritmetickaSredina1(n,m){
    let s = 0;
    let br = 0;
    for( let i=n; i<=m; i++){
        s+=i;
        br++;
    }
    let arsr = s/br;
    return arsr;
}
console.log(aritmetickaSredina1(1,6));


//zadatak14 
function aritmeticka3(n,m){
    let s3 = 0;
    let brojbrojeva = 0;
    for(let i=n; i<=m; i++){
        if (i%10 == 3){
            s3 += i;
            brojbrojeva++;
        }
    }
    let arsr3 = s3/brojbrojeva;
    return arsr3;
}
console.log("aritmeticka sredina brojeva cija je zadnja cifra 3 je:" + aritmeticka3(30,50));

//zadatak17
// n meseci traje praksa
// a dinara plata
// d dinara povisica
//funkciju kojoj se prosledjuju n,a i d.
//treba da vrati vrednosti koliko cete ukupno novca zaraditi
// ako svakog meseca dobijemo povisicu
/*
primer:
n=3;
a=1000
d=300
i=1 plata1=1000
i=2 plata2= 1000 + 300 = 1000 + 300*1
i=3 plata3= 1000 +300 + 300 = 1000 + 300*2
ukupna plata = plata1 + plata2 + plata3 = 1000 + 300*3
*/

function placenaPraksa(n,a,d){
    ukupnaplata=0;
    for(let i=1; i<=n; i++){
        let tekucimesecPlata= a + (i-1)*d;
        ukupnaplata += tekucimesecPlata;
    }
    return ukupnaplata;
}

n = 4;
a = 1000;
d= 300;

console.log(`ukupna plata nakon ${n} meseci, sa osnovicom ${a} i povisicom ${d} iznosi ${placenaPraksa(n,a,d)}`);

//drugi nacin
function ukupnaPlata (n, a, d){
    let ukupnaPlataZaSveMesece = a;
    for (let i = 2; i <= n; i++){
        a += d;
        ukupnaPlataZaSveMesece += a;
    }
    return ukupnaPlataZaSveMesece;
}
