import { z } from 'zod';

export const messageSchema = z.object({
  text: z.string().min(1, "Message text cannot be empty"),
  key: z.number().min(0).max(25, "Key must be between 0 and 25"),
});
