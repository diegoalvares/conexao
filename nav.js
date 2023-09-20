const roxo = document.querySelector('.roxo');
const preto = document.querySelector('.preto');
const azul = document.querySelector('.azul');
const rosa = document.querySelector('.rosa');


roxo.addEventListener('click', function(e){
    e.preventDefault();
    const fundo = document.querySelector('body')
    fundo.style.background = 'linear-gradient(to right, rgb(90, 5, 90) 55%, rgb(142, 62, 150))'
})


preto.addEventListener('click', function(e){
    e.preventDefault();
    const fundo = document.querySelector('body')
    fundo.style.background = 'linear-gradient(to right, rgb(31, 30, 30) 60%, rgb(56, 54, 54)'
})

azul.addEventListener('click', function(e){
    e.preventDefault();
    const fundo = document.querySelector('body')
    fundo.style.background = 'linear-gradient(to right, rgb(5, 82, 128) 45%,  rgb(10, 109, 109)'
})


rosa.addEventListener('click', function(e){
    e.preventDefault();
    const fundo = document.querySelector('body')
    fundo.style.background = 'linear-gradient(to right, rgb(255, 0, 221),rgb(255, 103, 217) 55%, white)'
})


