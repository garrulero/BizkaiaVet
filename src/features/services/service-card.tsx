import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Service } from "./services-data";
import { TestTube } from "lucide-react";

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const { icon: Icon, title, description } = service;
    return (
        <Card className="flex flex-col text-center items-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
          <CardHeader className="p-0">
            <div className="bg-primary/10 text-primary rounded-full p-4 mb-4 inline-flex">
               <Icon className="w-10 h-10" />
            </div>
            <CardTitle className="font-headline text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
    )
}
