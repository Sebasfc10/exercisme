
const colorCode = (color) => {
  let paint = {};

  for (let i = 0; i < COLORS.length; i++)
  {
    paint[COLORS[i]] = i;
  }

  return paint[color];
};

const COLORS = 
[
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

module.exports =
{
  colorCode,
  COLORS
}