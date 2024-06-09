export const transpositionEncrypt = (text: string, key: number): string => {
    const numCols = key;
    const numRows = Math.ceil(text.length / numCols);
    const grid = Array(numRows).fill('').map((_, i) => text.slice(i * numCols, (i + 1) * numCols));
    let encryptedText = '';
    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows; row++) {
        encryptedText += grid[row][col] || '';
      }
    }
    return encryptedText;
  };
  
  export const transpositionDecrypt = (text: string, key: number): string => {
    const numCols = key;
    const numRows = Math.ceil(text.length / numCols);
    const numEmptyCells = numCols * numRows - text.length;
    const grid = Array(numRows).fill('').map(() => Array(numCols).fill(''));
    let index = 0;
    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows; row++) {
        if (row === numRows - 1 && col >= numCols - numEmptyCells) continue;
        grid[row][col] = text[index++] || '';
      }
    }
    return grid.map(row => row.join('')).join('');
  };