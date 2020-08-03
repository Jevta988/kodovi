//zadatak1
/*
i = 1;
while(i<=20){
    console.log(i);
    i++;
    
}

//zadatak2
i = 1;
text="";
while(i<=20){
    text= text + i + " ";
    //ne ovde console.log
    i++;
    }
console.log(text);

//zadatak3
i=20;
while(i>=1){
    console.log(i);
    i--;
}

//zadatak4

i=20;
while(i>=1){
    
    console.log(i);
    i=i-2;

}


//ispisati parne brojeve od n do m (n<m)

let n= 34;
let m= 55;
i=n;
while(i<= m){
    if(i%2 == 0){
        console.log(i);
    }
    i++;
}


//zadatak7 zbir brojeva od n do m

n= 3;
m= 10;
i=n;
let suma=0;
while(i<=m){
    suma += i;
    i++;
}
console.log(suma);
*/
//zadatak 8
/*
n=1;
m= 5;
i=n;
let proizvod = 1;
while(i<=m){
    proizvod *= i;
    i++;
}
console.log(proizvod);

//zadatak 9
n=1;
m= 4;
i=n;
let proizvod2 = 0;
while(i<m){
    proizvod2+= i**2;
    i++;
}
console.log(proizvod2);
*/
//zadatak10
/*
n=1;
m= 4;
i=n;
let proizvod3 = 0;
while(i<=m){
    if(i%2==0){
        proizvod3+= i**2;     
    }
    else {
        proizvod3+= i**3;  
    }
    i++;
}
console.log(proizvod3);
*/
//zadatak 11 broj delioca, ne dellioci
/*
let k = 24;
i=1;
let broj=0;
while(i<=k){
    if(k%i==0){
        broj++;
    }
    i++;
}
console.log("broj delioca",broj);
*/
//zadatak12 prost ili slozen
/*
let k = 3;
i=1;
let broj=0;
while(i<=k){
    if(k%i==0){
        broj++;
    }
    i++;
}
if(broj>2){
    console.log("slozen");
}else{
    console.log("prost");
}
*/
let n=5;
let i=1;
let a;
let broj=0;
while(i<=n){
    a= i**3 - 3*i + n; 
     
      if(a/7==0){
          broj++;
      } 
      i++;    
}
console.log(broj);


    


