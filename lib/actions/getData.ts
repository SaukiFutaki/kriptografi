"use server";
import { prisma } from "../db/prisma";

export const getAllData = async () => {
  const data = await prisma.message.findMany();
  return data;
};
