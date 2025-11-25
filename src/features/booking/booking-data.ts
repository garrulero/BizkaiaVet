import { Stethoscope, HeartPulse, Microscope } from "lucide-react";

export const services = [
  { id: "preventiva", name: "Medicina Preventiva", icon: Stethoscope },
  { id: "cirugia", name: "Cirugía General", icon: HeartPulse },
  { id: "dermatologia", name: "Dermatología", icon: Microscope },
];

export const vets = [
  { id: "dra_ana", name: "Dra. Ana García" },
  { id: "dr_carlos", name: "Dr. Carlos López" },
  { id: "cualquiera", name: "Cualquier veterinario" },
];

export const timeSlots = ["09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00"];

export const bookingSteps = ["Servicio", "Fecha y Hora", "Confirmar"];
