import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
   process.env.SUPABASE_URL ?? "",
   process.env.SUPABASE_KEY ?? ""
);

export async function POST(request: Request) {
   try {
      const jsonParsedRequestBody = await request.json();
      const email: string = jsonParsedRequestBody.email;

      const { error } = await supabase.from("waitlist").upsert([{ email }]).select();

      if (error) {
         return new Response(
            JSON.stringify({ error: "an error occured when adding mail" }),
            { status: 500 }
         );
      }

      return new Response(
         JSON.stringify({ message: "you have been added to the waitlist :)" })
      );
   } catch (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
   }
}
