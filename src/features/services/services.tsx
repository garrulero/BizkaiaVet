import ServiceCard from "./service-card";
import { services } from "./services-data";

const Services = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Servicios Veterinarios en Mungia</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ofrecemos un cuidado integral y personalizado para cada etapa de la vida de tu mascota, desde cachorros hasta geriatría.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
