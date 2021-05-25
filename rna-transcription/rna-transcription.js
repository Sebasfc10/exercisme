export const toRna = function(dna) {
  let rna = [];
  if (dna === undefined) return "";

  for (let i = 0; i < dna.length; i++) {
      if (dna[i] == "G") {
          rna.push('C');
      } else if (dna[i] == "C") {
          rna.push('G');
      } else if (dna[i] == "T") {
          rna.push('A');
      } else if (dna[i] == "A") { rna.push('U') }
  };
  return rna.join("");
}