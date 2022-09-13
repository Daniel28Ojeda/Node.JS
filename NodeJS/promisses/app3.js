import { appendFile } from 'fs/promises';

appendFile('meuArquivo.txt', 'Texto adicional ').then((a) => {
    console.log('Arquivo foi criado/modificado com sucesso.');
}).catch((e) => {
    console.log('Erro ', e);
});