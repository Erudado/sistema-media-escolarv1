//dom
const n1 = document.querySelector('.nota1');
const n2 = document.querySelector('.nota2');
const n3 = document.querySelector('.nota3');
const form = document.querySelector('#formulario');
const nome = document.querySelector('#central');
const calcular = document.querySelector('.searchButton');
const modal = document.querySelector('.modal-container');
const resultado = document.querySelector('#resultado');
const btnClose = document.querySelector('.btnClose')


//eventos
calcular.addEventListener('click', calcularNota, openModal);
btnClose.addEventListener('click', ()=>{
    modal.style.display = 'none'
})

//funções
function calcularNota(event){
    modal.style.display = 'flex';
    event.preventDefault();

    let valor1 = parseFloat(n1.value);
    let valor2 = parseFloat(n2.value);
    let valor3 = parseFloat(n3.value);

    // Verifica se algum campo está vazio ou não é um número
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        window.alert('Campos em branco ou com valores inválidos, digite números em cada campo!');
        return; // Retorna para evitar a execução do restante do código
    }
    
    // Cálculo da média das notas
    let notaFinal = (valor1 + valor2 + valor3) / 3;
    console.log(notaFinal)

    if (notaFinal >= 7) {
        // Aprovado
        resultado.innerHTML = `<h1> O aluno foi aprovado! Média: ${notaFinal.toFixed(2)}</h1>`;
    } else if (notaFinal < 7 && notaFinal >= 4) {
        // Prova final
        resultado.innerHTML = `<h1> O aluno não obteve nota suficiente e foi para a prova final! Média: ${notaFinal.toFixed(2)}</h1>`;
    } else {
        // Reprovado
        resultado.innerHTML = `<h1> Você foi reprovado! Média: ${notaFinal.toFixed(2)}</h1>`;
    }

}


function openModal(){
    modal.classList.add('active')
}