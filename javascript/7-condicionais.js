console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador menor de idade");
}

console.log("Embarque");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar!");
}

console.log(listaDeDestinos);