type MessageResponse = 
  | { success: true; text: string; key: number }
  | { success: false; error: { text?: string[]; key?: string[] } }
  | { success: false; error: string };
