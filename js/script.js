const botaoAdicionar = document.querySelector(".botaoAdicionar")
const valorInput = document.querySelector(".inputTarefas")
const blocoTarefas = document.querySelector(".blocoTarefasAdicionadas")



// Retorna um valor booleano, caso o input tenha um valor, retornará verdadeiro, semão, falso.
const validarInput = () =>  valorInput.value.trim().length > 0;



const adicionarTarefa = () =>{
    const inputValido = validarInput();
    // aqui o "!" representa "não", no caso o SE o input NÃO for verdadeiro, ou seja, não for maior que 1, adiciona uma classe que deixará a borda do input vermelha
    if(!inputValido){
        return valorInput.classList.add("inputError");
    }


    const novoContainer = document.createElement('div')
    novoContainer.classList.add('novoContainer')

    const novaTarefa = document.createElement('p')
    novaTarefa.innerHTML = valorInput.value

    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fa-sharp')
    trashIcon.classList.add('fa-solid')
    trashIcon.classList.add('fa-trash')

    trashIcon.addEventListener("click", () => 
        deletarTarefa(novoContainer, novaTarefa)
    );
    
    novoContainer.appendChild(novaTarefa)
    novoContainer.appendChild(trashIcon)

    blocoTarefas.appendChild(novoContainer)

    novoContainer.addEventListener("click", function() {
        this.parentNode.removeChild(this);
    });

    valorInput.value = ''
    valorInput.focus()
    

};

const removerErroInput = () =>{
    const inputValido = validarInput();

    if(inputValido){
        return valorInput.classList.remove("inputError");
    }

}

botaoAdicionar.addEventListener("click", () => adicionarTarefa());

valorInput.addEventListener("change", () => removerErroInput());



