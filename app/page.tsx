import { TableDemo } from "@/components/data/datatable";
import Demo from "@/components/form/demo";
import { getAllData } from "@/lib/actions/getData";
import Image from "next/image";

export default async function Home() {
  const data = await getAllData();

  return (
    <div className="">
      <div className="flex flex-row">
        <div className="p-20 border">
          <Demo />
        </div>
        <div className="w-full border">
          <TableDemo />
        </div>
      </div>
    </div>
  );
}
