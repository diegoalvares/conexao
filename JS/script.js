const btn = document.querySelector('#entrar');
const msg = document.querySelector('h2')
const foto = document.querySelector('#perfil')
const titulo = document.querySelector('#np')


btn.addEventListener('click', function(e){
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    if (nome == 'melrie' && senha == localStorage.melrie){
        console.log('Login Efetuado com sucesso!');
        msg.style.fontSize = '18px';
        location.href='perfil.html';
    }

    if (nome == 'diego' && senha == localStorage.diego){
        console.log('Login Efetuado com sucesso!');
        msg.style.fontSize = '18px';
        location.href='perfil.html';
    }
    
    else{
        msg.innerHTML = 'Usuário ou senha incorreta!'
    }
})