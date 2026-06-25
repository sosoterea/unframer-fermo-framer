import { DynamicIsland } from "@/sections/DynamicIsland";
import { SideNav } from "@/sections/SideNav";
import { Hero } from "@/sections/Hero";
import { Now } from "@/sections/Now";
import { Works } from "@/sections/Works";
import { Footer } from "@/sections/Footer";
import { Divider } from "@/components/Divider";

export function Home() {
  return (
    <div className="page">
      <DynamicIsland />
      <SideNav />

      <main className="content">
        <Hero />
        <Divider />
        <Now />
        <Divider />
        <Works />
      </main>

      <Footer />
    </div>
  );
}
