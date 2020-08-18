var personaSonia = {
  "nombre": "sonia",
  "apellido": "navas",
  "añoNacimiento": 2005,
  "aficiones": ["comer", "dormir"],
  "dni": {
    "añoExpedición": 2013,
    "lugarNacimiento": "suecia",
  },
  "colorPelo": "negro",
};

var personaPatricia = {
  nombre: "patricia",
  apellido: "navas",
  añoNacimiento: 1988,
  aficiones: ["comer", "dormir"],
  dni: {
    añoExpedición: 2007,
    lugarNacimiento: "barcelona",
  },
  colorPelo: " negro",
};

var personaMaria = {
  nombre: "maria",
  apellido: "navas",
  añoNacimiento: 1990,
  aficiones: ["comer", "dormir"],
  dni: {
    añoExpedición: 2000,
    lugarNacimiento: "Madrid",
  },
  colorPelo: " negro",
};

var personaAna = {
  nombre: "ana",
  apellido: "navas",
  añoNacimiento: 1992,
  aficiones: ["comer", "dormir"],
  dni: {
    añoExpedición: 2003,
    lugarNacimiento: "zaragoza",
  },
  colorPelo: " castaño",
};
// console.log(personaAna);

var arrayDePersonas = [personaSonia, personaPatricia, personaMaria, personaAna];

if (arrayDePersonas[0].colorPelo == "castaño") {
  console.log(arrayDePersonas[0].nombre);
}

if (arrayDePersonas[1].colorPelo == "castaño") {
  console.log(arrayDePersonas[1].nombre);
}

if (arrayDePersonas[2].colorPelo == "castaño") {
  console.log(arrayDePersonas[2].nombre);
}

if (arrayDePersonas[3].colorPelo == "castaño") {
  console.log(arrayDePersonas[3].nombre);
}

var arrayDeMayores = [personaSonia, personaPatricia, personaMaria, personaAna];

if (arrayDeMayores[0].edad == "30") {
  console.log(arrayDeMayores[0].edad);
}

if (arrayDeMayores[1].edad == "30") {
  console.log(arrayDeMayores[1].edad);
}

if (arrayDeMayores[2].edad == "30") {
  console.log(arrayDeMayores[2].edad);
}

if (arrayDeMayores[3].edad == "30") {
  console.log(arrayDeMayores[3].edad);
}

if (
  (arrayDePersonas[0].colorPelo == "negro" &&
    arrayDePersonas[0].dni.añoExpedicion < 2015) ||
  (arrayDePersonas[0].añoNacimiento > 2002 &&
    arrayDePersonas[0].aficiones.includes("comer")) ||
  arrayDePersonas[0].aficiones.includes("dormir"))

  if (
    (arrayDePersonas[0].colorPelo == "negro" &&
      arrayDePersonas[0].dni.añoExpedicion < 2015) ||
    (arrayDePersonas[0].añoNacimiento > 2002 &&
      arrayDePersonas[0].aficiones[0] == "comer") ||
    arrayDePersonas[0].aficiones[1] == "dormir"
  ) {
    console.log(arrayDePersonas[0].dni.lugarNacimiento);
  }
if (
  (arrayDePersonas[1].colorPelo == "negro" &&
    arrayDePersonas[1].dni.añoExpedicion < 2015) ||
  (arrayDePersonas[1].añoNacimiento > 2002 &&
    arrayDePersonas[1].aficiones[0] == "comer") ||
  arrayDePersonas[1].aficiones[0] == "dormir"
)
  if (
    (arrayDePersonas[1].colorPelo == "negro" &&
      arrayDePersonas[1].dni.añoExpedicion < 2015) ||
    (arrayDePersonas[1].añoNacimiento > 2002 &&
      arrayDePersonas[1].aficiones[1] == "comer") ||
    arrayDePersonas[1].aficiones[1] == "dormir"
  ) {
    console.log(arrayDePersonas[1].dni.lugarNacimiento);
  }
if (
  (arrayDePersonas[2].colorPelo == "negro" &&
    arrayDePersonas[2].dni.añoExpedicion < 2015) ||
  (arrayDePersonas[2].añoNacimiento > 2002 &&
    arrayDePersonas[2].aficiones[0] == "comer") ||
  arrayDePersonas[2].aficiones[1] == "dormir"
)
  if (
    (arrayDePersonas[2].colorPelo == "negro" &&
      arrayDePersonas[2].dni.añoExpedicion < 2015) ||
    (arrayDePersonas[2].añoNacimiento > 2002 &&
      arrayDePersonas[2].aficiones[0] == "comer") ||
    arrayDePersonas[2].aficiones[1] == "dormir"
  ) {
    console.log(arrayDePersonas[2].dni.lugarNacimiento);
  }
if (
  (arrayDePersonas[3].colorPelo == "negro" &&
    arrayDePersonas[3].dni.añoExpedicion < 2015) ||
  (arrayDePersonas[3].añoNacimiento > 2002 &&
    arrayDePersonas[3].aficiones[0] == "comer") ||
  arrayDePersonas[3].aficiones[1] == "dormir"
)
  if (
    (arrayDePersonas[3].colorPelo == "negro" &&
      arrayDePersonas[3].dni.añoExpedicion < 2015) ||
    (arrayDePersonas[3].añoNacimiento > 2002 &&
      arrayDePersonas[3].aficiones[0] == "comer") ||
    arrayDePersonas[3].aficiones[1] == "dormir"
  ) {
    console.log(arrayDePersonas[3].dni.lugarNacimiento);
  }
