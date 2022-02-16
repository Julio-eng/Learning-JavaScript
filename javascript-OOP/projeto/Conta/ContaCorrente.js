import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0; //O static é utilizado quando vocẽ quer mudar essa variavel para todos os objetos isntaciados daquelas classe.
   
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1; //Essa é a forma para modificar um atributo do tipo static que vale para todos os objetos.
    }

    //sobreescrevendo o comportamento do método sacar da classe mãe (Conta).
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa); 
    }
}