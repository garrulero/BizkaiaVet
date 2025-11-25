import * as z from "zod";

export const bookingFormSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto."),
  petName: z.string().min(2, "El nombre de la mascota es demasiado corto."),
  phone: z.string().regex(/^\d{9}$/, "El número de teléfono debe tener 9 dígitos."),
});

export type BookingFormSchema = z.infer<typeof bookingFormSchema>;

export type BookingState = {
  step: number;
  service: string | null;
  vet: string | null;
  date: Date | null;
  time: string | null;
};
