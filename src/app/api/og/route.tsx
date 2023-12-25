import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
   //    const jsonParsedRequestBody = await request.json();
   //    console.log(jsonParsedRequestBody);
   return new ImageResponse(
      (
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               background: "white",
               width: "100%",
               height: "100%",
               padding: "50px 200px",
               textAlign: "center",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <h1 style={{ fontSize: 70, fontWeight: "600" }}>pokkit</h1>
            <p
               style={{
                  marginTop: "-20px",
                  fontSize: 40,
                  fontWeight: "lighter",
                  color: "#595959",
               }}
            >
               get your finances together
            </p>
         </div>
      ),
      {
         width: 1200,
         height: 630,
      }
   );
}
