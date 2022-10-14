const form =document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputSomar = e.target.querySelector('#somar');
    const inputSubtrair = e.target.querySelector('#subtrair');

    const somar = Number(inputSomar.value);
    const subtrair = Number(inputSubtrair.value);

        const inputSomar1 = e.target.querySelector('#somar1');
        const inputSubtrair1 = e.target.querySelector('#subtrair1');

        const somar1 = Number(inputSomar1.value);
        const subtrair1 = Number(inputSubtrair1.value);

    const somando = getSomar(somar, somar1);

    const subtraindo = getSubtrair(subtrair, subtrair1);

    const msg = `Resultado da sua soma = ${somando}`; 

    const msg1 = `Resultado da sua subtração = ${subtraindo}`; 

    setResultado(msg);

    setResultado(msg1);

});

function getSomar(somar, somar1) {
    const somando = somar + somar1;
    return somando;
}

function getSubtrair(subtrair, subtrair1){
    const subtraindo = subtrair - subtrair1;
    return subtraindo;
}

function setResultado(msg, msg1) { 
    const resultado = document.querySelector('#resultado');

    const p = criaP(); 

    const p1 = criaP();

    p.innerHTML = msg; 

    p1.innerHTML = msg1;

    resultado.appendChild(p)
}

function criaP() { 
    const p = document.createElement('p');
    return p;
}

