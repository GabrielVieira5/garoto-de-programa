function machine() {
    const form = document.querySelector('.form');
    const piloto = form.querySelector('.piloto');
    const armazenamento = [];

    form.addEventListener('submit', envio)

    function envio (top) {
        top.preventDefault();

        const nome = form.querySelector('.nome');
        const equipe = form.querySelector('.equipe');
        const num = form.querySelector('.num');


        armazenamento.push({
            nome: nome.value,
            equipe: equipe.value,
            num: num.value
        })

        piloto.innerHTML += (`<p> ${nome.value}, de numero ${num.value} foi adicionado a equipe: ${equipe.value} </p>`);

        console.log(armazenamento);

    }

}

machine();