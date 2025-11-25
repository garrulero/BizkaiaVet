import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
          Clínica Veterinaria en Mungia: Cuidamos de tu Mascota
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-slate-200 drop-shadow">
          Tu centro veterinario de confianza en Mungialdea. Cuidado integral para perros, gatos y animales exóticos.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="text-lg">
            <Link href="#citas">
              Pedir Cita Online
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="text-lg">
             <Link href="#servicios">
              Nuestros Servicios
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
