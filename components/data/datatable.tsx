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
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/components/data/csr"), { ssr: false });

export async function TableDemo() {
  const data = await getAllData();

  return (
    <Table>
      <TableCaption>Caesar Chipper Table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">No</TableHead>
          <TableHead>plaintext</TableHead>
          <TableHead>Enkripsi Text</TableHead>
          <TableHead>Deskripsi Text</TableHead>
          <TableHead className="">Key</TableHead>
          <TableHead className="">action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.plainText}</TableCell>
            <TableCell>{row.encriptedText}</TableCell>
            <TableCell>{row.descriptedText}</TableCell>
            <TableCell>{row.key}</TableCell>
            <TableCell>
              <NoSSR id={row.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
