import * as fs from 'fs';

function read(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            try {
                resolve(data.toString());
            } catch {
                reject('Arquivo não localizado.');
            }

        });
    });
}

// nome do arquivo OK
read('meuArquivo.txt').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err)
});

// nome do arquivo incorreto
read('meuErro.txt').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err)
});


//em promisses, sempre é executado as funções interiores antes das exteriores