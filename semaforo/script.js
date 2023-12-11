const tudo = document.querySelector('.sim');
const semaforo = document.querySelector('.estrutura');
const bola1 = document.querySelector('.bola1');
const bola2 = document.querySelector('.bola2');
const bola3 = document.querySelector('.bola3');

tudo.addEventListener("click", function mudar() {
    bola1.classList.toggle('acesa');
    bola2.classList.toggle('acesa');
    bola3.classList.toggle('acesa');

})
setTimeout(mudar, 2000);


/*tudo.addEventListener("click", setTimeout((mudar) => {
    bola1.classList.toggle('acesa');
    bola2.classList.toggle('acesa');
    bola3.classList.toggle('acesa');
}, timeout));

mudar();*/