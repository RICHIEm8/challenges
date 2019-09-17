// const input = word
// const symbols = ['Ac', 'Al', 'Am', 'Sb', 'Ar', 'As', 'At', 'Ba', 'Bk', 'Be', 'Bi', 'B', 'Br', 'Cd', 'Ca', 'Cf', 'C', 'Ce', 'Cs', 'Cl', 'Cr', 'Co', 'Cu', 'Cm', 'Dy', 'Es', 'Er', 'Eu', 'Fm', 'F', 'Fr', 'Gd', 'Ga', 'Ge', 'Au', 'Hf', 'He', 'Ho', 'H', 'In', 'I', 'Ir', 'Fe', 'Kr', 'La', 'Lr', 'Pb', 'Li', 'Lu', 'Mg', 'Mn', 'Md', 'Hg', 'Mo', 'Nd', 'Ne', 'Np', 'Ni', 'Nb', 'N', 'No', 'Os', 'O', 'Pd', , 'P', 'Pt', 'Pu', 'Po', 'K', 'Pr', 'Pm', 'Pa', 'Ra', 'Rn', 'Re', 'Rh', 'Rb', 'Ru', 'Rf', 'Sm', 'Sc', 'Se', 'Si', 'Ag', 'Na', 'Sr', 'S', 'Ta', 'Tc', 'Te', 'Tb', 'Tl', 'Th', 'Tm', 'Sn', 'Ti', 'W', 'U', 'V', 'Xe', 'Yb', 'Y', 'Zn', 'Zr']

function wordCheck(word) {
  const periodicTable = {
    Ge: 'germanium',
    Ni: 'nickel',
    U: 'uranium',
    S: 'sulfur'
  }
  if (word.indexOf(periodicTable) > 1) {
    return true;
  }
  else {
    return false;
  }
}

console.log(wordCheck('genius'));