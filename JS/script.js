const btn = document.querySelector('#entrar');
const nome = document.getElementById('nome')
const senha = document.getElementById('senha')
const msg = document.querySelector('h2')
const foto = document.querySelector('#perfil')
const titulo = document.querySelector('#np')


btn.addEventListener('click', function(e){
    e.preventDefault();
    const result = nome.value;
    const result2 = senha.value;
    console.log(result)
    console.log(result2)

    if (result == 'diego' && result2 == '051094'){
        console.log('Login Efetuado com sucesso!');
        msg.style.fontSize = '18px';
        location.href='perfil.html';
    }
    else if (result == 'juliana' && result2 == 1809){
        console.log('Login Efetuado com sucesso!')
        msg.style.fontSize = '18px'
        location.href='perfil.html'
        titulo.innerHTML='melrie'
    }
   
    else if (result == '' || result2 == ''){
        console.error('Preencha todos os campos!')
        msg.innerHTML = 'Preencha todos os campos!'
        msg.style.fontSize = '19px'
    }
    
    else{
        console.error('Usuário ou senha incorreta!')
        msg.innerHTML = 'Usuário ou senha incorreta!'
    }
})