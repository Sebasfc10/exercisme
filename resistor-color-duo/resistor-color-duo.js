export const decodedValue = (colores) => {
  const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  let indice_uno = COLORS.indexOf(colores[0]);
  let indice_dos = COLORS.indexOf(colores[1]);

  return +`${indice_uno}${indice_dos}`

};