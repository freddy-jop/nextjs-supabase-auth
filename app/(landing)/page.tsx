import { LandingHero } from "@/components/landing/LandingHero";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import getUserSession from "@/lib/supabase/getUserSession";

export default async function RoutePage() {
  const { data } = await getUserSession();
  return (
    <div className="h-full">
      <LandingNavbar data={data} />
      <LandingHero />
    </div>
  );
}
