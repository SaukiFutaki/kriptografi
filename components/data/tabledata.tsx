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

export async function TableData() {
  const data = await getAllData();

  return (
    <div>
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
    </div>
  );
}
