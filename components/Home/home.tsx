
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tabshome from "@/app/_components/Tabshome";
import { TableData } from "../data/tabledata";
import { TableDemo } from "../data/datatable";

export default function HomeTabs() {
  return (
    <div>
      <Tabs defaultValue="caesarcipher" className="">
        <TabsList>
          <TabsTrigger value="caesarcipher">caesarcipher</TabsTrigger>
          <TabsTrigger value="substitutioncipher">
            substitutioncipher
          </TabsTrigger>
          <TabsTrigger value="transpositioncipher">
            transposition cipher
          </TabsTrigger>
        </TabsList>

        <TabsContent value="caesarcipher">
        <Tabshome />
        <TableDemo />
        </TabsContent>
        <TabsContent value="substitutioncipher">
          Change your substitutioncipher here.
        </TabsContent>
        <TabsContent value="transpositioncipher">
          Change your transpositioncipher here.
        </TabsContent>
      </Tabs>
    </div>
  );
}
