const enviarCalificacion = () => {
    const divPrincipal = document.querySelector('#div-principal');
    const divSecundario = document.querySelector('#div-secundario');
    const styleRating = divPrincipal.style.display;

    if(styleRating == '') {
        divPrincipal.style.display = 'none';
        divSecundario.style.display = 'block';
    } else {
        divPrincipal.style.display = 'block';
        divSecundario.style.display = 'none';
    }

}

const btnSubmit = document.querySelector('#btn-submit');
btnSubmit.addEventListener('click', enviarCalificacion);

window.onclick = function(e) {
    const modal = document.querySelector('#div-principal');
    if(e.target == modal) {
        enviarCalificacion
    }
}

const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const btn3 = document.querySelector('#btn-3')
const btn4 = document.querySelector('#btn-4')
const btn5 = document.querySelector('#btn-5')

btn1.addEventListener('click', () => {
    const p = document.querySelector('.seleccion');
    p.innerText = 'You selected 1 out of 5'
})

btn2.addEventListener('click', () => {
    const p = document.querySelector('.seleccion');
    p.innerText = 'You selected 2 out of 5'
})

btn3.addEventListener('click', () => {
    const p = document.querySelector('.seleccion');
    p.innerText = 'You selected 3 out of 5'
})

btn4.addEventListener('click', () => {
    const p = document.querySelector('.seleccion');
    p.innerText = 'You selected 4 out of 5'
})

btn5.addEventListener('click', () => {
    const p = document.querySelector('.seleccion');
    p.innerText = 'You selected 5 out of 5'
})


