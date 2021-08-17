function contar_letras() {
  let word = document.getElementById("word").value;
  console.log(word);
  if (word === "") {
    alert(`Error. Porfavor rellene todos los campos`);
  } else {
    for (var i in word) {
    }
    i = parseInt(i) + 1;
    document.getElementById(
      `letter`
    ).innerHTML = `<div class="card result" style="width: 18rem;">
      <div class="card-body">
        <p class="card-text">La palabra tiene <b>${i}</b> letras.</p>
      </div>
    </div>`;
  }
}

function contar_palabras() {
  let texto = document.getElementById("text").value;
  if (texto === "") {
    alert(`Error. Porfavor rellene todos los campos`);
  } else {
    let textoTroceado = texto.split(" ");

    let numeroPalabras = textoTroceado.length;

    document.getElementById(
      `text2`
    ).innerHTML = `<div class="card result" style="width: 18rem;">
  <div class="card-body">
    <p class="card-text">El texto tiene <b>${numeroPalabras}</b> palabras.</p>
  </div>
  </div>`;
  }
}

function getAges() {
  //Recoleccion de datos y asignacion en variables
  let age1 = parseInt(document.getElementById(`age1`).value);
  let age2 = parseInt(document.getElementById(`age2`).value);
  let age3 = parseInt(document.getElementById(`age3`).value);
  let age4 = parseInt(document.getElementById(`age4`).value);
  let age5 = parseInt(document.getElementById(`age5`).value);

  // Arreglo que guarda todas las edades
  var total = [age1, age2, age3, age4, age5];
  console.log(total);

  // verificar si todos estan llenos
  let isFull;
  if (
    isNaN(total[0]) ||
    isNaN(total[1]) ||
    isNaN(total[2]) ||
    isNaN(total[3]) ||
    isNaN(total[4])
  ) {
    isFull = false;
  } else {
    isFull = true;
  }

  if (isFull === true) {
    const myPromise = new Promise(function (resolve, reject) {
      // verificar si todos son mayores a 18
      if (
        total[0] < 18 ||
        total[1] < 18 ||
        total[2] < 18 ||
        total[3] < 18 ||
        total[4] < 18
      ) {
        // Si alguno de las edades es menor a 18, rechaza la promesa
        reject();
      } else {
        // Si ninguna de las edades es menor a 18 años, resuleve la promesa
        resolve();
      }

      console.log(total2);
    });
    myPromise
      .then(function (value) {
        alert("Promesa Resuelta, todos los integrantes son mayores a 18 años.");
      })
      .catch(function (error) {
        alert(
          "Promesa Rechazada, uno o más integrantes son menores a 18 años."
        );
      });
  } else {
    alert(`Error. Por favor rellene todos los campos.`);
  }
}
