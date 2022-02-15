console.log(`Trabalhando com loops\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const destino = "Salvador";

console.log("Destinos Possíveis:\n");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;

while(contador < listaDeDestinos.length){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador+=1;
}

console.log("\nDestino existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}

for(let cont = 0; cont < listaDeDestinos.length; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
}