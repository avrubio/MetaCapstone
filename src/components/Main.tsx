import About from './About';
import HeroSection from './HeroSection';
import Highlights from './Highlights/Highlights';
import Testimonials from './Testimonials/Testimonials';

const Main = () => {
  return (
    <>
      <HeroSection />
      <Highlights></Highlights>
      <Testimonials></Testimonials>
      <section>
        <About />
      </section>
    </>
  );
};

export default Main;
