import Header from "@/components/header/Header";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingNavbar } from "@/components/landing/LandingNavbar";

import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <div className="h-full">
      <Header />
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
