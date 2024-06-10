import { TableDemo } from "@/components/data/datatable";
// import Demo from "@/components/form/demo";
import { getAllData } from "@/lib/actions/getData";
import Image from "next/image";
import Tabshome from "./_components/Tabshome";
import HomeTabs from "@/components/Home/home";

export default async function Home() {
  return (
    <div className="flex items-center justify-center mt-20">
      <HomeTabs />
    </div>
  );
}
