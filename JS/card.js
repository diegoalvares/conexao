const salvar = document.getElementById('salvar')
const edit = document.getElementById('edit_sobre')

salvar.addEventListener = ('click', function(e) {
    e.preventDefault();
    edit.style.display='block';
})