'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button variant="elevated">Click me</Button>
      </div>
      <Input type="email" placeholder="Enter your email" />
      <Textarea placeholder="Enter your message" />
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
