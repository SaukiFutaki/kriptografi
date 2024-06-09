export const substitutionEncrypt = (text: string, key: number): string => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shiftedAlphabet = alphabet.slice(key) + alphabet.slice(0, key);
    return text.toUpperCase().replace(/[A-Z]/g, char => shiftedAlphabet[alphabet.indexOf(char)]);
  };
  
  export const substitutionDecrypt = (text: string, key: number): string => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shiftedAlphabet = alphabet.slice(key) + alphabet.slice(0, key);
    return text.toUpperCase().replace(/[A-Z]/g, char => alphabet[shiftedAlphabet.indexOf(char)]);
  };