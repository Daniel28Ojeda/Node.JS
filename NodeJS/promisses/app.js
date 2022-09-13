const p = new Promise((resolve, reject) => {
    try {
        resolve('OK');
    } catch (e) {
        reject(e);
    }
});

p.then((parametros) => console.log('Sucesso', parametros)).catch((erro) => console.log('erro'));