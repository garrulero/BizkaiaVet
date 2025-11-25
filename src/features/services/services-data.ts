import { Stethoscope, HeartPulse, Microscope, Rabbit } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Stethoscope,
    title: "Medicina Preventiva",
    description: "Planes de salud, revisiones y vacunación (antirrábica obligatoria en Euskadi) para mantener a tu mascota sana y feliz.",
  },
  {
    icon: HeartPulse,
    title: "Cirugía (Laparoscopia)",
    description: "Realizamos cirugía avanzada con laparoscopia: mínima incisión, menos dolor y una recuperación mucho más rápida para tu mascota.",
  },
  {
    icon: Microscope,
    title: "Dermatología y Alergias",
    description: "Diagnóstico y tratamiento de alergias, infecciones y otros problemas de la piel que afectan a tu compañero en el clima de Bizkaia.",
  },
  {
    icon: Rabbit,
    title: "Animales Exóticos",
    description: "Somos tu centro de referencia en Mungialdea para el cuidado de conejos, cobayas, hurones y otras pequeñas mascotas.",
  }
];
