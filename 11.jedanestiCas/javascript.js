/*
let i = 1;
let j = 1;
let z = i + j;
let t = z + z-1;
console.log(t)

while(z<n){
    z=z+z;
    console.log(z);
    i++;
    j++;
}
*/
//zadatak16
let n = 6;
let fi1 = 1;
let fi2 = 1;
let fi;
let i = 3;
while (i<=n){
    fi = fi1 + fi2;
    fi1 = fi2;
    fi2 = fi;
    i++;
}
console.log(`${n}-ti clan fibonacievog niza je ${fi}`);

//zadatak17
n = 6;
let div = document.getElementById("par");
let tekst = "nesto bilo sta";
i=1;
while(i <= n) {
    if(i % 3 == 1){
        div.innerHTML  += `<p style = ' color : blue'>${tekst}</p> `;

    }else if(i%3 == 2){
        div.innerHTML += `<p style = ' color : red'>${tekst}</p> `;
    }else{
        div.innerHTML += `<p style = ' color : green'>${tekst}</p> `;
    }
    i++;
}

