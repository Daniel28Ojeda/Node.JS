import EventEmitter from 'events';

//Cria variavel q usara o evento
var emitter = new EventEmitter();

//cria o evento
emitter.on('meu_evento', () => {
    console.log('Meu evento foi acionado.');
});

//executa o evento
emitter.emit('meu_evento');


//-------------

//once ao inves de on garante q será executado 1 única vez
emitter.once('evento', (numero) => {
    console.log('Outro evento foi acionado.', numero);
});

emitter.emit('evento', 123);
emitter.emit('evento', 123);
emitter.emit('evento', 123);


//----------------


class Cao extends EventEmitter {
    latir() {
        console.log('latindo...');
    }
}

var rex = new Cao();

rex.on('pessoa_no_portao', rex.latir);
rex.emit('pessoa_no_portao');
rex.emit('pessoa_no_portao');
rex.removeListener('pessoa_no_portao', rex.latir); //remove a escuta do evento indicado
rex.emit('pessoa_no_portao');
rex.emit('pessoa_no_portao');