//El primer reto fue clonarlo y eliminar el origin del repositorio original
//y despues poner el origin a mi repositorio

const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector("name");
const $b = document.querySelector("#blog");
const $l = document.querySelector(".location");

//cambiar a funcion flecha y agregar async
const displayUser = async (username) => {
  $n.textContent = "cargando...";
  const response = await fetch(`${usersEndpoint}/${username}`);
  //cambiar data a response
  console.log(response);
  $n.textContent = `${response.name}`; //cambiar de "" a ``
  $b.textContent = `${response.blog}`; //cambiar de "" a ``
  $l.textContent = `${response.location}`;//cambiar de "" a ``
};

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser("stolinski").catch(handleError);
