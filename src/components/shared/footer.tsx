import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-secondary/50 font-body">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
                <Logo />
                <span className="font-bold text-xl font-headline">BizkaiaVet</span>
            </Link>
            <p className="text-muted-foreground">Tu clínica veterinaria de confianza en Bizkaia. Cuidamos de los que más quieres.</p>
            <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#"><Facebook className="h-5 w-5" /></Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#"><Instagram className="h-5 w-5" /></Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#"><Twitter className="h-5 w-5" /></Link>
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
                <span>Calle Ficticia 123, 48001 Bilbao, Bizkaia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 shrink-0 text-primary" />
                <a href="tel:+34000000000" className="hover:text-primary">+34 000 000 000</a>
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
                <li><strong>Lunes - Viernes:</strong> 9:00 - 20:00</li>
                <li><strong>Sábados:</strong> 10:00 - 14:00</li>
                <li><strong>Domingos:</strong> Cerrado</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} BizkaiaVet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
