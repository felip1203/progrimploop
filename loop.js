let arrayf = ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela"]


function transformaParaMaiusculo(arrayf)

{
    for (let i=0; i<arrayf.lenght; i++){
         arrayf[i] = arrayf[i].toUpperCase();
    }

    return arrayf;
}

console.log(transformaParaMaiusculo(arrayf));

