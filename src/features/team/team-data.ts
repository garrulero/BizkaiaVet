import { Dog, Cat, Bird } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TeamMember {
    name: string;
    role: string;
    imageUrlId: string;
    pet: {
        name: string;
        icon: LucideIcon;
        imageUrlId: string;
        story: string;
    };
}

export const teamMembers: TeamMember[] = [
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
