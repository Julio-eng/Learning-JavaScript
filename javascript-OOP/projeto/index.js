import {Cliente} from "./Cliente.js";
import {Diretor} from "./Funcionarios/Diretor.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {SistemaAutenticacao} from  "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 12345678900, 10000);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Ricardo", 12378945600, 5000);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78912345600, "12345");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "12345");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);