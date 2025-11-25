import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, HeartPulse, Microscope, Rabbit } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
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

const Services = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Servicios Veterinarios en Mungia</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ofrecemos un cuidado integral y personalizado para cada etapa de la vida de tu mascota, desde cachorros hasta geriatría.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="bg-primary/10 text-primary rounded-full p-4 mb-4 inline-flex">
                   <service.icon className="w-10 h-10" />
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
