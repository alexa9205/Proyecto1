// function getFetch(url) {
//   fetch(url, {
//     method: "GET",
//   })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//       alert("Hay un error");
//     });
// }

// getFetch("https://zelda.fanapis.com/api/games");

function getFetch(url) {
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      let juegos = data;
      console.log(juegos);
    })
    .catch((err) => {
      console.log(err);
      alert("Ha ocurrido un ERROR, vuelve a recargar la pagina !");
    });
}

getFetch("https://opentdb.com/api.php?amount=10");
