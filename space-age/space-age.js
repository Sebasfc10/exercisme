const PLANETS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

const añosSegundos = 31557600.00; 

export const age = (planeta, seg) => {
  return roundTwo( convertirAñosTierra(seg) / PLANETS[planeta] );
};

const convertirAñosTierra = (seg) => {
  return seg / añosSegundos;
}

const roundTwo = (num) => {
  return Math.round( num * 100) / 100
}