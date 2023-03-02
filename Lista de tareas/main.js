(() => {

    const btn = document.querySelector("[data-form-btn]");

    const crearTarea = (evento) => {
      evento.preventDefault();
      const input = document.querySelector("[data-form-input]");
      const value = input.value;
      const lista = document.querySelector("[data-lista]");
      const tarea = document.createElement("li");
      tarea.classList.add("card");
      input.value = "";

      //backticks
      const tareaContenido = document.createElement("div");
      tareaContenido.appendChild(checkComplete());
      const tituloTarea = document.createElement("span");
      tituloTarea.classList.add("task");
      tituloTarea.innerText = value;
      tareaContenido.appendChild(tituloTarea);

      const contenido = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`;

      //tarea.innerHTML = contenido;

      tarea.appendChild(tareaContenido);

      lista.appendChild(tarea);
    };

    //Arrow function o funciones anonimas
    btn.addEventListener("click", crearTarea);

    const checkComplete = () => {
      const i = document.createElement("i");
      i.classList.add("far", "fa-check-square", "icon");
      i.addEventListener("click", completeTask);
      return i;
    };

    // Immediately invoked function expression IIFE
    const completeTask = (event) => {
      const elemento = event.target;
      elemento.classList.toggle("fas");
      elemento.classList.toggle("completeIcon");
      elemento.classList.toggle("far");
    };


})();