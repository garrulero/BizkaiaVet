import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { type Review } from "./reviews-data";

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <Card className="flex flex-col justify-between">
            <CardContent className="p-6">
                <div className="flex items-center mb-4">
                {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
                </div>
                <blockquote className="italic text-muted-foreground">"{review.review}"</blockquote>
            </CardContent>
            <div className="p-6 pt-0">
                <p className="font-bold text-foreground">{review.name}</p>
            </div>
        </Card>
    )
}
