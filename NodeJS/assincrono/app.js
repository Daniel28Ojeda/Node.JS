import * as fs from 'fs';

// comentar 1 dos 2 códigos antes de executar

// Assincrono:
console.time('Assincrono');

var counter = 0;

for (var i = 0; i < 1000; i++) {
    fs.readFile('meuArquivo.txt', (err, data) => {
        if (err) {
            return console.error(err);
        }
        counter++;
        console.log('Assincrono ' + data.toString());
        if (counter === 1000) {
            console.timeEnd('Assincrono');
        }
    });
}

// Tempo de execução: Assincrono: 921.298ms


// Sincrono:
console.time('Sincrono');

for (var i = 0; i < 1000; i++) {
    var data = fs.readFileSync('meuArquivo.txt');
    console.log('Sincrono ' + data.toString());
}
console.timeEnd('Sincrono');


// Tempo de execução: Sincrono: 1.924s