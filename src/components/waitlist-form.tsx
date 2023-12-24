"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { JoinWaitlistResponse } from "@/lib/interface";

export default function WaitlistForm() {
   const [email, setEmail] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   async function onSubmit(e: FormEvent) {
      e.preventDefault();
      setIsLoading(true);
      const response = await fetch("/api/waitlist", {
         method: "POST",
         body: JSON.stringify({ email }),
      });
      const responseJSON: JoinWaitlistResponse = await response.json();
      if (!response.ok) toast.error(responseJSON.error);
      else toast.success(responseJSON.message);
      setIsLoading(false);
   }

   return (
      <form
         className="flex flex-col md:flex-row w-full max-w-sm items-center gap-2"
         onSubmit={onSubmit}
      >
         <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            type="email"
            placeholder="john@acme.co"
         />
         <Button disabled={isLoading} className="w-full md:w-max" type="submit">
            {isLoading ? <Loader2 className="animate-spin" /> : "Join waitlist"}
         </Button>
      </form>
   );
}
