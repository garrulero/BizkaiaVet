"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { bookingFormSchema, type BookingState, type BookingFormSchema } from "./booking-types";
import BookingProgress from "./booking-progress";
import ServiceStep from "./booking-service-step";
import DateTimeStep from "./booking-date-time-step";
import ConfirmationStep from "./booking-confirmation-step";

export default function Booking() {
  const [bookingState, setBookingState] = useState<BookingState>({
    step: 1,
    service: null,
    vet: null,
    date: null,
    time: null,
  });

  const { toast } = useToast();
  const form = useForm<BookingFormSchema>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: { name: "", petName: "", phone: "" },
  });

  const handleSelectService = (serviceId: string) => {
    setBookingState(prev => ({ ...prev, service: serviceId, step: 2 }));
  };

  const handleDateTimeNext = () => {
    setBookingState(prev => ({ ...prev, step: 3 }));
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

  async function onSubmit(values: BookingFormSchema) {
    console.log({ ...values, ...bookingState });
    toast({
        title: "Cita solicitada",
        description: "Hemos recibido tu solicitud. En breve recibirás una confirmación por SMS.",
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    resetBooking();
  }

  const renderStep = () => {
    switch (bookingState.step) {
      case 1:
        return <ServiceStep onSelectService={handleSelectService} />;
      case 2:
        return <DateTimeStep bookingState={bookingState} setBookingState={setBookingState} onNext={handleDateTimeNext} />;
      case 3:
        return <ConfirmationStep bookingState={bookingState} onSubmit={onSubmit} />;
      default:
        return null;
    }
  };

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
                <BookingProgress currentStep={bookingState.step} />
            </CardHeader>
          <CardContent>
            {bookingState.step > 1 && (
              <Button variant="ghost" onClick={goBack} className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver
              </Button>
            )}
             <FormProvider {...form}>
                {renderStep()}
            </FormProvider>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
