import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button variant="elevated">Click me</Button>
      </div>
      <Input
        placeholder="Enter your email"
      />
      <Textarea
      placeholder="Enter your message"
      />
      <Progress value={50} />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
      </Select>
      <h1 className="text-2xl font-bold">Multitenant Ecommerce</h1>
    </div>
  );
}
