import { TableDemo } from "@/components/data/datatable";
import Demo from "@/components/form/demo";
import { getAllData } from "@/lib/actions/getData";
import Image from "next/image";
import Tabshome from "./_components/Tabshome";

export default async function Home() {


  return (
    <div>
      <div className="flex justify-center items-center py-20">
        <Tabshome />
      </div>
      <div className="px-20 py-2">
        <TableDemo />
      </div>
    </div>
  );
}
