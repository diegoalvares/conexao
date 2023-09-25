const roxo = document.querySelector('.roxo');
const preto = document.querySelector('.preto');
const azul = document.querySelector('.azul');
const rosa = document.querySelector('.rosa');
const sobre = document.querySelector('#sobre')
const descricao = document.querySelector('#descricao')
const t_descricao = document.querySelector('#titulo_descricao')
const editar = document.querySelector('#editar')

roxo.addEventListener('click', function(e){
    e.preventDefault();
    const fundo = document.querySelector('body')
    fundo.style.background = 'linear-gradient(to right, rgb(90, 5, 90) 55%, rgb(142, 62, 150))'
    sobre.style.background = 'rgb(240, 212, 248)';
    t_descricao.style.color= 'blueviolet'
    sobre.style.background= 'rgb(240, 212, 248)'
    descricao.style.color = 'blueviolet'
    editar.style.background = 'blueviolet'
})


preto.addEventListener('click', function(e){
    e.preventDefault();
    const fundo = document.querySelector('body')
    fundo.style.background = 'linear-gradient(to right, rgb(31, 30, 30) 60%, rgb(56, 54, 54)'
    t_descricao.style.color= 'black'
    sobre.style.background= 'white'
    descricao.style.color = 'black'
    editar.style.background = 'black'
})

azul.addEventListener('click', function(e){
    e.preventDefault();
    const fundo = document.querySelector('body')
    fundo.style.background = 'linear-gradient(to right, rgb(5, 82, 128) 45%,  rgb(10, 109, 109)'
    t_descricao.style.color= 'black'
    sobre.style.background= 'rgb(105, 200, 255)'
    descricao.style.color = 'black'
    editar.style.background = 'rgb(5, 82, 128)'
})


rosa.addEventListener('click', function(e){
    e.preventDefault();
    const fundo = document.querySelector('body')
    fundo.style.background = 'linear-gradient(to right, rgb(255, 0, 221),rgb(255, 103, 217) 55%, white)'
    t_descricao.style.color= 'rgb(206, 4, 179)'
    sobre.style.background= 'pink'
    descricao.style.color = 'rgb(206, 4, 179)'
    editar.style.background = 'rgb(206, 4, 179)'
})