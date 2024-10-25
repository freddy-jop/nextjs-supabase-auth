import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const LandingNavbar = async ({ data }: any) => {
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
        {!data.session && (
          <>
            <Link href="/register" className="gap-2">
              <Button
                size="xl"
                variant="premium"
                className="bg-gradient-to-r from-cyan-500 to-sky-400 text-white rounded-full"
              >
                Register
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="xl"
                variant="ghost"
                className="bg-gradient-to-r from-cyan-500 to-sky-400 text-white rounded-full"
              >
                Login
              </Button>
            </Link>
          </>
        )}
        {data.session && (
          <Link href="/dashboard">
            <Button
              size="xl"
              variant="ghost"
              className="bg-gradient-to-r from-cyan-500 to-sky-400 text-white rounded-full"
            >
              Dashboard
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};
