let ocena = 4;
switch(ocena){
    case 1:
        console.log("nedovoljan");
        break;
    case 2:
        console.log("dovoljan");
        break;
     case 3:
        console.log("dobar");
        break;
    case 4: case 5:
        console.log("dvrlo dobar ili odlican");
        break;
    default:
        console.log("ne znam za tu ocenu");
}


//zadatak 7
let mesec = 5;
let god = 2000;
switch(mesec){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("31 dan")
        break;
    case 2:
        if (( god%4==0 && god%100!=0) ||  god%400==0){
            console.log("29 dana");
        } else {
            console.log("28dana");
        }
        break;
    
    case 4:  case 6: case 9: case 11:
        console.log("30 dana");
        break;

    default:
        console.log("ne postoji taj mesec");
}

//zadatak 8

let boja = "orange";
let p = document.getElementById("para");
switch(boja) {
    case "red":
        p.style.color= "red";
        break;
    case "blue":
        p.style.color= "blue";
        break;
    case "green":
        p.style.color= "green";
        break;
    default:
        p.style.color= "yellow";
}

//zadatak 1
let dan = 7;
switch(dan){
    case 1:
        console.log("ponedeljak");
        break;
    case 2:
        console.log("utorak");
        break;
    case 3:
        console.log("sreda");
        break;
    case 4:
        console.log("cetvrtak");
        break;
    case 5:
        console.log("petak");
        break;
    case 6:
        console.log("subota");
        break;
    case 0:
    console.log("nedelja");
    break;
    default:
        console.log("ne postoji taj dan");
}

//zadatak 3
let broj = 9;

switch(broj){
    case 0: case 2: case 4: case 6: case 8: 
        console.log("paran broj");
    break;
    case 1: case 3: case 5: case 7: case 9:
        console.log("neparan broj");
    break;
    default:
        console.log("nepostojeci broj")

}

//zadatak sa slacka
let brojBendova = 10;
let pocetakKoncertaH = 9;
let pocetakKoncertaM = 0;
let pocetakKoncertaS = 0;
let k = 35;
let t = 5;


//zadatak 4
let br1 = 5;
let br2 = 2;
let op = "d";
let rez;

switch(op){
    case "s":
         rez = br1+br2;
        console.log(`${br1} + ${br2} = ${rez}`);
        break;
    case "o":
         rez = br1-br2;
        console.log(`${br1} - ${br2} = ${rez}`);
        break;
    case "m":
         rez = br1*br2;
        console.log(`${br1} * ${br2} = ${rez}`);
        break;
    case "d":
        if( br2 == 0){
            console.log("0 se ne deli");
        }else {
            rez = br1/br2;
        console.log(`${br1} / ${br2} = ${rez}`);
        }
        break;
    default:
        console.log("greska");
}