"use client";

import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "../ui/button";

export const LandingHero = () => {
  return (
    <div className="py-36 text-center text-white font-bold space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Éditez avec Facilité et Simplicité.</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-400">
          <Typewriter
            words={[
              "Optimiser vos images",
              "Vectoriser",
              "Supprimer le fond",
              "Augmenter la résoluton",
              "Coloriser les images",
              "Agrandissez les photos",
              "Créez des visuels",
              "Optimisez votre temps",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Optimisez et sublimez vos créations notamment grâce à l'IA.
      </div>
      <div>
        <Link href="/dashboard">
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Commencer gratuitement
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        Aucune carte bancaire requise.
      </div>
    </div>
  );
};
