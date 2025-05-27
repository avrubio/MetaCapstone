import Button from './Button';

const HeroSection = () => {
  return (
    <>
      <section className="heroSection">
        <div className="heroSection_blurb">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button label="Reserve a table" />
        </div>
        <div>
          {" "}
          <img src="src/assets/HeroImg.jpg" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
