// "use server"
// import { messageSchema } from "@/schema/message";
// import { z } from "zod";
// import { revalidatePath } from "next/cache";
// import { prisma } from "@/lib/db/prisma";

// export const caesarEncrypt = (text: string, key: number): string => {
//     return text.replace(/[a-z]/gi, (char) => {
//       const base = char >= 'a' && char <= 'z' ? 97 : 65;
//       return String.fromCharCode(((char.charCodeAt(0) - base + key) % 26) + base);
//     });
//   };
  
//   export const caesarDecrypt = (text: string, key: number): string => {
//     return text.replace(/[a-z]/gi, (char) => {
//       const base = char >= 'a' && char <= 'z' ? 97 : 65;
//       return String.fromCharCode(((char.charCodeAt(0) - base - key + 26) % 26) + base);
//     });
//   };
  
//   // Transposition Cipher functions
//   export const transpositionEncrypt = (text: string, key: number): string => {
//     const numCols = key;
//     const numRows = Math.ceil(text.length / numCols);
//     const grid = Array(numRows).fill('').map((_, i) => text.slice(i * numCols, (i + 1) * numCols));
//     let encryptedText = '';
//     for (let col = 0; col < numCols; col++) {
//       for (let row = 0; row < numRows; row++) {
//         encryptedText += grid[row][col] || '';
//       }
//     }
//     return encryptedText;
//   };
  
//   export const transpositionDecrypt = (text: string, key: number): string => {
//     const numCols = key;
//     const numRows = Math.ceil(text.length / numCols);
//     const numEmptyCells = numCols * numRows - text.length;
//     const grid = Array(numRows).fill('').map(() => Array(numCols).fill(''));
//     let index = 0;
//     for (let col = 0; col < numCols; col++) {
//       for (let row = 0; row < numRows; row++) {
//         if (row === numRows - 1 && col >= numCols - numEmptyCells) continue;
//         grid[row][col] = text[index++] || '';
//       }
//     }
//     return grid.map(row => row.join('')).join('');
//   };
  
//   // Substitution Cipher functions
//   export const substitutionEncrypt = (text: string, key: number): string => {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const shiftedAlphabet = alphabet.slice(key) + alphabet.slice(0, key);
//     return text.toUpperCase().replace(/[A-Z]/g, char => shiftedAlphabet[alphabet.indexOf(char)]);
//   };
  
//   export const substitutionDecrypt = (text: string, key: number): string => {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const shiftedAlphabet = alphabet.slice(key) + alphabet.slice(0, key);
//     return text.toUpperCase().replace(/[A-Z]/g, char => alphabet[shiftedAlphabet.indexOf(char)]);
//   };

// export const encryptMessageDemo = async (
//     values: z.infer<typeof messageSchema>
//   ): Promise<MessageResponse> => {
//     const validateFields = messageSchema.safeParse(values);
  
//     if (!validateFields.success) {
//       return {
//         success: false,
//         error: validateFields.error.flatten().fieldErrors,
//       };
//     }
  
//     const { text, key, cipherType } = validateFields.data;
//     let encryptedText: string;
//     switch (cipherType) {
//       case "caesar":
//         encryptedText = caesarEncrypt(text, key);
//         break;
//       case "transposition":
//         encryptedText = transpositionEncrypt(text, key);
//         break;
//       case "substitution":
//         encryptedText = substitutionEncrypt(text, key);
//         break;
//       default:
//         return {
//           success: false,
//           error: "Invalid cipher type",
//         };
//     }
  
//     try {
//       await prisma.message.create({
//         data: {
//           plainText: text,
//           encriptedText: encryptedText,
//           key,
//         },
//       });
//       revalidatePath("/");
//       return {
//         success: true,
//         text: encryptedText,
//         key,
//       };
//     } catch (error) {
//       console.log(error);
//       return {
//         success: false,
//         error: "Something went wrong",
//       };
//     }
//   };
  
//   export const decryptMessageDemo = async (
//     values: z.infer<typeof messageSchema>
//   ): Promise<MessageResponse> => {
//     const validateFields = messageSchema.safeParse(values);
  
//     if (!validateFields.success) {
//       return {
//         success: false,
//         error: validateFields.error.flatten().fieldErrors,
//       };
//     }
  
//     const { text, key, cipherType } = validateFields.data;
//     let decryptedText: string;
//     switch (cipherType) {
//       case "caesar":
//         decryptedText = caesarDecrypt(text, key);
//         break;
//       case "transposition":
//         decryptedText = transpositionDecrypt(text, key);
//         break;
//       case "substitution":
//         decryptedText = substitutionDecrypt(text, key);
//         break;
//       default:
//         return {
//           success: false,
//           error: "Invalid cipher type",
//         };
//     }
  
//     try {
//       await prisma.message.create({
//         data: {
//           plainText: text,
//           descriptedText: decryptedText,
//           key,
//         },
//       });
//       revalidatePath("/");
//       return {
//         success: true,
//         text: decryptedText,
//         key,
//       };
//     } catch (error) {
//       console.log(error);
//       return {
//         success: false,
//         error: "Something went wrong",
//       };
//     }
//   };

console.log("use server");