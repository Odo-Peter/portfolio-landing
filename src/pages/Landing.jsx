import Footer from '../components/Footer';
import LandingHero from '../components/LandingHero';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';

const Landing = () => {
  return (
    <div className="text-gray-800 bg-gray-100 min-h-screen w-full px-6 md:px-20 py-4 max-w-10xl">
      <Navbar />
      <LandingHero />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;
