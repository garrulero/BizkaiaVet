'use client';
import { Card, CardContent } from "@/components/ui/card";
import { services } from './booking-data';
import { Stethoscope, HeartPulse, Microscope } from "lucide-react";

interface ServiceStepProps {
    onSelectService: (serviceId: string) => void;
}

const serviceIcons = {
    preventiva: Stethoscope,
    cirugia: HeartPulse,
    dermatologia: Microscope,
};

export default function ServiceStep({ onSelectService }: ServiceStepProps) {
    return (
        <div>
            <h3 className="text-2xl font-headline text-center mb-6">1. Selecciona un servicio</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.map(service => {
                  const Icon = serviceIcons[service.id];
                  return (
                    <Card key={service.id} onClick={() => onSelectService(service.id)} className="cursor-pointer hover:shadow-md hover:border-primary transition-all">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <Icon className="w-12 h-12 text-primary mb-4" />
                        <p className="font-semibold text-lg">{service.name}</p>
                      </CardContent>
                    </Card>
                  )
              })}
            </div>
        </div>
    )
}
