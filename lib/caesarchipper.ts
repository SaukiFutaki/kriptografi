export const encrypt = (text: string, key: number): string => {
    return text.replace(/[a-z]/gi, (char) => {
      const base = char >= 'a' && char <= 'z' ? 97 : 65;
      return String.fromCharCode(((char.charCodeAt(0) - base + key) % 26) + base);
    });
  };
  
  export const decrypt = (text: string, key: number): string => {
    return text.replace(/[a-z]/gi, (char) => {
      const base = char >= 'a' && char <= 'z' ? 97 : 65;
      return String.fromCharCode(((char.charCodeAt(0) - base - key + 26) % 26) + base);
    });
  };
  