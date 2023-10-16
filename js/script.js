let richiesta = '';
let lista = [];
// lista.push(richiesta);

    while (richiesta !== 'stop') {
        
        richiesta = prompt ('Quali prodotti vuoi acquistare?')
        richiesta = richiesta.trim()
        if(richiesta !== 'stop' && richiesta !== ''){
            lista.push(richiesta);
        }

    };
    
    console.log(lista)
    
    