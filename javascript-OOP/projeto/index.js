import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

// Cliente e conta corrente 1 -----------------------------------
const cliente1 = new Cliente("Kakaroto", 111111111);
const contaCorrente1 = new ContaCorrente(1001, cliente1);
const contapoupanca1 = new ContaPoupanca(1000, cliente1, 1001);
const contasalario1 = new ContaSalario(cliente1);
//---------------------------------------------------------------
console.log(cliente1);
console.log(contaCorrente1);
console.log(contapoupanca1);
console.log(contasalario1);