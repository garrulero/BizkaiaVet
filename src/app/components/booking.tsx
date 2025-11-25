"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stethoscope, HeartPulse, Microscope, Calendar as CalendarIcon, Clock, ArrowLeft, Check, User, PawPrint, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { addDays, format } from "date-fns";
import { es } from "date-fns/locale";

const services = [
  { id: "preventiva", name: "Medicina Preventiva", icon: Stethoscope },
  { id: "cirugia", name: "Cirugía General", icon: HeartPulse },
  { id: "dermatologia", name: "Dermatología", icon: Microscope },
];

const vets = [
  { id: "dra_ana", name: "Dra. Ana García" },
  { id: "dr_carlos", name: "Dr. Carlos López" },
  { id: "cualquiera", name: "Cualquier veterinario" },
];

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00"];

const formSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto."),
  petName: z.string().min(2, "El nombre de la mascota es demasiado corto."),
  phone: z.string().regex(/^\d{9}$/, "El número de teléfono debe tener 9 dígitos."),
});

type BookingState = {
  step: number;
  service: string | null;
  vet: string | null;
  date: Date | null;
  time: string | null;
};

export default function Booking() {
  const [bookingState, setBookingState] = useState<BookingState>({
    step: 1,
    service: null,
    vet: null,
    date: null,
    time: null,
  });

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", petName: "", phone: "" },
  });

  const handleSelectService = (serviceId: string) => {
    setBookingState(prev => ({ ...prev, service: serviceId, step: 2 }));
  };

  const handleSelectDateTime = (date: Date, time: string, vet: string) => {
    setBookingState(prev => ({ ...prev, date, time, vet, step: 3 }));
  };
  
  const goBack = () => {
    if (bookingState.step > 1) {
      setBookingState(prev => ({ ...prev, step: prev.step - 1 }));
    }
  };
  
  const resetBooking = () => {
    setBookingState({ step: 1, service: null, vet: null, date: null, time: null });
    form.reset();
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
        title: "Cita solicitada",
        description: "Hemos recibido tu solicitud. En breve recibirás una confirmación por SMS.",
    });
    // Fake processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    resetBooking();
  }

  const selectedService = services.find(s => s.id === bookingState.service);

  const steps = ["Servicio", "Fecha y Hora", "Confirmar"];

  return (
    <section id="citas" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Pide tu Cita Online</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Reserva de forma rápida y sencilla en solo 3 pasos.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <div className="w-full px-4 mb-4">
                    <div className="flex justify-between">
                        {steps.map((step, index) => (
                        <div key={step} className="flex-1 text-center">
                            <div className={`mx-auto w-8 h-8 rounded-full flex items-center justify-center ${bookingState.step > index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                                {bookingState.step > index + 1 ? <Check className="w-5 h-5" /> : index + 1}
                            </div>
                            <p className={`mt-2 text-sm ${bookingState.step >= index + 1 ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>{step}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </CardHeader>
          <CardContent>
            {bookingState.step > 1 && (
              <Button variant="ghost" onClick={goBack} className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver
              </Button>
            )}

            {bookingState.step === 1 && (
              <div>
                <h3 className="text-2xl font-headline text-center mb-6">1. Selecciona un servicio</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {services.map(service => (
                    <Card key={service.id} onClick={() => handleSelectService(service.id)} className="cursor-pointer hover:shadow-md hover:border-primary transition-all">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <service.icon className="w-12 h-12 text-primary mb-4" />
                        <p className="font-semibold text-lg">{service.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {bookingState.step === 2 && (
              <div>
                <h3 className="text-2xl font-headline text-center mb-6">2. Elige veterinario, fecha y hora</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <FormLabel>Veterinario/a</FormLabel>
                        <Select onValueChange={(value) => setBookingState(p => ({...p, vet: value}))} defaultValue={bookingState.vet || undefined}>
                            <SelectTrigger className="w-full mt-2">
                                <SelectValue placeholder="Selecciona un profesional" />
                            </SelectTrigger>
                            <SelectContent>
                                {vets.map(vet => <SelectItem key={vet.id} value={vet.id}>{vet.name}</SelectItem>)}
                            </SelectContent>
                        </Select>

                        <FormLabel className="mt-4 block">Fecha</FormLabel>
                        <Calendar
                            mode="single"
                            selected={bookingState.date || undefined}
                            onSelect={(date) => setBookingState(p => ({...p, date: date || null}))}
                            className="rounded-md border mt-2"
                            disabled={(date) => date < new Date() || date < addDays(new Date(), 0)}
                            locale={es}
                        />
                    </div>
                  <div>
                    <FormLabel>Hora disponible</FormLabel>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {timeSlots.map(time => (
                        <Button
                          key={time}
                          variant={bookingState.time === time ? "default" : "outline"}
                          onClick={() => setBookingState(p => ({...p, time: time}))}
                          disabled={!bookingState.date || !bookingState.vet}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                     {bookingState.date && bookingState.time && bookingState.vet && (
                        <Button className="w-full mt-8" size="lg" onClick={() => handleSelectDateTime(bookingState.date!, bookingState.time!, bookingState.vet!)}>
                            Siguiente
                        </Button>
                     )}
                  </div>
                </div>
              </div>
            )}

            {bookingState.step === 3 && selectedService && (
                <div>
                    <h3 className="text-2xl font-headline text-center mb-6">3. Confirma tu cita</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                             <h4 className="font-headline text-lg mb-4">Resumen de la cita</h4>
                             <Card>
                                <CardContent className="p-6 space-y-4 text-muted-foreground">
                                    <div className="flex items-center"><selectedService.icon className="w-5 h-5 mr-3 text-primary" /> <strong>Servicio:</strong> <span className="ml-auto">{selectedService.name}</span></div>
                                    <div className="flex items-center"><User className="w-5 h-5 mr-3 text-primary" /> <strong>Profesional:</strong> <span className="ml-auto">{vets.find(v => v.id === bookingState.vet)?.name}</span></div>
                                    <div className="flex items-center"><CalendarIcon className="w-5 h-5 mr-3 text-primary" /> <strong>Fecha:</strong> <span className="ml-auto">{bookingState.date && format(bookingState.date, "PPP", { locale: es })}</span></div>
                                    <div className="flex items-center"><Clock className="w-5 h-5 mr-3 text-primary" /> <strong>Hora:</strong> <span className="ml-auto">{bookingState.time}</span></div>
                                </CardContent>
                             </Card>
                        </div>
                        <div>
                            <h4 className="font-headline text-lg mb-4">Tus datos</h4>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tu nombre</FormLabel>
                                        <FormControl>
                                            <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input placeholder="Juan Pérez" {...field} className="pl-9" /></div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                 <FormField control={form.control} name="petName" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nombre de tu mascota</FormLabel>
                                        <FormControl>
                                            <div className="relative"><PawPrint className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input placeholder="Toby" {...field} className="pl-9" /></div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <FormField control={form.control} name="phone" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Teléfono de contacto</FormLabel>
                                        <FormControl>
                                            <div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input type="tel" placeholder="600 000 000" {...field} className="pl-9" /></div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <Button type="submit" className="w-full" size="lg">Confirmar y solicitar cita</Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
