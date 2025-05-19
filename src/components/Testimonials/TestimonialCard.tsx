export type TestimonialProps = {
  rating: string;
  name: string;
  review: string;
  reviwerImg: string;
};

const TestimonialCard = ({
  rating,
  name,
  review,
  reviwerImg,
}: TestimonialProps) => {
  return (
    <>
      <div className="testimonial-card">
        <p>{rating}</p>
        <img src={reviwerImg} alt="" />
        <h3>{name}</h3>
        <p>{review}</p>
      </div>
    </>
  );
};

export default TestimonialCard;
