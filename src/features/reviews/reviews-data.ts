export interface Review {
    name: string;
    review: string;
    stars: number;
}

export const reviews: Review[] = [
  {
    name: "Raúl Rojo",
    review: "Muy buenos profesionales, personas cercanas y muy preparadas. Mis bichitos tienen segunda casa donde los cuidaran como en ningún otro sitio. Gracias por cuidarlos tan bien.",
    stars: 5,
  },
  {
    name: "Eider E",
    review: "Sitio recomendable al 200%. Ainare ya fue la veterinaria de Lau hace años y ahora que vuelve a estar cerca llevamos a todos nuestros animales. El trato es inmejorable.",
    stars: 5,
  },
  {
    name: "Maite Roncero Corchado",
    review: "La sensibilidad de estas chicas con los animales sencillamente no tiene nombre. Llevé a Dulce después de un pronóstico horrible de insuficiencia renal y el trato fue excepcional.",
    stars: 5,
  },
];
