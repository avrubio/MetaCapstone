import Button from './Button';
import Highlights from './Highlights/Highlights';
import Testimonials from './Testimonials/Testimonials';

const Main = () => {
  return (
    <>
      <main>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          aliquam unde porro fugit, expedita in fuga dolorem nobis qui ut
          numquam at, error nulla accusantium beatae ipsa neque sequi nostrum.
        </p>
        <Button label="Reserve a table" />
      </main>
      <Highlights></Highlights>
      <Testimonials></Testimonials>
    </>
  );
};

export default Main;
