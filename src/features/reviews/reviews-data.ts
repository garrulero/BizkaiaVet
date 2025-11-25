export interface Review {
    name: string;
    review: string;
    stars: number;
}

export const reviews: Review[] = [
  {
    name: "Laura M.",
    review: "Un trato inmejorable tanto para mi perro como para mí. La Dra. Ana es una profesional increíble, se nota que ama su trabajo. ¡Gracias por todo!",
    stars: 5,
  },
  {
    name: "Javier S.",
    review: "Llevé a mi gato y la atención fue rápida y muy eficaz. El equipo me mantuvo informado en todo momento. Totalmente recomendables.",
    stars: 5,
  },
  {
    name: "Elena G.",
    review: "La mejor clínica veterinaria de la zona. Son amables, profesionales y muy claros con los diagnósticos. Se han convertido en nuestros veterinarios de confianza.",
    stars: 5,
  },
];
