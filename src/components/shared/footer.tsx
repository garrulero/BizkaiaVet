import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.396942784381!2d-2.849969684513369!3d43.34001997913327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4705b3b54495%3A0x8aa1115c9bc605e4!2sCl%C3%ADnica%20veterinaria%20Bizkaia%20Albaitaritza%20klinika!5e0!3m2!1ses!2ses!4v1620308820000";
  const googleMapsLink = "https://www.google.com/maps/place//data=!4m2!3m1!1s0xd4e4705b3b54495:0x8aa1115c9bc605e4?sa=X&ved=1t:8290&hl=es&ictx=111";

  return (
    <footer id="contacto" className="bg-secondary/50 font-body">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
                <Logo />
                <span className="font-bold text-xl font-headline">BizkaiaVet</span>
            </Link>
            <p className="text-muted-foreground">Tu clínica veterinaria de confianza en Bizkaia. Cuidamos de los que más quieres.</p>
            <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.facebook.com/people/Cl%C3%ADnica-veterinaria-Bizkaia/61562019616101/" target="_blank"><Facebook className="h-5 w-5" /></Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.instagram.com/bizkaiavet/" target="_blank"><Instagram className="h-5 w-5" /></Link>
                </Button>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link href="#servicios" className="text-muted-foreground hover:text-primary">Servicios</Link></li>
              <li><Link href="#equipo" className="text-muted-foreground hover:text-primary">Equipo</Link></li>
              <li><Link href="#citas" className="text-muted-foreground hover:text-primary">Citas</Link></li>
              <li><Link href="#reseñas" className="text-muted-foreground hover:text-primary">Reseñas</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Gamiz Bidea, 13, 48100 Mungia, Bizkaia</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 shrink-0 text-primary" />
                <a href="tel:+34946155046" className="hover:text-primary">946 15 50 46</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 shrink-0 text-primary" />
                <a href="mailto:hola@bizkaiavet.com" className="hover:text-primary">hola@bizkaiavet.com</a>
              </li>
            </ul>
          </div>
           <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Horario</h3>
            <ul className="space-y-2 text-muted-foreground">
                <li><strong>Lunes - Viernes:</strong> 9:30 - 19:00</li>
                <li><strong>Sábados:</strong> 10:00 - 13:30</li>
                <li><strong>Domingos:</strong> Cerrado</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <div className="mt-8">
            <iframe
                src={mapUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de BizkaiaVet"
            ></iframe>
          </div>
          <p className="mt-8">&copy; {new Date().getFullYear()} BizkaiaVet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
