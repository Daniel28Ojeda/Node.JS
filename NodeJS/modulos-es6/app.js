import { pessoa, soma, number1 } from './pessoa.js';
import * as Pess from './pessoa.js'
//mudar a extensão deste arquivo que usa o importador tbm para .MJS - correto é definir no package JSON e manter .JS

console.log(pessoa.nome);
console.log(Pess.pessoa.nome);

pessoa.andar();

console.log(soma());
console.log(`Number1: ${number1}`);