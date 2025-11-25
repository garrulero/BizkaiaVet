import TeamCard from "./team-card";
import { teamMembers } from "./team-data";

const Team = () => {
  return (
    <section id="equipo" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Conoce a Nuestro Equipo</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un grupo de profesionales apasionados por los animales, dedicados a su bienestar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
