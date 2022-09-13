import * as fs from 'fs';

//cria arquivo txt
fs.writeFile('arquivo.txt', 'Texto ', (err) => {
        if (err) {
            console.log(err);
        }

        console.log('Arquivo criado com sucesso!');
    })
    //-------------------------------------------------------------------

//incrementa text em arquivo criado
fs.appendFile('arquivo.txt', 'Texto2 ', (err) => {
        if (err) {
            console.log(err);
        }

        console.log('Arquivo atualizado com sucesso!');
    })
    //-------------------------------------------------------------------

//ler arquivo existente
fs.readFile('arquivo.txt', (err, data) => {
    if (err) {
        console.log(err);
    }

    console.log(data.toString());
})

//ou

let dado = fs.copyFileSync('arquivo.txt');
console.log(dado.toString());

//-------------------------------------------------------------------