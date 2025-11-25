import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { type TeamMember } from "./team-data";

interface TeamCardProps {
    member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
    const memberImage = PlaceHolderImages.find(p => p.id === member.imageUrlId);
    const petImage = PlaceHolderImages.find(p => p.id === member.pet.imageUrlId);
    return (
        <Card key={member.name} className="overflow-hidden">
        <CardHeader className="p-0">
          {memberImage && (
            <Image
              src={memberImage.imageUrl}
              alt={`Foto de ${member.name}`}
              width={500}
              height={500}
              className="object-cover w-full h-80"
              data-ai-hint={memberImage.imageHint}
            />
          )}
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
          <p className="text-primary font-semibold mt-1">{member.role}</p>
        </CardContent>
        <CardFooter className="bg-primary/5 p-6 text-sm">
           <div className="flex items-start space-x-4">
             {petImage && (
                <Image
                  src={petImage.imageUrl}
                  alt={`Foto de ${member.pet.name}`}
                  width={48}
                  height={48}
                  className="rounded-full w-12 h-12 object-cover border-2 border-primary"
                  data-ai-hint={petImage.imageHint}
                />
             )}
             <div className="flex-1">
              <p className="text-muted-foreground">{member.pet.story}</p>
             </div>
           </div>
        </CardFooter>
      </Card>
    )
}
