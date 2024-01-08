// Cuadro magico donde se puede poner los datos y verificar si es un cuadro magico o no
let original = [
  [6, 1, 8],
  [7, 5, 3],
  [2, 9, 4]
];

// Mostrar cuadro
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
      let row = matrix[i];
      console.log(row.join("\t"));
  }
}

// Verificador si un cuadro magico es valido
function isMagicMatrix(matrix) {
  let size = matrix.length;
  let sum = sumRow(matrix, 0);

  // Verificar que todas las filas tengan la misma suma
  for (let i = 1; i < size; i++) {
      if (sumRow(matrix, i) !== sum) {
          return false;
      }
  }

  // Verificar que todas las columnas si es falso
  for (let i = 0; i < size; i++) {
      let columnSum = 0;
      for (let j = 0; j < size; j++) {
          columnSum += matrix[j][i];
      }
      if (columnSum !== sum) {
          return false;
      }
  }

  return true;
}

// Sumar todos  los elementos de la fila
function sumRow(matrix, rowIndex) {
  let row = matrix[rowIndex];
  let sum = 0;
  for (let i = 0; i < row.length; i++) {
      sum += row[i];
  }
  return sum;
}

// Modificar el cuadro alas disposiciones(x, y)
function modifyMatrix(matrix, x, y, newValue) {
  if (isValidPosition(matrix, x, y)) {
      matrix[x][y] = newValue;
  } else {
      console.log("posicion invalida.");
  }
}
console.log(isMagicMatrix(original) ? "El cuadro magico es valido." : "El cuadro magico no es valido.");