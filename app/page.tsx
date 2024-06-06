import { TableDemo } from "@/components/data/datatable";
import Demo from "@/components/form/demo";
import { getAllData } from "@/lib/actions/getData";
import Image from "next/image";
import Tabshome from "./_components/Tabshome";

export default async function Home() {


  return (
   <div className="flex justify-center items-center h-screen ">
      <Tabshome/>
   </div>
  );
}
