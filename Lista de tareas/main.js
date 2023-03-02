const btn = document.querySelector("[data-form-btn]");

const crearTarea = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const tarea = document.querySelector("[data-tareas]");
    input.value = "";

    //backticks
    const contenido = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    
    tarea.innerHTML = contenido;

};

//Arrow function o funciones anonimas
btn.addEventListener("click", crearTarea);
