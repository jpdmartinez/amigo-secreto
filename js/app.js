let nomes = [];
// Pegar o nome dos participantes
function adicionar(){
    nomeAmigo = document.getElementById('nome-amigo').value;
    if (nomeAmigo == ''){
        alert("Informe o nome do participante!");
        return;
    } 
    
    if (nomes.includes(nomeAmigo)){
        alert("O nome "+nomeAmigo+" já está cadastrado!");
        document.getElementById('nome-amigo').value = '';
        return;
    }

    nomes.push(nomeAmigo);
    // Mostrar o nome dos participantes em uma lista na tela
    let listaNomes = document.getElementById('lista-amigos');
    if (listaNomes.textContent == ''){
        listaNomes.textContent = nomeAmigo;
    } else{
        listaNomes.textContent = listaNomes.textContent + ', ' + nomeAmigo;
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    if (nomes.length<4){
        alert("Insira pelo menos 4 participantes!");
        return;
    }
// Embaralhar os nomes
    embaralhar(nomes);

// Mostrar as duplas na tela
    mostrarNaTela(nomes);
}

function embaralhar(lista){
    for (i = lista.length-1; i>0;i--){
        let j = Math.floor(Math.random()*(i+1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function mostrarNaTela(nomes){
    let listaSorteio = document.getElementById('lista-sorteio');
    // Dividir de dois em dois
    for (i = 0; i<=nomes.length-1; i++){
        if (i == nomes.length-1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + nomes[i] + " -> " + nomes[0] + '<br>';
        } else{
            listaSorteio.innerHTML = listaSorteio.innerHTML + nomes[i] + " -> " + nomes[i+1] + '<br>';
        }
    }   
}

function reiniciar(){
    nomes = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}