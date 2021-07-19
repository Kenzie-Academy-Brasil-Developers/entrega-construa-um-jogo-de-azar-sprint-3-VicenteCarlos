const pedra = document.getElementById('pedra');
const tesoura = document.getElementById('tesoura');
const papel = document.getElementById('papel');

function random () {
    let aleatorio2 = Math.floor(Math.random() * 3) + 1;

    const maoPedra = 1;
    const maoTesoura = 2;
    const maoPapel = 3;

    if (aleatorio2===maoPapel){
        let div = document.getElementById('maquina');
        div.appendChild(papel);
        console.log(aleatorio2);
        return aleatorio2;
    } else if (aleatorio2===maoTesoura){
        let div = document.getElementById('maquina');
        div.appendChild(tesoura);
        console.log(aleatorio2);
        return aleatorio2;
    } else if (aleatorio2===maoPedra){
        let div = document.getElementById('maquina');
        div.appendChild(pedra);
        console.log(aleatorio2);
        return aleatorio2;
    } 

}

pedra.addEventListener('click', () => {
    
    const maoPedra = 1;
    const maoTesoura = 2;
    const maoPapel = 3;
    let aleatorio = random();

    let div = document.getElementById('resultado');
    let span = document.createElement('span');
    span.appendChild(pedra);
    div.appendChild(span);

    
    if (aleatorio===maoTesoura){
        let div2 = document.getElementById('resposta')
        let text = document.createTextNode('Você venceu');
        div2.appendChild(text);
        return aleatorio;    
    } 
    
    if (aleatorio===maoPapel){
        let div2 = document.getElementById('resposta')
        let text = document.createTextNode('Você perdeu');
        div2.appendChild(text);
        return aleatorio;
    } 
    
    if (aleatorio===maoPedra){
        let div2 = document.getElementById('resposta')
        let text = document.createTextNode('Você empatou');
        div2.appendChild(text);
        return aleatorio;
    }
  
});

tesoura.addEventListener('click', () => {
    
    const maoPedra = 1;
    const maoTesoura = 2;
    const maoPapel = 3;
    let aleatorio = random();
    
    let div = document.getElementById('resultado');
    let span = document.createElement('span');
    span.appendChild(tesoura);
    div.appendChild(span);


    if (aleatorio===maoPapel){
        let div2 = document.getElementById('resposta')
        let text = document.createTextNode('Você venceu');
        div2.appendChild(text);
        return aleatorio;

    } 
    
    if (aleatorio===maoPedra){
        let div2 = document.getElementById('resposta')
        let text = document.createTextNode('Você perdeu');
        div2.appendChild(text);
        console.log("você perdeu");
        
        return aleatorio;

    } 
    
    if (aleatorio===maoTesoura){
        let div2 = document.getElementById('resposta')
        let text = document.createTextNode('Você empatou');
        div2.appendChild(text);
        return aleatorio;
        ;
    }

});

papel.addEventListener('click', () => {
    
    const maoPedra = 1;
    const maoTesoura = 2;
    const maoPapel = 3;

    let aleatorio = random();
    
    let div = document.getElementById('resultado');
    let span = document.createElement('span');
    span.appendChild(papel);
    div.appendChild(span);

    if (aleatorio===maoPedra){
        let div2 = document.getElementById('resposta')
        let text = document.createTextNode('Você venceu');
        div2.style.textAlign = "center";
        div2.appendChild(text);
        return aleatorio;

    } 
    
    if (aleatorio===maoTesoura){
        let div2 = document.getElementById('resposta')
        let text = document.createTextNode('Você perdeu');
        div2.appendChild(text);
        return aleatorio;

    } 
    
    if (aleatorio===maoPapel){
        let div2 = document.getElementById('resposta')
        let text = document.createTextNode('Você empatou');
        div2.appendChild(text);
        return aleatorio;

    }

    
});
