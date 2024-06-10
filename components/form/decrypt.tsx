"use client";
import { messageSchema } from "@/schema/message";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {  decryptMessage } from "@/lib/actions";
import { useState, useTransition } from "react";
import { Loader, Loader2 } from "lucide-react";

export default function DecryptForm() {
 
  const [decryptedMessage, setDecryptedMessage] = useState<MessageResponse | null>(null);
  const [isPending, startTransition] = useTransition();
  
  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      text: "",
      key: 0,
    },
  });



  async function handleDecrypt(values: z.infer<typeof messageSchema>) {
    startTransition(() => {
      decryptMessage(values).then((response) => {
        setDecryptedMessage(response);
     
      });
    });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleDecrypt)} className="space-y-8">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                    Pesan
                </FormLabel>
                <FormControl>
                  <Input placeholder="wleowleowleo" {...field} />
                </FormControl>
                <FormDescription>
                    Masukan pesan yang ingin didekripsi
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="key"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Key</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter key"
                    value={field.value}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                    Masukan key yang diinginkan (0-25)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {isPending ? (
            <Button disabled>
              <Loader2 className="animate-spin" />
              loading
            </Button>
          ) : (
            <>
              <Button type="submit">
                Deskripsi
              </Button>
            </>
          )}
        </form>
      </Form>
      {decryptedMessage && (
        <div className="pt-4">
          {decryptedMessage.success ? (
            <>
              <div className=" bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-emerald-700">
                <div className="flex flex-col">
                  <span className="text-black underline">Hasil</span>
                  <p>{decryptedMessage.text}</p>
                  <p>Key: {decryptedMessage.key}</p>
                </div>
              </div>
            </>
          ) : (
            <div>
              <h2>Error</h2>
              <p>{typeof decryptedMessage.error === 'string' ? decryptedMessage.error : 'Validation error'}</p>
              {decryptedMessage.error && typeof decryptedMessage.error !== 'string' && (
                <div>
                  {decryptedMessage.error.text && <p>Text: {decryptedMessage.error.text.join(', ')}</p>}
                  {decryptedMessage.error.key && <p>Key: {decryptedMessage.error.key.join(', ')}</p>}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}