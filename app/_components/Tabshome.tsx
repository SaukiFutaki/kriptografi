import DecryptForm from "@/components/form/decrypt";
import EncryptForm from "@/components/form/encrypt";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Tabshome() {
  return (
    <div>
      <Tabs defaultValue="Encrypt" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Encrypt">
            Enkripsi
          </TabsTrigger>
          <TabsTrigger value="decrypt">
            Dekripsi
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Encrypt">
          <Card>
            <CardHeader>
              <CardTitle>
                Enkripsi
              </CardTitle>
              <CardDescription>
                Enkripsi pesan anda disini
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <EncryptForm />
              </div>
              <div></div>
            </CardContent>
    
          </Card>
        </TabsContent>
        <TabsContent value="decrypt">
        <Card>
            <CardHeader>
              <CardTitle>
                Dekripsi
              </CardTitle>
              <CardDescription>
                Dekripsi pesan anda disini
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <DecryptForm />
              </div>
              <div></div>
            </CardContent>
    
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
