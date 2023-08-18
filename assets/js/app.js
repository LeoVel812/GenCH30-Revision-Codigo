//El primer reto fue clonarlo y eliminar el origin del repositorio original
//y despues poner el origin a mi repositorio

const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector(".name");//agregar selector (.)
const $b = document.querySelector(".blog");//cambiar selector (# -> .)
const $l = document.querySelector(".location");

//cambiar a funcion flecha y agregar async
const displayUser = async (username) => {
  $n.textContent = "cargando...";
  const response = await fetch(`${usersEndpoint}/${username}`);
  //convertir de Json a objeto para poder ser leido
  const responseJson = await response.json();
  //cambiar data a responseJson
  console.log(responseJson);
  $n.textContent = `${responseJson.name}`; //cambiar de "" a ``
  $b.textContent = `${responseJson.blog}`; //cambiar de "" a ``
  $l.textContent = `${responseJson.location}`;//cambiar de "" a ``
};

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser("stolinski").catch(handleError);
