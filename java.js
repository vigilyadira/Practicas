function ElSudoku(grid) {
    const regionSize = 3;
    const gridSize = 9;
   
    for (let row = 0; row < gridSize; row++) {
        const rowSet = new Set();
        const columnSet = new Set();
        const regionSet = new Set();
   
        for (let column = 0; column < gridSize; column++) {
          const cellValue = grid[row][column];
   
          if (rowSet.has(cellValue) || columnSet.has(cellValue)) {
            return "falso";
          }
   
          rowSet.add(cellValue);
          columnSet.add(cellValue);
   
          const regionRow = Math.floor(row / regionSize);
          const regionColumn = Math.floor(column / regionSize);
          const regionIndex = regionRow * regionSize + regionColumn;
          const regionCellValue = regionSet.has(cellValue);
   
          if (regionCellValue) {
            return "falso";
          }
   
          regionSet.add(cellValue);
        }
    }
   
    return "verdadero";
   }
   
   const grid = [
    [1, 8, 9, 4, 2, 5, 3, 6, 7],
    [6, 7, 5, 9, 1, 3, 2, 4, 8],
    [3, 4, 2, 6, 7, 8, 1, 5, 9],
    [2, 6, 7, 1, 4, 9, 8, 3, 5],
    [9, 5, 3, 7, 8, 6, 4, 2, 1],
    [4, 1, 8, 5, 3, 2, 9, 7, 6],
    [8, 9, 4, 2, 5, 7, 6, 1, 3],
    [5, 3, 1, 8, 6, 4, 7, 9, 2],
    [7, 2, 6, 3, 9, 1, 5, 8, 4]];
   
   console.log(ElSudoku(grid)); // Output: verdadero