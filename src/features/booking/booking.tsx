"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, PawPrint, MessageCircle, Phone } from "lucide-react";
import * as z from "zod";

const bookingSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto."),
  petName: z.string().min(2, "El nombre de la mascota es demasiado corto."),
  reason: z.string().min(10, "Por favor, detalla un poco más el motivo."),
});

type BookingValues = z.infer<typeof bookingSchema>;

export default function Booking() {
  const { toast } = useToast();
  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      petName: "",
      reason: "",
    },
  });

  const onSubmit = (values: BookingValues) => {
    const phoneNumber = "34946155046"; 
    const message = `¡Hola! Me gustaría solicitar una cita.
- Mi nombre: ${values.name}
- Nombre de mi mascota: ${values.petName}
- Motivo de la consulta: ${values.reason}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");

    toast({
        title: "Redirigiendo a WhatsApp",
        description: "Se abrirá una nueva ventana para completar la solicitud de cita.",
    });

    form.reset();
  };

  return (
    <section id="citas" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Pide tu Cita Online</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Rellena tus datos y te redirigiremos a WhatsApp para que puedas enviarnos tu solicitud de cita de forma rápida y sencilla.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tu nombre</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Juan Pérez" {...field} className="pl-9" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="petName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre de tu mascota</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <PawPrint className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Toby" {...field} className="pl-9" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Motivo de la consulta</FormLabel>
                      <FormControl>
                        <div className="relative">
                           <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                           <Textarea placeholder="Ej: Revisión anual, vacunación, parece que no come bien..." {...field} className="pl-9" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" size="lg">
                  Pedir Cita por WhatsApp
                </Button>
              </form>
            </FormProvider>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
