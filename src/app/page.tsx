import Hero from '@/features/hero/hero';
import Services from '@/features/services/services';
import Team from '@/features/team/team';
import Booking from '@/features/booking/booking';
import Reviews from '@/features/reviews/reviews';

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
