import { Stethoscope, HeartPulse, Microscope, Rabbit, TestTube, Film } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Stethoscope,
    title: "Medicina General y Preventiva",
    description: "Planes de salud, revisiones completas, vacunaciones, desparasitaciones e identificación oficial (microchip).",
  },
  {
    icon: TestTube,
    title: "Diagnóstico y Laboratorio",
    description: "Realizamos analíticas sanguíneas, citologías, coprológicos y otras pruebas laboratoriales para un diagnóstico preciso.",
  },
  {
    icon: HeartPulse,
    title: "Cirugía y Especialidades",
    description: "Ofrecemos cirugía general, medicina interna y dermatología, utilizando técnicas avanzadas para el bienestar de tu mascota.",
  },
  {
    icon: Rabbit,
    title: "Animales Exóticos",
    description: "Atención especializada para aves, reptiles, roedores, hurones y otros animales exóticos. Tu centro de referencia en Mungialdea.",
  }
];
