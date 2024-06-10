"use server";

import { prisma } from "./../db/prisma";
import { encrypt, decrypt } from "../caesarchipper";
import { messageSchema } from "@/schema/message";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export const encryptMessage = async (
  values: z.infer<typeof messageSchema>
): Promise<MessageResponse> => {
  const validateFields = messageSchema.safeParse(values);

  if (!validateFields.success) {
    return {
      success: false,
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { text, key } = validateFields.data;
  const encryptedText = encrypt(text, key);

  try {
    await prisma.message.create({
      data: {
        plainText: text,
        encriptedText: encryptedText,
        descriptedText: "-",

        key,
      },
    });
    revalidatePath("/");
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

export const decryptMessage = async (
  values: z.infer<typeof messageSchema>
): Promise<MessageResponse> => {
  const validateFields = messageSchema.safeParse(values);

  if (!validateFields.success) {
    return {
      success: false,
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { text, key } = validateFields.data;
  const decryptedText = decrypt(text, key);

  try {
    // Assuming the text being decrypted is already stored in the database
    await prisma.message.create({
      data: {
        plainText: text,
        descriptedText: decryptedText,
        encriptedText: "-",
        key,
      },
    });
    revalidatePath("/");
    return {
      success: true,
      text: decryptedText,
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
  revalidatePath("/");
};
