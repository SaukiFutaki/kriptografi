import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllData } from "@/lib/actions/getData";
import { deleteMessage } from "@/lib/actions/index";
import ButtonDelete from "./csr";

export async function TableDemo() {
  const data = await getAllData();

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>plaintext</TableHead>
          <TableHead>
            Encrypted Text
          </TableHead>
          <TableHead className="text-right">
            Key
          </TableHead>
          <TableHead className="text-right">
            action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.plainText}</TableCell>
            <TableCell>{row.encriptedText}</TableCell>
            <TableCell className="text-right">{row.key}</TableCell>
         
          </TableRow>

        ))}
      </TableBody>
    </Table>
  );
}
