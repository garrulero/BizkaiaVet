import Hero from '@/app/components/hero';
import Services from '@/app/components/services';
import Team from '@/app/components/team';
import Booking from '@/app/components/booking';
import Reviews from '@/app/components/reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Booking />
      <Reviews />
    </>
  );
}
