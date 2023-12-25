import SparklesCore from "@/components/sparkles-core";
import WaitlistForm from "@/components/waitlist-form";

export default function Home() {
   return (
      <main className="w-screen h-screen overflow-hidden px-10 select-none">
         <div className="z-20 relative w-full h-full flex items-center justify-center flex-col space-y-5">
            <h1 className="text-3xl md:text-5xl max-w-md text-center">
               get your finances together with
               <span className="gradient-text"> pokkit</span>
            </h1>
            <p className="text-center">be the first to know when we launch</p>
            <WaitlistForm />
         </div>
         <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
               id="tsparticlesfullpage"
               background="transparent"
               minSize={0.6}
               maxSize={1.4}
               particleDensity={100}
               className="w-full h-full"
               particleColor="#cac6c6"
            />
         </div>
      </main>
   );
}
