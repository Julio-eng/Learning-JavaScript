import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

// Cliente e conta corrente 1 -----------------------------------
const cliente1 = new Cliente("Kakaroto", 111111111);
const contaCorrente1 = new ContaCorrente(1001, cliente1);
const contapoupanca1 = new ContaPoupanca(1000, cliente1, 1001);
//---------------------------------------------------------------
console.log(cliente1);
console.log(contaCorrente1);
console.log(contapoupanca1);