'use client';
import { useFormContext } from 'react-hook-form';
import { User, PawPrint, Phone, Stethoscope, Microscope, HeartPulse, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { type BookingState, type BookingFormSchema } from './booking-types';
import { services, vets } from './booking-data';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface ConfirmationStepProps {
    bookingState: BookingState;
    onSubmit: (values: BookingFormSchema) => void;
}

const serviceIcons = {
    preventiva: Stethoscope,
    cirugia: HeartPulse,
    dermatologia: Microscope,
};

export default function ConfirmationStep({ bookingState, onSubmit }: ConfirmationStepProps) {
    const form = useFormContext<BookingFormSchema>();
    const selectedService = services.find(s => s.id === bookingState.service);
    const ServiceIcon = selectedService ? serviceIcons[selectedService.id] : Stethoscope;

    return (
        <div>
            <h3 className="text-2xl font-headline text-center mb-6">3. Confirma tu cita</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                     <h4 className="font-headline text-lg mb-4">Resumen de la cita</h4>
                     <Card>
                        <CardContent className="p-6 space-y-4 text-muted-foreground">
                            {selectedService && <div className="flex items-center"><ServiceIcon className="w-5 h-5 mr-3 text-primary" /> <strong>Servicio:</strong> <span className="ml-auto">{selectedService.name}</span></div>}
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
    )
}
