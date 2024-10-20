import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const LandingNavbar = () => {
  return (
    <nav className="p-8 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative mr-4">
          <Image
            src="/logo_optima_pixel.svg"
            alt="optima pix"
            width={193}
            height={50}
          />
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <Link href="/dashboard">
          <Button
            size="xl"
            variant="ghost"
            className="bg-gradient-to-r from-cyan-500 to-sky-400 text-white rounded-full"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
