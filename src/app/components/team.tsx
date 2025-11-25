import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dog, Cat, Bird } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Ana García",
    role: "Veterinaria - Cirugía",
    imageUrlId: "vet-ana",
    pet: {
      name: "Toby",
      icon: Dog,
      imageUrlId: "pet-toby",
      story: "Le encanta pasear por la montaña con su golden retriever, Toby.",
    },
  },
  {
    name: "Dr. Carlos López",
    role: "Veterinario - Medicina Interna",
    imageUrlId: "vet-carlos",
    pet: {
      name: "Misu",
      icon: Cat,
      imageUrlId: "pet-misu",
      story: "Comparte su hogar con Misu, un curioso gato siamés.",
    },
  },
  {
    name: "Lucía Fernández",
    role: "Auxiliar Veterinaria",
    imageUrlId: "vet-lucia",
     pet: {
      name: "Kiwi",
      icon: Bird,
      imageUrlId: "pet-kiwi",
      story: "Es una apasionada de las aves y cuida de su inseparable agapornis, Kiwi.",
    },
  },
];

const Team = () => {
  return (
    <section id="equipo" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Conoce a Nuestro Equipo</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un grupo de profesionales apasionados por los animales, dedicados a su bienestar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find(p => p.id === member.imageUrlId);
            const petImage = PlaceHolderImages.find(p => p.id === member.pet.imageUrlId);
            return (
              <Card key={member.name} className="overflow-hidden">
                <CardHeader className="p-0">
                  {memberImage && (
                    <Image
                      src={memberImage.imageUrl}
                      alt={`Foto de ${member.name}`}
                      width={500}
                      height={500}
                      className="object-cover w-full h-80"
                      data-ai-hint={memberImage.imageHint}
                    />
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                  <p className="text-primary font-semibold mt-1">{member.role}</p>
                </CardContent>
                <CardFooter className="bg-primary/5 p-6 text-sm">
                   <div className="flex items-start space-x-4">
                     {petImage && (
                        <Image
                          src={petImage.imageUrl}
                          alt={`Foto de ${member.pet.name}`}
                          width={48}
                          height={48}
                          className="rounded-full w-12 h-12 object-cover border-2 border-primary"
                          data-ai-hint={petImage.imageHint}
                        />
                     )}
                     <div className="flex-1">
                      <p className="text-muted-foreground">{member.pet.story}</p>
                     </div>
                   </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
