import { Check } from "lucide-react";
import { bookingSteps } from "./booking-data";

interface BookingProgressProps {
    currentStep: number;
}

export default function BookingProgress({ currentStep }: BookingProgressProps) {
    return (
        <div className="w-full px-4 mb-4">
            <div className="flex justify-between">
                {bookingSteps.map((step, index) => (
                <div key={step} className="flex-1 text-center">
                    <div className={`mx-auto w-8 h-8 rounded-full flex items-center justify-center ${currentStep > index ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        {currentStep > index + 1 ? <Check className="w-5 h-5" /> : index + 1}
                    </div>
                    <p className={`mt-2 text-sm ${currentStep >= index + 1 ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>{step}</p>
                </div>
                ))}
            </div>
        </div>
    )
}
