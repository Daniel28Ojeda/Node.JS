var pessoa = {
    nome: 'Daniel',
    idade: 30,
    andar() {
        console.log('Andando...');
    }
}

var a = 10;
var b = 5;

function soma() {
    return a + b;
}

export { pessoa, soma as default, a as number1 };
//export define o que será exportado para q outro arquivo possa usar pelo padrão ES6
//nesse padrão deve mudar a externsão do arquivo para .MJS ao inves de .JS
//Mas o correto é usar o package JSON e manter .JS
//as default obriga a exportação e importação do outro lado de forma obrigatória