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
    
    const listaEl = document.getElementById('list');
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];    
        const listaRichiestaEl = document.createElement('li');
        listaRichiestaEl.innerHTML = lista[i]
        listaEl.appendChild(listaRichiestaEl);
        
    };