// export const encrypt = (text: string, key: number): string => {

//   // TODO : repalce := mengganti setiap karakter dalam text yang sesuai dengan pola
//   // ? a-z := lowercase/uppercase
//   // ? g := global (mengganti semua karakter yang sesuai)
//   // ? i := case-insensitive (mengabaikan case sensitive)
//   return text.replace(/[a-z]/gi, (char) => {

//     // TODO : base := menentukan base dari karakter yang akan diubah
//     // ? jika char >= "a" dan char <= "z" maka base = 97  (code ASCII untuk huruf kecil)
//     // ? jika tidak maka base = 65 (code ASCII untuk huruf besar)
//     const base = char >= "a" && char <= "z" ? 97 : 65;
    
//     // TODO : mengembalikan karakter yang sudah diubah
//     // ? char.charCodeAt(0) := mengambil code ASCII dari karakter pertama
//     // ? (char.charCodeAt(0) - base + key) % 26 := menghitung code ASCII yang sudah diubah
//     // ? String.fromCharCode := mengembalikan karakter dari code ASCII
//     return String.fromCharCode(((char.charCodeAt(0) - base + key) % 26) + base);
//   });
//   //misalnya text = "hello", key = 3
//   //H (ASCII 72) diubah menjadi K (ASCII 75).
//   //E (ASCII 69) diubah menjadi H (ASCII 72).
//   //L (ASCII 76) diubah menjadi O (ASCII 79).
//   //L (ASCII 76) diubah menjadi O (ASCII 79).
//   //O (ASCII 79) diubah menjadi R (ASCII 82).
//   //maka hasilnya = "khoor"
// };

// export const decrypt = (text: string, key: number): string => {

//   // TODO : repalce := mengganti setiap karakter dalam text yang sesuai dengan pola
//   // ? a-z := lowercase/uppercase
//   // ? g := global (mengganti semua karakter yang sesuai)
//   // ? i := case-insensitive (mengabaikan case sensitive)
//   return text.replace(/[a-z]/gi, (char) => {

//     // TODO : base := menentukan base dari karakter yang akan diubah
//     // ? jika char >= "a" dan char <= "z" maka base = 97  (code ASCII untuk huruf kecil)
//     // ? jika tidak maka base = 65 (code ASCII untuk huruf besar)
//     const base = char >= "a" && char <= "z" ? 97 : 65;

//     // TODO : mengembalikan karakter yang sudah diubah
//     // ? char.charCodeAt(0) := mengambil code ASCII dari karakter pertama
//     // ? (char.charCodeAt(0) - base - key + 26) % 26 := menghitung code ASCII yang sudah diubah
//     // ? String.fromCharCode := mengembalikan karakter dari code ASCII
//     return String.fromCharCode(
//       ((char.charCodeAt(0) - base - key + 26) % 26) + base
//     );
//   });
//   //misalnya text = "khoor", key = 3
//   //K (ASCII 75) diubah menjadi H (ASCII 72).
//   //H (ASCII 72) diubah menjadi E (ASCII 69).
//   //O (ASCII 79) diubah menjadi L (ASCII 76).
//   //O (ASCII 79) diubah menjadi L (ASCII 76).
//   //R (ASCII 82) diubah menjadi O (ASCII 79).
  
// };


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
