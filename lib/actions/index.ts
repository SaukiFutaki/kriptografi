"use server";


import { prisma } from "./../db/prisma";
import { encrypt,decrypt } from "../caesarchipper";
import { messageSchema } from "@/schema/message";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export const saveMessage = async (values: z.infer<typeof messageSchema>): Promise<MessageResponse> => {
  const validateFields = messageSchema.safeParse(values);

  if (!validateFields.success) {
    return {
      success: false,
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { text, key } = validateFields.data;
  const encryptedText = encrypt(text, key);
  const decryptedText = decrypt(encryptedText, key);

  try {
    await prisma.message.create({
      data: {
        plainText: text,
        encriptedText: encryptedText,
        descriptedText: decryptedText,
        key,
      },
    });
    return {
      success: true,
      text: encryptedText,
      key,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Something went wrong",
    };
  }
};


export const deleteMessage = async (id: number) => {
    await prisma.message.delete({
        where: {
        id,
        },
    });
}