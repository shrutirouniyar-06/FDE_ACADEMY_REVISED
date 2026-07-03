import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CareerRoadmaps } from '@/components/sections/CareerRoadmaps';
import { CareerProgression } from '@/components/sections/CareerProgression';
import { SalaryGrowth } from '@/components/sections/SalaryGrowth';

export function CareerRoadmapsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <CareerRoadmaps />
        <CareerProgression />
        <SalaryGrowth />
      </main>
      <Footer />
    </>
  );
}
