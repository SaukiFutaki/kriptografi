"use client";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { deleteMessage } from "@/lib/actions";
import { Trash2 } from "lucide-react";
  

interface Props {
  id: number;
}
 

export default function ButtonDelete({ id }: Props) {
    const handleSubmit = async (id: number) => {
        await deleteMessage(id);
      
    };
    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger>
                    <button>
                        <Trash2 />
                    </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        Delete Message
                    </AlertDialogHeader>
                    <AlertDialogDescription>
                        Are you sure you want to delete this message?
                    </AlertDialogDescription>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => handleSubmit(id)}>
                            Delete
                        </AlertDialogAction>
                        <AlertDialogCancel>
                            Cancel
                        </AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
