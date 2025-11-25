'use client';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { addDays } from "date-fns";
import { es } from "date-fns/locale";
import { type BookingState } from './booking-types';
import { vets, timeSlots } from './booking-data';

interface DateTimeStepProps {
    bookingState: BookingState;
    setBookingState: React.Dispatch<React.SetStateAction<BookingState>>;
    onNext: () => void;
}

export default function DateTimeStep({ bookingState, setBookingState, onNext }: DateTimeStepProps) {
    return (
        <div>
            <h3 className="text-2xl font-headline text-center mb-6">2. Elige veterinario, fecha y hora</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="space-y-2">
                        <Label>Veterinario/a</Label>
                        <Select onValueChange={(value) => setBookingState(p => ({...p, vet: value}))} defaultValue={bookingState.vet || undefined}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecciona un profesional" />
                            </SelectTrigger>
                            <SelectContent>
                                {vets.map(vet => <SelectItem key={vet.id} value={vet.id}>{vet.name}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2 mt-4">
                        <Label>Fecha</Label>
                        <Calendar
                            mode="single"
                            selected={bookingState.date || undefined}
                            onSelect={(date) => setBookingState(p => ({...p, date: date || null}))}
                            className="rounded-md border"
                            disabled={(date) => date < new Date() || date < addDays(new Date(), 0)}
                            locale={es}
                        />
                    </div>
                </div>
              <div>
                <div className="space-y-2">
                    <Label>Hora disponible</Label>
                    <div className="grid grid-cols-3 gap-2">
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
                </div>
                 {bookingState.date && bookingState.time && bookingState.vet && (
                    <Button className="w-full mt-8" size="lg" onClick={onNext}>
                        Siguiente
                    </Button>
                 )}
              </div>
            </div>
        </div>
    )
}
