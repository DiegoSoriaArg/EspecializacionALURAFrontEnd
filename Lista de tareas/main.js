import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

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

  tarea.appendChild(tareaContenido);
  tarea.appendChild(deleteIcon());

  lista.appendChild(tarea);
};

//Arrow function o funciones anonimas
btn.addEventListener("click", crearTarea);
